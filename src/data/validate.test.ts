import { describe, it, expect } from 'vitest'
import { materials, sources } from './index'
import { allCompounds as compounds } from './compounds'
import { allLinks as materialCompoundLinks } from './links'
import { flavorNotes, flavorCategories } from './flavors'
import { interactionRules } from './interactions'
import { simulationTendencies } from './simulations'
import { CLASSIFICATION_LABELS, ORIGIN_LABELS, VARIETY_LABELS } from './axis-labels'
import { pairingImportedSources } from './sources-pairing-import'
import { pairingBiblioNotes } from './biblio-notes-pairing'
import { materialYomi } from './material-yomi'
import { CAFFEINE_MODEL_SOURCE_ID } from '../engine/caffeine-model'
import { GINGEROL_MODEL_SOURCE_ID } from '../engine/gingerol-model'
import { CAPSAICIN_MODEL_SOURCE_ID } from '../engine/capsaicin-model'

const sourceIds = new Set(sources.map((s) => s.id))
const materialIds = new Set(materials.map((m) => m.id))
const compoundIds = new Set(compounds.map((c) => c.id))
const noteIds = new Set(flavorNotes.map((n) => n.id))

describe('データ整合性（全件検証）', () => {
  it('全素材に読み（かな検索用）があり、読みのキーが実在の素材だけを指す', () => {
    for (const m of materials) {
      const yomi = materialYomi[m.id]
      expect(typeof yomi === 'string' && yomi.length > 0, `${m.id} の読み`).toBe(true)
      expect(/^[ぁ-ゖー・]+$/.test(yomi), `${m.id} の読みはひらがなのみ: ${yomi}`).toBe(true)
    }
    for (const id of Object.keys(materialYomi)) expect(materialIds.has(id), `読みのキー ${id}`).toBe(true)
  })
  it('IDに重複がない', () => {
    expect(new Set(materials.map((m) => m.id)).size).toBe(materials.length)
    expect(new Set(compounds.map((c) => c.id)).size).toBe(compounds.length)
    expect(new Set(sources.map((s) => s.id)).size).toBe(sources.length)
    expect(new Set(flavorNotes.map((n) => n.id)).size).toBe(flavorNotes.length)
  })
  it('素材の出典・香味ノート参照がすべて実在する', () => {
    for (const m of materials) {
      for (const id of m.sourceIds) expect(sourceIds.has(id), `${m.id} の出典 ${id}`).toBe(true)
      for (const e of m.profile) {
        expect(noteIds.has(e.noteId), `${m.id} のノート ${e.noteId}`).toBe(true)
        for (const id of e.sourceIds) expect(sourceIds.has(id), `${m.id} のプロファイル出典 ${id}`).toBe(true)
        // 実測主張には出典が必須
        if (e.tier === 'measured') expect(e.sourceIds.length).toBeGreaterThan(0)
      }
      for (const e of Object.values(m.sensations)) {
        if (!e) continue
        for (const id of e.sourceIds) expect(sourceIds.has(id), `${m.id} の感覚出典 ${id}`).toBe(true)
        if (e.tier === 'measured') expect(e.sourceIds.length).toBeGreaterThan(0)
      }
    }
  })
  it('化合物の参照がすべて実在する', () => {
    for (const c of compounds) {
      for (const id of c.sourceIds) expect(sourceIds.has(id), `${c.id} の出典 ${id}`).toBe(true)
      for (const n of c.noteIds) expect(noteIds.has(n), `${c.id} のノート ${n}`).toBe(true)
      expect(c.sourceIds.length, `${c.id} に出典がある`).toBeGreaterThan(0)
    }
  })
  it('素材×化合物リンクの参照がすべて実在し、出典がある', () => {
    for (const l of materialCompoundLinks) {
      expect(materialIds.has(l.materialId), `リンクの素材 ${l.materialId}`).toBe(true)
      expect(compoundIds.has(l.compoundId), `リンクの化合物 ${l.compoundId}`).toBe(true)
      expect(l.sourceIds.length).toBeGreaterThan(0)
      for (const id of l.sourceIds) expect(sourceIds.has(id)).toBe(true)
    }
  })
  it('香味ノートはすべて実在するカテゴリに属する', () => {
    const catIds = new Set(flavorCategories.map((c) => c.id))
    for (const n of flavorNotes) expect(catIds.has(n.categoryId)).toBe(true)
  })
  it('相互作用ルール・シミュレーション傾向の出典が実在する', () => {
    for (const r of interactionRules) for (const id of r.sourceIds) expect(sourceIds.has(id), `ルール ${r.id}`).toBe(true)
    for (const t of simulationTendencies) for (const id of t.sourceIds) expect(sourceIds.has(id), `傾向 ${t.id}`).toBe(true)
  })
  it('ルビーは遺伝系統として登録されていない', () => {
    for (const m of materials) {
      if (m.classificationId === 'ruby') {
        expect(m.varietyId).toBe('not-a-lineage')
      }
    }
  })
  it('三軸の全IDに正規ラベルがある（プルダウンとカードの表記不一致を防ぐ）', () => {
    for (const m of materials) {
      expect(CLASSIFICATION_LABELS[m.classificationId], `${m.id} の分類 ${m.classificationId}`).toBeTruthy()
      expect(ORIGIN_LABELS[m.originId], `${m.id} の産地 ${m.originId}`).toBeTruthy()
      expect(VARIETY_LABELS[m.varietyId], `${m.id} の品種 ${m.varietyId}`).toBeTruthy()
    }
  })
  it('pairing 台帳（動的 import 対象）の ID に重複がなく、再確認済み出典と衝突しない', () => {
    const ledgerIds = pairingImportedSources.map((s) => s.id)
    expect(new Set(ledgerIds).size).toBe(ledgerIds.length)
    for (const id of ledgerIds) expect(sourceIds.has(id), `台帳 ID ${id} が再確認済みと衝突`).toBe(false)
    const noteIds = pairingBiblioNotes.map((n) => n.id)
    expect(new Set(noteIds).size).toBe(noteIds.length)
  })
  it('香味プロファイル署名（プロファイル＋感覚）が素材間で重複しない', () => {
    // 署名＝結果を決めるデータ（香りノート＋味覚・口腔感覚）の集合。
    // 香りプロファイルが空でも感覚エントリで結果が変わる素材（例：プベセンス種＝
    // 辛味のみ、ドミニカ共和国産 Trinitario＝根拠に基づく空プロファイル＋感覚）は、
    // この署名では空にならず個別に区別される（理由は各素材の scopeNote に明記）。
    const signature = (m: (typeof materials)[number]) => [
      ...m.profile.map((e) => `P:${e.noteId}|${e.intensity}|${e.tier}`),
      ...Object.entries(m.sensations).map(([k, e]) => `S:${k}|${e?.intensity}|${e?.tier}`),
    ].sort().join(';')
    const seen = new Map<string, string>()
    for (const m of materials) {
      const s = signature(m)
      expect(seen.has(s), `${m.id} の署名が ${seen.get(s)} と重複する`).toBe(false)
      seen.set(s, m.id)
    }
  })
  it('出典には DOI か URL があり、主張範囲が書かれている', () => {
    for (const s of sources) {
      expect(s.url.length).toBeGreaterThan(0)
      expect(s.scope.length).toBeGreaterThan(0)
      expect(s.title.length).toBeGreaterThan(0)
      expect(s.authors.length).toBeGreaterThan(0)
    }
  })
})

describe('監査（第13ラウンド）修正の回帰防止', () => {
  it('contribution/measured リンクが bibliographic のみの出典に依拠しない（A-01）', () => {
    const byId = new Map(sources.map((s) => [s.id, s]))
    for (const l of materialCompoundLinks) {
      if (l.kind !== 'contribution' || l.tier !== 'measured') continue
      const levels = l.sourceIds.map((id) => byId.get(id)?.verified)
      expect(
        levels.some((v) => v === 'full' || v === 'abstract'),
        `${l.materialId}×${l.compoundId} の出典確認レベル: ${levels.join(',')}`,
      ).toBe(true)
    }
  })
  it('出典の著者欄にプレースホルダ（調査ファイル参照）が残っていない（A-02）', () => {
    for (const s of [...sources, ...pairingImportedSources]) {
      expect(s.authors.includes('調査ファイル参照'), `${s.id} の著者欄`).toBe(false)
    }
  })
  it('数値モデル3件の原著出典 ID が出典レジストリに実在する（A-03）', () => {
    expect(sourceIds.has(CAFFEINE_MODEL_SOURCE_ID), CAFFEINE_MODEL_SOURCE_ID).toBe(true)
    expect(sourceIds.has(GINGEROL_MODEL_SOURCE_ID), GINGEROL_MODEL_SOURCE_ID).toBe(true)
    expect(sourceIds.has(CAPSAICIN_MODEL_SOURCE_ID), CAPSAICIN_MODEL_SOURCE_ID).toBe(true)
  })
})

describe('第16ラウンド（文献取り込み第2回）の回帰防止', () => {
  const mat = (id: string) => materials.find((m) => m.id === id)!
  const src = (id: string) => sources.find((s) => s.id === id)

  it('新規登録5件が一次情報で確認した書誌・格付けで存在する', () => {
    expect(src('horie-2018-matcha-composition')?.verified).toBe('abstract')
    expect(src('unno-2026-green-tea-composition')?.verified).toBe('full')
    expect(src('unno-2026-green-tea-composition')?.doi).toBe('10.3390/molecules31162934')
    expect(src('zheng-2025-baimudan-cultivars')?.verified).toBe('full')
    expect(src('wang-2022-oolong-regions')?.verified).toBe('full')
    expect(src('wang-2025-ancient-ripe-puerh')?.verified).toBe('full')
    // Zhang 2022 は PMC 全文で官能評価値を確認し full に格上げした
    expect(src('zhang-2022-tea-organic-acids')?.verified).toBe('full')
  })
  it('Q-07：抹茶の渋味は moderate のまま原著2件で補強され、玉露の weak には手を付けない', () => {
    const matcha = mat('tea-matcha')
    expect(matcha.sensations.astringent?.intensity).toBe('moderate')
    expect(matcha.sensations.astringent?.sourceIds).toContain('horie-2018-matcha-composition')
    expect(matcha.sensations.astringent?.sourceIds).toContain('unno-2026-green-tea-composition')
    const gyokuro = mat('tea-gyokuro')
    expect(gyokuro.sensations.astringent?.intensity).toBe('weak')
    expect(gyokuro.sensations.astringent?.sourceIds).toEqual(['ye-2022-bitterness-astringency'])
  })
  it('Q-08：紅茶の甘味は moderate に改められ酸味 weak が付き、試料留保が備考に残る', () => {
    const black = mat('tea-black-general')
    expect(black.sensations.sweet?.intensity).toBe('moderate')
    expect(black.sensations.sour?.intensity).toBe('weak')
    expect(black.sensations.sour?.note).toContain('TAV')
  })
  it('Q-08：黒茶（プーアル）の感覚値は熟茶専用データで書き換えない', () => {
    const puer = mat('tea-dark-puer')
    expect(puer.sensations.sweet?.intensity).toBe('weak')
    expect(puer.sensations.sour).toBeUndefined()
    expect(puer.sourceIds).toContain('wang-2025-ancient-ripe-puerh')
    expect(puer.scopeNote).toContain('反映していない')
  })
  it('Q-08：単叢に甘味 weak が付き、ミルクチョコに酸味 weak（未確認の明記つき）が付く', () => {
    const dancong = mat('tea-dancong')
    expect(dancong.sensations.sweet?.intensity).toBe('weak')
    expect(dancong.sensations.sweet?.note).toContain('単独実測ではない')
    const milk = mat('choco-milk')
    expect(milk.sensations.sour?.intensity).toBe('weak')
    expect(milk.sensations.sour?.sourceIds).toEqual(['afoakwa-2008-cocoa-flavour-review'])
    expect(milk.sensations.sour?.note).toContain('未確認')
  })
  it('Q-08：遺伝集団素材（クリオロ・ナシオナル）には味を付けない設計を維持する', () => {
    expect(Object.keys(mat('cacao-gen-criollo').sensations)).toHaveLength(0)
    expect(Object.keys(mat('cacao-gen-nacional').sensations)).toHaveLength(0)
  })
})
