import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme();

const typography = {
  h1: {
    fontFamily: "Jetbrains Mono, sans-sefif",
    [baseTheme.breakpoints.down("md")]: {
      fontSize: "4rem",
    },
    [baseTheme.breakpoints.up("xl")]: {
      fontSize: "8rem",
    },
  },
  h2: {
    fontFamily: "Jetbrains Mono, sans-sefif",
    [baseTheme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
    [baseTheme.breakpoints.up("xl")]: {
      fontSize: "4.5rem",
    },
  },
  h3: {
    fontFamily: "Jetbrains Mono, sans-sefif",
    [baseTheme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
    [baseTheme.breakpoints.up("xl")]: {
      fontSize: "3.5rem",
    },
  },
  h4: {
    fontFamily: "Jetbrains Mono, sans-sefif",
    [baseTheme.breakpoints.down("md")]: {
      fontSize: "1.75rem",
    },
    [baseTheme.breakpoints.up("xl")]: {
      fontSize: "2.75rem",
    },
  },
  h5: {
    fontFamily: "Jetbrains Mono, sans-sefif",
    [baseTheme.breakpoints.down("md")]: {
      fontSize: "1.25rem",
    },
    [baseTheme.breakpoints.up("xl")]: {
      fontSize: "2rem",
    },
  },
  h6: {
    fontFamily: "Jetbrains Mono, sans-sefif",
    [baseTheme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    [baseTheme.breakpoints.up("xl")]: {
      fontSize: "1.5rem",
    },
  },
  subtitle1: {
    fontFamily: "Poppins, sans-sefif",
    [baseTheme.breakpoints.down("md")]: {
      fontSize: "0.875rem",
    },
    [baseTheme.breakpoints.up("xl")]: {
      fontSize: "1.25rem",
    },
  },
  subtitle2: {
    fontFamily: "Poppins, sans-sefif",
    [baseTheme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
    },
    [baseTheme.breakpoints.up("xl")]: {
      fontSize: "1rem",
    },
  },
  body1: {
    fontFamily: "Poppins, sans-sefif",
    [baseTheme.breakpoints.down("md")]: {
      fontSize: "0.875rem",
    },
    [baseTheme.breakpoints.up("xl")]: {
      fontSize: "1.25rem",
    },
  },
  body2: {
    fontFamily: "Poppins, sans-sefif",
    [baseTheme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
    },
    [baseTheme.breakpoints.up("xl")]: {
      fontSize: "1rem",
    },
  },
  button: {
    fontFamily: "Poppins, sans-sefif",
    [baseTheme.breakpoints.down("md")]: {
      fontSize: "0.75rem",
    },
    [baseTheme.breakpoints.up("xl")]: {
      fontSize: "1rem",
    },
  },
  caption: {
    fontFamily: "Poppins, sans-sefif",
    [baseTheme.breakpoints.down("md")]: {
      fontSize: "0.625rem",
    },
    [baseTheme.breakpoints.up("xl")]: {
      fontSize: "0.875rem",
    },
  },
  overline: {
    fontFamily: "Poppins, sans-sefif",
    [baseTheme.breakpoints.down("md")]: {
      fontSize: "0.625rem",
    },
    [baseTheme.breakpoints.up("xl")]: {
      fontSize: "0.875rem",
    },
  },
};

const components = {
  MuiChip: {
    styleOverrides: {
      root: {
        fontFamily: "Poppins, sans-serif",
        [baseTheme.breakpoints.down("md")]: {
          fontSize: "0.75rem",
        },
        [baseTheme.breakpoints.up("xl")]: {
          fontSize: "1rem",
        },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        fontFamily: "Poppins, sans-serif",
        [baseTheme.breakpoints.down("md")]: {
          fontSize: "0.75rem",
        },
        [baseTheme.breakpoints.up("xl")]: {
          fontSize: "1rem",
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        fontFamily: "Poppins, sans-serif",
        [baseTheme.breakpoints.down("md")]: {
          fontSize: "0.75rem",
        },
        [baseTheme.breakpoints.up("xl")]: {
          fontSize: "1rem",
        },
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        fontFamily: "Poppins, sans-serif",
        [baseTheme.breakpoints.down("md")]: {
          fontSize: "0.75rem",
        },
        [baseTheme.breakpoints.up("xl")]: {
          fontSize: "1rem",
        },
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        fontFamily: "Poppins, sans-serif",
        [baseTheme.breakpoints.down("md")]: {
          fontSize: "0.75rem",
        },
        [baseTheme.breakpoints.up("xl")]: {
          fontSize: "1rem",
        },
      },
    },
  },
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
      footer: "#819EC5",
    },
    text: {
      textPrimary: {
        light: "#202431",
        main: "#696F8C",
        dark: "#9B9EAB",
      },
      textSecondary: {
        light: "#819EC5",
        main: "#585C74",
        dark: "#9B9EAB",
      },
      textTertiary: {
        light: "#4A4C59",
        main: "#202431",
        dark: "#FAFAFA",
      },
      textDynamicIsland: {
        light: "#F4F4F6",
        main: "#819EC5",
        dark: "#858899",
      },
      textFooter: {
        light: "#F4F4F6",
        main: "#9B9EAB",
        dark: "#819EC5",
        footer: "#101218",
      },
    },
    darkBlue: {
      main: "#819EC5",
      contrastText: "#FAFAFA",
    },
    lightBlue: {
      main: "#819EC5",
      contrastText: "#202431",
    },
    switchThumb: {
      track: "#9B9EAB",
      main: "#FAFAFA",
    },
    textField: {
      fill: "#202531",
      fillHovered: "#242A38",
      fillFocused: "#202531",
      text: "#F4F4F6",
      label: "#9B9EAB",
      labelFocused: "#819EC5",
      helperText: "#585C74",
      border: "#9B9EAB",
      borderHovered: "#F4F4F6",
      borderFocused: "#819EC5",
    },
    button: {
      fill: "#819EC5",
      fillHovered: "#ABBFD8",
      fillFocused: "#E9E9ED",
      text: "#F4F4F6",
      textHovered: "#202431",
      label: "#42566E",
      labelFocused: "#819EC5",
      border: "#9B9EAB",
      borderHovered: "#42566E",
      borderFocused: "#819EC5",
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
      accent: "#819EC5",
      accentHover: "#ABBFD8",
      footer: "#819EC5",
    },
    text: {
      textPrimary: {
        light: "#FAFAFA",
        main: "#9B9EAB",
        dark: "#585C74",
      },
      textSecondary: {
        light: "#819EC5",
        main: "#627A9A",
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
        dark: "#819EC5",
        footer: "#101218",
      },
    },
    darkBlue: {
      main: "#202431",
      contrastText: "#819EC5",
    },
    lightBlue: {
      main: "#819EC5",
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
      text: "#202431",
      label: "#42566E",
      labelFocused: "#819EC5",
      helperText: "9B9EAB",
      border: "#9B9EAB",
      borderHovered: "#42566E",
      borderFocused: "#819EC5",
    },
    button: {
      fill: "#202431",
      fillHovered: "#101218",
      fillFocused: "#E9E9ED",
      text: "#F4F4F6",
      textHovered: "#819EC5",
      label: "#42566E",
      labelFocused: "#819EC5",
      border: "#9B9EAB",
      borderHovered: "#42566E",
      borderFocused: "#819EC5",
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
