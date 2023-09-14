import { useState, useContext, createContext, ReactNode } from 'react'
import { Theme, ThemeProviderValue } from '../interfaces'

const ThemeContext = createContext<ThemeProviderValue>({} as ThemeProviderValue)

export function useThemeContext () {
  return useContext(ThemeContext)
}

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(Theme.DARK)
  console.log("!!!theme::provider", theme);

  function toggleTheme(): void {
    if (theme === Theme.DARK) {
      setTheme(Theme.LIGHT)
      return
    }

    setTheme(Theme.DARK)
  }

  return (
    <>t: {theme}
    <ThemeContext.Provider value={{ theme, toggleTheme} as ThemeProviderValue}>
      {children}
    </ThemeContext.Provider></>
  )
}

export default ThemeProvider
