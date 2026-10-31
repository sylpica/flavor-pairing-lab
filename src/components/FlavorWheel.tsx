import { useMemo, useState } from 'react'
import type { ProfileEntry } from '../types'
import { flavorCategories, noteById, categoryById } from '../data/flavors'

// 香り専用ホイール。味覚・口腔感覚は含まない。
// セグメントの大きさは強さ区分（弱い=1/中程度=2/強い=3）の視覚化であり、精密な数値ではない。
const WEIGHT = { weak: 1, moderate: 2, strong: 3, unknown: 0 } as const

interface Seg { noteId: string; start: number; end: number; color: string; tier: string }

function polar(cx: number, cy: number, r: number, rad: number) {
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)] as const
}
function arcPath(cx: number, cy: number, rOuter: number, rInner: number, a0: number, a1: number) {
  const [x0, y0] = polar(cx, cy, rOuter, a0)
  const [x1, y1] = polar(cx, cy, rOuter, a1)
  const [x2, y2] = polar(cx, cy, rInner, a1)
  const [x3, y3] = polar(cx, cy, rInner, a0)
  const large = a1 - a0 > Math.PI ? 1 : 0
  return `M ${x0} ${y0} A ${rOuter} ${rOuter} 0 ${large} 1 ${x1} ${y1} L ${x2} ${y2} A ${rInner} ${rInner} 0 ${large} 0 ${x3} ${y3} Z`
}

export function FlavorWheel({ entries, onSelectNote, selectedNoteId }: {
  entries: ProfileEntry[]
  onSelectNote?: (noteId: string) => void
  selectedNoteId?: string | null
}) {
  const [hover, setHover] = useState<string | null>(null)
  const segs = useMemo<Seg[]>(() => {
    const usable = entries.filter((e) => WEIGHT[e.intensity] > 0)
    const total = usable.reduce((acc, e) => acc + WEIGHT[e.intensity], 0)
    if (total === 0) return []
    let angle = -Math.PI / 2
    return usable.map((e) => {
      const span = (WEIGHT[e.intensity] / total) * Math.PI * 2
      const seg: Seg = {
        noteId: e.noteId, start: angle, end: angle + Math.max(span - 0.02, 0.05),
        color: categoryById(noteById(e.noteId)?.categoryId ?? '')?.color ?? '#999', tier: e.tier,
      }
      angle += span
      return seg
    })
  }, [entries])

  if (segs.length === 0) return <p className="muted">香りプロファイルのデータが不足しています。</p>
  const active = hover ?? selectedNoteId
  return (
    <div className="wheel-wrap">
      <svg viewBox="0 0 200 200" className="wheel" role="img" aria-label="香りホイール（香りのみ。味覚は別のグラフで表示）">
        {segs.map((s) => (
          <path key={s.noteId} d={arcPath(100, 100, 92, 52, s.start, s.end)}
            fill={s.color} opacity={active && active !== s.noteId ? 0.35 : 0.92}
            stroke={s.tier === 'inferred' ? '#333' : '#fff'} strokeWidth={s.tier === 'inferred' ? 1.6 : 1}
            strokeDasharray={s.tier === 'inferred' ? '4 2' : undefined}
            onMouseEnter={() => setHover(s.noteId)} onMouseLeave={() => setHover(null)}
            onClick={() => onSelectNote?.(s.noteId)} style={{ cursor: 'pointer' }}>
            <title>{noteById(s.noteId)?.name}</title>
          </path>
        ))}
        <text x="100" y="97" textAnchor="middle" className="wheel-center">香り</text>
        <text x="100" y="112" textAnchor="middle" className="wheel-center-sub">ホイール</text>
      </svg>
      <ul className="wheel-legend">
        {segs.map((s) => {
          const note = noteById(s.noteId)
          const cat = flavorCategories.find((c) => c.id === note?.categoryId)
          return (
            <li key={s.noteId}>
              <button type="button" className={selectedNoteId === s.noteId ? 'legend-btn active' : 'legend-btn'}
                onClick={() => onSelectNote?.(s.noteId)}>
                <span className="swatch" style={{ background: s.color }} />
                {cat?.name}：{note?.name}
                {s.tier === 'inferred' ? '（推測）' : s.tier === 'measured' ? '（実測）' : '（一般的知見）'}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
