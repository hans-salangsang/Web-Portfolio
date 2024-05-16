import React, { forwardRef } from 'react';
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';
import { useScreenSize } from '../ScreenContext';
import { useState, useEffect } from "react";
import { useAnimate, useInView, stagger, motion } from "framer-motion";
import ScrollRevealAnimation from './ScrollRevealAnimation'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

function LandingSection({ Typography }, ref) {
  const screenSize = useScreenSize();

  return (
    <Container maxWidth={screenSize === "xl" ? "xl" : "lg"} ref={ref} sx={{ minHeight: '100vh', pt: screenSize === "xs" ? "4vh" : "28vh" }}>
      {/* <Stack spacing={2} ref={scope}> */}
      <Stack spacing={2}>

        <ScrollRevealAnimation spring={true} reveal={true} zIndex={2}>
          <Parallax speed={-20}>
            <Typography variant="h2" color="text.textPrimary.light" fontWeight={800} paragraph textAlign="left">
                Hans<br />Salangsang
            </Typography>
          </Parallax>
        </ScrollRevealAnimation>

        <ScrollRevealAnimation spring={true} reveal={true}>
          <Parallax speed={-15}>
            <Typography variant="h5" color="text.textSecondary.light" fontWeight={400} textAlign="left" sx={{ mt: screenSize === "xs" ? 8 : screenSize === "xl" ? 8 : 10 }}>Full-Stack Web Developer</Typography>
          </Parallax>
        </ScrollRevealAnimation>

        <ScrollRevealAnimation spring={true} reveal={true}>
            <Typography variant="body2" color="text.textPrimary.main" fontWeight={400} paragraph textAlign="right" sx={{ mt: screenSize === "xs" ? 23 : screenSize === "xl" ? 28 : 10 }}>
              {screenSize === 'xs' && (
                <>
                From graphic design to programming,<br />
                I've explored pixels and codes to become<br />
                a versatile web developer.
              </>
              )}
              {screenSize !== 'xs' && (
                <>
                From graphic design to programming, I've explored pixels and codes to become a versatile web developer.
              </>
              )}
              <Typography variant="body2" color="text.textPrimary.light" fontWeight={400} fontFamily="JetBrains Mono, sans-serif" paragraph textAlign="right">
                Let's create your{screenSize === "xs" ? <br /> : " "}digital dreams together!
              </Typography>
            </Typography>
        </ScrollRevealAnimation>

      </Stack>
    </Container>    
  );
}

export default forwardRef(LandingSection);