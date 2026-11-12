// 紅茶のカフェイン抽出モデル（数値モデル第1号）
//
// 式: Spiro & Jago 1982 の定常状態モデルに基づく見かけの一次速度式。
//   f(t) = Ct / C∞ = 1 − exp(−k·t)                       …(1)
//   k(T) = k(Tref) · exp[ −Ea/R · (1/T − 1/Tref) ]        …(2)（Arrhenius 型の温度補正）
// Ct: 時刻 t の抽出液中濃度、C∞: 平衡濃度、k: 一次速度定数（min⁻¹）、
// T: 絶対温度（K）、R = 8.314 J·mol⁻¹·K⁻¹。
// 返すのは絶対量（mg 等）ではなく、平衡に対する抽出割合のみ。
//
// パラメータ（公開情報で値を確認したものだけを使用し、創作値は入れない）:
//   k(80 ℃) = 0.99 min⁻¹、Ea = 40.3 kJ/mol
//   出典: Jaganyi D & Price RD 1999「Kinetics of tea infusion: the effect of
//   the manufacturing process on the rate of extraction of caffeine」
//   （Food Chemistry 64(1):27–31、DOI 10.1016/S0308-8146(98)00101-0）。
//   南アフリカ産紅茶（粒度 1.40–2.00 mm）からのカフェイン抽出を HPLC で実測し、
//   Spiro & Jago 1982 の定常状態モデルで k(80℃)=0.99 min⁻¹、Ea=40.3 kJ/mol を
//   報告（抄録で全値を確認、2026-11-12 再監査で確定）。
//   ※2026-11-01 の監査修正フェーズで Price WE & Spitzer JC 1993（Food Chemistry
//   46(2):133–136、可溶成分全体の抽出速度・Ea 41 kJ/mol、オーストラリア産 CTC 茶）
//   と取り違えられていたものを、2026-11-12 の再監査で抄録照合により訂正した。
//   「Price RD」は誤記ではなく Jaganyi & Price の正しい著者表記である。
// 相互照合: Jaganyi & Mdletshe 2000（アッサム紅茶、粒度 1.18–1.40 mm、蒸留水、
//   Food Chemistry 70(2):163–165）は Ea = 45 ± 2 kJ/mol（ルース）を報告しており、
//   Ea が 40–45 kJ/mol の範囲にあることは独立研究間で整合する。
//   本モデルは、同一研究内で対になった k と Ea（上記の南アフリカ産紅茶の報告値）を
//   1 組のパラメータセットとして採用する（研究間の値を混ぜない）。
//   なお同論文では、ティーバッグ入りは k がルースより約 29% 小さい。
//
// 適用範囲: 紅茶（発酵茶）、粒度およそ 1.2–2.0 mm の砕けた葉の水抽出を想定。
//   計算温度範囲は 40–95 ℃とする。これは基準温度 80 ℃の近傍に計算を限定する
//   実装上のガードであり、原著の実測温度範囲の詳細は抄録では未確認であるため、
//   80 ℃から離れるほど目安の度合いが強まる。範囲外は計算せず null を返す。
//   緑茶・烏龍茶・抹茶（粉末懸濁）には適用しない（画面側で紅茶素材に限定する）。

/** パラメータ原著の出典 ID（出典レジストリに実在することをテストで検証する） */
export const CAFFEINE_MODEL_SOURCE_ID = 'jaganyi-price-1999-caffeine-kinetics'
/** 基準温度（℃）と、その温度での一次速度定数 k（min⁻¹） */
export const CAFFEINE_MODEL_K_REF_PER_MIN = 0.99
export const CAFFEINE_MODEL_T_REF_C = 80
/** 活性化エネルギー Ea（J/mol） */
export const CAFFEINE_MODEL_EA_J_PER_MOL = 40300
/** 気体定数 R（J·mol⁻¹·K⁻¹） */
const R_GAS = 8.314
/** 計算を行う温度範囲（℃）。範囲外は外挿せず null */
export const CAFFEINE_MODEL_TEMP_MIN_C = 40
export const CAFFEINE_MODEL_TEMP_MAX_C = 95

/** 温度（℃）から一次速度定数 k（min⁻¹）を返す。適用範囲外・不正値は null。 */
export function caffeineRateConstantPerMin(tempC: number): number | null {
  if (!Number.isFinite(tempC)) return null
  if (tempC < CAFFEINE_MODEL_TEMP_MIN_C || tempC > CAFFEINE_MODEL_TEMP_MAX_C) return null
  const tK = tempC + 273.15
  const tRefK = CAFFEINE_MODEL_T_REF_C + 273.15
  return CAFFEINE_MODEL_K_REF_PER_MIN * Math.exp((-CAFFEINE_MODEL_EA_J_PER_MOL / R_GAS) * (1 / tK - 1 / tRefK))
}

/**
 * 平衡に対するカフェイン抽出割合 f（0–1）を返す。
 * tempC: 抽出温度（℃）、minutes: 抽出時間（分）。適用範囲外・不正値は null。
 */
export function caffeineExtractionFraction(tempC: number, minutes: number): number | null {
  if (!Number.isFinite(minutes) || minutes < 0) return null
  const k = caffeineRateConstantPerMin(tempC)
  if (k === null) return null
  return 1 - Math.exp(-k * minutes)
}
