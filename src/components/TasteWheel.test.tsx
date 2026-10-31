// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { TasteWheel, buildTasteWheelModel, tasteWheelSignature } from './TasteWheel'
import { materialById, materials } from '../data'
import type { ProfileEntry, SensationEntry } from '../types'

const sen = (intensity: SensationEntry['intensity'], tier: SensationEntry['tier'] = 'measured'): SensationEntry =>
  ({ intensity, tier, sourceIds: [] })
const note = (noteId: string, intensity: ProfileEntry['intensity'], tier: ProfileEntry['tier'] = 'measured'): ProfileEntry =>
  ({ noteId, intensity, tier, sourceIds: [] })

describe('buildTasteWheelModel（味わいホイール3階層の表示モデル）', () => {
  it('第1階層は感覚データから、第2階層は対応づけられたノートから作る', () => {
    const model = buildTasteWheelModel(
      { umami: sen('moderate'), bitter: sen('moderate') },
      [note('seaweed', 'moderate'), note('green-leaf', 'strong'), note('coffee', 'weak')],
    )
    const umami = model.find((s) => s.key === 'umami')!
    expect(umami.derived).toBe(false)
    expect(umami.notes.map((n) => n.noteId)).toEqual(['seaweed'])
    const bitter = model.find((s) => s.key === 'bitter')!
    expect(bitter.notes.map((n) => n.noteId)).toEqual(['coffee'])
    // 対応の無いノート（green-leaf）は具体名として現れない
    expect(model.flatMap((s) => s.notes.map((n) => n.noteId))).not.toContain('green-leaf')
  })

  it('感覚データに無い味は、対応ノートから導出セグメント（推測）として立つ', () => {
    const model = buildTasteWheelModel(
      { bitter: sen('strong') },
      [note('honey', 'moderate')],
    )
    const sweet = model.find((s) => s.key === 'sweet')!
    expect(sweet).toBeTruthy()
    expect(sweet.derived).toBe(true)
    expect(sweet.entry).toBeUndefined()
    expect(sweet.notes.map((n) => n.noteId)).toEqual(['honey'])
    // 導出セグメントの重みは対応ノートの最大の重み（合計ではない）
    expect(sweet.weight).toBe(2)
  })

  it('感覚データにある味で対応ノートが無ければ、第1階層のみ（具体名を創作しない）', () => {
    const model = buildTasteWheelModel({ astringent: sen('strong') }, [note('jasmine', 'strong')])
    expect(model).toHaveLength(1)
    expect(model[0].key).toBe('astringent')
    expect(model[0].notes).toEqual([])
  })

  it('対応づけが推測のノートは inferred フラグが立つ（ノート自体が実測でも）', () => {
    const model = buildTasteWheelModel({ sweet: sen('weak') }, [note('berry', 'strong', 'measured')])
    const sweet = model.find((s) => s.key === 'sweet')!
    expect(sweet.notes[0].mappingTier).toBe('inferred')
    expect(sweet.notes[0].inferred).toBe(true)
  })

  it('第1階層の％は合計100になる', () => {
    for (const m of materials) {
      const model = buildTasteWheelModel(m.sensations, m.profile)
      if (model.length === 0) continue
      expect(model.reduce((a, s) => a + s.pct, 0), `${m.id} の％合計`).toBe(100)
    }
  })

  it('全素材で署名が取れ、変更前（味の集合のみ）より種類が増える', () => {
    const W = { weak: 1, moderate: 2, strong: 3, unknown: 0 } as const
    const before = new Set(materials.map((m) => (Object.keys(m.sensations) as (keyof typeof m.sensations)[])
      .filter((k) => W[m.sensations[k]!.intensity] > 0).sort().join('|')))
    const after = new Set(materials.map((m) => tasteWheelSignature(m.sensations, m.profile)))
    expect(after.size).toBeGreaterThan(before.size)
  })
})

describe('TasteWheel の描画（3階層）', () => {
  it('素材詳細相当：第1階層（味＋％）・第2階層（具体名）・第3階層（化合物）が描かれる', () => {
    const m = materialById('tea-sencha')!
    const { container } = render(
      <TasteWheel sensations={m.sensations} profileEntries={m.profile} compoundMaterialIds={[m.id]} />,
    )
    const svg = container.querySelector('svg.wheel')!
    // 第1階層の味ラベルと％
    expect(svg.textContent).toContain('うま味')
    expect(svg.textContent).toMatch(/%/)
    // 第2階層の具体名（煎茶の seaweed → うま味）
    expect(svg.textContent).toContain('海藻・磯')
    // 第3階層の化合物（外側の輪のパスが存在する）
    const paths = [...svg.querySelectorAll('path')]
    expect(paths.length).toBeGreaterThan(4)
    // 凡例に具体名と化合物名の小さい併記がある
    const legend = container.querySelector('.wheel-legend')!
    expect(legend.textContent).toContain('海藻・磯')
  })

  it('導出セグメントは推測として区別表示される（破線＋文字）', () => {
    const m = materialById('tea-assam')! // 感覚データは苦味・渋味のみ、甘味はノートから導出
    const { container } = render(
      <TasteWheel sensations={m.sensations} profileEntries={m.profile} compoundMaterialIds={[m.id]} />,
    )
    const svg = container.querySelector('svg.wheel')!
    const dashed = [...svg.querySelectorAll('path')].filter((p) => p.getAttribute('stroke-dasharray'))
    expect(dashed.length).toBeGreaterThan(0)
    expect(container.textContent).toContain('推測')
    expect(container.textContent).toContain('導出')
  })

  it('感覚データも対応ノートも無ければ未収録メッセージ', () => {
    const { container } = render(<TasteWheel sensations={{}} profileEntries={[]} />)
    expect(container.textContent).toContain('未収録')
  })
})
