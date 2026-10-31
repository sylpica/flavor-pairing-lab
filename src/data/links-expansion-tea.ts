import type { EvidenceTier, LinkKind, MaterialCompoundLink } from '../types'

// お茶の素材×化合物リンク拡充（調査 tea-compounds-expansion.md §6(a)(b)）。
// contribution / tier='measured' は、その素材自体を対象にした GC-O／AEDA／OAV／再構成／
// 欠落試験／DoT 等の原著がある場合だけに付けている。
// 収録しなかったペア（理由は最終報告参照）:
// - プーアル × セドロール／(E,Z)-2,6-ノナジエナール: 欠落実証は pairing 記録にあるが原著の
//   個別書誌が未確定のため見送り。
// - プーアル × ジヒドロアクチニジオライド: 根拠は茯磚茶の研究で素材が一致しないため見送り。
// - プーアル × α-イオノン、煎茶 × (Z)-1,5-オクタジエン-3-オン／3-メチルノナン-2,4-ジオン、
//   抹茶 × ノナナール／α-イオノン、ほうじ茶 × 2,3-ジエチルピラジン、単叢 × インドール／
//   サリチル酸メチル（系統別マーカー）: 対象化合物が未登録、または出典書誌が未確定のため見送り。
const KUM99 = 'kumazawa-1999-sencha-odorants'
const TAN = 'tan-2019-japanese-green-tea'
const KANEKO = 'kaneko-2006-matcha-umami'
const SCHARBERT05 = 'scharbert-2005-black-tea-taste'
const KM = 'kumazawa-masuda-2002-pan-fired-tea'
const SCHUH = 'schuh-2006-darjeeling-sensomics'
const BABA = 'baba-2017-darjeeling-aeda'
const KANG = 'kang-2019-four-black-teas'
const HUANG22 = 'huang-2022-keemun-withering'
const WEI = 'wei-2024-yellow-tea'
const WANG22 = 'wang-2022-dahongpao-roasty'
const WANG23 = 'wang-2023-dongding-sensomics'
const ZHU = 'zhu-2015-oolong-gco'

export const expansionTeaLinks: MaterialCompoundLink[] = [
  // ---- 既存素材への追加：煎茶 ----
  { materialId: 'tea-sencha', compoundId: 'methional', kind: 'contribution', tier: 'measured', conditions: '煎茶浸出液の AEDA で最高FD（FD 27）。釜炒り茶等との比較でも共通の高FD成分', sourceIds: [TAN, KM] },
  { materialId: 'tea-sencha', compoundId: 'beta-damascenone', kind: 'contribution', tier: 'measured', conditions: '煎茶の AEDA で最高FD群（Kumazawa 1999）。全茶共通の高FD成分としても確認（Kumazawa & Masuda 2002）', sourceIds: [KUM99, KM] },
  { materialId: 'tea-sencha', compoundId: 'indole', kind: 'contribution', tier: 'measured', conditions: '煎茶の AEDA で最高FD群（Kumazawa 1999、Tan 2019 とも FD 27 が最高値）', sourceIds: [KUM99, TAN] },
  { materialId: 'tea-sencha', compoundId: 'mmp', kind: 'contribution', tier: 'measured', conditions: '煎茶の AEDA で最高FD群の一つ（Kumazawa 1999）', sourceIds: [KUM99] },
  { materialId: 'tea-sencha', compoundId: 'gamma-glutamyl-peptides', kind: 'contribution', tier: 'general', conditions: '緑茶浸出液一般での官能誘導型分画・再構成による同定。煎茶個別試料の実証ではない', sourceIds: ['lu-2022-kokumi-green-tea'] },
  // ---- 玉露 ----
  { materialId: 'tea-gyokuro', compoundId: 'indole', kind: 'contribution', tier: 'measured', conditions: '玉露の AEDA で最高FD（FD 27、Tan 2019）', sourceIds: [TAN] },
  { materialId: 'tea-gyokuro', compoundId: 'dimethyl-sulfide', kind: 'contribution', tier: 'measured', conditions: '被覆栽培の覆い香の文脈。Tan 2019 の玉露 AEDA に基づく。Sakaida et al. 2010 は pairing 記録で書誌未確定のため出典登録は見送った', sourceIds: [TAN] },
  // ---- 抹茶 ----
  { materialId: 'tea-matcha', compoundId: 'furaneol', kind: 'contribution', tier: 'measured', conditions: '抹茶の AEDA で等級を問わず高FDの8成分の一つ（Tan 2019）', sourceIds: [TAN] },
  { materialId: 'tea-matcha', compoundId: 'coumarin', kind: 'contribution', tier: 'measured', conditions: '抹茶の AEDA で等級を問わず高FDの8成分の一つ（Tan 2019）', sourceIds: [TAN] },
  { materialId: 'tea-matcha', compoundId: 'succinic-acid', kind: 'contribution', tier: 'measured', conditions: '高級抹茶のうま味増強成分として官能つきで同定（Kaneko 2006）', sourceIds: [KANEKO] },
  { materialId: 'tea-matcha', compoundId: 'gallic-acid', kind: 'contribution', tier: 'measured', conditions: '高級抹茶のうま味増強成分として（Kaneko 2006）。単独の渋み寄与とは別扱い（否定的知見あり）', sourceIds: [KANEKO] },
  { materialId: 'tea-matcha', compoundId: 'theogallin', kind: 'contribution', tier: 'measured', conditions: '高級抹茶のうま味増強成分として官能つきで同定（Kaneko 2006）', sourceIds: [KANEKO] },
  // ---- ほうじ茶 ----
  { materialId: 'tea-hojicha', compoundId: 'geraniol', kind: 'contribution', tier: 'measured', conditions: '焙煎茎茶（棒ほうじ茶）の AEDA で高FDの花香成分で、茎茶の方が葉茶より豊富（Sasaki 2017）。葉ほうじ茶への外挿には注意', sourceIds: ['sasaki-2017-roasted-stem-tea'] },
  { materialId: 'tea-hojicha', compoundId: 'linalool', kind: 'contribution', tier: 'measured', conditions: '焙煎茎茶（棒ほうじ茶）の AEDA で高FDの花香成分（Sasaki 2017）。葉ほうじ茶への外挿には注意', sourceIds: ['sasaki-2017-roasted-stem-tea'] },
  { materialId: 'tea-hojicha', compoundId: '2-3-diethyl-5-methylpyrazine', kind: 'contribution', tier: 'measured', conditions: 'ほうじ茶の AEDA で FD 243（Tan 2019）', sourceIds: [TAN] },
  { materialId: 'tea-hojicha', compoundId: '2-ethyl-3-5-dimethylpyrazine', kind: 'contribution', tier: 'measured', conditions: '茎茶のドラム焙煎で高温ほど増加（Sasaki 2020）。水上らの AEDA 記録は書誌未確定のため根拠に含めない', sourceIds: ['sasaki-2020-roasting-conditions'] },
  // ---- 白牡丹 ----
  { materialId: 'tea-white-baimudan', compoundId: '2-phenylethanol', kind: 'composition', tier: 'measured', conditions: '白茶4亜型で標準添加法により定量（Feng 2022）。主寄与は貢眉・寿眉側であり、白牡丹では組成（定量された含有）として扱う', sourceIds: ['feng-2022-white-tea-sensomics'] },
  { materialId: 'tea-white-baimudan', compoundId: 'cedrol', kind: 'contribution', tier: 'measured', conditions: '貯蔵0–11年の陳年白牡丹で rOAV≥1 の特徴香気成分（Li 2026）。新茶には適用できない。寄与の根拠は rOAV＋多変量レベルで、GC-O・再構成はない', sourceIds: ['li-2026-stored-baimudan'] },
  // ---- 鉄観音 ----
  { materialId: 'tea-tieguanyin', compoundId: 'indole', kind: 'contribution', tier: 'measured', conditions: '烏龍茶横断の OAV 96–138（Zhu 2015、3茶共通の範囲値）。烏龍茶適性品種でも FD が高い傾向（He 2023）', sourceIds: [ZHU, 'he-2023-oolong-cultivars'] },
  { materialId: 'tea-tieguanyin', compoundId: 'nerolidol', kind: 'contribution', tier: 'measured', conditions: '烏龍茶横断の OAV 108–184（Zhu 2015、3茶共通の範囲値）', sourceIds: [ZHU] },
  { materialId: 'tea-tieguanyin', compoundId: '6-methyl-5-hepten-2-one', kind: 'contribution', tier: 'measured', conditions: '烏龍茶横断の OAV 34–67（Zhu 2015、3茶共通の範囲値）', sourceIds: [ZHU] },
  { materialId: 'tea-tieguanyin', compoundId: 'jasmine-lactone', kind: 'contribution', tier: 'measured', conditions: '烏龍茶適性品種（鉄観音を含む）で AEDA＋再構成系により寄与を検証（He 2023、pairing 記録ベース）', sourceIds: ['he-2023-oolong-cultivars'] },
  // ---- 鳳凰単叢 ----
  { materialId: 'tea-dancong', compoundId: 'jasmine-lactone', kind: 'contribution', tier: 'measured', conditions: '単叢3香型の定量＋OAV＋ケモメトリクスで鍵マーカー（Song 2025）。香型試料レベル', sourceIds: ['song-2025-dancong-sensomics'] },
  { materialId: 'tea-dancong', compoundId: 'cis-jasmone', kind: 'contribution', tier: 'measured', conditions: '単叢3香型の鍵マーカー（Song 2025）。香型試料レベル', sourceIds: ['song-2025-dancong-sensomics'] },
  { materialId: 'tea-dancong', compoundId: 'gamma-hexalactone', kind: 'contribution', tier: 'measured', conditions: '単叢3香型の鍵マーカー（Song 2025）。香型試料レベル', sourceIds: ['song-2025-dancong-sensomics'] },
  // ---- 紅茶（一般） ----
  { materialId: 'tea-black-general', compoundId: 'methyl-salicylate', kind: 'contribution', tier: 'general', conditions: '四大紅茶横断の GC-O 最強群（Kang 2019、茶種別ではセイロンで最も決定的）と四川工夫紅茶の再構成系3位（Wang 2025）に基づく茶類レベルの知見', sourceIds: [KANG, 'wang-2025-sichuan-congou'] },
  { materialId: 'tea-black-general', compoundId: 'hotrienol', kind: 'contribution', tier: 'general', conditions: '四大紅茶横断の GC-O 最強群（Kang 2019）に基づく茶類レベルの知見', sourceIds: [KANG] },
  { materialId: 'tea-black-general', compoundId: 'flavonol-glycosides', kind: 'contribution', tier: 'measured', conditions: '味覚希釈分析で紅茶浸出液の渋みの主役と同定（Scharbert 2004）。再構成・除去でも主要寄与群（Scharbert 2005）', sourceIds: ['scharbert-2004-astringent-compounds', SCHARBERT05] },
  { materialId: 'tea-black-general', compoundId: 'egcg', kind: 'contribution', tier: 'measured', conditions: '紅茶浸出液の再構成・除去で渋み寄与群（Scharbert 2005）。DoT 1.19–1.43 は安茶試料の値（Huang 2025）', sourceIds: [SCHARBERT05, 'huang-2025-ancha-dot'] },
  { materialId: 'tea-black-general', compoundId: 'ecg', kind: 'contribution', tier: 'measured', conditions: '紅茶浸出液の再構成・除去で渋み寄与群（Scharbert 2005）。DoT 0.88–1.02 は安茶試料の値（Huang 2025）', sourceIds: [SCHARBERT05, 'huang-2025-ancha-dot'] },
  { materialId: 'tea-black-general', compoundId: 'egc', kind: 'contribution', tier: 'general', conditions: 'DoT 0.52–0.69（安茶、Huang 2025）で直接の寄与は小さい。小さい寄与であることを明記した上での収録', sourceIds: ['huang-2025-ancha-dot'] },
  { materialId: 'tea-black-general', compoundId: 'ec', kind: 'contribution', tier: 'general', conditions: 'DoT 0.02–0.03（安茶、Huang 2025）で直接の寄与はごく小さい', sourceIds: ['huang-2025-ancha-dot'] },
  { materialId: 'tea-black-general', compoundId: 'theaflavin', kind: 'composition', tier: 'measured', conditions: '浸出液中濃度と閾値（0.016 mmol/L）から taste activity を評価。実寄与は渋み全体の 0.1% 未満と結論されたため寄与ではなく組成として扱う（Scharbert 2004）', sourceIds: ['scharbert-2004-theaflavin-taste'] },
  { materialId: 'tea-black-general', compoundId: 'theaflavin-3-gallate', kind: 'composition', tier: 'measured', conditions: '閾値は実測されたが、テアフラビン類全体の実寄与は渋みの 0.1% 未満（Scharbert 2004）。組成として扱う', sourceIds: ['scharbert-2004-theaflavin-taste'] },
  { materialId: 'tea-black-general', compoundId: 'theaflavin-3p-gallate', kind: 'composition', tier: 'measured', conditions: '閾値は実測されたが、テアフラビン類全体の実寄与は渋みの 0.1% 未満（Scharbert 2004）。組成として扱う', sourceIds: ['scharbert-2004-theaflavin-taste'] },
  { materialId: 'tea-black-general', compoundId: 'theaflavin-digallate', kind: 'composition', tier: 'measured', conditions: '閾値は実測されたが、テアフラビン類全体の実寄与は渋みの 0.1% 未満（Scharbert 2004）。組成として扱う', sourceIds: ['scharbert-2004-theaflavin-taste'] },
  // ---- プーアル ----
  { materialId: 'tea-dark-puer', compoundId: 'methoxybenzenes', kind: 'contribution', tier: 'measured', conditions: '熟プーアルで AEDA＋OAV により最大の寄与（Pang 2019）。生プーアルは構成が異なる', sourceIds: ['pang-2019-puerh-odorants'] },
]

// ---- 新規素材のリンク ----
expansionTeaLinks.push(
  // 釜炒り茶（Kumazawa & Masuda 2002、AEDA）
  { materialId: 'tea-kamairicha', compoundId: '2-acetyl-1-pyrroline', kind: 'contribution', tier: 'measured', conditions: '釜炒め製法にのみ強い寄与。茶で初めての同定（嬉野試料）', sourceIds: [KM] },
  { materialId: 'tea-kamairicha', compoundId: '2-acetyl-2-thiazoline', kind: 'contribution', tier: 'measured', conditions: '釜炒め製法にのみ強い寄与。茶で初めての同定（嬉野試料）', sourceIds: [KM] },
  { materialId: 'tea-kamairicha', compoundId: '2-ethyl-3-5-dimethylpyrazine', kind: 'contribution', tier: 'measured', conditions: '釜炒め製法にのみ強い寄与（嬉野試料）', sourceIds: [KM] },
  { materialId: 'tea-kamairicha', compoundId: '2-3-diethyl-5-methylpyrazine', kind: 'contribution', tier: 'measured', conditions: '釜炒め製法にのみ強い寄与（嬉野試料）', sourceIds: [KM] },
  { materialId: 'tea-kamairicha', compoundId: 'methional', kind: 'contribution', tier: 'measured', conditions: '煎茶・龍井と共通の高FD成分（嬉野試料）', sourceIds: [KM] },
  { materialId: 'tea-kamairicha', compoundId: 'ez-2-6-nonadienal', kind: 'contribution', tier: 'measured', conditions: '煎茶・龍井と共通の高FD成分（嬉野試料）', sourceIds: [KM] },
  { materialId: 'tea-kamairicha', compoundId: 'mmp', kind: 'contribution', tier: 'measured', conditions: '煎茶・龍井と共通の高FD成分（嬉野試料）', sourceIds: [KM] },
  // ダージリン
  { materialId: 'tea-darjeeling', compoundId: 'linalool', kind: 'contribution', tier: 'measured', conditions: 'センソミクス（OAV＋再構成）で重要性を確認（Schuh 2006）。四大紅茶横断でもダージリンの最も決定的な成分の一つ（Kang 2019）', sourceIds: [SCHUH, KANG] },
  { materialId: 'tea-darjeeling', compoundId: 'geraniol', kind: 'contribution', tier: 'measured', conditions: 'センソミクス（OAV＋再構成）で重要性を確認（Schuh 2006）。Kang 2019 では GC-O 最強群だが OAV>1 リスト外という手法間の差異がある', sourceIds: [SCHUH] },
  { materialId: 'tea-darjeeling', compoundId: 'vanillin', kind: 'contribution', tier: 'measured', conditions: 'AEDA 最高FD群（Schuh 2006、再構成で確認）', sourceIds: [SCHUH] },
  { materialId: 'tea-darjeeling', compoundId: 'furaneol', kind: 'contribution', tier: 'measured', conditions: 'AEDA 最高FD群（Schuh 2006、再構成で確認）', sourceIds: [SCHUH] },
  { materialId: 'tea-darjeeling', compoundId: '2-phenylethanol', kind: 'contribution', tier: 'measured', conditions: 'AEDA 最高FD群（Schuh 2006、再構成で確認）', sourceIds: [SCHUH] },
  { materialId: 'tea-darjeeling', compoundId: 'eez-2-4-6-nonatrienal', kind: 'contribution', tier: 'measured', conditions: 'AEDA 最高FD群で、OAV により従来未知の鍵成分として浮上（Schuh 2006）', sourceIds: [SCHUH] },
  { materialId: 'tea-darjeeling', compoundId: 'hotrienol', kind: 'contribution', tier: 'measured', conditions: 'AEDA でダージリン特徴成分として同定（Baba 2017）。四大紅茶横断の GC-O 最強群（Kang 2019）', sourceIds: [BABA, KANG] },
  { materialId: 'tea-darjeeling', compoundId: 'mmp', kind: 'contribution', tier: 'measured', conditions: 'AEDA で同定（Baba 2017）。マスカテル香はリナロール、ゲラニオール、β-ダマセノンとの組合せで形成されると考察されており、単独の寄与ではない', sourceIds: [BABA] },
  { materialId: 'tea-darjeeling', compoundId: 'beta-damascenone', kind: 'contribution', tier: 'measured', conditions: 'マスカテル香を形成する組合せ（リナロール、ゲラニオール、MMP と）の一部として（Baba 2017、AEDA 比較）', sourceIds: [BABA] },
  { materialId: 'tea-darjeeling', compoundId: '2-3-diethyl-5-methylpyrazine', kind: 'contribution', tier: 'measured', conditions: 'AEDA でダージリン特徴成分として同定（Baba 2017）', sourceIds: [BABA] },
  // キームン
  { materialId: 'tea-keemun', compoundId: 'linalool', kind: 'contribution', tier: 'measured', conditions: '日干し萎凋で rOAV 161（Huang 2022、QDA＋添加実験で検証）。萎凋条件つき', sourceIds: [HUANG22] },
  { materialId: 'tea-keemun', compoundId: 'geraniol', kind: 'contribution', tier: 'measured', conditions: '日干し萎凋で rOAV 785（Huang 2022）。萎凋条件つき', sourceIds: [HUANG22] },
  { materialId: 'tea-keemun', compoundId: 'methional', kind: 'contribution', tier: 'measured', conditions: '温風萎凋で rOAV 124、焙煎様を担った（Huang 2022）。萎凋条件つき', sourceIds: [HUANG22] },
  { materialId: 'tea-keemun', compoundId: 'phenylacetaldehyde', kind: 'contribution', tier: 'measured', conditions: '四大紅茶横断で祁門の最も決定的な成分（Kang 2019、GC-O＋OAV）', sourceIds: [KANG] },
  { materialId: 'tea-keemun', compoundId: 'coumaroylquinic-acid', kind: 'contribution', tier: 'measured', conditions: '祁門の渋み成分として初同定。閾値 38 µM、8試料全てで含量が閾値超え（Wen 2022）', sourceIds: ['wen-2022-keemun-astringency'] },
  // アッサム
  { materialId: 'tea-assam', compoundId: 'e-2-octenal', kind: 'contribution', tier: 'measured', conditions: '四大紅茶横断でアッサムの最も決定的な成分（Kang 2019）。香気寄与はこの1研究に依存する', sourceIds: [KANG] },
  { materialId: 'tea-assam', compoundId: 'theaflavins', kind: 'composition', tier: 'measured', conditions: 'アッパーアッサム等の32試料で 4.88–15.54 mg/g を実測（Sarmah 2026、組成のみ）', sourceIds: ['sarmah-2026-assam-composition'] },
  { materialId: 'tea-assam', compoundId: 'caffeine', kind: 'composition', tier: 'measured', conditions: '32試料で 15.51–39.24 mg/g を実測（Sarmah 2026、組成のみ）', sourceIds: ['sarmah-2026-assam-composition'] },
  { materialId: 'tea-assam', compoundId: 'theanine', kind: 'composition', tier: 'measured', conditions: '32試料で 2.47–8.16 mg/g を実測（Sarmah 2026、組成のみ）', sourceIds: ['sarmah-2026-assam-composition'] },
  // 黄茶（Wei 2024、再構成＋欠落。試料は悶黄最適化条件）
  { materialId: 'tea-yellow', compoundId: 'dimethyl-sulfide', kind: 'contribution', tier: 'measured', conditions: '再構成＋欠落でキーオドラントと確認（Wei 2024）。悶黄最適化条件の試料', sourceIds: [WEI] },
  { materialId: 'tea-yellow', compoundId: 'beta-ionone', kind: 'contribution', tier: 'measured', conditions: 'OAV 884.6。添加試験で花香の主因（Wei 2024）。悶黄最適化条件の試料での確認であり、黄茶一般への一般化には限界がある', sourceIds: [WEI] },
  { materialId: 'tea-yellow', compoundId: 'beta-damascenone', kind: 'contribution', tier: 'measured', conditions: 'OAV 590.4。添加試験で甘い香りの主因（Wei 2024）。悶黄最適化条件の試料での確認であり、黄茶一般への一般化には限界がある', sourceIds: [WEI] },
  { materialId: 'tea-yellow', compoundId: 'geraniol', kind: 'contribution', tier: 'measured', conditions: '再構成＋欠落でキーオドラントと確認（Wei 2024）。悶黄最適化条件の試料での確認であり、黄茶一般への一般化には限界がある', sourceIds: [WEI] },
  { materialId: 'tea-yellow', compoundId: 'phenylacetaldehyde', kind: 'contribution', tier: 'measured', conditions: '再構成＋欠落でキーオドラントと確認（Wei 2024）。悶黄最適化条件の試料での確認であり、黄茶一般への一般化には限界がある', sourceIds: [WEI] },
  { materialId: 'tea-yellow', compoundId: 'linalool', kind: 'contribution', tier: 'measured', conditions: '再構成＋欠落でキーオドラントと確認（Wei 2024）。悶黄最適化条件の試料での確認であり、黄茶一般への一般化には限界がある', sourceIds: [WEI] },
  // 岩茶（大紅袍）（Wang 2022、再構成・欠落。原料は水仙品種）
  { materialId: 'tea-dahongpao', compoundId: 'gamma-hexalactone', kind: 'contribution', tier: 'measured', conditions: 'OAV 154（Wang 2022）。原料は水仙品種', sourceIds: [WANG22] },
  { materialId: 'tea-dahongpao', compoundId: '6-methyl-5-hepten-2-one', kind: 'contribution', tier: 'measured', conditions: '欠落試験で焙煎・カラメル香の鍵と実証（OAV 91、Wang 2022）', sourceIds: [WANG22] },
  { materialId: 'tea-dahongpao', compoundId: '2-ethyl-3-5-dimethylpyrazine', kind: 'contribution', tier: 'measured', conditions: '欠落試験で実証（OAV 19、Wang 2022）', sourceIds: [WANG22] },
  { materialId: 'tea-dahongpao', compoundId: 'furaneol', kind: 'contribution', tier: 'measured', conditions: '欠落試験で実証（OAV 13、Wang 2022）', sourceIds: [WANG22] },
  { materialId: 'tea-dahongpao', compoundId: 'guaiacol', kind: 'contribution', tier: 'measured', conditions: '新規キーオドラントとして同定（OAV 3.4、Wang 2022）。燻製・焙煎文脈に限定', sourceIds: [WANG22] },
  { materialId: 'tea-dahongpao', compoundId: 'vanillin', kind: 'contribution', tier: 'measured', conditions: '新規キーオドラントとして同定（OAV 1.8、Wang 2022）', sourceIds: [WANG22] },
  // 凍頂烏龍
  { materialId: 'tea-dongding', compoundId: 'sotolon', kind: 'contribution', tier: 'measured', conditions: '凍結乾燥茶葉の熱水抽出物での欠落試験で、焙煎様カラメル香に最も寄与（Wang 2023、pairing 記録ベース）', sourceIds: [WANG23] },
  { materialId: 'tea-dongding', compoundId: 'indole', kind: 'contribution', tier: 'measured', conditions: '烏龍茶横断の OAV 96–138（Zhu 2015、3茶共通の範囲値）', sourceIds: [ZHU] },
  { materialId: 'tea-dongding', compoundId: 'nerolidol', kind: 'contribution', tier: 'measured', conditions: '烏龍茶横断の OAV 108–184（Zhu 2015、3茶共通の範囲値）', sourceIds: [ZHU] },
  { materialId: 'tea-dongding', compoundId: '6-methyl-5-hepten-2-one', kind: 'contribution', tier: 'measured', conditions: '烏龍茶横断の OAV 34–67（Zhu 2015、3茶共通の範囲値）', sourceIds: [ZHU] },
  { materialId: 'tea-dongding', compoundId: 'linalool', kind: 'contribution', tier: 'measured', conditions: '烏龍茶横断の (R)-リナロール OAV 63–87（Zhu 2015、3茶共通の範囲値）', sourceIds: [ZHU] },
)

/** 既存ペア（links.ts）の格上げ指示。親担当が集約時に適用する。 */
export interface ExpansionTeaLinkUpgrade {
  materialId: string
  compoundId: string
  /** links.ts に既存ペアが存在するか。false の場合は新規ペアとして登録すること */
  existingPair: boolean
  fromKind?: LinkKind
  fromTier?: EvidenceTier
  toKind: LinkKind
  toTier: EvidenceTier
  /** 格上げの根拠として追加する出典 */
  addSourceIds: string[]
  /** 格上げ後の conditions（差し替え文） */
  conditions: string
  reason: string
}

export const expansionTeaLinkUpgrades: ExpansionTeaLinkUpgrade[] = [
  // 調査 §6(b) の筆頭格上げ。ただし links.ts に白牡丹×リナロール／ゲラニオールの既存ペアは
  // 存在しないため、親担当は「格上げ」ではなく新規ペア（contribution/measured、Feng 2022）と
  // して登録すること。fromTier は調査が想定した従来の扱い（一般的知見）を示す。
  {
    materialId: 'tea-white-baimudan', compoundId: 'linalool', existingPair: false,
    fromKind: 'contribution', fromTier: 'general', toKind: 'contribution', toTier: 'measured',
    addSourceIds: ['feng-2022-white-tea-sensomics'],
    conditions: '白毫銀針・白牡丹の花様・甘い香りの主寄与（標準添加法定量＋OAV＋再構成、Feng 2022）',
    reason: 'Feng 2022 の再構成を含むセンソミクスにより、白牡丹自体を対象にした寄与実証が得られたため（調査 §6(b)）。既存ペアが無いため新規登録が必要。',
  },
  {
    materialId: 'tea-white-baimudan', compoundId: 'geraniol', existingPair: false,
    fromKind: 'contribution', fromTier: 'general', toKind: 'contribution', toTier: 'measured',
    addSourceIds: ['feng-2022-white-tea-sensomics'],
    conditions: '白毫銀針・白牡丹の花様・甘い香りの主寄与（標準添加法定量＋OAV＋再構成、Feng 2022）',
    reason: '同上（Feng 2022）。既存ペアが無いため新規登録が必要。',
  },
  {
    materialId: 'tea-hojicha', compoundId: 'alkylpyrazines', existingPair: true,
    fromKind: 'detection', fromTier: 'general', toKind: 'contribution', toTier: 'measured',
    addSourceIds: ['sasaki-2017-roasted-stem-tea', TAN],
    conditions: '焙煎茎茶（棒ほうじ茶）の AEDA でピラジン類が焙煎香と高いFD（Sasaki 2017）。ほうじ茶でも個別ピラジンが高FD（Tan 2019）。個別ピラジンは別途リンクを参照',
    reason: '従来は「焙煎で生成する化合物群としての一般知見（検出）」だったが、Sasaki 2017 の AEDA によりほうじ茶（茎茶）自体での寄与根拠が得られたため。',
  },
  {
    materialId: 'tea-black-general', compoundId: 'linalool', existingPair: true,
    fromKind: 'contribution', fromTier: 'general', toKind: 'contribution', toTier: 'measured',
    addSourceIds: [SCHUH, KANG],
    conditions: 'ダージリン試料のセンソミクス（OAV＋再構成、Schuh 2006）と四大紅茶横断（Kang 2019）に基づく。根拠試料はダージリン等の特定紅茶であり、紅茶一般への適用範囲は親担当の判断に委ねる',
    reason: '調査 §6(b)：Schuh 2006・Kang 2019 で紅茶リンク自体の格上げが可能とされた。ただし根拠は特定試料のため conditions に明記した。',
  },
  {
    materialId: 'tea-black-general', compoundId: 'geraniol', existingPair: true,
    fromKind: 'contribution', fromTier: 'general', toKind: 'contribution', toTier: 'measured',
    addSourceIds: [SCHUH, 'wang-2025-sichuan-congou'],
    conditions: 'ダージリンのセンソミクスで重要性を確認（Schuh 2006）、四川工夫紅茶の再構成系で寄与1位（Wang 2025）。一方 Kang 2019 では GC-O 最強群だが OAV>1 リスト外という手法間の差異がある',
    reason: '調査 §6(b) の格上げ候補。手法間の食い違い（Kang 2019）を conditions に併記した。',
  },
  {
    materialId: 'tea-tieguanyin', compoundId: 'linalool', existingPair: true,
    fromKind: 'contribution', fromTier: 'general', toKind: 'contribution', toTier: 'measured',
    addSourceIds: [ZHU],
    conditions: '烏龍茶横断の GC-O＋OAV で (R)-リナロール OAV 63–87（Zhu 2015、鉄観音を含む3茶共通の範囲値）',
    reason: '従来は総説根拠（一般的知見）だったが、Zhu 2015 が鉄観音を含む試料で OAV を実測したため。Zheng 2022（鉄観音 OAV 50.6）は書誌タイトルの一次確認が未了のため根拠に含めていない。',
  },
]
