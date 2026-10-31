import type { Material, SensationKey } from '../types'
import { SENSATION_LABEL, TIER_LABEL, INTENSITY_LABEL } from '../types'

// 味覚・口腔感覚グラフ（香りホイールとは分離）。強さは定性区分のみ。
const LEVEL = { unknown: 0, weak: 1, moderate: 2, strong: 3 } as const

export function SensationChart({ material }: { material: Material }) {
  const keys = Object.keys(material.sensations) as SensationKey[]
  if (keys.length === 0) return <p className="muted">味覚・口腔感覚のデータは未収録です。</p>
  return (
    <div className="sensation-chart" role="img" aria-label={`${material.nameJa}の味覚・口腔感覚（定性区分）`}>
      {keys.map((k) => {
        const e = material.sensations[k]!
        return (
          <div className="sensation-row" key={k}>
            <span className="sensation-label">{SENSATION_LABEL[k]}</span>
            <span className="sensation-blocks" aria-hidden="true">
              {[1, 2, 3].map((i) => (
                <span key={i} className={LEVEL[e.intensity] >= i ? 'block on' : 'block'} />
              ))}
            </span>
            <span className="sensation-text">{INTENSITY_LABEL[e.intensity]}・{TIER_LABEL[e.tier]}</span>
            {e.note ? <span className="sensation-note">{e.note}</span> : null}
          </div>
        )
      })}
    </div>
  )
}
