import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useRef } from "react";
import tinycolor from "tinycolor2";

const generateGradient = (theme) => {
  const color1 = tinycolor(theme.palette.background.default).isDark()
    ? tinycolor(theme.palette.text.textSecondary.main)
        .saturate(40)
        .spin(140)
        .toString()
    : tinycolor(theme.palette.text.textSecondary.main)
        .lighten(100)
        .saturate(100)
        .spin(140)
        .toString();
  const color2 = tinycolor(theme.palette.background.default).isDark()
    ? tinycolor(theme.palette.text.textSecondary.main)
        .saturate(0)
        .spin(0)
        .toString()
    : tinycolor(theme.palette.text.textSecondary.main)
        .lighten(100)
        .saturate(100)
        .spin(0)
        .toString();

  const spots = [
    {
      x: Math.random() * 80 + 10, // Keep x within 10% - 90%
      y: Math.random() * 80 + 10, // Keep y within 10% - 90%
      size: Math.random() * 20 + 45, // Keep size between 40% - 60%
      color: color1,
    },
    {
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      size: Math.random() * 20 + 45,
      color: color2,
    },
    {
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      size: Math.random() * 20 + 45,
      color: Math.random() > 0.5 ? color1 : color2,
    },
  ];

  return spots
    .map(
      (spot) =>
        `radial-gradient(closest-side at ${spot.x}% ${spot.y}%, ${spot.color}, transparent ${spot.size}%)`
    )
    .join(",");
};

const AbstractGradientBackground = () => {
  const theme = useTheme();
  const [background, setBackground] = useState("");
  const prevThemeRef = useRef(JSON.stringify(theme)); // Store theme as a string

  useEffect(() => {
    const currentThemeString = JSON.stringify(theme);

    if (prevThemeRef.current !== currentThemeString) {
      setBackground(generateGradient(theme)); // Update state to trigger re-render
      prevThemeRef.current = currentThemeString;
    }
  }, [theme]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background,
        filter: "blur(220px)",
      }}
    />
  );
};

export default AbstractGradientBackground;
