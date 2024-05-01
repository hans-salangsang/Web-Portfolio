import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme();

const typography = {
  h1: {
    fontFamily: 'Jetbrains Mono, sans-sefif',
    [baseTheme.breakpoints.down('md')]: {
      fontSize: "4rem",
    },
    [baseTheme.breakpoints.up('xl')]: {
      fontSize: "8rem",
    },
  },
  h2: {
    fontFamily: 'Jetbrains Mono, sans-sefif',
    [baseTheme.breakpoints.down('md')]: {
      fontSize: "3rem",
    },
    [baseTheme.breakpoints.up('xl')]: {
      fontSize: "4.5rem",
    },
  },
  h3: {
    fontFamily: 'Jetbrains Mono, sans-sefif',
    [baseTheme.breakpoints.down('md')]: {
      fontSize: "2.5rem",
    },
    [baseTheme.breakpoints.up('xl')]: {
      fontSize: "3.5rem",
    },
  },
  h4: {
    fontFamily: 'Jetbrains Mono, sans-sefif',
    [baseTheme.breakpoints.down('md')]: {
      fontSize: "1.75rem",
    },
    [baseTheme.breakpoints.up('xl')]: {
      fontSize: "2.75rem",
    },
  },
  h5: {
    fontFamily: 'Jetbrains Mono, sans-sefif',
    [baseTheme.breakpoints.down('md')]: {
      fontSize: "1.25rem",
    },
    [baseTheme.breakpoints.up('xl')]: {
      fontSize: "2rem",
    },
  },
  h6: {
    fontFamily: 'Poppins, sans-sefif',
    [baseTheme.breakpoints.down('md')]: {
      fontSize: "1rem",
    },
    [baseTheme.breakpoints.up('xl')]: {
      fontSize: "1.5rem",
    },
  },
  subtitle1: {
    fontFamily: 'Poppins, sans-sefif',
    [baseTheme.breakpoints.down('md')]: {
      fontSize: "0.875rem",
    },
    [baseTheme.breakpoints.up('xl')]: {
      fontSize: "1.25rem",
    },
  },
  subtitle2: {
    fontFamily: 'Poppins, sans-sefif',
    [baseTheme.breakpoints.down('md')]: {
      fontSize: "0.75rem",
    },
    [baseTheme.breakpoints.up('xl')]: {
      fontSize: "1rem",
    },
  },
  body1: {
    fontFamily: 'Poppins, sans-sefif',
    [baseTheme.breakpoints.down('md')]: {
      fontSize: "0.875rem",
    },
    [baseTheme.breakpoints.up('xl')]: {
      fontSize: "1.25rem",
    },
  },
  body2: {
    fontFamily: 'Poppins, sans-sefif',
    [baseTheme.breakpoints.down('md')]: {
      fontSize: "0.75rem",
    },
    [baseTheme.breakpoints.up('xl')]: {
      fontSize: "1rem",
    },
  },
  button: {
    fontFamily: 'Poppins, sans-sefif',
    [baseTheme.breakpoints.down('md')]: {
      fontSize: "0.75rem",
    },
    [baseTheme.breakpoints.up('xl')]: {
      fontSize: "1rem",
    },
  },
  caption: {
    fontFamily: 'Poppins, sans-sefif',
    [baseTheme.breakpoints.down('md')]: {
      fontSize: "0.625rem",
    },
    [baseTheme.breakpoints.up('xl')]: {
      fontSize: "0.875rem",
    },
  },
  overline: {
    fontFamily: 'Poppins, sans-sefif',
    [baseTheme.breakpoints.down('md')]: {
      fontSize: "0.625rem",
    },
    [baseTheme.breakpoints.up('xl')]: {
      fontSize: "0.875rem",
    },
  },
};

const components = {
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: 'Poppins, sans-serif',
        },
      },
    },
};

let lightTheme = createTheme({
  palette: {
    background: {
      default: '#F4F4F6',
      contrast: "#202431",
    },
    text: {
      textPrimary: {
        light: '#202431',
        main: '#696F8C',
        dark: '#9B9EAB',
      },
      textSecondary: {
        light: '#819EC5',
        main: '#585C74',
        dark: '#9B9EAB',
      },
      textTertiary: {
        light: '#4A4C59',
        main: '#202431',
        dark: '#FAFAFA',
      },
    },
    primary: {
      main: '#819EC5',
      contrastText: '#202431',
    },
    secondary: {
      main: '#FF4081',
    },
  },
  typography,
  transitions: {
    duration: {
      standard: 250,
    },
    easing: {
      standard: 'ease-in-out',
    },
  },
  components,
});

let darkTheme = createTheme({
  palette: {
    background: {
      default: '#101218',
      contrast: "#819EC5",
    },
    text: {
      textPrimary: {
        light: '#FAFAFA',
        main: '#9B9EAB',
        dark: '#585C74',
      },
      textSecondary: {
        light: '#819EC5',
        main: '#627A9A',
        dark: '#42566E',
      },
      textTertiary: {
        light: '#4A4C59',
        main: '#202431',
        dark: '#101218',
      },
    },
    primary: {
      main: '#202431',
      contrastText: '#819EC5',
    },
    secondary: {
      main: '#FF4081',
    },
  },
  typography,
  transitions: {
    duration: {
      standard: 250,
    },
    easing: {
      standard: 'ease-in-out',
    },
  },
  components,
});

const theme = createTheme(darkTheme);

export { lightTheme, darkTheme };
export default theme;
