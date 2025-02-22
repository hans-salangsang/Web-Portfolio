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

function LandingSection({ Typography, onColorChange }, ref) {
  const screenSize = useScreenSize();
  const theme = useTheme();

  const handleCharacteristicsSubmit = (newColor, newDescription) => {
    console.log("New Color:", newColor);

    onColorChange(newColor, newDescription);
  };

  return (
    <Container
      maxWidth={screenSize === "xl" ? "xl" : "lg"}
      ref={ref}
      sx={{
        minHeight: "100vh",
        pb: "15vh",
      }}
    >
      {/* <Stack spacing={2} ref={scope}> */}
      <Stack spacing={2}>
        <Grid container>
          <Grid item xs={12}>
            <ScrollRevealAnimation spring={true} reveal={true} zIndex={2}>
              <Typography
                variant="body1"
                color="text.textSecondary.main"
                fontWeight={400}
                textAlign="left"
                sx={{
                  fontFamily: "JetBrains Mono, monospace",
                  mb:
                    screenSize === "xs"
                      ? "2vh"
                      : screenSize === "xl"
                      ? "2vh"
                      : "2vh",
                }}
              >
                Hello, I'm
              </Typography>
              <Typography
                variant="h1"
                color="text.textPrimary.light"
                fontWeight={700}
                paragraph
                textAlign="left"
                lineHeight={1}
                letterSpacing="0.02em"
              >
                Hans Salangsang
              </Typography>
              <Typography
                variant="h2"
                color="text.textPrimary.main"
                fontWeight={200}
                paragraph
                textAlign="left"
                lineHeight={1}
                letterSpacing="0.02em"
                sx={{
                  mt:
                    screenSize === "xs"
                      ? "2vh"
                      : screenSize === "xl"
                      ? "2vh"
                      : "2vh",
                }}
              >
                Full Stack Developer
              </Typography>
            </ScrollRevealAnimation>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              mt: "2vh",
            }}
          >
            <ScrollRevealAnimation spring={true} reveal={true}>
              <Typography
                variant="body1"
                color="text.textPrimary.main"
                fontWeight={400}
                paragraph
                textAlign="left"
                lineHeight={1.6}
              >
                From graphic design to programming, I've explored
                <br />
                pixels and codes to become a versatile developer.
                <br />
                <span
                  style={{
                    fontWeight: 700,
                    color: theme.palette.text.textPrimary.light,
                    lineHeight: 1.8,
                  }}
                >
                  Let’s build something great together!
                </span>
              </Typography>
            </ScrollRevealAnimation>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              mt: "2vh",
            }}
          >
            <Box sx={{ width: "70px" }}>
              <FloatingSocials Typography={Typography} />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              mt: "5vh",
            }}
          >
            <Box sx={{ width: "400px" }}>
              <CharacteristicsInput
                onInputSubmit={handleCharacteristicsSubmit}
              />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}

export default forwardRef(LandingSection);
