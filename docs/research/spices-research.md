# スパイス文献調査 — flavor-pairing-lab 研究用データ基盤

- 調査日: 2026-10-31
- 調査方法: `browser.search` で PubMed / PMC / 学術誌ページを検索し、検索結果に表示された書誌情報（著者・年・誌名・DOI・PMID・URL）をそのまま記録した。
- ルール:
  - 数値（組成％・OAV等）は、検索で原典要旨中に直接確認できたものだけを、出典を添えて記載する。確認できない数値は書かない。
  - 「検出（GC-MS等で存在を確認）」と「官能寄与（GC-O / AEDA / OAV / 官能評価で寄与を確認）」を区別する。
  - 化合物単体の一般的香調は、食品中での寄与とは分離して §17 にまとめる。
  - 確認できなかった項目は「未確認」と明記する。
- 注意: 本ファイルは要旨レベルでの確認が中心である。本文精読による照合は未実施の項目が多い（各節に明記）。

---

## 1. ブラックペッパー（黒胡椒）

- 学名: *Piper nigrum* L.（コショウ科 Piperaceae）
- 使用部位: 果実（未熟果を乾燥したものがブラックペッパー、果皮を除いたものがホワイトペッパー）
- 主要非揮発性／呈味成分: ピペリン（アルカロイド）— 辛味（biting quality）の主因と総説で位置づけられる
- 主要揮発性成分: β-カリオフィレン、α-ピネン、β-ピネン、リモネン、サビネン、ミルセン、1,8-シネオール、リナロール 等（総説・GC-MS研究で報告）
- 香気寄与に関する知見:
  - 検出: HS-SPME-GC-MS で 52 種の揮発性成分が検出され、その研究では β-カリオフィレンが最も豊富だったと報告（単一研究の試料条件に依存する値であり、一般値として扱わないこと）。
  - 寄与: ピペリンは「検出された香気成分」ではなく呈味（辛味）成分である。香気寄与を GC-O/AEDA で同定した研究の要旨確認は **未確認**（本調査では未取得）。
  - 加熱影響: 同 GC-MS 研究で、オートクレーブ処理により酸素化化合物が増え香気が変化したと報告。
- 数値（原典要旨で確認できたもののみ）:
  - NMR 定量でピペリンがブラックペッパー 20.2 µg/mg、ホワイトペッパー 23.9 µg/mg（RSC Advances 2024 の試料）。一般的な含有率として転用しないこと。
- 出典:
  1. Srinivasan K. Black pepper and its pungent principle-piperine: a review of diverse physiological effects. *Crit Rev Food Sci Nutr*. 2007. PMID: 17987447. DOI: **未確認**（検索結果に表示なし）. URL: https://pubmed.ncbi.nlm.nih.gov:443/17987447/
  2. Takooree H, et al. A systematic review on black pepper (*Piper nigrum* L.): from folk uses to pharmacological applications. *Crit Rev Food Sci Nutr*. 2019;59(sup1):S210-S243. DOI: 10.1080/10408398.2019.1565489. PMID: 30740986. URL: https://pubmed.ncbi.nlm.nih.gov/30740986/
  3. Assessment of metabolome diversity in black and white pepper in response to autoclaving using MS- and NMR-based metabolomics. *RSC Advances*. 2024. URL: https://pubs.rsc.org/en/content/articlehtml/2024/ra/d4ra00100a （DOI は検索結果本文中に d4ra00100a として含まれるが、正式 DOI 文字列の独立確認は未実施のため転記しない）

## 2. カルダモン（グリーンカルダモン）

- 学名: *Elettaria cardamomum* (L.) Maton（ショウガ科 Zingiberaceae）。ブラックカルダモン *Amomum subulatum* とは別種であり混同しない。
- 使用部位: 果実（蒴果）および内部の種子
- 主要揮発性成分: 1,8-シネオール、α-テルピニルアセテートが二大成分。ほかにリナロール、リナリルアセテート、リモネン。
- 主要非揮発性成分: フラボノイド、カロテノイド等が総説で挙げられるが、呈味への寄与の特定は **未確認**。
- 香気寄与に関する知見:
  - 検出: GC-MS による同定が多数。組成比は抽出法・乾燥条件・品種で大きく変動する（下記数値参照）ため、単一の「標準組成」は存在しないものとして扱う。
  - 寄与: 乾燥条件研究（2022）は 1,8-シネオールと α-テルピニルアセテートが「specific aroma を担う」と記述。ただし GC-O/AEDA による寄与順位付けの要旨確認は **未確認**。
- 数値（原典要旨で確認できたもののみ、条件付き）:
  - 超臨界 CO₂ 抽出油（Marongiu et al. 2004）: α-テルピニルアセテート 42.3%、1,8-シネオール 21.4%、リナリルアセテート 8.2%、リモネン 5.6%、リナロール 5.4%。
  - 熱風乾燥試料（J Food Sci Technol 2022）: 1,8-シネオール 7.23–11.76%、α-テルピニルアセテート 61.65–68.19%。
  - → 両者は大きく異なり、組成％は試料・方法依存であることの証拠として記録する。
- 出典:
  1. Ashokkumar K, Murugan M, Dhanya MK, Warkentin TD. Botany, traditional uses, phytochemistry and biological activities of cardamom [*Elettaria cardamomum* (L.) Maton] – A critical review. *J Ethnopharmacol*. 2020;246:112244. DOI: 10.1016/j.jep.2019.112244. PMID: 31541721. URL: https://pubmed.ncbi.nlm.nih.gov/31541721/
  2. Marongiu B, et al. Comparative analysis of the oil and supercritical CO2 extract of *Elettaria cardamomum* (L.) Maton. *J Agric Food Chem*. 2004;52(20):6278-6282. DOI: 10.1021/jf034819i. PMID: 15453700. URL: https://pubmed.ncbi.nlm.nih.gov/15453700/
  3. Multivariate analysis of chemometric based aroma dynamics in small cardamom (*Elettaria cardamomum* Maton) during drying. *J Food Sci Technol*. 2022;59(12):4761-4771. DOI: 10.1007/s13197-022-05560-8. PMCID: PMC9579224. URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC9579224/

## 3. シナモン・カシア

- 学名: カシア = *Cinnamomum cassia* (L.) J.Presl（検索対象論文での表記は *Cinnamomum cassia* Presl）。セイロンシナモン = *Cinnamomum verum* / *C. zeylanicum*。両者は別種であり、成分プロファイルが異なる（2025年の判別研究で、カシアはアルデヒド類・セスキテルペン・クマリン、セイロンはモノテルペン等で特徴づけられた）。
- 使用部位: 樹皮（バーク）。葉油は組成が異なる（葉ではユージノールが主成分とする総説記述あり、下記出典2）。
- 主要揮発性成分: trans-シンナムアルデヒド（樹皮油の主成分）、α-カリオフィレン、ボルネオール、ネリリドール（葉）等
- 主要非揮発性成分: 縮合タンニン等のポリフェノール、クマリン（特にカシアで判別マーカー）。呈味への個別寄与の定量は **未確認**。
- 香気寄与に関する知見（検出と寄与の区別あり）:
  - 寄与（OAV）: *Foods* 2025 研究が GC-MS 同定に加え OAV 解析を行い、樹皮油ではシンナムアルデヒド OAV=935、α-カリオフィレン OAV=77、ボルネオール OAV=4、葉油ではシンナムアルデヒド OAV=849、ネリリドール OAV=107、α-カリオフィレン OAV=58 と報告。シンナムアルデヒドが香気形成の中心的寄与成分であることを OAV で支持する原著として使える。
  - 呈味機構: 同研究は、シンナムアルデヒドが TRPA1・TRPV1 を活性化して辛味感覚を生じると記述。
  - 官能: 同研究の官能評価で樹皮油と葉油は spicy / floral / grassy で有意差。
- 出典:
  1. Compounds of Essential Oils from Different Parts of *Cinnamomum cassia* and the Perception Mechanism of Their Characteristic Flavors. *Foods*. 2025;14(20):3570. DOI: 10.3390/foods14203570. PMID: 41154105. URL: https://pubmed.ncbi.nlm.nih.gov/41154105/
  2. Multivariate analysis of chemical markers to distinguish "Ceylon" and "Cassia" cinnamon in the Spanish market. *Food Chem X*. 2025;28:102484. DOI: 10.1016/j.fochx.2025.102484. PMID: 40491701. URL: https://pubmed.ncbi.nlm.nih.gov/40491701/
  3. Yao S, et al. Integrated transcriptomics and metabolomics analysis provides insights into aromatic volatiles formation in *Cinnamomum cassia* bark at different harvesting times. *BMC Plant Biol*. 2024;24(1):84. DOI: 10.1186/s12870-024-04754-w. PMID: 38308239. URL: https://pubmed.ncbi.nlm.nih.gov/38308239/ （最も豊富な VOC はシンナムアルデヒドで香気品質を支配、と要旨に記載）

## 4. クローブ

- 学名: *Syzygium aromaticum* (L.) Merr. & L.M.Perry（フトモモ科 Myrtaceae）。異名 *Eugenia caryophyllata*。
- 使用部位: 乾燥花蕾（つぼみ）
- 主要揮発性成分: ユージノール（精油の主成分）、ユージノールアセテート、β-カリオフィレン。フェニルプロパノイド類が精油の主体（Chaieb et al. 2007 総説）。
- 主要非揮発性成分: 没食子酸、フラボノイド等（総説で列挙）。呈味への個別寄与は **未確認**。
- 香気寄与に関する知見:
  - 検出: GC-MS/GC-FID による組成確認が多数。ユージノール含有率は試料により幅がある（下記）。
  - 寄与: ユージノール単体と精油全体の生物活性を比較した研究（2026）は、精油中のユージノール 87.3% でも精油全体の活性は純ユージノールより低く、微量成分が全体を修飾しうることを示した。これは「主成分＝全体の性質」という単純化への反証材料として重要（抗真菌活性の文脈であり、香気寄与そのものの GC-O 検証は **未確認**）。
- 数値（原典要旨で確認できたもののみ）:
  - 精油中ユージノール 87.3%（Int J Mol Sci 2026 の供試油）。
  - ユージノールは精油の 45–90% を占めうる（ACS Omega 2025 の記述）。範囲が広く、単一値を標準として使わないこと。
- 出典:
  1. Chaieb K, et al. The chemical composition and biological activity of clove essential oil, *Eugenia caryophyllata* (*Syzygium aromaticum* L. Myrtaceae): a short review. *Phytother Res*. 2007;21(6):501-506. DOI: 10.1002/ptr.2124. PMID: 17380552. URL: https://pubmed.ncbi.nlm.nih.gov/17380552/
  2. Kamatou GP, Vermaak I, Viljoen AM. Eugenol—from the remote Maluku Islands to the international market place: a review of a remarkable and versatile molecule. *Molecules*. 2012;17(6):6953-6981. DOI: 10.3390/molecules17066953. PMID: 22728369. URL: https://pubmed.ncbi.nlm.nih.gov/22728369/
  3. Bioactive properties of clove (*Syzygium aromaticum*) essential oil nanoemulsion: A comprehensive review. *Heliyon*. 2024. DOI: 10.1016/j.heliyon.2023.e22437. PMID: 38163240.（検索結果は colab.ws 経由の書誌転載で確認。原典ページの直接確認は未実施）

## 5. ナツメッグ／メース

- 学名: *Myristica fragrans* Houtt.（ニクズク科 Myristicaceae）。原産はインドネシア・モルッカ諸島（総説記載）。
- 使用部位: 種子（ナツメッグ）と種子を包む仮種皮（メース）。部位により精油組成が異なる。
- 主要揮発性成分: サビネン、α-ピネン、β-ピネン、ミルセン、リモネン等のモノテルペン炭化水素と、フェニルプロペノイド類のミリスチシン、ユージノール、メチルユージノール、エレミシン、サフロール。
- 主要非揮発性成分: 脂肪油（トリミリスチン等）。本調査での原典確認は **未確認**（精油中心の文献のみ確認）。
- 香気寄与に関する知見:
  - 検出: 部位別 GC-MS 研究（2022）で葉・メース・仁・種子の組成差が報告された。例として当該試料ではメースでサビネン 38.37% が最大成分。
  - 寄与: GC-O/AEDA による香気寄与同定の要旨確認は **未確認**。ミリスチシンは「香気寄与成分」ではなく、主に安全性・薬理の文脈で論じられる成分として区別すること。
  - 安全性注記: EFSA 評価（2023）では種子精油中のミリスチシン（最大 12%）、サフロール（2.30%）等が安全性評価対象として記載されている。食品利用データ設計では安全性フィールドに転用可能。
- 出典:
  1. Nutmeg (*Myristica fragrans* Houtt.) essential oil: A review on its composition, biological, and pharmacological activities. *Phytother Res*. 2022;36(7):2839-2851. DOI: 10.1002/ptr.7491. PMID: 35567294. PMCID: PMC9541156. URL: https://pubmed.ncbi.nlm.nih.gov/35567294/
  2. Compositional variation in the leaf, mace, kernel, and seed essential oil of nutmeg (*Myristica fragrans* Houtt.) from the Western Ghats, India. *Nat Prod Res*. 2022;36(1):432-435. DOI: 10.1080/14786419.2020.1771713. PMID: 32515616. URL: https://pubmed.ncbi.nlm.nih.gov/32515616/
  3. Du SS, et al. Chemical constituents and activities of the essential oil from *Myristica fragrans* against cigarette beetle *Lasioderma serricorne*. *Chem Biodivers*. 2014;11(9):1449-1456. DOI: 10.1002/cbdv.201400137. PMID: 25238085. URL: https://pubmed.ncbi.nlm.nih.gov/25238085/ （当該種子油試料: ユージノール 19.9%、メチルイソユージノール 16.8%、メチルユージノール 16.7%、サビネン 11.8% — 試料依存値）

## 6. ジンジャー（ショウガ）

- 学名: *Zingiber officinale* Roscoe（ショウガ科 Zingiberaceae）
- 使用部位: 根茎
- 主要非揮発性／呈味成分: ジンゲロール類（[6]-ジンゲロールが最主要）が生鮮根茎の辛味主成分。乾燥・加熱で脱水生成物ショウガオール類が主となる。
- 主要揮発性成分: ジンギベレン等のセスキテルペンが精油の代表成分として総説で挙げられる。個別試料の GC-MS 全組成の要旨確認は一部のみ（Foods 2022 は抽出法別の味・香気プロファイルを扱う）。
- 加熱変化（本課題の重点）に関する知見:
  - 総説（Semwal et al. 2015）: ジンゲロール類は熱不安定で、脱水反応により対応するショウガオール類を生成する。ショウガオールは乾燥ショウガの特徴的辛味を担う。
  - 原著（Dugasani 系の引用を含む J Agric Food Chem 2009 系研究）: ショウガオールは貯蔵・熱処理中のジンゲロールの脱水生成物であり、生鮮では微量、乾燥品ではジンゲロールと拮抗する比率になりうることが記述されている。
  - 乾燥法研究（Molecules 2018）: 熱風乾燥の温度上昇（120/150/180°C 条件）で 6-/8-/10-ジンゲロールが減少し、対応するショウガオールが増加した。具体的な変換率の数値は要旨にないため記載しない。
  - 抽出条件研究（2012）: 乾燥温度と抽出温度を上げるほど 6-ショウガオール含量が増え、条件により約7倍差が生じたと要旨に記載（当該実験条件内での相対比較）。
- 香気寄与に関する知見: 辛味（呈味・三叉神経感覚）については上記のとおり原典が明確。揮発性香気の GC-O 寄与同定は **未確認**。
- 出典:
  1. Semwal RB, Semwal DK, Combrinck S, Viljoen AM. Gingerols and shogaols: Important nutraceutical principles from ginger. *Phytochemistry*. 2015;117:554-568. DOI: 10.1016/j.phytochem.2015.07.012. PMID: 26228533. URL: https://pubmed.ncbi.nlm.nih.gov/26228533/
  2. Nam DG, Kim M, Choe JS, Choi AJ. Effects of High-Pressure, Hydrothermal, and Enzyme-Assisted Treatment on the Taste and Flavor Profile of Water-Soluble Ginger (*Zingiber officinale*) Extract. *Foods*. 2022;11(4):508. DOI: 10.3390/foods11040508. PMID: 35205985. URL: https://pubmed.ncbi.nlm.nih.gov/35205985/
  3. Formation of 6-, 8- and 10-Shogaol in Ginger through Application of Different Drying Methods. *Molecules*. 2018;23(7):1646. URL: https://www.mdpi.com/1420-3049/23/7/1646 （DOI は URL 末尾から読み取れるが、検索結果に DOI 文字列として独立表示されなかったため DOI 欄は未確認とする）

## 7. ターメリック（ウコン）

- 学名: *Curcuma longa* L.（ショウガ科 Zingiberaceae）
- 使用部位: 根茎
- 主要非揮発性成分: クルクミノイド（クルクミン、デメトキシクルクミン、ビスデメトキシクルクミン）。クルクミンは黄色色素であり、香気成分ではない。
- 主要揮発性成分: ターメロン類（ar-ターメロン、α-ターメロン、β-ターメロン）、ジンギベレン、カーロン等のセスキテルペン。総説（Yeung et al. 2019）は「ターメリックの香りはセスキテルペン群に基づく」と明記。
- 香気寄与に関する知見:
  - 検出と役割分担は明確に分離できる: 色・非揮発性機能成分 = クルクミノイド、香り = 揮発性セスキテルペン。この分離はデータ設計上必須。
  - GC-O/AEDA による個別寄与順位の要旨確認は **未確認**。
- 数値（原典で確認できたもののみ）: クルクミン含量は産地によりターメリック中 2–5%（Yeung et al. 2019 総説の記述）。精製・抽出物の値と混同しないこと。
- 出典:
  1. Yeung AWK, et al. Curcumin: Total-Scale Analysis of the Scientific Literature. *Molecules*. 2019;24(7):1393. DOI: 10.3390/molecules24071393. PMCID: PMC6480685. URL: https://pmc.ncbi.nlm.nih.gov:443/articles/PMC6480685/
  2. Roth GN, et al. Novel bioactivities of *Curcuma longa* constituents. *J Nat Prod*. 1998;61(4):542-545. DOI: 10.1021/np970459f. PMID: 9584408. URL: https://pubmed.ncbi.nlm.nih.gov/9584408/ （揮発油画分から ar-ターメロンを単離した原著）

## 8. クミン

- 学名: *Cuminum cyminum* L.（セリ科 Apiaceae）
- 使用部位: 果実（いわゆるクミンシード）
- 主要揮発性成分: クミンアルデヒド（クミナール）が主成分。ほかに γ-テルピネン、β-ピネン、p-シメン。
- 主要非揮発性成分: ペトロセリン酸という特異な脂肪酸が種子に豊富（Bettaieb et al. 2011）。呈味への寄与は **未確認**。
- 香気寄与に関する知見:
  - 検出: GC-MS でクミンアルデヒドが最豊富成分として繰り返し報告される。組成は産地でケモタイプが異なる（チュニジア産は γ-テルピネン型、インド産はクミンアルデヒド/γ-テルピネン型、Bettaieb et al. 2011）。
  - 寄与: クミンアルデヒド単離成分の酵素阻害活性（Lee 2005）等、単体活性の原著はあるが、GC-O による「クミン香気への寄与」検証の要旨確認は **未確認**。「主成分であること」と「香気寄与が最大であること」は同一ではない点に注意。
- 数値（原典要旨で確認できたもののみ）:
  - Wei et al. 2015 の供試精油では 26 成分中クミンアルデヒドが 48.773% で最豊富（当該試料値）。
  - タイ産試料（2019）ではクミンアルデヒド 27.10%、β-ピネン 25.04%、γ-テルピネン 15.68%（当該試料値）。試料間で大きく異なる。
- 出典:
  1. Wei J, et al. Anti-Inflammatory Effects of Cumin Essential Oil by Blocking JNK, ERK, and NF-κB Signaling Pathways in LPS-Stimulated RAW 264.7 Cells. *Evid Based Complement Alternat Med*. 2015;2015:474509. DOI: 10.1155/2015/474509. PMID: 26425131. URL: https://pubmed.ncbi.nlm.nih.gov/26425131/
  2. Bettaieb I, et al. Essential oils and fatty acids composition of Tunisian and Indian cumin (*Cuminum cyminum* L.) seeds: a comparative study. *J Sci Food Agric*. 2011;91(11):2100-2107. DOI: 10.1002/jsfa.4513. PMID: 21681765. URL: https://pubmed.ncbi.nlm.nih.gov/21681765
  3. Lee HS. Cuminaldehyde: Aldose Reductase and alpha-Glucosidase Inhibitor Derived from *Cuminum cyminum* L. Seeds. *J Agric Food Chem*. 2005;53(7):2446-2450. DOI: 10.1021/jf048451g. PMID: 15796577. URL: https://pubmed.ncbi.nlm.nih.gov/15796577/

## 9. コリアンダー種子

- 学名: *Coriandrum sativum* L.（セリ科 Apiaceae）
- 使用部位: 乾燥果実（いわゆる種子）。葉（シラントロ）とは成分が全く異なる: 葉は不飽和アルデヒド類が特徴、種子はリナロール中心。この部位差はデータ設計上必須の区別。
- 主要揮発性成分: リナロールが種子油の主成分。ほかに γ-テルピネン、デカナール、ゲラニルアセテート（2025 総説要旨）。
- 主要非揮発性成分: フラボノイド、フェノール化合物、脂肪酸、トコフェロール等（総説）。呈味への個別寄与は **未確認**。
- 香気寄与に関する知見:
  - 検出: 種子油がリナロール主体であることは総説で一貫。ただし本調査で確認した総説要旨には組成％の明記がなかったため、％数値は記載しない（未確認）。
  - 寄与: GC-O/AEDA による寄与検証の要旨確認は **未確認**。Mandal & Mandal 2015（化学と生物活性の総説）が二次資料として広く引用されるが、本調査では原典ページを直接開いていないため書誌の独立確認は未実施として扱う。
- 出典:
  1. From Flavor to Medicine: A Review Unveiling Phytochemistry and Potential Applications of *Coriandrum sativum*. 2025. DOI: 10.2174/0118715257381840250801063853. PMID: 40849763. URL: https://pubmed.ncbi.nlm.nih.gov/40849763/ （誌名は検索結果に明示されなかったため未確認。著者名も未確認）
  2. Sahib NG, et al. Coriander (*Coriandrum sativum* L.): a potential source of high-value components for functional foods and nutraceuticals — a review. *Phytother Res*. 2013;27(10):1439-1456.（書誌は他サイトの引用リスト経由で確認したもので、PubMed 原典ページの直接確認は未実施。DOI 未確認）

## 10. フェンネル

- 学名: *Foeniculum vulgare* Mill.（セリ科 Apiaceae）
- 使用部位: 果実（いわゆるフェンネルシード）、および地上部
- 主要揮発性成分: trans-アネトールが代表成分。ただし部位・試料差が大きい（下記注意）。
- 香気寄与に関する知見（重要な注意）:
  - PubMed 収載の原著（葡萄牙産 *F. vulgare* 精油研究）では、乾燥地上部の精油は trans-アネトール 31–36%、α-ピネン 14–20%、リモネン 11–13% が主成分だった一方、果実油ではメチルチャビコール（エストラゴール）が 79–88% で支配的だったと報告された。すなわち「フェンネル＝アネトール主体」は部位と試料に依存し、無条件に一般化できない。
  - アネトール総説（Phytochemistry 2026 他）は、アネトールがフェンネルを含む複数植物精油の主要成分であり香味料として重要と位置づける。
  - GC-O による寄与同定は **未確認**。
- 出典:
  1. Foeniculum vulgare essential oils: chemical composition, antioxidant and antimicrobial activities. PubMed PMID は検索結果 URL からは読み取れず未確認。URL: https://pubmed.ncbi.nlm.nih.gov/20334152/ （誌名・著者・DOI は未確認。本文概要は検索結果で確認）
  2. Shahat AA, et al. Chemical composition, antimicrobial and antioxidant activities of essential oils from organically cultivated fennel cultivars. *Molecules*. 2011;16(2):1366-1377. DOI: 10.3390/molecules16021366.（書誌は PMC 総説内の引用リスト経由で確認。原典ページ直接確認は未実施）
  3. More than just flavour and fragrance — the chemistry and pharmacological potential of anethole. *Phytochemistry*. 2026;242:114708. DOI: 10.1016/j.phytochem.2025.114708. PMID: 41106792. URL: https://pubmed.ncbi.nlm.nih.gov/41106792/ （アネトール一般の総説。フェンネル固有の定量ではない）

## 11. スターアニス（八角）

- 学名: *Illicium verum* Hook.f.（マツブサ科 Schisandraceae）
- 使用部位: 果実（星形の集合果）
- 主要揮発性成分: trans-アネトールが精油の主成分。
- 主要非揮発性成分: シキミ酸（オセルタミビルの前駆体として知られる。香味成分ではないため区別すること）、フラボノイド、リグナン等。
- 香気寄与に関する知見:
  - 検出: 総説（Patra et al. 2020）が化学成分を統合。trans-アネトールが精油を支配することは複数総説で一致。
  - 寄与: GC-O/AEDA による寄与検証の要旨確認は **未確認**。アネトールの甘いアニス様香味は化合物単体の知見として §17 に分離する。
  - 安全性注記: 有毒な日本産シキミ（*Illicium anisatum*）との誤同定リスクは総説・解説で繰り返し注意される。アプリの安全性フィールド候補（本調査では一次資料での直接確認は未実施のため、実装時は原典確認が必要）。
- 出典:
  1. Patra JK, Das G, Bose S, Banerjee S, et al. Star anise (*Illicium verum*): Chemical compounds, antiviral properties, and clinical relevance. *Phytother Res*. 2020;34(6):1248-1267. DOI: 10.1002/ptr.6614. PMID: 31997473. URL: https://pubmed.ncbi.nlm.nih.gov/31997473/

## 12. サフラン

- 学名: *Crocus sativus* L.（アヤメ科 Iridaceae）
- 使用部位: 花の柱頭（乾燥品）
- 主要揮発性成分: サフラナール（最も豊富な揮発成分）。ピクロクロシンの脱グリコシル化により生成する。
- 主要非揮発性成分: クロシン（色素、クロセチンの配糖体）、ピクロクロシン（苦味成分）。
- 香気・呈味寄与に関する知見（分離が明確な好例）:
  - 香り = サフラナール、苦味 = ピクロクロシン、色 = クロシン、と総説で機能分担が明記される（Pharmacogn Rev 2010; Siddiqui et al. 2018）。
  - 官能との関連: 産地比較研究（J Sci Food Agric 2024）は HS-SPME-GC-MS で 13 揮発成分を同定し、サフラナールと α-イソホロンが二大香気成分であり、サフラナール等の濃度差が官能特性差と関連しうると報告。ただし AEDA/OAV による寄与確定は **未確認**。
- 数値（原典で確認できたもののみ）:
  - サフラナールは揮発成分の約 30–70%、乾燥物中 0.001–0.006%（Heliyon 2021 系統的総説の記述）。生成は乾燥・時間経過に依存するため条件なしに使わないこと。
- 出典:
  1. Srivastava R, Ahmed H, Dixit RK, Dharamveer, Saraf SA. *Crocus sativus* L.: A comprehensive review. *Pharmacogn Rev*. 2010;4(8):200-208. DOI: 10.4103/0973-7847.70919. PMCID: PMC3249922. PMID: 22228962. URL: https://pubmed.ncbi.nlm.nih.gov/22228962/
  2. The role of Safranal and saffron stigma extracts in oxidative stress, diseases and photoaging: A systematic review. *Heliyon*. 2021;7(2):e06117. DOI: 10.1016/j.heliyon.2021.e06117. PMCID: PMC7881230. PMID: 33615006. URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC7881230/
  3. Comparative study on nutraceutical and sensorial characteristics of saffron (*Crocus sativus* L.) cultivated in Iran, Spain, and Türkiye. *J Sci Food Agric*. 2024;104(12):7580-7591. DOI: 10.1002/jsfa.13594. PMID: 38775283. URL: https://pubmed.ncbi.nlm.nih.gov/38775283/

## 13. バニラ

- 学名: *Vanilla planifolia* Jacks. ex Andrews（ラン科 Orchidaceae）。ほかに *V. tahitensis*、*V. pompona*。
- 使用部位: 果実（鞘＝バニラビーンズ）をキュアリング（発酵・乾燥）したもの
- 主要揮発性／香味成分: バニリン（4-ヒドロキシ-3-メトキシベンズアルデヒド）が特徴香の主因。ただし鞘には 200 以上の揮発成分、60 以上の香気活性成分が報告され、バニリン単独では天然バニラの複雑さは再現できないと原著が明記。
- 前駆体: 生鞘ではバニリンは主にグルコバニリン（配糖体）として存在し、キュアリング中の β-グルコシダーゼによる加水分解で遊離する（J Food Sci Technol 2018）。
- 香気寄与に関する知見:
  - 寄与: バニリンが「mainly due」とされるのは総説・原著で一致。副成分として 4-ヒドロキシベンズアルデヒド、バニリン酸、バニリルアルコール等が比較的豊富（Molecules 2025）。
  - 数値: キュアリング済み鞘のバニリンは 1–2% 程度とする記述が J Food Sci Technol 2018 要旨にある（前駆体ベースの潜在量とは別）。抽出条件で変動するため条件付きで扱う。
- 出典:
  1. Authentic Aroma and Compound-Specific Isotope Ratios (δ13C, δ2H) Profiles of Vanilla Pods (*V. planifolia* and *V. tahitensis*). *Molecules*. 2025;30(4):825. DOI: 10.3390/molecules30040825. PMCID: PMC11858005. URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC11858005/
  2. Effect of endogenous and exogenous enzymatic treatment of green vanilla beans on extraction of vanillin and main aromatic compounds. *J Food Sci Technol*. 2018;55(6):2059-2067. DOI: 10.1007/s13197-018-3120-3. PMCID: PMC5976589. PMID: 29892106. URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC5976589/
  3. Havkin-Frenkel D, Belanger FC (eds.) 系の総説 "Vanilla—its science of cultivation, curing, chemistry, and nutraceutical properties" *Crit Rev Food Sci Nutr*. 2013.（書誌は二次サイトの引用リスト経由で確認。巻号・DOI は未確認）

## 14. 山椒（サンショウ）

- 学名: *Zanthoxylum piperitum* (L.) DC.（検索対象論文の表記は *Xanthoxylum piperitum* DC.。属名の綴りは文献により Zanthoxylum / Xanthoxylum の揺れがある）
- 使用部位: 果実（果皮）、若葉（木の芽）、花
- 主要呈味成分（非揮発性アルキルアミド）: ヒドロキシ-α-サンショールが果実の主サンショール。α-サンショールは若葉・花で主成分（Sugai et al. 2005 定量研究）。
- 主要揮発性成分: リモネン、β-フェランドレン、シトロネラール、ゲラニルアセテート等が柑橘様香気成分として一般に挙げられるが、本調査で査読原著の要旨から直接確認できたものはないため **未確認**（商業サイトの記述は出典として採用しない）。
- 官能寄与に関する知見（原著による官能評価あり）:
  - Sugai et al. 2005（官能・TRPV1 研究、*Biosci Biotechnol Biochem* 69(10):1951-1957）: 単離した 4 種のサンショールと 2 種のヒドロキシサンショールの検出閾値と味質を官能評価。ヒドロキシ-α-サンショールでは「tingling（しびれ）と numbing（麻痺感）」が知覚された。サンショール類のスコビル値は 80,000–110,000 の範囲、ヒドロキシ体はその 3–5 倍低い値（当該官能試験の結果）。
  - 同 2005 定量研究（69(10):1958-1962、DOI: 10.1271/bbb.69.1958）: 辛味の程度はサンショール量と正の相関。果実の主成分ヒドロキシ-α-サンショールの閾値は α-サンショールより高い。すなわち「量が多い＝そのまま最も辛い」ではない。
  - 機構: ヒドロキシ-α-サンショールは TRPV1/TRPA1 の弱い作動薬でもあるが、官能の質は TRPV1 活性だけでは説明できないと同論文が結論。花椒の研究（Hagura et al. 2013、§15）では急速適応型機械受容線維の関与が示されている（山椒への直接適用は属内共通機構としての推定であり、山椒自体での実証とは区別すること）。
- 出典:
  1. Sugai E, Morimitsu Y, Kubota K. Quantitative analysis of sanshool compounds in Japanese pepper (*Xanthoxylum piperitum* DC.) and their pungent characteristics. *Biosci Biotechnol Biochem*. 2005;69(10):1958-1962. DOI: 10.1271/bbb.69.1958. URL: https://agris.fao.org/search/en/providers/122535/records/65dea5677c7033e84beb3607 （AGRIS 記録経由で確認。PubMed 原典ページの直接確認は未実施）
  2. Sugai E, Morimitsu Y, Iwasaki Y, Kubota K. Pungent Qualities of Sanshool-Related Compounds Evaluated by a Sensory Test and Activation of Rat TRPV1. *Biosci Biotechnol Biochem*. 2005;69(10):1951-1957. URL: https://cir.nii.ac.jp/crid/1390282681453062272 （CiNii 経由で確認。DOI は未確認）

## 15. 花椒（ホアジャオ／四川椒）

- 学名: 主に *Zanthoxylum bungeanum* Maxim.（赤花椒）。緑花椒は *Z. schinifolium* 等とされるが、本調査で原典確認したのは *Z. bungeanum* のみ。他種の学名対応は **未確認** として実装しないこと。
- 使用部位: 乾燥果皮（種子は通常除く）
- 主要呈味成分: ヒドロキシ-α-サンショール等のアルキルアミド類（「麻」＝しびれ感の主因）
- 主要揮発性成分: リナロール、リモネン、ミルセン、1,8-シネオール、リナリルアセテート等
- 香気寄与に関する知見（GC-O/AEDA による寄与同定あり）:
  - *Food Chem* 2022（漢源産）: GC-O-MS と二次元 GC×GC-O-MS、AEDA と OAV を併用し、ミルセン、(+)-リモネン、(E)-β-オシメン、β-クベベン、ゲルマクレンD、シネオール、リナロール、リナリルアセテートを主要香気活性成分として同定。本調査で最も寄与エビデンスが強い部類である。
  - 加熱影響: Chemosens Percept 2018（DOI: 10.1007/s12078-018-9249-7）: GC-O で 1,8-シネオールとリナロールが最も強い香気活性を示し、加温（40→75°C）で 1,8-シネオール、リナロール等の相対量が増え、ミルセン、リモネンは減少したと報告（二次データベース経由の要旨確認）。
  - しびれ機構（ヒト官能）: Hagura et al. 2013 はヒドロキシ-α-サンショールによるしびれの知覚周波数が約 50 Hz で、急速適応型（RA）触覚線維の活動と対応することをヒト実験で示した。
- 出典:
  1. Characterization of key aroma-active compounds in Hanyuan *Zanthoxylum bungeanum* by GC-O-MS and switchable GC × GC-O-MS. *Food Chem*. 2022. DOI: 10.1016/j.foodchem.2022.132659. PMID: 35279498. URL: https://pubmed.ncbi.nlm.nih.gov/35279498/
  2. Hagura N, Barber H, Haggard P. Food vibrations: Asian spice sets lips trembling. *Proc R Soc B*. 2013;280:20131680. DOI: 10.1098/rspb.2013.1680. URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC5147812/ （書誌は PLoS ONE 2016 論文の引用リスト経由で確認）
  3. Seasonal changes of volatile compounds and odor evaluation of *Zanthoxylum bungeanum* 'Hanyuan' fruit during the development. *BMC Plant Biol*. 2025;26(1):65. DOI: 10.1186/s12870-025-07878-9. PMID: 41354782. URL: https://pubmed.ncbi.nlm.nih.gov/41354782/ （発育段階を通じ (+)-リモネンが相対含量最大、リナロール、ミルセン、リナリルアセテート、1,8-シネオールが高含量と要旨に記載）

## 16. 唐辛子

- 学名: *Capsicum* 属（*C. annuum*、*C. chinense*、*C. frutescens* 等、種・品種により辛味が大きく異なる。本調査の総説は主に *Capsicum annuum* 表記）
- 使用部位: 果実
- 主要呈味成分（非揮発性）: カプサイシン（8-methyl-N-vanillyl-6-nonenamide）が主辛味成分。ジヒドロカプサイシン等のカプサイシノイドが伴う。
- 主要揮発性成分: 品種依存性が高く、本調査では査読原著からの確定リストは **未確認**（香りより辛味が支配的な素材として扱う）。
- 官能・機構に関する知見:
  - カプサイシンは TRPV1（カプサイシン受容体）作動薬であり、熱感・灼熱感を生じる（Abdel-Salam 2023 総説）。サンショールの「しびれ（機械受容）」やピペリンの辛味とは受容機構が異なるため、アプリ内では感覚種別を分離すること。
  - スコビル値とカプサイシン含量の相関は症例報告等の二次記述で確認できるが、換算係数を本調査の一次確認範囲では確定していないため数値は記載しない。
- 出典:
  1. Abdel-Salam OME. Capsaicin, The Vanilloid Receptor TRPV1 Agonist in Neuroprotection: Mechanisms Involved and Significance. *Neurochem Res*. 2023;48(11):3296-3315. DOI: 10.1007/s11064-023-03983-z. PMID: 37493882. PMCID: PMC10514110. URL: https://pubmed.ncbi.nlm.nih.gov/37493882/
  2. Dludla PV, et al. Bioactive Properties, Bioavailability Profiles, and Clinical Evidence of the Potential Benefits of Black Pepper (*Piper nigrum*) and Red Pepper (*Capsicum annum* [sic]) against Diverse Metabolic Complications. *Molecules*. 2023;28(18):6569. DOI: 10.3390/molecules28186569. PMCID: PMC10534530. URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC10534530/

---

## 17. 化合物単体の一般的香調（食品中での寄与とは分離）

以下は「化合物そのものの香調」に関する一般知見であり、「その食品の香りへの寄与が証明された」ことを意味しない。寄与の主張には §1–16 の GC-O/AEDA/OAV/官能の原典が必要。

| 化合物 | 単体としての一般的香調・感覚 | 根拠の性質 |
|---|---|---|
| リナロール | 花様・柑橘様と一般に記述されるモノテルペンアルコール | 複数総説で共通する一般記述。具体食品での寄与は個別原典が必要 |
| 1,8-シネオール（ユーカリプトール） | 樟脳様・ユーカリ様の清涼感 | カルダモン／花椒の原著で「camphor-like」と記述される一般香調 |
| α-テルピニルアセテート | カルダモン精油の主成分エステル。具体的な単体香調の原典確認は未確認 | 未確認（組成上の主成分であることのみ確認済み） |
| シンナムアルデヒド | シナモン様・甘いスパイス様。TRPA1/TRPV1 活性化による辛味感覚 | Foods 2025 が受容体機構を記述 |
| ユージノール | クローブ様の甘く温かいスパイス様香気 | クローブ総説群で共通する一般記述 |
| バニリン | バニラ様の甘い香気 | バニラ原著群で共通 |
| trans-アネトール | 甘いアニス様・リコリス様 | アネトール総説（IBRO Neurosci Rep 2025 等）で「sweet anise-like flavor」と記述 |
| クミンアルデヒド | クミン様の温かいスパイス様香気と一般に記述。単体香調の官能原典は未確認 | 未確認（主成分であることのみ確認済み） |
| サフラナール | サフランの特徴香を担う揮発性テルペンアルデヒド。「iodoform or hay-like fragrance」はサフラン全体の香りの記述であり、サフラナール単体への帰属は総説により表現が異なるため断定しない | Pharmacogn Rev 2010 の記述に基づく注意 |
| ピペリン | 香気成分ではなく辛味（biting）成分。揮発性はない | Srinivasan 2007 総説 |
| カプサイシン | 香気成分ではなく TRPV1 を介する灼熱感成分。無臭の辛味原則 | Abdel-Salam 2023 総説 |
| ヒドロキシ-α-サンショール | 香気成分ではなく、しびれ（tingling）・麻痺感（numbing）を生じるアルキルアミド | Sugai et al. 2005 官能研究 |
| クルクミン | 香気成分ではなく黄色色素（非揮発性クルクミノイド） | Yeung et al. 2019 総説 |
| ジンゲロール／ショウガオール | 揮発性香気ではなく辛味成分。加熱・乾燥でジンゲロール→ショウガオールへ脱水変換 | Semwal et al. 2015 総説 |

## 18. 未確認・残課題リスト

1. ブラックペッパー: GC-O/AEDA による香気寄与成分の順位（β-カリオフィレン等の寄与度）は未確認。
2. カルダモン: GC-O/AEDA による寄与検証は未確認。α-テルピニルアセテート単体の香調原典は未確認。
3. クローブ: 香気寄与の GC-O 検証は未確認（生物活性での単体 vs 精油比較のみ確認）。
4. ナツメッグ: 非揮発性画分（脂肪油等）の原典確認は未実施。GC-O 寄与は未確認。
5. クミン／コリアンダー: GC-O による寄与検証は未確認。コリアンダー種子油のリナロール組成％は、本調査で確認した総説要旨に数値がなく未確認（数値を書かない）。
6. フェンネル: 書誌の一部（誌名・DOI・PMID）が未確認の出典を含む。部位により主成分がエストラゴールに替わる報告があり、産地・部位別の追加原典が必要。
7. 山椒: 揮発性香気成分リストの査読原著による直接確認は未実施。
8. 花椒: 緑花椒（*Z. schinifolium* 等）の学名・成分対応は未確認。*Z. bungeanum* 以外を実装データに含める場合は追加調査が必要。
9. 唐辛子: 揮発性成分と品種別カプサイシノイド組成の原著確認は未実施。
10. 全般: 本調査は要旨（abstract）レベルの確認が中心。本文精読による数値・条件の照合は未実施であり、アプリ実装前に重要項目は本文確認を行うこと。
11. ナツメッグの初回検索はツールエラーで失敗し、再検索で補完した。検索できなかったクエリ自体による欠落が残る可能性がある。

## 19. 出典サマリー（確認できた件数）

- 対象カテゴリ: 15（ブラックペッパー、カルダモン、シナモン・カシア、クローブ、ナツメッグ、ジンジャー、ターメリック、クミン、コリアンダー種子、フェンネル、スターアニス、サフラン、バニラ、山椒、花椒、唐辛子 — フェンネルとスターアニスを分けたため実質16項目）
- 各項目で DOI または PMID を伴う査読論文・公的評価（EFSA）を最低1件確認できた項目: 16/16
- GC-O / AEDA / OAV のいずれかで「寄与」を直接扱う原典を確認できた項目: シナモン・カシア（OAV）、花椒（GC-O/AEDA/OAV）の2項目。山椒・唐辛子・ジンジャーは官能／受容体レベルでの呈味寄与原典を確認。その他は「検出（組成）」レベルの確認にとどまる。
