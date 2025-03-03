import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles"; // Loads full features

const BackgroundParticles = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // Important to manually size it
        background: {
          color: "red", // Keeps your main background visible
        },
        particles: {
          color: { value: ["#ff6b6b", "#4facfe", "#6a11cb"] },
          opacity: { value: 0.4 },
          size: { value: 100 },
          move: { enable: true, speed: 2 },
        },
      }}
    />
  );
};

export default BackgroundParticles;
