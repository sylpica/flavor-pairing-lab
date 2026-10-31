import type { MaterialCompoundLink} from '../types'

// カカオ・チョコレート文献拡充（調査 cacao-compounds-expansion.md、2026-10-31）の新規リンクと、
// 既存リンク（links.ts）への格上げ・注記提案。
//
// 寄与（contribution）と tier='measured' は、その試料自体の GC-O／AEDA／OAV／
// 再構成等の原著がある場合だけ付ける。相関（PLS 予測因子・DoT 関連付け）は conditions に方法を明記し、
// 欠落試験と同格に扱わない。新規素材（Nacional 系・CCN-51・TSH 565・ドミニカ）への化合物リンクは、
// 調査が遺伝子型レベルの官能・組成であり製品レベルの化合物リンク根拠がないため、ドミニカ×ジメチル
// スルフィド（当該試料群の研究内での検出・相関）以外は作らない。
//
//
// - ダーク×リナロール寄与：Seyfried & Granvogl 2019 の sensomics（AEDA＋SIDA＋再構成）で最高 OAV 群・
// 再構成の構成成分であり、従来お茶側の根拠しかなかったリナロールにカカオ側の寄与根拠が付いた。
// - ダーク×フェニルアセトアルデヒド寄与：Frauendorfer & Schieberle 2006（OAV>100・再構成）が根拠。
const FS06 = 'frauendorfer-2006-cocoa-powder'
const FS08 = 'frauendorfer-2008-criollo-roasting'
const SEYFRIED = 'seyfried-2019-dark-chocolates'
const FRICKE = 'fricke-2020-milk-chocolate-sensomics'
const ULLRICH22 = 'ullrich-2022-fine-flavor-dark'
const GUZMAN = 'guzman-penella-2023-dominican-dark'
const PORCELLI = 'porcelli-2022-coconut-cocoa'
const DEUSCHER = 'deuscher-2020-dark-chocolate-gco'
const BICKEL = 'bickel-haase-2021-pulp-origins'
const ACPANGAN = 'acpangan-2023-dark-chocolate-aroma'

const DARK = 'choco-dark-roasted'
const UNROASTED = 'choco-dark-unroasted'
const MILK = 'choco-milk'
const WHITE = 'choco-white'
const C100 = 'choco-100'

export const expansionCacaoLinks: MaterialCompoundLink[] = [
// ===== (b) 既存登録化合物への新規リンク =====
{ materialId: DARK, compoundId: 'linalool', kind: 'contribution', tier: 'measured', conditions: '市販ダーク（カカオ90%・99%）の sensomics（AEDA＋SIDA 定量＋再構成）で最高 OAV 群・再構成の構成成分。単一品種ダーク16種の DoT 比較でも Forastero 系で高 DoT。既存素材（70%一般）への適用は試料範囲の外挿を含む', sourceIds: [SEYFRIED, 'ullrich-2023-variety-dark']},
{ materialId: DARK, compoundId: 'phenylacetaldehyde', kind: 'contribution', tier: 'measured', conditions: 'ココアパウダーで OAV>100・24成分再構成の構成成分（Frauendorfer & Schieberle 2006）。Criollo 豆では焙煎で増加（2008）。パウダー試料の値をダークバーへそのまま転用しない', sourceIds: [FS06, FS08]},
{ materialId: DARK, compoundId: 'beta-ionone', kind: 'contribution', tier: 'measured', conditions: '条件付き：市販ダーク（90%・99%）でチョコレートとして初めて定量され、再構成の構成成分となった（Seyfried & Granvogl 2019）。寄与の大小は原著表の確認後に確定する。β-ダマセノンではない', sourceIds: [SEYFRIED]},
{ materialId: C100, compoundId: 'linalool', kind: 'contribution', tier: 'measured', conditions: '条件付き：根拠試料は市販99%バーであり、100%素材への適用ではこの試料範囲を併記する', sourceIds: [SEYFRIED]},
{ materialId: C100, compoundId: 'phenylacetaldehyde', kind: 'contribution', tier: 'measured', conditions: '条件付き：99%バーの sensomics とココアパウダーの再構成研究に基づく', sourceIds: [SEYFRIED, FS06]},
// ジメチルスルフィドは PLS 予測因子（相関）であり寄与にはしない。ジメチルトリスルフィドと混同しない
{ materialId: DARK, compoundId: 'dimethyl-sulfide', kind: 'detection', tier: 'measured', conditions: 'ドミニカ産 Trinitario ダーク54試料の PLS モデルで複数官能属性の主要な予測因子（相関）。寄与の実証ではない。ジメチルトリスルフィドとは別化合物', sourceIds: [GUZMAN]},
{ materialId: 'choco-dominican-trinitario', compoundId: 'dimethyl-sulfide', kind: 'detection', tier: 'measured', conditions: '当該54試料の PLS モデルで主要な予測因子（相関）。寄与の実証ではない', sourceIds: [GUZMAN]},

// ===== (c) 新規化合物へのリンク =====
{ materialId: DARK, compoundId: '3-methylbutanoic-acid', kind: 'contribution', tier: 'measured', conditions: 'ココアパウダーで OAV 390・再構成の構成成分。市販ダーク90/99%でも最高 OAV 群', sourceIds: [FS06, SEYFRIED]},
{ materialId: UNROASTED, compoundId: '3-methylbutanoic-acid', kind: 'contribution', tier: 'measured', conditions: '発酵 Criollo 豆（未焙煎）の比較 AEDA で最高 FD 群。発酵由来成分であり焙煎生成物ではない', sourceIds: [FS08]},
{ materialId: MILK, compoundId: '3-methylbutanoic-acid', kind: 'contribution', tier: 'measured', conditions: '市販ミルクチョコ1製品の sensomics で OAV 上位群・再構成の構成成分', sourceIds: [FRICKE]},
{ materialId: C100, compoundId: '3-methylbutanoic-acid', kind: 'contribution', tier: 'measured', conditions: '試料は市販99%バー（最高 OAV 群）', sourceIds: [SEYFRIED]},
{ materialId: DARK, compoundId: '2-methylbutanoic-acid', kind: 'contribution', tier: 'measured', conditions: '発酵カカオの AEDA で FD 2048–4096、Forastero ダークで高 DoT。証拠の多くは 3-メチルブタン酸とのペアで得られており、単独の OAV 実証は限定的', sourceIds: [PORCELLI, 'ullrich-2023-variety-dark']},
{ materialId: MILK, compoundId: 'phenylacetic-acid', kind: 'contribution', tier: 'measured', conditions: '市販ミルクチョコでバニリンと並ぶ最高 FD・再構成の構成成分', sourceIds: [FRICKE]},
{ materialId: DARK, compoundId: 'phenylacetic-acid', kind: 'contribution', tier: 'measured', conditions: '市販ダークで最高 OAV 群。GC-O 検出頻度法でもダーク試料の判別キーオドラント（OA 94）', sourceIds: [SEYFRIED, DEUSCHER]},
{ materialId: DARK, compoundId: 'dimethyl-trisulfide', kind: 'contribution', tier: 'measured', conditions: 'ココアパウダーで最高 FD 群、市販ダークで最高 OAV 群、製品ダークで高 DoT。焙煎の有無で寄与差が大きい。ジメチルスルフィド（DMS）とは別化合物', sourceIds: [FS06, SEYFRIED, ULLRICH22, ACPANGAN]},
{ materialId: MILK, compoundId: 'dimethyl-trisulfide', kind: 'contribution', tier: 'measured', conditions: '市販ミルクチョコで酪酸と並び最高 OAV 群（>170）・再構成の構成成分', sourceIds: [FRICKE]},
{ materialId: C100, compoundId: 'dimethyl-trisulfide', kind: 'contribution', tier: 'measured', conditions: '試料は市販99%バー', sourceIds: [SEYFRIED]},
{ materialId: DARK, compoundId: 'furaneol', kind: 'contribution', tier: 'measured', conditions: 'ココアパウダーで最高 FD 群。Criollo 豆では焙煎で強く増加。製品ダークでも高 DoT。コンチングで増加する報告もある', sourceIds: [FS06, FS08, ULLRICH22]},
{ materialId: WHITE, compoundId: 'furaneol', kind: 'detection', tier: 'general', conditions: 'モデルホワイトチョコ系で粉乳抽出物中に持続した香気成分の一つ（粉乳由来の可能性）。カカオバター由来の寄与実証ではない', sourceIds: ['stewart-2017-model-white-chocolate']},
{ materialId: DARK, compoundId: '2-phenylethanol', kind: 'contribution', tier: 'measured', conditions: '製品ダークで花様・渋味側の高 DoT。発酵豆に既に存在し焙煎では増えない発酵由来成分（Criollo 豆の定量）', sourceIds: [ULLRICH22, FS08]},
{ materialId: UNROASTED, compoundId: '2-phenylethanol', kind: 'composition', tier: 'measured', conditions: '発酵 Criollo 豆に定量され焙煎で増加しない。パルプでも高濃度（パルプ＞豆）。未焙煎試料での寄与（OAV 等）の直接実証ではないため組成リンクとする', sourceIds: [FS08, 'chetschik-2018-cocoa-pulp']},
{ materialId: DARK, compoundId: 'acetic-acid', kind: 'contribution', tier: 'measured', conditions: 'ココアパウダーで OAV>100。ガーナ発酵で工程→含有量→製品の酸味まで官能実証あり（Camu et al. 2008）。香り（ビネガー様）と味（酸味）の両方に寄与する。乳酸には同等の単独実証がない', sourceIds: [FS06, 'camu-2008-ghana-fermentation', ULLRICH22]},
{ materialId: UNROASTED, compoundId: 'acetic-acid', kind: 'contribution', tier: 'measured', conditions: '未焙煎・焙煎ダーク両品で最高 OAV、未焙煎でより保持される（Ac-Pangan et al. 2023）。未焙煎 Criollo 豆でも最高 FD 群（Frauendorfer & Schieberle 2008）', sourceIds: [ACPANGAN, FS08]},
{ materialId: C100, compoundId: 'acetic-acid', kind: 'contribution', tier: 'measured', conditions: 'ココアパウダーと製品ダーク（リカー由来）の実測に基づく。100%製品そのものの試料ではない', sourceIds: [FS06, ULLRICH22]},
{ materialId: MILK, compoundId: 'butyric-acid', kind: 'contribution', tier: 'measured', conditions: '市販ミルクチョコでジメチルトリスルフィドと並び最高 OAV 群（>170）。ダーク側での同格の実証は未確認', sourceIds: [FRICKE]},
// グアイアコールはオフフレーバー文脈の併記が必須条件（通常品の上位成分であると同時に煙様オフフレーバーの主因）
{ materialId: DARK, compoundId: 'guaiacol', kind: 'contribution', tier: 'measured', conditions: '通常の市販ダークでは最高 OAV 群の一方、過剰では煙様オフフレーバーの主因。起源は乾燥時の木煙曝露（Krause & Steinhaus 2025）と過発酵（同 2026）の2つが確認されており「煙様＝煙曝露」とは断定できない。発酵豆での最大許容濃度 70 µg/kg が提案されている（Füllemann & Steinhaus 2020）', sourceIds: [SEYFRIED, 'fullemann-2020-smoky-offflavor', 'krause-2025-smoke-exposure', 'krause-2026-overfermentation']},
{ materialId: MILK, compoundId: 'guaiacol', kind: 'contribution', tier: 'measured', conditions: '市販ミルクチョコで高 FD の一方、煙様オフフレーバーの原因化合物でもある（Füllemann & Steinhaus 2020）', sourceIds: [FRICKE, 'fullemann-2020-smoky-offflavor']},
{ materialId: DARK, compoundId: '2-phenylethyl-acetate', kind: 'contribution', tier: 'measured', conditions: '発酵カカオの AEDA で FD 4096（最高水準）。寄与は AEDA レベルであり、OAV・再構成の裏付けはない。異性体 1-phenylethyl acetate と混同しない', sourceIds: [PORCELLI]},
{ materialId: DARK, compoundId: 'isoamyl-acetate', kind: 'contribution', tier: 'measured', conditions: '製品ダークの果実様ノートで高 DoT（DoT 関連付けレベル、単独の欠落検証なし）。パルプ＞豆の濃度関係が定量されている', sourceIds: [ULLRICH22, 'chetschik-2018-cocoa-pulp']},
{ materialId: DARK, compoundId: 'ethyl-2-methylbutyrate', kind: 'contribution', tier: 'measured', conditions: '製品ダークの果実様エステルとして高 DoT。発酵豆に既に存在し焙煎で増えない（Frauendorfer & Schieberle 2008）', sourceIds: [ULLRICH22, FS08]},
{ materialId: DARK, compoundId: 'ethyl-3-methylbutyrate', kind: 'contribution', tier: 'measured', conditions: '製品ダークの果実様エステルとして高 DoT。2-メチルブタン酸エチルとは別化合物', sourceIds: [ULLRICH22]},
{ materialId: DARK, compoundId: 'massoia-lactone', kind: 'contribution', tier: 'measured', conditions: 'ココナッツ様の非典型的な香りを持つ発酵カカオ試料で、定量＋OAV＋参照試料への添加実験により決定的と確認。通常品のココナッツ様ノートの主因と一般化しない', sourceIds: [PORCELLI]},
{ materialId: MILK, compoundId: 'delta-decalactone', kind: 'contribution', tier: 'measured', conditions: '試料はクラムチョコレート（ミルクチョコレートの一種）。無水乳脂肪画分の感覚指向分析でクリーミーさへの寄与が示された。クラム方式でないミルクチョコレートへの適用は未検証。γ-デカラクトンとは別化合物', sourceIds: ['samfass-2021-crumb-chocolate-lactones']},
{ materialId: DARK, compoundId: 'procyanidin-b2', kind: 'contribution', tier: 'measured', conditions: '製品ダークで渋味側の高 DoT（DoT 関連付けであり欠落試験ではない）。カテキン類（群）とは別に個別登録', sourceIds: [ULLRICH22]},
{ materialId: C100, compoundId: 'procyanidin-b2', kind: 'contribution', tier: 'measured', conditions: '根拠はリカーから作った製品ダークの DoT。100%製品そのものの試料ではない', sourceIds: [ULLRICH22]},
{ materialId: DARK, compoundId: 'procyanidin-c1', kind: 'contribution', tier: 'measured', conditions: '製品ダークで渋味側の高 DoT（DoT 関連付けであり欠落試験ではない）。カテキン類（群）とは別に個別登録', sourceIds: [ULLRICH22]},
{ materialId: C100, compoundId: 'procyanidin-c1', kind: 'contribution', tier: 'measured', conditions: '根拠はリカーから作った製品ダークの DoT。100%製品そのものの試料ではない', sourceIds: [ULLRICH22]},
{ materialId: DARK, compoundId: 'epicatechin', kind: 'contribution', tier: 'measured', conditions: '製品ダークで渋味・花様側の高 DoT。なお種子含有量には遺伝型間の遺伝的決定差が認められなかった（Elwers et al. 2009）ため、系統差の根拠にはしない', sourceIds: [ULLRICH22, 'elwers-2009-phenolics-genotypes']},
{ materialId: DARK, compoundId: 'diketopiperazines', kind: 'contribution', tier: 'measured', conditions: 'カカオの苦味はアルカロイドと 2,5-ジケトピペラジン類の組合せが鍵（Kauz et al. 2021、豆75試料の定量基盤＋呈味の感覚指向分析）。群として扱う。焙煎カカオニブでの呈味研究（Stark et al. 2006）も根拠に含む。根拠は豆・ニブ段階の研究であり、最終製品での直接の寄与検証ではない', sourceIds: ['kauz-2021-cocoa-tastants', 'stark-2006-cocoa-nibs-taste']},
{ materialId: DARK, compoundId: 'n-phenylpropenoyl-amino-acids', kind: 'contribution', tier: 'measured', conditions: 'カカオの渋味の担い手の一つ（Kauz et al. 2021 の感覚指向分析）。群として扱う', sourceIds: ['kauz-2021-cocoa-tastants']},
// ジアセチルは検出頻度レベルの寄与候補に留め、寄与リンクにはしない。再構成・欠落の裏付けなし
{ materialId: DARK, compoundId: 'diacetyl', kind: 'detection', tier: 'measured', conditions: 'GC-O 検出頻度法での寄与候補（Deuscher et al. 2020：OA 7、NIF 90–100%）。再構成・欠落での単独検証は未確認のため検出リンクに留める。パルプではカメルーン産で FD 256（Bickel Haase et al. 2021）。ミルクチョコへのリンクはしない（外挿不可）', sourceIds: [DEUSCHER, BICKEL]},
// 4-ビニルグアイアコールは検出（GC-O）レベルまで。寄与リンクにはしない
{ materialId: DARK, compoundId: '4-vinylguaiacol', kind: 'detection', tier: 'measured', conditions: 'ダークの GC-O で検出（OA 80・NIF 83–100%）。パルプ AEDA でも高 FD。寄与リンクにはしない', sourceIds: [DEUSCHER, BICKEL]},
]

/** 既存リンク（links.ts）に対する格上げ・注記提案。links.ts 自体は編集せず、統合時に適用する。
* 置換ではなく「注記追加」と「維持（整理の根拠の記録）」のみで、kind／tier の変更は提案しない。 */
export interface CacaoLinkUpgrade {
materialId: string
compoundId: string
/** 'add-note' = 既存リンクの conditions に注記を追加 / 'keep' = 既存リンクを維持し整理の根拠を記録 */
action: 'add-note' | 'keep'
/** 追加する注記（action='keep' の場合は維持理由の注記） */
note: string
/** 格上げ・注記を行う理由（調査 (b) の根拠） */
reason: string
sourceIds: string[]
}

export const expansionCacaoLinkUpgrades: CacaoLinkUpgrade[] = [
{
materialId: DARK, compoundId: 'vanillin', action: 'add-note',
note: '市販品の sensomics 研究（Seyfried & Granvogl 2019、Fricke & Schieberle 2020）では上位成分だが、添加の有無は要旨レベルで未明示。天然寄与の根拠は Frauendorfer & Schieberle 2006 のココアパウダー定量に置き、本リンクは「配合・添加由来の可能性を含む」ものとして扱う',
reason: '調査 (b)：バニリンの天然寄与と配合由来を分けるための注記追加。なお現行リンクは検出・一般的知見（Deuscher 2020）であり、同研究ではバニリンは試料レシピへの添加物由来として著者らが解析から除外している（検出≠天然寄与の代表例）',
sourceIds: [FS06, SEYFRIED, FRICKE],
},
{
materialId: MILK, compoundId: 'vanillin', action: 'add-note',
note: 'Fricke & Schieberle 2020 で最高 FD 群だが、バニリンの添加有無は要旨で未明示。寄与（実測）の根拠は Schnermann & Schieberle 1997 の AEDA に置き、市販品については配合由来の可能性を含む',
reason: '調査 (b)：既存リンク（寄与・実測、schnermann-1997）への注記追加',
sourceIds: [FRICKE],
},
{
materialId: WHITE, compoundId: 'vanillin', action: 'keep',
note: 'ホワイトチョコの香りの主因は乳粉の加熱履歴であり（Stewart et al. 2017／2018)、カカオバター由来と実証された香気寄与は限定的。バニリンは配合由来が主と考えられ、現行の検出・一般的知見リンクはこの整理と整合するため維持する',
reason: '調査 (b)：既存リンク（検出・一般的知見）の維持。格上げしないこと自体が文献整理と一致する',
sourceIds: ['stewart-2017-model-white-chocolate', 'stewart-2018-white-chocolate-smp'],
},
{
materialId: UNROASTED, compoundId: 'alkylpyrazines', action: 'keep',
note: 'Frauendorfer & Schieberle 2008：香気成分の顔ぶれは焙煎前後でほぼ同じで、変わるのは強度。未焙煎で最高 FD は 2-/3-メチルブタン酸と酢酸（酸類）であり、ピラジン類は未焙煎の主役ではない。現行の検出・実測リンクを維持し、この注記を併記する',
reason: '調査 (b)：既存リンク（検出・実測）の維持・注記',
sourceIds: [FS08],
},
]
