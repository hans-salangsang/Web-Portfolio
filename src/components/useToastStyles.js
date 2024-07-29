import { useTheme } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme();

const useToastStyles = () => {
  const theme = useTheme();
  return {
    success: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.textPrimary.light,
      fontFamily: "Jetbrains Mono, sans-sefif",
      fontSize: "0.8rem",
    },
    error: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.textPrimary.light,
      fontFamily: "Jetbrains Mono, sans-sefif",
      fontSize: "0.8rem",
    },
  };
};

export default useToastStyles;
