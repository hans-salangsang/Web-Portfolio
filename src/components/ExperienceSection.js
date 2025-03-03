import React, { forwardRef } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useScreenSize } from "../ScreenContext";
import ScrollRevealAnimation from "./ScrollRevealAnimation";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useTheme } from "@mui/material/styles";
import tinycolor from "tinycolor2";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

function ExperienceSection({ Typography, Chip }, ref) {
  const screenSize = useScreenSize();
  const theme = useTheme();

  return (
    <Container maxWidth={screenSize === "xl" ? "xl" : "lg"}>
      <Grid ref={ref} container sx={{ pt: 15 }}>
        <Grid container item xs={12} spacing={5}>
          <Grid item xs={12} sx={{ mb: 5 }}>
            <ScrollRevealAnimation spring={true} reveal={true} zIndex={2}>
              <Typography
                variant="h3"
                color="text.textPrimary.light"
                textAlign="center"
              >
                My Experience
              </Typography>
            </ScrollRevealAnimation>
          </Grid>

          <Grid container item spacing={{ xs: 2, lg: 5 }}>
            <Grid item xs={12} lg={3}>
              <ScrollRevealAnimation spring={true} reveal={true}>
                <Typography
                  variant="h4"
                  color="text.textSecondary.main"
                  fontWeight={700}
                  sx={{
                    textAlign: { xs: "left", lg: "right" },
                    textTransform: "uppercase",
                  }}
                >
                  Infor
                </Typography>
                <Typography
                  variant="body2"
                  color="text.textPrimary.dark"
                  fontWeight={700}
                  sx={{ mt: 1.4, textAlign: { xs: "left", lg: "right" } }}
                >
                  AUG 2023 - PRESENT
                </Typography>
              </ScrollRevealAnimation>
            </Grid>

            <Grid item xs={12} lg={9}>
              <ScrollRevealAnimation spring={true} reveal={true}>
                <Typography
                  variant="h4"
                  color="text.textPrimary.light"
                  fontWeight={700}
                >
                  Technical Consultant,{" "}
                  <span style={{ fontWeight: 200 }}>Associate</span>
                </Typography>
                <Typography
                  variant="body1"
                  color="text.textPrimary.main"
                  fontWeight={400}
                  sx={{ mt: 1.2 }}
                >
                  As an Associate Technical Consultant at Infor, I assist in the
                  implementation, support, and optimization of enterprise
                  software solutions, ensuring seamless integration and
                  functionality for clients across various industries. I
                  collaborate with international clients to analyze business
                  processes, troubleshoot technical issues, and deliver tailored
                  solutions that enhance operational efficiency.
                  <br />
                  <br />
                  <span
                    style={{
                      color: theme.palette.text.textPrimary.light,
                    }}
                  >
                    My role involves:
                  </span>
                  <List>
                    {[
                      "Collaborating with business analysts and solution architects to analyze business requirements and translate them into scalable Infor ERP technical solutions, enhancing client automation, customization, and overall system efficiency.",
                      "Designing, developing, and implementing system customizations and extensions using TypeScript, Angular, and JavaScript to enhance functionality, improve user experience, and meet client-specific requirements.",
                      "Integrating enterprise applications and ensuring smooth system interoperability using dataflows, workflows, Java mapping tool in Eclipse, and APIs.",
                      "Customizing business documents and forms using XML, XPath, and StreamServe to ensure accurate data representation, improved readability, and seamless system integration.",
                      "Utilizing Jira to manage tasks, track progress, and collaborate within an Agile framework, ensuring efficient sprint planning, issue resolution, and continuous project improvement.",
                      "Communicating with global clients, providing technical support and troubleshooting software-related issues, and creating technical documentation and process guides for end users.",
                    ].map((text, index) => (
                      <ListItem key={index} alignItems="flex-start">
                        <ListItemIcon
                          sx={{
                            minWidth: "unset",
                            marginRight: 2,
                            paddingTop: 0.4,
                          }}
                        >
                          <CircleIcon
                            sx={{
                              color: theme.palette.text.textPrimary.light,
                              fontSize: "0.5rem",
                              padding: 0,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Typography>
              </ScrollRevealAnimation>

              {/* <ScrollRevealAnimation spring={true} reveal={true}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  flexWrap="wrap"
                  sx={{ pt: 2 }}
                >
                  <Chip label="Java" color="darkBlue" />
                  <Chip label="JavaScript" color="darkBlue" />
                  <Chip label="TypeScript" color="darkBlue" />
                  <Chip label="jQuery" color="darkBlue" />
                  <Chip label="XML" color="darkBlue" />
                  <Chip label="Python" color="darkBlue" />
                </Stack>
              </ScrollRevealAnimation> */}
            </Grid>
          </Grid>

          <Grid container item spacing={{ xs: 2, lg: 5 }}>
            <Grid item xs={12} lg={3}>
              <ScrollRevealAnimation spring={true} reveal={true}>
                <Typography
                  variant="h4"
                  color="text.textSecondary.main"
                  fontWeight={700}
                  sx={{
                    textAlign: { xs: "left", lg: "right" },
                    textTransform: "uppercase",
                  }}
                >
                  LexMeet, Inc.
                </Typography>
                <Typography
                  variant="body2"
                  color="text.textPrimary.dark"
                  fontWeight={700}
                  sx={{ mt: 1.4, textAlign: { xs: "left", lg: "right" } }}
                >
                  MAR 2023 - JUN 2023
                </Typography>
              </ScrollRevealAnimation>
            </Grid>

            <Grid item xs={12} lg={9}>
              <ScrollRevealAnimation spring={true} reveal={true}>
                <Typography
                  variant="h4"
                  color="text.textPrimary.light"
                  fontWeight={700}
                >
                  Web Developer, <span style={{ fontWeight: 200 }}>Intern</span>
                </Typography>
                <Typography
                  variant="body1"
                  color="text.textPrimary.main"
                  fontWeight={400}
                  sx={{ mt: 1.2 }}
                >
                  As the team leader for the development of LexTasker, LexMeet's
                  intuitive to-do app, I had the privilege of collaborating with
                  a dedicated group of interns. Together, we crafted an
                  exceptional user experience, empowering individuals to stay
                  organized and enhance productivity. This invaluable
                  opportunity not only honed my skills as a Full-Stack Web
                  Developer but also deepened my understanding of cutting-edge
                  technologies. It has been an enriching experience, showcasing
                  the power of teamwork and innovation even among interns.
                  <br />
                  <br />
                  <span
                    style={{
                      color: theme.palette.text.textPrimary.light,
                    }}
                  >
                    My role involves:
                  </span>
                  <List>
                    {[
                      "Leading the development of LexTasker, and collaborating with my fellow interns, demonstrating leadership and teamwork.",
                      "Utilizing a full-stack tech stack: ReactJS, HTML, CSS, Bootstrap, PHP Laravel, GitLab, MySQL, and Figma, enhancing my development skills, and gaining hands-on experience with modern web technologies.",
                      "Designing and developing an optimized user experience, improving organization and productivity for users.",
                    ].map((text, index) => (
                      <ListItem key={index} alignItems="flex-start">
                        <ListItemIcon
                          sx={{
                            minWidth: "unset",
                            marginRight: 2,
                            paddingTop: 0.4,
                          }}
                        >
                          <CircleIcon
                            sx={{
                              color: theme.palette.text.textPrimary.light,
                              fontSize: "0.5rem",
                              padding: 0,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Typography>
              </ScrollRevealAnimation>

              {/* <ScrollRevealAnimation spring={true} reveal={true}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  flexWrap="wrap"
                  sx={{ pt: 2 }}
                >
                  <Chip label="Java" color="darkBlue" />
                  <Chip label="JavaScript" color="darkBlue" />
                  <Chip label="TypeScript" color="darkBlue" />
                  <Chip label="jQuery" color="darkBlue" />
                  <Chip label="XML" color="darkBlue" />
                  <Chip label="Python" color="darkBlue" />
                </Stack>
              </ScrollRevealAnimation> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default forwardRef(ExperienceSection);
