import { ReactNode, createContext, useContext, useState } from "react";

enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

function useTheme() {
  return useContext(ThemeContext)
}

function ThemeProvider({ children }: { children: ReactNode}) {
  const [myTheme, setMyTheme] = useState<Theme>(Theme.DARK)
  const setTheme = (theme: Theme) => {
    setMyTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{theme: myTheme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export {
  Theme,
  useTheme,
  ThemeProvider
}