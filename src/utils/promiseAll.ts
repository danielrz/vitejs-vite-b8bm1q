function PromiseAll<T extends Promise<T>>(promises: Promise<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const response: T[] = []
    let count = 0
    promises.forEach((promise, index) => {
      promise.then((data: T) => {
        response[index] = data
        count += 1
        if (count === promises.length) {
          resolve(response)
        }
      })
      .catch((err: any) => {
        reject(err)
      })
    })
  })
}