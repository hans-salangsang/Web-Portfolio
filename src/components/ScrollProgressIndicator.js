import React from 'react';
import BaseToolbar from '@mui/material/Toolbar'
import { useScreenSize } from '../ScreenContext';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const Toolbar = styled(BaseToolbar)`
  ${({ theme }) => `
    transition: background ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard};
  `}
`;

function ScrollProgressIndicator({ Typography, Chip, scrollToSection, landingSectionRef, experienceSectionRef, projectsSectionRef, activeSection }) {
  const screenSize = useScreenSize();

  return (
    <Stack direction="column" spacing={1} useFlexGap flexWrap="wrap" sx={{ pt: 2, mr: 2, maxWidth: '6px', position: 'fixed', top: '40%', right: 0, zIndex: 999 }}>
      <Chip color={activeSection === 'landing' ? 'white' : 'lightBlue'} onClick={() => scrollToSection(landingSectionRef)} sx={{ maxHeight: activeSection === 'landing' ? '30px' : '6px' }} />
      <Chip color={activeSection === 'experience' ? 'white' : 'lightBlue'} onClick={() => scrollToSection(experienceSectionRef)} sx={{ maxHeight: activeSection === 'experience' ? '30px' : '6px' }} />
      <Chip color={activeSection === 'projects' ? 'white' : 'lightBlue'} onClick={() => scrollToSection(projectsSectionRef)} sx={{ maxHeight: activeSection === 'projects' ? '30px' : '6px' }} />
      <Chip color={activeSection === 'landing' ? 'white' : 'lightBlue'} onClick={() => scrollToSection(landingSectionRef)} sx={{ maxHeight: activeSection === 'landing' ? '30px' : '6px' }} />
    </Stack>
  );
}

export default ScrollProgressIndicator;
