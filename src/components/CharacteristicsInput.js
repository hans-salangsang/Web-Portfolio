import { useState } from "react";
import BaseTextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import BaseButton from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";
import tinycolor from "tinycolor2";
import { IconButton } from "@mui/material";
import Wand2Icon from "@mui/icons-material/AutoFixHigh";
import Tooltip from "./CustomTooltip";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material/styles";
import { toast, ToastContainer, Bounce, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToastStyles from "./useToastStyles";
import MagnetButton from "./MagnetButton";

const TextField = styled(BaseTextField)(({ theme }) => ({
  "& label.MuiFormLabel-root": {
    color: theme.palette.textField.label,
  },
  "&:hover label": {
    color: theme.palette.textField.labelHovered,
  },
  "& label.Mui-focused": {
    color: theme.palette.textField.labelFocused,
  },

  // Filled TextField
  "& .MuiFilledInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "red",
    },
    "&.Mui-focused fieldset": {
      borderColor: "red",
    },
    color: theme.palette.textField.text,
    backgroundColor: tinycolor(theme.palette.background.defaultSubtleAccent)
      .brighten(0)
      .toString(),
    "&:hover": {
      backgroundColor: tinycolor(theme.palette.background.default).isDark()
        ? tinycolor(theme.palette.background.defaultSubtleAccent)
            .brighten(5)
            .toString()
        : tinycolor(theme.palette.background.defaultSubtleAccent)
            .darken(5)
            .toString(),
    },
    "&.Mui-focused": {
      backgroundColor: theme.palette.textField.fillFocused,
    },
  },
  "& .MuiFilledInput-underline:before": {
    borderBottomColor: theme.palette.textField.border,
  },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: theme.palette.textField.borderFocused,
  },
  "& .MuiFilledInput-underline:hover:before": {
    borderBottomColor: theme.palette.textField.borderHovered,
  },
  "& .MuiFormHelperText-root": {
    color: theme.palette.textField.helperText,
  },

  // Outlined TextField
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.textField.border,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.textField.borderHovered,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.textField.borderFocused,
    },
    color: theme.palette.textField.text,
  },
}));

const Button = styled(BaseButton)(({ theme }) => ({
  fontWeight: 700,
  backgroundColor: theme.palette.button.textAccent,
  color: theme.palette.button.fillAccent,
  // borderColor: theme.palette.button.border,
  "&:hover": {
    backgroundColor: theme.palette.button.textHoveredAccent,
    color: theme.palette.button.fillHoveredAccent,
    // borderColor: theme.palette.button.borderHovered,
  },
}));

const CharacteristicsInput = ({ onInputSubmit }) => {
  const theme = useTheme();

  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const { success } = useToastStyles();

  const handleSubmit = async () => {
    setLoading(true);

    if (input.trim()) {
      let data = null;
      try {
        const response = await fetch("/api/generateColor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ characteristics: input.trim() }),
        });

        data = await response.json();

        // const data = await response.json();

        if (data) {
          console.log("Color:", data.color);
          console.log("Name:", data.name);
          console.log("Description:", data.description);

          onInputSubmit(data.color, data.name, data.description);
        } else {
          console.error("No color generated");
        }
      } catch (error) {
        console.error("Error fetching color:", error);
      } finally {
        setLoading(false);

        toast.info(`${data?.description ? `${data.description}` : ""}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
          icon: false,
          style: {
            background: theme.palette.background.default,
            color: theme.palette.text.textPrimary.light,
          },
          progressStyle: {
            // background: theme.palette.text.textSecondary.main,
            background: theme.palette.text.textPrimary.light,
          },
        });
      }

      setInput("");
    } else {
      setError(true); // Show error if input is empty
      setLoading(false);
    }
  };

  return (
    <Stack direction="row" spacing={1} sx={{ mt: 5, alignItems: "stretch" }}>
      <TextField
        id="characteristics"
        name="characteristics"
        label="What qualities do you look for in a developer?"
        sx={{
          flex: 1,
          "& .MuiInputLabel-root": {
            whiteSpace: "normal",
            overflow: "visible",
            textOverflow: "unset",
            display: "block",
            maxWidth: "100%",
          },
          "& .MuiInputBase-root": {
            minHeight: { xs: "60px", sm: "auto" },
          },
          "& .MuiFormHelperText-root": {
            position: "absolute",
            bottom: "-24px",
          },
        }}
        fullWidth
        multiline
        minRows={1}
        defaultValue="Default Value"
        variant="filled"
        size="small"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setError(false);
        }}
        helperText={error ? "Please enter some characteristics." : ""}
        error={error}
      />
      <Tooltip
        title="My portfolio will adapt its colors based on your input!"
        placement="bottom"
      >
        <span style={{ display: "flex", alignSelf: "stretch" }}>
          <MagnetButton>
            <Button
              variant="contained"
              size="small"
              sx={{ alignSelf: "stretch", minWidth: "40px" }} // Adjust minWidth if needed
              onClick={handleSubmit}
            >
              {loading ? (
                <CircularProgress
                  size={20}
                  sx={{ color: theme.palette.button.fillHoveredAccent }}
                />
              ) : (
                <Wand2Icon fontSize="small" />
              )}
            </Button>
          </MagnetButton>
        </span>
      </Tooltip>
    </Stack>
  );
};

export default CharacteristicsInput;
