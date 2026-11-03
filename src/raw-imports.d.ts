// テストで CSS 本文を検査するための最小限の Node API 宣言（@types/node を導入せずに型検査を通す）。
// Vitest の CSS 処理は既定で CSS を空文字に置き換えるため、?raw ではなくファイルを直接読む。
declare module 'node:fs' {
  export function readFileSync(path: string, encoding: 'utf8'): string
}
declare const process: { cwd(): string }
