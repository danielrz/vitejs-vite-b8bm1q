import { useRef } from "react"

function useDebounce<T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T, delay: number) {
  const timer = useRef<ReturnType<typeof setTimeout>>()
  // I use useRef so this valueis persisted from one call to the other one

  return function(...args: Parameters<T>) {
    if (timer.current) {
      clearTimeout(timer.current)
    } else {
      fn(...args)
    }
    timer.current = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

export default useDebounce