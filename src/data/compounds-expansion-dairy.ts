import type { Compound } from '../types'

// 乳製品で追加する化合物（調査 round7/milk-research.md、2026-10-31）。
// sensoryKnowledge は調査で裏付けられた記述に限定する。CAS・化学式は本調査で未確認のため空欄
// （後続調査に回す）。ラクトン類の香調は Schlutt et al. 2007 の記述
// （ラクトン類＝クリーミー／ココナッツ様の甘い香り）に限定する。
export const expansionDairyCompounds: Compound[] = [
  {
    id: '2-heptanone', nameJa: '2-ヘプタノン', nameEn: '2-Heptanone',
    aliases: ['メチルアミルケトン'], cas: '110-43-0', formula: 'C7H14O', pubchemCid: 8051, compoundClass: 'メチルケトン（脂肪族ケトン）', volatile: true,
    sensoryKnowledge: '加熱で増加するメチルケトン類の一つ。生乳・LTLT・HTST・UHT 乳の AEDA 比較で加熱段階が上がるほど増加し、UHT 乳でも主要な香味化合物として挙げられる。単体の香調の寄与順位は未確認。',
    noteIds: [], tasteKeys: [], sourceIds: ['jstage-1999-milk-aroma-aeda', 'lan-2025-milk-flavor-processing'],
  },
  {
    id: 'lactose', nameJa: '乳糖（ラクトース）', nameEn: 'Lactose',
    aliases: ['ラクトース'], formula: 'C12H22O11', pubchemCid: 6134, compoundClass: '糖（二糖）', volatile: false,
    sensoryKnowledge: '牛乳の実質唯一の糖で、不揮発性の味成分。甘味の弱い糖であり、牛乳のほのかな甘味の基盤になる（日本食品標準成分表で普通牛乳 4.4 g/100g）。香気成分ではない。',
    noteIds: [], tasteKeys: ['sweet'], sourceIds: ['mext-food-composition-database'],
  },
  {
    id: 'delta-dodecalactone', nameJa: 'δ-ドデカラクトン', nameEn: 'δ-Dodecalactone',
    aliases: [], cas: '713-95-1', formula: 'C12H22O2', pubchemCid: 12844, compoundClass: 'ラクトン', volatile: true,
    sensoryKnowledge: 'クリーミー／ココナッツ様の甘い香りを持つラクトン類の一つ。脂肪30%殺菌クリームの AEDA で FD 因子が突出して高かった成分の一つ（Schlutt et al. 2007）。',
    noteIds: ['cream-note'], tasteKeys: [], sourceIds: ['schlutt-2007-cream-lactones'],
  },
  {
    id: 'gamma-dodecalactone', nameJa: 'γ-ドデカラクトン', nameEn: 'γ-Dodecalactone',
    aliases: [], cas: '2305-05-7', formula: 'C12H22O2', pubchemCid: 16821, compoundClass: 'ラクトン', volatile: true,
    sensoryKnowledge: 'クリーミー／ココナッツ様の甘い香りを持つラクトン類の一つ。脂肪30%殺菌クリームの AEDA で FD 因子が突出して高かった成分の一つ（Schlutt et al. 2007）。δ体とは別化合物。',
    noteIds: ['cream-note'], tasteKeys: [], sourceIds: ['schlutt-2007-cream-lactones'],
  },
  {
    id: 'z6-dodeceno-gamma-lactone', nameJa: '(Z)-6-ドデセノ-γ-ラクトン', nameEn: '(Z)-6-Dodeceno-γ-lactone',
    aliases: [], compoundClass: 'ラクトン', volatile: true,
    sensoryKnowledge: 'クリーミー／ココナッツ様の甘い香りを持つラクトン類の一つ。脂肪30%殺菌クリームの AEDA で FD 因子が突出して高かった成分の一つ（Schlutt et al. 2007）。',
    noteIds: ['cream-note'], tasteKeys: [], sourceIds: ['schlutt-2007-cream-lactones'],
  },
  {
    id: 'delta-tetradecalactone', nameJa: 'δ-テトラデカラクトン', nameEn: 'δ-Tetradecalactone',
    aliases: [], cas: '2721-22-4', formula: 'C14H26O2', pubchemCid: 520296, compoundClass: 'ラクトン（半揮発性）', volatile: true,
    sensoryKnowledge: 'クリームの半揮発性画分から同定された長鎖ラクトン。閾値（66 µmol/kg）を超えて添加するとクリームの鼻腔後方クリーミー感を増強することが添加試験で示された（Schlutt et al. 2007）。',
    noteIds: ['cream-note'], tasteKeys: [], sourceIds: ['schlutt-2007-cream-lactones'],
  },
]
