import React, { forwardRef } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useScreenSize } from "../ScreenContext";
import ScrollRevealAnimation from "./ScrollRevealAnimation";
import ContactForm from "./ContactForm";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

function ConnectSection({ Typography, Chip }, ref) {
  const screenSize = useScreenSize();

  return (
    <Container maxWidth={screenSize === "xl" ? "xl" : "lg"}>
      {screenSize !== "xs" && (
        <Grid
          ref={ref}
          container
          sx={{
            minHeight: screenSize === "xs" ? "70vh" : "80vh",
            pt: screenSize === "xs" ? "5.5vh" : "7vh",
          }}
        >
          <Grid container item xs={12}>
            <Grid container item spacing={2} xs={12} lg={8}>
              <Grid item xs={12}>
                <ScrollRevealAnimation reveal={true} zIndex={2}>
                  <Typography
                    variant="h4"
                    color="text.textFooter.light"
                    fontWeight={600}
                  >
                    Seeking a motivated
                    <br />
                    team member?
                  </Typography>
                </ScrollRevealAnimation>
                <ScrollRevealAnimation reveal={true} zIndex={2}>
                  <Typography
                    variant="h6"
                    color="text.textFooter.dark"
                    fontWeight={400}
                    fontFamily="Poppins, sans-serif"
                  >
                    Let's start a conversation!
                  </Typography>
                </ScrollRevealAnimation>
              </Grid>
            </Grid>

            <Grid container item spacing={2} xs={12} lg={4}>
              <Grid item xs={12}>
                <ScrollRevealAnimation reveal={true} zIndex={2}>
                  <ContactForm Typography={Typography} />
                </ScrollRevealAnimation>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default forwardRef(ConnectSection);
