function fetchItems(term: string): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = [...Array(10).keys()].map((i) => `${term}-${i}`)
      console.log('fetchItems result', result)
      resolve(result)
    }, 300)
  })
}

export { fetchItems }