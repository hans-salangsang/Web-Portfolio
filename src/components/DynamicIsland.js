import React from 'react';
import { Stack } from '@mui/material';
import BaseButton from '@mui/material/Button'
import BaseToolbar from '@mui/material/Toolbar'
import { useScreenSize } from '../ScreenContext';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

const Toolbar = styled(BaseToolbar)`
  ${({ theme }) => `
    transition: background ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard};
  `}
`;

const Button = styled(BaseButton)(({ theme }) => ({
  paddingLeft: '2vw',
  paddingRight: '2vw',
  '&:hover .MuiTypography-root': {
    fontWeight: 600,
    color: theme.palette.text.textDynamicIsland.main,
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

function DynamicIsland({ Typography, scrollToSection, landingSectionRef, experienceSectionRef, projectsSectionRef, connectSectionRef, activeSection }) {
  const screenSize = useScreenSize();
  const theme = useTheme();
  const [hoveredButton, setHoveredButton] = useState("");

  return (
    <Toolbar variant="dense" sx={{ backgroundColor: hoveredButton !== '' ? "background.accentHover" : "background.accent", justifyContent: 'center', borderRadius: 8, boxShadow: theme.shadows[5], width: screenSize === 'xs' ? '90%' : screenSize === 'sm' ? '80%' : '70%' }}>
      <Stack direction="row" spacing={0}>
        <motion.div
          whileHover={{ scale: 1.2, marginTop: -4 }}
          whileTap={{ scale: 0.9, marginTop: -2 }}
          onMouseEnter={() => setHoveredButton('Experience')} 
          onMouseLeave={() => setHoveredButton('')}
          animate={{ 
            scale: hoveredButton === '' ? 1 : (hoveredButton !== 'Experience' ? 0.9 : 1),
          }}
        >
          <Button color="inherit" onClick={() => scrollToSection(experienceSectionRef)}>
            <Typography variant="button" color={activeSection === 'experience' ? 'text.textDynamicIsland.light' : 'text.textDynamicIsland.dark'} fontWeight={activeSection === 'experience' ? 600 : 400} textAlign="center">Experience</Typography>
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2, marginTop: -4 }}
          whileTap={{ scale: 0.9, marginTop: -2 }}
          onMouseEnter={() => setHoveredButton('Projects')} 
          onMouseLeave={() => setHoveredButton('')}
          animate={{ 
            scale: hoveredButton === '' ? 1 : (hoveredButton !== 'Projects' ? 0.9 : 1),
          }}
        >
          <Button color="inherit" onClick={() => scrollToSection(projectsSectionRef)}>
            <Typography variant="button" color={activeSection === 'projects' ? 'text.textDynamicIsland.light' : 'text.textDynamicIsland.dark'} fontWeight={activeSection === 'projects' ? 600 : 400} textAlign="center">Projects</Typography>
          </Button>
        </motion.div>  
        <motion.div
          whileHover={{ scale: 1.2, marginTop: -4 }}
          whileTap={{ scale: 0.9, marginTop: -2 }}
          onMouseEnter={() => setHoveredButton('Connect')} 
          onMouseLeave={() => setHoveredButton('')}
          animate={{ 
            scale: hoveredButton === '' ? 1 : (hoveredButton !== 'Connect' ? 0.9 : 1),
          }}
        >  
          <Button color="inherit" onClick={() => scrollToSection(connectSectionRef)}>
            <Typography variant="button" color={activeSection === 'connect' ? 'text.textDynamicIsland.light' : 'text.textDynamicIsland.dark'} fontWeight={activeSection === 'connect' ? 600 : 400} textAlign="center">Connect</Typography>
          </Button>
        </motion.div>
      </Stack>
    </Toolbar>
  );
}

export default DynamicIsland;
