import type { Material, Source } from '../types'
import { teaChocolateSources } from './sources-tc'
import { spiceHerbSources } from './sources-spice-herb'
import { expansionTeaSources } from './sources-expansion-tea'
import { expansionTea2Sources } from './sources-expansion-tea2'
import { expansionTea3Sources } from './sources-expansion-tea3'
import { expansionCacaoSources } from './sources-expansion-cacao'
import { expansionShSources } from './sources-expansion-sh'
import { expansionDairySources } from './sources-expansion-dairy'
import { round10Sources } from './sources-expansion-round10'
import { teaMaterials, chocolateMaterials } from './materials-tea-chocolate'
import { spiceMaterials, herbMaterials } from './materials-spice-herb'
import { expansionTeaMaterials } from './materials-expansion-tea'
import { expansionTea2Materials } from './materials-expansion-tea2'
import { expansionTea3Materials } from './materials-expansion-tea3'
import { expansionChocolateMaterials } from './materials-expansion-cacao'
import { expansionSpiceMaterials, expansionHerbMaterials } from './materials-expansion-sh'
import { expansionDairyMaterials } from './materials-expansion-dairy'
import { axisLabel } from './axis-labels'

// 初期バンドルに含めるのは再確認済みの出典のみ。
// pairing 由来の台帳転記（sources-pairing-import）と書誌未同定メモ（biblio-notes-pairing）は
// 文献画面でのみ動的 import する（どの素材・リンク・化合物も pairing 由来 ID を参照しない）。
export const sources: Source[] = [
  ...teaChocolateSources, ...spiceHerbSources,
  ...expansionTeaSources, ...expansionTea2Sources, ...expansionTea3Sources, ...expansionCacaoSources, ...expansionShSources,
  ...expansionDairySources, ...round10Sources,
]
export const materials: Material[] = [
  ...teaMaterials, ...chocolateMaterials, ...spiceMaterials, ...herbMaterials,
  ...expansionTeaMaterials, ...expansionTea2Materials, ...expansionTea3Materials, ...expansionChocolateMaterials,
  ...expansionSpiceMaterials, ...expansionHerbMaterials,
  ...expansionDairyMaterials,
]

export const sourceById = (id: string) => sources.find((s) => s.id === id)
export const materialById = (id: string) => materials.find((m) => m.id === id)

/** 三軸の候補一覧（実在する組み合わせのみを候補化するために素材実データから導出する。ラベルは軸の正規ラベルを使う） */
export const axisValues = (domain: Material['domain'], key: 'classificationId' | 'originId' | 'varietyId') => {
  const ids = [...new Set(materials.filter((m) => m.domain === domain).map((m) => m[key]))]
  return ids.map((id) => ({ id, label: axisLabel(key, id) })).sort((a, b) => a.label.localeCompare(b.label, 'ja'))
}
