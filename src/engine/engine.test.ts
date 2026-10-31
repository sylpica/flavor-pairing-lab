import { describe, it, expect } from 'vitest'
import { analyzePairing, validateRatios, defaultShares } from './pairing'
import { evaluateRoast, evaluateExtraction } from './simulation'
import { materialById } from '../data'

const sencha = materialById('tea-sencha')!
const dark = materialById('choco-dark-roasted')!
const hojicha = materialById('tea-hojicha')!

describe('比率の初期配分', () => {
  it('2〜4素材で必ず合計100になる（99%のような初期不一致を作らない）', () => {
    for (const n of [2, 3, 4]) {
      const s = defaultShares(n)
      expect(s).toHaveLength(n)
      expect(s.reduce((a, b) => a + b, 0)).toBe(100)
    }
    expect(defaultShares(3)).toEqual([34, 33, 33])
  })
})

describe('ペアリングエンジン', () => {
  it('2素材で分析でき、スコア的な数値を返さない', () => {
    const a = analyzePairing([sencha, dark])
    expect(a.inferenceNotice).toContain('官能評価の結果ではありません')
    expect(JSON.stringify(a)).not.toMatch(/score|スコア/i)
  })
  it('1素材・5素材はエラー', () => {
    expect(() => analyzePairing([sencha])).toThrow()
    expect(() => analyzePairing([sencha, dark, hojicha, materialById('tea-matcha')!, materialById('choco-milk')!])).toThrow()
  })
  it('お茶×チョコでは直接研究ルールが発火する', () => {
    const a = analyzePairing([sencha, dark])
    expect(a.interactions.some((i) => i.ruleId === 'direct-tea-chocolate-study')).toBe(true)
  })
  it('共通化合物には必ず注意文が付く', () => {
    const a = analyzePairing([sencha, materialById('tea-black-general')!])
    for (const c of a.sharedCompounds) expect(c.caution.length).toBeGreaterThan(0)
  })
  it('配合比率：合計100%以外はエラー文を返す', () => {
    expect(validateRatios({ a: 50, b: 50 }, ['a', 'b'])).toBeNull()
    expect(validateRatios({ a: 50, b: 40 }, ['a', 'b'])).not.toBeNull()
    expect(validateRatios({ a: -1, b: 101 }, ['a', 'b'])).not.toBeNull()
    expect(validateRatios({ a: Number.NaN, b: 100 }, ['a', 'b'])).not.toBeNull()
  })
})

describe('シミュレーション', () => {
  it('焙煎済み素材（ほうじ茶）は焙煎対象外として扱う', () => {
    const r = evaluateRoast(hojicha, { tempC: 150, minutes: 10 })
    expect(r.applicable).toBe(false)
    expect(r.statusNote).toContain('焙煎済み')
  })
  it('抽出できない素材（チョコ）は抽出対象外', () => {
    const r = evaluateExtraction(dark, { tempC: 80, seconds: 60, doseG: 3, waterMl: 150 })
    expect(r.applicable).toBe(false)
  })
  it('範囲外の温度は警告し、外挿しない', () => {
    const r = evaluateRoast(dark, { tempC: 400, minutes: 10 })
    expect(r.warnings.length).toBeGreaterThan(0)
    const e = evaluateExtraction(sencha, { tempC: 120, seconds: 60, doseG: 3, waterMl: 150 })
    expect(e.warnings.length).toBeGreaterThan(0)
  })
  it('正常条件では定性的傾向が返る', () => {
    const e = evaluateExtraction(sencha, { tempC: 80, seconds: 60, doseG: 3, waterMl: 150 })
    expect(e.applicable).toBe(true)
    expect(e.tendencies.length).toBeGreaterThan(0)
    for (const t of e.tendencies) expect(t.limits.length).toBeGreaterThan(0)
  })
})
