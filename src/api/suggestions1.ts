import wait1 from "../utils/wait1"

async function fetchSuggestions(term:string): Promise<string[]> {
  const result = [] as string[]
  console.log('fetchSuggestions1::term', term)
  if (!term.length) {
    return new Promise((resolve) => {
      resolve(result)
    })
  }
  await wait1(1000)
  return new Promise((resolve) => {
    const response = [...new Array(11).keys()].map((i) => {
      return `${term}-${i}`
    }).slice(1)
    console.log('fetchSuggestions1::response', response)
    resolve(response)
  })
}

export default fetchSuggestions