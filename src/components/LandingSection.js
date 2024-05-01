import React, { forwardRef } from 'react';
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';

function LandingSection({ Typography }, ref) {
  return (
    <Container ref={ref} sx={{ minHeight: '100vh', pt: '200px' }}>
      <Stack spacing={2}>
        <Typography variant="h2" color="text.textPrimary.light" fontWeight={800} paragraph textAlign="center">
            Hans<br />Salangsang
        </Typography>
        <Typography variant="h5" color="text.textSecondary.light" fontWeight={400} textAlign="center">Full-Stack Web Developer</Typography>
        <Typography variant="body2" color="text.textPrimary.main" fontWeight={400} paragraph textAlign="center">
            From graphic design to programming, I've explored
            <br />
            pixels and codes to become a versatile web developer.
            <Typography variant="body2" color="text.textPrimary.light" fontWeight={400} paragraph textAlign="center">
                Let's create your digital dreams together!
            </Typography>
        </Typography>
      </Stack>
    </Container>    
  );
}

export default forwardRef(LandingSection);