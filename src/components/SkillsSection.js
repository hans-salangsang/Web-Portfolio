import React, { forwardRef } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useScreenSize } from "../ScreenContext";
import ScrollRevealAnimation from "./ScrollRevealAnimation";
import Skill from "./Skill";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "devicon/devicon.min.css";
import { SiDotnet } from "react-icons/si";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";
import tinycolor from "tinycolor2";
import AbstractGradientBackground from "./AbstractGradientBackground";
import { useAnimate, useInView, stagger, motion } from "framer-motion";

function SkillsSection({ Typography, Chip }, ref) {
  const screenSize = useScreenSize();
  const theme = useTheme();

  const skills = {
    "Programming & Development": {
      Java: {
        icon: "devicon-java-plain colored",
        backgroundColor: "#f8981d",
        iconColor: "#000000",
        description: "Object-Oriented",
      },
      "C#": {
        icon: "devicon-csharp-plain colored",
        backgroundColor: "#862C9D",
        iconColor: "#ffffff",
        description: "Managed Code",
      },
      C: {
        icon: "devicon-c-plain colored",
        backgroundColor: "#0272C9",
        iconColor: "#ffffff",
        description: "Low-Level",
      },
      Python: {
        icon: "devicon-python-plain colored",
        backgroundColor: "#0D7AD3",
        iconColor: "#FFCE1E",
        description: "Dynamic Typing",
      },
      HTML5: {
        icon: "devicon-html5-plain colored",
        backgroundColor: "#e34f26",
        iconColor: "#ffffff",
        description: "Web Structure",
      },
      CSS3: {
        icon: "devicon-css3-plain colored",
        backgroundColor: "#1572b6",
        iconColor: "#ffffff",
        description: "Styling Web",
      },
      PHP: {
        icon: "devicon-php-plain colored",
        backgroundColor: "#6B72D4",
        iconColor: "#ffffff",
        description: "Server-Side",
      },
      JavaScript: {
        icon: "devicon-javascript-plain colored",
        backgroundColor: "#f7df1e",
        iconColor: "#000000",
        description: "Interactive Web",
      },
    },
    "Frameworks & Libraries": {
      React: {
        icon: "devicon-react-original colored",
        backgroundColor: "#20242A", // React's official background color
        iconColor: "#62DAFB", // White icon color for contrast
        description: "UI Library",
      },
      NextJS: {
        icon: "devicon-nextjs-original-wordmark colored",
        backgroundColor: "#000000", // Next.js official color
        iconColor: "#ffffff", // White icon color
        description: "React Framework",
      },
      Laravel: {
        icon: "devicon-laravel-plain colored",
        backgroundColor: "#FF2D20", // Laravel's official color
        iconColor: "#ffffff", // White icon color for contrast
        description: "PHP Framework",
      },
      Bootstrap: {
        icon: "devicon-bootstrap-plain colored",
        backgroundColor: "#8B12F5", // Bootstrap official color
        iconColor: "#ffffff", // White icon color
        description: "Responsive Design",
      },
      "Material UI": {
        icon: "devicon-materialui-plain colored",
        backgroundColor: "#0078d4", // Material UI official color
        iconColor: "#ffffff", // White icon color
        description: "UI Component",
      },
      "Tailwind CSS": {
        icon: "devicon-tailwindcss-plain colored",
        backgroundColor: "#1E1E1E", // Tailwind's official brand color
        iconColor: "#11B6C3",
        description: "Utility-first",
      },
    },

    "Databases & Backend": {
      MySQL: {
        icon: "devicon-mysql-plain colored",
        backgroundColor: "#2D8CD3", // MySQL official color
        iconColor: "#ffffff", // White icon color for contrast
        description: "Relational Database",
      },
      "Microsoft SQL Server": {
        icon: "devicon-microsoftsqlserver-plain colored",
        backgroundColor: "#CC2927", // Microsoft SQL Server official color
        iconColor: "#ffffff", // White icon color for contrast
        description: "Database Management",
      },
    },
    "Version Control & CI/CD": {
      Git: {
        icon: "devicon-git-plain colored",
        backgroundColor: "#f1502f", // Git official color
        iconColor: "#ffffff",
        description: "Code Tracking",
      },
      GitHub: {
        icon: "devicon-github-original colored",
        backgroundColor: "#181717", // GitHub official color
        iconColor: "#ffffff",
        description: "Code Hosting",
      },
      GitLab: {
        icon: "devicon-gitlab-plain colored",
        backgroundColor: "#fc6d26", // GitLab official color
        iconColor: "#ffffff",
        description: "CI/CD Tools",
      },
      Vercel: {
        icon: "devicon-vercel-plain colored",
        backgroundColor: "#000000", // Vercel brand color
        iconColor: "#ffffff",
        description: "Frontend Deploy",
      },
    },
    "Technical Consulting": {
      "Problem-Solving": {
        icon: "fas fa-lightbulb", // FontAwesome suggestion
        backgroundColor: "#FABE00", // Warm yellow
        iconColor: "#000000",
        description: "Creative Solutions",
      },
      Debugging: {
        icon: "fas fa-bug", // FontAwesome
        backgroundColor: "#FF4848", // Soft red
        iconColor: "#ffffff",
        description: "Error Fixing",
      },
      "Technical Support": {
        icon: "fas fa-headset", // FontAwesome
        backgroundColor: "#229CFF", // Light blue
        iconColor: "#ffffff",
        description: "User Assistance",
      },
      "Unit Testing": {
        icon: "fas fa-vial", // FontAwesome
        backgroundColor: "#2CB532", // Green
        iconColor: "#ffffff",
        description: "Code Validation",
      },
      Documentation: {
        icon: "fas fa-file-alt", // FontAwesome
        backgroundColor: "#953F20", // Brown-gray
        iconColor: "#ffffff",
        description: "Clear Records",
      },
      "Client Relations": {
        icon: "fas fa-handshake-simple", // FontAwesome
        backgroundColor: "#942DD4", // Purple
        iconColor: "#ffffff",
        description: "Trust Building",
      },
      Communication: {
        icon: "fas fa-globe", // FontAwesome
        backgroundColor: "#29CCE1", // Teal
        iconColor: "#000000",
        description: "Global Teamwork",
      },
    },
    "Design Tools": {
      Figma: {
        icon: "devicon-figma-plain colored",
        backgroundColor: "#1C1C1C", // Official Figma blue
        iconColor: "#ffffff",
        description: "UI/UX Design",
      },
      Photoshop: {
        icon: "devicon-photoshop-plain colored",
        backgroundColor: "#001E36", // Official Photoshop background
        iconColor: "#31A8FF", // Official Photoshop blue text/icon
        description: "Photo Editing",
      },
      Illustrator: {
        icon: "devicon-illustrator-plain colored",
        backgroundColor: "#330000", // Official Illustrator background
        iconColor: "#FF9A00", // Official Illustrator orange
        description: "Vector Graphics",
      },
      "Premiere Pro": {
        icon: "devicon-premierepro-plain colored",
        backgroundColor: "#2A003F", // Official Premiere background
        iconColor: "#9999FF", // Official Premiere lavender
        description: "Video Editing",
      },
    },
  };

  return (
    <Container
      maxWidth={screenSize === "xl" ? "xl" : "lg"}
      sx={{ position: "relative" }}
    >
      {/* <Grid ref={ref} container sx={{ minHeight: "100vh" }}> */}
      {/* <AbstractGradientBackground /> */}
      <Grid ref={ref} container sx={{ pt: 15 }}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <ScrollRevealAnimation spring={true} reveal={true} zIndex={2}>
              <Typography
                variant="h3"
                color="text.textPrimary.light"
                // textAlign="center"
              >
                Skills
              </Typography>
            </ScrollRevealAnimation>
          </Grid>

          <Grid container item spacing={1} xs={12} lg={12}>
            <Grid container item spacing={1} xs={12} md={8}>
              {Object.entries(skills).map(([category, skillList], index) => {
                if (index !== 0) return null; // If it's not the third item, return null (skip it)

                return (
                  <Skill
                    key={category}
                    category={category}
                    skillList={skillList}
                    width={12}
                    height={0}
                    columnWidthXs={12}
                    columnWidthSm={6}
                    columnWidthMd={6}
                    index={index}
                  />
                );
              })}
              {Object.entries(skills).map(([category, skillList], index) => {
                if (index !== 3) return null; // If it's not the third item, return null (skip it)

                return (
                  <Skill
                    key={category}
                    category={category}
                    skillList={skillList}
                    width={6}
                    height={0}
                    columnWidthXs={12}
                    columnWidthSm={6}
                    columnWidthMd={12}
                    index={index}
                  />
                );
              })}
              {Object.entries(skills).map(([category, skillList], index) => {
                if (index !== 5) return null; // If it's not the third item, return null (skip it)

                return (
                  <Skill
                    key={category}
                    category={category}
                    skillList={skillList}
                    width={6}
                    height={0}
                    columnWidthXs={12}
                    columnWidthSm={6}
                    columnWidthMd={12}
                    index={index}
                  />
                );
              })}
            </Grid>

            <Grid container item spacing={1} xs={12} md={4}>
              {Object.entries(skills).map(([category, skillList], index) => {
                if (index !== 2) return null; // If it's not the third item, return null (skip it)

                return (
                  <Skill
                    key={category}
                    category={category}
                    skillList={skillList}
                    width={12}
                    height={0}
                    columnWidthXs={12}
                    columnWidthSm={6}
                    columnWidthMd={12}
                    index={index}
                  />
                );
              })}
              {Object.entries(skills).map(([category, skillList], index) => {
                if (index !== 1) return null; // If it's not the third item, return null (skip it)

                return (
                  <Skill
                    key={category}
                    category={category}
                    skillList={skillList}
                    width={12}
                    height={0}
                    columnWidthXs={12}
                    columnWidthSm={6}
                    columnWidthMd={12}
                    index={index}
                  />
                );
              })}
            </Grid>

            <Grid container item spacing={1} xs={12}>
              {Object.entries(skills).map(([category, skillList], index) => {
                if (index !== 4) return null; // If it's not the third item, return null (skip it)

                return (
                  <Skill
                    key={category}
                    category={category}
                    skillList={skillList}
                    width={12}
                    height={0}
                    columnWidthXs={12}
                    columnWidthSm={6}
                    columnWidthMd={4}
                    index={index}
                  />
                );
              })}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ display: { xs: "none", md: "block" } }}
          ></Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default forwardRef(SkillsSection);
