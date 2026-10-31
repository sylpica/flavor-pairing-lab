// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import App from './App'

// 画面レンダリングと代表操作の検証（要件18の代表シナリオを jsdom で代替検証する。
// 実ブラウザE2Eは公開検証フェーズで別途行い、本テストの代替とは明記する）
describe('画面レンダリング', () => {
  beforeEach(() => { cleanup(); window.location.hash = '#/pairing' })

  it('ペアリング画面が表示され、初期選択で分析が出る', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /ペアリング（2〜4素材）/ })).toBeTruthy()
    expect(screen.getAllByText(/官能評価の結果ではありません/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/直接研究あり/).length).toBeGreaterThan(0)
  })

  it('素材検索画面で三軸プルダウンが出る', () => {
    window.location.hash = '#/search'
    render(<App />)
    expect(screen.getByLabelText('分類')).toBeTruthy()
    expect(screen.getByLabelText('産地')).toBeTruthy()
    expect(screen.getByLabelText('品種・系統')).toBeTruthy()
  })

  it('素材詳細でホイールと味覚グラフと出典が出る', () => {
    window.location.hash = '#/material/tea-sencha'
    render(<App />)
    expect(screen.getByRole('heading', { name: /煎茶/ })).toBeTruthy()
    expect(screen.getAllByText(/味覚・口腔感覚/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/出典/).length).toBeGreaterThan(0)
  })

  it('化合物詳細から関連素材へ辿れる', () => {
    window.location.hash = '#/compound/linalool'
    render(<App />)
    expect(screen.getByRole('heading', { name: /リナロール/ })).toBeTruthy()
    expect(screen.getByText(/報告されている素材/)).toBeTruthy()
  })

  it('文献画面で収録数が実データと一致する表示になる', async () => {
    window.location.hash = '#/library'
    render(<App />)
    expect(screen.getAllByText(/収録状況/).length).toBeGreaterThan(0)
    expect(screen.getByText(/網羅率/)).toBeTruthy()
    // 台帳データの動的読み込み後に、出典総数が741件として構成される
    expect(await screen.findByText('741', undefined, { timeout: 15000 })).toBeTruthy()
    // 出典・メモとも初期60件の段階表示になっている
    expect(screen.getAllByText(/60件を表示中/).length).toBeGreaterThanOrEqual(2)
  })

  it('素材詳細のホイールにノート名が直接描かれ、味わいモードへ切り替えられる', () => {
    window.location.hash = '#/material/tea-sencha'
    const { container } = render(<App />)
    const svgText = () => container.querySelector('svg')?.textContent ?? ''
    // 香りモード：ノート名がホイール上に描かれる（無地セグメントを作らない）
    expect(svgText()).toContain('香り')
    expect(svgText().length).toBeGreaterThan(10)
    // 味わいモードへ切替：味わいホイールが出て、香りの外側の輪（化合物）は消える
    fireEvent.click(screen.getByRole('tab', { name: '味わい' }))
    expect(svgText()).toContain('味わい')
    expect(svgText()).toContain('うま味')
    // 香りに戻せる
    fireEvent.click(screen.getByRole('tab', { name: '香り' }))
    expect(svgText()).toContain('ホイール')
  })

  it('素材詳細のホイール外側の輪に、その素材で報告された化合物名が描かれる', () => {
    window.location.hash = '#/material/tea-sencha'
    const { container } = render(<App />)
    const svgText = container.querySelector('svg')?.textContent ?? ''
    // 煎茶で寄与が報告されたリナロールが、ホイール（SVG）の中に化合物として現れる
    expect(svgText).toContain('リナロール')
  })

  it('文献画面に集計の拡充（品種・産地・記述子・根拠内訳）と出典の絞り込みがある', () => {
    window.location.hash = '#/library'
    render(<App />)
    expect(screen.getByText(/品種・系統（種類数）/)).toBeTruthy()
    expect(screen.getByText(/産地（種類数）/)).toBeTruthy()
    expect(screen.getByText(/根拠内訳/)).toBeTruthy()
    expect(screen.getByLabelText('出典の絞り込み')).toBeTruthy()
  })

  it('抽出シミュレーションはスライダーが結果より前にあり、プリセットがある', () => {
    window.location.hash = '#/material/tea-sencha'
    const { container } = render(<App />)
    expect(screen.getByRole('button', { name: /低温（60℃・120秒）/ })).toBeTruthy()
    const slider = container.querySelector('input[aria-label="抽出温度"]')
    const result = container.querySelector('.sim-result')
    expect(slider).toBeTruthy()
    expect(result).toBeTruthy()
    // スライダーが結果ブロックより前にある（DOCUMENT_POSITION_FOLLOWING が立つ）
    expect(slider!.compareDocumentPosition(result!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('素材検索の絞り込みは、詳細へ行って戻っても保持される（監査 J2 の回帰防止）', () => {
    window.location.hash = '#/search'
    render(<App />)
    fireEvent.click(screen.getByRole('tab', { name: 'スパイス' }))
    fireEvent.change(screen.getByLabelText('分類'), { target: { value: 'bark-spice' } })
    expect(screen.getByText(/2件/)).toBeTruthy()
    window.location.hash = '#/material/spice-cassia'
    fireEvent(window, new Event('hashchange'))
    expect(screen.getByRole('heading', { name: /カシア/ })).toBeTruthy()
    window.location.hash = '#/search'
    fireEvent(window, new Event('hashchange'))
    expect(screen.getByText(/2件/)).toBeTruthy()
    expect((screen.getByLabelText('分類') as HTMLSelectElement).value).toBe('bark-spice')
    fireEvent.click(screen.getByRole('tab', { name: 'お茶' }))
  })

  it('香味化学では選択中の素材で報告された化合物が、全化合物一覧とは別に出る（監査 J4）', () => {
    window.location.hash = '#/chemistry'
    render(<App />)
    expect(screen.getByText(/煎茶で報告された化合物/)).toBeTruthy()
    expect(screen.getByText(/化合物一覧（全収録）/)).toBeTruthy()
  })

  it('ほうじ茶詳細では焙煎対象外の理由が表示される', () => {
    window.location.hash = '#/material/tea-hojicha'
    render(<App />)
    expect(screen.getAllByText(/焙煎済み/).length).toBeGreaterThan(0)
  })
})
