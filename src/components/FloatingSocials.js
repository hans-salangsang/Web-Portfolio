import React from 'react';
import { styled } from '@mui/material/styles';
import BaseStack from '@mui/material/Stack';
import { motion } from 'framer-motion';
import BaseButton from '@mui/material/Button'
import BaseIconButton from '@mui/material/IconButton';
import BaseToolbar from '@mui/material/Toolbar'
import { useScreenSize } from '../ScreenContext';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Stack = styled(BaseStack)`
  ${({ theme }) => `
    transition: background ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard};
  `}
`;

const Button = styled(BaseButton)(({ theme }) => ({
  '&:hover .MuiTypography-root': {
    color: theme.palette.text.textDynamicIsland.main,
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));

function FloatingSocials({ Typography, Chip }) {
  const screenSize = useScreenSize();
  const theme = useTheme();
  const [hoveredButton, setHoveredButton] = useState("");

  const IconButton = styled(BaseIconButton)(({ theme }) => ({
    backgroundColor: "transparent",
    color: hoveredButton !== '' ? "rgba(16, 18, 24, 0.3)" : "rgba(129, 158, 197, 1)",
    '&:hover': {
      color: "rgba(16, 18, 24, 1)",
      backgroundColor: "transparent",
    },
  }));

  return (
      <Stack
        direction="column"
        justifyContent="space-evenly"
        spacing={0}
        sx={{ 
          py: 1, 
          minHeight: 120, 
          backgroundColor: hoveredButton !== '' ? "rgba(129, 158, 197, 0.7)" : "rgba(129, 158, 197, 0.3)", 
          borderRadius: 8, 
          boxShadow: theme.shadows[5], 
          position: 'fixed', 
          top: screenSize === 'xs' ? '60vh' : '62vh', 
          left: 15, 
          zIndex: 999,
          backdropFilter: 'blur(8px)', }}>

        <motion.div
          whileHover={{ scale: 1.2, marginTop: -4 }}
          whileTap={{ scale: 0.9, marginTop: -2 }}
          onMouseEnter={() => setHoveredButton('GitHub')} 
          onMouseLeave={() => setHoveredButton('')}
          animate={{ 
            scale: hoveredButton === '' ? 1 : (hoveredButton !== 'GitHub' ? 0.9 : 1),
          }}
        >
          <IconButton aria-label="GitHub" size="small">
            <GitHubIcon />
          </IconButton>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2, marginTop: -4 }}
          whileTap={{ scale: 0.9, marginTop: -2 }}
          onMouseEnter={() => setHoveredButton('LinkedIn')} 
          onMouseLeave={() => setHoveredButton('')}
          animate={{ 
            scale: hoveredButton === '' ? 1 : (hoveredButton !== 'LinkedIn' ? 0.9 : 1),
          }}
        >
          <IconButton aria-label="LinkedIn" size="small">
            <LinkedInIcon />
          </IconButton>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2, marginTop: -4 }}
          whileTap={{ scale: 0.9, marginTop: -2 }}
          onMouseEnter={() => setHoveredButton('Facebook')} 
          onMouseLeave={() => setHoveredButton('')}
          animate={{ 
            scale: hoveredButton === '' ? 1 : (hoveredButton !== 'Facebook' ? 0.9 : 1),
          }}
        >
          <IconButton aria-label="Facebook" size="small">
            <FacebookIcon />
          </IconButton>
        </motion.div>
      </Stack>
  );
}

export default FloatingSocials;
