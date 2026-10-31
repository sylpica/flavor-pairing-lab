# スパイス・ハーブ文献調査 第2波（spice-herb-wave2）

- 実施日：2026-10-31
- 対象アプリ：sylpica/flavor-pairing-lab（研究用ペアリングアプリ）のスパイス・ハーブ文献の深掘り第2波
- 位置づけ：`spice-herb-deepening.md`（深化ライン）の「次作業の優先順位」を引き継ぐ続編。アプリのコード・データは編集していない（本ファイルは調査記録のみ）。
- 方法・格付け（第1波と同一ルール）：
  - 査読原著・総説は PubMed／PMC／J-STAGE／出版社ページ等の一次書誌レコードで確認し、DOI／PMID を可能な範囲で記録した。出典ごとに「支持できる主張／支持できない主張（適用限界）」を記す。
  - 化合物の**存在（組成・検出）**と香気への**寄与**（GC-O／AEDA／OAV／欠落・添加試験等の寄与指標）を厳密に区別する。精油の組成比を食品全体の成分比として扱わない。
  - プレプリント・学位論文・学会要旨・公的機関・専門メディア・メーカー技術情報は「参考情報」と明示し、実測・寄与の根拠にしない。査読論文と食い違う場合は論文優先で、食い違い自体も記録する。
  - 確認できない項目は「未確認」「調査範囲では未発見」と明記し、推測で補わない。数値は原著で確認できた場合のみ条件付きで記録する。

## 総括（タスクごとの成果）

| タスク | 成果 | 限界 |
|---|---|---|
| 1(a) Ravi 2013（クミン GC-O）全文確認 | 要旨レベル（AGRIS 書誌レコード）で組成範囲・官能・PCA の対応を確認。GC-O 記述子4件をベンダー文書（参考情報）で傍証 | **全文は入手できず**（Taylor & Francis 有料壁、OA コピー未発見）。化合物別の FD／OAV／強度等の**寄与指標は未確認のまま** |
| 1(b) Yu 2025（クローブ）全文確認 | **全文取得・解消**。aroma-active 21化合物（定義：OAV>1 かつ FD≥64）、クローブ粉末（CP）で OAV>1 の16化合物と OAV・FD 実数、牛肉への flavor endowment 8化合物＋ERV を確認。ユージノール以外の寄与化合物（β-カリオフィレン等）まで確定 | endowment 9化合物目は Fig. 3 の画像内のみで本文テキストからは未確認（4-allylanisole が強く推定されるが確定ではない）。2カラム組版の抽出乱れで相互確認できなかった一部の数値は「要再確認」と明記 |
| 2 日本語文献（J-STAGE 中心） | 番号付き **22件**を識別子つきで記録（査読原著・研究ノート18件、解説・総説級2件、学会要旨・要旨レベル確認2件）＋総説の参考情報2件。山椒・ワサビ・ユズ・シソ・ミョウガ・国内ハーブ／唐辛子をカバー | サンショオール定量の日本語原著、花椒の日本語文献は今回の範囲では**未発見**。一部は誌名・著者の細部が未確認のものあり（個別に明記） |
| 3 地域固有の香草・スパイス | 7対象すべてに査読研究を確認（エパソーテ、エゴマ、ザアタル／シリアンオレガノ、カレーリーフ、パンダン、ガランガル、バイマックルート）。パンダンは key compound（2-アセチル-1-ピロリン）の同定史まで確認 | 寄与レベル（GC-O／AEDA／OAV）まで達したのはガランガル（GC-O 併用・記述子は全文内）程度で、他は**組成レベルが中心**。ケモタイプ差が大きい素材が多く、単一組成への統合は不可 |
| 4 相互作用の原著追加 | 直接確認した原著 **9件**＋引用経由2件＋参考情報3件。特に唐辛子×チョコ×甘味（Martins 2025）、カプサイシン×脂肪・糖・タンパク質の古典〜近年の原著群、バニラ香→甘味増強（OITE）の原著2件 | スパイス×お茶の**知覚機構レベル**の原著は未発見（嗜好・化学成分の研究のみ）。シナモン香→甘味増強は二次引用のみで原著未確認。SEO／ベンダー記事の数値（「62%低減」等）は検証不能のため**不採用** |

---

## タスク1 全文確認の積み残し

### 1(a) Ravi et al. 2013（クミン）— 全文未取得、要旨レベルで確定

**書誌**：Ravi, R., Prakash, M. & Bhat, K.K. (2013) "Characterization of Aroma Active Compounds of Cumin (*Cuminum cyminum* L.) by GC-MS, E-Nose, and Sensory Techniques." *International Journal of Food Properties* 16(5): 1048–1058. DOI: 10.1080/10942912.2011.576356（深化ライン記録より）。

**今回の確認経路**：FAO AGRIS の書誌レコード（出版社要旨の転載）で要旨全文を確認。Semantic Scholar／ResearchGate／著者機関（CFTRI Mysore）リポジトリ経由のオープンアクセス全文は**発見できなかった**。出版社版は有料壁の内側。

**要旨で確認できたこと（一次書誌レコード由来）**：
- インド各地のクミン精油8試料（S1–S8）を GC-MS、GC-olfactometry、官能プロファイリング、電子鼻で分析。
- 主要成分の範囲（精油中）：cuminal（クミンアルデヒド）8–17%、β-pinene 22–27%、β-myrcene 1.3–1.75%、p-cymene 23–39%、γ-terpinene 11–27%、p-mentha-1,4-dien-7-ol 1.0–5.5%。
- 北インド産 S7・S8 は γ-terpinene が 26.36%・27.73% と高く、官能で floral／cumin-like／citrussy ノートの強度が有意に高かった（p ≤ 0.05）。PCA でも S7・S8 が同ノートと関連付けられた。

**参考情報（二次転載・格上げ根拠にしない）**：試薬ベンダー BenchChem のアプリケーションノート（2025年12月付）が「クミンの aroma active compounds の特性化研究から adapted」とする GC-O 記述子表を掲載：cuminaldehyde "Pungent, Spicy"、β-pinene "Woody, Turpentine-like, Resinous-like"、p-cymene "Carrotlike"、γ-terpinene "Lemony, Bitter"。ただし同文書は原典を Ravi と明示しておらず、記述子の対応は傍証にとどまる。

**支持できる主張**：
- クミン精油について GC-O を併用した査読研究が存在し、産地間で組成と官能プロファイルが連動すること（試料レベルの PCA 相関）。
- 上記6成分が当該8試料の主要成分であること（範囲つき）。

**支持できない主張（限界）**：
- **化合物別の寄与指標（FD factor、OAV、GC-O 強度スコア）は未確認**。本論文の GC-O が希釈法（AEDA 型）か直接強度法かも要旨からは判別できない。
- したがって cuminaldehyde は引き続き「GC-O 併用査読研究あり・化合物別指標は全文未確認」の**寄与候補**として扱うのが正確で、寄与確定への格上げはできない。
- 精油組成比をクミン種子・粉末全体の成分比としての引用は不可（本論文の数値は精油中の比率）。

### 1(b) Yu et al. 2025（クローブ）— 全文取得・解消

**書誌**：Yu, Q. et al. (2025) "Insights into the flavor endowment of aroma-active compounds in cloves (*Syzygium aromaticum*) to stewed beef." *Food Chemistry* 462: 140704. DOI: 10.1016/j.foodchem.2024.140704／PMID: 39226642。著者：Yu Qiang, Wang Jingfan, Jiang Wei, Wang Tianze, Huang Feng, Han Dong, Zhang Chunhui。

**全文入手経路と読み取り上の注意**：出版社版 PDF の Scribd 転載コピー（ファイル名 1-s2.0-S0308814624023549-main）で本文・Table 1・Table 2・§3.1–3.3・結論を確認した（2026-10-31）。2カラム組版のためテキスト抽出が一部乱れており、**本文記述と表で相互確認できた値のみ採用**した。相互確認できなかった値は「要再確認」と明記する。

**実験系**：クローブ粉末（CP）、クローブ入り煮込み牛肉（SBC；クローブ粉末 2.5 g/kg、98±2℃ 40分煮込み＋30分浸漬）、塩のみ煮込み牛肉（SBS）の3系について GC-IMS、QE-GC-Orbitrap-MS/O、AEDA、OAV、官能評価。揮発成分173件を同定。

**aroma-active の定義（§3.2）**：OAV > 1 かつ FD ≥ 64 を満たす化合物。

**21 aroma-active 化合物**（Table 2 の21行＝結論の内訳「6 terpenoids／6 aldehydes／2 ketones／2 phenols／2 ethers／1 alcohol／1 furan／1 sulfur」と一致）：
eugenol、β-caryophyllene、4-hydroxy-5-methyl-3(2H)-furanone、(E)-anethole、2-methoxy-4-methylphenol、limonene、linalool、nonanal、3-hydroxy-2-butanone、4-allylanisole（estragole）、benzaldehyde、(E,E)-2,4-decadienal、1,8-cineole、2-pentylfuran、β-pinene、dimethyl trisulfide、hexanal、1-octen-3-ol、(E,E)-2,4-nonadienal、octanal、3-carene。
⚠️ この21件には**牛肉由来が中心の化合物**（4-hydroxy-5-methyl-3(2H)-furanone、3-hydroxy-2-butanone、dimethyl trisulfide、hexanal、(E,E)-2,4-decadienal 等）が含まれる。21件すべてがクローブ由来ではない。

**CP（クローブ粉末そのもの）で OAV > 1 は16化合物**（論文明記；terpenoids と phenols が中心）。CP の OAV 実数（Table 2 および §3.2 本文で相互確認）：
- eugenol **502,664**（最高；濃度 3,568,776 µg/kg；香調 clove／smoke／spice）
- β-caryophyllene 1223、(E)-anethole 1008、2-methoxy-4-methylphenol 428、1,8-cineole 348、linalool 145、4-allylanisole 144、2-pentylfuran 35、3-carene 34、octanal 16、benzaldehyde 8、(E,E)-2,4-nonadienal 8、1-octen-3-ol 7、limonene 7、β-pinene 2、nonanal 2

**CP の FD factor（AEDA、Table 1）**：
- eugenol **65,536**、β-caryophyllene 1024、(E)-anethole 1024、2-methoxy-4-methylphenol 512、limonene 512、1,8-cineole 512、linalool 128、4-allylanisole 128、3-carene 64、β-pinene 64（Table 1 の値；§3.1 本文では 32 と読める箇所があり**要再確認**）、2-pentylfuran 64、β-phellandrene 32、terpinen-4-ol 16、ylangene 16、sabinene 8、γ-terpinene 8、α-copaene 8、safrole 4、vanillin 2、isoeugenol 2。

**flavor endowment（煮込み牛肉への移行）**：論文は9化合物を endowment 化合物とする。§3.3 本文で ERV（endowment rate value）とともに名前が確認できたのは**8件**：
- 3-carene 37.96%（最高）、linalool 24.86%、1,8-cineole 4.20%、2-methoxy-4-methylphenol 3.02%、limonene 2.36%、(E)-anethole 2.14%、β-caryophyllene 1.63%、eugenol 0.21%（ERV は低いが高濃度・高FD・高OAV のため SBC の香気プロファイルに有意に影響、と本文明記）。
- **9件目は本文テキストに現れず Fig. 3（flavor endowment wheel）の画像内のみ**のため未確認。候補の 4-allylanisole は「加工中 55.1% 揮散、ERV 1.29%」という数値が本文に現れるが、その文は**先行研究 Qiang et al. 2022 からの引用**として書かれており、本論文の9件目である確証はテキストからは取れていない。ただし「CP 由来で SBC でも OAV>1」という条件を満たす化合物を Table 2 から数えると 4-allylanisole が9件目に残るため、**強く推定されるが確定ではない**と記録する。

**官能・相互作用的な所見**：
- CP の官能では eugenol（clove-like）、3-carene（herbal-like）、(E)-anethole（anise-like）、linalool（floral-like）が高スコア。
- クローブ添加で dimethyl trisulfide の FD が SBS 4096 → SBC 2048 に**半減**し、硫黄臭が低減した（クローブのポリフェノールが Maillard／Strecker 分解を抑える機序が本文で議論されている）。→ タスク4の相互作用としても記録（§4 参照）。

**支持できる主張**：
- クローブ粉末の香気寄与は eugenol 単独ではなく、β-caryophyllene（FD 1024／OAV 1223）、(E)-anethole（FD 1024／OAV 1008）、2-methoxy-4-methylphenol（FD 512／OAV 428）、1,8-cineole（FD 512／OAV 348）、linalool（FD 128／OAV 145）、4-allylanisole（FD 128／OAV 144）等が AEDA＋OAV の両指標で寄与する（クローブ粉末という条件つき）。
- 深化ラインで「組成止まり」とされていた **β-caryophyllene は、本全文確認によりクローブについては寄与レベルへ格上げ可能**になった。
- eugenyl acetate は21 aroma-active に含まれず、クローブでは引き続き組成レベル。

**支持できない主張（限界）**：
- SBC（煮込み牛肉）の数値を「クローブ単独の香り」の根拠に使うことはできない。endowment は「牛肉煮込みへの移行」という文脈の知見。
- OAV は文献閾値（水中）に基づく計算値であり、閾値出典により変動しうる。
- 数値は単一研究・単一条件（2.5 g/kg、規定の煮込み条件）のもの。再現研究は未確認。

---

## タスク2 日本語文献の系統確認（J-STAGE 中心）

### 2-1 山椒（サンショウ、*Zanthoxylum piperitum*）

**(1) 飯島（関和）陽子・諸井千春・萩原修・久保田紀久枝 (2002)**「ヘッドスペースガス分析法を用いた産地別山椒果実の香気分析」*日本食品科学工学会誌* 49(5): 320–326. J-STAGE: article/nskkk1995/49/5/49_5_320（DOI は未確認）。
- 5産地の完熟・未熟山椒を dynamic headspace GC-MS で比較。同定38成分（炭化水素22、アルコール7、カルボニル6、酸・エステル3）。含酸素化合物（linalool、geraniol、geranyl acetate 等）は主に完熟果で検出され、熟成中に生成すると示唆。
- 支持できる主張：山椒果実の主要揮発成分の組成と産地・成熟度による差異（組成レベル）。
- 支持できない主張：化合物別の香気寄与（GC-O 等の寄与指標なし）。

**(2) 才木充ほか (2020)**「完熟山椒から抽出した香気成分のウルトラファインバブル生成装置を用いた水への導入」*日本調理科学会誌* 53(4): 238–245.
- 完熟山椒果皮の香気（myrcene、d-limonene、β-phellandrene、citronellal、linalool、geraniol、geranyl acetate 等）が UFB 水へ移行することを GC-MS で確認。citronellal、geranyl acetate、geraniol が効率よく移行し、香気水中では citronellal のピークが最大。
- 支持できる主張：山椒の特徴香気成分群の水への移行性（加工・抽出条件つき）。
- 支持できない主張：寄与指標ではない（組成・移行レベルの知見）。

**(3) 学会要旨（参考情報）**「産地の異なる山椒（*Zanthoxylum piperitum* DC.）の香気成分分析と官能評価による分類」J-STAGE 収録の学会発表要旨（ajscs 30: 134）。
- 市販粉山椒10種を MMSE-GC で分析し、官能（ナッピング法）と比較。主要成分として myrcene、limonene、β-phellandrene、citronellal、geranyl acetate 等。組成による5グループ分類と官能の4グループ分類に一致性。
- 学会要旨のため査読原著の根拠にはしない。

**補足（深化ラインとの接続）**：山椒の寄与レベルは深化ラインで確認済みの Jiang & Kubota 2004（AEDA）が担う。第2波の日本語文献は組成・分類・加工の側面を補強する位置づけ。
**未発見**：ヒドロキシ-α-サンショオール等のサンショオール類の**定量を主目的とする日本語原著**は、今回の J-STAGE 検索範囲では未発見（学位論文要旨等で研究の進展に言及はあるが参考情報級）。花椒（中国産 *Zanthoxylum* 属）の日本語査読文献も未発見。

### 2-2 ワサビ・カラシナ等のイソチオシアネート系

**(4) Yamane, K. et al. (2023)** "Allyl isothiocyanate and 6-(methylsulfinyl)hexyl isothiocyanate contents vary among wild and cultivated wasabi (*Eutrema japonicum*)" *Breeding Science* 73(3): 237–245. **DOI: 10.1270/jsbbs.22080**。
- 野生・栽培ワサビ36アクセッションで AITC と 6-MSITC（ヘキサラファン）を定量。栽培種は 6-MSITC が有意に高く（AITC は差なし）、6-MSITC は春季に低下する季節変動あり。AITC＋6-MSITC 合計は栽培種＞野生種。
- 支持できる主張：ワサビの2大 ITC の含量水準と系統・季節による変動（定量レベル）。
- 支持できない主張：香気寄与の順位付け（官能・寄与指標なし）。辛味の主成分が AITC であることは本論文も前提として引用する古典的知見（Nagai 1892）であり、本論文自体の新規実証ではない。

**(5) 村田充良ほか (2004)**「わさびおよび加工わさび製品中の6-メチルスルフィニルヘキシルイソチオシアネート含量」*日本食品科学工学会誌* 51(9): 477–482. （金印株式会社）
- 5種ワサビの部位別 6-MSITC 含量：根茎が最高で、根、（茎・葉）の順。加工わさび製品中の含量も測定。
- 支持できる主張：6-MSITC の部位別分布と加工品中の残存（定量レベル）。

**(6) (1990)** "Isothiocyanates in the Stems and the Leaves of Wasabi (*Wasabia japonica* Matsum)" *日本食品工業学会誌* 37(4): 256–260. **DOI: 10.3136/nskkk1962.37.4_256**。
- 茎・葉から allyl、n-butyl、3-butenyl、4-pentenyl、5-hexenyl、β-phenylethyl、5-methylthiopentyl、6-methylthiohexyl、7-methylthioheptyl の各 ITC を同定。茎・葉は 6-methylthiohexyl ITC と 7-methylthioheptyl ITC の AITC に対する比率が根より高く、茎・葉の「ワサビ様のグリーンな香り」はこの2成分に帰属すると考察。
- 支持できる主張：茎・葉の ITC 組成と、グリーンノートへの2成分の関与の**示唆**（組成＋香調の対応づけ）。
- 支持できない主張：寄与の実証（GC-O・添加試験なし。「帰属」は著者の考察レベル）。

**(7) 衛藤英男ほか (1990)**「沢わさびおよび西洋わさび中の香気成分の安定性」*日本食品工業学会誌* 37(12): 953–958.
- 凍結濃縮過程における主要香気成分の変化・安定性を検討。沢わさび・西洋わさび・黒カラシの辛味主成分が共通して AITC であることを前提に分析。
- 支持できる主張：加工（凍結濃縮）におけるワサビ香気成分の安定性（加工条件つき）。

**(8) 総説（参考情報）**「わさびイソチオシアネートによる機能性」J-STAGE 収録誌（jln 34(1): 11–）。ワサビには側鎖の異なる20種以上の ITC が存在し AITC が最多、という整理。機能性中心の総説であり、香気寄与の根拠にはしない。

**(9) 相互作用としても記録（→ §4）**「とろみ調整剤添加食品の香気フレーバーリリース―咀嚼を想定した圧縮付加時の変化―」*日本調理科学会誌* 48(4): 255–264 (2015)。とろみ剤添加で AITC 量が有意に減少（71.4%／65.3% の保持水準の記述あり）し、圧縮（咀嚼想定）で放散が回復。テクスチャ×香気放散の原著。

### 2-3 ユズ（*Citrus junos*）の香気

**(10) Phi, N.T.L. & Sawamura, M. (2008)** "Characteristic Aroma Composition Profile of Mature Stage Citrus junos (Yuzu) Peel Oil from Different Origins" *Food Science and Technology Research* 14(4): 359–366. J-STAGE: article/fstr/14/4/14_4_359。
- 産地別のユズ圧搾果皮油を機器分析＋官能で検討。d-limonene は 55.86%（o1）–64.79%（e1）で11月中旬に最大。linalool が主要な含酸素化合物で、ユズ特有香気への floral ノートの寄与が述べられる。
- 支持できる主張：ユズ果皮油の組成（産地・時期つき）と linalool の位置づけ。
- 支持できない主張：linalool の寄与は官能対応の記述レベルで、OAV 等の定量指標は未確認。

**(11) 湯川千代樹・大崎和彦・岩淵久克 (1994)**「柚子（*Citrus junos* Sieb. ex Tanaka）の香気成分に関する研究」*日本食品化学学会誌* 1(1). J-STAGE: article/jjfcs/1/1/1_KJ00005714318。
- ユズ抽出油の硫黄様グリーン香画分を HPLC・GC で絞り込み、GC-MS と GC-sniffing の併用で **1-p-menthene-8-thiol をユズから初めて同定**し、ユズの character impact odor compound と推定。
- 支持できる主張：1-p-menthene-8-thiol のユズ中の存在と、特徴香への関与の強い示唆（sniffing 併用の同定研究）。
- 支持できない主張：寄与の定量（FD／OAV は未確認）。「character impact」は著者の推定表現。

**(12) 篠田奈緒子・志賀稔・西村喜一 (1970)** "Constituents of Yuzu (Citrus junos) Oil" *Agricultural and Biological Chemistry* 34(2): 234–242.
- ユズ圧搾油から70成分超を同定した古典。limonene が約80%で主成分。
- 支持できる主張：ユズ油の基礎組成（1970年時点の分析水準）。

**(13) 沢村正義ほか (1989)**「超臨界二酸化炭素法と他の抽出法によるユズ果皮油の成分比較」*日本食品工業学会誌* 36(1): 34–38.
- 抽出法によるユズ果皮油成分の比較。リモネン以外の特徴として α-pinene、1,8-cineole、γ-terpinene、linalool、β-farnesene、bicycloelemene、thymol 等が多い点を指摘。
- 支持できる主張：抽出法依存性を含むユズ果皮油組成。

**(14) (2009)**「日本産ユズ精油の機能活性についての検討」*日本アロマセラピー学会誌*（aeaj）9(1): 55–65. **DOI: 10.15035/aeaj.090106**。
- 高知県産ユズ圧搾油を GC-MS＋GC-O（GC-Olfactometry）で分析。主要成分 limonene 約77%、γ-terpinene 9.7%、myrcene 1.5%、linalool 0.65%。ユズの香りに重要な成分として α-terpineol、α-humulene、germacrene B を認めた（GC-O 併用）。
- 支持できる主張：GC-O 併用による重要成分の指摘（当該試料・条件つき）。
- 支持できない主張：FD／OAV の定量値は未確認（要旨レベル）。アロマセラピー文脈の研究であり食品香気への転用は条件つき。

**(15) Phi & Sawamura (2010)** ユズ水蒸気蒸留果皮油の貯蔵変化（*Food Science and Technology Research* 16(1): 51–）。44成分の12週間（25℃）の変化を追跡し、蒸留油は圧搾油より変化が速く、limonene・γ-terpinene が減少し p-cymene が増加。
- 支持できる主張：ユズ香気の貯蔵不安定性（加工・保管条件への含意）。

### 2-4 シソ（*Perilla frutescens* var. *crispa*）

**(16) 熊沢賢二・庄司靖隆・佐藤優理・川島大輝・馬場良子 (2023)**「シソ新鮮葉の香気と嗜好性に寄与する成分の探索」*日本食品科学工学会誌* 70(10): 513–517（研究ノート）. **DOI: 10.3136/nskkk.NSKKK-D-23-00028**。（小川香料株式会社）★第2波の日本語文献で最も寄与レベルが高い1件。
- 新鮮大葉（広島県産）の溶媒抽出物に **AEDA** を適用し、FD factor ≥ 4¹ の **11成分**を重要成分として検出。log₄(FD) の内訳：perillaldehyde 3（最高、green／perilla-like）、linalool 2（floral）、(E,E)-2,4-nonadienal 2（fatty）、trans-shisool 2（floral）、eugenol 2（spicy／clove-like）、1,8-cineole 1（camphor）、1-octen-3-ol 1（mushroom-like）、methional 1（potato-like）、trans-1,2-dihydroperillaldehyde（DHP）1（spicy／curry-like）、未同定2件（nutty 1、sweet 1）。
- **DHP はシソ新鮮葉から初めて同定**された成分。単独ではシソを想起しにくいカレー様スパイシー香だが、シソ風味ポン酢醤油への 50 ppb 添加で「青シソ様」「嗜好性」が有意に向上。PLS 回帰の因果モデルで、DHP が「さわやかなシソ感」（潜在変数）を高め、それが嗜好性と相関（r = 0.71）する構造を提示。→ 混合物相互作用の原著としても §4 に記録。
- 支持できる主張：青シソ新鮮葉の香気は perillaldehyde を中心としつつ複数成分で構成されること（AEDA）；DHP の存在と、混合系での嗜好性向上効果（当該モデル食品・濃度つき）。
- 支持できない主張：DHP の効果を他の食品系・濃度へ一般化すること。AEDA は抽出物の希釈法であり、生葉そのものの OAV 順位ではない。

**(17) (2002)** "Evaluation of Perilla (*Perilla frutescens*) Aroma" 2報（*園芸学会誌* / J. Jpn. Soc. Hort. Sci. 71(3): 411–418 および 424–433）。CiNii: crid/1390001206303317760（411–418）。
- 吸着カラム濃縮法でシソ葉36サンプルの揮発成分を GC 分析（総ピーク120、サンプルあたり平均45）。29サンプルで perillaldehyde が主成分、残りでは dillapiol、elsholtziketone、perillaketone が主成分＝**ケモタイプの多様性**を確認。
- 統計解析報では、官能特性の予測に perillaldehyde をはじめとするテルペノイドの適合度が高く、(Z)-3-hexen-1-ol や (E)-2-hexenal の相対量変化も官能特性と関係。
- 支持できる主張：シソ葉香気の組成とケモタイプ差、テルペノイドと官能特性の統計的対応。
- 支持できない主張：寄与の因果実証（相関・回帰レベル）。著者名は今回の検索では未確認。

**(18) (2000)** シソ精油成分の生育に伴う変化（*日本食品科学工学会誌* 47(6): 470–）。perillaldehyde、limonene、β-caryophyllene の3成分について、perillaldehyde は生育初期に含量・比率が増加し、その後も比率を維持する傾向。
- 支持できる主張：主要3成分の生育ステージによる変動（組成レベル）。誌面タイトル・著者は未確認。

**総説（参考情報）**：「香辛料・ハーブとその香り～香気生成メカニズムとその蓄積」J-STAGE 収録誌（jao 45(2): 132–）— スパイス・ハーブ各種の主要香気成分と生合成を一覧化した日本語総説（シソ＝limonene、perillaldehyde 等）。二次整理であり実測の根拠にはしない。
**総説（参考情報）**：*化学と生物* 57(7): 428–432 (2019) — ペリルアルデヒドの機能性中心の解説。香気寄与の根拠にはしない。

### 2-5 ミョウガ（*Zingiber mioga*）

**(19) (2019)**「ミョウガの辛味関連化合物に関する研究」*日本調理科学会誌* 52(1).（解説・総説級の記事）
- MS・NMR 等の機器分析により、主辛味成分としてラブダン型ジテルペン **8β-(17)-epoxylabd-12E-ene-15,16-dial（ミョウガジアール）** が同定された経緯を整理（同定自体は同記事の引用原著による）。
- 支持できる主張：ミョウガの辛味主成分がミョウガジアールであること（引用原著に基づく整理として）。
- **参考情報**：日本香料工業会（JFFMA）の「和の香り」ページは、ミョウガの香気寄与成分として cis-3-hexenol、isopicocamphone を「推測」と明記して挙げ、別研究（黒林ら）による 2-isopropyl-3-methoxypyrazine 等のメトキシピラジン類が green／earthy な香りを形作るとの見解を紹介。いずれも原著を今回直接確認していないため参考情報にとどめる。

### 2-6 その他の国内誌・国内素材

**(20) (2013)** ローズマリーの active odor compounds 10成分の GC-MS 定量（*Food Science and Technology Research* 19(3): 491–）。camphene、1,8-cineole、camphor、linalool、borneol、verbenone、carvone、geraniol、bornyl acetate、α-pinene を定量対象とした国内誌の報告。組成・定量レベル。

**(21) 唐辛子（ハバネロ）の国内誌2報**（*Journal of Oleo Science*）：
- 68(12) ess19155 (2019) "Analysis of Volatile Compounds from Chili Peppers and Characterization of Habanero (*Capsicum chinense*) Volatiles" — 揮発成分66件を分析。
- 67(10): 1219–1225 (2018) ハバネロの主要揮発成分として 6-methyl-(E)-4-heptenyl 3-methylbutyrate を単離・同定（保持指標 1387）。
- いずれも組成・同定レベルで、寄与指標は未確認。

**(22) (2020)**「超高速GCシステムを活用した南阿蘇産ハーブの香気特性評価」J-STAGE 収録誌（誌名コード jafps）47(2): 87–。国産ハーブを GC-MS で同定し GC-O でフレーバーを確認した報告。今回は検索結果の要旨スニペットでの確認にとどまり、全文の再取得はできなかった（掲載誌の正式誌名・対象ハーブの内訳は**要再確認**）。

**タスク2の総括**：日本語・国内誌の査読文献は、山椒・ワサビ・ユズ・シソを中心に実在し、特にシソでは AEDA による寄与研究（熊沢ら 2023）、ユズでは character impact compound の同定研究（湯川ら 1994）と GC-O 併用研究（2009）が寄与レベルに届く。一方、サンショオール定量や花椒の日本語原著は今回範囲では未発見であり、寄与研究の厚みは英語文献（深化ライン）が依然として主軸。

---

## タスク3 地域固有の食用香草・スパイスの査読研究

総括：7対象すべてに査読研究（組成研究）を確認した。ただし寄与レベル（GC-O／AEDA／OAV）に達する研究は少なく、多くは精油・ヘッドスペースの組成レベルである。また**ケモタイプ差・産地差が大きい**素材が多く、原著間の数値を単一の「代表組成」に統合してはならない（食い違いは食い違いとして記録する）。

### 3-1 エパソーテ（*Dysphania ambrosioides*、旧 *Chenopodium ambrosioides*）

**(1) (2026)** "Impact of Soil Nutrients on Chemical Composition and Antioxidant Activities of *Dysphania ambrosioides* Essential Oil in Southern Ecuador" *Plants* 15(3): 373（MDPI; mdpi.com/2223-7747/15/3/373）。
- エクアドル南部3集団の葉精油を GC-MS/FID で分析し、土壌条件と対応する3つのケモタイプを確認：Arenillas（α-terpinene 65.35%、o-cymene 24.83%（原文表記）、ascaridole 3.30%）、Pasaje（α-terpinene 56.31%、o-cymene 10.09%、ascaridole 10.84%）、Piñas（α-terpinene 56.89%、o-cymene 17.07%、ascaridole 7.60%）。精油収率 0.030–0.064% (w/w)。
**(2) Ávila-Blanco et al. (2014)** "Amoebicidal Activity of Essential Oil of *Dysphania ambrosioides* in an Amoebic Liver Abscess Hamster Model" *Evidence-Based Complementary and Alternative Medicine*（PMC3976796）。
- メキシコ産エパソーテの水蒸気蒸留油（生重あたり収率1.0%）：**ascaridole epoxide 45.5%、cis-ascaridole 34.2%**（合わせて約79%）と同定。
**(3) Stappen et al. (2018)** ヒマラヤ西部産材料の精油研究（ResearchGate 記録で確認；誌名未確認）。
- 16成分（油の82.9%）を同定し、p-cymene 36.3%、ascaridole 31.2% が主要。精油そのものの香り記述（terpeny でやや金属的なトップ、herbal／camphorous なハート）も記載。
- **食い違いの記録**：ascaridole 主体型（2014 メキシコ、2018 ヒマラヤ）に対し、2026 エクアドル材料は α-terpinene 主体で ascaridole は 3.30–10.84% にとどまる。エパソーテ精油の「主要成分」はケモタイプ依存であり、単一値で代表させられない。
- 支持できる主張：エパソーテ精油の組成には ascaridole 系と α-terpinene 系のケモタイプが存在すること。
- 支持できない主張：香気寄与（GC-O 等の寄与研究は今回範囲では**未発見**）。食用部位（生葉）の香気と精油組成の同一視。

### 3-2 エゴマ（*Perilla frutescens* var. *frutescens*：種子・韓国ケンニプ葉）

**(4) Kim, H.U. et al. (2019)** "Fatty acid composition and oil content of seeds from perilla (*Perilla frutescens* var. *frutescens*) germplasm of Republic of Korea" *Genetic Resources and Crop Evolution*（ResearchGate 記録で確認）。
- 韓国遺伝資源87系統の種子：α-リノレン酸（ALA）47–64%、リノール酸 10–24%、オレイン酸 9–20%、種子油含量 17–42.7%。
**(5) 総説値（参考情報との境界に注意）**：*Korean Journal of Crop Science* の品質評価総説は、種子油含量 35–54%、ALA 割合 51–71% と整理する。(4) の実測範囲（油 17–42.7%、ALA 47–64%）とは母集団が異なるため、**両者を統合せず併記**する。
- 葉（ケンニプ）について：シソ全般ではケモタイプ多様性が確認されている（§2-4 (17)：perillaldehyde 型の他、dillapiol 型、elsholtziketone 型、perillaketone 型）。韓国の油糧用品種の葉は日本の青シソ（var. *crispa*）と香りが異なるとされ、perillaldehyde を欠く系統の存在が二次情報で述べられるが、**韓国ケンニプ葉そのものを対象とした香気寄与の原著は今回範囲では未発見**。
- 支持できる主張：エゴマ種子油が ALA を主成分とする油脂であること（脂肪酸組成レベル）。
- 支持できない主張：エゴマ種子・葉の「香気寄与化合物」の特定。種子の香味は油脂の酸化生成物等を含む別問題であり、本波では未検証。熊沢ら 2023（§2-4）の AEDA 結果は var. *crispa* の大葉についてのもので、ケンニプへ転用できない。

### 3-3 ザアタル構成ハーブ：シリアンオレガノ（*Origanum syriacum*）

**(6) Farhat, M. et al. (2012)** "Analysis of the Essential Oil Compounds of *Origanum syriacum* L." *Acta Facultatis Pharmaceuticae Universitatis Comenianae* 59. **DOI: 10.2478/v10219-012-0020-x**。
- 南レバノン産葉を SPME GC/MS で分析：**carvacrol 78.4%、thymol 17.9%** が2大成分（thymoquinone 2.5%、β-caryophyllene 0.8% 等）。精油含量は 9.5% (V/m) と報告（当該材料・条件つき）。
**(7) Zein, S. et al. (2011)** "Chemical analysis of essential oil from Lebanese wild and cultivated *Origanum syriacum* L. (Lamiaceae) before and after flowering" *Journal of Medicinal Plants Research* 5(3): 379–387。
- 精油41成分を同定。**野生型は thymol 主体（最高55.47%）、栽培型は carvacrol 主体**と対照的。開花前後でも変動。
**(8) 総説：Alwafa, R.A., Mudalal, S. & Mauriello, G. (2021)** "*Origanum syriacum* L. (Za'atar), from Raw to Go: A Review" *Plants* 10: 1001. **DOI: 10.3390/plants10051001**。
- 13研究・19試料の精油で107–121成分が同定され、thymol は全試料で検出、carvacrol・γ-terpinene がそれに次ぐ頻度。標高・産地・栽培法で thymol／carvacrol の優占が入れ替わること自体が総説の結論。
- 支持できる主張：シリアンオレガノ精油の主要成分は thymol と carvacrol で、その比率は産地・野生／栽培で大きく変動すること。
- 支持できない主張：単一の代表組成。寄与研究（GC-O 等）は今回範囲では未発見。なお「ザアタル」は本来このハーブ自体の呼称でもあり、ゴマ・スマック等との混合調味料を指す場合もある点に注意（本節は植物体 *O. syriacum* の研究）。

### 3-4 カレーリーフ（*Murraya koenigii*）

**(9) (2023)** "Aromatic profiling of *Murraya koenigii* leaves by Thermal Desorption GC-MS"（PMC10336828；誌名未確認）。
- インドの複数品種・産地の葉を TD-GC-MS で比較し、遺伝的要因による揮発プロファイルの差を PCA／クラスターで判別。セスキテルペン割合は Annur 65.34% が最高。α-caryophyllene（α-humulene）は Rajahmundry 28.99%、Kollihills 28.04%。KMM5 系統は α-phellandrene 1.01%。
**(10) (2015)** タイ産生葉の HS-SPME-GC-MS 研究（ResearchGate 記録で確認；誌名未確認）。
- SPME で51成分、水蒸気蒸留油で72成分を同定。蒸留油の主要成分は β-caryophyllene 21.4%、α-selinene 10.2%、α-humulene 7.1%。全ファイバー共通の主要成分として γ-terpinene、β-caryophyllene、β-phellandrene、α-selinene、α-pinene。
**(11) Nagappan, T., Ramasamy, P. & Vairappan, C.S. (2012)** "Chemotaxonomical Markers in Essential Oil of *Murraya Koenigii*" *Natural Product Communications* 7(10). DOI: 10.1177/1934578X1200701034。
- マレーシア6産地の葉油で61成分を同定、11成分が全試料共通。主要成分は β-caryophyllene 16.6–26.6%、α-humulene 15.2–26.7%。
**(12) Padmakumari, K.P. (2008)** "Free and Glycosidically Bound Volatiles in Curry Leaves (*Murraya koenigii*)" *Journal of Essential Oil Research* 20(6): 479–481. DOI: 10.1080/10412905.2008.9700063。
- 遊離型と配糖体結合型の揮発成分を検討（書誌レベルの確認）。
- **食い違いの記録**：二次総説にはデヘラードゥーン産生葉で α-pinene 51.7% を主成分とする報告の引用もある。カレーリーフの主成分は産地・品種で β-caryophyllene 主体型と α-pinene 主体型が入れ替わりうる。
- 支持できる主張：葉の揮発成分として β-caryophyllene、α-humulene、α-selinene 等のセスキテルペンと各種モノテルペンが存在し、組成は遺伝・産地で変動すること。
- 支持できない主張：香気寄与の順位（GC-O／AEDA 研究は今回範囲では**未発見**。「特徴香は caryophyllene と phellandrene による」とする二次的記述は組成からの推論であり寄与実証ではない）。

### 3-5 パンダン（*Pandanus amaryllifolius*）

**(13) 同定史**：パンダン葉の key aroma compound **2-acetyl-1-pyrroline（2AP）** は Buttery, R.G. (1983) がパンダン葉から同定（*Chem. Ind.* 1983: 478；引用経由で確認）。Laksanalamai, V. & Ilangantileke, S. (1993) "Comparison of Aroma Compound (2-Acetyl-1-Pyrroline) in Leaves from Pandan and Thai Fragrant Rice (Khao Dawk Mali-105)" *Cereal Chem.* 70: 381–384 が、パンダン葉とタイ香り米の双方に AP が存在することを GC-MS で確認し、香り米の pandan-like な香りの鍵化合物であることを示した。
**(14) Bhattacharjee, P., Kshirsagar, A. & Singhal, R.S. (2005)** "Supercritical carbon dioxide extraction of 2-acetyl-1-pyrroline from *Pandanus amaryllifolius* Roxb." *Food Chemistry* 91: 255–259。
- 超臨界 CO₂ 抽出でパンダン葉から最大 7.16 ppm の 2AP を抽出（SDE との比較）。
**(15) Cheetangdee, V. & Chaiseri, S. (2006)** "Free Amino Acid and Reducing Sugar Composition of Pandan (*Pandanus amaryllifolius*) Leaves" *Kasetsart J. (Nat. Sci.)* 40 (Suppl.): 67–74。
- 加熱パンダンの aroma impact compounds は **2AP と 3-methyl-2(5H)-furanone**。生葉の前駆体候補：fructose 2.38 mg/g、glucose 1.77 mg/g、遊離アミノ酸では glutamic acid 0.41 mg/g、proline 0.12 mg/g。glutamic acid、proline、ornithine の添加で 2AP が増加（Strecker 分解経由の生成を示唆）。
**(16) Wakte, K.V. et al. (2012)** "Identification of Elite Population of *Pandanus amaryllifolius* Roxb. for Higher 2-Acetyl-1-pyrroline and Other Volatile Contents by HS-SPME/GC-FID" *Food Analytical Methods*. DOI: 10.1007/s12161-012-9373-y。
- インド半島部のクローン集団をスクリーニング。全集団で常時検出される揮発成分19件。2AP は Palghar 集団で最高 12.25 ppm。nonanal、phytol、2-hexenal、2,6-nonadienal、hexanal も主要寄与成分として挙げられる（含量ベースの記述）。
**(17) Bhatt, V. et al. (2021)** パンダンの BADH2 に関する研究（MDPI 誌；誌名未確認）。
- パンダンは植物界で最高水準の 2AP を蓄積する（本研究で 4.38 ppm）が、機能的な BADH2 を保持しており、**2AP 生合成は BADH2 の不活化によるものではない**（香り米とは異なる機序）。
- 支持できる主張：パンダンの特徴香の中心が 2AP であること（同定＋定量＋前駆体実験の蓄積）。加熱時には 3-methyl-2(5H)-furanone も impact compound として報告されていること。
- 支持できない主張：2AP 以外の成分の寄与順位の確定（パンダン自体での AEDA／OAV 研究は今回範囲では未発見。(15) の "aroma impact compounds" は著者の評価表現として記録）。2AP 含量の数値は抽出法・集団で大きく異なる（4.38–12.25 ppm は別条件の値で統合不可）。

### 3-6 ガランガル（*Alpinia galanga*、greater galangal）

**(18) Jirovetz, L. et al. (2003)** "Analysis of the essential oils of the leaves, stems, rhizomes and roots of the medicinal plant *Alpinia galanga* from southern India" *Acta Pharmaceutica* 53(2): 73–81. **PMID: 14764241**。
- 南インド産の葉・茎・根茎・根の精油を GC-FID、GC-MS、**嗅覚測定（GC-O）を併用**して分析。根茎油の主要成分：1,8-cineole 28.4%、α-fenchyl acetate 18.4%、camphor 7.7%、(E)-methyl cinnamate 4.2%、guaiol 3.3%。葉油：1,8-cineole 28.3%、camphor 15.6%、β-pinene 5.0%、(E)-methyl cinnamate 4.6%、bornyl acetate 4.3%、guaiol 3.5%。茎油：1,8-cineole 31.1% 等。根油：α-fenchyl acetate 40.9%、1,8-cineole 9.4% 等。
**(19) Rana, V.S., Verdeguer, M. & Blázquez, M.A. (2010)** *A. galanga* と *A. officinarum*（lesser galangal）の根茎油の GC／GC-MS 比較。*Journal of Essential Oil Research* 22(6): 521–524（書誌レベルの確認）。
**(20) Chaiyana, W. et al. (2022)** タイ産 *A. galanga* 精油の組成研究 *Molecules* 27: 3275。
- 主要成分は **methyl cinnamate 33.31%、1,8-cineole 29.64%**、germacrene D 5.62%、p-cymen-8-ol 3.06%、α-amorphene 3.01%。精油収率 0.14% (v/w)。
- **食い違いの記録**：根茎油の優占成分はインド産（1,8-cineole 主体、methyl cinnamate は 4.2%）とタイ産（methyl cinnamate 33.31% と 1,8-cineole が拮抗）で異なる。部位差も大きい（根は α-fenchyl acetate 主体）。
- 支持できる主張：ガランガル精油の組成（部位・産地つき）。GC-O を併用した査読研究が存在すること（(18)）。
- 支持できない主張：GC-O の記述子・寄与順位の詳細（(18) の要旨では組成のみ確認、記述子は全文内）。単一の代表組成への統合。

### 3-7 バイマックルート／こぶみかんの葉（*Citrus hystrix*、kaffir lime）

**(21) Nor, O.M. (1999)** "Volatile aroma compounds in *Citrus hystrix* oil" *J. Trop. Agric. and Fd. Sc.* 27(2): 225–229。
- 新鮮葉・果皮油から41成分（油の約95%）を同定。**葉油の主成分は L-citronellal 61.73%**、果皮油は limonene、sabinene、β-pinene が優占。p-menthan-8-ol、guaiol、4-p-menthene を本種から初報告。
**(22) (2022)** "Essential Oils Composition of Kaffir Lime (*Citrus hystrix* DC.) Collection of Bogor Botanic Gardens from Central Java" *Journal of Tropical Biodiversity and Biotechnology* 7(1). **DOI: 10.22146/jtbb.66061**。
- 産地型の違いが顕著：East Sumba 産葉油は **linalool 86.06%** が主成分（リナロール型ケモタイプ）、Central Java 産は citronellal 56.99%＋citronellol 11.66%、一般的な型は citronellal 85.07%。
**(23) (2020)** インドネシア産葉油の古典的蒸留法による評価 *IOP Conf. Ser.: Mater. Sci. Eng.* 991: 012014. DOI: 10.1088/1757-899X/991/1/012014。citronellal 85.4%、citronellol 6.8%、linalool 1.9%、citronellyl acetate 1.7%（16成分で油の99.99%）。
- **参考情報**：マレーシアの学位論文（Universiti Malaysia Sabah）でも葉油 citronellal 85.00%、citronellol 4.75% と査読論文群と整合する値。学位論文のため根拠にはしない。
- **食い違いの記録**：citronellal の報告値は 56.99–85.4% と幅があり、さらに linalool 86.06% のケモタイプが存在する。「バイマックルート葉＝citronellal 主体」は通常型についての記述であり全数には適用できない。
- 支持できる主張：通常型の葉油は citronellal が優占し、果皮油とは組成が大きく異なること。ケモタイプの存在。
- 支持できない主張：香気寄与の実証（GC-O／AEDA 研究は今回範囲では**未発見**。citronellal の寄与は組成優占からの推論にとどまる）。

---

## タスク4 相互作用の原著追加

アプリの相互作用ルール（現在6件）への追加候補として、組み合わせ・知覚相互作用を**直接調べた原著**を集めた。製品開発型の配合研究と知覚機構の研究を区別して記録する。

### 4-1 スパイス×チョコレート（×甘味）

**(1) Martins, G.A.R., Augusto, P.P.C., Luccas, V. & Bolini, H.M.A. (2025)** "Assessing the temporal profile and liking of sugar-free spicy dark chocolates with different concentrations of *Capsicum baccatum* pepper and rebaudioside A" *Journal of the Science of Food and Agriculture*（2025）. **PMID: 40320588／PMCID: PMC12260304**（DOI は未確認）。
- シュガーフリー・ダークチョコレート（ココアマス440 g/kg、カカオバター110 g/kg、マルチトール445 g/kg）で、*C. baccatum* ペッパー（2.0／3.5／5.0 g/kg、30,000 SHU）とステビア抽出物（rebaudioside A 500／800／980 g/kg）の2要因を時間強度（TI）法と消費者120名の受容で評価。
- 結果：ペッパー濃度↑で辛味の強度・持続↑、rebaudioside A 濃度↑で甘味強度↑。**例外として、最高ペッパー（5.0 g/kg）×最高甘味（980 g/kg）の組合せでは辛味の強度と持続が有意に低下**した。著者らは「甘味強度の上昇が辛味知覚を調節しうる」と結論。辛味の強度・持続が過大になると受容は低下するが、試料全体では良好な受容。
- 支持できる主張：チョコレートマトリックス内で、甘味（高甘味度甘味料由来）が高濃度域の辛味知覚を抑制しうること（当該配合・濃度域つき）。
- 支持できない主張：スクロース系チョコレートへの直接の転用（本研究はマルチトール＋ステビア系）。抑制は最高濃度同士の組合せでのみ観察された例外条件であり、全濃度域での一般則ではない。

### 4-2 スパイス×お茶

**(2) Ochanda, S.O. et al. (2015)** "Antioxidant Capacity and Consumer Acceptability of Spiced Black Tea" *Journal of Food Research* 4(6): 104. **DOI: 10.5539/jfr.v4n6p104**。
- ケニア産 CTC 紅茶に ginger、lemongrass、nutmeg、cinnamon、rosemary、tea masala（ginger、cinnamon、cardamom、clove、black pepper、nutmeg の混合）を配合。スパイス添加で消費者の嗜好は有意に向上し、好まれた比率は cinnamon 10%、lemongrass 5%、ginger 15%。一方、**スパイス量の増加に伴いブレンド茶の抗酸化活性は有意に低下**した（紅茶単独 92.66% に対し最高のスパイス cinnamon でも 89.89%）。
- 支持できる主張：スパイス配合が紅茶の嗜好を高めること（配合比率つき）と、抗酸化活性の測定値が配合で低下するという化学面の相互作用。
- 支持できない主張：知覚機構（どの成分が茶の苦味・渋味をどう変えるか）は本研究の対象外。嗜好向上を「成分間相互作用の実証」とは表現できない。
- **参考情報**：Zayapor, M.N. et al. (2019) 市販スパイス茶等のポリフェノール・抗酸化能の変動（*AIP Conf. Proc.* 2111: 050008. DOI: 10.1063/1.5111256）— 学会プロシーディングス。Sunarharum, W.B. et al. (2022) スパイス茶の可能性に関する総説（*Adv. Food Sci. Sustainable Agric. Agroindustrial Eng.* 5(2): 193–200）— 二次情報。
- **未発見**：スパイス×お茶の**知覚相互作用を機構レベルで直接調べた原著**（例：カルダモン香気による茶の渋味知覚の変化）は、今回の検索範囲では未発見。

### 4-3 カプサイシン×脂肪・糖・タンパク質（辛味の調節）

**(3) Nasrawi, C.W. & Pangborn, R.M. (1990)** "Temporal effectiveness of mouth-rinsing on capsaicin mouth-burn" *Physiology & Behavior*（ScienceDirect PII: 003193849090067E）。
- カプサイシン溶液の口中灼熱感に対する各種リンスの時間的効果を測定。低温（5℃）の溶液が20℃より有効。**10% スクロース溶液（20℃）と全乳（5℃）が同等の低減効果**。脂肪含量の異なる甘味乳（0%／10% 脂肪、脂肪球径も変動）でも低減度は同程度だった。反復刺激による脱感作も観察。
- 支持できる主張：冷却と甘味がカプサイシンの灼熱感を低減すること、**脂肪含量そのものは（この実験系では）低減度の決定因子ではなかった**こと。
- 支持できない主張：「脂肪がカプサイシンを溶かして流す」という単純な図式の実証にはなっていない（むしろ乳の効果は温度・糖・タンパク質等を含む複合要因）。

**(4) Lawless, H. et al. (2000)**（引用経由で確認）— カプサイシンを油に分散させると水系より認識閾値が上昇する（脂溶性カプサイシンの脂肪相への分配による）。書誌・数値の一次確認は本波では引用経由にとどまるため、格上げには原著の直接確認を要する。
**(5) (2022)** "Role of dairy proteins in the reduction of capsaicin-induced oral burning pain"（ResearchGate 記録 365486765 で確認；誌名未確認）。
- 0.1% カプサイシンゲルで灼熱感を誘発し、casein 3.5%、whey 3.5%、lactose 3.5%（対照）、脱脂乳でのリンスを比較（24名、クロスオーバー）。**全体では溶液間に有意差なし（P ≥ 0.070）**。探索的比較では casein が lactose より短期的に不快感・灼熱をやや低減（P ≤ 0.020）。
- 支持できる主張：「カゼインがカプサイシンを捕捉する」という通説は、この直接検証では強い支持を得ていないこと（効果があるとしても小さい・短期的）。
**(6) Nolden, A. et al. (2019)**（引用経由で確認）— アイスクリーム、イタリアンアイス、ヨーグルト、ラッシー、冷水（4℃）、温水（37℃）等の口直しを比較し、全ての口直しが温水より有効。脂肪・糖・タンパク質・温度・粘度の複合要因として論じられる。(3)(5) と合わせ、「辛味の緩和＝脂肪のみ」という単因子説明は原著群と整合しない。
- 古典として Green, B.G. & Shaffer, G.S. (1993) "The sensory effects of capsaicin on human taste and flavor perception" *Chemical Senses* の書誌が二次資料で確認できるが、内容は本波では未確認。

### 4-4 香り→味の増強（odor-induced taste enhancement, OITE）

**(7) Sakai, N. et al. (2001)** "Enhancement of Sweetness Ratings of Aspartame by a Vanilla Odor Presented Either by Orthonasal or Retronasal Routes" *Perceptual and Motor Skills* 92: 1002–1008. **DOI: 10.2466/pms.2001.92.3c.1002**。
- バニラ香をオルソネーザル／レトロネーザルの両経路で提示すると、アスパルテームの甘味評定が増強される。香りが味蕾を直接刺激していない条件でも生じるため、嗅覚知覚を介した増強であることを示した古典的原著。
**(8) (2017)** "Taste of breath: the temporal order of taste and smell synchronized with breathing as a determinant for taste and olfactory integration" *Scientific Reports* 7: 8922. **DOI: 10.1038/s41598-017-07285-7**。
- バニラ香によるスクロース甘味の増強は、飲んだ**後**のレトロネーザル提示でのみ生じ、提示順序を逆転させると消失する。OITE がタイミング依存であることを示す。
- 支持できる主張（(7)(8)）：バニラ香（バニリン系の甘い香り）は甘味知覚を増強しうるが、提示経路・タイミングに依存する。
- **参考情報**：Santoyo-Zedillo, M. et al. (2023) 仏・墨の異文化比較（SSRN プレプリント／Pangborn 2023 発表）— バニラ香がハイビスカス水（ハーブインフュージョン）の甘味を両国・両 BMI 群で増強、コリアンダー香がトウモロコシの塩味を増強、という OITE の文化・経験依存性。プレプリントのため参考情報。
- **未確認**：シナモン香→甘味増強は、Koubaa & Eleuch (2020) *J. Consumer Marketing* 37(5): 511–519 が Biswas et al. の研究（チョコレート香・シナモン香がペストリーの甘味知覚と消費を高める）を二次引用する形でのみ確認でき、**原著そのものは本波では未確認**。アプリのルール化には原著の直接確認が必要。

### 4-5 混合物・テクスチャ・マトリックスの相互作用（他タスクからの横断記録）

**(9) 熊沢ら 2023**（§2-4 (16)）— シソの trans-1,2-dihydroperillaldehyde は単独ではシソ様でない香りだが、混合系（ポン酢醤油＋シソ香料）で「青シソ様」と嗜好性を有意に高めた。**個々の成分の香調からは予測できない混合物相互作用**の日本語原著。
**(10) Yu et al. 2025**（§1(b)）— クローブ添加が煮込み牛肉の dimethyl trisulfide 生成を抑制（FD 4096→2048）。スパイス（ポリフェノール）× Maillard 反応の化学的相互作用。
**(11) とろみ調整剤×ワサビ 2015**（§2-2 (9)）— テクスチャ（増粘）が AITC の放散を抑え、咀嚼相当の圧縮で回復する。マトリックス×香気放散の原著。

### 4-6 採用しなかった情報（記録）

- 食品系 SEO／ベンダー記事（Alibaba product-insights 等）に見られた「全脂肪乳が辛味を62%低減」「シナモン香で甘味評価が22%上昇」等の具体的数値は、原著を特定・確認できなかったため**不採用**（数値の出所不明）。相互作用ルールの根拠には原著確認済みのもののみを使うべきである。

**タスク4の総括**：追加候補として最もルール化しやすいのは、(1) 高甘味×高辛味の抑制（チョコレート実系）、(3) 冷却・甘味によるカプサイシン灼熱の低減と「脂肪単独決定論」の否定、(7)(8) バニラ香→甘味増強（経路・タイミング依存）。スパイス×お茶は嗜好・化学レベルの研究のみで、知覚機構の原著は未発見——この空白自体がアプリ側の表現（「相互作用が確認されている」と言い過ぎない）の根拠になる。

---

## 統合フェーズへの申し送り（本波の結論）

1. **クローブ**：Yu 2025 全文により、β-caryophyllene、(E)-anethole、2-methoxy-4-methylphenol、1,8-cineole、linalool、4-allylanisole、limonene、3-carene、β-pinene まで寄与確認を拡張可能（条件：クローブ粉末での AEDA／OAV。ただし limonene・β-pinene・nonanal は OAV が小さく、FD との併記が望ましい）。endowment の数値は「牛肉煮込みへの移行」の文脈限定で、クローブ単独プロファイルへ流用しない。
2. **クミン**：cuminaldehyde は寄与候補のまま据え置きが正確。全文入手が統合の前提条件として残る（機関購読等での入手が次善策）。
3. **和素材**：シソは熊沢ら 2023 により寄与レベル（AEDA 11成分＋DHP）で新規に厚みがついた。ユズは 1-p-menthene-8-thiol（湯川ら 1994）と GC-O 併用研究（2009）が寄与側の根拠。ワサビは AITC／6-MSITC の定量基盤が日本語文献で揃った（寄与順位の実証とは別）。山椒は組成側の日本語文献が補強された（寄与は Jiang & Kubota 2004 が主軸のまま）。
4. **地域香草**：7素材とも収録の根拠となる査読組成研究は存在するが、寄与研究はほぼ未開拓。収録時は「組成レベル」と明示し、ケモタイプ差（エパソーテ、シリアンオレガノ、カレーリーフ、バイマックルート）を注記すること。パンダンの 2AP は例外的に寄与の裏付けが厚い。
5. **相互作用ルール追加候補**：§4 の (1)(3)(7)(8) が原著確認済みで優先度高。(4)(6) は引用経由のため、ルール化前に原著の直接確認を推奨。シナモン香→甘味は原著未確認のため保留。
6. **本波全体の限界**：単一検索セッションの範囲であり、CiNii／J-GLOBAL の網羅検索や各誌の巻号総覧までは行っていない。「未発見」は「調査範囲では未発見」の意味であり、不存在の証明ではない。
