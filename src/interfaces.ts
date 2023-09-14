export enum Theme {
  DARK = "dark",
  LIGHT = "light"
}

export interface ThemeProviderValue {
  theme: Theme;
  toggleTheme: () => void;
}

