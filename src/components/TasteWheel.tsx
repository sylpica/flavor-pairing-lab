import { useMemo, useState } from 'react'
import type { Material, ProfileEntry, SensationEntry, SensationKey } from '../types'
import { SENSATION_LABEL, TIER_LABEL, INTENSITY_LABEL } from '../types'
import { weightPercents, polar, arcPath, compoundsForNoteInContext } from './FlavorWheel'
import { noteById } from '../data/flavors'
import { compoundById } from '../data/compounds'
import { tasteMappingsForNote, type TasteMapTier } from '../data/taste-note-map'

// 味わいホイール（第12ラウンドで3階層化）。
// 第1階層＝味そのもの（味覚・口腔感覚）。重みは感覚データ（SensationEntry）の強さ区分から取る。
// 第2階層＝具体名。その素材に実際に現れる香味ノートのうち、taste-note-map でその味に
//   対応づけられたものを、ノートの強さで分割して示す。対応づけは表示構造の情報であり、
//   感覚データの創作ではない（データ層では香りと味を分離したまま保持する）。
// 第3階層＝化学物質。そのノートに結びつく化合物を、香りホイールと同じ機構（化合物の輪）で示す。
// 感覚データに無い味でも、対応ノートが現れる場合はノートの強さからその味のセグメントを
//   導出して表示する（derived）。この場合セグメントは推測として区別表示する。
// 逆に、感覚データにある味で対応ノートが無い場合は第1階層のみとし、具体名を創作しない。
// 推測の区別：対応づけが inferred の具体名と導出セグメントは、破線・薄色・文字ラベルで示す
//   （色のみで区別しない）。
// 副対応の区別（第15ラウンド）：主対応とは別の味への副対応（role: 'secondary'）の具体名も
//   第2階層に含め、破線・薄色に加えて凡例・ツールチップで「副対応」と文字で明示する。
//   感覚データに無い味が副対応だけで立つ場合も、導出セグメントとして推測明記する。
// セグメントの大きさは強さ区分（弱い=1/中程度=2/強い=3）の視覚化であり、精密な数値ではない。
const WEIGHT = { weak: 1, moderate: 2, strong: 3, unknown: 0 } as const
const LEVEL = { unknown: 0, weak: 1, moderate: 2, strong: 3 } as const
const TIER_STRENGTH = { measured: 3, general: 2, inferred: 1, insufficient: 0 } as const
const MAX_COMPOUNDS_PER_NOTE = 3

const SENSATION_ORDER: SensationKey[] = ['sweet', 'sour', 'bitter', 'umami', 'astringent', 'pungent', 'cooling', 'warming']

const COLOR: Record<SensationKey, string> = {
  sweet: '#e5a3b8',
  sour: '#d9c84a',
  bitter: '#8a7358',
  umami: '#cf7f3d',
  astringent: '#9a8fb0',
  pungent: '#d64533',
  cooling: '#63a8c9',
  warming: '#e07b39',
}

export interface TasteNoteSlice {
  noteId: string
  /** ノートの強さの重み（1〜3） */
  weight: number
  /** プロファイル側（素材におけるノート自体）の根拠区分 */
  noteTier: ProfileEntry['tier']
  /** 味への対応づけの根拠区分 */
  mappingTier: TasteMapTier
  /** 副対応（主対応とは別の味への対応づけ）かどうか */
  secondary: boolean
  /** 推測として区別表示すべきか（対応が推測、またはノート自体が推測の場合） */
  inferred: boolean
  start: number
  end: number
}

export interface TasteSegment {
  key: SensationKey
  weight: number
  pct: number
  /** 感覚データ（無い場合は derived=true で、対応ノートから導出した推測セグメント） */
  entry?: SensationEntry
  derived: boolean
  notes: TasteNoteSlice[]
  start: number
  end: number
}

/**
 * 味わいホイールの表示モデルを構築する（純粋関数）。
 * 第1階層の重み：感覚データがある味はその強さ区分。感覚データが無く対応ノートだけがある味は、
 * 対応ノートの最大の重み（1〜3。28の強さの物差しを感覚データと揃えるため合計は使わない）。
 */
export function buildTasteWheelModel(
  sensations: Partial<Record<SensationKey, SensationEntry>>,
  profile: ProfileEntry[],
): TasteSegment[] {
  // ノートを対応先の味ごとに集める（主対応・副対応の両方を対象とする）
  const notesByKey = new Map<SensationKey, { entry: ProfileEntry; mappingTier: TasteMapTier; secondary: boolean }[]>()
  for (const e of profile) {
    if (WEIGHT[e.intensity] === 0) continue
    for (const m of tasteMappingsForNote(e.noteId)) {
      const arr = notesByKey.get(m.tasteKey) ?? []
      arr.push({ entry: e, mappingTier: m.tier, secondary: m.role === 'secondary' })
      notesByKey.set(m.tasteKey, arr)
    }
  }
  const presentKeys = SENSATION_ORDER.filter((k) => {
    const e = sensations[k]
    return (e && WEIGHT[e.intensity] > 0) || (notesByKey.get(k)?.length ?? 0) > 0
  })
  if (presentKeys.length === 0) return []
  const weights = presentKeys.map((k) => {
    const e = sensations[k]
    if (e && WEIGHT[e.intensity] > 0) return WEIGHT[e.intensity]
    return Math.max(...(notesByKey.get(k) ?? []).map((n) => WEIGHT[n.entry.intensity]))
  })
  const total = weights.reduce((a, b) => a + b, 0)
  const pcts = weightPercents(weights)
  let angle = -Math.PI / 2
  return presentKeys.map((k, idx) => {
    const span = (weights[idx] / total) * Math.PI * 2
    const start = angle
    const end = angle + Math.max(span - 0.02, 0.05)
    angle += span
    const entry = sensations[k] && WEIGHT[sensations[k]!.intensity] > 0 ? sensations[k] : undefined
    const rawNotes = (notesByKey.get(k) ?? [])
      .slice()
      .sort((a, b) => WEIGHT[b.entry.intensity] - WEIGHT[a.entry.intensity]
        || (noteById(a.entry.noteId)?.name ?? '').localeCompare(noteById(b.entry.noteId)?.name ?? '', 'ja'))
    const noteTotal = rawNotes.reduce((acc, n) => acc + WEIGHT[n.entry.intensity], 0)
    let nAngle = start
    const notes: TasteNoteSlice[] = rawNotes.map((n) => {
      const nSpan = noteTotal > 0 ? (WEIGHT[n.entry.intensity] / noteTotal) * (end - start) : 0
      const slice: TasteNoteSlice = {
        noteId: n.entry.noteId,
        weight: WEIGHT[n.entry.intensity],
        noteTier: n.entry.tier,
        mappingTier: n.mappingTier,
        secondary: n.secondary,
        inferred: n.mappingTier === 'inferred' || n.entry.tier === 'inferred',
        start: nAngle,
        end: nAngle + Math.max(nSpan - 0.015, 0.03),
      }
      nAngle += nSpan
      return slice
    })
    return { key: k, weight: weights[idx], pct: pcts[idx], entry, derived: !entry, notes, start, end }
  })
}

/** バラエティ実測用の署名：第1階層の構成＋第2階層の具体名の集合 */
export function tasteWheelSignature(
  sensations: Partial<Record<SensationKey, SensationEntry>>,
  profile: ProfileEntry[],
): string {
  return buildTasteWheelModel(sensations, profile)
    .map((s) => `${s.key}[${s.notes.map((n) => n.noteId).join('+')}]`)
    .join('|')
}

/**
 * 複数素材の味覚・口腔感覚を表示用に重ねる（混合物の実測ではない）。
 * 強さは素材間の最大値、根拠区分はその最大値を担うエントリの区分（同強度なら弱い方）を採用する。
 */
export function mergeSensations(materials: Material[]): {
  sensations: Partial<Record<SensationKey, SensationEntry>>
  contributors: Partial<Record<SensationKey, string[]>>
} {
  const sensations: Partial<Record<SensationKey, SensationEntry>> = {}
  const contributors: Partial<Record<SensationKey, string[]>> = {}
  for (const m of materials) {
    for (const k of Object.keys(m.sensations) as SensationKey[]) {
      const e = m.sensations[k]!
      contributors[k] = [...(contributors[k] ?? []), m.nameJa]
      const cur = sensations[k]
      if (!cur
        || LEVEL[e.intensity] > LEVEL[cur.intensity]
        || (LEVEL[e.intensity] === LEVEL[cur.intensity] && TIER_STRENGTH[e.tier] < TIER_STRENGTH[cur.tier])) {
        sensations[k] = e
      }
    }
  }
  return { sensations, contributors }
}

interface CSeg { compoundId: string; name: string; kind: string; start: number; end: number }

export function TasteWheel({ sensations, contributors, profileEntries, compoundMaterialIds, onSelectNote, selectedNoteId, onSelectCompound }: {
  sensations: Partial<Record<SensationKey, SensationEntry>>
  /** 組み合わせ表示のとき、どの素材の知見か（凡例に併記） */
  contributors?: Partial<Record<SensationKey, string[]>>
  /** 第2階層（具体名）に使う香味プロファイル。未指定なら第1階層のみ */
  profileEntries?: ProfileEntry[]
  /** 第3階層（化合物の輪）を出す文脈（素材ID）。未指定なら化合物の輪は出さない */
  compoundMaterialIds?: string[]
  onSelectNote?: (noteId: string) => void
  selectedNoteId?: string | null
  onSelectCompound?: (compoundId: string) => void
}) {
  const [hover, setHover] = useState<string | null>(null)
  const segs = useMemo(
    () => buildTasteWheelModel(sensations, profileEntries ?? []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(sensations), JSON.stringify(profileEntries ?? [])],
  )

  const csegs = useMemo<CSeg[]>(() => {
    if (!compoundMaterialIds || compoundMaterialIds.length === 0) return []
    const out: CSeg[] = []
    for (const s of segs) {
      for (const n of s.notes) {
        const list = compoundsForNoteInContext(n.noteId, compoundMaterialIds).slice(0, MAX_COMPOUNDS_PER_NOTE)
        if (list.length === 0) continue
        const span = (n.end - n.start) / list.length
        list.forEach((c, i) => {
          out.push({
            compoundId: c.compoundId, kind: c.kind,
            name: compoundById(c.compoundId)?.nameJa ?? c.compoundId,
            start: n.start + span * i, end: n.start + span * (i + 1) - 0.015,
          })
        })
      }
    }
    return out
  }, [segs, compoundMaterialIds?.join(',')])

  // 凡例の化合物名併記（香りホイールと同じ作法：数だけ書かず実際の名前を小さく併記する）
  const legendCompoundNames = useMemo(() => {
    const map = new Map<string, string[]>()
    if (!compoundMaterialIds || compoundMaterialIds.length === 0) return map
    for (const s of segs) {
      for (const n of s.notes) {
        map.set(n.noteId, compoundsForNoteInContext(n.noteId, compoundMaterialIds)
          .map((c) => compoundById(c.compoundId)?.nameJa ?? c.compoundId))
      }
    }
    return map
  }, [segs, compoundMaterialIds?.join(',')])

  if (segs.length === 0) return <p className="muted">味覚・口腔感覚のデータは未収録です。</p>
  const active = hover ?? selectedNoteId
  const C = 120
  const hasDerived = segs.some((s) => s.derived)
  const hasNotes = segs.some((s) => s.notes.length > 0)
  const hasSecondary = segs.some((s) => s.notes.some((n) => n.secondary))
  return (
    <div className="wheel-wrap">
      <svg viewBox="0 0 240 240" className="wheel" role="img" aria-label="味わいホイール（第1階層：味覚・口腔感覚、第2階層：その味に対応づけられた香味の具体名、第3階層：化合物）">
        {segs.map((s) => {
          const segInferred = s.derived || s.entry?.tier === 'inferred'
          return (
            <path key={s.key} d={arcPath(C, C, 70, 44, s.start, s.end)}
              fill={COLOR[s.key]} opacity={0.92}
              stroke={segInferred ? '#333' : '#fff'} strokeWidth={segInferred ? 1.6 : 1}
              strokeDasharray={segInferred ? '4 2' : undefined}>
              <title>{s.derived
                ? `${SENSATION_LABEL[s.key]}（推測：感覚データに無く、対応する香味ノートから導出・${s.pct}%：重みに基づく目安）`
                : `${SENSATION_LABEL[s.key]}（${INTENSITY_LABEL[s.entry!.intensity]}・${TIER_LABEL[s.entry!.tier]}・${s.pct}%：重みに基づく目安）`}</title>
            </path>
          )
        })}
        {segs.flatMap((s) => s.notes.map((n) => {
          // 副対応は推測でなくても主対応と区別する（破線・薄色＋「副対応」の文字）
          const distinguished = n.inferred || n.secondary
          return (
          <path key={`note-${s.key}-${n.noteId}`} d={arcPath(C, C, 94, 70, n.start, n.end)}
            fill={COLOR[s.key]} opacity={n.inferred ? 0.34 : n.secondary ? 0.42 : 0.55}
            stroke={distinguished ? '#333' : '#fff'} strokeWidth={distinguished ? 1.4 : 0.8}
            strokeDasharray={distinguished ? '4 2' : undefined}
            onMouseEnter={() => setHover(n.noteId)} onMouseLeave={() => setHover(null)}
            onClick={() => onSelectNote?.(n.noteId)} style={{ cursor: onSelectNote ? 'pointer' : undefined }}>
            <title>{noteById(n.noteId)?.name}（{SENSATION_LABEL[s.key]}に対応づけられた具体名{n.secondary ? '・副対応' : ''}・対応の根拠：{n.mappingTier === 'inferred' ? '推測' : '一般的知見'}／ノート自体：{TIER_LABEL[n.noteTier]}）</title>
          </path>
          )
        }))}
        {segs.map((s) => {
          const name = SENSATION_LABEL[s.key]
          const mid = (s.start + s.end) / 2
          const [lx, ly] = polar(C, C, 57, mid)
          const arcLen = (s.end - s.start) * 57
          const withPct = `${name} ${s.pct}%`
          const sizePct = [9.5, 8.5, 7.5, 6.5].find((fs) => withPct.length * fs * 1.02 <= arcLen)
          const size = sizePct ?? [9.5, 8.5, 7.5, 6.5].find((fs) => name.length * fs * 1.02 <= arcLen)
          if (!size) return null
          return (
            <text key={`tlabel-${s.key}`} x={lx} y={ly + size * 0.35} textAnchor="middle"
              className="wheel-note-label" style={{ fontSize: size }}>{sizePct ? withPct : name}</text>
          )
        })}
        {segs.flatMap((s) => s.notes.map((n) => {
          // 第2階層の具体名は、弧に合わせて段階的に縮小して可能な限り描く（収まらない場合だけ凡例に委ねる）
          const name = noteById(n.noteId)?.name ?? n.noteId
          const mid = (n.start + n.end) / 2
          const [lx, ly] = polar(C, C, 82, mid)
          const arcLen = (n.end - n.start) * 82
          const size = [7.5, 6.8, 6.2, 5.6].find((fs) => name.length * fs * 1.02 <= arcLen)
          if (!size) return null
          return (
            <text key={`nlabel-${s.key}-${n.noteId}`} x={lx} y={ly + size * 0.35} textAnchor="middle"
              className="wheel-note-label" style={{ fontSize: size, opacity: active && active !== n.noteId ? 0.35 : 1 }}>{name}</text>
          )
        }))}
        {csegs.map((c) => {
          const mid = (c.start + c.end) / 2
          const span = c.end - c.start
          const [lx, ly] = polar(C, C, 109.5, mid)
          // 化合物名は香りホイールと同じく接線方向に描く（水平置きだと左右端で見切れるため）
          const arcLen = span * 109.5
          const estWidth = (fs: number) => [...c.name].reduce((w, ch) => w + (ch.charCodeAt(0) > 0x2000 ? fs : fs * 0.58), 0)
          const csize = [6.8, 6.2, 5.6, 5.0].find((fs) => estWidth(fs) <= arcLen * 0.98)
          const label = csize ? c.name : null
          let deg = (mid * 180) / Math.PI + 90
          if (Math.cos(mid) < 0) deg += 180
          return (
            <g key={c.compoundId + c.start} onClick={() => onSelectCompound?.(c.compoundId)} style={{ cursor: onSelectCompound ? 'pointer' : undefined }}>
              <path d={arcPath(C, C, 122, 97, c.start, c.end)}
                fill={c.kind === 'contribution' ? '#7c4a21' : '#b49b78'}
                opacity={c.kind === 'contribution' ? 0.95 : 0.55}
                stroke="#fff" strokeWidth={0.8}>
                <title>{c.name}（{c.kind === 'contribution' ? '寄与の根拠あり' : c.kind === 'composition' ? '組成として報告' : '検出の報告'}）</title>
              </path>
              {label && <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central" transform={`rotate(${deg} ${lx} ${ly})`} className="wheel-compound-label" style={{ fontSize: csize }}>{label}</text>}
            </g>
          )
        })}
        <text x={C} y={C - 3} textAnchor="middle" className="wheel-center">味わい</text>
        <text x={C} y={C + 12} textAnchor="middle" className="wheel-center-sub">ホイール</text>
      </svg>
      <p className="muted wheel-pct-note">％は強さ区分（弱い・中程度・強い）の重みから計算した目安で、実測の割合ではありません（合計100%になるよう調整）。</p>
      {hasNotes && (
        <p className="muted wheel-compound-note">第2階層の具体名は、その味に対応づけられた香味ノートです（対応の根拠はデータで保持し、推測の対応は破線と「推測」表記で区別します）。{hasSecondary ? '「副対応」と付いた具体名は、そのノートの主対応とは別の味への副次的な対応づけで、破線と「副対応」表記で主対応と区別します。' : ''}{hasDerived ? '感覚データに無い味は、対応ノートの強さから導出した推測として第1階層に破線で示します。' : ''}</p>
      )}
      {csegs.length > 0 && (
        <p className="muted wheel-compound-note">第3階層（外側の輪）：表示中の素材で報告された化合物（濃い＝寄与の根拠あり／薄い＝組成・検出のみ）。クリックで化合物の詳細へ。名前が入りきらない化合物は、凡例でノートを選ぶと詳細に全件表示されます。</p>
      )}
      <ul className="wheel-legend taste-legend">
        {segs.map((s) => (
          <li key={s.key} className="taste-legend-item">
            <span className="swatch" style={{ background: COLOR[s.key] }} />
            {SENSATION_LABEL[s.key]} {s.pct}%：
            {s.derived
              ? <span>（推測）感覚データに無く、対応する香味ノートから導出</span>
              : <span>{INTENSITY_LABEL[s.entry!.intensity]}・{TIER_LABEL[s.entry!.tier]}</span>}
            {contributors?.[s.key] ? <span className="muted">（{contributors[s.key]!.join('、')}の知見）</span> : null}
            {s.entry?.note ? <span className="muted"> {s.entry.note}</span> : null}
            {s.notes.length > 0 && (
              <ul className="taste-note-list">
                {s.notes.map((n) => {
                  const note = noteById(n.noteId)
                  const names = legendCompoundNames.get(n.noteId) ?? []
                  return (
                    <li key={n.noteId}>
                      <button type="button" className={selectedNoteId === n.noteId ? 'legend-btn active' : 'legend-btn'}
                        onClick={() => onSelectNote?.(n.noteId)}>
                        {note?.name}
                        {n.inferred ? '（推測）' : n.noteTier === 'measured' ? '（実測）' : n.noteTier === 'general' ? '（一般的知見）' : '（情報不足）'}
                        {n.secondary ? '（副対応）' : ''}
                        {names.length > 0 && (
                          <span className="legend-compounds">・化合物：{names.slice(0, 3).map((n, i) => (<span key={n}>{i > 0 ? '、' : ''}<span className="compound-name">{n}</span></span>))}{names.length > 3 ? ` ほか${names.length - 3}種` : ''}</span>
                        )}
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
