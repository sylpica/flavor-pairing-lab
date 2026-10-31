import type { FlavorCategory, FlavorNote } from '../types'

// 香り専用の階層分類（大分類→細分類＝具体的な香りの名称）。
// 甘味・酸味・苦味・渋味・うま味・辛味・冷感は Sensation として別管理し、ホイールには入れない。
// 表記は「花様」に統一する。
export const flavorCategories: FlavorCategory[] = [
  { id: 'fruit', name: '果実系', color: '#f2a65a', description: '果物を思わせる香り' },
  { id: 'floral', name: '花様', color: '#e58bb1', description: '花を思わせる香り' },
  { id: 'vegetal', name: '植物系', color: '#7fb069', description: '草や葉、海藻などを思わせる香り' },
  { id: 'herbal', name: 'ハーブ系', color: '#4fa08a', description: '芳香性ハーブを思わせる爽やかな香り' },
  { id: 'spice', name: 'スパイス系', color: '#d1603d', description: '香辛料を思わせる香り' },
  { id: 'roasted', name: 'ロースト系', color: '#b5654d', description: '焙煎・加熱で生じる香ばしさ' },
  { id: 'nut-cocoa', name: 'ナッツ・カカオ系', color: '#a67c52', description: '木の実やカカオの香り' },
  { id: 'sweet-aroma', name: '甘い香り', color: '#e9c46a', description: '甘さを連想させる香り' },
  { id: 'woody-earthy', name: '木質・土系', color: '#8d7b68', description: '木や土を思わせる香り' },
  { id: 'dairy', name: '乳・クリーミー系', color: '#e8cf9f', description: '乳製品のようなまろやかな香り' },
]

export const flavorNotes: FlavorNote[] = [
  { id: 'citrus', categoryId: 'fruit', name: '柑橘', example: 'レモンやゆずの皮のような香り' },
  { id: 'berry', categoryId: 'fruit', name: 'ベリー', example: 'いちごやカシスのような香り' },
  { id: 'stone-fruit', categoryId: 'fruit', name: '核果', example: '桃や杏のような香り' },
  { id: 'tropical', categoryId: 'fruit', name: 'トロピカル果実', example: 'マンゴーやパイナップルのような香り' },
  { id: 'dried-fruit', categoryId: 'fruit', name: 'ドライフルーツ', example: '干しぶどうや干し杏のような香り' },
  { id: 'apple-pear', categoryId: 'fruit', name: 'リンゴ・洋ナシ', example: 'リンゴや洋ナシのような香り' },
  { id: 'fruit-general', categoryId: 'fruit', name: '果実全般', example: '果物全般を思わせる香り（種類は特定しない）' },
  { id: 'jasmine', categoryId: 'floral', name: 'ジャスミン', example: 'ジャスミンの花のような香り' },
  { id: 'rose', categoryId: 'floral', name: 'バラ', example: 'バラの花びらのような香り' },
  { id: 'orchid', categoryId: 'floral', name: '蘭', example: '蘭を思わせる上品な香り' },
  { id: 'lavender', categoryId: 'floral', name: 'ラベンダー', example: 'ラベンダーの花のような香り' },
  { id: 'floral-general', categoryId: 'floral', name: '花様', example: '花を思わせる香り（どの花かは特定しない）' },
  { id: 'green-leaf', categoryId: 'vegetal', name: '青草・若葉', example: '摘みたての葉や青草の香り' },
  { id: 'seaweed', categoryId: 'vegetal', name: '海藻・磯', example: '海苔のような磯の香り' },
  { id: 'green-vegetable', categoryId: 'vegetal', name: '青い野菜', example: '枝豆のような青い野菜の香り' },
  { id: 'hay', categoryId: 'vegetal', name: '干し草', example: '干し草のような乾いた草の香り' },
  { id: 'minty', categoryId: 'herbal', name: 'ミント様', example: 'ミントの葉のような清涼感のある香り' },
  { id: 'camphoraceous', categoryId: 'herbal', name: 'カンファー様', example: 'ローズマリーなどを思わせる樟脳様の香り' },
  { id: 'herb-general', categoryId: 'herbal', name: 'ハーブ全般', example: '芳香性ハーブ全般を思わせる香り' },
  { id: 'anise', categoryId: 'spice', name: 'アニス様', example: 'アニスやスターアニスのような甘い香辛料の香り' },
  { id: 'cinnamon-note', categoryId: 'spice', name: 'シナモン', example: 'シナモンのような甘い香辛料の香り' },
  { id: 'clove-note', categoryId: 'spice', name: 'クローブ様', example: 'クローブのような温かく刺激的な香り' },
  { id: 'cardamom-note', categoryId: 'spice', name: 'カルダモン様', example: 'カルダモンのような爽やかで高貴な香り' },
  { id: 'ginger-note', categoryId: 'spice', name: '生姜', example: '生姜のような爽やかな辛みの香り' },
  { id: 'peppery', categoryId: 'spice', name: '胡椒様', example: '胡椒のようなピリッとした香り' },
  { id: 'warm-spice', categoryId: 'spice', name: '温かいスパイス', example: 'ナツメッグなどを思わせる温かみのある香り' },
  { id: 'toast', categoryId: 'roasted', name: 'トースト', example: '焼きたてのパンのような香り' },
  { id: 'coffee', categoryId: 'roasted', name: 'コーヒー', example: '焙煎したコーヒー豆のような香り' },
  { id: 'caramelized', categoryId: 'roasted', name: '焦がし', example: '焦がした砂糖のような香ばしさ' },
  { id: 'smoky', categoryId: 'roasted', name: '燻し', example: '煙を思わせる香り' },
  { id: 'roast-general', categoryId: 'roasted', name: '焙煎香全般', example: '加熱で生じる香ばしさ全般' },
  { id: 'almond', categoryId: 'nut-cocoa', name: 'アーモンド', example: 'アーモンドのような香り' },
  { id: 'hazelnut', categoryId: 'nut-cocoa', name: 'ヘーゼルナッツ', example: 'ヘーゼルナッツのような香り' },
  { id: 'cacao-note', categoryId: 'nut-cocoa', name: 'カカオ', example: 'カカオ豆やチョコレートのような香り' },
  { id: 'nut-general', categoryId: 'nut-cocoa', name: '木の実全般', example: '木の実全般を思わせる香り（種類は特定しない）' },
  { id: 'vanilla', categoryId: 'sweet-aroma', name: 'バニラ', example: 'バニラのような甘い香り' },
  { id: 'caramel', categoryId: 'sweet-aroma', name: 'キャラメル', example: 'キャラメルのような甘い香り' },
  { id: 'honey', categoryId: 'sweet-aroma', name: '蜂蜜', example: '蜂蜜のような甘い香り' },
  { id: 'wood', categoryId: 'woody-earthy', name: '木・樹皮', example: '木や樹皮のような香り' },
  { id: 'earth', categoryId: 'woody-earthy', name: '土', example: '雨上がりの土のような香り' },
  { id: 'milk-note', categoryId: 'dairy', name: 'ミルク', example: '温かいミルクのような香り' },
  { id: 'cream-note', categoryId: 'dairy', name: 'クリーム', example: '生クリームのようなまろやかな香り' },
]

export const noteById = (id: string) => flavorNotes.find((n) => n.id === id)
export const categoryById = (id: string) => flavorCategories.find((c) => c.id === id)
export const notesByCategory = (categoryId: string) => flavorNotes.filter((n) => n.categoryId === categoryId)
