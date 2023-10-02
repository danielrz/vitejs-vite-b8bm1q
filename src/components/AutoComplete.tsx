import { ChangeEvent, useState } from 'react'
import { Props } from '../interfaces/autoComplete'
import { useDebounce } from '../hooks/useDebounce'
import { fetchItems } from '../api/autoComplete'

function AutoComplete({ interval }: Props) {

  const [items, setItems] = useState<string[]>([])

  // const getItems = useCallback(async (term: string) => {
  //   const searchItems = await fetchItems(term)
  //   setItems(searchItems)
  // }, [])

  async function getItems(term: string) {
    const searchItems = await fetchItems(term)
    setItems(searchItems)
  }

  const debounceHandler = useDebounce(getItems, interval)

  async function onItemType(event: ChangeEvent<HTMLInputElement>) {
    debounceHandler(event.target.value)
  }


  return (
    <>
      <input type="text" onChange={onItemType} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default AutoComplete