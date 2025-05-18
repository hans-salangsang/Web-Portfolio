import React, { forwardRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { useScreenSize } from "../ScreenContext";
import { useState, useEffect } from "react";
import { useAnimate, useInView, stagger, motion } from "framer-motion";
import ScrollRevealAnimation from "./ScrollRevealAnimation";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import CharacteristicsInput from "./CharacteristicsInput";
import FloatingSocials from "./FloatingSocials";
import { useTheme } from "@mui/material/styles";
import tinycolor from "tinycolor2";
import BaseButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import MagnetButton from "./MagnetButton";

function LandingSection(
  { Typography, onColorChange, scrollToSection, connectSectionRef },
  ref
) {
  const screenSize = useScreenSize();
  const theme = useTheme();

  const handleCharacteristicsSubmit = (newColor, newDescription) => {
    console.log("New Color:", newColor);

    onColorChange(newColor, newDescription);
  };

  const Button = styled(BaseButton)(({ theme }) => ({
    fontWeight: 500,
    borderRadius: 9999,
    textTransform: "none",
    letterSpacing: "0rem",

    // Light Button
    "&.light-button": {
      backgroundColor: theme.palette.button.light.fill,
      color: theme.palette.button.light.text,

      "&:hover": {
        backgroundColor: theme.palette.button.light.fillHovered,
        color: theme.palette.button.light.textHovered,
      },
    },

    // Dark Button
    "&.dark-button": {
      backgroundColor: theme.palette.button.dark.fill,
      color: theme.palette.button.dark.text,

      "&:hover": {
        backgroundColor: theme.palette.button.dark.fillHovered,
        color: theme.palette.button.dark.textHovered,
      },
    },
  }));

  return (
    <Container
      maxWidth={screenSize === "xl" ? "xl" : "lg"}
      ref={ref}
      sx={{
        pt: { xs: 10, sm: 10, lg: 10, xl: 15 },
        position: "relative",
        minHeight: "100vh",
      }}
    >
      {/* <Stack spacing={2} ref={scope}> */}

      {/* <Box
        component="img"
        src="/images/pexels-italo-melo-881954-2379004.jpg"
        alt="Portrait of Hans Wilhelm Salangsang"
        sx={{
          position: "absolute", // Position it absolutely inside the container
          top: "20%", // Center the image vertically
          left: "52%", // Center the image horizontally
          // transform: "translate(-50%, -50%)", // Offset the image by its own width and height
          width: "40%",
          height: "auto", // Stretch it to cover the whole container
          zIndex: -1, // Push the image behind the text
          borderRadius: 2, // Optional: Add rounded corners if you like
        }}
      /> */}

      <Stack spacing={2}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <ScrollRevealAnimation spring={true} reveal={true} zIndex={2}>
              {/* <Typography
                variant="body1"
                color="text.textSecondary.main"
                fontWeight={400}
                textAlign="center"
                sx={{
                  fontFamily: "Fliege Mono, monospace",
                  mb: "4vh",
                }}
              >
                Hello, I'm
              </Typography> */}
              {/* <Typography
                variant="body1"
                color="text.textPrimary.dark"
                fontWeight={400}
                paragraph
                // textAlign="center"
                // lineHeight={0.9}
                sx={{
                  fontFamily: "JetBrains Mono",
                  textTransform: "uppercase",
                  pl: "0.3rem",
                  mb: "1.5rem",
                }}
              >
                Hello! I'm
              </Typography> */}
              <Typography
                variant="h5"
                component="p"
                color="text.textPrimary.main"
                fontWeight={300}
                paragraph
                textAlign="center"
                lineHeight={1}
                sx={{ letterSpacing: -0.6, mb: 2.5, mt: 5 }}
              >
                Hello, I'm
              </Typography>
              <Typography
                variant="h1"
                color="text.textPrimary.light"
                fontWeight={500}
                paragraph
                textAlign="center"
                lineHeight={1}
                sx={{ letterSpacing: "-0.04em" }}
              >
                Hans Salangsang
              </Typography>
              <Typography
                variant="h2"
                component="p"
                color="text.textPrimary.main"
                fontWeight={500}
                paragraph
                textAlign="center"
                sx={{
                  mt: -1,
                }}
              >
                Software Engineer
              </Typography>
            </ScrollRevealAnimation>
          </Grid>

          <Grid
            item
            xs={12}
            // sm={10}
            // lg={6}

            sx={{
              mt: { xs: 0 },
            }}
          >
            <ScrollRevealAnimation spring={true} reveal={true}>
              <Typography
                variant="body1"
                color="text.textPrimary.main"
                // fontWeight={400}
                paragraph
                textAlign="center"
                // lineHeight={1.6}
              >
                I develop digital solutions{" "}
                {/* <span
                  style={{
                    // fontWeight: 700,
                    color: theme.palette.text.textPrimary.light,
                    // fontFamily: "Playfair Display",
                    // fontStyle: "italic",
                  }}
                > */}
                that solve real-world problems.
                {/* </span> */}
              </Typography>
            </ScrollRevealAnimation>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              mt: { xs: 2 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ScrollRevealAnimation spring={true} reveal={true}>
              <Box sx={{ display: "flex", gap: 1.5 }}>
                <MagnetButton>
                  <Button
                    variant="contained"
                    size="medium"
                    className="light-button"
                    onClick={() => scrollToSection(connectSectionRef)}
                  >
                    Send me a message
                  </Button>
                </MagnetButton>
                <MagnetButton>
                  <Button
                    variant="contained"
                    size="medium"
                    className="dark-button"
                    onClick={() => scrollToSection(connectSectionRef)}
                  >
                    Download my CV
                  </Button>
                </MagnetButton>
              </Box>
            </ScrollRevealAnimation>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              mt: "15rem",
            }}
          >
            <Box sx={{ width: "70px" }}>
              <FloatingSocials Typography={Typography} />
            </Box>
          </Grid>
          {/* <Grid
            item
            xs={12}
            sm={8}
            lg={4}
            sx={{
              mt: "50vh",
            }}
          >
            <CharacteristicsInput onInputSubmit={handleCharacteristicsSubmit} />
          </Grid> */}
        </Grid>
      </Stack>
    </Container>
  );
}

export default forwardRef(LandingSection);
