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
  it('noteId が実在し、(noteId, tasteKey) の重複が無く、主対応は各ノート最大1つ', () => {
    const noteIds = new Set(flavorNotes.map((n) => n.id))
    const pairs = new Set<string>()
    const primaryCount = new Map<string, number>()
    for (const m of tasteNoteMappings) {
      expect(noteIds.has(m.noteId), `unknown note: ${m.noteId}`).toBe(true)
      const pair = `${m.noteId}:${m.tasteKey}`
      expect(pairs.has(pair), `duplicate mapping: ${pair}`).toBe(false)
      pairs.add(pair)
      if (m.role !== 'secondary') {
        primaryCount.set(m.noteId, (primaryCount.get(m.noteId) ?? 0) + 1)
      }
    }
    for (const [noteId, count] of primaryCount) {
      expect(count, `${noteId} の主対応が複数ある`).toBe(1)
    }
  })

  it('副対応は根拠・出典を必須とし、主対応とは別の味を指す（第15ラウンド）', () => {
    const secondaries = tasteNoteMappings.filter((m) => m.role === 'secondary')
    for (const m of secondaries) {
      expect(m.sourceIds?.length ?? 0, `${m.noteId} の副対応に出典が無い`).toBeGreaterThan(0)
      expect(m.basis, `${m.noteId} の副対応の根拠に「副対応」の明示が無い`).toContain('副対応')
      const primary = tasteNoteMappings.find((x) => x.noteId === m.noteId && x.role !== 'secondary')
      expect(primary, `${m.noteId} の副対応に対応する主対応が無い`).toBeTruthy()
      expect(primary!.tasteKey, `${m.noteId} の副対応が主対応と同じ味を指す`).not.toBe(m.tasteKey)
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
    // 対応エントリ数ではなく、対応づけられたノートの種類数で数える（副対応は同じノートの追加エントリ）
    expect(mapped.size + unmappedTasteNotes.length).toBe(flavorNotes.length)
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
      ['acetic-acid', 'sour'], ['lactic-acid', 'sour'],
    ]
    // 食品経由の (a) 対応の例：カカオノート→苦味は、カカオの呈味成分（テオブロミン・カフェイン）が
    // 苦味を持つことに基づく（化合物の noteIds ではなく食品レベルの対応）
    const cacao = tasteNoteMappings.find((x) => x.noteId === 'cacao-note' && x.role !== 'secondary')
    expect(cacao?.tasteKey).toBe('bitter')
    expect(cacao?.tier).toBe('general')
    // 副対応（第15ラウンド）：カカオ→酸味は、発酵由来の呈味成分（酢酸・乳酸）が実際に含まれ
    // 酸味への寄与が原著（Holm 1993）と総説（Afoakwa 2008）で示されることに基づく (a) 対応
    const cacaoSec = tasteNoteMappings.find((x) => x.noteId === 'cacao-note' && x.role === 'secondary')
    expect(cacaoSec?.tasteKey).toBe('sour')
    expect(cacaoSec?.tier).toBe('general')
    expect(cacaoSec?.sourceIds).toEqual(expect.arrayContaining([
      'afoakwa-2008-cocoa-flavour-review', 'holm-1993-cocoa-organic-acids',
    ]))
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
