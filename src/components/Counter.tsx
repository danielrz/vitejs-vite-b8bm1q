import { useState } from "react"

function Counter({initialValue} : {initialValue: number}) {
  const [counter, setCounter] = useState(initialValue)
  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Counter