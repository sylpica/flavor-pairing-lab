import type { Source } from '../types'

/**
 * 文献画面での出典マージ。再確認済みレジストリと pairing 由来の台帳には
 * 同一論文が両方に載る場合があるため、正規化タイトル＋年の一致で重複を検出し、
 * 台帳側を落として再確認済み側に統合する（情報量の多い再確認済みを正とする）。
 */

/** 題名の正規化：NFKC・小文字化・英数字と CJK 以外（空白・句読点・記号）を除去 */
export function normalizeSourceTitle(title: string): string {
  return title.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '')
}

export function sourceMatchKey(title: string, year: number): string {
  return `${normalizeSourceTitle(title)}|${year}`
}

export interface MergedLibrarySources {
  /** 表示用の出典一覧（再確認済み＋重複を除いた台帳） */
  sources: Source[]
  /** 重複を除いた後に残った台帳側の出典 */
  ledgerKept: Source[]
  /** 重複として台帳側から落とした件数 */
  removedCount: number
}

/** DOI の正規化（大文字小文字・前後空白・doi.org 接頭辞の差を吸収） */
export function normalizeDoi(doi: string | undefined): string | null {
  if (!doi) return null
  const d = doi.trim().toLowerCase().replace(/^https?:\/\/(dx\.)?doi\.org\//, '')
  return d === '' ? null : d
}

export function mergeLibrarySources(verified: Source[], ledger: Source[]): MergedLibrarySources {
  // 一致判定は「正規化タイトル＋年」を基本とし、加えて DOI の一致でも同一文献とみなす
  // （題名の表記ゆれ・誤記で取りこぼす重複を拾うため。監査 2026-11-03）。
  // 題名と年が同じでも DOI が互いに異なる場合は、同名・同年の別論文として統合しない。
  const verifiedByKey = new Map<string, Source[]>()
  for (const v of verified) {
    const k = sourceMatchKey(v.title, v.year)
    verifiedByKey.set(k, [...(verifiedByKey.get(k) ?? []), v])
  }
  const verifiedDois = new Set(verified.map((v) => normalizeDoi(v.doi)).filter((d): d is string => d !== null))
  const ledgerKept: Source[] = []
  let removedCount = 0
  for (const s of ledger) {
    const doi = normalizeDoi(s.doi)
    const sameKey = verifiedByKey.get(sourceMatchKey(s.title, s.year)) ?? []
    const titleMatch = sameKey.some((v) => {
      const vd = normalizeDoi(v.doi)
      return doi === null || vd === null || vd === doi
    })
    const doiMatch = doi !== null && verifiedDois.has(doi)
    if (titleMatch || doiMatch) removedCount++
    else ledgerKept.push(s)
  }
  return { sources: [...verified, ...ledgerKept], ledgerKept, removedCount }
}
