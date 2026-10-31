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
