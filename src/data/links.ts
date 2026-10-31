import type { MaterialCompoundLink } from '../types'
import { expansionTeaLinks, expansionTeaLinkUpgrades } from './links-expansion-tea'
import { expansionCacaoLinks, expansionCacaoLinkUpgrades } from './links-expansion-cacao'
import { expansionShAllLinks, expansionShLinkUpgrades } from './links-expansion-sh'
import { expansionDairyLinks } from './links-expansion-dairy'

// 素材×化合物リンク（第1弾：お茶・チョコレート）。
// kind の区別: detection=検出の報告 / composition=組成としての含有 / contribution=官能寄与の根拠あり。
// 総説で「OAV>1 の重要香気成分」として茶類レベルで掲載されたものは contribution（茶類一般）として扱い、
// 個別素材の試料で測られたわけではないことを tier=general と条件で示す。
const Z = 'zeng-2025-tea-vocs'

export const materialCompoundLinks: MaterialCompoundLink[] = [
  // 煎茶
  { materialId: 'tea-sencha', compoundId: 'linalool', kind: 'contribution', tier: 'general', conditions: '総説で茶類レベルで OAV>1 の重要香気成分として掲載。煎茶個別試料の寄与実証ではない', sourceIds: [Z] },
  { materialId: 'tea-sencha', compoundId: 'dimethyl-sulfide', kind: 'contribution', tier: 'measured', conditions: '煎茶試料の GC-O による重要香気成分の同定研究。ただし AEDA 36 成分への DMS の含有・FD 値は全文照合中（要旨レベルでは最高 FD 群・新規同定群のいずれにも含まれない）', sourceIds: ['kumazawa-1999-sencha-odorants'] },
  { materialId: 'tea-sencha', compoundId: 'cis-3-hexen-1-ol', kind: 'detection', tier: 'general', conditions: '総説での茶の揮発性成分としての報告', sourceIds: [Z] },
  { materialId: 'tea-sencha', compoundId: 'catechins', kind: 'composition', tier: 'general', sourceIds: ['ye-2022-bitterness-astringency'] },
  { materialId: 'tea-sencha', compoundId: 'caffeine', kind: 'composition', tier: 'general', sourceIds: ['zhang-2020-tea-chemistry-taste'] },
  // 玉露・抹茶
  { materialId: 'tea-gyokuro', compoundId: 'theanine', kind: 'composition', tier: 'general', conditions: '被覆栽培でアミノ酸が多いことは茶一般の知見。玉露個別の定量は未収録', sourceIds: ['zhang-2020-tea-chemistry-taste'] },
  { materialId: 'tea-matcha', compoundId: 'theanine', kind: 'contribution', tier: 'measured', conditions: '抹茶のうま味に対する分子・官能研究で寄与が示された', sourceIds: ['kaneko-2006-matcha-umami'] },
  { materialId: 'tea-matcha', compoundId: 'glutamic-acid', kind: 'composition', tier: 'general', sourceIds: ['kaneko-2006-matcha-umami'] },
  { materialId: 'tea-matcha', compoundId: 'catechins', kind: 'composition', tier: 'general', sourceIds: ['ye-2022-bitterness-astringency'] },
  // ほうじ茶
  { materialId: 'tea-hojicha', compoundId: 'alkylpyrazines', kind: 'detection', tier: 'general', conditions: '焙煎で生成する化合物群としての一般知見。ほうじ茶個別の寄与実証は未収録', sourceIds: [Z] },
  // 白茶
  { materialId: 'tea-white-baimudan', compoundId: 'phenylacetaldehyde', kind: 'contribution', tier: 'general', conditions: '白茶試料の重要香気成分研究に基づく（白茶一般）', sourceIds: ['chen-2020-white-tea-odorants'] },
  { materialId: 'tea-white-baimudan', compoundId: 'cis-3-hexen-1-ol', kind: 'detection', tier: 'general', conditions: '白茶の主要な揮発性成分の一つとして総説に記載', sourceIds: [Z] },
  { materialId: 'tea-white-baimudan', compoundId: 'beta-damascenone', kind: 'detection', tier: 'general', sourceIds: [Z] },
  // 烏龍茶
  { materialId: 'tea-tieguanyin', compoundId: 'linalool', kind: 'contribution', tier: 'general', conditions: '総説で烏龍茶を含む茶類の重要香気成分として掲載', sourceIds: [Z] },
  { materialId: 'tea-tieguanyin', compoundId: 'beta-ionone', kind: 'detection', tier: 'general', sourceIds: [Z] },
  { materialId: 'tea-dancong', compoundId: 'linalool', kind: 'detection', tier: 'general', conditions: '鳳凰単叢の主要香型の香気物質比較研究の範囲', sourceIds: ['li-wang-2020-dancong-types'] },
  // 紅茶
  { materialId: 'tea-black-general', compoundId: 'geraniol', kind: 'contribution', tier: 'general', conditions: '総説で紅茶を含む茶類の OAV>1 重要香気成分として掲載', sourceIds: [Z] },
  { materialId: 'tea-black-general', compoundId: 'linalool', kind: 'contribution', tier: 'general', sourceIds: [Z] },
  // 旧リンク tea-black-general × theaflavins（群）は全件照合（round7）で削除：引用出典
  // Scharbert & Hofmann 2005 は欠落試験で確定した鍵呈味成分12種にテアフラビン類を含めておらず、
  // 「鍵寄与ではない」と結論する側の研究だった（出典の結論と逆向きの引用）。個別テアフラビン類の
  // 組成リンク（Scharbert 2004、実寄与は渋み全体の0.1%未満という結論つき）は別途収録済み。
  { materialId: 'tea-black-general', compoundId: 'benzaldehyde', kind: 'contribution', tier: 'general', conditions: '総説で紅茶の OAV>1 重要香気成分として掲載', sourceIds: [Z] },
  // 黒茶
  { materialId: 'tea-dark-puer', compoundId: 'beta-ionone', kind: 'detection', tier: 'general', sourceIds: [Z] },
  // チョコレート
  { materialId: 'choco-dark-roasted', compoundId: 'alkylpyrazines', kind: 'contribution', tier: 'measured', conditions: '焙煎ダークチョコ試料の GC-O 等による重要香気成分の同定研究の範囲', sourceIds: ['acpangan-2023-dark-chocolate-aroma'] },
  { materialId: 'choco-dark-roasted', compoundId: 'strecker-aldehydes', kind: 'contribution', tier: 'measured', conditions: '同上（焙煎・未焙煎の比較研究）', sourceIds: ['acpangan-2023-dark-chocolate-aroma'] },
  { materialId: 'choco-dark-roasted', compoundId: 'theobromine', kind: 'contribution', tier: 'measured', conditions: '出典試料は焙煎カカオニブであり、製品自体の実測ではない。ニブ段階での呈味寄与を根拠とし、製品での寄与度は配合に依存する', sourceIds: ['stark-2006-cocoa-nibs-taste'] },
  { materialId: 'choco-dark-roasted', compoundId: 'vanillin', kind: 'detection', tier: 'general', conditions: 'ダークチョコの香気成分としての報告（寄与の程度は試料依存）', sourceIds: ['deuscher-2020-dark-chocolate-gco'] },
  { materialId: 'choco-dark-unroasted', compoundId: 'alkylpyrazines', kind: 'detection', tier: 'measured', conditions: '未焙煎試料では焙煎生成物の水準が異なることが同研究で比較された', sourceIds: ['acpangan-2023-dark-chocolate-aroma'] },
  { materialId: 'choco-milk', compoundId: 'vanillin', kind: 'contribution', tier: 'measured', conditions: 'ミルクチョコとココアマスの AEDA による主要香気成分研究', sourceIds: ['schnermann-1997-milk-chocolate'] },
  { materialId: 'choco-white', compoundId: 'vanillin', kind: 'detection', tier: 'general', conditions: 'モデル系ホワイトチョコの研究範囲', sourceIds: ['stewart-2017-model-white-chocolate'] },
  { materialId: 'choco-100', compoundId: 'theobromine', kind: 'composition', tier: 'general', sourceIds: ['mcclure-2022-100-percent-chocolate'] },
]

// ===== スパイス・ハーブのリンク（調査 2026-10-31）=====
// 原則として composition（組成上の主成分）まで。contribution は寄与手法の原典がある場合のみ。
export const spiceHerbLinks: MaterialCompoundLink[] = [
  { materialId: 'spice-black-pepper', compoundId: 'piperine', kind: 'contribution', tier: 'general', conditions: '総説で辛味の主因と位置づけ（呈味の寄与。香気の寄与ではない）', sourceIds: ['srinivasan-2007-piperine'] },
  { materialId: 'spice-black-pepper', compoundId: 'beta-caryophyllene', kind: 'composition', tier: 'general', sourceIds: ['takooree-2019-black-pepper'] },
  { materialId: 'spice-black-pepper', compoundId: 'cineole', kind: 'composition', tier: 'general', sourceIds: ['takooree-2019-black-pepper'] },
  { materialId: 'spice-black-pepper', compoundId: 'limonene', kind: 'composition', tier: 'general', sourceIds: ['takooree-2019-black-pepper'] },
  { materialId: 'spice-cardamom', compoundId: 'cineole', kind: 'composition', tier: 'general', conditions: '精油の二大成分の一つ。組成%は抽出法・乾燥条件で大きく変動する', sourceIds: ['marongiu-2004-cardamom-oil'] },
  { materialId: 'spice-cardamom', compoundId: 'alpha-terpinyl-acetate', kind: 'composition', tier: 'general', conditions: '精油の二大成分の一つ', sourceIds: ['marongiu-2004-cardamom-oil'] },
  { materialId: 'spice-cardamom', compoundId: 'linalool', kind: 'composition', tier: 'general', sourceIds: ['ashokkumar-2020-cardamom'] },
  { materialId: 'spice-cassia', compoundId: 'cinnamaldehyde', kind: 'contribution', tier: 'measured', conditions: 'カシア樹皮油の OAV 解析で最大の寄与（OAV=935、Foods 2025 の試料）。葉油では値が異なる', sourceIds: ['foods-2025-cassia-oils'] },
  { materialId: 'spice-clove', compoundId: 'eugenol', kind: 'composition', tier: 'general', conditions: '精油の主成分（試料により45–90%）。GC-O による寄与検証は未確認', sourceIds: ['chaieb-2007-clove'] },
  { materialId: 'spice-nutmeg', compoundId: 'myristicin', kind: 'composition', tier: 'general', conditions: '安全性の文脈で扱う成分。香気寄与として扱わない', sourceIds: ['du-2014-nutmeg-oil'] },
  { materialId: 'spice-nutmeg', compoundId: 'eugenol', kind: 'composition', tier: 'general', conditions: '当該種子油試料での報告（試料依存）', sourceIds: ['du-2014-nutmeg-oil'] },
  { materialId: 'spice-ginger-fresh', compoundId: 'gingerol-6', kind: 'contribution', tier: 'general', conditions: '生鮮根茎の辛味の主成分（総説）。加熱でショウガオールへ変換', sourceIds: ['semwal-2015-gingerols'] },
  { materialId: 'spice-ginger-fresh', compoundId: 'shogaol-6', kind: 'composition', tier: 'general', conditions: '生鮮では微量。乾燥・加熱で増加する', sourceIds: ['molecules-2018-shogaol-drying'] },
  { materialId: 'spice-turmeric', compoundId: 'curcumin', kind: 'composition', tier: 'general', conditions: '色素成分。香気寄与ではない', sourceIds: ['yeung-2019-curcumin'] },
  { materialId: 'spice-turmeric', compoundId: 'turmerones', kind: 'composition', tier: 'general', conditions: '香りを担う揮発性セスキテルペン群（総説の記述）', sourceIds: ['yeung-2019-curcumin'] },
  { materialId: 'spice-cumin', compoundId: 'cuminaldehyde', kind: 'composition', tier: 'general', conditions: '主成分として繰り返し報告。産地でケモタイプ差。寄与の GC-O 検証は未確認', sourceIds: ['bettaieb-2011-cumin'] },
  { materialId: 'spice-coriander-seed', compoundId: 'linalool', kind: 'composition', tier: 'general', conditions: '種子油の主成分（総説）。葉の成分とは異なる', sourceIds: ['sahib-2013-coriander'] },
  { materialId: 'spice-fennel-seed', compoundId: 'anethole', kind: 'composition', tier: 'general', conditions: '代表成分。ただし果実油でエストラゴール支配的だった報告もあり試料依存', sourceIds: ['anethole-2026-review'] },
  { materialId: 'spice-star-anise', compoundId: 'anethole', kind: 'composition', tier: 'general', conditions: '精油の主成分（総説）', sourceIds: ['patra-2020-star-anise'] },
  { materialId: 'spice-saffron', compoundId: 'safranal', kind: 'composition', tier: 'general', conditions: '最も豊富な揮発成分（総説）。AEDA/OAV の寄与確定は未確認', sourceIds: ['srivastava-2010-saffron'] },
  { materialId: 'spice-saffron', compoundId: 'picrocrocin', kind: 'contribution', tier: 'general', conditions: 'サフランの苦味成分として総説で機能分担が明記', sourceIds: ['srivastava-2010-saffron'] },
  { materialId: 'spice-vanilla', compoundId: 'vanillin', kind: 'contribution', tier: 'general', conditions: '引用出典自体は組成・同位体比の研究で寄与手法を含まない。『特徴香は主にバニリンによる』は同論文序論が先行文献を引いて述べる一般論であり、本リンクは tier general の根拠とする。バニリン単独では天然バニラの複雑さを再現できない', sourceIds: ['molecules-2025-vanilla-pods'] },
  { materialId: 'spice-sansho', compoundId: 'hydroxy-alpha-sanshool', kind: 'contribution', tier: 'measured', conditions: '果実の主サンショール。定量と官能（閾値・味質）の原著研究に基づく', sourceIds: ['sugai-2005-sanshool-quant'] },
  { materialId: 'spice-huajiao', compoundId: 'hydroxy-alpha-sanshool', kind: 'contribution', tier: 'general', conditions: 'しびれの主因（アルキルアミド類）。ヒト実験は花椒のヒドロキシ-α-サンショールで実施', sourceIds: ['hagura-2013-tingling'] },
  { materialId: 'spice-huajiao', compoundId: 'linalool', kind: 'contribution', tier: 'measured', conditions: '漢源産試料の GC-O/AEDA/OAV で主要香気活性成分として同定', sourceIds: ['foodchem-2022-huajiao-aroma'] },
  { materialId: 'spice-huajiao', compoundId: 'cineole', kind: 'contribution', tier: 'measured', conditions: '同上（GC-O で強い香気活性）', sourceIds: ['foodchem-2022-huajiao-aroma'] },
  { materialId: 'spice-huajiao', compoundId: 'limonene', kind: 'contribution', tier: 'measured', conditions: '同上（主要香気活性成分として同定）', sourceIds: ['foodchem-2022-huajiao-aroma'] },
  // 旧 spice-chili × capsaicin リンクは round7 で種素材5件へ移行した（links-expansion-sh.ts）。
  { materialId: 'herb-peppermint', compoundId: 'menthol', kind: 'composition', tier: 'general', conditions: '精油の主要成分（単一試料で40.7%。精油中の値）', sourceIds: ['schmidt-2009-peppermint-oil'] },
  { materialId: 'herb-peppermint', compoundId: 'menthone', kind: 'composition', tier: 'general', conditions: '精油の主要成分（単一試料で23.4%）', sourceIds: ['schmidt-2009-peppermint-oil'] },
  { materialId: 'herb-spearmint', compoundId: 'carvone', kind: 'composition', tier: 'general', conditions: '主成分として総説が集計。ケモタイプにより異なる場合がある', sourceIds: ['mahendran-2021-spearmint'] },
  { materialId: 'herb-spearmint', compoundId: 'limonene', kind: 'composition', tier: 'general', sourceIds: ['mahendran-2021-spearmint'] },
  { materialId: 'herb-rosemary', compoundId: 'cineole', kind: 'composition', tier: 'general', conditions: '1,8-シネオール型ケモタイプの主成分', sourceIds: ['molecules-2023-chemotypes-algeria'] },
  { materialId: 'herb-rosemary', compoundId: 'camphor', kind: 'composition', tier: 'general', conditions: 'カンファー型ケモタイプの主成分', sourceIds: ['molecules-2023-chemotypes-algeria'] },
  { materialId: 'herb-thyme', compoundId: 'thymol', kind: 'composition', tier: 'general', conditions: 'チモール型ケモタイプの主成分。種全体の固定属性ではない', sourceIds: ['galovicova-2021-thyme'] },
  { materialId: 'herb-thyme', compoundId: 'carvacrol', kind: 'composition', tier: 'general', conditions: 'カルバクロール型ケモタイプの主成分', sourceIds: ['galovicova-2021-thyme'] },
  { materialId: 'herb-thyme', compoundId: 'linalool', kind: 'composition', tier: 'general', conditions: 'リナロール型ケモタイプの主成分', sourceIds: ['galovicova-2021-thyme'] },
  { materialId: 'herb-basil', compoundId: 'linalool', kind: 'composition', tier: 'general', conditions: '高リナロール型等の主成分（系統で 19–73% と幅広い。精油中の値）', sourceIds: ['zheljazkov-2008-basil'] },
  { materialId: 'herb-basil', compoundId: 'eugenol', kind: 'composition', tier: 'general', conditions: 'リナロール–ユージノール型の構成成分', sourceIds: ['zheljazkov-2008-basil'] },
  { materialId: 'herb-basil', compoundId: 'estragole', kind: 'composition', tier: 'general', conditions: 'メチルチャビコール型の主成分（系統依存）', sourceIds: ['zheljazkov-2008-basil'] },
  { materialId: 'herb-lemongrass', compoundId: 'citral', kind: 'composition', tier: 'general', conditions: 'シトラール主体の報告（単一試料）。ゲラニオール主体の報告もあり試料依存性が高い', sourceIds: ['chembiodivers-2025-lemongrass-nepal'] },
  { materialId: 'herb-lemon-balm', compoundId: 'citral', kind: 'composition', tier: 'general', conditions: '試料により割合は大きく異なる', sourceIds: ['miraj-2017-lemon-balm'] },
  { materialId: 'herb-lavender', compoundId: 'linalool', kind: 'composition', tier: 'general', conditions: '真正ラベンダーの主要成分。ラバンディンの規格値とは分ける', sourceIds: ['aly-2025-lavender'] },
  { materialId: 'herb-lavender', compoundId: 'linalyl-acetate', kind: 'composition', tier: 'general', sourceIds: ['aly-2025-lavender'] },
  { materialId: 'herb-chamomile', compoundId: 'alpha-bisabolol', kind: 'composition', tier: 'general', conditions: '化学型により精油中 0.1–44.2% と幅が極めて広い', sourceIds: ['mckay-2006-chamomile-tea'] },
  { materialId: 'herb-chamomile', compoundId: 'chamazulene', kind: 'composition', tier: 'general', conditions: '精油の青色を担う。生成機構の原著確認は未完了', sourceIds: ['mckay-2006-chamomile-tea'] },
  { materialId: 'herb-sage', compoundId: 'alpha-thujone', kind: 'composition', tier: 'general', conditions: 'ケモタイプ C1 等の主要成分。組成と香気の対応研究はない', sourceIds: ['craft-2017-sage-chemotaxonomy'] },
  { materialId: 'herb-sage', compoundId: 'camphor', kind: 'composition', tier: 'general', sourceIds: ['craft-2017-sage-chemotaxonomy'] },
  { materialId: 'herb-sage', compoundId: 'cineole', kind: 'composition', tier: 'general', sourceIds: ['craft-2017-sage-chemotaxonomy'] },
  { materialId: 'herb-oregano', compoundId: 'carvacrol', kind: 'composition', tier: 'general', conditions: 'カルバクロール型の主成分（亜種・産地依存）', sourceIds: ['nurzynska-2025-oregano'] },
  { materialId: 'herb-oregano', compoundId: 'thymol', kind: 'composition', tier: 'general', conditions: 'チモール型の主成分', sourceIds: ['nurzynska-2025-oregano'] },
  { materialId: 'herb-laurel', compoundId: 'cineole', kind: 'composition', tier: 'general', conditions: '葉精油の主成分（産地で31.9–58.59%と幅。精油中の値）', sourceIds: ['molecules-2019-laurus-bulgaria'] },
  { materialId: 'herb-dill-seed', compoundId: 'carvone', kind: 'contribution', tier: 'measured', conditions: '嗅覚測定併用研究で D-カルボンが香気インパクト化合物とされた（長期保存種子の特殊条件）', sourceIds: ['jirovetz-2003-dill-seed'] },
  { materialId: 'herb-dill-seed', compoundId: 'limonene', kind: 'contribution', tier: 'measured', conditions: '同上（D-リモネン）', sourceIds: ['jirovetz-2003-dill-seed'] },
  { materialId: 'herb-tarragon', compoundId: 'estragole', kind: 'composition', tier: 'general', conditions: 'フレンチ型の主体と記述される。GC-O の直接証拠は未確認', sourceIds: ['ekiert-2021-tarragon'] },
]

// ===== 文献拡充の統合（2026-10-31） =====
// 新規リンクは既存ペアと重複しないものだけを加え、格上げはペア単位で置き換える。
// 適用順序：基礎リンク → 新規リンク（重複回避）→ SH格上げ（全置換）→ お茶格上げ（kind/tier 置換＋出典統合）
// → カカオ注記（conditions への追記＋出典統合）。
const linkKey = (l: { materialId: string; compoundId: string }) => `${l.materialId}::${l.compoundId}`
const mergedLinks = new Map<string, MaterialCompoundLink>()
for (const l of [...materialCompoundLinks, ...spiceHerbLinks]) mergedLinks.set(linkKey(l), l)
for (const l of [...expansionTeaLinks, ...expansionCacaoLinks, ...expansionShAllLinks, ...expansionDairyLinks]) {
  if (!mergedLinks.has(linkKey(l))) mergedLinks.set(linkKey(l), l)
}
for (const u of expansionShLinkUpgrades) mergedLinks.set(linkKey(u), u)
for (const u of expansionTeaLinkUpgrades) {
  const cur = mergedLinks.get(linkKey(u))
  mergedLinks.set(linkKey(u), {
    materialId: u.materialId, compoundId: u.compoundId,
    kind: u.toKind, tier: u.toTier, conditions: u.conditions,
    sourceIds: [...new Set([...(cur?.sourceIds ?? []), ...u.addSourceIds])],
  })
}
for (const u of expansionCacaoLinkUpgrades) {
  const cur = mergedLinks.get(linkKey(u))
  if (cur) {
    mergedLinks.set(linkKey(u), {
      ...cur,
      conditions: cur.conditions ? `${cur.conditions}／${u.note}` : u.note,
      sourceIds: [...new Set([...cur.sourceIds, ...u.sourceIds])],
    })
  }
}
export const allLinks: MaterialCompoundLink[] = [...mergedLinks.values()]
export const linksForMaterial = (materialId: string) => allLinks.filter((l) => l.materialId === materialId)
export const linksForCompound = (compoundId: string) => allLinks.filter((l) => l.compoundId === compoundId)
