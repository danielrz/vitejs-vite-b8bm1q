import { Theme, useTheme } from "../providers/ThemeProvider"
import ThemeButton from "./ThemeButton"

function Home() {
  const themeContext = useTheme()
  return (
    <>
      <div>
        theme: {themeContext.theme}
      </div>
      <div>
        <select onChange={(e) => themeContext.setTheme(e.target.value as Theme)}>
          <option key={Theme.DARK}>{Theme.DARK}</option>
          <option key={Theme.LIGHT}>{Theme.LIGHT}</option>
        </select>
      </div>
      <div>
        <ThemeButton onClick={() => void(0)}>
          Click me!
        </ThemeButton>
      </div>
    </>
  )
}

export default Home