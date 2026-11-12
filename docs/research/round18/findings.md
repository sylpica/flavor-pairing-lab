# 第18ラウンド（再監査 2026-11-12、監査者＝フェイリス）作業記録

## F-01【High】カフェイン数値モデルのパラメータ出典の取り違え（確定・要修正）
- 現行記録 price-spitzer-1993（Price W & Spitzer J, Food Chemistry 46(2):133–136, 1993）の scope は
  「南アフリカ産紅茶・粒度1.40–2.00mm・HPLC・k(80℃)=0.99 min⁻¹・Ea=40.3 kJ/mol の出典」と主張するが、
  同論文の実在抄録（Europe PMC）は「オーストラリア産 CTC 紅茶（Nerada）の UV 活性可溶成分、Ea=41 kJ/mol」であり全面不一致。
- パラメータの真の出典は **Jaganyi D & Price RD (1999) "Kinetics of tea infusion: the effect of the
  manufacturing process on the rate of extraction of caffeine", Food Chemistry 64(1):27–31,
  DOI 10.1016/S0308-8146(98)00101-0**。抄録で全値一致を確認：南アフリカ産紅茶、HPLC、Ea=40.3 kJ/mol、
  粒度 1.40–2.00 mm、k(80℃)=0.99 min⁻¹（Spiro & Jago 1982 の定常状態モデル）。
- 経緯：モデルのコメント自身が「それまで著者名が『Price RD』と誤記され」と記すが、Price RD は Jaganyi & Price の
  正しい著者であり誤記ではなかった。2026-11-01 の監査修正フェーズ（第13ラウンド）で Price & Spitzer 1993 へ
  誤って同定され、2026-11-03 監査（第17ラウンド）がモデル表示へ出典リンクを追加して誤帰属が固定された。
- 実測温度範囲：Jaganyi & Price 抄録は "over a temperature range" とのみ記し数値範囲は未確認のまま（全文未入手）。
  モデルの 40–95℃ は実装ガードという現行の説明は正しい。
- 修正方針：jaganyi-price-1999 を新規登録（verified=abstract）、CAFFEINE_MODEL_SOURCE_ID を付け替え、
  price-spitzer-1993 の scope を実在論文の内容（Nerada CTC、UV可溶成分、Ea 41）へ書き換え、
  モデルのコメント・SIMULATION_MODELS.md・画面表示を整合させる。回帰テスト追加。

## F-02相互作用ルール clove-maillard-suppression の文面が原著とずれる（確定・修正済み）
- 旧文面は「クローブのユージノールは、加熱タンパク質食品のモデル系で dimethyl trisulfide の生成を抑制した」としていた。
- Qiang et al. 2025（Food Chemistry 462:140704）全文に基づく調査記録（docs/research/spice-herb-wave2.md §1(b)・§4-5）では、実験系はモデル系ではなく実際の煮込み牛肉（クローブ粉末 2.5 g/kg、98±2℃）であり、所見は「クローブ添加区で牛肉由来 DMTS の FD が塩のみ対照 4096 → 2048 に半減」。機序として本文が議論するのはクローブのポリフェノールによる Maillard／Strecker 分解の抑制であり、ユージノール単独への帰属は原著にない。
- 修正：ルール文面を「クローブを加えて煮込んだ牛肉では…FD が半減し（4096→2048）…本文ではクローブのポリフェノールが Maillard／Strecker 分解を抑える機序が議論されている」へ書き換え、conditionNote から「（ユージノール）」を除去（trigger の compoundId は据え置き）。yu-2025 の scope に DMTS の FD 半減を追記。
- 本日の Web 検索では要旨・二次情報に DMTS の記述は現れず、全文由来の調査記録が唯一の裏付けである点も記録する（原著 verified は従来どおり 'full'）。

## F-03定性傾向 roast-black-pepper-temp の文面が根拠文献の結論と逆向き（確定・修正済み）
- 旧文面は「温度の上昇に伴いピペリンと揮発性香気成分の損失が進む傾向がある」としていた。
- 根拠の Zhang et al. 2025（Food Research International 221:117482）要旨の結論は正反対で、黒コショウは高温焙煎（140–160℃）に適しピペリンを保持しやすく、白コショウは低温焙煎（100–140℃）で品質良好。損失の数値（16–34%）はもう一方の根拠 Suresh 2007 の湿熱加工（煮沸・圧力調理）の値であり、調査記録（docs/research/spice-herb-deepening.md）でも「乾熱焙煎でのピペリン損失率は主張できない」「骨子：黒は140–160℃域でもピペリンを保ちやすい／湿熱長時間ではピペリンは明確に減る」と整理されていた。アプリ文面がこの骨子から逸脱していた。
- 修正：文面を「焙煎への適応は品種で異なり、黒コショウは140–160℃でもピペリンを保持しやすく、白コショウは100–140℃で品質が良かった。一方、湿熱処理ではピペリン損失（16–34%）が実測されている」へ書き換え。limits（湿熱の損失率を乾熱へ転用しない）は据え置き。

## F-04gotti-2021-green-tea-roasting の scope が全文と不一致（確定・修正済み）
- 旧 scope は「中国・日本産緑茶…リナロールは高温で減少」としていた。
- 本日全文（出版社版 PDF、Semantic Scholar 経由）で照合：試料は番茶・煎茶（有明・福寿）等の日本産緑茶とセイロン紅茶で、中国産緑茶は含まれない。ピラジン5種の濃度が 160→200℃ で増加したことは本文・Figure 3 で確認。リナロールは 160℃で増加し、180・200℃（過加熱）で減少する二峰的な動きであり、「高温で減少」は不完全だった。
- 修正：scope を全文どおりに書き換え、verified を 'abstract' → 'full' へ引き上げ。傾向 roast-maillard の文面（ピラジン類が増える方向）は全文と整合し変更なし。

## 追加の確認済み事項（修正なし）
- li-2022-raw-puerh-infusions：誌公式サイト（食品科学 spkx.net.cn）の摘要で「浸出物総量・滋味品質とも第2泡が最大、その後減少」を確認。scope と一致し verified 'abstract' は妥当。
- ye-2013／serafini-1996／leenen-2000（いずれも乳×茶ルールの根拠）：Europe PMC で要旨を取得し scope と照合済み。ye-2013 の scope に分配率（カゼインミセル結合 35.1%／73.0%）を追記し、3件とも verified を 'bibliographic' → 'abstract' へ引き上げ。serafini-1996／leenen-2000 の仮置き URL を PubMed の原典ページへ差し替え。
- 書誌の完全化（いずれも Low、Crossref 原著メタデータで確定）：wen-2022（正式題名の後半を追加）、suresh-2007（副題を追加し EPMC 題名とも一致）、boza-2014（副題を追加）。
- pairing-yin-2024-xinyang-maojian：誌公式サイト（食品科学 spkx.net.cn、2024, 45(21):222–228）で正式題名「清香型信阳毛尖茶关键呈香成分鉴定」を確認し、記録の題名（「呈香物质的鉴定」と誤記）を修正。
- pairing-wickremasinghe-1978（A11 重点の残件）：書誌を再確認。Crossref・OpenAlex で題名「Tea」・著者・1978年・pp.229–286 が一致し、ScienceDirect の巻24（1978）目次でも同章を確認。journal を「Advances in Food Research 24: 229–286」へ補完。全文は closed access で未入手、Publisher Summary は断片のみのため verified は 'bibliographic' のまま据え置き、limits に再確認の経緯を記録。
- abd-el-mageed-2007-roasting：出版社サイト（journals.ekb.eg）へ直接到達できなかったが、OpenAlex 収録の要旨全文で scope を再照合し、主張3点（加熱で精油濃度低下／脂質分解生成物 hexanal・(E)-2-hexenal の生成／コリアンダーのリナロール割合はマイクロ波 57.26%・従来焙煎 55.53% で方式差あり）が全て要旨と一致することを確認。傾向 roast-cumin-heat／roast-coriander-method の根拠として妥当。記録変更なし（verified 'abstract' 維持）。
- CNKI 系 DOI の題名照合（台帳分）：wang-2025（食品科学、誌面タイトル一致）、zhang-2021（食品工业科技 2021, 42(22):276–282、題名一致）、deng-2023（同誌 2023, 44(18):378–386、題名一致）、yang-2025（同誌 2025, 46(5):218–229、題名一致）、jin-2025（中国茶叶加工 2025(2):73–79、題名一致）を確認。zhong-2026 は誌面未確認（2026年発行分、DOI ハンドラ経由でも未到達）のため現行記録のまま据え置き。
- 食品科学（spkx）残り4件の題名照合：weng-2022・tang-2015・kong-2024 は誌面タイトルと一致。peng-2023 は記録の題名が中国語原題の和訳になっていたため、誌面の原題「广西杏仁香茶树种质资源试制不同茶类品质分析」へ修正（同一論文であることは従来の照合どおり）。
- pairing-zhan-2018：DOI（10.12101/j.issn.1004-390X(n).201610031）は括弧を URL エンコードすれば doi.org から誌公式サイトへ解決できることを確認（未エンコードでは 404）。記録の URL は誌公式サイトの論文 PDF（実在・要旨の数値も誌面と一致）へ差し替え、limits に経緯を明記。
- pairing-wickremasinghe-1978（追補）：ScienceDirect の章ページに到達し、Publisher Summary（要旨）全文も閲覧できた。要旨は栽培茶の異質性・剪定と摘採・ステロール類・副産物が中心で、scope の香味に関する主張は要旨に含まれないため、確認レベルは bibliographic のまま据え置き、limits をその旨に更新。
- ravi-2013（追補）：Taylor & Francis 全文へのアクセスは bot チェックで到達できず（複数経路・複数回試行）。全文未入手のままである旨を記録の limits に追記し、composition 据え置きの判断を維持。
- milk-science-2010-catechin-astringency：J-STAGE 公開 PDF の全文を取得し照合。渋味抑制 46–58%（日本語要旨・本文）、スキムミルクで遊離カテキン約95%減少、β-カゼイン約35%減少が本文と一致。英文要旨の 58–65% は日本語要旨・本文と異なる表記である旨を limits に明記し、verified を 'abstract' → 'full' へ引き上げ。
- kumazawa-2023-perilla-odorants：J-STAGE 公開 PDF の全文を取得し照合。DHP 50 ppb 添加、「青シソ様」と「嗜好性」の有意な向上（Wilcoxon、p<0.05、図2）が本文と一致。verified を 'abstract' → 'full' へ引き上げ。
- Crossref 全数再照合（694 DOI、2026-11-12 再実行）：フラグ68件（不一致44＋未発見24）。新規登録の jaganyi-1999・ravi-2013 はフラグなし。未発見24件は全て非 Crossref 登録機関（CNKI・JaLC・DataCite 等）で、誌面・doi.org で別途確認済みのクラス。不一致の残りは和文題名と英訳題名の差・副題の有無・表記差の既知クラスで、本ラウンドの修正（yin 題名、wen／suresh／boza 副題）により前回71件から減少。jonas-2021-sage-sensomics の題名が Crossref の正式題名より短かったため完全化（副題と学名を追加）。
- Crossref 再照合の再現実行（wang-2025-sichuan-congou への DOI 追加後、695 DOI で再実行し永続保存）：Crossref 登録あり672件・なし23件（全て非 Crossref 登録機関で誌面・doi.org で実在確認済みのクラス）。題名の語集合が完全一致したもの604件、類似度（Dice）0.85未満は38件で、全て和文題名 vs 英訳題名（約24件）・副題や略記（GC-MS／GC-O の展開形、UHPLC-MS/MS、Jagella の Part I/II 等）の差・Crossref 側の題名截断の既知クラスであり、scope の主張と原著が矛盾するケースはゼロ。先の68件との差は類似度指標の違いによる。
- PMC 全文の文脈照合による格上げ（abstract→full、limits に確認注記を追加）：hoferl-2014-juniper-berry-oil（α-ピネン 51.4%）、roy-2015-ajowan-oil（精油 2.5–5%・チモール 35–60%）、mirniyam-2022-ajowan-populations（チモール 37.54–89.01%）、sprea-2023-lemon-verbena-oil（ゲラニアール／ネラール）、sarmah-2026-assam-composition（テアフラビン／カフェイン／テアニン）、farag-2018-sumac-volatiles（焙煎でフラン／アルデヒド類 58%）、arena-2022-sumac-phytochemical（揮発成分263種・ポリフェノール83種）、molecules-2025-vanilla-pods（揮発成分200超・香気活性60超）。追加のスポットチェックで文脈一致を確認し格上げした6件：kakutani-2017-breath-timing（飲用後のレトロネーザルでのみ増強）、zhang-2020-dahongpao-infusions（14煎・2煎目が最高）、cao-2022-tieguanyin-ratio（飲用群で茶水比の選好が逆方向）、jiang-2025-chili-powder-thermal（オーブン区が最高水準・最も顕著な影響）、yamasaki-2022-sansho-classification（市販粉山椒10製品・主要揮発成分4種）、lu-2022-kokumi-green-tea（γ-Glu-Gln／GSH の同定とテアニンの増強・再構成確認）。機械的な数値存在のみでは格上げしない方針は維持し、残り55件の負荷出典は「全文取得・scope 数値の存在照合済み（本文精読未実施）」として abstract のまま据え置いた。
- wang-2025-sichuan-congou の順位主張の確認と DOI 追加：Europe PMC（PMID 40386219）で要旨を確認し、再構成・欠落試験の寄与順位（ゲラニオール1位・リナロール2位・サリチル酸メチル3位・フェニルアセトアルデヒド4位・β-ミルセン5位・ベンズアルデヒド6位）が scope と一致。DOI 10.3389/fnut.2025.1577302 を記録に追加した（Low）。
- 全文・要旨の数値スキャン（再現実行・永続保存）：負荷出典324件（リンク・プロファイル・素材・感覚・ルール・傾向・モデルの根拠として参照される出典。化合物側の参照のみの4件を除く定義で前回集計と一致）のうち DOI を持つ281件を Europe PMC で検索し、要旨取得226件・PMCID 97件。PMC 全文は87件を取得（10件は EPMC の fullTextXML が HTTP 500 で取得不能：bastos-2019／camu-2008／bina-2017／hagura-2013／kim-2022／jfst-2018／miraj-2017／nolden-2019／piyasena-2025／zhang-2019。再試行でも 500 のため到達不能として記録）。全文スキャン（scope 内の数値トークンの全文内存在）：87件中86件が全数値一致、残る1件 cornejo-2018 は「約3,600年」の表記差（全文は 3600 years）で実質一致。要旨スキャン：226件中163件が全数値一致、63件にフラグ。内訳は、PMC 全文側で数値の存在が確認できたもの29件、日付・ID のアーティファクト（再照合日 2026-11-12、PMC ID）、化合物名「1,8-シネオール」の数値化、出版社全文で確認済みの 'full' 格付け分、要旨に載らない試料数・表中の値であり、原著の値と矛盾するケースはゼロだった。
- テスト・実測（最終）：typecheck clean、vitest 154/154 全合格、build 成功。全5画面（ペアリング／素材検索／素材詳細／香味化学／文献）×幅5種（1280／768／375／320／280px）で横はみ出し0・文字の切れ0、ヘッダー高は 51px（768px以上）／82px（375px）／122px（320px以下）。375×700px ではペアリング操作パネルは sticky にならず（第17ラウンド Critical の再発なし。sticky はアプリヘッダーのみ）。素材詳細（アッサム）のシミュレーションでカフェイン数値モデルの出典が Jaganyi & Price 1999 と表示されることを実画面で確認した。
- 作業基盤の事故と復旧：2026-11-12 13:05 のランタイム再起動で /tmp 配下の監査中間ファイル（全文取得ジョブ2本の途中結果を含む）が消失した。アプリ本体の変更（src/・docs/）は永続領域にあり無事だったため、中間生成物は永続場所（~/workspace/dev/fpl-audit18/）へ再生成して監査を完遂した。再生成した集計値は消失前の集計（出典342／800／DOI 694→695、負荷出典324）と一致することを確認済み。
