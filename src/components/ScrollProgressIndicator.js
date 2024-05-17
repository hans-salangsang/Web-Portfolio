import React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Tooltip from './CustomTooltip';

function ScrollProgressIndicator({ Typography, Chip, scrollToSection, landingSectionRef, experienceSectionRef, projectsSectionRef, connectSectionRef, activeSection }) {

  const CustomChip = styled(Chip)(({ theme }) => ({
    boxShadow: theme.shadows[5],
    backgroundColor: "rgba(129, 158, 197, 0.3)",
    backdropFilter: 'blur(12px)',
    '&:hover': {
      backgroundColor: "rgba(129, 158, 197, 0.7)",
    },
  }));  

  return (
    <Stack direction="column" spacing={1} useFlexGap flexWrap="wrap" sx={{ maxWidth: '6px', position: 'fixed', top: '40vh', right: 15, zIndex: 999 }}>
      <Tooltip title="Home" placement="left">
        <CustomChip onClick={() => scrollToSection(landingSectionRef)} sx={{ maxHeight: activeSection === 'landing' ? '30px' : '6px' }} />
      </Tooltip>

      <Tooltip title="Experience" placement="left">
        <CustomChip onClick={() => scrollToSection(experienceSectionRef)} sx={{ maxHeight: activeSection === 'experience' ? '30px' : '6px' }} />
      </Tooltip>

      <Tooltip title="Projects" placement="left">
        <CustomChip onClick={() => scrollToSection(projectsSectionRef)} sx={{ maxHeight: activeSection === 'projects' ? '30px' : '6px' }} />
      </Tooltip>
      
      <Tooltip title="Connect" placement="left">
        <CustomChip onClick={() => scrollToSection(connectSectionRef)} sx={{ maxHeight: activeSection === 'connect' ? '30px' : '6px' }} />
      </Tooltip>
    </Stack>
  );
}

export default ScrollProgressIndicator;
