// カプサイシン乾燥分解モデル（数値モデル第3号）
//
// 式: 二次反応 −dC/dt = k·C² の積分形。
//   1/C − 1/C₀ = k·t                                          …(1)
//   保持率 C/C₀ = 1 / (1 + C₀·k·t)                            …(2)
// C: カプサイシン含量（µg/g）、C₀: 初期含量、k: 二次速度定数（(µg/g)⁻¹·h⁻¹）、t: 時間（h）。
// 二次反応のため保持率は C₀ に依存する。本モデルは原著試料の C₀ を用い、その旨を表示する。
// （原著 eq.(3) には符号の誤植があることが調査で確認済み。正しい積分形は上記。）
//
// パラメータ（原著の表から確認した値のみ。創作値は入れない）:
//   Arifin & Djaeni 2018, Bull Chem React Eng Catal 13(2):365–372,
//   DOI 10.9767/bcrec.13.2.1660.365-372、Table 3（前処理系列）:
//     40℃ k = 7×10⁻⁶、50℃ k = 1×10⁻⁵、60℃ k = 2×10⁻⁵、70℃ k = 3×10⁻⁵（(µg/g)⁻¹·h⁻¹、有効数字1桁）
//   活性化エネルギー Ea = 45.10367 kJ/mol（Table 3 からの回帰で原著値を再現・検証済み）。
//   C₀ = 1491.37 µg/g（原著試料の初期含量）。
//   アンカー点の間は Arrhenius 型（ln k を 1/T に対して線形）に内挿し、
//   アンカー温度では Table 3 の値をそのまま返す。
//
// 適用範囲: 赤唐辛子（Capsicum frutescens）、前処理（ブランチング 80–90℃・3分＋
//   10%食塩水30分＋1% CaCl₂ 30分）後のトレイ乾燥（風速 0.22 m/s）、40–70℃。
//   調理温度域（100℃超）への外挿はしない。範囲外は計算せず null を返す。
//   照合: 70℃・8時間の二次モデル予測保持率は約 73.6%
//   （原著の実測保持率 75.7% は一次反応フィットの値であり、本モデルには混用しない）。

/** パラメータ原著の出典 ID（出典レジストリに実在することをテストで検証する） */
export const CAPSAICIN_MODEL_SOURCE_ID = 'arifin-djaeni-2018-capsaicin-drying-kinetics'
/** Table 3 のアンカー点（温度℃、k は (µg/g)⁻¹·h⁻¹） */
export const CAPSAICIN_MODEL_ANCHORS: readonly { tempC: number; kPerUgPerGPerHour: number }[] = [
  { tempC: 40, kPerUgPerGPerHour: 7e-6 },
  { tempC: 50, kPerUgPerGPerHour: 1e-5 },
  { tempC: 60, kPerUgPerGPerHour: 2e-5 },
  { tempC: 70, kPerUgPerGPerHour: 3e-5 },
]
/** 原著試料の初期カプサイシン含量 C₀（µg/g）。二次反応の保持率計算に必要 */
export const CAPSAICIN_MODEL_C0_UG_PER_G = 1491.37
/** 活性化エネルギー Ea（J/mol）。Table 3 からの回帰で原著値を再現した値 */
export const CAPSAICIN_MODEL_EA_J_PER_MOL = 45103.67
/** 計算を行う温度範囲（℃）。原著の乾燥実験範囲。範囲外は外挿せず null */
export const CAPSAICIN_MODEL_TEMP_MIN_C = 40
export const CAPSAICIN_MODEL_TEMP_MAX_C = 70

/** 温度（℃）での二次速度定数 k（(µg/g)⁻¹·h⁻¹）を返す。適用範囲外・不正値は null。 */
export function capsaicinRateConstant(tempC: number): number | null {
  if (!Number.isFinite(tempC)) return null
  if (tempC < CAPSAICIN_MODEL_TEMP_MIN_C || tempC > CAPSAICIN_MODEL_TEMP_MAX_C) return null
  const anchors = CAPSAICIN_MODEL_ANCHORS
  for (const a of anchors) if (tempC === a.tempC) return a.kPerUgPerGPerHour
  for (let i = 0; i < anchors.length - 1; i++) {
    const a1 = anchors[i]
    const a2 = anchors[i + 1]
    if (tempC > a1.tempC && tempC < a2.tempC) {
      const invT = 1 / (tempC + 273.15)
      const invT1 = 1 / (a1.tempC + 273.15)
      const invT2 = 1 / (a2.tempC + 273.15)
      const lnK = Math.log(a1.kPerUgPerGPerHour)
        + (Math.log(a2.kPerUgPerGPerHour) - Math.log(a1.kPerUgPerGPerHour)) * ((invT - invT1) / (invT2 - invT1))
      return Math.exp(lnK)
    }
  }
  return null
}

/**
 * 乾燥中のカプサイシン保持率 C/C₀（0–1）を返す（式(2)、C₀ は原著試料の値）。
 * tempC: 乾燥温度（℃）、hours: 乾燥時間（h）。適用範囲外・不正値は null。
 */
export function capsaicinRetentionFraction(tempC: number, hours: number): number | null {
  if (!Number.isFinite(hours) || hours < 0) return null
  const k = capsaicinRateConstant(tempC)
  if (k === null) return null
  return 1 / (1 + CAPSAICIN_MODEL_C0_UG_PER_G * k * hours)
}
