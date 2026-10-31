import type { Material, Source } from '../types'
import { teaChocolateSources } from './sources-tc'
import { spiceHerbSources } from './sources-spice-herb'
import { teaMaterials, chocolateMaterials } from './materials-tea-chocolate'
import { spiceMaterials, herbMaterials } from './materials-spice-herb'

export const sources: Source[] = [...teaChocolateSources, ...spiceHerbSources]
export const materials: Material[] = [...teaMaterials, ...chocolateMaterials, ...spiceMaterials, ...herbMaterials]

export const sourceById = (id: string) => sources.find((s) => s.id === id)
export const materialById = (id: string) => materials.find((m) => m.id === id)

/** 三軸の候補一覧（実在する組み合わせのみを候補化するために素材実データから導出する） */
export const axisValues = (domain: Material['domain'], key: 'classificationId' | 'originId' | 'varietyId', labelKey: 'classification' | 'origin' | 'variety') => {
  const map = new Map<string, string>()
  for (const m of materials) if (m.domain === domain) map.set(m[key], m[labelKey])
  return [...map.entries()].map(([id, label]) => ({ id, label })).sort((a, b) => a.label.localeCompare(b.label, 'ja'))
}
