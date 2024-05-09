import React, { forwardRef } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useScreenSize } from '../ScreenContext';

function ConnectSection({ Typography, Chip }, ref) {
  const screenSize = useScreenSize();

  return (
    <Container maxWidth={screenSize === "xl" ? "xl" : "lg"}>
      <Grid ref={ref} container sx={{ minHeight: screenSize === 'xs' ? '80vh' : '80vh', pt: '60px' }}>

        <Grid container item xs={12}>

            <Grid container item spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4" color="text.textFooter.light" fontWeight={600}>Seeking a motivated<br />team member?</Typography>
                <Typography variant="h6" color="text.textFooter.dark" fontWeight={400} fontFamily="Poppins, sans-serif" sx={{ mt: 1 }}>Let's connect!</Typography>
              </Grid>
            </Grid>

            <Typography variant="body2" color="text.textFooter.main" fontWeight={400}>Let's connect!</Typography>
        </Grid>

      </Grid>
    </Container>
  );
}

export default forwardRef(ConnectSection);