import { ChangeEvent, useState } from "react"
import useSearch2 from "../hooks/useSearch2"

interface Props {
  delay: number
}

function AutoComplete1(props: Props) {

  const { delay } = props

  const [term, setTerm] = useState<string>('')

  function onTermChange(e: ChangeEvent<HTMLInputElement>) {
    setTerm(e.target.value)
  }

  const suggestions = useSearch2({
    term,
    delay
  })

  return (
    <>
    Autocomplete1:
      <input type="text" onChange={onTermChange} />
      <div>
        <ul>
          {
            suggestions.map((suggestion: string, index) => {
              return (
                <li key={`${suggestion}-${index}`}>{suggestion}</li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default AutoComplete1