function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T, delay: number) {
  let timer: ReturnType<typeof setTimeout>

  return function(...args: Parameters<T>) {
    console.log('debounce', {timer})
    if (timer) {
      console.log('debounce:clearTimeout', {args, timer})
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
    console.log('debounce:new timer', {args, timer})
  }
}

export default debounce