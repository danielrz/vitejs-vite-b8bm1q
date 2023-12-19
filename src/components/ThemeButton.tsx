import { ReactNode } from 'react';
import { Theme, useTheme } from '../providers/ThemeProvider';

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};
const ThemeButton = ({ onClick, children }: ButtonProps) => {
  const themeContext = useTheme()
  return (
    <button onClick={onClick} className="button" style={{ backgroundColor: themeContext.theme === Theme.DARK ? 'red' : 'blue'}}>
      {children}
    </button>
  );
};

export default ThemeButton