const baseColors = {
  neutral: "whitesmoke",
  primary: {
    normal: "#6c3da8",
    light: "#9e6ada",
    dark: "#3b1078",
    text: {
      normal: "white",
      light: "black",
      dark: "white",
    },
  },
  seondary: {
    normal: "#b39ddb",
    light: "#e6ceff",
    dark: "#836fa9",
    text: {
      normal: "black",
      light: "black",
      dark: "black",
    },
  },
};

const baseTheme = {
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
        border: "#434343",
        background: "none",
        text: "#434343",
      },
      ok: {
        border: "#008b00",
        background: "none",
        text: "#008b00",
      },
      err: {
        border: "#b1006a",
        background: "none",
        text: "#b1006a",
      },
    },
  },
};

export default baseTheme;
