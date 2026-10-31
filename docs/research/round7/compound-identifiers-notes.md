# 化合物同定子（CAS・化学式・PubChem CID）補完ノート

- 実施日: 2026-10-31
- 対象: `src/data/compounds.ts` / `compounds-expansion-tea.ts` / `compounds-expansion-cacao.ts` / `compounds-expansion-sh.ts` の全化合物 174 件
- 成果物: `compound-identifiers.json`（取得できた項目のみ収録。既存データに既にある値は含めていない）
- 取得元: PubChem PUG REST API（`https://pubchem.ncbi.nlm.nih.gov/rest/pug/...`）。一部ケースの照合に NIH Cactus Resolver と一般公開情報（Wikipedia・試薬メーカー）を併用。

## 結果サマリー

| 区分 | 件数 |
|---|---|
| 全化合物 | 174 |
| 同定子を提示した化合物 | 162 |
| 新規に CAS を補完 | 102 |
| 新規に化学式を補完 | 104 |
| PubChem CID を付与（新規フィールド） | 162 |
| 化合物群のため対象外 | 11 |
| 競合のため見送り | 1（procyanidin-c1） |
| CAS のみ取得できなかったもの | 2（theaflavin-digallate, cis-sabinene-hydrate） |

## 方法と検証手順

1. 既存 CAS がある化合物は、まず CAS 番号そのもので PubChem を検索し、同定を既存データ側の CAS にアンカーした。続いて名称検索の結果 CID と突き合わせ、食い違いがあれば個別調査した。
2. 既存 CAS がない化合物は nameEn（必要に応じてギリシャ文字の綴り出し、aliases）で検索した。
3. 取得した化学式は、既存化学式がある全件について照合した（不一致は 0 件）。
4. CAS は採用した CID の synonyms から CAS 形式（`\d+-\d{2}-\d`）のものを抽出した。候補が複数ある場合は原則として synonyms の先頭のものを採用し、全候補を本ノートに記録した（下表）。例外は個別判断の節に記載。
5. 名称検索の結果が複数 CID に及ぶ場合や、Title が nameEn と異なる場合は、IUPAC 名・SMILES・synonyms を確認してから採否を決めた。

## 化合物群のため見送ったもの（11件）

いずれも単一化合物ではなく群として定義されているレコードであり、代表化合物の同定子を当てると誤同定になるため、CAS・化学式・CID のいずれも提示しない。

- alkylpyrazines（アルキルピラジン類）
- strecker-aldehydes（ストレッカーアルデヒド類）
- catechins（カテキン類）
- theaflavins（テアフラビン類）※ 単一化合物の theaflavin は別レコードとして取得済み
- turmerones（ターメロン類）
- methoxybenzenes（メトキシベンゼン類）
- flavonol-glycosides（フラボノール配糖体群）
- gamma-glutamyl-peptides（γ-グルタミルペプチド群）
- diketopiperazines（2,5-ジケトピペラジン類）
- n-phenylpropenoyl-amino-acids（N-フェニルプロペノイルアミノ酸類）
- p-menthane-lactones（p-メンタンラクトン類）

## 競合のため見送ったもの（要・既存データ確認）

### procyanidin-c1（Procyanidin C1）— 既存 CAS の誤記の疑い

- 既存データの CAS `37064-31-6` で検索すると PubChem CID 11182062 が返るが、このレコードの Title は **Procyanidin C2** であり、synonyms の先頭も「Procyanidin C2」だった。
- 一方、名称「Procyanidin C1」で検索すると CID 169853（Title: Procyanidin C1、CAS 37064-30-5）が返る。
- すなわち既存データの CAS は PubChem 上では C2 の番号であり、C1 のレコードに付けると誤同定になる。CID・CAS のいずれの提示も見送った。統合工程で既存 CAS の出典（`procyanidin-c1` の sourceIds）を再確認し、必要なら既存データ側の CAS を 37064-30-5 に訂正したうえで CID 169853 を採用されたい。
- 参考: procyanidin-b2 は名称・CAS（29106-49-8）・CID 122738 が一致しており問題ない。

## CAS を取得できなかったもの（2件）

化学式と CID は取得できたが、採用 CID の synonyms に CAS 形式の番号が含まれていなかったため、CAS は提示しない（他データベースからの転記は行っていない）。

- theaflavin-digallate（Theaflavin-3,3'-digallate）: CID 21146795、化学式 C43H32O20
- cis-sabinene-hydrate: CID 11744854、化学式 C10H18O。名称検索で 4 件の CID が返ったが、Title が nameEn と完全一致した本レコードを採用した。

## 個別判断の記録（曖昧だったケース）

- **beta-ionone**: CAS アンカー検索（14901-07-6）→ CID 26955（立体未指定の β-イオノン。synonyms に既存 CAS を含む）を採用。名称検索では (E)-β-イオノン（CID 638014、CAS 79-77-6）が返るが、nameEn に (E) の指定がないため採用しなかった。
- **alpha-bisabolol**: 名称検索では立体未指定の α-ビサボロール（CID 10586）が返るが、既存 CAS 23089-26-1 はレボメノール（(−)-α-ビサボロール）の番号であり、CAS アンカー検索の CID 442343（Title: Levomenol）を採用した。名称と既存 CAS の指す立体が異なる点に留意。
- **alpha-pinene**: ギリシャ文字のままの名称検索では (1R,5S) 体の単一鏡像体レコード（CID 11240513、CAS なし）が返る罠があった。綴り出し「alpha-Pinene」および CAS 80-56-8 の検索で得られる (±) 体レコード CID 6654 を採用し、CAS は 80-56-8 とした（候補に 2437-95-8 もあり）。
- **gamma-hexalactone**: ギリシャ文字検索では **δ-ヘキサラクトン**（CID 13204、CAS 823-22-3）が返る誤同定の罠があった（環の大きさが異なる別化合物）。綴り出し検索と CAS 695-06-7 の双方で一致した CID 12756（5-ethyloxolan-2-one）を採用した。候補に 63357-95-9 もあり。
- **nerolidol**: nameEn が (E) 体を指定しているため、採用 CID 5284507（IUPAC 名で (6E) を確認）の CAS として、異性体混合物側の 7212-44-4 ではなく trans 体の 40716-66-3 を採用した。他候補 35944-21-9。
- **ecg（Epicatechin gallate）**: 候補 863-03-6（synonyms 先頭）と 1257-08-5 のうち、Wikipedia「Epicatechin gallate」および試薬メーカー各社が CID 107905 に対応する CAS として示す 1257-08-5 を採用した。863-03-6 は一部の業者サイトでのみ epicatechin（gallate でない）の CAS として現れる番号で、誤記の伝播と判断した。
- **piperitenone-oxide**: 名称検索では Rotundifolone（(1S,6S) 体、CID 442497、CAS 3564-96-3）が第一に返り、これを採用した。立体未指定のレコード（CID 61942、CAS 35178-55-3）も存在する。原著の文脈（アップルミント精油の主成分＝ロツンジホロン）とは整合するが、立体を問題にする場合は後者も検討されたい。
- **menthol**: 名称検索で 9 件の CID が返ったが、既存 CAS 89-78-1 を synonyms に含み Title が Menthol の CID 1254 を採用（CAS アンカーとも一致）。
- **shogaol-6**: 既存 CAS 555-66-2 は PubChem の名称インデックスに無く（CAS 検索は 404）、synonyms にも含まれなかった。名称検索で得た CID 5281794（Title: Shogaol、化学式は既存値と一致）を CID のみ提示する。既存 CAS の正否は本工程では変更していない（一般には [6]-ショウガオールの CAS として通用している番号）。
- **dihydroperillaldehyde**: その名では PubChem に無く、autocomplete の候補から「1,2-Dihydroperillaldehyde」（CID 527108）を同定した。シソ葉から同定された原著の化合物と同一とみられる。CAS は synonyms 先頭の 137886-38-5 を採用（他候補 22451-49-6、22451-50-9 は cis/trans 個別体の番号とみられる）。
- **theaflavin-3p-gallate**: ハイフン＋アポストロフィ表記「Theaflavin-3'-gallate」では検索できず、空白表記「Theaflavin 3'-gallate」で CID 135458102（CAS 28543-07-9、化学式 C36H28O16）を取得した。3 位ガレート（theaflavin-3-gallate、CID 169167）とは別レコードであることを確認済み。
- **hydroxy-alpha-sanshool**: 名称検索で (2E,6Z,8E,10Z) の系統名レコード CID 46870578 を取得。CAS 候補は 252193-26-3 のみ。
- **coumaroylquinic-acid**: 採用 CID 5281766 の Title が「Npc200561」（カタログ名）だったが、synonyms に「4-O-p-Coumaroylquinic acid」が含まれており同一化合物と確認した。
- **cis-jasmone**: 採用 CID 1549018 の Title は「Jasmone」だが、CAS 488-10-8 は cis 体の番号であり名称検索も cis-Jasmone で一致したため採用した。
- **pulegone / rotundone / sedanenolide**: 名称検索の第一結果がそれぞれ (+)-Pulegone（CAS 89-82-7）、(-)-Rotundone（18374-76-0）、(S)-Sedanenolide（63038-10-8）の天然型レコードだった。nameEn に立体の指定はないが、天然物の文脈ではこれらが標準形であるため採用した。立体未指定レコードへの差し替えが必要かは統合工程で判断されたい。
- **z-ligustilide**: 採用 CID 5319022 の Title は「Ligustilide」。CAS 4431-01-0 は (Z) 体として一般に引用される番号であり、名称検索も (Z)-Ligustilide で一致したため採用した（他候補 81944-09-4）。

## 重複レコードの指摘（統合工程への申し送り）

以下のペアは名称が異なるだけで同一化合物（同一 CID）に帰着した。データ重複の可能性があるため、統合・整理の検討を勧める（本工程では両レコードに同じ同定子を提示した）。

| ペア | CID | 備考 |
|---|---|---|
| ec / epicatechin | 72276 | 「Epicatechin」と「(−)-Epicatechin」。ec 側の CAS も 490-46-0 で epicatechin と同一 |
| 3-methylbutanoic-acid / methylbutyric-acid-3 | 10430 | イソ吉草酸。「3-Methylbutanoic acid」と「3-Methylbutyric acid」は同義名 |
| sotolon / sotolone | 62835 | 「Sotolon」と綴り揺れ「Sotolone」 |
| ez-2-6-nonadienal / e-2-6-nonadienal | 643731 | 「(E,Z)-2,6-Nonadienal」と「(2E,6Z)-Nona-2,6-dienal」は同一の幾何指定 |

## CAS 候補が複数あった化合物（新規に CAS を採用したもの）

原則として synonyms 先頭の候補を採用した。例外（nerolidol、ecg、alpha-pinene、gamma-hexalactone）は上記「個別判断の記録」参照。全候補をここに記録する。

| compound id | 採用 CAS | 候補（全件） |
|---|---|---|
| indole | 120-72-9 | 120-72-9, 82451-55-6 |
| nerolidol | 40716-66-3 | 7212-44-4, 40716-66-3, 35944-21-9 |
| methyl-salicylate | 119-36-8 | 119-36-8, 90045-28-6, 8024-54-2, 302912-49-8, 9041-28-5 |
| 2-phenylethanol | 60-12-8 | 60-12-8, 1321-27-3, 19601-20-8 |
| coumarin | 91-64-5 | 91-64-5, 103802-83-1 |
| furaneol | 3658-77-3 | 3658-77-3, 192466-95-8 |
| cedrol | 77-53-2 | 77-53-2, 22567-44-8 |
| ee-2-4-heptadienal | 5910-85-0 | 5910-85-0, 4313-03-5 |
| gamma-hexalactone | 695-06-7 | 695-06-7, 63357-95-9 |
| guaiacol | 90-05-1 | 90-05-1, 9009-62-5, 26247-00-7 |
| octanal | 124-13-0 | 124-13-0, 9006-52-4, 27457-18-7 |
| e-2-octenal | 2548-87-0 | 2548-87-0, 2363-89-5, 25447-69-2 |
| egcg | 989-51-5 | 989-51-5, 2041570-28-7 |
| ecg | 1257-08-5 | 863-03-6, 1257-08-5 |
| egc | 970-74-1 | 970-74-1, 124107-38-6, 188819-07-0 |
| ec | 490-46-0 | 490-46-0, 7295-85-4 |
| coumaroylquinic-acid | 53539-37-0 | 53539-37-0, 1108200-72-1, 93451-44-6 |
| succinic-acid | 110-15-6 | 110-15-6, 26776-24-9 |
| gallic-acid | 149-91-7 | 149-91-7, 137657-43-3, 31387-49-2 |
| massoia-lactone | 51154-96-2 | 51154-96-2, 54814-64-1 |
| citric-acid | 77-92-9 | 77-92-9, 79586-22-4, 141633-96-7, 134367-01-4 |
| malic-acid | 6915-15-7 | 6915-15-7, 617-48-1 |
| lactic-acid | 50-21-5 | 50-21-5, 598-82-3, 163894-00-6, 849585-22-4, 1715-99-7, 152-36-3, 31587-11-8 |
| sucrose | 57-50-1 | 57-50-1, 92004-84-7, 8027-47-2, 8030-20-4, 85456-51-5, 86101-30-6, 87430-66-8 |
| alpha-pinene | 80-56-8 | 80-56-8, 2437-95-8 |
| beta-pinene | 127-91-3 | 127-91-3, 177698-19-0 |
| myrcene | 123-35-3 | 123-35-3, 1312442-38-8, 29463-45-4 |
| p-cymene | 99-87-6 | 99-87-6, 4939-75-7 |
| methylbutanal-2 | 96-17-3 | 96-17-3, 57456-98-1 |
| methylbutanal-3 | 590-86-3 | 590-86-3, 26140-47-6 |
| methylbutyric-acid-3 | 503-74-2 | 503-74-2, 92634-50-9, 35915-22-1 |
| fenchone | 1195-79-5 | 1195-79-5, 126-21-6 |
| anisaldehyde | 123-11-5 | 123-11-5, 50984-52-6, 68894-36-0 |
| trans-4-5-epoxy-e-2-decenal | 134454-31-2 | 134454-31-2, 188590-62-7 |
| borneol | 507-70-0 | 507-70-0, 10385-78-1, 6627-72-1 |
| pentylfuran-2 | 3777-69-3 | 3777-69-3, 64079-01-2 |
| carene-3 | 13466-78-9 | 13466-78-9, 74806-04-5 |
| z-ligustilide | 4431-01-0 | 4431-01-0, 81944-09-4 |
| pinocamphone | 547-60-4 | 547-60-4, 22339-21-5 |
| isopinocamphone | 14575-93-0 | 14575-93-0, 15358-88-0 |
| dihydroperillaldehyde | 137886-38-5 | 137886-38-5, 22451-49-6, 22451-50-9 |
| citronellol | 106-22-9 | 106-22-9, 26489-01-0 |
| methyl-cinnamate | 103-26-4 | 103-26-4, 1754-62-7 |
| geranyl-acetate | 105-87-3 | 105-87-3, 68311-13-7, 8022-83-1, 33843-18-4 |

## types.ts への提案（統合工程向け）

`Compound` 型に PubChem CID 用の任意フィールドの追加を提案する。既存の `cas` / `formula` と同じ任意項目のパターンに揃える。

```ts
export interface Compound {
  id: string
  nameJa: string
  nameEn: string
  aliases: string[]
  cas?: string
  formula?: string
  /** PubChem Compound ID（CID）。化合物群など単一化合物でないレコードには付けない */
  pubchemCid?: number
  // ...以下既存フィールド
}
```

補足:
- CID は数値型（number）で保持するのが PubChem の公式表記に合う。
- 将来的に表示側でリンク化する場合は `https://pubchem.ncbi.nlm.nih.gov/compound/<CID>` が公式 URL 形式。
- 化合物群 11 件と procyanidin-c1（競合解決まで）には CID を付けないこと。
