import { useEffect, useState } from "react";
import { fetchItems } from "../api/autoComplete";
import { UseSearchInput } from "../interfaces/autoComplete";
import useDebounce from "./useDebounce";


function useSearch({ term, interval }: UseSearchInput): string[] {
  const [items, setItems] = useState<string[]>([])
  
  async function getItems(term: string) {
    if (!term) {
      return setItems([])
    }
    const searchItems = await fetchItems(term)
    setItems(searchItems)
  }

  const debounceHandler = useDebounce(getItems, interval)

  useEffect(() => {
    debounceHandler(term)
  }, [term])

  return items
}

export default useSearch