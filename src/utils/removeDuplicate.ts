function removeDuplicateWithReduce<T>(arr: T[]): T[] {
  return arr.reduce((acc, value) => {
    return acc.includes(value) ? acc : [...acc, value]
  }, [] as T[])
}

function removeDuplicateWithSet<T>(arr: T[]): T[] {
  return [...new Set(arr)]
}


export  {
  removeDuplicateWithReduce,
  removeDuplicateWithSet
}