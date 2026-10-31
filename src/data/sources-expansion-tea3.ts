import type { Source } from '../types'

// 茶品種の素材化（第2波、round7 調査 tea-cultivars-round2.md、2026-10-31）の新規出典。
// 調査ファイルの Source レコードに基づく。著者が「要確認」だった3件は統合時に Crossref で
// 最終確認し、確定した著者名で登録した（ID も著者名ベースに改めた）：
//   anon-2023-baiye1-producing-areas → tong-2023-baiye1-producing-areas
//   anon-2021-yinghong9-huangyu-metabolomics → mei-2021-yinghong9-huangyu-metabolomics
//   Ind. Crops Prod. 2025（調査ファイルにレコードなし）→ liu-2025-yinghong9-linalool
// 台茶25号（紫韻）は、はつもみじ側のプロファイルを再設計（リナロールの両香調＝花様＋柑橘様）
//   することで署名重複を解消し、素材化した（tsao-2022-ttes-no25-breeding を登録）。
// 登録しなかったもの：li-wang-2021-dancong-five-types（香型は候補に留め素材化しなかったため）。
export const expansionTea3Sources: Source[] = [
  {
    id: 'tbrs-2023-cultivar-table', kind: 'article',
    title: '茶及飲料作物改良場育成之茶樹品種介紹',
    authors: '農業部茶及飲料作物改良場', year: 2023,
    url: 'https://www.tbrs.gov.tw:443/redirect_files.php?id=3859&file_name=fc3dAWPXcQWsBvwWGSlashGfenRYNwOWNWGSlashDgWGEqualWGEqualMzJQbXIfUB6j62OhKGm0aYHQLVWPi7YuOunr4KnCqTsn3vKmTne6JG95',
    scope: 'TBRS公的育成品種の一覧表（2023-07-25修正製表）。臺茶13號翠玉は品系2029、母本・硬枝紅心×父本・臺農80號、1938年交配、1981年命名、適製・烏龍茶・包種茶。臺茶21號紅韻は品系FKK-22、FKK-1の天然交雑後代、1953年（FKK-1命名）、2008年命名、適製・紅茶。臺茶8號はJaipuri単株選抜、1973年命名、適製・紅茶。系譜と適製性の一次確認に使える。',
    limits: '一覧表であり、香味・品質の記述は含まれない。香味の根拠には使えない。',
    verified: 'full',
  },
  {
    id: 'tags-2022-tsuiyu-evaluation', kind: 'article',
    title: '2022第二屆臺灣產銷履歷茶分類分級 TAGs評鑑報告書（清香型球形烏龍茶・臺茶13號翠玉）',
    authors: 'TAGs 臺灣茶分類分級系統', year: 2022,
    url: 'https://www.tags.org.tw/aimg/upload/files/2022報告書/優/8.pdf',
    scope: '公的な分類分級制度TAGsの評鑑報告書。品種が臺茶13號（翠玉）と明記された特定試料（茗陶苑-德發茶行、追溯號碼22080501840、2022-08-24評鑑）について「茶湯平順清甜。帶有純和的野薑花及檳榔花香，入喉後隱隱透著蔗糖與玄米香氣」と評された。公的品種解説で翠玉の品種特性とされる野薑花・檳榔花の記述子が、公的評鑑の実試料でも使われていることの確認になる。',
    limits: '単一試料の評鑑であり、品種全体の官能特性を直接示すものではない。品種解説の記述との一致をもって推測の足がかりとする範囲。',
    verified: 'full',
  },
  {
    id: 'chang-2013-taiwan-black-tea-cultivars-thesis', kind: 'original',
    title: '臺灣紅茶品種的抗氧化能力與對口腔病原菌之抑制作用',
    authors: '張凱婷', year: 2013,
    journal: '元培科技大學 食品科學研究所 修士論文',
    url: 'https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi?o=dnclcdr&s=id=%22102YUST5253003%22.&searchmode=basic',
    scope: '臺茶8號・18號・21號を対象とした成分研究。臺茶18號と21號の茶菁・綠茶は総多元酚・総フラボノイド・カテキン（EGCG・ECG）が他試料より高かった。臺茶21號が研究対象として確立した紅茶用品種であることの傍証になる。',
    limits: '抗酸化・抗菌と成分含量の研究であり、香味の根拠にはならない。学位論文（卒業学年度102年）であり査読論文とは区別する。',
    verified: 'abstract',
  },
  {
    id: 'li-2025-baiye1-white-tea', kind: 'original',
    title: 'Quality characteristics of white tea prepared from albino tea cultivars: A comprehensive study based on metabolomics and quantitative analyses',
    authors: 'Zhaoqi Li, Jing Chen, Shiyu Zhang ほか', year: 2025,
    journal: 'Food Chemistry: X 32: 103287',
    doi: '10.1016/j.fochx.2025.103287',
    url: 'https://doi.org/10.1016/j.fochx.2025.103287',
    scope: '白葉1号・黄金芽・福鼎大白茶を白茶に加工し、官能評価・定量分析・メタボロミクスで比較。白葉1号は遊離アミノ酸が高く（17.13 mg/g）、カテキン（50.58 mg/g）とカフェイン（30.09 mg/g）が低く、官能で滋味・香気とも優れた。キー芳香揮発成分12種のうちゲラニオールとベンゼンアセトアルデヒド（フェニルアセトアルデヒド）が白葉1号に固有だった。',
    limits: '試料は白茶加工のもの。白葉1号の主用途である緑茶（安吉白茶）での数値とは限らない。著者名は先頭3名までを確認し、残りは未確認。',
    verified: 'abstract',
  },
  {
    id: 'tong-2023-baiye1-producing-areas', kind: 'original',
    title: "Quality Characteristics of White Leaf Tea of 'Baiye 1' (Camellia sinensis) in Different Producing Areas",
    authors: 'Manni Tong, Xun Chen, Yan Bai, Peng Zhou, Zesheng Feng, Jianhong Lai, Kang Ni, Yuanzhi Shi', year: 2023,
    journal: 'Agronomy 13(10): 2526',
    doi: '10.3390/agronomy13102526',
    url: 'https://doi.org/10.3390/agronomy13102526',
    scope: '白葉1号の緑茶（白葉茶）93試料・3産地で32生化学成分等を測定。遊離アミノ酸・カテキン・カフェイン等に産地差があり、「含量の高いアミノ酸が香味形成に重要な役割を果たす」と整理された。白葉1号が高アミノ酸・低ポリフェノールの品種特性を持つことの裏づけ。',
    limits: '成分の実測であり、香気成分の寄与評価ではない。著者名は調査時点で未確認だったが、統合時に Crossref レコードで確認した。',
    verified: 'abstract',
  },
  {
    id: 'mei-2021-yinghong9-huangyu-metabolomics', kind: 'original',
    title: 'A Comparative Metabolomic Analysis Reveals Difference Manufacture Suitability in "Yinghong 9" and "Huangyu" Teas (Camellia sinensis)',
    authors: 'Xin Mei, Chuyuan Lin, Shihua Wan, Baoyi Chen, Hualing Wu, Lingyun Zhang', year: 2021,
    journal: 'Frontiers in Plant Science 12: 767724',
    doi: '10.3389/fpls.2021.767724',
    url: 'https://doi.org/10.3389/fpls.2021.767724',
    scope: '英紅9号とその芽変異品種「黄羽」の生葉・発酵葉のメタボローム比較。英紅9号はヘキサナール、(E)-2-ヘキセナール、酢酸3-ヘキセニル、デカナール、ゲラニオールが高く、これらが完成茶の花様・果実様の風味に関与するとされた。英紅9号紅茶は「香りが高く甘い風味が強い」と総括されている。',
    limits: '検出・含量レベルの知見であり、寄与の確定（AEDA等）ではない。著者名は調査時点で未確認だったが、統合時に Crossref レコードで確認した。',
    verified: 'abstract',
  },
  {
    id: 'liu-2025-yinghong9-linalool', kind: 'original',
    title: '(R)-Linalool is a key indicator of aroma quality levels of a distinctive black tea (Camellia sinensis var. Yinghong No. 9)',
    authors: 'Chengshun Liu, Jianlong Li, Miao Wang, Guotai Jian, Chen Zhu, Hanxiang Li, Yongxia Jia, Jinchi Tang, Lanting Zeng', year: 2025,
    journal: 'Industrial Crops and Products 225: 120506',
    doi: '10.1016/j.indcrop.2025.120506',
    url: 'https://doi.org/10.1016/j.indcrop.2025.120506',
    scope: '英紅9号紅茶の香気44成分を同定し、寄与成分7種（リナロール、ゲラニオール、trans-リナロールオキシド、ヘキサナール、ジャスモン酸メチル、フェニルアセトアルデヒド、β-イオノン）を特定。花様で甘い香りが主特性で、(R)-リナロールが中核寄与成分とされた。リナロール含量は春茶・嫩葉で高い。',
    limits: '単一論文の知見であり、季節・嫩度で含量が変動する。著者名・書誌は調査ファイルで未確認だったため、統合時に Crossref レコードで最終確認した。',
    verified: 'abstract',
  },
  {
    id: 'tsao-2022-ttes-no25-breeding', kind: 'original',
    title: '「臺茶25號」茶樹之選育',
    authors: '曹碧貴, 許飛霜, 黃正宗, 邱垂豐, 林金池, 楊美珠, 胡智益', year: 2022,
    journal: '台灣茶業研究彙報 41',
    url: 'https://www.tbrs.gov.tw/files/tres/web_structure/4497/A01_1.pdf',
    scope: '臺茶25號（紫韻）の育成論文。緬甸Burma大葉種の天然交雑後裔から選抜され、分子標誌から父本は臺茶13號と推定された。花青素含量は対照品種・臺茶18號の50倍（実測）。抄録に「具花香、適製紅茶及綠茶」と明記されている。',
    limits: '花香は育成機関による特性記述の範囲であり、香気成分の同定・寄与評価は含まれない。確認したのは抄録であり、本文の官能データは未確認。',
    verified: 'abstract',
  },
]
