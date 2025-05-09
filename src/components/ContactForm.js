import emailjs from "emailjs-com";
import Box from "@mui/material/Box";
import BaseTextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import BaseButton from "@mui/material/Button";
import BasePaper from "@mui/material/Paper";
import { motion } from "framer-motion";
import { toast, ToastContainer, Bounce, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToastStyles from "./useToastStyles";
import tinycolor from "tinycolor2";
import CircularProgress from "@mui/material/CircularProgress";
import MagnetButton from "./MagnetButton";

const TextField = styled(BaseTextField)(({ theme }) => ({
  "& label.MuiFormLabel-root": {
    color: theme.palette.background.accent,
  },
  "&:hover label": {
    color: theme.palette.background.accent,
  },
  "& label.Mui-focused": {
    color: theme.palette.text.textPrimary.light,
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
    color: theme.palette.text.textPrimary.light,
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
      backgroundColor: theme.palette.background.default,
    },
  },
  "& .MuiFilledInput-underline:before": {
    borderBottomColor: theme.palette.background.accent,
  },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: theme.palette.text.textPrimary.light,
  },
  "& .MuiFilledInput-underline:hover:before": {
    borderBottomColor: theme.palette.background.accent,
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
    color: "theme.palette.textField.text",
  },
}));

const Button = styled(BaseButton)(({ theme }) => ({
  fontWeight: 500,
  // borderRadius: 9999,
  backgroundColor: theme.palette.button.fill,
  color: theme.palette.button.text,
  textTransform: "none",
  // borderColor: theme.palette.button.border,
  "&:hover": {
    backgroundColor: theme.palette.button.fillHoveredAccent,
    color: theme.palette.button.textHoveredAccent,
    // borderColor: theme.palette.button.borderHovered,
  },
  "&.Mui-disabled": {
    backgroundColor: theme.palette.button.textHoveredAccent, // Use a theme-based disabled color
    color: theme.palette.button.fillHoveredAccent, // Adjust text color for better readability
    cursor: "not-allowed",
  },
}));

const ContactForm = ({ Typography }) => {
  const theme = useTheme();

  const [loading, setLoading] = useState(false);

  const { success, error } = useToastStyles();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFormErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_cqrx68b";
    const templateIDself = "template_kn13p6u";
    const templateIDclient = "template_6glavlq";
    const userID = "DuOIGvb1rpUgpnm4s";

    const errors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim(),
    };

    setFormErrors(errors);

    if (Object.values(errors).some((error) => error)) {
      setLoading(false);
      return;
    } else {
      emailjs
        .send(serviceID, templateIDself, formData, userID)
        .then((response) => {
          console.log(
            "Self email sent successfully!",
            response.status,
            response.text
          );
        })
        .catch((err) => {
          console.error("Failed to send self email...", err);
        });

      emailjs
        .send(serviceID, templateIDclient, formData, userID)
        .then((response) => {
          console.log(
            "Client email sent successfully!",
            response.status,
            response.text
          );
          toast.success(
            "Your message has been sent! Looking forward to speaking with you!",
            {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Zoom,
              style: success,
            }
          );
        })
        .catch((err) => {
          console.error("Failed to send client email...", err);
          toast.error(
            "Oops! Something went wrong while sending your message. Please try again.",
            {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Zoom,
              style: error,
            }
          );
        })
        .finally(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });

          setLoading(false);
        });
    }
  };

  return (
    <Stack
      component="form"
      spacing={3}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{ pt: 4 }}
    >
      {/* <Typography
        variant="h6"
        color="button.fill"
        fontWeight={600}
        fontFamily="Jetbrains Mono, sans-serif"
      >
        Send me a message
      </Typography> */}
      <TextField
        required
        id="name"
        name="name"
        label="Name"
        variant="filled"
        size="small"
        value={formData.name}
        onChange={handleChange}
        error={formErrors.name}
        helperText={formErrors.name ? "Please enter your name." : ""}
      />
      <TextField
        required
        id="email"
        name="email"
        label="Email Address"
        type="email"
        variant="filled"
        size="small"
        value={formData.email}
        onChange={handleChange}
        error={formErrors.email}
        helperText={formErrors.email ? "Please enter your email address." : ""}
      />
      <TextField
        id="phone"
        name="phone"
        label="Phone Number (Optional)"
        variant="filled"
        size="small"
        value={formData.phone}
        onChange={handleChange}
        // helperText="Please enter a valid email address"
        error={false}
      />
      <TextField
        required
        id="message"
        name="message"
        label="Message"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="filled"
        size="small"
        value={formData.message}
        onChange={handleChange}
        error={formErrors.message}
        helperText={formErrors.message ? "Please enter your message." : ""}
      />
      <MagnetButton>
        <Button
          variant="contained"
          size="large"
          sx={{ width: "100%" }}
          type="submit"
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <CircularProgress
              size={20}
              sx={{ color: theme.palette.button.fillHoveredAccent }}
            />
          ) : (
            "Send Message"
          )}
        </Button>
      </MagnetButton>
    </Stack>
  );
};

export default ContactForm;
