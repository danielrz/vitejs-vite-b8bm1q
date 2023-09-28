import { useContext, createContext, ReactNode, useState } from "react";
import { Theme, ThemeContextValue } from "../interfaces/ThemeProvider";

const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue)

function useThemeContext() {
  return useContext(ThemeContext)
}

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

  function toggle() {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      { children }
    </ThemeContext.Provider>
  )
}

export { ThemeProvider as default, useThemeContext }
