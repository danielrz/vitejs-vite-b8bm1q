import { useEffect, useState } from "react";
import { fetchItems } from "../api/autoComplete";
import { UseSearchInput } from "../interfaces/autoComplete";

function useSearch({ term, interval }: UseSearchInput): string[] {
  const [items, setItems] = useState<string[]>([])
  
  useEffect(() => {
    // console.log('useSearch:term', term)
    if (!term.length) {
      setItems([])
      return
    }

    (async () => {
      const listItems = await fetchItems(term)
      // console.log('useSearch:listItems', listItems)
      setItems(listItems)
    })();

  }, [term])

  return items
}

export default useSearch