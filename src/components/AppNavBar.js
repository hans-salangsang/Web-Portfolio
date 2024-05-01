import React from 'react';
import { Grid, AppBar, Stack } from '@mui/material';
import Clock from './Clock';
import DynamicIsland from './DynamicIsland';
import { useScreenSize } from '../ScreenContext';
import Zoom from '@mui/material/Zoom';
import BaseLightModeIcon from '@mui/icons-material/LightMode';
import BaseDarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

const LightModeIcon = styled(BaseLightModeIcon)`
  ${({ theme }) => `
    color: ${theme.palette.text.textSecondary.light};
    transition: color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard};
  `}
`;

const DarkModeIcon = styled(BaseDarkModeIcon)`
  ${({ theme }) => `
    color: ${theme.palette.text.textSecondary.light};
    transition: color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard};
  `}
`;

function AppNavBar({ setIsDarkMode, isDarkMode, Typography, scrollToSection, landingSectionRef, experienceSectionRef, projectsSectionRef }) {

  const screenSize = useScreenSize();
  const theme = useTheme();

  const handleToggleDarkMode = () => {
    // Call setIsDarkMode to toggle the mode
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Define a state to hold the current time
  const [currentTime, setCurrentTime] = React.useState('');

  // Update the current time when the Clock component fetches new time
  const updateTime = (newTime) => {
    setCurrentTime(newTime);
  };

  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        backdropFilter: 'blur(30px)',
        justifyContent: 'center',
        backgroundColor: 'transparent', // Added for browsers that don't support backdrop-filter
        transition: `background-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard}`,
      })}
      elevation={0}
    >
      <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" sx={{ mt: 3, mb: 2, px: 2 }}>
        <Grid item xs sm md sx={{ ml: 10, display: 'flex', py: 1 }}>
          {(screenSize !== 'xs' && screenSize !== 'sm' && screenSize !== 'md') && (
            <Typography variant="h6" color="text.textPrimary.light" fontWeight={400} fontFamily="Jetbrains Mono, sans-serif" textAlign="left">
              Hans<span style={{ fontSize: '0.5em' }}>&nbsp;</span><span style={{ color: theme.palette.text.textSecondary.light }}>Salangsang</span>
            </Typography>
          )}
          {(screenSize === 'xs' || screenSize === 'sm' || screenSize === 'md') && (
            <>
              <Typography variant="h6" color="text.textPrimary.light" fontWeight={400} textAlign="left">H</Typography>
              <Typography variant="h6" color="text.textSecondary.light" fontWeight={400} textAlign="left">S</Typography>
            </>
          )}
        </Grid>
        <Grid item xs={6} sm={7} md={8} lg={7} sx={{ display: 'flex', justifyContent: 'center' }}>
          <DynamicIsland Typography={Typography} scrollToSection={scrollToSection} landingSectionRef={landingSectionRef} experienceSectionRef={experienceSectionRef} projectsSectionRef={projectsSectionRef} />
        </Grid>
          <Grid item xs sm md sx={{ justifyContent: 'flex-end', mr: 10, py: screenSize === 'md' ? 2 : 0 }}>
            <Stack 
              direction={
                (screenSize !== 'xs' && screenSize !== 'lg' && screenSize !== 'xl') 
                  ? 'column-reverse' 
                  : 'row'
              }
              
              spacing={1}

              sx={{
                alignItems: (screenSize === 'sm' || screenSize === 'md') ? 'flex-end' : 'center',
                justifyContent: 'flex-end',
                py: screenSize === 'md' ? 0 : 1,
              }}              
            >
              {!isDarkMode && (
                <Zoom in={!isDarkMode} style={{ transformOrigin: 'center' }}>
                  <IconButton onClick={handleToggleDarkMode} size="small">
                    <LightModeIcon />
                  </IconButton>
                </Zoom>
                )
              }

              {isDarkMode && (
                <Zoom in={isDarkMode} style={{ transformOrigin: 'center' }}>
                  <IconButton onClick={handleToggleDarkMode} size="small">
                    <DarkModeIcon />
                  </IconButton>
                </Zoom>
                )
              }

              {(screenSize !== 'xs' && screenSize !== 'sm') && (
                <>
                  <Typography variant="body2" color="text.textPrimary.light" fontWeight={400} textAlign="right">
                    <Clock onUpdate={updateTime} />
                    {currentTime}
                  </Typography>
                </>
              )}
            </Stack>
          </Grid>
      </Grid>
    </AppBar>
  );
}

export default AppNavBar;
