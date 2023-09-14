import { FC } from "react";
import ListItem from "./ListItem";

const List: FC = () => {

  const ids = [... new Array(10).keys()]

  return (
    <ul className="list">
      {
        ids.map((id) => {
          return (
            <ListItem key={id} id={id} />
          )
        })
      }
    </ul>
  )
}

export default List