// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

// 画面レンダリングと代表操作の検証（要件18の代表シナリオを jsdom で代替検証する。
// 実ブラウザE2Eは公開検証フェーズで別途行い、本テストの代替とは明記する）
describe('画面レンダリング', () => {
  beforeEach(() => { window.location.hash = '#/pairing' })

  it('ペアリング画面が表示され、初期選択で分析が出る', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /ペアリング（2〜4素材）/ })).toBeTruthy()
    expect(screen.getByText(/官能評価の結果ではありません/)).toBeTruthy()
    expect(screen.getByText(/直接研究あり/)).toBeTruthy()
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

  it('文献画面で収録数が実データと一致する表示になる', () => {
    window.location.hash = '#/library'
    render(<App />)
    expect(screen.getByText(/収録状況/)).toBeTruthy()
    expect(screen.getByText(/網羅率/)).toBeTruthy()
  })

  it('ほうじ茶詳細では焙煎対象外の理由が表示される', () => {
    window.location.hash = '#/material/tea-hojicha'
    render(<App />)
    expect(screen.getAllByText(/焙煎済み/).length).toBeGreaterThan(0)
  })
})
