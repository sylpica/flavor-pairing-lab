import type { MaterialCompoundLink } from '../types'

// 第11ラウンドの新規リンク（harvest-round11.md の確定候補シートに基づく）。
// B-1: contribution（実測・寄与実証あり）9件
// B-2: composition（実測）19件（新規化合物3件を含む）
// B-3: composition（参考情報格）6件 — tier は general とし、媒体の格を conditions に明記する。
//     ホワイトペッパー×ピペリンは条件つき候補だったが、実装時に FooDB（Pepper (white)）へ
//     アクセスできず（HTTP 403）occurrence を再確認できなかったため見送った。
export const round11Links: MaterialCompoundLink[] = [
  // ── B-1 寄与リンク ──
  { materialId: 'tea-dahongpao', compoundId: 'ee-2-4-heptadienal', kind: 'contribution', tier: 'measured', conditions: '露濡れ葉を原料とする武夷岩茶における青臭（欠点臭）の主因として、GC-O と添加・欠落試験で寄与が確認された成分。通常原料の岩茶のプロファイルではない（欠点臭の知見）', sourceIds: ['pairing-wei-2026-wuyi-rock-tea-grassy-off-odor'] },
  { materialId: 'tea-dahongpao', compoundId: 'octanal', kind: 'contribution', tier: 'measured', conditions: '露濡れ葉を原料とする武夷岩茶における青臭（欠点臭）の主因4成分の一つ。通常原料の岩茶のプロファイルではない（欠点臭の知見）', sourceIds: ['pairing-wei-2026-wuyi-rock-tea-grassy-off-odor'] },
  { materialId: 'tea-dahongpao', compoundId: 'hexanal', kind: 'contribution', tier: 'measured', conditions: '露濡れ葉を原料とする武夷岩茶における青臭（欠点臭）の主因4成分の一つ。通常原料の岩茶のプロファイルではない（欠点臭の知見）', sourceIds: ['pairing-wei-2026-wuyi-rock-tea-grassy-off-odor'] },
  { materialId: 'tea-dancong', compoundId: 'methylbutanal-2', kind: 'contribution', tier: 'measured', conditions: '鳳凰単叢の再焙火試料で ROAV≥1 の鍵成分。含量は焙火温度90℃でピークを示した', sourceIds: ['ding-2026-dancong-refiring'] },
  { materialId: 'tea-dancong', compoundId: 'pentylfuran-2', kind: 'contribution', tier: 'measured', conditions: '鳳凰単叢の再焙火試料で ROAV≥1 の鍵成分', sourceIds: ['ding-2026-dancong-refiring'] },
  { materialId: 'tea-dancong', compoundId: 'diacetyl', kind: 'contribution', tier: 'measured', conditions: '鳳凰単叢の再焙火試料で 2,3-ブタンジオンとして同定された鍵成分（お茶での知見）', sourceIds: ['ding-2026-dancong-refiring'] },
  { materialId: 'tea-dark-puer', compoundId: 'terpinen-4-ol', kind: 'contribution', tier: 'measured', conditions: '生プーアルの熟成マーカー候補。8–10年保存品の試料で OAV≥1', sourceIds: ['pairing-xu-2025-raw-puerh-ageing-cycles'] },
  { materialId: 'tea-dark-puer', compoundId: 'alpha-terpinene', kind: 'contribution', tier: 'measured', conditions: '生プーアルの熟成マーカー候補。1–3年保存品の試料で特徴的', sourceIds: ['pairing-xu-2025-raw-puerh-ageing-cycles'] },
  { materialId: 'tea-dark-puer', compoundId: 'pentylfuran-2', kind: 'contribution', tier: 'measured', conditions: '生プーアルの熟成マーカー候補。2-amylfuran として1–3年保存品の試料で特徴的', sourceIds: ['pairing-xu-2025-raw-puerh-ageing-cycles'] },
  // ── B-2 組成リンク（実測） ──
  { materialId: 'tea-hojicha', compoundId: '2-ethyl-3-6-dimethylpyrazine', kind: 'composition', tier: 'measured', conditions: '緑茶の焙煎（160〜200℃）で生成し、未焙煎緑茶には不在の焙煎マーカー。ほうじ茶の焙煎生成ピラジンとしての知見を含む', sourceIds: ['gotti-2021-green-tea-roasting', 'mizukami-2008-hojicha-pyrazine'] },
  { materialId: 'tea-hojicha', compoundId: 'ee-2-4-heptadienal', kind: 'composition', tier: 'measured', conditions: '緑茶の焙煎前後で含量変動が定量された成分（ほうじ茶の焙煎条件の範囲）', sourceIds: ['gotti-2021-green-tea-roasting'] },
  { materialId: 'tea-tieguanyin', compoundId: 'egc', kind: 'composition', tier: 'measured', conditions: '鉄観音の焙煎（130℃）でフラバン-3-オール類として減少', sourceIds: ['cao-2021-tieguanyin-roasting'] },
  { materialId: 'tea-tieguanyin', compoundId: 'gallic-acid', kind: 'composition', tier: 'measured', conditions: '鉄観音の焙煎（130℃）で増加', sourceIds: ['cao-2021-tieguanyin-roasting'] },
  { materialId: 'tea-tieguanyin', compoundId: 'flavonol-glycosides', kind: 'composition', tier: 'measured', conditions: '鉄観音の焙煎で減少', sourceIds: ['cao-2021-tieguanyin-roasting'] },
  { materialId: 'tea-tieguanyin', compoundId: 'alkylpyrazines', kind: 'composition', tier: 'measured', conditions: '鉄観音の高温焙煎で含窒素複素環化合物（群）が増加（クラスレベルの知見）', sourceIds: ['cao-2021-tieguanyin-roasting'] },
  { materialId: 'tea-tieguanyin', compoundId: 'theanine', kind: 'composition', tier: 'measured', conditions: '鉄観音の焙煎で減少', sourceIds: ['cao-2021-tieguanyin-roasting'] },
  { materialId: 'tea-tieguanyin', compoundId: 'ee-2-4-heptadienal', kind: 'composition', tier: 'measured', conditions: '鉄観音で高含量（34.15–70.68 μg/L）。判別指標（VIP>1・ACI>1）として抽出された成分であり、GC-O 等による官能寄与の検証は含まれない', sourceIds: ['pairing-zeng-2022-tieguanyin-volatiles'] },
  { materialId: 'tea-tieguanyin', compoundId: 'e-2-octenal', kind: 'composition', tier: 'measured', conditions: '鉄観音で 1.57–2.94 μg/L の範囲で定量', sourceIds: ['pairing-zeng-2022-tieguanyin-volatiles'] },
  { materialId: 'tea-tieguanyin', compoundId: 'heptanal', kind: 'composition', tier: 'measured', conditions: '鉄観音で 1.60–2.79 μg/L の範囲で定量', sourceIds: ['pairing-zeng-2022-tieguanyin-volatiles'] },
  { materialId: 'tea-dahongpao', compoundId: 'catechins', kind: 'composition', tier: 'measured', conditions: '武夷岩茶4品種で、焙煎度が高いほどカテキン類（群）が減少する方向性の知見（4品種合算の範囲）', sourceIds: ['liu-2021-wuyi-rock-tea-roasting'] },
  { materialId: 'tea-dancong', compoundId: 'hotrienol', kind: 'composition', tier: 'measured', conditions: '鳳凰単叢の香型の異なる5種すべてで相対含量が最大群（14.8〜30.6%）。GC-MS の組成比較であり香気寄与の評価は含まれない', sourceIds: ['pairing-zheng-2024-dancong-aroma-types-gcms'] },
  { materialId: 'tea-dancong', compoundId: 'indole', kind: 'composition', tier: 'measured', conditions: '鳳凰単叢の香型により含量差がある（鴨屎香で18.9%等）。GC-MS の組成比較の範囲', sourceIds: ['pairing-zheng-2024-dancong-aroma-types-gcms'] },
  { materialId: 'tea-dancong', compoundId: 'methyl-salicylate', kind: 'composition', tier: 'measured', conditions: '鳳凰単叢の香型の異なる5種のうち1種でのみ検出（低含量の知見）', sourceIds: ['pairing-zheng-2024-dancong-aroma-types-gcms'] },
  { materialId: 'tea-dark-puer', compoundId: 'caffeine', kind: 'composition', tier: 'measured', conditions: '熟プーアルの渥堆発酵過程で増加することが報告された成分（含量の数値は収録しない）', sourceIds: ['pairing-yang-2025-ripened-puerh-mellow-thick-flavor'] },
  { materialId: 'tea-dark-puer', compoundId: 'theobromine', kind: 'composition', tier: 'measured', conditions: '熟プーアルの渥堆発酵過程で増加することが報告された成分', sourceIds: ['pairing-yang-2025-ripened-puerh-mellow-thick-flavor'] },
  { materialId: 'tea-dark-puer', compoundId: 'epicatechin', kind: 'composition', tier: 'measured', conditions: '熟プーアルの渥堆発酵過程で増加することが報告された成分', sourceIds: ['pairing-yang-2025-ripened-puerh-mellow-thick-flavor'] },
  { materialId: 'tea-white-baimudan', compoundId: 'flavonol-glycosides', kind: 'composition', tier: 'measured', conditions: '白茶の萎凋中にフラボノイド配糖体（群）が減少し、アグリコンが増加する変化が示された成分群', sourceIds: ['pairing-deng-2022-white-tea-flavonoid-glycosides'] },
  { materialId: 'tea-sencha', compoundId: 'quinic-acid', kind: 'composition', tier: 'measured', conditions: '日本緑茶の葉中有機酸として HPLC で定量。品種・茶種・成熟・遮光・時刻で変動する（葉中の組成であり、浸出液の味への寄与を直接示すものではない）', sourceIds: ['pairing-shirai-2022-green-tea-organic-acids-hplc'] },
  // ── B-3 組成リンク（参考情報格） ──
  { materialId: 'spice-ceylon-cinnamon', compoundId: 'cinnamaldehyde', kind: 'composition', tier: 'general', conditions: 'EU PGI「Ceylon Cinnamon」の申請時 Single Document に基づく参考情報。クイル油中のシンナムアルデヒド 50–70%（規則 (EU) 2022/144 本体ではなく申請文書の規格値であり、個別試料の実測ではない）', sourceIds: ['eu-2022-ceylon-cinnamon-pgi-spec'] },
  { materialId: 'spice-ceylon-cinnamon', compoundId: 'coumarin', kind: 'composition', tier: 'general', conditions: 'EU PGI の申請時 Single Document に基づく参考情報。クマリンの上限は 0.004% 未満（カシアとの区別点とされる規格値であり、個別試料の実測ではない）', sourceIds: ['eu-2022-ceylon-cinnamon-pgi-spec'] },
  { materialId: 'spice-ceylon-cinnamon', compoundId: 'eugenol', kind: 'composition', tier: 'general', conditions: '査読つき総説に基づく参考情報。樹皮油の主成分の一つとされる（樹皮油の組成であり、使用部位により組成は異なる。含量の数値は未確認のため収録しない）', sourceIds: ['suriyagoda-2021-ceylon-cinnamon-review'] },
  { materialId: 'spice-mace', compoundId: 'sabinene', kind: 'composition', tier: 'general', conditions: '精油組成データに基づく参考情報。Western Ghats 産メース精油でサビネン 38.37% が主成分（GC-MS による精油組成であり、食品中での香気寄与ではない）', sourceIds: ['ashokkumar-2020-nutmeg-parts-oil'] },
  { materialId: 'spice-mace', compoundId: 'myristicin', kind: 'composition', tier: 'general', conditions: '精油組成データに基づく参考情報。同研究のメース精油中でミリスチシン 5.90%（GC-MS による精油組成）', sourceIds: ['ashokkumar-2020-nutmeg-parts-oil'] },
  { materialId: 'herb-dill-weed', compoundId: 'alpha-phellandrene', kind: 'composition', tier: 'general', conditions: '精油組成データに基づく参考情報。ルーマニア産ディル葉油で α-フェランドレン 62.71% が主成分（葉油の組成は産地で大きく変動する）', sourceIds: ['radulescu-2010-dill-parts-oil'] },
]
