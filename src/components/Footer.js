import React, { forwardRef } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

function Footer({ Typography, Chip }) {
  return (
    <Container sx={{ minWidth: "90%" }}>
      <Grid container sx={{ py: 1 }}>

        <Grid item xs={4}>
            <Typography variant="caption" color="text.textFooter.footer" fontWeight={400}>Copyright © 2024 Hans Salangsang. All rights reserved.</Typography>
        </Grid>

        <Grid item xs>
            <Typography variant="caption" color="text.textFooter.footer" fontWeight={400}>Copyright © 2024 Hans Salangsang. All rights reserved.</Typography>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Footer;