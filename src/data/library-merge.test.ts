import { describe, it, expect } from 'vitest'
import type { Source } from '../types'
import { sources } from './index'
import { pairingImportedSources } from './sources-pairing-import'
import { mergeLibrarySources, normalizeSourceTitle, sourceMatchKey } from './library-merge'

const mk = (id: string, title: string, year: number): Source => ({
  id, kind: 'original', title, authors: 'A', year, url: 'https://example.org', scope: '', verified: 'full',
})

describe('出典タイトルの正規化', () => {
  it('空白・句読点・大文字小文字の差を吸収する', () => {
    expect(normalizeSourceTitle('Milk in Tea: Exploring the Chemistry!')).toBe(normalizeSourceTitle('milk in tea exploring the chemistry'))
    expect(sourceMatchKey('紅茶の香気に関する研究（第2報）', 1967)).toBe(sourceMatchKey('紅茶の香気に関する研究 第2報', 1967))
  })
  it('年が違えば一致しない', () => {
    expect(sourceMatchKey('Same Title', 2000)).not.toBe(sourceMatchKey('Same Title', 2001))
  })
})

describe('文献画面の出典マージ（台帳と再確認済みの重複除去）', () => {
  it('合成データ：重複は台帳側が落ち、再確認済みが残る', () => {
    const v = [mk('v1', 'Some Paper', 2020), mk('v2', 'Other Paper', 2021)]
    const l = [mk('l1', 'some paper.', 2020), mk('l2', 'Ledger Only', 2019)]
    const m = mergeLibrarySources(v, l)
    expect(m.removedCount).toBe(1)
    expect(m.sources.map((s) => s.id)).toEqual(['v1', 'v2', 'l2'])
    expect(m.ledgerKept.map((s) => s.id)).toEqual(['l2'])
  })

  it('実データ：台帳と重複する9件が除去され、総数は774件になる', () => {
    const m = mergeLibrarySources(sources, pairingImportedSources)
    expect(sources.length).toBe(302)
    expect(pairingImportedSources.length).toBe(481)
    expect(m.removedCount).toBe(9)
    expect(m.sources.length).toBe(774)
    // 除去後は、台帳側に残った出典が再確認済みとタイトル＋年で重複していない
    const verifiedKeys = new Set(sources.map((s) => sourceMatchKey(s.title, s.year)))
    for (const s of m.ledgerKept) expect(verifiedKeys.has(sourceMatchKey(s.title, s.year))).toBe(false)
    // 既知の重複（台帳の Piyasena 2025）は再確認済み側だけが残る
    expect(m.sources.some((s) => s.id === 'piyasena-2025-milk-in-tea-review')).toBe(true)
    expect(m.sources.some((s) => s.id === 'pairing-piyasena-2025-milk-tea-exploring')).toBe(false)
  })
})
