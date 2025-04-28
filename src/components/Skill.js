import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

const Skill = ({
  category,
  skillList,
  index,
  width,
  height,
  columnWidthXs,
  columnWidthSm,
  columnWidthMd,
}) => {
  return (
    <Grid item xs={12} md={width} key={category}>
      <Box
        sx={{
          backgroundColor: "background.default",
          border: 1,
          borderColor: "background.defaultSubtleAccentAccent",
          borderRadius: 2,
          p: 3,
        }}
      >
        <Typography
          variant="h4"
          color="background.accent"
          textAlign="left"
          sx={{ mb: 5 }}
        >
          {category}
        </Typography>

        <Grid container spacing={3}>
          {Object.entries(skillList).map(
            (
              [skill, { icon, backgroundColor, iconColor, description }],
              index
            ) => (
              <Grid
                item
                xs={columnWidthXs}
                sm={columnWidthSm}
                md={columnWidthMd}
                key={skill}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 35,
                      height: 35,
                      borderRadius: 2,
                      backgroundColor: backgroundColor,
                    }}
                  >
                    <i
                      className={icon}
                      style={{ fontSize: 22, color: iconColor }}
                    ></i>
                  </Box>
                  <Box>
                    <Typography
                      variant="body1"
                      fontWeight={500}
                      color="text.textPrimary.light"
                      sx={{ mb: -0.25 }}
                    >
                      {skill}
                    </Typography>
                    <Typography
                      variant="body1"
                      // fontFamily={"JetBrains Mono"}
                      fontWeight={400}
                      color="text.textPrimary.main"
                    >
                      {description}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Grid>
  );
};

export default Skill;
