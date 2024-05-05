import React, { useEffect } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

function ScrollRevealAnimation({ children, delay }) {
  const { scrollY } = useScroll();
  const scrollVelocity = useSpring(useVelocity(scrollY), {
    damping: 15,
    stiffness: 200,
  });

  const inputRange = [-1000, 1000];
  const outputRangeDown = [-5, -50];
  const outputRangeUp = [5, 50];

  const y = useTransform(scrollVelocity, inputRange, scrollVelocity.current >= -10000 ? outputRangeDown : outputRangeUp);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.9 }}
      style = {{ y }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollRevealAnimation;
