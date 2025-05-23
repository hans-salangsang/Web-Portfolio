import React from "react";
import { Grid, AppBar, Stack } from "@mui/material";
import Clock from "./Clock";
import DynamicIsland from "./DynamicIsland";
import { useScreenSize } from "../ScreenContext";
import Container from "@mui/material/Container";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Tooltip from "./CustomTooltip";
import BaseButton from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { motion } from "framer-motion";
import MagnetButton from "./MagnetButton";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";

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

  const handleToggleDarkMode = (event) => {
    const isChecked = event.target.checked;

    setDarkMode(isChecked); // this triggers the smooth toggle
    setIsDarkMode(isChecked); // your own logic
  };

  // Define a state to hold the current time
  const [currentTime, setCurrentTime] = React.useState("");

  // Update the current time when the Clock component fetches new time
  const updateTime = (newTime) => {
    setCurrentTime(newTime);
  };

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      color: theme.palette.background.default,
      transitionDuration: "300ms",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.text.textPrimary.light,
      },
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: theme.palette.background.default,
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.text.textPrimary.light,
          opacity: 1,
          border: 0,
          ...theme.applyStyles("dark", {
            backgroundColor: "#2ECA45",
          }),
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: theme.palette.grey[100],
        ...theme.applyStyles("dark", {
          color: theme.palette.grey[600],
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
        ...theme.applyStyles("dark", {
          opacity: 0.3,
        }),
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& .icon-light, & .icon-dark": {
        position: "absolute",
        fontSize: 16,
        transition: "opacity 0.3s ease",
      },
      "& .icon-dark": {
        opacity: 0,
      },
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#E9E9EA",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
      ...theme.applyStyles("dark", {
        backgroundColor: "#39393D",
      }),
    },
  }));

  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        justifyContent: "center",
        backgroundColor: alpha(theme.palette.background.default, 0.3), // Adjust opacity as needed
        backdropFilter: "blur(10px)", // Adjust blur strength
        WebkitBackdropFilter: "blur(10px)", // For Safari
        transition: `background-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard}`,
      })}
      elevation={0}
    >
      <Container maxWidth={screenSize === "xl" ? "lg" : "lg"}>
        {screenSize !== "xs" && (
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
            sx={{ mt: 0.7, mb: 0.7, px: 3 }}
          >
            {screenSize !== "xs" && (
              <Grid
                item
                xs={0}
                sm={1}
                md
                sx={{
                  display: "flex",
                  py: 1,
                }}
                onClick={() => scrollToSection(landingSectionRef)}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2, // Space between items
                    pt: 0.7,
                  }}
                >
                  <Typography
                    variant="h5"
                    component="p"
                    color="text.textPrimary.light"
                    fontWeight={400}
                    sx={{
                      cursor: "pointer",
                      fontFamily: "Hypik",
                      // fontSize: `clamp(1.4rem, 2.25vw, 1.8rem)`,
                    }}
                  >
                    h
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    color="text.textPrimary.light"
                    fontWeight={700}
                    sx={{
                      cursor: "pointer",
                      fontFamily: "Inter",
                      letterSpacing: -0.2,
                    }}
                  >
                    Hans Salangsang
                  </Typography>
                </Box>
              </Grid>
            )}
            {screenSize !== "xs" && (
              <Grid
                item
                xs={12}
                sm={8}
                md={8}
                lg={7}
                sx={{ display: "flex", justifyContent: "center", mt: 0.5 }}
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
                  // py: screenSize === "md" ? 2 : 1,
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
                    py: screenSize === "md" ? 0 : 2,
                  }}
                >
                  <Tooltip
                    title={
                      isDarkMode
                        ? "Switch to Light Mode"
                        : "Switch to Dark Mode"
                    }
                    placement="bottom"
                  >
                    <FormControlLabel
                      control={
                        <IOSSwitch
                          checked={darkMode}
                          onChange={handleToggleDarkMode}
                          icon={
                            <LightMode
                              className="icon-light"
                              sx={{ fontSize: "1.4rem" }}
                            />
                          }
                          checkedIcon={
                            <DarkMode
                              className="icon-dark"
                              sx={{ fontSize: "1.4rem" }}
                            />
                          }
                        />
                      }
                    />
                    {/* <span>
                    <MagnetButton>
                      <IconButton
                        onClick={handleToggleDarkMode}
                        color="inherit"
                      >
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
                    </MagnetButton>
                  </span> */}
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
                            letterSpacing: -0.2,
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
          <Container
            maxWidth={screenSize === "xl" ? "xl" : "lg"}
            sx={{ px: 0 }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              sx={{ mt: 1 }}
            >
              <Grid item xs={8} sx={{ py: 1, px: 3 }}>
                <Typography
                  variant="h5"
                  component="p"
                  color="text.textPrimary.light"
                  fontWeight={400}
                  sx={{
                    cursor: "pointer",
                    fontFamily: "Hypik",
                    // fontSize: `clamp(1.4rem, 2.25vw, 1.8rem)`,
                  }}
                >
                  h
                </Typography>
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
                  <FormControlLabel
                    control={
                      <IOSSwitch
                        checked={darkMode}
                        onChange={handleToggleDarkMode}
                        icon={
                          <LightMode
                            className="icon-light"
                            sx={{ fontSize: "1.4rem" }}
                          />
                        }
                        checkedIcon={
                          <DarkMode
                            className="icon-dark"
                            sx={{ fontSize: "1.4rem" }}
                          />
                        }
                      />
                    }
                  />
                </Tooltip>
              </Grid>
            </Grid>
          </Container>
        )}
      </Container>
    </AppBar>
  );
}

export default AppNavBar;
