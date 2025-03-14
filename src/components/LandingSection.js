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
    backgroundColor: theme.palette.button.textAccent,
    color: theme.palette.button.fillAccent,
    // borderColor: theme.palette.button.border,
    "&:hover": {
      backgroundColor: theme.palette.button.textHoveredAccent,
      color: theme.palette.button.fillHoveredAccent,
      // borderColor: theme.palette.button.borderHovered,
    },
  }));

  return (
    <Container
      maxWidth={screenSize === "xl" ? "xl" : "lg"}
      ref={ref}
      sx={{
        pt: { xs: "8rem", sm: "9rem", lg: "11rem", xl: "12rem" },
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
              <Box
                sx={{
                  flexDirection: "column",
                  transition: "transform 0.3s ease-in-out",
                  transform: "skew(-10deg) rotate(-3deg)",
                  "&:hover": {
                    transform: "skew(0deg) rotate(0deg)",
                  },
                }}
              >
                <Typography
                  variant="h1"
                  color="text.textPrimary.light"
                  fontWeight={400}
                  paragraph
                  textAlign="center"
                  lineHeight={0.9}
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
                  color="text.textPrimary.light"
                  fontWeight={200}
                  paragraph
                  textAlign="center"
                >
                  Full Stack Developer
                </Typography>
              </Box>
            </ScrollRevealAnimation>
          </Grid>

          <Grid
            item
            xs={12}
            sm={10}
            lg={6}
            sx={{
              mt: "5rem",
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
                    // fontWeight: 700,
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
              mt: { xs: "1rem", xl: "1rem" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ScrollRevealAnimation spring={true} reveal={true}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9, y: -2, transition: { duration: 0.1 } }}
                transition={{ type: "spring", stiffness: 300, damping: 70 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollToSection(connectSectionRef)}
                >
                  Send Me A Message
                </Button>
              </motion.div>
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
