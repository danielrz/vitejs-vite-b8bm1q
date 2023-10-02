function itemsFactory(term: string): string[] {
  return [...Array(10).keys()].map((i) => `${term}-${i}`)
}

export {
  itemsFactory
}