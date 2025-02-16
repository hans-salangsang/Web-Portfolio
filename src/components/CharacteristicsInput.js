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
  "& label.Mui-focused": {
    color: theme.palette.textField.labelFocused,
  },

  // Filled TextField
  "& .MuiFilledInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
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
  backgroundColor: theme.palette.button.fill,
  color: theme.palette.button.text,
  "&:hover": {
    backgroundColor: theme.palette.button.fillHovered,
    color: theme.palette.button.textHovered,
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
    <Stack spacing={0} sx={{ mt: 2 }}>
      <TextField
        id="characteristics"
        name="characteristics"
        label="creative, detail-oriented, team player..."
        sx={{
          "& .MuiInputLabel-root": { whiteSpace: "normal" }, // Allow label wrapping
        }}
        fullWidth
        multiline
        rows={3}
        defaultValue="Default Value"
        variant="outlined"
        size="small"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        helperText={
          error
            ? "Please enter some characteristics."
            : "Enter the characteristics that you are looking for in a developer."
        }
        error={error}
      />
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={handleSubmit}
        >
          Apply Personality
        </Button>
      </motion.div>
    </Stack>
  );
};

export default CharacteristicsInput;
