import type { Material, Source } from '../types'
import { teaChocolateSources } from './sources-tc'
import { spiceHerbSources } from './sources-spice-herb'
import { expansionTeaSources } from './sources-expansion-tea'
import { expansionCacaoSources } from './sources-expansion-cacao'
import { expansionShSources } from './sources-expansion-sh'
import { pairingImportedSources } from './sources-pairing-import'
import { teaMaterials, chocolateMaterials } from './materials-tea-chocolate'
import { spiceMaterials, herbMaterials } from './materials-spice-herb'
import { expansionTeaMaterials } from './materials-expansion-tea'
import { expansionChocolateMaterials } from './materials-expansion-cacao'
import { expansionSpiceMaterials, expansionHerbMaterials } from './materials-expansion-sh'
import { axisLabel } from './axis-labels'

export const sources: Source[] = [
  ...teaChocolateSources, ...spiceHerbSources,
  ...expansionTeaSources, ...expansionCacaoSources, ...expansionShSources,
  // pairing 由来の台帳転記（全件 verified: 'bibliographic'、再確認待ち。リンクの根拠には使わない）
  ...pairingImportedSources,
]
export const materials: Material[] = [
  ...teaMaterials, ...chocolateMaterials, ...spiceMaterials, ...herbMaterials,
  ...expansionTeaMaterials, ...expansionChocolateMaterials,
  ...expansionSpiceMaterials, ...expansionHerbMaterials,
]

export const sourceById = (id: string) => sources.find((s) => s.id === id)
export const materialById = (id: string) => materials.find((m) => m.id === id)

/** 三軸の候補一覧（実在する組み合わせのみを候補化するために素材実データから導出する。ラベルは軸の正規ラベルを使う） */
export const axisValues = (domain: Material['domain'], key: 'classificationId' | 'originId' | 'varietyId') => {
  const ids = [...new Set(materials.filter((m) => m.domain === domain).map((m) => m[key]))]
  return ids.map((id) => ({ id, label: axisLabel(key, id) })).sort((a, b) => a.label.localeCompare(b.label, 'ja'))
}
