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
    fontWeight: 700,
    // borderRadius: 9999,
    backgroundColor: theme.palette.button.fillAccent,
    color: theme.palette.button.textAccent,
    // borderColor: theme.palette.button.border,
    "&:hover": {
      backgroundColor: theme.palette.button.fillHoveredAccent,
      color: theme.palette.button.textHoveredAccent,
      // borderColor: theme.palette.button.borderHovered,
    },
  }));

  return (
    <Container
      maxWidth={screenSize === "xl" ? "xl" : "lg"}
      ref={ref}
      sx={{
        pt: { xs: "10rem", sm: "10rem", lg: "9rem", xl: "14rem" },
        position: "relative",
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
                variant="h1"
                color="text.textPrimary.light"
                fontWeight={500}
                paragraph
                textAlign="center"
                lineHeight={1}
              >
                Hans
                {/* <span
                  style={{
                    color: theme.palette.text.textPrimary.dark,
                  }}
                >
                  
                  Wilhelm
                </span>
                <br /> */}{" "}
                {/* <span
                  style={{
                    color: theme.palette.text.textSecondary.main,
                  }}
                > */}
                <br />
                Salangsang
                {/* </span> */}
              </Typography>
              <Typography
                variant="h2"
                color="background.accent"
                fontWeight={200}
                paragraph
                textAlign="center"
                sx={{
                  mt: "2.5rem",
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
              mt: { xs: "3rem", xl: "6rem" },
            }}
          >
            <ScrollRevealAnimation spring={true} reveal={true}>
              <Typography
                variant="body1"
                color="text.textPrimary.main"
                fontWeight={400}
                paragraph
                textAlign="center"
                lineHeight={1.6}
              >
                I develop digital solutions{" "}
                <span
                  style={{
                    // fontWeight: 700,
                    color: theme.palette.text.textPrimary.light,
                    // fontFamily: "Playfair Display",
                    fontStyle: "italic",
                  }}
                >
                  that solve real-world problems.
                </span>
              </Typography>
            </ScrollRevealAnimation>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              mt: { xs: ".5rem", xl: "1rem" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ScrollRevealAnimation spring={true} reveal={true}>
              <MagnetButton>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollToSection(connectSectionRef)}
                >
                  Send Me A Message
                </Button>
              </MagnetButton>
            </ScrollRevealAnimation>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              mt: "5rem",
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
