import type { InteractionRule, SimulationTendency } from '../types'

// 相互作用ルール・シミュレーション傾向の拡張（スパイス・ハーブ調査 2026-10-31、主に wave2）。
// 相互作用は、wave2 で直接確認した原著があるものだけを収録する。
// ペアリングを化合物の足し算で判断しない方針は既存データと同一。

export const expansionInteractionRules: InteractionRule[] = [
  {
    id: 'capsaicin-sweetness-suppression',
    kind: 'taste',
    conditionNote: '辛味（pungent）が強い素材と甘味素材を組み合わせたとき（チョコレート×唐辛子自体の直接研究あり）',
    trigger: { sensation: 'pungent', minIntensity: 'strong' },
    text: 'シュガーフリー・ダークチョコレートに唐辛子（Capsicum baccatum）と甘味料を組み合わせた直接研究では、最高水準の辛味×最高水準の甘味の組合せでのみ、辛味の強度と持続が有意に低下した。低〜中水準ではこの抑制は観察されておらず、「甘味は辛味を和らげる」は全濃度域の一般則ではない。なお心理物理実験（Prescott & Stevenson 1995）では、カプサイシンの口腔刺激は甘味とフレーバー知覚を抑制する一方で、酸味は抑制されなかった。辛味による知覚の抑制は味質により一様ではない（モデル溶液での結果であり、食品中の抑制の大きさそのものではない）。',
    level: 'general',
    directStudy: true,
    sourceIds: ['martins-2025-spicy-chocolate', 'pairing-prescott-1995-effects-oral-chemical'],
  },
  {
    id: 'capsaicin-rinse-cooling-sweetness',
    kind: 'mouthfeel',
    conditionNote: 'カプサイシンの灼熱感が口中にある状態で、低温の飲食物や甘味が加わるとき',
    trigger: { sensation: 'pungent', minIntensity: 'moderate' },
    text: 'カプサイシンの口中灼熱感は、低温の溶液と甘味によって低減する。リンス実験では10%スクロース溶液（20℃）と全乳（5℃）が同等の低減効果を示し、脂肪含量の異なる甘味乳でも低減度は同程度だった。つまり乳の効果を「脂肪が辛味成分を溶かして流す」ことだけで説明することは支持されない（温度・糖・タンパク質等を含む複合要因）。',
    level: 'general',
    directStudy: false,
    sourceIds: ['nasrawi-1990-capsaicin-rinsing'],
  },
  {
    id: 'vanilla-odor-sweetness-oite',
    kind: 'aroma',
    conditionNote: 'バニリン（バニラ香）を含む素材と甘味素材を組み合わせたとき',
    trigger: { compoundId: 'vanillin' },
    text: 'バニラ香は甘味の知覚を増強し得る（香りによる味の増強：OITE）。ただし増強は提示条件に依存する：モデル系では、香りが飲んだ後のレトロネーザル経路で提示された場合にのみ増強が生じ、提示順序を逆転させると消失した。常に起こる効果としてではなく、経路・タイミング依存の現象として扱う。',
    level: 'general',
    directStudy: false,
    sourceIds: ['sakai-2001-vanilla-sweetness', 'kakutani-2017-breath-timing'],
  },
  {
    id: 'shiso-dhp-mixture',
    kind: 'aroma',
    conditionNote: 'シソ（PA型）を含む混合系',
    trigger: { compoundId: 'dihydroperillaldehyde' },
    text: 'ジヒドロペリルアルデヒド（DHP）は単独ではシソ様の香りではないが、シソ風味ポン酢醤油への50 ppb の添加で「青シソ様」の知覚と嗜好性が有意に向上した。個々の成分の香りの足し算では予測できない、混合系での相互作用の実験例。濃度・食品系が異なる場合への一般化はしない。',
    level: 'exploratory',
    directStudy: false,
    sourceIds: ['kumazawa-2023-perilla-odorants'],
  },
  {
    id: 'clove-maillard-suppression',
    kind: 'aroma',
    conditionNote: 'クローブ（ユージノール）を含む素材をタンパク質食品とともに加熱するとき',
    trigger: { compoundId: 'eugenol' },
    text: 'クローブのユージノールは、加熱タンパク質食品のモデル系で、含硫の加熱生成物である dimethyl trisulfide の生成を抑制した（Qiang et al. 2025 全文の知見）。加熱調理の文脈に限定した相互作用であり、生の素材同士の組み合わせの香り予測には使わない。',
    level: 'exploratory',
    directStudy: false,
    sourceIds: ['yu-2025-clove-endowment'],
  },
]

// 見送ったルール（判断記録）:
// - スパイス茶の嗜好・化学レベルの報告（Ochanda 2015 等）: 知覚機構の研究ではないため収録しない。
// - とろみ剤×AITC の知見: 対象がワサビ（本アプリ未収録素材）のため収録しない。
// - シナモン香→甘味増強: 原著が未確認のため収録しない。
// - カプサイシン×乳タンパク質の研究: 書誌が未確定のため出典化せず、ルールにも使わない。

export const expansionSimulationTendencies: SimulationTendency[] = [
  {
    id: 'roast-black-pepper-temp',
    parameter: 'roast-temp',
    text: 'コショウの焙煎では、温度の上昇に伴いピペリンと揮発性香気成分の損失が進む傾向がある。検討された温度域は黒コショウで140–160℃、白コショウで100–140℃。',
    tier: 'general',
    applicableDomains: ['spice'],
    applicableMaterialIds: ['spice-black-pepper', 'spice-white-pepper'],
    sourceIds: ['zhang-2025-pepper-thermal', 'suresh-2007-heat-processing-spices'],
    limits: '湿熱処理（蒸気等）で得られた損失率を乾熱焙煎へ転用しない。定量的な予測ではなく方向性の傾向のみ。',
  },
  {
    id: 'roast-chili-temp',
    parameter: 'roast-temp',
    text: '唐辛子の加熱では、温度の上昇に伴いカプサイシノイド（辛味）が減少し、ピラジン類等の焙煎生成物（香ばしさ）が増加する傾向がある。',
    tier: 'general',
    applicableDomains: ['spice'],
    applicableMaterialIds: ['spice-chili-annuum', 'spice-chili-chinense', 'spice-chili-frutescens', 'spice-chili-baccatum', 'spice-chili-pubescens'],
    sourceIds: ['kim-2022-chili-seed-roasting', 'zhang-2019-chili-seed-roasting', 'jiang-2025-chili-powder-thermal'],
    limits: '唐辛子の種子・粉末系で得られた知見。果実全体や生鮮形態への一般化はしない。',
  },
  {
    id: 'roast-cumin-heat',
    parameter: 'roast-temp',
    text: 'クミンの加熱では、精油の総量が低下し、脂質分解由来のアルデヒド類が生成する傾向がある。',
    tier: 'general',
    applicableDomains: ['spice'],
    applicableMaterialIds: ['spice-cumin'],
    sourceIds: ['behera-2004-cumin-roasting', 'abd-el-mageed-2007-roasting'],
    limits: '温度系列のある定量データは限られる。傾向の方向のみを示し、特定温度での数値予測には使わない。',
  },
  {
    id: 'roast-coriander-method',
    parameter: 'roast-temp',
    text: 'コリアンダー種子では、焙煎方式（乾熱・湿熱等の違い）によって揮発成分の変化の方向が異なることが報告されている。',
    tier: 'general',
    applicableDomains: ['spice'],
    applicableMaterialIds: ['spice-coriander-seed'],
    sourceIds: ['abd-el-mageed-2007-roasting'],
    limits: '方式間比較のみに基づく弱い傾向。温度そのものの数値傾向としては使わない。',
  },
]

// 見送った傾向（判断記録）:
// - スターアニスの乾燥傾向: 本アプリのパラメータ体系に乾燥軸がなく、焙煎スライダーへの流用は調査自体が禁じているため収録しない。
// - 山椒の成熟段階による変化: roast/extract のパラメータに対応しないため収録しない。
