import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme();

const typography = {
  h1: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(2.5rem, 5vw, 6rem)`, // 40px–96px
    // fontWeight: 300,
    // lineHeight: 1.167,
    // letterSpacing: "-0.01562em",
  },
  h2: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(2rem, 4vw, 3.75rem)`, // 32px–60px
    fontWeight: 500,
    // lineHeight: 1.2,
    letterSpacing: "-0.02em",
  },
  h3: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(1.75rem, 3vw, 3rem)`, // 28px–48px
    // fontWeight: 400,
    // lineHeight: 1.167,
    // letterSpacing: "0em",
  },
  h4: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(1.5rem, 2.5vw, 2.125rem)`, // 24px–34px
    // fontWeight: 400,
    // lineHeight: 1.235,
    // letterSpacing: "0.00735em",
  },
  h5: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(1.25rem, 2vw, 1.5rem)`, // 20px–24px
    fontWeight: 500,
    // lineHeight: 1.334,
    // letterSpacing: "0em",
  },
  h6: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(1rem, 1.75vw, 1.25rem)`, // 16px–20px
    // fontWeight: 500,
    // lineHeight: 1.6,
    // letterSpacing: "0.0075em",
  },
  subtitle1: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(1rem, 1.5vw, 1rem)`, // 16px
    // fontWeight: 400,
    // lineHeight: 1.75,
    // letterSpacing: "0.00938em",
  },
  subtitle2: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(0.875rem, 1.25vw, 0.875rem)`, // 14px
    // fontWeight: 500,
    // lineHeight: 1.57,
    // letterSpacing: "0.00714em",
  },
  body1: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(1rem, 1.25vw, 1rem)`, // 16px
    // fontWeight: 400,
    // lineHeight: 1.5,
    // letterSpacing: "0.03125em",
  },
  body2: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(0.875rem, 1vw, 0.875rem)`, // 14px
    // fontWeight: 400,
    // lineHeight: 1.43,
    // letterSpacing: "0.01786em",
  },
  button: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(0.875rem, 1vw, 0.875rem)`, // 14px
    // fontWeight: 500,
    // lineHeight: 1.75,
    // letterSpacing: "0.08929em",
    // textTransform: "uppercase",
  },
  caption: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(0.75rem, 0.9vw, 0.75rem)`, // 12px
    // fontWeight: 400,
    // lineHeight: 1.66,
    // letterSpacing: "0.03333em",
  },
  overline: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(0.625rem, 0.8vw, 0.75rem)`, // 10–12px range
    // fontWeight: 400,
    // lineHeight: 2.66,
    // letterSpacing: "0.08333em",
    // textTransform: "uppercase",
  },
};

const components = {
  // MuiChip: {
  //   styleOverrides: {
  //     root: {
  //       fontFamily: "Inter, sans-serif",
  //       [baseTheme.breakpoints.down("md")]: {
  //         fontSize: "0.75rem",
  //       },
  //       [baseTheme.breakpoints.up("xl")]: {
  //         fontSize: "1rem",
  //       },
  //     },
  //   },
  // },
  // MuiTooltip: {
  //   styleOverrides: {
  //     tooltip: {
  //       fontFamily: "Inter, sans-serif",
  //       [baseTheme.breakpoints.down("md")]: {
  //         fontSize: "0.75rem",
  //       },
  //       [baseTheme.breakpoints.up("xl")]: {
  //         fontSize: "1rem",
  //       },
  //     },
  //   },
  // },
  // MuiTextField: {
  //   styleOverrides: {
  //     root: {
  //       fontFamily: "Inter, sans-serif",
  //       [baseTheme.breakpoints.down("md")]: {
  //         fontSize: "0.75rem",
  //       },
  //       [baseTheme.breakpoints.up("xl")]: {
  //         fontSize: "1rem",
  //       },
  //     },
  //   },
  // },
  // MuiFilledInput: {
  //   styleOverrides: {
  //     root: {
  //       fontFamily: "Inter, sans-serif",
  //       [baseTheme.breakpoints.down("md")]: {
  //         fontSize: "0.75rem",
  //       },
  //       [baseTheme.breakpoints.up("xl")]: {
  //         fontSize: "1rem",
  //       },
  //     },
  //   },
  // },
  // MuiFormLabel: {
  //   styleOverrides: {
  //     root: {
  //       fontFamily: "Inter, sans-serif",
  //       [baseTheme.breakpoints.down("md")]: {
  //         fontSize: "0.75rem",
  //       },
  //       [baseTheme.breakpoints.up("xl")]: {
  //         fontSize: "1rem",
  //       },
  //     },
  //   },
  // },
};

const transitions = {
  duration: {
    standard: 150,
  },
  easing: {
    standard: "ease-in-out",
  },
};

let lightTheme = createTheme({
  palette: {
    background: {
      default: "#F4F4F6",
      contrast: "#101218",
      accent: "#202431",
      accentHover: "#101218",
      footer: "#6093D6",
    },
    text: {
      textPrimary: {
        light: "#202431",
        main: "#696F8C",
        dark: "#757D94",
      },
      textSecondary: {
        light: "#6093D6",
        main: "#585C74",
        dark: "#757D94",
      },
      textTertiary: {
        light: "#4A4C59",
        main: "#202431",
        dark: "#D5DEEC",
      },
      textDynamicIsland: {
        light: "#F4F4F6",
        main: "#6093D6",
        dark: "#858899",
      },
      textFooter: {
        light: "#F4F4F6",
        main: "#757D94",
        dark: "#6093D6",
        footer: "#101218",
      },
    },
    darkBlue: {
      main: "#6093D6",
      contrastText: "#D5DEEC",
    },
    lightBlue: {
      main: "#6093D6",
      contrastText: "#202431",
    },
    switchThumb: {
      track: "#757D94",
      main: "#D5DEEC",
    },
    textField: {
      fill: "#202531",
      fillHovered: "#242A38",
      fillFocused: "#202531",
      text: "#F4F4F6",
      label: "#757D94",
      labelFocused: "#6093D6",
      helperText: "#585C74",
      border: "#757D94",
      borderHovered: "#F4F4F6",
      borderFocused: "#6093D6",
    },
    button: {
      fill: "#6093D6",
      fillHovered: "#ABBFD8",
      fillFocused: "#E9E9ED",
      text: "#F4F4F6",
      textHovered: "#202431",
      label: "#42566E",
      labelFocused: "#6093D6",
      border: "#757D94",
      borderHovered: "#42566E",
      borderFocused: "#6093D6",
    },
    paper: {
      fill: "#202431",
      fillHovered: "#202431",
    },
  },
  typography,
  transitions,
  components,
});

let darkTheme = createTheme({
  palette: {
    background: {
      default: "#101218",
      contrast: "#F4F4F6",
      accent: "#6093D6",
      accentHover: "#ABBFD8",
      footer: "#6093D6",
    },
    text: {
      textPrimary: {
        light: "#D5DEEC",
        main: "#757D94",
        dark: "#585C74",
      },
      textSecondary: {
        light: "#6093D6",
        main: "#6093D6",
        dark: "#42566E",
      },
      textTertiary: {
        light: "#4A4C59",
        main: "#202431",
        dark: "#101218",
      },
      textDynamicIsland: {
        light: "#F4F4F6",
        main: "#202431",
        dark: "#546D8C",
      },
      textFooter: {
        light: "#202431",
        main: "#696F8C",
        dark: "#6093D6",
        footer: "#101218",
      },
    },
    darkBlue: {
      main: "#202431",
      contrastText: "#6093D6",
    },
    lightBlue: {
      main: "#6093D6",
      contrastText: "#202431",
    },
    switchThumb: {
      track: "#353746",
      main: "#696E8C",
    },
    textField: {
      fill: "#E9E9ED",
      fillHovered: "#E1E1E6",
      fillFocused: "#E9E9ED",
      text: "#D5DEEC",
      label: "#757D94",
      labelFocused: "#6093D6",
      helperText: "9B9EAB",
      border: "#757D94",
      borderHovered: "#D5DEEC",
      borderFocused: "#6093D6",
    },
    button: {
      fill: "#202431",
      fillHovered: "#101218",
      fillFocused: "#E9E9ED",
      text: "#F4F4F6",
      textHovered: "#6093D6",
      label: "#42566E",
      labelFocused: "#6093D6",
      border: "#757D94",
      borderHovered: "#42566E",
      borderFocused: "#6093D6",
    },
    paper: {
      fill: "#E9E9ED",
      fillHovered: "#202431",
    },
  },
  typography,
  transitions,
  components,
});

const theme = createTheme(darkTheme);

export { lightTheme, darkTheme };
export default theme;
