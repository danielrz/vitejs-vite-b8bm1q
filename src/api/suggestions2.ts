import wait1 from "../utils/wait1"

function fetchSuggestions2(term: string): Promise<string[]>{
  if (!term.length) {
    return new Promise((resolve) => {
      resolve([] as string[])
    })
  }
  return new Promise((resolve) => {
    (async () => {
      await wait1(1000)
      const response = [...new Array(11).keys()].map((i) => {
        return `${term}-${i}`
      }).slice(1)
      resolve(response)
    })();
    
  })
}

export default fetchSuggestions2