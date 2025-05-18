import React, { forwardRef } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useScreenSize } from "../ScreenContext";
import ScrollRevealAnimation from "./ScrollRevealAnimation";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "devicon/devicon.min.css";
import { SiDotnet } from "react-icons/si";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";
import tinycolor from "tinycolor2";
import AbstractGradientBackground from "./AbstractGradientBackground";
import ScrollingBox from "./ScrollingBox";
import AutoScroll from "./AutoScroll";
import Spline from "@splinetool/react-spline";
import CharacteristicsInput from "./CharacteristicsInput";
import { useAnimate, useInView, stagger, motion } from "framer-motion";
import BaseChip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const Chip = styled(BaseChip)(({ theme }) => ({
  backgroundColor: theme.palette.text.textPrimary.light, // background color
  color: theme.palette.background.default, // text color
}));

function AboutMeSection({ Typography, onColorChange }, ref) {
  const screenSize = useScreenSize();
  const theme = useTheme();

  const specializations = ["AI", "Data", "DevOps", "Consulting"];

  const handleCharacteristicsSubmit = (newColor, newDescription) => {
    console.log("New Color:", newColor);

    onColorChange(newColor, newDescription);
  };

  return (
    <Container
      maxWidth={screenSize === "xl" ? "xl" : "lg"}
      sx={{ position: "relative" }}
    >
      {/* <Grid ref={ref} container sx={{ minHeight: "100vh" }}> */}
      {/* <AbstractGradientBackground /> */}
      <Grid ref={ref} container sx={{ pt: 20, pb: 10 }}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12} sx={{ mb: 5 }}>
            <ScrollRevealAnimation spring={true} reveal={true} zIndex={2}>
              <Typography
                variant="h2"
                component="p"
                fontWeight={500}
                color="text.textPrimary.light"
                textAlign="center"
                sx={(theme) => ({
                  background: `linear-gradient(90deg, ${theme.palette.background.accent} -80%, ${theme.palette.text.textPrimary.light} 40%, ${theme.palette.background.accent} 90%)`,

                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                })}
              >
                I focus on scalable enterprise-level solutions for large
                businesses.
              </Typography>
              <ScrollingBox>
                {specializations.map((text, index) => (
                  <Chip key={index} label={text} />
                ))}
              </ScrollingBox>
            </ScrollRevealAnimation>
          </Grid>
          {/* <Grid item xs={12} lg={7}>
            <ScrollRevealAnimation spring={true} reveal={true} zIndex={2}>
              <CharacteristicsInput
                onInputSubmit={handleCharacteristicsSubmit}
              />
            </ScrollRevealAnimation>
          </Grid> */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default forwardRef(AboutMeSection);
