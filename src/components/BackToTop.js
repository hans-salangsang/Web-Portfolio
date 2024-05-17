import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import BaseButton from '@mui/material/Button'
import BaseIconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { motion } from 'framer-motion';
import { useScreenSize } from '../ScreenContext';
import Tooltip from './CustomTooltip';

const IconButton = styled(BaseIconButton)(({ theme }) => ({
  backgroundColor: "rgba(129, 158, 197, 0.3)",
  backdropFilter: 'blur(12px)',
  color: "rgba(129, 158, 197, 1)",
  boxShadow: theme.shadows[5],
  '&:hover': {
    color: "rgba(16, 18, 24, 1)",
    backgroundColor: "rgba(129, 158, 197, 0.7)",
  },
}));

function BackToTop({ Typography, Chip, scrollToSection, landingSectionRef }) {
  const screenSize = useScreenSize();

  return (
    <Stack direction="column" spacing={1} useFlexGap flexWrap="wrap" sx={{ position: 'fixed', top: screenSize === 'xs' ? '82vh' : '91vh', right: 15, zIndex: 999 }}>
      <Tooltip title="Back to top" placement="left">
        <motion.div
          whileHover={{ scale: 1.2, marginTop: -4 }}
          whileTap={{ scale: 0.9, marginTop: -2 }}
        >
          <IconButton aria-label="Back to Top" size="small" onClick={() => scrollToSection(landingSectionRef)}>
            <KeyboardDoubleArrowUpIcon />
          </IconButton>
        </motion.div>
      </Tooltip>
    </Stack>
  );
}

export default BackToTop;
