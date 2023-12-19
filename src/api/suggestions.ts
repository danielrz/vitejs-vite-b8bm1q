async function fetchSuggestions(term: string): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(term)
      const response = [...Array(10).keys()].map((i) => {
        return `${term}-${i}`
      })
      resolve(response)
    }, 300)
  })
}

export default fetchSuggestions