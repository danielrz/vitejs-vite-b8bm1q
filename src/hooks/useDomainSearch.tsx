import { useEffect, useState, useCallback } from "react"
import { Domain } from "../types"
import fetchDomains from "../api/domains"
import debounce from "../utils/debounce1"

function useDomainSearch(term: string, delay: number): Domain[] {
  const [domains, setDomains] = useState<Domain[]>([])

  const getDomains = async (t: string) => {
    if (!t.length) {
      return []
    }
    const domains = await fetchDomains(t)
    console.log('!!!getDomains', { t, domains})
    setDomains(domains)
  }

  const debouncer = useCallback(debounce(getDomains, delay), [delay])

  useEffect(() => {
    debouncer(term)
  }, [term])

  return domains
}

export default useDomainSearch