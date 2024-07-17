function once<T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T) {
  let called = false
  return function(...args: Parameters<T>) {
    if (!called) {
      called = true
      return fn(...args)
    }
    throw new Error('Error! Function has already been called')
  }
}

export default once