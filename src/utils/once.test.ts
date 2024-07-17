import { describe, it, expect, vi } from 'vitest'
import once from './once'

describe('once', () => {
  it('should call the function only once', () => {
    const mockFn = vi.fn()
    const wrappedFn = once(mockFn)

    wrappedFn()
    expect(mockFn).toHaveBeenCalledTimes(1)

    expect(() => wrappedFn()).toThrow('Error! Function has already been called')
  })

  it('should pass arguments to the original function', () => {
    const mockFn = vi.fn()
    const wrappedFn = once(mockFn)

    wrappedFn('test', 123)
    expect(mockFn).toHaveBeenCalledWith('test', 123)
  })

  it('should return the result from the original function', () => {
    const returnVal = 'result'
    const mockFn = vi.fn().mockReturnValue(returnVal)
    const wrappedFn = once(mockFn)

    const result = wrappedFn()
    expect(result).toBe(returnVal)
  })
})