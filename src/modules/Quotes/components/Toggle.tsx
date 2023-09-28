import { useThemeContext } from "../../../providers/ThemeProvider";

function Toggle() {

  const themeContext = useThemeContext();

  return (
    <label className="switch">
      <input type="checkbox" onClick={themeContext.toggle} />
      <span className="slider round" />
    </label>
  );
}

export default Toggle