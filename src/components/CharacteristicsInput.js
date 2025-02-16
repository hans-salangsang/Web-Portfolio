import { useState } from "react";
import BaseTextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import BaseButton from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";

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
    backgroundColor: theme.palette.textField.fill,
    "&:hover": {
      backgroundColor: theme.palette.textField.fillHovered,
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
  backgroundColor: theme.palette.button.fill,
  color: theme.palette.button.text,
  borderColor: theme.palette.button.border,
  "&:hover": {
    backgroundColor: theme.palette.button.fillHovered,
    color: theme.palette.button.textHovered,
    borderColor: theme.palette.button.borderHovered,
  },
}));

const CharacteristicsInput = ({ onInputSubmit }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    if (input.trim()) {
      try {
        const response = await fetch("/api/generateColor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ characteristics: input.trim() }),
        });

        const data = await response.json();
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
      }
      setInput("");
    } else {
      setError(true); // Show error if input is empty
    }
  };

  return (
    <Stack spacing={1} sx={{ mt: "15vh" }}>
      <TextField
        id="characteristics"
        name="characteristics"
        label="What qualities do you look for in a developer?"
        sx={{
          "& .MuiInputLabel-root": { whiteSpace: "normal" },
        }}
        fullWidth
        multiline
        rows={1}
        defaultValue="Default Value"
        variant="filled"
        size="small"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        helperText={error ? "Please enter some characteristics." : ""}
        error={error}
      />
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          variant="outlined"
          size="small"
          sx={{ width: "100%" }}
          onClick={handleSubmit}
        >
          Style My Portfolio
        </Button>
      </motion.div>
    </Stack>
  );
};

export default CharacteristicsInput;
