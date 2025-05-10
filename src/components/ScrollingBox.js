import { Box } from "@mui/material";
import { motion } from "framer-motion";

const ScrollingBox = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap", // Ensure no wrapping, content stays in a single row
        mt: 5,
        gap: 1, // both row and column gap
        position: "relative",
        width: "100%",
        overflowX: "scroll",
        overflow: "hidden", // Hide content that overflows the container
        whiteSpace: "nowrap", // Prevent wrapping of text or items
        height: "5rem", // Set the height to match your design
      }}
    >
      {children}
      {children}
      {children}
      {children}
      {children}
    </Box>
  );
};

export default ScrollingBox;
