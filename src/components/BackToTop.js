import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import BaseButton from '@mui/material/Button'
import BaseIconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { motion } from 'framer-motion';

const IconButton = styled(BaseIconButton)(({ theme }) => ({
  backgroundColor: "#819EC5",
  color: "#42566E",
  boxShadow: theme.shadows[5],
  '&:hover': {
    color: "#202431",
    backgroundColor: "#ABBFD8",
  },
}));

function BackToTop({ Typography, Chip, scrollToSection, landingSectionRef }) {

  return (
    <Stack direction="column" spacing={1} useFlexGap flexWrap="wrap" sx={{ pt: 2, mr: 1.5, position: 'fixed', top: '89%', right: 0, zIndex: 999 }}>
      <motion.div
        whileHover={{ scale: 1.2, marginTop: -4 }}
        whileTap={{ scale: 0.9, marginTop: -2 }}
      >
        <IconButton aria-label="Back to Top" size="small" onClick={() => scrollToSection(landingSectionRef)}>
          <KeyboardDoubleArrowUpIcon />
        </IconButton>
      </motion.div>
    </Stack>
  );
}

export default BackToTop;
