import type { Material, ProfileEntry, SensationEntry } from '../types'

// 茶品種の素材化（第2波、round7 調査 tea-cultivars-round2.md、2026-10-31）。
// 全件 evidenceTier 'inferred'（推測）で、香味所見の文書化された足がかりからの推測として登録する。
// 化合物リンクは作らない（品種固有の寄与実証が不足するため。第1波と同方針）。
// はつもみじ／台茶25号の署名重複の解消（再設計）：台茶25号は育成論文の「具花香」のみが
// 足がかりで単一ノートが上限のため、はつもみじ側を再設計した。はつもみじの足がかりは
// 西条・桑原 1967 の「リナロールに富む」という所見で、リナロールの香調は花様・柑橘様の
// 両方向を持つ（化合物レコードの noteIds）ため、両ノートを weak で付ける（単一成分の
// 所見から複数ノートを読み替える扱いは第1波の そうふう（アントラニル酸メチル→花様＋
// 果実様）と同型）。アントシアニン含量の実測は香調・感覚に換算しない。
const pi = (noteId: string, intensity: ProfileEntry['intensity'], sourceIds: string[]): ProfileEntry =>
  ({ noteId, intensity, tier: 'inferred', sourceIds })
const si = (intensity: SensationEntry['intensity'], sourceIds: string[], note?: string): SensationEntry =>
  ({ intensity, tier: 'inferred', sourceIds, note })

const TBRS = 'tbrs-2023-cultivar-table'
const TAGS = 'tags-2022-tsuiyu-evaluation'
const CHANG13 = 'chang-2013-taiwan-black-tea-cultivars-thesis'
const LI25 = 'li-2025-baiye1-white-tea'
const TONG23 = 'tong-2023-baiye1-producing-areas'
const LIU25 = 'liu-2025-yinghong9-linalool'
const MEI21 = 'mei-2021-yinghong9-huangyu-metabolomics'
const SAIJO = 'saijo-kuwahara-1967-black-tea-aroma'
const TSAO22 = 'tsao-2022-ttes-no25-breeding'

export const expansionTea3Materials: Material[] = [
  {
    id: 'tea-tsuiyu', domain: 'tea', nameJa: '翠玉（台茶13号）', nameEn: 'Tsuiyu (TTES No. 13)', scientificName: 'Camellia sinensis',
    classification: '青茶（烏龍茶）', classificationId: 'oolong-tea', origin: '台湾', originId: 'taiwan',
    variety: '翠玉（台茶13号）', varietyId: 'tsuiyu',
    processing: '軽発酵・清香型球形烏龍茶',
    description: '台湾の茶及飲料作物改良場（TBRS）育成品種。硬枝紅心（母本）×臺農80號（父本）の交配（1938年交配・1981年命名）で、烏龍茶・包種茶に適する。公的品種解説では野薑花・檳榔花に似た花香が品種特性とされ、TAGs の公的評鑑でも特定試料に同じ花の記述子が使われた。',
    profile: [pi('floral-general', 'moderate', [TAGS])],
    sensations: {},
    evidenceTier: 'inferred',
    scopeNote: '野薑花・檳榔花という特定の花の名は、由来化合物が未提示のためノートには落とし込まず、一般的表記の花様に留めた。香味の強さ moderate は、公的品種解説の特性記述と TAGs 公的評鑑の実試料所見（単一試料）が一致することからの推測であり、実測ではない。',
    sourceIds: [TBRS, TAGS], roastable: true, extractable: true,
  },
  {
    id: 'tea-hongyun', domain: 'tea', nameJa: '紅韻（台茶21号）', nameEn: 'Hongyun (TTES No. 21)', scientificName: 'Camellia sinensis',
    classification: '紅茶', classificationId: 'black-tea', origin: '台湾', originId: 'taiwan',
    variety: '紅韻（台茶21号）', varietyId: 'hongyun',
    processing: '全発酵（紅茶）',
    description: '台湾の TBRS 育成品種。系統 FKK-1（インド・Kyang 系と祁門系の後裔で、紅茶用品種として1953年に命名）の天然交雑後代から選抜され、2008年に命名された。公的品種解説に由来するとされる香味記述では、柑橘の花に似た花香と濃い花果香が特徴と伝えられる。',
    profile: [pi('floral-general', 'moderate', [TBRS, CHANG13]), pi('fruit-general', 'weak', [TBRS])],
    sensations: {},
    evidenceTier: 'inferred',
    scopeNote: '条件付きの登録：香味記述は公的機関の品種解説に由来するとされるが、その原文の所在は本調査でも特定できなかった（報道・二次資料の転載で確認）。引用する2出典は系譜の一次確認（TBRS 品種表）と、臺茶21號が研究対象として確立した紅茶用品種であることの傍証（成分研究の修士論文）であり、いずれも香味そのものの根拠ではない。育成論文とされる『台灣茶業研究彙報』第28期の書誌も同定できていない。この条件を明記した上で推測として登録する。柑橘の花等の特定名は由来化合物が未提示のためノートには使わず、一般的表記の花様・果実様に留めた。',
    sourceIds: [TBRS, CHANG13], roastable: false, extractable: true,
  },
  {
    id: 'tea-baiye-1', domain: 'tea', nameJa: '白葉1号', nameEn: 'Baiye 1', scientificName: 'Camellia sinensis',
    classification: '緑茶', classificationId: 'green-tea', origin: '中国・浙江', originId: 'china-zhejiang',
    variety: '白葉1号', varietyId: 'baiye-1',
    processing: '緑茶（安吉白茶。名称に反して白茶ではない）',
    description: '浙江省安吉県で発見された温度感受性の白化（アルビノ）単株に由来する栄養系品種で、安吉白茶の原料。白化した新芽は遊離アミノ酸が高くカテキンが低い。白葉1号を白茶に加工した比較研究では、官能で滋味・香気とも優れ、ゲラニオールとフェニルアセトアルデヒドが固有のキー芳香揮発成分として報告された。',
    profile: [pi('floral-general', 'weak', [LI25]), pi('honey', 'weak', [LI25])],
    sensations: { umami: si('moderate', [LI25, TONG23], '遊離アミノ酸含量が高い（白茶加工試料で 17.13 mg/g、Li 2025）という実測特性に基づく推測で、うま味そのものの官能実測ではない') },
    evidenceTier: 'inferred',
    scopeNote: '分類は緑茶（安吉白茶は製法上も緑茶であり、白茶には分類しない）。根拠の一部は白葉1号を白茶に加工した試料のデータであり、主用途の緑茶への適用には製法差の注意が要る。うま味 moderate は高アミノ酸という成分実測からの推測である。',
    sourceIds: [LI25, TONG23], roastable: false, extractable: true,
  },
  {
    id: 'tea-yinghong-9', domain: 'tea', nameJa: '英紅9号', nameEn: 'Yinghong No. 9', scientificName: 'Camellia sinensis var. assamica',
    classification: '紅茶', classificationId: 'black-tea', origin: '中国・広東', originId: 'china-guangdong',
    variety: '英紅9号', varietyId: 'yinghong-9',
    processing: '全発酵（紅茶）',
    description: '広東省英徳の代表的な大葉種紅茶品種。雲南大葉種集団からの選抜で育成されたアッサム系品種。英紅9号紅茶は花様で甘い香りが主特性とされ、(R)-リナロールが香気品質の中核的指標と報告されている。',
    profile: [pi('floral-general', 'moderate', [LIU25, MEI21]), pi('honey', 'weak', [LIU25, MEI21])],
    sensations: {},
    evidenceTier: 'inferred',
    scopeNote: '品種解説の一次育成文献は未入手で、系譜は「雲南大葉種集団からの選抜」の範囲に留めた。花様 moderate は寄与成分を特定した研究（Liu 2025）とメタボローム比較（Mei 2021）の2研究に基づく推測であり、品種素材としてのプロファイル自体は推測区分。Liu 2025 の著者名・書誌は Crossref レコードで最終確認した。',
    sourceIds: [LIU25, MEI21], roastable: false, extractable: true,
  },
  {
    id: 'tea-hatsumomiji', domain: 'tea', nameJa: 'はつもみじ', nameEn: 'Hatsumomiji', scientificName: 'Camellia sinensis',
    classification: '紅茶', classificationId: 'black-tea', origin: '日本', originId: 'japan',
    variety: 'はつもみじ', varietyId: 'hatsumomiji',
    processing: '全発酵（紅茶）',
    description: '国産紅茶の育成品種の一つ。西条・桑原（1967）が茶業試験場産の紅茶用品種を紅茶に製造し GC で香気成分を比較した際、インド種系統内ではつもみじはリナロールに富んでいたと報告された。',
    profile: [pi('floral-general', 'weak', [SAIJO]), pi('citrus', 'weak', [SAIJO])],
    sensations: {},
    evidenceTier: 'inferred',
    scopeNote: '西条・桑原 1967 の品種間 GC 比較（リナロールに富む）に基づく推測。リナロールの香調は花様・柑橘様の両方向を持つため両ノートを weak で付けた。1967年の検出・相対量の比較であり、現代的な寄与評価（AEDA 等）ではない。系譜（交配親）は本調査で確認できなかったため記載しない。',
    sourceIds: [SAIJO], roastable: false, extractable: true,
  },
  {
    id: 'tea-ziyun', domain: 'tea', nameJa: '紫韻（台茶25号）', nameEn: 'Ziyun (TTES No. 25)', scientificName: 'Camellia sinensis var. assamica',
    classification: '紅茶', classificationId: 'black-tea', origin: '台湾', originId: 'taiwan',
    variety: '紫韻（台茶25号）', varietyId: 'ziyun',
    processing: '全発酵（紅茶）・緑茶にも適する',
    description: '台湾の TBRS 育成品種で、台湾初の紫芽茶品種。緬甸（Burma）大葉種の天然交雑後裔から単株選抜され、分子標誌解析では父本は臺茶13號（翠玉）と推定された。2021年に命名され、2022年に品種権を取得した。アントシアニン含量は対照品種・臺茶18號の50倍と実測されている。',
    profile: [pi('floral-general', 'weak', [TSAO22])],
    sensations: {},
    evidenceTier: 'inferred',
    scopeNote: '香りの根拠は育成論文（曹ら 2022）抄録の「具花香」という育成機関による特性記述のみに基づく推測であり、香気成分の同定・寄与評価はない。アントシアニン含量の実測は組成・色の知見であり、香調や渋味等の感覚への換算はしていない。父本と推定される翠玉からの足し算による合成は、育成論文自体に花香の記述があるため行っていない。',
    sourceIds: [TSAO22], roastable: false, extractable: true,
  },
]
