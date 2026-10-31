# 第11ラウンド 収穫ライン（D）の反映候補（実装用）

## B-1. contribution リンク候補（実測・寄与実証あり）
1. tea-dahongpao × ee-2-4-heptadienal / contribution / measured / 出典 `pairing-wei-2026-wuyi-rock-tea-grassy-off-odor`。conditions：露濡れ葉原料の武夷岩茶における青臭（欠点臭）の主因。通常原料のプロファイルではない旨を明記。GC-O＋添加・欠落試験で寄与確認。
2. tea-dahongpao × octanal / contribution / measured / 同上（欠点臭の主因4成分の一つ）。※octanal は現行リンク0件。
3. tea-dahongpao × hexanal / contribution / measured / 同上（既存リンクあり・低優先度。重複しない場合のみ）。
4. tea-dancong × methylbutanal-2 / contribution / measured / `ding-2026-dancong-refiring`。鳳凰単叢の再焙火試料、鍵成分の含量は90℃でピーク。ROAV≥1 の鍵成分。
5. tea-dancong × pentylfuran-2 / contribution / measured / 同上。
6. tea-dancong × diacetyl / contribution / measured / 同上（2,3-butanedione として同定。お茶での知見である旨を明記）。
7. tea-dark-puer × terpinen-4-ol / contribution / measured / `pairing-xu-2025-raw-puerh-ageing-cycles`。生プーアル8–10年保存品のマーカー。OAV≥1。
8. tea-dark-puer × alpha-terpinene / contribution / measured / 同上。1–3年保存品のマーカー。
9. tea-dark-puer × pentylfuran-2 / contribution / measured / 同上。2-amylfuran として1–3年保存品のマーカー。

## B-2. composition リンク候補（実測）
10. tea-hojicha × **ethyl-dimethylpyrazine-2-3-6（新規化合物：2-ethyl-3,6-dimethylpyrazine）** / composition / measured / `gotti-2021-green-tea-roasting`＋`mizukami-2008-hojicha-pyrazine`。緑茶の焙煎（160〜200℃）で生成し未焙煎緑茶には不在（焙煎マーカー）。※既存の 2-ethyl-3,5-dimethylpyrazine とは位置異性体で別化合物。同定子：CAS 13360-65-1、CID 25916、C8H12N2、InChIKey WHMWOHBXYIZFPF-UHFFFAOYSA-N。新規化合物のIDは既存の命名規則に合わせて実装側で決めること。
11. tea-hojicha × ee-2-4-heptadienal / composition / measured / `gotti-2021-green-tea-roasting`。焙煎前後で含量変動を定量。
12. tea-tieguanyin × egc / composition / measured / `cao-2021-tieguanyin-roasting`。焙煎（130℃）でフラバン-3-オール類として減少。
13. tea-tieguanyin × gallic-acid / composition / measured / 同上。焙煎で増加。
14. tea-tieguanyin × flavonol-glycosides / composition / measured / 同上。焙煎で減少。
15. tea-tieguanyin × alkylpyrazines / composition / measured / 同上。高温焙煎で含窒素複素環が増加（クラスレベル）。
16. tea-tieguanyin × theanine / composition / measured / 同上。焙煎で減少。
17. tea-tieguanyin × ee-2-4-heptadienal / composition / measured / `pairing-zeng-2022-tieguanyin-volatiles`。鉄観音で高含量（34.15–70.68 μg/L、VIP>1・ACI>1）。
18. tea-tieguanyin × e-2-octenal / composition / measured / 同上（1.57–2.94 μg/L）。
19. tea-tieguanyin × **heptanal（新規化合物）** / composition / measured / 同上（1.60–2.79 μg/L）。同定子：CAS 111-71-7、CID 8130、C7H14O、InChIKey FXHGMKSSBGDXIY-UHFFFAOYSA-N。
20. tea-dahongpao × catechins / composition / measured / `liu-2021-wuyi-rock-tea-roasting`。武夷岩茶4品種で焙煎度が高いほどカテキンが減少（4品種合算の方向性の知見として conditions に明記）。
21. tea-dancong × hotrienol / composition / measured / `pairing-zheng-2024-dancong-aroma-types-gcms`。単叢5香型全てで相対含量最大群（14.8〜30.6%）。
22. tea-dancong × indole / composition / measured / 同上。香型により含量差（鴨屎香18.9%等）。
23. tea-dancong × methyl-salicylate / composition / measured / 同上。鋸剁のみ検出（低優先度）。
24. tea-dark-puer × caffeine / composition / measured / `pairing-yang-2025-ripened-puerh-mellow-thick-flavor`。熟プーアル渥堆発酵で増加。**conditions にカフェインの数値は書かない**（要旨値 65.38 mg/g は典型的値から外れるため）。
25. tea-dark-puer × theobromine / composition / measured / 同上。渥堆発酵で増加。
26. tea-dark-puer × epicatechin / composition / measured / 同上。渥堆発酵で増加。
27. tea-white-baimudan × flavonol-glycosides / composition / measured / `pairing-deng-2022-white-tea-flavonoid-glycosides`。萎凋中に配糖体が減少しアグリコンが増加。
28. tea-sencha × **quinic-acid（新規化合物：キナ酸）** / composition / measured / `pairing-shirai-2022-green-tea-organic-acids-hplc`。日本緑茶の葉中有機酸として HPLC 定量。同定子：CAS 77-95-2、CID 6508、C7H12O6、InChIKey AAWZDTNXLSGCEK-WYWMIBKRSA-N。※既存の coumaroylquinic-acid とは別化合物。
（任意扱い：Chen 2023 カテゴリーレベルの組成は実装しない。）

## B-3. 参考情報格の composition 候補（実測として見せない。tier は general、根拠は媒体の格を conditions に明記）
- spice-ceylon-cinnamon × cinnamaldehyde / composition / general / 根拠：EU PGI「Ceylon Cinnamon」製品仕様書（Commission Implementing Regulation (EU) 2022/144）。クイル油中のシンナムアルデヒド 50–70%。出典レコードを新規作成し、verified は bibliographic 相当（参考情報）として扱い、kind は 'standard' 等、既存の Source スキーマに合う形で登録すること（実装時に型を確認）。
- spice-ceylon-cinnamon × coumarin / composition / general / 同仕様書（上限 0.004% 未満。カシアとの区別点）。
- spice-ceylon-cinnamon × eugenol / composition / general / Suriyagoda et al. 2021（査読つき総説）。樹皮油の主成分の一つ（5–10%）。樹皮油組成である旨を明記。
- spice-mace × sabinene / composition / general / メース精油の GC-MS 組成データ compilations。精油中の構成成分として明記（Western Ghats 産メース精油で 38.37%）。
- spice-mace × myristicin / composition / general / 同上（精油中で 1.3–3.8%）。
- herb-dill-weed × alpha-phellandrene / composition / general / ディル葉油の GC-MS 研究。葉の精油の主成分として明記（産地で 29–63% と幅がある）。
- spice-white-pepper × piperine / composition / general / **条件つき**：実装時に FooDB の Pepper (white) ページで occurrence を再確認できた場合のみ採用。再確認できなければ見送る（Web の二次記事間で数値が矛盾するため）。

## B-4. 感覚・プロファイル提案（すべて inferred。公式機関の品種解説が根拠）
- tea-saemidori の sensations に umami を追加（moderate / inferred）。根拠：農研機構『茶品種ハンドブック第6版』＋育成論文（アミノ酸含量が高くうま味に富む）。
- tea-asatsuyu の sensations に umami を追加（moderate / inferred）。根拠：京都府茶業研究所ほかの品種解説（「天然玉露」、濃厚な甘味とうま味・渋味少なめ）。
- tea-harumodori の sensations に umami を追加（moderate / inferred）。根拠：農研機構の品種一覧（渋みが少なくうま味が強い）。
- tea-sofu の profile に orchid ノートを追加（weak / inferred）。根拠：農林水産省 MAFF TOPICS（東洋ランのような花香）。
- tea-hongyu の profile に cinnamon-note ノートを追加（weak / inferred）。根拠：台湾茶業改良場系の品種解説（台茶18号のシナモン様スパイス感）。
- tea-tsuiyu の profile に orchid ノートを追加（weak / inferred、低優先度・任意）。根拠：台茶13号の花香解説。
※ sensations/profile の既存スキーマと出典の付け方（note や sensation に sourceIds があるか）は実装時に現行データ構造を確認し、それに合わせる。出典レコードが必要な場合は参考情報格で新規作成する。

## B-5. 既存ルールへの出典追加
- 既存ルール `capsaicin-sweetness-suppression` に出典 `pairing-prescott-1995-effects-oral-chemical` を追加し、記述に「酸味は抑制されない」点の精密化を加える（カプサイシンが甘味・フレーバー知覚を抑制し酸味は抑制しない心理物理実験）。

## 採用しないもの（記録）
- 茯磚茶・六堡茶・正山小種・包種茶・阿波晩茶・蔵茶・玄米茶・信陽毛尖は素材が存在しないため対象外（素材新設は今回の範囲外）。
- choco-dominican-trinitario のプロファイル候補は作れなかった（Godocikova 2020 に産地別の個別データなし）。空プロファイルのまま正直に残す。
- Huang 2023（福雲6号）の decanal/benzyl alcohol は同定子未検証のため今回は見送り。Yu 2026 の知見は日本の釜炒り茶への製法類推に留まるため見送り。
