import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import tinycolor from "tinycolor2";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material";

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
  const theme = useTheme();

  return (
    <Grid item xs={12} md={width} key={category}>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.background.defaultSubtleAccent,
          border: 1,
          borderColor: theme.palette.background.defaultSubtleAccentAccent,
          borderRadius: 2,
          p: 3,
          backgroundImage: `radial-gradient(circle at top, ${alpha(
            tinycolor(theme.palette.background.accent)
              .darken(40)
              .spin(0)
              .desaturate(50)
              .toString(),
            0.35
          )} 0%, transparent 40%)`,
          borderImageSource: `radial-gradient(circle at top, ${alpha(
            tinycolor(theme.palette.background.accent)
              .darken(0)
              .spin(0)
              .desaturate(20)
              .toString(),
            0.5
          )} 0%, transparent 25%)`,
          borderImageSlice: 1,
        })}
      >
        <Typography
          variant="h5"
          component="h3"
          color="text.textPrimary.light"
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
                      backgroundColor: "background.defaultSubtleAccent2",
                    }}
                  >
                    <i
                      className={icon}
                      style={{
                        fontSize: 22,
                        color: theme.palette.background.accent,
                      }}
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
