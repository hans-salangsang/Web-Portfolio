import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

function ScrollProgressIndicator({ Typography, Chip, scrollToSection, landingSectionRef, experienceSectionRef, projectsSectionRef, connectSectionRef, activeSection }) {

  const CustomChip = styled(Chip)(({ theme }) => ({
    boxShadow: theme.shadows[5],
    backgroundColor: "rgba(129, 158, 197, 0.3)",
    backdropFilter: 'blur(8px)',
    '&:hover': {
      backgroundColor: "rgba(129, 158, 197, 0.7)",
    },
  }));  

  return (
    <Stack direction="column" spacing={1} useFlexGap flexWrap="wrap" sx={{ maxWidth: '6px', position: 'fixed', top: '40vh', right: 15, zIndex: 999 }}>
      <CustomChip onClick={() => scrollToSection(landingSectionRef)} sx={{ maxHeight: activeSection === 'landing' ? '30px' : '6px' }} />
      <CustomChip onClick={() => scrollToSection(experienceSectionRef)} sx={{ maxHeight: activeSection === 'experience' ? '30px' : '6px' }} />
      <CustomChip onClick={() => scrollToSection(projectsSectionRef)} sx={{ maxHeight: activeSection === 'projects' ? '30px' : '6px' }} />
      <CustomChip onClick={() => scrollToSection(connectSectionRef)} sx={{ maxHeight: activeSection === 'connect' ? '30px' : '6px' }} />
    </Stack>
  );
}

export default ScrollProgressIndicator;
