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

export function mergeLibrarySources(verified: Source[], ledger: Source[]): MergedLibrarySources {
  const verifiedKeys = new Set(verified.map((s) => sourceMatchKey(s.title, s.year)))
  const ledgerKept: Source[] = []
  let removedCount = 0
  for (const s of ledger) {
    if (verifiedKeys.has(sourceMatchKey(s.title, s.year))) removedCount++
    else ledgerKept.push(s)
  }
  return { sources: [...verified, ...ledgerKept], ledgerKept, removedCount }
}
