import type { Source } from '../types'

// 第16ラウンド（文献取り込み第2回、2026-11-01）の新規登録出典。
// いずれも一次情報（出版社ページ・PMC全文・公的機関の公式ページ）で書誌と内容を確認した。
// 格付けは pairing 側の区分をそのまま持ち込まず、lab の到達度（verified）で付け直している。
export const round16Sources: Source[] = [
  {
    id: 'horie-2018-matcha-composition', kind: 'article',
    title: '国産抹茶の価格と化学成分含有量の関係',
    authors: '堀江秀樹, 中村順行', year: 2018,
    journal: '農研機構 研究成果情報（果樹茶業研究部門）',
    url: 'https://www.naro.go.jp/project/results/4th_laboratory/nifts/2018/nifts18_s16.html',
    scope: '国産抹茶56試料（収集74試料のうち包装40g以下のもの）と粉末茶6試料について、化学成分含有量を価格帯と対比した実測。覆下栽培によりエピガロカテキンガレート（EGCG）の含量は変化しないが、エピガロカテキン（EGC）の含量は低下すること、高価格の抹茶ほどテアニン含量と EGCG/EGC 比が高いことを示した。',
    limits: '官能評価の研究ではないため、渋味の強さそのものの実測ではない。成分含量の面からの裏付けに限る。関連論文として挙がる JARQ 52(2):143-147（Horie et al. 2018）は米国で販売された粉末緑茶を対象とする別研究であり、本成果情報の試料とは異なる。',
    verified: 'abstract',
  },
  {
    id: 'unno-2026-green-tea-composition', kind: 'review',
    title: 'Compositional Diversity and Functional Interactions of Bioactive Compounds in Japanese Green Tea: Focus on Matcha, Sencha, and Gyokuro',
    authors: 'Unno K, Kameoka Y, Nakamura Y', year: 2026,
    journal: 'Molecules 31(16):2934', doi: '10.3390/molecules31162934',
    url: 'https://doi.org/10.3390/molecules31162934',
    scope: '日本緑茶（抹茶・煎茶・玉露）の生理活性成分の組成と相互作用に関する叙述的総説（静岡県立大学 茶学総合研究センター）。抹茶は粉末化した茶葉を丸ごと摂取するため、浸出液では葉に残るカテキンも含めて全量を摂取する点が、煎茶・玉露の浸出液摂取と異なることを整理している。',
    limits: '総説であり新規の実測データではない。同総説の一般論では被覆栽培はカテキン生合成を抑えて渋味を弱める方向とされるが、これは主に玉露等の文脈であり、抹茶については成分別の実測（堀江ら 2018：EGCG 含量は覆下で変化しない）と併せて読む必要がある。抹茶の渋味そのものの官能量は示していない。',
    verified: 'full',
  },
  {
    id: 'zheng-2025-baimudan-cultivars', kind: 'original',
    title: 'Chemical Profiling and Sensory Analysis Reveal Quality Differentiation in Baimudan White Tea Processed from Three Major Fujian Tea Cultivars',
    authors: 'Zheng Y, Zhang Y, Zou Y, Shi Y, Zhang J, Deng H, Ji Z, Liang Z, Li X', year: 2025,
    journal: 'Horticulturae 11(10):1196', doi: '10.3390/horticulturae11101196',
    url: 'https://doi.org/10.3390/horticulturae11101196',
    scope: '福建省の主要3品種（政和大白茶・福安大白茶・福鼎大毫茶）から製造した白牡丹の化学プロファイリングと QDA 官能評価。甘味は白牡丹の中核的な味覚属性であり、スクロースの味覚活性値（TAV、閾値 890 mg/kg）は3品種とも1を超えた（政和大白茶 3.34・福安大白茶 3.66・福鼎大毫茶 2.33）。福鼎大毫茶の白牡丹は甘味スコアが高く、苦味・渋味が低かった。',
    limits: '試料は白牡丹（3品種）に限る。白茶一般や他の白茶（白毫銀針・寿眉等）への一般化はできない。甘味の評価は本研究の QDA 尺度内の相対評価である。',
    verified: 'full',
  },
  {
    id: 'wang-2022-oolong-regions', kind: 'original',
    title: 'Quality Characteristics of Oolong Tea Products in Different Regions and the Contribution of Thirteen Phytochemical Components to Its Taste',
    authors: 'Wang Z, Gan S, Sun W, Chen Z', year: 2022,
    journal: 'Horticulturae 8(4):278', doi: '10.3390/horticulturae8040278',
    url: 'https://doi.org/10.3390/horticulturae8040278',
    scope: '8か国15地域の代表的烏龍茶171試料から選んだ66試料の QDA（味のサブ属性は0–5尺度）と13種の植物化学成分の定量。記述子の使用頻度は渋味92.4%・苦味80.3%・うま味51.5%・「甘い後味」42.4%。広東の試料群は甘い後味に優れるとされ、福建北部と台湾の試料群も甘い後味が特徴とされた。',
    limits: '試料は各地域の代表茶の集合であり、個別の茶種（鉄観音・単叢等）を単独で測定した研究ではない。地域試料群の特徴を個別素材へ適用する場合はその旨を明記する。「甘い後味」は後味の記述子であり、甘味そのものの強度尺度ではない。',
    verified: 'full',
  },
  {
    id: 'wang-2025-ancient-ripe-puerh', kind: 'original',
    title: 'An integrated flavoromics and chemometric analysis of the characteristic flavor, chemical basis and flavor wheel of ancient plant ripened pu-erh tea',
    authors: 'Wang T, Bo N, Guan Y, Yang D, Chen Q, Guan Y, Liu S, Wang Z, Duan H, Ma Y, Zhao M', year: 2025,
    journal: 'Food Chemistry: X 26:102278', doi: '10.1016/j.fochx.2025.102278',
    url: 'https://doi.org/10.1016/j.fochx.2025.102278',
    scope: '雲南の古樹原料による熟プーアル茶5試料（孟庫・昆侖山・楊塔・三才雲・蒜棗樹、同一工場で発酵）の QDA（0–10尺度、訓練パネル9名）と成分分析。甘味のスコアは5試料で 5.83–8.00 と、醇厚さ（6.50–8.67）と並んで最も高く、酸味とうま味は 0–1.33 と低かった。可溶性糖含量が最大の試料（7.01%）で甘味スコアも最高だった。',
    limits: '試料は古樹原料の熟茶5試料に限る。生茶、一般の熟茶、貯蔵条件の異なる黒茶への一般化はできない。',
    verified: 'full',
  },
]
