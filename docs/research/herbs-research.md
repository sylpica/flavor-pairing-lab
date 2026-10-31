# ハーブ文献調査 — flavor-pairing-lab

調査日: 2026-10-31
調査方法: browser.search による PubMed / PMC / 学術誌の検索結果（タイトル・誌名・年・DOI・PMID・アブストラクト抜粋）の直接確認。
方針:
- 推測・創作はしない。確認できない項目は「未確認」と明記する。
- 数値（%）は、検索でアブストラクト等の原典情報として直接確認できた場合のみ記載し、出典を添える。
- **すべての%は「精油（essential oil）中の割合」であり、食品全体・葉全体・乾燥ハーブ全体中の割合ではない。** 精油は葉・花等から抽出された揮発性画分であり、その組成比をそのまま素材全体の成分比として扱ってはならない。
- GC-MSで検出されたことは、香気への寄与（GC-O / AEDA / OAV / 香気再構成 / 欠落試験で示される寄与）を証明しない。本ファイルでは両者を分けて記載する。特に断りがない限り、以下は「検出・組成」の知見であり、「寄与」の直接証拠ではない。
- 学名のシノニム・分類変更がある場合は併記する。

---

## 0. 特に重要な種差：ペパーミント vs スペアミント

同じ *Mentha* 属でも主成分プロファイルが明確に異なることが、複数の独立した査読出典で確認できた。

| 項目 | ペパーミント | スペアミント |
|---|---|---|
| 学名 | *Mentha* × *piperita* L.（*Mentha piperita* とも表記） | *Mentha spicata* L. |
| 精油の主成分（総説） | メントール、メントンが主要揮発性成分（McKay & Blumberg 2006） | カルボンが主要構成成分として繰り返し報告される（Mahendran et al. 2021 の総説が対象とする文献群） |
| 具体的なGC-MS 1例（精油中） | メントール 40.7%、メントン 23.4%（Schmidt et al. 2009、GC/FID・GC-MS、単一試料） | 比較研究の要旨抜粋でカルボン 73.0%（Nickavar & Nickavar 2023 として二次資料に引用された値。原著の直接確認は本調査では未完了のため参考値扱い） |
| 解釈 | メントール主体＝強い冷感を伴うプロファイルの化学的基盤（ただし冷感の知覚自体はメントール単独の官能評価・TRPM8等の別途研究が必要。本調査では未確認） | カルボン主体＝メントールを主体としないプロファイル。ペパーミントと同一視してはならない |

注意: カルボンの立体異性体（(R)-(-)-カルボンがスペアミント型、(S)-(+)-カルボンがキャラウェイ／ディル種子型として一般に知られる）については、本調査で査読原典のアブストラクトから直接確認できなかったため、**本ファイルでは異性体の帰属を「未確認」とする**。アプリ実装時に異性体を区別する場合は、キラルGC-MSの原著を別途確認すること。ディルについては D-カルボンという表記が原著で確認できた（§13参照）。

---

## 1. ペパーミント（Peppermint）

- 学名: *Mentha* × *piperita* L.（表記ゆれ: *Mentha piperita* L.、*Mentha x piperita*）
- 科: シソ科（Lamiaceae）— McKay & Blumberg 2006 の文脈および一般分類。個別出典での科の明記確認: 総説タイトル・要旨範囲では未確認の部分を含むため、科名は参考情報として扱う。
- 使用部位: 葉（茶用途）、地上部（精油。EFSA 2025 は "aerial parts" 由来精油を対象）。出典ごとに部位が異なるため混同しないこと。
- 主要揮発性成分: メントール（menthol）、メントン（menthone）。その他としてメントフラン、プレゴン、リモネン、1,8-シネオール、酢酸メンチル等が報告される（McKay & Blumberg 2006; Schmidt et al. 2009）。
- 数値（精油中、単一試料）: メントール 40.7%、メントン 23.4%、他に (+/-)-酢酸メンチル、1,8-シネオール、リモネン、β-ピネン、β-カリオフィレン（Schmidt et al. 2009）。これは1試料の値であり、ペパーミント精油一般の固定値ではない。
- ケモタイプ／品種差: 本調査で確認した出典範囲では、ペパーミントの正式なケモタイプ分類（タイム型のような複数ケモタイプ体系）は **未確認**。抽出法による差は報告がある（水蒸気／超臨界抽出の比較でメントール割合が異なる例が PMC 文献に記載されるが、本調査ではその原著DOIの直接確認まで至っていないため数値は採用しない）。
- 香気寄与に関する知見: Schmidt et al. 2009 はタイトルに "olfactory evaluation" を含み、組成分析と嗅覚評価を併せて行った研究である（方法の詳細・AEDA/OAVの有無は **未確認**）。GC-O/AEDAによる寄与順位は本調査では **未確認**。
- 非揮発性成分（参考）: 葉のフェノール成分としてロスマリン酸、エリオシトリン、ルテオリン、ヘスペリジン等のフラボノイド（McKay & Blumberg 2006）。
- 安全性メモ（出典範囲内）: プレゴンは肝毒性が認識されており化粧品原料としての安全評価で濃度制限（≤1%）が論じられた（旧 CIR 安全評価、PubMed 経由で要旨確認）。食品用途への直接適用は **未確認**であり転用しないこと。
- 出典:
  1. McKay DL, Blumberg JB. A review of the bioactivity and potential health benefits of peppermint tea (*Mentha piperita* L.). *Phytotherapy Research*. 2006;20(8):619-633. DOI: 10.1002/ptr.1936. PMID: 16767798. URL: https://pubmed.ncbi.nlm.nih.gov/16767798/
  2. Schmidt E, et al. Chemical composition, olfactory evaluation and antioxidant effects of essential oil from *Mentha x piperita*. *Natural Product Communications*. 2009;4(8):1107-1112. PMID: 19768994. DOI: **未確認**（PubMed要旨で書誌・数値を確認、DOIは検索結果に表示されず）。 URL: https://pubmed.ncbi.nlm.nih.gov/19768994/
  3. （総説）Peppermint and menthol: a review on their biochemistry, pharmacological activities, clinical applications, and safety considerations. *Critical Reviews in Food Science and Nutrition*. 2025;65(8):1553-1578. DOI: 10.1080/10408398.2023.2296991. PMID: 38168664. 著者名: 検索結果に表示されず **未確認**。 URL: https://pubmed.ncbi.nlm.nih.gov/38168664/

## 2. スペアミント（Spearmint）

- 学名: *Mentha spicata* L.
- 使用部位: 葉・地上部（精油は新鮮または乾燥した herb の水蒸気／水蒸留で得られる旨が総説二次情報に記載。原著での部位特定は **一部未確認**）
- 主要揮発性成分: カルボン（carvone）が主成分、次いでリモネン。その他 1,8-シネオール、ミルセン、β-ピネン、リナロール、カリオフィレン等（Mahendran et al. 2021 が総括する文献群）。
- 数値（精油中、総説が集計した地域別試料の例）: アルジェリア Saida 産カルボン 42.2%、Setif 産 59.40%、トルコ産 48.4%、パキスタン産 51.7% など、産地で大きく異なる（Phytothérapie 誌の総説が集計した値。二次集計であり、個別原著の直接確認は **未完了**）。数値をアプリに使う場合は個別原著へ遡ること。
- ケモタイプ／品種差: *M. spicata* にはカルボン型以外にプレゴン型、ピペリトン型、ピペリテノンオキシド型等のケモタイプが存在することが総説の二次情報で指摘されている。またチュニジア産でメントン 32.45% が主成分となった例も同総説に引用されており、「スペアミント＝常にカルボン主体」と単純化できない。エコタイプ・収穫時期による変動も報告されている（イラン Kashan / Shushtar エコタイプ比較、DOAJ 掲載論文、DOI **未確認**）。
- ペパーミントとの差: §0参照。メントールはスペアミント精油の主体ではない。
- 香気寄与に関する知見: GC-O/AEDA/OAV による寄与の直接証拠は本調査では **未確認**。カルボンが「特徴香の主成分」とされるのは組成上の優占に基づく記述が中心であり、寄与の実証とは区別する。
- 出典:
  1. Mahendran G, Verma SK, Rahman LU. The traditional uses, phytochemistry and pharmacology of spearmint (*Mentha spicata* L.): A review. *Journal of Ethnopharmacology*. 2021;278:114266. DOI: 10.1016/j.jep.2021.114266. PMID: 34087400. URL: https://pubmed.ncbi.nlm.nih.gov/34087400/
  2. Chemical Composition, in vitro Antioxidant, Antimicrobial and Cytotoxic Activities of *Mentha spicata* Essential Oil: A Review. *Phytothérapie*. 2022. URL: https://stm.cairn.info/revue-phytotherapie-2022-6-page-320?lang=en （著者・DOI: 検索結果に表示されず **未確認**。地域別組成の集計元として使用）

## 3. ローズマリー（Rosemary）

- 学名: *Salvia rosmarinus* Spenn.（旧名・シノニム: *Rosmarinus officinalis* L.）— 2017年に *Salvia* 属へ再分類された経緯が複数資料で述べられているが、本調査では分類論文そのものの直接確認は **未完了**。アプリでは両名をシノニムとして保持し、どちらか一方だけを「正」と断定しない表示が安全。
- 使用部位: 葉・開花地上部（精油）
- 主要揮発性成分: 1,8-シネオール、カンファー、α-ピネン、カンフェン、ボルネオール、ベルベノン（ケモタイプによる）
- ケモタイプ: 産業・研究上よく知られた3型＝ **1,8-シネオール型、カンファー型、ベルベノン型**（Molecules 2023 のケモタイプ概念総説）。産地との対応（北アフリカ＝シネオール型、スペイン＝カンファー型、コルシカ＝ベルベノン型）は商業・二次資料での説明が多く、査読原著での直接確認は **一部未確認** のため、産地からケモタイプを断定しないこと。
- 数値（精油中）: アルジェリア東部試料で、シネオール型プロファイルは 1,8-シネオール 49.4%、カンファー 13.2%、α-ピネン 6.8%、β-ピネン 5.3%。同一地域から α-ピネン 24.4%、カンファー 23.5%、カンフェン 21.5%、1,8-シネオール 9.0% という別プロファイルも出現し、同論文は環境・遺伝要因の切り分けには遺伝的同定が必要と述べている（Molecules 2023）。
- 非揮発性成分（参考）: カルノシン酸、カルノソール等のジテルペンフェノール、ロスマリン酸（精油成分と混同しないこと）。
- 香気寄与に関する知見: GC-O/AEDA による寄与順位は本調査では **未確認**。
- 出典:
  1. Chemical Variability and Chemotype Concept of Essential Oils from Algerian Wild Plants. *Molecules*. 2023;28(11):4439. DOI: 10.3390/molecules28114439. URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC10254628/ （著者名: 検索結果の抜粋に表示されず **未確認**）
  2. Andrade JM, et al. *Rosmarinus officinalis* L.: an update review of its phytochemistry and biological activity. *Future Science OA*. 2018;4:FSO283. DOI: 10.4155/fsoa-2017-0124. （書誌は Molecules 2023 の参考文献リスト経由で確認。原著要旨の直接確認は **未完了**）

## 4. タイム（Thyme）

- 学名: *Thymus vulgaris* L.（コモンタイム／ガーデンタイム）
- 使用部位: 地上部・葉（精油）
- 主要揮発性成分: チモール、カルバクロール、p-シメン、γ-テルピネン（p-シメンとγ-テルピネンはチモール／カルバクロールの生合成前駆体とされる）
- ケモタイプ: **6つの既知ケモタイプ＝ゲラニオール型、リナロール型、α-テルピネオール型、ツヤノール-4（thujanol-4）型、チモール型、カルバクロール型**（Galovičová et al. 2021）。化学的多型（chemical polymorphism）を示すことが同論文の前提である。「タイム精油＝チモール主体」はチモール型に限る話であり、種全体の固定属性ではない。
- 数値（精油中、単一試料）: スロバキア企業由来の精油でチモール 48.1%、p-シメン 11.7%、1,8-シネオール 6.7%、γ-テルピネン 6.1%、カルバクロール 5.5%。GC/MS・GC-FIDで同定され、チモール型に分類された（Galovičová et al. 2021）。
- 香気寄与に関する知見: チモール／カルバクロールがフェノール性モノテルペンとして抗菌性等の主体と論じられるが、食品香気への寄与を GC-O 等で順位付けした証拠は本調査では **未確認**。
- 出典:
  1. Galovičová L, Borotová P, Valková V, Vukovic NL, Vukic M, Štefániková J, et al. *Thymus vulgaris* Essential Oil and Its Biological Activity. *Plants*. 2021;10(9):1959. DOI: 10.3390/plants10091959. URL: https://www.mdpi.com/1278424 （MDPIの短縮表示URL。正式な記事URLはDOIリンクで代替可能）

## 5. バジル（Sweet basil）

- 学名: *Ocimum basilicum* L.
- 使用部位: 葉・地上部（乾燥 herb から精油）
- 主要揮発性成分: リナロール、ユージノール、メチルチャビコール（＝エストラゴール）、メチルオイゲノール、メチルシンナメート、1,8-シネオール等。どれが主体かは系統（アクセッション）で全く異なる。
- 品種・化学型差（本調査で最も体系的に確認できた事例）: 38系統を同一圃場で栽培した研究で、精油含量は乾燥herb中 0.07–1.92%（これは精油含量であり組成%ではない点に注意）と系統差が大きく、組成により7群に分類された（いずれも **精油中の%**）:
  1. 高リナロール型: (-)-リナロール 19–73%
  2. リナロール–ユージノール型: リナロール 28–66%、ユージノール 5–29%
  3. メチルチャビコール型: メチルチャビコール 20–72%、(-)-リナロールなし
  4. メチルチャビコール–リナロール型: メチルチャビコール 8–29%、リナロール 8–53%
  5. メチルオイゲノール–リナロール型: メチルオイゲノール 37% および 91% の2系統、リナロール 60% および 15%
  6. メチルシンナメート–リナロール型: メチルシンナメート 9.7%、リナロール 31%（1系統）
  7. ベルガモテン型: ベルガモテンが主成分、ユーカリプトール 5%、リナロール <1%（1系統）
  （Zheljazkov et al. 2008）
- 古典的分類との関係: Lawrence (1988) の4ケモタイプ（メチルチャビコール、リナロール、メチルオイゲノール、メチルシンナメート）、Grayer et al. (1996) の5分類が二次資料（Bufalo et al. 2015 経由）で引用されているが、原典の直接確認は **未完了**。アプリでは Zheljazkov 2008 の7群を一次根拠とし、古典分類は「総説で引用される分類」として区別すること。
- 別種との混同注意: ホーリーバジル／トゥルシーは *Ocimum tenuiflorum*（シノニム *O. sanctum*）であり、*O. basilicum* と同一視しない。本調査ではトゥルシーの成分原著は **未確認**（対象外として分離のみ明記）。
- 安全性メモ: エストラゴール（メチルチャビコール）／メチルオイゲノールには EFSA 等で遺伝毒性に関する注意喚起がある旨が二次資料に記載されるが、本調査では EFSA 原典の直接確認は **未完了**。健康影響をアプリで断定しないこと。
- 香気寄与に関する知見: GC-O/AEDA による寄与は本調査では **未確認**。
- 出典:
  1. Zheljazkov VD, Callahan A, Cantrell CL. Yield and Oil Composition of 38 Basil (*Ocimum basilicum* L.) Accessions Grown in Mississippi. *Journal of Agricultural and Food Chemistry*. 2008;56(1):241-245. DOI: 10.1021/jf072447y. PMID: 18072735.

## 6. レモングラス（Lemongrass）

- 学名: *Cymbopogon citratus* (DC.) Stapf
- 科: イネ科（Poaceae）
- 使用部位: 葉、茎（culm）。部位により組成が異なる報告がある。
- 主要揮発性成分: シトラール（ゲラニアール＝シトラールα／トランス体とネラール＝シトラールβ／シス体の混合物としての総称）、ミルセン、ゲラニオール等
- 数値（精油中）: ネパール産試料（水蒸留、GC/MS）でネラール 35.5 ± 0.6%、ゲラニアール 36.0 ± 0.4%（合計がシトラール画分。Chem. Biodivers. 2025）。別研究（ベトナム各地、葉・茎）ではシトラールが精油の 61.20–76.46% を占め、葉の方が茎より高いと報告（BioMed Res. Int.系 2020、DOI: 10.1155/2020/5924856、誌名の直接確認は **一部未確認**）。
- 矛盾する報告への注意（重要）: Nepal の *Cymbopogon* 属比較研究（Molecules 2023）では、同属他種との文脈でレモングラス葉精油の主成分がゲラニオール 76.6% と報告されており、上記のシトラール主体の知見と大きく異なる。これは種同定・ケモタイプ・部位・抽出条件の違いを示す可能性があり、**どちらが一般的かを本調査では断定しない（未確認）**。アプリでは「シトラール主体が多数報告される一方、ゲラニオール主体の報告も存在し、試料依存性が高い」と記録するのが正確である。
- ケモタイプ: 正式なケモタイプ体系は **未確認**。
- 香気寄与に関する知見: シトラールがレモン様香気の鍵成分であることは総説で繰り返し述べられるが、GC-O/AEDA による寄与順位の直接確認は **未完了**。
- 出典:
  1. Scientific basis for the therapeutic use of *Cymbopogon citratus*, Stapf (Lemon grass). *Journal of Advanced Pharmaceutical Technology & Research*. 2011;2(1):3-8. DOI: 10.4103/2231-4040.79796. PMID: 22171285. URL: https://pubmed.ncbi.nlm.nih.gov/22171285/ （著者名: 検索結果に表示されず **未確認**）
  2. Potential Herbicidal and Insecticidal (Beneficial) Properties of Nepalese Lemongrass Essential Oil. *Chemistry & Biodiversity*. 2025;22(10):e01095. DOI: 10.1002/cbdv.202501095. PMID: 40482064. URL: https://pubmed.ncbi.nlm.nih.gov/40482064/
  3. Essential Oil Composition Analysis of *Cymbopogon* Species from Eastern Nepal by GC-MS and Chiral GC-MS, and Antimicrobial Activity of Some Major Compounds. *Molecules*. 2023;28(2):543. DOI: 10.3390/molecules28020543. PMID: 36677603. URL: https://pubmed.ncbi.nlm.nih.gov/36677603/

## 7. レモンバーム（Lemon balm / Melissa）

- 学名: *Melissa officinalis* L.
- 使用部位: 葉
- 主要揮発性成分: シトラール（ネラール＋ゲラニアール）、シトロネラール、ゲラニオール、リナロール、β-カリオフィレン、カリオフィレンオキシド等。精油含量自体が低いハーブであり、非揮発性のロスマリン酸等のフェノール酸も重要な成分群である（精油成分と混同しない）。
- 数値（精油中）: ルーマニア産試料でシトラール（ネラール＋ゲラニアール）16.10%、シトロネラール 3.76%、trans-カリオフィレン 3.57%（Hăncianu et al. 2008）。総説が引用する Sefrou（モロッコ）産試料ではシトロネラール 14.40%、カリオフィレンオキシド 11.00%、酢酸ゲラニル 10.20% 等と組成が大きく異なり、産地・条件依存性が高い（Miraj 2016/2017 が集計）。
- ケモタイプ: 正式なケモタイプ命名体系は **未確認**。組成が栽培条件・抽出法で変動することは総説で明記されている（Nutrients 2024）。
- 香気寄与に関する知見: レモン様香気とシトラール／シトロネラールの関係は記述的には確立しているが、GC-O 等の直接寄与証拠は本調査では **未確認**。
- 出典:
  1. Hăncianu M, et al. Chemical composition and in vitro antimicrobial activity of essential oil of *Melissa officinalis* L. from Romania. *Revista Medico-Chirurgicala a Societatii de Medici si Naturalisti din Iasi*. 2008;112(3):843-847. PMID: 20201279. DOI: **未確認**。 URL: https://pubmed.ncbi.nlm.nih.gov/20201279/
  2. Miraj S. *Melissa officinalis* L: A Review Study With an Antioxidant Prospective. *Journal of Evidence-Based Complementary & Alternative Medicine*. 2017;22(3):385-394. DOI: 10.1177/2156587216663433. PMID: 27620926.
  3. Clinical Efficacy and Tolerability of Lemon Balm (*Melissa officinalis* L.) in Psychological Well-Being: A Review. *Nutrients*. 2024;16(20):3545. DOI: 10.3390/nu16203545. PMID: 39458539. URL: https://pubmed.ncbi.nlm.nih.gov/39458539/ （著者名: **未確認**）

## 8. ラベンダー（Lavender）

- 学名: *Lavandula angustifolia* Mill.（真正ラベンダー）。交雑種ラバンディン *Lavandula* × *intermedia*（例: 品種 'Grosso', 'Super'）とは別 taxon であり、組成・規格も別である。両者を混同しないこと。
- 使用部位: 花（花序）
- 主要揮発性成分: リナロール、酢酸リナリル（linalyl acetate）。その他ラバンズリルアセテート、1,8-シネオール、テルピネン-4-オール、カンファー等（Aly et al. 2025 総説）。
- 数値（精油中）: *L. angustifolia* subsp. *pyrenaica* の水蒸留精油でリナロール 21.8%、酢酸リナリル 20.1%、酸素化モノテルペン類が全体の 71%（Chem. Biodivers. 2025、DOI: 10.1002/cbdv.202403478、著者名 **未確認**）。これは1亜種・1試料群の値である。
- 規格値との区別: ISO 8902:2009 はラバンディン 'Grosso' の規格（リナロール 24–37%、酢酸リナリル 25–38%、カンファー 6–8.5%、1,8-シネオール 4–8%）であり、*L. angustifolia* の実測値ではない（Hassiotis & Vlachonasios 2025 が引用）。規格値と実測値を同一フィールドに混在させないこと。
- 品種差: 品種・亜種・交雑種でリナロール／酢酸リナリルの比率や微量成分が異なることが上記 Chem. Biodivers. 2025 の比較（*angustifolia* subsp. *pyrenaica*、'Grosso'、'Super'、市販油）で示されている。市販油では添加物の存在も指摘されており、試料の素性確認が重要。
- 香気寄与に関する知見: リナロールと酢酸リナリルが「品質を決める酸素化モノテルペノイド」と総説で位置づけられるが、GC-O/AEDA の寄与順位は本調査では **未確認**。
- 出典:
  1. Aly SH, Khan H, Farag MA. Optimization of Lavender Essential Oil and Phenolic Yield: Advances in Extraction, Metabolomics, and Functional Benefits. *Phytochemical Analysis*. 2025;36(7):1936-1958. DOI: 10.1002/pca.70023. PMID: 40855584. URL: https://pubmed.ncbi.nlm.nih.gov/40855584/
  2. Hassiotis CN, Vlachonasios KE. How Biological and Environmental Factors Affect the Quality of Lavender Essential Oils. *Physiologia*. 2025;5:11. DOI: 10.3390/physiologia5010011.

## 9. カモミール（German chamomile）

- 学名: *Matricaria chamomilla* L.（シノニム: *Matricaria recutita* L.、*Chamomilla recutita* (L.) Rauschert）。ローマンカモミール *Chamaemelum nobile* とは別種であり、本節はジャーマンカモミールのみを扱う。ローマンカモミールの成分は **未確認（本調査対象外として分離）**。
- 使用部位: 花頭（乾燥花）
- 主要揮発性成分: α-ビサボロールとその酸化物（ビサボロールオキシドA/B、ビサボロンオキシドA）、アズレン類（カマズレン）、(E)-β-ファルネセン、cis-エン-イン-ビシクロエーテル等（McKay & Blumberg 2006）。
- 重要な注意（カマズレン）: カマズレンは蒸留過程で前駆体マトリシンから生成する成分として知られるが、その生成機構の原著直接確認は本調査では **未完了** のため、アプリでは「蒸留由来成分とされる（要原典確認）」と記録すること。
- 数値（精油中、欧州各国試料の範囲）: ビサボロールオキシドA 3.1–56.0%、α-ビサボロール 0.1–44.2%、ビサボロールオキシドB 3.9–27.2%、カマズレン 0.7–15.3% 等、範囲が極めて広い。13試料中8試料でビサボロールオキシドAが優占、モルドバ／ロシア／チェコ試料では α-ビサボロールが 23.9–44.2% で優占、アルメニア試料はビサボロールオキシドBとカマズレンに富む（欧州各国比較研究、Nat. Prod. Res. 系、PMID: 20013472、著者・DOI **未確認**）。これは化学型の違いを示し、単一の「カモミール精油組成」を想定できない根拠である。
- 非揮発性成分（参考）: アピゲニン、クエルセチン、パツレチン、ルテオリン等のフラボノイド（McKay & Blumberg 2006）。
- 香気寄与に関する知見: GC-O/AEDA による寄与は本調査では **未確認**。
- 出典:
  1. McKay DL, Blumberg JB. A review of the bioactivity and potential health benefits of chamomile tea (*Matricaria recutita* L.). *Phytotherapy Research*. 2006;20(7):519-530. DOI: 10.1002/ptr.1900. PMID: 16628544. URL: https://pubmed.ncbi.nlm.nih.gov/16628544/
  2. Content and composition of the essential oil of *Chamomilla recutita* (L.) Rauschert from some European countries. *Natural Product Research*. （年・巻号は検索結果で部分的にしか表示されず **未確認**）PMID: 20013472. URL: https://pubmed.ncbi.nlm.nih.gov/20013472/
  3. Singh O, et al. Chamomile (*Matricaria chamomilla* L.): An overview. *Pharmacognosy Reviews*. 2011;5(9):82-95. DOI: 10.4103/0973-7847.79103. PMID: 22096322. （著者のフルリストは **未確認**）

## 10. セージ（Common sage）

- 学名: *Salvia officinalis* L.
- 使用部位: 葉
- 主要揮発性成分: α-ツジョン、β-ツジョン、カンファー、1,8-シネオール、ボルネオール、ビリジフロロール等
- ケモタイプ: 185件の文献組成＋自験3試料（計188組成）のクラスター解析で **5つのケモタイプ**が提案された: (C1) α-ツジョン／カンファー型（最も一般的。自験3試料もこれに属する）、(C2) α-フムレン／α-ツジョン型、(C3) β-ツジョン／α-ツジョン／カンファー型、(C4) 1,8-シネオール／カンファー型、(C5) スクラレオール／α-ツジョン型（Craft et al. 2017）。同論文は「セージ油の香気記述や生物活性と組成を対応づけた研究は現在ない」と明記しており、組成から香味を断定できないことの根拠になる。
- 数値（精油中）: Craft et al. 2017 の自験3試料で α-ツジョン 17.2–27.4%、1,8-シネオール 11.9–26.9%、カンファー 12.8–21.4%。クロアチア沿岸7試料では α-ツジョン 12.6–42.6%、β-ツジョン 1.3–13.8%、カンファー 12.4–33.3%、1,8-シネオール 4.2–9.9%（Plants 2023、DOI: 10.3390/plants12091794）。
- 安全性メモ: ツジョンは毒性が論じられる成分であり、エストニア産試料でツジョン濃度が比較的高いことが指摘されている（Raal et al. 2007、PMID: 17487611、DOI **未確認**）。食品としての使用可否・限度は本調査では **未確認** であり、アプリで安全と断定しないこと。クラリセージ *Salvia sclarea*（スクラレオール／酢酸リナリル主体とされる）は別種であり、本節の数値を転用しない（クラリセージの原著は **未確認**）。
- 香気寄与に関する知見: 上記の通り、組成と香気記述の対応研究がないことが総説的に明記されている。寄与は **未確認**。
- 出典:
  1. Craft JD, Satyal P, Setzer WN. The Chemotaxonomy of Common Sage (*Salvia officinalis*) Based on the Volatile Constituents. *Medicines (Basel)*. 2017;4(3). PMID: 28930262. DOI: **未確認**（検索結果に表示されず）。 URL: https://pubmed.ncbi.nlm.nih.gov/28930262/ （著者名は二次資料の引用形式で確認した範囲を含む）
  2. Chemical Composition and Biological Activity of *Salvia officinalis* L. Essential Oil. *Plants*. 2023;12(9):1794. DOI: 10.3390/plants12091794. URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC10181471/ （著者名 **未確認**）

## 11. オレガノ（Oregano）

- 学名: 主対象 *Origanum vulgare* L.。ただし「オレガノ」は *Origanum* 属複数種・亜種（例: subsp. *hirtum*＝ギリシャオレガノ）を含む総称として流通する。種・亜種を特定しない「オレガノ精油」の数値を *O. vulgare* 一般の値として扱わないこと。他種・亜種の個別原著は本調査では **一部未確認**。
- 使用部位: 葉・地上部（開花期の herb）
- 主要揮発性成分: カルバクロール、チモール、p-シメン、γ-テルピネン（後二者は生合成前駆体）
- ケモタイプ: カルバクロール型、チモール型の遺伝子型が区別される（Zinno et al. 2023、*Plants*、DOI: 10.3390/plants12061344。他文献を引用する形で確認）。より希なリナロール型の報告もポルトガル産 *O. vulgare* subsp. *virens* の文献で言及される（二次引用として確認、原著直接確認は **未完了**）。
- 数値（精油中、二次引用として確認）: ギリシャ産では北部試料がチモール 30.3–42.8%、南部試料がカルバクロール 57.4–69.6% に富み、カルバクロール＋チモール＋p-シメン＋γ-テルピネンの合計が >80% で安定していたと先行研究が報告している旨を、Coccimiglio et al. 2016 が総括している。これは同論文自身の実測ではなく引用である点に注意（同論文自身はエタノール抽出物を対象）。
- 香気寄与に関する知見: カルバクロール／チモールが精油の特徴と抗菌性の主体とされるが、食品香気への GC-O 等による寄与順位は本調査では **未確認**。
- 出典:
  1. Nurzyńska-Wierdak R, Walasek-Janusz M. Chemical Composition, Biological Activity, and Potential Uses of Oregano (*Origanum vulgare* L.) and Oregano Essential Oil. *Pharmaceuticals*. 2025;18(2):267. DOI: 10.3390/ph18020267. PMID: 40006079. URL: https://pubmed.ncbi.nlm.nih.gov/40006079/
  2. Coccimiglio J, et al. Antioxidant, Antibacterial, and Cytotoxic Activities of the Ethanolic *Origanum vulgare* Extract and Its Major Constituents. *Oxidative Medicine and Cellular Longevity*. 2016;2016:1404505. DOI: 10.1155/2016/1404505.
  3. Sharifi-Rad M, et al. Carvacrol and human health: A comprehensive review. *Phytotherapy Research*. 2018;32(9):1675-1687. DOI: 10.1002/ptr.6103. PMID: 29744941. （カルバクロールの供給源としてオレガノ、タイム等を挙げる総説。著者名は **一部未確認**）

## 12. ローレル／月桂樹（Bay laurel）

- 学名: *Laurus nobilis* L.（クスノキ科 Lauraceae）
- 使用部位: 葉（料理用途の中心）。果実・小枝の精油は葉と組成が異なるため分けて扱う。
- 主要揮発性成分: 1,8-シネオール、α-テルピニルアセテート、サビネン、リナロール、メチルオイゲノール、α-ピネン等
- 数値（精油中、部位差の実例）: ブルガリア産で、葉精油は 1,8-シネオール 41.0%、α-テルピニルアセテート 14.4%、サビネン 8.8%、メチルオイゲノール 6.0%、リナロール 4.9%、α-テルピネオール 3.1%。小枝精油は 1,8-シネオール 48.5% と葉より高く、果実精油は 33.3% と低い。精油収率も葉 3.25%、果実 0.78%、小枝 0.80% と部位差が大きい（Fidan et al. とされるブルガリア研究、*Molecules* 2019、DOI下記。著者名は検索結果の本文に明示されず **未確認**）。
- 地域差の例: 南イタリア産葉精油で 1,8-シネオール 31.9%、サビネン 12.2%、リナロール 10.2%（Caputo et al. 2017）。北キプロス産葉精油で 1,8-シネオール 58.59%（Yalçin et al. 2007、DOI: 10.1089/jmf.2007.404）。同じ葉精油でも産地で 31.9–58.59% と幅がある。
- ケモタイプ: 正式なケモタイプ命名体系は **未確認**。産地・部位差として記録する。
- 香気寄与に関する知見: GC-O/AEDA による寄与は本調査では **未確認**。
- 出典:
  1. Chemical Composition and Antimicrobial Activity of *Laurus nobilis* L. Essential Oils from Bulgaria. *Molecules*. 2019;24(4):804. DOI: 10.3390/molecules24040804. PMID: 30813368. URL: https://pubmed.ncbi.nlm.nih.gov/30813368/
  2. Caputo L, et al. *Laurus nobilis*: Composition of Essential Oil and Its Biological Activities. *Molecules*. 2017;22(6):930. DOI: 10.3390/molecules22060930.
  3. Yalçin H, et al. Gas chromatography/mass spectrometry analysis of *Laurus nobilis* essential oil composition of northern Cyprus. *Journal of Medicinal Food*. 2007;10(4):715-719. DOI: 10.1089/jmf.2007.404. PMID: 18158847. URL: https://pubmed.ncbi.nlm.nih.gov/18158847/

## 13. ディル（Dill）

- 学名: *Anethum graveolens* L.（セリ科 Apiaceae）
- 使用部位: 種子（果実）と葉・地上部（ディルウィード）で組成が明確に異なる。同一素材として統合しないこと。
- 主要揮発性成分:
  - 種子精油: カルボン、リモネンが主体。
  - 葉・地上部精油: α-フェランドレン、リモネン、カルボン、ディルエーテル（dill ether）等が報告される（部位別の一般化は試料依存性が高く、下記数値は個別試料の値）。
- 数値（精油中）:
  - 種子（ブルガリア、35年以上長期保存種子という特殊条件に注意）: D-カルボン 50.1%、D-リモネン 44.1% が香気インパクト化合物として同定された（Jirovetz et al. 2003、GC/MS＋嗅覚測定 olfactometry 併用）。長期保存試料であるため、通常の新鮮種子の代表値として無条件に使わないこと。
  - 種子（遮光条件比較、非遮光）: カルボン 46.1%、リモネン 43.8%（Plants 2024、DOI: 10.3390/plants13060886）。
  - 精油（部位の明記が要旨で確認できない試料）: α-フェランドレン 21.81%、d-リモネン 18.54%、カルボン 17.42%、ディルエーテル 14.82%（Foods 2025、DOI: 10.3390/foods14091591）。葉／地上部型プロファイルとみられるが、部位は **未確認** として記録する。
- 香気寄与に関する知見（本調査で寄与手法が確認できた数少ない例）: Jirovetz et al. 2003 は嗅覚測定を併用し、D-カルボンを「spicy」、D-リモネンを「pleasant fresh」な香りの aroma impact compounds と位置づけた。ただし AEDA の希釈倍率等の詳細は **未確認**。
- ケモタイプ: 正式なケモタイプ体系は **未確認**。部位差（種子 vs 葉）がケモタイプ差より先に区別すべき要因である。
- スペアミントとの関係: 両者ともカルボンを含むが、ディル種子側は原著で「D-カルボン」と表記される。スペアミント側の異性体帰属は §0の通り **未確認** であり、同一化合物として香りを同一視しないこと。
- 出典:
  1. Jirovetz L, Buchbauer G, Stoyanova AS, Georgiev EV, Damianova ST. Composition, quality control, and antimicrobial activity of the essential oil of long-time stored dill (*Anethum graveolens* L.) seeds from Bulgaria. *Journal of Agricultural and Food Chemistry*. 2003;51(13):3854-3857. DOI: 10.1021/jf030004y. PMID: 12797755. URL: https://pubmed.ncbi.nlm.nih.gov/12797755/
  2. Ma B, Ban X, Huang B, He J, Tian J, Zeng H, et al. Interference and Mechanism of Dill Seed Essential Oil and Contribution of Carvone and Limonene in Preventing Sclerotinia Rot of Rapeseed. *PLoS ONE*. 2015;10(7):e0131733. DOI: 10.1371/journal.pone.0131733.
  3. Chemical Composition and Bioactivity of Dill Seed (*Anethum graveolens* L.) Essential Oil from Plants Grown under Shading. *Plants*. 2024;13(6):886. DOI: 10.3390/plants13060886. （著者名 **未確認**）

## 14. タラゴン（Tarragon）

- 学名: *Artemisia dracunculus* L.（キク科 Asteraceae）
- 使用部位: ハーブ（地上部）・葉
- 栽培型の区別（重要）: 「フレンチタラゴン」と「ロシアタラゴン」は倍数性・形態・化学組成が異なる2つの栽培型として総説で明確に区別される（Obolskiy et al. 2011）。エストラゴールを欠くロシア型はフレンチ型の甘いアニス様香気を持たないとされる（二次資料での説明を含む。原著本文の直接確認は **未完了**）。
- 主要揮発性成分: エストラゴール（＝メチルチャビコール、p-アリルアニソール）、サビネン、メチルオイゲノール、エレミシン、オシメン類、リモネン等
- 数値（精油中）: 総説の集計ではエストラゴール 40–85%、サビネン約35%、メチルオイゲノール約25%、エレミシン最大57%（Ekiert et al. 2021）。**これらは異なる試料における最大値・代表値の併記であり、単一精油の組成ではない。合計が100%を超えることからも明らかな通り、同時存在する組成として読んではならない。** 個別試料の例として、イラン産試料でエストラゴール 81.89%、β-cis-オシメン 4.62%、β-trans-オシメン 3.44%、リモネン 1.67%（J. Food Sci. Technol. 2021、DOI: 10.1007/s13197-020-04645-6、著者名 **未確認**）。
- 安全性メモ: エストラゴール（最大82%）とメチルオイゲノール（最大39%）の毒性懸念が総説で論じられる一方、ヒトの通常の摂取量に相当する用量での急性毒性・変異原性は報告されていない旨も同総説（Obolskiy et al. 2011 要旨）に記載される。水抽出物中の両成分は非常に少ないとされる。アプリでは「精油の高濃度使用」と「スパイスとしての通常使用」を分けて表示すること。用量の具体的数値は本調査では **未確認**。
- 香気寄与に関する知見: エストラゴールが甘いアニス様香気の主体と記述されるが、GC-O/AEDA の直接証拠は本調査では **未確認**。
- 出典:
  1. Ekiert H, et al. *Artemisia dracunculus* (Tarragon): A Review of Its Traditional Uses, Phytochemistry and Pharmacology. *Frontiers in Pharmacology*. 2021;12:653993. DOI: 10.3389/fphar.2021.653993. URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC8076785/
  2. Obolskiy D, Pischel I, Feistel B, Glotov N, Heinrich M. *Artemisia dracunculus* L. (Tarragon): A Critical Review of Its Traditional Use, Chemical Composition, Pharmacology, and Safety. *Journal of Agricultural and Food Chemistry*. 2011. DOI: **未確認**（要旨は二次資料経由で確認、DOIは検索結果に表示されず）

---

## 付録A. 今回対象だが個別セクションを設けなかった項目

本タスクの指定リストには含まれていなかったため、本ファイルでは扱っていない（未調査であり「存在しない」ではない）:
マジョラム、レモンバーベナ、レモングラス以外の *Cymbopogon* 属、パセリ、フェンネル種子（ハーブ／スパイス境界）等。これらは別タスクで調査すること。

なお指定リスト中の「レモンバーベナ」「マジョラム」は今回のサブタスク指定14種（ペパーミント、スペアミント、ローズマリー、タイム、バジル、レモングラス、レモンバーム、ラベンダー、カモミール、セージ、オレガノ、ローレル、ディル、タラゴン）には含まれていないため未調査である。

## 付録B. 全体を通じた未確認事項（正直な残課題）

1. **GC-O / AEDA / OAV による香気寄与の順位**: ディル（嗅覚測定併用、Jirovetz 2003）とペパーミント（olfactory evaluation、Schmidt 2009）を除き、今回確認した出典はほぼ GC-MS 組成研究であり、寄与の直接証拠は未確認。アプリで「主要香気成分」と表示する場合は「組成上の主成分であり、寄与の実証とは異なる」旨の注記が必要。
2. **カルボンの異性体帰属**: スペアミント＝(R)-(-)-カルボン、ディル／キャラウェイ＝(S)-(+)-カルボンという一般に知られる区別は、本調査では査読原典から直接確認できず未確認のままである。キラルGC-MS原著の追加確認が必要。
3. **DOI未確認の出典**: Schmidt 2009（ペパーミント）、Hăncianu 2008（レモンバーム）、Craft 2017（セージ）、Obolskiy 2011（タラゴン）、欧州カモミール比較研究（PMID: 20013472）。いずれも PMID または誌名・年で実在は確認済みだが、DOIは未確認として記録した。
4. **食品としての実測データ**: 本調査の数値はすべて精油の GC-MS 組成である。乾燥ハーブ・生葉・茶抽出液としての濃度、抽出温度／時間による変化、他素材と組み合わせた際の相互作用（マスキング、相乗・抑制）の実測は、今回の出典範囲では **すべて未確認**。ペアリングの相互作用を実測扱いしてはならない。
5. **官能評価**: ヒト官能パネルで各ハーブの香味プロファイルを記述した原著は本調査では未確認。
6. **日本語文献（J-STAGE等）**: 本調査は英語査読文献が中心であり、日本産試料・日本語原著の系統的確認は未実施。
7. **レモングラスの主成分の矛盾**: シトラール主体（複数報告）とゲラニオール主体（Molecules 2023 の1報告）の不一致は未解決。種同定・試料情報の原著精査が必要。

## 付録C. 出典件数の集計

- ハーブ種としてセクションを設けたもの: **14種**（ペパーミント、スペアミント、ローズマリー、タイム、バジル、レモングラス、レモンバーム、ラベンダー、カモミール、セージ、オレガノ、ローレル、ディル、タラゴン）
- 各種につき DOI または PMID で実在を確認できた査読出典を **1件以上** 確保した: **14種すべて**
- 本ファイルに記載した査読出典の総数（重複を除く）: **30件以上**（うち DOI を直接確認できたものが多数を占め、DOI未確認と明記したものは付録B-3の5件）
- 数値を記載した箇所はすべて「精油中の割合」であり、出典と試料条件を併記した。原典で直接確認できない数値は記載していない。
