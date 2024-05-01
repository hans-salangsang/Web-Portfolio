import React, { forwardRef } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';


function ProjectsSection({ Typography, Chip }, ref) {
  return (
    <Grid ref={ref} container sx={{ minHeight: '100vh', pt: '150px' }}>

      <Grid container item xs={12}>

          <Grid container item spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" color="text.textPrimary.light" fontWeight={400} sx={{ pb: 5 }}>Experience</Typography>
            </Grid>
          </Grid>

          <Grid container item spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" color="text.textPrimary.light" fontWeight={600}>Technical Consultant, <span style={{ fontWeight: 300 }}>Associate</span></Typography>
              <Typography variant="body2" color="text.textPrimary.main" fontWeight={400}>
                From graphic design to programming, I've journeyed through pixels and codes to become a versatile web developer. From graphic design to programming, I've journeyed through pixels and codes to become a versatile web developer.
              </Typography>

              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ pt: 2 }}>
                <Chip label="Java" color="primary" />
                <Chip label="JavaScript" color="primary" />
                <Chip label="TypeScript" color="primary" />
                <Chip label="jQuery" color="primary" />
                <Chip label="XML" color="primary" />
                <Chip label="Python" color="primary" />
              </Stack>

            </Grid>
          </Grid>

          <Grid container item spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" color="text.textPrimary.light" fontWeight={600}>Web Developer/Team Leader, <span style={{ fontWeight: 300 }}>Intern</span></Typography>
              <Typography variant="body2" color="text.textPrimary.main" fontWeight={400}>
                From graphic design to programming, I've journeyed through pixels and codes to become a versatile web developer. From graphic design to programming, I've journeyed through pixels and codes to become a versatile web developer.
              </Typography>

              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ pt: 2 }}>
                <Chip label="ReactJS" color="primary" />
                <Chip label="Laravel" color="primary" />
                <Chip label="MySQL" color="primary" />
                <Chip label="GitLab" color="primary" />
                <Chip label="Figma" color="primary" />
                <Chip label="HTML" color="primary" />
                <Chip label="CSS" color="primary" />
                <Chip label="Bootstrap" color="primary" />
              </Stack>

            </Grid>
          </Grid>

      </Grid>

    </Grid>
  );
}

export default forwardRef(ProjectsSection);