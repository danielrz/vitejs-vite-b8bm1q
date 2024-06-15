function PromiseAll<T>(promises: Promise<T>[]): Promise<T[]> {
  return new Promise<T[]>((resolve, reject) => {
    const response: T[] = []
    let count = 0
    promises.forEach((promise: Promise<T>, index) => {
      promise.then((data: T) => {
        response[index] = data
        count += 1
        if (count === promises.length) {
          resolve(response)
        }
      })
      .catch((err) => {
        reject(err)
      }) 
    })
  })
}

export default PromiseAll