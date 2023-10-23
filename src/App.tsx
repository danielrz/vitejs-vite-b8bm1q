import Menu from "./components/Menu"
import { countries } from "./data/countries"
import './styles.scss'

function App() {
  return (
    <div className="App">
      <h1>Responsive navigation example</h1>
      <p>resize the window to see how navigation adjusts the number of items</p>
      <Menu items={countries} />
    </div>
  )
}

export default App
