import { ChangeEvent, useState } from "react";
import { Props } from "../interfaces/autoComplete";
import useSearch from "../hooks/useSearch";

function AutoComplete({ children, interval }: Props) {
  const [term, setTerm] = useState<string>("");

  const items = useSearch({ term, interval });

  async function onItemType(event: ChangeEvent<HTMLInputElement>) {
    const term = event.target.value;
    setTerm(term);
  }

  return (
    <>
      <input type="text" onChange={onItemType} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {children}
    </>
  );
}

export default AutoComplete;
