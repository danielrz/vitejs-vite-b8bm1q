import { useState } from 'react';
import { QuotesHeaderProps, QuoteStatus, Toggle, List } from './';
import { useThemeContext } from '../../providers/ThemeProvider';

function QuotesPage({ title, initialStatus = QuoteStatus.ACTIVE }: QuotesHeaderProps) {
  const [status, setStatus] = useState<QuoteStatus>(initialStatus)
  const themeContext = useThemeContext();
  console.log("!!!theme::QuoteStatus", themeContext.theme);
  function toggleStatus() : void {
    if (status === QuoteStatus.ACTIVE) {
      setStatus(QuoteStatus.INACTIVE)
      return
    }
    setStatus(QuoteStatus.ACTIVE)
  }

  return (
    <div className={`App theme-${themeContext.theme}`}>
      <h1>{title} ({status})</h1>
      <input type="checkbox" checked={status === QuoteStatus.ACTIVE} onChange={toggleStatus} />
      <Toggle />
      <p>
        <List />
      </p>
    </div>
  );
}

export default QuotesPage;
