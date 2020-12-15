import React, { useState } from "react";
import merge from "deepmerge";
import base from "./base";

const createTheme = (theme) => merge(base, theme);

const ThemeContext = React.createContext(base);
const SetThemeContext = React.createContext();

const ThemeProvider = ({ children, theme = base }) => {
  const [utheme, setUTheme] = useState(theme);

  return (
    <ThemeContext.Provider value={utheme}>
      <SetThemeContext.Provider value={setUTheme}>
        {children}
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export { createTheme, ThemeContext, SetThemeContext };
