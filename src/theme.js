import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme();

const typography = {
  h1: {
    fontFamily: "Sage Grotesk, sans-serif",
    fontSize: `clamp(2rem, 5vw, 7rem)`,
    textTransform: "uppercase",
  },
  h2: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(1rem, 1.25vw, 2rem)`,
    textTransform: "uppercase",
  },
  h3: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(1.75rem, 2vw, 2.75rem)`,
    textTransform: "uppercase",
    fontWeight: 900,
  },
  h4: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(1.125rem, 2vw, 1.25rem)`,
  },
  h5: {
    fontFamily: "Fliege Mono, monospace",
    fontSize: `clamp(1rem, 1.75vw, 1.125rem)`,
  },
  h6: {
    fontFamily: "Sage Grotesk, sans-serif",
    fontSize: `clamp(1rem, 1vw, 2rem)`,
    textTransform: "uppercase",
  },
  subtitle1: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(0.875rem, 1.5vw, 1rem)`,
  },
  subtitle2: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(0.75rem, 1.25vw, 0.875rem)`,
  },
  body1: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(0.8rem, 1.25vw, 0.875rem)`,
  },
  body2: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(0.7rem, 1vw, 0.8rem)`,
  },
  button: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(0.75rem, 1.5vw, 0.875rem)`,
    fontWeight: 600,
  },
  caption: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(0.625rem, 1vw, 0.75rem)`,
  },
  overline: {
    fontFamily: "Inter, sans-serif",
    fontSize: `clamp(0.625rem, 1vw, 0.75rem)`,
    textTransform: "uppercase",
  },
};

const components = {
  MuiChip: {
    styleOverrides: {
      root: {
        fontFamily: "Inter, sans-serif",
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
        fontFamily: "Inter, sans-serif",
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
        fontFamily: "Inter, sans-serif",
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
        fontFamily: "Inter, sans-serif",
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
        fontFamily: "Inter, sans-serif",
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
