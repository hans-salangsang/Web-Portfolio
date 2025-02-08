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
      initial={reveal && { opacity: 0 }}
      whileInView={reveal && { opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: delay || 0 }}
      viewport={reveal && { once: true, amount: 0.9 }}
      style={{ zIndex }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollRevealAnimation;
