import ListItem from "./ListItem";

function List() {

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