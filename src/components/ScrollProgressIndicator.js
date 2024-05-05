import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

function ScrollProgressIndicator({ Typography, Chip, scrollToSection, landingSectionRef, experienceSectionRef, projectsSectionRef, connectSectionRef, activeSection }) {

  const CustomChip = styled(Chip)(({ theme }) => ({
    '&:hover': {
      backgroundColor:  theme.palette.background.contrast,
    },
  }));  

  return (
    <Stack direction="column" spacing={1} useFlexGap flexWrap="wrap" sx={{ pt: 2, mr: 1.5, maxWidth: '6px', position: 'fixed', top: '40%', right: 0, zIndex: 999 }}>
      <CustomChip color="lightBlue" onClick={() => scrollToSection(landingSectionRef)} sx={{ maxHeight: activeSection === 'landing' ? '30px' : '6px' }} />
      <CustomChip color="lightBlue" onClick={() => scrollToSection(experienceSectionRef)} sx={{ maxHeight: activeSection === 'experience' ? '30px' : '6px' }} />
      <CustomChip color="lightBlue" onClick={() => scrollToSection(projectsSectionRef)} sx={{ maxHeight: activeSection === 'projects' ? '30px' : '6px' }} />
      <CustomChip color="lightBlue" onClick={() => scrollToSection(connectSectionRef)} sx={{ maxHeight: activeSection === 'connect' ? '30px' : '6px' }} />
    </Stack>
  );
}

export default ScrollProgressIndicator;
