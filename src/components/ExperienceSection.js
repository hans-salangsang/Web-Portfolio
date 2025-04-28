import React, { forwardRef } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useScreenSize } from "../ScreenContext";
import ScrollRevealAnimation from "./ScrollRevealAnimation";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useTheme } from "@mui/material/styles";
import tinycolor from "tinycolor2";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import AbstractGradientBackground from "./AbstractGradientBackground";
import CollapsibleWorkDetails from "./CollapsibleWorkDetails";
import { useAnimate, useInView, stagger, motion } from "framer-motion";

function ExperienceSection({ Typography, Chip }, ref) {
  const screenSize = useScreenSize();
  const theme = useTheme();

  const experiences = {
    entries: [
      {
        company: "Infor",
        dates: "AUG 2023 - PRESENT",
        title: "Associate Technical Consultant",
        level: "Associate",
        description: `As an Associate Technical Consultant at Infor, I assist in the implementation, support...`,
        tasks: [
          "Collaborating with business analysts and solution architects to analyze business requirements and translate them into scalable Infor ERP technical solutions.",
          "Designing, developing, and implementing system customizations and extensions using TypeScript, Angular, and JavaScript.",
          "Integrating enterprise applications and ensuring smooth system interoperability using dataflows, workflows, Java mapping tool in Eclipse, and APIs.",
          "Customizing business documents and forms using XML, XPath, and StreamServe.",
          "Utilizing Jira to manage tasks, track progress, and collaborate within an Agile framework.",
          "Communicating with global clients, providing technical support and troubleshooting software-related issues.",
        ],
      },
      {
        company: "LexMeet, Inc.",
        dates: "MAR 2023 - JUN 2023",
        title: "Web Developer Intern",
        level: "Intern",
        description: `As the team leader for the development of LexTasker, LexMeet's intuitive to-do app...`,
        tasks: [
          "Leading the development of LexTasker, and collaborating with my fellow interns, demonstrating leadership and teamwork.",
          "Utilizing a full-stack tech stack: ReactJS, HTML, CSS, Bootstrap, PHP Laravel, GitLab, MySQL, and Figma, enhancing my development skills, and gaining hands-on experience with modern web technologies.",
          "Designing and developing an optimized user experience, improving organization and productivity for users.",
        ],
      },
    ],
  };

  return (
    <Container
      maxWidth={screenSize === "xl" ? "xl" : "lg"}
      sx={{ position: "relative" }}
    >
      {/* <AbstractGradientBackground /> */}
      <Grid ref={ref} container sx={{ pt: 15 }}>
        <Grid container item xs={12} spacing={5}>
          <Grid item xs={12} sx={{ mb: 5 }}>
            <ScrollRevealAnimation spring={true} reveal={true} zIndex={2}>
              <Typography
                variant="h3"
                color="text.textPrimary.light"
                // textAlign="center"
              >
                Experience
              </Typography>
            </ScrollRevealAnimation>
          </Grid>

          <Grid
            item
            xs={12}
            lg={6}
            sx={{ display: { xs: "none", md: "block" } }}
          ></Grid>

          <Grid container item xs={12} lg={12}>
            {experiences.entries.map((exp, index) => (
              <Grid
                container
                item
                key={index}
                spacing={2}
                sx={{
                  position: "relative",
                  mb: 5,
                  pl: 5, // Push content to make space for the dot and line
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 15,
                    top: 25,
                    bottom: -55,
                    width:
                      index === experiences.entries.length - 1 ? "0px" : "1px",
                    backgroundColor: theme.palette.text.textSecondary.main,
                  },
                }}
              >
                {/* Timeline Dot */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 9,
                    top: 23,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.text.textSecondary.main,
                    zIndex: 1,
                  }}
                />

                {/* Content */}
                <Grid item xs={12} lg={12} sx={{ mb: -2 }}>
                  <ScrollRevealAnimation spring={true} reveal={true}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="text.textPrimary.dark"
                        fontWeight={400}
                      >
                        {exp.dates}
                      </Typography>
                    </Box>
                  </ScrollRevealAnimation>
                </Grid>

                <Grid item xs={12} lg={12}>
                  <ScrollRevealAnimation spring={true} reveal={true}>
                    {/* <Typography
                      variant="h4"
                      color="text.textPrimary.light"
                      fontWeight={700}
                    >
                      {exp.title}{" "}
                      <span
                        style={{
                          fontFamily: "Playfair Display",
                          fontStyle: "italic",
                          color: theme.palette.text.textPrimary.main,
                        }}
                      >
                        — {exp.company}
                      </span>
                    </Typography> */}
                    <CollapsibleWorkDetails
                      tasks={exp.tasks}
                      title={exp.title}
                      company={exp.company}
                    />
                    <Box
                      sx={{
                        pt: 4,
                        borderBottom: "1px solid",
                        borderColor:
                          theme.palette.background.defaultSubtleAccentAccent,
                      }}
                    ></Box>
                  </ScrollRevealAnimation>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default forwardRef(ExperienceSection);
