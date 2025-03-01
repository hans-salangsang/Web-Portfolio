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

function AboutMeSection({ Typography, Chip }, ref) {
  const screenSize = useScreenSize();
  const theme = useTheme();

  return (
    <Container maxWidth={screenSize === "xl" ? "xl" : "lg"}>
      {/* <Grid ref={ref} container sx={{ minHeight: "100vh" }}> */}
      <Grid ref={ref} container>
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

          <Grid item xs={12}>
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
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default forwardRef(AboutMeSection);
