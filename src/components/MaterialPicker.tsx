import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { DOMAIN_LABEL, type Domain } from '../types'
import { materials, materialById } from '../data'
import { materialMatchesName } from '../data/material-yomi'

const DOMAIN_ORDER: Domain[] = ['tea', 'chocolate', 'spice', 'herb', 'dairy']

/**
 * 素材ピッカー（カスタムコンボボックス）。
 * - 入力で名前（和名・英名・読み）に部分一致する候補をドメイン見出し付きで提示する。
 *   読みにも一致させるため、「かま」のようなかな入力でも「釜炒り茶」が候補に出る。
 *   空の入力（または現在の素材名そのまま）で開くと全候補をグループ表示する。
 * - ↑↓キー＋Enter で選択、Esc で閉じる。候補はタップ／クリックでも選べる。
 * - 一致しない文字列のままフォーカスを外したら、エラーは出さず現在の素材名に静かに戻す。
 *   完全一致する名前が入力されていた場合は、その素材へ切り替える。
 */
export function MaterialPicker({ valueId, onPick, excludeIds = [], ariaLabel, idPrefix }: {
  valueId: string
  onPick: (id: string) => void
  /** 候補から除外する素材ID（他のスロットで選択済みのもの等）。現在の値は常に対象に含む */
  excludeIds?: string[]
  ariaLabel: string
  idPrefix: string
}) {
  const current = materialById(valueId)
  const [text, setText] = useState(current?.nameJa ?? '')
  const [open, setOpen] = useState(false)
  const [activeIdx, setActiveIdx] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)

  // スロットの値が外から（追加・削除・受け渡し等で）変わったら表示名を同期する
  useEffect(() => { setText(materialById(valueId)?.nameJa ?? '') }, [valueId])

  const rawQuery = text.trim().toLowerCase()
  // 現在の素材名そのものが入力されている状態は「絞り込みなし」として全候補を出す
  const query = rawQuery === (current?.nameJa.toLowerCase() ?? '') ? '' : rawQuery
  const groups = useMemo(() => {
    const pool = materials.filter((m) => m.id === valueId || !excludeIds.includes(m.id))
    const matched = query === ''
      ? pool
      : pool.filter((m) => materialMatchesName(m, query))
    return DOMAIN_ORDER
      .map((d) => ({ domain: d, items: matched.filter((m) => m.domain === d) }))
      .filter((g) => g.items.length > 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, valueId, excludeIds.join(',')])
  const flat = useMemo(() => groups.flatMap((g) => g.items), [groups])

  useEffect(() => {
    if (!open || activeIdx < 0) return
    const el = document.getElementById(`${idPrefix}-opt-${flat[activeIdx]?.id}`)
    if (el && typeof el.scrollIntoView === 'function') el.scrollIntoView({ block: 'nearest' })
  }, [activeIdx, open, flat, idPrefix])

  const select = (id: string) => {
    onPick(id)
    setText(materialById(id)?.nameJa ?? '')
    setOpen(false)
    setActiveIdx(-1)
  }

  /** フォーカスを外したとき：完全一致する名前なら確定し、それ以外は静かに現在の名前へ戻す */
  const commitOrRestore = () => {
    setOpen(false)
    setActiveIdx(-1)
    const t = text.trim()
    if (t === (current?.nameJa ?? '')) return
    const hit = materials.find((m) => m.nameJa === t && (m.id === valueId || !excludeIds.includes(m.id)))
    if (hit) select(hit.id)
    else setText(current?.nameJa ?? '')
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setOpen(true)
      setActiveIdx((i) => Math.min(i + 1, flat.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIdx((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      if (open && flat.length > 0) {
        e.preventDefault()
        select(flat[activeIdx >= 0 ? activeIdx : 0].id)
      }
    } else if (e.key === 'Escape') {
      setOpen(false)
      setActiveIdx(-1)
      setText(current?.nameJa ?? '')
    }
  }

  const listboxId = `${idPrefix}-listbox`
  return (
    <span className="mp">
      <input
        ref={inputRef}
        type="text"
        role="combobox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-activedescendant={open && activeIdx >= 0 && flat[activeIdx] ? `${idPrefix}-opt-${flat[activeIdx].id}` : undefined}
        aria-label={ariaLabel}
        value={text}
        placeholder="素材名を入力"
        autoComplete="off"
        onChange={(e) => { setText(e.target.value); setOpen(true); setActiveIdx(-1) }}
        onFocus={() => setOpen(true)}
        onBlur={commitOrRestore}
        onKeyDown={onKeyDown}
      />
      {open && (
        <ul className="mp-dropdown" role="listbox" id={listboxId} aria-label="素材の候補"
          onPointerDown={(e) => e.preventDefault()}>
          {groups.map((g) => (
            <Fragment key={g.domain}>
              <li role="presentation" className="mp-group">{DOMAIN_LABEL[g.domain]}</li>
              {g.items.map((m) => {
                const idx = flat.indexOf(m)
                return (
                  <li
                    key={m.id}
                    id={`${idPrefix}-opt-${m.id}`}
                    role="option"
                    aria-selected={m.id === valueId}
                    className={`mp-option${idx === activeIdx ? ' active' : ''}${m.id === valueId ? ' current' : ''}`}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onPointerDown={(e) => { e.preventDefault(); select(m.id) }}
                  >
                    {m.nameJa}
                  </li>
                )
              })}
            </Fragment>
          ))}
          {flat.length === 0 && <li className="mp-empty" role="presentation">一致する素材はありません</li>}
        </ul>
      )}
    </span>
  )
}
