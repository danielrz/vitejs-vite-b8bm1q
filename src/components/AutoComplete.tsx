import { ChangeEvent, useEffect, useState } from "react";
import { Props } from "../interfaces/autoComplete";
import useSearch from "../hooks/useSearch";

function AutoComplete({ interval }: Props) {
  const [items, setItems] = useState<string[]>([]);
  const [term, setTerm] = useState<string>("");

  const searchItems = useSearch({ term, interval });

  async function onItemType(event: ChangeEvent<HTMLInputElement>) {
    const term = event.target.value;
    setTerm(term);
  }

  useEffect(() => {
    setItems(searchItems);
  }, [searchItems]);

  return (
    <>
      <input type="text" onChange={onItemType} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AutoComplete;
