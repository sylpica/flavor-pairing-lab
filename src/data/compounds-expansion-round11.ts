import type { Compound } from '../types'

// 第11ラウンドの新規化合物3件（harvest-round11.md B-2 で同定子を確認済みのもののみ）。
// いずれも既存の類似化合物とは別物であることを明記する（位置異性体・誘導体と混同しない）。
export const round11Compounds: Compound[] = [
  {
    id: '2-ethyl-3-6-dimethylpyrazine', nameJa: '2-エチル-3,6-ジメチルピラジン', nameEn: '2-Ethyl-3,6-dimethylpyrazine', aliases: [], cas: '13360-65-1', formula: 'C8H12N2', pubchemCid: 25916,
    compoundClass: 'ピラジン', volatile: true,
    sensoryKnowledge: 'ナッツ・焙煎様の香りを持つアルキルピラジン。既存の 2-エチル-3,5-ジメチルピラジンとは位置異性体で別化合物。緑茶の焙煎（160〜200℃）で生成し未焙煎緑茶には不在であることが報告され、焙煎のマーカーとして扱われる。',
    noteIds: ['nut-general', 'roast-general'], tasteKeys: [],
    sourceIds: ['gotti-2021-green-tea-roasting', 'mizukami-2008-hojicha-pyrazine'],
  },
  {
    id: 'heptanal', nameJa: 'ヘプタナール', nameEn: 'Heptanal', aliases: [], cas: '111-71-7', formula: 'C7H14O', pubchemCid: 8130,
    compoundClass: '脂肪族アルデヒド', volatile: true,
    sensoryKnowledge: '脂肪様・青葉様の香りを持つ直鎖飽和アルデヒド。鉄観音の揮発成分比較で定量された成分の一つ。',
    noteIds: ['green-leaf'], tasteKeys: [],
    sourceIds: ['pairing-zeng-2022-tieguanyin-volatiles'],
  },
  {
    id: 'quinic-acid', nameJa: 'キナ酸', nameEn: 'Quinic acid', aliases: [], cas: '77-95-2', formula: 'C7H12O6', pubchemCid: 6508,
    compoundClass: '有機酸', volatile: false,
    sensoryKnowledge: '酸味を持つ有機酸。クロロゲン酸の構成要素でもあり、日本緑茶の葉中含量が HPLC で定量され、品種・茶種・遮光等で変動することが報告されている。既存の trans-4-O-p-クマロイルキナ酸（キナ酸のエステル）とは別化合物。',
    noteIds: [], tasteKeys: ['sour'],
    sourceIds: ['pairing-shirai-2022-green-tea-organic-acids-hplc'],
  },
]
