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
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';
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
  const connectSectionRef = useRef(null);

  const [activeSection, setActiveSection] = useState('landing');

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

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

  useEffect(() => {
    const handleScroll = () => {
      const landingSectionRect = landingSectionRef.current.getBoundingClientRect();
      const experienceSectionRect = experienceSectionRef.current.getBoundingClientRect();
      const projectsSectionRect = projectsSectionRef.current.getBoundingClientRect();
      const connectSectionRect = connectSectionRef.current.getBoundingClientRect();

      const isInView = (rect) => {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const topThreshold = -0.2;
        const bottomThreshold = 1.2;

        let view = false;

        if(isXs || isSm) {
          view = rect.top >= -0.8 * windowHeight &&
          rect.top <= 0.2 * windowHeight
        }
        else {
          view = rect.top >= topThreshold * windowHeight &&
          rect.bottom <= bottomThreshold * windowHeight
        }
      
        return (
          view
        );
      };
      
      if (isInView(landingSectionRect)) {
        setActiveSection('landing');
      } else if (isInView(experienceSectionRect)) {
        setActiveSection('experience');
      } else if (isInView(projectsSectionRect)) {
        setActiveSection('projects');
      } else if (isInView(connectSectionRect)) {
        setActiveSection('connect');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <ScreenProvider screenSize={screenSize}>
        <AppNavBar Typography={Typography} setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} scrollToSection={scrollToSection} landingSectionRef={landingSectionRef} experienceSectionRef={experienceSectionRef} projectsSectionRef={projectsSectionRef} connectSectionRef={connectSectionRef} activeSection={activeSection} />
        <ScrollProgressIndicator Typography={Typography} Chip={Chip} setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} scrollToSection={scrollToSection} landingSectionRef={landingSectionRef} experienceSectionRef={experienceSectionRef} projectsSectionRef={projectsSectionRef} connectSectionRef={connectSectionRef} activeSection={activeSection} />  
        
        <Container sx={{ minWidth: "100%" }}>
          <LandingSection ref={landingSectionRef} Typography={Typography} />
        </Container>   

        <Container sx={{ minWidth: "100%" }}>
          <ExperienceSection ref={experienceSectionRef} Typography={Typography} Chip={Chip} />
        </Container> 
        
        <Container sx={{ minWidth: "100%" }}>
          <ProjectsSection ref={projectsSectionRef} Typography={Typography} Chip={Chip} />  
        </Container> 

        <Container sx={{ background: theme.palette.background.contrast, minWidth: "100%" }}>
          <ConnectSection ref={connectSectionRef} Typography={Typography} Chip={Chip} />       
        </Container>   

        <Container sx={{ background: theme.palette.background.footer, minWidth: "100%" }}>
          <Footer Typography={Typography} Chip={Chip} />       
        </Container>
      </ScreenProvider>
    </ThemeProvider>
  );
}

export default App;
