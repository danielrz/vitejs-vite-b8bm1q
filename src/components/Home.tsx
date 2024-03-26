import { Theme, useTheme, ThemeContextType } from "../providers/ThemeProvider";
import AutoComplete from "./AutoComplete";
import AutoComplete1 from "./AutoComplete1";
import Calculator from "./Calculator";
import Counter from "./Counter";
// import GeoLocationContainer from "./GeoLocationContainer";
import GeoLocation from "./GeoLocation";
import HeavyComponent from "./HeavyComponent";
import ThemeButton from "./ThemeButton";

function Home() {
  const themeContext = useTheme() as ThemeContextType;
  console.log('theme', themeContext.theme)
  return (
    <>
      {/* <GeoLocationContainer /> */}
      <GeoLocation />
      <Calculator />
      <div>theme: {themeContext.theme}</div>
      <div>
        <select
          onChange={(e) => themeContext.setTheme(e.target.value as Theme)}
        >
          <option key={Theme.DARK}>{Theme.DARK}</option>
          <option key={Theme.LIGHT}>{Theme.LIGHT}</option>
        </select>
      </div>
      <div>
        <ThemeButton onClick={() => void 0}>Click me!</ThemeButton>
      </div>
      <div>
        <Counter initialValue={5} />
      </div>
      <AutoComplete delay={500}>
        <HeavyComponent />
      </AutoComplete>
      <AutoComplete1 delay={500} />
    </>
  );
}

export default Home;
