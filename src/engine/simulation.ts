import type { Material, SimulationTendency } from '../types'
import { simulationTendencies } from '../data/simulations'

export interface RoastParams { tempC: number; minutes: number }
export interface ExtractParams { tempC: number; seconds: number; doseG: number; waterMl: number }

export interface SimulationResult {
  applicable: boolean
  tendencies: SimulationTendency[]
  warnings: string[]
  /** 計算不能・適用外を正しく扱うための状態表示 */
  statusNote: string
}

export function evaluateRoast(material: Material, params: RoastParams): SimulationResult {
  const warnings: string[] = []
  if (!material.roastable) {
    return {
      applicable: false, tendencies: [], warnings,
      statusNote: material.processing?.includes('焙煎済み')
        ? 'この素材はすでに焙煎済みのため、焙煎シミュレーションの対象外です。'
        : 'この素材は焙煎による香味変化のモデル対象外です（焙煎を前提としない素材）。',
    }
  }
  if (Number.isNaN(params.tempC) || Number.isNaN(params.minutes)) warnings.push('数値が入力されていません')
  if (params.tempC < 0 || params.tempC > 300) warnings.push('焙煎温度が想定範囲（0〜300℃）の外です。範囲外の外挿は行いません')
  if (params.minutes < 0 || params.minutes > 240) warnings.push('焙煎時間が想定範囲（0〜240分）の外です')
  const tendencies = simulationTendencies.filter(
    (t) => (t.parameter === 'roast-temp' || t.parameter === 'roast-time') && t.applicableDomains.includes(material.domain),
  )
  return {
    applicable: warnings.length === 0, tendencies, warnings,
    statusNote: '表示は文献に基づく定性的な傾向です。温度・時間から香りの強さを数値予測するモデルは採用していません。',
  }
}

export function evaluateExtraction(material: Material, params: ExtractParams): SimulationResult {
  const warnings: string[] = []
  if (!material.extractable) {
    return {
      applicable: false, tendencies: [], warnings,
      statusNote: 'この素材は抽出（浸出）による利用を前提としないため、抽出シミュレーションの対象外です。',
    }
  }
  if ([params.tempC, params.seconds, params.doseG, params.waterMl].some((v) => Number.isNaN(v))) warnings.push('数値が入力されていません')
  if (params.tempC < 0 || params.tempC > 100) warnings.push('抽出温度は水の抽出では0〜100℃の範囲で扱います')
  if (params.seconds < 0 || params.seconds > 3600) warnings.push('抽出時間が想定範囲の外です')
  if (params.doseG <= 0 || params.waterMl <= 0) warnings.push('素材量・湯量は正の数で指定してください')
  const tendencies = simulationTendencies.filter(
    (t) => ['extract-temp', 'extract-time', 'dose', 'water'].includes(t.parameter) && t.applicableDomains.includes(material.domain),
  )
  return {
    applicable: warnings.length === 0, tendencies, warnings,
    statusNote: '表示は文献に基づく定性的な傾向です。抽出量の数値予測は行いません。素材量と湯量の比は濃さの条件として記録されます。',
  }
}
