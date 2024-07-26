import React, { useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

function ScrollRevealAnimation({ children, delay, spring, reveal, zIndex }) {
  const { scrollY } = useScroll();
  const scrollVelocity = useSpring(useVelocity(scrollY), {
    damping: 40,
    stiffness: 200,
  });

  const inputRange = [-1000, 1000];
  const outputRangeDown = [0, -50];
  const outputRangeUp = [0, 50];

  const y = useTransform(
    scrollVelocity,
    inputRange,
    scrollVelocity.current >= -100000 ? outputRangeDown : outputRangeUp
  );

  return (
    <motion.div
      initial={reveal && { opacity: 0, scale: 0.3, filter: "blur(20px)" }}
      whileInView={reveal && { opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={reveal && { once: true, amount: 0.9 }}
      style={{ ...(spring && { y }), zIndex: zIndex }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollRevealAnimation;
