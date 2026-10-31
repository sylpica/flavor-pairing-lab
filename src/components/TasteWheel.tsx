import { useMemo } from 'react'
import type { Material, SensationEntry, SensationKey } from '../types'
import { SENSATION_LABEL, TIER_LABEL, INTENSITY_LABEL } from '../types'
import { weightPercents } from './FlavorWheel'

// 味わいホイール（味覚・口腔感覚専用）。香りホイールとは表示モードの切替で分離し、混ぜない。
// 初心者用 pairing でのユーザー指示（ホイールの少し上に香り／味の切替ボタンを置き、味もホイールで
// 根拠レベルつきで見せる）を本アプリに適用したもの。本アプリの設立仕様「ホイールは香り専用」は
// 「香りと味を同一ホイールに混ぜない」という分離の原則として解釈し、切替式で両立させる。
// セグメントの大きさは強さ区分（弱い=1/中程度=2/強い=3）の視覚化であり、精密な数値ではない。
// ラベルは無地にせず、弧に合わせて段階的に縮小して必ず描く（最小サイズでも収まらない場合だけ凡例に委ねる）。
const WEIGHT = { weak: 1, moderate: 2, strong: 3, unknown: 0 } as const
const LEVEL = { unknown: 0, weak: 1, moderate: 2, strong: 3 } as const
const TIER_STRENGTH = { measured: 3, general: 2, inferred: 1, insufficient: 0 } as const

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

interface Seg { key: SensationKey; start: number; end: number; entry: SensationEntry; pct: number }

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

export function TasteWheel({ sensations, contributors }: {
  sensations: Partial<Record<SensationKey, SensationEntry>>
  /** 組み合わせ表示のとき、どの素材の知見か（凡例に併記） */
  contributors?: Partial<Record<SensationKey, string[]>>
}) {
  const segs = useMemo<Seg[]>(() => {
    const keys = (Object.keys(sensations) as SensationKey[]).filter((k) => WEIGHT[sensations[k]!.intensity] > 0)
    const total = keys.reduce((acc, k) => acc + WEIGHT[sensations[k]!.intensity], 0)
    if (total === 0) return []
    const pcts = weightPercents(keys.map((k) => WEIGHT[sensations[k]!.intensity]))
    let angle = -Math.PI / 2
    return keys.map((k, idx) => {
      const span = (WEIGHT[sensations[k]!.intensity] / total) * Math.PI * 2
      const seg: Seg = { key: k, start: angle, end: angle + Math.max(span - 0.02, 0.05), entry: sensations[k]!, pct: pcts[idx] }
      angle += span
      return seg
    })
  }, [sensations])

  if (segs.length === 0) return <p className="muted">味覚・口腔感覚のデータは未収録です。</p>
  const C = 120
  return (
    <div className="wheel-wrap">
      <svg viewBox="0 0 240 240" className="wheel" role="img" aria-label="味わいホイール（味覚・口腔感覚のみ。香りは香りホイールで表示）">
        {segs.map((s) => (
          <path key={s.key} d={arcPath(C, C, 100, 60, s.start, s.end)}
            fill={COLOR[s.key]} opacity={0.92}
            stroke={s.entry.tier === 'inferred' ? '#333' : '#fff'} strokeWidth={s.entry.tier === 'inferred' ? 1.6 : 1}
            strokeDasharray={s.entry.tier === 'inferred' ? '4 2' : undefined}>
            <title>{SENSATION_LABEL[s.key]}（{INTENSITY_LABEL[s.entry.intensity]}・{TIER_LABEL[s.entry.tier]}・{s.pct}%：重みに基づく目安）</title>
          </path>
        ))}
        {segs.map((s) => {
          const name = SENSATION_LABEL[s.key]
          const mid = (s.start + s.end) / 2
          const [lx, ly] = polar(C, C, 80, mid)
          const arcLen = (s.end - s.start) * 80
          const withPct = `${name} ${s.pct}%`
          const sizePct = [9.5, 8.5, 7.5, 6.5].find((fs) => withPct.length * fs * 1.02 <= arcLen)
          const size = sizePct ?? [9.5, 8.5, 7.5, 6.5].find((fs) => name.length * fs * 1.02 <= arcLen)
          if (!size) return null
          return (
            <text key={`tlabel-${s.key}`} x={lx} y={ly + size * 0.35} textAnchor="middle"
              className="wheel-note-label" style={{ fontSize: size }}>{sizePct ? withPct : name}</text>
          )
        })}
        <text x={C} y={C - 3} textAnchor="middle" className="wheel-center">味わい</text>
        <text x={C} y={C + 12} textAnchor="middle" className="wheel-center-sub">ホイール</text>
      </svg>
      <p className="muted wheel-pct-note">％は強さ区分（弱い・中程度・強い）の重みから計算した目安で、実測の割合ではありません（合計100%になるよう調整）。</p>
      <ul className="wheel-legend">
        {segs.map((s) => (
          <li key={s.key}>
            <span className="swatch" style={{ background: COLOR[s.key] }} />
            {SENSATION_LABEL[s.key]} {s.pct}%：{INTENSITY_LABEL[s.entry.intensity]}・{TIER_LABEL[s.entry.tier]}
            {contributors?.[s.key] ? <span className="muted">（{contributors[s.key]!.join('、')}の知見）</span> : null}
            {s.entry.note ? <span className="muted"> {s.entry.note}</span> : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
