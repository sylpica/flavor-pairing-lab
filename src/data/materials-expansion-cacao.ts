import type { Material, ProfileEntry, SensationEntry } from '../types'

// カカオ・チョコレート文献拡充（調査 cacao-compounds-expansion.md、2026-10-31）の新規素材。
// - 実素材4件：現代 Nacional 系（エクアドル）、クローン CCN-51、クローン TSH 565、ドミニカ共和国産 Trinitario ダーク。
//   プロファイルは遺伝子型・試料群レベルの官能／組成の知見であり、個別化合物の寄与実証ではない（tier は general）。
// - 遺伝集団：Motamayor et al. 2008 の10集団のうち、香味の足がかり（近接エンティティの実測）が
//   ある Nacional と Criollo の2集団だけを素材として収録し、足がかりからの推測プロファイル
//   （tier: 'inferred'、強度は足がかり側より一段弱い）を持たせる。集団そのものの香味実測は存在しない。
//   足がかりの無い残り8集団は素材にせず、用語辞典（App.tsx の GLOSSARY）に分類情報として収録する。
//   「選んでも結果が変わらない素材」を作らないための措置（ユーザーの絶対ルール）。
// 新規軸ID（axis-labels への登録は統合担当）:
//   originId: 'ecuador'（エクアドル）, 'brazil-southeast'（ブラジル南東部）, 'dominican-republic'（ドミニカ共和国）, 'amazon-basin'（アマゾン流域）
//   varietyId: 'nacional-modern', 'ccn-51', 'tsh-565', 'trinitario',
//              'gen-amelonado', 'gen-contamana', 'gen-criollo', 'gen-curaray', 'gen-guiana',
//              'gen-iquitos', 'gen-maranon', 'gen-nacional', 'gen-nanay', 'gen-purus'
//   classificationId: 'genetic-group'（遺伝集団）
const p = (noteId: string, intensity: ProfileEntry['intensity'], sourceIds: string[]): ProfileEntry =>
  ({ noteId, intensity, tier: 'general', sourceIds })
const s = (intensity: SensationEntry['intensity'], sourceIds: string[], note?: string): SensationEntry =>
  ({ intensity, tier: 'general', sourceIds, note })

const COLONGES21 = 'colonges-2021-nacional-floral'
const ROTTIERS = 'rottiers-2019-ccn51-nacional'
const MOTAMAYOR = 'motamayor-2008-cacao-populations'

export const expansionChocolateMaterials: Material[] = [
  {
    id: 'choco-nacional-ecuador', domain: 'chocolate', nameJa: 'ダークチョコレート（現代Nacional系・エクアドル）', nameEn: 'Dark chocolate (modern Nacional, Ecuador)',
    scientificName: 'Theobroma cacao L.',
    classification: 'ダーク', classificationId: 'dark', origin: 'エクアドル', originId: 'ecuador',
    variety: '現代Nacional（祖先的NacionalとTrinitarioの混合を含む）', varietyId: 'nacional-modern',
    processing: '発酵・乾燥（リカー化して評価）',
    description: 'エクアドルの現代 Nacional 集団を原料とするダーク／リカー素材。GWAS により花様（Arriba）香りにモノテルペン生合成経路と L-フェニルアラニン分解経路の関与が示され、Nacional 系交配種（EET 系）は果実様・花様の揮発成分が高く、官能でも果実様・酸味方向と実測されている。',
    profile: [p('floral-general', 'moderate', [COLONGES21, ROTTIERS]), p('fruit-general', 'moderate', [ROTTIERS])],
    sensations: {
      sour: s('moderate', [ROTTIERS], 'EET 系交配種の官能評価で酸味方向とされた'),
      bitter: s('unknown', [ROTTIERS], 'CCN-51 との相対比較では苦味・渋味方向ではないとされるが、絶対強度の実測ではない'),
    },
    evidenceTier: 'general',
    scopeNote: '「現代 Nacional」は祖先的 Nacional と導入 Trinitario の混合を含む集団であり（Fouet et al. 2022)、「エクアドル産＝純粋な Nacional」ではない。花様香りは生合成経路レベルの遺伝的関連の実証であり、個別化合物の寄与実証ではない。祖先的（純粋）Nacional への外挿はできない。',
    sourceIds: [COLONGES21, 'colonges-2022-ecuador-aromas', ROTTIERS, 'fouet-2022-nacional-mixture'], roastable: false, extractable: false,
  },
  {
    id: 'choco-ccn51', domain: 'chocolate', nameJa: 'ダークチョコレート（クローンCCN-51）', nameEn: 'Dark chocolate (clone CCN-51)',
    scientificName: 'Theobroma cacao L.',
    classification: 'ダーク', classificationId: 'dark', origin: 'エクアドル', originId: 'ecuador',
    variety: 'CCN-51（クローン）', varietyId: 'ccn-51',
    processing: '発酵・乾燥（リカー化して評価）',
    description: 'エクアドルで育成された高収量クローン。(IMC 67 × ICS 95) × Oriente 1 の交配後代で、遺伝的には Nacional 系ファインフレーバー品種群と大きく異なる。否定的側面も含め実測では、官能評価で苦味・渋味・オフフレーバー方向、パルプの香気強度（AEDA の FD）は比較品種より低い。',
    profile: [p('cacao-note', 'moderate', [ROTTIERS])],
    sensations: {
      bitter: s('moderate', [ROTTIERS], 'Nacional 系交配種との相対比較で苦味・渋味・オフフレーバー方向とされた'),
      astringent: s('moderate', [ROTTIERS], '同上（相対比較の範囲）'),
    },
    evidenceTier: 'general',
    scopeNote: '祖先構成の推定値は研究間で食い違う：Boza et al. 2014 は Iquitos 45.4% を最大成分としたが、Motilal et al. 2026 は新系統 Awajun 45% を最大とし Iquitos 25% と再推定した。参照集団セットに依存する推定値であり、単一の確定値として表示しない。両研究とも Nacional 成分はごくわずかであり、「エクアドル産＝Nacional 系」という推論はこのクローンには成立しない。',
    sourceIds: ['boza-2014-ccn51-genetics', 'motilal-2026-peru-lineages', ROTTIERS, 'kadow-2013-fine-flavour-genotypes', 'chetschik-2018-cocoa-pulp'], roastable: false, extractable: false,
  },
  {
    id: 'choco-tsh565', domain: 'chocolate', nameJa: 'ダークチョコレート（クローンTSH 565・ブラジル）', nameEn: 'Dark chocolate (clone TSH 565, Brazil)',
    scientificName: 'Theobroma cacao L.',
    classification: 'ダーク', classificationId: 'dark', origin: 'ブラジル南東部', originId: 'brazil-southeast',
    variety: 'TSH 565（クローン）', varietyId: 'tsh-565',
    processing: '発酵（在来発酵）',
    description: 'ブラジル南東部の病害抵抗性クローン TSH 565。発酵動態の揮発組成（SPME-HS/GC-MS）と製造チョコレートの官能記述があり、チョコレートは「豊かで果実様、強いカカオ感と苦味」と記述された。β-ミルセン、β-cis-オシメンが多量に検出された（組成レベル）。',
    profile: [p('fruit-general', 'moderate', ['bastos-2019-tsh565']), p('cacao-note', 'strong', ['bastos-2019-tsh565'])],
    sensations: {
      bitter: s('strong', ['bastos-2019-tsh565'], '官能記述「強いカカオ感と苦味」に基づく'),
    },
    evidenceTier: 'general',
    scopeNote: '単一産地・単一発酵条件での組成＋官能記述レベルであり、GC-O・OAV による個別化合物の寄与実証はない。「TSH 565 は一般に優れる」という一般化はできない。',
    sourceIds: ['bastos-2019-tsh565'], roastable: false, extractable: false,
  },
  {
    id: 'choco-dominican-trinitario', domain: 'chocolate', nameJa: 'ダークチョコレート（ドミニカ共和国産Trinitario）', nameEn: 'Dark chocolate (Trinitario, Dominican Republic)',
    scientificName: 'Theobroma cacao L.',
    classification: 'ダーク', classificationId: 'dark', origin: 'ドミニカ共和国', originId: 'dominican-republic',
    variety: 'Trinitario（伝統的分類）', varietyId: 'trinitario',
    processing: '発酵・乾燥・焙煎',
    description: 'ドミニカ共和国産 Trinitario 豆から作ったダークチョコレート54試料の官能・揮発組成研究に基づく素材。産地内のばらつきが本質であり、単一の「ドミニカの味」に固定しない。遺伝背景は Amelonado 祖先が優占する混成である（Boza et al. 2013)。なお Sanchez／Hispaniola は品種名ではなく発酵グレードの呼称である。',
    profile: [],
    sensations: {
      bitter: s('unknown', ['guzman-penella-2023-dominican-dark'], '54試料で苦味・渋味の強さが揮発組成からある程度予測可能とされたが、試料間のばらつきが大きい'),
      astringent: s('unknown', ['guzman-penella-2023-dominican-dark'], '同上'),
    },
    evidenceTier: 'general',
    scopeNote: '予測因子（アセトアルデヒド、ジメチルスルフィド、2,3-ブタネジオール）は相関モデル上の因子であり寄与化合物ではない。苦味・渋味の本体は不揮発成分とされる。平均的プロファイルとして固定しない。',
    sourceIds: ['guzman-penella-2023-dominican-dark', 'boza-2013-dominican-genetic'], roastable: false, extractable: false,
  },

  // ===== 遺伝集団2件（足がかりからの推測プロファイルつき） =====
  {
    id: 'cacao-gen-criollo', domain: 'chocolate', nameJa: 'カカオ遺伝集団 Criollo', nameEn: 'Cacao genetic group: Criollo',
    scientificName: 'Theobroma cacao L.',
    classification: '遺伝集団', classificationId: 'genetic-group', origin: 'アマゾン流域', originId: 'amazon-basin',
    variety: 'Criollo（遺伝集団）', varietyId: 'gen-criollo',
    description: 'Motamayor et al. 2008 が定義したカカオ10遺伝集団の一つで、伝統的品種「クリオロ」に対応する集団。家畜化を受けた集団とされる（Cornejo et al. 2018)。ただし栽培・市販の「クリオロ」の多くは純粋な Criollo 集団ではなく他集団との混合を含む。プロファイルは Criollo 豆そのものの焙煎研究（Frauendorfer & Schieberle 2008：焙煎でストレッカーアルデヒドとフラネオールが強く増加、2-フェニルエタノールは発酵由来で既在）からの推測であり、集団レベルの香味実測ではない。',
    profile: [
      { noteId: 'cacao-note', intensity: 'weak', tier: 'inferred', sourceIds: ['frauendorfer-2008-criollo-roasting'] },
      { noteId: 'caramel', intensity: 'weak', tier: 'inferred', sourceIds: ['frauendorfer-2008-criollo-roasting'] },
      { noteId: 'rose', intensity: 'weak', tier: 'inferred', sourceIds: ['frauendorfer-2008-criollo-roasting'] },
    ],
    sensations: {},
    evidenceTier: 'inferred',
    scopeNote: 'プロファイルは全て推測（未検証）：足がかりは Criollo 単一系統豆の AEDA 研究であり、集団全体の実測ではない。Elwers et al. 2009 では総ポリフェノール量と (−)-エピカテキン量に遺伝型間の遺伝的決定差は認められなかったため、苦味・渋味の差は付けていない。「クリオロは苦渋味が弱い」という単純化の根拠にはならない。',
    sourceIds: [MOTAMAYOR, 'cornejo-2018-cacao-domestication', 'elwers-2009-phenolics-genotypes'], roastable: false, extractable: false,
  },
  {
    id: 'cacao-gen-nacional', domain: 'chocolate', nameJa: 'カカオ遺伝集団 Nacional', nameEn: 'Cacao genetic group: Nacional',
    scientificName: 'Theobroma cacao L.',
    classification: '遺伝集団', classificationId: 'genetic-group', origin: 'アマゾン流域', originId: 'amazon-basin',
    variety: 'Nacional（遺伝集団）', varietyId: 'gen-nacional',
    description: 'Motamayor et al. 2008 が定義したカカオ10遺伝集団の一つで、エクアドルの伝統品種 Nacional（Arriba）の祖先的集団。現代の栽培 Nacional は祖先的 Nacional と導入 Trinitario の混合を含む（Fouet et al. 2022)。プロファイルは、現代 Nacional 系素材の実測プロファイル（花様・果実様）と花様香りの遺伝的研究（Colonges et al. 2021）からの推測であり、本集団そのものの香味実測ではない。',
    profile: [
      { noteId: 'floral-general', intensity: 'weak', tier: 'inferred', sourceIds: [COLONGES21, ROTTIERS] },
      { noteId: 'fruit-general', intensity: 'weak', tier: 'inferred', sourceIds: [ROTTIERS] },
    ],
    sensations: {},
    evidenceTier: 'inferred',
    scopeNote: 'プロファイルは全て推測（未検証）：足がかりは子孫側の現代 Nacional 系素材の実測であり、祖先的集団への外挿を含む。現代 Nacional 系の実測そのものは別素材「ダークチョコレート（現代Nacional系・エクアドル）」に収録している。',
    sourceIds: [MOTAMAYOR, 'fouet-2022-nacional-mixture'], roastable: false, extractable: false,
  },
]
