import { useState, useRef, useEffect } from 'react'; // Import useState hook
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/system/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ScreenProvider } from './ScreenContext';
import AppNavBar from './components/AppNavBar';
import LandingSection from './components/LandingSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import { lightTheme, darkTheme } from './theme';
import { styled } from '@mui/material/styles';
import BaseTypography from '@mui/material/Typography';
import BaseChip from '@mui/material/Chip';
import GlobalStyles from '@mui/material/GlobalStyles';
import './Scrollbar.css';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';

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

  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const landingSectionRect = landingSectionRef.current.getBoundingClientRect();
      const experienceSectionRect = experienceSectionRef.current.getBoundingClientRect();
      const projectsSectionRect = projectsSectionRef.current.getBoundingClientRect();

      const isInView = (rect) => {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const topThreshold = -0.5; // 50% from the top of the viewport
        const bottomThreshold = 1.7; // 125% from the top of the viewport
      
        return (
          rect.top >= topThreshold * windowHeight &&
          rect.bottom <= bottomThreshold * windowHeight
        );
      };
      
      if (isInView(landingSectionRect)) {
        setActiveSection('landing');
      } else if (isInView(experienceSectionRect)) {
        setActiveSection('experience');
      } else if (isInView(projectsSectionRect)) {
        setActiveSection('projects');
      } else {
        setActiveSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Use state to manage the current theme
  const [isDarkMode, setIsDarkMode] = useState(true);

  let theme = createTheme(isDarkMode ? darkTheme : lightTheme);

  // Use MediaQuery to determine screen size
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLg = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));
  
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { 
            backgroundColor: theme.palette.background.default,
            transition: `background-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard}`,
          }
        }}
      />
      <Container maxWidth="lg">
        <ScreenProvider screenSize={screenSize}>
          <AppNavBar Typography={Typography} setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} scrollToSection={scrollToSection} landingSectionRef={landingSectionRef} experienceSectionRef={experienceSectionRef} projectsSectionRef={projectsSectionRef} activeSection={activeSection} />
          <ScrollProgressIndicator Typography={Typography} Chip={Chip} setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} scrollToSection={scrollToSection} landingSectionRef={landingSectionRef} experienceSectionRef={experienceSectionRef} projectsSectionRef={projectsSectionRef} activeSection={activeSection} />     
          <LandingSection ref={landingSectionRef} Typography={Typography} />
          <ExperienceSection ref={experienceSectionRef} Typography={Typography} Chip={Chip} />
          <ProjectsSection ref={projectsSectionRef} Typography={Typography} Chip={Chip} />     
        </ScreenProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
