import { describe, it, expect } from 'vitest'
import {
  caffeineRateConstantPerMin,
  caffeineExtractionFraction,
  CAFFEINE_MODEL_TEMP_MIN_C,
  CAFFEINE_MODEL_TEMP_MAX_C,
} from './caffeine-model'

// 照合値はすべて公表パラメータ（南アフリカ産紅茶の実測報告値:
// k(80 ℃) = 0.99 min⁻¹、Ea = 40.3 kJ/mol）からの計算値。
// 調査ファイル（round7/simulation-models-research.md）の自己整合チェック
// 「80 ℃で k = 0.99 min⁻¹ のとき 3 分で約 95% が平衡に近づく」と一致すること。
describe('紅茶カフェイン抽出モデル（Spiro & Jago 定常状態モデル）', () => {
  it('基準温度 80℃ で公表値 k = 0.99 min⁻¹ に一致する', () => {
    expect(caffeineRateConstantPerMin(80)).toBeCloseTo(0.99, 10)
  })
  it('80℃・3分で平衡の約95%（公表パラメータからの照合値 0.9487）', () => {
    expect(caffeineExtractionFraction(80, 3)).toBeCloseTo(0.9487, 3)
  })
  it('80℃・1分で 0.6284', () => {
    expect(caffeineExtractionFraction(80, 1)).toBeCloseTo(0.6284, 3)
  })
  it('60℃では Arrhenius 補正で k = 0.4343 min⁻¹、3分で 0.7282', () => {
    expect(caffeineRateConstantPerMin(60)).toBeCloseTo(0.4343, 3)
    expect(caffeineExtractionFraction(60, 3)).toBeCloseTo(0.7282, 3)
  })
  it('95℃では k = 1.7319 min⁻¹', () => {
    expect(caffeineRateConstantPerMin(95)).toBeCloseTo(1.7319, 3)
  })
  it('温度が高いほど・時間が長いほど抽出割合は単調に増える', () => {
    const f60 = caffeineExtractionFraction(60, 2)!
    const f80 = caffeineExtractionFraction(80, 2)!
    const f80long = caffeineExtractionFraction(80, 5)!
    expect(f60).toBeLessThan(f80)
    expect(f80).toBeLessThan(f80long)
    expect(f80long).toBeLessThan(1)
  })
  it('t = 0 では 0、適用範囲の境界（40℃・95℃）では計算する', () => {
    expect(caffeineExtractionFraction(80, 0)).toBe(0)
    expect(caffeineRateConstantPerMin(CAFFEINE_MODEL_TEMP_MIN_C)).not.toBeNull()
    expect(caffeineRateConstantPerMin(CAFFEINE_MODEL_TEMP_MAX_C)).not.toBeNull()
  })
  it('適用範囲外の温度では計算しない（外挿しない）', () => {
    expect(caffeineRateConstantPerMin(39.9)).toBeNull()
    expect(caffeineRateConstantPerMin(95.1)).toBeNull()
    expect(caffeineExtractionFraction(20, 3)).toBeNull()
    expect(caffeineExtractionFraction(100, 3)).toBeNull()
  })
  it('不正な入力では計算しない', () => {
    expect(caffeineRateConstantPerMin(Number.NaN)).toBeNull()
    expect(caffeineExtractionFraction(80, -1)).toBeNull()
    expect(caffeineExtractionFraction(80, Number.NaN)).toBeNull()
  })
})
