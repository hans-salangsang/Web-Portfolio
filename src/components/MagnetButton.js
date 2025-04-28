import { motion, useSpring } from "framer-motion";
import { useRef, useState } from "react";

const MagnetButton = ({ children, ...rest }) => {
  const buttonRef = useRef(null);
  const mouseX = useSpring(0, { stiffness: 200, damping: 15 });
  const mouseY = useSpring(0, { stiffness: 200, damping: 15 });
  const [isMouseHovering, setIsMouseHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const relativeMouseX = e.clientX - rect.left - rect.width / 2;
    const relativeMouseY = e.clientY - rect.top - rect.height / 2;

    mouseX.set(relativeMouseX * 0.2);
    mouseY.set(relativeMouseY * 0.2);
  };

  const handleMouseLeave = () => {
    setIsMouseHovering(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={buttonRef}
      style={{ x: mouseX, y: mouseY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseHovering(true)}
      onMouseLeave={handleMouseLeave}
      // {...rest}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      // className="your-button-class"
    >
      {children}
    </motion.div>
  );
};

export default MagnetButton;
