import { describe, it, expect } from 'vitest'
import { materials, sources } from './index'
import { allCompounds as compounds } from './compounds'
import { allLinks as materialCompoundLinks } from './links'
import { flavorNotes, flavorCategories } from './flavors'
import { interactionRules } from './interactions'
import { simulationTendencies } from './simulations'
import { CLASSIFICATION_LABELS, ORIGIN_LABELS, VARIETY_LABELS } from './axis-labels'

const sourceIds = new Set(sources.map((s) => s.id))
const materialIds = new Set(materials.map((m) => m.id))
const compoundIds = new Set(compounds.map((c) => c.id))
const noteIds = new Set(flavorNotes.map((n) => n.id))

describe('データ整合性（全件検証）', () => {
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
  it('出典には DOI か URL があり、主張範囲が書かれている', () => {
    for (const s of sources) {
      expect(s.url.length).toBeGreaterThan(0)
      expect(s.scope.length).toBeGreaterThan(0)
      expect(s.title.length).toBeGreaterThan(0)
      expect(s.authors.length).toBeGreaterThan(0)
    }
  })
})
