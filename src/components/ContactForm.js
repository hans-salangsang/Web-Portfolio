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
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToastStyles from "./useToastStyles";

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
  backgroundColor: theme.palette.button.textAccent,
  color: theme.palette.button.fillAccent,
  // borderColor: theme.palette.button.border,
  "&:hover": {
    backgroundColor: theme.palette.button.textHoveredAccent,
    color: theme.palette.button.fillHoveredAccent,
    // borderColor: theme.palette.button.borderHovered,
  },
}));

const ContactForm = ({ Typography }) => {
  const { success, error } = useToastStyles();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_cqrx68b";
    const templateIDself = "template_kn13p6u";
    const templateIDclient = "template_6glavlq";
    const userID = "YnyQL9xOeiMmoCkab";

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
            transition: Bounce,
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
            transition: Bounce,
            style: error,
          }
        );
      });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Stack
      component="form"
      spacing={3}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography
        variant="h6"
        color="button.fill"
        fontWeight={600}
        fontFamily="Jetbrains Mono, sans-serif"
      >
        Send me a message
      </Typography>
      <TextField
        required
        id="name"
        name="name"
        label="Name"
        variant="filled"
        size="small"
        value={formData.name}
        onChange={handleChange}
        helperText="Please enter a valid email address"
        error={false}
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
        helperText="Please enter a valid email address"
        error={false}
      />
      <TextField
        id="phone"
        name="phone"
        label="Phone Number (Optional)"
        variant="filled"
        size="small"
        value={formData.phone}
        onChange={handleChange}
        helperText="Please enter a valid email address"
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
        helperText="Please enter a valid email address"
        error={false}
      />
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          variant="contained"
          size="small"
          sx={{ width: "100%" }}
          type="submit"
        >
          Send Message
        </Button>
      </motion.div>
    </Stack>
  );
};

export default ContactForm;
