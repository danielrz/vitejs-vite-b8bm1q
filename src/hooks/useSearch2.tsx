import { useCallback, useEffect, useState } from "react"
import fetchSuggestions2 from "../api/suggestions2"
import useDebounce1 from "./useDebounce1"
// import debounce1 from "../utils/debounce1"

interface Props {
  term: string
  delay: number
}

function useSearch2(props: Props): string[] {
  const { term, delay } = props
  const [suggestions, setSuggestions] = useState<string[]>([])

  const getSuggestions = async (t: string): Promise<void> => {
    const response = await fetchSuggestions2(t)
    console.log('!!!api response', { t, response })
    setSuggestions(response)
  }

  const debounceHandler = useCallback(useDebounce1(getSuggestions, delay), [delay, useDebounce1])
  // const dHandler = useCallback(debounce1(getSuggestions, delay), [delay])

  useEffect(() => {
    console.log('!!!useEffect on term', { term })
    debounceHandler(term)
    // dHandler(term)
  }, [term, debounceHandler])

  return suggestions

}

export default useSearch2