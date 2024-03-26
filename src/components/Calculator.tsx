import { Operation } from "../types"
import DisplayOperation from "./DisplayOperation"

const calculate = (num1: number, num2: number, operation: Operation) => {
  let result: number
  switch (operation) {
    case Operation.Add:
      result = num1 + num2
      break
    case Operation.Subtract:
      result = num1 - num2
      break
    case Operation.Multiply:
      result = num1 * num2
      break
    case Operation.Divide:
      result = num1 / num2
      break
    default:
      throw new Error("Invalid operation")
  }
  return result
}

function Calculator() {
  return (
    <DisplayOperation>
      {(num1: number, num2: number, operation: Operation) => {
        return <span>{calculate(num1, num2, operation)}</span>
      }}
    </DisplayOperation>
  )
}

export default Calculator