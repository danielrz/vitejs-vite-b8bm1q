// import debounce from 'lodash/debounce'
import debounce from '../utils/debounce'
import { useEffect, useMemo, useRef } from 'react'

function useDebounce<T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T, delay: number) {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = fn
  }, [fn])

  const debounceCallback = useMemo(() => {
    return debounce((...args: Parameters<T>) => ref.current?.(...args), delay)
  }, [delay])

  return debounceCallback

}

export default useDebounce