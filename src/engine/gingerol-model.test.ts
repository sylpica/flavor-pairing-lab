import { describe, it, expect } from 'vitest'
import {
  gingerolRateConstants,
  gingerolEquilibrium,
  gingerolRemainingFraction,
  GINGEROL_MODEL_ANCHORS,
  GINGEROL_MODEL_TEMP_MIN_C,
  GINGEROL_MODEL_TEMP_MAX_C,
} from './gingerol-model'

// ピンはすべて原著（Bhattarai, Tran & Duke 2001, J Pharm Sci 90(10):1658–1664）の
// Table 1（pH 1 水溶液、Kf・Kr は h⁻¹）と、そこから計算される平衡分率・半減時間に置く。
// 原著本文の叙述（60℃・24時間で50%以上分解等）は Table 1 の定数と整合しないため使わない。
describe('ジンゲロール⇌ショウガオール可逆変換モデル（Bhattarai et al. 2001, Table 1）', () => {
  it('アンカー温度では Table 1 の Kf・Kr をそのまま返す', () => {
    for (const a of GINGEROL_MODEL_ANCHORS) {
      const r = gingerolRateConstants(a.tempC)
      expect(r).not.toBeNull()
      expect(r!.kfPerHour).toBeCloseTo(a.kfPerHour, 12)
      expect(r!.krPerHour).toBeCloseTo(a.krPerHour, 12)
    }
  })
  it('80℃で Kf+Kr = 0.133 h⁻¹（Table 1）', () => {
    const r = gingerolRateConstants(80)!
    expect(r.kfPerHour + r.krPerHour).toBeCloseTo(0.133, 10)
  })
  it('80℃の平衡到達の半減時間は ln2/0.133 ≈ 5.2時間（残存分率が平衡との中点になる）', () => {
    const halfTime = Math.log(2) / 0.133
    expect(halfTime).toBeCloseTo(5.2, 1)
    // Aeq ≈ 0.5338 のとき、中点は (1 + Aeq) / 2 ≈ 0.7669
    expect(gingerolRemainingFraction(80, halfTime)).toBeCloseTo(0.7669, 3)
  })
  it('平衡分率：80℃でジンゲロール ≈53.5%、37℃で ≈76.3%、100℃でショウガオール ≈60.9%', () => {
    // Table 1 の K（80℃ 0.87／37℃ 0.31／100℃ 1.56）からの計算値。
    // 実装は Kf/Kr から K を求めるため、表の丸めた K とは僅かにずれる（許容範囲内）。
    expect(gingerolEquilibrium(80)!.equilibriumConstantK).toBeCloseTo(0.87, 1)
    expect(gingerolEquilibrium(80)!.gingerolFraction).toBeCloseTo(0.535, 2)
    expect(gingerolEquilibrium(37)!.equilibriumConstantK).toBeCloseTo(0.31, 1)
    expect(gingerolEquilibrium(37)!.gingerolFraction).toBeCloseTo(0.763, 2)
    expect(gingerolEquilibrium(100)!.equilibriumConstantK).toBeCloseTo(1.56, 1)
    expect(gingerolEquilibrium(100)!.shogaolFraction).toBeCloseTo(0.609, 2)
  })
  it('平衡分率の和は1になり、温度が高いほどジンゲロール分率は下がる', () => {
    for (const t of [37, 60, 80, 90, 100]) {
      const eq = gingerolEquilibrium(t)!
      expect(eq.gingerolFraction + eq.shogaolFraction).toBeCloseTo(1, 10)
    }
    expect(gingerolEquilibrium(100)!.gingerolFraction).toBeLessThan(gingerolEquilibrium(37)!.gingerolFraction)
  })
  it('時間とともに平衡へ単調に近づき、t=0 では1（全量ジンゲロール）', () => {
    expect(gingerolRemainingFraction(80, 0)).toBeCloseTo(1, 10)
    const seq = [1, 5, 10, 24, 48].map((h) => gingerolRemainingFraction(80, h)!)
    for (let i = 1; i < seq.length; i++) expect(seq[i]).toBeLessThan(seq[i - 1])
    expect(seq[seq.length - 1]).toBeGreaterThan(gingerolEquilibrium(80)!.gingerolFraction)
  })
  it('アンカー間の内挿は両端の値の間に入る（70℃の Kf は 60℃と80℃の間）', () => {
    const kf70 = gingerolRateConstants(70)!.kfPerHour
    expect(kf70).toBeGreaterThan(0.019)
    expect(kf70).toBeLessThan(0.062)
  })
  it('範囲外（37–100℃の外）・不正値は null（外挿しない）', () => {
    expect(GINGEROL_MODEL_TEMP_MIN_C).toBe(37)
    expect(GINGEROL_MODEL_TEMP_MAX_C).toBe(100)
    expect(gingerolRateConstants(36.9)).toBeNull()
    expect(gingerolRateConstants(100.1)).toBeNull()
    expect(gingerolRateConstants(Number.NaN)).toBeNull()
    expect(gingerolEquilibrium(20)).toBeNull()
    expect(gingerolRemainingFraction(80, -1)).toBeNull()
    expect(gingerolRemainingFraction(120, 1)).toBeNull()
  })
})
