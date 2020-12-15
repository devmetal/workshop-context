import { useContext, useState } from "react";
import base from "../Theme/base";
import dark from "../Theme/dark";
import { SetThemeContext } from "../Theme/ThemeProvider";

const themeMap = {
  base,
  dark,
};

const ThemeSelector = () => {
  const [selected, setSelected] = useState("base");
  const setTheme = useContext(SetThemeContext);

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setSelected(value);
    setTheme(themeMap[value]);
  };

  return (
    <select value={selected} onChange={handleChange}>
      <option value="base">Base</option>
      <option value="dark">Dark</option>
    </select>
  );
};

export default ThemeSelector;
