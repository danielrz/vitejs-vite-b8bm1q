import { ReactNode, useState } from "react";
import { Operation } from "../types";

function DisplayOperation({
  children,
}: {
  children: (a: number, b: number, operation: Operation) => ReactNode;
}) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState<Operation>(Operation.Add);
  return (
    <>
      <div>
        Operation:
        <select
          onChange={(e) => {
            setOperation(e.target.value as Operation);
          }}>
          <option key={Operation.Add}>{Operation.Add}</option>
          <option key={Operation.Subtract}>{Operation.Subtract}</option>
          <option key={Operation.Multiply}>{Operation.Multiply}</option>
          <option key={Operation.Divide}>{Operation.Divide}</option>
          </select>
      </div>
      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(parseInt(e.target.value))}
        />
      </div>
      <div>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(parseInt(e.target.value))}
        />
      </div>
      <div>Result: {children(num1, num2, operation)}</div>
    </>
  );
}

export default DisplayOperation;
