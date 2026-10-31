import type { Material, ProfileEntry, SensationEntry } from '../types'

// 茶品種の素材化（第4ラウンド）。継承研究記録（docs/research/pairing-inherited/ の
// cultivars-japan.md、cultivars-world.md、literature-expansion-c-cultivars.md、
// cultivar-lineage-inventory-20261031.md）で交配親・系統と品種固有の所見が
// 文書化されている品種のみを対象にした。
// プロファイルの作り方（素材ごとに scopeNote に明記）:
// - 品種固有の文書化された所見（官能記述・検出レベル）に基づくノート
// - 交配親の香味から一段弱めた合成
// - 交配親の香味の足し算による合成
// いずれも推測（inferred）区分とし、素材自体の香気成分の寄与研究があるとは扱わない。
// 化合物リンクは作らない（親からの化合物の継承主張はしない）。
// 新規 varietyId: okumidori / saemidori / asatsuyu / kanayamidori / harumidori /
// sayamakaori / fukumidori / benifuuki / benihomare / sofu / fujikaori / meiryoku /
// seimei / tsuyuhikari / koushun / komakage / hongyu / jinxuan
// （axis-labels.ts へ正規ラベルを追加すること）
const pi = (noteId: string, intensity: ProfileEntry['intensity'], sourceIds: string[]): ProfileEntry =>
  ({ noteId, intensity, tier: 'inferred', sourceIds })
const si = (intensity: SensationEntry['intensity'], sourceIds: string[], note?: string): SensationEntry =>
  ({ intensity, tier: 'inferred', sourceIds, note })

const KINOSHITA = 'kinoshita-2015-kagoshima-cultivar-aroma'
const SHIRATORI = 'shiratori-2022-aroma-green-tea-cultivars'
const SASAKI18 = 'sasaki-2018-cultivar-blend-preference'
const YOSHIDA18 = 'yoshida-2018-seimei-breeding'
const OYANAGIZU = 'oyanagizu-2003-tsuyuhikari-breeding'
const NARO95 = 'naro-1995-meiryoku'
const SAIJO = 'saijo-kuwahara-1967-black-tea-aroma'
const SAWAI = 'sawai-2004-sofu-methyl-anthranilate'
const PENG = 'peng-2022-hongyu-thesis'
const CHEN25 = 'chen-2025-hongyu-infusion-color'
const WANG25 = 'wang-2025-jinxuan-milk-aroma'

export const expansionTea2Materials: Material[] = [
  {
    id: 'tea-okumidori', domain: 'tea', nameJa: 'おくみどり', nameEn: 'Okumidori', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: 'おくみどり（茶農林32号）', varietyId: 'okumidori',
    processing: '蒸青・不発酵', description: 'やぶきた×静在16の交配で育成された晩生の煎茶用品種。鹿児島の品種別官能評価では「上品な・やさしい・フルーティー」と記述された。',
    profile: [pi('green-leaf', 'moderate', [KINOSHITA]), pi('seaweed', 'weak', [KINOSHITA]), pi('fruit-general', 'weak', [KINOSHITA])],
    sensations: {},
    evidenceTier: 'inferred',
    scopeNote: '果実のノートは木下 2015 の官能記述子（鹿児島・一番茶・煎茶標準製法、45名パネル）に基づく推測。青草・海藻のノートは交配親（やぶきた）の香味から一段弱めた合成（推測）で、来歴は茶農林登録品種一覧表・農研機構ハンドブックによる。おくみどり自体の香気成分の実測・寄与研究は未確認。',
    sourceIds: [KINOSHITA], roastable: false, extractable: true,
  },
  {
    id: 'tea-saemidori', domain: 'tea', nameJa: 'さえみどり', nameEn: 'Saemidori', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: 'さえみどり（茶農林40号）', varietyId: 'saemidori',
    processing: '蒸青・不発酵', description: 'やぶきた×あさつゆの交配で育成された早生の煎茶用品種。鹿児島の品種別官能評価では「甘さ・なめらかな・さつま芋」と記述された。',
    profile: [pi('caramel', 'weak', [KINOSHITA]), pi('green-leaf', 'moderate', [KINOSHITA])],
    sensations: { umami: si('moderate', ['pairing-saemidori-okumidori-2006-cultivar-breeding', 'naro-2022-tea-cultivar-handbook']) },
    evidenceTier: 'inferred',
    scopeNote: 'キャラメルのノートは木下 2015 の官能記述子「さつま芋」を甘い香りの方向として読み替えた推測。青草のノートは交配親（やぶきた）の香味から一段弱めた合成（推測）。ケルセチン配糖体が多いことは含有の知見であり、香味の根拠にはしていない。うま味の感覚は第11ラウンドで追加したもので、育成報告（2006）の「アミノ酸含量が高いためうま味に富む」と農研機構『茶品種ハンドブック第6版』の品種解説に基づく推測（評価レベルの記述であり、呈味の定量データではない）。',
    sourceIds: [KINOSHITA, 'pairing-saemidori-okumidori-2006-cultivar-breeding', 'naro-2022-tea-cultivar-handbook'], roastable: false, extractable: true,
  },
  {
    id: 'tea-asatsuyu', domain: 'tea', nameJa: 'あさつゆ', nameEn: 'Asatsuyu', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: 'あさつゆ（茶農林2号）', varietyId: 'asatsuyu',
    processing: '蒸青・不発酵', description: '宇治在来種の実生から選抜された煎茶用品種。被覆をしなくても うま味が強いとされ「天然玉露」と呼ばれる。鹿児島の品種別官能評価では「独特な・さつま芋・香りの強い」と記述された。さえみどり・つゆひかりの交配親。',
    profile: [pi('caramel', 'weak', [KINOSHITA])],
    sensations: { umami: si('moderate', ['saga-2019-promising-tea-cultivars']) },
    evidenceTier: 'inferred',
    scopeNote: 'キャラメルのノートは木下 2015 の官能記述子「さつま芋」を甘い香りの方向として読み替えた推測。うま味の感覚は第11ラウンドで追加したもので、公的機関の品種解説（佐賀県「有望茶品種」：天然玉露とも呼ばれる高級茶向き品種で、滋味・香気とも最上級と評価）に基づく推測（特性評価レベルの記述であり、呈味の定量データではない）。有機酸含量の実測（白井 2019／2022）は含有の知見であり、香味の根拠にはしていない。',
    sourceIds: [KINOSHITA, 'saga-2019-promising-tea-cultivars'], roastable: false, extractable: true,
  },
  {
    id: 'tea-kanayamidori', domain: 'tea', nameJa: 'かなやみどり', nameEn: 'Kanayamidori', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: 'かなやみどり（茶農林30号）', varietyId: 'kanayamidori',
    processing: '蒸青・不発酵', description: 'S6（静岡在来種実生）×やぶきたの交配で育成された煎茶用品種。鹿児島の品種別官能評価では「クリーミー・花のような・フルーティー」と記述された。はるみどり・香駿の交配親。',
    profile: [pi('cream-note', 'weak', [KINOSHITA]), pi('floral-general', 'weak', [KINOSHITA]), pi('fruit-general', 'weak', [KINOSHITA])],
    sensations: {},
    evidenceTier: 'inferred',
    scopeNote: '3ノートとも木下 2015 の官能記述子に基づく推測（記述子レベルであり、成分の検出・寄与の根拠ではない）。強遮光条件下でアミノ酸組成に特徴があることは条件付きの含有データであり、呈味には反映していない。',
    sourceIds: [KINOSHITA], roastable: false, extractable: true,
  },
  {
    id: 'tea-harumidori', domain: 'tea', nameJa: 'はるみどり', nameEn: 'Harumidori', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: 'はるみどり（茶農林48号）', varietyId: 'harumidori',
    processing: '蒸青・不発酵', description: 'かなやみどり×やぶきたの交配で育成された煎茶用品種。鹿児島の品種別官能評価では「花のような・桜葉のような・フルーティー」と記述された。',
    profile: [pi('floral-general', 'weak', [KINOSHITA]), pi('fruit-general', 'weak', [KINOSHITA]), pi('almond', 'weak', [KINOSHITA])],
    sensations: { umami: si('moderate', ['naro-2022-tea-cultivar-handbook']) },
    evidenceTier: 'inferred',
    scopeNote: '花様・果実のノートは木下 2015 の官能記述子に基づく推測。アーモンドのノートは同記述子「桜葉のような」を、桜葉の甘い香りの方向として読み替えた推測である。うま味の感覚は第11ラウンドで追加したもので、農研機構の品種解説（育成時評価「渋みが少なく うま味が強い」）に基づく推測（評価レベルの記述であり、呈味の定量データではない）。',
    sourceIds: [KINOSHITA, 'naro-2022-tea-cultivar-handbook'], roastable: false, extractable: true,
  },
  {
    id: 'tea-sayamakaori', domain: 'tea', nameJa: 'さやまかおり', nameEn: 'Sayamakaori', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: 'さやまかおり（茶農林31号）', varietyId: 'sayamakaori',
    processing: '蒸青・不発酵', description: 'やぶきたの自然交雑実生から選抜された煎茶用品種（埼玉県育成）。香気発揚処理を施した「香り緑茶」では、ジャスミンラクトンとシス-ジャスモンの含量が やぶきた より有意に高かった。',
    profile: [pi('jasmine', 'weak', [SHIRATORI]), pi('floral-general', 'weak', [SHIRATORI])],
    sensations: {},
    evidenceTier: 'inferred',
    scopeNote: '白鳥ら 2022 の知見は香気発揚処理（萎凋様の処理）を施した緑茶での品種間差であり、処理を施さない通常煎茶でも同じ差があるとは限らない。その条件の範囲での推測として表示する。',
    sourceIds: [SHIRATORI], roastable: false, extractable: true,
  },
  {
    id: 'tea-fukumidori', domain: 'tea', nameJa: 'ふくみどり', nameEn: 'Fukumidori', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: 'ふくみどり（茶農林36号）', varietyId: 'fukumidori',
    processing: '蒸青・不発酵', description: 'やぶきた×23F1107（さやまみどり×やぶきたのF1）の交配で育成された煎茶用品種（埼玉県育成）。消費者嗜好に基づく品種ブレンド研究では「こくのあるうま味が強い。香気はやや青臭が感じられる」と記述された。',
    profile: [pi('green-leaf', 'weak', [SASAKI18])],
    sensations: { umami: si('moderate', [SASAKI18]) },
    evidenceTier: 'inferred',
    scopeNote: '佐々木 2018（茶業研究報告の資料区分）の官能属性記述に基づく推測。茨城県の品種特性資料（2007）でも荒茶成分の実測表と「やぶきたと異なる品種特有の香気」が報告されているが、香気成分の同定は行われていない。',
    sourceIds: [SASAKI18], roastable: false, extractable: true,
  },
  {
    id: 'tea-benifuuki', domain: 'tea', nameJa: 'べにふうき', nameEn: 'Benifuuki', scientificName: 'Camellia sinensis',
    classification: '紅茶', classificationId: 'black-tea', origin: '日本', originId: 'japan',
    variety: 'べにふうき（茶農林44号）', varietyId: 'benifuuki',
    processing: '酵素酸化（発酵）ほか用途により異なる', description: 'べにほまれ×枕Cd86（ダージリン系の導入系統）の交配で育成された紅茶・半発酵茶兼用品種。低温除湿萎凋の試験では香気成分量が全体に多く、リナロール、サリチル酸メチル、ゲラニオール、(Z)-ジャスモン、ジャスミンラクトン等が増加し、インドールは10倍超に増えた。',
    profile: [pi('floral-general', 'weak', [KINOSHITA]), pi('rose', 'weak', [KINOSHITA]), pi('minty', 'weak', [KINOSHITA])],
    sensations: {},
    evidenceTier: 'inferred',
    scopeNote: '木下 2015 の萎凋パート（低温除湿萎凋条件）での成分増加と、農研機構の「軽く萎凋するとダージリン様のフレーバーが発揚する」という特性記述に基づく推測。メチル化カテキン（EGCG3″Me）が多いことは含有・機能性の知見であり、香味の根拠にはしていない。紅茶に加工した場合の品種固有の香気実測は未確認。',
    sourceIds: [KINOSHITA], roastable: false, extractable: true,
  },
  {
    id: 'tea-benihomare', domain: 'tea', nameJa: 'べにほまれ', nameEn: 'Benihomare', scientificName: 'Camellia sinensis var. assamica',
    classification: '紅茶', classificationId: 'black-tea', origin: '日本', originId: 'japan',
    variety: 'べにほまれ（茶農林1号）', varietyId: 'benihomare',
    processing: '酵素酸化（発酵）', description: 'インドから導入した種子の実生を選抜した紅茶用品種。アッサム系の血統を持ち、べにふうきの種子親。1967年のGC比較では、紅茶にした場合に β-フェニルエチルアルコールが多いことが報告された。',
    profile: [pi('rose', 'weak', [SAIJO])],
    sensations: {},
    evidenceTier: 'inferred',
    scopeNote: '西条・桑原 1967（GC による検出・相対量の比較）で報告された β-フェニルエチルアルコールの多さに基づく推測。現代的な寄与評価（AEDA 等）ではなく、試料は当場産の特定茶期のものである。',
    sourceIds: [SAIJO], roastable: false, extractable: true,
  },
  {
    id: 'tea-sofu', domain: 'tea', nameJa: 'そうふう', nameEn: 'Sofu', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: 'そうふう（茶農林49号）', varietyId: 'sofu',
    processing: '蒸青・不発酵（半発酵茶にも用いられる）', description: 'やぶきた×静印雑131（アッサム系の導入系統）の交配で育成された緑茶・半発酵茶兼用品種。品種特異的な香気成分としてアントラニル酸メチルが同定されている。',
    profile: [pi('floral-general', 'weak', [SAWAI]), pi('fruit-general', 'weak', [SAWAI]), pi('orchid', 'weak', [SAWAI, 'naro-2022-tea-cultivar-handbook'])],
    sensations: { astringent: si('weak', [KINOSHITA], '木下 2015 の低温除湿萎凋条件の官能で、苦渋味が強い品種群とされたことに基づく') },
    evidenceTier: 'inferred',
    scopeNote: 'Sawai et al. 2004 がアントラニル酸メチルを そうふう の品種特異的香気成分として同定したことに基づく推測（同定と閾値推定の研究であり、寄与量の順位は示されていない）。煎茶での AEDA 研究（茶業研究報告 114, 2012）では果実様・花様が やぶきた より強いとされたが、書誌（著者）が同定できないため出典登録は見送った。渋味は木下 2015 の萎凋条件での官能所見に基づく推測で、通常の煎茶での実測ではない。蘭のノートは第11ラウンドで追加したもので、公的品種解説で「東洋ランのような花香」と特徴づけられることと、上記の品種特異的香気成分の同定に基づく推測。',
    sourceIds: [SAWAI, KINOSHITA, 'naro-2022-tea-cultivar-handbook'], roastable: false, extractable: true,
  },
  {
    id: 'tea-fujikaori', domain: 'tea', nameJa: '藤かおり', nameEn: 'Fujikaori', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: '藤かおり（静印雑131×やぶきたの交配系統）', varietyId: 'fujikaori',
    processing: '蒸青・不発酵', description: '静印雑131×やぶきたの交配系統。そうふうと同じ花粉親由来で、品種特異的な香気成分アントラニル酸メチルを含むことが確認されている。',
    profile: [pi('floral-general', 'weak', [SAWAI]), pi('green-leaf', 'moderate', [SAWAI])],
    sensations: {},
    evidenceTier: 'inferred',
    scopeNote: '花様のノートは Sawai et al. 2004（アントラニル酸メチルの同定）に基づく推測。青草のノートは交配親（やぶきた）の香味から一段弱めた合成（推測）。品種登録の詳細は継承調査でも未確認であり、交配系統としての記録に基づく。',
    sourceIds: [SAWAI], roastable: false, extractable: true,
  },
  {
    id: 'tea-meiryoku', domain: 'tea', nameJa: 'めいりょく', nameEn: 'Meiryoku', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: 'めいりょく（茶農林35号）', varietyId: 'meiryoku',
    processing: '蒸青・不発酵', description: 'やぶきた×Z1の交配で育成された煎茶用品種。育成時評価では香気・滋味とも良好で清涼感があるとされた。',
    profile: [pi('floral-general', 'weak', [NARO95]), pi('green-leaf', 'moderate', [NARO95])],
    sensations: { cooling: si('weak', [NARO95], '育成時評価の「清涼感がある」に基づく') },
    evidenceTier: 'inferred',
    scopeNote: '花様のノートと冷感は農研機構の育成時評価（1995）の官能記述に基づく推測。青草のノートは交配親（やぶきた）の香味から一段弱めた合成（推測）。萎凋処理時に花香が強く感じられた品種群に含まれるが、花香成分量の多さは本品種では確認されていない。',
    sourceIds: [NARO95], roastable: false, extractable: true,
  },
  {
    id: 'tea-seimei', domain: 'tea', nameJa: 'せいめい', nameEn: 'Seimei', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: 'せいめい（種苗法登録第27874号）', varietyId: 'seimei',
    processing: '蒸青・不発酵（被覆栽培にも適する）', description: 'ふうしゅん×さえみどりの交配で育成された緑茶用品種。育成報告では やぶきた より全窒素・遊離アミノ酸が多く、タンニンは さえみどり 並に少ないとされ、育成機関の公表特性では旨味が強く渋みが少ない。',
    profile: [pi('caramel', 'weak', [YOSHIDA18]), pi('green-leaf', 'weak', [YOSHIDA18])],
    sensations: { umami: si('moderate', [YOSHIDA18]), astringent: si('weak', [YOSHIDA18]) },
    evidenceTier: 'inferred',
    scopeNote: '呈味は吉田ら 2018 の育成報告（荒茶の成分含量と育成機関の公表特性）に基づく推測。香りのノートは交配親（さえみどり）の香味の足し算による合成（推測）であり、せいめい自体の香気の実測・官能データは未確認。',
    sourceIds: [YOSHIDA18], roastable: false, extractable: true,
  },
  {
    id: 'tea-tsuyuhikari', domain: 'tea', nameJa: 'つゆひかり', nameEn: 'Tsuyuhikari', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: 'つゆひかり（種苗法登録第11103号）', varietyId: 'tsuyuhikari',
    processing: '蒸青・不発酵', description: '静7132×あさつゆの交配で育成された煎茶用品種（静岡県育成）。育成論文の成分データでは、一番茶で総遊離アミノ酸・テアニンが やぶきた より多く、タンニンが少なかった。官能概評は「香気は爽やか、滋味は旨味に富み温和」。',
    profile: [pi('caramel', 'weak', [OYANAGIZU])],
    sensations: { umami: si('moderate', [OYANAGIZU]), astringent: si('weak', [OYANAGIZU]) },
    evidenceTier: 'inferred',
    scopeNote: '呈味は小柳津ら 2003 の育成論文（荒茶の成分データと官能概評）に基づく推測。香りのノートは交配親（あさつゆ）の香味の足し算による合成（推測）であり、つゆひかり自体の香気成分のデータは未確認。',
    sourceIds: [OYANAGIZU], roastable: false, extractable: true,
  },
  {
    id: 'tea-koushun', domain: 'tea', nameJa: '香駿', nameEn: 'Koshun', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: '香駿（種苗法登録第8131号）', varietyId: 'koushun',
    processing: '蒸青・不発酵', description: 'くらさわ×かなやみどりの交配で育成された煎茶用品種（静岡県育成）。香気発揚処理を施した「香り緑茶」では、ジャスミンラクトンが やぶきた より多く、クマリン含量が やぶきた・さやまかおり より有意に高かった。',
    profile: [pi('jasmine', 'weak', [SHIRATORI]), pi('floral-general', 'weak', [SHIRATORI]), pi('cream-note', 'weak', [SHIRATORI])],
    sensations: {},
    evidenceTier: 'inferred',
    scopeNote: 'ジャスミン・花様のノートは白鳥ら 2022（香気発揚処理条件での成分の品種間差と官能）に基づく推測。クリームのノートは交配親（かなやみどり）の香味から一段弱めた合成（推測）。萎凋によりバラ様の甘い花香が発揚することは農研機構の成果情報の記述の範囲であり、通常煎茶への一般化はしていない。',
    sourceIds: [SHIRATORI], roastable: false, extractable: true,
  },
  {
    id: 'tea-komakage', domain: 'tea', nameJa: 'こまかげ', nameEn: 'Komakage', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: 'こまかげ（京都府の民間育成品種）', varietyId: 'komakage',
    processing: '被覆栽培・蒸青（玉露・てん茶用）', description: '京都府の民間育成品種（平野甚之丞選抜、旧系統名 平野55号）。玉露・てん茶用。消費者嗜好に基づく品種ブレンド研究では「こくのあるうま味は少ないがさっぱりした味で、甘い香気がしっかり感じられる」と記述された。',
    profile: [pi('honey', 'weak', [SASAKI18])],
    sensations: {},
    evidenceTier: 'inferred',
    scopeNote: '佐々木 2018 の官能属性記述（甘い香気）に基づく推測であり、根拠はこの1件の記述のみ。品種固有の成分データは未確認。',
    sourceIds: [SASAKI18], roastable: false, extractable: true,
  },
  {
    id: 'tea-hongyu', domain: 'tea', nameJa: '紅玉（台茶18号）', nameEn: 'Hong Yu (TTES No. 18)', scientificName: 'Camellia sinensis',
    classification: '紅茶', classificationId: 'black-tea', origin: '台湾・南投', originId: 'taiwan-nantou',
    variety: '紅玉（台茶18号）', varietyId: 'hongyu',
    processing: '酵素酸化（発酵）・条形紅茶', description: '緬甸大葉種 B-729（アッサム系）×台湾野生山茶 B-607の交配で育成された紅茶用品種（台湾・魚池）。父本は別種として扱われる台湾山茶（Camellia formosensis）系で、種間交雑に由来する。修士論文の GC-MS では3季を通じてリナロールとサリチル酸メチルが最も豊富な揮発成分だった。公的品種解説ではシナモン・ミント様の香りが特徴とされる。',
    profile: [pi('floral-general', 'weak', [PENG]), pi('minty', 'weak', [PENG]), pi('cinnamon-note', 'weak', [PENG])],
    sensations: { astringent: si('weak', [CHEN25], 'Chen et al. 2025 で若葉カテキンとテアフラビン生成量が青心系より高いことに基づく') },
    evidenceTier: 'inferred',
    scopeNote: '香りのノートは彭 2022（学位論文、GC-MS による検出・含有レベル。寄与は著者の推定の範囲）に基づく推測。シナモンのノートは第11ラウンドで追加したもので、同論文の摘要が紅玉紅茶の特徴として挙げる「薄荷及肉桂般的獨特香氣」（薄荷と肉桂＝シナモン様の独特な香り）という品種特性の記述に基づく推測（同定成分との対応は未検証）。呈味は Chen et al. 2025 の成分実測（含有）からの推測。',
    sourceIds: [PENG, CHEN25], roastable: false, extractable: true,
  },
  {
    id: 'tea-jinxuan', domain: 'tea', nameJa: '金萱（台茶12号）', nameEn: 'Jin Xuan (TTES No. 12)', scientificName: 'Camellia sinensis',
    classification: '青茶（烏龍茶）', classificationId: 'oolong-tea', origin: '台湾・南投', originId: 'taiwan-nantou',
    variety: '金萱（台茶12号）', varietyId: 'jinxuan',
    processing: '半発酵（包種・烏龍）', description: '台農8号×硬枝紅心の交配で育成された烏龍茶用品種（台湾）。ミルク様の香気の形成機構がメタボロミクス研究で調べられており、香気成分の多くは製程（特に攪拌工程）を通じて脂肪酸代謝から生成するとされる。',
    profile: [pi('milk-note', 'moderate', [WANG25])],
    sensations: {},
    evidenceTier: 'inferred',
    scopeNote: 'Wang et al. 2025（査読論文、金萱烏龍茶の製程中のメタボロミクス）に基づく推測。ミルク様香気は生葉の時点の固有成分ではなく製程で形成されるものであり、強さは製法条件で変わる。官能評価による品種間の順位の根拠ではない。',
    sourceIds: [WANG25], roastable: true, extractable: true,
  },
]
