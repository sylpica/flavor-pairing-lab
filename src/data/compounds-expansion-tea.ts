import type { Compound } from '../types'

// お茶の新規化合物（調査 tea-compounds-expansion.md §6(c) の38項目を個別レコード化したもの）。
// 収録しなかった項目（理由は最終報告参照）:
// - デカナール（§6(c)#28 の後半）と β-シクロシトラール（#29）: 調査ファイルが具体的な出典を
//   特定しておらず、出典なしでは登録できないため見送り。
// - ジヒドロアクチニジオライド（#26）と EGCG3″Me／ECG3″Me（#38）: 唯一の根拠（Li 2024 茯磚／
//   Maeda-Yamamoto 2012）の書誌タイトルの一次確認が取れなかったため出典登録を見送り、連動して見送り。
// CAS・分子式は調査ファイルに明記のあるもの（6-メチル-5-ヘプテン-2-オンの CAS）だけを記載する。
const KM = 'kumazawa-masuda-2002-pan-fired-tea'
const KUM99 = 'kumazawa-1999-sencha-odorants'
const TAN = 'tan-2019-japanese-green-tea'
const KANEKO = 'kaneko-2006-matcha-umami'
const SCHARBERT05 = 'scharbert-2005-black-tea-taste'

export const expansionTeaCompounds: Compound[] = [
  // ---- 香気化合物 ----
  {
    id: 'indole', nameJa: 'インドール', nameEn: 'Indole', aliases: [], cas: '120-72-9', formula: 'C8H7N', pubchemCid: 798,
    compoundClass: '含窒素化合物（インドール）', volatile: true,
    sensoryKnowledge: '低濃度では花様、濃度が上がると動物的な香り。煎茶・玉露で AEDA 最高FD群（Tan 2019、FD 27）、煎茶で AEDA 高FD（Kumazawa 1999）、烏龍茶で OAV 96–138（Zhu 2015）と複数茶類で寄与が実証されている。低温貯蔵緑茶でも AEDA 寄与（Katsuno 2014）。',
    noteIds: ['floral-general'], tasteKeys: [],
    sourceIds: [KUM99, TAN, 'zhu-2015-oolong-gco', 'katsuno-2014-low-temperature-green-tea'],
  },
  {
    id: 'nerolidol', nameJa: 'ネロリドール', nameEn: '(E)-Nerolidol', aliases: ['(E)-ネロリドール'], cas: '40716-66-3', formula: 'C15H26O', pubchemCid: 5284507,
    compoundClass: 'セスキテルペンアルコール', volatile: true,
    sensoryKnowledge: '花様・木質の香り。烏龍茶（鉄観音・大紅袍・凍頂）で OAV 108–184（Zhu 2015）。大紅袍での欠落実証は書誌対応に誤りが見つかった別系統論文の記録であり、再確認が必要なため根拠に含めない。',
    noteIds: ['floral-general', 'wood'], tasteKeys: [],
    sourceIds: ['zhu-2015-oolong-gco'],
  },
  {
    id: 'methyl-salicylate', nameJa: 'サリチル酸メチル', nameEn: 'Methyl salicylate', aliases: [], cas: '119-36-8', formula: 'C8H8O3', pubchemCid: 4133,
    compoundClass: '芳香族エステル（サリチル酸エステル）', volatile: true,
    sensoryKnowledge: '冬緑様・薬品様の香り。四大紅茶の GC-O で最強群に入り、セイロンでは最も決定的な成分（Kang 2019）。四川工夫紅茶では再構成・欠落系で寄与3位（Wang 2025）。',
    noteIds: ['herb-general', 'minty'], tasteKeys: [],
    sourceIds: ['kang-2019-four-black-teas', 'wang-2025-sichuan-congou'],
  },
  {
    id: 'methyl-anthranilate', nameJa: 'アントラニル酸メチル', nameEn: 'Methyl anthranilate', aliases: [], cas: '134-20-3', formula: 'C8H9NO2', pubchemCid: 8635,
    compoundClass: '芳香族エステル', volatile: true,
    sensoryKnowledge: 'ぶどう様・花様の香り。日本品種「そうふう」の品種特異的成分として同定され、水中での検知閾値が推定された（Sawai 2004）。寄与量の順位を示す AEDA 等の研究ではない。',
    noteIds: ['fruit-general', 'floral-general'], tasteKeys: [],
    sourceIds: ['sawai-2004-sofu-methyl-anthranilate'],
  },
  {
    id: '2-phenylethanol', nameJa: '2-フェニルエタノール', nameEn: '2-Phenylethanol', aliases: ['フェネチルアルコール'], cas: '60-12-8', formula: 'C8H10O', pubchemCid: 6054,
    compoundClass: '芳香族アルコール', volatile: true,
    sensoryKnowledge: 'バラ様の香り。ダージリンで AEDA 最高FD群（Schuh 2006）。白茶では貢眉・寿眉の主寄与成分の一方で、白毫銀針・白牡丹では主寄与ではない（亜型差、Feng 2022）。',
    noteIds: ['rose', 'floral-general'], tasteKeys: [],
    sourceIds: ['schuh-2006-darjeeling-sensomics', 'feng-2022-white-tea-sensomics'],
  },
  {
    id: 'jasmine-lactone', nameJa: 'ジャスミンラクトン', nameEn: 'Jasmine lactone', aliases: [], cas: '25524-95-2', formula: 'C10H16O2', pubchemCid: 5352626,
    compoundClass: 'ラクトン', volatile: true,
    sensoryKnowledge: 'ジャスミン様・果実様・ミルク様の香り。低温貯蔵緑茶で AEDA 寄与（Katsuno 2014）、鳳凰単叢の鍵マーカー（Song 2025）、烏龍茶適性品種で FD が高い傾向（He 2023）。',
    noteIds: ['jasmine', 'cream-note'], tasteKeys: [],
    sourceIds: ['katsuno-2014-low-temperature-green-tea', 'song-2025-dancong-sensomics', 'he-2023-oolong-cultivars'],
  },
  {
    id: 'cis-jasmone', nameJa: '(Z)-ジャスモン', nameEn: 'cis-Jasmone', aliases: ['シス-ジャスモン'], cas: '488-10-8', formula: 'C11H16O', pubchemCid: 1549018,
    compoundClass: 'ケトン（ジャスモン類）', volatile: true,
    sensoryKnowledge: 'ジャスミン様の香り。低温貯蔵緑茶で AEDA 寄与（Katsuno 2014）、鳳凰単叢の鍵マーカー（Song 2025）。',
    noteIds: ['jasmine', 'floral-general'], tasteKeys: [],
    sourceIds: ['katsuno-2014-low-temperature-green-tea', 'song-2025-dancong-sensomics'],
  },
  {
    id: 'coumarin', nameJa: 'クマリン', nameEn: 'Coumarin', aliases: [], cas: '91-64-5', formula: 'C9H6O2', pubchemCid: 323,
    compoundClass: 'ラクトン（クマリン類）', volatile: true,
    sensoryKnowledge: '甘い干し草様の香り。低温貯蔵緑茶で AEDA 寄与（Katsuno 2014）、抹茶で AEDA 高FD（Tan 2019）。',
    noteIds: ['hay', 'honey'], tasteKeys: [],
    sourceIds: ['katsuno-2014-low-temperature-green-tea', TAN],
  },
  {
    id: 'methyl-epijasmonate', nameJa: 'メチルエピジャスモネート', nameEn: 'Methyl epijasmonate', aliases: [], cas: '42536-97-0', formula: 'C13H20O3', pubchemCid: 10751624,
    compoundClass: 'エステル（ジャスモン酸類）', volatile: true,
    sensoryKnowledge: 'ジャスミン様の香り。低温貯蔵緑茶で AEDA 寄与（Katsuno 2014）。ジャスモン酸メチル（メチルジャスモネート）とは別化合物（エピマー）であり混同しないこと。',
    noteIds: ['jasmine', 'floral-general'], tasteKeys: [],
    sourceIds: ['katsuno-2014-low-temperature-green-tea'],
  },
  {
    id: 'furaneol', nameJa: 'フラネオール', nameEn: 'Furaneol', aliases: ['HDMF', '4-ヒドロキシ-2,5-ジメチル-3(2H)-フラノン'], cas: '3658-77-3', formula: 'C6H8O3', pubchemCid: 19309,
    compoundClass: 'フラノン', volatile: true,
    sensoryKnowledge: 'カラメル・いちご様の甘い香り。ダージリンで AEDA 最高FD群（Schuh 2006）、抹茶で AEDA 高FD（Tan 2019）、岩茶（大紅袍）で欠落試験により焙煎・カラメル香の鍵と実証（Wang 2022、OAV 13）。',
    noteIds: ['caramel', 'berry'], tasteKeys: [],
    sourceIds: ['schuh-2006-darjeeling-sensomics', TAN, 'wang-2022-dahongpao-roasty'],
  },
  // 旧エントリ 'sotolon'（茶側）は round7 で削除：唯一の根拠だった Wang 2023 の記録が実在論文と一致せず
  // （同論文にソトロンの記載なし）、同一物質は compounds-expansion-sh.ts の 'sotolon'
  // （blank-1993 / peraza-luna-2001 に基づく正規エントリ。旧 ID 'sotolone' から round7 Wave C で改名）で収録済みのため重複登録も解消した。
  {
    id: '2-acetyl-1-pyrroline', nameJa: '2-アセチル-1-ピロリン', nameEn: '2-Acetyl-1-pyrroline', aliases: [], cas: '85213-22-5', formula: 'C6H9NO', pubchemCid: 522834,
    compoundClass: '含窒素化合物（ピロリン）', volatile: true,
    sensoryKnowledge: 'ポップコーン様の香り。釜炒り等の釜炒め製法にのみ強い寄与を示し、茶では初めて同定された（Kumazawa & Masuda 2002、AEDA）。',
    noteIds: ['toast', 'roast-general'], tasteKeys: [],
    sourceIds: [KM],
  },
  {
    id: '2-acetyl-2-thiazoline', nameJa: '2-アセチル-2-チアゾリン', nameEn: '2-Acetyl-2-thiazoline', aliases: [], cas: '29926-41-8', formula: 'C5H7NOS', pubchemCid: 169110,
    compoundClass: '含硫含窒素化合物（チアゾリン）', volatile: true,
    sensoryKnowledge: 'ポップコーン様の香り。釜炒め製法にのみ強い寄与を示し、茶では初めて同定された（Kumazawa & Masuda 2002、AEDA）。',
    noteIds: ['toast', 'roast-general'], tasteKeys: [],
    sourceIds: [KM],
  },
  {
    id: '2-ethyl-3-5-dimethylpyrazine', nameJa: '2-エチル-3,5-ジメチルピラジン', nameEn: '2-Ethyl-3,5-dimethylpyrazine', aliases: [], cas: '13925-07-0', formula: 'C8H12N2', pubchemCid: 26334,
    compoundClass: 'ピラジン', volatile: true,
    sensoryKnowledge: 'ナッツ・焙煎様の香り。既存の「アルキルピラジン類（群）」から個別化した化合物。釜炒り茶で釜炒め製法特有の強い寄与（Kumazawa & Masuda 2002）、岩茶で欠落試験により実証（Wang 2022、OAV 19）、茎茶のドラム焙煎で高温ほど増加（Sasaki 2020）。',
    noteIds: ['nut-general', 'roast-general'], tasteKeys: [],
    sourceIds: [KM, 'wang-2022-dahongpao-roasty', 'sasaki-2020-roasting-conditions'],
  },
  {
    id: '2-3-diethyl-5-methylpyrazine', nameJa: '2,3-ジエチル-5-メチルピラジン', nameEn: '2,3-Diethyl-5-methylpyrazine', aliases: [], cas: '18138-04-0', formula: 'C9H14N2', pubchemCid: 28905,
    compoundClass: 'ピラジン', volatile: true,
    sensoryKnowledge: 'ナッツ・焙煎様の香り。既存の「アルキルピラジン類（群）」から個別化した化合物。釜炒り茶で釜炒め製法特有の強い寄与（Kumazawa & Masuda 2002）、ほうじ茶で AEDA FD 243（Tan 2019）、ダージリンの特徴成分として同定（Baba 2017）。',
    noteIds: ['nut-general', 'roast-general'], tasteKeys: [],
    sourceIds: [KM, TAN, 'baba-2017-darjeeling-aeda'],
  },
  {
    id: 'methoxybenzenes', nameJa: 'メトキシベンゼン類', nameEn: 'Methoxybenzenes', aliases: ['1,2,3-トリメトキシベンゼン', '1,2,4-トリメトキシベンゼン'],
    compoundClass: 'メトキシベンゼン類（群）', volatile: true,
    sensoryKnowledge: '陳香・カビ様・薬品様の香りを持つ化合物群。熟プーアルで AEDA＋OAV により最大の寄与（Pang 2019）。渥堆発酵で生成・増加する。',
    noteIds: ['earth', 'wood'], tasteKeys: [],
    sourceIds: ['pang-2019-puerh-odorants'],
  },
  {
    id: 'cedrol', nameJa: 'セドロール', nameEn: 'Cedrol', aliases: [], cas: '77-53-2', formula: 'C15H26O', pubchemCid: 65575,
    compoundClass: 'セスキテルペンアルコール', volatile: true,
    sensoryKnowledge: '木質の香り。貯蔵（陳年）白牡丹で rOAV≥1 の陳年特徴香気成分（Li 2026）。GC-O・再構成による寄与実証ではなく、新茶への適用はできない。茯磚茶での欠落実証は pairing 記録にあるが書誌未確定のため根拠に含めない。',
    noteIds: ['wood'], tasteKeys: [],
    sourceIds: ['li-2026-stored-baimudan'],
  },
  {
    id: 'ez-2-6-nonadienal', nameJa: '(E,Z)-2,6-ノナジエナール', nameEn: '(E,Z)-2,6-Nonadienal', aliases: ['キュウリアルデヒド'], cas: '557-48-2', formula: 'C9H14O', pubchemCid: 643731,
    compoundClass: '脂肪族アルデヒド', volatile: true,
    sensoryKnowledge: 'きゅうり・青葉様の香り。釜炒り茶・煎茶・龍井に共通の高FD成分（Kumazawa & Masuda 2002、AEDA）。熟プーアル・茯磚茶での欠落実証は pairing 記録にあるが、原著の個別書誌が未確定のため根拠に含めない。乾燥セージの寄与成分としても報告された（Chiang 2024）。',
    noteIds: ['green-leaf', 'green-vegetable'], tasteKeys: [],
    sourceIds: [KM, 'chiang-2024-sage-odorants'],
  },
  {
    id: 'ee-2-4-heptadienal', nameJa: '(E,E)-2,4-ヘプタジエナール', nameEn: '(E,E)-2,4-Heptadienal', aliases: [], cas: '5910-85-0', formula: 'C7H10O', pubchemCid: 5283321,
    compoundClass: '脂肪族アルデヒド', volatile: true,
    sensoryKnowledge: '脂肪様・青い香り。径山茶で OAV 46＋再構成系の寄与成分（Flaig 2020）。文脈依存性がある：岩茶では欠陥香とされ、熟プーアルでは欠落試験で陰性だったと pairing 記録にある（後二者は書誌未確定）。',
    noteIds: ['green-leaf'], tasteKeys: [],
    sourceIds: ['flaig-2020-jingshan-sensomics'],
  },
  {
    id: '6-methyl-5-hepten-2-one', nameJa: '6-メチル-5-ヘプテン-2-オン', nameEn: '6-Methyl-5-hepten-2-one', aliases: ['スルカトン'],
    cas: '110-93-0', formula: 'C8H14O', pubchemCid: 9862,
    compoundClass: 'ケトン', volatile: true,
    sensoryKnowledge: '柑橘・青葉様の香り。烏龍茶で OAV 34–67（Zhu 2015）、岩茶で欠落試験により焙煎・カラメル香の鍵と実証（Wang 2022、OAV 91）。注意：フィルバートン（5-メチル-(E)-2-ヘプテン-4-オン、ヘーゼルナッツ様）とは別化合物であり混同しないこと。',
    noteIds: ['citrus', 'green-leaf'], tasteKeys: [],
    sourceIds: ['zhu-2015-oolong-gco', 'wang-2022-dahongpao-roasty'],
  },
  {
    id: 'gamma-hexalactone', nameJa: 'γ-ヘキサラクトン', nameEn: 'γ-Hexalactone', aliases: [], cas: '695-06-7', formula: 'C6H10O2', pubchemCid: 12756,
    compoundClass: 'ラクトン', volatile: true,
    sensoryKnowledge: 'ココナッツ様・甘い香り。岩茶（大紅袍）で OAV 154（Wang 2022）、鳳凰単叢の鍵マーカー（Song 2025）。',
    noteIds: ['cream-note', 'tropical'], tasteKeys: [],
    sourceIds: ['wang-2022-dahongpao-roasty', 'song-2025-dancong-sensomics'],
  },
  {
    id: 'hotrienol', nameJa: 'ホトリエノール', nameEn: 'Hotrienol', aliases: ['3,7-ジメチル-1,5,7-オクタトリエン-3-オール'], cas: '20053-88-7', formula: 'C10H16O', pubchemCid: 40510009,
    compoundClass: 'モノテルペンアルコール', volatile: true,
    sensoryKnowledge: '花様・マスカテル様の香り。ダージリンで AEDA により特徴成分として同定（Baba 2017、FD 4³）、四大紅茶の GC-O 最強群（Kang 2019）。ダージリンでの生成物としての同定は Kawakami 1995（組成レベル）。',
    noteIds: ['floral-general', 'fruit-general'], tasteKeys: [],
    sourceIds: ['baba-2017-darjeeling-aeda', 'kang-2019-four-black-teas', 'kawakami-1995-darjeeling-composition'],
  },
  {
    id: 'mmp', nameJa: '4-メルカプト-4-メチル-2-ペンタノン', nameEn: '4-Mercapto-4-methyl-2-pentanone', aliases: ['MMP'], cas: '19872-52-7', formula: 'C6H12OS', pubchemCid: 88290,
    compoundClass: '含硫化合物（チオール）', volatile: true,
    sensoryKnowledge: '低濃度でカシス・グレープフルーツ様の香り。ダージリンで AEDA により同定され、マスカテル香はリナロール、ゲラニオール、β-ダマセノンとの組合せで形成されると考察された（Baba 2017）。煎茶・釜炒り茶でも高FD（Kumazawa 1999／2002）。単独で香りが決まるわけではない。',
    noteIds: ['berry', 'citrus'], tasteKeys: [],
    sourceIds: ['baba-2017-darjeeling-aeda', KUM99, KM],
  },
  {
    id: 'eez-2-4-6-nonatrienal', nameJa: '(E,E,Z)-2,4,6-ノナトリエナール', nameEn: '(E,E,Z)-2,4,6-Nonatrienal', aliases: [], cas: '56269-22-8', formula: 'C9H12O', pubchemCid: 6436625,
    compoundClass: '脂肪族アルデヒド', volatile: true,
    sensoryKnowledge: 'ダージリンのセンソミクスで、従来未知だった鍵成分として OAV により浮上した（Schuh 2006、AEDA 最高FD群＋再構成で確認）。',
    noteIds: ['hay', 'green-leaf'], tasteKeys: [],
    sourceIds: ['schuh-2006-darjeeling-sensomics'],
  },
  {
    id: 'methional', nameJa: 'メチオナール', nameEn: 'Methional', aliases: [], cas: '3268-49-3', formula: 'C4H8OS', pubchemCid: 18635,
    compoundClass: '含硫アルデヒド（ストレッカーアルデヒド）', volatile: true,
    sensoryKnowledge: '茹でたじゃがいも様の香り。煎茶で AEDA 最高FD（Tan 2019、FD 27）、緑茶類に共通の高FD成分（Kumazawa & Masuda 2002）、キームンでは温風萎凋で rOAV 124（Huang 2022）。',
    noteIds: ['earth'], tasteKeys: [],
    sourceIds: [TAN, KM, 'huang-2022-keemun-withering'],
  },
  {
    id: 'guaiacol', nameJa: 'グアイアコール', nameEn: 'Guaiacol', aliases: ['2-メトキシフェノール'], cas: '90-05-1', formula: 'C7H8O2', pubchemCid: 460,
    compoundClass: 'フェノール類', volatile: true,
    sensoryKnowledge: '燻し・薬品様の香り。岩茶（大紅袍）で新規キーオドラントとして同定（Wang 2022、OAV 3.4）。カカオでは煙様オフフレーバーの主因の一つとして扱われ、その起源は木煙曝露（Krause & Steinhaus 2025）と過発酵（同 2026）の2つが実証されている。文脈により「望ましい焙煎香」と「欠陥臭」に分かれる化合物であり、素材ごとのリンク条件を併せて読むこと。',
    noteIds: ['smoky'], tasteKeys: [],
    sourceIds: ['wang-2022-dahongpao-roasty'],
  },
  {
    id: 'octanal', nameJa: 'オクタナール', nameEn: 'Octanal', aliases: [], cas: '124-13-0', formula: 'C8H16O', pubchemCid: 454,
    compoundClass: '脂肪族アルデヒド', volatile: true,
    sensoryKnowledge: '柑橘・脂肪様の香り。烏龍茶（鉄観音・大紅袍・凍頂）で OAV 28–131（Zhu 2015）。',
    noteIds: ['citrus'], tasteKeys: [],
    sourceIds: ['zhu-2015-oolong-gco'],
  },
  {
    id: 'e-2-octenal', nameJa: '(E)-2-オクテナール', nameEn: '(E)-2-Octenal', aliases: [], cas: '2548-87-0', formula: 'C8H14O', pubchemCid: 5283324,
    compoundClass: '脂肪族アルデヒド', volatile: true,
    sensoryKnowledge: '脂肪様・ナッツ様の香り。四大紅茶の横断研究でアッサムの最も決定的な成分とされた（Kang 2019、GC-O＋OAV）。アッサムについてはこの1研究に依存する。',
    noteIds: ['nut-general', 'green-leaf'], tasteKeys: [],
    sourceIds: ['kang-2019-four-black-teas'],
  },
  // ---- 呈味化合物 ----
  {
    id: 'egcg', nameJa: 'エピガロカテキンガレート', nameEn: 'Epigallocatechin gallate', aliases: ['EGCG'], cas: '989-51-5', formula: 'C22H18O11', pubchemCid: 65064,
    compoundClass: 'フラバン-3-オール（カテキン）', volatile: false,
    sensoryKnowledge: 'ガレート型カテキン。安茶での DoT は 1.19–1.43（Ye et al. 2025、試料・乾燥法で1を跨ぐ）。紅茶浸出液の再構成・除去実験でフラボノール配糖体とともに渋みの主要寄与群とされた（Scharbert 2005）。既存の「カテキン類（群）」から個別化した化合物。',
    noteIds: [], tasteKeys: ['bitter', 'astringent'],
    sourceIds: ['huang-2025-ancha-dot', SCHARBERT05],
  },
  {
    id: 'ecg', nameJa: 'エピカテキンガレート', nameEn: 'Epicatechin gallate', aliases: ['ECG'], cas: '1257-08-5', formula: 'C22H18O10', pubchemCid: 107905,
    compoundClass: 'フラバン-3-オール（カテキン）', volatile: false,
    sensoryKnowledge: 'ガレート型カテキン。安茶での DoT は 0.88–1.02（Ye et al. 2025）。紅茶浸出液の再構成・除去実験で渋みの主要寄与群の一員（Scharbert 2005）。',
    noteIds: [], tasteKeys: ['bitter', 'astringent'],
    sourceIds: ['huang-2025-ancha-dot', SCHARBERT05],
  },
  {
    id: 'egc', nameJa: 'エピガロカテキン', nameEn: 'Epigallocatechin', aliases: ['EGC'], cas: '970-74-1', formula: 'C15H14O7', pubchemCid: 72277,
    compoundClass: 'フラバン-3-オール（カテキン）', volatile: false,
    sensoryKnowledge: '非ガレート型カテキン。安茶での DoT は 0.52–0.69 で、直接の呈味寄与は小さい（Ye et al. 2025）。含有量が多いことと寄与が大きいことは別であり、過大表示を避けるため寄与が小さいことを明記して登録する。',
    noteIds: [], tasteKeys: ['astringent'],
    sourceIds: ['huang-2025-ancha-dot'],
  },
  // 旧エントリ 'ec' は round7 Wave C で削除：PubChem CID 72276 で 'epicatechin'
  // （compounds-expansion-cacao.ts）と同一化合物と確認されたため統合した。
  // 安茶での DoT の知見と出典（huang-2025-ancha-dot）は統合先へ移行済み。
  {
    id: 'theaflavin', nameJa: 'テアフラビン', nameEn: 'Theaflavin', aliases: ['TF'], cas: '4670-05-7', formula: 'C29H24O12', pubchemCid: 135403798,
    compoundClass: 'ポリフェノール（紅茶色素）', volatile: false,
    sensoryKnowledge: '紅茶の色素成分。渋み閾値は 0.016 mmol/L と低い（前駆体 EGC の33分の1）が、Scharbert 2004 が浸出液中濃度から taste activity を評価した結論では、テアフラビン類全体の実寄与は紅茶の渋みの 0.1% 未満であり、テアフラビン濃度は味の品質の指標として適さない。閾値の低さと実際の寄与は別問題である。',
    noteIds: [], tasteKeys: ['astringent'],
    sourceIds: ['scharbert-2004-theaflavin-taste'],
  },
  {
    id: 'theaflavin-3-gallate', nameJa: 'テアフラビン-3-ガレート', nameEn: 'Theaflavin-3-gallate', aliases: ['TF-3-G'], cas: '30462-34-1', formula: 'C36H28O16', pubchemCid: 169167,
    compoundClass: 'ポリフェノール（紅茶色素）', volatile: false,
    sensoryKnowledge: '個別テアフラビンの一つ。Scharbert 2004 が酵素酸化で合成・精製して閾値を実測したが、同論文の taste activity 評価ではテアフラビン類全体の実寄与は紅茶の渋みの 0.1% 未満と結論された。閾値の低さを寄与の大きさと混同しないこと。',
    noteIds: [], tasteKeys: ['astringent'],
    sourceIds: ['scharbert-2004-theaflavin-taste'],
  },
  {
    id: 'theaflavin-3p-gallate', nameJa: 'テアフラビン-3′-ガレート', nameEn: "Theaflavin-3'-gallate", aliases: ['TF-3′-G'], cas: '28543-07-9', formula: 'C36H28O16', pubchemCid: 135458102,
    compoundClass: 'ポリフェノール（紅茶色素）', volatile: false,
    sensoryKnowledge: '個別テアフラビンの一つ。Scharbert 2004 が閾値を実測したが、同論文の taste activity 評価ではテアフラビン類全体の実寄与は紅茶の渋みの 0.1% 未満と結論された。閾値の低さを寄与の大きさと混同しないこと。',
    noteIds: [], tasteKeys: ['astringent'],
    sourceIds: ['scharbert-2004-theaflavin-taste'],
  },
  {
    id: 'theaflavin-digallate', nameJa: 'テアフラビン-3,3′-ジガレート', nameEn: "Theaflavin-3,3'-digallate", aliases: ['TFDG', 'TF-3,3′-DG'], formula: 'C43H32O20', pubchemCid: 21146795,
    compoundClass: 'ポリフェノール（紅茶色素）', volatile: false,
    sensoryKnowledge: '個別テアフラビンの一つ。Scharbert 2004 が閾値を実測したが、同論文の taste activity 評価ではテアフラビン類全体の実寄与は紅茶の渋みの 0.1% 未満と結論された。閾値の低さを寄与の大きさと混同しないこと。',
    noteIds: [], tasteKeys: ['astringent'],
    sourceIds: ['scharbert-2004-theaflavin-taste'],
  },
  {
    id: 'flavonol-glycosides', nameJa: 'フラボノール配糖体', nameEn: 'Flavonol glycosides', aliases: ['フラバン-3-オール配糖体を含む配糖体群'],
    compoundClass: 'フラボノール配糖体（群）', volatile: false,
    sensoryKnowledge: '味覚希釈分析で紅茶浸出液の渋みの主役と同定された配糖体群（Scharbert, Holzmann & Hofmann 2004、14種、渋み閾値 0.001–19.8 µmol/L）。安茶でも DoT 最高群（Ye et al. 2025）。カフェインの苦味を増強することも報告されている（Scharbert 2005）。',
    noteIds: [], tasteKeys: ['astringent', 'bitter'],
    sourceIds: ['scharbert-2004-astringent-compounds', 'huang-2025-ancha-dot', SCHARBERT05],
  },
  {
    id: 'coumaroylquinic-acid', nameJa: 'trans-4-O-p-クマロイルキナ酸', nameEn: 'trans-4-O-p-Coumaroylquinic acid', aliases: ['4-O-p-クマロイルキナ酸'], cas: '53539-37-0', formula: 'C16H18O8', pubchemCid: 5281766,
    compoundClass: 'フェノール酸エステル', volatile: false,
    sensoryKnowledge: '祁門工夫紅茶の渋み成分として初同定された（Wen 2022）。渋み閾値 38 µM、祁門8試料の含量は 40.20–65.53 µM で全試料が閾値を超えた（DoT>1）。試料は祁門に限る。',
    noteIds: [], tasteKeys: ['astringent'],
    sourceIds: ['wen-2022-keemun-astringency'],
  },
  {
    id: 'succinic-acid', nameJa: 'コハク酸', nameEn: 'Succinic acid', aliases: [], cas: '110-15-6', formula: 'C4H6O4', pubchemCid: 1110,
    compoundClass: '有機酸（ジカルボン酸）', volatile: false,
    sensoryKnowledge: '高級抹茶でうま味増強成分として官能つきで同定された（Kaneko 2006）。適用範囲は抹茶に限る。',
    noteIds: [], tasteKeys: ['umami', 'sour'],
    sourceIds: [KANEKO],
  },
  {
    id: 'gallic-acid', nameJa: '没食子酸', nameEn: 'Gallic acid', aliases: [], cas: '149-91-7', formula: 'C7H6O5', pubchemCid: 370,
    compoundClass: 'フェノール酸', volatile: false,
    sensoryKnowledge: '高級抹茶でうま味増強成分として官能つきで同定された（Kaneko 2006）。単独の渋み寄与については閾値未満（DoT 0.32–0.46）という否定的知見が pairing 記録にあるが原著未再確認であり、うま味増強とは分離して扱う（渋み寄与としては登録しない）。',
    noteIds: [], tasteKeys: ['umami'],
    sourceIds: [KANEKO],
  },
  {
    id: 'theogallin', nameJa: 'テオガリン', nameEn: 'Theogallin', aliases: [], cas: '17365-11-6', formula: 'C14H16O10', pubchemCid: 442988,
    compoundClass: 'フェノール酸エステル', volatile: false,
    sensoryKnowledge: '高級抹茶でうま味増強成分として官能つきで同定された（Kaneko 2006）。適用範囲は抹茶に限る。',
    noteIds: [], tasteKeys: ['umami'],
    sourceIds: [KANEKO],
  },
  {
    id: 'gamma-glutamyl-peptides', nameJa: 'γ-グルタミルペプチド類', nameEn: 'γ-Glutamyl peptides', aliases: ['γ-Glu-Gln', 'グルタチオン'],
    compoundClass: 'ペプチド類（群）', volatile: false,
    sensoryKnowledge: '緑茶浸出液のコク味成分として、官能誘導型分画・再構成で γ-Glu-Gln とグルタチオンが同定された（Lu 2022）。コク味は本アプリの呈味区分に独立項目がないため tasteKeys は umami に寄せているが、実体はうま味そのものではなく厚み・持続の増強である。',
    noteIds: [], tasteKeys: ['umami'],
    sourceIds: ['lu-2022-kokumi-green-tea'],
  },
]
