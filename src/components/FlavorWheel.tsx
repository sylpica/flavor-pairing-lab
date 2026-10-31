import { useMemo, useState } from 'react'
import type { ProfileEntry } from '../types'
import { flavorCategories, noteById, categoryById } from '../data/flavors'
import { allLinks } from '../data/links'
import { compoundById } from '../data/compounds'

// 香り専用ホイール。味覚・口腔感覚は含まない。
// 内側の輪：香りノート（大きさは強さ区分 弱い=1/中程度=2/強い=3 の視覚化であり、精密な数値ではない）。
// 外側の輪：その文脈（表示中の素材）で実際に報告された化合物だけを、親ノートの角度範囲に並べる。
//   初心者用 pairing の作法を研究用に適応したもの：化合物は「その素材でリンクがあるもの」に限定し、
//   寄与（contribution）の根拠があるものを濃く、組成・検出のみのものを薄く表示する。
//   化合物名は弧に合わせて段階的に縮小して可能な限り描き、最小サイズでも収まらないものだけ
//   ノート詳細（凡例クリック後）に委ねる。ノート名も同様に段階縮小して必ず描く（無地セグメントを作らない）。
const WEIGHT = { weak: 1, moderate: 2, strong: 3, unknown: 0 } as const
const KIND_ORDER = { contribution: 0, composition: 1, detection: 2 } as const
const MAX_COMPOUNDS_PER_NOTE = 3

interface Seg { noteId: string; start: number; end: number; color: string; tier: string; pct: number }

/** 強さ区分の重みから、各セグメントの割合（%・目安）を最大剰余法で求め、合計を必ず100にする */
export function weightPercents(weights: number[]): number[] {
  const total = weights.reduce((a, b) => a + b, 0)
  if (total === 0) return weights.map(() => 0)
  const raw = weights.map((w) => (w / total) * 100)
  const base = raw.map((v) => Math.floor(v))
  let rest = 100 - base.reduce((a, b) => a + b, 0)
  const order = raw.map((v, i) => ({ i, frac: v - Math.floor(v) })).sort((a, b) => b.frac - a.frac)
  for (let k = 0; rest > 0 && order.length > 0; k = (k + 1) % order.length) { base[order[k].i] += 1; rest -= 1 }
  return base
}
interface CSeg { compoundId: string; name: string; kind: string; start: number; end: number }

export function polar(cx: number, cy: number, r: number, rad: number) {
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)] as const
}
export function arcPath(cx: number, cy: number, rOuter: number, rInner: number, a0: number, a1: number) {
  const [x0, y0] = polar(cx, cy, rOuter, a0)
  const [x1, y1] = polar(cx, cy, rOuter, a1)
  const [x2, y2] = polar(cx, cy, rInner, a1)
  const [x3, y3] = polar(cx, cy, rInner, a0)
  const large = a1 - a0 > Math.PI ? 1 : 0
  return `M ${x0} ${y0} A ${rOuter} ${rOuter} 0 ${large} 1 ${x1} ${y1} L ${x2} ${y2} A ${rInner} ${rInner} 0 ${large} 0 ${x3} ${y3} Z`
}

/** ノート×文脈素材に実際にリンクがある化合物（寄与→組成→検出の順）。
 *  味わいホイールの第3階層（化学物質）でも同じ機構を使うため export する（第12ラウンド）。 */
export function compoundsForNoteInContext(noteId: string, materialIds: string[]): { compoundId: string; kind: string }[] {
  const best = new Map<string, string>()
  for (const l of allLinks) {
    if (!materialIds.includes(l.materialId)) continue
    const c = compoundById(l.compoundId)
    if (!c || !c.noteIds.includes(noteId)) continue
    const cur = best.get(l.compoundId)
    if (!cur || KIND_ORDER[l.kind] < KIND_ORDER[cur as keyof typeof KIND_ORDER]) best.set(l.compoundId, l.kind)
  }
  return [...best.entries()]
    .map(([compoundId, kind]) => ({ compoundId, kind }))
    .sort((a, b) => KIND_ORDER[a.kind as keyof typeof KIND_ORDER] - KIND_ORDER[b.kind as keyof typeof KIND_ORDER])
}

export function FlavorWheel({ entries, onSelectNote, selectedNoteId, compoundMaterialIds, onSelectCompound }: {
  entries: ProfileEntry[]
  onSelectNote?: (noteId: string) => void
  selectedNoteId?: string | null
  /** 外側の輪に化合物を出す文脈（素材ID）。未指定なら化合物の輪は出さない */
  compoundMaterialIds?: string[]
  onSelectCompound?: (compoundId: string) => void
}) {
  const [hover, setHover] = useState<string | null>(null)
  const segs = useMemo<Seg[]>(() => {
    const usable = entries.filter((e) => WEIGHT[e.intensity] > 0)
    const total = usable.reduce((acc, e) => acc + WEIGHT[e.intensity], 0)
    if (total === 0) return []
    const pcts = weightPercents(usable.map((e) => WEIGHT[e.intensity]))
    let angle = -Math.PI / 2
    return usable.map((e, idx) => {
      const span = (WEIGHT[e.intensity] / total) * Math.PI * 2
      const seg: Seg = {
        noteId: e.noteId, start: angle, end: angle + Math.max(span - 0.02, 0.05),
        color: categoryById(noteById(e.noteId)?.categoryId ?? '')?.color ?? '#999', tier: e.tier, pct: pcts[idx],
      }
      angle += span
      return seg
    })
  }, [entries])

  const csegs = useMemo<CSeg[]>(() => {
    if (!compoundMaterialIds || compoundMaterialIds.length === 0) return []
    const out: CSeg[] = []
    for (const s of segs) {
      const list = compoundsForNoteInContext(s.noteId, compoundMaterialIds).slice(0, MAX_COMPOUNDS_PER_NOTE)
      if (list.length === 0) continue
      const span = (s.end - s.start) / list.length
      list.forEach((c, i) => {
        out.push({
          compoundId: c.compoundId, kind: c.kind,
          name: compoundById(c.compoundId)?.nameJa ?? c.compoundId,
          start: s.start + span * i, end: s.start + span * (i + 1) - 0.015,
        })
      })
    }
    return out
  }, [segs, compoundMaterialIds?.join(',')])

  // 凡例には「化合物○種」と数だけ書かず、その文脈素材でこのノートにリンクする化合物の
  // 実際の名前を小さく併記する（初心者用 pairing でのユーザー指示「化合物1種とかは具体性がない」を適用）。
  // 輪に描く上限とは別に全件を対象とし、表示は先頭3件＋残数に抑える（全件はノート詳細で見られる）。
  const legendCompoundNames = useMemo(() => {
    const map = new Map<string, string[]>()
    if (!compoundMaterialIds || compoundMaterialIds.length === 0) return map
    for (const s of segs) {
      map.set(s.noteId, compoundsForNoteInContext(s.noteId, compoundMaterialIds)
        .map((c) => compoundById(c.compoundId)?.nameJa ?? c.compoundId))
    }
    return map
  }, [segs, compoundMaterialIds?.join(',')])

  if (segs.length === 0) return <p className="muted">香りプロファイルのデータが不足しています。</p>
  const active = hover ?? selectedNoteId
  const C = 120
  return (
    <div className="wheel-wrap">
      <svg viewBox="0 0 240 240" className="wheel" role="img" aria-label="香りホイール（香りのみ。外側の輪は化合物。味覚は別のグラフで表示）">
        {segs.map((s) => (
          <path key={s.noteId} d={arcPath(C, C, 100, 60, s.start, s.end)}
            fill={s.color} opacity={active && active !== s.noteId ? 0.35 : 0.92}
            stroke={s.tier === 'inferred' ? '#333' : '#fff'} strokeWidth={s.tier === 'inferred' ? 1.6 : 1}
            strokeDasharray={s.tier === 'inferred' ? '4 2' : undefined}
            onMouseEnter={() => setHover(s.noteId)} onMouseLeave={() => setHover(null)}
            onClick={() => onSelectNote?.(s.noteId)} style={{ cursor: 'pointer' }}>
            <title>{noteById(s.noteId)?.name}（{s.pct}%・重みに基づく目安）</title>
          </path>
        ))}
        {segs.map((s) => {
          // ノート名は無地にせず必ずホイール上に描く（初心者用 pairing でのユーザー指示を本アプリにも適用）。
          // 弧の長さに合わせて段階的に縮小し、最小サイズでも収まらない場合だけ凡例に委ねる。
          const name = noteById(s.noteId)?.name ?? s.noteId
          const mid = (s.start + s.end) / 2
          const [lx, ly] = polar(C, C, 80, mid)
          const arcLen = (s.end - s.start) * 80
          // ％つきラベルを優先し、弧に収まらない場合だけ名前のみに落とす（レイアウトを崩さないため）。
          // ％は凡例には常に出るので、落としても情報は失われない。
          const withPct = `${name} ${s.pct}%`
          const sizePct = [9.5, 8.5, 7.5, 6.5].find((fs) => withPct.length * fs * 1.02 <= arcLen)
          const size = sizePct ?? [9.5, 8.5, 7.5, 6.5].find((fs) => name.length * fs * 1.02 <= arcLen)
          if (!size) return null
          return (
            <text key={`label-${s.noteId}`} x={lx} y={ly + size * 0.35} textAnchor="middle"
              className="wheel-note-label" style={{ fontSize: size }}>{sizePct ? withPct : name}</text>
          )
        })}
        {csegs.map((c) => {
          const mid = (c.start + c.end) / 2
          const span = c.end - c.start
          const [lx, ly] = polar(C, C, 115.5, mid)
          // 化合物名は輪に沿って接線方向に描く（水平置きだと左右端で見切れるため）。
          // サイズは弧長に合わせて段階的に縮小し、最小サイズでも収まらないものだけノート詳細に委ねる。
          const arcLen = span * 115.5
          const estWidth = (fs: number) => [...c.name].reduce((w, ch) => w + (ch.charCodeAt(0) > 0x2000 ? fs : fs * 0.58), 0)
          const csize = [6.8, 6.2, 5.6, 5.0].find((fs) => estWidth(fs) <= arcLen * 0.98)
          const label = csize ? c.name : null
          // 左半分では文字が逆さにならないよう180度反転させる
          let deg = (mid * 180) / Math.PI + 90
          if (Math.cos(mid) < 0) deg += 180
          return (
            <g key={c.compoundId + c.start} onClick={() => onSelectCompound?.(c.compoundId)} style={{ cursor: onSelectCompound ? 'pointer' : undefined }}>
              <path d={arcPath(C, C, 128, 103, c.start, c.end)}
                fill={c.kind === 'contribution' ? '#7c4a21' : '#b49b78'}
                opacity={c.kind === 'contribution' ? 0.95 : 0.55}
                stroke="#fff" strokeWidth={0.8}>
                <title>{c.name}（{c.kind === 'contribution' ? '寄与の根拠あり' : c.kind === 'composition' ? '組成として報告' : '検出の報告'}）</title>
              </path>
              {label && <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central" transform={`rotate(${deg} ${lx} ${ly})`} className="wheel-compound-label" style={{ fontSize: csize }}>{label}</text>}
            </g>
          )
        })}
        <text x={C} y={C - 3} textAnchor="middle" className="wheel-center">香り</text>
        <text x={C} y={C + 12} textAnchor="middle" className="wheel-center-sub">ホイール</text>
      </svg>
      <p className="muted wheel-pct-note">％は強さ区分（弱い・中程度・強い）の重みから計算した目安で、実測の割合ではありません（合計100%になるよう調整）。</p>
      {csegs.length > 0 && (
        <p className="muted wheel-compound-note">外側の輪：表示中の素材で報告された化合物（濃い＝寄与の根拠あり／薄い＝組成・検出のみ）。クリックで化合物の詳細へ。名前が入りきらない化合物は、凡例でノートを選ぶと詳細に全件表示されます。</p>
      )}
      <ul className="wheel-legend">
        {flavorCategories.map((cat) => {
          const inCat = segs.filter((s) => noteById(s.noteId)?.categoryId === cat.id)
          if (inCat.length === 0) return null
          return (
            <li key={`cat-${cat.id}`} className="legend-group">
              <span className="legend-cat">{cat.name}</span>
              <ul>
                {inCat.map((s) => {
                  const note = noteById(s.noteId)
                  return (
                    <li key={s.noteId}>
                      <button type="button" className={selectedNoteId === s.noteId ? 'legend-btn active' : 'legend-btn'}
                        onClick={() => onSelectNote?.(s.noteId)}>
                        <span className="swatch" style={{ background: s.color }} />
                        {cat.name}：{note?.name} {s.pct}%
                        {s.tier === 'inferred' ? '（推測）' : s.tier === 'measured' ? '（実測）' : '（一般的知見）'}
                        {(() => { const names = legendCompoundNames.get(s.noteId) ?? []; return names.length > 0 && (
                          <span className="legend-compounds">・化合物：{names.slice(0, 3).join('、')}{names.length > 3 ? ` ほか${names.length - 3}種` : ''}</span>
                        ) })()}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
