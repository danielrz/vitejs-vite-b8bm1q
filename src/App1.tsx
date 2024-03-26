import Home from "./components/Home"
import { ThemeProvider, useTheme, Theme } from "./providers/ThemeProvider1"

function App1() {
  const themeContext = useTheme()
  const bgColor = themeContext.theme === Theme.DARK ? 'green' : 'orange'
  return (
    <div style={{backgroundColor: bgColor}}>
      <Home />
    </div>
  )
}

function RootApp1() {
  return (
    <ThemeProvider>
      <App1 />
    </ThemeProvider>
  )
}

export default RootApp1