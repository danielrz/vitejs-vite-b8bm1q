import { useRef } from "react";

function useDebounce1<T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T, delay: number) {
  const timer = useRef<ReturnType<typeof setTimeout>>()

  return function(...args: Parameters<T>) {
    if (timer.current) {
      console.log('!!!clearing timer', timer.current)
      clearTimeout(timer.current)
    }

    const t = setTimeout(() => {
      fn(...args)
    }, delay)

    timer.current = t

    console.log('!!!new timer', {t, curr: timer.current})
  }
}

export default useDebounce1