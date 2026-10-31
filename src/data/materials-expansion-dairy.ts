import type { Material, ProfileEntry, SensationEntry } from '../types'

// 乳製品ドメインの新規素材（調査 round7/milk-research.md、2026-10-31）。
// プロファイル・感覚は調査の提案どおり。脂肪感・コクは SensationKey に対応キーが無いため
// （無理に既存キーへ寄せると誤った主張になる）description / scopeNote の文章で扱う。
// 三軸の意味づけ（乳製品）：軸1 分類＝製品種別（牛乳／クリーム）、軸2 産地＝汎用（産地一般）、
// 軸3 品種＝乳用種一般（ウシ）。産地・品種で香味差を主張する査読裏付けが得られていないため固定する。
const p = (noteId: string, intensity: ProfileEntry['intensity'], tier: ProfileEntry['tier'], sourceIds: string[]): ProfileEntry =>
  ({ noteId, intensity, tier, sourceIds })
const s = (intensity: SensationEntry['intensity'], tier: SensationEntry['tier'], sourceIds: string[], note?: string): SensationEntry =>
  ({ intensity, tier, sourceIds, note })

const MEXT = 'mext-food-composition-database'
const BENDALL = 'bendall-2001-fresh-milk-aroma'
const CADWALLADER = 'cadwallader-singh-2009-milk-flavours'
const SCHLUTT = 'schlutt-2007-cream-lactones'

export const expansionDairyMaterials: Material[] = [
  {
    id: 'milk-cow', domain: 'dairy', nameJa: '牛乳', nameEn: "Cow's milk",
    scientificName: 'Bos taurus（乳）',
    classification: '牛乳（液状乳）', classificationId: 'liquid-milk',
    origin: '複数産地・産地一般', originId: 'multi-origin',
    variety: 'ウシ（乳用種一般）', varietyId: 'bos-taurus',
    processing: '殺菌（HTST／UHT）',
    description: '市販の殺菌牛乳。組成は水分87.4%、たんぱく質3.3%、脂質3.8%、炭水化物4.8%（日本食品標準成分表、普通牛乳）。脂質3.8%の脂肪球が口腔内のコーティング感・まろやかさ（脂肪感・コク）の基盤になる。香りは多数の化合物がごく低濃度でバランスした、繊細で弱いものと総説で整理されている。',
    profile: [
      p('milk-note', 'moderate', 'general', [BENDALL, CADWALLADER]),
      p('cream-note', 'weak', 'general', [CADWALLADER]),
    ],
    sensations: {
      sweet: s('weak', 'general', [MEXT], '乳糖 4.4 g/100g。甘味の弱い糖であり、強い甘味にはならない'),
    },
    evidenceTier: 'general',
    scopeNote: '市販の殺菌乳を対象とする。生乳は飼料由来成分で香気が変動し（Bendall 2001）、UHT ではメチルケトン類・ピラジン類が増えるなど加熱条件で香味が変わるため、本プロファイルは殺菌乳一般の整理であり個別製品の実測ではない。',
    sourceIds: [MEXT, BENDALL, CADWALLADER, 'lan-2025-milk-flavor-processing', 'jstage-1999-milk-aroma-aeda'],
    roastable: false, extractable: false,
  },
  {
    id: 'cream-fresh', domain: 'dairy', nameJa: '生クリーム', nameEn: 'Fresh cream',
    scientificName: 'Bos taurus（乳）',
    classification: 'クリーム', classificationId: 'cream',
    origin: '複数産地・産地一般', originId: 'multi-origin',
    variety: 'ウシ（乳用種一般）', varietyId: 'bos-taurus',
    processing: 'クリーム分離・殺菌',
    description: '乳脂肪を濃縮した画分。牛乳の脂質3.8%とは桁違いに脂肪が多く、香味の担い手である乳脂肪画分の量が質的に異なる。脂肪30%の殺菌クリームでは香気活性成分34種が同定され、δ-デカラクトンをはじめとするラクトン群がクリーミー感に寄与することが AEDA と添加試験で示されている。',
    profile: [
      p('cream-note', 'moderate', 'general', [SCHLUTT]),
      p('milk-note', 'moderate', 'general', [SCHLUTT, CADWALLADER]),
    ],
    sensations: {
      sweet: s('weak', 'general', [MEXT], '乳糖は含むが脂肪に希釈され弱い'),
    },
    evidenceTier: 'general',
    scopeNote: '乳脂肪を濃縮した画分。香味の根拠は脂肪30%の殺菌クリームでの AEDA 研究（Schlutt et al. 2007）が中心。植物油脂混合品（いわゆるコンパウンドクリーム）は対象外。',
    sourceIds: [SCHLUTT, 'meynier-2003-aroma-partition-dairy', MEXT],
    roastable: false, extractable: false,
  },
]
