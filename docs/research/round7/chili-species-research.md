# 唐辛子の種レベル分割 文献調査 — flavor-pairing-lab round7

- 調査日: 2026-10-31
- 目的: 現行の単一素材 `spice-chili`（唐辛子、Capsicum spp.、香りプロファイル空）を、栽培化5種の種レベル素材に分割できるかを査読文献で判断する。
- 調査方法: `browser.search` / `browser.open` で PubMed / PMC / 出版社ページを確認し、検索結果・原典ページに表示された書誌情報と要旨内容のみを記録した。
- ルール:
  - 数値（組成比・SHU等）は、原典要旨・原典ページ中で直接確認できたものだけを、出典と測定条件を添えて記載する。確認できない数値は書かない。
  - 「検出（GC-MS等で存在を確認）」と「官能寄与（GC-O / OAV / 官能評価で寄与を確認）」を区別する。
  - 種レベルの「平均傾向」と「種内で一貫した分類指標」は別物として扱う。反証も併記する。
  - 確認できなかった項目は「未確認」「足がかり不足」と明記する。
- 注意: 本調査は要旨レベル＋一部原典ページ（PMC 全文の表）での確認が中心。本文精読による照合は未実施。

---

## 0. 結論サマリー

- **素材化できる種: 5種すべて**（C. annuum、C. chinense、C. frutescens、C. baccatum、C. pubescens）。
- **香りプロファイルまで根拠がある種: 4種**（annuum、chinense、frutescens、baccatum）。いずれも根拠区分は `general`（複数研究の一般的傾向）止まりで、`measured`（単一試料の実測をそのまま素材プロファイルにする）を主張できるものはない。
- **C. pubescens は香りの方向性が足がかり不足**。カプサイシノイド組成（ジヒドロカプサイシン優位）と辛味の範囲は複数原著で裏付けられるため、素材化は「辛味の感覚エントリのみ＋香りプロファイル空（理由を scopeNote に明記）」の形を提案する。これは現行アプリで空プロファイルを許容した先例（ドミニカ共和国産 Trinitario）と同じ「原著に基づく理由つき空」の扱いである。
- 根拠の強さ（種ごと）:
  - **chinense: 強**。フルーティーな香りは GC-O-MS（寄与レベル）を含む複数原著で一貫。
  - **annuum: 中**。官能評価つき比較研究で green/vegetable 系＋果実系の組み合わせとされる。
  - **frutescens: 中**。annuum–chinense–frutescens 複合群の比較研究で chinense と並び「フルーティー／エキゾチック、エステル・イオノン寄与高」とされるが、frutescens 単独を対象にした寄与研究は薄い。
  - **baccatum: 中**。2つの比較研究で香調の方向が一部食い違う（果実系主体 vs 野菜様が強い）ため、試料依存性を scopeNote に明記する条件つき。
  - **pubescens: 辛味・組成は中〜強、香りは不足**。
- カプサイシノイド組成比には種の平均傾向がある（§1）が、**種の同定指標にはならない**という反証（Zewdie & Bosland 2001）がある。アプリでは組成比を「平均傾向」として description / scopeNote に書き、素材の決定論的な特徴として表示しないこと。

---

## 1. カプサイシノイド組成の種差

### 1.1 種平均の組成比（カプサイシン : ジヒドロカプサイシン : ノルジヒドロカプサイシン）

Alghamdi et al. 2025（Int J Mol Sci 26(10):4916）が、5種47品種を同一環境（都市近郊の家庭菜園条件）で栽培・測定し、以下の**種平均**を報告した:

| 種 | C : DHC : NDHC（平均） | 傾向 |
|---|---|---|
| C. annuum | 64 : 30 : 6 | 標準型 |
| C. baccatum | 64 : 30 : 6 | annuum と同じ平均型 |
| C. chinense | 73 : 25 : 2 | カプサイシン優位 |
| C. frutescens | 73 : 25 : 2（個別には 74 : 25 : 1） | カプサイシン優位（chinense 型） |
| C. pubescens | 34 : 60 : 6（個別には 34 : 60 : 7） | **ジヒドロカプサイシン優位**（他種と明確に異なる） |

- 限界（同論文が明記）: 同一品種の年内変動が 21–35% と大きく、比率は固定値ではない。栽培環境も単一条件。
- pubescens の DHC 優位は独立した裏付けがある: Meckelmann et al. 2015（Eur Food Res Technol 241(6):817–825）がペルー産 pubescens 32系統で「カプサイシンが少なく、ジヒドロカプサイシンとノルジヒドロカプサイシンが多く、微量カプサイシノイドが多い」という種典型パターンを報告。総カプサイシノイドは 55–410 mg/100 g 乾物（約 8,400–60,000 SHU 換算）。

### 1.2 反証: 組成比は種の分類指標にならない

- Zewdie & Bosland 2001（Biochem Syst Ecol 29(2):161–169）は、6種・約200系統で7種のカプサイシノイドを定量し、**組成プロファイルは種内でも一貫せず、化学分類指標としての有用性は限定的**と結論した。「カプサイシンとジヒドロカプサイシンが常に主要成分」という一般化にも例外があった。
- 総説（RSC Advances 2018、属の植物化学レビュー）も、Zewdie & Bosland を引いて組成プロファイル単独を分類マーカーに使うことは避けられていると述べる。
- したがって §1.1 の比率は「複数品種を測ったときの平均傾向」としてのみ使える。アプリの素材説明ではこの留保を必ず併記する。

### 1.3 総量（辛味の強さ）の種差

- Kollmannsberger et al. 2011（J Sci Food Agric 91(9):1598–1611）: ají（baccatum）と rocoto（pubescens）の総カプサイシノイドは 13–352 mg/kg で、対照の C. chinense（1605 mg/kg）と比べて温和だった。
- Scientific Reports 2021（11:4932、種内・種間変異の研究）でも、chinense および chinense × frutescens のカプサイシノイド含量が annuum・baccatum の 3.5–5 倍という方向が報告されている（本調査では書誌の著者名まで未確認のため、出典リストには入れず補助所見として扱う）。
- ただし annuum は種内の幅が極端に大きい（§5）。「種＝辛さの固定値」にはならない。

---

## 2. 揮発性成分・香味の種差

### 2.1 annuum–chinense–frutescens 複合群の比較（寄与レベル）

Rodríguez-Burruezo et al. 2010（J Agric Food Chem 58(7):4388–4400、PMID: 20199081）:
- 3種複合群の16系統の完熟果を HS-SPME + GC-O-MS（嗅覚測定つき）で分析。300超の化合物を検出し、少なくとも23種の香気寄与揮発成分（OCV）を同定。主群はエステル類とテルペノイド類。
- **C. chinense と C. frutescens の系統は「フルーティー／エキゾチック」な香りで、複数のエステルとイオノンの寄与が高く、green/vegetable 系 OCV の寄与は低いか皆無**だった。
- これは寄与レベル（GC-O）の知見であり、単なる検出リストではない。

### 2.2 3種の比較＋官能評価

Trovato et al. 2022（Molecules 27(7):2355）:
- annuum、chinense、baccatum の17品種を SPME-GC-MS で分析（269化合物を同定）し、官能プロファイル評価も実施。
- 組成の特徴: annuum は酸類・ケトン類が多く、chinense はエステル類、baccatum はアルデヒド類で特徴づけられた。
- 官能の方向（同論文の要旨・考察）:
  - chinense: エステル類の寄与が高く、フルーティー／エキゾチックな香り。
  - annuum: フルーティー／エキゾチックと green/vegetable の**組み合わせ**。
  - baccatum: 主としてフルーティーだが、**強さは他種より弱い**。

### 2.3 chinense（ハバネロ）のフルーティーな香りの原著

- Murakami et al. 2019（J Oleo Sci 68(12):1251–1260、PMID: 31787673）: ハバネロ（C. chinense）の揮発成分66種を SAFE + GC-MS で分析。**ハバネロは 6-methyl-(E)-4-heptenyl エステル類の存在で特徴づけられる**こと、揮発プロファイルの PCA/HCA で試料がおおむね種ごとにまとまることを報告。フルーティーな香りの担い手として分枝鎖エステル類が位置づけられる。
- Zhou et al. 2023（Scientia Horticulturae 309:111691）: C. chinense 'JT-1' を GC-O-MS で分析し、フルーティーな香りの主たる寄与成分は **4-methylpentyl 3-methylbutanoate** で、成熟に伴い優占プロファイルがアルデヒド・アルコール類からエステル類へ移行することを示した。単一品種の知見（品種レベル根拠）。
- 以上より「ハバネロ（chinense）のフルーティーな香り」は、寄与レベル（GC-O）で裏付けられた代表的知見として扱える。

### 2.4 baccatum / pubescens の揮発成分

Kollmannsberger et al. 2011（§1.3 と同じ原著）:
- ají（baccatum）と rocoto（pubescens）、および chinense 対照を HS-SPME + GC-MS/嗅覚測定で分析。200超の揮発成分を検出し、**揮発パターンに種間の著しい差**があった。
- baccatum については、PhytoKeys の属モノグラフ（Barboza et al. 2022）が同研究を要約して「エクアドル・ペルー産系統で特に強い vegetable-like な香りがあり、一部の遺伝子型ではフルーティー／エキゾチックなノートも伴う」と記す（二次要約経由の情報として扱う）。
- Trovato 2022 の「baccatum は主としてフルーティー（ただし弱い）」とは方向が一部異なる。試料セット（産地・品種群）が違えば香調の優占も変わりうる例であり、プロファイル提案では両方を併記し試料依存性を明示する。
- **pubescens の香調の方向（何の香りが立つか）は、本調査では要旨レベルで確認できなかった**。「揮発パターンが他種と異なる」ことは確認できるが、方向のない差異だけでは香味ノートに変換できない。→ 香りプロファイルは足がかり不足と判断する。

### 2.5 半極性代謝物での種のまとまり（補助）

- Wahyuni et al. 2011（Phytochemistry 72:1358–1370）: 4種（annuum、baccatum、chinense、frutescens）32系統の半極性代謝物（フラボノイド等）プロファイルで、系統がおおむね種ごとにまとまり、baccatum は独立した群を形成した。揮発成分ではないが、「種レベルで化学的まとまりがある」ことの補助根拠になる（pubescens は対象外）。

---

## 3. 種別プロファイル提案

表記は現行データ形式に合わせる: `profile` は flavors.ts の noteId を使用。`sensations` は SensationKey（pungent 等）を使用。強さは定性区分（weak / moderate / strong）のみ。

### 3.1 C. annuum（ハラペーニョ、カイエンヌ、鷹の爪等）

- 素材ID案: `spice-chili-annuum`、nameJa: 「唐辛子（アンナム種）」、scientificName: 'Capsicum annuum L.'
- 軸: classificationId 'fruit-spice'（既存踏襲）/ originId 'multi-origin' / varietyId 'capsicum-annuum'（新規）
- profile（tier はすべて general）:
  - green-vegetable（青い野菜）: moderate — [trovato-2022, rodriguez-burruezo-2010]
  - green-leaf（青草・若葉）: weak — [trovato-2022]
  - fruit-general（果実全般）: weak — [trovato-2022]
- sensations:
  - pungent: moderate（general）— note: 「本素材は辛味のある品種群を対象とする。無辛味品種（ピーマン・シシトウ類の一部等）は含まない。同一種内でも実測 SHU の幅は極めて大きい（§5）」
- evidenceTier: 'general'
- scopeNote案: 「官能評価つき比較研究に基づく一般傾向。annuum は種内の多様性が最も大きく、品種・熟度・乾燥等の加工で香りも辛味も大きく変わる。組成比の平均傾向は 64:30:6（Alghamdi 2025）だが種の同定指標ではない（Zewdie & Bosland 2001）。」

### 3.2 C. chinense（ハバネロ、スコッチボネット等）

- 素材ID案: `spice-chili-chinense`、nameJa: 「唐辛子（キネンセ種）」、scientificName: 'Capsicum chinense Jacq.'
- 軸: varietyId 'capsicum-chinense'（新規）、他は 3.1 と同じ
- profile（general）:
  - tropical（トロピカル果実）: moderate — [murakami-2019, trovato-2022, rodriguez-burruezo-2010]
  - fruit-general（果実全般）: moderate — [trovato-2022, rodriguez-burruezo-2010]
- sensations:
  - pungent: strong（general）— note: 「辛味系品種群が対象（ビキーニョ等の無辛味品種は含まない）。カプサイシン優位の組成（平均 73:25:2、Alghamdi 2025）。超辛味品種を含む」
- evidenceTier: 'general'
- scopeNote案: 「フルーティーな香りは GC-O による寄与レベルの知見（分枝鎖エステル類、6-methyl-(E)-4-heptenyl エステル類）に支えられる。ただし香りの強さ・質は品種差が大きく、無香に近い系統や無辛味品種も存在する。」

### 3.3 C. frutescens（タバスコ、プリッキーヌ、マラゲータ等）

- 素材ID案: `spice-chili-frutescens`、nameJa: 「唐辛子（フルテセンス種）」、scientificName: 'Capsicum frutescens L.'
- 軸: varietyId 'capsicum-frutescens'（新規）
- profile（general）:
  - fruit-general（果実全般）: moderate — [rodriguez-burruezo-2010]
  - tropical（トロピカル果実）: weak — [
...[truncated 8451 chars]