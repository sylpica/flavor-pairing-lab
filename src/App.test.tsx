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
    // デフォルトは味わいモード（R12-1：味を先に出す）。味わいホイールが出ている
    expect(svgText()).toContain('味わい')
    expect(svgText()).toContain('うま味')
    // 香りモードへ切替：ノート名がホイール上に描かれる（無地セグメントを作らない）
    fireEvent.click(screen.getByRole('tab', { name: '香り' }))
    expect(svgText()).toContain('香り')
    expect(svgText().length).toBeGreaterThan(10)
    // 味わいに戻せる
    fireEvent.click(screen.getByRole('tab', { name: '味わい' }))
    expect(svgText()).toContain('ホイール')
  })

  it('素材詳細のホイール外側の輪に、その素材で報告された化合物名が描かれる', () => {
    window.location.hash = '#/material/tea-sencha'
    const { container } = render(<App />)
    // デフォルトは味わいなので、香りモードへ切り替えてから確認する
    fireEvent.click(screen.getByRole('tab', { name: '香り' }))
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

  /* ===== 第9ラウンド：状態情報の凡例集約＋検索リセットの見出し行 ===== */

  it('素材詳細では根拠区分の状態行がホイール図の凡例の下にあり、仕様表の下に単独バッジが無い（R9-1）', () => {
    window.location.hash = '#/material/tea-sencha'
    const { container } = render(<App />)
    const figure = container.querySelector('figure.wheel-figure')
    expect(figure).toBeTruthy()
    const status = figure!.querySelector('.wheel-status')
    expect(status).toBeTruthy()
    expect(status!.textContent).toContain('この素材の根拠区分：')
    // 状態行の中に、従来の TierBadge と同じ表示（バッジ）が入っている
    expect(status!.querySelector('.badge')).toBeTruthy()
    // 状態ブロックは凡例（.wheel-legend）より後（凡例の下）にある
    const legend = figure!.querySelector('.wheel-legend')
    expect(legend).toBeTruthy()
    expect(legend!.compareDocumentPosition(status!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    // 仕様表の下・ホイールより上に、素材全体の根拠区分バッジが単独で置かれていない
    expect(container.querySelector('section > .badge')).toBeNull()
    // 状態行はホイールブロックに1回だけ出る（香り／味わい切替でも二重にならない）
    expect(screen.getAllByText(/この素材の根拠区分/)).toHaveLength(1)
    fireEvent.click(screen.getByRole('tab', { name: '味わい' }))
    expect(screen.getAllByText(/この素材の根拠区分/)).toHaveLength(1)
    expect(container.querySelector('figure.wheel-figure .wheel-status')!.textContent).toContain('この素材の根拠区分：')
  })

  // ペアリングのスロットを2つにそろえ、ピッカーで素材を指定する共通手順
  const reduceSlotsTo2 = () => {
    for (let i = 0; i < 4 && screen.getAllByLabelText(/の比率（%）$/).length > 2; i++) {
      fireEvent.click(screen.getAllByRole('button', { name: /を外す$/ })[0])
    }
  }
  const pickSlot = (slotLabel: string, query: string, optionName: string) => {
    const input = screen.getByLabelText(slotLabel)
    fireEvent.change(input, { target: { value: query } })
    fireEvent.pointerDown(screen.getByRole('option', { name: optionName }))
  }

  it('ペアリング：直接研究が無い組み合わせでは未確認の状態行がホイールの凡例エリアにあり、相互作用節に独立段落が無い（R9-2）', () => {
    window.location.hash = '#/pairing'
    const { container } = render(<App />)
    // 直接研究ルールが発火しない組み合わせにそろえる
    // （茶×チョコ／乳製品の組／強い辛味、のいずれでもないスパイス×ハーブ）
    reduceSlotsTo2()
    pickSlot('素材1の選択', 'カルダ', 'カルダモン（グリーン）')
    pickSlot('素材2の選択', 'カモ', 'カモミール（ジャーマン）')
    // 相互作用セクションの独立段落（.direct-absence）は廃止されている
    expect(container.querySelector('.direct-absence')).toBeNull()
    // 未確認の状態行が、組み合わせホイールの凡例エリア（状態ブロック）に出る
    const figure = container.querySelector('figure.wheel-figure')
    expect(figure).toBeTruthy()
    const status = figure!.querySelector('.wheel-status')
    expect(status).toBeTruthy()
    expect(status!.textContent).toContain('この組み合わせ自体を対象にした直接研究は未確認です。以下は一般的知見・推測による構成です。')
    // 状態行は1回だけ（味わいモードに切り替えても二重にならない）
    expect(screen.getAllByText(/この組み合わせ自体を対象にした直接研究は未確認です/)).toHaveLength(1)
    fireEvent.click(screen.getByRole('tab', { name: '味わい' }))
    expect(screen.getAllByText(/この組み合わせ自体を対象にした直接研究は未確認です/)).toHaveLength(1)
    expect(container.querySelector('.direct-absence')).toBeNull()
  })

  it('ペアリング：直接研究がある組み合わせでは、その旨と実件数がホイールの状態行に出る（R9-2）', () => {
    window.location.hash = '#/pairing'
    const { container } = render(<App />)
    reduceSlotsTo2()
    // 片方のスロットを対象外の素材に退避してから、お茶×チョコの組にそろえる
    pickSlot('素材1の選択', 'ローズ', 'ローズマリー')
    pickSlot('素材2の選択', '煎茶', '煎茶')
    pickSlot('素材1の選択', 'ダーク', 'ダークチョコレート（焙煎）')
    expect(container.querySelector('.direct-absence')).toBeNull()
    const status = container.querySelector('figure.wheel-figure .wheel-status')
    expect(status).toBeTruthy()
    expect(status!.textContent).toMatch(/この組み合わせ自体を対象にした直接研究があります（相互作用 [1-9]\d* 件）/)
    expect(screen.getAllByText(/この組み合わせ自体を対象にした直接研究があります/)).toHaveLength(1)
  })

  it('素材検索のリセットボタン（見出しの右）で三軸と素材名がすべて初期状態に戻る（R9-3）', () => {
    window.location.hash = '#/search'
    render(<App />)
    expect(screen.getByRole('heading', { name: '分類・産地・品種（系統）で探す' })).toBeTruthy()
    const resetBtn = screen.getByRole('button', { name: 'リセット' }) as HTMLButtonElement
    const clsSel = screen.getByLabelText('分類') as HTMLSelectElement
    const orgSel = screen.getByLabelText('産地') as HTMLSelectElement
    const varSel = screen.getByLabelText('品種・系統') as HTMLSelectElement
    const nameInput = screen.getByLabelText('素材名で絞り込む') as HTMLInputElement
    // 条件を設定する（各セレクトは現在の候補の先頭の実値を選ぶ）
    if (clsSel.options.length > 1) fireEvent.change(clsSel, { target: { value: clsSel.options[1].value } })
    if (orgSel.options.length > 1) fireEvent.change(orgSel, { target: { value: orgSel.options[1].value } })
    if (varSel.options.length > 1) fireEvent.change(varSel, { target: { value: varSel.options[1].value } })
    fireEvent.change(nameInput, { target: { value: 'かま' } })
    expect(resetBtn.disabled).toBe(false)
    fireEvent.click(resetBtn)
    expect(clsSel.value).toBe('')
    expect(orgSel.value).toBe('')
    expect(varSel.value).toBe('')
    expect(nameInput.value).toBe('')
    // 条件が無くなるとボタンは無効化される
    expect(resetBtn.disabled).toBe(true)
    // 旧「絞り込みを解除」ボタンは廃止されている
    expect(screen.queryByRole('button', { name: '絞り込みを解除' })).toBeNull()
  })

  it('ホイールの凡例に％（目安）が出て、合計が100になる（R10-1）', () => {
    window.location.hash = '#/material/tea-sencha'
    const { container } = render(<App />)
    // デフォルトは味わい（R12-1）なので、香りホイールの確認は香りモードへ切り替えてから
    fireEvent.click(screen.getByRole('tab', { name: '香り' }))
    // 香りホイール：凡例の各項目に％があり、抽出できる％の合計が100
    const legendText = [...container.querySelectorAll('.wheel-legend .legend-btn')]
      .map((el) => el.textContent ?? '').join(' ')
    const aromaPcts = [...legendText.matchAll(/ (\d+)%/g)].map((m) => Number(m[1]))
    expect(aromaPcts.length).toBeGreaterThan(0)
    expect(aromaPcts.reduce((a, b) => a + b, 0)).toBe(100)
    expect(container.textContent).toContain('重みから計算した目安')
    // 味わいホイールも同様
    fireEvent.click(screen.getByRole('tab', { name: '味わい' }))
    const tasteText = [...container.querySelectorAll('.wheel-legend li')].map((el) => el.textContent ?? '').join(' ')
    const tastePcts = [...tasteText.matchAll(/ (\d+)%/g)].map((m) => Number(m[1]))
    expect(tastePcts.length).toBeGreaterThan(0)
    expect(tastePcts.reduce((a, b) => a + b, 0)).toBe(100)
  })

  it('ペアリング画面のリセットで初期の組み合わせ・モードに戻る（R10-2）', () => {
    window.location.hash = '#/pairing'
    render(<App />)
    const resetBtn = screen.getByRole('button', { name: 'リセット' }) as HTMLButtonElement
    // 前テストまでの永続状態に依存しないよう、まず非デフォルト状態（対比モード）にしてから検証する
    fireEvent.click(screen.getByRole('tab', { name: '対比' }))
    expect(resetBtn.disabled).toBe(false)
    fireEvent.click(resetBtn)
    expect((screen.getByRole('tab', { name: '調和' }) as HTMLElement).getAttribute('aria-selected')).toBe('true')
    expect(screen.getByText(/組み合わせを初期状態に戻しました/)).toBeTruthy()
    expect(resetBtn.disabled).toBe(true)
  })

  /* ===== 横展開ウォッチ第12弾：味デフォルト＋凡例の化合物名 ===== */

  it('ホイールの切替は味わいが左・デフォルトで、香りが右（R12-1）', () => {
    window.location.hash = '#/material/tea-sencha'
    render(<App />)
    const tasteTab = screen.getByRole('tab', { name: '味わい' })
    const aromaTab = screen.getByRole('tab', { name: '香り' })
    // デフォルトで味わいが選択されている
    expect(tasteTab.getAttribute('aria-selected')).toBe('true')
    expect(aromaTab.getAttribute('aria-selected')).toBe('false')
    // 並び順：味わいボタンが香りボタンより前（左）にある
    expect(tasteTab.compareDocumentPosition(aromaTab) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    // ペアリング画面でも同じ並び・デフォルト
    cleanup()
    window.location.hash = '#/pairing'
    render(<App />)
    const pTaste = screen.getByRole('tab', { name: '味わい' })
    const pAroma = screen.getByRole('tab', { name: '香り' })
    expect(pTaste.getAttribute('aria-selected')).toBe('true')
    expect(pTaste.compareDocumentPosition(pAroma) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('素材詳細の味わいホイールが3階層になる（R12-3：第2階層の具体名が図と凡例に出る）', () => {
    window.location.hash = '#/material/tea-sencha'
    const { container } = render(<App />)
    const figure = container.querySelector('figure.wheel-figure')!
    const svg = figure.querySelector('svg.wheel')!
    // 第1階層：味＋％
    expect(svg.textContent).toContain('うま味')
    expect(svg.textContent).toMatch(/%/)
    // 第2階層：うま味に対応づけられた具体名（海藻・磯）が図のラベルと凡例の両方に出る
    expect(svg.textContent).toContain('海藻・磯')
    expect(figure.querySelector('.wheel-legend')!.textContent).toContain('海藻・磯')
    // 第2階層の具体名はボタンとして選べ、ノート詳細が開く
    const noteBtn = [...figure.querySelectorAll('.wheel-legend button')].find((b) => b.textContent?.includes('海藻・磯'))!
    fireEvent.click(noteBtn)
    expect(container.querySelector('.note-detail')).toBeTruthy()
  })

  it('組み合わせの味わいホイールも3階層になる（R12-4：具体名が出る）', () => {
    window.location.hash = '#/pairing'
    const { container } = render(<App />)
    const figure = container.querySelector('figure.wheel-figure')!
    const tasteTab = [...figure.parentElement!.querySelectorAll('button')].find((b) => b.textContent === '味わい')!
    fireEvent.click(tasteTab)
    const svg = figure.querySelector('svg.wheel')!
    expect(svg.textContent).toMatch(/%/)
    // 既定の組み合わせ（焙煎ダークチョコ＋煎茶）：カカオ（苦味）・海藻・磯（うま味）が具体名として出る
    const legendText = figure.querySelector('.wheel-legend')!.textContent ?? ''
    expect(legendText).toContain('カカオ')
    expect(legendText).toContain('海藻・磯')
  })

  it('香りホイールの凡例は「化合物○種」ではなく実際の化合物名を併記する（R12-2）', () => {
    window.location.hash = '#/material/tea-sencha'
    const { container } = render(<App />)
    fireEvent.click(screen.getByRole('tab', { name: '香り' }))
    const legendText = [...container.querySelectorAll('.wheel-legend .legend-btn')]
      .map((el) => el.textContent ?? '').join(' ')
    // 数だけの表示（化合物 N 種のみ）は残っていない
    expect(legendText).not.toMatch(/・化合物 \d+ 種/)
    // 実際の化合物名が凡例に出る（煎茶で報告されたリナロールを含む）
    expect(legendText).toContain('化合物：')
    expect(legendText).toContain('リナロール')
  })

  it('素材詳細で開いたノート詳細パネルは、別の素材へ遷移したら閉じる（監査 K-03）', () => {
    window.location.hash = '#/material/tea-sencha'
    const { container } = render(<App />)
    fireEvent.click(screen.getByRole('tab', { name: '香り' }))
    const legendBtn = container.querySelector('.wheel-legend .legend-btn')
    expect(legendBtn).toBeTruthy()
    fireEvent.click(legendBtn!)
    expect(container.querySelector('.note-detail')).toBeTruthy()
    window.location.hash = '#/material/tea-hojicha'
    fireEvent(window, new Event('hashchange'))
    expect(container.querySelector('.note-detail')).toBeNull()
  })

  it('焙煎温度の数値欄を空欄にすると「数値が入力されていません」の警告が出て、0℃扱いにならない（監査 K-04）', () => {
    window.location.hash = '#/material/spice-cumin'
    render(<App />)
    const input = screen.getByLabelText('焙煎温度（数値）') as HTMLInputElement
    fireEvent.change(input, { target: { value: '' } })
    expect(input.value).toBe('')
    expect(screen.getByText(/数値が入力されていません/)).toBeTruthy()
    expect(screen.queryByText(/焙煎温度 0℃/)).toBeNull()
  })
})
