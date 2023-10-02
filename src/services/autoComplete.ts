/* eslint-disable no-debugger */
import { fetchItems } from "../api/autoComplete";
import { GetItemsServiceInput } from "../interfaces/autoComplete";
import { debounce } from "../utils";

function getItems({ term, interval}: GetItemsServiceInput): Promise<string[]> {
  const fetchItemsHandler = debounce(async (term) => {
    const items = await fetchItems(term)
    return items
  }, interval)
  return fetchItemsHandler(term)
}

export {
  getItems
}