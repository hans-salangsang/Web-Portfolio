import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useScreenSize } from "../ScreenContext";

function Footer({ Typography, Chip }) {
  const screenSize = useScreenSize();

  return (
    <Container
      sx={{
        minWidth: screenSize === "xl" ? "83%" : "90%",
        pb: screenSize === "xs" ? 6 : 0,
      }}
    >
      <Grid container sx={{ py: 1 }}>
        <Grid item xs={4}>
          <Typography
            variant="caption"
            color="text.textFooter.footer"
            fontWeight={400}
          >
            Copyright © 2024 Hans Salangsang. All rights reserved.
          </Typography>
        </Grid>

        <Grid item xs>
          <Typography
            variant="caption"
            color="text.textFooter.footer"
            fontWeight={400}
          >
            Copyright © 2024 Hans Salangsang. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
