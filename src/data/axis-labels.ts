// 三軸の正規ラベル（分類・産地・品種/系統）。
// 素材ごとの表示文（classification / origin / variety フィールド）は素材詳細やカードで使う
// 記述的な文であり、素材ごとに細部が異なる（例：原産地の列挙）。検索軸の選択肢ラベルは
// IDごとに1つに統一しないと、プルダウンの選択肢とカード表記が食い違って利用者が迷う
// （実操作監査 J2 の指摘）。そのため軸ラベルはここで一元管理し、検索ではこちらを使う。
// validate.test.ts が全素材の軸IDにラベルが存在することを検証する。

export const CLASSIFICATION_LABELS: Record<string, string> = {
  'green-tea': '緑茶',
  'green-tea-roasted': '緑茶（焙煎）',
  'white-tea': '白茶',
  'oolong-tea': '青茶（烏龍茶）',
  'black-tea': '紅茶',
  'dark-tea': '黒茶',
  'dark': 'ダーク',
  'milk': 'ミルク',
  'white': 'ホワイト',
  'ruby': 'ルビー',
  'fruit-spice': '果実系スパイス',
  'seed-spice': '果実・種子系スパイス',
  'bark-spice': '樹皮系スパイス',
  'rhizome-spice': '根茎系スパイス',
  'flower-spice': '花・花蕾系スパイス',
  'seed-herb': '種子系ハーブ',
  'aromatic-herb': '芳香性ハーブ',
}

export const ORIGIN_LABELS: Record<string, string> = {
  'japan': '日本',
  'china-fujian': '中国・福建',
  'china-guangdong': '中国・広東',
  'china-yunnan': '中国・雲南',
  'china-sichuan': '中国・四川',
  'sri-lanka': 'スリランカ',
  'multi-origin': '複数産地・産地一般',
}

export const VARIETY_LABELS: Record<string, string> = {
  'yabukita': 'やぶきた',
  'general-cultivar': '品種一般',
  'bai-mudan': '白牡丹（等級呼称）',
  'tieguanyin': '鉄観音',
  'dancong': '鳳凰単叢',
  'general-lineage': '系統一般',
  'not-a-lineage': '系統分類の対象外（製品種類）',
  'piper-nigrum': 'Piper nigrum',
  'elettaria-cardamomum': 'Elettaria cardamomum',
  'cinnamomum-cassia': 'Cinnamomum cassia',
  'cinnamomum-verum': 'Cinnamomum verum',
  'syzygium-aromaticum': 'Syzygium aromaticum',
  'myristica-fragrans': 'Myristica fragrans',
  'zingiber-officinale': 'Zingiber officinale',
  'curcuma-longa': 'Curcuma longa',
  'cuminum-cyminum': 'Cuminum cyminum',
  'coriandrum-sativum': 'Coriandrum sativum',
  'foeniculum-vulgare': 'Foeniculum vulgare',
  'illicium-verum': 'Illicium verum',
  'crocus-sativus': 'Crocus sativus',
  'vanilla-planifolia': 'Vanilla planifolia',
  'zanthoxylum-piperitum': 'Zanthoxylum piperitum',
  'zanthoxylum-bungeanum': 'Zanthoxylum bungeanum',
  'capsicum-spp': 'Capsicum annuum 等',
  'mentha-piperita': 'Mentha × piperita',
  'mentha-spicata': 'Mentha spicata',
  'melissa-officinalis': 'Melissa officinalis',
  'lavandula-angustifolia': 'Lavandula angustifolia',
  'matricaria-chamomilla': 'Matricaria chamomilla',
  'laurus-nobilis': 'Laurus nobilis',
  'anethum-graveolens': 'Anethum graveolens',
  'cymbopogon-citratus': 'Cymbopogon citratus',
  'thyme-chemotypes': 'タイムのケモタイプ',
  'sage-chemotypes': 'セージのケモタイプ',
  'rosemary-chemotypes': 'ローズマリーのケモタイプ',
  'basil-chemotypes': 'バジルの化学型',
  'oregano-chemotypes': 'オレガノのケモタイプ',
  'tarragon-french': 'フレンチタラゴン',
}

export const axisLabel = (axis: 'classificationId' | 'originId' | 'varietyId', id: string): string => {
  const map = axis === 'classificationId' ? CLASSIFICATION_LABELS : axis === 'originId' ? ORIGIN_LABELS : VARIETY_LABELS
  return map[id] ?? id
}
