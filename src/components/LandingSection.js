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
        pt: "23vh",
      }}
    >
      {/* <Stack spacing={2} ref={scope}> */}
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
              <Typography
                variant="h1"
                color="text.textPrimary.light"
                fontWeight={700}
                paragraph
                textAlign="center"
                lineHeight={0.9}
              >
                Hans
                <span
                  style={{
                    color: theme.palette.text.textPrimary.dark,
                  }}
                >
                  {" "}
                  Wilhelm
                </span>
                <br />
                {/* <span
                  style={{
                    color: theme.palette.text.textSecondary.main,
                  }}
                > */}
                Salangsang
                {/* </span> */}
              </Typography>
              <Typography
                variant="h2"
                color="text.textSecondary.main"
                fontWeight={200}
                paragraph
                textAlign="center"
                letterSpacing="0.1em"
              >
                Full Stack Developer
              </Typography>
            </ScrollRevealAnimation>
          </Grid>

          <Grid
            item
            xs={10}
            sm={8}
            lg={6}
            sx={{
              mt: "7vh",
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
                From graphic design to programming, I've explored pixels and
                codes to become a versatile developer.{" "}
                <span
                  style={{
                    fontWeight: 700,
                    color: theme.palette.text.textPrimary.light,
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
