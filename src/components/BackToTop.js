import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import BaseButton from "@mui/material/Button";
import BaseIconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { motion } from "framer-motion";
import { useScreenSize } from "../ScreenContext";
import Tooltip from "./CustomTooltip";
import MagnetButton from "./MagnetButton";

const IconButton = styled(BaseIconButton)(({ theme }) => ({
  backgroundColor: theme.palette.text.textDynamicIsland.dark,
  backdropFilter: "blur(12px)",
  color: theme.palette.background.default,
  "&:hover": {
    backgroundColor: theme.palette.text.textDynamicIsland.light,
  },
}));

function BackToTop({ Typography, Chip, scrollToSection, landingSectionRef }) {
  const screenSize = useScreenSize();

  return (
    <Stack
      direction="column"
      spacing={1}
      useFlexGap
      flexWrap="wrap"
      sx={{
        position: "fixed",
        top: screenSize === "xs" ? "82vh" : "91vh",
        right: 15,
        zIndex: 999,
      }}
    >
      <Tooltip title="Back to top" placement="left">
        <span>
          <MagnetButton>
            <IconButton
              aria-label="Back to Top"
              size="small"
              onClick={() => scrollToSection(landingSectionRef)}
            >
              <KeyboardDoubleArrowUpIcon />
            </IconButton>
          </MagnetButton>
        </span>
      </Tooltip>
    </Stack>
  );
}

export default BackToTop;
