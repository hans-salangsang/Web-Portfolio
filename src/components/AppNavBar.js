import React from 'react';
import { Grid, AppBar, Stack } from '@mui/material';
import Clock from './Clock';
import DynamicIsland from './DynamicIsland';
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

function AppNavBar({ setIsDarkMode, isDarkMode, Typography, scrollToSection, landingSectionRef, experienceSectionRef, projectsSectionRef, connectSectionRef, activeSection }) {

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
        backdropFilter: 'blur(16px)',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        transition: `background-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard}`,
      })}
      elevation={0}
    >
    {screenSize !== 'xs' && (
      <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" sx={{ mt: 3, mb: 2, px: 2 }}>
        {screenSize !== 'xs' && (
          <Grid item xs={0} sm={1} md sx={{ pl: screenSize === 'xs' || screenSize === 'sm' ? 0 : screenSize === 'md' ? 4 : 10, display: 'flex', py: 1 }}>
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
        )}
        {screenSize !== 'xs' && (
        <Grid item xs={12} sm={8} md={8} lg={7} sx={{ display: 'flex', justifyContent: 'center' }}>
          <DynamicIsland Typography={Typography} scrollToSection={scrollToSection} landingSectionRef={landingSectionRef} experienceSectionRef={experienceSectionRef} projectsSectionRef={projectsSectionRef} connectSectionRef={connectSectionRef} activeSection={activeSection} />
        </Grid>
        )}
        {screenSize !== 'xs' && (
          <Grid item xs={0} sm={1} md sx={{ justifyContent: 'flex-end', pr: screenSize === 'xs' || screenSize === 'sm' ? 0 : screenSize === 'md' ? 4 : 10, py: screenSize === 'md' ? 2 : 0 }}>
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
              <MaterialUISwitch
                onChange={handleToggleDarkMode}
                size="small"
                defaultChecked
              />

              {(screenSize !== 'xs' && screenSize !== 'sm') && (
                <>
                  <Typography 
                    variant="body2" 
                    color="text.textPrimary.light" 
                    fontWeight={400} 
                    textAlign="right"
                    sx={{
                      pl: screenSize !== 'xs' && screenSize !== 'sm' ? 1 : 0,
                    }}  
                  >
                    <Clock onUpdate={updateTime} />
                    {currentTime}
                  </Typography>
                </>
              )}
            </Stack>
          </Grid>
        )}
      </Grid>
    )}
    
    {screenSize === 'xs' && (
      <Container maxWidth={screenSize === "xl" ? "xl" : "lg"} sx={{ px: 3 }}>
        <Grid container direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mt: 3, mb: 2 }}>
          
            <Grid item xs={8} sx={{ py: 1 }}>
              <Typography variant="h5" color="text.textPrimary.light" fontWeight={400} fontFamily="Jetbrains Mono, sans-serif" textAlign="left">
                Hans<span style={{ fontSize: '0.5em' }}>&nbsp;</span><span style={{ color: theme.palette.text.textSecondary.light }}>Salangsang</span>
              </Typography>
            </Grid>
          
            <Grid item xs={4} sx={{ py: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <MaterialUISwitch
                onChange={handleToggleDarkMode}
                size="small"
                defaultChecked
              />
            </Grid>

        </Grid>
      </Container>
    )}
    </AppBar>
  );
}

export default AppNavBar;
