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
import Spline from "@splinetool/react-spline";
import CharacteristicsInput from "./CharacteristicsInput";

function AboutMeSection({ Typography, onColorChange, Chip }, ref) {
  const screenSize = useScreenSize();
  const theme = useTheme();

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
      <AbstractGradientBackground />
      <Grid ref={ref} container sx={{ pt: 17 }}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12} sx={{ mb: 5 }}>
            <ScrollRevealAnimation spring={true} reveal={true} zIndex={2}>
              <Typography
                variant="h3"
                color="text.textPrimary.light"
                textAlign="center"
              >
                About Me
              </Typography>
            </ScrollRevealAnimation>
          </Grid>

          <Grid
            item
            xs={12}
            lg={5}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <script
              type="module"
              src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"
            ></script>
            <spline-viewer
              url="https://prod.spline.design/FVZWbQH2B6ndj9UU/scene.splinecode"
              events-target="global"
            ></spline-viewer>
            <Box
              sx={{
                zIndex: -1,
              }}
            >
              {/* <Spline scene="https://prod.spline.design/MyOVV7bet1nZ1oFh/scene.splinecode" /> */}
            </Box>
          </Grid>
          <Grid item xs={12} lg={7}>
            <ScrollRevealAnimation spring={true} reveal={true} zIndex={2}>
              <Typography
                variant="body1"
                color="text.textPrimary.main"
                fontWeight={400}
                paragraph
                textAlign="left"
                lineHeight={1.6}
              >
                Hi, I'm{" "}
                <span
                  style={{
                    fontWeight: 400,
                    color: theme.palette.text.textPrimary.light,
                  }}
                >
                  Hans Wilhelm B. Salangsang
                </span>
                , a{" "}
                <span
                  style={{
                    fontWeight: 400,
                    color: theme.palette.text.textPrimary.light,
                  }}
                >
                  full-stack developer
                </span>{" "}
                with a passion for building seamless and visually engaging
                digital experiences. Currently, I'm an{" "}
                <span
                  style={{
                    fontWeight: 400,
                    color: theme.palette.text.textPrimary.light,
                  }}
                >
                  Associate Technical Consultant at Infor
                </span>
                , where I work with ERP solutions to solve real-world business
                challenges.
                <br />
                <br />I graduated{" "}
                <span
                  style={{
                    fontWeight: 400,
                    color: theme.palette.text.textPrimary.light,
                  }}
                >
                  Magna Cum Laude from Polytechnic University of the Philippines
                  with a Bachelor of Science in Information Technology
                </span>
                . While development is my main focus, I also have a strong eye
                for design, applying my{" "}
                <span
                  style={{
                    fontWeight: 400,
                    color: theme.palette.text.textPrimary.light,
                  }}
                >
                  graphic design skills
                </span>{" "}
                to create intuitive and visually appealing interfaces.
                <br />
                <br />
                <span
                  style={{
                    fontWeight: 400,
                    color: theme.palette.text.textPrimary.light,
                  }}
                >
                  Coding gives me a drive that keeps me going late into the
                  night
                </span>
                —there’s just something exciting about solving complex problems
                and seeing a project come together. Outside of development,{" "}
                <span
                  style={{
                    fontWeight: 400,
                    color: theme.palette.text.textPrimary.light,
                  }}
                >
                  I run a YouTube channel where I review songs
                </span>
                , blending my technical mindset with my love for music.
                <br />
                <br />
                If you're looking for a dedicated and detail-oriented developer,{" "}
                <span
                  style={{
                    fontWeight: 400,
                    color: theme.palette.text.textPrimary.light,
                  }}
                >
                  let's connect!
                </span>
              </Typography>
            </ScrollRevealAnimation>

            <ScrollRevealAnimation spring={true} reveal={true} zIndex={2}>
              <CharacteristicsInput
                onInputSubmit={handleCharacteristicsSubmit}
              />
            </ScrollRevealAnimation>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default forwardRef(AboutMeSection);
