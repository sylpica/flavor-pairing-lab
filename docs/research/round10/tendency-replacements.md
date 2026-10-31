# 第10ラウンド：シミュレーション傾向の出典置き換え（確定文案）

新規出典はすべて再確認済み（verified 'abstract'）として登録する。ID は案であり、既存IDと衝突する場合は実装側で調整する。

## extract-temp-bitter（総説のみ → 原著を併記。総説は削除しない）

追加出典：
1. ID案 `yang-2007-tea-bag-extraction` — Yang DJ, Hwang LS, Lin JT, "…（紅茶・緑茶・烏龍茶・包種茶・プーアルのバッグ茶の抽出温度比較）", Journal of Chromatography A 1156:312–320, 2007, DOI 10.1016/j.chroma.2006.11.088
   - scope：5茶種のバッグ茶について70／85／100℃の抽出を比較し、湯温が高いほどカフェイン・カテキン・没食子酸の放出が多いこと、時間とともに漸増することを示した実測。
   - limits：試料は粉砕したバッグ茶であり、リーフ（全叶）茶の抽出への直接の換算はできない。
2. ID案 `kelebek-2016-black-tea-brewing` — Kelebek H, Food Chemistry 204:227–238, 2016, DOI 10.1016/j.foodchem.2016.02.132
   - scope：紅茶について80℃と100℃の抽出を時間系列で比較した実測。
   - limits：単一の紅茶試料群での結果。
3. ID案 `labbe-2006-green-tea-extraction` — Labbé D et al., Separation and Purification Technology 49:1–9, 2006, DOI 10.1016/j.seppur.2005.07.038
   - scope：緑茶の抽出における温度×時間の系列を測定した実測。
   - limits：本研究の緑茶試料と条件範囲内での結果。
4. ID案 `perva-uzunalic-2006-green-tea-extraction` — Perva-Uzunalić A et al., Food Chemistry 96:597–605, 2006, DOI 10.1016/j.foodchem.2005.03.015
   - scope：緑茶の抽出における温度×時間の系列を測定し、高温・長時間でのカテキンの分解にも言及した実測。
   - limits：本研究の緑茶試料と条件範囲内での結果。

傾向の limits／注記への併記文案（趣旨を保って組み込む）：
「EGCG などエピ型カテキンは、高温・長時間の条件ではエピマー化や分解により減少する場合がある（Saklar et al. 2015）。」

## roast-oolong-volatiles（根拠 Lan 2022 は全体に残す。素材別の裏付け出典を追加）

追加出典：
1. ID案 `cao-2021-tieguanyin-roasting` — Cao et al., Food Chemistry: X 12:100178, 2021, DOI 10.1016/j.fochx.2021.100178
   - scope：鐵観音そのものについて焙煎温度・時間の比較を行い、高温で花香成分が低下しピラジン類が増えることを示した実測。
   - limits：本研究の鐵観音試料と焙煎条件の範囲内。
2. ID案 `liu-2021-wuyi-rock-tea-roasting` — Liu et al., RSC Advances 11:12074–12085, 2021, DOI 10.1039/D0RA09703A
   - scope：武夷岩茶4品種（大紅袍を含む）を3段階の焙煎で比較した実測。
   - limits：解析は4品種の合算が中心であり、品種単独の効果の切り分けは限定的。
3. ID案 `ding-2026-dancong-refiring` — Ding et al., Food Chemistry: X 34:103469, 2026, DOI 10.1016/j.fochx.2025.103469
   - scope：鳳凰単叢そのものの再焙火（refiring）を調べた実測。
   - limits：対象は再焙火であり、初回の焙煎とは条件が異なる。

傾向の limits／注記への追記文案：
「鐵観音・大紅袍・鳳凰単叢については素材そのものを対象にした焙煎研究も存在する。金萱・翠玉については近縁品種の研究からの適用である。」

## dose-water-balance（お茶分に原著を追加。tier は inferred のまま。スパイス分は現行維持）

追加出典：
1. ID案 `lin-2014-green-tea-dose` — Lin et al., Journal of Food Processing and Preservation 38(3):1234–1243, 2014, DOI 10.1111/jfpp.12084
   - scope：緑茶の茶葉濃度（2／6／10%）を比較し、濃度を上げると成分は増えるが官能スコアは下がることを示した実測。
   - limits：本研究の緑茶と濃度範囲での結果。
2. ID案 `cao-2022-tieguanyin-ratio` — Cao et al., npj Science of Food 6:25, 2022, DOI 10.1038/s41538-022-00141-7
   - scope：鉄観音の茶水比の最適化を調べ、最適な比率は飲み手の群によって異なることを示した実測。
   - limits：「最適値」は対象パネルと条件に依存し、単一の最適比を断定する根拠にはならない。

## extract-time-infusions（茶側に出典追加＋テキスト精密化。ハーブ側は現行維持）

追加出典：
1. ID案 `zhang-2020-dahongpao-infusions` — Zhang et al., Scientific Reports 10:945, 2020, DOI 10.1038/s41598-020-57623-5
   - scope：大紅袍の14煎にわたる官能と成分の変化を測定し、2煎目にピークがありその後減衰する形を示した実測。
   - limits：本研究の大紅袍試料での結果。
2. ID案 `li-2022-raw-puerh-infusions` — Li et al., Food Science（食品科学） 43(12):210–218, 2022, DOI 10.7506/spkx1002-6630-20210519-237
   - scope：生プーアルの複数回浸出を測定し、2煎目が最大となりその後は薄くなることを示した実測。
   - limits：本研究の生プーアル試料での結果。

傾向テキストへの追記文案（既存文の後に接続する形）：
「なお、大紅袍・生プーアルでは2煎目前後にピークがあり、その後弱まる形が原著で示されている。」

## roast-maillard（茶側に出典追加）

追加出典：
1. ID案 `mizukami-2008-hojicha-pyrazine` — Mizukami Y, Sawai Y, Yamaguchi Y, Journal of Agricultural and Food Chemistry 56:2154–2159, 2008, DOI 10.1021/jf0731806
   - scope：ほうじ茶の焙煎におけるピラジン類の生成を調べた基礎研究。
   - limits：本研究のほうじ茶試料と焙煎条件の範囲内。
2. ID案 `gotti-2021-green-tea-roasting` — Gotti et al., Applied Sciences 11:8217, 2021, DOI 10.3390/app11178217
   - scope：中国・日本産緑茶を160〜200℃で焙煎し、ピラジン5種が温度とともに増え、リナロールは高温で減少することを定量した実測。
   - limits：分析法の検証を含む研究であり、官能評価による裏付けは限定的。

## extract-temp-perception
変更しない（呈示温度だけを変える設計の置き換え候補が探索範囲で存在せず、抽出温度の研究への差し替えは記述と食い違うため）。
