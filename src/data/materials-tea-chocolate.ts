import type { Material, ProfileEntry, SensationEntry } from '../types'

// お茶・チョコレート素材（第1弾）。
// プロファイルは総説・原著に基づく「茶類・種類レベルの一般的特徴」が中心であり、
// 品種固有の実測ではない。その旨を scopeNote に明記する（要件7.3）。
// 三軸は classification（分類）× origin（産地）× variety（品種・系統）で分離する。
const p = (noteId: string, intensity: ProfileEntry['intensity'], sourceIds: string[]): ProfileEntry =>
  ({ noteId, intensity, tier: 'general', sourceIds })
const s = (intensity: SensationEntry['intensity'], sourceIds: string[], note?: string): SensationEntry =>
  ({ intensity, tier: 'general', sourceIds, note })

const Z = 'zeng-2025-tea-vocs'
const TAN = 'tan-2019-japanese-green-tea'
const ZHANG = 'zhang-2020-tea-chemistry-taste'
const YE = 'ye-2022-bitterness-astringency'

export const teaMaterials: Material[] = [
  {
    id: 'tea-sencha', domain: 'tea', nameJa: '煎茶', nameEn: 'Sencha', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: 'やぶきた（品種一般として扱う）', varietyId: 'yabukita',
    processing: '蒸青・不発酵', description: '日本の蒸青緑茶の代表。青葉・磯様の香りとうま味・渋味のバランスが特徴とされる。',
    profile: [p('green-leaf', 'strong', [TAN]), p('seaweed', 'moderate', ['kumazawa-1999-sencha-odorants']), p('floral-general', 'weak', [Z])],
    sensations: { umami: s('moderate', [ZHANG]), astringent: s('moderate', [YE]), bitter: s('moderate', [YE]), sweet: s('weak', [ZHANG]) },
    evidenceTier: 'general', scopeNote: 'Tan et al. 2019 等の市販試料・総説に基づく煎茶一般の特徴。特定産地・品種の実測プロファイルではない。',
    sourceIds: [TAN, 'kumazawa-1999-sencha-odorants', Z], roastable: false, extractable: true,
  },
  {
    id: 'tea-gyokuro', domain: 'tea', nameJa: '玉露', nameEn: 'Gyokuro', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: '品種一般', varietyId: 'general-cultivar',
    processing: '被覆栽培・蒸青', description: '被覆栽培によりうま味成分が多いとされる高級緑茶。',
    profile: [p('seaweed', 'moderate', [TAN]), p('green-leaf', 'moderate', [TAN])],
    sensations: { umami: s('strong', [TAN, ZHANG]), astringent: s('weak', [YE]), sweet: s('moderate', [ZHANG]) },
    evidenceTier: 'general', scopeNote: 'Tan et al. 2019 に基づく玉露一般の特徴。品種固有の実測ではない。',
    sourceIds: [TAN, ZHANG], roastable: false, extractable: true,
  },
  {
    id: 'tea-matcha', domain: 'tea', nameJa: '抹茶', nameEn: 'Matcha', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: '品種一般', varietyId: 'general-cultivar',
    processing: '被覆栽培・碾茶を粉末化', description: '碾茶を石臼等で粉末にしたもの。うま味はテアニンの寄与が分子・官能研究で示されている。',
    profile: [p('green-leaf', 'moderate', [TAN]), p('seaweed', 'weak', [TAN])],
    sensations: { umami: s('strong', ['kaneko-2006-matcha-umami']), bitter: s('moderate', [YE]), astringent: s('moderate', [YE]) },
    evidenceTier: 'general', scopeNote: 'Kaneko et al. 2006 は抹茶のうま味の研究。香りは Tan et al. 2019 に基づく一般特徴。',
    sourceIds: [TAN, 'kaneko-2006-matcha-umami'], roastable: false, extractable: true,
  },
  {
    id: 'tea-hojicha', domain: 'tea', nameJa: 'ほうじ茶', nameEn: 'Hojicha', scientificName: 'Camellia sinensis',
    classification: '緑茶（焙煎）', classificationId: 'green-tea-roasted', origin: '日本', originId: 'japan',
    variety: '品種一般', varietyId: 'general-cultivar',
    processing: '緑茶を焙煎済み', description: '緑茶を焙煎した茶。焙煎香が主体で、渋味は緑茶より穏やかとされる。すでに焙煎済みのため追加の焙煎シミュレーション対象外。',
    profile: [p('roast-general', 'strong', [TAN]), p('toast', 'moderate', [TAN])],
    sensations: { astringent: s('weak', [YE]), bitter: s('weak', [YE]) },
    evidenceTier: 'general', scopeNote: 'Tan et al. 2019 に基づくほうじ茶一般の特徴。',
    sourceIds: [TAN], roastable: false, extractable: true,
  },
  {
    id: 'tea-white-baimudan', domain: 'tea', nameJa: '白茶（白牡丹）', nameEn: 'White tea (Bai Mudan)', scientificName: 'Camellia sinensis',
    classification: '白茶', classificationId: 'white-tea', origin: '中国・福建', originId: 'china-fujian',
    variety: '白牡丹（等級呼称）', varietyId: 'bai-mudan',
    processing: '萎凋・乾燥', description: '萎凋と乾燥を主体とする軽微な加工の茶。蜂蜜様・花様の甘い香りが報告される。',
    profile: [p('honey', 'moderate', ['chen-2020-white-tea-odorants']), p('floral-general', 'moderate', ['chen-2020-white-tea-odorants']), p('hay', 'weak', [Z])],
    sensations: { sweet: s('moderate', [ZHANG]), astringent: s('weak', [YE]) },
    evidenceTier: 'general', scopeNote: 'Chen et al. 2020 等に基づく白茶一般の特徴。白牡丹固有の実測プロファイルとして断定しない。',
    sourceIds: ['chen-2020-white-tea-odorants', Z], roastable: false, extractable: true,
  },
  {
    id: 'tea-tieguanyin', domain: 'tea', nameJa: '鉄観音', nameEn: 'Tieguanyin oolong', scientificName: 'Camellia sinensis',
    classification: '青茶（烏龍茶）', classificationId: 'oolong-tea', origin: '中国・福建', originId: 'china-fujian',
    variety: '鉄観音', varietyId: 'tieguanyin',
    processing: '半発酵・焙煎度に幅あり', description: '福建省安渓の烏龍茶。焙煎度により香りの傾向が変わることが原著で示されている。',
    profile: [p('floral-general', 'moderate', [Z]), p('orchid', 'moderate', [Z])],
    sensations: { astringent: s('moderate', [YE]), sweet: s('weak', [ZHANG]) },
    evidenceTier: 'general', scopeNote: '総説に基づく烏龍茶一般＋鉄観音の焙煎度研究（Lan et al. 2022 は青心烏龍の焙煎度研究で、鉄観音そのものの実測ではない）。',
    sourceIds: [Z, 'lan-2022-qingxin-roasting'], roastable: true, extractable: true,
  },
  {
    id: 'tea-dancong', domain: 'tea', nameJa: '鳳凰単叢', nameEn: 'Fenghuang Dancong', scientificName: 'Camellia sinensis',
    classification: '青茶（烏龍茶）', classificationId: 'oolong-tea', origin: '中国・広東', originId: 'china-guangdong',
    variety: '鳳凰単叢（単株系）', varietyId: 'dancong',
    processing: '半発酵', description: '広東省鳳凰山の単株系烏龍茶。香型の多様さで知られ、主要香型の香気物質が比較研究で示されている。',
    profile: [p('floral-general', 'strong', ['li-wang-2020-dancong-types']), p('fruit-general', 'moderate', ['li-wang-2020-dancong-types'])],
    sensations: { astringent: s('moderate', [YE]) },
    evidenceTier: 'general', scopeNote: 'Li & Wang 2020 の主要香型の比較に基づく一般特徴。個別の香型・単株の実測プロファイルではない。',
    sourceIds: ['li-wang-2020-dancong-types'], roastable: true, extractable: true,
  },
  {
    id: 'tea-black-general', domain: 'tea', nameJa: '紅茶（一般）', nameEn: 'Black tea (general)', scientificName: 'Camellia sinensis',
    classification: '紅茶', classificationId: 'black-tea', origin: '中国・インド等', originId: 'multi-origin',
    variety: '品種一般', varietyId: 'general-cultivar',
    processing: '酵素酸化（発酵）', description: '酵素酸化を進めた茶。花様・果実様・蜂蜜様の香りと、テアフラビン類による渋味が特徴とされる。',
    profile: [p('floral-general', 'moderate', [Z]), p('honey', 'moderate', [Z]), p('fruit-general', 'moderate', [Z]), p('almond', 'weak', [Z])],
    sensations: { astringent: s('moderate', ['scharbert-2005-black-tea-taste']), bitter: s('moderate', [YE]), sweet: s('weak', [ZHANG]) },
    evidenceTier: 'general', scopeNote: '総説と紅茶浸出液の呈味研究に基づく紅茶一般の特徴。ダージリン等の産地固有プロファイルは別途実測が必要。アーモンドのノートはベンズアルデヒドが紅茶の OAV>1 重要香気成分と総説で位置づけられることに基づく（リンク側）。',
    sourceIds: [Z, 'scharbert-2005-black-tea-taste'], roastable: false, extractable: true,
  },
  {
    id: 'tea-dark-puer', domain: 'tea', nameJa: '黒茶（プーアル茶）', nameEn: 'Dark tea (Pu-erh)', scientificName: 'Camellia sinensis',
    classification: '黒茶', classificationId: 'dark-tea', origin: '中国・雲南', originId: 'china-yunnan',
    variety: '品種一般', varietyId: 'general-cultivar',
    processing: '後発酵（微生物発酵）', description: '微生物発酵を経る茶。土様・木質的な香りが報告される。',
    profile: [p('earth', 'moderate', [Z]), p('wood', 'moderate', [Z])],
    sensations: { astringent: s('weak', [YE]), sweet: s('weak', [ZHANG]) },
    evidenceTier: 'general', scopeNote: '総説に基づく黒茶一般の特徴。生茶・熟茶の区別や貯蔵年数の影響は未収録。',
    sourceIds: [Z], roastable: false, extractable: true,
  },
]

export const chocolateMaterials: Material[] = [
  {
    id: 'choco-dark-roasted', domain: 'chocolate', nameJa: 'ダークチョコレート（焙煎）', nameEn: 'Dark chocolate (roasted)',
    classification: 'ダーク', classificationId: 'dark', origin: '産地一般', originId: 'multi-origin',
    variety: '系統一般', varietyId: 'general-lineage', cacaoPercent: 70,
    processing: '発酵・乾燥・焙煎', description: '焙煎カカオから作るダークチョコレート。焙煎で生じるピラジン類やストレッカーアルデヒド類が香気に関与する。',
    profile: [p('cacao-note', 'strong', ['acpangan-2023-dark-chocolate-aroma']), p('roast-general', 'moderate', ['acpangan-2023-dark-chocolate-aroma']), p('nut-general', 'moderate', ['putri-2024-cocoa-sensory'])],
    sensations: { bitter: s('strong', ['stark-2006-cocoa-nibs-taste']), astringent: s('moderate', [YE]), sweet: s('weak', [ZHANG]) },
    evidenceTier: 'general', scopeNote: 'Ac-Pangan et al. 2023 等に基づくダークチョコ一般の特徴。産地・系統固有の実測ではない。',
    sourceIds: ['acpangan-2023-dark-chocolate-aroma', 'putri-2024-cocoa-sensory'], roastable: true, extractable: false,
  },
  {
    id: 'choco-dark-unroasted', domain: 'chocolate', nameJa: 'ダークチョコレート（未焙煎）', nameEn: 'Dark chocolate (unroasted)',
    classification: 'ダーク', classificationId: 'dark', origin: '産地一般', originId: 'multi-origin',
    variety: '系統一般', varietyId: 'general-lineage', cacaoPercent: 70,
    processing: '発酵・乾燥・未焙煎（最小加工）', description: '焙煎を経ない最小加工のダークチョコレート。焙煎品との香気成分・官能の違いが原著で比較されている。',
    profile: [p('cacao-note', 'moderate', ['acpangan-2023-dark-chocolate-aroma']), p('fruit-general', 'moderate', ['acpangan-2023-dark-chocolate-aroma'])],
    sensations: { bitter: s('moderate', ['stark-2006-cocoa-nibs-taste']), astringent: s('moderate', [YE]), sour: s('moderate', ['acpangan-2023-dark-chocolate-aroma']) },
    evidenceTier: 'general', scopeNote: 'Ac-Pangan et al. 2023 の未焙煎試料との比較に基づく。市販品全般への一般化には限界がある。',
    sourceIds: ['acpangan-2023-dark-chocolate-aroma'], roastable: true, extractable: false,
  },
  {
    id: 'choco-milk', domain: 'chocolate', nameJa: 'ミルクチョコレート', nameEn: 'Milk chocolate',
    classification: 'ミルク', classificationId: 'milk', origin: '産地一般', originId: 'multi-origin',
    variety: '系統一般', varietyId: 'general-lineage',
    processing: '乳製品を配合', description: '乳製品を含むチョコレート。AEDAによる主要香気成分の研究がある。ラクトン類がクリーミーさに関与すると報告される。',
    profile: [p('milk-note', 'moderate', ['schnermann-1997-milk-chocolate']), p('cream-note', 'moderate', ['samfass-2021-crumb-chocolate-lactones']), p('caramel', 'moderate', ['fricke-2020-milk-chocolate-sensomics'])],
    sensations: { sweet: s('strong', ['fricke-2020-milk-chocolate-sensomics']), bitter: s('weak', [YE]) },
    evidenceTier: 'general', scopeNote: 'Schnermann & Schieberle 1997、Fricke & Schieberle 2020 等に基づくミルクチョコ一般の特徴。',
    sourceIds: ['schnermann-1997-milk-chocolate', 'samfass-2021-crumb-chocolate-lactones', 'fricke-2020-milk-chocolate-sensomics'], roastable: false, extractable: false,
  },
  {
    id: 'choco-white', domain: 'chocolate', nameJa: 'ホワイトチョコレート', nameEn: 'White chocolate',
    classification: 'ホワイト', classificationId: 'white', origin: '産地一般', originId: 'multi-origin',
    variety: '系統分類の対象外（製品種類）', varietyId: 'not-a-lineage',
    processing: 'カカオバター＋乳製品（カカオマスを含まない）', description: 'カカオバターと乳製品からなる製品。香味は主に乳製品由来であり、モデル系研究に基づく説明である点に注意。',
    profile: [p('milk-note', 'strong', ['stewart-2017-model-white-chocolate']), p('vanilla', 'moderate', ['stewart-2017-model-white-chocolate']), p('cream-note', 'moderate', ['stewart-2017-model-white-chocolate'])],
    sensations: { sweet: s('strong', ['stewart-2017-model-white-chocolate']), bitter: s('weak', [YE], 'カカオマスを含まないため苦味は基本的に乏しい（一般知見）') },
    evidenceTier: 'general', scopeNote: 'Stewart et al. 2017 はモデル系ホワイトチョコの研究。市販品の実測プロファイルではない。',
    sourceIds: ['stewart-2017-model-white-chocolate'], roastable: false, extractable: false,
  },
  {
    id: 'choco-ruby', domain: 'chocolate', nameJa: 'ルビーチョコレート', nameEn: 'Ruby chocolate',
    classification: 'ルビー', classificationId: 'ruby', origin: '産地一般', originId: 'multi-origin',
    variety: '系統分類の対象外（製品種類）', varietyId: 'not-a-lineage',
    processing: '独自製法（詳細は公表範囲に限界）', description: 'ピンク色とベリー様の酸味を特徴とする製品種類。ルビーはカカオの遺伝系統ではなく製品分類である。組成・官能の研究がある。',
    profile: [p('berry', 'moderate', ['seremet-2019-ruby-sensory']), p('fruit-general', 'moderate', ['seremet-2019-ruby-sensory'])],
    sensations: { sour: s('moderate', ['seremet-2019-ruby-sensory']), sweet: s('moderate', ['seremet-2019-ruby-sensory']) },
    evidenceTier: 'general', scopeNote: 'Seremet et al. 2019、Tuenter et al. 2021 に基づく。製法の詳細は非公表部分があり、一般化には限界がある。',
    sourceIds: ['seremet-2019-ruby-sensory', 'tuenter-2021-ruby-composition'], roastable: false, extractable: false,
  },
  {
    id: 'choco-100', domain: 'chocolate', nameJa: 'カカオ分100%チョコレート', nameEn: '100% cacao chocolate',
    classification: 'ダーク', classificationId: 'dark', origin: '産地一般', originId: 'multi-origin',
    variety: '系統一般', varietyId: 'general-lineage', cacaoPercent: 100,
    processing: '砂糖不使用', description: '砂糖を含まないカカオ分100%のチョコレート。苦味成分の研究対象となった試料群がある。',
    profile: [p('cacao-note', 'strong', ['mcclure-2022-100-percent-chocolate'])],
    sensations: { bitter: s('strong', ['mcclure-2022-100-percent-chocolate']), astringent: s('strong', [YE]) },
    evidenceTier: 'general', scopeNote: 'McClure et al. 2022 等に基づく。個別製品の実測ではない。',
    sourceIds: ['mcclure-2022-100-percent-chocolate'], roastable: false, extractable: false,
  },
]
