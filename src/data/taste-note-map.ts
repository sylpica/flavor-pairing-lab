import type { SensationKey } from '../types'
import { flavorNotes } from './flavors'

// 味わいホイール第2階層（具体名）の対応づけデータ（第12ラウンド）。
// 香味ノート（香り）を味カテゴリ（味覚・口腔感覚）へ対応づける根拠を、対応ごとに保持する。
// これは「表示構造」の対応づけであり、感覚データ（SensationEntry）の創作・改変ではない。
// データ層では香りノートと感覚を分離したまま保持し、ホイール表示でのみ本対応づけで結ぶ。
//
// 方式（第12ラウンドで確定し、監査記録にも残す）:
// - 主対応1つ方式：1つのノートは最大で1つの味カテゴリにのみ対応づける（複数の味に分散させない）。
//   これにより第2階層の重み（ノートの強さ）が二重計上されず、第1階層の％（目安）が保たれる。
// - tier の意味：
//   general = (a) 呈味成分に基づく対応（代表食品・代表化合物群に実際の呈味物質が含まれる）、
//             または (b) 味覚―嗅覚相互作用の原著に基づく対応。
//   inferred = (c) 推測。代表食品の支配的な味からの連想など、(a)(b) に届かない対応。
//             表示では必ず推測として区別する（破線・薄色・「推測」表記）。
// - sourceIds は再確認済みレジストリ（src/data/index.ts の sources）にある ID のみ。
//   対応を直接支える出典が無い場合は付けない（化合物データ側の出典で代替しない）。
// - 味への足がかりが任意になってしまうノートは対応づけず、unmappedTasteNotes に理由を残す。

export type TasteMapTier = 'general' | 'inferred'

export interface TasteNoteMapping {
  noteId: string
  tasteKey: SensationKey
  tier: TasteMapTier
  /** 対応づけの根拠。(a) 呈味成分 / (b) 味覚―嗅覚相互作用 / (c) 推測 の別を含む説明文 */
  basis: string
  sourceIds?: string[]
}

export const tasteNoteMappings: TasteNoteMapping[] = [
  // ===== (a) 呈味成分に基づく対応（general）=====
  { noteId: 'citrus', tasteKey: 'sour', tier: 'general',
    basis: '(a) 呈味成分：代表食品（レモン・ゆず等の柑橘果実）の支配的な呈味成分はクエン酸を主とする有機酸であり、化合物データでもクエン酸・リンゴ酸は酸味の呈味成分。香り成分（リモネン等）自体は呈味しないため、対応は果実の呈味に基づく。' },
  { noteId: 'apple-pear', tasteKey: 'sour', tier: 'general',
    basis: '(a) 呈味成分：リンゴの特徴的な呈味成分はリンゴ酸（化合物データで酸味の呈味成分）。甘味も伴う食品だが、ノート名が示す果実の識別的な味として酸味を主対応に置く（主対応1つ方式）。' },
  { noteId: 'dried-fruit', tasteKey: 'sweet', tier: 'general',
    basis: '(a) 呈味成分：干しぶどう・干し杏等は乾燥により糖（スクロース・グルコース・果糖）が濃縮された食品であり、呈味物質である糖そのものに基づく対応。' },
  { noteId: 'honey', tasteKey: 'sweet', tier: 'general',
    basis: '(a) 呈味成分：蜂蜜は果糖・ブドウ糖を主成分とする糖そのものの食品であり、呈味物質（糖類）に基づく対応。' },
  { noteId: 'seaweed', tasteKey: 'umami', tier: 'general',
    basis: '(a) 呈味成分：海苔・昆布等の海藻はグルタミン酸をはじめとするうま味成分を含む食品であり、化合物データでもグルタミン酸はうま味の呈味成分。' },
  { noteId: 'minty', tasteKey: 'cooling', tier: 'general',
    basis: '(a) 呈味成分：代表化合物メントールと1,8-シネオールは、いずれも化合物データで冷感（tasteKeys: cooling）を持つ成分であり、香りと冷感が同じ化合物に由来する。' },
  { noteId: 'camphoraceous', tasteKey: 'cooling', tier: 'general',
    basis: '(a) 呈味成分：代表化合物1,8-シネオールは化合物データで冷感を持ち、「樟脳様・ユーカリ様の清涼感のある香り」と記録される成分である。' },
  { noteId: 'anise', tasteKey: 'sweet', tier: 'general',
    basis: '(a) 呈味成分：代表化合物 trans-アネトール自体が甘味を持つ化合物として化合物データに記録される（tasteKeys: sweet）。香りだけでなく呈味を持つ点が対応の根拠。',
    sourceIds: ['anethole-2026-review'] },
  { noteId: 'cinnamon-note', tasteKey: 'warming', tier: 'general',
    basis: '(a) 呈味成分：代表化合物シンナムアルデヒドは化合物データで温感・辛味を持ち（tasteKeys: warming, pungent）、TRPA1・TRPV1 の活性化が原著に記述される。主対応は温感に置き、甘い香りの連想は従とする。' },
  { noteId: 'clove-note', tasteKey: 'warming', tier: 'general',
    basis: '(a) 呈味成分：代表化合物ユージノールは化合物データで温感（tasteKeys: warming）を持つ「甘く温かいスパイス様の香気」の成分である。' },
  { noteId: 'ginger-note', tasteKey: 'pungent', tier: 'general',
    basis: '(a) 呈味成分：生姜の呈味成分ジンゲロール・ショウガオールは化合物データで辛味（tasteKeys: pungent）の主成分とされる。' },
  { noteId: 'peppery', tasteKey: 'pungent', tier: 'general',
    basis: '(a) 呈味成分：胡椒の呈味成分ピペリンは化合物データで辛味の主因とされる呈味・三叉神経感覚の成分である。' },
  { noteId: 'coffee', tasteKey: 'bitter', tier: 'general',
    basis: '(a) 呈味成分：コーヒーの代表呈味成分カフェイン（およびクロロゲン酸類）は苦味を持ち、化合物データでもカフェインは苦味（tasteKeys: bitter）の成分。' },
  { noteId: 'cacao-note', tasteKey: 'bitter', tier: 'general',
    basis: '(a) 呈味成分：カカオの代表呈味成分テオブロミン・カフェインは苦味を持ち、焙煎カカオニブの呈味研究でも定量・官能評価されている。ポリフェノール由来の渋味も伴うが主対応は苦味（主対応1つ方式）。',
    sourceIds: ['stark-2006-cocoa-nibs-taste'] },
  { noteId: 'caramelized', tasteKey: 'sweet', tier: 'general',
    basis: '(a) 呈味成分：「焦がし」は砂糖（スクロース＝甘味の呈味成分）を焦がしたものという物質由来のノートであり、甘味が主調。焦げの苦味も伴うが主対応は甘味に置く。' },
  { noteId: 'milk-note', tasteKey: 'sweet', tier: 'general',
    basis: '(a) 呈味成分：牛乳の実質唯一の糖である乳糖は甘味の弱い糖であり、牛乳のほのかな甘味の基盤になることが化合物データに記録されている。' },

  // ===== (b) 味覚―嗅覚相互作用に基づく対応（general）=====
  { noteId: 'vanilla', tasteKey: 'sweet', tier: 'general',
    basis: '(b) 味覚―嗅覚相互作用：バニラ香の提示が甘味評定を増強することは原著で示された相互作用（OITE）。提示タイミングへの依存性も原著で示されており、常時起こる効果としてではなく対応づけの根拠として扱う。',
    sourceIds: ['sakai-2001-vanilla-sweetness', 'kakutani-2017-breath-timing'] },

  // ===== (c) 推測による対応（inferred）=====
  { noteId: 'berry', tasteKey: 'sweet', tier: 'inferred',
    basis: '(c) 推測：ベリー類（イチゴ・カシス等）は糖を含む果実で甘味が主調であることからの連想。イチゴ香が甘味を増強する相互作用研究は台帳に記録があるが、本データの再確認済み出典に含まれないため、ここでは推測として扱う。' },
  { noteId: 'stone-fruit', tasteKey: 'sweet', tier: 'inferred',
    basis: '(c) 推測：桃・杏等の核果は糖による甘味が支配的な果実であることからの連想。呈味成分としての直接の対応づけ根拠には届かない。' },
  { noteId: 'tropical', tasteKey: 'sweet', tier: 'inferred',
    basis: '(c) 推測：マンゴー・パイナップル等の熱帯果実は糖の甘味が支配的であることからの連想。パイナップルは酸も強いが、主対応1つ方式のため甘味に置く。' },
  { noteId: 'fruit-general', tasteKey: 'sweet', tier: 'inferred',
    basis: '(c) 推測：果実全般の支配的な味は概して糖の甘味であることからの連想。種類を特定しないノートであるため推測にとどめる。' },
  { noteId: 'cardamom-note', tasteKey: 'cooling', tier: 'inferred',
    basis: '(c) 推測：カルダモンの主要成分には冷感を持つ1,8-シネオールが含まれるが、ノート自体と冷感の対応は成分構成からの一段の推論になるため推測とする。' },
  { noteId: 'warm-spice', tasteKey: 'warming', tier: 'inferred',
    basis: '(c) 推測：「温かいスパイス」というノート自体が温かみの連想に基づく分類であり、ナツメッグ等のスパイスの温感への連想からの推測。個別化合物の呈味根拠には届かない。' },
  { noteId: 'roast-general', tasteKey: 'bitter', tier: 'inferred',
    basis: '(c) 推測：焙煎香が現れる代表食品（コーヒー・カカオ・ほうじ茶等）は苦味を伴うことが多いという連想。焙煎そのものに対応する呈味根拠はないため推測とする。' },
  { noteId: 'caramel', tasteKey: 'sweet', tier: 'inferred',
    basis: '(c) 推測：キャラメルは砂糖の加熱物で、その香りは甘味への連想が強い。バニラのような直接の原著が本データの再確認済み出典にないため、推測として対応づける（物質由来の「焦がし」とは扱いを分ける）。' },
  { noteId: 'cream-note', tasteKey: 'sweet', tier: 'inferred',
    basis: '(c) 推測：生クリームの香りを担うラクトン類は甘い香りを持ち、乳脂肪のまろやかさと併せて甘味への連想が成り立つが、呈味成分としての直接の対応ではないため推測とする。' },
]

/** 対応づけなかったノートと、その理由（監査記録と対応させる） */
export const unmappedTasteNotes: { noteId: string; reason: string }[] = [
  { noteId: 'jasmine', reason: '花の香りそのもので、対応する呈味成分・相互作用の知見がない。' },
  { noteId: 'rose', reason: '花の香りそのもの。ローズヒップの酸味は果実の話であり、花の香りのノートとは別である。' },
  { noteId: 'orchid', reason: '花の香りそのもの。味への対応づけの足がかりがない。' },
  { noteId: 'lavender', reason: '花の香りそのもの。ラベンダーという植物には苦味もあるが、ノート（花の香り）と味を結ぶ根拠は任意になる。' },
  { noteId: 'floral-general', reason: '花様全般。具体的な味への対応は花の種類に依存し、一意に定まらない。' },
  { noteId: 'green-leaf', reason: '青草・若葉の香気成分は呈味を持たず、葉物食品の味（苦味・うま味等）は食品ごとに異なるため一意に対応づけない。' },
  { noteId: 'green-vegetable', reason: '青い野菜の味は品目ごとに異なり（枝豆の甘味・うま味、青菜の苦味等）、ノートとして一意の対応がない。枝豆については Klinmalai et al. 2025（Foods 14(19):3321）が枝豆飲料でグルタミン酸・アスパラギン酸の優占を実測しているが、対象は枝豆の加工飲料であり、うま味への寄与は両アミノ酸の既知の役割への言及にとどまる。「青い野菜」全般への対応づけの根拠にはならないため、対応なしを維持する（第14ラウンドで一次情報を検証）。' },
  { noteId: 'hay', reason: '干し草の香りに対応する呈味・相互作用の足がかりがない。' },
  { noteId: 'herb-general', reason: 'ハーブ全般は多様であり、味の対応は個別のハーブに依存する。' },
  { noteId: 'toast', reason: '焼きたてパンの香り。パンのほのかな甘味はデンプンの分解由来であり、香りのノートとの対応としては任意になる。' },
  { noteId: 'smoky', reason: '煙の香りには呈味の対応がない。燻製食品の味は塩味・うま味等、加工条件に依存する。' },
  { noteId: 'almond', reason: 'アーモンドの実の味は脂質のまろやかさが主であり、基本味への対応は任意になる。' },
  { noteId: 'hazelnut', reason: 'ヘーゼルナッツの実の味と香りのノートの間に、一意の基本味対応がない。' },
  { noteId: 'nut-general', reason: '木の実全般は品目により味が異なり、一意に対応づけない。' },
  { noteId: 'wood', reason: '木・樹皮の香りに対応する呈味がない。' },
  { noteId: 'earth', reason: '土の香りに対応する呈味がない。' },
]

const mappingByNoteId = new Map(tasteNoteMappings.map((m) => [m.noteId, m]))

/** ノートの主対応（なければ undefined） */
export const tasteMappingForNote = (noteId: string): TasteNoteMapping | undefined => mappingByNoteId.get(noteId)

/** 味カテゴリに対応づけられたノートの対応一覧 */
export const tasteMappingsForKey = (tasteKey: SensationKey): TasteNoteMapping[] =>
  tasteNoteMappings.filter((m) => m.tasteKey === tasteKey)

/** 全ノートが「対応あり」か「対応なし（理由つき）」のどちらかで尽くされているかの自己点検用 */
export const unmappedNoteIds = new Set(unmappedTasteNotes.map((u) => u.noteId))
export const unaccountedNoteIds = (): string[] =>
  flavorNotes.map((n) => n.id).filter((id) => !mappingByNoteId.has(id) && !unmappedNoteIds.has(id))
