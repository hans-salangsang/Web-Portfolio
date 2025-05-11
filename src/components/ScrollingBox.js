import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";

const ScrollingBox = ({ children }) => {
  const containerRef = useRef(null);

  return (
    <Box
      sx={{
        position: "relative",
        width: "40%", // Set width to 40%
        margin: "0 auto", // Center the Box
        height: "5rem",
        mt: 3,
      }}
    >
      <Box
        sx={(theme) => ({
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "2rem",
          background: `linear-gradient(to right, ${theme.palette.background.default}, transparent)`,
          pointerEvents: "none",
          zIndex: 1,
        })}
      />
      <Box
        sx={(theme) => ({
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "2rem",
          background: `linear-gradient(to left, ${theme.palette.background.default}, transparent)`,
          pointerEvents: "none",
          zIndex: 1,
        })}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: 1,
          overflow: "hidden",
          whiteSpace: "nowrap",
          height: "5rem",
          position: "relative",
        }}
      >
        <motion.div
          style={{ display: "flex", gap: "0.5rem" }}
          animate={{ x: [110, -1000] }} // Adjust first argument to create seamless loop
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {children}
          {children}
          {children}
          {children}
          {children}
          {children}
          {children}
          {children}
          {children}
        </motion.div>
      </Box>
    </Box>
  );
};

export default ScrollingBox;
