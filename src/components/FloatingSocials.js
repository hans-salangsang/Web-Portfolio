import React from "react";
import { styled } from "@mui/material/styles";
import BaseStack from "@mui/material/Stack";
import { motion } from "framer-motion";
import BaseButton from "@mui/material/Button";
import BaseIconButton from "@mui/material/IconButton";
import BaseToolbar from "@mui/material/Toolbar";
import { useScreenSize } from "../ScreenContext";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Tooltip from "./CustomTooltip";
import MagnetButton from "./MagnetButton";

const Stack = styled(BaseStack)`
  ${({ theme }) => `
    transition: background ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard};
  `}
`;

const Button = styled(BaseButton)(({ theme }) => ({
  "&:hover .MuiTypography-root": {
    color: theme.palette.text.textDynamicIsland.main,
  },
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

function FloatingSocials({ Typography, Chip }) {
  const screenSize = useScreenSize();
  const theme = useTheme();
  const [hoveredButton, setHoveredButton] = useState("");

  const IconButton = styled(BaseIconButton)(({ theme }) => ({
    backgroundColor: "transparent",
    color:
      hoveredButton !== ""
        ? theme.palette.text.textPrimary.dark
        : theme.palette.text.textPrimary.dark,
    "&:hover": {
      color: theme.palette.button.fillAccent,
      backgroundColor: "transparent",
    },
  }));

  return (
    <Stack
      direction={{ xs: "column", xl: "row" }}
      justifyContent="space-between"
      spacing={0}
      sx={(theme) => ({
        position: "fixed",
        top: "91vh",
        left: 140,
        right: "auto",

        [theme.breakpoints.down("xl")]: {
          top: "60vh",
          left: "auto",
          right: 15,
        },

        borderRadius: 2,
        zIndex: 999,
      })}
    >
      <Tooltip title="GitHub" placement="bottom">
        <span>
          <MagnetButton>
            <IconButton
              aria-label="GitHub"
              size="small"
              component="a"
              href="https://github.com/hans-salangsang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </MagnetButton>
        </span>
      </Tooltip>

      <Tooltip title="LinkedIn" placement="bottom">
        <span>
          <MagnetButton>
            <IconButton
              aria-label="LinkedIn"
              size="small"
              component="a"
              href="https://www.linkedin.com/in/hans-wilhelm-salangsang/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
          </MagnetButton>
        </span>
      </Tooltip>

      <Tooltip title="Email" placement="bottom">
        <span>
          <MagnetButton>
            <IconButton
              aria-label="Email"
              size="small"
              component="a"
              href="mailto:hans.salangsang@gmail.com"
              // href="https://mail.google.com/mail/?view=cm&fs=1&to=hans.salangsang@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon />
            </IconButton>
          </MagnetButton>
        </span>
      </Tooltip>
    </Stack>
  );
}

export default FloatingSocials;
