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
import FloatingSocials from "./components/FloatingSocials";
import BackToTop from "./components/BackToTop";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import useSmoothScroll from "./components/useSmoothScroll";
import { ToastContainer } from "react-toastify";
import Box from "@mui/material/Box";
import ScrollRevealAnimation from "./components/ScrollRevealAnimation";
import Spline from "@splinetool/react-spline";

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

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // Use state to manage the current theme
  const [isDarkMode, setIsDarkMode] = useState(true);

  let theme = createTheme(isDarkMode ? darkTheme : lightTheme);

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

  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              backgroundColor: theme.palette.background.default,
              transition: `background-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard}`,
              cursor: `url(${process.env.PUBLIC_URL}/custom_cursor.svg), auto`,
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
          <FloatingSocials Typography={Typography} />

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
              position: "fixed",
              top: 0,
              left: "0%",
              width: "100%",
              height: "100%",
              zIndex: 0,
              pointerEvents: "auto",
            }}
          >
            <ScrollRevealAnimation spring={true} reveal={true} zIndex={2}>
              <Spline scene="https://prod.spline.design/vem2yBgnwn-vr0UR/scene.splinecode" />
            </ScrollRevealAnimation>
          </Box>

          <Container>
            <LandingSection ref={landingSectionRef} Typography={Typography} />
          </Container>

          <Container>
            <ExperienceSection
              ref={experienceSectionRef}
              Typography={Typography}
              Chip={Chip}
            />
          </Container>

          <Container>
            <ProjectsSection
              ref={projectsSectionRef}
              Typography={Typography}
              Chip={Chip}
            />
          </Container>

          <Box
            sx={{
              background: theme.palette.background.contrast,
              minWidth: "100%",
            }}
          >
            <Container
              sx={{
                background: theme.palette.background.contrast,
              }}
            >
              <ConnectSection
                ref={connectSectionRef}
                Typography={Typography}
                Chip={Chip}
              />
            </Container>
          </Box>

          <Container
            sx={{
              background: theme.palette.background.footer,
              minWidth: "100%",
            }}
          >
            <Footer Typography={Typography} Chip={Chip} />
          </Container>
        </ScreenProvider>
      </ThemeProvider>
    </ParallaxProvider>
  );
}

export default App;
