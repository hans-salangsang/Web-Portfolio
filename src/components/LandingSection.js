import React, { forwardRef } from "react";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import { useScreenSize } from "../ScreenContext";
import { useState, useEffect } from "react";
import { useAnimate, useInView, stagger, motion } from "framer-motion";
import ScrollRevealAnimation from "./ScrollRevealAnimation";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import CharacteristicsInput from "./CharacteristicsInput";

function LandingSection({ Typography, onColorChange }, ref) {
  const screenSize = useScreenSize();

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
        pt: screenSize === "xs" ? "0vh" : "20vh",
        pb: "15vh",
      }}
    >
      {/* <Stack spacing={2} ref={scope}> */}
      <Stack spacing={2}>
        {screenSize === "xs" && (
          <ScrollRevealAnimation spring={true} reveal={true} zIndex={2}>
            <Typography
              variant="h2"
              color="text.textPrimary.light"
              fontWeight={800}
              paragraph
              textAlign="left"
              sx={{ pt: "20vh" }}
            >
              Hans
              <br />
              Salangsang
              <Typography
                variant="h5"
                color="text.textSecondary.light"
                fontWeight={400}
                textAlign="left"
                sx={{
                  mt:
                    screenSize === "xs"
                      ? "2vh"
                      : screenSize === "xl"
                      ? "1vh"
                      : "2vh",
                }}
              >
                Hello, I'm Hans! From graphic design to programming, I've
                explored pixels and codes to become a versatile web developer.
                Let's create your digital dreams together!
              </Typography>
            </Typography>
          </ScrollRevealAnimation>
        )}
        {screenSize !== "xs" && (
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
                  Fullstack Developer
                </Typography>
              </ScrollRevealAnimation>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                mt:
                  screenSize === "xs"
                    ? "22vh"
                    : screenSize === "xl"
                    ? "5vh"
                    : "18vh",
              }}
            >
              <ScrollRevealAnimation spring={true} reveal={true}>
                <Typography
                  variant="body2"
                  color="text.textPrimary.main"
                  fontWeight={400}
                  paragraph
                  textAlign="left"
                  lineHeight={1.6}
                >
                  {screenSize === "xs" && (
                    <>
                      From graphic design to programming,
                      <br />
                      I've explored pixels and codes to become
                      <br />a versatile developer.
                    </>
                  )}
                  {screenSize !== "xs" && (
                    <>
                      From graphic design to programming, I've explored
                      <br />
                      pixels and codes to become a versatile developer.
                    </>
                  )}
                  <Typography
                    variant="body2"
                    color="text.textPrimary.light"
                    fontWeight={700}
                    paragraph
                    textAlign="left"
                    lineHeight={1.8}
                  >
                    Let’s build something great together!
                  </Typography>
                </Typography>
              </ScrollRevealAnimation>
            </Grid>
            <Grid item xs={5}>
              <CharacteristicsInput
                onInputSubmit={handleCharacteristicsSubmit}
              />
            </Grid>
          </Grid>
        )}
      </Stack>
    </Container>
  );
}

export default forwardRef(LandingSection);
