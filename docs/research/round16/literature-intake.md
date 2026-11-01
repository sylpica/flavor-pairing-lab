# 第16ラウンド 文献取り込み第2回：一次情報の検証記録（2026-11-01）

pairing 側キュー Q-07（第39弾：抹茶の渋味の再検証）と Q-08（第40弾：段階5裏付け拡充と味カバレッジ全数点検）について、lab の証拠方針（docs/EVIDENCE_POLICY.md）で一次情報から再検証した記録。到達した一次情報と判定のみを記す。pairing 側の格付け（sensory／general／inferred）を lab 側で格上げしたものはない。感覚エントリの tier はいずれも general のままで、変化は「値の裏付けの強さ」と出典の到達度（verified）に限る。

## Q-07：抹茶の渋味の根拠補強

- 堀江ら 2018（農研機構）：農研機構公式ページの研究成果情報「国産抹茶の価格と化学成分含有量の関係」（果樹茶業研究部門、研究担当者：堀江秀樹・中村順行）で実在と内容を確認した。試料は国産抹茶56試料（収集74試料のうち包装40g以下のもの）と粉末茶6試料。原文の所見：「覆下栽培によりエピガロカテキンガレート(EGCG)の含量は変化しないが、エピガロカテキン(EGC)の含量は低下する」。高価格抹茶ほどテアニン含量と EGCG/EGC 比が高い。関連論文として挙がる JARQ 52(2):143-147（Horie et al. 2018）は米国で販売された粉末緑茶の研究で試料が異なるため混同しないよう limits に明記した。新規登録 `horie-2018-matcha-composition`（kind: article、verified: abstract＝公式成果情報ページの要約で確認し、原著論文全文は未読のため）。
- Unno, Kameoka & Nakamura 2026：**実在を確認**。出版社（MDPI）の PDF 全文で書誌を確認した。題名 "Compositional Diversity and Functional Interactions of Bioactive Compounds in Japanese Green Tea: Focus on Matcha, Sencha, and Gyokuro"、著者 Keiko Unno・Yoko Kameoka・Yoriyuki Nakamura（静岡県立大学 茶学総合研究センター）、Molecules 2026, 31(16):2934、DOI 10.3390/molecules31162934、叙述的総説（受理 2026-08-18、公開 2026-08-21）。内容：抹茶は粉末化した茶葉を丸ごと摂取するため、浸出液では葉に残るカテキンも含めて全量を摂取する。一方で同総説の一般論は「被覆はカテキン生合成を抑え渋味を弱める」方向（主に玉露等の文脈）であり、抹茶の渋味が中核属性であるという直接記述はない。この緊張関係は出典の limits に正直に記録した。新規登録 `unno-2026-green-tea-composition`（kind: review、verified: full）。
- 反映：tea-matcha の渋味 moderate は**値・tier とも変更せず**、感覚エントリの出典に上記2件を追加し、備考で「被覆＝渋味が弱いという単純化は抹茶には当てはまらない」根拠（EGCG 含量は覆下で不変という成分実測＋茶葉ごと摂取という摂取形態）を明記した。素材の sourceIds にも2件を追加。玉露（浸出液＋低温抽出で摂取形態が異なる）の渋味 weak には手を付けていない（回帰テストで固定）。
  - 格付け対応：pairing 側の再検証メモ → lab では感覚 tier general のまま、出典到達度は horie=abstract／unno=full。

## Q-08：感覚データ候補

- 白茶の甘味（Zheng et al. 2025）：出版社 PDF で書誌と内容を確認。Horticulturae 11(10):1196、DOI 10.3390/horticulturae11101196、著者 Zheng Y, Zhang Y, Zou Y, Shi Y, Zhang J, Deng H, Ji Z, Liang Z, Li X。白牡丹3品種（政和大白茶・福安大白茶・福鼎大毫茶）の QDA＋化学分析で、甘味が中核属性、スクロース TAV（閾値 890 mg/kg）は 3.34／3.66／2.33 と全て >1。新規登録 `zheng-2025-baimudan-cultivars`（verified: full）。反映：tea-white-baimudan の甘味 moderate は**値を変えず根拠補強**（出典追加＋備考）。素材の scopeNote に「甘味には白牡丹3品種の QDA 実測がある」旨を追記した。
  - 格付け対応：pairing 側 sensory → lab では tier general のまま（素材が「白茶一般＋白牡丹」の複合であるため measured には上げない）。
- 紅茶の甘味＋酸味（Zhang et al. 2022）：既登録出典 `zhang-2022-tea-organic-acids` の同一論文。PMC 全文（PMC9179145）で官能評価値を確認した：0–3尺度（0.5刻み）で紅茶は甘味 2.33・酸味 1.33・うま味 2.17、緑茶は甘味 1.17・酸味 0.33・うま味 1.50。紅茶浸出液の pH は 5.58（緑茶 6.47）。有機酸の TAV が官能の酸味差と一致しないことは原著自身の結論であり、既存の limits と一致する。これにより同出典を verified: abstract → **full に格上げ**し、scope に官能結果を追記、limits に「試料は紅茶・緑茶各1試料」の留保を追加した。
  - 反映：tea-black-general の甘味を weak → **moderate に改定**（理由：総説ベースの従来値より、原著の官能実測 2.33/3 が強い方向を示すため。備考に改定理由と数値を明記）、酸味 weak を**新規追加**（備考に実測値と「担い手は有機酸単独ではない」という原著の留保を明記）。いずれも tier は general（試料は中国紅茶1試料であり、紅茶一般の measured とはしない）。tea-keemun 等の個別紅茶素材へは付けない（同論文の試料が祁門かどうか未確認のため）。
  - 格付け対応：pairing 側 sensory → lab では tier general（格上げなし）。値の改定は「より強い根拠への差し替え」に当たるため理由を本記録と備考の両方に残した。
- 黒茶（熟茶）の甘味（Wang et al. 2025）：PMC 全文（PMC11880732）で確認。Food Chemistry: X 26:102278、DOI 10.1016/j.fochx.2025.102278、PMID 40046997、著者 Wang T, Bo N, Guan Y, Yang D, Chen Q, Guan Y, Liu S, Wang Z, Duan H, Ma Y, Zhao M。古樹原料の熟プーアル茶5試料（同一工場で発酵）の QDA（0–10尺度）で甘味 5.83–8.00（醇厚さ 6.50–8.67 と並び最高群）、酸味とうま味は 0–1.33 と低い。新規登録 `wang-2025-ancient-ripe-puerh`（verified: full）。
  - 反映：**値は変更しない**。lab の tea-dark-puer は生茶・熟茶を区別しない素材であり、熟茶専用・古樹原料限定の値を一般素材へ転用しない。出典は素材の sourceIds に追加し、scopeNote に「熟茶5試料に限れば甘味が高かった報告があるが、本素材の感覚値には反映していない」旨を明記した（記録と値の分離）。
  - 格付け対応：pairing 側 sensory → lab では未反映（試料範囲の不一致による意図的な非反映）。
- 烏龍茶の甘味（Wang et al. 2022）：MDPI 全文で確認。Horticulturae 8(4):278、DOI 10.3390/horticulturae8040278、著者 Wang Z, Gan S, Sun W, Chen Z（福建農林大学）。171試料から選んだ代表66試料（15地域・8か国）の QDA で、「甘い後味」の記述子使用頻度は 42.4%。広東の試料群は甘い後味に優れ、福建北部・台湾の試料群も甘い後味が特徴。新規登録 `wang-2022-oolong-regions`（verified: full）。
  - 反映：tea-tieguanyin の甘味 weak は**値を変えず根拠補強**（出典追加＋備考。福建南部の地域試料群に基づく）。tea-dancong には甘味 weak を**新規追加**（広東試料群の所見に基づく。備考と scopeNote に「地域代表茶の集合であり単叢そのものの単独実測ではない」と正確に明記）。
  - 格付け対応：pairing 側 sensory → lab では tier general（地域集合試料のため measured にしない）。
- ファインフレーバーカカオの酸味（Afoakwa et al. 2008＋Stark et al. 2006）：**取り込まない**。理由：lab に対応する単一素材が存在しない。遺伝集団素材（cacao-gen-criollo／cacao-gen-nacional）は「集団レベルの香味実測がない限り味を付けない」という素材自体の scopeNote 上の設計であり、総説・豆段階の研究から集団へ味を付けることはその設計に反する。実在の製品素材では choco-nacional-ecuador に既に酸味 moderate（Rottiers et al. 2019 の実測ベース）があり、Ullrich et al. 2022 のファインフレーバーダークの知見は既に choco-dark-roasted／choco-100 のリンク根拠として収録済みである。一般ダークへの格下げ転用は試料範囲の拡大になるため行わない。
- ミルクチョコレートの酸味（Afoakwa 2008）：**取り込んだ**。choco-milk に酸味 weak（tier general、出典 afoakwa-2008-cocoa-flavour-review のみ）を追加。備考と素材 scopeNote に「発酵由来の有機酸が残存しうるという総説レベルの一般知見であり、個別製品での官能実証は未確認。配合で変わりうる」旨を明記した（pairing 側の作法の踏襲）。化合物リンクは追加しない（製品レベルの根拠がないため）。
  - 格付け対応：pairing 側 general → lab でも tier general（一致、格上げなし）。

## Q-08：化合物・リンク候補

- coumaroylquinic-acids（Wen et al. 2022）：**既存で充足しており追加作業なし**。lab には化合物 `coumaroylquinic-acid`（trans-4-O-p-クマロイルキナ酸、CAS 53539-37-0、C16H18O8、PubChem CID 5281766）が個別化合物として登録済みで、tea-keemun × coumaroylquinic-acid の寄与リンク（contribution／measured、conditions に閾値 38 µM・対象8試料全てが閾値超え）も存在し、出典 `wen-2022-keemun-astringency`（Food Chemistry 368:130803、DOI 10.1016/j.foodchem.2021.130803、verified: abstract）の scope に含量 40.20–65.53 µM が記載済み。キュー記載の数値とも一致する。群名（coumaroylquinic-acids）での重複登録はしない。
- カカオの渋味裏付け（Stark, Bareuther & Hofmann 2006／Ullrich et al. 2022／Kauz, Dunkel & Hofmann 2021／flavonol glycosides）：3出典はいずれも登録済み（stark-2006 は verified: full、ullrich-2022・kauz-2021 は abstract）。choco-dark-roasted／choco-100 × プロシアニジンB2・プロシアニジンC1・(−)-エピカテキン・N-フェニルプロペノイル-L-アミノ酸類の寄与リンク（measured）も既存。不足していたのは感覚エントリ側の出典併記だったため、choco-dark-roasted の渋味 moderate と choco-100 の渋味 strong に出典を追加して**補強のみ**行った（値・tier は変更なし）。
  - flavonol glycosides のカカオ側リンクは**追加しない**：lab の化合物エントリ `flavonol-glycosides` は茶のフラボノール配糖体（ケルセチン・ケンフェロール配糖体）として定義されており、カカオ側のポリフェノール配糖体の内訳を原著の粒度で確認できていないため、定義の異なる群への付け替えはしない。

## 「記録なしが妥当」の独立確認（変更なし）

pairing 側の注意情報を lab の現行データと独立に照合した結果：

- 緑茶（煎茶）の酸味なし：**妥当**。Zhang et al. 2022 の官能評価でも緑茶の酸味は 0.33（0–3尺度）とほぼ不在であり、現行の「記録なし」と矛盾しない。
- 黒茶の酸味なし：**妥当**。Wang et al. 2025 でも熟茶の酸味は 0–1.33（0–10尺度）と低く、tea-dark-puer に酸味がないことと矛盾しない。
- ルビーの苦味・渋味なし：**妥当**（現行データにも無い）。
- チョコ全種のうま味なし：**妥当**（現行データにも無い）。
- ほうじ茶の甘味なし：**妥当**（現行データにも無い）。
- 相違として記録するもの（本ラウンドでは変更しない）：
  1. ホワイトチョコレート：lab には苦味 weak のエントリがある（出典は総説 ye-2022、備考に「カカオマスを含まないため苦味は基本的に乏しい（一般知見）」と明記済み）。pairing は無記録の方針であり、運用の相違として記録する。
  2. ダークチョコレート（焙煎）の甘味 weak：lab には総説ベースの甘味 weak がある。pairing は配合糖由来として記録しない方針。lab には sucrose の組成リンクに「配合成分であり内在成分ではない」旨の conditions もある。相違として記録する。
  3. 黄茶の甘味：lab の tea-yellow には総説（zhang-2020）ベースの甘味 moderate がある。pairing 側の点検では「査読された官能記録を確認できない」とされており、根拠の強さに関する相違として記録する（lab のエントリは tier general の総説ベースであり、実測とは表示していない）。

## 収録数の変更（独立再集計、実測）

- 素材：122 → 122（不変）
- 化合物：180 → 180（不変）
- 出典（再確認済み）：335 → 340（新規5件。内訳 full 54→59［新規4件＋Zhang 2022 の格上げ］／abstract 260→260［堀江 +1、Zhang 2022 の格上げで −1］／bibliographic 21→21）
- 出典（表示総数）：793 → 798（台帳472・重複統合14は不変）
- リンク：428 → 428（不変）
- 感覚エントリ：126 → 129（紅茶の酸味・単叢の甘味・ミルクチョコの酸味を追加。紅茶の甘味は値の改定のみ）
- 味わいホイール対応づけ：主26＋副1（不変）

## 未確認事項（残存）

- 堀江ら 2018 の原著論文全文は未読（公式成果情報ページの要約で確認した範囲に限る）。JARQ 52(2):143-147 は別試料の研究であり、本件の全文代替にはならない。
- Zhang et al. 2022 の官能試料（紅茶・緑茶各1試料）の具体的な銘柄・産地は本文到達範囲では特定していない。そのため個別紅茶素材（祁門等）への反映は見送った。
- ミルクチョコレートの酸味は、個別製品での官能実証が未確認のまま（総説レベルの知見として明記済み）。
- Wang et al. 2022 の地域試料群と個別茶種の対応は地域単位までであり、単叢・鉄観音の単独実測は依然として未収録。
