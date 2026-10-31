import { useEffect, useMemo, useState } from 'react'
import type { Material, Domain, SimulationTendency, Source } from './types'
import { DOMAIN_LABEL, TIER_LABEL, SENSATION_LABEL } from './types'
import { materials, materialById, sourceById, sources } from './data'
import { axisLabel } from './data/axis-labels'
import { allCompounds as compounds, compoundById } from './data/compounds'
import type { PairingBiblioNote } from './data/biblio-notes-pairing'
import { allLinks as materialCompoundLinks, linksForMaterial, linksForCompound } from './data/links'
import { noteById, categoryById, flavorNotes } from './data/flavors'
import { analyzePairing, validateRatios, defaultShares, type PairingMode } from './engine/pairing'
import { evaluateRoast, evaluateExtraction } from './engine/simulation'
import { caffeineRateConstantPerMin, caffeineExtractionFraction, CAFFEINE_MODEL_TEMP_MIN_C, CAFFEINE_MODEL_TEMP_MAX_C } from './engine/caffeine-model'
import { FlavorWheel } from './components/FlavorWheel'
import { TasteWheel, mergeSensations } from './components/TasteWheel'
import { SensationChart } from './components/SensationChart'

/**
 * 画面遷移（アンマウント）をまたいで選択を保持する state。
 * 初心者用での実機FB「選択は戻っても保持」を反映したもの。
 * 保持はメモリ内のみで、永続保存（localStorage等）はしない。
 */
const memoryStore = new Map<string, unknown>()
export function usePersistentState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => (memoryStore.has(key) ? (memoryStore.get(key) as T) : initial))
  const set = (v: T | ((prev: T) => T)) => {
    setValue((prev) => {
      const next = typeof v === 'function' ? (v as (p: T) => T)(prev) : v
      memoryStore.set(key, next)
      return next
    })
  }
  return [value, set] as const
}

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash || '#/pairing')
  useEffect(() => {
    const on = () => { setHash(window.location.hash || '#/pairing'); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return hash.replace(/^#\//, '').split('/')
}

/** ルーティングに使う location.hash と競合しないページ内ジャンプ（ボタン＋scrollIntoView） */
export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/** 画面見出し：通し番号風の英字キッカーを添える */
function SectionHead({ no, en, title }: { no: string; en: string; title: string }) {
  return (
    <h2><span className="h2-kicker" aria-hidden="true">{no} — {en}</span>{title}</h2>
  )
}

/** ホイールを「図」として見せる枠（枠線つきパネル＋図キャプション） */
function WheelFigure({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <figure className="wheel-figure">
      {children}
      <figcaption className="wheel-caption">{caption}</figcaption>
    </figure>
  )
}

export function TierBadge({ tier }: { tier: string }) {
  return <span className={`badge tier-${tier}`}>{TIER_LABEL[tier as keyof typeof TIER_LABEL] ?? tier}</span>
}

export function SourceLinks({ ids }: { ids: string[] }) {
  if (ids.length === 0) return null
  return (
    <p className="source-links">出典：
      {ids.map((id) => {
        const s = sourceById(id)
        return s ? <a key={id} href={s.url} target="_blank" rel="noreferrer">{s.authors.split(',')[0]} {s.year}</a> : <span key={id}>{id}</span>
      }).reduce<React.ReactNode[]>((acc, el, i) => (i === 0 ? [el] : [...acc, '、', el]), [])}
    </p>
  )
}

export default function App() {
  const route = useHashRoute()
  const [page, param] = route
  return (
    <div className="app">
      <header className="app-header">
        <div className="brand">
          <p className="brand-kicker" aria-hidden="true">FLAVOR PAIRING LAB — RESEARCH EDITION</p>
          <h1>科学ペアリング研究ラボ</h1>
        </div>
        <nav className="main-nav" aria-label="主要画面">
          <a href="#/pairing" className={page === 'pairing' ? 'active' : ''}>ペアリング</a>
          <a href="#/search" className={page === 'search' || page === 'material' ? 'active' : ''}>素材検索</a>
          <a href="#/chemistry" className={page === 'chemistry' || page === 'compound' ? 'active' : ''}>香味化学</a>
          <a href="#/library" className={page === 'library' ? 'active' : ''}>文献・用語辞典</a>
        </nav>
      </header>
      <main>
        {page === 'pairing' && <PairingView />}
        {page === 'search' && <SearchView />}
        {page === 'material' && param && <MaterialDetail id={param} />}
        {page === 'chemistry' && <ChemistryView />}
        {page === 'compound' && param && <CompoundDetail id={param} />}
        {page === 'library' && <LibraryView />}
      </main>
      <footer className="app-footer">
        <p>科学的主張は出典へ追跡できます。化合物の検出と香味への寄与は区別して表示しています。健康効果を保証するものではありません。</p>
      </footer>
    </div>
  )
}

/* ============ ペアリング ============ */
/**
 * 素材スロットのピッカー：名前入力で候補を絞り（datalist）、
 * 確定（blur／Enter）時に名前が完全一致する素材へ切り替える。
 * 一致しない入力は元の素材名に戻し、その旨を小さく注記する。
 */
function MaterialPicker({ index, valueId, selectedIds, onPick }: {
  index: number
  valueId: string
  selectedIds: string[]
  onPick: (id: string) => void
}) {
  const current = materialById(valueId)
  const [text, setText] = useState(current?.nameJa ?? '')
  const [note, setNote] = useState<string | null>(null)
  // スロットの値が外から（追加・削除等で）変わったら表示名を同期する
  useEffect(() => { setText(materialById(valueId)?.nameJa ?? '') }, [valueId])
  const candidates = materials.filter((m) => m.id === valueId || !selectedIds.includes(m.id))
  const commit = () => {
    const t = text.trim()
    if (t === (current?.nameJa ?? '')) { setNote(null); return }
    const hit = materials.find((m) => m.nameJa === t)
    if (hit && !selectedIds.includes(hit.id)) {
      onPick(hit.id)
      setNote(null)
    } else {
      setText(current?.nameJa ?? '')
      setNote(hit ? `「${t}」はすでに他のスロットで選択されています。` : `「${t}」に一致する素材はありませんでした。`)
    }
  }
  const listId = `slot-materials-${index}`
  return (
    <span className="slot-picker">
      <input
        type="text" list={listId} value={text} aria-label={`素材${index + 1}の選択`}
        placeholder="素材名を入力"
        onChange={(e) => { setText(e.target.value); setNote(null) }}
        onBlur={commit}
        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); commit(); (e.target as HTMLInputElement).blur() } }}
      />
      <datalist id={listId}>
        {candidates.map((m) => <option key={m.id} value={m.nameJa} label={`${DOMAIN_LABEL[m.domain]}：${m.nameJa}`} />)}
      </datalist>
      {note && <span className="slot-note" role="note">{note}</span>}
    </span>
  )
}

function PairingView() {
  const [selectedIds, setSelectedIds] = usePersistentState<string[]>('pairing:selectedIds', ['choco-dark-roasted', 'tea-sencha'])
  const [mode, setMode] = usePersistentState<PairingMode>('pairing:mode', 'harmony')
  const [ratios, setRatios] = usePersistentState<Record<string, number>>('pairing:ratios', {})
  const [noteId, setNoteId] = useState<string | null>(null)
  const [wheelMode, setWheelMode] = useState<'aroma' | 'taste'>('aroma')
  const [ratioNotice, setRatioNotice] = useState<string | null>(null)

  const selected = selectedIds.map((id) => materialById(id)).filter((m): m is Material => !!m)
  const analysis = useMemo(() => (selected.length >= 2 ? analyzePairing(selected) : null), [selectedIds.join(',')])
  // 実効比率：未編集の素材は均等配分（合計100になる配分）。常に実効値で検証し、合計も常時表示する
  // （監査 J1：素材追加直後の 33/33/33=99% が警告も合計表示もなく見逃された問題への対策）
  const effectiveRatios = useMemo(() => {
    const shares = defaultShares(selectedIds.length)
    return Object.fromEntries(selectedIds.map((id, i) => [id, ratios[id] ?? shares[i] ?? 0]))
  }, [ratios, selectedIds])
  const ratioTotal = selectedIds.reduce((acc, id) => acc + (effectiveRatios[id] ?? 0), 0)
  const ratioError = useMemo(() => validateRatios(effectiveRatios, selectedIds), [effectiveRatios, selectedIds])

  // スロット式：各スロットのピッカーで素材を即座に切り替える（スクロール不要）
  const setSlot = (index: number, id: string) => {
    setSelectedIds((prev) => prev.map((x, i) => (i === index ? id : x)))
  }
  // 比率を均等に再配分して合計100にする（追加・削除時と「均等に戻す」操作で使う）
  const equalizeRatios = (ids: string[], announce: boolean) => {
    const shares = defaultShares(ids.length)
    setRatios(Object.fromEntries(ids.map((id, i) => [id, shares[i] ?? 0])))
    if (announce) setRatioNotice('比率を均等に再配分しました（合計100%）。')
  }
  const addSlot = () => {
    if (selectedIds.length >= 4) return
    const next = materials.find((m) => !selectedIds.includes(m.id))
    if (!next) return
    const ids = [...selectedIds, next.id]
    setSelectedIds(ids)
    equalizeRatios(ids, false)
    setRatioNotice('素材の追加に合わせて、比率を均等に再配分しました（合計100%）。')
  }
  const removeSlot = (index: number) => {
    if (selectedIds.length <= 2) return
    const ids = selectedIds.filter((_, i) => i !== index)
    setSelectedIds(ids)
    equalizeRatios(ids, false)
    setRatioNotice('素材の削除に合わせて、比率を均等に再配分しました（合計100%）。')
  }

  // 「ミルクを加える」：乳製品ドメインの牛乳を専用ボタンで追加する（生クリームはピッカーから通常選択）。
  // 追加時は他の追加・削除と同じく比率を均等に再配分して合計100にする。
  const MILK_ID = 'milk-cow'
  const milkAdded = selectedIds.includes(MILK_ID)
  const slotsFull = selectedIds.length >= 4
  const addMilk = () => {
    if (milkAdded || slotsFull) return
    const ids = [...selectedIds, MILK_ID]
    setSelectedIds(ids)
    equalizeRatios(ids, false)
    setRatioNotice('ミルク（牛乳）の追加に合わせて、比率を均等に再配分しました（合計100%）。')
  }

  const mergedProfile = useMemo(() => {
    const map = new Map<string, { intensity: string; tier: string }>()
    const order = { weak: 1, moderate: 2, strong: 3, unknown: 0 } as const
    for (const m of selected) for (const e of m.profile) {
      const cur = map.get(e.noteId)
      if (!cur || order[e.intensity] > order[cur.intensity as keyof typeof order]) map.set(e.noteId, { intensity: e.intensity, tier: e.tier })
    }
    return [...map.entries()].map(([nId, v]) => ({ noteId: nId, intensity: v.intensity as never, tier: v.tier as never, sourceIds: [] as string[] }))
  }, [selectedIds.join(',')])

  const noteCompounds = noteId ? compounds.filter((c) => c.noteIds.includes(noteId)) : []

  // お茶×チョコの2素材では、素材別の表示はチョコレート→お茶の順を基本配置にする（§14.3）
  const orderedUniqueNotes = useMemo(() => {
    if (!analysis) return []
    const list = [...analysis.uniqueNotes]
    if (selected.length === 2) {
      const domains = selected.map((m) => m.domain)
      if (domains.includes('tea') && domains.includes('chocolate')) {
        list.sort((a, b) => {
          const da = materialById(a.materialId)?.domain === 'chocolate' ? 0 : 1
          const db = materialById(b.materialId)?.domain === 'chocolate' ? 0 : 1
          return da - db
        })
      }
    }
    return list
  }, [analysis, selectedIds.join(',')])

  return (
    <section>
      <SectionHead no="01" en="PAIRING" title="ペアリング（2〜4素材）" />
      <div className="pair-controls">
        <div className="slot-list">
          {selectedIds.map((id, i) => {
            const m = materialById(id)
            return (
              <div key={i} className="slot-row">
                <label className="slot-label">素材{i + 1}
                  <MaterialPicker index={i} valueId={id} selectedIds={selectedIds} onPick={(newId) => setSlot(i, newId)} />
                </label>
                <label className="slot-ratio">
                  <input type="number" min={0} max={100} aria-label={`${m?.nameJa ?? ''}の比率（%）`}
                    value={effectiveRatios[id] ?? 0}
                    onChange={(e) => { setRatios((r) => ({ ...r, [id]: Number(e.target.value) })); setRatioNotice(null) }} />%
                </label>
                {selectedIds.length > 2
                  ? <button type="button" className="slot-remove" aria-label={`素材${i + 1}を外す`} onClick={() => removeSlot(i)}>外す</button>
                  : <span className="slot-remove-spacer" />}
              </div>
            )
          })}
        </div>
        <div className="pair-controls-foot">
          {selectedIds.length < 4 && <button type="button" className="slot-add" onClick={addSlot}>＋ 素材を追加（最大4）</button>}
          <button type="button" className="milk-add" onClick={addMilk} disabled={milkAdded || slotsFull}>＋ ミルクを加える</button>
          {milkAdded
            ? <span className="muted">ミルクは追加済みです</span>
            : slotsFull
              ? <span className="muted">素材が4つあるため追加できません（どれか外すと追加できます）</span>
              : null}
          <button type="button" className="ratio-equalize" onClick={() => equalizeRatios(selectedIds, true)}>均等に戻す</button>
          <span className="muted">比率＝混合（ブレンド）時の質量比（合計100%）。混ぜずに口中で合わせる食べ合わせには適用しません</span>
          <span className={ratioTotal === 100 ? 'muted' : 'warning'} aria-live="polite">現在の合計 {ratioTotal}%</span>
          <div className="mode-tabs" role="tablist" aria-label="分析モード">
            {([['harmony', '調和'], ['contrast', '対比'], ['complement', '補完']] as [PairingMode, string][]).map(([mm, label]) => (
              <button key={mm} role="tab" aria-selected={mode === mm} className={mode === mm ? 'tab active' : 'tab'} onClick={() => setMode(mm)}>{label}</button>
            ))}
          </div>
        </div>
        <p className="muted mode-note">モードは、共通点（調和）／相違点（対比）／補完関係（補完）のどれを先に示すかが変わります。ホイール・味覚の関係・相互作用は共通の分析です。</p>
        {ratioNotice && <p className="ratio-notice" aria-live="polite">{ratioNotice}</p>}
        {ratioError && <p className="warning" role="alert">{ratioError}</p>}
      </div>

      {analysis && (
        <div className="analysis">
          {ratioTotal !== 100 && (
            <p className="warning" role="alert">配合比率の合計が100%ではありません（現在 {ratioTotal}%）。ホイールと分析は組み合わせの知見の統合表示で、比率は配合計画の目安として扱っています。</p>
          )}
          <p className="analysis-caption">この分析は官能評価の結果ではありません。第1層（素材・成分の知見）に基づく探索的な見立てです。
            <details className="notice-details"><summary>前提と限界の詳細</summary><p>{analysis.inferenceNotice}</p></details>
          </p>
          <div className="summary-strip" role="navigation" aria-label="分析の要点">
            <span className="summary-strip-label">要点</span>
            <button type="button" className="strip-item" onClick={() => scrollToId('pair-mode')}>共通ノート {analysis.sharedNotes.length}件</button>
            <button type="button" className="strip-item" onClick={() => scrollToId('pair-compounds')}>共通化合物 {analysis.sharedCompounds.length}件</button>
            <button type="button" className="strip-item" onClick={() => scrollToId('pair-interactions')}>相互作用 {analysis.interactions.length}件・{analysis.interactions.some((i) => i.directStudy) ? '直接研究あり' : '直接研究は未確認'}</button>
            <button type="button" className="strip-item" onClick={() => scrollToId('pair-sensations')}>味覚・口腔感覚の関係 {analysis.sensationRelations.length}件</button>
          </div>
          <div className="analysis-cols">
            <div>
              <h3>組み合わせのホイール</h3>
              <div className="mode-tabs" role="tablist" aria-label="ホイールの表示モード">
                {([['aroma', '香り'], ['taste', '味わい']] as const).map(([wm, label]) => (
                  <button key={wm} role="tab" aria-selected={wheelMode === wm} className={wheelMode === wm ? 'tab active' : 'tab'} onClick={() => setWheelMode(wm)}>{label}</button>
                ))}
              </div>
              {wheelMode === 'taste' ? (
                <>
                  {(() => { const mg = mergeSensations(selected); return (
                    <WheelFigure caption="図．味わいホイール（味覚・口腔感覚のみ）。各素材の知見を表示用に重ねたもので、混合物そのものの実測ではありません。香りは含みません。">
                      <TasteWheel sensations={mg.sensations} contributors={mg.contributors} />
                    </WheelFigure>
                  ) })()}
                  <p className="muted">各素材の味覚・口腔感覚の知見を表示用に重ねたものです。混合物そのものの実測ではありません。相互作用による変化は「味覚・口腔感覚の関係」と下層の分析を参照してください。</p>
                </>
              ) : (
              <>
              <WheelFigure caption="図．組み合わせの香りホイール（香りのみ）。外側の輪は、選択中の素材で報告された化合物（濃い＝寄与の根拠あり／薄い＝組成・検出のみ）。味覚・口腔感覚は含みません。">
                <FlavorWheel entries={mergedProfile} onSelectNote={setNoteId} selectedNoteId={noteId}
                  compoundMaterialIds={selectedIds} onSelectCompound={(id) => { window.location.hash = `#/compound/${id}` }} />
              </WheelFigure>
              {noteId && (
                <div className="note-detail">
                  <h4>{categoryById(noteById(noteId)?.categoryId ?? '')?.name}：{noteById(noteId)?.name}</h4>
                  <p>{noteById(noteId)?.example}</p>
                  {noteCompounds.length > 0 ? (
                    <ul>{noteCompounds.map((c) => (
                      <li key={c.id}><a href={`#/compound/${c.id}`}>{c.nameJa}</a>：{c.sensoryKnowledge}</li>
                    ))}</ul>
                  ) : <p className="muted">この香りに直接関連づけられた化合物は未収録です。</p>}
                  <button type="button" onClick={() => setNoteId(null)}>選択を保持したまま閉じる</button>
                </div>
              )}
              </>
              )}
            </div>
            <div>
              <div id="pair-mode" className="anchor-block">
              {(mode === 'harmony') && (
                <>
                  <h3>共通していること（調和の手がかり）</h3>
                  {analysis.sharedNotes.length ? (
                    <ul>{analysis.sharedNotes.map((n) => <li key={n.noteId}>{n.noteName}（{n.materialIds.map((id) => materialById(id)?.nameJa).join('・')}）</li>)}</ul>
                  ) : <p className="muted">共通する香りノートは確認できませんでした。</p>}
                </>
              )}
              {(mode === 'contrast') && (
                <>
                  <h3>異なっていること（対比）</h3>
                  {orderedUniqueNotes.map((u) => (
                    <p key={u.materialId}><strong>{materialById(u.materialId)?.nameJa}</strong>：{u.noteIds.length ? u.noteIds.map((id) => noteById(id)?.name).join('、') : '固有の香りノートは未確認'}</p>
                  ))}
                </>
              )}
              </div>
              <h3 id="pair-sensations" className="anchor-h">味覚・口腔感覚の関係</h3>
              {analysis.sensationRelations.length ? (
                <ul>{analysis.sensationRelations.map((r) => <li key={r.key + r.pattern}>{r.text}</li>)}</ul>
              ) : <p className="muted">比較できる味覚データが不足しています。</p>}
              <h3 id="pair-compounds" className="anchor-h">共通する化合物（参考）</h3>
              {analysis.sharedCompounds.length ? (
                <>
                  <ul>{analysis.sharedCompounds.map((c) => (
                    <li key={c.compoundId}><a href={`#/compound/${c.compoundId}`}>{c.compoundName}</a></li>
                  ))}</ul>
                  <p className="scope-note footnote">※ {analysis.sharedCompounds[0].caution}</p>
                </>
              ) : <p className="muted">両素材で確認された共通化合物は未収録です。</p>}
              <h3 id="pair-interactions" className="anchor-h">組み合わせによる知覚変化（相互作用）</h3>
              {!analysis.interactions.some((i) => i.directStudy) && (
                <p className="direct-absence">この組み合わせ自体を対象にした直接研究は未確認です。以下は一般的知見・推測による構成です。</p>
              )}
              {analysis.interactions.length ? (
                <ul className="interaction-list">{analysis.interactions.map((i) => (
                  <li key={i.ruleId}>
                    <TierBadge tier={i.level === 'general' ? 'general' : 'inferred'} />
                    {i.directStudy && <span className="badge direct">直接研究あり</span>}
                    <p>{i.text}</p>
                    <SourceLinks ids={i.sourceIds} />
                  </li>
                ))}</ul>
              ) : <p className="muted">この組み合わせで提示できる相互作用の知見は未収録です。</p>}
            </div>
          </div>
        </div>
      )}
      {selected.length < 2 && <p className="muted">素材を2つ以上選んでください。</p>}
    </section>
  )
}

/* ============ 素材検索（三軸） ============ */
function SearchView() {
  const [domain, setDomain] = usePersistentState<Domain>('search:domain', 'tea')
  const [cls, setCls] = usePersistentState('search:cls', '')
  const [org, setOrg] = usePersistentState('search:org', '')
  const [variety, setVariety] = usePersistentState('search:variety', '')
  const [nameQuery, setNameQuery] = usePersistentState('search:name', '')

  const candidates = (key: 'classificationId' | 'originId' | 'varietyId') => {
    const pool = materials.filter((m) => m.domain === domain
      && (key === 'classificationId' || !cls || m.classificationId === cls)
      && (key === 'originId' || !org || m.originId === org)
      && (key === 'varietyId' || !variety || m.varietyId === variety))
    const ids = [...new Set(pool.map((m) => m[key]))]
    return ids.map((id) => ({ id, label: axisLabel(key, id) }))
  }
  const nq = nameQuery.trim().toLowerCase()
  const results = materials.filter((m) => m.domain === domain
    && (!cls || m.classificationId === cls) && (!org || m.originId === org) && (!variety || m.varietyId === variety)
    && (!nq || `${m.nameJa} ${m.nameEn} ${m.scientificName ?? ''}`.toLowerCase().includes(nq)))

  // 初心者用での指摘「選択を変えても表示が変わらない／ずれる」への対策：
  // 他軸の変更で候補から外れた選択値は自動でリセットし、表示と状態のずれを防ぐ。
  // 選べない選択肢はグレーアウトではなく候補から隠す方式で統一している。
  useEffect(() => {
    if (cls && !candidates('classificationId').some((o) => o.id === cls)) setCls('')
    if (org && !candidates('originId').some((o) => o.id === org)) setOrg('')
    if (variety && !candidates('varietyId').some((o) => o.id === variety)) setVariety('')
  }, [cls, org, variety, domain])

  const resetAxis = () => { setCls(''); setOrg(''); setVariety(''); setNameQuery('') }

  return (
    <section>
      <SectionHead no="02" en="SEARCH" title="素材検索（三軸：分類 × 産地 × 品種・系統）" />
      <div className="domain-tabs" role="tablist" aria-label="領域">
        {(['tea', 'chocolate', 'spice', 'herb', 'dairy'] as Domain[]).map((d) => (
          <button key={d} role="tab" aria-selected={domain === d} className={domain === d ? 'tab active' : 'tab'}
            onClick={() => { setDomain(d); resetAxis() }}>{DOMAIN_LABEL[d]}</button>
        ))}
      </div>
      <div className="axis-selects">
        <label>分類
          <select value={cls} onChange={(e) => setCls(e.target.value)} aria-label="分類">
            <option value="">指定しない</option>
            {candidates('classificationId').map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
          </select>
        </label>
        <label>産地
          <select value={org} onChange={(e) => setOrg(e.target.value)} aria-label="産地">
            <option value="">指定しない</option>
            {candidates('originId').map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
          </select>
        </label>
        <label>{domain === 'tea' || domain === 'dairy' ? '品種' : domain === 'chocolate' ? '系統・種類区分' : '植物種・品種等'}
          <select value={variety} onChange={(e) => setVariety(e.target.value)} aria-label="品種・系統">
            <option value="">指定しない</option>
            {candidates('varietyId').map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
          </select>
        </label>
        <label>素材名
          <input type="search" value={nameQuery} onChange={(e) => setNameQuery(e.target.value)} aria-label="素材名で絞り込む" placeholder="例：山椒" />
        </label>
        <button type="button" onClick={resetAxis}>絞り込みを解除</button>
      </div>
      <p className="axis-note muted">選択肢は、他の条件と組み合わせて存在するものだけが表示されます。</p>
      <div className="search-meta">
        <span className="muted">{results.length}件</span>
        <details className="notice-details">
          <summary>選択できる組み合わせについて</summary>
          <p>選択できる組み合わせは「分類上成立する組み合わせ」であり、その組み合わせ自体の実測データが存在することとは異なります。各素材の根拠区分を確認してください。</p>
        </details>
      </div>
      <ul className="material-list">
        {results.map((m) => (
          <li key={m.id} className="material-card">
            <a href={`#/material/${m.id}`}><strong>{m.nameJa}</strong></a>
            <span className="material-meta">{m.classification}｜{m.origin}｜{m.variety}</span>
            <TierBadge tier={m.evidenceTier} />
            <p>{m.description}</p>
          </li>
        ))}
      </ul>
      {results.length === 0 && <p>該当する素材は収録されていません。分類を解除して探してください。</p>}
    </section>
  )
}

/* ============ 素材詳細 ============ */
function MaterialDetail({ id }: { id: string }) {
  const m = materialById(id)
  const [noteId, setNoteId] = useState<string | null>(null)
  const [wheelMode, setWheelMode] = useState<'aroma' | 'taste'>('aroma')
  if (!m) return <p>素材が見つかりません。</p>
  const links = linksForMaterial(m.id)
  return (
    <section>
      <p><a href="#/search">← 素材検索へ</a></p>
      <h2><span className="h2-kicker" aria-hidden="true">MATERIAL FILE — 素材詳細</span>{m.nameJa} <span className="en-name">{m.nameEn}</span></h2>
      <dl className="spec-table">
        {m.scientificName && <div className="spec-cell"><dt>学名</dt><dd><em>{m.scientificName}</em></dd></div>}
        <div className="spec-cell"><dt>分類</dt><dd>{m.classification}</dd></div>
        <div className="spec-cell"><dt>産地</dt><dd>{m.origin}</dd></div>
        <div className="spec-cell"><dt>品種・系統</dt><dd>{m.variety}</dd></div>
        {m.usedPart && <div className="spec-cell"><dt>使用部位</dt><dd>{m.usedPart}</dd></div>}
        {m.processing && <div className="spec-cell"><dt>加工</dt><dd>{m.processing}</dd></div>}
        {m.cacaoPercent && <div className="spec-cell"><dt>カカオ分</dt><dd>{m.cacaoPercent}%</dd></div>}
      </dl>
      <TierBadge tier={m.evidenceTier} />
      <nav className="jump-chips" aria-label="このページのセクション">
        {([['mat-wheel', 'ホイール'], ['mat-sensations', '味覚・口腔感覚'], ['mat-compounds', '化合物'], ['mat-simulation', 'シミュレーション'], ['mat-sources', '出典']] as const).map(([target, label]) => (
          <button key={target} type="button" className="jump-chip" onClick={() => scrollToId(target)}>{label}</button>
        ))}
      </nav>
      {/* 初心者用での実機FB反映：説明文より先にホイールをタイトル直下へ */}
      <div id="mat-wheel" className="anchor-block">
      <h3>ホイール（香り／味わい）</h3>
      <div className="mode-tabs" role="tablist" aria-label="ホイールの表示モード">
        {([['aroma', '香り'], ['taste', '味わい']] as const).map(([wm, label]) => (
          <button key={wm} role="tab" aria-selected={wheelMode === wm} className={wheelMode === wm ? 'tab active' : 'tab'} onClick={() => setWheelMode(wm)}>{label}</button>
        ))}
      </div>
      {wheelMode === 'taste' ? (
        <>
          <WheelFigure caption="図．味わいホイール（味覚・口腔感覚のみ）。香りは含みません。出典つきの詳細は下の「味覚・口腔感覚」も参照してください。">
            <TasteWheel sensations={m.sensations} />
          </WheelFigure>
          <p className="muted">味覚・口腔感覚だけのホイールです（香りとは混ぜていません）。出典つきの詳細は下の「味覚・口腔感覚」も参照してください。</p>
        </>
      ) : (
      <>
      <WheelFigure caption="図．香りホイール（香りのみ）。外側の輪は、この素材で報告された化合物（濃い＝寄与の根拠あり／薄い＝組成・検出のみ）。味覚・口腔感覚は含みません。">
        <FlavorWheel entries={m.profile} onSelectNote={setNoteId} selectedNoteId={noteId}
          compoundMaterialIds={[m.id]} onSelectCompound={(id) => { window.location.hash = `#/compound/${id}` }} />
      </WheelFigure>
      {noteId && (
        <div className="note-detail">
          <h4>{categoryById(noteById(noteId)?.categoryId ?? '')?.name}：{noteById(noteId)?.name}</h4>
          <p>{noteById(noteId)?.example}</p>
          {/* この素材で実際に報告された化合物だけに絞る（監査 J3：他素材文脈の化合物が混ざって紛らわしい問題への対策） */}
          {(() => {
            const scoped = compounds.filter((c) => c.noteIds.includes(noteId) && links.some((l) => l.compoundId === c.id))
            return scoped.length ? (
              <>
                <p className="muted">{m.nameJa}で報告された関連化合物：</p>
                <ul>
                  {scoped.map((c) => (
                    <li key={c.id}><a href={`#/compound/${c.id}`}>{c.nameJa}</a>：{c.sensoryKnowledge}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="muted">{m.nameJa}でこの香りに関連づけて報告された化合物は未収録です。この香りに関連する化合物（全素材）は<a href="#/chemistry">香味化学</a>で確認できます。</p>
            )
          })()}
          <button type="button" onClick={() => setNoteId(null)}>選択を保持したまま閉じる</button>
        </div>
      )}
      </>
      )}
      </div>
      <p>{m.description}</p>
      <p className="scope-note">{m.scopeNote}</p>
      {m.safetyNote && <p className="warning" role="note">安全性：{m.safetyNote}</p>}
      <div id="mat-sensations" className="anchor-block">
      <h3>味覚・口腔感覚</h3>
      <SensationChart material={m} />
      </div>
      <div id="mat-compounds" className="anchor-block">
      <h3>関連する化合物</h3>
      {links.length ? (
        <ul>{links.map((l) => {
          const c = compoundById(l.compoundId)
          return (
            <li key={l.compoundId + l.kind}>
              <a href={`#/compound/${l.compoundId}`}>{c?.nameJa}</a>
              <span className="badge">{l.kind === 'contribution' ? '寄与の根拠あり' : l.kind === 'composition' ? '組成' : '検出'}</span>
              <TierBadge tier={l.tier} />
              {l.conditions && <span className="muted"> {l.conditions}</span>}
            </li>
          )
        })}</ul>
      ) : <p className="muted">この素材と化合物の関連は未収録です（未報告であり「含まれない」という意味ではありません）。</p>}
      </div>
      <div id="mat-simulation" className="anchor-block">
        <SimulationPanel key={m.id} material={m} />
      </div>
      <div id="mat-sources" className="anchor-block">
      <h3>出典</h3>
      <SourceList ids={m.sourceIds} />
      </div>
      <p className="detail-foot-nav">
        <a href="#/search">← 素材検索へ</a>
        <a href="#/pairing">ペアリングで使う →</a>
      </p>
    </section>
  )
}

function SourceList({ ids }: { ids: string[] }) {
  return (
    <ul className="source-list">
      {ids.map((id) => {
        const s = sourceById(id)
        if (!s) return <li key={id}>{id}（出典情報の確認中）</li>
        return (
          <li key={id}>
            <a href={s.url} target="_blank" rel="noreferrer">{s.title}</a>
            <span className="muted"> {s.authors}（{s.year}）{s.journal ? ` ${s.journal}` : ''}{s.doi ? ` DOI: ${s.doi}` : ''}{s.verified === 'bibliographic' ? '（書誌レベル・再確認待ち）' : ''}</span>
            <p className="scope-note">{s.scope}</p>
            {s.verified === 'bibliographic' && s.limits ? <p className="scope-note muted">{s.limits}</p> : null}
          </li>
        )
      })}
    </ul>
  )
}

/* ============ シミュレーション ============ */
const PARAM_HEADING: Record<string, string> = {
  'roast-temp': '温度に関する傾向', 'roast-time': '時間に関する傾向',
  'extract-temp': '温度に関する傾向', 'extract-time': '時間に関する傾向',
  'dose': '素材量・湯量に関する傾向', 'water': '素材量・湯量に関する傾向',
}

/** 傾向をパラメータ別にグループ化して見せる（どのスライダーにどの知見が対応するか分かるように） */
function TendencyGroups({ tendencies }: { tendencies: SimulationTendency[] }) {
  const groups = new Map<string, SimulationTendency[]>()
  for (const t of tendencies) {
    const key = t.parameter === 'water' ? 'dose' : t.parameter
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key)!.push(t)
  }
  return (
    <>
      {[...groups.entries()].map(([param, list]) => (
        <div key={param} className="tendency-group">
          <h5>{PARAM_HEADING[param] ?? '傾向'}</h5>
          {list.map((t) => (
            <div key={t.id}><TierBadge tier={t.tier} /><p>{t.text}</p><p className="scope-note">限界：{t.limits}</p><SourceLinks ids={t.sourceIds} /></div>
          ))}
        </div>
      ))}
    </>
  )
}

/* ============ 数値モデル（紅茶のカフェイン抽出） ============ */
// 定性的な傾向とは別枠の「モデル計算」。パラメータは公開文献で値を確認したものだけを使う
// （src/engine/caffeine-model.ts に来歴を明記）。絶対量（mg）は出さず平衡比のみを示す。
function CaffeineModelBlock({ tempC, seconds }: { tempC: number; seconds: number }) {
  const k = caffeineRateConstantPerMin(tempC)
  const fmtPct = (f: number) => (f >= 0.9995 ? '99.9%以上' : `${(f * 100).toFixed(1)}%`)
  const rows: [string, number][] = [['30秒', 0.5], ['1分', 1], ['2分', 2], ['3分', 3], ['5分', 5]]
  const current = k !== null ? caffeineExtractionFraction(tempC, seconds / 60) : null
  return (
    <div className="model-block">
      <h5>モデル計算（紅茶のカフェイン抽出）<span className="badge direct">モデル計算</span></h5>
      <p>
        定性的な傾向とは別枠で、検証可能なパラメータが公表されている紅茶のカフェインについてのみ数値モデルを表示します。
        Spiro &amp; Jago（1982）の定常状態モデルに基づく一次速度式 f(t)＝1−exp(−k·t) で、
        <strong>平衡濃度に対する抽出割合</strong>を計算します（カフェインの絶対量 mg は出しません）。
      </p>
      {k === null || current === null ? (
        <p className="warning" role="alert">
          抽出温度がモデルの適用範囲（{CAFFEINE_MODEL_TEMP_MIN_C}–{CAFFEINE_MODEL_TEMP_MAX_C}℃）の外のため、モデル計算は行いません。範囲外への外挿はしません。
        </p>
      ) : (
        <>
          <p>
            現在の条件（抽出温度 {tempC}℃）での速度定数 k ＝ {k.toFixed(2)} min⁻¹（モデル計算）。
            現在の抽出時間 {seconds} 秒では、平衡に対する抽出割合は約 {fmtPct(current)} です。
          </p>
          <table className="model-table">
            <caption className="muted">抽出時間ごとの平衡に対する抽出割合（{tempC}℃、モデル計算）</caption>
            <tbody>
              {rows.map(([label, min]) => {
                const f = caffeineExtractionFraction(tempC, min)
                return (
                  <tr key={label}><th scope="row">{label}</th><td>{f === null ? '—' : fmtPct(f)}</td></tr>
                )
              })}
            </tbody>
          </table>
        </>
      )}
      <p className="scope-note">
        パラメータ：k（80℃）＝0.99 min⁻¹、活性化エネルギー 40.3 kJ/mol は、南アフリカ産紅茶（粒度 1.40–2.00 mm、水抽出、HPLC 測定）の実測報告値（Price）です。
        アッサム紅茶では活性化エネルギー 45±2 kJ/mol（ルース）と報告されており（Jaganyi &amp; Mdletshe 2000）、産地・粒度・製法の異なる紅茶への適用は目安です。
        ティーバッグでは速度定数が約29%小さいとの報告があります。適用温度範囲は {CAFFEINE_MODEL_TEMP_MIN_C}–{CAFFEINE_MODEL_TEMP_MAX_C}℃
        （基準温度 80℃の近傍に限定したもので、原著の実測温度範囲の詳細は未確認のため、80℃から離れるほど目安の度合いが強まります）。
      </p>
      <SourceLinks ids={['spiro-jago-1982-tea-infusion-model', 'jaganyi-mdletshe-2000-assam-caffeine-kinetics']} />
    </div>
  )
}

function SimulationPanel({ material: m }: { material: Material }) {
  const [roastTemp, setRoastTemp] = useState(120)
  const [roastMin, setRoastMin] = useState(15)
  const [extTemp, setExtTemp] = useState(80)
  const [extSec, setExtSec] = useState(60)
  const [dose, setDose] = useState(3)
  const [water, setWater] = useState(150)
  const roast = evaluateRoast(m, { tempC: roastTemp, minutes: roastMin })
  const ext = evaluateExtraction(m, { tempC: extTemp, seconds: extSec, doseG: dose, waterMl: water })
  return (
    <div className="sim-panel">
      <h3>加工・抽出シミュレーション（定性的な傾向）</h3>
      <p className="muted sim-intro">傾向は条件ごとに整理した文献の定性的知見です。設定値は下の「現在の条件」サマリーに反映されますが、傾向の本文は設定値で切り替わるものではなく、条件別の知見集として表示しています。</p>
      {m.roastable ? (
        <div>
          <h4>焙煎</h4>
          <div className="sim-control">
            <span className="sim-control-label">焙煎温度</span>
            <input type="range" min={60} max={260} value={roastTemp} onChange={(e) => setRoastTemp(Number(e.target.value))} aria-label="焙煎温度" />
            <span className="sim-value"><input type="number" value={roastTemp} onChange={(e) => setRoastTemp(Number(e.target.value))} aria-label="焙煎温度（数値）" /><span aria-hidden="true">℃</span></span>
          </div>
          <div className="sim-control">
            <span className="sim-control-label">焙煎時間</span>
            <input type="range" min={1} max={120} value={roastMin} onChange={(e) => setRoastMin(Number(e.target.value))} aria-label="焙煎時間" />
            <span className="sim-value"><input type="number" value={roastMin} onChange={(e) => setRoastMin(Number(e.target.value))} aria-label="焙煎時間（数値）" /><span aria-hidden="true">分</span></span>
          </div>
          <div className="sim-result">
            <p className="sim-summary" aria-live="polite">現在の条件：焙煎温度 {roastTemp}℃（{roastTemp < 140 ? '低温側' : roastTemp < 200 ? '中温側' : '高温側'}）・焙煎時間 {roastMin}分</p>
            <p className="muted">{roast.statusNote}</p>
            {roast.warnings.map((w) => <p key={w} className="warning" role="alert">{w}</p>)}
            <TendencyGroups tendencies={roast.tendencies} />
          </div>
        </div>
      ) : <p className="muted">焙煎：{roast.statusNote}</p>}
      {m.extractable ? (
        <div>
          <h4>抽出</h4>
          <div className="preset-row" role="group" aria-label="抽出条件のプリセット">
            <span className="muted">条件プリセット：</span>
            {([['低温（60℃・120秒）', 60, 120], ['中温（80℃・60秒）', 80, 60], ['高温（95℃・30秒）', 95, 30]] as [string, number, number][]).map(([label, t, s]) => (
              <button key={label} type="button" className="preset-btn" onClick={() => { setExtTemp(t); setExtSec(s) }}>{label}</button>
            ))}
          </div>
          <div className="sim-control">
            <span className="sim-control-label">抽出温度</span>
            <input type="range" min={20} max={100} value={extTemp} onChange={(e) => setExtTemp(Number(e.target.value))} aria-label="抽出温度" />
            <span className="sim-value"><input type="number" value={extTemp} onChange={(e) => setExtTemp(Number(e.target.value))} aria-label="抽出温度（数値）" /><span aria-hidden="true">℃</span></span>
          </div>
          <div className="sim-control">
            <span className="sim-control-label">抽出時間</span>
            <input type="range" min={5} max={600} step={5} value={extSec} onChange={(e) => setExtSec(Number(e.target.value))} aria-label="抽出時間" />
            <span className="sim-value"><input type="number" value={extSec} onChange={(e) => setExtSec(Number(e.target.value))} aria-label="抽出時間（数値）" /><span aria-hidden="true">秒</span></span>
          </div>
          <div className="sim-control">
            <span className="sim-control-label">素材量</span>
            <span className="sim-value"><input type="number" min={0.5} step={0.5} value={dose} onChange={(e) => setDose(Number(e.target.value))} aria-label="素材量" /><span aria-hidden="true">g</span></span>
          </div>
          <div className="sim-control">
            <span className="sim-control-label">湯量</span>
            <span className="sim-value"><input type="number" min={10} step={10} value={water} onChange={(e) => setWater(Number(e.target.value))} aria-label="湯量" /><span aria-hidden="true">ml</span></span>
          </div>
          <div className="sim-result">
            <p className="sim-summary" aria-live="polite">現在の条件：抽出温度 {extTemp}℃（{extTemp < 70 ? '低温側' : extTemp < 90 ? '中温側' : '高温側'}）・抽出時間 {extSec}秒・素材量 {dose}g／湯量 {water}ml{dose > 0 ? `（約 1:${Math.round(water / dose)}）` : ''}</p>
            <p className="muted">{ext.statusNote}</p>
            {ext.warnings.map((w) => <p key={w} className="warning" role="alert">{w}</p>)}
            <TendencyGroups tendencies={ext.tendencies} />
            {m.classificationId === 'black-tea' && <CaffeineModelBlock tempC={extTemp} seconds={extSec} />}
          </div>
        </div>
      ) : <p className="muted">抽出：{ext.statusNote}</p>}
    </div>
  )
}

/* ============ 香味化学（双方向連携） ============ */
function ChemistryView() {
  const [materialId, setMaterialId] = usePersistentState('chemistry:materialId', 'tea-sencha')
  const [noteId, setNoteId] = useState<string | null>(null)
  const [compoundQuery, setCompoundQuery] = useState('')
  const m = materialById(materialId)
  const noteCompounds = noteId ? compounds.filter((c) => c.noteIds.includes(noteId)) : []
  const cq = compoundQuery.trim().toLowerCase()
  const filteredCompounds = cq
    ? compounds.filter((c) => `${c.nameJa} ${c.nameEn} ${c.compoundClass}`.toLowerCase().includes(cq))
    : compounds
  return (
    <section>
      <SectionHead no="03" en="CHEMISTRY" title="香味化学（ホイール ⇄ 化合物 ⇄ 素材）" />
      <label>素材を選ぶ
        <select value={materialId} onChange={(e) => { setMaterialId(e.target.value); setNoteId(null) }} aria-label="素材">
          {(['tea', 'chocolate', 'spice', 'herb', 'dairy'] as Domain[]).map((d) => (
            <optgroup key={d} label={DOMAIN_LABEL[d]}>
              {materials.filter((x) => x.domain === d).map((x) => <option key={x.id} value={x.id}>{x.nameJa}</option>)}
            </optgroup>
          ))}
        </select>
      </label>
      {m && (
        <WheelFigure caption="図．香りホイール（香りのみ）。外側の輪は、選択中の素材で報告された化合物（濃い＝寄与の根拠あり／薄い＝組成・検出のみ）。">
          <FlavorWheel entries={m.profile} onSelectNote={setNoteId} selectedNoteId={noteId}
            compoundMaterialIds={[m.id]} onSelectCompound={(id) => { window.location.hash = `#/compound/${id}` }} />
        </WheelFigure>
      )}
      {noteId && (
        <div className="note-detail">
          <h3>{noteById(noteId)?.name} に関連する化合物</h3>
          {noteCompounds.length ? (
            <ul>{noteCompounds.map((c) => {
              const link = linksForMaterial(materialId).find((l) => l.compoundId === c.id)
              return (
                <li key={c.id}>
                  <a href={`#/compound/${c.id}`}>{c.nameJa}</a>：{c.sensoryKnowledge}
                  {link ? <span> ［この素材との関連：{link.kind === 'contribution' ? '寄与の根拠あり' : link.kind === 'composition' ? '組成' : '検出'}・{TIER_LABEL[link.tier]}］</span>
                    : <span className="muted"> ［この素材での検出・寄与は未確認（化合物単体の知見のみ）］</span>}
                </li>
              )
            })}</ul>
          ) : <p className="muted">関連化合物は未収録です。</p>}
        </div>
      )}
      {m && (
        <>
          <h3>{m.nameJa}で報告された化合物</h3>
          {linksForMaterial(m.id).length ? (
            <ul className="compound-list">
              {linksForMaterial(m.id).map((l) => {
                const c = compoundById(l.compoundId)
                return (
                  <li key={l.compoundId + l.kind}>
                    <a href={`#/compound/${l.compoundId}`}>{c?.nameJa}</a>
                    <span className="muted"> {l.kind === 'contribution' ? '寄与の根拠あり' : l.kind === 'composition' ? '組成として報告' : '検出の報告'}・{TIER_LABEL[l.tier]}</span>
                  </li>
                )
              })}
            </ul>
          ) : <p className="muted">この素材で報告された化合物は未収録です。</p>}
        </>
      )}
      <h3>化合物一覧（全収録）</h3>
      <label>化合物を絞り込む（名前・化学分類）
        <input type="search" value={compoundQuery} onChange={(e) => setCompoundQuery(e.target.value)} aria-label="化合物の絞り込み" placeholder="例：テルペン" />
      </label>
      <p className="muted">{filteredCompounds.length}件／全{compounds.length}件</p>
      {filteredCompounds.length ? (
        <ul className="compound-list">
          {filteredCompounds.map((c) => (
            <li key={c.id}><a href={`#/compound/${c.id}`}>{c.nameJa}</a><span className="muted"> {c.compoundClass}</span></li>
          ))}
        </ul>
      ) : <p className="muted">条件に合う化合物はありません。</p>}
    </section>
  )
}

function CompoundDetail({ id }: { id: string }) {
  const c = compoundById(id)
  if (!c) return <p>化合物が見つかりません。</p>
  const links = linksForCompound(id)
  return (
    <section>
      <p><a href="#/chemistry">← 香味化学へ</a></p>
      <h2><span className="h2-kicker" aria-hidden="true">COMPOUND FILE — 化合物詳細</span>{c.nameJa} <span className="en-name">{c.nameEn}</span></h2>
      <p className="material-meta">
        分類：{c.compoundClass}｜{c.volatile ? '揮発性' : '非揮発性'}
        {c.cas ? `｜CAS: ${c.cas}` : ''}{c.formula ? `｜化学式: ${c.formula}` : ''}{c.pubchemCid ? `｜PubChem CID: ${c.pubchemCid}` : ''}
        {c.aliases.length ? `｜別名: ${c.aliases.join('、')}` : ''}
      </p>
      <h3>化合物単体の香り・味の知見</h3>
      <p>{c.sensoryKnowledge}</p>
      <h3>関連する香り</h3>
      {c.noteIds.length ? (
        <ul>{c.noteIds.map((n) => <li key={n}>{categoryById(noteById(n)?.categoryId ?? '')?.name}：{noteById(n)?.name}</li>)}</ul>
      ) : <p className="muted">香りのノートとは関連づけられていません（呈味成分）。</p>}
      {c.tasteKeys.length > 0 && (
        <>
          <h3>関連する味覚・感覚</h3>
          <ul>{c.tasteKeys.map((t) => <li key={t}>{SENSATION_LABEL[t]}</li>)}</ul>
        </>
      )}
      <h3>報告されている素材</h3>
      {links.length ? (
        <ul>{links.map((l) => {
          const mm = materialById(l.materialId)
          return (
            <li key={l.materialId + l.kind}>
              <a href={`#/material/${l.materialId}`}>{mm?.nameJa}</a>
              <span className="badge">{l.kind === 'contribution' ? '寄与の根拠あり' : l.kind === 'composition' ? '組成' : '検出'}</span>
              <TierBadge tier={l.tier} />
              {l.conditions && <span className="muted"> {l.conditions}</span>}
            </li>
          )
        })}</ul>
      ) : <p className="muted">素材との関連は未収録です。</p>}
      <h3>出典</h3>
      <SourceList ids={c.sourceIds} />
    </section>
  )
}

/* ============ 文献・用語辞典 ============ */
const GLOSSARY: { term: string; body: string }[] = [
  { term: 'GC-MS', body: 'ガスクロマトグラフィー質量分析。揮発性成分を分離・同定する手法。検出されたこと自体は、香味への寄与を意味しない。' },
  { term: 'GC-O', body: 'ガスクロマトグラフィー・オルファクトメトリー。分離した成分を人が嗅いで香りの有無・特徴を評価する手法。寄与の手がかりになる。' },
  { term: 'AEDA', body: '香気抽出物希釈分析。抽出物を段階希釈し、どこまで香りが知覚できるかで重要成分を絞り込む手法。' },
  { term: 'OAV', body: '香気活性値。濃度を嗅覚閾値で割った値。1を超えると寄与の可能性が議論されるが、食品マトリックスの影響を受ける。' },
  { term: '実測（measured）', body: '対象試料で直接測定・観測された情報。試料と条件が付随する。' },
  { term: '一般的知見（general）', body: '文献で確立または報告された一般的な科学的知見。個別の品種・商品の実測ではない。' },
  { term: '推測（inferred）', body: '既知のデータから導いた探索的な推測。実測のように表示しない。' },
  { term: '情報不足（insufficient）', body: '判断に必要な証拠が不足している状態。「存在しない」という意味ではない。' },
  { term: 'ケモタイプ', body: '同じ植物種でも化学成分の組成が異なる型。タイムやバジルなどで知られる。' },
  { term: 'ルビーチョコレート', body: '製品の種類（分類）であり、カカオの遺伝系統ではない。' },
  { term: 'カカオ遺伝集団（10集団）', body: 'Motamayor et al. 2008 が遺伝解析で定義した10集団（Amelonado／Contamana／Criollo／Curaray／Guiana／Iquitos／Marañón／Nacional／Nanay／Purús）。伝統的分類（クリオロ／フォラステロ／トリニタリオ）とは1対1に対応しない。集団レベルの香味実測データは存在しないため、素材として収録するのは足がかりのある Nacional と Criollo の2集団（推測プロファイルつき）だけとし、残りの集団はここに分類情報として記録する。' },
  { term: 'Amelonado 集団', body: '10集団の一つ。伝統的にはフォラステロの代表的集団として扱われ、西アフリカ等の栽培地域に広く導入された。ドミニカ共和国の遺伝資源では Amelonado 祖先が優占する（Boza et al. 2013）。集団レベルの香味実測はない。' },
  { term: 'Contamana 集団', body: '10集団の一つ（ペルー側アマゾンの集団名）。Motilal et al. 2026 はペルーの新系統 Chuncho 2 が本集団に関連すると提案した（提案段階）。集団レベルの香味実測はない。' },
  { term: 'Curaray 集団', body: '10集団の一つ（エクアドル側アマゾンの集団名）。集団レベルの香味実測はない。' },
  { term: 'Guiana 集団', body: '10集団の一つ（ギアナ地域の集団名）。集団レベルの香味実測はない。' },
  { term: 'Iquitos 集団', body: '10集団の一つ（ペルー側アマゾンの集団名）。クローン CCN-51 の祖先構成の主要成分として研究に現れるが、推定値は研究間で異なる（Boza et al. 2014：45.4%、Motilal et al. 2026：25%）。集団レベルの香味実測はない。' },
  { term: 'Marañón 集団', body: '10集団の一つ（ペルー北部の河川流域名）。「ピュア・ナシオナル再発見」等の業界説明は査読原著未確認であり根拠にしない。集団レベルの香味実測はない。' },
  { term: 'Nanay 集団', body: '10集団の一つ（ペルー側アマゾンの集団名）。集団レベルの香味実測はない。' },
  { term: 'Purús 集団', body: '10集団の一つ（プルス川流域の集団名）。Motilal et al. 2026 はペルーの新系統 Chuncho 1 が本集団に関連すると提案した（提案段階）。集団レベルの香味実測はない。' },
]

const LIBRARY_PAGE_SIZE = 60

/**
 * 文献画面。pairing 由来の台帳転記（出典484件）と書誌未同定メモ（818件）は
 * 初期バンドルに含めず、この画面でのみ動的 import する。
 * 出典・メモは初期60件＋「さらに表示」で段階的に増やす（絞り込み変更でリセット）。
 */
function LibraryView() {
  const [sourceQuery, setSourceQuery] = useState('')
  const [noteQuery, setNoteQuery] = useState('')
  const [sourceShown, setSourceShown] = useState(LIBRARY_PAGE_SIZE)
  const [noteShown, setNoteShown] = useState(LIBRARY_PAGE_SIZE)
  const [ledger, setLedger] = useState<{ sources: Source[]; notes: PairingBiblioNote[] } | null>(null)

  useEffect(() => {
    let alive = true
    Promise.all([
      import('./data/sources-pairing-import'),
      import('./data/biblio-notes-pairing'),
    ]).then(([s, n]) => {
      if (alive) setLedger({ sources: s.pairingImportedSources, notes: n.pairingBiblioNotes })
    }).catch(() => { /* 読み込み失敗時は再確認済み分のみで表示を継続する */ })
    return () => { alive = false }
  }, [])

  const allSources = ledger ? [...sources, ...ledger.sources] : sources
  const counts = {
    tea: materials.filter((m) => m.domain === 'tea').length,
    chocolate: materials.filter((m) => m.domain === 'chocolate').length,
    spice: materials.filter((m) => m.domain === 'spice').length,
    herb: materials.filter((m) => m.domain === 'herb').length,
    dairy: materials.filter((m) => m.domain === 'dairy').length,
    compounds: compounds.length,
    sources: allSources.length,
    links: materialCompoundLinks.length,
    varieties: new Set(materials.map((m) => m.varietyId)).size,
    origins: new Set(materials.map((m) => m.originId)).size,
    notes: flavorNotes.length,
    measuredLinks: materialCompoundLinks.filter((l) => l.tier === 'measured').length,
    generalLinks: materialCompoundLinks.filter((l) => l.tier === 'general').length,
    inferredLinks: materialCompoundLinks.filter((l) => l.tier === 'inferred').length,
  }
  const q = sourceQuery.trim().toLowerCase()
  const filteredSources = q
    ? allSources.filter((s) => `${s.title} ${s.authors} ${s.journal ?? ''}`.toLowerCase().includes(q))
    : allSources
  const pairingSourceCount = ledger ? ledger.sources.length : 0
  const allNotes = ledger ? ledger.notes : []
  const nq = noteQuery.trim().toLowerCase()
  const filteredNotes = nq
    ? allNotes.filter((n) => `${n.text} ${n.title ?? ''} ${n.authors ?? ''} ${n.fromFile}`.toLowerCase().includes(nq))
    : allNotes
  return (
    <section>
      <SectionHead no="04" en="LIBRARY" title="文献・用語辞典" />
      <nav className="jump-chips" aria-label="このページのセクション">
        {([['lib-stats', '収録状況'], ['lib-glossary', '用語辞典'], ['lib-sources', '出典'], ['lib-notes', '書誌未同定メモ']] as const).map(([target, label]) => (
          <button key={target} type="button" className="jump-chip" onClick={() => scrollToId(target)}>{label}</button>
        ))}
      </nav>
      <div id="lib-stats" className="anchor-block">
      <h3>収録状況（実データからの集計）</h3>
      <div className="stat-grid">
        <div className="stat-card"><div className="stat-num">{counts.tea + counts.chocolate + counts.spice + counts.herb + counts.dairy}</div><div className="stat-label">素材（お茶 {counts.tea}／チョコ {counts.chocolate}／スパイス {counts.spice}／ハーブ {counts.herb}／乳製品 {counts.dairy}）</div></div>
        <div className="stat-card"><div className="stat-num">{counts.compounds}</div><div className="stat-label">化合物</div></div>
        <div className="stat-card"><div className="stat-num">{ledger ? counts.sources : '…'}</div><div className="stat-label">出典</div></div>
        <div className="stat-card"><div className="stat-num">{counts.links}</div><div className="stat-label">素材×化合物リンク</div></div>
        <div className="stat-card"><div className="stat-num">{counts.varieties}</div><div className="stat-label">品種・系統（種類数）</div></div>
        <div className="stat-card"><div className="stat-num">{counts.origins}</div><div className="stat-label">産地（種類数）</div></div>
        <div className="stat-card"><div className="stat-num">{counts.notes}</div><div className="stat-label">香味ノート（記述子）</div></div>
        <div className="stat-card"><div className="stat-num">{counts.measuredLinks}</div><div className="stat-label">リンクの根拠内訳：実測 {counts.measuredLinks}／一般的知見 {counts.generalLinks}／推測 {counts.inferredLinks}</div></div>
      </div>
      {!ledger && <p className="muted" aria-live="polite">台帳データを読み込み中…（pairing 由来の出典・書誌未同定メモ）</p>}
      <p className="muted">網羅率（分母を定義できない割合）は表示しません。未収録は「未報告」であり「存在しない」ではありません。</p>
      <h3>根拠区分の方針</h3>
      <p>すべての科学的主張に根拠区分（実測／一般的知見／推測／情報不足）を付け、出典へ追跡できるようにしています。GC-MSで検出されただけの成分を「香味に寄与する」とは表示しません。根拠のない相性スコアや精密な数値は作りません。</p>
      </div>
      <div id="lib-glossary" className="anchor-block">
      <h3>用語辞典</h3>
      <dl className="glossary">
        {GLOSSARY.map((g) => (
          <div key={g.term}><dt>{g.term}</dt><dd>{g.body}</dd></div>
        ))}
      </dl>
      </div>
      <div id="lib-sources" className="anchor-block">
      <h3>出典一覧</h3>
      <label>出典を絞り込む（題名・著者・誌名）
        <input type="search" value={sourceQuery} onChange={(e) => { setSourceQuery(e.target.value); setSourceShown(LIBRARY_PAGE_SIZE) }} aria-label="出典の絞り込み" placeholder="例：cardamom" />
      </label>
      <p className="muted">{filteredSources.length}件／全{counts.sources}件（{Math.min(sourceShown, filteredSources.length)}件を表示中）</p>
      {filteredSources.length ? (
        <>
          <ul className="source-list lib-source-list">
            {filteredSources.slice(0, sourceShown).map((s) => (
              <li key={s.id} className="lib-source">
                <p className="lib-source-head">
                  <a href={s.url} target="_blank" rel="noreferrer">{s.title}</a>
                  <span className="muted"> {s.authors}（{s.year}）{s.journal ? ` ${s.journal}` : ''}{s.doi ? ` DOI: ${s.doi}` : ''}</span>
                  {s.verified === 'bibliographic' && <span className="badge">書誌レベル・再確認待ち</span>}
                </p>
                <details className="source-details">
                  <summary>主張できる範囲・限界</summary>
                  <p className="scope-note">{s.scope}</p>
                  {s.limits ? <p className="scope-note">限界：{s.limits}</p> : null}
                </details>
              </li>
            ))}
          </ul>
          {sourceShown < filteredSources.length && (
            <button type="button" className="show-more" onClick={() => setSourceShown((v) => v + LIBRARY_PAGE_SIZE)}>さらに表示（+{LIBRARY_PAGE_SIZE}件）</button>
          )}
        </>
      ) : <p className="muted">条件に合う出典はありません。</p>}
      <p className="muted">出典の内訳：再確認済み {sources.length}件／pairing 由来の台帳転記（書誌レベル・再確認待ち）{ledger ? pairingSourceCount : '…'}件。台帳転記分は素材×化合物リンク等の主張の根拠には使っていません。</p>
      </div>
      <div id="lib-notes" className="anchor-block">
      <h3>書誌未同定メモ（pairing 由来）</h3>
      <p className="muted">初心者用 pairing の研究記録に言及はあるものの、書誌（題名・著者・年・所在）が完全には同定できなかった文献・情報源のメモです。欠けた項目は推測で埋めていません。出典ではないため、主張の根拠には使いません。再確認が進んだものから出典へ格上げします。</p>
      {!ledger ? (
        <p className="muted" aria-live="polite">台帳データを読み込み中…</p>
      ) : (
        <>
          <label>メモを絞り込む（内容・著者・由来ファイル）
            <input type="search" value={noteQuery} onChange={(e) => { setNoteQuery(e.target.value); setNoteShown(LIBRARY_PAGE_SIZE) }} aria-label="書誌未同定メモの絞り込み" placeholder="例：阿波番茶" />
          </label>
          <p className="muted">{filteredNotes.length}件／全{allNotes.length}件（{Math.min(noteShown, filteredNotes.length)}件を表示中）</p>
          {filteredNotes.length ? (
            <>
              <ul className="source-list">
                {filteredNotes.slice(0, noteShown).map((n) => (
                  <li key={n.id}>
                    {n.url ? <a href={n.url} target="_blank" rel="noreferrer">{n.title ?? '（題名の記録なし）'}</a> : <span>{n.title ?? '（題名の記録なし）'}</span>}
                    <span className="muted">
                      {n.authors ? ` ${n.authors}` : ''}{n.year ? `（${n.year}）` : ''}{n.doi ? ` DOI: ${n.doi}` : ''}
                      {` 出典記録：${n.fromFile}`}
                    </span>
                    <p className="scope-note">{n.text}</p>
                    {n.context ? <p className="scope-note muted">{n.context}</p> : null}
                  </li>
                ))}
              </ul>
              {noteShown < filteredNotes.length && (
                <button type="button" className="show-more" onClick={() => setNoteShown((v) => v + LIBRARY_PAGE_SIZE)}>さらに表示（+{LIBRARY_PAGE_SIZE}件）</button>
              )}
            </>
          ) : <p className="muted">条件に合うメモはありません。</p>}
        </>
      )}
      </div>
    </section>
  )
}
