// 科学ペアリング研究アプリ データモデル
// 設計方針（docs/EVIDENCE_POLICY.md / docs/REQUIREMENTS.md）:
// - 分類上異なる概念（植物種・品種・産地・加工・化合物・香味・観測・出典）を分離する
// - 根拠区分 EvidenceTier: measured（対象試料で直接測定）/ general（文献で確立した一般知見）
//   / inferred（既知データからの探索的推測）/ insufficient（証拠不足）
// - 「検出」と「官能的寄与」を型レベルで区別する（LinkKind）
// - 推測は estimation: 'inferred' を型で必須とし、実測と混ぜない
// - 相性スコア等の根拠のない数値は型に存在しない

export type Domain = 'tea' | 'chocolate' | 'spice' | 'herb'

export type EvidenceTier = 'measured' | 'general' | 'inferred' | 'insufficient'

export type Intensity = 'weak' | 'moderate' | 'strong' | 'unknown'

export interface Source {
  id: string
  kind: 'original' | 'review' | 'database' | 'book' | 'manufacturer' | 'article'
  title: string
  authors: string
  year: number
  journal?: string
  doi?: string
  url: string
  /** この出典が主張できる範囲 */
  scope: string
  /** この出典では主張できない範囲・限界 */
  limits?: string
  /** 原典確認状態: full=原著で内容確認 / abstract=要旨まで / bibliographic=書誌のみ */
  verified: 'full' | 'abstract' | 'bibliographic'
}

export interface FlavorCategory { id: string; name: string; color: string; description: string }
export interface FlavorNote { id: string; categoryId: string; name: string; example: string }

/** 味覚・口腔感覚は香りホイールとは分離する（基本味＋辛味・冷感・収斂感） */
export type SensationKey =
  | 'sweet' | 'sour' | 'bitter' | 'umami' | 'astringent'
  | 'pungent' | 'cooling' | 'warming'

export interface SensationEntry {
  intensity: Intensity
  tier: EvidenceTier
  sourceIds: string[]
  note?: string
}

/** 素材の香味プロファイル要素。tier を必須とし、出典のない実測主張を型で防ぐ */
export interface ProfileEntry {
  noteId: string
  intensity: Intensity
  tier: EvidenceTier
  sourceIds: string[]
}

/** 植物・食品素材エンティティ。三軸（分類×産地×品種/系統/種）を分離フィールドで持つ */
export interface Material {
  id: string
  domain: Domain
  nameJa: string
  nameEn: string
  /** 学名（植物素材・茶・カカオで該当するもの） */
  scientificName?: string
  /** 軸1: 分類（茶類／チョコ種類／スパイス分類／ハーブ分類） */
  classification: string
  classificationId: string
  /** 軸2: 産地（国・地域） */
  origin: string
  originId: string
  /** 軸3: 品種・系統・植物種・ケモタイプ等 */
  variety: string
  varietyId: string
  /** 使用部位（スパイス・ハーブ） */
  usedPart?: string
  /** 加工状態（生・乾燥・焙煎・発酵等） */
  processing?: string
  /** カカオ含有率（チョコレート） */
  cacaoPercent?: number
  description: string
  profile: ProfileEntry[]
  sensations: Partial<Record<SensationKey, SensationEntry>>
  /** 素材全体の根拠レベル要約 */
  evidenceTier: EvidenceTier
  scopeNote: string
  sourceIds: string[]
  /** 食品安全性の注意（該当する場合のみ） */
  safetyNote?: string
  /** 焙煎シミュレーション適用可否 */
  roastable: boolean
  /** 抽出シミュレーション適用可否 */
  extractable: boolean
}

export interface Compound {
  id: string
  nameJa: string
  nameEn: string
  aliases: string[]
  cas?: string
  formula?: string
  /** 化合物分類（テルペン／フェニルプロパノイド／アルデヒド等） */
  compoundClass: string
  volatile: boolean
  /** 化合物単体としての香り・味の知見（食品での寄与とは分離） */
  sensoryKnowledge: string
  noteIds: string[]
  tasteKeys: SensationKey[]
  sourceIds: string[]
}

/** 素材×化合物の関連。検出と寄与を区別する */
export type LinkKind = 'detection' | 'contribution' | 'composition'
export interface MaterialCompoundLink {
  materialId: string
  compoundId: string
  kind: LinkKind
  tier: EvidenceTier
  /** 測定・観測条件（分かる範囲） */
  conditions?: string
  sourceIds: string[]
}

/** 化合物から導く具体名（花・果物）の推測。必ず inferred として分離表示する */
export interface InferredSpecific {
  label: string
  basisCompoundIds: string[]
  rationale: string
  estimation: 'inferred'
}

/** ペアリング相互作用ルール（成分の足し算ではなく知覚レベルの相互作用） */
export type InteractionKind = 'aroma' | 'taste' | 'mouthfeel' | 'temporal'
export interface InteractionTrigger {
  /** 指定ドメインの素材がすべて選択に含まれる */
  domains?: Domain[]
  /** 指定した感覚が minIntensity 以上で現れている素材がある */
  sensation?: SensationKey
  minIntensity?: Intensity
  /** 指定化合物とリンクした素材があり、かつ withDomain の素材も選択されている */
  compoundId?: string
  withDomain?: Domain
  /** 抽出可能な素材が含まれている */
  extractable?: boolean
  /** 「強い」香りノートを持つ素材がこの数以上 */
  strongAromaCount?: number
  /** 共通する香りノートが存在する */
  sharedNote?: boolean
}
export interface InteractionRule {
  id: string
  kind: InteractionKind
  /** 発火条件の説明（人向け） */
  conditionNote: string
  trigger: InteractionTrigger
  text: string
  /** general=機構が実証された一般知見 / exploratory=他食品・モデル系からの探索的予測 */
  level: 'general' | 'exploratory'
  /** 直接研究（対象ペア自体の研究）があるか */
  directStudy: boolean
  sourceIds: string[]
}

/** シミュレーションの定性的傾向モデル。数式を使う場合は出典・適用範囲を必須とする */
export interface SimulationTendency {
  id: string
  /** 対象パラメータ */
  parameter: 'roast-temp' | 'roast-time' | 'extract-temp' | 'extract-time' | 'dose' | 'water'
  /** 傾向の説明（定性） */
  text: string
  tier: EvidenceTier
  applicableDomains: Domain[]
  sourceIds: string[]
  limits: string
}

export const TIER_LABEL: Record<EvidenceTier, string> = {
  measured: '実測',
  general: '一般的知見',
  inferred: '推測',
  insufficient: '情報不足',
}

export const INTENSITY_LABEL: Record<Intensity, string> = {
  weak: '弱い',
  moderate: '中程度',
  strong: '強い',
  unknown: 'データ不足',
}

export const SENSATION_LABEL: Record<SensationKey, string> = {
  sweet: '甘味',
  sour: '酸味',
  bitter: '苦味',
  umami: 'うま味',
  astringent: '渋味（収斂感）',
  pungent: '辛味',
  cooling: '冷感',
  warming: '温感',
}

export const DOMAIN_LABEL: Record<Domain, string> = {
  tea: 'お茶',
  chocolate: 'チョコレート',
  spice: 'スパイス',
  herb: 'ハーブ',
}
