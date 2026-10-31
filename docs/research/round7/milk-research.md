# Round 7 文献調査：ミルク（牛乳・生クリーム）追加のための根拠整理

調査日：2026-10-31
目的：新ドメイン「乳製品」の素材（牛乳／生クリーム）と「ミルクを加える」操作に伴う相互作用ルールの投入根拠を、創作なし・一次情報優先で整理する。
方針：化合物・効果は実在の査読文献で裏付けたものだけを提案する。裏付けが取れなかった項目は「確認できず」と明記する。未査読・Web情報は「参考情報」として分離し、実測の根拠には使わない。

---

## 0. 結論サマリー

| 項目 | 結論 |
|---|---|
| 牛乳の素材化 | **可能**。組成（公的成分表）・揮発性成分（AEDA／GC-MS 原著）・味覚の根拠が揃う |
| 生クリームの素材化 | **可能**。牛乳とは脂肪含量が桁違いで、クリーム自体を対象にした AEDA 原著（Schlutt et al. 2007）が存在し、香味を区別して記述できる |
| 相互作用ルール提案 | **6本**（うち直接研究あり3本、一般機構2本、探索的1本） |
| 出典（正式リスト） | **新規25件**（原著20／総説3／書籍章1／公的データベース1）。既存の Qie 2021 はアプリ収録済みのため再掲のみ |
| 確認できなかった項目 | チャイの牛乳煮出しに関する査読研究（直接検証）、チョコレート飲用形態での官能研究、等（§7） |

---

## 1. 牛乳の香味プロファイル

### 1.1 組成（味覚・口腔感覚の土台）

日本食品標準成分表の「普通牛乳」（食品番号13003）の公表値（100 g当たり）：水分 87.4 g、たんぱく質 3.3 g、脂質 3.8 g、炭水化物 4.8 g。糖の内訳では乳糖が 4.4 g を占める（同成分表の糖類表）。たんぱく質の約8割はカゼイン（Hasni et al. 2011 ほか乳タンパク研究の前提として確立）。

- 甘味：乳糖は牛乳の実質唯一の糖だが、甘味の弱い糖であり、牛乳の甘味は「ほのか」な水準に留まるのが一般的知見。→ 感覚提案は **sweet = weak / general** が妥当（§1.4）。
- 脂肪感・コク：脂質 3.8% の脂肪球が口腔内のコーティング感・まろやかさの基盤になることは乳製品科学の一般知見。ただしアプリの SensationKey には脂肪感に相当するキーが無いため、**感覚エントリには入れず、素材の description／scopeNote に文章で記す**設計を提案する（§6）。

### 1.2 揮発性成分と重要化合物

牛乳の香りは「多数の化合物がごく低濃度でバランスした、繊細で弱い香り」と総説で整理されている（Cadwallader & Singh 2009；Bendall 2001）。飼料由来成分が移行するため、生乳の香気組成は給餌条件で変動する（Bendall 2001 が飼料別に71成分を同定）。

| 化合物 | 牛乳での位置づけ | 根拠 | アプリ既存ID |
|---|---|---|---|
| δ-デカラクトン | 乳脂肪由来ラクトンの代表。加糖練乳では主要な寄与成分と同定（Shimoda et al. 2001、Cadwallader & Singh 2009 経由で整理）。生乳・殺菌乳でも検出される | 原著・総説 | `delta-decalactone`（既存） |
| ジアセチル（2,3-ブタンジオン） | **注意**：発酵乳製品では重要だが、未発酵の牛乳での濃度・寄与については文献間で見解が分かれる（閾値以下とする報告と有意量の検出報告が併存。Cadwallader & Singh 2009 の整理）。→ 牛乳では **検出（detection）止まり**とし、寄与（contribution）とは主張しない | 総説 | `diacetyl`（既存） |
| ジメチルスルフィド | 生乳・殺菌乳・UHT乳を通じ主要な含硫揮発成分の一つ。Lan et al. 2025 が主要香味化合物として挙げる。加熱乳の「加熱臭」方向にも関与 | 原著 | `dimethyl-sulfide`（既存。ただし現行の noteIds は煎茶文脈の `seaweed` のみ。乳文脈のノート対応は別途検討事項として記録する） |
| 2-ヘプタノン等のメチルケトン類 | 加熱で増加。日本食品科学工学会誌の AEDA 研究（1999）で、加熱段階が上がるほど 2-ペンタノン／2-ヘプタノン／2-ノナノン／2-ウンデカノンが有意に増加。Lan et al. 2025 でも UHT でケトン類が大量生成 | 原著 | **新規提案** `2-heptanone` |
| ノナナール、ヘキサナール | 脂質酸化由来のアルデヒド。生乳・殺菌乳で検出（Lan et al. 2025）。ヘキサナールは酸化オフフレーバーの指標方向であり、プロファイルの「香り」として前面に出す性格のものではない | 原著 | `nonanal`／`hexanal`（既存） |
| メチオナール、ピラジン類、バニリン | 加熱で顕在化する成分群。AEDA 研究（1999）で加熱により FD が上がった成分としてメチオナール、2,6-ジメチルピラジン等、バニリン（HTST乳で potent）を報告 | 原著 | `methional`／`vanillin`（既存） |
| 脂肪酸類（ヘキサン酸・オクタン酸・デカン酸） | 全ての乳で多量に検出された（AEDA 研究 1999、総香気濃度の8–24%）。ただし遊離脂肪酸の過剰は酸化・ランシッド方向のオフフレーバーでもあるため、リンクは検出に留めるのが安全 | 原著 | （既存に相当IDなし。今回はリンク提案に含めない） |
| 乳糖 | 不揮発性の味成分。組成として含有し、弱い甘味の基盤 | 成分表 | **新規提案** `lactose`（volatile: false、kind: composition でリンク） |

加熱処理の影響（素材の processing／scopeNote に反映すべき知見）：
- 殺菌（HTST）は生乳の酸化由来オフフレーバー（ヘキサナール等）を抑える方向、UHT は脂質酸化を進めケトン類を増やす方向（Lan et al. 2025、工場ライン実試料の比較）。
- UHT 乳では Czerny & Schieberle（2007、Cadwallader & Singh 2009 が表として整理）が生乳・殺菌乳とは異なる香気成
...[truncated 22761 chars]分セットを報告している（二次引用のため、本調査では原典未確認として扱う）。

### 1.3 香りプロファイル提案（既存ノートへの対応づけ）

既存ノート（`src/data/flavors.ts`）のうち乳系は `milk-note`（ミルキー）／`cream-note`（クリーミー）の2つで足り、新規ノートは不要。

| noteId | intensity | tier | 根拠 |
|---|---|---|---|
| `milk-note` | moderate | general | 乳脂肪由来ラクトン類を中心とする乳香は牛乳の基調（Bendall 2001／Cadwallader & Singh 2009）。ただし牛乳の香り自体は繊細で弱いため strong にはしない |
| `cream-note` | weak | general | 脂肪 3.8% ではクリーミーさの基盤はあるが弱い。生クリーム（§2）との対比で weak に置く |

### 1.4 味覚・口腔感覚の提案

| SensationKey | intensity | tier | 根拠 |
|---|---|---|---|
| sweet | weak | general | 乳糖 4.4–4.7 g/100g（成分表）。甘味の弱い糖であり強い甘味にはならない |
| （その他） | — | — | 苦味・酸味・うま味・渋味を主張する根拠なし。脂肪感・コクは SensationKey に対応キーがないため description に文章で記す（§6） |

### 1.5 素材定義案（牛乳）

```
id: 'milk-cow', domain: 'dairy'（新設）
nameJa: '牛乳', nameEn: "Cow's milk", scientificName: 'Bos taurus（乳）'
classification: '牛乳（液状乳）', classificationId: 'liquid-milk'（新規。チョコ軸の 'milk' と衝突するため流用禁止）
origin: '複数産地・産地一般', originId: 'multi-origin'（既存ID流用）
variety: 'ウシ（乳用種一般）', varietyId: 'bos-taurus'（新規）
processing: '殺菌（HTST／UHT）'
profile: [milk-note moderate/general, cream-note weak/general]
sensations: { sweet: weak/general }
evidenceTier: 'general'
scopeNote: 市販の殺菌乳を対象とする。生乳は飼料由来成分で香気が変動し（Bendall 2001）、UHT ではメチルケトン類・ピラジン類が増えるなど加熱条件で香味が変わるため、本プロファイルは殺菌乳一般の整理であり個別製品の実測ではない。
roastable: false, extractable: false
```

---

## 2. 生クリームの素材化可否

### 2.1 牛乳と区別できるか — **できる**

1. **組成の桁違い**：Schlutt et al. 2007 の試料は殺菌クリーム（脂肪30%）。牛乳の脂質 3.8% とは約8倍で、香味の担い手である乳脂肪画分の量が質的に異なる水準にある。
2. **クリーム自体の AEDA 原著がある**：Schlutt, Moran, Schieberle & Hofmann (2007, J Agric Food Chem) が脂肪30%クリームの香気活性成分34種を同定。FD因子が突出して高かったのは **δ-デカラクトン、(Z)-6-ドデセノ-γ-ラクトン、γ-ドデカラクトン、δ-ドデカラクトン**、3-メチルインドール。さらに半揮発性画分から δ-テトラデカラクトン等の長鎖ラクトン類を同定し、**δ-テトラデカラクトンは閾値（66 µmol/kg）を超えて添加するとクリームの鼻腔後方クリーミー感を増強する**ことを添加試験で示した。γ-/δ-オクタデカラクトン等は口腔内での乳脂肪の融解挙動に影響し得ることも示唆された。
3. **分配挙動が別々に実測されている**：Meynier et al. 2003 が脱脂乳／無水乳脂肪／全脂クリームを別媒体として分配係数を実測し、クリームは単独の媒体として振る舞う（単純な混合計算と実測がずれる化合物がある）ことを示した。

注意：日本国内の生クリームの規格値（乳脂肪分）の一次資料確認は本調査ではできなかった（§7）。素材の processing 欄では数値を断定せず「クリーム分離・殺菌」とする。

### 2.2 プロファイル・素材定義案（生クリーム）

| noteId | intensity | tier | 根拠 |
|---|---|---|---|
| `cream-note` | moderate | general | クリームのクリーミー感に寄与するラクトン群が AEDA＋添加試験で示されている（Schlutt 2007）。個別素材としての一般化のため general に置く |
| `milk-note` | moderate | general | 乳香の基調は牛乳と共通 |

sensations: sweet = weak / general（乳糖は含むが脂肪に希釈され弱い）。

```
id: 'cream-fresh', domain: 'dairy'
nameJa: '生クリーム', nameEn: 'Fresh cream'
classification: 'クリーム', classificationId: 'cream'（新規）
origin: '複数産地・産地一般', originId: 'multi-origin'
variety: 'ウシ（乳用種一般）', varietyId: 'bos-taurus'
processing: 'クリーム分離・殺菌'
evidenceTier: 'general'
scopeNote: 乳脂肪を濃縮した画分。香味の根拠は脂肪30%の殺菌クリームでの AEDA 研究（Schlutt et al. 2007）が中心。植物油脂混合品（いわゆるコンパウンドクリーム）は対象外。
roastable: false, extractable: false
```

### 2.3 化合物リンク提案（MaterialCompoundLink）

凡例：kind は detection（検出）／contribution（官能的寄与）／composition（組成含有）を区別する。tier はアプリの定義（measured＝対象試料種で直接測定）に従う。

**牛乳（milk-cow）**

| compoundId | kind | tier | 条件・根拠 |
|---|---|---|---|
| `delta-decalactone` | detection | general | 乳脂肪由来ラクトンとして牛乳に存在（Bendall 2001／Cadwallader & Singh 2009）。流動乳での寄与の直接検証は弱いため detection |
| `diacetyl` | detection | general | 未発酵乳での寄与は文献間で不一致（§1.2）。寄与とは主張しない |
| `dimethyl-sulfide` | detection | general | 生乳〜UHT乳の主要揮発成分の一つ（Lan et al. 2025） |
| `2-heptanone`（新規） | detection | general | 加熱で増加するメチルケトン（J-STAGE AEDA 1999／Lan et al. 2025） |
| `nonanal` | detection | general | 脂質酸化由来（Lan et al. 2025） |
| `lactose`（新規） | composition | general | 4.4–4.7 g/100g（成分表）。弱い甘味の基盤 |

**生クリーム（cream-fresh）** — Schlutt 2007 がクリーム自体を測定しているため contribution／measured を提案できる

| compoundId | kind | tier | 根拠 |
|---|---|---|---|
| `delta-decalactone` | contribution | measured | AEDA で最高水準の FD（Schlutt 2007、脂肪30%殺菌クリーム） |
| `delta-dodecalactone`（新規） | contribution | measured | 同上 |
| `gamma-dodecalactone`（新規） | contribution | measured | 同上 |
| `z6-dodeceno-gamma-lactone`（新規） | contribution | measured | (Z)-6-ドデセノ-γ-ラクトン。同上 |
| `delta-tetradecalactone`（新規） | contribution | measured | 半揮発性画分から同定され、閾値超の添加でクリーミー感を増強（Schlutt 2007） |
| `lactose`（新規） | composition | general | 組成として含有 |

新規化合物の sensoryKnowledge は Schlutt 2007 の記述（ラクトン類＝クリーミー／ココナッツ様の甘い香り）に限定して書くこと。CAS・化学式は本調査で未確認のため空欄で投入し、後続調査に回す。

---

## 3. 相互作用の知見

### 3.1 ミルク × お茶

#### (a) 結合の実在（分子レベル）
- Hasni et al. 2011（Food Chemistry）：α-/β-カゼインとカテキン類（C／EC／EGC／EGCG）の結合を分光法＋モデリングで実測。親水性・疎水性相互作用の双方で結合し、結合定数は EGCG で最大（β-カゼインで 1.59×10⁴ M⁻¹）。結合でカゼインの二次構造が変化した。
- Ye et al. 2013（Food Research International）：緑茶・紅茶ポリフェノールと全乳の相互作用を検討。
- 既存収録の Qie et al. 2021：ミルクティーモデル系でカテキン×乳タンパク×消化酵素の競合を実測。タンパク種で方向が分かれた。

#### (b) 渋味・苦味の低減（官能レベル）— 直接研究あり
- **ミルクサイエンス誌の原著（2010）**：カテキン溶液に全乳／9%スキムミルク／3.8%クリームを等量混合すると、**ラクトース以外の全区で渋味が46–58%（英文要旨では58–65%と表記）減少**。スキムミルク区では遊離カテキンが約95%減少（HPLC）。同モル濃度では β-カゼインが遊離カテキン減少に最も寄与。→ 「乳成分（主にタンパク質画分）が遊離カテキンを減らし、渋味を知覚レベルで抑える」ことはモデル系ながら官能評価＋機器測定の両面で裏付けがある。
- 苦味についても、総説（Piyasena 2025）ではタンパク–ポリフェノール複合体が苦味・渋味物質と口腔粘膜・味覚受容体の接触を減らす機構が整理されている（原著の直接検証は渋味ほど厚くないため、ルール文面では渋味を主、苦味は補助に留める）。

#### (c) カテキンの挙動（吸収・抗酸化）— **肯定・否定が併存し、条件で結論が分かれる**
| 方向 | 研究 | 条件・内容 |
|---|---|---|
| 否定（打ち消し） | Serafini et al. 1996 | ヒト。緑茶・紅茶300 mL＋全乳100 mL で、茶単独で見られた血漿抗酸化能（TRAP）の上昇が消失。in vitro の抗酸化能自体は乳で変わらなかった |
| 否定（打ち消し） | Lorenz et al. 2007 | ヒト16名。紅茶500 mL＋脱脂乳10% で、紅茶の血管内皮機能（FMD）改善効果が完全に消失。個別タンパク試験でカゼイン類が原因画分と特定 |
| 中立（変化なし） | Leenen et al. 2000 | ヒト21名。緑茶・紅茶＋乳10–15% で血漿抗酸化能・カテキン応答に有意な変化なし |
| 中立（変化なし） | Reddy et al. 2005 | ヒト（成人男性）。紅茶＋乳で血漿カテキンの AUC は下がったが、血漿抗酸化能・酸化抵抗性・TBARS への有益効果は損なわれなかった |
| 肯定（向上） | Xie et al. 2013 | in vitro 消化／Caco-2 モデル。乳10%・25% 添加で消化後のカテキンの腸管透過性・細胞内回収が向上（ガレート型カテキンは乳タンパクに結合）。ヒト試験ではない |
| 整理 | Rashidinejad et al. 2017／Piyasena 2025（総説） | 茶の種類、乳の種類と量、調製法、測定法の違いが結論の不一致を説明し得る、と両総説とも整理 |

→ ルール文面では「結合は実在するが、生理的帰結は条件依存で未確定」とし、どちらか一方に寄せないことが必須。

### 3.2 ミルク × スパイス × お茶（チャイ）

- 調理慣行としては、紅茶・スパイス・牛乳・糖を一緒に煮出す製法が確立している（参考情報 §5）。全脂乳の脂肪がスパイスの脂溶性香気成分を取り込む、という説明は料理情報では定説的に語られる。
- しかし **「牛乳で煮出すことでスパイス香気成分の抽出・分配がどう変わるか」を直接検証した査読研究は、本調査では確認できなかった**（§7）。裏付けとして使える査読知見は次の2つに分解される：
  1. 乳脂肪が疎水性香気成分を保持し放出を抑える一般機構（Meynier et al. 2003、§3.4）— チャイの香気成分への適用は推論。
  2. スパイス入り紅茶の受容性：Ochanda & Wanyoko 2015（J Food Research）が、ティーマサラ（生姜・シナモン・カルダモン・クローブ・黒胡椒・ナツメグ）等のスパイス添加で紅茶の消費者嗜好が有意に上がり、抗酸化活性はスパイス量とともに下がったことを報告。ただし乳の有無を変数にした研究ではなく、掲載誌の指標も限定的なため補助的根拠に留める。
- 辛味との関係は §3.5（カプサイシン×乳）がチャイの辛味緩和の実質的な根拠になる。

### 3.3 ミルク × チョコレート

ミルクチョコレート（製品）とは別に、「ダークチョコレート／ココア＋牛乳」の組み合わせ自体を対象にしたヒト研究が存在する。対象は官能ではなく摂取後の生理指標である点に注意。

| 方向 | 研究 | 内容 |
|---|---|---|
| 否定 | Serafini et al. 2003（Nature） | ダークチョコレート摂取で血漿抗酸化能とエピカテキンが上昇したが、ミルクチョコレート、またはダークチョコレート＋牛乳200 mL 同時摂取では上昇が見られなかった |
| 批判・反論 | Schroeter et al. 2003（Nature 通信）／Serafini & Crozier 2003（同・回答） | 測定法（血漿 TAC の解釈）をめぐる論争が同誌上で行われた。結論は確定していない |
| 中立 | Roura et al. 2007 | ヒト21名。ココアパウダーを全乳250 mL に溶いた飲料と水に溶いた飲料で、(−)-エピカテキン代謝物の血漿濃度に有意差なし（p=0.076） |

→ ダークチョコレートに牛乳素材を加えた場合のルールとして、両論併記で投入可能。官能（味の調和そのもの）に関する直接研究は確認できなかった。

### 3.4 乳脂肪と香気成分の保持・放出（一般食品科学）

- Meynier et al. 2003（Le Lait）：香気5成分の空気／媒体間分配係数を30–80°Cで実測。**無水乳脂肪上では疎水性香気成分の揮発性が劇的に低下**（脂肪への保持）。脱脂乳でも trans-2-ヘキセナールは約90%保持され（タンパク質との共有結合的相互作用が示唆）、エステル類は疎水性相互作用で6–40%保持。全脂クリームの分配は脱脂乳と乳脂肪の中間だが化合物により単純計算からずれる。
- 含意：牛乳・クリームを加えると、相手素材の脂溶性香気成分（スパイスのテルペン類、カカオの香気成分等）は脂肪相に分配されて放出が穏やかになり、香りの立ち上がりが弱まる一方で持続する方向に働き得る。これは一般機構であり、個別ペアリングでの実測ではない。

### 3.5 辛味（カプサイシン）× 乳

| 研究 | 内容 |
|---|---|
| Nasrawi & Pangborn 1990 | カプサイシン溶液後の口内灼熱感は洗口で有意に低下。冷たい溶液（5°C）が20°Cより有効。全乳（5°C）と10%ショ糖液（20°C）が同等に有効。脂肪0%と10%の加糖乳では軽減度に差がなかった |
| Nolden, Lenart & Hayes 2019 | 飲料7種の比較で全乳・脱脂乳・フルーツパンチが最大の軽減。**全乳と脱脂乳に差がなく、脂肪よりタンパク質の関与が示唆**された |
| Gaiser & Hayes 2023 | 脂肪・タンパク質を変えた乳類・植物乳の比較。高タンパクの限外濾過全乳が最も有効。タンパク質の濃度依存的な寄与を示唆 |
| Gøkhan et al. 2023（否定的結果） | 二重盲検クロスオーバー（n=24）。3.5%カゼイン／3.5%ホエイ／3.5%ラクトース／脱脂乳の洗口間で不快感・灼熱感に有意差なし（P≥0.070）。カゼイン vs ラクトースの探索的比較でのみ短期的な軽減 |

→ 「牛乳がカプサイシンの灼熱感を和らげる」こと自体は複数研究で支持されるが、機構（脂肪への分配／タンパク質結合／温度／甘味）は単一ではなく、タンパク質溶液単独では robust な効果が出なかった報告もある。ルール文面はこの留保を含めること。

### 3.6 相互作用ルール提案（全6本）

既存ルール `milk-protein-catechin`（Qie 2021、trigger: compoundId 'catechins' × domain 'chocolate'）は、新ドメイン追加に合わせて **R2 に統合・置換**することを提案する（ミルク／ホワイトチョコレートの乳成分でも同様の相互作用が起こり得る旨は、R2 の文面末尾に「探索的な含み」として残す）。

| # | id 案 | kind | trigger 案 | level | directStudy | 根拠出典 |
|---|---|---|---|---|---|---|
| R1 | `milk-tea-astringency-suppression` | taste | domains: ['tea','dairy'] | general | **true** | milk-science-2010, hasni-2011, ye-2013 |
| R2 | `milk-tea-catechin-fate` | taste | domains: ['tea','dairy'] | general | **true** | lorenz-2007, serafini-1996, leenen-2000, reddy-2005, xie-2013, qie-2021（既存）, rashidinejad-2017, piyasena-2025 |
| R3 | `milk-chocolate-flavanol` | taste | domains: ['chocolate','dairy'] | general | **true** | serafini-2003, schroeter-2003, roura-2007 |
| R4 | `milk-pungency-relief` | mouthfeel | domains: ['dairy'] ＋ sensation: 'pungent', minIntensity: 'moderate' | general | false | nasrawi-1990, nolden-2019, gaiser-2023, gokhan-2023 |
| R5 | `milk-fat-aroma-retention` | aroma | domains: ['dairy'] | general | false | meynier-2003, schlutt-2007 |
| R6 | `chai-milk-decoction` | aroma | domains: ['tea','spice','dairy'] | exploratory | false | ochanda-2015（補助）＋ §5 参考情報 |

文面案（アプリの文体に合わせ、断定を避けた形）：
- R1：「乳の成分（主にカゼイン等のタンパク質画分）は茶のカテキンと結合して遊離カテキンを減らし、渋味を抑えることが、カテキン溶液と乳成分のモデル系で官能評価と HPLC 測定の両面から示されています。実際の茶浸出液での程度は、茶の濃度や乳の量で変わります。」
- R2：「乳タンパク質と茶カテキンの結合自体は実測されていますが、それがカテキンの吸収や生理作用にどう帰結するかは研究により結論が分かれます。血管機能や血漿抗酸化能の茶の効果が乳で消失した報告がある一方、変化がなかったとする報告や、in vitro 消化モデルで吸収がむしろ高まった報告もあります。茶の種類・乳の量と種類・測定法が条件となります。ミルクチョコレートやホワイトチョコレートの乳成分でも結合自体は起こり得ますが、そちらは直接の検証ではない探索的な含みです。」
- R3：「ダークチョコレートと牛乳を一緒に摂ると、チョコレート単独で見られた血漿抗酸化能やエピカテキンの上昇が見られなかったという報告があります。一方、ココア飲料を牛乳で作った研究ではエピカテキン代謝物の血中濃度に有意差はなく、測定法をめぐる論争も続いています。味の調和そのものを測った研究ではなく、摂取後の生理指標の知見です。」
- R4：「牛乳はカプサイシンの口内の灼熱感を和らげることが複数の官能研究で示されています。ただし全乳と脱脂乳で差がなかった報告もあり、理由は脂肪への分配だけではなく、タンパク質との結合、温度（冷たい方が有効）、甘味など複数の要因が関係すると考えられています。タンパク質溶液だけでは明確な効果が出なかった研究もあります。」
- R5：「乳脂肪は疎水性の香気成分を取り込んで保持し、空気中への放出を抑えることが分配係数の実測で示されています。牛乳やクリームを加えると、脂溶性の香気成分（スパイスの香りなど）の立ち上がりが穏やかになり、持続する方向に働く可能性があります。これは乳媒体での一般機構で、個別の組み合わせの実測ではありません。」
- R6：「チャイのように紅茶・スパイス・牛乳を一緒に煮出す調理法では、水だけで抽出する場合と香味のバランスが変わり得ます。ただし、牛乳で煮出すこと自体の効果を直接検証した査読研究は確認できておらず、この説明は調理慣行と、乳脂肪が脂溶性香気成分を保持するという一般機構からの探索的な予測です。」

「ミルクを加える」ボタン実装時の注意：R1・R2 はお茶を含む組み合わせに乳を足したとき、R3 はチョコレートを含む組み合わせに乳を足したときに発火するのが自然。R4・R5 は乳が組み合わせに含まれれば（ボタン経由でも素材選択でも）発火してよい。R6 は3ドメインが揃ったときのみ。

---

## 4. 出典リスト（Source 型投入形式）

新規25件。verified は本調査での確認度（full＝原著の内容まで確認／abstract＝要旨まで／bibliographic＝書誌のみ）。

```ts
{ id: 'bendall-2001-fresh-milk-aroma', kind: 'original',
  title: 'Aroma compounds of fresh milk from New Zealand cows fed different diets',
  authors: 'Bendall JG', year: 2001, journal: 'Journal of Agricultural and Food Chemistry 49(10):4825–4832',
  doi: '10.1021/jf010334n', url: 'https://doi.org/10.1021/jf010334n',
  scope: 'ニュージーランド産生乳の香気成分71種を同定し、飼料の影響を検討した原著。生乳の香気組成と、その変動要因の根拠。',
  limits: '生乳が対象で、市販殺菌乳そのもののプロファイルではない。飼料条件はニュージーランドの放牧条件。',
  verified: 'abstract' },
{ id: 'cadwallader-singh-2009-milk-flavours', kind: 'book',
  title: 'Flavours and Off-Flavours in Milk and Dairy Products',
  authors: 'Cadwallader KR, Singh TK', year: 2009,
  url: 'https://www.researchgate.net/publication/227031401_Flavours_and_Off-Flavours_in_Milk_and_Dairy_Products',
  scope: '乳・乳製品の香味とオフフレーバーの総説章。新鮮乳・殺菌乳・UHT乳の主要香気成分表（Czerny & Schieberle 2007 の整理を含む）と「牛乳の香りは繊細で弱い」という位置づけ、未発酵乳におけるジアセチル寄与の見解不一致の整理に用いる。',
  limits: '収録書名・版情報は本調査で未確認。Czerny & Schieberle 2007 は本章経由の二次引用であり原典未確認。',
  verified: 'bibliographic' },
{ id: 'lan-2025-milk-flavor-processing', kind: 'original',
  title: 'Exploration of milk flavor: From the perspective of raw milk, pasteurized milk, and UHT milk',
  authors: 'Lan L, et al.', year: 2025, journal: 'Food Chemistry: X 25:102083',
  url: 'https://rcastoragev2.blob.core.windows.net/5a1297a89b668f41669da0a396870345/main.PMC11719328.pdf',
  scope: '同一工場ラインの生乳・殺菌乳・UHT乳を E-nose と GC-MS で比較した原著。殺菌は酸化由来成分を抑え、UHT はケトン類を増やす方向であること、主要香味化合物（2-ヘプタノン、ヘキサナール、ノナナール、3-メチルブタナール、ジメチルスルフィド）の根拠。',
  limits: '単一工場・3牧場の試料。著者の完全な一覧は未確認（筆頭著者 Lan L のみ確認）。',
  verified: 'abstract' },
{ id: 'jstage-1999-milk-aroma-aeda', kind: 'original',
  title: 'Evaluation of Aroma of Pasteurized and UHT Processed Milk by Aroma Extract Dilution Analysis',
  authors: '（著者名は本調査で未確認）', year: 1999, journal: '日本食品科学工学会誌 46(9):587–596',
  url: 'https://www.jstage.jst.go.jp/article/nskkk1995/46/9/46_9_587/_article/-char/en',
  scope: '生乳・LTLT・HTST・UHT 乳の香気を AEDA で比較した原著。加熱で増えるメチルケトン類・ピラジン類・メチオナール、HTST 乳で potent なバニリンの根拠。',
  limits: '著者名・DOI は本調査で未確認（J-STAGE 書誌と要旨で実在確認）。',
  verified: 'abstract' },
{ id: 'schlutt-2007-cream-lactones', kind: 'original',
  title: 'Sensory-Directed Identification of Creaminess-Enhancing Volatiles and Semivolatiles in Full-Fat Cream',
  authors: 'Schlutt B, Moran N, Schieberle P, Hofmann T', year: 2007, journal: 'Journal of Agricultural and Food Chemistry 55(23):9634–9645',
  doi: '10.1021/jf0721545', url: 'https://doi.org/10.1021/jf0721545',
  scope: '脂肪30%の殺菌クリームの香気活性成分を AEDA 等で同定した原著。δ-デカラクトン、(Z)-6-ドデセノ-γ-ラクトン、γ-/δ-ドデカラクトンの高 FD と、δ-テトラデカラクトンの添加によるクリーミー感増強が、生クリームの香味根拠の中核。',
  limits: '試料は脂肪30%クリーム1条件。日本の生クリーム規格品での再現は未検証。',
  verified: 'abstract' },
{ id: 'meynier-2003-aroma-partition-dairy', kind: 'original',
  title: 'Partition of five aroma compounds between air and skim milk, anhydrous milk fat or full fat cream',
  authors: 'Meynier A, Garillon A, Lethuaut L, Genot C', year: 2003, journal: 'Le Lait 83(3):223–235',
  doi: '10.1051/lait:2003012', url: 'https://doi.org/10.1051/lait:2003012',
  scope: '香気5成分の空気／脱脂乳・無水乳脂肪・全脂クリーム間分配係数を実測した原著。乳脂肪による疎水性香気成分の保持と、脱脂乳でのタンパク質結合による保持の根拠。',
  limits: 'モデル香気5成分・モデル媒体での測定。実食品の組み合わせでの放出挙動そのものではない。',
  verified: 'full' },
{ id: 'mext-food-composition-database', kind: 'database',
  title: '日本食品標準成分表（普通牛乳・生クリーム等の成分値）',
  authors: '文部科学省', year: 2020,
  url: 'https://www.mext.go.jp/component/a_menu/science/detail/__icsFiles/afieldfile/2017/02/16/1365343_1-0213r9.pdf',
  scope: '普通牛乳（食品番号13003）の成分値：水分87.4、たんぱく質3.3、脂質3.8、炭水化物4.8 g/100g、乳糖4.4 g/100g。牛乳の組成・甘味の土台の根拠。',
  limits: '参照 PDF は旧版系統の掲載を含む。版によって成分値に微差があり得る。',
  verified: 'full' },
```

```ts
{ id: 'hasni-2011-casein-tea-polyphenols', kind: 'original',
  title: 'Interaction of milk α- and β-caseins with tea polyphenols',
  authors: 'Hasni I, Bourassa P, Hamdani S, Samson G, Carpentier R, Tajmir-Riahi HA', year: 2011, journal: 'Food Chemistry 126(2):630–639',
  url: 'https://www.sciencedirect.com/science/article/abs/pii/S0308814610015050',
  scope: 'α-/β-カゼインとカテキン類4種の結合定数・結合様式を分光法とモデリングで実測した原著。乳タンパク×茶ポリフェノール結合の分子レベルの根拠。',
  limits: '精製タンパク質と単一カテキンの溶液系。実際のミルクティーではない。DOI は本調査で未確認。',
  verified: 'abstract' },
{ id: 'ye-2013-milk-tea-polyphenols', kind: 'original',
  title: 'Interactions of black and green tea polyphenols with whole milk',
  authors: 'Ye J, Fan F, Xu X, Liang Y', year: 2013, journal: 'Food Research International 53:449–455',
  doi: '10.1016/j.foodres.2013.05.033', url: 'https://doi.org/10.1016/j.foodres.2013.05.033',
  scope: '緑茶・紅茶ポリフェノールと全乳そのものの相互作用を検討した原著。',
  limits: '本調査では書誌と他総説からの引用で確認。要旨の詳細は未読。',
  verified: 'bibliographic' },
{ id: 'milk-science-2010-catechin-astringency', kind: 'original',
  title: 'ミルク成分によるカテキンの渋味抑制効果について（Suppression of catechin astringency by milk components）',
  authors: '（著者名は本調査で未確認）', year: 2010, journal: 'ミルクサイエンス 59(1):1–8',
  doi: '10.11465/milk.59.1', url: 'https://doi.org/10.11465/milk.59.1',
  scope: 'カテキン溶液に全乳・スキムミルク・クリーム等を混合し、渋味の官能評価と遊離カテキンの HPLC 測定を行った原著。乳成分による渋味抑制（46–58%）と遊離カテキン減少（スキムミルクで約95%）の直接の根拠。',
  limits: 'カテキン単独溶液のモデル系（実際の茶浸出液ではない）。日本語要旨と英文要旨で抑制率の表記に差がある（46–58%／58–65%）。著者名は未確認。',
  verified: 'abstract' },
{ id: 'lorenz-2007-milk-tea-vascular', kind: 'original',
  title: 'Addition of milk prevents vascular protective effects of tea',
  authors: 'Lorenz M, Jochmann N, von Krosigk A, Martus P, Baumann G, Stangl K, Stangl V', year: 2007, journal: 'European Heart Journal 28(2):219–223',
  doi: '10.1093/eurheartj/ehl442', url: 'https://doi.org/10.1093/eurheartj/ehl442',
  scope: 'ヒト16名で紅茶の血管内皮機能改善効果が脱脂乳10%添加で消失したこと、個別タンパク試験でカゼイン類が原因画分とされたことの原著。',
  limits: '小規模・単回摂取の生理指標研究。味や香りの研究ではない。',
  verified: 'abstract' },
{ id: 'serafini-1996-tea-antioxidant-milk', kind: 'original',
  title: 'In vivo antioxidant effect of green and black tea in man',
  authors: 'Serafini M, Ghiselli A, Ferro-Luzzi A', year: 1996, journal: 'European Journal of Clinical Nutrition 50(1):28–32',
  url: 'https://jn.nutrition.org/article/S0022-3166(22)15838-4/fulltext',
  scope: 'ヒトで緑茶・紅茶摂取後の血漿抗酸化能（TRAP）上昇が、全乳100 mL の添加で消失した原著。in vitro の抗酸化能は乳で変化しなかった。',
  limits: '各群5名の小規模研究。url は原典を引用する総説ページの仮置き（原典 URL は本調査で未確認）。',
  verified: 'bibliographic' },
{ id: 'leenen-2000-tea-milk-plasma', kind: 'original',
  title: 'A single dose of tea with or without milk increases plasma antioxidant activity in humans',
  authors: 'Leenen R, Roodenburg AJC, Tijburg LBM, Wiseman SA', year: 2000, journal: 'European Journal of Clinical Nutrition 54:87–92',
  url: 'http://herbs.org/current/teaunaffectedbymilk.htm',
  scope: 'ヒト21名のクロスオーバーで、緑茶・紅茶への乳添加が血漿抗酸化能・カテキン応答を有意に変えなかった原著。Serafini 1996 への対向証拠。',
  limits: 'url は要約ページの仮置き（原典 URL は本調査で未確認）。',
  verified: 'bibliographic' },
{ id: 'reddy-2005-milk-black-tea-antioxidant', kind: 'original',
  title: 'Addition of milk does not alter the antioxidant activity of black tea',
  authors: 'Reddy VC, Vidya Sagar GV, Sreeramulu D, Venu L, Raghunath M', year: 2005, journal: 'Annals of Nutrition and Metabolism 49(3):189–195',
  doi: '10.1159/000087071', url: 'https://doi.org/10.1159/000087071',
  scope: 'ヒト（成人男性）で紅茶＋乳は血漿カテキン AUC を下げたが、血漿抗酸化能や酸化ダメージマーカーへの茶の効果は損なわれなかったとする原著。',
  limits: '単一研究グループ・成人男性のみ。',
  verified: 'abstract' },
{ id: 'xie-2013-milk-catechin-caco2', kind: 'original',
  title: 'Milk enhances intestinal absorption of green tea catechins in in vitro digestion/Caco-2 cells model',
  authors: 'Xie Y, Kosińska A, Xu H, Andlauer W', year: 2013, journal: 'Food Research International 53(2):793–800',
  doi: '10.1016/j.foodres.2012.07.063', url: 'https://doi.org/10.1016/j.foodres.2012.07.063',
  scope: 'in vitro 消化／Caco-2 モデルで、乳10%・25%添加が消化後のカテキンの透過性・回収を高めた原著。ガレート型カテキンの乳タンパク結合も確認。',
  limits: '細胞モデルでありヒトでの吸収向上を示すものではない。',
  verified: 'abstract' },
{ id: 'rashidinejad-2017-milk-tea-review', kind: 'review',
  title: 'Addition of milk to tea infusions: helpful or harmful? Evidence from in vitro and in vivo studies on antioxidant properties',
  authors: 'Rashidinejad A, Birch EJ, Sun-Waterhouse D, Everett DW', year: 2017, journal: 'Critical Reviews in Food Science and Nutrition',
  doi: '10.1080/10408398.2015.1099515', url: 'https://doi.org/10.1080/10408398.2015.1099515',
  scope: '乳添加が茶の抗酸化性に与える影響の in vitro／in vivo 証拠を整理した総説。肯定・否定の不一致が条件差に由来し得ることの整理に用いる。',
  limits: '巻号・ページは本調査で未確認。',
  verified: 'abstract' },
{ id: 'piyasena-2025-milk-in-tea-review', kind: 'review',
  title: 'Milk in tea: exploring the chemistry and biological activities',
  authors: 'Piyasena NP', year: 2025, journal: 'Food Science and Biotechnology 34(12):2707–2723',
  doi: '10.1007/s10068-025-01841-y', url: 'https://doi.org/10.1007/s10068-025-01841-y',
  scope: '茶ポリフェノールと乳タンパク質の相互作用、生物活性への影響、苦味・渋味低減の機構を整理した最新総説。',
  limits: '総説であり個別の主張は原著に遡る必要がある。',
  verified: 'abstract' },
{ id: 'serafini-2003-chocolate-plasma-antioxidants', kind: 'original',
  title: 'Plasma antioxidants from chocolate',
  authors: 'Serafini M, Bugianesi R, Maiani G, Valtuena S, De Santis S, Crozier A', year: 2003, journal: 'Nature 424(6952):1013',
  doi: '10.1038/4241013a', url: 'https://doi.org/10.1038/4241013a',
  scope: 'ヒト12名で、ダークチョコレート単独では血漿抗酸化能とエピカテキンが上昇したが、ミルクチョコレートおよびダークチョコレート＋牛乳200 mL では上昇しなかった原著。',
  limits: 'Brief Communication（短報）。測定法への批判（Schroeter 2003 等）が同誌上で続いた。',
  verified: 'abstract' },
{ id: 'schroeter-2003-milk-flavanol-correspondence', kind: 'article',
  title: 'Milk and absorption of dietary flavanols (Correspondence)',
  authors: 'Schroeter H, Holt RR, Orozco TJ, Schmitz HH, Keen CL', year: 2003, journal: 'Nature 426(6968):787–788',
  doi: '10.1038/426787b', url: 'https://doi.org/10.1038/426787b',
  scope: 'Serafini 2003 の解釈（乳タンパク結合による吸収阻害）への批判的通信。ミルク×チョコレートの知見が未確定であることの根拠。',
  limits: '通信（レター）であり新規データの提示が主目的ではない。',
  verified: 'bibliographic' },
{ id: 'roura-2007-cocoa-milk-bioavailability', kind: 'original',
  title: 'Milk does not affect the bioavailability of cocoa powder flavonoid in healthy humans',
  authors: 'Roura E, Andrés-Lacueva C, Estruch R, Mata-Bilbao ML, Izquierdo-Pulido M, Waterhouse AL, Lamuela-Raventós RM', year: 2007, journal: 'Annals of Nutrition and Metabolism 51(6):493–498',
  doi: '10.1159/000111473', url: 'https://doi.org/10.1159/000111473',
  scope: 'ヒト21名のクロスオーバーで、ココアパウダーを全乳に溶いた飲料と水に溶いた飲料の間でエピカテキン代謝物の血漿濃度に有意差がなかった原著。Serafini 2003 への対向証拠。',
  limits: 'ココアパウダー飲料が対象で、固形チョコレート＋牛乳の同時摂食とは条件が異なる。',
  verified: 'abstract' },
```

```ts
{ id: 'nasrawi-1990-capsaicin-rinse', kind: 'original',
  title: 'Temporal effectiveness of mouth-rinsing on capsaicin mouth-burn',
  authors: 'Nasrawi CW, Pangborn RM', year: 1990, journal: 'Physiology & Behavior 47(4):617–623',
  doi: '10.1016/0031-9384(90)90067-E', url: 'https://doi.org/10.1016/0031-9384(90)90067-E',
  scope: 'カプサイシン溶液後の灼熱感への各種洗口液の効果を時間強度法で測った原著。全乳（5°C）の有効性、冷温の優位、脂肪0%と10%で差がなかったことの根拠。',
  limits: '洗口（摂取後に口をすすぐ）条件であり、食品中での同時摂取とは異なる。',
  verified: 'abstract' },
{ id: 'nolden-2019-capsaicin-beverages', kind: 'original',
  title: 'Putting out the fire – Efficacy of common beverages in reducing oral burn from capsaicin',
  authors: 'Nolden AA, Lenart G, Hayes JE', year: 2019, journal: 'Physiology & Behavior 208:112557',
  doi: '10.1016/j.physbeh.2019.05.018', url: 'https://doi.org/10.1016/j.physbeh.2019.05.018',
  scope: '飲料7種の灼熱感軽減効果を比較した原著（n=72）。全乳・脱脂乳が最大級の軽減で両者に差がなく、脂肪よりタンパク質の関与が示唆された。',
  limits: '辛味トマトジュース後の飲用という条件。機構は著者らの推論を含む。',
  verified: 'abstract' },
{ id: 'gaiser-2023-milks-capsaicin', kind: 'original',
  title: 'Efficacy of plant and cow milks in reducing the oral burn from capsaicin',
  authors: 'Gaiser J, Hayes JE', year: 2023, journal: 'Food Quality and Preference',
  url: 'https://www.researchgate.net/publication/375424553_More_than_fat_-_Proteins_in_dairy_and_plant_milks_contribute_to_the_reduction_of_oral_burn_from_capsaicin',
  scope: '脂肪・タンパク質量を変えた乳類・植物乳の灼熱感軽減を比較した原著。高タンパクの限外濾過全乳が最も有効で、タンパク質の濃度依存的寄与を示唆。',
  limits: '巻号・ページ・DOI は本調査で未確認（誌名は大学のプレスリリースで確認）。',
  verified: 'abstract' },
{ id: 'gokhan-2023-dairy-proteins-capsaicin', kind: 'original',
  title: 'Role of dairy proteins in the reduction of capsaicin-induced oral burning pain',
  authors: 'Gøkhan MA, Sørensen ES, Baad-Hansen L', year: 2023,
  url: 'https://www.researchgate.net/publication/365486765_Role_of_dairy_proteins_in_the_reduction_of_capsaicin-induced_oral_burning_pain',
  scope: '単盲検クロスオーバー（n=24）で、3.5%カゼイン／ホエイ／ラクトース／脱脂乳の洗口間に灼熱感・不快感の有意差がなかったとする否定的結果の原著。タンパク質単独効果への留保の根拠。',
  limits: '掲載誌名・巻号・DOI は本調査で未確認（ResearchGate の要旨で実在確認）。舌へのゲル塗布という特殊な刺激条件。',
  verified: 'abstract' },
{ id: 'ochanda-2015-spiced-black-tea', kind: 'original',
  title: 'Antioxidant Capacity and Consumer Acceptability of Spiced Black Tea',
  authors: 'Ochanda SO, Wanyoko JK', year: 2015, journal: 'Journal of Food Research 4(6):104',
  doi: '10.5539/jfr.v4n6p104', url: 'https://doi.org/10.5539/jfr.v4n6p104',
  scope: 'ティーマサラ（生姜・シナモン・カルダモン・クローブ・黒胡椒・ナツメグ）等のスパイス添加紅茶の抗酸化能と消費者受容を測った原著。スパイス添加で嗜好が上がり抗酸化活性は下がった。チャイ様の組み合わせの補助的根拠。',
  limits: '乳の有無を変数にした研究ではない。掲載誌は指標の限られた査読誌であり、補助的根拠に留める。',
  verified: 'abstract' },
```

（既存収録のため再掲しない出典：`qie-2021-milk-tea-catechin-protein` — R2 の出典に含める。）

---

## 5. 参考情報（未査読・Web情報 — 実測の根拠には使わない）

| 情報 | 内容 | 扱い |
|---|---|---|
| 料理・食品メディアのチャイ解説（例：Info Digest Magazine、Food and Road 等のマサラチャイ解説） | 紅茶・スパイス・牛乳を一緒に煮出す製法、「全脂乳の脂肪がスパイスの脂溶性香気成分を取り込む」という説明、生姜の酵素（ジンジバイン）による牛乳の凝固と加熱失活の注意 | 製法の実在と一般的な説明の文脈付けのみ。R6 の文面では「調理慣行」として言及するに留め、効果の根拠とはしない |
| Penn State 大学プレスリリース（2023、Gaiser & Hayes 研究の紹介） | 「脂肪だけでなくタンパク質も灼熱感軽減に関与」という研究紹介 | 原著（gaiser-2023）の誌名確認に使用したのみ |

---

## 6. 三軸・ドメイン設計の提案（実装ノート）

1. **Domain 型の拡張**：`Domain = 'tea' | 'chocolate' | 'spice' | 'herb' | 'dairy'` を追加し、`DOMAIN_LABEL` に `dairy: '乳製品'` を追加する。ペアリング画面の「ミルクを加える」ボタンは、この dairy ドメインの牛乳素材を組み合わせに追加する操作として実装できる（生クリームは素材検索から通常選択可能にする）。
2. **軸ラベル追加**（`axis-labels.ts`）：
   - CLASSIFICATION_LABELS：`'liquid-milk': '牛乳'`、`'cream': 'クリーム'`（既存のチョコ軸 `'milk': 'ミルク'` とは別 ID。混同防止のため牛乳側は `liquid-milk` とした）
   - VARIETY_LABELS：`'bos-taurus': 'ウシ（乳用種一般）'`
   - ORIGIN_LABELS：既存 `'multi-origin': '複数産地・産地一般'` を流用（乳製品に特定産地の香味差を主張する根拠は本調査では得られていないため、産地軸は「汎用」に固定するのが正直な設計）
3. **三軸の意味づけ**（乳製品では植物型の三軸がそのまま当てはまらないため）：
   - 軸1 分類＝製品種別（牛乳／クリーム）
   - 軸2 産地＝汎用（産地一般）
   - 軸3 品種＝乳用種一般（ウシ）。品種別（ジャージー種等）で香味が変わる可能性は成分表にも示唆がある（ジャージー種生乳は脂質5.1%）が、香味の査読裏付けが取れていないため素材は分けない。
4. **SensationKey の制約**：脂肪感・コク・口腔コーティング感に相当するキーが現行型に無い。無理に既存キー（umami 等）へ寄せると誤った主張になるため、文章（description／scopeNote）で扱う。将来 SensationKey を拡張する場合は別途根拠調査が必要。
5. **シミュレーション適用外**：牛乳・生クリームとも roastable／extractable は false。加熱の影響は §1.2 の知見を scopeNote に記すに留める。
6. **化合物側の小さな論点**：既存化合物 `dimethyl-sulfide` の noteIds は煎茶文脈の `seaweed` のみ。乳文脈では同じ化合物が「加熱乳様」の方向に働くが、ノート体系に乳系の硫黄ノートが無いため、今回はリンクを detection に留め noteIds の変更は提案しない（変更する場合は別途根拠整理が必要）。

---

## 7. 確認できなかった項目

1. **チャイの牛乳煮出しの直接検証**：牛乳でスパイスを煮出すことで香気成分の抽出・分配がどう変わるかを測った査読研究は確認できなかった。R6 は探索的（exploratory）としてのみ投入可能。
2. **ダークチョコレート＋牛乳の官能研究**：飲用・共食いでの味の調和を官能評価した査読研究は確認できなかった（存在するのは摂取後の生理指標研究のみ）。
3. **ジアセチルの未発酵乳での寄与**：濃度・寄与について文献間で見解が分かれ、確定できなかった。検出リンクに留める。
4. **生クリームの国内規格値**：乳等省令上の乳脂肪分等の数値は本調査で一次資料を確認できなかった。素材定義では数値を断定していない。
5. **書誌の細部**：Gaiser 2023 と Gøkhan 2023 の巻号・DOI、Hasni 2011 の DOI、Rashidinejad 2017 の巻号・ページ、日本の2論文（ミルクサイエンス 2010／日本食品科学工学会誌 1999）の著者名、Lan 2025 の著者全員、Czerny & Schieberle 2007 の原典 — いずれも本調査の範囲では未確認（各出典の limits に明記済み）。
6. **牛乳の「コク」の化学的裏付け**：口腔コーティング感に寄与する低分子化合物の研究（Food Chemistry 2019、ウシ乳製品の体性感覚成分）は検索で存在を確認したが、書誌詳細の検証まで至らなかったため出典リストには入れていない。将来の追跡候補。
