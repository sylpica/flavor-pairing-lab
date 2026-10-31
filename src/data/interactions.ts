import type { InteractionRule } from '../types'
import { expansionInteractionRules } from './rules-expansion-sh'
import { expansionDairyInteractionRules } from './rules-expansion-dairy'

// 相互作用ルール：成分の足し算ではなく、知覚レベルの相互作用を文章化するための規則。
// 直接研究（茶×チョコ自体の官能研究: Donadini 2012/2014）と一般機構研究を区別する。
// 発火は trigger 条件（両素材のプロファイル・感覚に実際に現れている特徴）に基づく。
export const interactionRules: InteractionRule[] = [
  {
    id: 'direct-tea-chocolate-study', kind: 'aroma',
    conditionNote: 'お茶 × チョコレートの組み合わせ自体',
    trigger: { domains: ['tea', 'chocolate'] },
    text: 'お茶とチョコレートの組み合わせ自体を対象にした官能研究が存在します（市販製品を用いた研究）。ただし結果はその試料・条件のものであり、ここで選んだ個別素材への直接の適用は探索的な位置づけです。',
    level: 'general', directStudy: true,
    sourceIds: ['donadini-2012-chocolate-beverage-pairing', 'donadini-2014-tea-coffee-chocolate'],
  },
  {
    id: 'astringency-buildup', kind: 'temporal',
    conditionNote: '渋味（収斂感）が中程度以上の素材を含む',
    trigger: { sensation: 'astringent', minIntensity: 'moderate' },
    text: '渋味は繰り返し口に含むことで積み上がって感じられやすくなることが、ポリフェノールと収斂感の総説で整理されています。渋味のある素材は、少量ずつ・間隔を空けて味わうと知覚が変わる可能性があります。',
    level: 'general', directStudy: false,
    sourceIds: ['lesschaeve-2005-polyphenols-astringency'],
  },
  // 旧 'milk-protein-catechin'（Qie 2021）は乳製品ドメイン追加に伴い、
  // rules-expansion-dairy の 'milk-tea-catechin-fate' に統合・置換した（重複させない）。
  {
    id: 'temperature-sweetness-trpm5', kind: 'temporal',
    conditionNote: '温かい状態で供される素材（抽出物等）を含む',
    trigger: { extractable: true },
    text: '甘味の感じ方は温度で変化します。甘味受容に関わる TRPM5 は熱で活性化されることが示されており、温かいうちと冷めてからでは甘味の知覚が変わり得ます。抽出温度の違いによる味の変化を考える際の一般原理です。',
    level: 'general', directStudy: false,
    sourceIds: ['talavera-2005-trpm5-temperature'],
  },
  {
    id: 'mixture-suppression-caution', kind: 'aroma',
    conditionNote: '香りの強い素材同士の組み合わせ',
    trigger: { strongAromaCount: 2 },
    text: '香りの強い素材同士を組み合わせても、知覚される香りが単純に足し算されるとは限りません。混合による抑制（マスキング）が起こり得るため、「共通成分が多い＝相性が良い」とは判断しません。これはペアリング研究の批判的総説でも指摘されている点です。',
    level: 'general', directStudy: false,
    sourceIds: ['spence-2020-flavour-pairing'],
  },
  {
    id: 'shared-aroma-note', kind: 'aroma',
    conditionNote: '両素材に共通する香りノートがある（調和モードの手がかり）',
    trigger: { sharedNote: true },
    text: '共通する香りの特徴は「調和」の手がかりになります。ただし共通する香りがあること自体は、組み合わせの官能評価で確認された結論ではありません。実際に味わう際の探索的な予想として扱ってください。',
    level: 'exploratory', directStudy: false,
    sourceIds: ['spence-2020-flavour-pairing'],
  },
  // ===== 文献拡充（スパイス・ハーブ第2波ほか）で追加したルール =====
  ...expansionInteractionRules,
  // ===== 乳製品ドメイン追加（round7）で追加したルール =====
  ...expansionDairyInteractionRules,
]
