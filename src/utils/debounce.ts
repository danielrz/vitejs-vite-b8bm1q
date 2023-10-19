
function debounce<T extends (...args: Parameters<T>) => any>(fn: T, interval: number): T {
 let timer: ReturnType<typeof setTimeout>

 return function(...args: Parameters<T>) {
  clearTimeout(timer)
  timer = setTimeout(async () => {
    await fn(...args)
  }, interval)
 } as T
}

export default debounce