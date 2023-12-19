/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import fetchSuggestions from "../api/suggestions"
import useDebounce from "./useDebounce"

function useSearch({term, delay}: {term: string, delay: number}) {
  const [suggestions, setSuggestions] = useState<string[]>([])

  const getSuggestions = async () => {
    const fetchedSuggestions = await fetchSuggestions(term)
    setSuggestions(fetchedSuggestions)
  }

  const debounceHandler = useDebounce(getSuggestions, delay)
  
  useEffect(() => {
    debounceHandler()
  }, [term])

  return suggestions
}

export default useSearch