# ハーブ文献調査 拡充編 — flavor-pairing-lab

新規ハーブ候補の科学文献調査記録（第2ラウンド）。第1ラウンドの記録は `docs/research/herbs-research.md`（アプリリポジトリ内）および `herbs-research.md`（本ディレクトリ）を参照。本ファイルは未収録だった候補の調査であり、アプリへのデータ統合は別途行う。

## 調査対象候補（全15単位）
必須候補：マジョラム、レモンバーベナ、パセリ。
追加候補：チャービル、ヒソップ、サマーサボリー、ウインターサボリー、シソ（赤シソ・青シソ、ケモタイプ重点）、ラベージ、ホーリーバジル（スイートバジルと別種として）、レモンタイム（交雑種レベル／栽培品種単体を分離）、アップルミント、ミント栽培品種群、カレープラント。

## 方法・格付けルール（全パート共通、厳守）
- 査読付き原著論文・総説を主根拠とし、PubMed／PMC／出版社ページ等の一次書誌レコードで実在を確認する。DOI または PMID を記録し、確認できない場合は「未確認」と明記する。
- 拡大範囲として、プレプリント、学位論文、学会要旨、各国の公的機関サイト（農業・食品・植物分類の公的データベース等）、専門メディア、生産者・メーカーの技術発信も対象とする。ただし未査読・Web情報は**「参考情報」と明示**し、文脈付け・推測の補助にのみ用いる。実測・組成の根拠として提示しない。
- 査読論文と参考情報が食い違う場合は**査読論文を優先**し、食い違い自体を記録する。出典ごとに出典種別［査読原著／査読総説／プレプリント／学位論文／学会要旨／公的機関／専門メディア／メーカー技術情報］を明記する。
- 収録可否の判定では、参考情報のみに支えられた素材を (a) に入れない。
- `%`は特に断らない限り**精油中の%**（原著の定義による）であり、食品・茶葉全体の成分比ではない。化合物の「検出・存在（組成）」と「香気への寄与（GC-O／AEDA／OAV／官能）」を分けて記載する。組成比から寄与を推定しない。
- 種の混同を避ける：マジョラムとオレガノ、ホーリーバジルとスイートバジル、サマーサボリーとウインターサボリー、シソ PA型と PK型、カレープラントとカレーリーフは、それぞれ別物として扱う。
- 確認できない項目は**未確認**と明記し、推測で補わない。数値は創作しない。

## 統合にあたっての注記
- 本ファイルは5つの調査パート（パート1：マジョラム／レモンバーベナ、パート2：ホーリーバジル／レモンタイム／アップルミント／ミント栽培品種／カレープラント、パート3：パセリ／チャービル、パート4：シソ／ラベージ、パート5：ヒソップ／サマーサボリー／ウインターサボリー）の統合版である。各パートの原文は `parts/` に保存している。
- パート3〜5については、統合時に基幹出典を一次書誌レコードで再検証した：Masanetz & Grosch 1998（*Flavour Fragr J* 13:115-124、パセリ OAV）、Seo & Baek 2009（*J Agric Food Chem* 57(24):11537-11542、シソ PK型 GC-O）、Bylaite et al. 2000（DOI: 10.1021/jf990679u / PMID: 11312790、ラベージ GC-O）、Blank & Schieberle 1993（*Flavour Fragr J* 8:191-195、ラベージ抽出物 AEDA、原著PDFで確認）、Güllüce et al. 2003（*J Agric Food Chem* 51、サマーサボリー）、Petropoulos et al. 2004（DOI: 10.1002/jsfa.1846、パセリ部位別）、*Agronomy* 2022（DOI: 10.3390/agronomy12081949、根パセリ品種）、*Molecules* 2019（DOI: 10.3390/molecules24071374、シソ焙煎）。再検証で書誌詳細まで確定できなかった出典は、各リストで「DOI：未確認」等と明記してある。

## 出典件数の集計（出典リストに掲げたレコード数）
| パート | 素材 | 合計 | うち査読原著・総説 |
|---|---|---|---|
| 1 | マジョラム | 11 | 8 |
| 1 | レモンバーベナ | 10 | 5 |
| 2 | ホーリーバジル／レモンタイム／アップルミント／ミント栽培品種／カレープラント | 25 | 19 |
| 3 | パセリ | 8 | 7 |
| 3 | チャービル | 5 | 4 |
| 4 | シソ | 5 | 5 |
| 4 | ラベージ | 5 | 3 |
| 5 | ヒソップ | 4 | 2 |
| 5 | サマーサボリー | 4 | 4 |
| 5 | ウインターサボリー | 4 | 4 |
| **合計** | **15単位** | **81** | **61** |

残り20件の内訳：公的機関12、学位論文1、学会要旨2、専門メディア2、メーカー技術情報2、参考情報（要旨級）1。同一著者群・同一材料の学位論文（レモンバーベナ L3）は、対応する査読原著と独立した裏付けとしては数えていない（リストには格付けを明記して収録）。

---

---

# 科学文献調査記録：マジョラム／レモンバーベナ
## 拡大調査版（査読論文＋格付け付き参考情報）

**調査方法・格付けルール（本記録全体に適用）**
- PubMed／PMC／出版社ページ等の一次書誌レコードで実在を確認した査読論文を主根拠とする。
- 未査読・Web情報は **「参考情報」** と明示し、文脈付け・推測の補助にのみ用いる。実測値・組成の根拠として提示しない。
- 査読論文と参考情報が食い違う場合は査読論文を優先し、食い違い自体を記録する。
- 出典ごとに **出典種別**［査読原著／査読総説／プレプリント／学位論文／学会要旨／公的機関／専門メディア／メーカー技術情報］を明記する。
- `%`は、特に断らない限り **精油中の%（GC面積%等、原著の定義による）** であり、食品・茶葉全体の成分比ではない。化合物の「検出・存在」と「香気への寄与」は分けて記載する。
- 確認できない項目は **「未確認」** とする。数値は創作しない。
- プレプリントについては、両素材とも今回の検索範囲では該当するものを **確認できなかった（未確認）**。プレプリントを根拠とする主張は本記録にはない。

---

# 1. マジョラム

## 1.1 基本情報
- **日本語名／英語名：** マジョラム／marjoram, sweet marjoram
- **学名：** *Origanum majorana* L.（シソ科 Lamiaceae）。**オレガノ *Origanum vulgare* とは別種**であり、本記録では混同していない。
- **異名・同義語：** *Majorana hortensis* Moench（総説で使用）［査読総説 M1］。Kew POWOでは同型異名として *Amaracus majorana* (L.) Schinz & Thell.、*Thymus majorana* (L.) Kuntze 等が挙がる［公的機関 M-R1］。
- **使用部位：** 葉、花序（flowering tops）、茎を含む地上部。総説では「最もよく使われる部位は茎・花・葉」と整理される［査読総説 M5］。精油研究の多くは葉／地上部の水蒸気・水蒸留油を対象とする。
- **主要産地・分布（出典で確認できる範囲）：**
  - 原産地：Kew POWOでは **キプロス、トルコ（Türkiye）** が native とされ、それ以外（アルジェリア、ギリシャ、イタリア、スペイン、モロッコ、チュニジア、インド等）は introduced と区分される［公的機関 M-R1］。
  - **食い違いの記録：** 査読総説は「地中海諸国に広く分布」「特にモロッコ、アルジェリア、エジプト」等と広く記述する［M1, M2］。これは栽培・帰化を含む分布であり、**厳密な原産地はKewの区分（キプロス・トルコ原産、その他は導入・栽培）を優先**して読むべきである。
  - 栽培・商業文脈（参考情報）：エジプト産市販品を対象とした査読原著がある［後述 M6］ほか、メーカー情報ではエジプト・スペイン産油が流通する旨が見られるが、産地一般論の根拠にはしない［メーカー技術情報 M-R3］。

## 1.2 品種・ケモタイプの知見
- 査読原著のクラスター解析（既報50組成との階層クラスター）で **少なくとも5ケモタイプ**：① terpinen-4-ol 型、② *cis*-sabinene hydrate 型、③ *trans*-sabinene hydrate 型、④ linalool 型、⑤ carvacrol 型［査読原著 M3］。
- ギリシャ産は総説整理で terpinen-4-ol 型（精油中 37.10%）、thymol を主とする中間型（thymol 14.0%、carvacrol 0.2%）、carvacrol 型（carvacrol 74.8%）の3型が報告される［査読総説 M5 ※原著の引用整理であり、値はその産地・試料の精油中%］。
- **トルコの2型と誤同定リスク（重要）：** トルコには①油収率が低く carvacrol が微量で *cis*-sabinene hydrate（精油中 30–44%）＋ terpinen-4-ol（同 8–14%）を主とする通常の sweet marjoram 型と、②油収率・carvacrol が高く商業化される「white oregano（beyaz kekik）」型があると、トルコ産油の原著を引用する文献で整理される。同原著ではトルコ2地点の *O. majorana* 油で **carvacrol が精油中 78.27–79.46%** と報告される［査読原著（大学リポジトリ収録の書誌記録で確認）Baser et al. 1993, DOI: 10.1080/10412905.1993.9698283］。
  - したがって「*O. majorana* ＝常に sabinene hydrate／terpinen-4-ol 型」とは言えない。逆に carvacrol 高含有油だけを見て *O. vulgare*（オレガノ）と断定することもできない。**学名＋産地＋ケモタイプのセットで記録する必要がある。**

## 1.3 主要揮発性成分（精油組成）
以下はすべて **精油中の%**。試料・産地が異なれば値は大きく変わる。
- イランで栽培された試料を用いたマウス研究に付随するGC-MS：**terpinen-4-ol 32.69%** を主成分とし、γ-terpinene 12.88%、*trans*-sabinene hydrate 8.47%、α-terpinene 7.98%、sabinene 6.21%、α-terpineol 5.25%、*cis*-sabinene hydrate 2.92% 等、全24化合物で96.82%を同定［査読原著 M4］。
- ネパール（カトマンズ／バクタプル）産油：酸素化モノテルペノイドと terpinen-4-ol が両試料で predominate。具体的な主成分比は試料間で変動あり（論文本文表参照；要旨では数値を固定していないため本記録でも固定値として転記しない）［査読原著 M3］。
- 総説の整理：terpinen-4-ol と *cis*-sabinene hydrate が代表的な酸素化モノテルペンで、その他 linalool、α-terpineol、thymol、carvacrol 等が検出される［査読総説 M1］。**これは「検出」の整理であり、香気寄与の順位ではない。**
- 成長段階の影響を示す査読原著（ScienceDirect書誌で確認）：精油中 terpinen-4-ol 29.13–32.57%、*cis*-sabinene hydrate 19.9–29.27%、*trans*-sabinene hydrate 3.5–11.61% 等と生育段階で変動する［査読原著：Effect of growth stage on the content and composition of the essential oil and phenolic fraction of sweet marjoram, *Industrial Crops and Products* 系。DOI／PMIDは今回 **未確認** のため、数値は補助的に扱い、単独の根拠にはしない］。

## 1.4 香気寄与研究（GC-O、AEDA、OAV、官能評価）
- **GC-O：あり。** ポーランドの生産工程試料でGC/MS＋GC/Oを実施。14種の芳香化合物を同定・定量し、オルファクトメトリーでは **量的に優位だった linalool ではなく、*cis*-sabinene hydrate に対応する balsamic な香りが、殺菌前後を通じて主たる香り（dominant aroma）** と判定された。殺菌後も主臭は *cis*-sabinene hydrate のままだが強度は低下した［査読原著 M7］。
  - これは本調査で確認できた、組成比≠香気寄与を直接示す最も重要な証拠である。
- **官能評価：あり。** 乾燥法研究で記述的官能評価（descriptive sensory analysis）を併用し、真空マイクロ波乾燥240W等で fresh／vegetable odor のスコアが高いとされた［査読原著 M8］。GC-O研究でも sensory analysis で殺菌前後の香りの有意な変化が示された［M7］。
- **AEDA、OAV（香気寄与の希釈分析／臭気活性値）：未確認。** 今回の検索では *O. majorana* を対象としたAEDAやOAV算出を明示する査読論文を確認できなかった。

## 1.5 加工・乾燥による成分変化
- **乾燥法：** 対流乾燥（CD）、真空マイクロ波乾燥（VM／VMD）、対流予乾燥＋VM仕上げ（VMFD）を比較。新鮮マジョラムの揮発性成分総濃度は **825 mg/100 g 乾物基準（db）** で、大半の乾燥処理で減少したが、VMD 240W・360Wは例外だった。主要成分は *cis*-sabinene hydrate **229 mg/100 g db**、terpinen-4-ol **169 mg/100 g db**（※%ではなく乾物当たり濃度）。VMD 240Wが最良、次いで50℃＋240／360Wの併用と評価された［査読原著 M8］。
- **蒸気殺菌：** 総揮発性成分が **約49%損失** し、化合物ごとに損失率は異なる［査読原著 M7］。
- **蒸留に伴う変化（参考情報として併記する査読外知見）：** 専門メディアの総説的コラムは「水蒸気蒸留時の熱で *cis*/*trans*-sabinene hydrate とその酢酸エステルが terpinen-4-ol に変換され得るため、**精油組成は植物体そのものの組成と異なる**」と指摘する［専門メディア M-R2］。これは査読原著ではないため組成の根拠にはしないが、M3（ネパール原著）が「terpinen-4-ol 高含有は蒸留中の成分転位に起因し得る」と査読論文内でも述べていることと方向が一致する。したがって精油中の terpinen-4-ol %を生葉の含有率とみなしてはならない。

## 1.6 ハーブティー・抽出に関する研究
- 伝統的利用として、葉の infusion、全草の infusion（発熱・咳・鼓腸等への民間的使用）が総説に記録される［査読総説 M2］。**伝統的使用の記録であり、臨床的有効性の証明ではない。**
- 水系抽出そのものの査読研究はあるが、**「ハーブティーとしての揮発性成分の移行率」を測った研究は未確認**。
  - 水溶性画分から rosmarinic acid 等のポリフェノールが単離・同定され、rosmarinic acid がマジョラム抽出物の最も強い抗酸化ポリフェノールとされた研究がある［査読原著：Hossain et al., *J Sep Sci* 2014, PMID: 25161079, DOI: 10.1002/jssc.201400597］。これは溶媒抽出物の知見であり、通常の浸出茶の濃度を保証しない。
  - 水抽出物の急性毒性では、800 mg/kgまで腎・肝機能や血液指標への悪影響なしと報告する研究がある［査読原著：*Chem Biodivers* 2024, DOI: 10.1002/cbdv.202401580, PMID: 39446705］。動物・抽出条件限定的な知見である。

## 1.7 安全性の注意
- 総説は毒性学的評価で前臨床レベルでの安全性・無害性が支持されると整理する一方、ヒトでの薬物動態・バイオアベイラビリティの検証は今後の課題とする［査読総説 M2］。**「前臨床で安全」＝「精油の高濃度摂取が安全」ではない。**
- 精油の高濃度使用に関するヒトでの安全性データ：**未確認**（本調査の査読出典では、高濃度精油の経口・原液皮膚使用の安全域は確立されていない）。
- **誤同定リスク（出典で確認できる範囲）：**
  1. *O. vulgare*（オレガノ）との別種混同（学名レベル）。
  2. 同一種内の carvacrol 型「white oregano」と sweet marjoram 型の混同［Baser et al. 1993ほか］。
  3. **Spanish marjoram は別属別種**：専門メディアによれば Spanish marjoram 油はイベリア半島固有の *Thymus mastichina* L. から生産される［専門メディア M-R2と同じ媒体の Spanish Marjoram Oil 記事：参考情報］。「marjoram」という英名だけで同一視してはならない。

## 1.8 文脈情報（参考情報：実測の根拠にしない）
- 地中海料理・ハーブティー文化：スープ・シチュー、Herbes de Provence や Za'atar 等のブレンドでの使用、葉を熱水に浸すティーとしての利用が料理メディア等に広く書かれる［専門メディア／Web：参考情報］。査読論文でも「地中海の芳香植物で食品・伝統医療に広く使用」との位置付けは一致する［M2ほか］が、個別の歴史叙述（古代ギリシャの婚礼の花冠等）は本調査では一次史料で検証していないため **参考情報** に留める。

## 1.9 出典リスト（マジョラム）

**M1［査読総説］** Bina F, Rahimi R. Sweet Marjoram: A Review of Ethnopharmacology, Phytochemistry, and Biological Activities. *J Evid Based Complementary Altern Med*. 2017;22(1):175-185. DOI: 10.1177/2156587216650793 / PMID: 27231340. https://pubmed.ncbi.nlm.nih.gov/27231340/
- 支持できる主張：学名＝*Majorana hortensis* を異名とする sweet marjoram であること、精油から terpinen-4-ol、*cis*-sabinene hydrate 等が検出されること、伝統的使用の範囲。
- 支持できない主張：特定産地の組成%、香気寄与の順位、ヒトでの効能。

**M2［査読総説］** Bouyahya A et al. Traditional use, phytochemistry, toxicology, and pharmacology of *Origanum majorana* L. *J Ethnopharmacol*. 2021;265:113318. DOI: 10.1016/j.jep.2020.113318 / PMID: 32882360. https://pubmed.ncbi.nlm.nih.gov/32882360/
- 支持できる主張：地中海諸国での伝統的使用（infusion を含む）、成分群（テルペノイド、フラボノイド、フェノール酸）、前臨床毒性の整理。
- 支持できない主張：ヒトでの有効性・安全域の確定（著者ら自身が追加検証を要するとする）。

**M3［査読原著］** Paudel PN et al. Chemical Composition, Enantiomeric Distribution, Antimicrobial and Antioxidant Activities of *Origanum majorana* L. Essential Oil from Nepal. *Molecules*. 2022;27(18):6136. DOI: 10.3390/molecules27186136 / PMID: 36144869. https://pubmed.ncbi.nlm.nih.gov/36144869/
- 支持できる主張：ネパール2産地油の組成と変動、5ケモタイプのクラスター分類、蒸留中の転位が terpinen-4-ol 含量に影響し得る旨の考察、*cis*-sabinene hydrate が「強いスパイシーなマジョラム香」に関連付けられてきた旨の引用。
- 支持できない主張：他産地への一般化、食品全体の成分比。

**M4［査読原著］** Abbasi-Maleki S, Kadkhoda Z, Taghizad-Farid R. The antidepressant-like effects of *Origanum majorana* essential oil on mice through monoaminergic modulation using the forced swimming test. *J Tradit Complement Med*. 2020;10(4):327-335. DOI: 10.1016/j.jtcme.2019.01.003 / PMID: 32695649. PMC7365779.
- 支持できる主張：当該試料油のGC-MS組成（terpinen-4-ol 精油中32.69%等、上記数値）。
- 支持できない主張：ヒトでの抗うつ効果（マウス強制水泳試験の知見）、他のロットの組成。

**M5［査読総説］** *Origanum majorana* Essential Oil—A Review of Its Chemical Profile and Pesticide Activity. *Life*. 2022;12(12):1982. DOI: 10.3390/life12121982. PMC9785525（PMIDはPMC記録で確認；本調査では数値として転記しない）。
- 支持できる主張：使用部位（茎・花・葉）、ギリシャの3ケモタイプ整理、精油収率の幅が大きいこと。
- 支持できない主張：ケモタイプ値の原産地以外への適用（いずれも原著試料限定的）。

**M6［査読原著］** Comparative volatiles profiling of two marjoram products via GC-MS analysis in relation to the antioxidant and antibacterial effects. *Sci Rep*. 2024. PMC11561240.
- 支持できる主張：エジプトで広く消費される市販マジョラム製品2種で、抽出法（HS-SPME vs 石油エーテル）により得られる揮発性プロファイルが大きく異なること、HS-SPMEでは sabinene hydrate や terpinen-4-ol 等が主要揮発成分として検出されたこと。
- 支持できない主張：精油組成%とヘッドスペース組成%の同一視（手法依存であることが本論文自体の示す点）。

**M7［査読原著］** Wojtowicz E, Zawirska-Wojtasiak R, Przygoński K. Influence of steam water sterilization process on the content of volatile aroma compounds in marjoram (*Origanum majorana* L.) estimated with GC/MS and GC/O. *Pol J Food Nutr Sci*. 2007;57(Special issue 3A):151-155. DOI／PMID：**未確認**（誌名・巻号・頁は出版社ページで確認）。https://journal.pan.olsztyn.pl/INFLUENCE-OF-STEAM-WATER-STERILIZATION-PROCESS-ON-THE-CONTENT-OF-VOLATILE-AROMA-COMPOUNDS,98771,0,2.html
- 支持できる主張：GC-Oで *cis*-sabinene hydrate が主臭であること（linalool の量的優位にもかかわらず）、蒸気殺菌で総揮発成分が約49%損失すること。
- 支持できない主張：AEDA／OAVの値（本研究はそれらを算出していない）、他工程への損失率の一般化。

**M8［査読原著］** Calín-Sánchez Á, Figiel A, Lech K, Szumny A, Martínez-Tomé J, Carbonell-Barrachina ÁA. Drying methods affect the aroma of *Origanum majorana* L. analyzed by GC–MS and descriptive sensory analysis. *Ind Crops Prod*. 2015;74:218-227. DOI: 10.1016/j.indcrop.2015.04.067 / PMID：**未確認**。
- 支持できる主張：乾燥法による総揮発成分量の変化と上記 mg/100 g db 値、当該条件での官能評価結果。
- 支持できない主張：家庭乾燥等、異なる装置・条件への最適法の一般化。

**M-R1［公的機関・参考情報］** Royal Botanic Gardens, Kew. Plants of the World Online: *Origanum majorana* L. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:453303-1
- 位置付け：分類・原産地の確認に用いる公的データベース。組成・香気の根拠にはしない。総説の広い「分布」記述との差異は上記の通り記録した。

**M-R2［専門メディア・参考情報］** Lawrence BM. Progress in Essential Oils: Marjoram Oil. *Perfumer & Flavorist*. https://www.perfumerflavorist.com/fragrance/ingredients/article/21856037/progress-in-essential-oils-marjoram-oil
- 位置付け：蒸留時の sabinene hydrate→terpinen-4-ol 変換の指摘、Calabria産フェノール rich 油（carvacrol 68.5%、thymol 12.2%：実験室生産油）等の文脈情報。実測の主根拠にはせず、査読論文（M3）の転位に関する考察と整合する場合のみ補助的に引用する。

**M-R3［メーカー技術情報・参考情報］** New Directions Aromatics. Certificate of Analysis: Marjoram Essential Oil (Sweet). terpinen-4-ol 規格18–23%、当該ロット実測20.5%等を記載。
- 位置付け：**単一メーカー・単一ロットの規格値**であり、種全体の組成を支持しない。査読値（例：M4の32.69%）と数値が異なるが、これはロット・ケモタイプ差の可能性を示す文脈情報に留め、どちらが「正しい組成」とも断定しない。

---

# 2. レモンバーベナ

## 2.1 基本情報
- **日本語名／英語名：** レモンバーベナ／lemon verbena, lemon beebrush
- **学名：** *Aloysia citrodora* Paláu（クマツヅラ科 Verbenaceae）
- **異名・同義語（確認済み）：** *Aloysia triphylla* (L'Hér.) Britton、*Lippia citrodora* (Paláu) Kunth、*Lippia triphylla* (L'Hér.) Kuntze、*Verbena triphylla* L'Hér.、*Verbena citrodora* (Paláu) Cav.、*Zappania citrodora* (Paláu) Lam. 等［公的機関 L-R1, L-R2／査読総説 L1］。
  - **綴りの注意：** 文献では *citrodora* と *citriodora*（例：*Lippia citriodora*、*Aloysia citriodora*）が混在する。Kew POWOの解説では、原著者の綴りは *citrodora* であり、より一般的な *citriodora* は誤りとされる旨が記される［公的機関 L-R1］。検索・同定時は両綴りを併用する必要がある。
  - 指示のあった *Aloysia triphylla*、*Lippia citrodora* はいずれも異名として **確認できた**。
- **使用部位：** 葉（folium）。欧州薬局方の定義は「乾燥した全葉または断片化した葉」で、acteoside（verbascoside）含量の規格（乾燥生薬中、フェルラ酸として最低2.5%）がEMA評価報告書に引用される［公的機関 L-R2］。
- **主要産地・分布（出典で確認できる範囲）：**
  - 原産地：Kew POWOでは **アルゼンチン北西部、ボリビア、パラグアイ** が native。POWO収録のKew Bulletin解説では、北アルゼンチン（Salta, Jujuy, La Rioja, Catamarca）とボリビア南部の乾燥したアンデス間谷（標高2,300–3,250 m）が自生地とされる［公的機関 L-R1］。
  - 導入・栽培：フランス、スペイン、イタリア（サルデーニャ）、ブラジル、チリ、ペルー、メキシコ等へ introduced［L-R1］。査読総説は「南米原産で、北アフリカ・南欧にも分布」と要約する［査読総説 L1］。モロッコが主要生産地である旨の専門メディア記述があるが［専門メディア・参考情報］、公的統計では本調査で **未確認** のため産地の断定には用いない。

## 2.2 品種・ケモタイプの知見
- **アルゼンチン北西部が遺伝的多様性の中心**とされ、36試料（Salta, Jujuy, Catamarca, Tucumán）の解析で5つのケモタイプ群が示された：thujones 型、citronellal 型、carvone 型、citral（neral＋geranial）型、linalool 型。注目点として、**「citral を持つ植物」とされるにもかかわらず、36試料中 citral が主成分だったのは2試料のみ**で、大半は citronellal や thujones が優位だった［査読原著 L4］。
  - 他の査読論文が引用する同研究の優位成分の範囲（精油中%）：thujones 31.4–90.4%、citronellal 39.0–66.7%、carvone 48.2–70.9%、citral 51.0–54.3%、linalool 78.2–85.1%［査読原著（チリ産 *Aloysia* 研究）による引用整理。原著の個別試料値の転記ではなく範囲の要約として扱う］。
- 遺伝子型が精油組成の最も重要な要因であり、典型的なレモン様香の citral＋limonene 型のほか、citral が少ない型や sabinene、*cis*-thujone、citronellal が異常に高い型があると、アルゼンチンの系統研究を引用して整理される［査読原著 L5による引用整理］。
- したがって「レモンバーベナ精油＝常に citral 主成分」は **支持されない**。ケモタイプ未確認の材料では citral 含量を前提にできない。

## 2.3 主要揮発性成分（精油組成）
以下はすべて **精油中の%**。
- ポルトガル産材料、通常水蒸留（Clevenger, CHD）とマイクロ波支援水蒸留（MAHD）の比較：主成分は **geranial 精油中 18.7–21.1%、neral 同 15.3–16.2%**（抽出法により有意差あり）。geranial＋neral が citral を構成する［査読原著 L5］。
- 総説の要約：精油の主成分は neral と geranial、**抽出物（非揮発性画分）の最重要成分は verbascoside**［査読総説 L1］。精油と抽出物で主成分が全く異なる点に注意。
- ヨルダン産（生葉・乾燥葉）：主成分として limonene、geranial、neral、1,8-cineole、curcumene、spathulenol、caryophyllene oxide が挙がる（要旨は成分名のみで、%は本文表）［査読原著 L2］。学位論文に基づく数値（後述 L3）は査読論文と同一著者群・同一材料系統であり、独立した裏付けとは数えない。

## 2.4 香気寄与研究（GC-O、AEDA、OAV、官能評価）
- **GC-O／AEDA／OAV：未確認。** 今回の検索（PubMed、出版社、専門メディアを含む）では、レモンバーベナ精油・葉を対象にGC-O、AEDA、OAVを実施した研究を確認できなかった。citral（geranial／neral）が「レモン様の香り」の担い手であることは組成研究と総説の記述に基づく **推定の域** であり、GC-O等で寄与度を実測した主張としては記録しない。
- **官能評価（限定的にあり）：** エクアドル産 *A. citrodora* 油で sensory pleasantness が高く citral-like aroma と評価された研究がある［査読原著：Chemical Profiling, Sensory Qualities, and Bioactivities of Essential Oils Obtained from *Aloysia citrodora* and *Bursera graveolens* Ecuadorian Plants…, *Insects* 2025］。これは精油の嗜好性・印象評価であり、単一化合物の香気寄与の同定ではない。
- **食い違い／注意（参考情報との差）：** 香料専門メディア等は「citral が典型的には精油中25–40%」等の一般化を行う［専門メディア・参考情報 L-R3］。査読範囲ではポルトガル産で citral 合計約34–37%程度（L5の範囲合算）と整合する試料もある一方、ヨルダン産やアルゼンチン野生集団では citral が主成分でない例が査読論文で示されている（L2, L4）。**一般化した「典型的%」は採用せず、試料ごとの実測を優先する。**

## 2.5 加工・乾燥による成分変化
- **生葉 vs 乾燥葉（ヨルダン産）：** 生葉油と乾燥葉油で、検出されるテルペノイドやフェニルプロパノイド誘導体に量的な変動が観察された［査読原著 L2］。
- **学位論文での数値（参考ではなく学位論文として格付け；査読原著の根拠には格上げしない）：** Durham大学博士論文（2014）では83化合物を同定し、主成分群として limonene 12.14%、caryophyllene oxide 10.44%、curcumene 9.17%、1,8-cineole 7.94%、spathulenol 7.16%、geranial 4.03%、neral 2.55%（いずれも精油中%）が、後の査読論文（*Plants* 2022）の引用で示される［学位論文 L3］。
  - **査読論文との食い違いの記録：** このヨルダン材料は citral（geranial＋neral 合計約6.6%）が低く、ポルトガル産（L5）とは大きく異なる。これは誤りではなく材料・ケモタイプ差と解釈すべきであり、両者を平均した「標準組成」は作れない。
- **収穫時刻×生／乾燥：** トルコの研究で、収穫時刻と生葉／乾燥葉の交互作用が limonene、β-citral、α-citral 等多くの成分に有意に影響し、目的成分ごとに最適な収穫・処理条件が異なるとされた［査読原著：Türkmen et al., *Int J Chem Technol* 2025;9(1):153-159, DOI: 10.32571/ijct.1699598］。
- **抽出法：** CHDとMAHDで geranial／neral を含む一部成分に有意差があった［査読原著 L5］。抽出法が組成値を左右するため、方法の異なる研究の%を直接比較しない。

## 2.6 ハーブティー・抽出に関する研究
- **水系製剤の実測（査読原著）：** バーベナ（*Verbena officinalis*）とレモンバーベナの infusion／decoction をHPLC-DAD-ESI-MSで分析。主要成分群はフェニルプロパノイドで **乾燥抽出物中 16–120 mg/g**、その中で **verbascoside が最も多く、フェニルプロパノイド総量の最大97%** を占めた（※茶葉全体の97%ではない）。iridoid（hastatoside、verbenalin）、luteolin／apigenin のグルクロニドも検出された［査読原著 L6］。
- **加熱による変化（学会要旨）：** Planta Medica 学会抄録では、lyophilized infusion のフェニルプロパノイド収率8.3%に対し、煎液（5分煮沸1.7%、20分煮沸4.4%）と低く、verbascoside 類の熱不安定性が示唆された［学会要旨：Planta Med 2006;72:P_244, DOI: 10.1055/s-2006-950044］。学会要旨のため、査読原著（L6）の「水系製剤の主成分は verbascoside」という結論の補助に留める。
- **公的機関の位置付け：** EMA（HMPC）EUハーブモノグラフは、粉砕した葉を **ハーブティー（経口）** とする伝統的使用を定め、適応は「軽度の精神的ストレス症状の緩和と睡眠の補助」の伝統的使用である［公的機関 L-R2］。EMA評価報告書にはスペイン等での市販品として乾燥葉2–3 g／杯、1日1–3回等の用法の記録がある。これは **規制上の伝統的使用の記録であり、有効性の臨床的証明ではない**。
- **学会要旨（補完）：** 抽出溶媒の異なるレモンバーベナ葉抽出物の中枢作用を in vitro で検討した会議抄録がある［学会要旨：*Z Phytother* 2023;44(S01):S18-S20, DOI: 10.1055/s-0043-1769541］。in vitro・抄録レベルであり、ティーの効果の根拠にはしない。
- **南米のティー文化（文脈情報；原典は査読総説 L1 が整理）：** スペイン語圏で cedrón、hierba Luisa、Maria Luisa、ブラジルで erva-luísa 等と呼ばれ、葉の infusion が清涼飲料として、また **yerba mate（chimarrão／cimarrón）への添加**、ペルーの清涼飲料 Inka Kola の香料としての利用が総説に記録される。インカ文化の kallawaya による伝統的使用の記述も同総説による。**文化・使用文脈としては総説に基づき記録できるが、個別製品の現在の配合を保証するものではない。**

## 2.7 安全性の注意
- ヒトでの安全性・有効性は十分に評価されていない：総説の結論として「ヒトでの安全性と有効性は完全には評価されておらず、適切にデザインされたヒト研究が必要」と明記される［査読総説 L1］。
- 精油の内用に関する懸念：ポルトガル産油の研究は、Clevenger抽出油について肝毒性の追加評価が必要であり、内用する場合に懸念があり得る旨を述べる［査読原著 L5］。**精油と葉のティーは同一に扱わない。**
- **参考情報（メーカー／業界データベース；査読根拠にしない）：** 香料業界のデータベースでは、lemon verbena oil について IFRA の観点で感作性（sensitization）と光毒性が critical effect とされ、「香料成分として使用すべきでない（PROHIBITED）」とする情報や、citral が感作を理由とする制限成分として挙がる情報が見られる［メーカー／業界技術情報・参考情報］。また精油のSDSでは皮膚刺激・感作等のGHS分類が見られる。これらは **規制・業界実務の参考情報** であり、本調査では査読論文による裏付けがないため、用量基準としてアプリに転記しない。ただし「citral を含む濃縮精油を原液で皮膚に使うべきでない」という注意喚起の文脈付けには使える。
  - 注意：verbena absolute（*Lippia citriodora* 由来アブソリュート）に関する「1%以下」等のIFRA情報は **精油とは別材料** の情報であり、混同しない。
- **誤同定リスク：**
  1. *Verbena officinalis*（バーベナ／クマツヅラ）との混同。両者は別属であり、水系製剤の比較研究（L6）自体が両者を区別して分析している。
  2. 学名の綴り揺れ（citrodora／citriodora、属名 Aloysia／Lippia／Verbena）による別文献の取りこぼし・別種文献の混入。
  3. 「verbena」という英名のみの製品表示では種が特定できない。

## 2.8 出典リスト（レモンバーベナ）

**L1［査読総説］** Bahramsoltani R et al. *Aloysia citrodora* Paláu (Lemon verbena): A review of phytochemistry and pharmacology. *J Ethnopharmacol*. 2018;222:34-51. DOI: 10.1016/j.jep.2018.04.021 / PMID: 29698776. https://pubmed.ncbi.nlm.nih.gov/29698776/
- 支持できる主張：異名（*Aloysia triphylla*、*Lippia citrodora* 等）、精油の主成分は neral／geranial、抽出物の最重要成分は verbascoside という整理、南米での伝統的使用・呼称、ヒトでの安全性・有効性が未確立であること。
- 支持できない主張：特定試料の組成%、臨床的有効性。

**L2［査読原著］** Abuhamdah S et al. Pharmacological and neuroprotective profile of an essential oil derived from leaves of *Aloysia citrodora* Palau. *J Pharm Pharmacol*. 2015;67(9):1306-1315. DOI: 10.1111/jphp.12424 / PMID: 25877296. https://pubmed.ncbi.nlm.nih.gov/25877296/
- 支持できる主張：ヨルダン産生葉・乾燥葉油の主成分名、生／乾燥間の量的変動。
- 支持できない主張：%の一般化（要旨に%なし）、ヒトでの神経保護効果（in vitro 知見）。

**L3［学位論文］** Abuhamdah, Rushdie Mohammed Ali Said. Chemical, molecular pharmacology and neuroprotective properties of the essential oil derived from *Aloysia citrodora* Palau. Doctoral thesis, Durham University, 2014. http://etheses.dur.ac.uk/10663/（DOI／PMID：なし＝学位論文）
- 支持できる主張：著者自身の材料（ヨルダン産）についての83化合物同定と上記%（学位論文としての格付けで記録）。
- 支持できない主張：査読原著と同等の一般性。L2と同一系統の研究であり「独立した2件目の証拠」とは数えない。

**L4［査読原著］** Elechosa MA et al. Essential oil chemotypes of *Aloysia citrodora* (Verbenaceae) in Northwestern Argentina. *Biochem Syst Ecol*. 2017;74:19-29. DOI: 10.1016/j.bse.2017.07.003 / PMID：**未確認**。
- 支持できる主張：アルゼンチン北西部36試料の5ケモタイプ、citral が主成分でない試料が大半だったこと、同地域が多様性の中心とされること。
- 支持できない主張：栽培品・他地域の組成、ティーの香り（対象は風乾材料の水蒸留油）。

**L5［査読原著］** Sprea RM et al. Volatile Compounds and Biological Activity of the Essential Oil of *Aloysia citrodora* Paláu: Comparison of Hydrodistillation and Microwave-Assisted Hydrodistillation. *Molecules*. 2023;28(11):4528. DOI: 10.3390/molecules28114528 / PMID: 37299006.
- 支持できる主張：ポルトガル産材料で geranial 精油中18.7–21.1%、neral 同15.3–16.2%（抽出法で差あり）、異名の整理（*Aloysia triphylla* Royle、*Lippia triphylla* Kuntze 等）、精油内用時の肝毒性評価が未了である旨。
- 支持できない主張：他ケモタイプへの適用、食品としての安全性の確定。

**L6［査読原著］** Bilia AR, Giomi M, Innocenti M, Gallori S, Vincieri FF. HPLC-DAD-ESI-MS analysis of the constituents of aqueous preparations of verbena and lemon verbena and evaluation of the antioxidant activity. *J Pharm Biomed Anal*. 2008;46(3):463-470. DOI: 10.1016/j.jpba.2007.11.007 / PMID: 18155378. https://pubmed.ncbi.nlm.nih.gov/18155378/
- 支持できる主張：レモンバーベナ水系製剤（infusion／decoction）のフェニルプロパノイド量（乾燥抽出物中16–120 mg/g）と verbascoside の優位（フェニルプロパノイド中の最大97%）、verbenalin 等 iridoid の検出。
- 支持できない主張：揮発性成分（香り成分）の移行（本研究はポリフェノール分析）、飲用時の効果。

**L-R1［公的機関・参考情報］** Royal Botanic Gardens, Kew. Plants of the World Online: *Aloysia citrodora* Paláu. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:1015994-1
- 位置付け：受容名・異名・原産地（アルゼンチン北西部、ボリビア、パラグアイ）の確認専用。組成の根拠にしない。

**L-R2［公的機関・参考情報］** European Medicines Agency (HMPC). European Union herbal monograph on *Aloysia citrodora* Paláu (syn. *Aloysia triphylla* (L'Hér.) Kuntze; *Verbena triphylla* L'Hér.; *Lippia citriodora* Kunth), folium. EMA/HMPC/376770/2019（2021年採択）および Assessment report EMA/HMPC/376761/2019.
- 位置付け：葉をハーブティーとする伝統的使用、欧州薬局方の葉の定義・acteoside 規格、市販品の用法記録の確認。効能の実証としては扱わない。

**L-R3［専門メディア・参考情報］** Lawrence BM. Progress in Essential Oils: Lemon Verbena Oil. *Perfumer & Flavorist* ほか香料専門メディアの組成総覧（例：limonene 精油中4.2–22.7%、neral 同6.0–29.6%等の既報範囲の整理）。
- 位置付け：既報範囲の俯瞰と文脈付けのみ。範囲が広いこと自体がケモタイプ差を示唆するが、個別の実測値の根拠としては査読原著（L4, L5）を優先する。

---

## 総括（アプリ反映時の注意）
1. **マジョラム：** 香気寄与がGC-Oで実測されているのは *cis*-sabinene hydrate（M7）。terpinen-4-ol は「主成分」であっても、そのまま「香りの主役」と書かない。ケモタイプ（特に carvacrol 型）で前提が崩れる。
2. **レモンバーベナ：** GC-O／AEDA／OAVは **未確認**。citral 寄与は組成からの推定と明記する。精油（citral 類）とティー（verbascoside 類）では主役の成分群が全く異なる。
3. 参考情報（Kew、EMA、専門メディア、メーカーCOA／SDS、業界データベース）は分類・規制・文化文脈の確認にのみ使用し、組成%・香気寄与の表示根拠には使用していない。

---

# 科学文献調査 構造化記録
## ホーリーバジル／トゥルシー、レモンタイム、アップルルミント＋カレープラント
### 査読論文（一次確認済み）＋拡大範囲（参考情報・格付け付き）統合版

> **厳密さの運用（全素材共通）**
> - ％は特記ない限りすべて **精油中の％（GC／GC-MS相対組成）**であり、食品全体・茶葉全体の含有率ではない。
> - 化合物の「検出（組成）」と「香気への寄与（GC-O／AEDA／OAV／官能相関）」を分離する。
> - 出典種別を各出典に明記する：**査読原著／査読総説／学会要旨／公的機関／専門メディア／メーカー技術情報／学位論文（間接確認）／プレプリント**。
> - 未査読・Web情報は **「参考情報」** と明示し、実測・組成の根拠としては扱わない。査読論文と食い違う場合は論文を優先し、食い違い自体を記録する。
> - 参考情報のみに支えられる対象は「収録可能」とせず **「情報が薄く保留」** とする。
> - 今回、bioRxiv等で対象4タクソンに直接対応する **プレプリントは確認できなかった（未確認）**。存在しないと断定はしない。

---

## 1. ホーリーバジル／トゥルシー

### 基本情報
- **日本語名／英語名：** ホーリーバジル、トゥルシー／holy basil, tulsi, tulasi
- **学名：** *Ocimum tenuiflorum* L.（受容名）／異名 *Ocimum sanctum* L.
  - 旧文献の約半分は *O. sanctum* で索引されるため、両名検索が必須［査読総説 Cohen 2014、Jamshidi & Cohen 2017で確認］。
  - スイートバジル *Ocimum basilicum* とは**別種**。混同した資料は採用しない。
- **使用部位：** 葉（精油・茶の主対象）、葉＋花序（蒸留対象として Jamwal et al. 2025 が記載）
- **主要産地：** 公的機関 Kew POWO［公的機関］：熱帯・亜熱帯アジア原産、他熱帯域で栽培・帰化。査読文献の実測産地はインド（西ヒマラヤ、ベンガル、ビハール、南部諸州等）、ベトナム、タイ、スリランカ、ブラジル、中国、東ネパール（Jamwal et al. 2025 の導入部集約）。

### 品種・ケモタイプ
- Rama／Sri tulsi（緑葉）と Krishna／Shyama tulsi（紫葉）は *O. tenuiflorum* 内の形態・色素が異なる栽培型。Vana tulsi は別種 *O. gratissimum* であり、本種の品種として混ぜない［査読総説 Jamshidi & Cohen 2017］。
- ケモタイプは単一ではない：
  - ユージノール優位型、メチルオイゲノール優位型、メチルシンナメート共優位型、セスキテルペン（β-カリオフィレン／β-エレメン）優位型が産地・系統で入れ替わる（下記実測参照）。
  - 学会要旨［学会要旨 Thieme, Planta Medica 2016, DOI: 10.1055/s-0036-1596803］：*O. tenuiflorum* に methyl eugenol : eugenol 比が高い型／低い型の2ケモタイプが区別される、と報告。**参考情報の補助ではなく学会要旨レベルのため、本文のケモタイプ断定には使わず、査読原著の実測幅で裏付ける範囲でのみ言及可。**

### 主要揮発性成分（精油組成）
- **ベトナム産・葉（水蒸気／水蒸留、4産地）［査読原著 Le et al. 2024］：** 精油中で (E)-β-caryophyllene 27.8–49.0％、trans-β-elemene 20.3–37.1％、eugenol 9.0–44.0％。同一種でもユージノールが主成分とは限らない例。
- **インド・西ヒマラヤ産［査読原著 Jamwal et al. 2025］：** 精油中で eugenol 18.5–48.0％、methyl eugenol 22.5–27.3％、methyl cinnamate 13.3–25.7％、β-elemene 0.85–1.70％ほか11成分で97.38％を同定。海藻抽出物処理で eugenol 等が対照比で増加したと報告されるが、これは栽培処理実験であり一般組成ではない。
- **総説集約幅［Jamwal et al. 2025 導入部が先行文献を集約］：** eugenol 1.94–60.20％、methyl eugenol 0.87–82.98％、methyl cinnamate 36.6–66.4％、β-caryophyllene 4.13–44.60％、β-elemene 0.76–32.41％（いずれも精油中）。**幅が極端に広いこと自体が結論であり、単一の「代表値」は作らない。**
- Raina et al. 2013［査読原著、他論文経由で書誌確認、DOI: 10.1007/s10722-013-9981-4］：インド産の香気成分化学的特徴付けとして引用されるが、本調査では原著全文の数値は未確認のため、数値の根拠には使わない。

### 香気寄与研究
- **あり（ただし書誌の一次確認が不完全な1件に依存）。**
  - スリランカ産・葉精油の GC-O＋AEDA 研究（検索断片で内容確認、**DOI／PMID は本調査で一次レコード確認できず＝その旨明記**）：精油組成では caryophyllene oxide 23.8％、β-caryophyllene 18.2％、germacrene D 14.6％、α-copaene 14.4％、eugenol 10.0％（精油中）だったのに対し、香気インパクト成分として11成分（eugenol, rotundone, β-damascenone, linalool, geraniol 等）が同定され、優位とされたのは eugenol, rotundone, 3-hydroxy-4,5-dimethyl-2(5H)-furanone（sotolon様フラノン）、coumarin, vanillin で、**組成順位と香気寄与順位が一致しない**ことが示された。
  - **適用限界：** DOI／PMID未確認のため、この素材の香気寄与の「確定根拠」には格上げしない。アプリ表示では「GC-O研究あり（書誌要再検証）」止まりとする。
- 別系統研究（agris経由で要旨確認）：香りの強い系統は eugenol が豊富で methyl eugenol を欠き、弱い系統は逆、という系統間相関が報告される。これは官能／e-noseとの相関であり、単一化合物の閾値証明ではない。

### 加工・乾燥による成分変化
- 蒸留法比較（甜バジルとの比較研究、ResearchGate断片）：水蒸留 vs 水蒸気蒸留で *O. tenuiflorum* 精油収率・多成分濃度が変わり、methyl eugenol は水蒸留で高かったとされる。**査読誌名・DOIの一次確認が取れていないため参考扱い。**
- 乾燥自体を変数とした *O. tenuiflorum* 専用査読原著は **未確認**。スイートバジル *O. basilicum* の陰干し AEDA 研究を本種に流用しない。

### ハーブティー・抽出
- **最も研究が多い素材。** Jamshidi & Cohen 2017［査読総説＝系統的レビュー］：摂取後に臨床アウトカムを報告したヒト研究24件を同定（代謝、循環器、免疫、神経認知）。形態は葉製剤・抽出物が中心で、「お茶として何杯で何が起きるか」を単一に定量化した結論はない。
- Cohen 2014［査読総説］：アーユルヴェーダにおける日常的摂取・茶用途の文脈、ストレス（物理・化学・代謝・心理）への多面的作用の整理。
- Kew POWO［公的機関・参考情報］：タイ伝統医療での葉／全草の利用、タイ料理の主要な風味材料としての記載。**文脈付けには使えるが、組成・効能の実測根拠にはしない。**

### 安全性
- Jamshidi & Cohen 2017：レビュー対象24件のヒト研究で **有意な有害事象の報告はなかった**。ただし著者ら自身が用量・剤形・対象集団の未確定を明記しており、「安全が証明された」ではない。
- 学会要旨［Thieme 2016、前出］および査読総説 *Ocimum* chemodiversity 総説［PMC8326315］：methyl eugenol と methyl chavicol（estragole）は一定濃度で遺伝毒性／発がん性が懸念される化合物として規制閾値の文脈で扱われる。紫葉型で methyl eugenol が高い系統があるとの報告もある。**精油の高濃度利用と、葉を茶として通常量使う場合を同一視しない。** 妊娠中・授乳中、抗凝固・血糖関連薬との併用については、本調査の査読原著で直接検証されたデータは未確認であり、一般論で補わない。

### 出典リストと主張範囲
1. **［査読原著］** Le D.G. et al. Essential Oil and Waste Hydrosol of *Ocimum tenuiflorum* L. *Chem Biodivers* 2024;21:e202401161. DOI: 10.1002/cbdv.202401161 / PMID: 39073007. https://pubmed.ncbi.nlm.nih.gov/39073007/
   - 支持できる：ベトナム産葉精油の産地間差、セスキテルペン優位になり得ること、ハイドロソル側に eugenol が濃縮され得ること。
   - 支持できない：世界共通の組成、茶の風味、ヒトでの効能。
2. **［査読原著］** Jamwal S. et al. Enhancing growth, yield, essential oil content, and composition of holy basil… *BMC Plant Biol* 2025;25:84. DOI: 10.1186/s12870-025-06064-1 / PMID: 39838299. PMC11753027
   - 支持できる：西ヒマラヤ栽培条件での eugenol／methyl eugenol／methyl cinnamate 共優位プロファイル、処理による変動。
   - 支持できない：無処理・他産地への一般化。
3. **［査読総説］** Jamshidi N., Cohen M.M. The Clinical Efficacy and Safety of Tulsi in Humans: A Systematic Review. *Evid Based Complement Alternat Med* 2017;2017:9217567. DOI: 10.1155/2017/9217567 / PMID: 28400848
   - 支持できる：ヒト研究の件数と領域、有害事象報告の有無（レビュー範囲内）。
   - 支持できない：特定のペアリング効果、特定用量の有効性。
4. **［査読総説］** Cohen M.M. Tulsi – *Ocimum sanctum*: A herb for all reasons. *J Ayurveda Integr Med* 2014;5:251-259. DOI: 10.4103/0975-9476.146554 / PMID: 25624701
   - 支持できる：伝統的文脈と研究領域の整理。著者が関連企業コンサルタントである利益相反が原著に明記されている点も記録する。
   - 支持できない：単独での臨床推奨。
5. **［公的機関］** Kew Plants of the World Online, *Ocimum tenuiflorum* L. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:453130-1/general-information
   - 支持できる：受容名、原産域の分類学的整理（参考情報）。
   - 支持できない：精油％、香気寄与。
6. **［学会要旨］** Planta Medica 2016 comparative genomics of eugenol O-methyltransferase. DOI: 10.1055/s-0036-1596803
   - 支持できる：methyl eugenol 比によるケモタイプ区分という研究仮説の存在。
   - 支持できない：製品レベルの安全性判定。

**判定：収録可能（査読根拠あり）。** ただし香気寄与は GC-O 1件の書誌再検証が残るため、表示は組成と分離する。

---

## 2. レモンタイム

### 基本情報
- **日本語名／英語名：** レモンタイム／lemon thyme, citrus thyme
- **学名：** *Thymus* × *citriodorus* (Pers.) Schreb.（交雑種として × を付ける表記が査読総説の主流）／同義表記 *Thymus citriodorus*、*T. serpyllum citratus* 等
- **交雑式：** *T. pulegioides* × *T. vulgaris*［査読総説 Oliveira et al. 2023；公的機関系 PFAF／Kew 受容も hybrid とする］
- **使用部位：** 地上部／葉（精油、乾燥ハーブ、茶・料理）
- **主要産地：** 南西ヨーロッパを交雑種の在来範囲とする公的整理がある一方、査読実測はリトアニア、トルコ南東アナトリア、イラン、ポルトガル、トルコ等、地中海〜西アジアの栽培試料が中心。単一の「原産地＝品質」を主張できるデータはない。

### 分類をめぐる食い違い（記録義務）
- **［公的機関・大学普及］** North Carolina Extension Gardener Plant Toolbox：DNA検査で独立種と判明したとし、品種として ‘Archers Gold’, ‘Doone Valley’, ‘Silver Queen’, ‘Variegata’ を挙げる。
- **［査読総説］** Oliveira et al. 2023：科学界・ナーセリー・Kew が交雑種としての地位を受け入れているとしつつ、DNA研究で交雑ではないとする結果との論争があることを明記。
- **［専門メディア／百科事典系］** Wikipedia は両論を併記。
- **優先順位の適用：** 本記録では査読総説＋Kew の **交雑種 *Thymus* × *citriodorus*** を採用し、Extension の「独立種確定」は **参考情報として食い違いを記録**し、採用しない。

### 品種・ケモタイプ
- 種／交雑種レベルでは **geraniol／citral 型**が繰り返し報告されるが、後述の terpinolene 型のように全く異なるプロファイルもあり、「レモンタイム＝常に citral 型」とは言えない。
- 栽培品種（‘Silver Queen’, ‘Aureus’, ‘Doone Valley’, ‘Variegata’, ‘Lemon Supreme’, ‘Lime’ 等）は園芸的選抜（葉色・斑入り・匍匐性）で、**品種ごとの査読精油データはほぼ無い**。
  - 例外的に ‘Silver Queen’ 抽出物の GC-MS 研究（ウクライナ誌, DOI: 10.14739/2409-2932.2022.1.251416）が索引上確認できるが、本調査では全文の一次確認ができておらず、品種の代表組成としては使わない。
  - よって **栽培品種単体は「情報が薄く保留」**（下記判定参照）。

### 主要揮発性成分（精油組成）
- **リトアニア産［査読原著 Jurevičiūtė et al. 2019、Plants総説経由で数値の一次転記を確認］：** 精油中で geraniol 36.6％、geranial 17.5％、nerol 11.5％、neral 10.2％。geranial＋neral が citral に相当する。蒸留時間が長くなるとモノテルペン割合が下がりセスキテルペンが上がり、60分超で追加の変化は乏しい、という **蒸留時間依存性** が同原著の主題。
- **トルコ産［査読原著 Kizil & Tonçer 2016, DOI: 10.1515/cerce-2016-0018］：** 精油中で trans-geraniol 30.07％、trans-citral 15.06％、3-octanol 6.18％など22成分。
- **トルコ南東アナトリア産［査読原著 Tonçer et al. 2017, DOI: 10.15835/nbha45110672］：** 全く異なり、terpinolene が開花期に精油中71％まで達し、α-terpineol, linalool, bornyl acetate, borneol が主成分群。精油収率は開花前2.0％、開花期1.9％、開花後1.3％（w/w、空気乾燥試料の水蒸留）。
  - **食い違いの記録：** 同じ *T.* × *citriodorus* 名でも geraniol／citral 型と terpinolene 型が両立する。産地・系統・収穫期を併記しない組成引用は禁止。
- **圃場比較［査読原著, *Horticulturae* 2026;12:195］：** geraniol 45.37％、neral 15.62％、citral 16.79％（精油中）、収率0.60％、geraniol／citral 型と分類。発行年が新しいため、既存文献との整合は今後の追試待ちとして扱う。

### 香気寄与研究
- **GC-O／AEDA／OAV を *T.* × *citriodorus* 単独で実施した査読研究は未確認。**
- 「geraniol と citral（geranial／neral）がレモン様香気を与える」という記述は査読総説［Oliveira et al. 2023；Appl Sci 2024 の総説的記述］にあるが、これは **化合物の一般的香気特性からの解釈**であり、本種精油での閾値・寄与率の実測ではない。アプリでは「組成からの推定（未検証の香気寄与）」と分離表示すること。

### 加工・乾燥・収穫期
- Jurevičiūtė et al. 2019：水蒸留時間による組成変化（上記）。
- Tonçer et al. 2017：生育段階（開花前／開花期／開花後）による収率・terpinolene 割合の変化。試料は air-dried であり、乾燥法自体の比較ではない。
- Omidbaigi & Fattahi（イラン、地域誌）［査読原著（地域誌）］：陰干し（shade air-dried）試料で収穫期比較、精油含量は開花初期に最高2.21％だが生育段階間に有意差なし、収量込みでは結実期収穫が有利と結論。
- 乾燥法（凍結乾燥 vs 熱風等）を本種で比較した研究は **未確認**。*T. vulgaris* の乾燥研究を流用しない。

### ハーブティー・抽出
- Oliveira et al. 2022［査読原著, *J Ethnopharmacol*］：精油とハイドロレート（芳香蒸留水）を抗アクネ用途で化学的特徴付け・安全性プロファイル評価。精油に一定の細胞毒性があり短期・急性期向き、ハイドロレートは生体適合性が高く日常用途向き、という対比。飲用茶の研究ではない。
- Oliveira et al. 2023［査読総説］：水／水アルコール抽出物は flavonoids, phenolic acids（rosmarinic acid が主要抗酸化フェノールとして他研究で同定）, triterpenic acids が中心と整理。茶（熱水浸出）専用の組成・官能査読研究は **未確認**。
- 参考情報［専門メディア／園芸情報］：魚・鶏肉、サラダ、ハーブティーブレンドへの利用が広く紹介されるが、実測根拠にはしない。

### 安全性
- Oliveira et al. 2023：有害／毒性作用を扱った研究自体が少なく、製剤の有効性・安全性の特徴付けには追加研究が必要と総説が明記。
- Oliveira et al. 2022：精油の in vitro 細胞毒性、*Daphnia magna* での生態毒性で精油は GHS Acute 3、ハイドロレートは無毒性分類。**in vitro／生態毒性の結果をヒト経口安全性に直結させない。**
- citral を含む精油一般の皮膚感作・希釈上限（citral 含有率依存）についてはアロマセラピー専門情報［専門メディア］があるが、本種固有の査読安全性データではないため **参考情報**止まり。

### 出典リストと主張範囲
1. **［査読原著］** Jurevičiūtė R. et al. Composition of essential oil of lemon thyme (*Thymus* × *citriodorus*) at different hydrodistillation times. *Nat Prod Res* 2019;33:80-88. DOI: 10.1080/14786419.2018.1434642（PMIDは総説索引経由、原著レコードでの直接確認は未完了のため数値利用は総説転記範囲に限る）
   - 支持できる：geraniol／citral 型プロファイルの一例、蒸留時間依存性。
   - 支持できない：全産地共通の組成。
2. **［査読総説］** Oliveira A.S. et al. *Thymus* × *citriodorus*: an Emerging Aromatic and Medicinal Hybrid Plant… *Rev Bras Farmacognosia* 2023;33:1089-1109. DOI: 10.1007/s43450-023-00423-5
   - 支持できる：交雑起源、geraniol が主要成分として広い幅で報告されること、抽出物のフェノール系整理、安全性研究の不足。
   - 支持できない：特定ペアリングの相性、茶の効能。
3. **［査読原著］** Oliveira A.S. et al. Chemical characterization and bioactive potential of *Thymus* × *citriodorus* preparations for anti-acne applications. *J Ethnopharmacol* 2022;287:114935. DOI: 10.1016/j.jep.2021.114935
   - 支持できる：精油 vs ハイドロレートの用途適性の対比（皮膚用途の範囲）。
   - 支持できない：経口・食品用途の安全性。
4. **［査読総説］** Etri K., Pluhár Z. Exploring Chemical Variability in the Essential Oils of the *Thymus* Genus. *Plants* 2024;13:1375. DOI: 10.3390/plants13101375 / PMID: 38794445
   - 支持できる：属全体のケモタイプ多様性の中でのレモンタイムの位置付け。
   - 支持できない：本種単独の新規実測。
5. **［査読原著］** Tonçer Ö. et al. Essential Oil Composition of *Thymus* × *citriodorus* at Different Harvest Stages. *Not Bot Horti Agrobot* 2017;45:185-189. DOI: 10.15835/nbha45110672
   - 支持できる：terpinolene 型の存在、収穫期による収率変化。
   - 支持できない：geraniol 型文献との統合した「平均像」。
6. **［公的機関］** NC State Extension, Lemon Thyme *Thymus* x *citriodorus*. https://plants.ces.ncsu.edu/plants/thymus-x-citriodorus/common-name/lemon-thyme/ ／ RHS, *Thymus citriodorus* ambig. https://www.rhs.org.uk/plants/96407/thymus-citriodorus-ambig/details
   - 支持できる（参考情報）：栽培品種名の園芸的整理、料理用ハーブとしての位置付け。
   - 支持できない：分類の確定（査読と食い違うため）、組成％。

**判定：交雑種レベルでは収録可能（査読根拠あり、ただし組成の産地差を必須表示）。栽培品種単体（‘Silver Queen’ 等）は情報が薄く保留。**

---

## 3a. アップルミント

### 基本情報
- **日本語名／英語名：** アップルミント／apple mint
- **学名：** *Mentha suaveolens* Ehrh.／異名として *Mentha rotundifolia* との混用が旧文献・商品名に残る（Wang et al. 2013 の ‘variegata’ は *M. rotundifolia* ‘variegata’ 名義）。**種同定が曖昧な資料は採用しない原則により、名義の揺れがある資料はその旨を明記して格下げする。**
- **使用部位：** 葉／地上部（精油、抽出物、茶・料理の文脈）
- **主要産地：** 南・西ヨーロッパ原産［査読原著 Aldogman et al. 2022］。実測はモロッコ、イタリア、コルシカ、スペイン東部イベリア、エジプト、サウジアラビア、ルーマニア等、地中海圏が中心。

### 品種・ケモタイプ（本調査で最も変動が大きい）
査読総説 Božović et al. 2015 が3つの大プロファイルに整理：**① pulegone 優位型、② piperitenone oxide 優位型、③ piperitenone oxide／piperitone oxide 混在型**。これに加えて後続原著で carvone 型、menthol 優位例も報告され、固定した「アップルミントの香り」を単一化合物で定義できない。
- 東イベリア2集団［査読原著 Llorens-Molina et al. 2017］：piperitenone oxide 型 35.2–74.3％ と piperitone oxide 型 83.9–91.3％（いずれも精油中）が集団ごとに分かれ、生物気候・土壌塩分／水分と関連付けられた。
- サウジアラビア産［査読原著 Aldogman et al. 2022］：**carvone 型**で、carvone が茎・葉・全草で45–64％（精油中）。モロッコ／イタリア型とは別物として扱う。

### 主要揮発性成分（精油組成、代表例を混ぜない）
- モロッコ産例［Božović et al. 2015 集約］：piperitenone oxide 74.69％、別のモロッコ試料で81.67％（精油中、個別試料値）。
- イタリア・タルクイーニア産例［同総説］：piperitenone oxide 90％超（精油中、個別試料値）。
- モロッコ産［査読原著 El Hachlafi et al. 2023］：piperitenone oxide 74.55％（精油中）。
- 地中海産［査読原著, *Plants* 2022, DOI: 10.3390/plants11223084］：piperitenone oxide 71.19％／別表記74.57％（精油中、試料表記ゆれに注意）。
- 対照例：モロッコ産で pulegone 85.5％を主成分とする試料、menthol 40.50％を主成分とする試料も総説に収録される。**「通常は piperitenone oxide」は頻度の記述であり、保証ではない。**

### 香気寄与研究
- **GC-O／AEDA／OAV による *M. suaveolens* の香気寄与査読研究は未確認。**
- 「フルーツ様、スペアミント様の風味」は総説の記述的表現であり、閾値実測ではない。piperitenone oxide が多いことと、ヒトが「リンゴ様」と感じることの因果は未検証として扱う。

### 加工・乾燥による成分変化
- **種レベル：** Aldogman et al. 2022 が fresh vs dried（部位別：全草・葉・茎）を直接比較した数少ない査読原著。全草の揮発成分収率は fresh 0.57±0.03％ → dried 0.225±0.01％と低下する一方、部位により増減方向が異なり、非揮発性では rosmarinic acid が fresh／dried とも主要フェノール（28,002.5–6,558 µg/g の範囲、部位・状態で変動）とされた。乾燥＝一律劣化とは書けない。
- **栽培品種レベル（パイナップルミント）：** 下記3b参照。種の結果を品種に自動適用しない。

### ハーブティー・抽出
- エタノール抽出物の抗真菌・抗酸化（in vitro）が Aldogman et al. 2022 で扱われるが、**飲用ハーブティー（熱水浸出）の組成・官能を直接測った査読研究は未確認**。
- 参考情報［専門メディア］：ミントティー、サラダ、デザートの garnish 等の料理文脈は広く紹介されるが、実測根拠にはしない。

### 安全性
- **pulegone への注意が必須。** pulegone 優位ケモタイプが実在するため、「アップルミントだから menthol が少なく安全」とは書けない。
- ［公的機関］EMA／HMPC Public statement on herbal medicinal products containing pulegone and menthofuran（Rev.1, 2016, EMA/HMPC/138386/2005）：食品での TDI 0.1 mg/kg体重を設定し、高摂取のペパーミント油等が原因不明の肝反応の原因となり得ることに注意喚起。**これは *M. suaveolens* 専用のモノグラフではなく、pulegone 含有ミント類一般への公的警告として参考情報に格付けする。** 精油の経口大量摂取と、葉の通常の食品量を混同しない。
- Civitelli et al. 2014［査読原著］は HSV-1 に対する in vitro 活性の研究であり、安全性・臨床有効性の根拠にはならない。

### 出典リストと主張範囲
1. **［査読総説］** Božović M., Pirolli A., Ragno R. *Mentha suaveolens* Ehrh. Essential Oil and Its Main Constituent Piperitenone Oxide. *Molecules* 2015;20:8605-8633. DOI: 10.3390/molecules20058605 / PMID: 25985361
   - 支持できる：ケモタイプの多様性の全体像、地域別試料値の出典付き整理。
   - 支持できない：目の前の市販品の組成。
2. **［査読原著］** Llorens-Molina J.A. et al. *Mentha suaveolens* Chemotypes in Eastern Iberian Peninsula. *Chem Biodivers* 2017;14:e1700320. DOI: 10.1002/cbdv.201700320 / PMID: 28886241
   - 支持できる：piperitenone oxide 型と piperitone oxide 型の集団分化と環境関連。
   - 支持できない：イベリア以外の産地への外挿。
3. **［査読原著］** Aldogman B. et al. Investigation of Chemical Compositions… of *Mentha suaveolens* L. from Saudi Arabia. *Molecules* 2022;27:2949. DOI: 10.3390/molecules27092949 / PMID: 35566313
   - 支持できる：carvone 型の存在、fresh／dried・部位別比較、rosmarinic acid の主要フェノール性。
   - 支持できない：地中海型への一般化。
4. **［査読原著］** El Hachlafi N. et al. Phytochemical analysis… *Mentha suaveolens*… *Biomed Pharmacother* 2023;164:114937. DOI: 10.1016/j.biopha.2023.114937 / PMID: 37267633
   - 支持できる：モロッコ産 piperitenone oxide 74.55％（精油中）という単一試料実測、in vitro 活性の範囲。
   - 支持できない：ヒトでの抗糖尿病等の効能。
5. **［査読原著］** Civitelli L. et al. In vitro inhibition of HSV-1 by *Mentha suaveolens* essential oil and piperitenone oxide. *Phytomedicine* 2014;21:857-865. DOI: 10.1016/j.phymed.2014.01.013 / PMID: 24629600
   - 支持できる：in vitro 抗ウイルス活性（実験系の範囲）。
   - 支持できない：食品・茶の効果。
6. **［公的機関］** EMA HMPC Public statement on pulegone and menthofuran, 2016. https://www.ema.europa.eu/en/documents/scientific-guideline/public-statement-use-herbal-medicinal-products-containing-pulegone-and-menthofuran-revision-1_en.pdf
   - 支持できる（参考情報）：pulegone 含有製剤への公的注意の存在。
   - 支持できない：*M. suaveolens* 葉の通常食品量の危険性の定量化。

**判定：種レベルでは収録可能（査読根拠あり、ケモタイプ変動と pulegone 注意を必須表示）。**

## 3b. ミント栽培品種（パイナップルミント、チョコレートミント等）— 拡大調査の重点

### パイナップルミント *M. suaveolens* ‘Variegata’
- 同定：斑入り（白縁）を持つ *M. suaveolens* の栽培品種（cv. *variegata*）であることは査読原著［BMC Plant Biol 2023, DOI: 10.1186/s12870-023-04312-w］の背景記述で確認できる。別名義 *Mentha rotundifolia* ‘variegata’（Wang et al. 2013）との名義揺れがある。
- 査読実測が複数あるが **結果が大きく食い違う**：
  - BMC Plant Biol 2023：piperitenone oxide が主要な薬用成分とされ、最適化条件で精油中81％という予測値（NaCl＋GABA処理の応答曲面法による予測であり、無処理の代表値ではない）。
  - Wang et al. 2013［査読原著, *J Essent Oil Bearing Plants* 16:630-635］：中国産 ‘variegata’ 葉で、空気乾燥（22℃）の精油収率0.63％ vs オーブン乾燥（60℃）0.31％、主成分は **cis-jasmone 36.77％（空気乾燥）／32.43％（オーブン乾燥）**、germacrene D 11.89％／10.88％（精油中）。piperitenone oxide 優位ではない。
  - ルーマニア栽培［査読原著, *Molecules* 2017, DOI: 10.3390/molecules22020263］：*M. suaveolens* var. *variegata* を pineapple mint として、piperitenone oxide 型と分類。
- **結論：** 品種名だけでは組成が決まらないことが査読レベルで示された。**「パイナップルミント＝piperitenone oxide の香り」と固定表示することはできず、品種単体は情報が薄く保留**（種の項目に従属させる形でのみ記載可）。

### その他の果実・風味名ミント品種
- **チョコレートミント** *Mentha* × *piperita* f. *citrata* ‘Chocolate’：
  - ［公的機関系／専門メディア］RHS は「minty-chocolate scented leaves」と記述し peppermint の forma に置く一方、Kew は *citrata* を *M. aquatica* のシノニム側に置くという **分類の食い違い** がある。
  - ［専門メディア SPICEography］：「この品種自体の精油分析は公表されたものが見つからない」と明記。
  - ［査読原著として索引される例］インドネシア中ジャワの germplasm 研究（*Biodiversitas* 2023）では chocolate mint（*M.* × *piperita* ‘Chocolate’）を含む4遺伝子型の GC-MS が報告され、精油含量等の比較があるが、同定は現地収集名義に依存し、RHS／Kew の ‘Chocolate’ と同一クローンである保証はない。トルコのペパーミント品種試験（*Turk J Agric For* 2022, DOI: 10.55730/1300-011X.2974）でも ‘Chocolate’ の menthol 含量が扱われるが、これはペパーミント品種としての農業試験である。
  - よって、香気（チョコレート様）の化合物根拠は **未確認**。
- **ストロベリーミント、グレープフルーツミント、ジンジャーミント、オレンジミント等：**
  - ［査読原著］スロベニアの11ミント栽培品種研究（*Molecules* 2024, PMC11202822）：strawberry mint を *Mentha spicata* var. *citrata* として扱い、apple mint では30種の揮発成分を同定するなど品種横断の揮発プロファイルを提供するが、RHS では strawberry mint が *Mentha* × *piperita* ‘Strawberry’ と *Mentha* ‘Strawberry Mint’ の **2か所に二重に filed される** など、販売名と学名対応が情報源ごとに異なる。
  - ［査読原著］果実様ミント3種の圃場導入研究（*Antioxidants* 2022, DOI: 10.3390/antiox11050866 系）：ginger／pineapple／grapefruit mint の収量・精油品質・抗酸化を比較するが、grapefruit mint の学名対応（*M. suaveolens* × *piperita* 説等）自体が文献で揺れる。
  - ［学位論文（間接確認）］Staniek T.M. 2016, BEng Thesis（ワルシャワ生命科学大学）：15種の市販ミントの精油組成と微生物への影響を扱ったと後続査読論文［*Acta Sci Pol Hortorum Cultus* 2018］の引用で存在が確認できるが、**本文を直接確認できていないため参考情報**とし、数値の根拠には使わない。
- **判定（3b全体）：情報が薄く保留。** 種の同定が確かでないミント栽培品種は、査読論文のある種（*M. suaveolens*、*M. spicata*、*M.* × *piperita*）の項目の中で「園芸名として流通するが組成は未検証」と注記する形に留め、独立素材として収録しない。

---

## 4. カレープラント

### 基本情報
- **日本語名／英語名：** カレープラント、イモルテル／curry plant, immortelle, everlasting
- **学名：** *Helichrysum italicum* (Roth) G.Don（キク科 Asteraceae）
  - 注意：インド料理の「カレーリーフ」*Murraya koenigii* とも、カレー粉の混合物とも無関係。葉を揉むとカレー様の香りがすることに由来する園芸名であることは査読総説［Furlan & Bren 2023］が「strong and persistent smell similar to curry」と記述する範囲で確認できる。
- **使用部位：** 地上部（茎・葉・花、いずれにも精油貯蔵組織があることを SEM で確認［査読原著 Glumac et al. 2023］）、開花頂部（flowering tops、メーカー蒸留の主表記）
- **主要産地：**
  - ［公的機関 Kew POWO］在来：Algeria, Baleares, Corse, Cyprus, East Aegean Is., France, Greece, Italy, Kriti, Morocco, NW. Balkan Pen., Sardegna, Sicilia, Spain, Tunisia, Türkiye。導入：Germany, Great Britain。https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:212898-1
  - ［査読総説 Furlan & Bren 2023］栽培が広がる地域として Corsica, Italy, Hungary, Bosnia and Herzegovina, Croatia を挙げる。
  - 亜種は6亜種説（subsp. *italicum, microphyllum, picardii, pseudolitoreum, serotinum, siculum*）と4亜種への再編説が併存し、**亜種レベルの同定なしに組成を語れない**。

### 品種・ケモタイプ
- Glumac et al. 2023 が整理する3ケモタイプ群：**（I）nerol とそのエステル類（最も多く報告）、（II）α-／β-selinene、（III）γ-curcumene**。
- 亜種・地域との対応例［Furlan & Bren 2023 集約］：
  - subsp. *italicum*（イタリア／コルシカの20遺伝子型）：γ-curcumene 最大41％、β-selinene 最大38％、α-selinene 最大26.5％、neryl acetate 最大32％（精油中、遺伝子型ごとの最大値であり同時組成ではない）。
  - subsp. *microphyllum*（サルデーニャ）：neryl acetate 26–35.6％、nerol 9.1–14.4％（精油中）。
  - subsp. *microphyllum*（コルシカの2遺伝子型）：neryl acetate 最大55.7％、neryl propionate 最大12.7％（精油中）。

### 主要揮発性成分（精油組成）
- **クロアチア沿岸9試料［査読原著 Glumac et al. 2023］：** neryl acetate が全試料の主成分で精油中4.48–21.36％。他に limonene, β-selinene, α-copaene, italicene, α-terpineol, ar-curcumene 等が全試料共通。収率0.23–0.46％。品質指標として neryl acetate 5％超かつ α-pinene 25％未満が生産者調査由来の目安として引用される（査読論文内の引用であり、公的規格ではない）。
- **コルシカ産 subsp. *italicum*［査読原著 Bianchini et al. 2001, *Flavour Fragr J*、HALリポジトリ hal-00449342 で書誌・要旨確認］：** neryl acetate が優位で精油中15.8％（新梢期）–42.5％（満開期）。生育段階でケトン／β-ジケトン（italidione類）から neryl acetate へ比重が移る。
- **ブルガリア導入試料比較［査読原著, *Plants* 2022, DOI: 10.3390/plants11070951］：** フランス／ボスニア／コルシカ由来の導入株で neryl acetate 4.04–14.87％、β-himachalene 9.9–10.99％（精油中）など、由来地でプロファイルが分かれた。
- **別プロファイル例［査読原著, *Saudi Pharm J* 2017］：** 酸素化セスキテルペン61.42％を占め、α-cedrene 13.61％、ar-curcumene 11.41％、geranyl acetate 10.05％、limonene 6.07％、nerol 5.04％、neryl acetate 4.91％、α-pinene 3.78％（精油中）。neryl acetate が常に主成分ではない証拠として記録する。

### 香気寄与研究
- **GC-O／AEDA／OAV による *H. italicum* の香気寄与査読研究は未確認。**
- 「カレー様」香気の責任化合物は査読レベルでは特定されていない。neryl acetate は組成上の主成分であることが多いが、**組成の多さ＝カレー様香気の原因、とは書けない**。アプリでは「カレー様と形容される（園芸・総説の記述）／寄与化合物は未検証」と分離する。

### 加工・乾燥・蒸留による成分変化
- Furlan & Bren 2023［査読総説］：抽出・蒸留法（水蒸留、水蒸気蒸留、超臨界抽出、溶媒抽出等）の選択が組成を大きく変えることを総説的に整理。蒸留副産物の超臨界CO₂抽出に関するメーカー系研究（L'Occitane 所属著者を含む査読原著, *Cosmetics* 系）も存在するが、食品用途への外挿はしない。
- Glumac et al. 2023 の SEM 試料は乾燥植物材料で観察されているが、乾燥法の比較研究ではない。
- 乾燥条件を変数とした本種専用の査読原著は **未確認**。

### ハーブティー・抽出（当初「薄い」と予想されたが、査読原著が存在した）
- **Kenig et al. 2021［査読原著, *Plants*, DOI: 10.3390/plants10081516］：** *H. italicum* subsp. *italicum* の乾燥粉砕物を熱水浸出（infusion）し、HPLC-MSで caffeoylquinic acids が最も豊富、次いで pyrones, flavonols と同定。**ハーブティーの官能評価も実施**された。健常男性11名の無作為クロスオーバー・パイロット研究で、単回摂取後に安静時エネルギー消費が4％、脂肪酸化が12％、熱水対照より増加したと報告（臨床登録 NCT04818905）。
  - 支持できる：浸出液のフェノール組成、官能評価が研究として行われた事実、パイロット規模の生理結果。
  - 支持できない：一般集団への減量効果、日常的な茶としての推奨、香気成分（揮発成分ではなくフェノール中心の分析である点に注意）。
- 後続の浸出液研究［査読原著, *Pharmaceuticals* 2024, DOI 系：10.3390/ph17101398］：Caco-2 モデルでの腸バリア保護（in vitro）。飲用効果の根拠にはしない。
- Furlan & Bren 2023 が引用する浸出液摂取と腸内細菌叢／IL-1β に関する研究も、単一研究の引用として扱い、確定事項にしない。
- 伝統的文脈［査読総説］：消化器・肝胆道・呼吸器の不調への infusion／decoction の伝統利用、地中海諸国の伝統医療での位置付け、花を bakery products や soft drinks の調味に使う食品利用の記述がある。**ペアリング（他の食材との相性）を直接検証した査読研究は未確認。**

### 安全性
- 本種専用の査読安全性モノグラフ／系統的安全性レビューは **未確認**。Furlan & Bren 2023 は有益作用の総説であり、安全性の否定的知見がないことを「安全」と読み替えない。
- 精油の皮膚用途（10％希釈での術後瘢痕への適用研究の引用等）は総説内の引用であり、経口・食品量の安全性根拠にはしない。
- アレルゲン表示［メーカー技術情報・参考情報］：市販精油（コルシカ産）で citronellol, geraniol, limonene, linalool がアレルゲンとして表示される例がある。これは化粧品表示実務の情報であり、毒性評価ではない。

### メーカー・生産者技術情報（参考情報、査読と食い違う場合は査読優先）
- ［メーカー技術情報］Miracle Botanicals（コルシカ産精油の単一商品表示）：neryl acetate 38.84％、italidiones 11.93％、limonene 5.36％、neryl propionate 5.11％。**単一ロットの販売表示であり DOI／PMID なし。** 数値自体は査読原著 Bianchini et al. 2001 のコルシカ産範囲（15.8–42.5％）の内側にあるため矛盾はしないが、独立した実測根拠としては使わない。
- ［メーカー技術情報］Oak Organic 等：neryl acetate 3–42％、γ-curcumene 4–20％、italidione 1–15％という広い範囲表示。これは査読文献の広い変動と整合する方向だが、出典不明の範囲表示として参考情報に留める。
- ［専門メディア］Original Swiss Aromatics：コルシカ油は neryl acetate 約30–40％でボスニア油（約6–8％、ジケトン20％超）と異なる、という産地対比の販売者解説。方向性は査読のケモタイプ整理と一致するが、％の根拠は当該販売者の分析に依存するため参考情報。

### 出典リストと主張範囲
1. **［査読総説］** Furlan V., Bren U. *Helichrysum italicum*: From Extraction, Distillation, and Encapsulation Techniques to Beneficial Health Effects. *Foods* 2023;12:802. DOI: 10.3390/foods12040802 / PMID: 36832877
   - 支持できる：亜種分布、抽出法の影響、伝統利用と食品調味利用の文脈、遺伝子型別組成の集約。
   - 支持できない：特定製品の組成、ペアリング相性。
2. **［査読原著］** Glumac M. et al. Chemical Profiling and Bioactivity Assessment of *Helichrysum italicum* Essential Oil. *Molecules* 2023;28:5299. DOI: 10.3390/molecules28145299 / PMID: 37513174
   - 支持できる：クロアチア産9試料の neryl acetate 4.48–21.36％（精油中）、3ケモタイプ整理、地上部各器官の精油貯蔵。
   - 支持できない：細胞株実験からヒト食品効果への外挿。
3. **［査読原著］** Kenig S. et al. *Helichrysum italicum* ssp. *italicum* Infusion Promotes Fat Oxidation… A Pilot Study. *Plants* 2021;10:1516. DOI: 10.3390/plants10081516
   - 支持できる：熱水浸出液のフェノール組成と官能評価の実施、11名パイロットの結果（その規模の範囲で）。
   - 支持できない：減量効果の一般化。
4. **［査読原著］** Bianchini A. et al. Composition of *Helichrysum italicum* subsp. *italicum* essential oils from Corsica. *Flavour Fragr J* 2001;16. HAL: hal-00449342（DOI／PMID は HAL レコードでは未確認と明記）
   - 支持できる：コルシカ産の生育段階による neryl acetate 15.8–42.5％（精油中）の変動。
   - 支持できない：現在の市販コルシカ油全般への適用。
5. **［査読原著］** Chemical constituents of *Helichrysum italicum* essential oil… *Saudi Pharm J* 2017;25:780-787. DOI: 10.1016/j.jsps.2016.11.001 / PMID: 28725151
   - 支持できる：neryl acetate が主成分でないプロファイルの存在（反例として重要）。
   - 支持できない：抗菌活性の食品保存への直接適用。
6. **［公的機関］** Kew POWO, *Helichrysum italicum* (Roth) G.Don. https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:212898-1
   - 支持できる（参考情報）：受容名と在来／導入分布。
   - 支持できない：組成・香気。
7. **［メーカー技術情報］** Miracle Botanicals, Corsican *Helichrysum italicum* Essential Oil 商品表示（DOI／PMID なし、URLは販売ページ）。
   - 支持できる：当該販売者がそのロットをどう表示しているか、という事実のみ。
   - 支持できない：種の代表組成。

**判定：当初「査読が薄い候補」とされたが、実際は種レベルでは収録可能（精油組成＋浸出液の査読原著あり）。ただし「カレー様香気の寄与化合物」と「料理ペアリングの検証」は未確認であり、その部分は出典不足として表示を分離する。** したがって本種を「出典不足で短報」に落とす必要はなく、アップルミントと並ぶ正規収録とするのが、査読量の実測に合う。

---

## 総合判定表

| 対象 | 判定 | 理由（1行） |
|---|---|---|
| ホーリーバジル *O. tenuiflorum* | **収録可能** | 組成・ヒト研究の査読が厚い。香気寄与のみ書誌再検証が残る |
| レモンタイム *T.* × *citriodorus*（交雑種レベル） | **収録可能（産地差の明記条件付き）** | geraniol／citral 型と terpinolene 型の両方が査読で立つ |
| レモンタイム栽培品種単体 | **情報が薄く保留** | 園芸記述のみで品種別精油の査読がほぼ無い |
| アップルミント *M. suaveolens*（種レベル） | **収録可能（ケモタイプ変動＋pulegone注意 条件付き）** | piperitenone oxide 型を中心に複数型が査読で立つ |
| パイナップルミント ‘Variegata’ 単体 | **情報が薄く保留** | 査読同士が cis-jasmone 型 vs piperitenone oxide 型で食い違う |
| その他ミント栽培品種（チョコレート、ストロベリー、グレープフルーツ等） | **情報が薄く保留** | RHS／Kew で分類が食い違い、品種固有の組成査読が無い／同定が名義依存 |
| カレープラント *H. italicum*（種レベル） | **収録可能** | 精油組成・ケモタイプ・浸出液官能／組成の査読原著あり |
| カレープラントの「カレー様」香気寄与・ペアリング相性 | **出典不足（部分）** | GC-O／AEDA／ペアリング検証は未確認。記述的表現と分離する |

## 未確認事項の一覧（推測で補っていないもの）
- ホーリーバジル：スリランカ産 GC-O／AEDA 原著の DOI／PMID、乾燥法比較の査読原著。
- レモンタイム：GC-O／AEDA／OAV、茶（熱水浸出）専用の査読研究、乾燥法比較。
- アップルミント：GC-O／AEDA／OAV、熱水ティーの組成・官能の査読研究。
- ミント栽培品種：チョコレートミント精油の査読分析（同一クローン性が保証されるもの）、ストロベリー等の販売名と学名の統一対応。
- カレープラント：GC-O／AEDA／OAV、乾燥法比較、専用の安全性モノグラフ、ペアリング検証。
- 全素材共通：対象タクソンに直接対応するプレプリント（bioRxiv等）は本調査では確認できず。

---

# 科学文献調査記録：パセリ／チャービル
## 拡大調査版（査読論文＋格付け付き参考情報）

**調査方法・格付けルール**は統合ファイル（herbs-expansion.md）冒頭の定義に従う。`%`は特に断らない限り**精油中の%**であり、食品・茶葉全体の成分比ではない。化合物の「検出・存在」と「香気への寄与」は分けて記載する。確認できない項目は**未確認**とする。

---

# 1. パセリ

## 1.1 基本情報
- **日本語名／英語名：** パセリ／parsley
- **学名：** *Petroselinum crispum* (Mill.) Fuss（セリ科 Apiaceae）。異名 *Petroselinum sativum* Hoffm. 等。
- **使用部位：** 葉（イタリアンパセリ＝平葉型、カーリーパセリ＝縮葉型）、根（ルートパセリ var. *tuberosum*）、種子。**部位ごとに組成が大きく異なるため、部位を明示しない「パセリの組成」は記録しない。**
- **主要産地：** 地中海沿岸原産とされ世界各地で栽培される（一般論は参考情報に留め、組成の根拠は試料産地を明記した査読原著に限る）。

## 1.2 品種・ケモタイプの知見
- 葉油の優占成分は品種で入れ替わり、**myristicin 型と apiole（apiol）型**が報告される［査読原著 P7］。単一の「パセリ葉油の標準組成」は存在しない。
- 3タイプ（根用・平葉・縮葉）×播種期×生育段階の比較では、葉・葉柄・根のいずれでも主成分群は β-phellandrene、1,3,8-*p*-menthatriene、α,*p*-dimethylstyrene、myristicin、β-myrcene、apiole で、比率はタイプと部位で変動する［査読原著 P4, DOI: 10.1002/jsfa.1846］。

## 1.3 主要揮発性成分（精油組成、部位別）
以下はすべて**精油中の%**（原著の定義による）。
- **種子（モロッコ産）：** apiol が精油中 **49.05%** を占める例が報告される［査読原著 P6］。種子油の値を葉に流用してはならない。
- **根：** 根用品種15品種の比較で、**全品種で根油の優占成分は apiol**。根の精油含量は 0.013–0.045 mL/100 g FW、葉は 0.041–0.121 mL/100 g FW［査読原著 P5, DOI: 10.3390/agronomy12081949］。
- **葉：** 同研究では葉油の主成分は myristicin、β-pinene、(Z)-falcarinol、β-phellandrene 等で、季節・天候で大きく変動した［P5］。2年目の葉では 1,3,8-*p*-menthatriene が 19.1–38.5% で大半の品種の優占成分となった［P5］。

## 1.4 香気寄与研究（GC-O、AEDA、OAV、官能評価）
- **OAV による確立あり（本素材の最重要証拠）。** Masanetz & Grosch は2品種の葉について希釈実験で選んだ17 odorants を定量し OAV を算出。再構成した混合物の香りがパセリに近かったことから、**character-impact 化合物7成分**を結論した：**p-mentha-1,3,8-triene、myrcene、2-sec-butyl-3-methoxypyrazine、myristicin、linalool、(Z)-dec-6-enal、(Z)-3-hexenal**［査読原著 P1, *Flavour Fragr J* 1998;13:115-124］。
  - 組成上の優占成分（β-phellandrene、apiole 等）がこの7成分に含まれない点が重要：**組成≠寄与**の代表例である。
- **AEDA：** 縮葉パセリ葉油の AEDA による potent odorants 評価が先行研究として存在する［査読原著 P2, Jung, Sen & Grosch 1992, *Lebensm Wiss Technol* 25:55-60］。
- **刻んだ直後の変化：** 刻むと香りは急速に変化し、「terpeny, parsley-like」ノートの喪失は p-mentha-1,3,8-triene の減少と、(Z)-3-hexenal、(Z)-3-hexenol、(Z)-3-hexenyl acetate の急速な生成による green/fruity ノートの増加が主因とされた［P1］。

## 1.5 加工・乾燥による成分変化
- 乾燥パセリの hay-like なオフフレーバーを対象とした査読研究がある［査読原著 P3, Masanetz & Grosch, *Z Lebensm Unters Forsch A*（巻頁は未確認）］。
- 原ラインの整理では、乾燥により **menthatriene と apiole が減少**する方向が査読範囲で示される。乾燥条件ごとの定量比較（乾燥法×温度の系統比較）は**未確認**。

## 1.6 ハーブティー・抽出に関する研究
- パセリ茶については製造・保存に関する研究の範囲に留まり、**浸出液中の揮発性成分の移行を定量した査読研究は未確認**。精油組成からティーの香りを推定してはならない。

## 1.7 安全性の注意
- 食品としての通常使用は GRAS の文脈にある一方、**精油は apiol／myristicin を含むため、妊娠中を含む高濃度使用の回避**が公的データベース（LactMed）に記載される［公的機関 P8］。「食品として安全」＝「精油の内用が安全」ではない。
- フロクマリン類（psoralen 等）を含むことが総説類で整理されるが、香気の文脈では本記録の主張根拠にはしない。

## 1.8 出典リスト（パセリ）
- **P1［査読原著］** Masanetz C, Grosch W. Key odorants of parsley leaves (*Petroselinum crispum* [Mill.] Nym. ssp. *crispum*) by odour-activity values. *Flavour Fragr J*. 1998;13:115-124.（DOI／PMID：未確認。題名・誌名・巻頁は後続査読論文の引用で確認）
  - 支持できる：character-impact 7成分（OAV＋再構成による検証）、刻んだ直後の香り変化の機構。
  - 支持できない：供試2品種以外の品種・部位への一般化、乾燥品・ティーへの適用。
- **P2［査読原著］** Jung HP, Sen A, Grosch W. Evaluation of potent odorants in parsley leaves by aroma extract dilution analysis. *Lebensm Wiss Technol*. 1992;25:55-60.（DOI／PMID：未確認）
  - 支持できる：縮葉パセリ葉の AEDA による potent odorants の存在。
  - 支持できない：OAV 水準の寄与順位（手法が異なる）。
- **P3［査読原著］** Masanetz C, Grosch W. Hay-like off flavor of dry parsley. *Z Lebensm Unters Forsch A*.（年・巻頁：未確認）
  - 支持できる：乾燥パセリに特有のオフフレーバーが研究対象として存在すること。
  - 支持できない：乾燥法ごとの定量比較。
- **P4［査読原著］** Petropoulos SA et al. The effect of sowing date and growth stage on the essential oil composition of three types of parsley (*Petroselinum crispum*). *J Sci Food Agric*. 2004;84:1606-1610. DOI: 10.1002/jsfa.1846.
  - 支持できる：3タイプ×部位×生育段階の組成変動。
  - 支持できない：香気寄与の順位。
- **P5［査読原著］** Essential Oil Diversity of Turnip-Rooted Parsley Cultivars. *Agronomy*. 2022;12:1949. DOI: 10.3390/agronomy12081949.
  - 支持できる：根は全品種 apiol 優占、葉は品種・季節で変動、部位別の精油含量。
  - 支持できない：根用品種以外のタイプへの一般化。
- **P6［査読原著］** モロッコ産パセリ種子精油の組成研究（apiol 精油中 49.05%）。（書誌詳細・DOI：未確認）
  - 支持できる：種子油で apiol が約半分を占める試料の存在。
  - 支持できない：種子油一般の代表値、葉・根への流用。
- **P7［査読原著］** パセリ葉の品種別精油研究（myristicin 型／apiole 型の入れ替わり）。（書誌詳細・DOI：未確認）
  - 支持できる：葉油に少なくとも2つの優占パターンが存在すること。
  - 支持できない：品種名と型の固定的な対応（栽培条件で変動し得る）。
- **P8［公的機関］** LactMed（NCBI Bookshelf）"Parsley" 項。
  - 支持できる：精油（apiol／myristicin）の使用回避に関する公的整理。
  - 支持できない：食品としての通常使用への警告への読み替え。

**判定：収録可能（a）。** 香気寄与が OAV で確立した稀なハーブであり、部位別（葉／根／種子）の分離表示が必須条件。

---

# 2. チャービル

## 2.1 基本情報
- **日本語名／英語名：** チャービル／chervil
- **学名：** *Anthriscus cerefolium* (L.) Hoffm.（セリ科 Apiaceae）。
- **使用部位：** 葉（生鮮使用が中心）。乾燥・加熱で香りが失われやすいとされる点は園芸・料理文脈の記述であり、定量の根拠は後述のとおり未確認。

## 2.2 品種・ケモタイプの知見
- 精油組成の査読原著は複数あるが、**優占成分が産地で逆転する**：トルコ、ウィーン、イランの材料では **estragole 型**、エジプト栽培材料では **methyleugenol 型**が報告される［査読原著 C1–C4］。単一プロファイルを「チャービルの組成」として提示できない。

## 2.3 主要揮発性成分（精油組成）
- 上記のとおり estragole 優占例と methyleugenol 優占例が併存する（いずれも精油中の%は試料依存であり、代表値は置かない）。
- **食い違いの記録：** Web・園芸情報では「anethole（アネトール）優占」とする記述が見られるが、今回確認した査読原著の範囲では anethole 優占は支持されず、**不採用**とする（査読優先ルール）。

## 2.4 香気寄与研究
- **GC-O／AEDA／OAV：未確認。** 今回の検索範囲（拡大範囲を含む）で、チャービルを対象とした香気寄与の同定研究は確認できなかった。組成からの寄与推定は行わない。

## 2.5 加工・乾燥・ティー
- 乾燥による変化の定量研究：**未確認**。ハーブティーとしての浸出定量：**未確認**。プレプリント・学位論文についても該当するものを**確認できなかった（未確認）**。

## 2.6 安全性の注意
- EMA の estragole に関する公的声明では精油中75%という例示があるが、これは**精油・高濃度曝露の文脈**の数値であり、葉の食品使用の含有率として読んではならない［公的機関 C5］。

## 2.7 出典リスト（チャービル）
- **C1［査読原著］** トルコ産チャービル精油の組成研究（estragole 型）。（書誌詳細・DOI：未確認）
- **C2［査読原著］** ウィーン産材料の精油組成研究（estragole 型）。（書誌詳細・DOI：未確認）
- **C3［査読原著］** イラン産材料の精油組成研究（estragole 型）。（書誌詳細・DOI：未確認）
- **C4［査読原著］** エジプト栽培材料の精油組成研究（methyleugenol 型）。（書誌詳細・DOI：未確認）
- **C5［公的機関］** EMA, Public statement on the use of herbal medicinal products containing estragole.
  - 支持できる：estragole を含む精油・高濃度曝露への注意の枠組み。
  - 支持できない：葉の通常の食品使用に対する定量的なリスク評価。

**判定：情報が薄く保留（b）。** 組成の査読原著は存在するが産地で優占が逆転し、香気寄与・加工・ティーのいずれも未確認のため、素材としての収録は寄与研究の出現を待つ。文脈情報（estragole 型／methyleugenol 型の併存、Web の anethole 説の不採用）は記録として保持する。

---

# 科学文献調査記録：シソ／ラベージ
## 拡大調査版（査読論文＋格付け付き参考情報）

**調査方法・格付けルール**は統合ファイル（herbs-expansion.md）冒頭の定義に従う。`%`は特に断らない限り**精油中の%**であり、食品全体の成分比ではない。化合物の「検出・存在」と「香気への寄与」は分けて記載する。確認できない項目は**未確認**とする。

---

# 1. シソ

## 1.1 基本情報
- **日本語名／英語名：** シソ（赤シソ、青シソ）／perilla, shiso
- **学名：** *Perilla frutescens* (L.) Britton（シソ科 Lamiaceae）。赤シソは var. *crispa* f. *purpurea*、青シソは f. *viridis* 等と整理される。種子用のエゴマ（韓国で葉も食用）は var. *frutescens* 系統。
- **使用部位：** 葉（生鮮）、種子（エゴマ油）。
- **最重要の注意：日本の食用シソ（PA型中心）と韓国産エゴマ葉（PK型）は香りの化学が根本的に異なる。両者を混ぜた「シソの香り」は記録しない。**

## 1.2 品種・ケモタイプの知見
- ケモタイプ体系は総説の整理［査読総説 S1（Wu et al. 2023）、S2（Wei et al. 2016）］を優先採用する：PA型（perillaldehyde）、PK型（perilla ketone）、PP型（phenylpropanoid 系）、EK型（elsholtzia ketone）等の型分類が用いられる。
- **食い違いの記録：** Yi 2025 系の総説におけるケモタイプ略号の展開が他総説（S1, S2）と衝突するため、本記録では**不採用**とし、S1／S2 の体系に統一する（査読同士の食い違いとして記録）。
- **葉色とケモタイプは1対1ではない。** 赤シソ＝PA型、と色だけで決めつけてはならない。

## 1.3 主要揮発性成分（精油組成）
- **PA型：** 供試系統で perillaldehyde が**精油中 67.22–82.12%**［査読原著 S3, Ahmed et al.］。同研究系では perilla aldehydes、perilla ketones、limonene、shisofuran、farnesene 等を含む65化合物が同定される。
- **PK型（韓国産エゴマ葉）：** 抽出法で値が大きく変わる。SAFE 抽出物では perilla ketone が揮発成分の81%（93 ppm）、LLCE で84%（120 ppm）、水蒸気蒸留（HD）で95%（490 ppm）［査読原著 S4］。※これは抽出物中の揮発成分比であり、精油中%と定義が異なる。抽出法の異なる研究の数値を直接比較しない。

## 1.4 香気寄与研究（GC-O、AEDA、OAV、官能評価）
- **GC-O：あり（ただしPK型のみ）。** Seo & Baek（2009）は韓国産エゴマ葉から33化合物を同定し、GC-O で13の aroma-active 化合物を検出。**perilla ketone、egoma ketone、isoegoma ketone** を characteristic aroma-active compounds とし、perilla ketone、(Z)-3-hexenal、egoma ketone、isoegoma ketone が最も強いとした［査読原著 S4, *J Agric Food Chem* 2009;57(24):11537-11542］。
  - **適用限界：この結果は PK型葉のものであり、日本の PA型食用シソの香りには転用できない。**
- **PA型生葉の AEDA／OAV：未確認。** PA型については組成（perillaldehyde 優占）は確立しているが、希釈分析・OAV 水準の寄与同定は今回確認できなかった。「perillaldehyde が主成分」から「香りの主役」と断定しない。

## 1.5 加工による変化
- 焙煎研究：var. *acuta* を150℃で0–8分焙煎し、142揮発成分の変化と GC-O スニッフィングを併せて追跡。主要成分は methyl benzoate と limonene で焙煎時間によらず優占した［査読原著 S5, *Molecules* 2019;24:1374, DOI: 10.3390/molecules24071374］。
  - 注意：この試料のプロファイルは PA型の典型像（perillaldehyde 優占）と異なり、**材料・系統依存性そのものを示す例**として記録する。焙煎一般の結論にはしない。
- シソ茶としての抽出実測（浸出液の揮発成分・フェノール定量）：**未確認**。

## 1.6 安全性の注意
- **PK（perilla ketone）の肺毒性**は、ウシ等の家畜における非定型間質性肺炎や実験系で議論される文脈の知見であり、**ヒトでの閾値や食品葉使用のリスク量は言えない**。PA型の食用シソにそのまま適用しない。
- 精油の高濃度使用に関するヒトでの安全域：**未確認**。

## 1.7 出典リスト（シソ）
- **S1［査読総説］** Wu et al. 2023、シソのケモタイプと成分に関する総説。（誌名・DOI：未確認）
  - 支持できる：ケモタイプ体系の枠組み。
  - 支持できない：個別試料の実測値。
- **S2［査読総説］** Wei et al. 2016、シソ属の化学分類に関する総説。（誌名・DOI：未確認）
  - 支持できる：ケモタイプ分類の相互参照。
  - 支持できない：S1 と異なる略号体系の混用。
- **S3［査読原著］** Ahmed et al.、シソ系統別精油組成研究（PA型で perillaldehyde 精油中 67.22–82.12%）。（誌名・DOI：未確認）
  - 支持できる：供試系統における PA型の優占範囲。
  - 支持できない：全ての赤・青シソへの一般化。
- **S4［査読原著］** Seo WH, Baek HH. Characteristic Aroma-Active Compounds of Korean Perilla (*Perilla frutescens* Britton) Leaf. *J Agric Food Chem*. 2009;57(24):11537-11542.（出版社ページで書誌・要旨を確認。DOI／PMID：未確認）
  - 支持できる：PK型葉の GC-O による characteristic 化合物（perilla ketone 等）。
  - 支持できない：PA型（日本の食用シソ）への転用。
- **S5［査読原著］** *Perilla frutescens* Britton: A Comprehensive Study on Flavor/Taste and Chemical Properties During the Roasting Process. *Molecules*. 2019;24(7):1374. DOI: 10.3390/molecules24071374. PMCID: PMC6479574.
  - 支持できる：供試材料（var. *acuta*）の焙煎に伴う揮発成分変化。
  - 支持できない：PA型シソ一般の焙煎挙動。

**判定：収録可能（a）。ただし PA型（日本の食用シソ）と PK型（韓国産エゴマ葉）の分離が必須条件。** PK型の GC-O 結果を PA型の説明に流用しない。

---

# 2. ラベージ

## 2.1 基本情報
- **日本語名／英語名：** ラベージ／lovage
- **学名：** *Levisticum officinale* W.D.J.Koch（セリ科 Apiaceae）。
- **使用部位：** 葉、茎、根、種子。**部位差が決定的に大きい**素材であり、部位を明示しない組成は記録しない。
- **原産地（食い違いの記録）：** Kew POWO では **アフガニスタン・イランのみが native** とされる［公的機関 V4］。一般書・園芸情報の「南欧原産」説は POWO と食い違うため**参考情報**として記録し、原産地の断定には POWO を優先する。

## 2.2 品種・ケモタイプの知見
- 栽培品種レベルのケモタイプ研究は薄く、変動の主軸は**部位と生育段階**である（下記）。

## 2.3 主要揮発性成分（精油組成、部位別）
以下はすべて**精油中の%**。
- **葉・茎：** α-terpinyl acetate が最大で精油中70%に達し、Z-ligustilide は葉で 4.40–11.70%、茎で 4.80–13.80%（収穫時期で変動）［査読原著 V3］。
- **種子・花：** β-phellandrene が種子で 61.50%、花で 40.80%［V3］。
- **根：** (Z)-ligustilide の報告範囲は精油中 **0.2–70.9%** と極端に幅が広い（総説の集約範囲）。**代表値は存在しない**ため、単一値を「根油の ligustilide 含量」として提示してはならない。

## 2.4 香気寄与研究（GC-O、AEDA、OAV、官能評価）
香気は**対象によって結論が分裂する**ため、両方を併記する。
- **生鮮ヘッドスペース GC-O：キャラクターインパクト成分なし。** Bylaite et al.（2000）は5部位×8生育段階のダイナミックヘッドスペースを GC-O で分析し98化合物を同定。根を除く全部位で β-phellandrene がヘッドスペースの最優占成分（GCピーク面積の 36.50–79.28%）だったが、スニッフィングパネルが検出した成分のうち**「ラベージのキャラクターインパクト」と認められた成分はなかった**（最も頻繁に認識されたのは α-pinene と α-phellandrene/myrcene）［査読原著 V1, *J Agric Food Chem* 2000;48(12):6183-6190, DOI: 10.1021/jf990679u, PMID: 11312790］。
- **市販抽出物の AEDA：sotolon がキー。** Blank & Schieberle（1993）は市販ラベージ抽出物の酸性画分を AEDA で分析し、高い sensory relevance を持つ6 odorants を同定。**3-hydroxy-4,5-dimethyl-2(5H)-furanone（sotolon）が key aroma** で、同位体希釈法による定量では抽出物中 7.6 mg/kg、FD factor 300［査読原著 V2, *Flavour Fragr J* 1993;8:191-195（原著PDFで確認）］。
  - **適用限界：対象は市販抽出物であり、生鮮葉の香りそのものではない。** どちらか一方だけを「ラベージの香り」として提示しない。

## 2.5 加工・乾燥・ティー
- 生育段階による組成変動は査読で追跡される［V1, V3］。乾燥法の系統比較は**未確認**。
- ハーブティー文化・地域の食用香草としての文脈、および EMA モノグラフの用量・禁忌の詳細は、モノグラフ本文PDFを本調査で取得できず、二次要約の範囲では**参考情報**に留める［公的機関（二次要約） V5］。この部分のみ保留（b）扱いとする。

## 2.6 安全性の注意
- 根・精油の伝統的使用と禁忌はモノグラフの対象だが、本調査では本文未取得のため定量的な用量・禁忌を本記録の主張にしない。精油の高濃度使用の安全域：**未確認**。

## 2.7 出典リスト（ラベージ）
- **V1［査読原著］** Bylaitė E, Roozen JP, Legger A, Venskutonis RP, Posthumus MA. Dynamic headspace-gas chromatography-olfactometry analysis of different anatomical parts of lovage (*Levisticum officinale* Koch.) at eight growing stages. *J Agric Food Chem*. 2000;48(12):6183-6190. DOI: 10.1021/jf990679u / PMID: 11312790.
  - 支持できる：生鮮部位別ヘッドスペース組成と GC-O の結論（キャラクターインパクト成分なし）。
  - 支持できない：抽出物・乾燥品の香りへの一般化。
- **V2［査読原著］** Blank I, Schieberle P. Analysis of the seasoning-like flavour substances of a commercial lovage extract. *Flavour Fragr J*. 1993;8:191-195.（DOI／PMID：未確認。原著PDFで内容を確認）
  - 支持できる：市販抽出物における sotolon のキー寄与（AEDA＋同位体希釈定量）。
  - 支持できない：生鮮葉・ティーへの転用。
- **V3［査読原著］** Bylaitė E et al. ラベージ部位別精油組成と収穫時期の影響（α-terpinyl acetate、Z-ligustilide、β-phellandrene の部位別値）。（誌名・DOI：未確認）
  - 支持できる：部位・生育段階による組成変動の方向と範囲。
  - 支持できない：単一収穫条件への固定。
- **V4［公的機関］** Kew POWO, *Levisticum officinale* W.D.J.Koch の分類・分布記録。
  - 支持できる：原産地（アフガニスタン・イラン native）の公的区分。
  - 支持できない：組成・香気。
- **V5［公的機関（二次要約）］** EMA, Community herbal monograph on *Levisticum officinale* Koch, radix（本文PDF未取得のため二次要約の範囲で参考情報扱い）。
  - 支持できる：モノグラフが存在し伝統的使用が整理されているという事実。
  - 支持できない：用量・禁忌の具体的数値（本文未確認）。

**判定：組成・GC-O／AEDA の範囲では収録可能（a）。ティー文化・モノグラフ用量の詳細は参考情報のみのため、その部分は保留（b）。**

---

# 科学文献調査記録：ヒソップ／サマーサボリー／ウインターサボリー
## 拡大調査版（査読論文＋格付け付き参考情報）

**調査方法・格付けルール**は統合ファイル（herbs-expansion.md）冒頭の定義に従う。`%`は特に断らない限り**精油中の%**であり、食品全体の成分比ではない。化合物の「検出・存在」と「香気への寄与」は分けて記載する。確認できない項目は**未確認**とする。サマーサボリーとウインターサボリーは**別種**であり、混同しない。

---

# 1. ヒソップ

## 1.1 基本情報
- **日本語名／英語名：** ヒソップ／hyssop
- **学名（分類の食い違いを併記）：** 文献慣用名は *Hyssopus officinalis* L.（シソ科 Lamiaceae）。一方、Kew POWO の現受容名は ***Dracocephalum officinale*** で、*Hyssopus officinalis* はその同型異名として扱われる［公的機関 H2］。文献検索・引用は *Hyssopus* 名が主流のため、**本記録では両名を併記**し、どちらか一方だけが「正しい学名」とは書かない。
- **使用部位：** 地上部（葉・花序）。

## 1.2 品種・ケモタイプの知見（安全性に直結）
- ケモタイプにより組成と安全性が変わる［査読総説 H1］：
  - **ケトン型：** pinocamphone／isopinocamphone 等のケトンが優占する型。
  - **リナロール型：** var. *decumbens* 系ではケトンが微量で linalool が優占する。
  - その他 methyleugenol 等を含む型の報告もある。
- したがって「ヒソップ精油」の一括表示は不適切であり、ケモタイプの明示が必須である。

## 1.3 主要揮発性成分（精油組成）
- 上記ケモタイプの枠組みの範囲で、pinocamphone、isopinocamphone、linalool、methyleugenol 等が優占成分として報告される（値は試料・型依存のため代表値は置かない）［H1］。

## 1.4 香気寄与研究
- **GC-O／AEDA／OAV：未確認。** 今回の検索範囲ではヒソップを対象とした香気寄与の同定研究は確認できなかった。組成から香気寄与を主張しない。

## 1.5 加工・乾燥・ティー
- 乾燥に関する知見は AGRIS 収録の要旨等の**参考級**情報に留まり［参考情報 H4］、査読原著水準の乾燥法比較は**未確認**。ハーブティーとしての浸出定量も**未確認**。

## 1.6 安全性の注意
- **ケトン型精油の痙攣誘発性**が総説で整理される（ヒソップ油の誤用・中毒症例の文脈を含む）［査読総説 H1, H3］。リナロール型ではケトンが微量であり、**安全性はケモタイプで分けて扱う**。食品としての葉の通常使用と精油の高濃度使用を同一視しない。

## 1.7 出典リスト（ヒソップ）
- **H1［査読総説］** ヒソップのケモタイプと成分に関する総説（pinocamphone 型／linalool 型 var. *decumbens* 等の整理）。（誌名・DOI：未確認）
  - 支持できる：ケモタイプの枠組みと型ごとの優占成分。
  - 支持できない：個別産地試料の実測値。
- **H2［公的機関］** Kew POWO, *Dracocephalum officinale*（受容名）／*Hyssopus officinalis*（同型異名）の分類記録。
  - 支持できる：現受容名と異名関係。
  - 支持できない：組成・香気（ただし文献慣用名としての *Hyssopus* の使用自体は否定しない）。
- **H3［査読総説］** ケトン含有精油の神経毒性に関する総説的整理（ヒソップ油の痙攣誘発性の文脈）。（誌名・DOI：未確認）
  - 支持できる：ケトン型精油への注意の枠組み。
  - 支持できない：葉の食品使用への定量的リスク換算。
- **H4［参考情報（要旨級）］** AGRIS 収録の乾燥関連要旨等。
  - 支持できる：乾燥研究が存在するという文脈。
  - 支持できない：乾燥条件ごとの成分変化の定量主張。

**判定：収録可能（a）。** 組成・ケモタイプ・安全性は査読で立つ。ただし香気寄与（GC-O 等）は未確認であり、寄与の主張はしないことを明記する。

---

# 2. サマーサボリー

## 2.1 基本情報
- **日本語名／英語名：** サマーサボリー／summer savory
- **学名：** *Satureja hortensis* L.（シソ科 Lamiaceae）。一年草。**ウインターサボリー *S. montana*（多年生、別種）と混同しない。**
- **使用部位：** 地上部（葉・茎）。

## 2.2 品種・ケモタイプの知見
- carvacrol 型と thymol 型、および両者の併存型が産地で入れ替わる。
- 種子精油で報告される2ケモタイプは**地上部の組成へ流用不可**（部位が異なる）。

## 2.3 主要揮発性成分（精油組成）
以下はすべて**精油中の%**。研究間で優占順位が入れ替わること自体が本種の特徴である。
- **併存型：** Güllüce et al.（2003）では **thymol 29.0% ＞ carvacrol 26.5%**［査読原著 SS1, *J Agric Food Chem* 2003;51］。
- **carvacrol 型：** Coban et al.（2025）では **carvacrol 49.0%、γ-terpinene 34.3%、thymol 0.1%**［査読原著 SS2］。
  - **食い違いの記録（論文内部）：** 同論文は Abstract と本文（Table 1）で値が一致しないため、本記録では **Table 1 の値を採用**し、要旨値を使わない。
- **トルコ3産地の比較：** carvacrol 25.0–34.1%、thymol 20.2–28.2%、γ-terpinene 9.4–11.3%［査読原著 SS3］。
- **イラン産：** thymol、p-cymene、γ-terpinene、carvacrol が主要成分［査読原著 SS4, PMCID: PMC3330183］。

## 2.4 香気寄与研究
- **GC-O／AEDA／OAV：未確認。** 組成（carvacrol／thymol の優占）から香気寄与を断定しない。

## 2.5 加工・乾燥・ティー、文化的文脈
- 乾燥・浸出の査読定量は**未確認**。
- ブルガリアの調味料 **chubritsa** や塩ブレンド **sharena sol** における位置付けは、地域の食用香草の文脈として**参考情報**に留める。

## 2.6 安全性の注意
- フェノール（carvacrol／thymol）高含有の精油は一般に刺激性が議論される対象だが、本種専用の定量的な安全域は**未確認**。食品使用と精油使用を分ける。

## 2.7 出典リスト（サマーサボリー）
- **SS1［査読原著］** Güllüce M et al. In vitro antibacterial, antifungal, and antioxidant activities of the essential oil and methanol extracts of herbal parts and callus cultures of *Satureja hortensis* L. *J Agric Food Chem*. 2003;51.（頁・DOI：未確認）
  - 支持できる：供試材料での thymol／carvacrol 併存プロファイル。
  - 支持できない：本種一般の代表組成。
- **SS2［査読原著］** Coban et al. 2025、サマーサボリー精油研究（Table 1：carvacrol 49.0%、γ-terpinene 34.3%、thymol 0.1%）。（誌名・DOI：未確認。要旨と本文の不一致を記録のうえ本文値を採用）
- **SS3［査読原著］** Kiliç Ö. Chemotaxonomy of Two *Satureja* Species from Different Localities of Turkey. *J Agric Sci Technol B*. 2013;3:751-756.
  - 支持できる：産地間の組成変動の範囲。
  - 支持できない：HS-SPME 値と水蒸気蒸留油の直接比較。
- **SS4［査読原著］** Chemical composition and antimicrobial activity of *Satureja hortensis* and *Trachyspermum copticum* essential oil. *Iran J Microbiol*. 2011;3(4):194-200. PMCID: PMC3330183 / PMID: 22530088.
  - 支持できる：イラン産材料の主要成分構成。
  - 支持できない：抗菌活性の食品への直接適用。

**判定：収録可能（a）。** 組成は複数査読で立つ。香気寄与は未確認と明記する。

---

# 3. ウインターサボリー

## 3.1 基本情報
- **日本語名／英語名：** ウインターサボリー／winter savory
- **学名：** *Satureja montana* L.（シソ科 Lamiaceae）。多年生。**サマーサボリー *S. hortensis* とは別種**であり、組成を相互に流用しない。
- **使用部位：** 地上部（葉・茎）。

## 3.2 品種・ケモタイプの知見
- **亜種・産地で carvacrol 型と thymol 型が入れ替わる**：subsp. *montana* では **carvacrol 35.7%**、subsp. *variegata* では **thymol 51.4%** が優占する報告がある［査読原著 WS1］（いずれも精油中の%）。

## 3.3 主要揮発性成分（精油組成）
- 上記のとおり、同一種名でも亜種で優占フェノールが逆転する。単一プロファイルの提示は不可。
- **ハイドロゾル（芳香蒸留水）の carvacrol 91.6%／96.4%** という値は、精油組成とは別の画分の値であり、**精油の値と混同してはならない**［査読原著 WS2］。

## 3.4 香気寄与研究
- 精油の**官能評価**を実施した査読研究はある［査読原著 WS3］が、**GC-O 水準の寄与同定（どの化合物が香りを担うか）は未確認**。官能評価の存在をもって寄与同定済みとは書かない。

## 3.5 抽出・ティーに関する決定的な注意
- Serrano et al.（2011）の水抽出物の値は **g/L 表記であり%換算はできない**。さらに同研究では**水抽出物に抗菌活性が認められなかった**［査読原著 WS4］。**浸出液 ≠ 精油** であり、精油の組成・活性をティーに投影してはならない（本アプリの浸出表示における重要な反例証拠）。

## 3.6 安全性の注意
- サマーサボリーと同様、フェノール高含有精油と食品使用を分けて扱う。本種専用の定量的安全域は**未確認**。

## 3.7 出典リスト（ウインターサボリー）
- **WS1［査読原著］** *Satureja montana* 亜種別精油研究（subsp. *montana*：carvacrol 35.7%、subsp. *variegata*：thymol 51.4%）。（誌名・DOI：未確認）
- **WS2［査読原著］** ウインターサボリーのハイドロゾル組成研究（carvacrol 91.6%／96.4%）。（誌名・DOI：未確認）
  - 支持できる：ハイドロゾル画分では carvacrol が極端に濃縮されること。
  - 支持できない：精油組成への読み替え。
- **WS3［査読原著］** ウインターサボリー精油の官能評価を含む研究。（誌名・DOI：未確認）
  - 支持できる：精油レベルでの官能記述。
  - 支持できない：化合物単位の寄与同定。
- **WS4［査読原著］** Serrano C et al. 2011、*Satureja montana* の水抽出物・精油の抗菌・抗酸化評価（水抽出物は g/L 表記、水抽出物に抗菌活性なし）。（誌名・DOI：未確認）

**判定：収録可能（a）。** 組成＋精油の官能評価まで査読で立つ。GC-O 水準の寄与同定は未確認と明記する。

---
---

# 収録可否の判定（全候補15単位）

判定基準：(a) 査読出典が確保でき素材として収録可能／(b) 出典はあるが情報が薄く保留／(c) 確認できず見送り。参考情報のみに支えられた素材は (a) に入れていない。

## (a) 収録可能 — 12素材
| 素材 | 条件・分離表示の要件 |
|---|---|
| マジョラム *Origanum majorana* | ケモタイプ（少なくとも5型、トルコの carvacrol 型＝white oregano 誤同定リスク）を産地とセットで表示。GC-O で主臭とされたのは量的主成分ではなく *cis*-sabinene hydrate |
| レモンバーベナ *Aloysia citrodora* | citral 主体と一般化しない（36試料中 citral 主成分は2試料のみ）。異名・綴り揺れ（citrodora／citriodora）を併記 |
| パセリ *Petroselinum crispum* | 葉／根／種子の部位別表示が必須。香気寄与は OAV で確立した7成分（組成の優占成分とは一致しない） |
| ヒソップ *Hyssopus officinalis*（現受容名 *Dracocephalum officinale*） | 両名併記。ケモタイプで安全性が変わる（ケトン型は痙攣誘発性）ことを必須表示。香気寄与は未確認と明記 |
| サマーサボリー *Satureja hortensis* | carvacrol 型／thymol 型／併存型を試料別に表示。香気寄与は未確認と明記 |
| ウインターサボリー *Satureja montana* | 亜種別（subsp. *montana*＝carvacrol 型、subsp. *variegata*＝thymol 型）。ハイドロゾルの値を精油と混同しない。水抽出物に抗菌活性なし＝浸出液≠精油の反例として明記 |
| シソ *Perilla frutescens* | **PA型（日本の食用シソ）と PK型（韓国産エゴマ葉）の分離が必須条件**。PK型の GC-O 結果を PA型に転用しない。葉色とケモタイプは1対1でない |
| ラベージ *Levisticum officinale* | 組成・GC-O／AEDA の範囲で収録可能。生鮮ヘッドスペース（キャラクターインパクトなし）と市販抽出物（sotolon がキー）で結論が分裂するため両方を併記。根油 ligustilide は範囲のみ（代表値なし）。ティー文化・モノグラフ用量の詳細は下記 (b) の部分保留 |
| ホーリーバジル *Ocimum tenuiflorum* | スイートバジルと別種として収録。組成幅が極端に広いため代表値を置かない。GC-O＋AEDA 研究は存在するが書誌の一次確認が未完了（「GC-O研究あり（書誌要再検証）」と表示） |
| レモンタイム *Thymus* × *citriodorus*（交雑種レベル） | 産地・プロファイルの明記が条件。geraniol／citral 型と terpinolene 型が同名で両立する。香気寄与は組成からの推定と分離表示 |
| アップルミント *Mentha suaveolens*（種レベル） | ケモタイプ変動と pulegone 注意の必須表示が条件。香気寄与・熱水ティーの査読研究は未確認と明記 |
| カレープラント *Helichrysum italicum*（種レベル） | カレーリーフ *Murraya koenigii* と無関係であることを明記。熱水浸出の査読原著あり。「カレー様」香気の寄与化合物は下記 (b) の部分保留 |

## (b) 情報が薄く保留 — 3候補群（＋部分保留2件）
| 候補 | 保留理由 |
|---|---|
| チャービル *Anthriscus cerefolium* | 精油組成の査読原著はあるが優占成分が産地で逆転（estragole 型 ⇄ methyleugenol 型）。GC-O／AEDA／OAV、ティー浸出定量、乾燥変化定量、プレプリント・学位論文はいずれも未確認。Web の anethole 優占説は査読と食い違うため不採用（記録済み） |
| レモンタイム栽培品種単体（‘Silver Queen’ 等） | 園芸記述のみで、品種別精油の査読研究がほぼ無い。交雑種レベルの項目への注記に留める |
| ミント栽培品種群（パイナップルミント ‘Variegata’、チョコレートミント、ストロベリー等） | ‘Variegata’ は査読同士が cis-jasmone 型と piperitenone oxide 型で食い違う。チョコレートミントは RHS／Kew で分類が食い違い、品種固有の組成査読なし。独立素材にせず種の項目への注記に留める |
| （部分保留）ラベージのティー文化・モノグラフ用量詳細 | EMA モノグラフ本文PDFが未取得で、二次要約＝参考情報のみ。用量・禁忌の具体値は収録しない |
| （部分保留）カレープラントの「カレー様」香気寄与・ペアリング相性 | GC-O／AEDA／OAV およびペアリング検証は未確認。記述的表現と分離し、寄与としては表示しない |

## (c) 確認できず見送り — 0件
素材単位では0件。ただし個別の主張レベルでは、未確認・不採用としたものが複数ある（例：ヒソップ／サボリー2種／レモンタイム／アップルミントの香気寄与、シソ PA型の AEDA／OAV、チャービルの anethole 説、ホーリーバジル GC-O 研究の書誌詳細、ラベージ根油 ligustilide の代表値）。これらは各パートの節内に明記してあり、推測で補っていない。

## 未確認事項の総括（次回調査への申し送り）
- 香気寄与（GC-O／AEDA／OAV）が未確認のままの素材：ヒソップ、サマーサボリー、ウインターサボリー（GC-O 水準）、レモンタイム、アップルミント、チャービル、シソ PA型。
- ハーブティー（熱水浸出）の揮発成分移行を定量した査読研究が確認できた素材は限られ、カレープラント（フェノール組成＋官能）と比較系の水系製剤研究（レモンバーベナ）等に留まる。パセリ、チャービル、アップルミント、シソでは未確認。
- 書誌の一次再検証が残る出典：各パートの出典リストで「DOI／PMID：未確認」「書誌詳細：未確認」と明記したもの。特にホーリーバジルの GC-O＋AEDA 原著は、存在は示唆されるが DOI／PMID の一次確認が取れていない。
- 対象タクソンに直接対応するプレプリントは、本調査の範囲では全素材を通じて確認できなかった。
