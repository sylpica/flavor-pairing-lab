// ジンゲロール⇌ショウガオール可逆変換モデル（数値モデル第2号）
//
// 式: 可逆一次反応 [6]-gingerol（A）⇌ [6]-shogaol（B）。
//   A(t) = Aeq + (A0 − Aeq) · exp(−(Kf + Kr) · t)          …(1)
//   K = Beq / Aeq = Kf / Kr、 平衡時のジンゲロール分率 = 1 / (1 + K)  …(2)
// Kf: 正反応（ジンゲロール→ショウガオール）の速度定数（h⁻¹）
// Kr: 逆反応の速度定数（h⁻¹）、t: 時間（h）。
//
// パラメータ（原著の表から確認した値のみ。創作値は入れない）:
//   Bhattarai, Tran & Duke 2001, J Pharm Sci 90(10):1658–1664, DOI 10.1002/jps.1116
//   Table 1（pH 1 = 0.1 M HCl 水溶液、エタノール5% v/v 共存、合成試料の希薄水溶液）:
//     100℃ Kf 0.166 / Kr 0.106 / K 1.56
//      90℃ Kf 0.096 / Kr 0.105 / K 0.91
//      80℃ Kf 0.062 / Kr 0.071 / K 0.87
//      60℃ Kf 0.019 / Kr 0.040 / K 0.47
//      37℃ Kf 0.0011 / Kr 0.0035 / K 0.31
//   活性化エネルギー: 正反応 76 ± 4 kJ/mol、逆反応 52 ± 5 kJ/mol（37–100℃の Arrhenius フィット）。
//   頻度因子 A は原著に数値がないため、A を導出して使うことはせず、
//   アンカー点の間を Arrhenius 型（ln k を 1/T に対して線形）に内挿する。
//   アンカー温度では Table 1 の値をそのまま返す。
//
// 適用範囲: あくまで pH 1 水溶液のモデルであり、生姜そのもの・食品マトリクス中での
//   変換速度の予測ではない。計算温度範囲は原著の実測範囲 37–100℃ に限定し、
//   範囲外は計算せず null を返す。
//   なお原著本文の叙述（60℃・24時間で50%以上分解、100℃で2時間以内に平衡到達等）は
//   Table 1 の定数から計算される半減期と整合しないため、モデル・テストには使っていない。

/** パラメータ原著の出典 ID（出典レジストリに実在することをテストで検証する） */
export const GINGEROL_MODEL_SOURCE_ID = 'bhattarai-2001-gingerol-shogaol-kinetics'
/** Table 1 のアンカー点（温度℃、Kf・Kr は h⁻¹） */
export const GINGEROL_MODEL_ANCHORS: readonly { tempC: number; kfPerHour: number; krPerHour: number }[] = [
  { tempC: 37, kfPerHour: 0.0011, krPerHour: 0.0035 },
  { tempC: 60, kfPerHour: 0.019, krPerHour: 0.040 },
  { tempC: 80, kfPerHour: 0.062, krPerHour: 0.071 },
  { tempC: 90, kfPerHour: 0.096, krPerHour: 0.105 },
  { tempC: 100, kfPerHour: 0.166, krPerHour: 0.106 },
]
/** 活性化エネルギー（J/mol）。正反応 76 ± 4 kJ/mol、逆反応 52 ± 5 kJ/mol（原著の Arrhenius フィット） */
export const GINGEROL_MODEL_EA_FORWARD_J_PER_MOL = 76000
export const GINGEROL_MODEL_EA_REVERSE_J_PER_MOL = 52000
/** 計算を行う温度範囲（℃）。原著の実測範囲。範囲外は外挿せず null */
export const GINGEROL_MODEL_TEMP_MIN_C = 37
export const GINGEROL_MODEL_TEMP_MAX_C = 100

/** ln k を 1/T（K）に対して線形内挿する（アンカー温度では表の値をそのまま返す） */
function interpolateRate(tempC: number, pick: (a: { kfPerHour: number; krPerHour: number }) => number): number {
  const anchors = GINGEROL_MODEL_ANCHORS
  for (const a of anchors) if (tempC === a.tempC) return pick(a)
  for (let i = 0; i < anchors.length - 1; i++) {
    const a1 = anchors[i]
    const a2 = anchors[i + 1]
    if (tempC > a1.tempC && tempC < a2.tempC) {
      const invT = 1 / (tempC + 273.15)
      const invT1 = 1 / (a1.tempC + 273.15)
      const invT2 = 1 / (a2.tempC + 273.15)
      const lnK = Math.log(pick(a1)) + (Math.log(pick(a2)) - Math.log(pick(a1))) * ((invT - invT1) / (invT2 - invT1))
      return Math.exp(lnK)
    }
  }
  // 範囲チェック済みの呼び出しでのみ到達する想定だが、安全側に端点の値を返す
  return pick(tempC <= anchors[0].tempC ? anchors[0] : anchors[anchors.length - 1])
}

/** 温度（℃）での速度定数 Kf・Kr（h⁻¹）を返す。適用範囲外・不正値は null。 */
export function gingerolRateConstants(tempC: number): { kfPerHour: number; krPerHour: number } | null {
  if (!Number.isFinite(tempC)) return null
  if (tempC < GINGEROL_MODEL_TEMP_MIN_C || tempC > GINGEROL_MODEL_TEMP_MAX_C) return null
  return {
    kfPerHour: interpolateRate(tempC, (a) => a.kfPerHour),
    krPerHour: interpolateRate(tempC, (a) => a.krPerHour),
  }
}

/**
 * 平衡状態の内訳を返す。equilibriumConstantK = Kf/Kr、
 * gingerolFraction = 1/(1+K)（平衡時のジンゲロール分率）、shogaolFraction = K/(1+K)。
 * 適用範囲外・不正値は null。
 */
export function gingerolEquilibrium(tempC: number): { equilibriumConstantK: number; gingerolFraction: number; shogaolFraction: number } | null {
  const rates = gingerolRateConstants(tempC)
  if (rates === null) return null
  const k = rates.kfPerHour / rates.krPerHour
  return {
    equilibriumConstantK: k,
    gingerolFraction: 1 / (1 + k),
    shogaolFraction: k / (1 + k),
  }
}

/**
 * 純粋なジンゲロールから出発したとき、hours 時間後に残っているジンゲロールの分率（0–1）を返す。
 * A(t)/A0 = Aeq/A0 + (1 − Aeq/A0) · exp(−(Kf+Kr)·t)（A0 = 1 とした式(1)）。
 * 適用範囲外・不正値は null。
 */
export function gingerolRemainingFraction(tempC: number, hours: number): number | null {
  if (!Number.isFinite(hours) || hours < 0) return null
  const rates = gingerolRateConstants(tempC)
  const eq = gingerolEquilibrium(tempC)
  if (rates === null || eq === null) return null
  return eq.gingerolFraction + (1 - eq.gingerolFraction) * Math.exp(-(rates.kfPerHour + rates.krPerHour) * hours)
}
