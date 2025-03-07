import React, { forwardRef } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useScreenSize } from "../ScreenContext";
import ScrollRevealAnimation from "./ScrollRevealAnimation";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "devicon/devicon.min.css";
import { SiDotnet } from "react-icons/si";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";
import tinycolor from "tinycolor2";
import AbstractGradientBackground from "./AbstractGradientBackground";

function SkillsSection({ Typography, Chip }, ref) {
  const screenSize = useScreenSize();
  const theme = useTheme();

  const skills = {
    "Programming & Development": {
      Java: "devicon-java-plain",
      "C#": "devicon-csharp-plain",
      C: "devicon-c-plain",
      Python: "devicon-python-plain",
      COBOL: "",
      HTML5: "devicon-html5-plain",
      CSS3: "devicon-css3-plain",
      PHP: "devicon-php-plain",
      JavaScript: "devicon-javascript-plain",
    },
    "Frameworks & Libraries": {
      ".NET": SiDotnet,
      React: "devicon-react-original",
      Laravel: "devicon-laravel-plain",
      Bootstrap: "devicon-bootstrap-plain",
      "Material UI": "devicon-materialui-plain",
    },
    "Databases & Backend": {
      MySQL: "devicon-mysql-plain",
      "Microsoft SQL Server": "devicon-microsoftsqlserver-plain",
    },
    "Version Control & CI/CD": {
      Git: "devicon-git-plain",
      GitHub: "devicon-github-original",
      GitLab: "devicon-gitlab-plain",
      Vercel: "devicon-vercel-plain",
    },
    Consulting: {
      "Problem-Solving": "",
      Debugging: "",
      "Technical Support": "",
      "Unit Testing": "",
      Documentation: "",
      "Client Relations": "",
      "Cross-Cultural Communication": "",
    },
    "Design Tools": {
      Figma: "devicon-figma-plain",
      Photoshop: "devicon-photoshop-plain",
      Illustrator: "devicon-illustrator-plain",
      "Premiere Pro": "devicon-premierepro-plain",
    },
  };

  return (
    <Container
      maxWidth={screenSize === "xl" ? "xl" : "lg"}
      sx={{ position: "relative" }}
    >
      {/* <Grid ref={ref} container sx={{ minHeight: "100vh" }}> */}
      <AbstractGradientBackground />
      <Grid ref={ref} container sx={{ pt: 15 }}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <ScrollRevealAnimation spring={true} reveal={true} zIndex={2}>
              <Typography
                variant="h3"
                color="text.textPrimary.light"
                textAlign="center"
              >
                My Skills
              </Typography>
            </ScrollRevealAnimation>
          </Grid>
          <Grid container item spacing={1} xs={12} lg={6}>
            {Object.entries(skills).map(([category, skillList]) => (
              <>
                <Grid item xs={12} sx={{ mt: 3 }}>
                  <ScrollRevealAnimation spring={true} reveal={true}>
                    <Typography
                      variant="h4"
                      color="text.textPrimary.light"
                      fontWeight={700}
                      textAlign="left"
                    >
                      {category}
                    </Typography>
                  </ScrollRevealAnimation>
                </Grid>

                <Grid item xs={12}>
                  <ScrollRevealAnimation spring={true} reveal={true}>
                    <Grid container xs={12}>
                      {Object.entries(skillList).map(
                        ([skill, classNameOrIcon], index) => (
                          <Grid
                            container
                            item
                            xs={6}
                            sm={4}
                            key={index}
                            sx={{
                              mb: 0.5,
                              transition: "color 0.3s ease-in-out",
                              "&:hover .hover-effect": {
                                color: "text.textPrimary.light",
                              },
                            }}
                          >
                            <Grid item xs={1}>
                              <ChevronRightIcon
                                className="hover-effect"
                                sx={{
                                  fontSize: 14,
                                  color: "text.textPrimary.main",
                                }}
                              />
                            </Grid>
                            <Grid item xs={11} sx={{ pl: 1 }}>
                              <Typography
                                className="hover-effect"
                                variant="body1"
                                color="text.textPrimary.main"
                                fontWeight={400}
                              >
                                {skill}
                              </Typography>
                            </Grid>
                          </Grid>
                        )
                      )}
                    </Grid>
                  </ScrollRevealAnimation>
                </Grid>
              </>
            ))}
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
