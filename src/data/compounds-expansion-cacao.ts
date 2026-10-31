import type { Compound } from '../types'

// カカオ・チョコレート文献拡充（調査 cacao-compounds-expansion.md、2026-10-31）の新規化合物。
// 調査 (c) の20行＝実体22件（2-メチルブタン酸エチル／3-メチルブタン酸エチルと、プロシアニジンB2／C1 は
// 行内分割の指示により個別登録）。いずれも既存 compounds.ts（teaChocolateCompounds / spiceHerbCompounds）に
// 無いことを確認したものだけを登録する。noteIds は flavors.ts のIDのみを使う（該当ノートが無い成分は空配列）。
// 収録しなかったもの：γ-デカラクトン単独登録（否定的実測あり。δ-デカラクトンの注記に留める）、
// テトラメチルピラジン／2,3,5-トリメチルピラジンの個別登録（含量≠寄与。アルキルピラジン類（群）の扱いを維持）。
// 重複回避：2-フェニルエタノール、フラネオール、グアイアコールは並行するお茶拡充ライン
// （compounds-expansion-tea.ts）が同一IDで登録済みのため、本ファイルでは登録しない。
// カカオ側のリンク（links-expansion-cacao.ts）は同一IDを参照する。グアイアコールの
// オフフレーバー文脈はカカオ側リンクの conditions に必須併記済み（化合物レコード自体は茶側の登録）。
const FS06 = 'frauendorfer-2006-cocoa-powder'
const FS08 = 'frauendorfer-2008-criollo-roasting'
const SEYFRIED = 'seyfried-2019-dark-chocolates'
const FRICKE = 'fricke-2020-milk-chocolate-sensomics'
const ULLRICH22 = 'ullrich-2022-fine-flavor-dark'

export const expansionCacaoCompounds: Compound[] = [
  {
    id: '3-methylbutanoic-acid', nameJa: '3-メチルブタン酸（イソ吉草酸）', nameEn: '3-Methylbutanoic acid',
    aliases: ['イソ吉草酸', 'Isovaleric acid'], cas: '503-74-2', formula: 'C5H10O2',
    compoundClass: '脂肪酸（分岐鎖）', volatile: true,
    sensoryKnowledge: '汗様・チーズ様の酸臭を持つ分岐鎖脂肪酸。カカオ範囲で最も再現性の高い寄与成分の一つ（ココアパウダーで OAV 390・再構成の構成成分、ダーク・ミルクの sensomics で最高 OAV 群）。2-メチルブタン酸と混同しない。',
    noteIds: [], tasteKeys: [], sourceIds: [FS06, FS08, SEYFRIED, FRICKE],
  },
  {
    id: '2-methylbutanoic-acid', nameJa: '2-メチルブタン酸', nameEn: '2-Methylbutanoic acid',
    aliases: [], cas: '116-53-0', formula: 'C5H10O2',
    compoundClass: '脂肪酸（分岐鎖）', volatile: true,
    sensoryKnowledge: '汗様・チーズ様の酸臭を持つ分岐鎖脂肪酸。発酵カカオの AEDA で FD 2048–4096、Forastero ダークで高 DoT。証拠の多くは 3-メチルブタン酸とのペアとして得られており、単独の OAV 実証は限定的。',
    noteIds: [], tasteKeys: [], sourceIds: ['porcelli-2022-coconut-cocoa', 'ullrich-2023-variety-dark', FS08],
  },
  {
    id: 'phenylacetic-acid', nameJa: 'フェニル酢酸', nameEn: 'Phenylacetic acid',
    aliases: [], cas: '103-82-2', formula: 'C8H8O2',
    compoundClass: '芳香族カルボン酸', volatile: true,
    sensoryKnowledge: '蜂蜜様の甘い香り。ミルクチョコではバニリンと並ぶ最高 FD・再構成の構成成分、ダークでも最高 OAV 群・GC-O の判別キーオドラントと、ミルク・ダーク双方で寄与が強い。',
    noteIds: ['honey'], tasteKeys: [], sourceIds: [FRICKE, SEYFRIED, 'deuscher-2020-dark-chocolate-gco'],
  },
  {
    id: 'dimethyl-trisulfide', nameJa: 'ジメチルトリスルフィド', nameEn: 'Dimethyl trisulfide',
    aliases: ['DMTS'], cas: '3658-80-8', formula: 'C2H6S3',
    compoundClass: '含硫化合物', volatile: true,
    sensoryKnowledge: 'キャベツ様・硫黄様の強い香りを持ち、極低濃度でも寄与し得る含硫化合物。ココアパウダーで最高 FD 群、ダーク・ミルクで最高 OAV 群。ジメチルスルフィド（DMS）とは別化合物であり混同厳禁。',
    noteIds: [], tasteKeys: [], sourceIds: [FS06, SEYFRIED, FRICKE, 'acpangan-2023-dark-chocolate-aroma'],
  },
  {
    id: 'acetic-acid', nameJa: '酢酸', nameEn: 'Acetic acid',
    aliases: [], cas: '64-19-7', formula: 'C2H4O2',
    compoundClass: '有機酸（短鎖脂肪酸）', volatile: true,
    sensoryKnowledge: '酢様の酸臭と酸味。香りと味（酸味）の両方に寄与実証がある数少ない成分（ココアパウダーで OAV>100、発酵条件→含有量→製品の酸味の官能実証、製品ダークの高 DoT）。乳酸には同等の単独実証がない（非対称性に注意）。',
    noteIds: [], tasteKeys: ['sour'], sourceIds: [FS06, 'camu-2008-ghana-fermentation', ULLRICH22, 'acpangan-2023-dark-chocolate-aroma'],
  },
  {
    id: 'butyric-acid', nameJa: '酪酸', nameEn: 'Butyric acid',
    aliases: [], cas: '107-92-6', formula: 'C4H8O2',
    compoundClass: '脂肪酸（短鎖）', volatile: true,
    sensoryKnowledge: 'チーズ様・汗様の酸臭を持つ短鎖脂肪酸。市販ミルクチョコの sensomics でジメチルトリスルフィドと並び最高 OAV 群（>170）。ダーク側での同格の実証は未確認。',
    noteIds: [], tasteKeys: [], sourceIds: [FRICKE],
  },
  {
    id: '2-phenylethyl-acetate', nameJa: '酢酸2-フェニルエチル', nameEn: '2-Phenylethyl acetate',
    aliases: [], cas: '103-45-7', formula: 'C10H12O2',
    compoundClass: 'エステル', volatile: true,
    sensoryKnowledge: 'バラ様・蜂蜜様の甘い香り。発酵カカオの AEDA で FD 4096 と最高水準だが、OAV・再構成の裏付けはない（寄与は AEDA レベル）。異性体 1-phenylethyl acetate と混同しない。',
    noteIds: ['rose', 'honey'], tasteKeys: [], sourceIds: ['porcelli-2022-coconut-cocoa'],
  },
  {
    id: 'isoamyl-acetate', nameJa: '酢酸イソアミル', nameEn: 'Isoamyl acetate',
    aliases: ['酢酸3-メチルブチル', '3-Methylbutyl acetate'], cas: '123-92-2', formula: 'C7H14O2',
    compoundClass: 'エステル', volatile: true,
    sensoryKnowledge: 'バナナ様の果実香。製品ダークの果実様ノートで高 DoT（定量・官能相関レベルで、単独の欠落検証なし）。カカオパルプ＞豆の濃度関係が定量されている。',
    noteIds: ['fruit-general'], tasteKeys: [], sourceIds: [ULLRICH22, 'chetschik-2018-cocoa-pulp'],
  },
  {
    id: 'ethyl-2-methylbutyrate', nameJa: '2-メチルブタン酸エチル', nameEn: 'Ethyl 2-methylbutyrate',
    aliases: [], cas: '7452-79-1', formula: 'C7H14O2',
    compoundClass: 'エステル', volatile: true,
    sensoryKnowledge: 'リンゴ様の果実香を持つエステル。製品ダークの果実様エステルとして高 DoT。発酵豆に既に存在し焙煎では増えない。3-メチルブタン酸エチルとは別化合物として登録する。',
    noteIds: ['apple-pear', 'fruit-general'], tasteKeys: [], sourceIds: [ULLRICH22, FS08],
  },
  {
    id: 'ethyl-3-methylbutyrate', nameJa: '3-メチルブタン酸エチル', nameEn: 'Ethyl 3-methylbutyrate',
    aliases: [], cas: '108-64-5', formula: 'C7H14O2',
    compoundClass: 'エステル', volatile: true,
    sensoryKnowledge: 'リンゴ様の果実香を持つエステル。製品ダークの果実様エステルとして高 DoT。2-メチルブタン酸エチルとは別化合物として登録する。',
    noteIds: ['apple-pear', 'fruit-general'], tasteKeys: [], sourceIds: [ULLRICH22],
  },
  {
    id: 'massoia-lactone', nameJa: '(R)-δ-2-デセノラクトン', nameEn: '(R)-δ-2-Decenolactone',
    aliases: ['マッソイアラクトン', 'Massoia lactone'], formula: 'C10H16O2',
    compoundClass: 'ラクトン', volatile: true,
    sensoryKnowledge: 'ココナッツ様の香り。ココナッツ様の非典型的な香りを持つ発酵カカオ試料で、定量＋OAV＋参照試料への添加実験により決定的成分と確認された。通常品のココナッツ様ノートの主因と一般化しない。',
    noteIds: [], tasteKeys: [], sourceIds: ['porcelli-2022-coconut-cocoa'],
  },
  {
    id: 'delta-decalactone', nameJa: 'δ-デカラクトン', nameEn: 'δ-Decalactone',
    aliases: [], cas: '705-86-2', formula: 'C10H18O2',
    compoundClass: 'ラクトン', volatile: true,
    sensoryKnowledge: 'クリーミー・ココナッツ様の香り。クラム製法チョコレートのクリーミーさに関する感覚指向分析と、カカオパルプの AEDA が根拠。γ-デカラクトンとは別化合物であり、γ体については FD が高くても OAV 0.00–0.15 という否定的実測があるため単独登録しない。',
    noteIds: ['cream-note'], tasteKeys: [], sourceIds: ['samfass-2021-crumb-chocolate-lactones', 'bickel-haase-2021-pulp-origins'],
  },
  {
    id: 'procyanidin-b2', nameJa: 'プロシアニジンB2', nameEn: 'Procyanidin B2',
    aliases: [], cas: '29106-49-8', formula: 'C30H26O12',
    compoundClass: 'ポリフェノール（プロアントシアニジン）', volatile: false,
    sensoryKnowledge: 'カテキン二量体のプロシアニジン。製品ダークで渋味側の高 DoT が示された、カカオ側の渋味を担う個別成分。カテキン類（群）とは別に個別登録し、群への安易なリンクは原著の対象を超えるため行わない。',
    noteIds: [], tasteKeys: ['astringent'], sourceIds: [ULLRICH22],
  },
  {
    id: 'procyanidin-c1', nameJa: 'プロシアニジンC1', nameEn: 'Procyanidin C1',
    aliases: [], cas: '37064-31-6', formula: 'C45H38O18',
    compoundClass: 'ポリフェノール（プロアントシアニジン）', volatile: false,
    sensoryKnowledge: 'カテキン三量体のプロシアニジン。製品ダークで渋味側の高 DoT が示された。プロシアニジンB2、カテキン類（群）とは別に個別登録する。',
    noteIds: [], tasteKeys: ['astringent'], sourceIds: [ULLRICH22],
  },
  {
    id: 'epicatechin', nameJa: '(−)-エピカテキン', nameEn: '(−)-Epicatechin',
    aliases: [], cas: '490-46-0', formula: 'C15H14O6',
    compoundClass: 'ポリフェノール（フラバン-3-オール）', volatile: false,
    sensoryKnowledge: 'カカオの主要フラバン-3-オール。製品ダークで渋味・花様側の高 DoT。カテキン類（群）とは役割を分けて個別登録する。なお種子含有量には遺伝型間の遺伝的決定差が認められなかった（Elwers et al. 2009）ため、系統差の根拠にはしない。',
    noteIds: [], tasteKeys: ['bitter', 'astringent'], sourceIds: [ULLRICH22, 'elwers-2009-phenolics-genotypes'],
  },
  {
    id: 'diketopiperazines', nameJa: '2,5-ジケトピペラジン類', nameEn: '2,5-Diketopiperazines',
    aliases: [], compoundClass: '環状ジペプチド類（群）', volatile: false,
    sensoryKnowledge: '焙煎で生じる環状ジペプチド群。カカオの苦味はアルカロイドとの組合せで担うとされる（呈味の感覚指向分析＋豆75試料の定量基盤）。個別化合物ではなく群として扱う。豆品種のマーカー候補としても報告がある。',
    noteIds: [], tasteKeys: ['bitter'], sourceIds: ['kauz-2021-cocoa-tastants', 'stark-2006-cocoa-nibs-taste'],
  },
  {
    id: 'n-phenylpropenoyl-amino-acids', nameJa: 'N-フェニルプロペノイル-L-アミノ酸類', nameEn: 'N-Phenylpropenoyl-L-amino acids',
    aliases: [], compoundClass: 'フェノールアミド類（群）', volatile: false,
    sensoryKnowledge: 'カカオの渋味の担い手の一つ（呈味の感覚指向分析）。ポリフェノール配糖体、フラバン-3-オール類とともに渋味を担う。個別化合物ではなく群として扱う。',
    noteIds: [], tasteKeys: ['astringent'], sourceIds: ['kauz-2021-cocoa-tastants', 'stark-2006-cocoa-nibs-taste'],
  },
  {
    id: 'diacetyl', nameJa: 'ジアセチル', nameEn: 'Diacetyl',
    aliases: ['2,3-ブタンジオン', '2,3-Butanedione'], cas: '431-03-8', formula: 'C4H6O2',
    compoundClass: 'ジケトン', volatile: true,
    sensoryKnowledge: 'バター様の香り。ダークチョコの GC-O 検出頻度法で寄与候補とされた（OA 7、NIF 90–100%）が、再構成・欠落での単独検証は未確認。ミルクチョコのバター感への外挿は不可（ミルク sensomics の上位には入っていない）。条件付き登録。',
    noteIds: ['cream-note'], tasteKeys: [], sourceIds: ['deuscher-2020-dark-chocolate-gco', 'bickel-haase-2021-pulp-origins'],
  },
  {
    id: '4-vinylguaiacol', nameJa: '4-ビニルグアイアコール', nameEn: '4-Vinylguaiacol',
    aliases: ['2-メトキシ-4-ビニルフェノール'], cas: '7786-61-0', formula: 'C9H10O2',
    compoundClass: 'フェノール類', volatile: true,
    sensoryKnowledge: 'スパイス様・煙様の香り。ダークチョコの GC-O（OA 80・NIF 83–100%）とカカオパルプの AEDA で検出されているが、寄与の実証には至っていないため検出レベルに留める。条件付き登録。',
    noteIds: ['smoky'], tasteKeys: [], sourceIds: ['deuscher-2020-dark-chocolate-gco', 'bickel-haase-2021-pulp-origins'],
  },
]
