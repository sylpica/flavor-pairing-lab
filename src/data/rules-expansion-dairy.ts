import type { InteractionRule } from '../types'

// 乳製品の相互作用ルール（調査 round7/milk-research.md §3.6、2026-10-31）。
// 旧ルール 'milk-protein-catechin'（Qie 2021、チョコレート側トリガー）は、
// ミルクティーの直接研究を束ねた milk-tea-catechin-fate（R2）に統合・置換した。
// 文面は調査の文面案に基づき、肯定・否定が併存する論点ではどちらか一方に寄せない。
export const expansionDairyInteractionRules: InteractionRule[] = [
  {
    id: 'milk-tea-astringency-suppression', kind: 'taste',
    conditionNote: 'お茶 × 乳製品（牛乳・生クリーム）の組み合わせ',
    trigger: { domains: ['tea', 'dairy'] },
    text: '乳の成分（主にカゼイン等のタンパク質画分）は茶のカテキンと結合して遊離カテキンを減らし、渋味を抑えることが、カテキン溶液と乳成分のモデル系で官能評価と HPLC 測定の両面から示されています。実際の茶浸出液での程度は、茶の濃度や乳の量で変わります。',
    level: 'general', directStudy: true,
    sourceIds: ['milk-science-2010-catechin-astringency', 'hasni-2011-casein-tea-polyphenols', 'ye-2013-milk-tea-polyphenols'],
  },
  {
    id: 'milk-tea-catechin-fate', kind: 'taste',
    conditionNote: 'お茶 × 乳製品（牛乳・生クリーム）の組み合わせ（カテキンの吸収・生理作用への帰結は未確定）',
    trigger: { domains: ['tea', 'dairy'] },
    text: '乳タンパク質と茶カテキンの結合自体は実測されていますが、それがカテキンの吸収や生理作用にどう帰結するかは研究により結論が分かれます。血管機能や血漿抗酸化能の茶の効果が乳で消失した報告がある一方、変化がなかったとする報告や、in vitro 消化モデルで吸収がむしろ高まった報告もあります。茶の種類・乳の量と種類・測定法が条件となります。ミルクチョコレートやホワイトチョコレートの乳成分でも結合自体は起こり得ますが、そちらは直接の検証ではない探索的な含みです。',
    level: 'general', directStudy: true,
    sourceIds: ['lorenz-2007-milk-tea-vascular', 'serafini-1996-tea-antioxidant-milk', 'leenen-2000-tea-milk-plasma', 'reddy-2005-milk-black-tea-antioxidant', 'xie-2013-milk-catechin-caco2', 'qie-2021-milk-tea-catechin-protein', 'rashidinejad-2017-milk-tea-review', 'piyasena-2025-milk-in-tea-review'],
  },
  {
    id: 'milk-chocolate-flavanol', kind: 'taste',
    conditionNote: 'チョコレート × 乳製品（牛乳・生クリーム）の組み合わせ（摂取後の生理指標の知見）',
    trigger: { domains: ['chocolate', 'dairy'] },
    text: 'ダークチョコレートと牛乳を一緒に摂ると、チョコレート単独で見られた血漿抗酸化能やエピカテキンの上昇が見られなかったという報告があります。一方、ココア飲料を牛乳で作った研究ではエピカテキン代謝物の血中濃度に有意差はなく、測定法をめぐる論争も続いています。味の調和そのものを測った研究ではなく、摂取後の生理指標の知見です。',
    level: 'general', directStudy: true,
    sourceIds: ['serafini-2003-chocolate-plasma-antioxidants', 'schroeter-2003-milk-flavanol-correspondence', 'roura-2007-cocoa-milk-bioavailability'],
  },
  {
    id: 'milk-pungency-relief', kind: 'mouthfeel',
    conditionNote: '乳製品と、辛味（カプサイシン等）が中程度以上の素材の組み合わせ',
    trigger: { domains: ['dairy'], sensation: 'pungent', minIntensity: 'moderate' },
    text: '牛乳はカプサイシンの口内の灼熱感を和らげることが複数の官能研究で示されています。ただし全乳と脱脂乳で差がなかった報告もあり、理由は脂肪への分配だけではなく、タンパク質との結合、温度（冷たい方が有効）、甘味など複数の要因が関係すると考えられています。タンパク質溶液だけでは明確な効果が出なかった研究もあります。',
    level: 'general', directStudy: false,
    sourceIds: ['nasrawi-1990-capsaicin-rinsing', 'nolden-2019-capsaicin-beverages', 'gaiser-2023-milks-capsaicin', 'gokhan-2023-dairy-proteins-capsaicin'],
  },
  {
    id: 'milk-fat-aroma-retention', kind: 'aroma',
    conditionNote: '乳製品（牛乳・生クリーム）を含む組み合わせ全般',
    trigger: { domains: ['dairy'] },
    text: '乳脂肪は疎水性の香気成分を取り込んで保持し、空気中への放出を抑えることが分配係数の実測で示されています。牛乳やクリームを加えると、脂溶性の香気成分（スパイスの香りなど）の立ち上がりが穏やかになり、持続する方向に働く可能性があります。これは乳媒体での一般機構で、個別の組み合わせの実測ではありません。',
    level: 'general', directStudy: false,
    sourceIds: ['meynier-2003-aroma-partition-dairy', 'schlutt-2007-cream-lactones'],
  },
  {
    id: 'chai-milk-decoction', kind: 'aroma',
    conditionNote: 'お茶 × スパイス × 乳製品（チャイ様の組み合わせ）',
    trigger: { domains: ['tea', 'spice', 'dairy'] },
    text: 'チャイのように紅茶・スパイス・牛乳を一緒に煮出す調理法では、水だけで抽出する場合と香味のバランスが変わり得ます。ただし、牛乳で煮出すこと自体の効果を直接検証した査読研究は確認できておらず、この説明は調理慣行と、乳脂肪が脂溶性香気成分を保持するという一般機構からの探索的な予測です。',
    level: 'exploratory', directStudy: false,
    sourceIds: ['ochanda-2015-spiced-black-tea'],
  },
]
