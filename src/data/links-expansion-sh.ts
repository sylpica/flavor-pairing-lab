import type { MaterialCompoundLink } from '../types'

// 素材×化合物リンクの拡張（スパイス・ハーブ調査 2026-10-31）。
// contribution は GC-O／AEDA／OAV／再構成／欠落試験／官能の原著がその素材自体にある場合だけ。
// 組成上の主成分であることだけでは contribution にしない（深化ラインの格上げ指定に従う）。

// ===== 既存ペアの格上げ（expansionShLinkUpgrades）=====
// 既存リンク（links.ts）と同じ materialId×compoundId に対する新しい kind/tier。
// 集約時に既存エントリを置換する想定。理由は各エントリのコメントに記す。
export const expansionShLinkUpgrades: MaterialCompoundLink[] = [
  // ブラックペッパー×リモネン: Jagella らの欠落試験で寄与が確認されたため composition→contribution
  { materialId: 'spice-black-pepper', compoundId: 'limonene', kind: 'contribution', tier: 'measured', conditions: '欠落試験（omission test）で寄与を確認した原著に基づく格上げ', sourceIds: ['jagella-1999-pepper-odorants', 'jagella-1999-pepper-oav'] },
  // コリアンダー種子×リナロール: Pater 2024 の GC-O で寄与が確認されたため composition→contribution
  { materialId: 'spice-coriander-seed', compoundId: 'linalool', kind: 'contribution', tier: 'measured', conditions: 'コリアンダー種子自体の GC-O 研究に基づく格上げ', sourceIds: ['pater-2024-coriander-gco'] },
  // フェンネル種子×trans-アネトール: Zeller 2006 の AEDA+OAV+官能評価で impact 化合物とされたため composition→contribution
  { materialId: 'spice-fennel-seed', compoundId: 'anethole', kind: 'contribution', tier: 'measured', conditions: 'AEDA・OAV・官能評価を組み合わせた原著に基づく格上げ', sourceIds: ['zeller-2006-fennel-impact'] },
  // クローブ×ユージノール: Qiang et al. 2025 全文でクローブ粉末の OAV>1 かつ FD≥64 の交差集合に入ったため composition→contribution
  { materialId: 'spice-clove', compoundId: 'eugenol', kind: 'contribution', tier: 'measured', conditions: 'クローブ粉末自体の OAV と AEDA の交差評価に基づく格上げ（全文確認済み）', sourceIds: ['yu-2025-clove-endowment'] },
  // スターアニス×trans-アネトール: Zhang 2015 の AEDA/FD で寄与が確認されたため composition→contribution
  { materialId: 'spice-star-anise', compoundId: 'anethole', kind: 'contribution', tier: 'measured', conditions: 'スターアニス自体の AEDA に基づく格上げ', sourceIds: ['zhang-2015-star-anise-volatiles'] },
  // ペパーミント×メントン: Gabetti 2021 の精油 AEDA で寄与が確認されたため composition→contribution
  { materialId: 'herb-peppermint', compoundId: 'menthone', kind: 'contribution', tier: 'measured', conditions: 'ペパーミント精油の AEDA に基づく格上げ。メントールは組成主成分だが寄与実証が今回未確認のため格上げしない', sourceIds: ['gabetti-2021-peppermint-gco'] },
  // バジル×リナロール: Sonmezdag 2018 の AEDA で寄与が確認されたため composition→contribution
  { materialId: 'herb-basil', compoundId: 'linalool', kind: 'contribution', tier: 'measured', conditions: '乾燥バジル（メチルチャビコール型条件）の AEDA に基づく格上げ。系統・条件で変わりうる', sourceIds: ['sonmezdag-2018-basil-aroma'] },
  // バジル×エストラゴール: 同上 AEDA に基づく格上げ
  { materialId: 'herb-basil', compoundId: 'estragole', kind: 'contribution', tier: 'measured', conditions: '乾燥バジル（メチルチャビコール型条件）の AEDA に基づく格上げ', sourceIds: ['sonmezdag-2018-basil-aroma'] },
  // タイム×チモール: Díaz-Maroto 2005 の GC-O で寄与が確認されたため composition→contribution
  { materialId: 'herb-thyme', compoundId: 'thymol', kind: 'contribution', tier: 'measured', conditions: 'チモール型試料の GC-O に基づく格上げ。ケモタイプ条件つき', sourceIds: ['diaz-maroto-2005-fennel-thyme'] },
  // タイム×カルバクロール: 同上 GC-O に基づく格上げ
  { materialId: 'herb-thyme', compoundId: 'carvacrol', kind: 'contribution', tier: 'measured', conditions: 'GC-O に基づく格上げ。ケモタイプ条件つき', sourceIds: ['diaz-maroto-2005-fennel-thyme'] },
  // ローズマリー×1,8-シネオール: Raffo 2026 の AEDA+OAV で寄与が確認されたため composition→contribution
  { materialId: 'herb-rosemary', compoundId: 'cineole', kind: 'contribution', tier: 'measured', conditions: 'ローズマリー自体の AEDA・OAV に基づく格上げ', sourceIds: ['raffo-2026-rosemary-odorants'] },
  // オレガノ×カルバクロール: Sádecká 2008 の AEDA で FD 10,000 と最高水準の寄与が確認されたため composition→contribution
  { materialId: 'herb-oregano', compoundId: 'carvacrol', kind: 'contribution', tier: 'measured', conditions: 'AEDA で FD factor 10,000。チモールは AEDA 上位に現れなかったため composition のまま据え置く', sourceIds: ['sadecka-2008-oregano-aeda'] },
  // セージ×1,8-シネオール: Jonas 2021 のセンソミクス（再構成・欠落）と Chiang 2024 で寄与が確認されたため composition→contribution
  { materialId: 'herb-sage', compoundId: 'cineole', kind: 'contribution', tier: 'measured', conditions: 'センソミクス（再構成・欠落試験）と乾燥セージの寄与研究に基づく格上げ', sourceIds: ['jonas-2021-sage-sensomics', 'chiang-2024-sage-odorants'] },
]

// 格上げしなかった主な既存ペア（判断記録）:
// - spice-cumin×cuminaldehyde: Ravi 2013 の全文が未取得で寄与判定に使えないため composition のまま保留。
// - herb-peppermint×menthol: 組成主成分だが、今回の調査で寄与実証は未確認のため据え置き。
// - herb-oregano×thymol: Sádecká 2008 の AEDA 上位に現れず、composition が正しい。
// - spice-nutmeg の既存ペア（myristicin、eugenol）・spice-cardamom の各化合物・spice-mace の各化合物: 素材単独の寄与研究が未発見のため据え置き（ナツメッグのサビネン等の新規リンクは Chatterjee 2015 の GC-O＋OAV に基づき contribution で別途追加）。

export const expansionShLinks: MaterialCompoundLink[] = [
  // ===== 既存素材への新規リンク：ブラックペッパー（Jagella 欠落試験・Wood ロタンドン）=====
  { materialId: 'spice-black-pepper', compoundId: 'alpha-pinene', kind: 'contribution', tier: 'measured', conditions: '欠落試験で寄与を確認', sourceIds: ['jagella-1999-pepper-odorants', 'jagella-1999-pepper-oav'] },
  { materialId: 'spice-black-pepper', compoundId: 'beta-pinene', kind: 'contribution', tier: 'measured', conditions: '欠落試験で寄与を確認', sourceIds: ['jagella-1999-pepper-odorants', 'jagella-1999-pepper-oav'] },
  { materialId: 'spice-black-pepper', compoundId: 'myrcene', kind: 'contribution', tier: 'measured', conditions: '欠落試験で寄与を確認', sourceIds: ['jagella-1999-pepper-odorants', 'jagella-1999-pepper-oav'] },
  { materialId: 'spice-black-pepper', compoundId: 'alpha-phellandrene', kind: 'contribution', tier: 'measured', conditions: '欠落試験で寄与を確認', sourceIds: ['jagella-1999-pepper-odorants', 'jagella-1999-pepper-oav'] },
  { materialId: 'spice-black-pepper', compoundId: 'linalool', kind: 'contribution', tier: 'measured', conditions: '欠落試験で寄与を確認', sourceIds: ['jagella-1999-pepper-odorants', 'jagella-1999-pepper-oav'] },
  { materialId: 'spice-black-pepper', compoundId: 'methylpropanal', kind: 'contribution', tier: 'measured', conditions: '欠落試験で寄与を確認（2-メチルプロパナール）', sourceIds: ['jagella-1999-pepper-odorants', 'jagella-1999-pepper-oav'] },
  { materialId: 'spice-black-pepper', compoundId: 'methylbutanal-2', kind: 'contribution', tier: 'measured', conditions: '欠落試験で寄与を確認', sourceIds: ['jagella-1999-pepper-odorants', 'jagella-1999-pepper-oav'] },
  { materialId: 'spice-black-pepper', compoundId: 'methylbutanal-3', kind: 'contribution', tier: 'measured', conditions: '欠落試験で寄与を確認', sourceIds: ['jagella-1999-pepper-odorants', 'jagella-1999-pepper-oav'] },
  { materialId: 'spice-black-pepper', compoundId: 'butyric-acid', kind: 'contribution', tier: 'measured', conditions: '欠落試験で寄与を確認', sourceIds: ['jagella-1999-pepper-odorants', 'jagella-1999-pepper-oav'] },
  { materialId: 'spice-black-pepper', compoundId: '3-methylbutanoic-acid', kind: 'contribution', tier: 'measured', conditions: '欠落試験で寄与を確認（3-メチル酪酸）', sourceIds: ['jagella-1999-pepper-odorants', 'jagella-1999-pepper-oav'] },
  { materialId: 'spice-black-pepper', compoundId: 'rotundone', kind: 'contribution', tier: 'measured', conditions: 'OAV 評価でペッパー様香気への寄与を示した原著', sourceIds: ['wood-2008-rotundone-pepper'] },
  // ===== コリアンダー種子（Pater 2024 GC-O）=====
  { materialId: 'spice-coriander-seed', compoundId: 'carvacrol', kind: 'contribution', tier: 'measured', conditions: 'GC-O で寄与を確認', sourceIds: ['pater-2024-coriander-gco'] },
  { materialId: 'spice-coriander-seed', compoundId: 'camphor', kind: 'contribution', tier: 'measured', conditions: 'GC-O で寄与を確認', sourceIds: ['pater-2024-coriander-gco'] },
  { materialId: 'spice-coriander-seed', compoundId: 'gamma-terpinene', kind: 'contribution', tier: 'measured', conditions: 'GC-O で特徴成分として同定', sourceIds: ['pater-2024-coriander-gco'] },
  // ===== フェンネル種子（Zeller 2006 AEDA/OAV/官能）=====
  { materialId: 'spice-fennel-seed', compoundId: 'fenchone', kind: 'contribution', tier: 'measured', conditions: 'フェンネル果実（種子）とフェンネル茶を対象とした AEDA・定量・OAV・官能評価の系での寄与（Zeller & Rychlik 2006）', sourceIds: ['zeller-2006-fennel-impact'] },
  { materialId: 'spice-fennel-seed', compoundId: 'anisaldehyde', kind: 'contribution', tier: 'measured', conditions: 'フェンネル果実（種子）とフェンネル茶を対象とした AEDA・定量・OAV・官能評価の系での寄与（Zeller & Rychlik 2006）', sourceIds: ['zeller-2006-fennel-impact'] },
  { materialId: 'spice-fennel-seed', compoundId: 'trans-4-5-epoxy-e-2-decenal', kind: 'contribution', tier: 'measured', conditions: 'フェンネル果実（種子）とフェンネル茶を対象とした AEDA・定量・OAV・官能評価の系での寄与（Zeller & Rychlik 2006）', sourceIds: ['zeller-2006-fennel-impact'] },
  { materialId: 'spice-fennel-seed', compoundId: 'cineole', kind: 'contribution', tier: 'measured', conditions: 'フェンネル果実（種子）とフェンネル茶を対象とした AEDA・定量・OAV・官能評価の系での寄与（Zeller & Rychlik 2006）', sourceIds: ['zeller-2006-fennel-impact'] },
  { materialId: 'spice-fennel-seed', compoundId: 'alpha-pinene', kind: 'contribution', tier: 'measured', conditions: 'Zeller & Rychlik 2006 では (R)-α-ピネンとして同定され、果実・茶の双方で高 FD を示した', sourceIds: ['zeller-2006-fennel-impact'] },
  { materialId: 'spice-fennel-seed', compoundId: 'myrcene', kind: 'contribution', tier: 'measured', conditions: 'フェンネル果実（種子）とフェンネル茶を対象とした AEDA・定量・OAV・官能評価の系での寄与（Zeller & Rychlik 2006）', sourceIds: ['zeller-2006-fennel-impact'] },
  // 旧リンク spice-fennel-seed × octen-3-ol-1 は全件照合（round7）で削除：Zeller & Rychlik 2006 の
  // 高 FD 群・OAV 上位のいずれにも含まれず、別素材・別出典の結果の付け替えが疑われたため。
  { materialId: 'spice-fennel-seed', compoundId: 'estragole', kind: 'contribution', tier: 'measured', conditions: '種子・精油系での寄与評価。フェンネル茶（浸出液）では官能 impact が認められなかった報告があり、形態で結論が異なる', sourceIds: ['zeller-2006-fennel-impact'] },
  // ===== クローブ（Qiang et al. 2025 全文：粉末で OAV>1 かつ FD≥64 の交差集合）=====
  { materialId: 'spice-clove', compoundId: 'beta-caryophyllene', kind: 'contribution', tier: 'measured', conditions: 'クローブ粉末の OAV・AEDA 交差集合', sourceIds: ['yu-2025-clove-endowment'] },
  // 旧リンク spice-clove × anethole / estragole は全件照合（round7）で削除：いずれもフェンネル／
  // バジル／タラゴン等の標識的フェニルプロパノイドで、Qiang et al. 2025 の要旨にもクローブ蕾油の組成文献にも
  // 構成成分としての裏付けがなく、フェンネル側化合物の混入と判断した。
  { materialId: 'spice-clove', compoundId: 'methoxy-4-methylphenol-2', kind: 'contribution', tier: 'measured', conditions: '同上（2-メトキシ-4-メチルフェノール）', sourceIds: ['yu-2025-clove-endowment'] },
  { materialId: 'spice-clove', compoundId: 'cineole', kind: 'contribution', tier: 'measured', conditions: '同上', sourceIds: ['yu-2025-clove-endowment'] },
  { materialId: 'spice-clove', compoundId: 'linalool', kind: 'contribution', tier: 'measured', conditions: '同上', sourceIds: ['yu-2025-clove-endowment'] },
  { materialId: 'spice-clove', compoundId: 'pentylfuran-2', kind: 'contribution', tier: 'measured', conditions: '同上（2-ペンチルフラン）', sourceIds: ['yu-2025-clove-endowment'] },
  { materialId: 'spice-clove', compoundId: 'carene-3', kind: 'contribution', tier: 'measured', conditions: '同上（3-カレン）', sourceIds: ['yu-2025-clove-endowment'] },
  { materialId: 'spice-clove', compoundId: 'limonene', kind: 'contribution', tier: 'measured', conditions: '同上', sourceIds: ['yu-2025-clove-endowment'] },
  { materialId: 'spice-clove', compoundId: 'beta-pinene', kind: 'contribution', tier: 'measured', conditions: '同上', sourceIds: ['yu-2025-clove-endowment'] },
  // ===== ナツメッグ種子（Chatterjee 2015 GC-O＋OAV）=====
  { materialId: 'spice-nutmeg', compoundId: 'sabinene', kind: 'contribution', tier: 'measured', conditions: '種子精油の GC-O＋OAV で特徴香への寄与と高 OAV が結論された', sourceIds: ['chatterjee-2015-nutmeg-aroma'] },
  { materialId: 'spice-nutmeg', compoundId: 'alpha-pinene', kind: 'contribution', tier: 'measured', conditions: '同上', sourceIds: ['chatterjee-2015-nutmeg-aroma'] },
  { materialId: 'spice-nutmeg', compoundId: 'beta-pinene', kind: 'contribution', tier: 'measured', conditions: 'GC-O で寄与が示された', sourceIds: ['chatterjee-2015-nutmeg-aroma'] },
  // ===== タイム（Goodner 2006 GC-O、シネオール型試料）=====
  // シネオール型試料の寄与4化合物は Goodner 2006（スペイン産）の知見。Díaz-Maroto 2005 の試料はチモール型で thymol/carvacrol の根拠であり、混同しない。
  { materialId: 'herb-thyme', compoundId: 'cineole', kind: 'contribution', tier: 'measured', conditions: 'シネオール型試料の GC-O（Goodner 2006）に基づく。ケモタイプ条件つき', sourceIds: ['goodner-2006-thyme-gco'] },
  { materialId: 'herb-thyme', compoundId: 'borneol', kind: 'contribution', tier: 'measured', conditions: 'シネオール型試料の GC-O（Goodner 2006）に基づく。ケモタイプ条件つき', sourceIds: ['goodner-2006-thyme-gco'] },
  { materialId: 'herb-thyme', compoundId: 'alpha-terpinyl-acetate', kind: 'contribution', tier: 'measured', conditions: 'シネオール型試料の GC-O（Goodner 2006）に基づく。ケモタイプ条件つき', sourceIds: ['goodner-2006-thyme-gco'] },
  { materialId: 'herb-thyme', compoundId: 'beta-damascenone', kind: 'contribution', tier: 'measured', conditions: 'シネオール型試料の GC-O（Goodner 2006）に基づく。ケモタイプ条件つき', sourceIds: ['goodner-2006-thyme-gco'] },
  // ===== ローズマリー（Raffo 2026 AEDA/OAV）=====
  { materialId: 'herb-rosemary', compoundId: 'alpha-pinene', kind: 'contribution', tier: 'measured', conditions: 'ローズマリー精油（産地の異なる6遺伝子型）を対象とした GC-O（AEDA）＋定量＋OAV での寄与（Raffo 2026）', sourceIds: ['raffo-2026-rosemary-odorants'] },
  { materialId: 'herb-rosemary', compoundId: 'linalool', kind: 'contribution', tier: 'measured', conditions: 'ローズマリー精油（産地の異なる6遺伝子型）を対象とした GC-O（AEDA）＋定量＋OAV での寄与（Raffo 2026）', sourceIds: ['raffo-2026-rosemary-odorants'] },
  { materialId: 'herb-rosemary', compoundId: 'fenchol', kind: 'contribution', tier: 'measured', conditions: 'ローズマリー精油（産地の異なる6遺伝子型）を対象とした GC-O（AEDA）＋定量＋OAV での寄与（Raffo 2026）', sourceIds: ['raffo-2026-rosemary-odorants'] },
  { materialId: 'herb-rosemary', compoundId: 'hexen-3-one-1', kind: 'contribution', tier: 'measured', conditions: '1-ヘキセン-3-オン', sourceIds: ['raffo-2026-rosemary-odorants'] },
  { materialId: 'herb-rosemary', compoundId: 'octen-3-one-1', kind: 'contribution', tier: 'measured', conditions: '1-オクテン-3-オン', sourceIds: ['raffo-2026-rosemary-odorants'] },
  { materialId: 'herb-rosemary', compoundId: 'beta-damascenone', kind: 'contribution', tier: 'measured', conditions: 'ローズマリー精油（産地の異なる6遺伝子型）を対象とした GC-O（AEDA）＋定量＋OAV での寄与（Raffo 2026）', sourceIds: ['raffo-2026-rosemary-odorants'] },
  // ===== バジル（Sonmezdag 2018 AEDA、条件つき）=====
  { materialId: 'herb-basil', compoundId: 'cineole', kind: 'contribution', tier: 'measured', conditions: 'イラン産陰干しバジル地上部（メチルチャビコール型）の AEDA で FD 512・OAV 約 987。トルコ産試料では香気活性として検出されなかった', sourceIds: ['sonmezdag-2018-basil-aroma'] },
  { materialId: 'herb-basil', compoundId: 'limonene', kind: 'contribution', tier: 'measured', conditions: 'トルコ産陰干しバジル地上部（メチルチャビコール型）の AEDA で FD 256・OAV 約 503。イラン産試料では香気活性として検出されなかった', sourceIds: ['sonmezdag-2018-basil-aroma'] },
  // ===== オレガノ（Sádecká 2008 AEDA）=====
  { materialId: 'herb-oregano', compoundId: 'linalool', kind: 'contribution', tier: 'measured', conditions: '乾燥オレガノ葉（トルコ産市販品）の非照射対照試料での GC-O＋AEDA による寄与（Sádecká & Polovka 2008）', sourceIds: ['sadecka-2008-oregano-aeda'] },
  { materialId: 'herb-oregano', compoundId: 'octen-3-ol-1', kind: 'contribution', tier: 'measured', conditions: '乾燥オレガノ葉（トルコ産市販品）の AEDA で FD 10,000（最高群）', sourceIds: ['sadecka-2008-oregano-aeda'] },
  { materialId: 'herb-oregano', compoundId: 'beta-damascenone', kind: 'contribution', tier: 'measured', conditions: '乾燥オレガノ葉（トルコ産市販品）の非照射対照試料での GC-O＋AEDA による寄与（Sádecká & Polovka 2008）', sourceIds: ['sadecka-2008-oregano-aeda'] },
  { materialId: 'herb-oregano', compoundId: 'guaiacol', kind: 'contribution', tier: 'measured', conditions: 'AEDA で FD factor 2,000', sourceIds: ['sadecka-2008-oregano-aeda'] },
  // ===== セージ（Jonas 2021 センソミクス／Chiang 2024）=====
  { materialId: 'herb-sage', compoundId: 'borneol', kind: 'contribution', tier: 'measured', conditions: '生葉のセンソミクス（再構成・欠落で検証）', sourceIds: ['jonas-2021-sage-sensomics'] },
  { materialId: 'herb-sage', compoundId: 'myrcene', kind: 'contribution', tier: 'measured', conditions: '生葉のセンソミクス', sourceIds: ['jonas-2021-sage-sensomics'] },
  { materialId: 'herb-sage', compoundId: 'z-3-hexenal', kind: 'contribution', tier: 'measured', conditions: '生葉のセンソミクス', sourceIds: ['jonas-2021-sage-sensomics'] },
  { materialId: 'herb-sage', compoundId: 'eugenol', kind: 'contribution', tier: 'measured', conditions: '生葉のセンソミクス', sourceIds: ['jonas-2021-sage-sensomics'] },
  { materialId: 'herb-sage', compoundId: 'ez-2-6-nonadienal', kind: 'contribution', tier: 'measured', conditions: '乾燥セージでの寄与研究', sourceIds: ['chiang-2024-sage-odorants'] },
  // ===== ペパーミント（Gabetti 2021 精油 AEDA／Shigeto 2020 生葉 cAEDA）=====
  { materialId: 'herb-peppermint', compoundId: 'cineole', kind: 'contribution', tier: 'measured', conditions: '精油の AEDA', sourceIds: ['gabetti-2021-peppermint-gco'] },
  { materialId: 'herb-peppermint', compoundId: 'menthofuran', kind: 'contribution', tier: 'measured', conditions: '精油の AEDA（同定は tentative の注記あり）', sourceIds: ['gabetti-2021-peppermint-gco'] },
  { materialId: 'herb-peppermint', compoundId: 'p-menthane-lactones', kind: 'contribution', tier: 'measured', conditions: '生葉の cAEDA で寄与が示されたラクトン群', sourceIds: ['shigeto-2020-peppermint-lactones'] },
  // ===== スターアニス（Zhang 2015 AEDA）=====
  { materialId: 'spice-star-anise', compoundId: 'linalool', kind: 'contribution', tier: 'measured', conditions: 'スターアニス果実を対象とした GC-O/AEDA での寄与（Zhang 2015）', sourceIds: ['zhang-2015-star-anise-volatiles'] },
  { materialId: 'spice-star-anise', compoundId: 'limonene', kind: 'contribution', tier: 'measured', conditions: 'スターアニス果実を対象とした GC-O/AEDA での寄与（Zhang 2015）', sourceIds: ['zhang-2015-star-anise-volatiles'] },
  // ===== 山椒（Jiang & Kubota 2004 AEDA：寄与4＋組成4）=====
  { materialId: 'spice-sansho', compoundId: 'citronellal', kind: 'contribution', tier: 'measured', conditions: '山椒果実の AEDA で寄与成分として同定', sourceIds: ['jiang-2004-sansho-volatiles'] },
  { materialId: 'spice-sansho', compoundId: 'geraniol', kind: 'contribution', tier: 'measured', conditions: '同上', sourceIds: ['jiang-2004-sansho-volatiles'] },
  { materialId: 'spice-sansho', compoundId: 'linalool', kind: 'contribution', tier: 'measured', conditions: '同上', sourceIds: ['jiang-2004-sansho-volatiles'] },
  { materialId: 'spice-sansho', compoundId: 'methyl-cinnamate', kind: 'contribution', tier: 'measured', conditions: '同上（ケイ皮酸メチル）', sourceIds: ['jiang-2004-sansho-volatiles'] },
  { materialId: 'spice-sansho', compoundId: 'limonene', kind: 'composition', tier: 'general', sourceIds: ['jiang-2004-sansho-volatiles', 'yamasaki-2022-sansho-classification'] },
  { materialId: 'spice-sansho', compoundId: 'beta-phellandrene', kind: 'composition', tier: 'general', sourceIds: ['jiang-2004-sansho-volatiles'] },
  { materialId: 'spice-sansho', compoundId: 'myrcene', kind: 'composition', tier: 'general', sourceIds: ['jiang-2004-sansho-volatiles'] },
  { materialId: 'spice-sansho', compoundId: 'geranyl-acetate', kind: 'composition', tier: 'general', sourceIds: ['jiang-2004-sansho-volatiles'] },
]

// ===== 新規素材へのリンク =====
// 原則として composition（組成）。contribution は当該素材自体の寄与手法の原著がある場合のみ。
export const expansionShNewMaterialLinks: MaterialCompoundLink[] = [
  // アニス
  { materialId: 'spice-anise', compoundId: 'anethole', kind: 'composition', tier: 'general', sourceIds: ['acimovic-2025-aniseed-oils'] },
  { materialId: 'spice-anise', compoundId: 'estragole', kind: 'composition', tier: 'general', sourceIds: ['orav-2008-anise-oil'] },
  // オールスパイス
  { materialId: 'spice-allspice', compoundId: 'eugenol', kind: 'composition', tier: 'general', sourceIds: ['padmakumari-2011-pimento-oil'] },
  { materialId: 'spice-allspice', compoundId: 'beta-caryophyllene', kind: 'composition', tier: 'general', sourceIds: ['merida-reyes-2020-pimenta-guatemala'] },
  // ジュニパーベリー
  { materialId: 'spice-juniper-berry', compoundId: 'alpha-pinene', kind: 'composition', tier: 'general', sourceIds: ['hoferl-2014-juniper-berry-oil'] },
  { materialId: 'spice-juniper-berry', compoundId: 'sabinene', kind: 'composition', tier: 'general', sourceIds: ['hoferl-2014-juniper-berry-oil'] },
  { materialId: 'spice-juniper-berry', compoundId: 'limonene', kind: 'composition', tier: 'general', sourceIds: ['hoferl-2014-juniper-berry-oil'] },
  { materialId: 'spice-juniper-berry', compoundId: 'myrcene', kind: 'composition', tier: 'general', sourceIds: ['hoferl-2014-juniper-berry-oil'] },
  // フェヌグリーク
  { materialId: 'spice-fenugreek', compoundId: 'sotolon', kind: 'composition', tier: 'general', conditions: '毛状根培養での産生確認と種子抽出物の知見。精油試料では未検出の場合があり、精油での寄与としては扱わない', sourceIds: ['peraza-luna-2001-fenugreek-sotolone'] },
  // キャラウェイ
  { materialId: 'spice-caraway', compoundId: 'carvone', kind: 'composition', tier: 'general', sourceIds: ['laribi-2010-caraway-ecotypes'] },
  { materialId: 'spice-caraway', compoundId: 'limonene', kind: 'composition', tier: 'general', sourceIds: ['laribi-2010-caraway-ecotypes'] },
  // マスタードシード
  { materialId: 'spice-mustard-seed', compoundId: 'allyl-isothiocyanate', kind: 'composition', tier: 'general', conditions: 'ブラウン種子で、粉砕＋加水による酵素分解で生成する。未粉砕の種子中にそのまま存在するのではない。イエロー種子の主辛味成分は別化合物', sourceIds: ['lietzow-2021-mustard-toxicology'] },
  // スマック
  { materialId: 'spice-sumac', compoundId: 'malic-acid', kind: 'composition', tier: 'general', conditions: '有機酸組成の定量に基づく', sourceIds: ['arena-2022-sumac-phytochemical'] },
  { materialId: 'spice-sumac', compoundId: 'citric-acid', kind: 'composition', tier: 'general', sourceIds: ['arena-2022-sumac-phytochemical'] },
  { materialId: 'spice-sumac', compoundId: 'nonanal', kind: 'detection', tier: 'general', conditions: '揮発成分として検出。焙煎で増加した', sourceIds: ['farag-2018-sumac-volatiles'] },
  // セロリシード
  { materialId: 'spice-celery-seed', compoundId: 'limonene', kind: 'composition', tier: 'general', sourceIds: ['zorga-2020-celery-seed-oil'] },
  { materialId: 'spice-celery-seed', compoundId: 'sedanenolide', kind: 'composition', tier: 'general', conditions: 'セロリの特徴香とされるが GC-O による寄与確認は未実施のため composition にとどめる', sourceIds: ['sowbhagya-2014-celery-review'] },
  { materialId: 'spice-celery-seed', compoundId: 'butylphthalide-3n', kind: 'composition', tier: 'general', conditions: '同上（3-n-ブチルフタリド）', sourceIds: ['sowbhagya-2014-celery-review'] },
  // ポピーシード（Kopuncová GC-O）
  { materialId: 'spice-poppy-seed', compoundId: 'limonene', kind: 'contribution', tier: 'measured', conditions: 'GC-O で寄与成分とされた', sourceIds: ['kopuncova-2016-poppy-odorants'] },
  { materialId: 'spice-poppy-seed', compoundId: 'nonanal', kind: 'contribution', tier: 'measured', conditions: 'GC-O で寄与成分とされた', sourceIds: ['kopuncova-2016-poppy-odorants'] },
  { materialId: 'spice-poppy-seed', compoundId: 'pentylfuran-2', kind: 'contribution', tier: 'measured', conditions: 'GC-O で寄与成分とされた（2-ペンチルフラン）', sourceIds: ['kopuncova-2016-poppy-odorants'] },
  { materialId: 'spice-poppy-seed', compoundId: 'hexanal', kind: 'contribution', tier: 'measured', conditions: 'GC-O で寄与成分とされた', sourceIds: ['kopuncova-2016-poppy-odorants'] },
  // アジョワン
  { materialId: 'spice-ajwain', compoundId: 'thymol', kind: 'composition', tier: 'general', sourceIds: ['roy-2015-ajowan-oil'] },
  { materialId: 'spice-ajwain', compoundId: 'gamma-terpinene', kind: 'composition', tier: 'general', sourceIds: ['mirniyam-2022-ajowan-populations'] },
  { materialId: 'spice-ajwain', compoundId: 'p-cymene', kind: 'composition', tier: 'general', sourceIds: ['roy-2015-ajowan-oil'] },
  // ガランガル
  { materialId: 'spice-galangal', compoundId: 'cineole', kind: 'composition', tier: 'general', conditions: '南インド産根茎油で精油中 28.4%。部位・産地で大きく異なる', sourceIds: ['jirovetz-2003-galangal-oils'] },
  { materialId: 'spice-galangal', compoundId: 'alpha-fenchyl-acetate', kind: 'composition', tier: 'general', conditions: '南インド産根茎油で精油中 18.4%', sourceIds: ['jirovetz-2003-galangal-oils'] },
  { materialId: 'spice-galangal', compoundId: 'methyl-cinnamate', kind: 'composition', tier: 'general', conditions: '南インド産試料での含有（4.2%）に基づく。タイ産で主体とする報告は書誌未確定のため採用しない', sourceIds: ['jirovetz-2003-galangal-oils'] },
  { materialId: 'spice-galangal', compoundId: 'camphor', kind: 'composition', tier: 'general', sourceIds: ['jirovetz-2003-galangal-oils'] },
  // マジョラム
  { materialId: 'herb-marjoram', compoundId: 'cis-sabinene-hydrate', kind: 'contribution', tier: 'measured', conditions: 'GC-O で殺菌前後を通じて主たる香りと判定。量的に優位なリナロールより寄与が大きかった', sourceIds: ['wojtowicz-2007-marjoram-sterilization'] },
  { materialId: 'herb-marjoram', compoundId: 'terpinen-4-ol', kind: 'composition', tier: 'general', conditions: 'テルピネン-4-オール型ケモタイプの指標成分', sourceIds: ['paudel-2022-marjoram-nepal'] },
  { materialId: 'herb-marjoram', compoundId: 'linalool', kind: 'composition', tier: 'general', conditions: '組成上は優位な場合があるが、GC-O では主臭ではなかった', sourceIds: ['wojtowicz-2007-marjoram-sterilization'] },
  { materialId: 'herb-marjoram', compoundId: 'carvacrol', kind: 'composition', tier: 'general', conditions: 'トルコ産カルバクロール型（精油中 78.27–79.46%）での組成。一般のマジョラム像ではない', sourceIds: ['baser-1993-marjoram-turkey'] },
  { materialId: 'herb-marjoram', compoundId: 'gamma-terpinene', kind: 'composition', tier: 'general', sourceIds: ['paudel-2022-marjoram-nepal'] },
  // レモンバーベナ
  { materialId: 'herb-lemon-verbena', compoundId: 'citral', kind: 'composition', tier: 'general', conditions: 'シトラール型ケモタイプでの主成分。36試料中シトラール主成分は2試料のみであり、種の固定属性ではない', sourceIds: ['sprea-2023-lemon-verbena-oil', 'elechosa-2017-lemon-verbena-chemotypes'] },
  // パセリ（Masanetz 1998 再構成で検証された character-impact 7成分＋組成2）
  { materialId: 'herb-parsley', compoundId: 'p-mentha-1-3-8-triene', kind: 'contribution', tier: 'measured', conditions: '葉の再構成で検証された character-impact 成分', sourceIds: ['masanetz-1998-parsley-odorants'] },
  { materialId: 'herb-parsley', compoundId: 'myrcene', kind: 'contribution', tier: 'measured', conditions: '同上', sourceIds: ['masanetz-1998-parsley-odorants'] },
  { materialId: 'herb-parsley', compoundId: 'sec-butyl-methoxypyrazine-2', kind: 'contribution', tier: 'measured', conditions: '同上（2-sec-ブチル-3-メトキシピラジン）', sourceIds: ['masanetz-1998-parsley-odorants'] },
  { materialId: 'herb-parsley', compoundId: 'myristicin', kind: 'contribution', tier: 'measured', conditions: '同上（葉での寄与。ナツメッグでの扱いとは別）', sourceIds: ['masanetz-1998-parsley-odorants'] },
  { materialId: 'herb-parsley', compoundId: 'linalool', kind: 'contribution', tier: 'measured', conditions: '同上', sourceIds: ['masanetz-1998-parsley-odorants'] },
  { materialId: 'herb-parsley', compoundId: 'z-dec-6-enal', kind: 'contribution', tier: 'measured', conditions: '同上（(Z)-6-デセナール）', sourceIds: ['masanetz-1998-parsley-odorants'] },
  { materialId: 'herb-parsley', compoundId: 'z-3-hexenal', kind: 'contribution', tier: 'measured', conditions: '同上（(Z)-3-ヘキセナール）', sourceIds: ['masanetz-1998-parsley-odorants'] },
  { materialId: 'herb-parsley', compoundId: 'apiole', kind: 'composition', tier: 'general', conditions: '根で全品種に優占する成分。葉の寄与成分ではない（組成≠寄与）', sourceIds: ['gruszecki-2022-root-parsley'] },
  { materialId: 'herb-parsley', compoundId: 'beta-phellandrene', kind: 'composition', tier: 'general', conditions: '葉の組成上の優占成分だが character-impact 7成分には含まれない', sourceIds: ['petropoulos-2004-parsley-types'] },
  // ヒソップ
  { materialId: 'herb-hyssop', compoundId: 'pinocamphone', kind: 'composition', tier: 'general', conditions: 'ケトン型ケモタイプの主成分', sourceIds: ['fathiazad-2011-hyssop-review'] },
  { materialId: 'herb-hyssop', compoundId: 'isopinocamphone', kind: 'composition', tier: 'general', sourceIds: ['fathiazad-2011-hyssop-review'] },
  { materialId: 'herb-hyssop', compoundId: 'linalool', kind: 'composition', tier: 'general', conditions: 'リナロール型ケモタイプ（var. decumbens 等）での主成分', sourceIds: ['fathiazad-2011-hyssop-review'] },
  // サマーサボリー
  { materialId: 'herb-summer-savory', compoundId: 'thymol', kind: 'composition', tier: 'general', conditions: '当該試料で精油中 29.0%', sourceIds: ['gulluce-2003-summer-savory'] },
  { materialId: 'herb-summer-savory', compoundId: 'carvacrol', kind: 'composition', tier: 'general', conditions: '当該試料で精油中 26.5%', sourceIds: ['gulluce-2003-summer-savory'] },
  { materialId: 'herb-summer-savory', compoundId: 'p-cymene', kind: 'composition', tier: 'general', sourceIds: ['iran-2011-summer-savory'] },
  { materialId: 'herb-summer-savory', compoundId: 'gamma-terpinene', kind: 'composition', tier: 'general', sourceIds: ['iran-2011-summer-savory'] },
  // ウインターサボリー
  { materialId: 'herb-winter-savory', compoundId: 'carvacrol', kind: 'composition', tier: 'general', conditions: 'subsp. montana の精油で 35.7%（Aćimović 2022 の単一研究値）。亜種一般の固定値ではなく、Jeor 1996 の広範な試料では 5.58–84.19% と大きく変動した', sourceIds: ['acimovic-2022-winter-savory-extracts', 'jeor-1996-winter-savory-subspecies'] },
  { materialId: 'herb-winter-savory', compoundId: 'thymol', kind: 'composition', tier: 'general', conditions: 'subsp. variegata の精油で 51.4%（Aćimović 2022 の単一研究値）。Jeor 1996 の広範な試料ではチモールは大半 0.45–2.84% であり、亜種で優占が逆転するとは限らない', sourceIds: ['acimovic-2022-winter-savory-extracts', 'jeor-1996-winter-savory-subspecies'] },
  // シソ PA型（Kumazawa 2023 AEDA）
  { materialId: 'herb-shiso', compoundId: 'perillaldehyde', kind: 'contribution', tier: 'measured', conditions: '新鮮葉の AEDA で最も高い FD factor', sourceIds: ['kumazawa-2023-perilla-odorants'] },
  { materialId: 'herb-shiso', compoundId: 'dihydroperillaldehyde', kind: 'contribution', tier: 'measured', conditions: 'AEDA で同定され新鮮葉から初同定。単独ではシソ様でないが、添加で嗜好性を高めた（相互作用はルール側で扱う）', sourceIds: ['kumazawa-2023-perilla-odorants'] },
  { materialId: 'herb-shiso', compoundId: 'limonene', kind: 'composition', tier: 'general', conditions: '別系統の焙煎研究での主要成分。系統依存性が高く PA 型一般の組成値ではない', sourceIds: ['lee-2019-perilla-roasting'] },
  // エゴマ葉 PK型（Seo & Baek 2009 GC-O）
  { materialId: 'herb-perilla-pk', compoundId: 'perilla-ketone', kind: 'contribution', tier: 'measured', conditions: 'GC-O で characteristic aroma-active compound とされた', sourceIds: ['seo-2009-perilla-aroma'] },
  { materialId: 'herb-perilla-pk', compoundId: 'egoma-ketone', kind: 'contribution', tier: 'measured', conditions: '同上', sourceIds: ['seo-2009-perilla-aroma'] },
  { materialId: 'herb-perilla-pk', compoundId: 'z-3-hexenal', kind: 'contribution', tier: 'measured', conditions: 'GC-O で強い香気活性', sourceIds: ['seo-2009-perilla-aroma'] },
  // ラベージ
  { materialId: 'herb-lovage', compoundId: 'sotolon', kind: 'contribution', tier: 'measured', conditions: '市販抽出物の AEDA で key aroma（FD factor 300、抽出物中 7.6 mg/kg）。生鮮葉の香りそのものではない', sourceIds: ['blank-1993-lovage-extract'] },
  { materialId: 'herb-lovage', compoundId: 'alpha-terpinyl-acetate', kind: 'composition', tier: 'general', sourceIds: ['bylaite-2000-lovage-headspace'] },
  { materialId: 'herb-lovage', compoundId: 'z-ligustilide', kind: 'composition', tier: 'general', sourceIds: ['bylaite-2000-lovage-headspace'] },
  { materialId: 'herb-lovage', compoundId: 'beta-phellandrene', kind: 'composition', tier: 'general', conditions: '根を除く全部位で組成上最も優占したが、キャラクターインパクト成分とは認められなかった', sourceIds: ['bylaite-2000-lovage-headspace'] },
  // ホーリーバジル（組成のみ。寄与の確立した原著は未確認）
  { materialId: 'herb-holy-basil', compoundId: 'eugenol', kind: 'composition', tier: 'general', conditions: '組成幅 18.5–48.0% の報告。産地で優占が入れ替わる', sourceIds: ['jamwal-2025-holy-basil'] },
  { materialId: 'herb-holy-basil', compoundId: 'methyl-eugenol', kind: 'composition', tier: 'general', sourceIds: ['jamwal-2025-holy-basil'] },
  { materialId: 'herb-holy-basil', compoundId: 'methyl-cinnamate', kind: 'composition', tier: 'general', sourceIds: ['jamwal-2025-holy-basil'] },
  { materialId: 'herb-holy-basil', compoundId: 'beta-caryophyllene', kind: 'composition', tier: 'general', conditions: 'ベトナム産で (E)-β-カリオフィレン 27.8–49.0% が優占した例', sourceIds: ['le-2024-holy-basil-oil'] },
  // レモンタイム
  { materialId: 'herb-lemon-thyme', compoundId: 'geraniol', kind: 'composition', tier: 'general', conditions: 'リトアニア産で精油中 36.6%（ゲラニオール型）', sourceIds: ['jureviciute-2019-lemon-thyme'] },
  { materialId: 'herb-lemon-thyme', compoundId: 'citral', kind: 'composition', tier: 'general', conditions: 'ゲラニアール 17.5%＋ネラール 10.2% の合計として', sourceIds: ['jureviciute-2019-lemon-thyme'] },
  { materialId: 'herb-lemon-thyme', compoundId: 'nerol', kind: 'composition', tier: 'general', conditions: 'リトアニア産で精油中 11.5%', sourceIds: ['jureviciute-2019-lemon-thyme'] },
  { materialId: 'herb-lemon-thyme', compoundId: 'terpinolene', kind: 'composition', tier: 'general', conditions: 'トルコ産テルピノレン型（開花期に精油中 71% まで）。ゲラニオール型とは別系統', sourceIds: ['toncer-2017-lemon-thyme-stages'] },
  // アップルミント
  { materialId: 'herb-apple-mint', compoundId: 'piperitenone-oxide', kind: 'composition', tier: 'general', conditions: 'モロッコ産試料で精油中 74.55% の実測。プロファイルの一つ', sourceIds: ['el-hachlafi-2023-apple-mint', 'bozovic-2015-apple-mint'] },
  { materialId: 'herb-apple-mint', compoundId: 'piperitone-oxide', kind: 'composition', tier: 'general', conditions: '東イベリアの集団で優占したプロファイル', sourceIds: ['llorens-molina-2017-apple-mint-chemotypes'] },
  { materialId: 'herb-apple-mint', compoundId: 'pulegone', kind: 'composition', tier: 'general', conditions: 'プレゴン優位型の指標成分', sourceIds: ['bozovic-2015-apple-mint'] },
  { materialId: 'herb-apple-mint', compoundId: 'carvone', kind: 'composition', tier: 'general', conditions: 'サウジアラビア産カルボン型（部位で 45–64%）', sourceIds: ['aldogman-2022-apple-mint'] },
  // カレープラント
  { materialId: 'herb-curry-plant', compoundId: 'neryl-acetate', kind: 'composition', tier: 'general', conditions: 'クロアチア産9試料で全試料の主成分（精油中 4.48–21.36%）。生育段階で大きく変動する', sourceIds: ['glumac-2023-curry-plant-oil'] },
  // パンダン
  { materialId: 'herb-pandan', compoundId: '2-acetyl-1-pyrroline', kind: 'contribution', tier: 'general', conditions: '同定・定量・前駆体実験の蓄積に基づく特徴香。パンダン自体の AEDA/OAV は未確認であるため tier は general にとどめる', sourceIds: ['bhattacharjee-2005-pandan-2ap', 'wakte-2012-pandan-2ap'] },
  { materialId: 'herb-pandan', compoundId: 'hexanal', kind: 'composition', tier: 'general', conditions: '全集団で常時検出される揮発成分の一つ', sourceIds: ['wakte-2012-pandan-2ap'] },
  { materialId: 'herb-pandan', compoundId: 'nonanal', kind: 'composition', tier: 'general', conditions: '同上', sourceIds: ['wakte-2012-pandan-2ap'] },
  // カレーリーフ
  { materialId: 'herb-curry-leaf', compoundId: 'beta-caryophyllene', kind: 'composition', tier: 'general', conditions: 'マレーシア6産地で精油中 16.6–26.6%', sourceIds: ['nagappan-2012-curry-leaf-markers'] },
  { materialId: 'herb-curry-leaf', compoundId: 'alpha-humulene', kind: 'composition', tier: 'general', conditions: '同 15.2–26.7%', sourceIds: ['nagappan-2012-curry-leaf-markers'] },
  // エパソーテ
  { materialId: 'herb-epazote', compoundId: 'ascaridole', kind: 'composition', tier: 'general', conditions: 'メキシコ産アスカリドール主体型（アスカリドールエポキシド 45.5%＋cis-アスカリドール 34.2%）。ケモタイプ依存', sourceIds: ['avila-blanco-2014-epazote-oil'] },
  { materialId: 'herb-epazote', compoundId: 'alpha-terpinene', kind: 'composition', tier: 'general', conditions: 'エクアドル産ケモタイプで 56–65% が主体（アスカリドールは低含量）', sourceIds: ['plants-2026-epazote-ecuador'] },
  // バイマックルート葉
  { materialId: 'herb-kaffir-lime-leaf', compoundId: 'citronellal', kind: 'composition', tier: 'general', conditions: '通常型で葉油中 85.07% の例', sourceIds: ['jtbb-2022-kaffir-lime'] },
  { materialId: 'herb-kaffir-lime-leaf', compoundId: 'linalool', kind: 'composition', tier: 'general', conditions: 'East Sumba 産ケモタイプで葉油中 86.06%', sourceIds: ['jtbb-2022-kaffir-lime'] },
  { materialId: 'herb-kaffir-lime-leaf', compoundId: 'citronellol', kind: 'composition', tier: 'general', conditions: 'Central Java 産で 11.66%', sourceIds: ['jtbb-2022-kaffir-lime'] },
  // シリアンオレガノ
  { materialId: 'herb-syrian-oregano', compoundId: 'carvacrol', kind: 'composition', tier: 'general', conditions: '南レバノン産で 78.4%。産地・標高で優占が入れ替わる', sourceIds: ['farhat-2012-syrian-oregano'] },
  { materialId: 'herb-syrian-oregano', compoundId: 'thymol', kind: 'composition', tier: 'general', conditions: '同試料で 17.9%。野生型ではチモール主体の例もある', sourceIds: ['farhat-2012-syrian-oregano'] },
]

// ===== 茶・チョコレート素材への新規リンク（深化タスク4の判定）=====
export const expansionShTeaChocoLinks: MaterialCompoundLink[] = [
  { materialId: 'choco-dark-roasted', compoundId: 'guaiacol', kind: 'contribution', tier: 'measured', conditions: '焙煎ココア試料の AEDA で高 FD。焙煎で生成する', sourceIds: ['frauendorfer-2006-cocoa-powder', 'frauendorfer-2008-criollo-roasting', 'deuscher-2020-dark-chocolate-gco'] },
  { materialId: 'tea-hojicha', compoundId: 'guaiacol', kind: 'detection', tier: 'general', conditions: '焙煎緑茶での検出報告のみ。寄与は主張しない', sourceIds: ['mizukami-2012-roasted-green-tea'] },
  { materialId: 'tea-sencha', compoundId: 'citric-acid', kind: 'composition', tier: 'general', sourceIds: ['zhang-2022-tea-organic-acids'] },
  { materialId: 'tea-black-general', compoundId: 'citric-acid', kind: 'composition', tier: 'general', sourceIds: ['zhang-2022-tea-organic-acids'] },
  { materialId: 'choco-dark-roasted', compoundId: 'citric-acid', kind: 'composition', tier: 'general', conditions: '発酵カカオ豆の有機酸組成として', sourceIds: ['holm-1993-cocoa-organic-acids'] },
  { materialId: 'tea-sencha', compoundId: 'malic-acid', kind: 'composition', tier: 'general', sourceIds: ['zhang-2022-tea-organic-acids'] },
  { materialId: 'tea-black-general', compoundId: 'malic-acid', kind: 'composition', tier: 'general', sourceIds: ['zhang-2022-tea-organic-acids'] },
  { materialId: 'tea-matcha', compoundId: 'malic-acid', kind: 'composition', tier: 'general', conditions: '消化モデルでの有機酸組成の文脈', sourceIds: ['nekvapil-2024-matcha-digestion'] },
  { materialId: 'tea-sencha', compoundId: 'acetic-acid', kind: 'composition', tier: 'general', sourceIds: ['zhang-2022-tea-organic-acids'] },
  { materialId: 'tea-black-general', compoundId: 'acetic-acid', kind: 'composition', tier: 'general', sourceIds: ['zhang-2022-tea-organic-acids'] },
  { materialId: 'choco-dark-roasted', compoundId: 'acetic-acid', kind: 'contribution', tier: 'measured', conditions: '発酵カカオ豆の酸味への寄与を再構成系で評価した原著', sourceIds: ['holm-1993-cocoa-organic-acids'] },
  { materialId: 'tea-black-general', compoundId: 'lactic-acid', kind: 'composition', tier: 'general', sourceIds: ['zhang-2022-tea-organic-acids'] },
  { materialId: 'choco-dark-roasted', compoundId: 'lactic-acid', kind: 'contribution', tier: 'measured', conditions: '発酵カカオ豆の酸味への寄与を評価した原著', sourceIds: ['holm-1993-cocoa-organic-acids'] },
  { materialId: 'choco-dark-roasted', compoundId: 'sucrose', kind: 'composition', tier: 'general', conditions: '配合成分（添加糖）でありカカオ内在成分ではない。甘味の担い手であることは配合研究で直接確認されている', sourceIds: ['burkard-2024-chocolate-sweetness'] },
  { materialId: 'tea-sencha', compoundId: 'sucrose', kind: 'contribution', tier: 'general', conditions: '可溶性糖と甘味の弁別・相関レベルでの寄与（原著の評価水準の範囲）。出典は中国 6 茶種（中国式緑茶を含む）の官能＋糖メタボロミクスによる弁別・相関レベルの寄与であり、煎茶（蒸し製）での直接測定ではない', sourceIds: ['li-2025-tea-soluble-sugars'] },
  { materialId: 'tea-black-general', compoundId: 'sucrose', kind: 'contribution', tier: 'general', conditions: '可溶性糖と甘味の弁別・相関レベルでの寄与（Li 2025。個別TAV・再構成による証明ではない）', sourceIds: ['li-2025-tea-soluble-sugars'] },
]


// ===== 唐辛子の種レベル分割に伴うリンク（round7、2026-10-31）=====
// 旧 spice-chili × capsaicin（contribution/general）1件を廃止し、種素材5件へ移行した。
// カプサイシンは pubescens では優位成分ではないため composition とし、pubescens では
// ジヒドロカプサイシン側を contribution とした。組成比は種平均の傾向（Alghamdi 2025）であり
// 種の同定指標ではない（Zewdie & Bosland 2001）。
export const expansionShChiliLinks: MaterialCompoundLink[] = [
  { materialId: 'spice-chili-annuum', compoundId: 'capsaicin', kind: 'contribution', tier: 'general', conditions: 'TRPV1 作動による灼熱感の主因（総説）。種平均では総カプサイシノイドの約64%を占める（Alghamdi 2025）。品種により含量は大きく異なる', sourceIds: ['abdel-salam-2023-capsaicin', 'alghamdi-2025-capsaicinoid-profiles'] },
  { materialId: 'spice-chili-chinense', compoundId: 'capsaicin', kind: 'contribution', tier: 'general', conditions: 'TRPV1 作動による灼熱感の主因（総説）。カプサイシン優位の組成で種平均は総カプサイシノイドの約73%（Alghamdi 2025）。超辛味品種を含む', sourceIds: ['abdel-salam-2023-capsaicin', 'alghamdi-2025-capsaicinoid-profiles'] },
  { materialId: 'spice-chili-frutescens', compoundId: 'capsaicin', kind: 'contribution', tier: 'general', conditions: 'TRPV1 作動による灼熱感の主因（総説）。カプサイシン優位の組成で種平均は総カプサイシノイドの約73%（Alghamdi 2025）', sourceIds: ['abdel-salam-2023-capsaicin', 'alghamdi-2025-capsaicinoid-profiles'] },
  { materialId: 'spice-chili-baccatum', compoundId: 'capsaicin', kind: 'contribution', tier: 'general', conditions: 'TRPV1 作動による灼熱感の主因（総説）。種平均では総カプサイシノイドの約64%（Alghamdi 2025）。総量は対照の chinense より温和だった（Kollmannsberger 2011）', sourceIds: ['abdel-salam-2023-capsaicin', 'alghamdi-2025-capsaicinoid-profiles', 'kollmannsberger-2011-aji-rocoto-volatiles'] },
  { materialId: 'spice-chili-pubescens', compoundId: 'capsaicin', kind: 'composition', tier: 'general', conditions: '種平均では総カプサイシノイドの約34%で、ジヒドロカプサイシンに次ぐ成分（Alghamdi 2025）。本種の辛味の主担い手はジヒドロカプサイシン側', sourceIds: ['alghamdi-2025-capsaicinoid-profiles', 'meckelmann-2015-pubescens-phytochemicals'] },
  { materialId: 'spice-chili-annuum', compoundId: 'dihydrocapsaicin', kind: 'composition', tier: 'general', conditions: '種平均で総カプサイシノイドの約30%を占める主要カプサイシノイド（Alghamdi 2025）', sourceIds: ['alghamdi-2025-capsaicinoid-profiles'] },
  { materialId: 'spice-chili-chinense', compoundId: 'dihydrocapsaicin', kind: 'composition', tier: 'general', conditions: '種平均で総カプサイシノイドの約25%を占める主要カプサイシノイド（Alghamdi 2025）', sourceIds: ['alghamdi-2025-capsaicinoid-profiles'] },
  { materialId: 'spice-chili-frutescens', compoundId: 'dihydrocapsaicin', kind: 'composition', tier: 'general', conditions: '種平均で総カプサイシノイドの約25%を占める主要カプサイシノイド（Alghamdi 2025）', sourceIds: ['alghamdi-2025-capsaicinoid-profiles'] },
  { materialId: 'spice-chili-baccatum', compoundId: 'dihydrocapsaicin', kind: 'composition', tier: 'general', conditions: '種平均で総カプサイシノイドの約30%を占める主要カプサイシノイド（Alghamdi 2025）', sourceIds: ['alghamdi-2025-capsaicinoid-profiles'] },
  { materialId: 'spice-chili-pubescens', compoundId: 'dihydrocapsaicin', kind: 'contribution', tier: 'general', conditions: '種平均で総カプサイシノイドの約60%を占める優位成分で、本種では TRPV1 作動による灼熱感の主担い手（組成は Alghamdi 2025・Meckelmann 2015 の実測、機構はカプサイシノイドの総説）', sourceIds: ['alghamdi-2025-capsaicinoid-profiles', 'meckelmann-2015-pubescens-phytochemicals', 'abdel-salam-2023-capsaicin'] },
]

// ===== 統合エクスポート（新規リンク全件。格上げ分は expansionShLinkUpgrades を参照）=====
export const expansionShAllLinks: MaterialCompoundLink[] = [
  ...expansionShLinks,
  ...expansionShNewMaterialLinks,
  ...expansionShTeaChocoLinks,
  ...expansionShChiliLinks,
]
