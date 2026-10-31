import { describe, it, expect } from 'vitest'
import { flavorNotes } from './flavors'
import { sources } from './index'
import { allCompounds } from './compounds'
import {
  tasteNoteMappings, unmappedTasteNotes, unaccountedNoteIds,
} from './taste-note-map'
import { SENSATION_LABEL } from '../types'

// 味わいホイール第2階層の対応づけデータ（taste-note-map）の整合性検証（第12ラウンド）
describe('味わいホイールの対応づけデータ', () => {
  it('noteId が実在し、重複が無い', () => {
    const noteIds = new Set(flavorNotes.map((n) => n.id))
    const seen = new Set<string>()
    for (const m of tasteNoteMappings) {
      expect(noteIds.has(m.noteId), `unknown note: ${m.noteId}`).toBe(true)
      expect(seen.has(m.noteId), `duplicate mapping: ${m.noteId}`).toBe(false)
      seen.add(m.noteId)
    }
  })

  it('tasteKey が有効で、basis が空でなく根拠の種別を含む', () => {
    for (const m of tasteNoteMappings) {
      expect(SENSATION_LABEL[m.tasteKey], `invalid tasteKey: ${m.tasteKey}`).toBeTruthy()
      expect(m.basis.length).toBeGreaterThan(10)
      expect(m.basis).toMatch(/^\((a|b|c)\) /)
      if (m.tier === 'inferred') expect(m.basis).toMatch(/推測/)
    }
  })

  it('sourceIds は再確認済みレジストリに実在する ID のみ', () => {
    const srcIds = new Set(sources.map((s) => s.id))
    for (const m of tasteNoteMappings) {
      for (const id of m.sourceIds ?? []) {
        expect(srcIds.has(id), `mapping ${m.noteId} references unknown source: ${id}`).toBe(true)
      }
    }
  })

  it('全42ノートが「対応あり」か「対応なし（理由つき）」で尽くされる', () => {
    expect(unaccountedNoteIds()).toEqual([])
    const mapped = new Set(tasteNoteMappings.map((m) => m.noteId))
    for (const u of unmappedTasteNotes) {
      expect(mapped.has(u.noteId), `both mapped and unmapped: ${u.noteId}`).toBe(false)
      expect(u.reason.length).toBeGreaterThan(5)
    }
    expect(tasteNoteMappings.length + unmappedTasteNotes.length).toBe(flavorNotes.length)
  })

  it('(a) 呈味成分の裏付け：代表化合物が対応先の味を tasteKeys に持つノートが存在する', () => {
    // 化合物データ側で検証可能な対応（ノートに結びつく化合物が、その味の tasteKeys を持つ）
    const checkable: [string, string][] = [
      ['minty', 'cooling'], ['camphoraceous', 'cooling'], ['anise', 'sweet'],
      ['cinnamon-note', 'warming'], ['clove-note', 'warming'],
    ]
    for (const [noteId, tasteKey] of checkable) {
      const m = tasteNoteMappings.find((x) => x.noteId === noteId)
      expect(m?.tasteKey, `${noteId} の対応先`).toBe(tasteKey)
      expect(m?.tier).toBe('general')
      const backed = allCompounds.some((c) => c.noteIds.includes(noteId) && c.tasteKeys.includes(tasteKey as never))
      expect(backed, `${noteId} → ${tasteKey} を支える化合物（noteIds+tasteKeys）が化合物データに無い`).toBe(true)
    }
    // 有機酸・糖・アミノ酸などの呈味物質が化合物データに存在すること（食品経由の (a) 対応の土台）
    const tastants: [string, string][] = [
      ['citric-acid', 'sour'], ['malic-acid', 'sour'], ['sucrose', 'sweet'],
      ['lactose', 'sweet'], ['glutamic-acid', 'umami'], ['caffeine', 'bitter'],
      ['theobromine', 'bitter'], ['piperine', 'pungent'],
    ]
    // 食品経由の (a) 対応の例：カカオノート→苦味は、カカオの呈味成分（テオブロミン・カフェイン）が
    // 苦味を持つことに基づく（化合物の noteIds ではなく食品レベルの対応）
    const cacao = tasteNoteMappings.find((x) => x.noteId === 'cacao-note')
    expect(cacao?.tasteKey).toBe('bitter')
    expect(cacao?.tier).toBe('general')
    for (const [cid, tasteKey] of tastants) {
      const c = allCompounds.find((x) => x.id === cid)
      expect(c, `compound missing: ${cid}`).toBeTruthy()
      expect(c!.tasteKeys).toContain(tasteKey)
    }
  })

  it('渋味（収斂感）には香りノートを対応づけない（対応は味データ側で扱う）', () => {
    expect(tasteNoteMappings.some((m) => m.tasteKey === 'astringent')).toBe(false)
  })
})
