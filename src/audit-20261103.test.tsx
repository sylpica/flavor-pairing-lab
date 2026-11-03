// @vitest-environment jsdom
// 2026-11-03 独立監査（Claude Code）で修正した欠陥の回帰テスト。
// 期待値は実装の返り値ではなく、原著・Crossref/Europe PMC の書誌レコード・確定仕様から独立に定めている。
import { describe, it, expect, beforeEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { render, screen, cleanup } from '@testing-library/react'
import App from './App'
import { materials, sources, materialById, sourceById } from './data/index'
import { allLinks } from './data/links'
import { simulationTendencies } from './data/simulations'
import { pairingImportedSources } from './data/sources-pairing-import'
import { mergeLibrarySources, normalizeDoi } from './data/library-merge'
import { materialMatchesQuery } from './data/material-yomi'
import { capsaicinRetentionFraction } from './engine/capsaicin-model'
import type { Source } from './types'

describe('出典の書誌（Crossref／Europe PMC の正式題名・著者と一致する）', () => {
  // 期待値は 2026-11-03 に Crossref API と Europe PMC で取得した正式題名
  const expected: Record<string, { title: string; firstAuthor: string }> = {
    'lesschaeve-2005-polyphenols-astringency': { title: 'Polyphenols: factors influencing their sensory properties and their effects on food and beverage preferences', firstAuthor: 'Lesschaeve' },
    'talavera-2005-trpm5-temperature': { title: 'Heat activation of TRPM5 underlies thermal sensitivity of sweet taste', firstAuthor: 'Talavera' },
    'pramudya-2018-green-tea-temperature-cata': { title: 'Influences of Product Temperature on Emotional Responses to, and Sensory Attributes of, Coffee and Green Tea Beverages', firstAuthor: 'Pramudya' },
    'lee-2013-korean-green-tea-infusions': { title: 'Sensory and Instrumental Flavor Changes in Green Tea Brewed Multiple Times', firstAuthor: 'Lee' },
    'ashokkumar-2020-nutmeg-parts-oil': { title: 'Compositional variation in the leaf, mace, kernel, and seed essential oil of nutmeg (Myristica fragrans Houtt.) from the Western Ghats, India', firstAuthor: 'Ashokkumar' },
    'huang-2025-ancha-dot': { title: 'Sensomics evaluation of sun drying for reducing the bitterness and astringency of crude Ancha tea', firstAuthor: 'Ye' },
    'yu-2025-clove-endowment': { title: 'Insights into the flavor endowment of aroma-active compounds in cloves (Syzygium aromaticum) to stewed beef', firstAuthor: 'Qiang' },
    'arifin-djaeni-2018-capsaicin-drying-kinetics': { title: 'Thermal Degradation Kinetics of Capsaicin on Blanching-Brine-Calcium Pretreatment Red Chili Pepper Drying', firstAuthor: 'Arifin' },
  }
  for (const [id, e] of Object.entries(expected)) {
    it(`${id} の題名と第一著者`, () => {
      const s = sourceById(id)
      expect(s, id).toBeTruthy()
      expect(s!.title).toBe(e.title)
      expect(s!.authors.split(',')[0]).toMatch(new RegExp(`\\b${e.firstAuthor}\\b`))
    })
  }
  it('Ashokkumar（ナツメッグ部位別）に原著に無い部位「花」・著者が残っていない', () => {
    const s = sourceById('ashokkumar-2020-nutmeg-parts-oil')!
    expect(s.scope).not.toMatch(/花/)
    expect(s.authors).not.toMatch(/Murugan|Karthikeyan/)
  })
  it('台帳の題名・年の訂正（Crossref と一致）', () => {
    const byId = (id: string) => pairingImportedSources.find((x) => x.id === id)!
    expect(byId('pairing-gui-2024-enshi-yulu-volatile-metabolites').title).toBe('Analysis of the Changes in Volatile Components During the Processing of Enshi Yulu Tea')
    expect(byId('pairing-zhu-2021-laoshan-green-tea-key-aroma').title).toMatch(/^Characterization of the key aroma compounds in Laoshan green teas by application of odour activity value/)
    expect(byId('pairing-matsuo-2024-taste-solution-mixture').year).toBe(2025)
  })
  it('doi.org に未登録の DOI（10.35759/JABs.*）を保持しない', () => {
    for (const s of [...sources, ...pairingImportedSources]) {
      expect(s.doi ?? '', s.id).not.toMatch(/^10\.35759\//i)
      expect(s.url, s.id).not.toMatch(/doi\.org\/10\.35759\//i)
    }
  })
})

describe('シミュレーション傾向の文言が原著と一致する（Pramudya & Seo 2018 全文 PMC5769193）', () => {
  const t = simulationTendencies.find((x) => x.id === 'extract-temp-perception')!
  it('試料を「日本緑茶」と誤記しない', () => {
    expect(t.text + t.limits).not.toMatch(/日本緑茶/)
    expect(t.limits).toMatch(/韓国/)
  })
  it('原著で低温（5℃）側と結びついた渋味を「高温でより強い」と書かない', () => {
    expect(t.text).not.toMatch(/高温で[^。]*渋味/)
    expect(t.text).toMatch(/5℃では渋味/)
  })
  it('CATA は強度ではなく選択頻度であることを限界に明記する', () => {
    expect(t.limits).toMatch(/選択頻度/)
  })
})

describe('素材×化合物リンク', () => {
  it('要旨で確認できないメースのミリスチシン組成（5.90%）を根拠にしたリンクを持たない', () => {
    expect(allLinks.some((l) => l.materialId === 'spice-mace' && l.compoundId === 'myristicin')).toBe(false)
    for (const l of allLinks) expect(l.conditions ?? '', `${l.materialId}/${l.compoundId}`).not.toMatch(/5\.90%/)
  })
})

describe('足し算による合成の上限（確定仕様 2.4：Inferred・weak 上限）', () => {
  // 交配親（やぶきた）からの合成と scopeNote が明記している青草ノート
  for (const id of ['tea-okumidori', 'tea-saemidori', 'tea-fujikaori', 'tea-meiryoku']) {
    it(`${id} の青草ノート（合成）は推測・弱いを超えない`, () => {
      const m = materialById(id)!
      expect(m.scopeNote).toMatch(/交配親（やぶきた）の香味からの足し算による合成/)
      const e = m.profile.find((p) => p.noteId === 'green-leaf')!
      expect(e.tier).toBe('inferred')
      expect(e.intensity).toBe('weak')
    })
  }
  it('「一段弱めた合成」（weak を超える合成の表現）が残っていない', () => {
    for (const m of materials) expect(m.scopeNote, m.id).not.toMatch(/一段弱めた合成/)
  })
})

describe('文献画面の重複統合（DOI 照合の追加）', () => {
  const mk = (id: string, title: string, year: number, doi?: string): Source => ({
    id, kind: 'original', title, authors: 'A', year, doi, url: 'https://example.org', scope: '', verified: 'full',
  })
  it('題名の表記が違っても DOI が同じなら統合する（大文字小文字・doi.org 接頭辞の差を吸収）', () => {
    const m = mergeLibrarySources([mk('v', 'Official Title', 2020, '10.1000/ABC')], [mk('l', 'Paraphrased title', 2020, 'https://doi.org/10.1000/abc')])
    expect(m.removedCount).toBe(1)
  })
  it('同名・同年でも DOI が互いに異なれば別論文として残す', () => {
    const m = mergeLibrarySources([mk('v', 'Same Title', 2020, '10.1000/a')], [mk('l', 'Same Title', 2020, '10.1000/b')])
    expect(m.removedCount).toBe(0)
  })
  it('DOI の正規化', () => {
    expect(normalizeDoi(' https://dx.doi.org/10.1/X ')).toBe('10.1/x')
    expect(normalizeDoi(undefined)).toBeNull()
  })
})

describe('素材検索：品種・系統・学名でも見つかる（確定仕様 2.1 の検索動作）', () => {
  const find = (q: string) => materials.filter((m) => materialMatchesQuery(m, q)).map((m) => m.id)
  it('「やぶきた」（煎茶の品種軸）で煎茶が見つかる（ひらがな・カタカナ・ローマ字）', () => {
    expect(find('やぶきた')).toContain('tea-sencha')
    expect(find('ヤブキタ')).toContain('tea-sencha')
    expect(find('yabukita')).toContain('tea-sencha')
  })
  it('学名で見つかる', () => {
    expect(find('Myristica fragrans')).toContain('spice-mace')
  })
  it('空クエリは全件に一致し、無関係な語は一致しない', () => {
    expect(find('').length).toBe(materials.length)
    expect(find('存在しない素材名xyz')).toEqual([])
  })
})

describe('数値モデルの照合（原著 Table 2・3 からの独立計算）', () => {
  it('カプサイシン 70℃・8時間：二次モデル 1/(1+1491.37×3×10⁻⁵×8)', () => {
    expect(capsaicinRetentionFraction(70, 8)!).toBeCloseTo(1 / (1 + 1491.37 * 3e-5 * 8), 10)
    // 原著 Table 2 の実測（1129.30/1491.37≈0.757）とは別物であることを数値でも確認
    expect(Math.abs(capsaicinRetentionFraction(70, 8)! - 1129.30 / 1491.37)).toBeGreaterThan(0.015)
  })
})

describe('画面（監査 2026-11-03 の修正）', () => {
  beforeEach(() => { cleanup() })
  it('存在しない画面の URL では案内を表示する', () => {
    window.location.hash = '#/no-such-page'
    render(<App />)
    expect(screen.getByText('このページは見つかりません。')).toBeTruthy()
    expect(screen.getByRole('link', { name: 'ペアリング画面へ' })).toBeTruthy()
  })
  it('ペアリング操作パネルの「均等に戻す」は1つだけ', () => {
    window.location.hash = '#/pairing'
    render(<App />)
    expect(screen.getAllByRole('button', { name: '均等に戻す' }).length).toBe(1)
  })
  it('紅茶のカフェインモデルはパラメータ原著（Price & Spitzer 1993）へリンクする', () => {
    window.location.hash = '#/material/tea-black-general'
    render(<App />)
    const s = sourceById('price-spitzer-1993')!
    const links = screen.getAllByRole('link').filter((a) => a.getAttribute('href') === s.url)
    expect(links.length).toBeGreaterThan(0)
  })
})

describe('スマートフォン幅でペアリング操作パネルが結果を覆わない（CSS）', () => {
  const css = readFileSync(`${process.cwd()}/src/App.css`, 'utf8')
  it('基本スタイルは吸着しない', () => {
    const base = css.match(/^\.pair-controls \{[^}]*\}/m)![0]
    expect(base).toMatch(/position: static/)
    expect(base).not.toMatch(/sticky/)
  })
  it('吸着は幅・高さの両方が十分な画面に限る', () => {
    expect(css).toMatch(/@media \(min-width: 761px\) and \(min-height: 720px\) \{\s*\.pair-controls \{ position: sticky;/)
  })
})
