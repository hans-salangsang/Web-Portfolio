import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import BaseButton from "@mui/material/Button";
import BaseIconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { motion } from "framer-motion";
import { useScreenSize } from "../ScreenContext";
import Tooltip from "./CustomTooltip";

const IconButton = styled(BaseIconButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.defaultSubtleAccent,
  backdropFilter: "blur(12px)",
  color: theme.palette.text.textDynamicIsland.dark,
  "&:hover": {
    color: theme.palette.background.default,
    backgroundColor: theme.palette.text.textDynamicIsland.dark,
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
        <motion.div
          whileHover={{ scale: 1.2, y: -4, transition: { duration: 0.1 } }}
          whileTap={{ scale: 0.9, y: -2, transition: { duration: 0.1 } }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <IconButton
            aria-label="Back to Top"
            size="small"
            onClick={() => scrollToSection(landingSectionRef)}
          >
            <KeyboardDoubleArrowUpIcon />
          </IconButton>
        </motion.div>
      </Tooltip>
    </Stack>
  );
}

export default BackToTop;
