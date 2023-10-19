import { ChangeEvent, useState } from "react";
import { Props } from "../interfaces/autoComplete";
import useSearch from "../hooks/useSearch";
// import HeavyComponent from "./HeavyComponent";

function AutoComplete({ children, interval }: Props) {
  const [term, setTerm] = useState<string>("");

  const items = useSearch({ term, interval });

  async function onItemType(event: ChangeEvent<HTMLInputElement>) {
    setTerm(event.target.value);
  }

  // const HeavyComponentMemo = memo(HeavyComponent);

  return (
    <>
      <input type="text" onChange={onItemType} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* <HeavyComponentMemo style={{ backgroundColor: 'orange'}} /> */}
      {children}
    </>
  );
}

export default AutoComplete;