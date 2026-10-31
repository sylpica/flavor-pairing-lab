// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import App from './App'
import { sources } from './data/index'
import { pairingImportedSources } from './data/sources-pairing-import'
import { mergeLibrarySources } from './data/library-merge'

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
    // 台帳データの動的読み込み後に、出典総数が実データ（再確認済み＋台帳、重複除去後のマージ結果）と一致して構成される
    const expectedTotal = String(mergeLibrarySources(sources, pairingImportedSources).sources.length)
    expect(await screen.findByText(expectedTotal, undefined, { timeout: 15000 })).toBeTruthy()
    // 出典・メモとも初期60件の段階表示になっている
    expect(screen.getAllByText(/60件を表示中/).length).toBeGreaterThanOrEqual(2)
  }, 20000)

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

  it('香味化学のピッカーは部分入力で候補が出て選べる', () => {
    window.location.hash = '#/chemistry'
    render(<App />)
    const input = screen.getByLabelText('素材')
    fireEvent.change(input, { target: { value: '玉' } })
    const option = screen.getByRole('option', { name: '玉露' })
    fireEvent.pointerDown(option)
    expect(screen.getByText(/玉露で報告された化合物/)).toBeTruthy()
  })

  it('ペアリングのピッカーは部分入力で候補が出て選べる（完全一致は不要）', () => {
    window.location.hash = '#/pairing'
    render(<App />)
    const input = screen.getByLabelText('素材2の選択')
    fireEvent.change(input, { target: { value: '玉' } })
    // ドメイン見出し付きの候補リストが出る
    expect(screen.getByRole('listbox')).toBeTruthy()
    fireEvent.pointerDown(screen.getByRole('option', { name: '玉露' }))
    expect(screen.getByLabelText('玉露の比率（%）')).toBeTruthy()
    // 一致しない文字列でフォーカスを外すと、エラーなく現在の素材名に戻る
    fireEvent.change(input, { target: { value: '存在しない素材' } })
    fireEvent.blur(input)
    expect((input as HTMLInputElement).value).toBe('玉露')
    expect(screen.queryByText(/に一致する素材はありませんでした/)).toBeNull()
  })

  it('ペアリングのピッカーは読み（かな）でも候補が出る', () => {
    window.location.hash = '#/pairing'
    render(<App />)
    // ひらがな「かま」で、漢字名の釜炒り茶が読み経由で候補に出る
    const input1 = screen.getByLabelText('素材1の選択')
    fireEvent.change(input1, { target: { value: 'かま' } })
    expect(screen.getByRole('option', { name: '釜炒り茶' })).toBeTruthy()
    // ひらがな「ぎょく」で玉露が出る
    const input2 = screen.getByLabelText('素材2の選択')
    fireEvent.change(input2, { target: { value: 'ぎょく' } })
    expect(screen.getByRole('option', { name: '玉露' })).toBeTruthy()
    // カタカナ「カルダ」でもカルダモン（グリーン）が出る（かな表記の揺れを吸収）
    fireEvent.change(input1, { target: { value: 'カルダ' } })
    expect(screen.getByRole('option', { name: 'カルダモン（グリーン）' })).toBeTruthy()
  })

  it('素材検索の名前絞り込みは読み（かな）でも効く', () => {
    window.location.hash = '#/search'
    render(<App />)
    fireEvent.change(screen.getByLabelText('素材名で絞り込む'), { target: { value: 'かま' } })
    expect(screen.getByText('1件')).toBeTruthy()
    expect(screen.getByText('釜炒り茶')).toBeTruthy()
    // 後続テストへ影響を残さないよう絞り込みを戻す
    fireEvent.change(screen.getByLabelText('素材名で絞り込む'), { target: { value: '' } })
  })

  it('素材詳細の「ペアリングで使う」で素材がペアリングに追加される', async () => {
    window.location.hash = '#/material/spice-sansho'
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'ペアリングで使う' }))
    expect(await screen.findByText(/「山椒」をペアリングに追加しました/)).toBeTruthy()
    expect(screen.getByLabelText('山椒の比率（%）')).toBeTruthy()
  })

  it('すでに組み合わせに入っている素材では「ペアリングで使う」がその旨を表示する', async () => {
    window.location.hash = '#/material/tea-gyokuro'
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'ペアリングで使う' }))
    expect(await screen.findByText(/「玉露」はすでに組み合わせに入っています/)).toBeTruthy()
  })

  it('比率0%の素材には分析対象外バッジが出て、分析は残りの素材で続く', () => {
    window.location.hash = '#/pairing'
    render(<App />)
    fireEvent.change(screen.getByLabelText('玉露の比率（%）'), { target: { value: '0' } })
    expect(screen.getByText('比率0%のため分析対象外')).toBeTruthy()
    // 残りの素材（チョコ・山椒）で分析は表示され続ける
    expect(screen.getAllByText(/官能評価の結果ではありません/).length).toBeGreaterThan(0)
  })

  it('補完モードでは補完の節が表示される', () => {
    window.location.hash = '#/pairing'
    render(<App />)
    fireEvent.click(screen.getByRole('tab', { name: '補完' }))
    expect(screen.getByRole('heading', { name: /補い合う関係（補完）/ })).toBeTruthy()
    expect(screen.getAllByText(/補う香りの系統|明確には見つかりませんでした/).length).toBeGreaterThan(0)
    expect(screen.getByText(/補完モード：/)).toBeTruthy()
  })

  it('自動再配分の通知から「元に戻す」で直前の構成と比率に戻れる', () => {
    window.location.hash = '#/pairing'
    render(<App />)
    const ratioInputs = () => screen.queryAllByLabelText(/の比率（%）$/)
    const before = ratioInputs().length
    fireEvent.click(screen.getByRole('button', { name: /素材を追加/ }))
    expect(ratioInputs().length).toBe(before + 1)
    fireEvent.click(screen.getByRole('button', { name: '元に戻す' }))
    expect(ratioInputs().length).toBe(before)
    expect(screen.getByText(/直前の構成と比率に戻しました/)).toBeTruthy()
  })

  it('「ミルクを加える」ボタンで牛乳が追加され、追加済み表示になる', () => {
    render(<App />)
    const milkButton = screen.getByRole('button', { name: /ミルクを加える/ })
    expect((milkButton as HTMLButtonElement).disabled).toBe(false)
    expect(screen.queryByLabelText('牛乳の比率（%）')).toBeNull()
    fireEvent.click(milkButton)
    // 牛乳がスロットに追加され、比率が均等に再配分される（初期2素材50/50＋牛乳で合計100）
    expect(screen.getByLabelText('牛乳の比率（%）')).toBeTruthy()
    expect(screen.getByText(/現在の合計 100%/)).toBeTruthy()
    // 追加済みになるとボタンは無効化され、状態が明示される
    expect((screen.getByRole('button', { name: /ミルクを加える/ }) as HTMLButtonElement).disabled).toBe(true)
    expect(screen.getByText(/ミルクは追加済みです/)).toBeTruthy()
  })

  it('素材が4つある状態では「ペアリングで使う」が追加できない旨を表示する', async () => {
    // 前のテストでミルクが追加され、スロットは4つ埋まっている
    window.location.hash = '#/material/tea-matcha'
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'ペアリングで使う' }))
    expect(await screen.findByText(/素材が4つあるため「抹茶」は追加できませんでした/)).toBeTruthy()
  })

  it('ほうじ茶詳細では焙煎対象外の理由が表示される', () => {
    window.location.hash = '#/material/tea-hojicha'
    render(<App />)
    expect(screen.getAllByText(/焙煎済み/).length).toBeGreaterThan(0)
  })
})
