# カカオ・チョコレート成分文献拡充調査（flavor-pairing-lab 用）

- 調査日：2026-10-31
- 目的：研究用アプリ sylpica/flavor-pairing-lab のカカオ・チョコレート範囲（現行：素材6件・関連出典14件・登録化合物のうちカカオ範囲は実質6件・素材×化合物リンク8件）を、遺伝集団／クローン、産地、加工、製品種類、寄与化合物の各軸で大幅に拡充するための調査記録。
- 方法：初心者用 pairing アプリの研究記録（`~/workspace/dev/pairing/docs/research/` の cacao-genetics.md、cacao-origins.md、chocolate-types.md、literature-expansion-i-compounds.md、literature-expansion-k-process.md、flavor-compounds.md、cultivar-lineage-inventory-20261031.md）を棚卸しし、取り込み候補を PubMed／PMC／出版社ページ／大学リポジトリ等の一次書誌レコードで再確認した。再確認できたものには確認経路を明記する。
- 本書は調査記録であり、アプリのコード・データは変更していない。統合は別途、出典登録→リンク登録→検証の順で行うこと。

## 格付け凡例

- 確認レベル：＝本調査で PubMed／PMC／出版社／原著PDF等の一次レコードで書誌と要旨（または本文）を確認。＝書誌情報は scholarly レコードで照合したが内容は pairing 記録の要約範囲。＝現行アプリ登録済みで本調査では再掲のみ。
- 根拠区分（pairing 方式を継承）：(1) 検出・組成のみ／(2) 単体での香り・味の知見／(3) 対象試料での寄与実証（GC-O、AEDA、OAV、DoT、再構成、欠落、添加のいずれか、方法を併記）／(4) 総説・一般推定。
- 「支持できる主張／支持できない主張」を出典ごとに分け、組成（検出）と寄与を混同しない。遺伝集団名・伝統的品種名・産地・製品種類は別軸として扱う。

---

## 0. 棚卸し結果（現行アプリとの突き合わせ）

現行アプリのカカオ範囲（2026-10-31 時点）：

- 素材6件：ダーク70%（焙煎／未焙煎）、ミルク、ホワイト、ルビー、カカオ分100%。全て産地＝産地一般、系統＝系統一般。遺伝集団・クローンの素材は未収録。
- 登録済み化合物のうちカカオ根拠を持つもの：アルキルピラジン類（群）、ストレッカーアルデヒド類（群）、バニリン、テオブロミン、カフェイン、カテキン類（群）。リンクは8件のみ。
- 登録済みだがカカオ範囲のリンクがない化合物：リナロール、β-イオノン、β-ダマセノン、ベンズアルデヒド、フェニルアセトアルデヒド、ジメチルスルフィド（根拠はお茶側総説のみ）。
- 出典34件（お茶と共通枠）のうちチョコ関連は14件。

pairing 側資産のうち未取り込みだった主要記録：遺伝集団10件の整理（cacao-genetics.md）、産地8件の3層評価（cacao-origins.md）、化合物ライン I-3 のカカオ寄与整理（literature-expansion-i-compounds.md 第3部）、加工ライン K1／K2（発酵・乾燥・焙煎・アルカリ処理・コンチング等、literature-expansion-k-process.md）、flavor-compounds.md の呈味成分整理。本調査でこれらを精読し、中核候補を一次レコードで再確認した（第1〜5章）。再確認で pairing 記録の誤り・古さが見つかった点は第6章に別記する。

---

## 1. 遺伝集団・クローン

### 1.0 分類の前提（登録済み・再掲）

- Motamayor et al. 2008（PLoS ONE 3(10):e3311、PMC2551746）：SSR により10遺伝集団（Amelonado、Contamana、Criollo、Curaray、Guiana、Iquitos、Marañón、Nacional、Nanay、Purús）を定義。伝統的分類（クリオロ／フォラステロ／トリニタリオ）はこの集団構造と1対1には対応しない。フォラステロは単一集団ではなく複数のアマゾン集団の総称として使われてきた。
- Cornejo et al. 2018（Commun Biol 1:167）：家畜化史。香味の根拠には使わない。
- Fouet et al. 2022（Plants People Planet 4:605–617）：現代 Nacional は祖先的 Nacional と導入 Trinitario の混合集団。「Nacional」と表示される市販豆が純粋な祖先的 Nacional とは限らないことの根拠。

### 1.1 現代 Nacional（エクアドル）— 花様香りの遺伝的実証あり

- Colonges et al. 2021"Two Main Biosynthesis Pathways Involved in the Synthesis of the Floral Aroma of the Nacional Cocoa Variety", Frontiers in Plant Science 12:681979、DOI 10.3389/fpls.2021.681979、PMID 34630447、PMC8498224（PubMed／PMC で書誌・要旨を確認）。
- 対象：エクアドルの現代 Nacional 集団152遺伝子型。SSR＋SNP の GWAS に、焙煎・未焙煎豆の生化学成分測定と複数回の官能評価を組み合わせ。
- 支持できる主張：現代 Nacional の花様（Arriba）香りには、モノテルペン生合成経路と L-フェニルアラニン分解経路の2経路が主に関与する（遺伝的背景が花ノートを大きく説明する）。根拠区分：遺伝子型―成分―官能の関連実証（個別化合物の寄与実証ではない）。
- 支持できない主張：祖先的（純粋）Nacional への外挿、個別化合物（リナロール等単独）が花香の原因であるという断定、「エクアドル産＝花様」という産地一般化。
- Colonges et al. 2022"Variability and genetic determinants of cocoa aromas in trees native to South Ecuadorian Amazonia", Plants, People, Planet 4(6):618–637、DOI 10.1002/ppp3.10268（HAL 収録原著で書誌・要旨を確認）。
- 対象：エクアドル南部アマゾンの在来カカオ樹。GWAS で花様・果実様香りに関連する候補遺伝子を同定。香り形成が発酵過程の生物的・非生物的ストレスへの防御反応と関連するという仮説を支持。
- 限界：候補遺伝子レベルの関連であり、化合物寄与の実証ではない。
- Colonges et al. 2022（苦味・渋味 GWAS、The Plant Genome、DOI 10.1002/tpg2.20218、PMID 36065790）：現代 Nacional 集団で苦味・渋味の遺伝的決定因子を解析。呈味の遺伝的ばらつきの存在は支持できるが、個別呈味成分の寄与配分の根拠にはしない。

### 1.2 CCN-51（クローン）— 遺伝的同定と香味実測の両方あり

- Boza et al. 2014"Genetic Characterization of the Cacao Cultivar CCN 51", Journal of the American Society for Horticultural Science 139(2):219–229、DOI 10.21273/JASHS.139.2.219（出版社系レコード・要旨を確認）。
- 交配：(IMC 67 × ICS 95) × Oriente 1（"Canelo"）。母系は IMC 67 の細胞質型を継承。
- 祖先構成（SSR 70座）：Iquitos 45.4%、Criollo 22.2%、Amelonado 21.5%、Contamana 3.9%、Purús 2.5%、Marañón 2.1%、Nacional 1.1%。すなわち CCN-51 の Nacional 成分はごくわずかであり、「エクアドル産＝Nacional 系」という推論はこのクローンには成立しない。
- 支持できる主張：CCN-51 は Nacional ファインフレーバー品種群とは遺伝的に大きく異なり、農学的特性（乾燥豆重、収量、病害率）も有意に異なる。
- 支持できない主張：本論文自体は香味の官能・成分実測を含まない（香味評価は 1.3 の実測研究に置く）。
- 祖先構成の再推定（食い違いとして記録）：Motilal et al. 2026（PLoS ONE 21(7):e0351690、DOI 10.1371/journal.pone.0351690）はペルーの在来カカオ390個体から4つの新系統（Chuncho 1＝Purús 関連、Chuncho 2＝Contamana 関連、Awajun、Porcelana＝Nacional 関連）を提案し、同じ参照枠では CCN-51 の祖先構成を Amelonado 15%、Criollo 13%、Iquitos 25%、Awajun 45% と再推定した。祖先構成の数値は参照集団セットに依存するため、Boza 2014 の値と Motilal 2026 の値のどちらか一方を「確定値」として表示しない。新系統4件は提案段階（著者らも暫定的と位置づける系統を含む）であり、Motamayor 2008 の10集団を置き換えるものではない。

### 1.3 クローン・遺伝子型レベルの香味実測

- Rottiers et al. 2019"A multipronged flavor comparison of Ecuadorian CCN51 and Nacional cocoa cultivars", European Food Research and Technology 245(11):2459–2478、DOI 10.1007/s00217-019-03364-3（Mendeley 収録の原著要旨で確認。pairing 記録の推測 DOI は誤り。第6章参照）。
- 対象：Nacional 系交配種 EET103、EET559、EET576、EET577 と CCN51。発酵・乾燥豆をリカー化し、訓練パネルの官能、HS-SPME-GC-MS（揮発成分70件を同定・半定量）、GC 電子鼻を併用。
- 支持できる主張：EET 系は果実様・花様の揮発成分の多くで最高濃度を示し、官能では果実様・酸味方向。CCN51 は望ましくない香気活性成分で特徴づけられ、官能では苦味・渋味・オフフレーバー方向。遺伝子型がエクアドル産ファイン／バルクの香味差に寄与する。根拠区分：(1) 組成＋官能記述（GC-O による個別寄与実証ではない）。
- 支持できない主張：個別化合物の寄与の断定、EET 系＝祖先的 Nacional の香味という同一視。
- Kadow et al. 2013"Identification of main fine flavour components in two genotypes of the cocoa tree", Journal of Applied Botany and Food Quality 86、DOI 10.5073/JABFQ.2013.086.013（出版社ページで書誌・要旨を確認）。
- 対象：ファインフレーバー2遺伝子型 SCA6、EET62 とバルク CCN51 の果肉（パルプ）と種子を GC-MS 分析。
- 支持できる主張：SCA6 はモノテルペン類（β-ミルセン、β-オシメン、リナロール）が特徴的。EET62 は第2級アルコール 2-ヘプタノール、その酢酸エステル、メチルケトン（2-ヘプタノン、2-ノナノン）が特徴的。遺伝子型により異なる代謝経路由来のファインアロマ成分を持つ。根拠区分：(1) 検出・組成のみ（嗅覚測定なし）。
- 支持できない主張：これらの成分が最終チョコレートの香りに寄与すること（パルプ・生種子段階の組成であり、発酵・焙煎後の寄与は未実証）。
- Chetschik et al. 2018"Investigations on the Aroma of Cocoa Pulp (Theobroma cacao L.) and Its Influence on the Odor of Fermented Cocoa Beans", Journal of Agricultural and Food Chemistry 66(10):2467–2472、DOI 10.1021/acs.jafc.6b05008、PMID 28318272（PubMed で書誌・要旨を確認）。
- 対象：3品種（CCN51、FSV41、UF564）のパルプに初めて AEDA を適用。発酵中のパルプ→豆への香気成分の移行も定量。
- 支持できる主張：パルプの香気強度（FD 因子）は CCN51 が FSV41・UF564 より低く、後二者では花様・果実様ノートが強い。2-フェニルエタノールと酢酸イソアミル（3-メチルブチルアセタート）はパルプ＞豆、リナロールとグアイアコール（2-メトキシフェノール）は豆＞パルプの濃度関係。根拠区分：(3) パルプ試料での AEDA 寄与＋移行の定量。
- 支持できない主張：パルプの香りがそのまま製品の香りになること（移行は成分ごとに方向が異なることが本研究自体の結果）。
- Bastos et al. 2019"Dynamics of volatile compounds in TSH 565 cocoa clone fermentation and their role on chocolate flavor in Southeast Brazil", Journal of Food Science and Technology 56(6):2874–2887、DOI 10.1007/s13197-019-03736-3（原著要旨を確認）。
- 対象：ブラジル南東部、病害抵抗性クローン TSH 565 の在来発酵。SPME-HS/GC-MS でパルプ63件・豆36件の揮発成分を同定し、製造したチョコレートを訓練パネルが評価。
- 支持できる主張：β-ミルセン、β-cis-オシメンが多量に検出されファインなチョコレート香と関連づけられた。TSH565 のチョコレートは豊かで果実様、強いカカオ感と苦味と記述された。根拠区分：(1) 組成＋官能記述。
- 支持できない主張：個別化合物の寄与（GC-O・OAV なし）。「TSH 565 は一般に優れる」という一般化（単一産地・単一発酵条件）。
- Elwers et al. 2009"Differences between the content of phenolic compounds in Criollo, Forastero and Trinitario cocoa seed", European Food Research and Technology 229(6):937–948、DOI 10.1007/s00217-009-1132-y（出版社系レコードで書誌・要旨を確認）。
- 対象：Upper Amazon Forastero、Lower Amazon Forastero、Nacional、Criollo、Trinitario の種子フェノール組成（Folin–Ciocalteu、RP-HPLC-PDA）。
- 支持できる主張：**総ポリフェノール量と (−)-エピカテキン量に遺伝的に決定された差は認められなかった**。Criollo 種子はアントシアニンを含まず、カフェ酸アスパラギン酸（クロバミド類）が多い。土壌施肥等の立地条件の影響が認められた。発酵・乾燥中のカテキン減少は Criollo でより強い。
- 支持できない主張：「クリオロはポリフェノールが少なく苦渋味が弱い」という俗説の根拠にはならない（本研究はむしろその単純化への反証）。組成の知見であり官能寄与の実証ではない。
- Kadow 2020"The biochemistry of cocoa flavor – A holistic analysis of its development along the processing chain", Journal of Applied Botany and Food Quality 93:300–312、DOI 10.5073/JABFQ.2020.093.037（出版社ページで書誌を確認）。総説 (4)。加工チェーン全体の整理に使えるが、個別主張は原著に遡ること。

### 1.4 伝統的分類・地域品種の遺伝的実態（香味実測ではないもの）

- Marcano et al. 2009Tree Genetics & Genomes 5(2):329–337（DOI 未確認）。ベネズエラの「モダンクリオロ」栽培集団257個体は Criollo と Forastero の混合で説明され、個体ごとの混合比が大きく変動する。すなわちベネズエラの栽培クリオロは純粋な Criollo 集団ではない。
- Lachenaud & Motamayor 2017（DOI 10.1007/s10722-017-0563-8）：Chuao 120、OC 77/81、PV5/6 は純粋 Criollo ではなく Trinitario と判定。「チュアオ＝純粋クリオロ」の表示は遺伝的には支持されない。チュアオ産試料の官能・揮発性実測は本調査範囲では未確認。
- Arevalo-Gardini et al. 2019"Genetic identity and origin of 'Piura Porcelana'", Tree Genetics & Genomes 15:11（DOI は一次レコードで未確認）。ペルー・ピウラのポルセラーナは Nacional と近縁だが有意に分化した伝統品種。香味・成分の実測は含まない。
- Boza et al. 2012"Genetic diversity, population structure, conservation and utilization of Theobroma cacao L. genetic resources in the Dominican Republic", Tree Genetics & Genomes（USDA ARS レコードで確認）。ドミニカ共和国の遺伝資源は Amelonado 祖先が優占（コレクション 43.9%、農家選抜 72.1%）、Criollo、Iquitos、Nacional、Contamana の背景も混在。「ドミニカ＝トリニタリオ単一」という整理は遺伝的には不正確（市販・栽培上の呼称としては Trinitario とされる）。
- Li et al. 2021（マダガスカル。第2章に再掲）。

### 1.5 遺伝集団レベルの香味実測が存在しない集団

本調査（pairing 記録の精読＋追加検索）の範囲で、**集団そのものを対象とした香味・成分の実測が確認できなかった集団**：Amelonado、Contamana、Curaray、Guiana、Iquitos、Marañón、Nanay、Purús（8集団）。これらについては、祖先構成の一部として個別クローン・地域集団の研究に現れるのみで、集団レベルの香りプロファイルを支持する査読実測はない。「未報告＝香りがない」ではないが、プロファイル付き素材としての収録根拠はない（第7章 (d)）。

---

## 2. 産地別

産地は3層で扱う：層A＝当該産地試料での成分・官能実測、層B＝組成実測のみ、層C＝業界説明のみ（根拠にしない）。

### 2.1 ドミニカ共和国（層A）

- Guzmán Penella et al. 2023"Link between Flavor Perception and Volatile Compound Composition of Dark Chocolates Derived from Trinitario Cocoa Beans from Dominican Republic", Molecules 28(9):3805、DOI 10.3390/molecules28093805、PMID 37175215、PMC10180179（PMC で書誌・要旨を確認）。
- 対象：ドミニカ共和国産 Trinitario 豆から作ったダークチョコレート54試料。訓練パネル官能＋GC-MS 定量＋PLS 予測モデル。
- 支持できる主張：揮発組成から官能属性（特に苦味・渋味の強さ）をある程度予測できる。アセトアルデヒド、ジメチルスルフィド、2,3-ブタネジオールが複数の属性の主要な予測因子。プロピレングリコールジアセタートは赤い果実様香りのマーカー候補。
- 支持できない主張：予測因子＝寄与化合物ではない（相関モデルであり、苦味・渋味の本体は不揮発成分）。単一産地内のばらつきの研究であり、「ドミニカ産の味」を一つのプロファイルに固定する根拠にはならない。Sanchez（無発酵グレード）／Hispaniola（発酵グレード）は品種名ではなく発酵グレードの呼称である点に注意（pairing 記録）。

### 2.2 ガーナ（層A＝加工研究の試料として）

- Owusu, Petersen & Heimdal 2012"Effect of fermentation method, roasting and conching conditions on the aroma volatiles of dark chocolate", Journal of Food Processing and Preservation 36(5):446–456、DOI 10.1111/j.1745-4549.2011.00602.x（CSIR リポジトリ・書誌レコードで確認）。
- 対象：ガーナ産豆。ヒープ発酵 vs トレイ発酵 × 焙煎 × コンチング。GC-O で香気活性成分を同定。
- 支持できる主張：主要オドラントの多くは高温焙煎（150℃）で増え、コンチング（80℃、6→10時間）で有意に減少する。発酵法の差は高温焙煎＋短時間コンチで顕在化する。
- 支持できない主張：「ガーナ産の香味プロファイル」ではない（変数は加工条件）。
- Owusu et al. 2013"Relationship of sensory and instrumental aroma measurements of dark chocolate as influenced by fermentation method, roasting and conching conditions", Journal of Food Science and Technology 50(5):909–917、DOI 10.1007/s13197-011-0420-2、PMID 24425997、PMC3722411。
- 支持できる主張：官能属性と香気成分の PLS モデル（例：2,5-ジメチルピラジン等が fruit 属性のモデル成分）。焙煎はヒープ発酵試料の渋味を有意に下げた。未コンチ品はバナナ様属性が高かった。
- 限界：相関モデルであり個別寄与の実証ではない。
- Camu et al. 2008"Dynamics and biodiversity of populations of lactic acid bacteria and acetic acid bacteria involved in spontaneous heap fermentation of cocoa beans in Ghana", Applied and Environmental Microbiology 74(1):86–98、DOI 10.1128/AEM.01512-07、PMID 17993565（pairing 調査でゲント大学リポジトリ・MEDLINE により確認）。
- 支持できる主張：切り返しで通気が増すと酢酸菌が増え酢酸生成が増し、**その豆から作ったチョコレートはより酸っぱくなった**（工程→成分→製品官能の連結実証、根拠区分 (3) は酢酸について）。乳酸単独の酸味寄与の実証は本論文にもない。

### 2.3 マダガスカル（層B＋遺伝構成）

- Li et al. 2021"Traditional varieties of cacao (Theobroma cacao) in Madagascar: their origin and dispersal revealed by SNP markers", Beverage Plant Research 1:4、DOI 10.48130/BPR-2021-0004（出版社ページで書誌・要旨を確認）。
- 支持できる主張：マダガスカルの農家アクセッションは Criollo、Amelonado、Trinitario の3グループの混在であり、「マダガスカル＝クリオロ」は誤り。香味の実測は含まない。
- Godočiková et al. 2020"Antioxidant Activities and Volatile Flavor Components of Selected Single-Origin and Blend Chocolates", Molecules 25:3648、DOI 10.3390/molecules25163648（原著要旨・引用側原著で確認）。
- 支持できる主張：市販単一産地チョコの揮発組成の実測。マダガスカル試料でテトラメチルピラジン 285.74 mg/kg（試料中最高）、3-メチルブタナールも最高水準。根拠区分：(1) 組成。
- 支持できない主張：各産地1製品のみの測定であり、産地の一般的プロファイルではない。含量の多さは寄与を意味しない（テトラメチルピラジンは閾値が高く、第5章の通り寄与は否定的な実測がある）。

### 2.4 ペルー（層B）

- Cartas et al. 2024European Food Research and Technology、DOI 10.1007/s00217-024-04558-0（pairing 記録）。ピウラ・ブランコ、チュンチョ等の組成実測。香味寄与の実証ではない。
- Chávez et al. 2024"From the seed to the cocoa liquor: Traceability of bioactive compounds during the postharvest process of cocoa in Amazonas-Peru", Microchemical Journal 201:110607（原著PDF抜粋で確認、著者名の確定は未了）。アマゾナス地域の CCN-51、TSH-565、Criollo 系遺伝子型で収穫後工程を通じた生物活性成分（カテキン、エピカテキン、没食子酸、カフェ酸等）の追跡。発酵・乾燥で Criollo がカテキン類の影響を最も受けた。根拠区分：(1) 組成。
- 遺伝面は 1.4（ピウラ・ポルセラーナ）と 1.2（Motilal 2026 の新系統提案）を参照。マラニョンの「ピュア・ナシオナル再発見」は層C（査読原著未確認）であり根拠にしない。

### 2.5 ベネズエラ（遺伝のみ・香味実測なし）

- 遺伝的実態は 1.4（Marcano 2009、Lachenaud & Motamayor 2017）。Moreno-Trujillo et al. 2024はベネズエラ豆の焙煎・アルカリ処理の反応生成物の研究で、香りの官能実測ではない。チュアオ産試料の官能・揮発性実測は未確認 → 産地プロファイルは作れない（第7章 (d)）。

### 2.6 コートジボワール／タンザニア（実測なし）

- コートジボワール：発酵微生物研究はあるが豆・製品の香味実測は本調査範囲で確認できなかった。
- タンザニア：査読の香味・成分データを確認できなかった（pairing 棚卸しでも flavorEvidence 'none'）。両国とも産地名のみの登録か見送りが妥当（第7章 (d)）。

### 2.7 ベトナム／インドネシア（パルプ段階のみ層A）

- Bickel Haase et al. 2021"Aroma Properties of Cocoa Fruit Pulp from Different Origins", Molecules 26(24):7618、DOI 10.3390/molecules26247618、PMID 34946695、PMC8704363（PMC 全文で書誌・要旨・結果表を確認）。
- 対象：インドネシア、ベトナム、カメルーン、ニカラグア産の**生パルプ**に cAEDA＋GC-MS/O。香気活性領域65件を同定。
- 支持できる主張：パルプの香気活性成分として trans-4,5-エポキシ-(E)-デセナール、2-/3-メチルブタン酸、メチオナール、2-イソブチル-3-メトキシピラジン、(E,E)-2,4-ノナジエナール、(E,E)-2,4-デカジエナール、4-ビニルグアイアコール、δ-デカラクトン、ソトロン、ドデカン酸、リナロールが高 FD。ベトナム産パルプが香気活性領域数で最多、カメルーン産が FD 最低。ジアセチル（2,3-ブタンジオン）はカメルーン産パルプで FD 256。
- 支持できない主張：対象はパルプであり、発酵豆・チョコレートの産地プロファイルではない。産地素材（豆・チョコ）への転用は不可。

### 2.8 品種・産地を横断する定量基盤

- Kauz, Dunkel & Hofmann 2021"High-Throughput Quantitation of Key Cocoa Tastants by Means of UHPLC-MS/MS and Application to a Global Sample Set", Journal of Agricultural and Food Chemistry 69(29):8200–8212、DOI 10.1021/acs.jafc.1c01987（ACS ページで書誌・要旨を確認）。
- 対象：世界各地のカカオ豆75試料（統一焙煎プロトコル前後）。呈味成分66件を定量。
- 支持できる主張：カカオの渋味は N-フェニルプロペノイル-L-アミノ酸類、ポリフェノール配糖体、フラバン-3-オール類が担い、苦味の鍵はアルカロイドと 2,5-ジケトピペラジン類の組合せ。**試料群では産地よりも焙煎の方が香味プロファイルへの影響が大きかった**。
- 支持できない主張：産地ごとの味の固定ラベル（本研究はむしろ産地決定論への歯止め）。

---

## 3. 加工（発酵・乾燥・焙煎・コンチング・アルカリ処理）

### 3.1 発酵・乾燥

- 発酵微生物の総説骨格：Schwan & Wheals 2004、De Vuyst & Weckx 2016、De Vuyst & Leroy 2020。遷移は酵母→乳酸菌→酢酸菌の3相。個別の数値主張は原著に遡ること。
- Camu et al. 2008（2.2）：酢酸についての工程→成分→官能の実証。
- スターターカルチャー実測：Lefeber et al. 2012（スターターで地域・方法によらない香味の再現性）、Díaz-Muñoz et al. 2023（酵母スターターの優劣）、Van de Voorde et al. 2023（コスタリカ Trinitario：酵母株が揮発成分を分けるが最終チョコでは差が消える）。「発酵で決まる」という単純化への歯止めとして Van de Voorde の否定的側面が重要。
- 乾燥：Guehi et al. 2010（コートジボワール、天日 vs 人工熱風）、Rodríguez-Campos et al. 2011／2012（発酵日数×乾燥温度、6日＋70℃が最適条件とされた実験系）、Kotey et al. 2022（ガーナ、発酵期間×乾燥法×品種）。
- Krause & Steinhaus 2026"Overfermentation" 研究、Journal of Agricultural and Food Chemistry、DOI 10.1021/acs.jafc.6c05685（ACS 発表・原著情報で確認）。ニカラグア・コスタリカの実地発酵で、最適発酵 vs 過発酵を比較。過発酵試料では短鎖カルボン酸が増え、**グアイアコール（2-メトキシフェノール）と 4-エチルフェノールも有意に高かった**。すなわち煙様オフフレーバーは煙曝露なしでも生じ得る（3.3 の Krause 2025 と対で扱うこと。フェノール類の量的パターンは起源により異なるため判別指標になり得る）。

### 3.2 焙煎

- Frauendorfer & Schieberle 2008"Changes in key aroma compounds of Criollo cocoa beans during roasting", Journal of Agricultural and Food Chemistry 56(21):10244–10251、DOI 10.1021/jf802098f、PMID 18925740（NIST WebBook・原著要旨で確認）。
- 比較 AEDA：未焙煎42成分・焙煎42成分。**化合物の顔ぶれは焙煎前後でほぼ同じで、変わるのは強度**。未焙煎の最高 FD は 2-/3-メチルブタン酸と酢酸。焙煎後は 3-メチルブタナール、フラネオール、2-/3-メチルブタン酸。SIDA 定量＋OAV で閾値超えは未焙煎22成分→焙煎27成分。ストレッカーアルデヒドとフラネオールが強く増加。3-メチルブタン酸、2-メチルブタン酸エチル、2-フェニルエタノールは発酵豆に既に存在し焙煎では増えなかった（発酵由来）。
- 限界：Criollo 単一系統・実験室焙煎。FD／OAV は寄与候補付けであり再構成による最終証明ではない。
- Frauendorfer & Schieberle 2019"Key aroma compounds in fermented Forastero cocoa beans and changes induced by roasting", European Food Research and Technology 245:1907–1915、DOI 10.1007/s00217-019-03292-2（引用側原著で書誌確認）。
- Forastero でも顔ぶれはほぼ同一で差は強度。後年の総説整理では、本研究と Liu et al. 2015 で共通して鍵とされたのは 3-メチルブタナール、3-メチルブタン酸、酢酸、2-アセチル-1-ピロリン、フェニルアセトアルデヒド、フラネオールの6成分のみで、**研究間で鍵成分リストはかなりずれる**。この不一致自体が限界情報。
- Frauendorfer & Schieberle 2006（4.1 に詳記）：ココアパウダーの再構成まで行った基礎研究。
- Ac-Pangan, Engeseth & Cadwallader 2023JAFC 71(25):9856–9867、DOI 10.1021/acs.jafc.3c01366。同一ロットの未焙煎 vs 焙煎ダーク。酢酸を除く全成分で焙煎品の OAV が高く、酢酸は両品で最高 OAV だが未焙煎でより保持。寄与差が大きいのはジメチルトリスルフィド、2-エチル-3,5-ジメチルピラジン、3-メチルブタナール。
- Kothe, Zimmermann & Galensa 2013"Temperature influences epimerization and composition of flavanol monomers, dimers and trimers during cocoa bean roasting", Food Chemistry 141(4):3656–3663、DOI 10.1016/j.foodchem.2013.06.049、PMID 23993533（PubMed 要旨で確認、pairing 調査）。(−)-エピカテキン→(−)-カテキンのエピマー化が主変化で程度は温度の関数。同一条件でも定量フラバノール総量は Java 豆で約50%減、コートジボワール豆で約30%増と**産地で増減の向きが逆転**した。「焙煎＝渋味成分が単調に減る」は支持されない。
- Ullrich et al. 2021"Impact of water on odor-active compounds in fermented and dried cocoa beans and chocolates made thereof", JAFC 69(30):8504–8510、DOI 10.1021/acs.jafc.1c02287（ZHAW 書誌で確認）。水分が香気活性成分に与える影響。
- 焙煎方式・条件の実測群：Zzaman et al. 2017（過熱水蒸気。ピラジン生成は 200℃・10分で最大＝温度を上げるほど増えるのではない）、Rocha et al. 2017（官能受容は時間が効かず温度が支配的）、Peña-Correa et al. 2022／2023（流動層焙煎はピラジン生成を助ける）。数値の他方式への転用は不可。

### 3.3 乾燥時の煙曝露とオフフレーバー

- Füllemann & Steinhaus 2020（5.3 に詳記）：煙様オフフレーバーの原因化合物6件と発酵豆での最大許容濃度（グアイアコール 70 µg/kg 等）を提案。
- Krause & Steinhaus 2025"Molecular Sensory Analysis Confirms Wood Smoke Exposure as a Source of Smoky Off-Flavors in Fermented Cocoa", Journal of Agricultural and Food Chemistry 73(31):19663–19669、DOI 10.1021/acs.jafc.5c06046、PMID 40713024、PMC12333360（PMC で書誌・要旨を確認）。
- 支持できる主張：乾燥時の木煙曝露が煙様オフフレーバーの起源の一つであることを分子レベルで確認。2,6-ジメトキシフェノールが追加の煙様成分。フェノール類は殻からニブへ拡散するため、殻除去だけでは除去できない。
- 注意：pairing 記録にあった「エクアドル産試料はオフフレーバーなしの参照試料」という記述は、本調査の要旨確認範囲では裏付けが取れなかった（原著本文の確認が必要）。「エクアドル＝煙乾燥問題」という記録は厳禁（試料の産地帰属を原著未確認のまま書かない）。
- Krause & Steinhaus 2026（3.1）：過発酵も独立した起源。**煙様＝煙曝露と断定しない**ことが現在の正しい整理。

### 3.4 コンチング

- Counet et al. 2002"Use of gas chromatography-olfactometry to identify key odorant compounds in dark chocolate. Comparison of samples before and after conching", JAFC 50:2385–2391（pairing 調査で出版社系レコード・総説引用により確認）。
- 支持できる主張：コンチングで**新しい鍵香気成分は合成されなかった**。2-フェニル-5-メチル-2-ヘキセナール、フラネオール、分岐ピラジン類が増える一方、大半のストレッカーアルデヒドは蒸発で失われた。コンチングの主作用は除去と再配分。
- Guckenbiehl et al. 2022Food Research International 162:112063（2023年訂正 168:112757）。乾式コンチングで酢酸、ベンズアルデヒド、リナロール、テトラメチルピラジン、2-フェニルエタノールは全て時間とともに減少し、減少幅は酢酸が最大（約60%）、リナロールが最小（最大26%）。極性と減少の関係は訂正版の文（極性が高いほど、沸点が低いほど減少が大きい）を使うこと。
- Owusu 2012（2.2）：コンチング 6→10時間で主要オドラントが有意に減少。

### 3.5 アルカリ処理（ダッチプロセス）

- Miller et al. 2008"Impact of alkalization on the antioxidant and flavanol content of commercial cocoa powders", JAFC 56(18):8527–8533、DOI 10.1021/jf801670p、PMID 18710243（ACS 要旨で確認、pairing 調査）。市販パウダーで抽出 pH が上がるほどフラバノールが直線的に低下（天然 34.6 mg/g → 重度 3.9 mg/g）。横断調査であり同一原料の前後比較ではない。
- Mohamadi Alasti et al. 2020PMC7270444。アルカリ化は総ポリフェノールだけでなくアルキルピラジンも下げる。「ダッチ＝まろやか」は酸の中和だけでなく香気成分総量の低下を含む。

---

## 4. 製品種類別

### 4.1 ダークチョコレート

- Frauendorfer & Schieberle 2006"Identification of the key aroma compounds in cocoa powder based on molecular sensory correlations", JAFC 54(15):5521–5529、DOI 10.1021/jf060728k（NIST WebBook および原著要旨で DOI・内容を確認。pairing 記録で未確認だった DOI が確定した）。
- AEDA で香気活性35成分（FD 8–4096）。最高 FD 群：フラネオール、2-/3-メチルブタン酸、ジメチルトリスルフィド、2-エチル-3,5-ジメチルピラジン、フェニルアセトアルデヒド。SIDA 定量＋OAV で OAV>100 は酢酸、3-メチルブタナール、3-メチルブタン酸、フェニルアセトアルデヒド、2-メチルブタナールの5件、他19件が OAV>1。**24成分の再構成でココアパウダーの典型的香りが再現された**（根拠区分 (3) の最強クラス）。
- 対象はココアパウダー（脂肪20%）であり、そのままダークバーの値ではない。
- Seyfried & Granvogl 2019"Characterization of the Key Aroma Compounds in Two Commercial Dark Chocolates with High Cocoa Contents by Means of the Sensomics Approach", JAFC、DOI 10.1021/acs.jafc.8b06183（ACS 発表・書誌レコードで確認）。
- 対象：市販ダーク2種（カカオ90%と99%、Lindt）。AEDA＋SIDA＋再構成。再構成が原品とよく一致し、鍵成分の同定・定量が正しいことが示された。β-イオノンがチョコレートで初めて定量された。
- 寄与の強い成分群（OAV 上位）：3-メチルブタン酸、フェニル酢酸、ジメチルトリスルフィド、グアイアコール、バニリン、リナロール等（数値の個別転記は原著表の確認を要する。ジメチルトリスルフィドの OAV 840／730 という値は報道経由であり、原著値として表示しない）。
- 限界：市販2製品のみ。バニリンについては添加の有無が要旨レベルで未明示（4.2 の注意参照）。
- Deuscher et al. 2020Molecules 25(8):1809。ダーク12試料の GC-O 比較（検出頻度法 cDFA）。バニリンは試料レシピに添加されていたため著者らが解析から除外した（検出≠天然寄与の代表例）。
- Ullrich et al. 2022"Decoding the Fine Flavor Properties of Dark Chocolates", JAFC 70(42):13730–13740、DOI 10.1021/acs.jafc.2c04166（ACS ページで書誌・要旨を確認）。
- 対象：Cocoa of Excellence の参照リカーから作ったダーク6種。AEDA＋定量＋DoT。
- 支持できる主張：酸味・果実様ノートは酢酸と果実様エステル（2-メチルブタン酸エチル、3-メチルブタン酸エチル、酢酸イソアミル）の高 DoT と関連。カカオ様・焙煎ノートは 2-/3-メチルブタナール、フラネオール、ジメチルトリスルフィドの高 DoT と関連。**花様・渋味は (−)-エピカテキン、プロシアニジンB2、プロシアニジンC1、2-フェニルエタノールの高 DoT と関連**（カカオ側の渋味をプロシアニジンが担う製品レベルの一次根拠）。
- 限界：DoT の関連付けであり、個別成分の欠落試験ではない。
- Ullrich et al. 2023"Influence of the cocoa bean variety on the flavor compound composition of dark chocolates", ACS Food Science & Technology 3(3):470–477、DOI 10.1021/acsfoodscitech.2c00418（ACS・ZHAW レコードで書誌・要旨を確認）。
- 対象：単一品種ダーク16種の DoT 比較。
- 支持できる主張：Forastero 3種は互いに似て、3-メチルブタナール、ジメチルトリスルフィド、フラネオール、2-メチルブタン酸、3-メチルブタン酸、フェニル酢酸、リナロールの DoT が高い。一方 Criollo と Trinitario はばらつきが大きく、**品種は香味化合物組成の唯一の決定因子ではない**。Trinitario 3種と Criollo 1種は果実様エステルと酢酸の DoT が特に高かった。
- 位置づけ：伝統的品種名から味を断定することへの一次根拠による歯止め。品種リンクを作る場合も試料範囲を必ず併記する。
- André et al. 2022"Use of molecular networking to identify 2,5-diketopiperazines in chocolates as potential markers of bean variety", Heliyon 8(9):e10770、DOI 10.1016/j.heliyon.2022.e10770。ジケトピペラジン類が豆品種のマーカー候補。

### 4.2 ミルクチョコレート

- Schnermann & Schieberle 1997JAFC 45:867–872、DOI 10.1021/jf960670h。AEDA でミルクチョコとココアマスの鍵オドラントを評価。
- Fricke & Schieberle 2020"Characterization of the Key Aroma Compounds in a Commercial Milk Chocolate by Application of the Sensomics Approach", JAFC 68(43):12086–12095、DOI 10.1021/acs.jafc.0c05787、PMID 33063998（書誌レコード・要旨を確認）。
- 対象：「ミルキー・クリーミー」属性の強い市販ミルクチョコ1製品。AEDA で香気活性48成分。最高 FD はフェニル酢酸とバニリン、次いでグアイアコール、ノナン酸。SIDA 定量40成分の OAV ではジメチルトリスルフィドと酪酸が最高（>170）、次いで 3-メチルブタン酸、酢酸、フェニル酢酸。**39成分の再構成で原品とよい類似**。
- 乳成分との相互作用について：ダーク（sensomics 先行研究）との比較から、著者らはメタンチオールと一連のラクトン類がミルキー・クリーミーなノートに寄与し得ると示唆した（ダークでは香気活性がずっと低かった）。これは比較からの示唆であり、乳成分単独の添加・欠落実験ではない。
- 限界：単一製品。バニリンの添加有無は要旨で未明示。
- Samfaß et al. 2021Foods 10(7):1483、DOI 10.3390/foods10071483。クラムチョコレートのクリーミーさを強める半揮発性ラクトン類（δ-ラクトン類等）。カカオバターにも δ-ヘキサデカラクトンが高濃度で含まれることを示した。
- 乳タンパク質×ポリフェノールの相互作用：三浦・阿久澤 2010（ミルクサイエンス 59(1):1–8、DOI 10.11465/milk.59.1）はカテキン水溶液モデルで、スキムミルク等が渋味を 46–58% 低減し、主因はラクトースではなくカゼイン（特に β-カゼイン）との結合による遊離カテキン低下（約95%減）であることを示した。ミルクチョコそのものではないが、「ミルクで渋味が和らぐ」機構の一次根拠として使える（対象は茶カテキン溶液であることを併記）。

### 4.3 ホワイトチョコレート

- Stewart et al. 2017JAFC 65(6):1186–1195、DOI 10.1021/acs.jafc.6b04489。モデルホワイトチョコで、低加熱 vs 高加熱の脱脂粉乳（SMP）により揮発プロファイルと官能（高加熱側でキャラメル／ファッジ感）が変わる。
- Stewart et al. 2018Journal of Dairy Science 101(10)、DOI 10.3168/jds.2018-14414（レディング大学リポジトリで確認）。SMP 製造の各工程段階の差がモデルホワイトチョコの揮発プロファイルまで持ち越される。
- カカオバター自体の香気について：Stewart 2017 の原著テキストでは、粉乳抽出物で持続した香気成分は脂肪酸類、酢酸、マルトール、フラネオール等であり、チョコレート抽出物で持続したものに (Z)-4-ヘプテナール、1-オクテン-3-オン、ピラジン類、フラネオールと、カカオバター由来の可能性があるメトキシピラジン（暫定同定）が含まれた。すなわち**ホワイトの香りの主たる担い手は乳粉・糖の加熱履歴であり、カカオバター由来と実証された香気寄与は限定的**。現行アプリの「ホワイト×バニリン detection/general」リンクはこの整理と整合する（バニリンは配合由来が主）。
- Samfaß 2021 の「カカオバターに δ-ヘキサデカラクトン」は組成の知見であり、ホワイトでの寄与実証ではない。

### 4.4 ルビーチョコレート

- Tuenter et al. 2021Food Chemistry 343:128446。ルビーの組成（A型プロアントシアニジンが特徴的）。色はアントシアニンではなくプロアントシアニジン関連と整理される。
- Seremet（Šeremet）et al. 2019小規模専門誌の官能研究：ルビーは酸味が最も強く、チョコらしい香りは最も弱かったとされる。
- 寄与レベル（GC-O／OAV）の香気研究は本調査範囲では未確認。ルビーの香りプロファイルは「未確認」を維持するのが正確。

### 4.5 ブロンドチョコレート（キャラメリゼホワイト）

- 本調査で追加検索を行ったが、**査読済みの香気分析・官能研究は確認できなかった**。確認できたのは：普及科学記事（Chemia Naissensis 2024 の popular scientific article）、メーカー・ブランドの解説（ヴァローナ、Frédéric Bau が 2004 年に偶然発見し製品化は 2012 年の Dulcey という経緯）、特許 US20170156364（キャラメル化組成物。2-アセチルフラン等の風味成分に言及）であり、いずれもの格付け。
- 反応の帰属についても注意：業界説明では「キャラメル化」と呼ばれることが多いが、乳糖＋乳タンパクを含む系の加熱褐変はメイラード反応が主経路であり得る（Kroh 1994 のカラメル化総説だけでは帰属を決められない）。種類の存在と経緯のみ記録し、成分・寄与の記述は作らない（第7章 (d)）。

### 4.6 カカオ分100%

- McClure et al. 2022マダガスカル／ガーナ／ペルー産、27焙煎条件、消費者145名。
- Seyfried & Granvogl 2019 の99%バーは実質的に100%クラスに最も近い sensomics 実測であり、100%素材へのリンク追加の根拠に使える（試料が市販99%バーであることを併記）。

---

## 5. 主要香気寄与化合物の横断整理

凡例：寄与の強さは「複数の独立した sensomics 研究で再構成・OAV 上位まで到達したか」を基準に整理したもので、官能強度そのものの数値化ではない。試料範囲を必ず併記する。

### 5.1 寄与が強い（複数研究・再構成到達）

| 化合物 | 根拠（試料／方法） | 適用範囲と注意 |
|---|---|---|
| 3-メチルブタン酸（イソ吉草酸） | Frauendorfer & Schieberle 2006（ココアパウダー、OAV 390・再構成構成成分）、2008（Criollo 豆、未焙煎で最高 FD 群）、2019（Forastero 豆）、Seyfried & Granvogl 2019（ダーク90/99%、最高 OAV 群）、Fricke & Schieberle 2020（ミルク、OAV 上位群） | カカオ範囲で最も再現性の高い寄与成分の一つ。2-メチルブタン酸と混同しない（下記） |
| フェニル酢酸 | Fricke & Schieberle 2020（ミルク、バニリンと並び最高 FD・再構成構成成分）、Seyfried & Granvogl 2019（ダーク、最高 OAV 群）、Deuscher 2020（ダーク、判別キーオドラント OA 94）、Ullrich 2023（Forastero チョコで高 DoT） | 蜂蜜様。ミルク・ダーク双方で強い |
| ジメチルトリスルフィド | Frauendorfer & Schieberle 2006（最高 FD 群）、Seyfried & Granvogl 2019（最高 OAV 群筆頭とされる）、Fricke & Schieberle 2020（酪酸と並び最高 OAV >170）、Ac-Pangan 2023（焙煎で寄与差大）、Ullrich 2022／2023（高 DoT） | ジメチルスルフィド（DMS、登録済み・お茶側根拠）とは別化合物。混同厳禁 |
| フラネオール（HDMF） | Frauendorfer & Schieberle 2006（最高 FD 群）、2008（焙煎で強く増加）、Ullrich 2022／2023（高 DoT）、Counet 2002（コンチングで増加）、Stewart 2017（粉乳・モデルホワイトでも FD 高） | カラメル様。カカオ側・乳側の双方に根拠がある |
| フェニルアセトアルデヒド | Frauendorfer & Schieberle 2006（OAV>100・再構成）、2008（焙煎で増加） | 登録済み（現行の根拠はお茶側のみ）。ストレッカーアルデヒド類（群）と重複するが個別根拠が強い |
| 酢酸 | Frauendorfer & Schieberle 2006（OAV>100）、Ac-Pangan 2023（両品で最高 OAV）、Camu 2008（発酵条件→含有量→製品の酸味、官能実証）、Ullrich 2022（酸味ノートの高 DoT） | 香り（ビネガー様）と味（酸味）の両方に寄与実証がある数少ない成分。乳酸には同等の実証がない（非対称性を明記） |
| リナロール | Seyfried & Granvogl 2019（ダークの最高 OAV 群・再構成構成成分）、Ullrich 2023（Forastero チョコで高 DoT）、Frauendorfer 2008 系（発酵豆に存在） | 登録済み（現行の根拠はお茶側のみ）。カカオ範囲の格上げが可能（第7章 (b)） |
| 2-フェニルエタノール | Ullrich 2022（ダークで花様・渋味側の高 DoT）、Frauendorfer 2008（発酵由来で焙煎では増えない）、Chetschik 2018（パルプで高濃度） | バラ様・花様。現行アプリ未登録 |

### 5.2 寄与が中程度（単一系の強い根拠、または方法が限定的）

| 化合物 | 根拠 | 注意 |
|---|---|---|
| 2-メチルブタン酸 | Porcelli & Steinhaus 2022（発酵カカオで FD 2048–4096）、Ullrich 2023（Forastero チョコで高 DoT） | 証拠の多くは 2-/3-メチルブタン酸ペアとして得られている。単独の OAV は限定的 |
| 酪酸 | Fricke & Schieberle 2020（ミルクで最高 OAV 群 >170） | ダーク側での同格の実証は未確認 |
| グアイアコール（2-メトキシフェノール） | Seyfried & Granvogl 2019（ダーク最高 OAV 群）、Fricke & Schieberle 2020（高 FD）。一方で Füllemann & Steinhaus 2020／Krause & Steinhaus 2025／2026（第5.3項） | **両義的**。通常品の上位成分であると同時に、煙様オフフレーバーの主因でもある。登録する場合はオフフレーバー文脈を必ず併記する |
| ジアセチル（2,3-ブタンジオン） | Deuscher 2020（ダークで OA 7、NIF 90–100%）、Akoa et al. 2024（カメルーン産ラボスケールダークで OAV 最高値群、半定量ベース）、Bickel Haase 2021（パルプ AEDA、カメルーン産で FD 256） | 再構成・欠落での単独検証は未確認。ミルクチョコのバター感への外挿は不可（ミルク sensomics の上位には入っていない） |
| 酢酸2-フェニルエチル | Porcelli & Steinhaus 2022（発酵カカオで AEDA FD 4096、最高水準） | OAV・再構成の裏付けなし。異性体 1-phenylethyl acetate（Deuscher 2020 で OA 48）と混同しない |
| 酢酸イソアミル（3-メチルブチルアセタート） | Ullrich 2022（ダークの果実様ノートで高 DoT）、Chetschik 2018（パルプ＞豆の定量） | 定量・官能相関レベル。単独の欠落検証なし |
| 2-メチルブタン酸エチル／3-メチルブタン酸エチル | Ullrich 2022（果実様エステルの高 DoT） | 2件は別化合物として区別する |
| (R)-δ-2-デセノラクトン（マッソイアラクトン） | Porcelli & Steinhaus 2022（ココナッツ様の非典型的香りを持つ発酵カカオで、定量＋OAV＋参照試料への添加実験で決定的と確認） | 「非典型的」試料での知見。通常品のココナッツ様ノートの主因と一般化しない |
| δ-デカラクトン | Samfaß 2021（クラムチョコのクリーミーさ、無水乳脂肪画分）、Bickel Haase 2021（パルプ AEDA 高 FD） | γ-デカラクトンとは分ける（下記 5.4） |
| β-イオノン | Seyfried & Granvogl 2019（チョコレートで初定量・再構成構成成分） | 登録済み（現行の根拠はお茶側のみ）。寄与量の大小は原著表の確認を要する |
| 2-イソブチル-3-メトキシピラジン | Ac-Pangan 2023（未焙煎品で目立つ成分として大学解説に言及）、Bickel Haase 2021（パルプで FD 512、ベトナム産） | ピーマン様。製品 sensomics の上位群には入っていない |

### 5.3 オフフレーバー化合物群（寄与実証あり・文脈限定）

- Füllemann & Steinhaus 2020"Characterization of Odorants Causing Smoky Off-Flavors in Cocoa", JAFC 68(39):10833–10841、DOI 10.1021/acs.jafc.0c04633（ACS ページで書誌・要旨を確認）。煙様オフフレーバー試料 vs 参照試料の比較 AEDA で 2-メトキシフェノール、3-/4-メチルフェノール、3-/4-エチルフェノール、3-/4-プロピルフェノールを同定。脱臭カカオバター中の閾値から発酵豆の最大許容濃度を提案（グアイアコール 70 µg/kg、3-/4-メチルフェノール・4-エチルフェノール 20 µg/kg、3-エチルフェノール・3-プロピルフェノール 2 µg/kg。4-プロピルフェノールは閾値を超えなかった）。
- Porcelli, Neiens & Steinhaus 2021"Molecular background of a moldy-musty off-flavor in cocoa", JAFC 69:4501–4508、DOI 10.1021/acs.jafc.1c00564（機関発表・原著要旨で確認）。カビ様オフフレーバーの主因は (−)-ゲオスミンと 3-メチル-1H-インドール（許容濃度 1.6 µg/kg、1.1 µg/kg を提案）。両者は種皮と胚で不均一に分布する。
- Füllemann, Neiens & Steinhaus 2022"Impact of processing on important cocoa off-flavour compounds", European Food Research and Technology 248:197–205、DOI 10.1007/s00217-021-03873-0（原著PDFで確認）。煙様成分は焙煎・リカー化で最大1.4倍まで微増するが、チョコレート化（コンチング含む）で30–63%失われ相殺される。3-メチル-1H-インドールは焙煎（特に高温）で明確に減少、1H-インドールは逆に増加しコンチングでも減らなかった。

### 5.4 寄与が弱い・否定的な実測があるもの

| 化合物 | 状況 |
|---|---|
| γ-デカラクトン | Porcelli & Steinhaus 2022 で FD 1024 でも OAV 0.00–0.15。ココナッツ様の主因として添加実験で証明されたのは δ-2-デセノラクトン (R) 体。Frauendorfer & Schieberle 2006 でもラクトン6種すべて閾値未満 |
| テトラメチルピラジン（個別） | 含量データは豊富（Godočiková 2020 のマダガスカル試料 285.74 mg/kg 等）だが閾値が高く、含量≠寄与。群（アルキルピラジン類）としての扱いを維持し個別化しない |
| 2,3,5-トリメチルピラジン（個別） | Deuscher 2020 では OA 26・NIF 75–100% の一方、Frauendorfer & Schieberle 2006 ではココアパウダーで閾値未満。試料依存で結論が割れる |
| アセトイン | Aculey et al. 2010（ガーナ発酵動態）・Akoa 2024 で含量のみ。寄与の実証なし |
| リモネン | ニブで微量検出のみ（最大相対含量 0.16 程度）。カカオ寄与の根拠なし |
| バニリン（天然寄与として） | Deuscher 2020 では添加物由来で著者が除外。市販品の sensomics（Seyfried 2019、Fricke 2020）では上位だが添加有無が要旨で未明示。**天然存在・寄与の根拠は Frauendorfer & Schieberle 2006 のココアパウダー定量に置く**。製品リンクは「配合・添加の可能性を含む」と注記する |

### 5.5 カカオ試料での寄与証拠が確認できなかったもの

- β-ダマセノン：Seyfried & Granvogl 2019 がチョコレートで初めて定量したのは β-イオノンであり、ダマセノンではない（混同注意の記録として重要）。
- ホモフラネオール、アブヘキソン、メシフラン、シクロテン、肉桂酸メチル、5-メチルフルフラール：カカオ試料での一次研究を確認できなかった（pairing I-3 の到達範囲と一致）。
- 2-メチル-3-フランチオール：カカオでの確認なし。なお 2-methyl-3-(methyldithio)furan は別化合物で、Schnermann & Schieberle 1997 の最高 FD 群に含まれる（名称の混同厳禁）。
- メチオナール：パルプ AEDA では高 FD（Bickel Haase 2021）だが、豆・チョコレートでの寄与は本調査範囲で未確認。
- 桂皮アルデヒド、2-アセチルピラジン：未確認候補止まり。

### 5.6 呈味成分（香気以外）

- Stark et al. 2006DOI 10.1021/jf0608726。焙煎カカオニブでテオブロミン等の苦味寄与を定量＋官能で確認。試料は最終製品ではなくニブ。
- Ullrich 2022（4.1）：製品ダークで (−)-エピカテキン、プロシアニジンB2、C1 が渋味・花様側の高 DoT。**プロシアニジンB2／C1 の個別登録**が正確（カテキン類（群）への安易なリンクは原著の対象を超える）。
- Kauz 2021（2.8）：渋味＝N-フェニルプロペノイル-L-アミノ酸類＋ポリフェノール配糖体＋フラバン-3-オール類、苦味＝アルカロイド＋2,5-ジケトピペラジン類の組合せ。
- Glabasnia & Hofmann 2006DOI 10.1021/jf062272c。高重合プロシアニジンの渋み閾値・タンパク質結合。試料はソルガム由来でカカオマトリクスではない（機構の参考に留める）。

---

## 6. pairing 記録との食い違い・訂正事項

1. **Rottiers et al. 2019 の DOI**：pairing I-3 は総説経由の推測として DOI 10.1007/s00217-019-03307-y を記録していたが、実在論文は "A multipronged flavor comparison of Ecuadorian CCN51 and Nacional cocoa cultivars", EFRT 245(11):2459–2478、**DOI 10.1007/s00217-019-03364-3**。旧 DOI は使わない。
2. **CCN-51 の祖先構成**：Boza 2014（Iquitos 45.4% が最大）と Motilal 2026（Awajun 45% が最大、Iquitos 25%）で最大成分が異なる。参照集団セット依存の推定値であり、単一の確定値として表示しない（1.2）。
3. **煙様オフフレーバーの起源**：Krause & Steinhaus 2025 は木煙曝露（乾燥時）を確認したが、2026 年の続報は過発酵でも同じフェノール類が生成すると示した。「煙様＝煙曝露」の断定は現在の文献では支持されない。pairing I-3 の「エクアドル産試料は同研究でオフフレーバーなしの参照試料」という記述は本調査では未確認（原著本文の確認が必要）であり、「エクアドル＝煙乾燥問題」と読める記録は作らない。
4. **ジアセチルの位置づけ**：pairing flavor-compounds.md 末尾表の「バター様（ジアセチル等）のチョコ・茶試料での (3) 実証は未確認」は、Deuscher 2020 の GC-O 検出頻度（OA 7、NIF 90–100%）と緊張関係にある。「GC-O 検出頻度法での寄与候補あり。再構成・欠落での単独検証は未確認」と更新するのが正確（5.2）。
5. **チョコレートの酸味と有機酸**：flavor-compounds.md の「特定有機酸の (3) 寄与は未確認」は、酢酸については Camu 2008（工程→含有量→製品官能）と Ullrich 2022（DoT）により「寄与実証あり」へ更新できる。乳酸は依然として単独実証なし。この非対称性を明記する。
6. **Frauendorfer & Schieberle 2006 の DOI**：pairing K2 では未確認だったが、本調査で **10.1021/jf060728k** と確定（NIST WebBook・原著）。
7. **品種決定論への歯止めの追加**：Ullrich 2023（単一品種ダーク16種）により、「品種が香味化合物組成を部分的にしか決めない」ことが一次根拠で示された。pairing 側の「遺伝集団のみから味を断定しない」という従来整理と整合し、それを強める材料になる。

---

## 7. 最終分類（統合時の作業リスト）

### (a) 新規素材・遺伝集団として収録可能なもの

| 対象 | 根拠 | 収録時の条件・注意 |
|---|---|---|
| 現代 Nacional 系（エクアドル）のダーク／リカー素材 | Colonges 2021（GWAS＋成分＋官能）、Rottiers 2019（EET 系交配種の官能・組成）、Fouet 2022（現代 Nacional の混合性） | 「現代 Nacional（祖先的 Nacional と Trinitario の混合を含む）」と範囲を明記。花様ノートは経路レベルの関連であり、個別化合物の寄与と混同しない |
| クローン CCN-51 の素材 | Boza 2014（遺伝的同定）、Rottiers 2019（官能で苦味・渋味・オフフレーバー方向、揮発組成）、Kadow 2013（組成）、Chetschik 2018（パルプ AEDA で低 FD） | 否定的側面も含め実測ベースで記述。祖先構成の数値は Boza 2014 値と Motilal 2026 値の併記か、数値を出さない |
| クローン TSH 565 の素材 | Bastos 2019（発酵動態の組成＋製造チョコの官能記述） | 組成＋官能記述レベル（GC-O なし）と明記。産地はブラジル南東部、単一発酵条件 |
| ドミニカ共和国産 Trinitario ダーク素材 | Guzmán Penella 2023（54試料の官能・揮発組成） | 産地内のばらつきが本質であり「平均的プロファイル」として固定しない。予測因子と寄与を混同しない。遺伝背景は Amelonado 優占の混成（Boza 2012）も併記可 |
| 伝統的品種レベル（Criollo／Forastero／Trinitario）の素材 | Frauendorfer 2008（Criollo 豆）、2019（Forastero 豆）、Ullrich 2023（16種の DoT 比較）、Elwers 2009（組成） | Ullrich 2023 の「品種は唯一の決定因子ではない」を必ず併記。試料範囲（どの研究のどの試料か）をリンクごとに示す |
| マダガスカル産ダーク素材 | Godočiková 2020（単一製品の組成）、Li 2021（遺伝構成は3群混在） | 「単一製品の組成実測のみ」と明記し、産地一般のプロファイルとして書かない。優先度は低め |
| 遺伝集団10件の分類エントリ（プロファイルなし） | Motamayor 2008 | Nacional・Criollo・Forastero・Trinitario 以外は「香味・成分の集団レベル実測なし」と明示した分類情報としてのみ。三軸検索の系統軸の選択肢にすることと、実測データがあることは区別する |

### (b) 既存素材へのリンク追加・格上げが可能なもの（登録済み化合物）

| 素材 | 化合物 | 変更内容 | 根拠（方法） |
|---|---|---|---|
| ダーク70%（焙煎） | リナロール | 新規リンク：寄与（実測） | Seyfried & Granvogl 2019（AEDA＋SIDA＋再構成）、Ullrich 2023（DoT） |
| ダーク70%（焙煎） | フェニルアセトアルデヒド | 新規リンク：寄与（実測） | Frauendorfer & Schieberle 2006（OAV>100・再構成）、2008（焙煎で増加） |
| ダーク70%（焙煎） | β-イオノン | 新規リンク：寄与（実測、条件付き） | Seyfried & Granvogl 2019（チョコで初定量・再構成構成成分）。寄与の大小は原著表確認後に確定 |
| ダーク70%（焙煎） | バニリン | 既存リンク（寄与・実測）の注記追加 | 市販品研究では添加有無が未明示。天然寄与の根拠は Frauendorfer 2006 のパウダー定量に置き、「配合由来の可能性を含む」と注記 |
| ダーク70%（未焙煎） | アルキルピラジン類 | 既存リンク（検出・実測）の維持・注記 | Frauendorfer 2008：顔ぶれは焙煎前後でほぼ同じで差は強度。未焙煎で最高 FD は酸類である点も併記 |
| カカオ分100% | リナロール、フェニルアセトアルデヒド | 新規リンク：寄与（実測、条件付き） | Seyfried & Granvogl 2019 の試料は市販99%バー。試料範囲を併記 |
| ミルク | バニリン | 既存リンク（寄与・実測）の注記追加 | Fricke & Schieberle 2020 で最高 FD 群だが添加有無は要旨で未明示。同上の注記 |
| ホワイト | バニリン | 既存リンク（検出・一般的知見）の維持 | Stewart 2017／2018：ホワイトの香りの主因は乳粉の加熱履歴。カカオバター由来の寄与実証は限定的という整理と整合 |
| ダーク70%（焙煎） | ジメチルスルフィド | 新規リンク：検出・相関レベルまで（寄与にはしない） | Guzmán Penella 2023（PLS 予測因子）。寄与実証ではないことを明記。ジメチルトリスルフィド（(c) で新規登録）と混同しない |
| ダーク70%（焙煎） | ベンズアルデヒド | 見送り寄り（弱い候補） | Owusu 2013 の PLS モデル成分の一つに過ぎず、寄与根拠が薄い。登録する場合は検出（一般的知見）止まり |

### (c) 新規化合物として登録すべきもの

優先度・根拠方法つき。いずれも「どの試料で、どの方法で」が言えるもののみ。

| 化合物 | 根拠（方法・試料） | リンク先の目安 |
|---|---|---|
| 3-メチルブタン酸（イソ吉草酸） | 再構成・OAV（ココアパウダー）、AEDA（Criollo／Forastero 豆）、最高 OAV 群（ダーク90/99%・ミルク） | ダーク（焙煎・未焙煎）、ミルク、100% |
| 2-メチルブタン酸 | AEDA FD 2048–4096（発酵カカオ）、DoT（Forastero チョコ） | ダーク（焙煎）。2-/3- ペアの証拠が多い点を注記 |
| フェニル酢酸 | 最高 FD＋再構成（ミルク）、最高 OAV 群（ダーク）、GC-O 判別因子（ダーク） | ミルク、ダーク（焙煎） |
| ジメチルトリスルフィド | 最高 FD 群（パウダー）、最高 OAV 群（ダーク・ミルク）、DoT（ダーク） | ダーク（焙煎）、ミルク、100% |
| フラネオール（HDMF） | 最高 FD 群（パウダー）、焙煎で増加（Criollo 豆）、DoT（ダーク）、コンチングで増加 | ダーク（焙煎）、ホワイト（粉乳由来として） |
| 2-フェニルエタノール | DoT（ダーク、花様・渋味側）、発酵由来の定量（Criollo 豆）、パルプ定量 | ダーク（焙煎・未焙煎） |
| 酢酸 | OAV（パウダー・ダーク）、発酵条件→製品酸味の官能実証（ガーナ）、DoT | ダーク（焙煎・未焙煎）、100%。香りと酸味を分けて記述 |
| 酪酸 | 最高 OAV 群（ミルク、>170） | ミルク |
| グアイアコール（2-メトキシフェノール） | OAV 上位（ダーク・ミルク通常品）＋オフフレーバー実証（Füllemann 2020、Krause 2025／2026） | ダーク、ミルク。**オフフレーバー文脈の併記が必須条件** |
| 酢酸2-フェニルエチル | AEDA FD 4096（発酵カカオ） | ダーク（焙煎）。寄与は AEDA レベルと明記 |
| 酢酸イソアミル | DoT（ダークの果実様ノート）、パルプ→豆の定量 | ダーク（焙煎） |
| 2-メチルブタン酸エチル／3-メチルブタン酸エチル | DoT（ダークの果実様エステル） | ダーク（焙煎）。2件を別化合物として登録 |
| (R)-δ-2-デセノラクトン（マッソイアラクトン） | 定量＋OAV＋添加実験（ココナッツ様の非典型的発酵カカオ） | 発酵カカオ文脈の注記つきでダークに検出・寄与（非典型的試料）として |
| δ-デカラクトン | 感覚指向分析（クラムチョコのクリーミーさ）、パルプ AEDA | ミルク（クラム製法の文脈を明記） |
| プロシアニジンB2／プロシアニジンC1 | DoT（製品ダークの渋味） | ダーク（焙煎）、100%。カテキン類（群）とは別に個別登録 |
| (−)-エピカテキン（個別） | DoT（Ullrich 2022）、組成の遺伝比較（Elwers 2009 は差なしの実証） | ダーク。群（カテキン類）との二重登録にならないよう役割を分ける |
| 2,5-ジケトピペラジン類（群） | 呈味の感覚指向分析＋定量基盤（Kauz 2021、Stark 系） | ダーク、ニブ文脈。苦味はアルカロイドとの組合せと明記 |
| N-フェニルプロペノイル-L-アミノ酸類（群） | 呈味の感覚指向分析（Kauz 2021） | ダーク。渋味の担い手の一つとして |
| ジアセチル（条件付き） | GC-O 検出頻度（ダーク）、OAV（半定量、ラボスケールダーク） | ダークに検出頻度レベルの寄与候補として。再構成・欠落の裏付けがないことを明記。ミルクへのリンクはしない |
| 4-ビニルグアイアコール（条件付き） | GC-O（Deuscher 2020、OA 80・NIF 83–100%）、パルプ AEDA | ダークに検出（GC-O）レベルまで。寄与リンクにはしない |

### (d) 保留・見送り

| 対象 | 判定 | 理由 |
|---|---|---|
| ブロンドチョコレート（素材） | 見送り（情報不足として存在のみ記録可） | 査読済みの香気・官能研究が確認できない。特許・メーカー情報は参考情報の格付けで、実測の根拠にしない |
| 遺伝集団8件（Amelonado、Contamana、Curaray、Guiana、Iquitos、Marañón、Nanay、Purús）のプロファイル付き収録 | 見送り | 集団レベルの香味・成分実測が確認できない（1.5）。分類エントリ（プロファイルなし）は (a) の通り可 |
| SCA 6／EET 62 の素材化 | 保留 | Kadow 2013 はパルプ・種子の組成のみで、製品での実測がない。EET 系は Rottiers 2019 の交配種群として (a) の現代 Nacional 側で扱う |
| ICS-95／IMC-67 の素材化 | 見送り | 交配親としての遺伝情報のみ。香味実測は未確認（ICS-95 の官能に触れる二次情報は一次確認できなかった） |
| ベネズエラ産プロファイル | 見送り | 遺伝研究のみ。チュアオ産の官能・揮発性実測が未確認 |
| コートジボワール産／タンザニア産プロファイル | 見送り | 香味の査読実測が確認できない |
| ベトナム／インドネシア産プロファイル（豆・チョコとして） | 保留 | 実測はパルプ段階のみ（Bickel Haase 2021）。豆・製品の研究が確認できれば格上げ |
| γ-デカラクトンの単独登録 | 見送り | FD が高くても OAV 0.00–0.15 という否定的実測がある。δ-デカラクトンの注記として言及するに留める |
| テトラメチルピラジン／2,3,5-トリメチルピラジンの個別登録 | 見送り／保留 | 含量≠寄与（閾値・試料依存で結論が割れる）。アルキルピラジン類（群）の扱いを維持 |
| アセトインの寄与リンク | 見送り | 含量のみで寄与実証なし |
| β-ダマセノンのカカオリンク | 見送り | チョコでの初定量は β-イオノンであり、ダマセノンのカカオ寄与は未確認 |
| メチオナールのカカオリンク | 保留 | パルプ AEDA のみ。豆・チョコでの寄与が未確認 |
| ホモフラネオール等の未確認候補群 | 見送り | カカオ試料での一次研究なし（5.5） |
| Cordero et al.（MHS-SPME 定量・OAV とされる研究） | 保留 | pairing 調査に続き本調査でも書誌の一次確認に至らなかった |
| ダークミルク（製品種類） | 見送り | 配合帯の呼称であり、種類別の成分研究としての独立根拠がない（pairing 整理を維持） |
| ルビーの香りプロファイル拡充 | 保留（現状維持） | 寄与レベルの香気研究が未確認。組成（Tuenter 2021）と小規模官能（Seremet 2019）の範囲を超えて書かない |

---

## 付記：確認した出典の集計

- 本調査で一次レコード（PubMed／PMC／出版社／原著）により書誌・内容を確認した新規出典：**29件**（Colonges 2021、Colonges 2022 PPP、Bastos 2019、Boza 2014、Motilal 2026、Elwers 2009、Kadow 2013、Kadow 2020、Chetschik 2018、Rottiers 2019、Li 2021、Guzmán Penella 2023、Owusu 2012、Owusu 2013、Godočiková 2020、Bickel Haase 2021、Frauendorfer & Schieberle 2006、同 2008、Füllemann & Steinhaus 2020、Porcelli & Steinhaus 2022、Porcelli, Neiens & Steinhaus 2021、Füllemann, Neiens & Steinhaus 2022、Krause & Steinhaus 2025、同 2026、Seyfried & Granvogl 2019、Fricke & Schieberle 2020、Ullrich 2022、Ullrich 2023、Kauz 2021）。
- 書誌確認レベル（scholarly レコードで照合、内容は pairing 記録の要約範囲）の新規出典：**16件**（Arevalo-Gardini 2019、Marcano 2009、Boza 2012、Camu 2008、Cartas 2024、Chávez 2024、Frauendorfer & Schieberle 2019、Counet 2002、Guckenbiehl 2022、Kothe 2013、Miller 2008、Ullrich 2021、Stewart 2018、André 2022、Akoa 2024、Colonges 2022 苦味渋味 GWAS）。
- 現行アプリ登録済みで本調査が位置づけを再確認した出典：14件（うち本書で詳記したのは Ac-Pangan 2023、Schnermann & Schieberle 1997、Samfaß 2021、Stewart 2017、Deuscher 2020、McClure 2022、Tuenter 2021、Seremet 2019、Stark 2006、Motamayor 2008 等）。

合計で新規・拡充の出典記録は **45件**（一次確認29＋書誌確認16）。数値（濃度・OAV 等）は原著要旨・本文で確認できた範囲のみ転記し、報道経由の数値（例：ジメチルトリスルフィドの OAV 840／730）は原著値として扱っていない。
