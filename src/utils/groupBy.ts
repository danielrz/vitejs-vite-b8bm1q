//write a groupBy function which will group by a list of objects by an object property
//example:
/*
groupBy([{
  name: 'a', age: 10
}, {
  name: 'b', age: 20
}, {
  name: 'a', age: 30
}
], 'name')

will output:
{
  a: [{
    name: 'a', age: 10
  }, {
    name: 'a', age: 30
  }],
  b: [{
    name: 'b', age: 20
  }]
}
*/

function groupBy<T, K extends keyof T>(arr: T[], key: K): Record<K, T[]> {
  return arr.reduce((acc, value) => {
    const currentKeyValue = value[key] as K
    if (!acc[currentKeyValue]) {
      acc[currentKeyValue] = [] as T[]
    }
    acc[currentKeyValue].push(value)
    return acc
  }, {} as Record<K, T[]>)
}

export default groupBy