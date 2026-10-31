import type { SimulationTendency } from '../types'
import { expansionSimulationTendencies } from './rules-expansion-sh'

// シミュレーションは「実測データ→検証可能なモデル→文献に基づく定性的傾向→推測→データ不足」の
// 優先順位で表示する。本アプリの第1弾は定性的傾向（tier=general / inferred）のみで構成し、
// 根拠のない数値曲線は生成しない（docs/SIMULATION_MODELS.md）。
export const simulationTendencies: SimulationTendency[] = [
  {
    id: 'roast-maillard', parameter: 'roast-temp',
    text: '焙煎が進むとメイラード反応等によりピラジン類やストレッカーアルデヒド類などの焙煎香成分が増える傾向が、焙煎・未焙煎ダークチョコの比較研究で示されています。ただし温度と香りの強さが比例するわけではなく、過度の焙煎では焦焼臭や香気の損失も起こり得ます。',
    tier: 'general', applicableDomains: ['chocolate', 'tea', 'spice', 'herb'],
    sourceIds: ['acpangan-2023-dark-chocolate-aroma'],
    limits: '対象はカカオ試料。茶・スパイスへの適用は一般原理からの類推であり、素材ごとの実測ではない。',
  },
  {
    id: 'roast-oolong-volatiles', parameter: 'roast-time',
    text: '烏龍茶では焙煎度の違いにより揮発性成分の組成と香気寄与成分が変化することが原著で示されています。時間の延長は一方向の改善ではなく、香りの質そのものが変わる変化として扱います。',
    tier: 'general', applicableDomains: ['tea'],
    sourceIds: ['lan-2022-qingxin-roasting'],
    limits: '青心烏龍での研究。すべての茶・素材にそのまま適用できない。',
  },
  {
    id: 'extract-temp-perception', parameter: 'extract-temp',
    text: '日本緑茶の温度別呈示の官能研究では、高温で香り・甘味・うま味・渋味をより強く知覚しました。温度は成分の抽出量だけでなく、知覚そのものにも影響します。',
    tier: 'general', applicableDomains: ['tea', 'herb'],
    sourceIds: ['pramudya-2018-green-tea-temperature-cata'],
    limits: '日本緑茶での官能研究。ハーブティー等への適用は類推。',
  },
  {
    id: 'extract-temp-bitter', parameter: 'extract-temp',
    text: '一般に、高温・長時間の抽出ではカテキン類やカフェインなどの苦味・渋味成分の溶出が増える傾向が茶の化学と味の総説で整理されています。具体的な溶出量は素材・条件により変わるため、数値では示しません。',
    tier: 'general', applicableDomains: ['tea'],
    sourceIds: ['zhang-2020-tea-chemistry-taste', 'ye-2022-bitterness-astringency'],
    limits: '総説レベルの一般的傾向。個別素材の実測値ではない。',
  },
  {
    id: 'extract-time-infusions', parameter: 'extract-time',
    text: '浸出を繰り返すと香りや渋味などの官能属性は回数とともに弱まっていくことが、韓国緑茶の浸出回数研究で示されています。抽出時間の延長も、成分ごとに溶出の仕方が異なるため一様ではありません。',
    tier: 'general', applicableDomains: ['tea', 'herb'],
    sourceIds: ['lee-2013-korean-green-tea-infusions'],
    limits: '韓国緑茶での研究。抽出時間と浸出回数は同一の条件ではない。',
  },
  {
    id: 'dose-water-balance', parameter: 'dose',
    text: '素材量と湯量の比は濃さの基本条件ですが、濃さと「美味しさ」や香りの強さは比例しません。本アプリでは比率の変更を記録するのみで、最適値を断定しません。',
    tier: 'inferred', applicableDomains: ['tea', 'herb', 'spice'],
    sourceIds: ['zhang-2020-tea-chemistry-taste'],
    limits: '一般原理からの推測。具体的な最適比率の実測データは未収録。',
  },
  // ===== 文献拡充で追加した傾向（ブラックペッパー焙煎・唐辛子加熱・クミン等） =====
  ...expansionSimulationTendencies,
]
