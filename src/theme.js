import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme();

const typography = {
  h1: {
    fontFamily: "Geist, sans-serif",
    fontSize: `clamp(4rem, 5vw, 8rem)`, // Fibonacci scale: 5 (as max)
    // letterSpacing: "0.01em",
  },
  h2: {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: `clamp(1.25rem, 2.25vw, 2rem)`, // Adjusted max value to 2.5rem (smaller)
    textTransform: "uppercase",
    // letterSpacing: "0.01em",
    // fontStyle: "italic",
  },
  h3: {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: `clamp(2.25rem, 3.5vw, 3rem)`, // Fibonacci scale: 2.25 (as max)
    textTransform: "uppercase",
    // letterSpacing: "-0.05em",
    // fontStyle: "italic",
    fontWeight: 700,
  },
  h4: {
    fontFamily: "Geist, sans-serif",
    fontSize: `clamp(1.125rem, 1.75vw, 1.5rem)`, // Fibonacci scale: 1.5 (as max)
    fontWeight: 500,
  },
  h5: {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: `clamp(1.25rem, 1.5vw, 1.5rem)`, // Fibonacci scale: 1.25 (as max)
    // fontStyle: "italic",
  },
  h6: {
    fontFamily: "Hypik, sans-serif",
    fontSize: `clamp(1.5rem, 1.5vw, 2rem)`, // Fibonacci scale: 1.5 (as max)
    // textTransform: "uppercase",
  },
  subtitle1: {
    fontFamily: "Geist, sans-serif",
    fontSize: `clamp(0.875rem, 1.75vw, 1rem)`, // Fibonacci scale: 1 (as max)
  },
  subtitle2: {
    fontFamily: "Geist, sans-serif",
    fontSize: `clamp(0.75rem, 1.25vw, 0.875rem)`, // Fibonacci scale: 0.875 (as max)
  },
  body1: {
    fontFamily: "Geist, sans-serif",
    fontSize: `clamp(1rem, 1.25vw, 1rem)`, // Increased max size to 1rem
  },
  body2: {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: `clamp(0.875rem, 1vw, 0.875rem)`, // Increased max size to 0.875rem
  },
  button: {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: `clamp(1rem, 1vw, 1rem)`, // Fibonacci scale: 1 (as max)
    // fontWeight: 700,
    // textTransform: "uppercase",
    // fontStyle: "italic",
  },
  caption: {
    fontFamily: "Geist, sans-serif",
    fontSize: `clamp(0.625rem, 1vw, 0.75rem)`, // Fibonacci scale: 0.75 (as max)
  },
  overline: {
    fontFamily: "Geist, sans-serif",
    fontSize: `clamp(0.625rem, 1vw, 0.75rem)`, // Fibonacci scale: 0.75 (as max)
    textTransform: "uppercase",
  },
};

const components = {
  MuiChip: {
    styleOverrides: {
      root: {
        fontFamily: "Geist, sans-serif",
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
        fontFamily: "Geist, sans-serif",
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
        fontFamily: "Geist, sans-serif",
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
        fontFamily: "Geist, sans-serif",
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
        fontFamily: "Geist, sans-serif",
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
