import React, { forwardRef } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';


function ExperienceSection({ Typography, Chip }, ref) {
  return (
    <Container maxWidth="lg">
      <Grid ref={ref} container sx={{ minHeight: '100vh', pt: '150px' }}>

        <Grid container item xs={5}>
        </Grid>

        <Grid container item xs={7} spacing={5}>

            <Grid container item spacing={2}>
              <Grid item xs={4}>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h4" color="text.textPrimary.light" fontWeight={400} sx={{ pb: 5 }}>Experience</Typography>
              </Grid>
            </Grid>

            <Grid container item spacing={3}>
              <Grid item xs={4}>
                <Typography variant="h6" color="text.textSecondary.light" fontWeight={400} textAlign="right">Infor</Typography>
                <Typography variant="subtitle2" color="text.textSecondary.dark" fontWeight={400} textAlign="right">August 2023 - Present</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6" color="text.textPrimary.light" fontWeight={600}>Technical Consultant, <span style={{ fontWeight: 300 }}>Associate</span></Typography>
                <Typography variant="body2" color="text.textPrimary.main" fontWeight={400}>
                  From graphic design to programming, I've journeyed through pixels and codes to become a versatile web developer. From graphic design to programming, I've journeyed through pixels and codes to become a versatile web developer.
                </Typography>

                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ pt: 2 }}>
                  <Chip label="Java" color="darkBlue" />
                  <Chip label="JavaScript" color="darkBlue" />
                  <Chip label="TypeScript" color="darkBlue" />
                  <Chip label="jQuery" color="darkBlue" />
                  <Chip label="XML" color="darkBlue" />
                  <Chip label="Python" color="darkBlue" />
                </Stack>

              </Grid>
            </Grid>

            <Grid container item spacing={3}>
              <Grid item xs={4}>
                <Typography variant="h6" color="text.textSecondary.light" fontWeight={400} textAlign="right">LexMeet</Typography>
                <Typography variant="subtitle2" color="text.textSecondary.dark" fontWeight={400} textAlign="right">March - June 2023</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6" color="text.textPrimary.light" fontWeight={600}>Web Developer/Team Leader, <span style={{ fontWeight: 300 }}>Intern</span></Typography>
                <Typography variant="body2" color="text.textPrimary.main" fontWeight={400}>
                  From graphic design to programming, I've journeyed through pixels and codes to become a versatile web developer. From graphic design to programming, I've journeyed through pixels and codes to become a versatile web developer.
                </Typography>

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

              </Grid>
            </Grid>

        </Grid>

      </Grid>
    </Container>
  );
}

export default forwardRef(ExperienceSection);