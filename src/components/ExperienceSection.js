import React, { forwardRef } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useScreenSize } from '../ScreenContext';
import ScrollRevealAnimation from './ScrollRevealAnimation';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

function ExperienceSection({ Typography, Chip }, ref) {
  const screenSize = useScreenSize();

  return (
    <Container maxWidth={screenSize === "xl" ? "xl" : "lg"}>
      {screenSize === 'xs' && (
        <Grid ref={ref} container sx={{ minHeight: '100vh', pt: '15vh' }}>
          
          <Grid container item xs={12} spacing={6}>

            <Grid container item>
              <Grid item xs={12}>
                <Typography variant="h4" color="text.textPrimary.light" fontWeight={400} sx={{ mb: 6 }}>Experience</Typography>
              </Grid>
            </Grid>

            <Grid container item spacing={3}>

              <Grid item xs={12}>
                <ScrollRevealAnimation spring={true} reveal={true}>
                  <Box display="flex" alignItems="baseline" width="100%">
                    <Typography variant="h6" color="text.textSecondary.light" fontWeight={400} textAlign="right">Infor</Typography>
                    <Typography variant="subtitle2" color="text.textSecondary.dark" fontWeight={400} textAlign="right" sx={{ ml: 1 }}>August 2023 - Present</Typography>
                  </Box>
                </ScrollRevealAnimation>

                <ScrollRevealAnimation spring={true} reveal={true}>
                  <Typography variant="h6" color="text.textPrimary.light" fontWeight={600}>Technical Consultant, <span style={{ fontWeight: 300 }}>Associate</span></Typography>
                  <Typography variant="body2" color="text.textPrimary.main" fontWeight={400}>
                    From graphic design to programming, I've journeyed through pixels and codes to become a versatile web developer. From graphic design to programming, I've journeyed through pixels and codes to become a versatile web developer.
                  </Typography>
                </ScrollRevealAnimation>

                <ScrollRevealAnimation spring={true} reveal={true}>
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ pt: 1 }}>
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

            <Grid container item spacing={3}>

              <Grid item xs={12}>
                <ScrollRevealAnimation spring={true} reveal={true}>
                  <Box display="flex" alignItems="baseline" width="100%">
                    <Typography variant="h6" color="text.textSecondary.light" fontWeight={400} textAlign="right">LexMeet</Typography>
                    <Typography variant="subtitle2" color="text.textSecondary.dark" fontWeight={400} textAlign="right" sx={{ ml: 1 }}>March - June 2023</Typography>
                  </Box>
                </ScrollRevealAnimation>

                <ScrollRevealAnimation spring={true} reveal={true}>
                  <Typography variant="h6" color="text.textPrimary.light" fontWeight={600}>Web Developer/Team Leader, <span style={{ fontWeight: 300 }}>Intern</span></Typography>
                  <Typography variant="body2" color="text.textPrimary.main" fontWeight={400}>
                    From graphic design to programming, I've journeyed through pixels and codes to become a versatile web developer. From graphic design to programming, I've journeyed through pixels and codes to become a versatile web developer.
                  </Typography>
                </ScrollRevealAnimation>

                <ScrollRevealAnimation spring={true} reveal={true}>
                  <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ pt: 1 }}>
                    <Chip label="ReactJS" color="darkBlue" />
                    <Chip label="Laravel" color="darkBlue" />
                    <Chip label="MySQL" color="darkBlue" />
                    <Chip label="GitLab" color="darkBlue" />
                    <Chip label="Figma" color="darkBlue" />
                    <Chip label="HTML" color="darkBlue" />
                    <Chip label="CSS" color="darkBlue" />
                    <Chip label="Bootstrap" color="darkBlue" />
                  </Stack>
                </ScrollRevealAnimation>
              </Grid>

            </Grid>

          </Grid>

        </Grid>
      )}

      {screenSize !== 'xs' && (
        <Grid ref={ref} container sx={{ minHeight: '100vh', pt: '30vh' }}>

          <Grid container item xs={5}>
            <Grid item xs={12}>
              <ScrollRevealAnimation spring={true} reveal={true} zIndex={2}>
                <Parallax speed={-15}>
                  <Typography variant="h4" color="text.textPrimary.light" fontWeight={400} sx={{ mt: screenSize === "xs" ? 27 : screenSize === "xl" ? 28 : 16 }}>Experience</Typography>
                </Parallax>
              </ScrollRevealAnimation>
            </Grid>
          </Grid>

          <Grid container item xs={7} spacing={5}>

              <Grid container item spacing={3}>

                <Grid item xs={4}>
                  <ScrollRevealAnimation spring={true} reveal={true}>
                    <Typography variant="h6" color="text.textSecondary.light" fontWeight={400} textAlign="right">Infor</Typography>
                    <Typography variant="body2" color="text.textSecondary.dark" fontWeight={400} sx={{ mt: 1 }} textAlign="right">August 2023 - Present</Typography>
                  </ScrollRevealAnimation>
                </Grid>

                <Grid item xs={8}>
                  <ScrollRevealAnimation spring={true} reveal={true}>
                    <Typography variant="h6" color="text.textPrimary.light" fontWeight={600}>Technical Consultant, <span style={{ fontWeight: 300 }}>Associate</span></Typography>
                    <Typography variant="body2" color="text.textPrimary.main" fontWeight={400} sx={{ mt: 1 }}>
                      From graphic design to programming, I've journeyed through pixels and codes to become a versatile web developer. From graphic design to programming, I've journeyed through pixels and codes to become a versatile web developer.
                    </Typography>
                  </ScrollRevealAnimation>

                  <ScrollRevealAnimation spring={true} reveal={true}>
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ pt: 2 }}>
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

              <Grid container item spacing={3}>

                <Grid item xs={4}>
                  <ScrollRevealAnimation spring={true} reveal={true}>
                    <Typography variant="h6" color="text.textSecondary.light" fontWeight={400} textAlign="right">LexMeet</Typography>
                    <Typography variant="body2" color="text.textSecondary.dark" fontWeight={400} sx={{ mt: 1 }} textAlign="right">March - June 2023</Typography>
                  </ScrollRevealAnimation>
                </Grid>

                <Grid item xs={8}>
                  <ScrollRevealAnimation spring={true} reveal={true}>
                    <Typography variant="h6" color="text.textPrimary.light" fontWeight={600}>Web Developer/Team Leader, <span style={{ fontWeight: 300 }}>Intern</span></Typography>
                    <Typography variant="body2" color="text.textPrimary.main" fontWeight={400} sx={{ mt: 1 }}>
                      From graphic design to programming, I've journeyed through pixels and codes to become a versatile web developer. From graphic design to programming, I've journeyed through pixels and codes to become a versatile web developer.
                    </Typography>
                  </ScrollRevealAnimation>

                  <ScrollRevealAnimation spring={true} reveal={true}>
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ pt: 2 }}>
                      <Chip label="ReactJS" color="darkBlue" />
                      <Chip label="Laravel" color="darkBlue" />
                      <Chip label="MySQL" color="darkBlue" />
                      <Chip label="GitLab" color="darkBlue" />
                      <Chip label="Figma" color="darkBlue" />
                      <Chip label="HTML" color="darkBlue" />
                      <Chip label="CSS" color="darkBlue" />
                      <Chip label="Bootstrap" color="darkBlue" />
                    </Stack>
                  </ScrollRevealAnimation>
                </Grid>

              </Grid>

          </Grid>

        </Grid>
      )}
    </Container>
  );
}

export default forwardRef(ExperienceSection);