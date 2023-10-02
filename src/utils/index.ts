import { useRef } from "react";

function debounce<T extends (...args: any[]) => any>(fn: T, interval: number): T {
 const timer = useRef<ReturnType<typeof setTimeout>>()

 return function(...args: Parameters<T>) {
  clearTimeout(timer.current)
  timer.current = setTimeout(async () => {
    await fn(args)
  }, interval)
 } as T
}

export  {
  debounce
}