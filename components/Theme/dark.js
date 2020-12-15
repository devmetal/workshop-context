import { createTheme } from "./ThemeProvider";

const baseColors = {
  neutral: "whitesmoke",
  primary: {
    normal: "#1a237e",
    light: "#534bae",
    dark: "#000051",
    text: {
      normal: "#bdbdbd",
      light: "#bdbdbd",
      dark: "#bdbdbd",
    },
  },
  seondary: {
    normal: "#004d40",
    light: "#39796b",
    dark: "#00251a",
    text: {
      normal: "#bdbdbd",
      light: "#bdbdbd",
      dark: "#bdbdbd",
    },
  },
};

const darkTheme = {
  colors: {
    ...baseColors,
    card: {
      primary: {
        header: {
          background: baseColors.seondary.normal,
          text: baseColors.seondary.text.normal,
        },
        body: {
          background: baseColors.seondary.light,
          text: baseColors.seondary.text.light,
        },
      },
    },
    button: {
      base: {
        border: "#474747",
        background: "none",
        text: "#474747",
      },
      ok: {
        border: "#0c5015",
        background: "none",
        text: "#0c5015",
      },
    },
  },
};

const dark = createTheme(darkTheme);

export default dark;
