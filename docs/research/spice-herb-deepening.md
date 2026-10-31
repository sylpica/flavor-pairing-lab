# スパイス・ハーブ深化調査（第2ラウンド）— flavor-pairing-lab

- 調査日: 2026-10-31
- 目的: 第1ラウンド（組成中心）で薄かった「香気寄与の原著」を追加探索し、加工・加熱変化、積み残し3件、未収録化合物の収録可否を判定する。
- 参照: docs/research/spices-research.md、docs/research/herbs-research.md（第1ラウンド）、docs/DATA_COVERAGE.md

## 格付けルール（本書全体に適用）

- **contribution（寄与）への格上げは査読原著のみ**で判断する。手法は GC-O／AEDA／AECA／OAV／香気モデル＋欠落（omission）試験／再構成／官能相関のいずれかで「どの化合物が寄与するか」が示されたものに限る。
- GC-MS で検出されただけのものは**組成（composition／detection）**であり、寄与ではない。主要成分の％は組成値としてのみ記録する。
- 拡大範囲（プレプリント、学位論文、学会要旨、公的機関、専門メディア、メーカー技術情報）で得たものは**「参考情報」**として分離し、実測・寄与の根拠として見せない。査読論文と食い違う場合は論文を優先し、食い違い自体を記録する。
- 数値は原著要旨／一次書誌レコードで直接確認できたものだけを、試料・方法の条件とセットで記載する。
- 出典ごとに出典種別（査読原著／査読総説／学位論文／学会要旨／公的機関／専門メディア／メーカー技術情報）を明記する。

## 結果サマリー

| タスク | 結果 |
|---|---|
| 1. 香気寄与研究（14素材＋メース） | 寄与の査読原著を新たに確認：**12素材**（ブラックペッパー、コリアンダーシード、フェンネルシード、クローブ、ナツメッグ種子、タイム、ローズマリー、バジル、オレガノ、セージ、ペパーミント、スターアニス）。未発見：**クミン**（GC-O併用研究はあるが化合物別指標が未検証）、**カルダモン**（素材単独研究なし）、**メース** |
| 2. 加工・加熱変化 | シミュレーション傾向に追加可能な原著を確認：ブラックペッパー（条件が最も揃う）、唐辛子（種子・粉体系）、クミン（定性のみ）。弱い形でのみ可：コリアンダー。スターアニスは「乾燥」軸のみ（焙煎原著は未発見） |
| 3. 積み残し | **3件とも解消**：山椒の揮発成分（Jiang & Kubota 2004、AEDA寄与まで確認）、唐辛子の品種・種別研究（査読原著4件）、緑花椒（Z. schinifolium 自体の原著4件。赤花椒との食い違い＝韓国産エストラゴール型も記録） |
| 4. 未収録化合物 | グアイアコール＝**収録すべき**（カカオ系で寄与証拠が複数）。有機酸類＝個別登録：クエン酸・リンゴ酸・酢酸・乳酸は収録すべき、酒石酸・シュウ酸は条件付き。糖類＝スクロースは収録すべき（ただし添加成分として区別）、グルコース・フルクトースは条件付き |

全体を通じた教訓：「組成の主成分＝寄与の主役」とは限らないことが実測で繰り返し示された（ナツメッグのテルペン類、ローズマリーの微量ケトン類、オレガノAEDAでのチモールの不在、ペパーミントAEDAでのメントールの不在、コリアンダーでのゲラニオール、フェンネル茶でのエストラゴール）。アプリのリンク設計では composition と contribution の分離と、contribution への出典（手法・試料条件・ケモタイプ）併記が必須。

---

# タスク1. 香気寄与研究の追加探索

## 1-1. ブラックペッパー（*Piper nigrum* L.）

### 見つかった寄与研究

**[査読原著（3部作）]** Jagella, T. & Grosch, W. (1999) "Flavour and off-flavour compounds of black and white pepper (*Piper nigrum* L.)"
- I. Evaluation of potent odorants of black pepper by dilution and concentration techniques. *Eur Food Res Technol* 209:16–21. DOI: 10.1007/s002170050449
- II. Odour activity values of desirable and undesirable odorants of black pepper. *Eur Food Res Technol* 209:22–26. DOI: 10.1007/s002170050450
- III. は白胡椒が主対象（本節の主張には使わない）
- 手法：AEDA＋AECA、ヘッドスペースGC-O、キラル分離 → 定量 → OAV → **14 odorants による香気モデル構築＋欠落試験**
- **寄与（欠落試験で key odorants とされたもの）**：α-pinene、β-pinene、myrcene、α-phellandrene、limonene、linalool、methylpropanal、2-methylbutanal、3-methylbutanal、butyric acid、3-methylbutyric acid
- 補足：粉砕黒胡椒の室温30日保存で α-pinene・limonene・3-methylbutanal の損失が pepper-like／citrus-like／terpene-like／malty ノート欠落の主因。カビ様オフフレーバーは 2,3-diethyl-5-methylpyrazine（2.9 µg/kg）＋2-isopropyl-3-methoxypyrazine（0.2 µg/kg）の混合物（数値は二次レコード経由の要旨転載で確認。原著全文での再確認は未実施）
- AECA特記：α-phellandrene と limonene は AEDA より AECA で odor potency が高かった
- 主張できる範囲：上記化合物は当該試料の香気モデル＋欠落試験での寄与。産地・粉砕度・保存状態で順位は変わり得る
- 主張できない範囲：**β-caryophyllene は組成上の主成分だが欠落試験の key リストに入っていない**。組成の大きさから寄与へ格上げしない。piperine は辛味成分であり香気寄与ではない

**[査読原著]** Wood, C. et al. (2008) "From wine to pepper: rotundone, an obscure sesquiterpene, is a potent spicy aroma compound." *J Agric Food Chem* 56(10):3738–3744. DOI: 10.1021/jf800183k／PMID: 18461961
- 手法：GC-MS／GC-MS-O同定、安定同位体希釈定量、官能相関、閾値測定、OAV評価
- **寄与：rotundone**（強い spicy／peppercorn 香）。胡椒における OAV は 50,000–250,000 のオーダー（要旨）。検出閾値 8 ng/L（水）／16 ng/L（赤ワイン）※マトリックスはワイン／水であり胡椒そのものの値ではない
- 範囲：rotundone 単独の識別可能な香質への寄与。全体の再構成・欠落試験ではないため [Jagella] の多成分モデルと併せて見る

**[査読原著（手法確認のみ）]** Sádecká, J. (2010) *Czech J Food Sci* 28(1):44–52. DOI: 10.17221/1325-CJFS
- γ線／乾熱殺菌した粉末黒胡椒を GC-O／AEDA で「全体香への個別寄与」評価したと要旨に明記。加熱殺菌で全体香が著しく低下。ただし要旨で化合物別 FD リストは確認できず、本論文単独ではリンク格上げしない

### 参考情報（寄与の根拠にしない）
- [専門メディア／業界誌] Lawrence, B.M. "Progress in Essential Oils" *Perfumer & Flavorist*：Jagella & Grosch の結果と白胡椒香気モデルの配合量を紹介する二次資料。原著と矛盾しないが数値の一次根拠は原著に帰す
- [査読原著・官能のみ] ベトナム産黒胡椒の odor lexicon 開発研究（11記述子）。産地ブランド評価の文脈付けのみ
- 学位論文・プレプリント・学会要旨で上記を超える寄与研究は拡大範囲でも未発見

### アプリへ反映する場合の形
- contribution 格上げ可：×{α-pinene, β-pinene, myrcene, α-phellandrene, limonene, linalool, methylpropanal, 2-methylbutanal, 3-methylbutanal, butyric acid, 3-methylbutyric acid}（欠落試験）、×rotundone（GC-MS-O＋OAV＋官能相関。「peppery 香質の impact compound」と注記）
- 格上げ不可：β-caryophyllene、sabinene、δ-3-carene 等は組成のまま。piperine は辛味リンクとして分離維持

## 1-2. クミン（*Cuminum cyminum* L.）— 寄与は保留（未解消）

**[査読原著]** Ravi, R., Prakash, M. & Bhat, K.K. (2013) "Characterization of Aroma Active Compounds of Cumin (*Cuminum cyminum* L.) by GC-MS, E-Nose, and Sensory Techniques." *Int J Food Properties* 16:1048–1058. DOI: 10.1080/10942912.2011.576356
- 手法：インド各地のクミン精油8試料、GC-MS、GC-olfactometry、官能プロファイリング、e-nose、PCA
- 要旨で確認できるのは組成（cuminaldehyde 8–17%、β-pinene 22–27%、p-cymene 23–39%、γ-terpinene 11–27% 等）と組成差—官能差の対応まで
- **主張できない範囲（重要）**：化合物別の FD 値・OAV・AEDA 順位・再構成／欠落試験の結果が要旨から一切確認できない。題名は "Aroma Active Compounds" だが、個別化合物の寄与を断言できない。第1ラウンドの「寄与は未確認」に最も近い状態が残る

### 参考情報
- [学位論文内の引用] Hassanein (2011, Cairo Univ. PhD thesis, IAEA INIS収録) の文献レビューが Leopold et al. (2005) を引用し「GC・GC-MS・olfactometry で60超成分を同定、主成分 cuminaldehyde 36%」等を転載。Leopold 原著の DOI/PMID は拡大探索でも直接確認できず、二次引用としてのみ記録。数値が Ravi のインド産試料と異なるのは試料／ケモタイプ差であり矛盾とはしない（優先は Ravi）
- [メーカー技術情報] McCormick Science Institute "Cumin"：Ravi 2013 を典拠とする要約（独立実測ではない）
- [メーカー技術情報] BenchChem Application Notes (2025)：GC-O descriptors の表（Ravi 系研究からの adapted）。記述子の参考のみ
- [除外・混同防止] Kirici et al. 系の "Characterization of Aroma-Active Compounds in Seed Extract of Black Cumin (*Nigella sativa* L.) by AEDA" は **black cumin＝*Nigella sativa* であり *Cuminum cyminum* ではない**。流用禁止
- プレプリント・学会要旨で *C. cyminum* の AEDA／再構成／欠落試験は拡大範囲でも未発見

### アプリへ反映する場合の形
- 強い contribution への格上げは**不可（保留）**。14素材中で唯一、化合物別寄与が要旨レベルで検証できない
- 暫定表記：×cuminaldehyde のみ「GC-O併用査読研究あり・化合物別指標は全文未確認」と注記した弱い寄与候補として保持し、Ravi 全文取得後に再判定するのが安全。他の主要成分は組成のまま

## 1-3. コリアンダーシード（*Coriandrum sativum* L. 果実・種子）

※葉（cilantro）の研究は除外（Cadwallader et al. 2005 の AEDA は葉が対象で key は (E)-2-alkenals 等。種子の根拠にしない）

**[査読原著]** Pater, A., Satora, P. & Januszek, M. (2024) "Effect of Coriander Seed Addition at Different Stages of Brewing on Selected Parameters of Low-Alcohol Wheat Beers." *Molecules* 29(4):844. DOI: 10.3390/molecules29040844（PMC: PMC10892622）
- 手法：コリアンダー種子原料について GC-MS＋GC-O。ホップと比較
- **寄与（GC-O）**：種子から11の odor-active 成分（すべてテルペン類）を検出。**香り強度が最も高かったのは linalool、carvacrol、camphor**（いずれも閾値超過濃度）。ホップに無く種子の key aromas とされたのは γ-terpinene、camphor、carvacrol（含有量はそれぞれ 1,232、5,646、65 µg/g）
- 組成分離：linalool は全 aroma 成分量の70%超（ホップの16倍）。geraniol も 2,713 µg/g と多いが「最高強度」の3化合物には入っていない＝量と GC-O 強度が一致しない例
- 範囲：ビール原料評価の文脈。種子単独の AEDA／OAV／欠落試験ではない

### 参考情報
- [学位論文・修士] Solanki, S.（MPUAT Udaipur）：低温粉砕と組成／linalool 保持の比較が中心。寄与判定なし
- [査読誌論文だが参考扱い] Getachew, M. et al. *J Food Processing & Technology*：エチオピア産10スパイスの character-impact 同定を目的とするが、素材×化合物別の寄与リストを一次テキストで検証できなかったため格上げ根拠にしない
- プレプリント・学会要旨で種子単独の AEDA／OAV は未発見

### アプリへ反映する場合の形
- contribution 格上げ可（GC-O強度級）：×linalool、×carvacrol、×camphor（注記「ビール原料評価の GC-O、AEDA/OAVではない」）
- 格上げ可（特徴成分として、強度上位と区別）：×γ-terpinene
- 格上げ不可：geraniol（高含有＝組成止まり）、α-pinene 等。葉由来 (E)-2-dodecenal 等は種子へ転用禁止

## 1-4. フェンネルシード（*Foeniculum vulgare* Mill. 果実）

**[査読原著・最強級]** Zeller, A. & Rychlik, M. (2006) "Character Impact Odorants of Fennel Fruits and Fennel Tea." *J Agric Food Chem* 54(10):3686–3692. DOI: 10.1021/jf052944j（PMIDは本調査では未確認のため記載しない）
- 手法：果実とフェンネル茶の抽出物について AEDA → 定量 → 茶について OAV → **官能実験による impact 検証**
- **寄与**：果実・茶の双方で高FD＝ trans-anethole、anisaldehyde、trans-4,5-epoxy-(E)-2-decenal、次いで fenchone、1,8-cineole、(R)-α-pinene、estragole、β-myrcene。茶での OAV 順位は trans-anethole が最高、次いで estragole、fenchone、1,8-cineole、(R)-α-pinene、β-myrcene、anisaldehyde
- **決定的な官能結果**：estragole はフェンネル茶全体の風味に odor impact が**なかった**（著者らは「estragole を減らしても官能品質は損なわれない」と結論）。trans-anethole と fenchone が character impact compounds
- 条件：抽出率はマトリックス依存が大きい（trans-anethole・estragole は果実→茶へ約10–15%移行、fenchone・camphor・linalool・carvone は26–50%等）
- 表記上の注意：estragole の寄与は「FD/OAVは高いが茶では impact なし」という食い違いごと記録するのが正しく、無条件の key odorant 扱いは誤り

**[査読原著]** Díaz-Maroto, M.C. et al. (2005) "Volatile Components and Key Odorants of Fennel (*Foeniculum vulgare* Mill.) and Thyme (*Thymus vulgaris* L.) Oil Extracts…" *J Agric Food Chem* 53(13):5385–5389. DOI: 10.1021/jf050340+／PMID: 15969523
- 手法：種子の SDE／SFE 抽出を GC-MS＋GC-O で比較
- **寄与（最も強い香りとして検出）**：trans-anethole（anise, licorice）、estragole（anise, licorice, sweet）、fenchone（mint, camphor, warm）、1-octen-3-ol（mushroom）
- [Zeller] との関係：GC-O では estragole は強い香りとして検出されるが、茶マトリックスの官能では impact なし。手法・マトリックスが違えば結論が変わる事例として併記し、「全体風味への impact」については Zeller の官能結果を（茶に限って）優先

**[査読原著・精油試料]** Kim, J.K. et al. (2022) *Nutrients* 14(4):741. DOI: 10.3390/nu14040741
- 市販精油の SPME-GC-MS＋GC-O（強度4段階）。**寄与（GC-Oで7 odor-active）**：p-anisaldehyde、limonene、estragole、cis-anethole、trans-anethole、α-pinene、fenchone。主目的は代謝研究であり香気分析は characterization。種子そのものへの一般化は上記2原著を主根拠とする

※第1ラウンドの注意を維持：果実油で estragole が支配的な原著もあり、「trans-anethole 主体」は上記試料の結果であって無条件に一般化しない。

### 参考情報
- [公的機関] 税関分析関連 "Analysis of Spices"（Kumazawa & Hayano、customs.go.jp）：混合スパイス中のフェンネル検出に anethole が有効という GC-MS 同定の文脈。寄与研究ではない
- 学位論文・プレプリント・学会要旨で Zeller & Rychlik を超える寄与研究は未発見

### アプリへ反映する場合の形
- contribution 格上げ可（最強級：AEDA＋OAV＋官能）：×trans-anethole、×fenchone
- 格上げ可（AEDA高FD級・茶OAV順位つき）：×anisaldehyde、×trans-4,5-epoxy-(E)-2-decenal、×1,8-cineole、×(R)-α-pinene、×β-myrcene（GC-O強度級）：×1-octen-3-ol
- 条件付き：×estragole は「GC-O/AEDAでは強いが、フェンネル茶の全体風味では官能 impact なし（Zeller & Rychlik 2006）」の注記必須。×cis-anethole、×limonene、×p-anisaldehyde は精油 GC-O 級として弱く格上げ可

## 1-5. クローブ（*Syzygium aromaticum* (L.) Merr. & L.M.Perry、蕾）

**[査読原著]** Yu, Q. et al. (2025) "Insights into the flavor endowment of aroma-active compounds in cloves (*Syzygium aromaticum*) to stewed beef." *Food Chem* 462:140704. DOI: 10.1016/j.foodchem.2024.140704／PMID: 39226642
- 手法：クローブ粉末、クローブ入り煮込み牛肉、塩のみの煮込み牛肉について GC-IMS、GC-Orbitrap-MS-O＋官能。flavor endowment rate value (ERV) を算出
- **寄与**：173揮発成分中 21成分が aroma-active、うち9成分が煮込み牛肉への flavor endowment 効果あり（terpenoids が高い ERV）。**化合物名まで要旨で検証できたのは eugenol のみ**：ERV は低いが OAV と FD factor が高く、煮込み牛肉の香りプロファイルに有意に影響（香調は clove／herbal／anise／floral で官能でも確認）。クラスレベルでは terpenoids、phenolics、ethers が全体香に有意な影響
- 主張できない範囲：残り20成分・endowment 9成分の個別名は要旨では未確認。β-caryophyllene や eugenyl acetate をこの論文根拠で格上げできない（全文確認が必要）

### 参考情報
- [査読総説・ミニレビュー] Karunamay, S. (2019) *J Food Research and Technology* 7(4):23–25：eugenol と eugenyl acetate が sweet／floral／fruity、vanillin が spicy、caryophyllene が woody に関与すると総説的に帰属（典拠 Nowak et al. 2012 等）。一次 GC-O ではないため寄与候補の文脈付けのみ
- [専門／教育資料] 薬学系 clove monograph（Scribd収録）：eugenol／eugenol acetate 比と香りの定性記述。参考情報止まり
- [除外] Univ. of Calicut 博士論文（Rosamma, 2002）は *Syzygium travancoricum* と *Cinnamomum* 葉油の GC-O であり *S. aromaticum* 蕾ではない。流用禁止
- プレプリント・学会要旨で蕾単独の AEDA／OAV は未発見

### アプリへ反映する場合の形
- contribution 格上げ可：×eugenol（OAV＋FD。注記「煮込み牛肉への endowment 文脈で検証」）
- 格上げ不可（現時点）：β-caryophyllene、eugenyl acetate、vanillin、α-humulene 等は組成のまま。総説帰属は「参考情報」ラベル併記に留める。次作業：Yu et al. 全文の21成分表の確認

## 1-6. ナツメッグ（*Myristica fragrans* Houtt.、種子）／メース（仮種皮）

**[査読原著]** Chatterjee, S., Gupta, S., Variyar, P.S. (2015) "Comparison of Essential Oils Obtained from Different Extraction Techniques as an Aid in Identifying Aroma Significant Compounds of Nutmeg (*Myristica fragrans*)" *Natural Product Communications* 10(8):1443–1446. PMID: 26434138
- 手法：5種の抽出法で得た精油を比較し、GC-O＋OAV で評価
- **寄与**：**sabinene、α-pinene**（GC-O で特徴香への寄与が示され、かつ OAV が高く「特徴的なナツメッグ臭を与える」と結論）。**β-pinene**（GC-O で特徴ノートへの寄与。OAV の裏付けは要旨範囲では上記2成分のみ）
- 重要な観察：ヘッドスペース／減圧蒸留画分は myristicin・elemicin・safrole（フェノールエーテル類）を**含まないのに良好なナツメッグ香**を持ち、テルペン類がトップノートに大きく関与
- 範囲：当該精油試料における寄与。myristicin 等の寄与は本研究ではむしろ「無くても香る」側の証拠

### メース（仮種皮）単独
- **寄与研究は調査範囲では未発見**（拡大範囲含む。検索：mace Myristica aril GC-O／olfactometry／aroma active／thesis 等）
- [参考情報・専門メディア] 香料系メディアが「メース油は sabinene、α-pinene、myristicin、eugenol を含みナツメッグよりテルペン的でシャープ」と記述するが、組成・印象の記述であり寄与証拠ではない

### アプリへ反映する場合の形
- 格上げ可：ナツメッグ（種子）×sabinene、×α-pinene（GC-O＋OAV）、×β-pinene（GC-O）
- 格上げ不可：×myristicin／elemicin／safrole（組成のみ）、メース×全化合物（寄与研究なし）

## 1-7. タイム（*Thymus vulgaris* L.）— ケモタイプ依存性が核心

**[査読原著 (a)]** Díaz-Maroto, M.C. et al. (2005) *J Agric Food Chem* 53(13):5385–5389. DOI: 10.1021/jf050340+／PMID: 15969523（フェンネルと同一論文）
- 手法：SDE／SFE 油の GC-MS＋GC-O
- **寄与**：**thymol、carvacrol** がタイム葉の香気のキー化合物と同定。試料は thymol と p-cymene が最主要成分（＝チモール型に相当。ケモタイプを明示した設計ではない）

**[査読原著 (b)]** Goodner, K.L. et al. (2006) "Aromatic profiles of *Thymus hyemalis* and Spanish *T. vulgaris* essential oils by GC-MS/GC-O" *Industrial Crops and Products* 24:264–268. DOI: 10.1016/j.indcrop.2006.06.006（USDA-ARS 出版物レコードでも確認）
- 手法：クローン株を5生育段階で採取、GC-MS＋GC-O。*T. vulgaris* で52の香り、うち26を主要として報告
- **寄与（スペイン産試料）**：**1,8-cineole、borneol、terpinyl acetate、β-damascenone** が最大の aroma impact（β-ionone、myrtenol、β-damascenone は初報告）
- 試料条件：主要組成は 1,8-cineole＞terpinyl acetate＞borneol 等で、(a) とは化学型が全く異なる

**[査読原著・補助扱い]** 日本調理科学会誌（J-STAGE、42巻3号153頁〜）"Difference in the aroma components among fresh, natural-dried and cold-stored thyme"：GC-O で乾燥タイムでは α-pinene、linalool、borneol が特徴的。DOI 未確認のため格上げ根拠には使わない

### 主張できる／できない範囲
- (a) はチモール型での thymol／carvacrol、(b) はシネオール型での別化合物群の寄与であり、「タイム一般にチモールが寄与」とは言えない。6ケモタイプ全てをカバーする研究は未発見

### アプリへ反映する場合の形
- 格上げ可：タイム（チモール型）×thymol、×carvacrol（(a)）；タイム（シネオール型試料）×1,8-cineole、×borneol、×terpinyl acetate、×β-damascenone（(b)）。**必ずケモタイプ／試料条件を併記**
- 格上げ不可：ケモタイプ無指定の「タイム×チモール」

## 1-8. ローズマリー（*Salvia rosmarinus* Spenn.／*Rosmarinus officinalis*）

**[査読原著]** Raffo, A. et al. (2026) "Odor-Active Compounds in Rosemary (*Salvia rosmarinus* Spenn.) Essential Oils From Genotypes of Different Geographical Origin" *Journal of Food Science* 91(1):e70786. DOI: 10.1111/1750-3841.70786／PMID: 41511009
- 手法：異なる地理的起源の6遺伝子型の精油について、定量的記述分析＋GC-O（AEDA の FD 因子）＋GC-MS 定量による OAV。GC-O で32の香気活性化合物を検出（28同定）
- **寄与（FD と OAV の両方で一貫して最大の影響）**：**1,8-cineole、α-pinene、1-hexen-3-one、β-damascenone、1-octen-3-one、linalool、fenchol**。うち 1-hexen-3-one と β-damascenone はローズマリー油で初報告、1-octen-3-one と fenchol は従来微量検出のみ（低濃度で高寄与の例）
- 範囲：精油試料における FD／OAV ベースの寄与。再構成・欠落試験はなく「これらだけで再現できる」とは言えない。3ケモタイプ分類に沿った設計ではない（遺伝子型比較）

### アプリへ反映する場合の形
- 格上げ可：×上記7化合物（GC-O/AEDA＋OAV。精油・6遺伝子型と条件併記）
- 格上げ不可：camphor、verbenone 等（本研究の上位寄与に入っていない）

## 1-9. バジル（*Ocimum basilicum* L.、スイートバジル）

**[査読原著]** Sonmezdag, A.S., Amanpour, A., Kelebek, H., Selli, S. (2018) "The most aroma-active compounds in shade-dried aerial parts of basil obtained from Iran and Turkey" *Industrial Crops and Products* 124:692–698. DOI: 10.1016/j.indcrop.2018.08.053
- 手法：イラン産・トルコ産の陰干し地上部、パージ＆トラップ抽出、GC-O＋AEDA＋OAV（バジルへの AEDA 適用は初と著者らが明記）。aroma-active 18種を検出
- **寄与**：**linalool（FD 2048、両試料で最大）**、**methyl chavicol＝estragole（FD 1024）**。次いでイラン産では **1,8-cineole（FD 512）**、トルコ産では **limonene（FD 256）**
- 試料条件：両試料とも組成主成分は methyl chavicol（メチルチャビコール型）。生葉ではなく乾燥地上部
- 主張できない範囲：linalool 型／eugenol 型など他化学型の生葉バジルへの一般化。eugenol は本研究の上位寄与に確認できない

### アプリへ反映する場合の形
- 格上げ可：バジル（乾燥、メチルチャビコール型試料）×linalool、×methyl chavicol（estragole）；条件付きで ×1,8-cineole、×limonene
- 格上げ不可：×eugenol（組成研究のみ）

## 1-10. オレガノ（*Origanum vulgare* L.）

**[査読原著]** Sádecká, J., Polovka, M. (2008) "Multiexperimental study of γ-radiation impact on oregano (*Origanum vulgare* L.)" *Journal of Food and Nutrition Research* 47(2):85–91（出版社 PDF で全文確認。DOI のない旧誌論文）
- 手法：乾燥オレガノ葉（トルコ・イズミル産、市販品）の SDE 抽出油について GC-O＋AEDA（訓練パネル5名）。本来の目的はγ線照射の影響評価だが、**非照射対照（0 kGy）の FD 表がそのまま寄与データ**になる
- **寄与（非照射試料、FD 因子）**：FD 10,000（最大群）＝ **1-octen-3-ol、linalool、carvacrol、β-damascenone**（および暫定同定の 2,4-dimethylanisole）。FD 2,000＝ guaiacol。FD 1,000群＝ cis-3-hexenal、p-cymene、eucalyptol、(Z)/(E)-β-ocimene、(E)-2-nonenal、borneol、eugenol 等（全37 odorants）
- **重要な食い違い**：組成上の主要フェノールである **thymol は本研究の potent odorants 表に現れない**。序文の通説的記述（「チモールとカルバクロールが味・香りに最も影響」）と実測 AEDA が乖離しており、実測優先でこの乖離ごと記録する
- 範囲：当該トルコ産乾燥葉試料の AEDA 結果。亜種・ケモタイプへの一般化、再構成レベルの証明はなし

### アプリへ反映する場合の形
- 格上げ可：×carvacrol、×linalool、×1-octen-3-ol、×β-damascenone（FD 10,000）。単一研究・単一試料のため弱めと注記推奨。×guaiacol は FD 2,000 として寄与候補（タスク4の収録判定と相互補強）
- 格上げ不可：×thymol（本 AEDA では寄与上位に実証されず。組成根拠のみ）、×2,4-dimethylanisole（暫定同定）

## 1-11. セージ（*Salvia officinalis* L.）— 9素材（本節分）で最も強い証拠群

**[査読原著 (a)]** Jonas, M., Schieberle, P. (2021) "Characterization of the Key Aroma Compounds in Fresh Leaves of Garden Sage by Means of the Sensomics Approach…" *J Agric Food Chem* 69(17):5113–5124. DOI: 10.1021/acs.jafc.1c01275／PMID: 33881309
- 手法：センソミクス（AEDA → 安定同位体希釈定量 → OAV → **再構成**）。生葉で39の香気活性化合物
- **寄与**：最高 FD 群＝ **(Z)-3-hexenal、1,8-cineole、borneol、eugenol**；最高 OAV 群＝ **myrcene、(Z)-3-hexenal、(1S,2R,4S)-borneol、1,8-cineole**。**22化合物の混合物が生葉の香り全体を再現（mimic）した**
- 加工知見：乾燥（50℃）で (Z)-3-hexenal 等はほぼ消失し、モノテルペン類はほぼ不変（タスク2関連の傍証）

**[査読原著 (b)]** Chiang, N. et al. (2024) "Characterization of Odorants in a Commercial Culinary Sage and Several Cultivars" *J Agric Food Chem* 72(14):8081–8091. DOI: 10.1021/acs.jafc.3c09326
- 手法：市販乾燥セージに SAFE＋AEDA（35 odorants、9は初報告）、SIDA 定量＋OAV、**アロマシミュレーションモデル**が原品プロファイルに近似。6品種の官能プロファイルと OAV の相関も解析
- **寄与（高 OAV）**：**(2E,6Z)-nona-2,6-dienal、1,8-cineole、β-myrcene**。品種の香気特性の強さは α/β-thujone、1,8-cineole、α-pinene、(2E,6Z)-nona-2,6-dienal の OAV と**相関**（相関であり欠落試験ではない点は区別する）

### アプリへ反映する場合の形
- 格上げ可（強）：セージ（生葉）×1,8-cineole、×borneol、×(Z)-3-hexenal、×myrcene、×eugenol（再構成で検証されたセットの一員として）。セージ（乾燥）×(2E,6Z)-nona-2,6-dienal、×1,8-cineole、×β-myrcene
- 注意：thujone 類は (b) では相関レベルのため「寄与」ではなく「品種香気との相関」として別ランクが適切

## 1-12. ペパーミント（*Mentha* × *piperita*）

**[査読原著 (a)]** Gabetti, E. et al. (2021) "Chemical fingerprinting strategies based on GC×GC combined with GC-olfactometry to capture the unique signature of Piemonte peppermint essential oil (*Mentha* × *piperita* var. Italo-Mitcham)" *J Chromatogr A* 1645:462101. DOI: 10.1016/j.chroma.2021.462101／PMID: 33848659
- 手法：GC-O＋AEDA で potent odorants を検出し GC×GC-TOFMS で追跡（同定は tentative と明記）
- **寄与（最高 FD）**：**1,8-cineole、menthone、menthofuran**。クリーミー／クマリン様ノートは**メントフロラクトン類**（(3,6)-dimethyl-…-2(3H)-one のジアステレオマー）によるとされた

**[査読原著 (b)]** Shigeto, A., Wada, A., Kumazawa, K. (2020) "Identification of the novel odor active compounds '*p*-menthane lactones' responsible for the characteristic aroma of fresh peppermint leaf" *Biosci Biotechnol Biochem* 84(2):421–427. DOI: 10.1080/09168451.2019.1687283／PMID: 31679471
- 手法：生葉（ペパーミント vs スペアミント）の比較 AEDA（cAEDA）、FD≥64 が20ピーク
- **寄与**：ペパーミント特徴香（スイート／ミルキー、キャラメル様／スパイシー、高 FD）は ***p*-menthane lactone 誘導体5種**によるとされ、うち rel-(3S,3aS,6R,7aS)-dihydromintlactone、(3S,3aS,6R)-epoxymenthofurolactone、2E-ethylidene-5-methylcyclohexanone は新規同定

**Schmidt et al. (2009) の位置づけ（第1ラウンド深掘り結果）** [査読原著] *Nat Prod Commun* 4(8):1107–1112. DOI: 10.1177/1934578X0900400819／PMID: 19768994。要旨で確認できるのは GC/FID・GC-MS による組成（menthol 40.7%、menthone 23.4% ほか）と抗酸化評価であり、"olfactory evaluation" は**精油そのものの香り評価**であって化合物別の GC-O/AEDA ではない。本論文からは特定化合物の寄与は主張できない

**注意すべき空白**：menthol は組成主成分だが、(a)(b) の要旨範囲では最高 FD 群に**入っていない**。「ペパーミント×menthol＝寄与」は今回の査読証拠では裏付け不足

### アプリへ反映する場合の形
- 格上げ可：ペパーミント（精油）×1,8-cineole、×menthone、×menthofuran（(a)、同定 tentative の注記付き）；ペパーミント（生葉）×p-メンタンラクトン類（(b)）
- 格上げ不可：ペパーミント×menthol（要追加証拠）、Schmidt 2009 を根拠とする全リンク

## 1-13. スターアニス（*Illicium verum* Hook. f.）

**[査読原著]** Zhang, W., Zhang, Y., Yuan, X., Sun, E. (2015) "Determination of Volatile Compounds of *Illicium verum* Hook. f. Using SDE and SPME Coupled with GC-MS" *Tropical Journal of Pharmaceutical Research* 14(10):1879–1884. DOI: 10.4314/tjpr.v14i10.20（出版社 AJOL ページで書誌・要旨確認）
- 手法：SDE 抽出物の GC-MS 同定（47化合物）＋GC-O／AEDA による FD 値＋SPME による標準品での官能検証
- **寄与**：FD 値の観点で特徴香として結論されたのは **trans-anethole、linalool、limonene**。GC-MS/O 側で主アロマ成分として挙げられた trans-anethole、estragole、anisaldehyde は「主成分」の表現であり、FD 順位付けとは区別する
- 参考数値（組成であり寄与ではない）：trans-anethole 75.76%、linalool 1.44%、limonene 1.01%（要旨記載値）

### アプリへ反映する場合の形
- 格上げ可：×trans-anethole、×linalool、×limonene（FD 根拠）
- 弱めに留める：estragole、anisaldehyde（「主アロマ成分」との記述のみで FD 順位の裏付けが要旨範囲で弱い）

## 1-14. カルダモン（*Elettaria cardamomum*、グリーンカルダモン）— 素材単独の寄与研究は未発見

- **査読原著による素材単独の GC-O/AEDA/OAV 研究は調査範囲では未発見**（拡大範囲含む再探索済み。検索："Elettaria cardamomum" OAV／GC-olfactometry／flavour dilution／thesis／coffee GC-O 等）

### 拡大範囲・間接証拠（すべて参考情報／格上げ根拠にしない）
- [査読原著だが**間接**] Ayseli, M.T., Coskun, I. (2024) "Analyzing aroma-active compounds of traditional herbal coffee (Mırra) using HS-SPME combined with GC-MS/O" *Microchemical Journal* 205:111226. DOI: 10.1016/j.microc.2024.111226。カルダモン種子を加えて煮出すミルラ（コーヒー飲料）で14の aroma-active 化合物を検出し、キー化合物は **α-terpinyl acetate、α-terpinyl formate、1,8-cineole**（＋コーヒー由来 furfuryl alcohol）。前3者はカルダモン由来と整合するが、対象は飲料マトリックスであり**カルダモン単独の寄与とは同一視できない**
- [査読原著・官能のみ] Senthil, A., Bhat, K.K. (2011) *Journal of Sensory Studies* 26:48–53：カルダモンオレオレジン全体の検知閾値（3-AFC、19名：水 4.04 ppb、2.5%糖液 4.48 ppb、乳 13.97 ppb）。化合物別の寄与は扱っていない
- [査読書籍章・総説級] Galal & Morsy (2023) in *Cardamom (Elettaria cardamomum): Production, Processing and Properties* (Springer), DOI: 10.1007/978-3-031-35426-7_18：Salzer (1975) を引いて「果実様の香りは α-terpinyl acetate／linalyl acetate／linalool、樟脳様は 1,8-cineole。1,8-cineole、α-terpinyl acetate、テルペンアルコール類がフレーバー品質評価に決定的」とする。一次実測ではない
- [メーカー技術情報] PerfumersWorld のカルダモン精油ページ：精油全体の Relative Odor Impact 300 等。化合物別寄与の実測ではない
- [**不採用の Web 情報（食い違いの記録）**] Alibaba Product Insights のカルダモン特集記事群は「limonene 25–38% が柑橘ノートの主因」「α-terpinyl acetate 12–22%」等の数表を出典風に提示するが、査読組成研究（シネオール／α-terpinyl acetate 主体、limonene は minor）と**食い違い**、一次レコードで検証できないため不採用。論文優先の原則により記録のみ残す

### アプリへ反映する場合の形
- 格上げ不可（全化合物）：×1,8-cineole、×α-terpinyl acetate 等は現時点では組成＋総説＋間接飲料証拠まで。反映するなら「寄与候補（未検証）」ラベルに留め、Mırra 研究を「飲料中での間接証拠」として出典種別付きで併記するのが上限

## 1-15. メース（*Myristica fragrans*、仮種皮）— 未発見
（§1-6 に記載のとおり。寄与研究は拡大範囲でも未発見。専門メディアの組成・印象記述のみ）

## タスク1 総括表（格上げ判定）

| 素材 | contribution 格上げ可（査読原著） | 保留／不可 |
|---|---|---|
| ブラックペッパー | α/β-pinene, myrcene, α-phellandrene, limonene, linalool, methylpropanal, 2-/3-methylbutanal, butyric acid, 3-methylbutyric acid（欠落試験）；rotundone（OAV／GC-MS-O） | β-caryophyllene 等は組成止まり |
| クミン | **なし（保留）**。Ravi 2013 は GC-O 併用だが化合物別指標が要旨で未検証 | cuminaldehyde を含む主要成分すべて保留 |
| コリアンダーシード | linalool, carvacrol, camphor（GC-O強度）；γ-terpinene（特徴成分） | geraniol 等は組成止まり；葉の aldehydes は転用禁止 |
| フェンネルシード | trans-anethole, fenchone（AEDA+OAV+官能）；anisaldehyde, trans-4,5-epoxy-(E)-2-decenal, 1,8-cineole, (R)-α-pinene, β-myrcene（AEDA/OAV）；1-octen-3-ol（GC-O） | estragole は「茶で impact なし」注記必須の条件付き |
| クローブ | eugenol のみ（OAV+FD、牛肉マトリックス文脈） | β-caryophyllene, eugenyl acetate, vanillin 等は組成止まり（総説帰属は参考情報） |
| ナツメッグ（種子） | sabinene, α-pinene（GC-O+OAV）、β-pinene（GC-O） | myristicin 等（組成のみ） |
| メース | ― | 全部（寄与研究未発見） |
| タイム | thymol, carvacrol（チモール型、GC-O）；1,8-cineole, borneol, terpinyl acetate, β-damascenone（シネオール型、GC-O）※ケモタイプ併記必須 | ケモタイプ無指定の一般化 |
| ローズマリー | 1,8-cineole, α-pinene, linalool, fenchol, 1-hexen-3-one, 1-octen-3-one, β-damascenone（AEDA+OAV） | camphor 等 |
| バジル | linalool, methyl chavicol（AEDA、乾燥・メチルチャビコール型） | eugenol |
| オレガノ | carvacrol, linalool, 1-octen-3-ol, β-damascenone（AEDA、単一試料） | thymol（AEDA実測で上位に現れず） |
| セージ | 1,8-cineole, borneol, myrcene, (Z)-3-hexenal, eugenol（生葉、再構成検証）；(2E,6Z)-nona-2,6-dienal 等（乾燥、シミュレーション検証） | thujone 類は相関レベル |
| ペパーミント | 1,8-cineole, menthone, menthofuran（AEDA、精油）；p-メンタンラクトン類（cAEDA、生葉） | **menthol（主成分だが寄与実証は今回未確認）**、Schmidt 2009 根拠 |
| スターアニス | trans-anethole, linalool, limonene（AEDA/FD） | estragole, anisaldehyde は弱め |
| カルダモン | ― | 全部（単独寄与研究未発見。間接・総説・メーカー情報のみ＝参考情報） |

**次に全文確認が必要な2件（優先順）**：(1) Ravi et al. 2013（クミン）— GC-O の化合物別結果表があればクミンの格上げ判定が変わる唯一の査読原著。(2) Yu et al. 2025（クローブ）— aroma-active 21成分／endowment 9成分の個別名表。

---

# タスク2. 加工・加熱による成分／香りの変化

アプリのシミュレーション（焙煎温度・時間の定性的傾向）に使える知見を、適用範囲と限界とともに記録する。数値モデル化できる系列データが揃った素材はなかった（全素材とも定性的傾向どまり）。

## 2-1. クミン

**[査読原著]** Behera S, Nagarajan S, Rao LJM. "Microwave heating and conventional roasting of cumin seeds (*Cuminum cyminum* L.) and effect on chemical composition of volatiles." *Food Chemistry* 2004;87(1):25–29. DOI: 10.1016/j.foodchem.2003.10.012（書誌は公的機関 NIST WebBook の引用レコードで確認）
- 従来焙煎 vs マイクロ波加熱、蒸留油を GC／GC-MS。マイクロ波加熱試料の方が特徴香気成分（アルデヒド類）の保持が良い（この点は査読総説による二次引用で確認。要旨原文での数値確認は取れていないため数値は採用しない）

**[査読原著]** Abd El-Mageed MA. "Effect of microwave heating and conventional roasting on volatile compounds in oregano leaves, coriander and cumin seeds." *Journal of Soil Sciences and Agricultural Engineering* (Mansoura Univ.) 2007;32(2):1521–1535. DOI: 10.21608/jssae.2007.201001
- 従来焙煎／マイクロ波、水蒸気蒸留油 GC／GC-MS。クミン16成分同定
- 知見（要旨値）：加熱全般で精油濃度は原料より低下し、脂質分解生成物 hexanal・(E)-2-hexenal が生成（マイクロ波の方がその割合は小さい）。クミンのモノテルペンアルデヒド類合計はマイクロ波 35.68% vs 従来焙煎 34.17%。マイクロ波では γ-terpinene、p-cymene、β-pinene が従来焙煎より低下
- 限界：要旨に焙煎温度・時間の記載なし → 定量モデル化不可

**[査読原著・補足]** "Study on Volatile Organic Compounds and Antioxidant Polyphenols in Cumin Produced in Xinjiang." *Int J Mol Sci* 2025;26(6):2628. DOI: 10.3390/ijms26062628
- 70℃加熱処理で3産地共通 VOC 数が36→19（−47.22%）。ただし70℃は焙煎域ではなく低温加熱。傾向の傍証に留める

- 主張できる範囲：加熱で精油量は減る／脂質分解系アルデヒドが新たに生じる／加熱方式でアルデヒド保持が変わる。できない範囲：特定の焙煎温度・時間での cuminaldehyde 量の数値予測（温度条件付き系列データは未確認）
- **アプリへ反映する場合の形**：シミュレーション傾向として追加可。骨子「加熱が進むほど総揮発分は低下し、青臭い脂質分解ノート（hexanal 等）が増える。短時間加熱の方がアルデヒド系の特徴香は残りやすい」。素材×化合物リンク：加熱による hexanal／(E)-2-hexenal の「生成（検出）」リンク追加は可。寄与格上げは不可（寄与研究ではない）

## 2-2. コリアンダー（種子）

**[査読原著]** Abd El-Mageed 2007（§2-1 と同一論文、DOI: 10.21608/jssae.2007.201001）
- 種子、従来焙煎／マイクロ波、17成分同定
- 知見（要旨値）：linalool 割合はマイクロ波加熱 57.26% vs 従来焙煎 55.53%（焙煎の方が linalool の相対保持がやや低い）。加熱全般で精油濃度低下＋hexanal／(E)-2-hexenal 生成はクミンと共通
- 限界：温度・時間条件は要旨未記載。乾熱焙煎単独の温度系列原著は調査範囲では未発見

- 主張できる範囲：「乾熱焙煎はマイクロ波加熱より linalool 保持でやや不利」という方式間比較のみ。できない範囲：温度依存の定量傾向
- **アプリへ反映する場合の形**：傾向文の追加は弱い形でのみ可。骨子「強く乾熱するほど linalool 主体の華やかさは痩せ、脂質分解系の青・脂肪ノートが相対的に出る」。ドメインは方式間比較に限定し、温度スライダーの根拠には使わない

## 2-3. ブラックペッパー

**[査読原著・中核]** Zhang JG, Wu HX, Zhang A, Thakur K, Hu F, Wei ZJ. "Varietal-dependent flavor dynamics in *Piper nigrum* L. under thermal processing." *Food Research International* 2025;221(Pt 3):117482. DOI: 10.1016/j.foodres.2025.117482／PMID: 41214978
- 4品種（White/Black Dapo、White/Black Kampot）×焙煎・煮沸、GC-MS、ピペリン定量、官能、VIP/OAV
- 知見（要旨）：黒コショウは高温焙煎（140–160℃）に適しピペリン保持が良い。白コショウは低温焙煎（100–140℃）で品質良好。煮沸30分がピペリン・グルタミン酸・テルペノイド／ケトン／β-カリオフィレンの放出に最適。品種差のキー化合物は β-カリオフィレン、酢酸、ノナナール

**[査読原著]** Baky MH, Kamal IM, Wessjohann LA, Farag MA. "Assessment of metabolome diversity in black and white pepper in response to autoclaving…" *RSC Advances* 2024;14:10799–10813. DOI: 10.1039/D4RA00100A／PMID: 38572341（第1ラウンド出典3と同一研究）
- HS-SPME-GC-MS で52揮発成分、β-カリオフィレンが黒82%・白59%（揮発分中の相対比）。オートクレーブ（湿熱）で酸素含有化合物の割合が増え「香りの改善」と著者らが解釈。ピペリンは黒20.2／白23.9 µg/mg（NMR 定量、未加熱試料）

**[査読原著・湿熱]** Suresh D, Manjunatha H, Srinivasan K. "Effect of heat processing of spices on the concentrations of their bioactive principles." *J Food Comp Anal* 2007;20(3–4):346–351. DOI: 10.1016/j.jfca.2006.10.002
- ピペリン損失は煮沸10／20分・圧力調理10分で16–34%（圧力調理が最大）。※乾熱ではなく湿熱の数値である点に注意

- 主張できる範囲：焙煎適温域の品種差（黒140–160℃／白100–140℃）。できない範囲：乾熱焙煎でのピペリン損失率（湿熱データの転用不可）
- **アプリへ反映する場合の形**：シミュレーション傾向として追加可（本タスクで最も条件が揃う素材）。骨子「黒コショウは140–160℃域でもピペリンを保ちやすい。白コショウはそれより低温域が適する。湿熱長時間ではピペリンは明確に減る」。リンク：β-カリオフィレンは組成主成分として既存リンクの裏付け可。寄与は Zhang 2025 の OAV 解析範囲（品種・処理差の寄与）でのみ可

## 2-4. スターアニス — 「乾式焙煎」原著は未発見、「乾燥」で代替記録

※乾式焙煎（炒る）単独を扱った査読原著は調査範囲では**未発見**（検索：`star anise roasting volatile anethole`、`Illicium verum roasting/drying volatile oil` 等）。代わりに乾燥加熱（乾燥法比較）の原著が複数確認できたので、それに限定して記録する。

**[査読原著]** Shi Y, Chen G, Chen K, Chen X, Hong Q, Kan J. "Assessment of fresh star anise (*Illicium verum* Hook.f.) drying methods…" *Food Chemistry* 2021;342:128359. DOI: 10.1016/j.foodchem.2020.128359
- 熱風／ヒートポンプ（HPD）／遠赤外／マイクロ波／天日、±ブランチング。揮発油量、油中 trans-anethole、GC-MS
- 知見（要旨値）：HPD が揮発油量（12.27% d.b.）・油中 trans-anethole（113.30 mg/g d.b.）で最良。HPD で trans-anethole 4165.46 mg/100g d.b.、estragole 176.50、linalool 280.69、(+)-limonene 471.18 mg/100g d.b.

**[査読原著]** Wen YX et al. "Effect of infrared radiation-hot air (IR-HA) drying on kinetics and quality changes of star anise (*Illicium verum*)." *Drying Technology* 2021;39. DOI: 10.1080/07373937.2019.1696816（Ghent 大学書誌レコードで確認）
- IR-HA 60／70／80℃比較で、揮発油保持（8.86%）と trans-anethole 含量は70℃が最高。香りの豊かさ等は揮発油量・trans-anethole 等と有意相関

**[査読原著]** Kuang X et al. "Impact of Drying-Induced Structural Modifications on Flavor Release of Star Anise During Boiling." *Foods* 2025;14(10):1802. DOI: 10.3390/foods14101802
- 乾燥法で煮沸後の香気放出が変わる。煮沸後26成分同定、主は trans-anethole と anisaldehyde。HPD が煮沸後の揮発油・trans-anethole 保持で最良

- 主張できる範囲：乾燥法・乾燥温度（60–80℃域）による保持差のみ。できない範囲：焙煎（100℃超の乾熱）での anethole 挙動。一般論「高温でアネトールが減る」は今回査読原著で未確認なので採用しない
- **アプリへ反映する場合の形**：シミュレーションは「乾燥」軸としてのみ追加可。骨子「乾燥は低温〜中温の穏やかな方式ほど揮発油と trans-anethole を保つ。IR-HA では70℃付近が保持のピーク」。焙煎スライダーへの流用は不可と明記すべきドメイン外

## 2-5. 唐辛子（加熱・焙煎）

**[査読原著]** "The effect of roasting on capsaicinoids, volatile compounds, and fatty acids in *Capsicum annuum* L. (red pepper) seeds." *Food Science and Biotechnology* 2022. DOI: 10.1007/s10068-021-01023-6（PMC: PMC8817957。著者名は要旨表示で未取得のため記載しない）
- 試料・条件：赤唐辛子「種子」、焙煎温度系列
- 知見（要旨）：温度上昇とともに capsaicin・dihydrocapsaicin は減少。100℃焙煎で 3-ethyl-2,5-dimethylpyrazine、2,3,5,6-tetramethylpyrazine、2-methoxy-3-(2-methylpropyl)pyrazine、1-methylpyrrole、2-acetylfuran 等が新規検出。ピラジン類等の濃度は温度とともに急増し、ロースト／グリル／甘いノートに寄与しうるとされる。脂肪酸（リノール酸主体）は温度で有意差なし。注意：試料は果実全体ではなく**種子**

**[査読原著]** Zhang RY, Liu HM, Ma YX, Wang XD. "Effects of roasting on composition of chili seed and storage stability of chili seed oil." *Food Science and Biotechnology* 2019. DOI: 10.1007/s10068-019-00578-9／PMID: 31695946
- 条件（本文確認）：種子を120／160／200℃焙煎、160℃で10–40分の時間系列もあり
- 知見：焙煎でアミノ酸総量が15.9→7.4%に減少（メイラード進行の傍証）。置換ピラジン類（2,5-dimethyl-、2,3,5-trimethyl-、tetramethyl- 等）がロースト／ナッツ様香のキーとして同定。未焙煎種子は淡い香り、焙煎後はカラメル様・ナッツ様

**[査読原著]** "Effects of Thermal Treatments on the Physicochemical and Flavor Profiles of Chili Powders and Their Derived Chili Oils." *Foods* 2025;14(17):3129. DOI: 10.3390/foods14173129
- 唐辛子粉（二荊条、*C. annuum*）。炒め／オーブン／電子レンジの熱前処理
- 知見（要旨）：熱処理で揮発成分総量が増加。アルデヒド類、2-furanmethanol、メイラード生成物（ethyl pyrazine、2,3-dimethylpyrazine、2-ethyl-6-methylpyrazine）が熱処理区で有意に増強。オーブン区の増加が最大

**[査読原著・湿熱]** Suresh et al. 2007（§2-3 と同一）：カプサイシン損失は煮沸・圧力調理で18–36%（要旨値、湿熱）

- 主張できる範囲：種子・粉体系では「温度↑→カプサイシノイド↓、ピラジン等のメイラード香↑」を定性的に主張可。できない範囲：果皮・果実全体への一般化
- **アプリへ反映する場合の形**：シミュレーション傾向として追加可。骨子「焙煎温度が上がるほど辛味成分は減り、ピラジン類によるロースト／ナッツ香が立ち上がる（種子・粉での実測に基づく）」。適用ドメイン＝種子・粉体、限界＝生果・果皮主体の利用には未検証と注記。リンク：ピラジン類の「加熱生成（検出）」リンク可。寄与は Zhang 2019 のキー化合物同定の範囲まで

---

# タスク3. 積み残しの解消試行

## 3-1. 山椒（*Zanthoxylum piperitum*）の揮発性香気成分 — **解消（査読原著あり）**

**[査読原著・寄与研究]** Jiang L, Kubota K. "Differences in the volatile components and their odor characteristics of green and ripe fruits and dried pericarp of Japanese pepper (*Xanthoxylum piperitum* DC.)." *J Agric Food Chem* 2004;52(13):4197–4203. DOI: 10.1021/jf030663a／PMID: 15212469
- 手法：メタノール抽出＋Porapak Q 吸着、GC-MS 同定＋GC-sniffing／AEDA（FD factor）
- 知見（要旨）：**geraniol、citronellal、linalool、methyl cinnamate が3試料（青果・完熟果・乾燥果皮）共通の基本香に重要（寄与）**。青果ではモノテルペン炭化水素が精油の約76%を占め、d-limonene・β-phellandrene・myrcene が高 FD でグリーン／松葉ノートを担う。完熟果では含酸素テルペンが優勢で、geranial＋citronellal が精油の約20%（柑橘様ノート）。乾燥果皮では含酸素／炭化水素比がほぼ等しく香りはマイルド化
- → 第1ラウンドで未確認だった「limonene、citronellal 等」は組成・寄与の両面で原著確認が取れた

**[査読原著・組成]** Yamasaki K et al. "Classification of Japanese Pepper (*Zanthoxylum piperitum* DC.) from Different Growing Regions Based on Analysis of Volatile Compounds and Sensory Evaluation." *Molecules* 2022;27(15):4946. DOI: 10.3390/molecules27154946（PMC: PMC9370631）
- 市販粉山椒10製品（産地・系統別）、GC／GC-MS＋官能（ナッピング）
- 主要揮発成分として limonene、β-phellandrene、citronellal、geranyl acetate を検出（組成）。組成は産地で異なりクラスター5群、官能4群と概ね一致

**[査読原著・国内誌]** 飯島（関和）陽子、諸井千春、萩原修、久保田紀久枝. ヘッドスペースガス分析法を用いた産地別山椒果実の香気分析. 日本食品科学工学会誌 2002;49(5):320–326（J-STAGE レコードで確認。DOI は今回未確認のため付さない）
- ダイナミックヘッドスペース GC-MS で38成分同定。国産は d-limonene、β-phellandrene、β-myrcene、citronellal、geranyl acetate が主成分（組成）。韓国産は limonene・citronellal が多く、中国産では citronellal・geranyl acetate が検出されず（産地差）。linalool・geraniol・geranyl acetate は完熟果にのみ主に検出され成熟期生成が示唆

- 主張できる範囲：山椒果実・果皮の主要揮発成分（組成）と citronellal 等の寄与（Jiang & Kubota の AEDA 範囲）。できない範囲：葉（木の芽）の香りを果実データで代替すること（別部位）
- **アプリへ反映する場合の形**：リンクに limonene／β-phellandrene／myrcene／citronellal／geranyl acetate／geraniol を「検出（組成）」で追加可。citronellal、geraniol、linalool、methyl cinnamate は Jiang & Kubota に基づき「寄与」格上げ可（対象は果実・乾燥果皮と明記）。成熟段階による傾向（青果＝炭化水素主体でシャープ、完熟＝含酸素テルペン増で柑橘様、乾燥果皮＝マイルド化）もシミュレーション的注記として追加可

## 3-2. 唐辛子（*Capsicum* spp.）の品種・種別研究 — **解消（査読原著複数）**

**[査読原著]** Wahyuni Y et al. "Metabolomics and molecular marker analysis to explore pepper (*Capsicum* sp.) biodiversity." *Metabolomics* 2013;9(1):130–144. DOI: 10.1007/s11306-012-0432-6／PMID: 23335867
- 32アクセッション（*C. annuum／chinense／frutescens／baccatum*）、完熟果果皮、LC-MS＋ヘッドスペース GC-MS
- 半極性代謝物は種でクラスタリングし、capsianoside 類は *C. annuum* 全遺伝子型で高含量。揮発成分の変異は辛味の差とよく対応し、分岐脂肪酸エステル類が辛い試料に多い

**[査読原著・寄与含む]** Kollmannsberger H, Rodríguez-Burruezo A, Nitz S, Nuez F. "Volatile and capsaicinoid composition of ají (*Capsicum baccatum*) and rocoto (*Capsicum pubescens*), two Andean species of chile peppers." *J Sci Food Agric* 2011;91(9):1598–1611. DOI: 10.1002/jsfa.4354／PMID: 21445890
- HS-SPME、GC/MS、GC-MS/オルファクトメトリー、Scoville 併用
- 知見（要旨値）：総カプサイシノイドはアヒ・ロコト 13–352 mg/kg vs 対照 *C. chinense* 1605 mg/kg。揮発成分200超を検出し、パターンはアクセッション間で明瞭に異なる。*C. chinense* の強いフルーティ香は ethyl 4-methylpentanoate 等のエステル、β-ionone、ectocarpene による。*C. pubescens* の香りは置換 2-methoxypyrazine 類とリポキシゲナーゼ開裂生成物（2-nonenal 類、2,6-nonadienal）が主体でキュウリ様ノート。*C. baccatum* は 2-heptanethiol、3-isobutyl-2-methoxypyrazine、グアイアコール等のフェノール類、α-pinene／1,8-cineole／linalool が基盤

**[査読原著・品種内比較]** Pino J et al. "Characterization of total capsaicinoids, colour and volatile compounds of Habanero chilli pepper (*Capsicum chinense* Jack.) cultivars grown in Yucatan." *Food Chemistry* 2007;104(4):1682–1686. DOI: 10.1016/j.foodchem.2006.12.067
- ハバネロ10品種（赤4・橙5・茶1）。総カプサイシノイド 41.8–65.9 mg/g 乾燥果実。平均は橙色品種55.0 vs 赤色品種45.0 mg/g で橙がより辛い。橙・茶色品種はフルーティなエステル類と総揮発分が赤色品種より概して多い

**[査読原著]** Taiti C et al. "Correlation Between Volatile Compounds and Spiciness in Domesticated and Wild Fresh Chili Peppers." *Food and Bioprocess Technology* 2019. DOI: 10.1007/s11947-019-02297-9
- 4種21品種、PTR-TOF-MS＋HPLC。*C. chinense* が最高のカプサイシノイド水準（>1000 mg/kg DW）、ハバネロ系は常に100,000 SHU超。*C. chinense* では capsaicin が総カプサイシノイドの83%。VOC からカプサイシン量を推定する PLSR はテストセットで r=0.84

- 主張できる範囲：種レベルの差（chinense＝高辛味＋エステル系フルーティ、baccatum/pubescens＝より土・野菜様で低辛味）とハバネロ品種内の色系統差。できない範囲：個別の市販品種名への外挿、SHU の一般値化（栽培条件依存）
- **アプリへ反映する場合の形**：唐辛子を単一素材から種レベル（annuum／chinense／baccatum／pubescens／frutescens）で分ける根拠として使用可。リンク：*C. chinense*×エステル類（ethyl 4-methylpentanoate 等）は Kollmannsberger に基づき寄与格上げ可。*C. pubescens*×2-methoxypyrazine 類も寄与として可。その他は組成リンクに留める

## 3-3. 緑花椒（*Zanthoxylum schinifolium*）— **解消（Z. bungeanum からの転用ではない原著あり）**

**[査読原著・中核]** Yang X. "Aroma constituents and alkylamides of red and green huajiao (*Zanthoxylum bungeanum* and *Zanthoxylum schinifolium*)." *J Agric Food Chem* 2008;56(5):1689–1696. DOI: 10.1021/jf0728101／PMID: 18271544
- 新鮮果実の精油を GC-MS、寄与指標として ACI（aroma character impact value、濃度／閾値比の百分率）を導入。各200超のうち120成分を報告
- 知見（要旨値）：緑花椒の主要成分は linalool 29%、limonene 14%、sabinene 13%（赤花椒は linalyl acetate 15%、linalool 13%、limonene 12%）。寄与上位は両種共通で linalool、α-terpineol、myrcene、1,8-cineole、limonene、geraniol の6成分。しびれ主成分は hydroxy-α-sanshool で、水／UV で分解しやすい

**[査読原著・産地差]** Gao L, Shi B, Zhao L, Wang H, Xiang Y, Zhong K. "Aroma Characteristics of Green Huajiao in Sichuan and Chongqing Area Using Sensory Analysis Combined with GC-MS." *Foods* 2024;13(6):836. DOI: 10.3390/foods13060836
- 四川・重慶の緑花椒7試料（同論文は緑花椒を *Z. schinifolium* と定義）。GC-MS＋OAV＋PLSR＋記述式官能
- 3群に分類。涼山群＝辛・花・ハーブ香が強く寄与成分は α-pinene、sabinene、β-pinene、myrcene、ocimene、linalool。攀枝花・洪雅群＝柑橘・レモン・ミント香が強く寄与は linalool。重慶群＝グリーン・ミント・甘香で主成分は ocimene、citronellal、α-terpineol

**[査読原著・加熱油での寄与]** Ni R, Yan H, Tian H, Zhan P, Zhang Y. "Characterization of key odorants in fried red and green huajiao oils." *Food Chemistry* 2022;377:131984. PMID: 34995962（DOI は今回未確認のため付さない）
- 赤2種・緑3種の花椒油（加熱抽出油）、QDA＋GC-O／アロマ強度、OAV、再構成・欠落試験
- 高 OAV・高強度の30 odorant を選定。β-myrcene、(E)-2-heptenal、limonene、α-terpineol、p-cymene が花椒油共通の主要特徴成分。linalool、linalyl acetate、1,8-cineole が赤／緑の判別マーカー。緑花椒油そのもののキー化合物の同定は本論文が初と著者らが述べる

**[査読原著・最新比較]** Ding C, Guo X, Liu Y et al. "Comparative Analysis of Volatile Fingerprints and Aroma-Active Compounds in Green and Red Sichuan Pepper Essential Oils Using GC-IMS and GC-O-MS." *Molecules* 2026;31(15):2644. DOI: 10.3390/molecules31152644／PMID: 42588493
- HS-GC-IMS で94シグナル、両油は明確に分離。緑（*Z. schinifolium*）油は isomenthone 等のミント・グリーン系に富み、赤は bornyl acetate 等のウッディ・エステル系。GC-O-MS の香気活性成分37中、両油とも linalool が最有力 odorant。27成分は共通、緑のみ4・赤のみ6成分

**食い違いの記録（査読同士）**：Lee HS. "Insecticidal Toxicities and Essential Oil Compositions of *Zanthoxylum piperitum* and *Zanthoxylum schinifolium* Fruits in Korea." *J Essent Oil Bearing Plants* 2016;19(8):2065–2071. DOI: 10.1080/0972060X.2016.1249415 では、韓国産 *Z. schinifolium* 果実精油の主成分は estragole 75.03% で、linalool は0.37%に過ぎない。Yang 2008（linalool 29%）と大きく食い違う。産地・部位・抽出法の差が候補だが原著同士の不一致として記録し、**緑花椒の「主成分」は単一値で表示せず産地系統で分ける**のが安全
- 注意：「緑花椒」名で *Z. armatum*（藤椒）を扱う原著も存在するが、これは別種であり本項目には混ぜていない

- 主張できる範囲：中国産（四川系）緑花椒については linalool 主体の組成と上記寄与成分を主張可。韓国産材料には当てはめられない
- **アプリへ反映する場合の形**：赤花椒とは別素材として緑花椒ページを立てる根拠が揃った。リンク：linalool／limonene／sabinene は組成＋（Yang の ACI、Gao の OAV 範囲で）寄与可。isomenthone は Ding 2026 で緑側の差別化成分として組成リンク可。産地バリエーション注記（韓国産型＝estragole 主体の報告あり）を併記すること

## タスク2・3 参考情報（拡大範囲。実測・寄与の根拠には使わない）

1. [学会要旨] 山崎ら「産地の異なる山椒の香気成分分析と官能評価」日本調理科学会大会要旨（J-STAGE: ajscs 30, 134）。§3-1 Yamasaki 2022 の学会発表版であり、新規の根拠にはしない
2. [学会プロシーディング] Massera E et al. "Chili Pepper Scent: Study and Recognition with Chemiresistors Array." *Proceedings* (MDPI, Eurosensors 2017) 1(4):597。6品種の e-ノーズ判別と GC-MS-SPME。査読誌論文ではないため §3-2 の文脈付けのみ
3. [学位論文要旨] 龍谷大学リポジトリ所収の山椒関連学位論文要旨。主成分の記述は §3-1 の原著群と整合するが、要旨単独では根拠にしない
4. [専門メディア] Chromatography Online (LCGC International) "Chromatography Decodes Sichuan Pepper Oil Aroma"：§3-3 Ding 2026 の解説記事。原著への案内としてのみ有用
5. [業界団体ページ] 日本香料工業会「和の香り」：山椒若葉の寄与成分として (Z)-3-hexenal、(Z)-3-hexenol、linalool、citronellol、2-tridecanone、geraniol（Kojima ら）を紹介。葉部位の探索線索として記録するが、未検証のためリンク化しない
6. [プレプリント・不採用] Capsicum 3種抽出物の鎮痛プロファイル（preprints.org, 2025、未査読）。設計が異なるため §3-2 の参考にも採用しなかった
7. [公的機関レコード] NIST WebBook の Behera 2004 引用レコード：DOI・書誌の実在確認に使用（知見の根拠ではない）
8. [不採用の商業情報] Alibaba 等の商業サイト群に散見する「クミンは焙煎でクミナールが増える」「コリアンダーの linalool は160–180℃で geraniol に変換」等の主張は査読原著で裏付けが取れず**全て不採用**。特に「焙煎でクミナール生成・増加」は確認した原著（精油総量は加熱で低下）の方向と必ずしも一致せず、アプリに載せるべきではない

## タスク2・3 で未発見として残るもの
- スターアニスの乾式焙煎（炒）単独の査読原著：未発見（乾燥加熱 ≤80℃域＋乾燥法比較のみ）
- コリアンダー種子の温度系列（温度×時間）を持つ乾熱焙煎原著：未発見（方式間比較のみ）
- クミンの温度系列つき焙煎原著の要旨レベル数値：未確認（Behera 2004 は書誌確認まで）

---

# タスク4. 未収録化合物の収録可否判定

判定は査読原著／査読総説を主軸とし、拡大範囲は「参考情報」と明示して寄与の根拠には使っていない。数値は要旨・本文抜粋で直接確認できたもののみ。

## 4-1. グアイアコール（guaiacol、2-メトキシフェノール）— **判定：収録すべき（根拠あり）**

### カカオ／チョコレート（寄与の証拠が最も強い）
1. **[査読原著]** Frauendorfer & Schieberle, *J Agric Food Chem* 2006, "Identification of the Key Aroma Compounds in Cocoa Powder Based on Molecular Sensory Correlations." DOI: 10.1021/jf060728k
   - ココアパウダーのセンソミクス研究（AEDA で35の香気活性成分、安定同位体希釈定量＋OAV＋再構成）。再構成表（学位論文による転載で確認）では 2-メトキシフェノールは 230 µg/kg、閾値16 µg/kg、**OAV 14**、香調 spicy, smoky。検出ではなく**寄与**
2. **[査読原著]** Frauendorfer & Schieberle, *J Agric Food Chem* 2008, "Changes in Key Aroma Compounds of Criollo Cocoa Beans During Roasting." DOI: 10.1021/jf802098f／PMID: 18925740
   - 未焙煎→焙煎で 2-メトキシフェノール増加（後続論文の引用で確認：Criollo 110→230 µg/kg、Forastero 61→100 µg/kg、95℃・14分という穏和条件）。焙煎生成／増加の証拠。ただし通常焙煎条件では基準試料でむしろ微減という対照的報告（出典5系統）があり、条件依存性を記録すべき食い違い
3. **[査読原著]** Cordero et al., *Anal Chim Acta* 2019. DOI: 10.1016/j.aca.2018.11.043
   - 高品質カカオ中間体（ニブ・マス・パウダー）でグアイアコールを含む鍵臭気成分を定量し OAV で官能ノートと対応付け。検出＋定量＋寄与評価
4. **[査読原著]** Füllemann & Steinhaus, *J Agric Food Chem* 2020, 68:10833–10841. DOI: 10.1021/acs.jafc.0c04633／Krause & Steinhaus, *J Agric Food Chem* 2025, 73:19663–19669. DOI: 10.1021/acs.jafc.5c06046／PMID: 40713024
   - GC-O／AEDA で 2-メトキシフェノールを発酵カカオの主要な燻煙臭気成分として確認、定量＋OAV で実在の木煙接触試料でも最有力成分の一つ。**寄与、ただしこの文脈ではオフフレーバー（過剰・汚染時）**。通常の焙煎由来の背景的寄与（出典1・2）と煙汚染／過発酵時の欠陥寄与は分けて書く必要がある
5. **[査読原著]** Porcelli／Steinhaus 系, *Eur Food Res Technol* 2022, 248:197–205, "Impact of processing on important cocoa off-flavour compounds." DOI: 10.1007/s00217-021-03873-0
   - 燻煙成分群は焙煎・リカー化で最大1.4倍の微増、チョコレート化・コンチングで30–63%減少。加工工程による増減の証拠
6. **[査読原著]** Deuscher et al., *Molecules* 2020, 25:1809, "Key Aroma Compounds of Dark Chocolates Differing in Organoleptic Properties: A GC-O Comparative Study." DOI: 10.3390/molecules25081809／PMID: 32326405
   - ダークチョコレート12試料の GC-O（cDFA）でグアイアコール（OA 58）が試料を弁別する鍵臭気成分の一つ。**製品（チョコレート）段階での寄与**
7. **[査読原著]** Seyfried & Granvogl, *J Agric Food Chem* 2019, 67:5827–5834（高カカオ90%／99%ダークチョコレートのセンソミクス）。**DOI は本調査では未確認**（ACS ページで書誌と要旨のみ確認）
   - AEDA＋SIDA 定量＋OAV＋再構成で、2-メトキシフェノールは最高 OAV 群の一つ、再構成モデルが高類似。寄与の独立した裏付けとして有効だが、DOI は別途原典確認が必要

### お茶（焙煎茶）
8. **[査読原著・国内誌]** Mizukami, 茶業研究報告（Tea Research Journal）2012, 113:55–62（SAFE＋AEDA による焙煎緑茶の鍵臭気成分同定）. DOI: 10.5979/cha.2012.113_55。同誌2008年版（Mizukami et al., DOI: 10.5979/cha.2008.105_43）とともに書誌実在は確認
   - グアイアコールが焙煎香を付与しうる化合物としてこの2012論文を引用しているのは下記の特許文献であり、**グアイアコール個別の FD 値／OAV は本調査では原著要旨から直接未確認**。お茶については「鍵臭気成分研究の対象系で名前が挙がる」ことは確認できるが、個別寄与の強さは未確認として扱う
9. **[参考情報・特許（査読外）]** ピロール化合物に関する特許出願公開：Mizukami 2012 を引用し「2-ethyl-3,5-dimethylpyrazine、2-vinyl-3,5-dimethylpyrazine、guaiacol 等が焙煎香付与化合物の例」と記載。文脈付けのみ。収録根拠にはしない

### スパイス／ハーブ
10. **[査読原著]** Chen et al., *Fermentation* 2023, 9:724（バニラポッド）。**DOI 未確認**
    - 微生物コーティングしたバニラポッドの GC-MS でグアイアコールを検出（0.44等の相対値）。これは**バニラにおける検出**であり、GC-O／OAV による寄与証明ではない。4-vinylguaiacol、4-propylguaiacol は別化合物であり混同不可
11. （相互補強）オレガノ乾燥葉の AEDA（§1-10、Sádecká & Polovka 2008）でグアイアコールが FD 2,000 の寄与成分として検出されている — スパイス・ハーブ側でも寄与証拠が1件ある
12. **[参考情報・公的機関]** DOP "Pimentón de la Vera" 規格書（EU 規則に基づく原産地呼称規格）：オーク／樫の煙で10–15日乾燥し「味と香りが燻煙的で強く浸透性」と規定するが、**グアイアコールを名指ししていない**。製法・官能の公的裏付けにはなるが化合物リンクの根拠にはならない
13. **[参考情報・専門／商業メディア（信頼性低）]** Alibaba 系スパイス解説複数：「燻製パプリカにグアイアコール 127 ppm」「5–10 mg/g」など**数値同士が桁違いに食い違い**、原著へ辿れない。食い違い自体を記録し、根拠として不採用。査読原著での燻製パプリカ中グアイアコールの直接確認は本調査では**未確認**

### 判定理由
カカオパウダー、カカオ豆焙煎、ダークチョコレート成品の3段階で、AEDA／GC-O＋定量＋OAV＋再構成による寄与証拠が複数の独立した査読原著で揃う。お茶は国内査読誌の鍵臭気成分研究系が存在するが個別値は未確認のため弱めにリンクする。スパイスはバニラの検出1件＋オレガノの AEDA 寄与1件で、燻製パプリカは参考情報のみ。

### アプリへ反映する場合の形
- 登録名：グアイアコール（別名 2-メトキシフェノール／2-methoxyphenol）。分類：揮発性フェノール類（フェノール系香気成分）
- リンク：
  - カカオ豆（焙煎）→ **contribution**（焙煎で増加、OAV>1）
  - ココアパウダー → **contribution**（OAV 14）
  - ダークチョコレート → **contribution**（GC-O 弁別成分、センソミクス最高 OAV 群）
  - 発酵カカオ豆 → **contribution（オフフレーバー条件付き）**。備考「木煙乾燥・過発酵時に燻煙欠陥の主因の一つ。通常レベルの背景寄与と区別する」
  - オレガノ（乾燥葉）→ **contribution（寄与候補、FD 2,000、単一研究）**（§1-10 と連携）
  - ほうじ茶／焙煎緑茶 → **detection**（寄与への格上げは原著全文で個別 FD/OAV を確認してから）
  - バニラポッド → **detection** のみ
  - 燻製パプリカ → **リンクしない**（参考情報のみ。査読原著が取れた時点で再判定）
- 香味ノート対応：化合物単体の一般的香調は「スモーキー、フェノリック、スパイシー、甘い煙」。食品での寄与として書けるのはカカオ系では「スパイシー〜スモーキーな背景香（過剰時は燻煙オフフレーバー）」。「焙煎香一般」の代表成分として表示しない（焙煎香の主役はピラジン類等であり、グアイアコールは煙／フェノール側の成分）

## 4-2. 有機酸類 — 一括登録ではなく個別登録が正解

個別登録に意味がある理由：閾値が化合物ごとに大きく異なる（例：[査読総説系・PMC掲載表] *Molecules* 2023, 28:2339, Table 3 "Taste characteristics and thresholds of common organic acids in tea"、DOI は未確認 — シュウ酸 45 mg/L、酢酸 50 mg/L、リンゴ酸 87 mg/L、乳酸 133.2 mg/L、クエン酸 770 mg/L）ため、同じ総量でも呈味寄与が全く違う。

### 核となる出典

**お茶**
1. **[査読原著]** Zhang et al., *Food Sci Nutr* 2022, 10:2071–2081. DOI: 10.1002/fsn3.2823／PMID: 35702304
   - 中国紅茶と緑茶で HPLC により12種の有機酸を同定・定量し TAV（味覚活性値）を算出。TAV>1 は11種。値（紅茶／緑茶）：クエン酸 63.71／37.23、DL-酒石酸 43.24／38.52、酢酸 35.90／36.22、乳酸 33.50／42.49、シュウ酸 19.09／21.41、リンゴ酸は最下位群（紅茶5.14）
   - **重要な留保（原著自身の結論）**：TAV 結果は官能評価の酸味差と一致せず、著者らは「有機酸と紅茶・緑茶の酸味に直接的関係はない。相互作用・pH・他の酸味物質が関与」と結論。お茶では「検出＋TAV 上の潜在寄与」までで、単独寄与の証明ではない。この食い違い（TAV vs 官能）は記録必須
2. **[査読原著]** *Nutrients* 2024（抹茶の in vitro 消化研究）. DOI: 10.3390/nu16234058
   - 抹茶（native）でクエン酸 最大44.8 mg/g ＞ リンゴ酸 最大32.2 mg/g ＞ シュウ酸 最大4.46 mg/g。**組成**の証拠。コハク酸＋クエン酸がグルタミン酸のうま味を高める旨の先行知見への言及あり
3. **[査読原著]** *Front Nutr* 2023（白茶用品種の茶花）. DOI: 10.3389/fnut.2023.1142971
   - 茶花でクエン酸 15.16 mg/g、リンゴ酸 8.40 mg/g 等を定量（品種差あり）。葉茶ではなく茶花の組成である点に注意

**カカオ／チョコレート**
4. **[査読原著]** Holm, Aston & Douglas, *J Sci Food Agric* 1993, 61:65–71, "The effects of the organic acids in cocoa on the flavour of chocolate." DOI: 10.1002/jsfa.2740610111
   - 発酵乾燥カカオ54試料：酢酸 1.3–11.8 g/kg、クエン酸 1.6–9.9 g/kg、乳酸 0.6–11.1 g/kg、シュウ酸 2.1–6.5 g/kg。その豆で作ったチョコレートの官能で、高酸味スコアは乳酸・酢酸の高濃度が主因とされ、**有機酸添加試験でシュウ酸がチョコレートフレーバーに重要な役割**と示された。本群で最も直接的な**寄与**証拠
   - [学位論文（拡大範囲）] Holm, QUT 修士論文 1991, "Pyrazines and organic acids in cocoa"（QUT ePrints 35962）— 上記論文の母体。数値範囲は論文と一致
5. **[査読原著＋学位論文]** Ho et al., *Int J Food Microbiol* 2014, 174:72–87（酵母の役割研究。論文の DOI は本調査では未確認）／Ho 博士論文 UNSW 2014, DOI: 10.26190/unsworks/17042
   - 未発酵ニブにはクエン酸 16–17 mg/g、コハク酸 13–14 mg/g、シュウ酸 7–8 mg/g、リンゴ酸 1–2 mg/g を含み、乳酸・酢酸は未発酵ニブになく発酵中に出現・増加する。**由来（発酵生成か豆内在か）を個別に区別できる**重要証拠
6. **[査読原著]** 台湾産カカオの発酵・焙煎研究, *Molecules* 2022, 27:3058（DOI 未確認）
   - クエン酸、酒石酸、コハク酸、酢酸、リンゴ酸を検出。焙煎豆でクエン酸 335.56 mg/100g、酢酸 720.48 mg/100g、リンゴ酸 129.32 mg/100g 等。検出＋組成変化
7. **[査読原著]** Criollo／Forastero 比較, *Heliyon* 2023, 9:e15129（DOI 未確認）
   - 発酵 Criollo で乳酸 3.3 g/kg、Forastero で酢酸 5.2 g/kg が優勢。リカーでは Criollo でクエン酸 2.3 g/kg・コハク酸 1.9 g/kg 優勢。乳酸・酢酸は酸味が強く最終製品まで残りうると記述

**ハーブティー**
8. **[査読総説]** Izquierdo-Vega et al., *Biomedicines* 2020, 8:100, "Organic Acids from Roselle (Hibiscus sabdariffa L.)." DOI: 10.3390/biomedicines8050100
   - ローゼルの有機酸はクエン酸、ヒドロキシクエン酸、ハイビスカス酸、酒石酸、リンゴ酸、アスコルビン酸等で、「酸味はクエン酸・リンゴ酸・酒石酸・ハイビスカス酸含量による」と総説として帰属。一次定量ではない
9. **[査読原著]** *Foods* 2023（ハイビスカス萼の加工研究）. DOI: 10.3390/foods12162984／PMID: 37627982
   - 萼の有機酸としてリンゴ酸、クエン酸、酒石酸、アスコルビン酸、コハク酸、シュウ酸を挙げ、先行研究ではコハク酸＋シュウ酸で全有機酸の76%と報告する一方、他研究ではハイビスカス酸が13–24%で最多ともされる。**測定パネルにハイビスカス酸を含むかで「最多の酸」が変わる食い違い**を記録する
10. **[査読原著]** バラハーブティー研究, *npj Sci Food* 2025, 9:45. DOI: 10.1038/s41538-025-00387-x
    - ローズティーで最も顕著な有機酸は L-リンゴ酸（優勢）、酒石酸、cis-アコニット酸等。酸味は通常感じられ官能品質に負の影響、と一般論として記述。個別 TAV はなし＝**検出**レベル
11. **[査読原著]** バラ発酵飲料研究, *Foods* 2025, 14:1868. DOI: 10.3390/foods14111868
    - 未発酵バラ飲料の主酸はリンゴ酸・酒石酸・コハク酸。発酵後は乳酸・酢酸・クエン酸等6酸で TAV>1。発酵飲料という隣接マトリックスでの TAV 寄与であり、通常のハーブティーへそのまま転用しない

### 化合物ごとの判定

| 化合物 | 判定 | 理由・リンク形 |
|---|---|---|
| クエン酸 | **収録すべき** | お茶：検出＋TAV 高値（Zhang）→ composition、TAV 上の寄与は注記付き。カカオ豆／ニブ：composition（内在性、発酵で消費）。ハイビスカス（ローゼル）：composition＋総説による酸味帰属 → contribution は総説由来と明記し弱めに。香味ノート：酸味 |
| リンゴ酸 | **収録すべき** | 抹茶・茶花で高含量、ハイビスカス／バラで優勢酸。リンク：緑茶（抹茶）composition、ローゼル composition、ローズティー composition（優勢）。お茶での TAV は低め（Zhang で最下位群）なので contribution とはしない |
| 酢酸 | **収録すべき** | 二重の顔：不揮発の呈味酸ではなく揮発性酸。カカオでは Holm の官能で酸味フレーバー主因の一つ → カカオ豆／チョコレート contribution。ココアパウダーでは香気成分として OAV 2680（Frauendorfer 2006、sour）→ 香気側 contribution も併記。お茶：composition＋TAV。発酵由来であることを備考に |
| 乳酸 | **収録すべき** | カカオ：発酵生成、Holm で酸味主因、過剰は欠陥側 → contribution（濃度条件付きの注記）。お茶：composition＋TAV（緑茶で42.49と高値だが Zhang の留保適用）。未発酵素材には無い／少ない点がペアリング上も意味を持つ |
| 酒石酸 | **条件付きで収録可** | 根拠は検出中心：お茶で DL-酒石酸の TAV 高値（ただしラセミ体表記・単独寄与未証明）、ローゼル／バラ／台湾カカオで検出。リンクは全て composition とし、contribution は付けない |
| シュウ酸 | **条件付きで収録可** | Holm の添加試験でチョコレートフレーバーへの重要性が示された単一研究の寄与証拠＋お茶 TAV>1＋抹茶組成。ただし再現研究が薄く、表示は「単一原著に基づく寄与（条件付き）」と明記。リンク：カカオ豆 contribution（条件付き）、緑茶 composition |

※対象外だが調査中に強く出た **コハク酸**：Zhang で TAV 最大（紅茶94.96／緑茶102.12）、カカオニブ内在量も高い。次回候補として記録する（今回の判定対象外のため登録推奨はしない）。

### アプリへ反映する場合の形（有機酸共通）
- 分類：有機酸（呈味成分）。各化合物を独立レコードとし、「有機酸類」の一括レコードは作らない（作る場合も索引用のみでリンクは持たせない）
- 香味ノート対応：全酸共通で「酸味」だが、閾値と由来（内在／発酵生成／添加）を素材リンクの備考で区別する。化合物一般の酸味の質（例：酢酸＝刺激的・揮発性）は一般性質欄に、食品での寄与とは分けて書く

## 4-3. 糖類（スクロース、グルコース、フルクトース）

### 関連出典と確認内容

**お茶**
1. **[査読原著]** Li et al., *Food & Function* 2025, 16:3707–3720, "Metabolomics-based analysis of the effects of differences in soluble sugars on the sweetness quality of six major tea types in China." DOI: 10.1039/d5fo00232j／PMID: 40259751
   - 同一品種から作った6茶種で官能＋電子味覚＋標的糖メタボロミクス。甘味順位は緑茶＞黄茶＞黒茶（dark tea）＞烏龍茶＞紅茶＞白茶。26の差別代謝物のうち **スクロース、D-フルクトース、グルコース** が甘味特性を分ける主要糖成分。相関・弁別レベルの**寄与**であり、個別 TAV／再構成による証明ではない
2. **[査読原著]** バラハーブティー研究（§4-2 出典10と同一）. DOI: 10.1038/s41538-025-00387-x
   - 可溶性糖29種同定。最も豊富なのはグルコース（95.61 mg/g、VFD-RC 試料）、次いでフルクトース、スクロース
   - **食い違い／注意**：同研究ではグルコースと D-フルクトースは甘味と**負の相関**（酸味による甘味抑制が示唆）。「豊富＝甘味寄与」ではない好例。ハーブティーでの糖リンクは composition に留める根拠になる
3. **[査読原著]** 白茶（葉・花・種子）研究, *Food Chemistry* 系（ScienceDirect 掲載、DOI 未確認）
   - D-フルクトースが白茶の「心地よさ（pleasantness）」の主要ドライバー、4糖の相乗効果を主張。用量依存の添加系を含むが書誌確認が要旨レベルに留まるため補助扱い
4. **[参考情報・専門メディア]** bioengineer.org による信陽毛尖研究の紹介（原著：Peng et al., *Food Chem X* 2026, DOI: 10.1016/j.fochx.2026.104601 と紹介文中に記載）
   - スクロースが二糖の90%超、再乾燥段階で 38.86 mg/g（全可溶性糖の78.09%）、甘味増加と関連と報道。メディア経由のため参考情報。原著直接確認後に格上げ可能

**カカオ／チョコレート**
5. **[査読原著]** *Sci Rep* 2024（3D造形チョコレートの甘味研究）. DOI: 10.1038/s41598-024-58838-6
   - スクロース含量の異なるチョコレートマスで、唾液中へのスクロース放出が甘味知覚を駆動。**配合品としてのスクロースの甘味寄与**は直接的。ただしこれは「添加原材料としての寄与」であり、カカオ内在成分としての検出とは別種別
6. **[査読原著・隣接マトリックス]** *Foods* 2021, 10:1527（チョコレートプリン）. DOI: 10.3390/foods10071527
   - スクロース 38–233 g/kg の濃度操作で好ましさと甘味・苦味・渋味の知覚強度が変動。プリンでありバー状チョコレートへの直接転用は不可。補助証拠
7. **[査読総説]** Afoakwa et al., *Crit Rev Food Sci Nutr* 2008, 48:840–857. DOI: 10.1080/10408390701719272
   - カカオ発酵でスクロース加水分解に由来する還元糖（フルクトース、グルコース）が焙煎時の反応前駆体として重要、との総説的整理。**甘味寄与ではなく前駆体（precursor）としての役割**。Ho 学位論文／原著でも、発酵前の豆はスクロースが高く還元糖が低く、パルプの糖が発酵基質になることが確認できる（組成＋発酵動態）
8. **[参考情報・公的機関データの二次ミラー]** USDA FoodData Central 由来の市販ダークチョコレート栄養表示：原材料表示は「sugar」が通例だが、個別栄養素欄の Sucrose／Glucose／Fructose は多くの製品で空欄。**公的 DB は市販チョコレートの個別糖の定量根拠にならない**という否定的確認として記録
9. **[参考情報・大学リポジトリ総説]** Kansas State Univ. リポジトリのチョコレート糖代替総説（2025）：「スクロースはチョコレート組成のほぼ半分」と記述。配合上の位置づけの文脈付けのみ
10. **[参考情報・プレプリント]** Kombucha 総説プレプリント, Preprints.org 2026, v1（未査読明示。後に *Beverages* 2026 掲載版あり DOI: 10.3390/beverages12080097 とプレプリント側に記載）：発酵茶飲料ではスクロースは発酵基質、残存する糖が酸味とのバランスで甘味に寄与と記述。未査読版は参考情報のみ

### 化合物ごとの判定

| 化合物 | 判定 | 理由・リンク形 |
|---|---|---|
| スクロース | **収録すべき** | ただしリンク種別の使い分けが必須。チョコレート → **composition（添加原材料）＋contribution（甘味）**。カカオパルプ／未発酵豆 → composition（内在）。お茶（6茶種）→ contribution（弁別成分レベル、相関証拠と明記）。「チョコレートから検出された内在化合物」という書き方はしない |
| グルコース | **条件付きで収録可** | お茶・バラでは組成量は大きいが、バラでは甘味と負相関という反証があり、個別寄与の直接証明（TAV／添加再構成）が対象食品で未確認。カカオでは発酵基質・メイラード前駆体としての組成証拠が中心。リンク：緑茶 composition、お茶6茶種は寄与候補として注記、カカオパルプ／豆 composition（基質・前駆体）。成品チョコレートへの甘味 contribution リンクは付けない |
| フルクトース | **条件付きで収録可** | グルコースとほぼ同構造。追加要素として白茶で pleasantness ドライバーとする単一研究（要旨レベル確認）があるが再現待ち。相対甘味が最も高いことは化合物一般性質であり、食品中寄与の証拠として表示しない。リンクは composition 中心 |

### アプリへ反映する場合の形（糖類共通）
- 分類：糖類（単糖／二糖を明記：スクロース＝二糖、グルコース・フルクトース＝単糖）
- 香味ノート対応：「甘味」。ただし素材リンクごとに根拠種別（添加／内在／発酵基質／前駆体）を備考欄で区別し、特にチョコレート×スクロースは「素材固有成分」ではなく「配合成分」であることを UI 上も区別できる形を推奨
- ペアリング観点の注記：お茶の甘味は糖単独よりアミノ酸（テアニン等）との相互作用で語られることが多く、糖3種を「お茶の甘味の主因」と表現しない

## タスク4 総括
- **グアイアコール：収録すべき。** 根拠の中心はカカオ系センソミクス（DOI: 10.1021/jf060728k、10.1021/jf802098f、10.1021/acs.jafc.5c06046 等）。お茶は detection 止まり、燻製パプリカは参考情報のみでリンク見送りが正しい線引き
- **有機酸類：個別登録が正解。** クエン酸・リンゴ酸・酢酸・乳酸は収録すべき、酒石酸・シュウ酸は条件付き。お茶では Zhang 2022（DOI: 10.1002/fsn3.2823）自身が「TAV と官能は一致しない」と結論しており、contribution の付け過ぎに注意。カカオでは Holm 1993（DOI: 10.1002/jsfa.2740610111）が寄与の核
- **糖類：スクロースのみ収録すべき、グルコース／フルクトースは条件付き。** チョコレートのスクロースは添加成分としての登録であり、内在化合物と混同しないことが最重要の設計上の注意点
- 拡大範囲で得たもの：学位論文2件（Holm 1991、Ho 2014 DOI: 10.26190/unsworks/17042）が査読原著の母体／並行証拠として有用だった一方、公的機関（Pimentón DOP 規格・USDA）は化合物個別値を与えず、商業メディアのグアイアコール数値は相互に食い違い不採用、という結果だった

---

## 本ラウンド全体の未解決・次作業リスト

1. **クミンの寄与**：Ravi et al. 2013（DOI: 10.1080/10942912.2011.576356）の全文取得が唯一の前進路。取得できれば格上げ判定が変わりうる
2. **クローブの aroma-active 21成分／endowment 9成分の個別名**：Yu et al. 2025（DOI: 10.1016/j.foodchem.2024.140704）の全文確認
3. **カルダモンの素材単独寄与研究**：現時点では存在を確認できていない。Mırra 研究は間接証拠として出典種別付き併記が上限
4. **メースの寄与研究**：未発見のまま
5. **スターアニスの乾式焙煎原著**：未発見（乾燥のみ）
6. **コハク酸**：今回の判定対象外だったが、お茶 TAV 最大・カカオニブ高含量と強く出た。次回の収録判定候補
7. 本調査は第1ラウンド同様、要旨（abstract）レベルの確認が中心。本文精読による数値・条件の照合は未実施の項目が多い（各節に明記）
