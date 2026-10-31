import type { MaterialCompoundLink } from '../types'

// 乳製品の素材×化合物リンク（調査 round7/milk-research.md §2.3、2026-10-31）。
// 牛乳は検出・組成に留める（ジアセチルの未発酵乳での寄与は文献間で不一致のため寄与とは主張しない）。
// 生クリームは Schlutt et al. 2007 がクリーム自体を AEDA で測定しているため contribution / measured を置ける。
export const expansionDairyLinks: MaterialCompoundLink[] = [
  // 牛乳
  { materialId: 'milk-cow', compoundId: 'delta-decalactone', kind: 'detection', tier: 'general', conditions: '乳脂肪由来ラクトンとして牛乳に存在。流動乳での寄与の直接検証は弱いため検出に留める', sourceIds: ['bendall-2001-fresh-milk-aroma', 'cadwallader-singh-2009-milk-flavours'] },
  { materialId: 'milk-cow', compoundId: 'diacetyl', kind: 'detection', tier: 'general', conditions: '未発酵乳での濃度・寄与は文献間で見解が分かれるため、寄与とは主張しない', sourceIds: ['cadwallader-singh-2009-milk-flavours'] },
  { materialId: 'milk-cow', compoundId: 'dimethyl-sulfide', kind: 'detection', tier: 'general', conditions: '生乳〜UHT乳を通じ主要な含硫揮発成分の一つ', sourceIds: ['lan-2025-milk-flavor-processing'] },
  { materialId: 'milk-cow', compoundId: '2-heptanone', kind: 'detection', tier: 'general', conditions: '加熱で増加するメチルケトン（AEDA 比較・GC-MS 比較）', sourceIds: ['jstage-1999-milk-aroma-aeda', 'lan-2025-milk-flavor-processing'] },
  { materialId: 'milk-cow', compoundId: 'nonanal', kind: 'detection', tier: 'general', conditions: '脂質酸化由来のアルデヒド。生乳・殺菌乳で検出', sourceIds: ['lan-2025-milk-flavor-processing'] },
  { materialId: 'milk-cow', compoundId: 'lactose', kind: 'composition', tier: 'general', conditions: '4.4 g/100g（日本食品標準成分表）。弱い甘味の基盤', sourceIds: ['mext-food-composition-database'] },
  // 生クリーム（Schlutt et al. 2007、脂肪30%殺菌クリームの AEDA）
  { materialId: 'cream-fresh', compoundId: 'delta-decalactone', kind: 'contribution', tier: 'measured', conditions: '脂肪30%殺菌クリームの AEDA で最高水準の FD', sourceIds: ['schlutt-2007-cream-lactones'] },
  { materialId: 'cream-fresh', compoundId: 'delta-dodecalactone', kind: 'contribution', tier: 'measured', conditions: '同上（AEDA で高 FD）', sourceIds: ['schlutt-2007-cream-lactones'] },
  { materialId: 'cream-fresh', compoundId: 'gamma-dodecalactone', kind: 'contribution', tier: 'measured', conditions: '同上（AEDA で高 FD）', sourceIds: ['schlutt-2007-cream-lactones'] },
  { materialId: 'cream-fresh', compoundId: 'z6-dodeceno-gamma-lactone', kind: 'contribution', tier: 'measured', conditions: '同上（(Z)-6-ドデセノ-γ-ラクトン、AEDA で高 FD）', sourceIds: ['schlutt-2007-cream-lactones'] },
  { materialId: 'cream-fresh', compoundId: 'delta-tetradecalactone', kind: 'contribution', tier: 'measured', conditions: '半揮発性画分から同定され、閾値超の添加で鼻腔後方クリーミー感を増強（添加試験）', sourceIds: ['schlutt-2007-cream-lactones'] },
  { materialId: 'cream-fresh', compoundId: 'lactose', kind: 'composition', tier: 'general', conditions: '組成として含有（脂肪に希釈され甘味は弱い）', sourceIds: ['mext-food-composition-database'] },
]
