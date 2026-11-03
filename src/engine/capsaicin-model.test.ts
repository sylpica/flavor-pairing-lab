import { describe, it, expect } from 'vitest'
import {
  capsaicinRateConstant,
  capsaicinRetentionFraction,
  CAPSAICIN_MODEL_ANCHORS,
  CAPSAICIN_MODEL_TEMP_MIN_C,
  CAPSAICIN_MODEL_TEMP_MAX_C,
} from './capsaicin-model'

// ピンは原著（Arifin & Djaeni 2018, Bull Chem React Eng Catal 13(2):365–372）の
// Table 3 の k（前処理系列、(µg/g)⁻¹·h⁻¹）と、C₀ = 1491.37 µg/g を用いた
// 二次モデル予測（70℃・8時間で保持率 ≈73.6%）に置く。
// 原著 Table 2 の実測保持率は約 75.7%（1129.30／1491.37 µg/g）。二次モデルの予測とは別物で、混用しない。
describe('カプサイシン乾燥分解モデル（Arifin & Djaeni 2018, Table 3、二次反応）', () => {
  it('アンカー温度では Table 3 の k をそのまま返す', () => {
    for (const a of CAPSAICIN_MODEL_ANCHORS) {
      expect(capsaicinRateConstant(a.tempC)).toBeCloseTo(a.kPerUgPerGPerHour, 12)
    }
    expect(capsaicinRateConstant(40)).toBeCloseTo(7e-6, 12)
    expect(capsaicinRateConstant(70)).toBeCloseTo(3e-5, 12)
  })
  it('70℃・8時間の二次モデル予測保持率は ≈73.6%（照合値）', () => {
    expect(capsaicinRetentionFraction(70, 8)).toBeCloseTo(0.736, 3)
  })
  it('t=0 では保持率1、時間・温度とともに単調に下がる', () => {
    expect(capsaicinRetentionFraction(70, 0)).toBeCloseTo(1, 10)
    const seq = [2, 4, 8, 16].map((h) => capsaicinRetentionFraction(70, h)!)
    for (let i = 1; i < seq.length; i++) expect(seq[i]).toBeLessThan(seq[i - 1])
    expect(capsaicinRetentionFraction(70, 8)!).toBeLessThan(capsaicinRetentionFraction(40, 8)!)
  })
  it('アンカー間の内挿は両端の値の間に入る（55℃の k は 50℃と60℃の間）', () => {
    const k55 = capsaicinRateConstant(55)!
    expect(k55).toBeGreaterThan(1e-5)
    expect(k55).toBeLessThan(2e-5)
  })
  it('範囲外（40–70℃の外）・不正値は null（調理域へ外挿しない）', () => {
    expect(CAPSAICIN_MODEL_TEMP_MIN_C).toBe(40)
    expect(CAPSAICIN_MODEL_TEMP_MAX_C).toBe(70)
    expect(capsaicinRateConstant(39.9)).toBeNull()
    expect(capsaicinRateConstant(70.1)).toBeNull()
    expect(capsaicinRateConstant(100)).toBeNull()
    expect(capsaicinRateConstant(Number.NaN)).toBeNull()
    expect(capsaicinRetentionFraction(70, -1)).toBeNull()
  })
})
