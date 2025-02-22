import React, { forwardRef } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useScreenSize } from "../ScreenContext";
import ScrollRevealAnimation from "./ScrollRevealAnimation";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

function ExperienceSection({ Typography, Chip }, ref) {
  const screenSize = useScreenSize();

  return (
    <Container maxWidth={screenSize === "xl" ? "xl" : "lg"}>
      <Grid ref={ref} container sx={{ minHeight: "100vh" }}>
        <Grid container item xs={12} spacing={5}>
          <Grid item xs={12}>
            <ScrollRevealAnimation spring={true} reveal={true} zIndex={2}>
              <Typography
                variant="h3"
                color="text.textPrimary.dark"
                fontWeight={400}
                sx={{
                  textAlign: "left",
                }}
              >
                Experience
              </Typography>
            </ScrollRevealAnimation>
          </Grid>

          <Grid container item spacing={5}>
            <Grid item xs={4}>
              <ScrollRevealAnimation spring={true} reveal={true}>
                <Typography
                  variant="h4"
                  color="text.textSecondary.main"
                  fontWeight={700}
                  textAlign="right"
                >
                  Infor
                </Typography>
                <Typography
                  variant="body2"
                  color="text.textSecondary.dark"
                  fontWeight={700}
                  sx={{ mt: 1.4 }}
                  textAlign="right"
                >
                  AUG 2023 - PRESENT
                </Typography>
              </ScrollRevealAnimation>
            </Grid>

            <Grid item xs={8}>
              <ScrollRevealAnimation spring={true} reveal={true}>
                <Typography
                  variant="h4"
                  color="text.textPrimary.light"
                  fontWeight={700}
                >
                  Technical Consultant,{" "}
                  <span style={{ fontWeight: 200 }}>Associate</span>
                </Typography>
                <Typography
                  variant="body1"
                  color="text.textPrimary.main"
                  fontWeight={400}
                  sx={{ mt: 1.2 }}
                >
                  From graphic design to programming, I've journeyed through
                  pixels and codes to become a versatile web developer. From
                  graphic design to programming, I've journeyed through pixels
                  and codes to become a versatile web developer.
                </Typography>
              </ScrollRevealAnimation>

              <ScrollRevealAnimation spring={true} reveal={true}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  flexWrap="wrap"
                  sx={{ pt: 2 }}
                >
                  <Chip label="Java" color="darkBlue" />
                  <Chip label="JavaScript" color="darkBlue" />
                  <Chip label="TypeScript" color="darkBlue" />
                  <Chip label="jQuery" color="darkBlue" />
                  <Chip label="XML" color="darkBlue" />
                  <Chip label="Python" color="darkBlue" />
                </Stack>
              </ScrollRevealAnimation>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item xs={5}></Grid>
      </Grid>
    </Container>
  );
}

export default forwardRef(ExperienceSection);
