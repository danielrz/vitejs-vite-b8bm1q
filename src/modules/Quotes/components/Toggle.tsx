import { FC } from "react";
import { useThemeContext } from "../../../providers/ThemeProvider";

const Toggle: FC = () => {

  const themeContext = useThemeContext();

  return (
    <label className="switch">
      <input type="checkbox" onClick={themeContext.toggleTheme} />
      <span className="slider round" />
    </label>
  );
}

export default Toggle