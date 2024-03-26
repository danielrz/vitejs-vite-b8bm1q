import { useEffect, useState, useCallback } from "react";
import fetchSuggestions from "../api/suggestions1";
import debounce from "../utils/debounce";

interface Props {
  term: string;
  delay: number;
}

function useSearch(props: Props): string[] {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { term, delay } = props;

  async function getSuggestions(term: string): Promise<void> {
    if (!term.length) {
      setSuggestions([]);
      return;
    }
    const s = await fetchSuggestions(term);
    console.log('suggestions1', s);
    setSuggestions(s);
  }

  // const getSuggestionsWithDebounce = debounce(getSuggestions, delay);
  const getSuggestionsWithDebounce = useCallback(debounce(getSuggestions, delay), [delay]);

  useEffect(() => {
    console.log('useSearch::useEffect', term);
    getSuggestionsWithDebounce(term);
  }, [term, getSuggestionsWithDebounce]);

  return suggestions;
}

export default useSearch;

