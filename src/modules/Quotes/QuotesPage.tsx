import { FC, useState } from 'react';
import { QuotesHeaderProps, QuoteStatus, Toggle, List } from './';
import { useThemeContext } from '../../providers/ThemeProvider';

const QuotesPage: FC<QuotesHeaderProps> = ({ title, initialStatus = QuoteStatus.ACTIVE }) => {
  const [status, setStatus] = useState<QuoteStatus>(initialStatus)
  const themeContext = useThemeContext();
  console.log("!!!theme::QuoteStatus", themeContext.theme); // dark
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
