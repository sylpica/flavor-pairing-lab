import type { Material, SensationKey } from '../types'
import { SENSATION_LABEL } from '../types'
import { noteById, categoryById } from '../data/flavors'
import { allLinks as materialCompoundLinks } from '../data/links'
import { compoundById } from '../data/compounds'
import { interactionRules } from '../data/interactions'

export type PairingMode = 'harmony' | 'contrast' | 'complement'

export interface SharedNote { noteId: string; noteName: string; materialIds: string[] }
export interface SensationRelation {
  key: SensationKey
  label: string
  /** same=同じ感覚が重なる / oppose=対になる感覚が別素材にある / single=1素材のみ */
  pattern: 'same' | 'oppose' | 'single'
  text: string
}
export interface SharedCompound { compoundId: string; compoundName: string; materialIds: string[]; caution: string }
export interface FiredInteraction { ruleId: string; kind: string; text: string; level: 'general' | 'exploratory'; directStudy: boolean; sourceIds: string[] }
/** 補完：その素材だけが持つ香りカテゴリ（他の素材のいずれにも無い系統）を、その素材が補う関係 */
export interface ComplementEntry { materialId: string; categoryId: string; categoryName: string; noteNames: string[] }

export interface PairingAnalysis {
  sharedNotes: SharedNote[]
  uniqueNotes: { materialId: string; noteIds: string[] }[]
  complements: ComplementEntry[]
  sensationRelations: SensationRelation[]
  sharedCompounds: SharedCompound[]
  interactions: FiredInteraction[]
  /** 第2層・第3層の推測であることの明示（UI表示用） */
  inferenceNotice: string
}

const INTENSITY_ORDER = { unknown: 0, weak: 1, moderate: 2, strong: 3 } as const
const OPPOSING: Partial<Record<SensationKey, SensationKey>> = {
  bitter: 'sweet', sweet: 'bitter', sour: 'sweet', astringent: 'sweet',
}

/**
 * ペアリング分析。ratios が渡された場合、比率0%の素材は分析対象外とする
 * （スロットに残っていても、共通ノート・化合物・相互作用などの計算には含めない）。
 * 比率0%を除いて2素材未満になる場合はエラーを投げるので、呼び出し側で先に判定すること。
 */
export function analyzePairing(selected: Material[], ratios?: Record<string, number>): PairingAnalysis {
  if (selected.length < 2 || selected.length > 4) {
    throw new Error('ペアリングは2〜4素材で分析します')
  }
  const targets = ratios ? selected.filter((m) => (ratios[m.id] ?? 0) > 0) : selected
  if (targets.length < 2) {
    throw new Error('比率0%の素材を除くと、分析対象が2素材未満になります')
  }
  // 共通ノート（2素材以上に現れる香り）
  const noteToMaterials = new Map<string, string[]>()
  for (const m of targets) {
    for (const e of m.profile) {
      if (e.intensity === 'unknown') continue
      const arr = noteToMaterials.get(e.noteId) ?? []
      arr.push(m.id)
      noteToMaterials.set(e.noteId, arr)
    }
  }
  const sharedNotes: SharedNote[] = [...noteToMaterials.entries()]
    .filter(([, ids]) => ids.length >= 2)
    .map(([noteId, materialIds]) => ({ noteId, noteName: noteById(noteId)?.name ?? noteId, materialIds }))

  const sharedIds = new Set(sharedNotes.map((n) => n.noteId))
  const uniqueNotes = targets.map((m) => ({
    materialId: m.id,
    noteIds: m.profile.filter((e) => e.intensity !== 'unknown' && !sharedIds.has(e.noteId)).map((e) => e.noteId),
  }))

  // 感覚の関係（対比・補完の手がかり。スコア化しない）
  const sensationRelations: SensationRelation[] = []
  const allKeys = new Set<SensationKey>()
  for (const m of targets) for (const k of Object.keys(m.sensations) as SensationKey[]) allKeys.add(k)
  for (const key of allKeys) {
    const holders = targets.filter((m) => {
      const e = m.sensations[key]
      return e && e.intensity !== 'unknown' && INTENSITY_ORDER[e.intensity] >= 2
    })
    if (holders.length >= 2) {
      sensationRelations.push({
        key, label: SENSATION_LABEL[key], pattern: 'same',
        text: `${SENSATION_LABEL[key]}が複数の素材に共通します（${holders.map((h) => h.nameJa).join('・')}）。重なりが強さの単純な加算になるとは限りません。`,
      })
    } else if (holders.length === 1) {
      const opp = OPPOSING[key]
      const oppHolder = opp ? targets.find((m) => m.id !== holders[0].id && m.sensations[opp] && INTENSITY_ORDER[m.sensations[opp]!.intensity] >= 2) : undefined
      if (opp && oppHolder) {
        sensationRelations.push({
          key, label: SENSATION_LABEL[key], pattern: 'oppose',
          text: `${holders[0].nameJa}の${SENSATION_LABEL[key]}と、${oppHolder.nameJa}の${SENSATION_LABEL[opp]}が対比・補完の関係になり得ます。これは知覚の一般的な関係からの探索的な見立てです。`,
        })
      } else {
        sensationRelations.push({
          key, label: SENSATION_LABEL[key], pattern: 'single',
          text: `${SENSATION_LABEL[key]}は主に${holders[0].nameJa}が担います。`,
        })
      }
    }
  }

  // 共通化合物（「多い＝相性が良い」とは判断しない注意を必ず添える）
  const compoundToMaterials = new Map<string, string[]>()
  for (const link of materialCompoundLinks) {
    if (!targets.some((m) => m.id === link.materialId)) continue
    const arr = compoundToMaterials.get(link.compoundId) ?? []
    arr.push(link.materialId)
    compoundToMaterials.set(link.compoundId, arr)
  }
  const sharedCompounds: SharedCompound[] = [...compoundToMaterials.entries()]
    .filter(([, ids]) => new Set(ids).size >= 2)
    .map(([compoundId, ids]) => ({
      compoundId,
      compoundName: compoundById(compoundId)?.nameJa ?? compoundId,
      materialIds: [...new Set(ids)],
      caution: '共通化合物の存在は検出・組成レベルの事実です。香味への寄与や組み合わせの成否を直接示すものではありません。',
    }))

  // 相互作用ルールの発火
  const interactions: FiredInteraction[] = []
  for (const rule of interactionRules) {
    const t = rule.trigger
    let fires = true
    if (t.domains) fires = fires && t.domains.every((d) => targets.some((m) => m.domain === d))
    if (t.sensation) {
      const min = INTENSITY_ORDER[t.minIntensity ?? 'moderate']
      fires = fires && targets.some((m) => {
        const e = m.sensations[t.sensation!]
        return e && INTENSITY_ORDER[e.intensity] >= min
      })
    }
    if (t.compoundId) {
      const hasCompound = targets.some((m) => materialCompoundLinks.some((l) => l.materialId === m.id && l.compoundId === t.compoundId))
      const hasDomain = !t.withDomain || targets.some((m) => m.domain === t.withDomain)
      fires = fires && hasCompound && hasDomain
    }
    if (t.extractable) fires = fires && targets.some((m) => m.extractable)
    if (t.strongAromaCount) {
      const count = targets.filter((m) => m.profile.some((e) => e.intensity === 'strong')).length
      fires = fires && count >= t.strongAromaCount
    }
    if (t.sharedNote) fires = fires && sharedNotes.length > 0
    if (fires) {
      interactions.push({ ruleId: rule.id, kind: rule.kind, text: rule.text, level: rule.level, directStudy: rule.directStudy, sourceIds: rule.sourceIds })
    }
  }


  // 補完：その素材だけが持つ香りカテゴリ（系統）を、その素材が補う関係としてデータから導出する
  const categoryOf = (noteId: string) => noteById(noteId)?.categoryId ?? ''
  const complements: ComplementEntry[] = []
  for (const m of targets) {
    const myCategories = new Map<string, string[]>()
    for (const e of m.profile) {
      if (e.intensity === 'unknown') continue
      const cid = categoryOf(e.noteId)
      if (!cid) continue
      const arr = myCategories.get(cid) ?? []
      arr.push(noteById(e.noteId)?.name ?? e.noteId)
      myCategories.set(cid, arr)
    }
    for (const [cid, noteNames] of myCategories) {
      const othersHave = targets.some((o) => o.id !== m.id
        && o.profile.some((e) => e.intensity !== 'unknown' && categoryOf(e.noteId) === cid))
      if (!othersHave) {
        complements.push({ materialId: m.id, categoryId: cid, categoryName: categoryById(cid)?.name ?? cid, noteNames })
      }
    }
  }

  return {
    sharedNotes, uniqueNotes, complements, sensationRelations, sharedCompounds, interactions,
    inferenceNotice: 'この分析は第1層（素材・成分の科学的知見）に基づく第2層・第3層の探索的な見立てを含みます。実際に組み合わせた官能評価の結果ではありません。',
  }
}

/** 配合比率の検証（質量比前提。合計100%を維持する） */
/** 均等配分の初期値。割り切れない場合は先頭の素材から1ずつ配り、合計を必ず100にする
 * （例：3素材なら 34/33/33。切り捨てで99%にすると「合計不一致」が初期状態になるため） */
export function defaultShares(count: number): number[] {
  if (count <= 0) return []
  const base = Math.floor(100 / count)
  const rem = 100 - base * count
  return Array.from({ length: count }, (_, i) => base + (i < rem ? 1 : 0))
}

export function validateRatios(ratios: Record<string, number>, materialIds: string[]): string | null {
  for (const id of materialIds) {
    const v = ratios[id]
    if (v === undefined || Number.isNaN(v) || v < 0 || v > 100) return '配合比率は0〜100%の数値で指定してください'
  }
  const sum = materialIds.reduce((acc, id) => acc + (ratios[id] ?? 0), 0)
  if (Math.abs(sum - 100) > 0.01) return `配合比率の合計は100%にしてください（現在 ${Math.round(sum * 10) / 10}%）`
  return null
}
