import React from 'react';
import { Grid, AppBar, Stack } from '@mui/material';
import Clock from './Clock';
import BottomIsland from './BottomIsland';
import { useScreenSize } from '../ScreenContext';
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 56,
  height: 30,
  padding: 7,
  '&.MuiSwitch-root': {
    marginRight: -5,
  },
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 400 525"><path fill="${encodeURIComponent(
          theme.palette.text.textPrimary.light,
        )}" d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.switchThumb.track,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.switchThumb.main,
    width: 28,
    height: 28,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        theme.palette.text.textPrimary.light,
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.switchThumb.track,
    borderRadius: 20 / 2,
  },
}));

function BottomAppNavBar({ setIsDarkMode, isDarkMode, Typography, scrollToSection, landingSectionRef, experienceSectionRef, projectsSectionRef, connectSectionRef, activeSection }) {

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
          backgroundColor: 'transparent',
          transition: `background-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard}`,
          top: 'auto',
          bottom: 0,
        })}
        elevation={0}
      >
        <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" sx={{ mt: 2 }}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <BottomIsland Typography={Typography} scrollToSection={scrollToSection} landingSectionRef={landingSectionRef} experienceSectionRef={experienceSectionRef} projectsSectionRef={projectsSectionRef} connectSectionRef={connectSectionRef} activeSection={activeSection} />
          </Grid>
        </Grid>
      </AppBar>
  );
}

export default BottomAppNavBar;
