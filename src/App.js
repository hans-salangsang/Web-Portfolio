import { useState, useRef, useEffect } from "react"; // Import useState hook
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/system/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ScreenProvider } from "./ScreenContext";
import AppNavBar from "./components/AppNavBar";
import BottomAppNavBar from "./components/BottomAppNavBar";
import LandingSection from "./components/LandingSection";
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
  const experienceSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const connectSectionRef = useRef(null);

  const [activeSection, setActiveSection] = useState("landing");

  const [accentColor, setAccentColor] = useState("#6093D6");
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

    const newDark = tinycolor(newColor).setAlpha(1).darken(55).toString();
    const newLight = tinycolor(newColor).setAlpha(1).brighten(55).toString();

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
            ? tinycolor(accentColor).brighten(55).toString()
            : tinycolor(accentColor).darken(55).toString(),
          main: tinycolor(backgroundColor).isDark()
            ? tinycolor(accentColor).desaturate(70).brighten(15).toString()
            : tinycolor(accentColor).desaturate(70).darken(15).toString(),
          dark: tinycolor(backgroundColor).isDark()
            ? tinycolor(accentColor)
                .saturate(0)
                .brighten(0)
                .spin(180)
                .toString()
            : tinycolor(accentColor)
                .saturate(100)
                .darken(20)
                .spin(180)
                .toString(),
        },
        textSecondary: {
          ...(isDarkMode
            ? darkTheme.palette.text.textSecondary
            : lightTheme.palette.text.textSecondary),
          main: tinycolor(backgroundColor).isDark()
            ? tinycolor(accentColor).saturate(100).brighten(10).toString()
            : tinycolor(accentColor).saturate(100).darken(10).toString(),
          dark: tinycolor(backgroundColor).isDark()
            ? tinycolor(accentColor).desaturate(70).brighten(0).toString()
            : tinycolor(accentColor).desaturate(70).darken(0).toString(),
        },
        textDynamicIsland: {
          ...(isDarkMode
            ? darkTheme.palette.text.textDynamicIsland
            : lightTheme.palette.text.textDynamicIsland),
          light: tinycolor(backgroundColor).isDark()
            ? tinycolor(accentColor)
                .saturate(0)
                .brighten(40)
                .spin(40)
                .toString()
            : tinycolor(accentColor)
                .saturate(100)
                .darken(40)
                .spin(40)
                .toString(),
          main: tinycolor(backgroundColor).isDark()
            ? tinycolor(accentColor)
                .saturate(0)
                .brighten(50)
                .spin(40)
                .toString()
            : tinycolor(accentColor)
                .saturate(100)
                .darken(60)
                .spin(40)
                .toString(),
          dark: tinycolor(backgroundColor).isDark()
            ? tinycolor(accentColor)
                .saturate(0)
                .brighten(0)
                .spin(180)
                .toString()
            : tinycolor(accentColor)
                .saturate(100)
                .darken(20)
                .spin(180)
                .toString(),
        },
      },
      textField: {
        fill: backgroundColor,
        fillHovered: backgroundColor,
        fillFocused: backgroundColor,
        text: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).brighten(55).toString()
          : tinycolor(accentColor).darken(55).toString(),
        label: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).desaturate(70).brighten(15).toString()
          : tinycolor(accentColor).desaturate(70).darken(15).toString(),
        labelHovered: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).brighten(55).toString()
          : tinycolor(accentColor).darken(55).toString(),
        labelFocused: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).saturate(100).brighten(10).toString()
          : tinycolor(accentColor).saturate(100).darken(10).toString(),
        helperText: "9B9EAB",
        border: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).desaturate(70).brighten(15).toString()
          : tinycolor(accentColor).desaturate(70).darken(15).toString(),
        borderHovered: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).brighten(55).toString()
          : tinycolor(accentColor).darken(55).toString(),
        borderFocused: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).saturate(100).brighten(10).toString()
          : tinycolor(accentColor).saturate(100).darken(10).toString(),
      },
      button: {
        ...(isDarkMode ? darkTheme.palette.button : lightTheme.palette.button),
        fill: backgroundColor,
        fillHovered: tinycolor(backgroundColor).isDark()
          ? tinycolor(backgroundColor).saturate(0).brighten(5).toString()
          : tinycolor(backgroundColor).saturate(0).darken(5).toString(),
        fillFocused: "#E9E9ED",
        text: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).saturate(100).brighten(10).toString()
          : tinycolor(accentColor).saturate(100).darken(10).toString(),
        textHovered: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).saturate(100).brighten(20).toString()
          : tinycolor(accentColor).saturate(100).darken(20).toString(),
        label: "#42566E",
        labelFocused: "#6093D6",
        border: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).saturate(100).brighten(10).toString()
          : tinycolor(accentColor).saturate(100).darken(10).toString(),
        borderHovered: tinycolor(backgroundColor).isDark()
          ? tinycolor(accentColor).saturate(100).brighten(20).toString()
          : tinycolor(accentColor).saturate(100).darken(20).toString(),
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
    const handleScroll = () => {
      const landingSectionRect =
        landingSectionRef.current.getBoundingClientRect();
      const experienceSectionRect =
        experienceSectionRef.current.getBoundingClientRect();
      const projectsSectionRect =
        projectsSectionRef.current.getBoundingClientRect();
      const connectSectionRect =
        connectSectionRef.current.getBoundingClientRect();

      const isInView = (rect) => {
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const topThreshold = -0.2;
        const bottomThreshold = 1.2;

        let view = false;

        if (isXs || isSm) {
          view =
            rect.top >= -0.8 * windowHeight && rect.top <= 0.2 * windowHeight;
        } else {
          view =
            rect.top >= topThreshold * windowHeight &&
            rect.bottom <= bottomThreshold * windowHeight;
        }

        return view;
      };

      if (isInView(landingSectionRect)) {
        setActiveSection("landing");
      } else if (isInView(experienceSectionRect)) {
        setActiveSection("experience");
      } else if (isInView(projectsSectionRect)) {
        setActiveSection("projects");
      } else if (isInView(connectSectionRect)) {
        setActiveSection("connect");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useSmoothScroll();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

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
              experienceSectionRef={experienceSectionRef}
              projectsSectionRef={projectsSectionRef}
              connectSectionRef={connectSectionRef}
              activeSection={activeSection}
            />
          )}

          <ScrollProgressIndicator
            Typography={Typography}
            Chip={Chip}
            scrollToSection={scrollToSection}
            landingSectionRef={landingSectionRef}
            experienceSectionRef={experienceSectionRef}
            projectsSectionRef={projectsSectionRef}
            connectSectionRef={connectSectionRef}
            activeSection={activeSection}
          />
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
          </Box>

          <Container maxWidth="lg">
            <Grid container>
              <Grid
                item
                xs={12}
                lg={5}
                sx={{
                  position: { lg: "sticky", xs: "relative" },
                  top: 0,
                  height: { lg: "100vh", xs: "auto" },
                  overflow: { lg: "hidden", xs: "visible" },
                  pt: { lg: theme.spacing(30), xs: theme.spacing(15) },
                }}
              >
                <LandingSection
                  ref={landingSectionRef}
                  Typography={Typography}
                  onColorChange={handleColorChange}
                />
              </Grid>

              <Grid item xs={1}></Grid>

              <Grid
                item
                xs={12}
                lg={6}
                sx={{
                  pt: theme.spacing(30),
                }}
              >
                <ExperienceSection
                  ref={experienceSectionRef}
                  Typography={Typography}
                  Chip={Chip}
                />

                <ProjectsSection
                  ref={projectsSectionRef}
                  Typography={Typography}
                  Chip={Chip}
                />

                <Box
                  sx={{
                    background: theme.palette.background.contrast,
                    minWidth: "100%",
                  }}
                >
                  <ConnectSection
                    ref={connectSectionRef}
                    Typography={Typography}
                    Chip={Chip}
                  />
                </Box>
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
