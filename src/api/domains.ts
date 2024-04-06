import { Domain } from "../types";

const DOMAIN_API_URL = '/domain_api'
async function fetchDomains(term: string):Promise<Domain[]> {
  let domains: Domain[] = []
  try {
    const url = `${DOMAIN_API_URL}?domain=${term}&zone=com`
    const response: Response = await fetch(url)
    const data = await response.json()
    domains = data.domains
    return domains
  }
  catch (e) {
    console.error(e)
    return domains
  }
  
}

export default fetchDomains