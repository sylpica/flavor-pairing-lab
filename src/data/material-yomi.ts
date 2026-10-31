import type { Material } from '../types'

/**
 * 素材名の読み（ひらがな）。
 * 日本のユーザーはかな入力で素材を探すことが多いため、漢字名・カタカナ名への
 * 部分一致だけでは「かま→釜炒り茶」のような検索が成立しない。読みでの絞り込みに使う。
 *
 * 付け方の約束：
 * - 読みは名前の主要部分（括弧書きの修飾部分を除く）の標準的な読みをひらがなで書く。
 *   例：カルダモン（グリーン）→ かるだもん、ダークチョコレート（焙煎）→ だーくちょこれーと
 * - 数字は読みをかなで書く（白葉1号 → はくよういちごう）。
 * - 全素材に付けることを validate.test.ts が担保する（新規素材には読みも追加すること）。
 */
export const materialYomi: Record<string, string> = {
  // お茶
  'tea-sencha': 'せんちゃ',
  'tea-gyokuro': 'ぎょくろ',
  'tea-matcha': 'まっちゃ',
  'tea-hojicha': 'ほうじちゃ',
  'tea-white-baimudan': 'はくちゃ',
  'tea-tieguanyin': 'てっかんのん',
  'tea-dancong': 'ほうおうたんそう',
  'tea-black-general': 'こうちゃ',
  'tea-dark-puer': 'こくちゃ',
  'tea-kamairicha': 'かまいりちゃ',
  'tea-darjeeling': 'だーじりん',
  'tea-keemun': 'きーむん',
  'tea-assam': 'あっさむ',
  'tea-yellow': 'おうちゃ',
  'tea-dahongpao': 'がんちゃ',
  'tea-dongding': 'とうちょううーろん',
  'tea-okumidori': 'おくみどり',
  'tea-saemidori': 'さえみどり',
  'tea-asatsuyu': 'あさつゆ',
  'tea-kanayamidori': 'かなやみどり',
  'tea-harumidori': 'はるみどり',
  'tea-sayamakaori': 'さやまかおり',
  'tea-fukumidori': 'ふくみどり',
  'tea-benifuuki': 'べにふうき',
  'tea-benihomare': 'べにほまれ',
  'tea-sofu': 'そうふう',
  'tea-fujikaori': 'ふじかおり',
  'tea-meiryoku': 'めいりょく',
  'tea-seimei': 'せいめい',
  'tea-tsuyuhikari': 'つゆひかり',
  'tea-koushun': 'こうしゅん',
  'tea-komakage': 'こまかげ',
  'tea-hongyu': 'こうぎょく',
  'tea-jinxuan': 'きんせん',
  'tea-tsuiyu': 'すいぎょく',
  'tea-hongyun': 'こういん',
  'tea-baiye-1': 'はくよういちごう',
  'tea-yinghong-9': 'えいこうきゅうごう',
  'tea-hatsumomiji': 'はつもみじ',
  'tea-ziyun': 'しいん',
  // チョコレート
  'choco-dark-roasted': 'だーくちょこれーと',
  'choco-dark-unroasted': 'だーくちょこれーと',
  'choco-milk': 'みるくちょこれーと',
  'choco-white': 'ほわいとちょこれーと',
  'choco-ruby': 'るびーちょこれーと',
  'choco-100': 'かかおぶんひゃくぱーせんとちょこれーと',
  'choco-nacional-ecuador': 'だーくちょこれーと',
  'choco-ccn51': 'だーくちょこれーと',
  'choco-tsh565': 'だーくちょこれーと',
  'choco-dominican-trinitario': 'だーくちょこれーと',
  'cacao-gen-criollo': 'かかおいでんしゅうだんくりおろ',
  'cacao-gen-nacional': 'かかおいでんしゅうだんなしおなる',
  'cacao-gen-guiana': 'かかおいでんしゅうだんぎあな',
  // スパイス
  'spice-black-pepper': 'ぶらっくぺっぱー',
  'spice-white-pepper': 'ほわいとぺっぱー',
  'spice-cardamom': 'かるだもん',
  'spice-cassia': 'かしあ',
  'spice-ceylon-cinnamon': 'せいろんしなもん',
  'spice-clove': 'くろーぶ',
  'spice-nutmeg': 'なつめっぐ',
  'spice-mace': 'めーす',
  'spice-ginger-fresh': 'しょうが',
  'spice-turmeric': 'たーめりっく',
  'spice-cumin': 'くみん',
  'spice-coriander-seed': 'こりあんだーしーど',
  'spice-fennel-seed': 'ふぇんねるしーど',
  'spice-star-anise': 'すたーあにす',
  'spice-saffron': 'さふらん',
  'spice-vanilla': 'ばにら',
  'spice-sansho': 'さんしょう',
  'spice-huajiao': 'かしょう',
  'spice-anise': 'あにす',
  'spice-allspice': 'おーるすぱいす',
  'spice-juniper-berry': 'じゅにぱーべりー',
  'spice-fenugreek': 'ふぇぬぐりーく',
  'spice-caraway': 'きゃらうぇい',
  'spice-mustard-seed': 'ますたーどしーど',
  'spice-sumac': 'すまっく',
  'spice-celery-seed': 'せろりしーど',
  'spice-poppy-seed': 'ぽぴーしーど',
  'spice-ajwain': 'あじょわん',
  'spice-galangal': 'がらんがる',
  'spice-chili-annuum': 'とうがらし',
  'spice-chili-chinense': 'とうがらし',
  'spice-chili-frutescens': 'とうがらし',
  'spice-chili-baccatum': 'とうがらし',
  'spice-chili-pubescens': 'とうがらし',
  // ハーブ
  'herb-peppermint': 'ぺぱーみんと',
  'herb-spearmint': 'すぺあみんと',
  'herb-rosemary': 'ろーずまりー',
  'herb-thyme': 'たいむ',
  'herb-basil': 'ばじる',
  'herb-lemongrass': 'れもんぐらす',
  'herb-lemon-balm': 'れもんばーむ',
  'herb-lavender': 'らべんだー',
  'herb-chamomile': 'かもみーる',
  'herb-sage': 'せーじ',
  'herb-oregano': 'おれがの',
  'herb-laurel': 'ろーれる',
  'herb-dill-seed': 'でぃるしーど',
  'herb-dill-weed': 'でぃるうぃーど',
  'herb-tarragon': 'たらごん',
  'herb-marjoram': 'まじょらむ',
  'herb-lemon-verbena': 'れもんばーべな',
  'herb-parsley': 'ぱせり',
  'herb-hyssop': 'ひそっぷ',
  'herb-summer-savory': 'さまーさぼりー',
  'herb-winter-savory': 'うぃんたーさぼりー',
  'herb-shiso': 'しそ',
  'herb-perilla-pk': 'えごまは',
  'herb-lovage': 'らべーじ',
  'herb-holy-basil': 'ほーりーばじる',
  'herb-lemon-thyme': 'れもんたいむ',
  'herb-apple-mint': 'あっぷるみんと',
  'herb-curry-plant': 'かれーぷらんと',
  'herb-pandan': 'ぱんだん',
  'herb-curry-leaf': 'かれーりーふ',
  'herb-epazote': 'えぱそーて',
  'herb-kaffir-lime-leaf': 'ばいまっくるーとは',
  'herb-syrian-oregano': 'しりあんおれがの',
  // 乳製品
  'milk-cow': 'ぎゅうにゅう',
  'cream-fresh': 'なまくりーむ',
}

/** カタカナをひらがなにそろえる（かな表記の揺れを吸収するための正規化） */
export const toHiragana = (s: string): string =>
  s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60))

/**
 * 素材名への部分一致判定（和名・英名・読み）。
 * クエリと読みの双方をひらがな化して比較するため、ひらがな／カタカナどちらの
 * 入力でも、漢字名（読み経由）・カタカナ名のどちらにも一致する。
 */
export function materialMatchesName(
  m: Pick<Material, 'id' | 'nameJa' | 'nameEn'>,
  rawQuery: string,
): boolean {
  const q = rawQuery.trim().toLowerCase()
  if (!q) return true
  if (m.nameJa.toLowerCase().includes(q) || m.nameEn.toLowerCase().includes(q)) return true
  const hq = toHiragana(q)
  if (toHiragana(m.nameJa).includes(hq)) return true
  const yomi = materialYomi[m.id]
  return yomi !== undefined && toHiragana(yomi).includes(hq)
}
