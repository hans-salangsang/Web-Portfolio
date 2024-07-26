import React, { forwardRef } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useScreenSize } from "../ScreenContext";
import ScrollRevealAnimation from "./ScrollRevealAnimation";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Box from "@mui/material/Box";
import BaseTextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const TextField = styled(BaseTextField)(({ theme }) => ({
  "& label.MuiFormLabel-root": {
    color: theme.palette.textField.label,
  },
  "& label.Mui-focused": {
    color: theme.palette.textField.labelFocused,
  },
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
}));

function ConnectSection({ Typography, Chip }, ref) {
  const screenSize = useScreenSize();

  return (
    <Container maxWidth={screenSize === "xl" ? "xl" : "lg"}>
      {screenSize !== "xs" && (
        <Grid
          ref={ref}
          container
          sx={{
            minHeight: screenSize === "xs" ? "70vh" : "80vh",
            pt: screenSize === "xs" ? "5.5vh" : "7vh",
          }}
        >
          <Grid container item xs={12} direction="column">
            <Grid container item spacing={2} xs={3}>
              <Grid item xs={12}>
                <ScrollRevealAnimation reveal={true} zIndex={2}>
                  <Typography
                    variant="h4"
                    color="text.textFooter.light"
                    fontWeight={600}
                  >
                    Seeking a motivated
                    <br />
                    team member?
                  </Typography>
                </ScrollRevealAnimation>
                <ScrollRevealAnimation reveal={true} zIndex={2}>
                  <Typography
                    variant="h6"
                    color="text.textFooter.dark"
                    fontWeight={400}
                    fontFamily="Poppins, sans-serif"
                  >
                    Let's connect!
                  </Typography>
                </ScrollRevealAnimation>
              </Grid>
            </Grid>

            <Grid container item spacing={2} xs={9}>
              <Grid item xs={12} md={6} lg={4}>
                <Stack
                  component="form"
                  spacing={3}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    required
                    id="filled-basic"
                    label="Name"
                    variant="filled"
                    size="small"
                    helperText="Please enter a valid email address"
                    error={false}
                  />
                  <TextField
                    required
                    id="filled-basic"
                    label="Email Address"
                    type="email"
                    variant="filled"
                    size="small"
                    helperText="Please enter a valid email address"
                    error={false}
                  />
                  <TextField
                    required
                    id="filled-basic"
                    label="Phone Number"
                    variant="filled"
                    size="small"
                    helperText="Please enter a valid email address"
                    error={false}
                  />
                  <TextField
                    required
                    id="filled-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="filled"
                    size="small"
                    helperText="Please enter a valid email address"
                    error={false}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default forwardRef(ConnectSection);
