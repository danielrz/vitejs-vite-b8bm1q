import Home from './components/Home';
import { Theme, ThemeProvider, useTheme } from './providers/ThemeProvider';
import './styles.scss';

function App() {
  const themeContext = useTheme()
  return (
    <div style={{backgroundColor: themeContext.theme === Theme.DARK ? 'lightgray' : 'lightpink'}}>
      <Home />
    </div>
  )
}

function RootApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

export default RootApp;
