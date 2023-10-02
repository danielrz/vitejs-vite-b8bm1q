// @vitest-environment jsdom

import { beforeEach, afterEach, test, expect, describe, vi } from 'vitest'
import { cleanup, render, fireEvent } from '@testing-library/react'
import type { RenderResult } from '@testing-library/react'
import AutoComplete from './AutoComplete'
import * as api from '../api/autoComplete'
import { itemsFactory } from '../mocks/items.mock'

let container: RenderResult
let input: HTMLInputElement
let list: HTMLUListElement

const fetchItemsSpy = vi
  .spyOn(api, 'fetchItems')
  .mockImplementation((term: string): Promise<string[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemsFactory(term))
      }, 300)
    })
  })

beforeEach(async () => {
  container = render(<AutoComplete interval={500} />)
  input = await container.findByTestId('autocomplete-input') as HTMLInputElement
  list = await container.findByTestId('autocomplete-list') as HTMLUListElement

  vi.useFakeTimers()
})

afterEach(() => {
  cleanup()
  vi.useRealTimers()
  vi.clearAllMocks()
})

describe('AutoComplete', () => {
  test('should display empty input', () => {
    expect(input).toBeDefined()
    expect(input.value).toBe('')
  })

  test('should display empty list', () => {
    expect(list).toBeDefined()
    expect(list.children.length).toBe(0)
  })

  test('should display list with items when typing one letter', async () => {
    fireEvent.change(input, { target: { value: 'a' } })
    await vi.runAllTimersAsync()

    expect(fetchItemsSpy).toHaveBeenCalledTimes(1)
    expect(fetchItemsSpy).toHaveBeenCalledWith('a')
    expect(list.children.length).toBe(10)
    expect(list.children[0].textContent).toBe('a-0')

  })

  test('should display list with items when typing several letters fast', async () => {
    fireEvent.change(input, { target: { value: 'a' } })
    fireEvent.change(input, { target: { value: 'ab' } })
    fireEvent.change(input, { target: { value: 'abc' } })
    await vi.runAllTimersAsync()

    expect(fetchItemsSpy).toHaveBeenCalledTimes(1)
    expect(fetchItemsSpy).toHaveBeenCalledWith('abc')
    expect(list.children.length).toBe(10)
    expect(list.children[0].textContent).toBe('abc-0')

  })
})