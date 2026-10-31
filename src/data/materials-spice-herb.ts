import type { Material, ProfileEntry, SensationEntry } from '../types'

// スパイス・ハーブ素材（文献調査 2026-10-31 に基づく）。
// プロファイルは総説・原著に基づく一般的特徴（精油組成の知見を含む）であり、
// 精油の組成比を食品全体の成分比として扱わない。寄与の主張はリンク側でのみ行う。
const p = (noteId: string, intensity: ProfileEntry['intensity'], sourceIds: string[]): ProfileEntry =>
  ({ noteId, intensity, tier: 'general', sourceIds })
const s = (intensity: SensationEntry['intensity'], sourceIds: string[], note?: string): SensationEntry =>
  ({ intensity, tier: 'general', sourceIds, note })

const BP = 'takooree-2019-black-pepper'
const CARD = 'ashokkumar-2020-cardamom'
const CASSIA = 'foods-2025-cassia-oils'
const CLOVE = 'chaieb-2007-clove'
const NUTMEG = 'du-2014-nutmeg-oil'
const GINGER = 'semwal-2015-gingerols'
const TURMERIC = 'yeung-2019-curcumin'
const CUMIN = 'bettaieb-2011-cumin'
const CORIANDER = 'sahib-2013-coriander'
const ANETHOLE = 'anethole-2026-review'
const STARANISE = 'patra-2020-star-anise'
const SAFFRON = 'srivastava-2010-saffron'
const VANILLA = 'molecules-2025-vanilla-pods'
const SANSHO = 'sugai-2005-sanshool-quant'
const HUAJIAO = 'foodchem-2022-huajiao-aroma'
const CHILI = 'abdel-salam-2023-capsaicin'

export const spiceMaterials: Material[] = [
  {
    id: 'spice-black-pepper', domain: 'spice', nameJa: 'ブラックペッパー', nameEn: 'Black pepper', scientificName: 'Piper nigrum L.',
    classification: '果実系スパイス', classificationId: 'fruit-spice', origin: 'インド等', originId: 'multi-origin',
    variety: 'Piper nigrum', varietyId: 'piper-nigrum', usedPart: '果実（未熟果を乾燥）',
    processing: '乾燥', description: 'ピペリンによる辛味と、β-カリオフィレン等を含む揮発性成分の香りを併せ持つ。辛味は香気ではなく呈味・三叉神経感覚である。',
    profile: [p('peppery', 'strong', [BP]), p('wood', 'moderate', [BP])],
    sensations: { pungent: s('strong', ['srinivasan-2007-piperine'], 'ピペリンによる辛味。香りの強さとは別の感覚') },
    evidenceTier: 'general', scopeNote: '総説に基づく一般特徴。香気寄与成分の GC-O による順位付けは調査では未確認。',
    sourceIds: [BP, 'srinivasan-2007-piperine'], roastable: true, extractable: false,
  },
  {
    id: 'spice-white-pepper', domain: 'spice', nameJa: 'ホワイトペッパー', nameEn: 'White pepper', scientificName: 'Piper nigrum L.',
    classification: '果実系スパイス', classificationId: 'fruit-spice', origin: 'インド等', originId: 'multi-origin',
    variety: 'Piper nigrum（果皮を除去）', varietyId: 'piper-nigrum', usedPart: '果実（完熟果から果皮を除去）',
    processing: '水漬け・果皮除去・乾燥', description: 'ブラックペッパーと同種。果皮を除く加工により香味の構成が異なる。個別の香気寄与研究は調査では未確認のため、ブラックペッパーのプロファイルを転用しない。',
    profile: [p('peppery', 'moderate', [BP])],
    sensations: { pungent: s('moderate', ['srinivasan-2007-piperine']) },
    evidenceTier: 'general', scopeNote: '同種であることと加工法の違いに基づく最小限の記載。専用の官能・寄与データは未収録。',
    sourceIds: [BP], roastable: true, extractable: false,
  },
  {
    id: 'spice-cardamom', domain: 'spice', nameJa: 'カルダモン（グリーン）', nameEn: 'Green cardamom', scientificName: 'Elettaria cardamomum (L.) Maton',
    classification: '果実・種子系スパイス', classificationId: 'seed-spice', origin: 'インド・グアテマラ等', originId: 'multi-origin',
    variety: 'Elettaria cardamomum', varietyId: 'elettaria-cardamomum', usedPart: '果実（蒴果）と種子',
    processing: '乾燥', description: '1,8-シネオールとα-テルピニルアセテートが二大成分。組成比は抽出法・乾燥条件で大きく変動する。ブラックカルダモン（別属別種）とは混同しない。',
    profile: [p('cardamom-note', 'strong', [CARD]), p('camphoraceous', 'moderate', [CARD]), p('citrus', 'weak', [CARD])],
    sensations: { warming: s('weak', [CARD]) },
    evidenceTier: 'general', scopeNote: '総説・組成研究に基づく一般特徴。GC-O/AEDA による寄与順位は未確認。',
    sourceIds: [CARD, 'marongiu-2004-cardamom-oil'], safetyNote: undefined, roastable: true, extractable: false,
  },
  {
    id: 'spice-cassia', domain: 'spice', nameJa: 'カシア', nameEn: 'Cassia cinnamon', scientificName: 'Cinnamomum cassia (L.) J.Presl',
    classification: '樹皮系スパイス', classificationId: 'bark-spice', origin: '中国・ベトナム等', originId: 'multi-origin',
    variety: 'Cinnamomum cassia', varietyId: 'cinnamomum-cassia', usedPart: '樹皮',
    processing: '乾燥', description: '樹皮油の主成分は trans-シンナムアルデヒドで、OAV 解析でも中心的な寄与成分だった。葉油は組成が異なる。セイロンシナモンとは別種。',
    profile: [p('cinnamon-note', 'strong', [CASSIA]), p('warm-spice', 'moderate', [CASSIA])],
    sensations: { warming: s('moderate', [CASSIA]), pungent: s('weak', [CASSIA], 'シンナムアルデヒドの TRPA1/TRPV1 活性化による感覚（原著の記述）'), sweet: s('weak', [CASSIA], '甘い香りに伴う知覚であり、糖の甘味ではない') },
    evidenceTier: 'general', scopeNote: 'Foods 2025 の原著（樹皮油）に基づく。クマリンはカシアの判別マーカーとされる（安全性の観点は別途確認が必要）。',
    sourceIds: [CASSIA], roastable: false, extractable: false,
  },
  {
    id: 'spice-ceylon-cinnamon', domain: 'spice', nameJa: 'セイロンシナモン', nameEn: 'Ceylon cinnamon', scientificName: 'Cinnamomum verum J.Presl',
    classification: '樹皮系スパイス', classificationId: 'bark-spice', origin: 'スリランカ等', originId: 'sri-lanka',
    variety: 'Cinnamomum verum', varietyId: 'cinnamomum-verum', usedPart: '樹皮（内皮）',
    processing: '乾燥', description: 'カシアとは別種で、成分プロファイルが異なることが判別研究で示されている。カシアのデータを転用しない。',
    profile: [p('cinnamon-note', 'moderate', ['foodchemx-2025-cinnamon-discrimination'])],
    sensations: { warming: s('weak', ['foodchemx-2025-cinnamon-discrimination']) },
    evidenceTier: 'general', scopeNote: 'カシアとの判別研究（Food Chem X 2025）に基づく種差の記載。セイロン側の寄与成分の直接研究は限定的。',
    sourceIds: ['foodchemx-2025-cinnamon-discrimination'], roastable: false, extractable: false,
  },
  {
    id: 'spice-clove', domain: 'spice', nameJa: 'クローブ', nameEn: 'Clove', scientificName: 'Syzygium aromaticum (L.) Merr. & L.M.Perry',
    classification: '花蕾系スパイス', classificationId: 'flower-spice', origin: 'インドネシア・モルッカ諸島等', originId: 'multi-origin',
    variety: 'Syzygium aromaticum', varietyId: 'syzygium-aromaticum', usedPart: '乾燥花蕾',
    processing: '乾燥', description: '精油の主成分はユージノール（試料により 45–90% と幅が広い）。精油全体の性質は主成分だけでは決まらないことが単体比較研究で示されている。',
    profile: [p('clove-note', 'strong', [CLOVE])],
    sensations: { warming: s('moderate', [CLOVE]) },
    evidenceTier: 'general', scopeNote: '総説に基づく一般特徴。香気寄与の GC-O 検証は調査では未確認。',
    sourceIds: [CLOVE, 'kamatou-2012-eugenol'], roastable: false, extractable: false,
  },
  {
    id: 'spice-nutmeg', domain: 'spice', nameJa: 'ナツメッグ', nameEn: 'Nutmeg', scientificName: 'Myristica fragrans Houtt.',
    classification: '種子系スパイス', classificationId: 'seed-spice', origin: 'インドネシア・モルッカ諸島等', originId: 'multi-origin',
    variety: 'Myristica fragrans', varietyId: 'myristica-fragrans', usedPart: '種子',
    processing: '乾燥', description: 'サビネン・ピネン類等のモノテルペンとフェニルプロパノイド類を含む。部位（種子・メース・葉）で組成が異なる。',
    profile: [p('warm-spice', 'strong', [NUTMEG]), p('wood', 'weak', [NUTMEG])],
    sensations: { warming: s('moderate', [NUTMEG]) },
    evidenceTier: 'general', scopeNote: '組成研究に基づく一般特徴。GC-O 寄与は未確認。ミリスチシンは香気寄与成分ではなく安全性の文脈で扱う。',
    sourceIds: [NUTMEG], safetyNote: 'ミリスチシン等は安全性評価の対象成分。多量摂取は避けること（EFSA評価が調査で確認されている）。', roastable: true, extractable: false,
  },
  {
    id: 'spice-mace', domain: 'spice', nameJa: 'メース', nameEn: 'Mace', scientificName: 'Myristica fragrans Houtt.',
    classification: '種子系スパイス', classificationId: 'seed-spice', origin: 'インドネシア・モルッカ諸島等', originId: 'multi-origin',
    variety: 'Myristica fragrans（仮種皮）', varietyId: 'myristica-fragrans', usedPart: '仮種皮',
    processing: '乾燥', description: 'ナツメッグの種子を包む仮種皮。同じ植物でも部位により精油組成が異なることが部位別研究で示されている。',
    profile: [p('warm-spice', 'moderate', [NUTMEG])],
    sensations: { warming: s('weak', [NUTMEG]) },
    evidenceTier: 'general', scopeNote: '部位別組成研究（Nat Prod Res 2022、調査ファイル参照）に基づく。ナツメッグ種子のプロファイルをそのまま転用しない。',
    sourceIds: [NUTMEG], roastable: false, extractable: false,
  },
  {
    id: 'spice-ginger-fresh', domain: 'spice', nameJa: 'ショウガ（生鮮）', nameEn: 'Fresh ginger', scientificName: 'Zingiber officinale Roscoe',
    classification: '根茎系スパイス', classificationId: 'rhizome-spice', origin: 'アジア各地', originId: 'multi-origin',
    variety: 'Zingiber officinale', varietyId: 'zingiber-officinale', usedPart: '根茎',
    processing: '生鮮', description: '辛味の主成分は[6]-ジンゲロール。乾燥・加熱で脱水生成物のショウガオールが増え、辛味の質が変わる。',
    profile: [p('ginger-note', 'strong', ['nam-2022-ginger-extract']), p('citrus', 'weak', ['nam-2022-ginger-extract'])],
    sensations: { pungent: s('strong', [GINGER]) },
    evidenceTier: 'general', scopeNote: '辛味は総説、香りは抽出物プロファイルの原著に基づく一般特徴。揮発性香気の GC-O 寄与同定は調査では未確認。',
    sourceIds: [GINGER, 'nam-2022-ginger-extract'], roastable: true, extractable: true,
  },
  {
    id: 'spice-turmeric', domain: 'spice', nameJa: 'ターメリック', nameEn: 'Turmeric', scientificName: 'Curcuma longa L.',
    classification: '根茎系スパイス', classificationId: 'rhizome-spice', origin: 'インド等', originId: 'multi-origin',
    variety: 'Curcuma longa', varietyId: 'curcuma-longa', usedPart: '根茎',
    processing: '茹で・乾燥・粉末', description: '色はクルクミノイド（クルクミン等）、香りは揮発性セスキテルペン（ターメロン類等）が担う。色素と香気成分を分離して理解する素材。',
    profile: [p('earth', 'moderate', [TURMERIC]), p('warm-spice', 'moderate', [TURMERIC])],
    sensations: { bitter: s('weak', [TURMERIC]) },
    evidenceTier: 'general', scopeNote: '総説に基づく。個別寄与成分の GC-O 順位は未確認。クルクミン含量（産地により2–5%）は色素の話であり香りの強さではない。',
    sourceIds: [TURMERIC], roastable: false, extractable: false,
  },
  {
    id: 'spice-cumin', domain: 'spice', nameJa: 'クミン', nameEn: 'Cumin', scientificName: 'Cuminum cyminum L.',
    classification: '果実・種子系スパイス', classificationId: 'seed-spice', origin: '地中海・インド等', originId: 'multi-origin',
    variety: 'Cuminum cyminum（産地でケモタイプ差）', varietyId: 'cuminum-cyminum', usedPart: '果実',
    processing: '乾燥（加熱で香りが立つ使い方が一般的）', description: 'クミンアルデヒドが主成分として繰り返し報告される。産地により γ-テルピネン型等のケモタイプ差がある。',
    profile: [p('warm-spice', 'strong', [CUMIN]), p('earth', 'weak', [CUMIN])],
    sensations: { warming: s('moderate', [CUMIN]) },
    evidenceTier: 'general', scopeNote: '組成研究に基づく。主成分であることと寄与最大は同一ではなく、GC-O 寄与検証は未確認。',
    sourceIds: [CUMIN], roastable: true, extractable: false,
  },
  {
    id: 'spice-coriander-seed', domain: 'spice', nameJa: 'コリアンダーシード', nameEn: 'Coriander seed', scientificName: 'Coriandrum sativum L.',
    classification: '果実・種子系スパイス', classificationId: 'seed-spice', origin: '地中海・インド等', originId: 'multi-origin',
    variety: 'Coriandrum sativum（種子）', varietyId: 'coriandrum-sativum', usedPart: '乾燥果実',
    processing: '乾燥', description: '種子油の主成分はリナロール。葉（シラントロ）とは成分が全く異なり、混同しない。',
    profile: [p('citrus', 'moderate', [CORIANDER]), p('floral-general', 'moderate', [CORIANDER])],
    sensations: {},
    evidenceTier: 'general', scopeNote: '総説に基づく。種子油のリナロール組成%は調査で確認した総説要旨に数値がなく、数値は表示しない。',
    sourceIds: [CORIANDER], roastable: true, extractable: false,
  },
  {
    id: 'spice-fennel-seed', domain: 'spice', nameJa: 'フェンネルシード', nameEn: 'Fennel seed', scientificName: 'Foeniculum vulgare Mill.',
    classification: '果実・種子系スパイス', classificationId: 'seed-spice', origin: '地中海等', originId: 'multi-origin',
    variety: 'Foeniculum vulgare（果実）', varietyId: 'foeniculum-vulgare', usedPart: '果実',
    processing: '乾燥', description: 'trans-アネトールが代表成分とされる一方、果実油でエストラゴールが支配的だった原著もあり、部位・試料依存性が高い。',
    profile: [p('anise', 'strong', [ANETHOLE]),
      { noteId: 'camphoraceous', intensity: 'weak', tier: 'measured', sourceIds: ['zeller-2006-fennel-impact'] }],
    sensations: { sweet: s('moderate', [ANETHOLE], 'アネトールの甘い香味による知覚。糖の含有とは別'),
      cooling: { intensity: 'weak', tier: 'measured', sourceIds: ['zeller-2006-fennel-impact'], note: '1,8-シネオールの寄与に基づく' } },
    evidenceTier: 'general', scopeNote: 'アネトール総説とフェンネル部位別研究（調査ファイル参照）に基づく。無条件の一般化はしない。カンファー様のノートと冷感は、フェンネル自体の AEDA・OAV・官能評価（Zeller & Rychlik 2006）でフェンコンと 1,8-シネオールが寄与成分とされたことに基づく実測。',
    sourceIds: [ANETHOLE, 'zeller-2006-fennel-impact'], roastable: false, extractable: true,
  },
  {
    id: 'spice-star-anise', domain: 'spice', nameJa: 'スターアニス（八角）', nameEn: 'Star anise', scientificName: 'Illicium verum Hook.f.',
    classification: '果実系スパイス', classificationId: 'fruit-spice', origin: '中国・ベトナム等', originId: 'multi-origin',
    variety: 'Illicium verum', varietyId: 'illicium-verum', usedPart: '果実（星形の集合果）',
    processing: '乾燥', description: '精油の主成分は trans-アネトール。シキミ酸は香味成分ではない。',
    profile: [p('anise', 'strong', [STARANISE]),
      { noteId: 'citrus', intensity: 'weak', tier: 'measured', sourceIds: ['zhang-2015-star-anise-volatiles'] }],
    sensations: { sweet: s('moderate', [STARANISE], 'アネトールの甘い香味による知覚') },
    evidenceTier: 'general', scopeNote: '総説に基づく。柑橘のノートはスターアニス自体の AEDA 研究（Zhang 2015）でリナロール・リモネンが寄与成分とされたことに基づく実測。',
    sourceIds: [STARANISE, 'zhang-2015-star-anise-volatiles'], safetyNote: '有毒なシキミ（Illicium anisatum）との誤同定リスクが指摘される。食用として確認された Illicium verum のみを扱う。', roastable: false, extractable: false,
  },
  {
    id: 'spice-saffron', domain: 'spice', nameJa: 'サフラン', nameEn: 'Saffron', scientificName: 'Crocus sativus L.',
    classification: '花系スパイス', classificationId: 'flower-spice', origin: 'イラン・スペイン等', originId: 'multi-origin',
    variety: 'Crocus sativus', varietyId: 'crocus-sativus', usedPart: '花の柱頭（乾燥）',
    processing: '乾燥', description: '香り=サフラナール、苦味=ピクロクロシン、色=クロシンと機能分担が総説で明記される。産地により揮発成分と官能特性が異なる。',
    profile: [p('hay', 'moderate', [SAFFRON]), p('honey', 'moderate', [SAFFRON]), p('floral-general', 'weak', [SAFFRON])],
    sensations: { bitter: s('moderate', ['srivastava-2010-saffron'], 'ピクロクロシンによる苦味') },
    evidenceTier: 'general', scopeNote: '総説と産地比較研究に基づく。AEDA/OAV による寄与確定は未確認。',
    sourceIds: [SAFFRON, 'saffron-2024-origins'], roastable: false, extractable: true,
  },
  {
    id: 'spice-vanilla', domain: 'spice', nameJa: 'バニラ', nameEn: 'Vanilla', scientificName: 'Vanilla planifolia Jacks. ex Andrews',
    classification: '果実系スパイス', classificationId: 'fruit-spice', origin: 'マダガスカル・メキシコ等', originId: 'multi-origin',
    variety: 'Vanilla planifolia', varietyId: 'vanilla-planifolia', usedPart: '果実（鞘）をキュアリング',
    processing: 'キュアリング（発酵・乾燥）', description: '特徴香の主因はバニリンだが、鞘には200以上の揮発成分が報告され、バニリン単独では天然バニラの複雑さは再現できないと原著が明記する。バニリンは生鞘では配糖体として存在し、キュアリングで遊離する。',
    profile: [p('vanilla', 'strong', [VANILLA]), p('cream-note', 'weak', [VANILLA])],
    sensations: { sweet: s('moderate', [VANILLA], '甘い香りに伴う知覚') },
    evidenceTier: 'general', scopeNote: '原著・総説に基づく一般特徴。キュアリング済み鞘のバニリン1–2%程度という記述は条件依存であり、香りの強さの数値としては使わない。',
    sourceIds: [VANILLA, 'jfst-2018-vanilla-extraction'], roastable: false, extractable: true,
  },
  {
    id: 'spice-sansho', domain: 'spice', nameJa: '山椒', nameEn: 'Sansho (Japanese pepper)', scientificName: 'Zanthoxylum piperitum (L.) DC.',
    classification: '果実系スパイス', classificationId: 'fruit-spice', origin: '日本', originId: 'japan',
    variety: 'Zanthoxylum piperitum', varietyId: 'zanthoxylum-piperitum', usedPart: '果実（果皮）・若葉・花',
    processing: '乾燥・粉末', description: '果実の主サンショールはヒドロキシ-α-サンショールで、しびれと麻痺感を生じる。辛味の程度はサンショール量と正の相関があるが、閾値は成分により異なる。揮発性の香りは Jiang & Kubota 2004 の AEDA で、ゲラニオール・シトロネラール・リナロール・ケイ皮酸メチルが青果・完熟果・乾燥果皮に共通する基本香への寄与成分として同定されている。',
    profile: [
      { noteId: 'citrus', intensity: 'moderate', tier: 'measured', sourceIds: ['jiang-2004-sansho-volatiles'] },
      { noteId: 'rose', intensity: 'moderate', tier: 'measured', sourceIds: ['jiang-2004-sansho-volatiles'] },
      { noteId: 'floral-general', intensity: 'moderate', tier: 'measured', sourceIds: ['jiang-2004-sansho-volatiles'] },
      { noteId: 'cinnamon-note', intensity: 'moderate', tier: 'measured', sourceIds: ['jiang-2004-sansho-volatiles'] },
    ],
    sensations: { pungent: s('strong', [SANSHO], 'しびれ（tingling）・麻痺感（numbing）。唐辛子の灼熱感とは異なる感覚') },
    evidenceTier: 'general', scopeNote: 'Sugai et al. 2005 の定量・官能研究と Jiang & Kubota 2004 の AEDA に基づく。寄与はリンク側で measured として区別する。成熟段階で組成と香りの質は変わり、葉（木の芽）の香りには転用しない。',
    sourceIds: [SANSHO, 'jiang-2004-sansho-volatiles'], roastable: false, extractable: false,
  },
  {
    id: 'spice-huajiao', domain: 'spice', nameJa: '花椒', nameEn: 'Huajiao (Sichuan pepper)', scientificName: 'Zanthoxylum bungeanum Maxim.',
    classification: '果実系スパイス', classificationId: 'fruit-spice', origin: '中国・四川等', originId: 'china-sichuan',
    variety: 'Zanthoxylum bungeanum', varietyId: 'zanthoxylum-bungeanum', usedPart: '乾燥果皮',
    processing: '乾燥', description: '「麻」はヒドロキシ-α-サンショール等のアルキルアミドによるしびれで、約50Hzの振動知覚に対応することがヒト実験で示された。香気は GC-O/AEDA/OAV で主要香気活性成分（リナロール、リモネン、1,8-シネオール等）が同定されている。緑花椒（別種）のデータは未収録。',
    profile: [p('citrus', 'moderate', [HUAJIAO]), p('floral-general', 'moderate', [HUAJIAO]), p('camphoraceous', 'weak', [HUAJIAO])],
    sensations: { pungent: s('strong', ['hagura-2013-tingling'], 'しびれ（麻）。灼熱感とは異なる機械受容性の感覚') },
    evidenceTier: 'general', scopeNote: '漢源産試料の GC-O 研究に基づく香気の記載（寄与はリンク側で measured として区別）。他産地・緑花椒への一般化はしない。',
    sourceIds: [HUAJIAO, 'hagura-2013-tingling'], roastable: true, extractable: false,
  },
  {
    id: 'spice-chili', domain: 'spice', nameJa: '唐辛子', nameEn: 'Chili pepper', scientificName: 'Capsicum spp.',
    classification: '果実系スパイス', classificationId: 'fruit-spice', origin: '中南米原産・世界各地', originId: 'multi-origin',
    variety: 'Capsicum annuum 等（種・品種で大きく異なる）', varietyId: 'capsicum-spp', usedPart: '果実',
    processing: '乾燥・生鮮', description: '主辛味成分はカプサイシン（TRPV1作動薬）で灼熱感を生じる。種・品種により辛味が大きく異なる。揮発性成分の査読原著による確定リストは調査では未確認のため、香りプロファイルは登録していない。',
    profile: [],
    sensations: { pungent: s('strong', [CHILI], 'カプサイシンによる灼熱感。品種により強さは大きく異なる'), warming: s('moderate', [CHILI]) },
    evidenceTier: 'general', scopeNote: '総説に基づく機構の記載。品種別のカプサイシノイド組成と揮発成分は調査では未確認であり、特定品種のプロファイルは作らない。',
    sourceIds: [CHILI], roastable: true, extractable: false,
  },
]

const PEPPERMINT = 'mckay-2006-peppermint-tea'
const SPEARMINT = 'mahendran-2021-spearmint'
const ROSEMARY = 'molecules-2023-chemotypes-algeria'
const THYME = 'galovicova-2021-thyme'
const BASIL = 'zheljazkov-2008-basil'
const LEMONGRASS = 'chembiodivers-2025-lemongrass-nepal'
const LEMONBALM = 'miraj-2017-lemon-balm'
const LAVENDER = 'aly-2025-lavender'
const CHAMOMILE = 'mckay-2006-chamomile-tea'
const SAGE = 'craft-2017-sage-chemotaxonomy'
const OREGANO = 'nurzynska-2025-oregano'
const LAUREL = 'molecules-2019-laurus-bulgaria'
const DILL = 'jirovetz-2003-dill-seed'
const TARRAGON = 'ekiert-2021-tarragon'

export const herbMaterials: Material[] = [
  {
    id: 'herb-peppermint', domain: 'herb', nameJa: 'ペパーミント', nameEn: 'Peppermint', scientificName: 'Mentha × piperita L.',
    classification: '芳香性ハーブ', classificationId: 'aromatic-herb', origin: '欧州等', originId: 'multi-origin',
    variety: 'Mentha × piperita', varietyId: 'mentha-piperita', usedPart: '葉',
    processing: '生鮮・乾燥', description: '精油の主要成分はメントールとメントン（単一試料でメントール40.7%、メントン23.4%の報告。精油中の値で一般値ではない）。スペアミントとは主成分が明確に異なる。',
    profile: [p('minty', 'strong', [PEPPERMINT])],
    sensations: { cooling: s('strong', [PEPPERMINT], 'メントールに伴う冷感。一般知見として記載し、知覚の実証は受容体・官能研究による') },
    evidenceTier: 'general', scopeNote: '総説と単一試料の組成・嗅覚評価研究に基づく。%は精油中の値。',
    sourceIds: [PEPPERMINT, 'schmidt-2009-peppermint-oil'], roastable: false, extractable: true,
  },
  {
    id: 'herb-spearmint', domain: 'herb', nameJa: 'スペアミント', nameEn: 'Spearmint', scientificName: 'Mentha spicata L.',
    classification: '芳香性ハーブ', classificationId: 'aromatic-herb', origin: '欧州等', originId: 'multi-origin',
    variety: 'Mentha spicata（ケモタイプあり）', varietyId: 'mentha-spicata', usedPart: '葉',
    processing: '生鮮・乾燥', description: '主成分はカルボンとして繰り返し報告される。ただしプレゴン型等のケモタイプも存在し、常にカルボン主体とは限らない。ペパーミント（メントール主体）と同一視しない。',
    profile: [p('minty', 'moderate', [SPEARMINT]), p('herb-general', 'moderate', [SPEARMINT]), p('citrus', 'weak', [SPEARMINT])],
    sensations: { cooling: s('weak', [SPEARMINT], 'メントール主体ではないため、冷感はペパーミントより穏やかとされる（一般知見）') },
    evidenceTier: 'general', scopeNote: '総説に基づく。産地別の組成%は二次集計のため数値は表示しない。GC-O 寄与は未確認。柑橘のノートは総説が集計するリモネンの組成に基づく。',
    sourceIds: [SPEARMINT], roastable: false, extractable: true,
  },
  {
    id: 'herb-rosemary', domain: 'herb', nameJa: 'ローズマリー', nameEn: 'Rosemary', scientificName: 'Salvia rosmarinus Spenn.（シノニム Rosmarinus officinalis L.）',
    classification: '芳香性ハーブ', classificationId: 'aromatic-herb', origin: '地中海等', originId: 'multi-origin',
    variety: 'ケモタイプ：1,8-シネオール型／カンファー型／ベルベノン型', varietyId: 'rosemary-chemotypes', usedPart: '葉',
    processing: '生鮮・乾燥', description: 'ケモタイプにより主成分が異なる（1,8-シネオール、カンファー、α-ピネン、ベルベノン）。産地からケモタイプを断定しない。学名は Salvia 属への再分類があり、両名をシノニムとして保持する。',
    profile: [p('camphoraceous', 'strong', [ROSEMARY]), p('herb-general', 'moderate', [ROSEMARY])],
    sensations: {},
    evidenceTier: 'general', scopeNote: 'ケモタイプ総説に基づく。個別試料の組成%は試料依存のため代表値を表示しない。',
    sourceIds: [ROSEMARY], roastable: false, extractable: true,
  },
  {
    id: 'herb-thyme', domain: 'herb', nameJa: 'タイム', nameEn: 'Thyme', scientificName: 'Thymus vulgaris L.',
    classification: '芳香性ハーブ', classificationId: 'aromatic-herb', origin: '地中海等', originId: 'multi-origin',
    variety: '6ケモタイプ（チモール型・カルバクロール型・リナロール型ほか）', varietyId: 'thyme-chemotypes', usedPart: '地上部・葉',
    processing: '生鮮・乾燥', description: '化学的多型を示す代表例。「タイム精油＝チモール主体」はチモール型に限る話で、種全体の固定属性ではない。p-シメンとγ-テルピネンはチモール／カルバクロールの生合成前駆体。',
    profile: [p('herb-general', 'strong', [THYME]), p('warm-spice', 'moderate', [THYME]),
      { noteId: 'camphoraceous', intensity: 'weak', tier: 'measured', sourceIds: ['diaz-maroto-2005-fennel-thyme'] }],
    sensations: { warming: s('moderate', [THYME]) },
    evidenceTier: 'general', scopeNote: 'Galovičová et al. 2021 に基づくケモタイプの記載。食品香気への GC-O 寄与順位は未確認。カンファー様のノートは、ケモタイプ別試料の GC-O で 1,8-シネオールとボルネオールが寄与成分とされたことに基づく実測（ケモタイプ条件つき）。',
    sourceIds: [THYME, 'diaz-maroto-2005-fennel-thyme'], roastable: false, extractable: true,
  },
  {
    id: 'herb-basil', domain: 'herb', nameJa: 'バジル（スイートバジル）', nameEn: 'Sweet basil', scientificName: 'Ocimum basilicum L.',
    classification: '芳香性ハーブ', classificationId: 'aromatic-herb', origin: 'アジア・地中海等', originId: 'multi-origin',
    variety: '化学型が系統で大きく異なる（7群）', varietyId: 'basil-chemotypes', usedPart: '葉',
    processing: '生鮮（乾燥でも利用）', description: '38系統の同一圃場比較で組成が7群に分かれた。リナロール型、メチルチャビコール型等、どれが主体かは系統で全く異なる。ホーリーバジル（別種）とは混同しない。',
    profile: [p('herb-general', 'strong', [BASIL]), p('floral-general', 'moderate', [BASIL]), p('anise', 'weak', [BASIL], )],
    sensations: {},
    evidenceTier: 'general', scopeNote: 'Zheljazkov et al. 2008 の一次根拠に基づく化学型差の記載。単一の「バジルの香り」を固定しない。',
    sourceIds: [BASIL], safetyNote: 'エストラゴール（メチルチャビコール）等には精油の高濃度使用に関する安全性の議論がある。通常の食品使用と分けて扱う。', roastable: false, extractable: true,
  },
  {
    id: 'herb-lemongrass', domain: 'herb', nameJa: 'レモングラス', nameEn: 'Lemongrass', scientificName: 'Cymbopogon citratus (DC.) Stapf',
    classification: '芳香性ハーブ（ハーブティー用）', classificationId: 'aromatic-herb', origin: '東南アジア等', originId: 'multi-origin',
    variety: 'Cymbopogon citratus', varietyId: 'cymbopogon-citratus', usedPart: '葉・茎',
    processing: '生鮮・乾燥', description: 'シトラール（ゲラニアール＋ネラール）主体の報告が多い一方、ゲラニオール主体の報告も存在し、試料依存性が高い。どちらが一般的かは断定しない。',
    profile: [p('citrus', 'strong', [LEMONGRASS]),
      { noteId: 'rose', intensity: 'weak', tier: 'inferred', sourceIds: ['molecules-2023-cymbopogon-nepal'] }],
    sensations: {},
    evidenceTier: 'general', scopeNote: '矛盾する報告を両方記録する（Chem. Biodivers. 2025／Molecules 2023）。部位（葉・茎）でも組成が異なる。バラのノートはゲラニオール主体の報告（Molecules 2023）に基づく推測（弱）であり、シトラール主体の試料では現れない場合がある。',
    sourceIds: [LEMONGRASS, 'molecules-2023-cymbopogon-nepal'], roastable: false, extractable: true,
  },
  {
    id: 'herb-lemon-balm', domain: 'herb', nameJa: 'レモンバーム', nameEn: 'Lemon balm', scientificName: 'Melissa officinalis L.',
    classification: '芳香性ハーブ（ハーブティー用）', classificationId: 'aromatic-herb', origin: '欧州等', originId: 'multi-origin',
    variety: 'Melissa officinalis', varietyId: 'melissa-officinalis', usedPart: '葉',
    processing: '生鮮・乾燥', description: 'シトラール・シトロネラール等のレモン様香気成分を含むが、組成は産地・条件で大きく異なる。精油含量自体が低いハーブで、非揮発性のロスマリン酸も重要な成分群。',
    profile: [p('citrus', 'moderate', [LEMONBALM]), p('herb-general', 'moderate', [LEMONBALM])],
    sensations: {},
    evidenceTier: 'general', scopeNote: '総説に基づく。試料間の組成差が大きいため代表組成は表示しない。',
    sourceIds: [LEMONBALM], roastable: false, extractable: true,
  },
  {
    id: 'herb-lavender', domain: 'herb', nameJa: 'ラベンダー（真正）', nameEn: 'Lavender', scientificName: 'Lavandula angustifolia Mill.',
    classification: '芳香性ハーブ（花）', classificationId: 'aromatic-herb', origin: '地中海・フランス等', originId: 'multi-origin',
    variety: 'Lavandula angustifolia（ラバンディンとは別 taxon）', varietyId: 'lavandula-angustifolia', usedPart: '花（花序）',
    processing: '乾燥', description: 'リナロールと酢酸リナリルが品質を決める成分と総説で位置づけられる。交雑種ラバンディンとは組成・規格が別であり混同しない。',
    profile: [p('lavender', 'strong', [LAVENDER]), p('floral-general', 'moderate', [LAVENDER])],
    sensations: {},
    evidenceTier: 'general', scopeNote: '総説に基づく。規格値（ISO等）と実測値を混在させない。GC-O 寄与順位は未確認。',
    sourceIds: [LAVENDER], roastable: false, extractable: true,
  },
  {
    id: 'herb-chamomile', domain: 'herb', nameJa: 'カモミール（ジャーマン）', nameEn: 'German chamomile', scientificName: 'Matricaria chamomilla L.',
    classification: '芳香性ハーブ（花・ハーブティー用）', classificationId: 'aromatic-herb', origin: '欧州等', originId: 'multi-origin',
    variety: 'Matricaria chamomilla（ローマンカモミールとは別種）', varietyId: 'matricaria-chamomilla', usedPart: '花頭（乾燥花）',
    processing: '乾燥', description: 'α-ビサボロールとその酸化物、カマズレン等が主要揮発性成分。化学型により組成範囲が極めて広く、単一の組成を想定できない。',
    profile: [p('floral-general', 'moderate', [CHAMOMILE]), p('honey', 'weak', [CHAMOMILE]), p('hay', 'weak', [CHAMOMILE])],
    sensations: { sweet: s('weak', [CHAMOMILE], '甘い香りに伴う知覚の一般記述') },
    evidenceTier: 'general', scopeNote: '総説と欧州各国比較研究（調査ファイル参照）に基づく。ローマンカモミールの成分は未収録。',
    sourceIds: [CHAMOMILE], roastable: false, extractable: true,
  },
  {
    id: 'herb-sage', domain: 'herb', nameJa: 'セージ（コモンセージ）', nameEn: 'Common sage', scientificName: 'Salvia officinalis L.',
    classification: '芳香性ハーブ', classificationId: 'aromatic-herb', origin: '地中海等', originId: 'multi-origin',
    variety: '5ケモタイプが提案されている', varietyId: 'sage-chemotypes', usedPart: '葉',
    processing: '生鮮・乾燥', description: 'α-ツジョン、カンファー、1,8-シネオール等が主要成分。総説は「セージ油の組成と香気記述を対応づけた研究は現在ない」と明記しており、組成から香味を断定しない。',
    profile: [p('camphoraceous', 'moderate', [SAGE]), p('herb-general', 'moderate', [SAGE]),
      { noteId: 'green-leaf', intensity: 'weak', tier: 'measured', sourceIds: ['jonas-2021-sage-sensomics'] }],
    sensations: { cooling: { intensity: 'weak', tier: 'measured', sourceIds: ['jonas-2021-sage-sensomics', 'chiang-2024-sage-odorants'], note: '1,8-シネオールの寄与に基づく' } },
    evidenceTier: 'general', scopeNote: 'Craft et al. 2017 に基づく。クラリセージ（別種）の数値は転用しない。青草のノートと冷感は、生葉のセンソミクス（再構成・欠落試験）と乾燥セージの寄与研究に基づく実測として加えた。',
    sourceIds: [SAGE, 'jonas-2021-sage-sensomics', 'chiang-2024-sage-odorants'], safetyNote: 'ツジョンは毒性が論じられる成分。食品としての可否・限度は本データでは断定しない。', roastable: false, extractable: true,
  },
  {
    id: 'herb-oregano', domain: 'herb', nameJa: 'オレガノ', nameEn: 'Oregano', scientificName: 'Origanum vulgare L.',
    classification: '芳香性ハーブ', classificationId: 'aromatic-herb', origin: '地中海等', originId: 'multi-origin',
    variety: 'カルバクロール型／チモール型（亜種差あり）', varietyId: 'oregano-chemotypes', usedPart: '葉・地上部',
    processing: '乾燥', description: 'カルバクロール、チモール、p-シメン、γ-テルピネンが主要成分。「オレガノ」は複数種・亜種を含む総称として流通するため、種を特定しない数値は一般値として扱わない。',
    profile: [p('herb-general', 'strong', [OREGANO]), p('warm-spice', 'moderate', [OREGANO]),
      { noteId: 'smoky', intensity: 'weak', tier: 'measured', sourceIds: ['sadecka-2008-oregano-aeda'] }],
    sensations: { warming: s('moderate', [OREGANO]) },
    evidenceTier: 'general', scopeNote: '総説に基づく。燻しのノートはオレガノ自体の AEDA でグアイアコールが FD factor 2,000 を示したことに基づく実測。',
    sourceIds: [OREGANO, 'sadecka-2008-oregano-aeda'], roastable: false, extractable: true,
  },
  {
    id: 'herb-laurel', domain: 'herb', nameJa: 'ローレル（月桂樹）', nameEn: 'Bay laurel', scientificName: 'Laurus nobilis L.',
    classification: '芳香性ハーブ（葉）', classificationId: 'aromatic-herb', origin: '地中海等', originId: 'multi-origin',
    variety: 'Laurus nobilis', varietyId: 'laurus-nobilis', usedPart: '葉',
    processing: '乾燥', description: '葉精油の主成分は 1,8-シネオールだが、産地で 31.9–58.59% と幅がある。部位（葉・小枝・果実）でも組成が異なる。',
    profile: [p('camphoraceous', 'moderate', [LAUREL]), p('herb-general', 'moderate', [LAUREL]), p('minty', 'weak', [LAUREL])],
    sensations: {},
    evidenceTier: 'general', scopeNote: '部位別・産地別の組成研究に基づく。%は精油中の値で、代表値として固定しない。ミント様のノートは主成分 1,8-シネオールの組成に基づく。',
    sourceIds: [LAUREL], roastable: false, extractable: true,
  },
  {
    id: 'herb-dill-seed', domain: 'herb', nameJa: 'ディルシード', nameEn: 'Dill seed', scientificName: 'Anethum graveolens L.',
    classification: '種子系ハーブ', classificationId: 'seed-herb', origin: '欧州・インド等', originId: 'multi-origin',
    variety: 'Anethum graveolens（種子）', varietyId: 'anethum-graveolens', usedPart: '種子（果実）',
    processing: '乾燥', description: '種子精油はカルボンとリモネンが主体。嗅覚測定を併用した研究で D-カルボンと D-リモネンが香気インパクト化合物とされた（長期保存種子という特殊条件）。葉とは組成が明確に異なる。',
    profile: [p('herb-general', 'moderate', [DILL]), p('citrus', 'moderate', [DILL]),
      { noteId: 'minty', intensity: 'weak', tier: 'measured', sourceIds: ['jirovetz-2003-dill-seed'] }],
    sensations: {},
    evidenceTier: 'general', scopeNote: 'Jirovetz et al. 2003 に基づく。通常の新鮮種子の代表値として無条件に使わない。ミント様のノートは、嗅覚測定併用研究で香気インパクト化合物とされた D-カルボンに基づく実測。',
    sourceIds: [DILL], roastable: false, extractable: false,
  },
  {
    id: 'herb-dill-weed', domain: 'herb', nameJa: 'ディルウィード（葉）', nameEn: 'Dill weed', scientificName: 'Anethum graveolens L.',
    classification: '芳香性ハーブ', classificationId: 'aromatic-herb', origin: '欧州・インド等', originId: 'multi-origin',
    variety: 'Anethum graveolens（葉・地上部）', varietyId: 'anethum-graveolens', usedPart: '葉・地上部',
    processing: '生鮮', description: '葉・地上部の精油は α-フェランドレン、リモネン、ディルエーテル等が報告され、種子とは組成が明確に異なる。同一素材として統合しない。',
    profile: [p('herb-general', 'strong', [DILL]), p('citrus', 'weak', [DILL])],
    sensations: {},
    evidenceTier: 'general', scopeNote: '部位差の知見に基づく最小限の記載。葉側の寄与検証は未確認。',
    sourceIds: [DILL], roastable: false, extractable: true,
  },
  {
    id: 'herb-tarragon', domain: 'herb', nameJa: 'タラゴン（フレンチ）', nameEn: 'French tarragon', scientificName: 'Artemisia dracunculus L.',
    classification: '芳香性ハーブ', classificationId: 'aromatic-herb', origin: '欧州等', originId: 'multi-origin',
    variety: 'フレンチ型（ロシア型とは化学組成が異なる栽培型）', varietyId: 'tarragon-french', usedPart: '葉・地上部',
    processing: '生鮮・乾燥', description: 'エストラゴール（メチルチャビコール）が甘いアニス様香気の主体と記述される。ロシア型はエストラゴールを欠き、香気が異なる。',
    profile: [p('anise', 'strong', [TARRAGON]), p('herb-general', 'moderate', [TARRAGON])],
    sensations: { sweet: s('weak', [TARRAGON], 'エストラゴールの甘いアニス様香気に伴う知覚') },
    evidenceTier: 'general', scopeNote: '総説に基づく。総説の集計値（エストラゴール40–85%等）は異なる試料の併記であり、単一組成として読まない。',
    sourceIds: [TARRAGON], safetyNote: 'エストラゴールは精油の高濃度使用で安全性が論じられる。通常のスパイスとしての使用と分けて表示する。', roastable: false, extractable: true,
  },
]
