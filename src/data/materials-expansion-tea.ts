import type { Material, ProfileEntry, SensationEntry } from '../types'

// お茶の新規素材（調査 tea-compounds-expansion.md §6(a) の7件）。
// 新規に導入した軸ID（親担当が axis-labels.ts へ正規ラベルを追加すること）:
// - classificationId: 'yellow-tea'（黄茶）
// - originId: 'india-darjeeling'（インド・ダージリン）、'china-anhui'（中国・安徽）、
//   'india-assam'（インド・アッサム）、'taiwan-nantou'（台湾・南投）
// - varietyId: 'darjeeling-populations'（ダージリンの茶樹集団）、'var-assamica'（アッサム種）、
//   'dahongpao'（大紅袍）、'qingxin-oolong'（青心烏龍）
const p = (noteId: string, intensity: ProfileEntry['intensity'], sourceIds: string[]): ProfileEntry =>
  ({ noteId, intensity, tier: 'general', sourceIds })
const s = (intensity: SensationEntry['intensity'], sourceIds: string[], note?: string): SensationEntry =>
  ({ intensity, tier: 'general', sourceIds, note })

const ZHANG = 'zhang-2020-tea-chemistry-taste'
const YE = 'ye-2022-bitterness-astringency'
const SCHARBERT05 = 'scharbert-2005-black-tea-taste'
const KM = 'kumazawa-masuda-2002-pan-fired-tea'
const SCHUH = 'schuh-2006-darjeeling-sensomics'
const KANG = 'kang-2019-four-black-teas'
const HUANG22 = 'huang-2022-keemun-withering'
const WEI = 'wei-2024-yellow-tea'
const WANG22 = 'wang-2022-dahongpao-roasty'
const WANG23 = 'wang-2023-dongding-sensomics'
const ZHU = 'zhu-2015-oolong-gco'

export const expansionTeaMaterials: Material[] = [
  {
    id: 'tea-kamairicha', domain: 'tea', nameJa: '釜炒り茶', nameEn: 'Kamairicha (pan-fired green tea)', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '日本', originId: 'japan',
    variety: '品種一般', varietyId: 'general-cultivar',
    processing: '釜炒り（釜殺青）・不発酵', description: '釜で炒って殺青する日本の緑茶。蒸青の煎茶には無いピラジン類と 2-アセチル-1-ピロリン等の AEDA 寄与成分で釜香が特徴づけられる。',
    profile: [p('roast-general', 'moderate', [KM]), p('toast', 'moderate', [KM]), p('nut-general', 'moderate', [KM]), p('green-leaf', 'weak', [KM])],
    sensations: { umami: s('moderate', [ZHANG]), astringent: s('moderate', [YE]), bitter: s('moderate', [YE]) },
    evidenceTier: 'general',
    scopeNote: '香気寄与は Kumazawa & Masuda 2002 の AEDA（嬉野試料）に基づく。釜炒りで渋味が穏やかになる方向は山口・宮崎 2018（茶業研究報告 125:45–52、pairing 記録ベース）が同一原料の作り分けで示したが、書誌の一次確認が未了のため出典登録は見送り、呈味は緑茶一般の知見に留めた。焙煎香の生成機構は川上・山西 1999（pairing 記録ベース）。',
    sourceIds: [KM, 'kawakami-yamanishi-1999-roasting-aroma'], roastable: false, extractable: true,
  },
  {
    id: 'tea-darjeeling', domain: 'tea', nameJa: 'ダージリン', nameEn: 'Darjeeling', scientificName: 'Camellia sinensis',
    classification: '紅茶', classificationId: 'black-tea', origin: 'インド・ダージリン', originId: 'india-darjeeling',
    variety: 'チャイナ種系統・交雑集団・現代クローン（地域の茶樹集団）', varietyId: 'darjeeling-populations',
    processing: '酵素酸化（発酵）・オーソドックス製法', description: 'インド・ダージリン地域の紅茶（地域名であり品種名ではない）。センソミクスでリナロール、ゲラニオール、バニリン、フラネオール、2-フェニルエタノール、(E,E,Z)-2,4,6-ノナトリエナール等の寄与が実証されている。',
    profile: [p('floral-general', 'strong', [SCHUH]), p('fruit-general', 'moderate', [KANG]), p('honey', 'moderate', [SCHUH]), p('rose', 'weak', [SCHUH])],
    sensations: { astringent: s('moderate', [SCHARBERT05]), bitter: s('moderate', [YE]), sweet: s('weak', [ZHANG]) },
    evidenceTier: 'general',
    scopeNote: '地域レベルの素材。原料はチャイナ種系統・交雑集団・TRA 放出クローンの3層からなるが、クローン固有の香気特性を裏付ける査読済みの官能・香気研究はなく、クローン固有の主張はできない。香気根拠は Schuh 2006／Kang 2019／Baba 2017 の地域レベル試料に置く。',
    sourceIds: [SCHUH, KANG, 'baba-2017-darjeeling-aeda', 'kawakami-1995-darjeeling-composition'], roastable: false, extractable: true,
  },
  {
    id: 'tea-keemun', domain: 'tea', nameJa: 'キームン（祁門紅茶）', nameEn: 'Keemun', scientificName: 'Camellia sinensis',
    classification: '紅茶', classificationId: 'black-tea', origin: '中国・安徽（祁門）', originId: 'china-anhui',
    variety: '品種一般', varietyId: 'general-cultivar',
    processing: '酵素酸化（発酵）・工夫紅茶', description: '安徽省祁門の工夫紅茶。四大紅茶の横断研究でフェニルアセトアルデヒドが最も決定的な成分とされ、渋み成分として trans-4-O-p-クマロイルキナ酸が同定されている。',
    profile: [p('floral-general', 'moderate', [HUANG22]), p('fruit-general', 'moderate', [HUANG22]), p('honey', 'moderate', [KANG]),
      { noteId: 'rose', intensity: 'moderate', tier: 'measured', sourceIds: [HUANG22] }],
    sensations: { astringent: s('moderate', ['wen-2022-keemun-astringency'], 'trans-4-O-p-クマロイルキナ酸の同定に基づく'), bitter: s('moderate', [YE]), sweet: s('weak', [ZHANG]) },
    evidenceTier: 'general',
    scopeNote: '香気寄与成分は萎凋法で変わる（Huang 2022：日干し萎凋でリナロール rOAV 161・ゲラニオール rOAV 785、温風萎凋でメチオナール rOAV 124）。固定した香りプロファイルではない。バラのノートはゲラニオールの実測寄与（同 rOAV 785）に基づく。',
    sourceIds: [KANG, HUANG22, 'wen-2022-keemun-astringency'], roastable: false, extractable: true,
  },
  {
    id: 'tea-assam', domain: 'tea', nameJa: 'アッサム', nameEn: 'Assam', scientificName: 'Camellia sinensis var. assamica',
    classification: '紅茶', classificationId: 'black-tea', origin: 'インド・アッサム', originId: 'india-assam',
    variety: 'アッサム種（変種レベル）', varietyId: 'var-assamica',
    processing: '酵素酸化（発酵）・オーソドックス／CTC', description: 'インド・アッサム地域のアッサム種紅茶。四大紅茶の横断研究で (E)-2-オクテナールが最も決定的な成分とされた。',
    profile: [p('honey', 'moderate', [KANG]), p('floral-general', 'moderate', [KANG]), p('fruit-general', 'weak', [KANG])],
    sensations: { astringent: s('moderate', [YE]), bitter: s('moderate', [YE]) },
    evidenceTier: 'general',
    scopeNote: '香気寄与の根拠は Kang 2019 の四大紅茶比較研究1件に依存する（アッサム単独のセンソミクス研究は調査範囲で未確認）。組成は Sarmah 2026 の実測に基づくが、組成は香気寄与の根拠にはならない。',
    sourceIds: [KANG, 'sarmah-2026-assam-composition'], roastable: false, extractable: true,
  },
  {
    id: 'tea-yellow', domain: 'tea', nameJa: '黄茶', nameEn: 'Yellow tea', scientificName: 'Camellia sinensis',
    classification: '黄茶', classificationId: 'yellow-tea', origin: '中国（湖南・四川・安徽等）', originId: 'multi-origin',
    variety: '品種一般', varietyId: 'general-cultivar',
    processing: '悶黄（黄茶特有の工程）・微発酵', description: '悶黄工程を特徴とする中国の茶類。再構成＋欠落試験で DMS、β-イオノン、β-ダマセノン、ゲラニオール、フェニルアセトアルデヒド、リナロール等がキーオドラントと確認されている。',
    profile: [p('honey', 'moderate', [WEI]), p('floral-general', 'moderate', [WEI]), p('fruit-general', 'weak', [WEI])],
    sensations: { sweet: s('moderate', [ZHANG]), astringent: s('weak', [YE]), umami: s('weak', [ZHANG]) },
    evidenceTier: 'general',
    scopeNote: '中核根拠 Wei 2024 の試料は悶黄工程を最適化した条件の黄茶であり、黄茶一般への一般化には限界がある。香型別（Hong 2023）・呈味（Wang 2021）の追加研究は pairing 記録ベースで書誌タイトルの一次確認が未了のため出典登録を見送った。',
    sourceIds: [WEI], roastable: false, extractable: true,
  },
  {
    id: 'tea-dahongpao', domain: 'tea', nameJa: '岩茶（大紅袍）', nameEn: 'Wuyi rock tea (Dahongpao)', scientificName: 'Camellia sinensis',
    classification: '青茶（烏龍茶）', classificationId: 'oolong-tea', origin: '中国・福建（武夷山）', originId: 'china-fujian',
    variety: '大紅袍（中核研究の試料は水仙品種）', varietyId: 'dahongpao',
    processing: '半発酵・焙火（岩茶）', description: '武夷山の岩茶。再構成・欠落試験を含むセンソミクスで、γ-ヘキサラクトン、6-メチル-5-ヘプテン-2-オン、2-エチル-3,5-ジメチルピラジン、フラネオール等が焙煎・カラメル香の鍵と実証されている。',
    profile: [p('roast-general', 'strong', [WANG22]), p('caramelized', 'moderate', [WANG22]), p('caramel', 'moderate', [WANG22]), p('wood', 'weak', [WANG22])],
    sensations: { astringent: s('moderate', [YE]), bitter: s('weak', [YE]), sweet: s('weak', [ZHANG]) },
    evidenceTier: 'general',
    scopeNote: 'Wang 2022 の試料の原料は水仙品種であり、「大紅袍」ブレンド全体への一般化には限界がある。別系統の大紅袍センソミクス（水抽出物）は書誌対応に誤りが見つかり原著再確認が必要なため収録していない。岩茶4品種の GC-O 研究（Zhang 2022）は pairing 記録ベースで書誌の一次確認が未了のため出典登録を見送った。',
    sourceIds: [WANG22], roastable: true, extractable: true,
  },
  {
    id: 'tea-dongding', domain: 'tea', nameJa: '凍頂烏龍', nameEn: 'Dong Ding oolong', scientificName: 'Camellia sinensis',
    classification: '青茶（烏龍茶）', classificationId: 'oolong-tea', origin: '台湾・南投', originId: 'taiwan-nantou',
    variety: '青心烏龍', varietyId: 'qingxin-oolong',
    processing: '半発酵・焙煎（凍頂式）', description: '台湾・南投の凍頂烏龍。凍結乾燥抽出物の欠落試験でソトロンが焙煎様カラメル香に最も寄与することが示され、烏龍茶横断の GC-O＋OAV でも寄与成分が測られている。',
    profile: [p('roast-general', 'moderate', [WANG23]), p('caramel', 'moderate', [WANG23]), p('floral-general', 'moderate', [ZHU]), p('cream-note', 'weak', [WANG23])],
    sensations: { astringent: s('moderate', [YE]), sweet: s('weak', [ZHANG]), umami: s('weak', [ZHANG]) },
    evidenceTier: 'general',
    scopeNote: 'Wang 2023 の対象は凍結乾燥茶葉の熱水抽出物であり、通常の凍頂烏龍そのものの測定ではない。Zhu 2015 の OAV は鉄観音・大紅袍・凍頂の3茶横断の範囲値である。',
    sourceIds: [WANG23, ZHU], roastable: true, extractable: true,
  },
]
