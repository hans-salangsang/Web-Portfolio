import React from "react";
import { Grid, AppBar, Stack } from "@mui/material";
import Clock from "./Clock";
import DynamicIsland from "./DynamicIsland";
import { useScreenSize } from "../ScreenContext";
import Container from "@mui/material/Container";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Tooltip from "./CustomTooltip";
import BaseButton from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { motion } from "framer-motion";

function AppNavBar({
  setIsDarkMode,
  isDarkMode,
  Typography,
  scrollToSection,
  landingSectionRef,
  aboutSectionRef,
  skillsSectionRef,
  experienceSectionRef,
  projectsSectionRef,
  connectSectionRef,
  activeSection,
}) {
  const screenSize = useScreenSize();
  const theme = useTheme();

  const [darkMode, setDarkMode] = useState(true);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    // Call setIsDarkMode to toggle the mode
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Define a state to hold the current time
  const [currentTime, setCurrentTime] = React.useState("");

  // Update the current time when the Clock component fetches new time
  const updateTime = (newTime) => {
    setCurrentTime(newTime);
  };

  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        // backdropFilter: "blur(50px)",
        justifyContent: "center",
        backgroundColor: "transparent",
        transition: `background-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard}`,
      })}
      elevation={0}
    >
      {screenSize !== "xs" && (
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
          sx={{ mt: 0, mb: 0, px: 0 }}
        >
          {screenSize !== "xs" && (
            <Grid
              item
              xs={0}
              sm={1}
              md
              sx={{
                pl:
                  screenSize === "xs" || screenSize === "sm"
                    ? 0
                    : screenSize === "md"
                    ? 4
                    : 10,
                display: "flex",
                py: 2,
              }}
              onClick={() => scrollToSection(landingSectionRef)}
            >
              {screenSize !== "xs" &&
                screenSize !== "sm" &&
                screenSize !== "md" && (
                  <Typography
                    variant="h6"
                    color="text.textPrimary.light"
                    textAlign="left"
                    sx={{ cursor: "pointer" }}
                  >
                    Hans<span>&nbsp;</span>
                    <span
                      style={{ color: theme.palette.text.textPrimary.light }}
                    >
                      Salangsang
                    </span>
                  </Typography>
                )}
              {(screenSize === "xs" ||
                screenSize === "sm" ||
                screenSize === "md") && (
                <>
                  <Typography
                    variant="h6"
                    color="text.textPrimary.light"
                    textAlign="left"
                    sx={{ cursor: "pointer" }}
                  >
                    H
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.textPrimary.light"
                    textAlign="left"
                    sx={{ cursor: "pointer" }}
                  >
                    S
                  </Typography>
                </>
              )}
            </Grid>
          )}
          {screenSize !== "xs" && (
            <Grid
              item
              xs={12}
              sm={8}
              md={8}
              lg={7}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <DynamicIsland
                Typography={Typography}
                scrollToSection={scrollToSection}
                landingSectionRef={landingSectionRef}
                aboutSectionRef={aboutSectionRef}
                skillsSectionRef={skillsSectionRef}
                experienceSectionRef={experienceSectionRef}
                projectsSectionRef={projectsSectionRef}
                connectSectionRef={connectSectionRef}
                activeSection={activeSection}
              />
            </Grid>
          )}
          {screenSize !== "xs" && (
            <Grid
              item
              xs={0}
              sm={1}
              md
              sx={{
                justifyContent: "flex-end",
                pr:
                  screenSize === "xs" || screenSize === "sm"
                    ? 0
                    : screenSize === "md"
                    ? 4
                    : 10,
                py: screenSize === "md" ? 2 : 1,
              }}
            >
              <Stack
                direction={
                  screenSize !== "xs" &&
                  screenSize !== "lg" &&
                  screenSize !== "xl"
                    ? "column-reverse"
                    : "row"
                }
                spacing={1}
                sx={{
                  alignItems:
                    screenSize === "sm" || screenSize === "md"
                      ? "flex-end"
                      : "center",
                  justifyContent: "flex-end",
                  py: screenSize === "md" ? 0 : 1,
                }}
              >
                <Tooltip
                  title={
                    isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                  }
                  placement="bottom"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      y: -4,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{
                      scale: 0.9,
                      y: -2,
                      transition: { duration: 0.1 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 70 }}
                  >
                    <IconButton onClick={handleToggleDarkMode} color="inherit">
                      {darkMode ? (
                        <DarkMode
                          sx={{ color: theme.palette.text.textPrimary.light }}
                        />
                      ) : (
                        <LightMode
                          sx={{ color: theme.palette.text.textPrimary.light }}
                        />
                      )}
                    </IconButton>
                  </motion.div>
                </Tooltip>

                {screenSize !== "xs" && (
                  <>
                    <Tooltip
                      title={
                        <span>
                          This is my local time.
                          <br />
                          UTC+8
                        </span>
                      }
                      placement="bottom"
                    >
                      <Typography
                        variant="body2"
                        color="text.textPrimary.light"
                        fontWeight={400}
                        textAlign="right"
                        sx={{
                          pl: screenSize !== "xs" ? 1 : 0,
                        }}
                      >
                        <Clock onUpdate={updateTime} />
                        {currentTime}
                      </Typography>
                    </Tooltip>
                  </>
                )}
              </Stack>
            </Grid>
          )}
        </Grid>
      )}

      {screenSize === "xs" && (
        <Container maxWidth={screenSize === "xl" ? "xl" : "lg"} sx={{ px: 3 }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{ mt: 2, mb: 1 }}
          >
            <Grid item xs={8} sx={{ py: 1 }}>
              {/* <Typography
                variant="h6"
                color="text.textPrimary.dark"
                textAlign="left"
                sx={{ cursor: "pointer" }}
              >
                Hans<span>&nbsp;</span>
                <span style={{ color: theme.palette.text.textSecondary.main }}>
                  Salangsang
                </span>
              </Typography> */}
            </Grid>

            <Grid
              item
              xs={4}
              sx={{ py: 1, display: "flex", justifyContent: "flex-end" }}
            >
              <Tooltip
                title={
                  isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
                placement="bottom"
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    y: -4,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{
                    scale: 0.9,
                    y: -2,
                    transition: { duration: 0.1 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 70 }}
                >
                  <IconButton onClick={handleToggleDarkMode} color="inherit">
                    {darkMode ? (
                      <DarkMode
                        sx={{ color: theme.palette.text.textPrimary.light }}
                      />
                    ) : (
                      <LightMode
                        sx={{ color: theme.palette.text.textPrimary.light }}
                      />
                    )}
                  </IconButton>
                </motion.div>
              </Tooltip>
            </Grid>
          </Grid>
        </Container>
      )}
    </AppBar>
  );
}

export default AppNavBar;
