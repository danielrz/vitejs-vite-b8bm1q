import AutoComplete from "./components/AutoComplete";
import HeavyComponent from "./components/HeavyComponent";

function App() {

  return (
    <div>
      <AutoComplete interval={500}>
        <HeavyComponent />
      </AutoComplete>
    </div>
  )
}

export default App