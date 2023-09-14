import "./App.css";
import ThemeProvider, { useThemeContext } from "./providers/ThemeProvider";
import { QuotesPage, QuoteStatus } from "./modules/Quotes";

function App() {
  const themeContext = useThemeContext();
  console.log("!!!theme::App", themeContext.theme); // undefined if not wrapped in ThemeProvider

  return (
    <div className={`App theme-${themeContext.theme}`}>
      <QuotesPage title="Quotes" initialStatus={QuoteStatus.INACTIVE} />
    </div>
  );
}

export default function AppWrapper() {
  return (
  <ThemeProvider>
    <App />
  </ThemeProvider>
  )
}
