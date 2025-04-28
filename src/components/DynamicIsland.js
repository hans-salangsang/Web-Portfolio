import React from "react";
import { Stack } from "@mui/material";
import BaseButton from "@mui/material/Button";
import BaseToolbar from "@mui/material/Toolbar";
import { useScreenSize } from "../ScreenContext";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MagnetButton from "./MagnetButton";

const Toolbar = styled(BaseToolbar)`
  ${({ theme }) => `
    transition: background ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard};
  `}
`;

const Button = styled(BaseButton)(({ theme }) => ({
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  "&:hover .MuiTypography-root": {
    fontWeight: 700,
    color: theme.palette.background.accent,
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

function DynamicIsland({
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
  const [hoveredButton, setHoveredButton] = useState("");

  return (
    <Toolbar
      variant="dense"
      sx={{
        // backgroundColor:
        // hoveredButton !== "" ? "background.accentHover" : "background.accent",
        // backdropFilter: "blur(200px)",
        justifyContent: "center",
        // backgroundColor: "background.defaultSubtleAccent",
        justifyContent: "center",
        // borderRadius: (theme) => `0 0 ${theme.spacing(2)} ${theme.spacing(2)}`,
        borderRadius: 2,
        // boxShadow: theme.shadows[5],
        py: 2,
      }}
    >
      <Stack direction="row" spacing={0}>
        {/* <MagnetButton
          onMouseEnter={() => setHoveredButton("About")}
          onMouseLeave={() => setHoveredButton("")}
          animate={{
            scale:
              hoveredButton === "" ? 1 : hoveredButton !== "About" ? 0.9 : 1,
          }}
        >
          <Button
            color="inherit"
            onClick={() => scrollToSection(aboutSectionRef)}
          >
            <Typography
              variant="button"
              color={
                activeSection === "about"
                  ? "text.textDynamicIsland.main"
                  : "text.textDynamicIsland.dark"
              }
              fontWeight={activeSection === "about" ? 400 : 400}
              textAlign="center"
              sx={{
                borderBottom:
                  activeSection === "about" ? "1px solid currentColor" : "none",
                paddingBottom: activeSection === "about" ? "0px" : "0",
              }}
            >
              About
            </Typography>
          </Button>
        </MagnetButton> */}

        <MagnetButton
          onMouseEnter={() => setHoveredButton("Skills")}
          onMouseLeave={() => setHoveredButton("")}
          animate={{
            scale:
              hoveredButton === "" ? 1 : hoveredButton !== "Skills" ? 0.9 : 1,
          }}
        >
          <Button
            color="inherit"
            onClick={() => scrollToSection(skillsSectionRef)}
          >
            <Typography
              variant="button"
              color={
                activeSection === "skills"
                  ? "text.textPrimary.light"
                  : "text.textPrimary.dark"
              }
              fontWeight={activeSection === "skills" ? 400 : 400}
              textAlign="center"
              sx={{
                borderBottom:
                  activeSection === "skills"
                    ? "1px solid currentColor"
                    : "none",
                paddingBottom: activeSection === "skills" ? "0px" : "0",
              }}
            >
              Skills
            </Typography>
          </Button>
        </MagnetButton>

        <MagnetButton
          onMouseEnter={() => setHoveredButton("Experience")}
          onMouseLeave={() => setHoveredButton("")}
          animate={{
            scale:
              hoveredButton === ""
                ? 1
                : hoveredButton !== "Experience"
                ? 0.9
                : 1,
          }}
        >
          <Button
            color="inherit"
            onClick={() => scrollToSection(experienceSectionRef)}
          >
            <Typography
              variant="button"
              color={
                activeSection === "experience"
                  ? "text.textPrimary.light"
                  : "text.textPrimary.dark"
              }
              fontWeight={activeSection === "experience" ? 400 : 400}
              textAlign="center"
              sx={{
                borderBottom:
                  activeSection === "experience"
                    ? "1px solid currentColor"
                    : "none",
                paddingBottom: activeSection === "experience" ? "0px" : "0",
              }}
            >
              Experience
            </Typography>
          </Button>
        </MagnetButton>

        <MagnetButton
          onMouseEnter={() => setHoveredButton("Connect")}
          onMouseLeave={() => setHoveredButton("")}
          animate={{
            scale:
              hoveredButton === "" ? 1 : hoveredButton !== "Connect" ? 0.9 : 1,
          }}
        >
          <Button
            color="inherit"
            onClick={() => scrollToSection(connectSectionRef)}
          >
            <Typography
              variant="button"
              color={
                activeSection === "connect"
                  ? "text.textPrimary.light"
                  : "text.textPrimary.dark"
              }
              fontWeight={activeSection === "connect" ? 400 : 400}
              textAlign="center"
              sx={{
                borderBottom:
                  activeSection === "connect"
                    ? "1px solid currentColor"
                    : "none",
                paddingBottom: activeSection === "connect" ? "0px" : "0",
              }}
            >
              Connect
            </Typography>
          </Button>
        </MagnetButton>
      </Stack>
    </Toolbar>
  );
}

export default DynamicIsland;
