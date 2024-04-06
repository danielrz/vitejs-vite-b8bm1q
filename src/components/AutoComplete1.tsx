import { ChangeEvent, useState } from "react"
import useDomainSearch from "../hooks/useDomainSearch"
import { Domain } from "../types"
// import useSearch2 from "../hooks/useSearch2"

interface Props {
  delay: number
}

function AutoComplete1(props: Props) {

  const { delay } = props

  const [term, setTerm] = useState<string>('')

  function onTermChange(e: ChangeEvent<HTMLInputElement>) {
    setTerm(e.target.value)
  }

  const domains: Domain[] = useDomainSearch(term, delay)
  // const suggestions = useSearch2({
  //   term,
  //   delay
  // })

  return (
    <>
    Autocomplete1:
      <input type="text" onChange={onTermChange} />
      <div>
        <ul>
          {
              domains.map((domainObj: Domain, index) => {
                const {domain, create_date, country, isDead} = domainObj;
                return (
                <li key={`${domain}-${index}`}>{`${domain} - ${country} - ${create_date} - ${isDead}`}</li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default AutoComplete1