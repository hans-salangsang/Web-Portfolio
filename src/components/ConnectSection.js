import React, { forwardRef } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useScreenSize } from "../ScreenContext";
import ScrollRevealAnimation from "./ScrollRevealAnimation";
import ContactForm from "./ContactForm";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useTheme } from "@mui/material/styles";
import tinycolor from "tinycolor2";

function ConnectSection({ Typography, Chip }, ref) {
  const screenSize = useScreenSize();
  const theme = useTheme();

  return (
    <Container maxWidth={screenSize === "xl" ? "xl" : "lg"}>
      <Grid ref={ref} container sx={{ pt: 15, pb: 10 }}>
        <Grid container item xs={12}>
          <Grid container item spacing={2} xs={12}>
            <Grid item xs={12} sx={{ mb: 5 }}>
              <ScrollRevealAnimation spring={true} reveal={true} zIndex={2}>
                <Typography
                  variant="h3"
                  color="text.textPrimary.light"
                  textAlign="center"
                >
                  Let's Connect!
                </Typography>
              </ScrollRevealAnimation>
            </Grid>
          </Grid>

          <Grid container item spacing={2} xs={12}>
            <Grid item xs={12}>
              <ScrollRevealAnimation reveal={true} zIndex={2}>
                <ContactForm Typography={Typography} />
              </ScrollRevealAnimation>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default forwardRef(ConnectSection);
