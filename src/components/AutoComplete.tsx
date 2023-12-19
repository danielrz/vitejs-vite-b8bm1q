import { ChangeEvent, useState, ReactNode } from "react";
import useSearch from "../hooks/useSearch";

function Autocomplete({children, delay}: {children: ReactNode, delay: number}) {
  const [term, setTerm] = useState("");

  const onTermType = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const suggestions: string[] = useSearch({term, delay});

  return (
    <>
      <input type="text" onChange={onTermType} />
      <div>
        <ul>
          {term.length && suggestions.length
            ? suggestions.map((suggestion, index) => {
                return <li key={`${suggestion}-${index}`}>{suggestion}</li>;
              })
            : ""}
        </ul>
      </div>
      <div>
        {children}
      </div>
    </>
  );
}

export default Autocomplete;
