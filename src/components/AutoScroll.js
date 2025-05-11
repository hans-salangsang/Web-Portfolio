import React from "react";
import { motion } from "framer-motion";

const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

const AutoScroll = () => {
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%" }}>
      <motion.div
        style={{ display: "flex", minWidth: "max-content" }}
        animate={{ x: ["0%", "-50%"] }} // Moves halfway, then repeats seamlessly
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {/* Duplicate the list to ensure seamless looping */}
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            style={{ padding: "10px", background: "#f0f0f0", margin: "0 10px" }}
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AutoScroll;
