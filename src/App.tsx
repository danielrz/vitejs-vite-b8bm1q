import Home from './components/Home';
import { Theme, ThemeProvider, useTheme, ThemeContextType } from './providers/ThemeProvider';
import './styles.scss';

function App() {
  const themeContext = useTheme() as ThemeContextType
  const bgColor = themeContext.theme === Theme.DARK ? 'lightgray' : 'lightpink'
  return (
    <div style={{backgroundColor: bgColor}}>
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


// import Home from "./components/Home"
// import { ThemeProvider } from "./providers/ThemeProvider1"
// import './styles.scss';

// function App() {
//   return (
//     <ThemeProvider>
//       <Home />
//     </ThemeProvider>
//   )
// }

// export default App