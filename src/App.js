import { useState, useRef, useEffect } from "react"; // Import useState hook
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/system/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ScreenProvider } from "./ScreenContext";
import AppNavBar from "./components/AppNavBar";
import BottomAppNavBar from "./components/BottomAppNavBar";
import LandingSection from "./components/LandingSection";
import AboutMeSection from "./components/AboutMeSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";
import { lightTheme, darkTheme } from "./theme";
import { styled } from "@mui/material/styles";
import BaseTypography from "@mui/material/Typography";
import BaseChip from "@mui/material/Chip";
import GlobalStyles from "@mui/material/GlobalStyles";
import "./Scrollbar.css";
import ScrollProgressIndicator from "./components/ScrollProgressIndicator";
import BackToTop from "./components/BackToTop";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import useSmoothScroll from "./components/useSmoothScroll";
import { ToastContainer } from "react-toastify";
import Box from "@mui/material/Box";
import ScrollRevealAnimation from "./components/ScrollRevealAnimation";
import Spline from "@splinetool/react-spline";
import tinycolor from "tinycolor2";
import Grid from "@mui/material/Grid";
import "./App.css";

const Typography = styled(BaseTypography)`
  ${({ theme }) => `
    transition: color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard};
  `}
`;

const Chip = styled(BaseChip)`
  ${({ theme }) => `
    transition: 
      color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard}, 
      background-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard};
  `}
`;

function App() {
  const landingSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const connectSectionRef = useRef(null);

  const [activeSection, setActiveSection] = useState("landing");

  const [accentColor, setAccentColor] = useState("#7549ff");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [darkBackgroundColor, setDarkBackgroundColor] = useState("");
  const [lightBackgroundColor, setLightBackgroundColor] = useState("");

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // Use state to manage the current theme
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleColorChange = (newColor, newDescription) => {
    setAccentColor(newColor);

    const newDark = tinycolor(newColor)
      .setAlpha(1)
      .desaturate(100)
      .darken(67)
      .toString();
    const newLight = tinycolor(newColor)
      .setAlpha(1)
      .desaturate(100)
      .brighten(70)
      .toString();

    setAccentColor(newColor);
    setDarkBackgroundColor(newDark);
    setLightBackgroundColor(newLight);

    setBackgroundColor(isDarkMode ? newDark : newLight);
  };

  useEffect(() => {
    handleColorChange(accentColor, "Initial color");
  }, [isDarkMode]);

  // Create theme dynamically based on the color state
  let theme = createTheme({
    ...(isDarkMode ? darkTheme : lightTheme),
    palette: {
      ...(isDarkMode ? darkTheme.palette : lightTheme.palette),
      background: {
        ...(isDarkMode
          ? darkTheme.palette.background
          : lightTheme.palette.background),
        default: backgroundColor,
      },
      text: {
        ...(isDarkMode ? darkTheme.palette.text : lightTheme.palette.text),
        textPrimary: {
          ...(isDarkMode
            ? darkTheme.palette.text.textPrimary
            : lightTheme.palette.text.textPrimary),
          light: tinycolor(backgroundColor).isDark()
            ? tinycolor(accentColor).brighten(85).toString()
            : tinycolor(accentColor).darken(85).toString(),
          main: tinycolor(backgroundColor).isDark()
            ? tinycolor(accentColor).desaturate(90).brighten(15).toString()
            : tinycolor(accentColor).desaturate(90).darken(30).toString(),
          dark: tinycolor(backgroundColor).isDark()
            ? tinycolor(accentColor).darken(85).toString()
            : tinycolor(accentColor).darken(85).toString(),
        },
        textSecondary: {
          ...(isDarkMode
            ? darkTheme.palette.text.textSecondary
            : lightTheme.palette.text.textSecondary),
          light: tinycolor(backgroundColor).isDark()
            ? tinycolor(accentColor)
                .desaturate(50)
                .brighten(10)
                .spin(140)
                .toString()
            : tinycolor(accentColor)
                .desaturate(50)
                .darken(30)
                .spin(140)
                .toString(),
          main: tinycolor(backgroundColor).isDark()
            ? tinycolor(accentColor).toString()
            : tinycolor(accentColor).toString(),
          dark: tinycolor(backgroundColor).isDark()
            ? tinycolor(accentColor).desaturate(70).brighten(0).toString()
            : tinycolor(accentColor).desaturate(70).darken(0).toString(),
        },
        textDynamicIsland: {
          ...(isDarkMode
            ? darkTheme.palette.text.textDynamicIsland
            : lightTheme.palette.text.textDynamicIsland),
          light: tinycolor(backgroundColor).isDark()
            ? tinycolor(accentColor).saturate(0).brighten(80).spin(0).toString()
            : tinycolor(accentColor)
                .saturate(100)
                .darken(80)
                .spin(0)
                .toString(),
          main: tinycolor(backgroundColor).isDark()
            ? tinycolor(accentColor).saturate(0).brighten(80).spin(0).toString()
            : tinycolor(accentColor)
                .saturate(100)
                .darken(80)
                .spin(0)
                .toString(),
          dark: tinycolor(backgroundColor).isDark()
            ? tinycolor(accentColor).saturate(0).brighten(0).spin(0).toString()
            : tinycolor(accentColor)
                .saturate(100)
                .darken(20)
                .spin(0)
                .toString(),
        },
      },
      textField: {
        fill: backgroundColor,
        fillHovered: backgroundColor,
        fillFocused: backgroundColor,
        text: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).brighten(90).toString()
          : tinycolor(accentColor).darken(90).toString(),
        label: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).desaturate(90).brighten(15).toString()
          : tinycolor(accentColor).desaturate(90).darken(15).toString(),
        labelHovered: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).brighten(90).toString()
          : tinycolor(accentColor).darken(90).toString(),
        labelFocused: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).saturate(0).brighten(20).toString()
          : tinycolor(accentColor).saturate(0).darken(20).toString(),
        helperText: "9B9EAB",
        border: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).desaturate(90).brighten(0).toString()
          : tinycolor(accentColor).desaturate(90).darken(0).toString(),
        borderHovered: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).brighten(90).toString()
          : tinycolor(accentColor).darken(90).toString(),
        borderFocused: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).saturate(0).brighten(0).toString()
          : tinycolor(accentColor).saturate(0).darken(0).toString(),
      },
      button: {
        ...(isDarkMode ? darkTheme.palette.button : lightTheme.palette.button),
        fill: backgroundColor,
        fillAccent: backgroundColor,
        fillHovered: tinycolor(backgroundColor).isDark()
          ? tinycolor(backgroundColor).saturate(0).brighten(5).toString()
          : tinycolor(backgroundColor).saturate(0).darken(5).toString(),
        fillHoveredAccent: backgroundColor,
        fillFocused: "#E9E9ED",
        text: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).saturate(0).brighten(0).toString()
          : tinycolor(accentColor).saturate(0).darken(0).toString(),
        textAccent: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).saturate(0).brighten(0).toString()
          : tinycolor(accentColor).saturate().darken(0).toString(),
        textHovered: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).saturate(0).brighten(90).toString()
          : tinycolor(accentColor).saturate(0).darken(90).toString(),
        textHoveredAccent: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).saturate(0).brighten(90).toString()
          : tinycolor(accentColor).saturate(0).darken(90).toString(),
        label: "#42566E",
        labelFocused: "#6093D6",
        border: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).saturate(0).brighten(0).toString()
          : tinycolor(accentColor).saturate(0).darken(0).toString(),
        borderHovered: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).saturate(0).brighten(0).toString()
          : tinycolor(accentColor).saturate(0).darken(0).toString(),
        borderFocused: "#6093D6",
      },
    },
  });

  // Use MediaQuery to determine screen size
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  let screenSize = "";

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  if (isXs) {
    screenSize = "xs";
  } else if (isSm) {
    screenSize = "sm";
  } else if (isMd) {
    screenSize = "md";
  } else if (isLg) {
    screenSize = "lg";
  } else if (isXl) {
    screenSize = "xl";
  } else {
    screenSize = "unknown";
  }

  useEffect(() => {
    const isInView = (rect) => {
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const sectionHeight = rect.bottom - rect.top;

      return visibleHeight / sectionHeight > 0.7;
    };

    const handleScroll = () => {
      if (
        !skillsSectionRef.current ||
        !experienceSectionRef.current ||
        // !projectsSectionRef.current ||
        !connectSectionRef.current
      ) {
        return;
      }

      const sections = isLargeScreen
        ? [
            { ref: skillsSectionRef, name: "skills" },
            { ref: experienceSectionRef, name: "experience" },
            // { ref: projectsSectionRef, name: "projects" },
            { ref: connectSectionRef, name: "connect" },
          ]
        : [
            { ref: landingSectionRef, name: "landing" },
            { ref: skillsSectionRef, name: "skills" },
            { ref: experienceSectionRef, name: "experience" },
            // { ref: projectsSectionRef, name: "projects" },
            { ref: connectSectionRef, name: "connect" },
          ];

      let foundSection = false;

      for (let section of sections) {
        if (isInView(section.ref.current.getBoundingClientRect())) {
          setActiveSection(section.name);
          foundSection = true;
          break;
        }
      }

      // If lg and no section is active, default to "landing"
      if (!foundSection && isLargeScreen) {
        setActiveSection("landing");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveSection]);

  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              backgroundColor: theme.palette.background.default,
              transition: `background-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard}`,
              // cursor: `url(${process.env.PUBLIC_URL}/custom_cursor.svg), auto`,
            },
            "::selection": {
              backgroundColor: "#ABBFD8",
              color: "#101218",
            },
          }}
        />
        <ScreenProvider screenSize={screenSize}>
          <ToastContainer />
          <Container sx={{ minWidth: "100%" }}>
            <AppNavBar
              Typography={Typography}
              setIsDarkMode={setIsDarkMode}
              isDarkMode={isDarkMode}
              scrollToSection={scrollToSection}
              landingSectionRef={landingSectionRef}
              skillsSectionRef={skillsSectionRef}
              experienceSectionRef={experienceSectionRef}
              projectsSectionRef={projectsSectionRef}
              connectSectionRef={connectSectionRef}
              activeSection={activeSection}
            />
          </Container>
          {screenSize === "xs" && (
            <BottomAppNavBar
              Typography={Typography}
              setIsDarkMode={setIsDarkMode}
              isDarkMode={isDarkMode}
              scrollToSection={scrollToSection}
              landingSectionRef={landingSectionRef}
              skillsSectionRef={skillsSectionRef}
              experienceSectionRef={experienceSectionRef}
              projectsSectionRef={projectsSectionRef}
              connectSectionRef={connectSectionRef}
              activeSection={activeSection}
            />
          )}

          {/* <ScrollProgressIndicator
            Typography={Typography}
            Chip={Chip}
            scrollToSection={scrollToSection}
            landingSectionRef={landingSectionRef}
            skillsSectionRef={skillsSectionRef}
            experienceSectionRef={experienceSectionRef}
            projectsSectionRef={projectsSectionRef}
            connectSectionRef={connectSectionRef}
            activeSection={activeSection}
          /> */}
          <BackToTop
            Typography={Typography}
            Chip={Chip}
            scrollToSection={scrollToSection}
            landingSectionRef={landingSectionRef}
          />

          <script
            type="module"
            src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"
          ></script>
          <spline-viewer
            url="https://prod.spline.design/FVZWbQH2B6ndj9UU/scene.splinecode"
            events-target="global"
          ></spline-viewer>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "0%",
              width: "100%",
              height: "100%",
              zIndex: -1,
              pointerEvents: "auto",
            }}
          >
            {/* keyboard */}
            {/* <Spline scene="https://prod.spline.design/gqzHKulT7OQ4j813/scene.splinecode" /> */}
            <Spline scene="https://prod.spline.design/NhsgbKrO1ru5ZQ8l/scene.splinecode" />
          </Box>

          <Container maxWidth="lg">
            <Grid container>
              <Grid
                item
                xs={12}
                // sx={{
                //   position: { lg: "sticky", xs: "relative" },
                //   top: 0,
                //   height: { lg: "100vh", xs: "auto" },
                //   overflow: { lg: "hidden", xs: "visible" },
                //   pt: { lg: theme.spacing(30), xs: theme.spacing(20) },
                // }}
                sx={{
                  pt: { lg: "30vh", xs: "30vh" },
                }}
              >
                <LandingSection
                  ref={landingSectionRef}
                  Typography={Typography}
                  onColorChange={handleColorChange}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sx={{
                  pt: { lg: theme.spacing(20), xs: theme.spacing(0) },
                }}
              >
                <AboutMeSection Typography={Typography} Chip={Chip} />

                <SkillsSection
                  ref={skillsSectionRef}
                  Typography={Typography}
                  Chip={Chip}
                />

                <ExperienceSection
                  ref={experienceSectionRef}
                  Typography={Typography}
                  Chip={Chip}
                />

                {/* <ProjectsSection
                  ref={projectsSectionRef}
                  Typography={Typography}
                  Chip={Chip}
                /> */}
                {/* 
                <Box
                  sx={{
                    minWidth: "100%",
                  }}
                > */}
                <ConnectSection
                  ref={connectSectionRef}
                  Typography={Typography}
                  Chip={Chip}
                />
                {/* </Box> */}
                <Footer Typography={Typography} Chip={Chip} />
              </Grid>
            </Grid>
          </Container>
        </ScreenProvider>
      </ThemeProvider>
    </ParallaxProvider>
  );
}

export default App;
