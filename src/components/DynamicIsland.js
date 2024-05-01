import React from 'react';
import { Stack, Button } from '@mui/material';
import BaseToolbar from '@mui/material/Toolbar'
import { useScreenSize } from '../ScreenContext';
import { styled } from '@mui/material/styles';

const Toolbar = styled(BaseToolbar)`
  ${({ theme }) => `
    transition: background ${theme.transitions.duration.standard}ms ${theme.transitions.easing.standard};
  `}
`;

function DynamicIsland({ Typography, scrollToSection, landingSectionRef, experienceSectionRef, projectsSectionRef }) {
  const screenSize = useScreenSize();

  return (
    <Toolbar variant="dense" sx={{ backgroundColor: 'background.contrast', justifyContent: 'center', borderRadius: 8, width: screenSize === 'xs' ? '90%' : screenSize === 'sm' ? '85%' : '60%' }}>
      <Stack direction="row" spacing={5}>
          <Button color="inherit" onClick={() => scrollToSection(landingSectionRef)}>
            <Typography variant="button" color="text.textTertiary.dark" fontWeight={400} textAlign="center">Home</Typography>
          </Button>
          <Button color="inherit" onClick={() => scrollToSection(experienceSectionRef)}>
            <Typography variant="button" color="text.textSecondary.main" fontWeight={400} textAlign="center">Experience</Typography>
          </Button>
          <Button color="inherit" onClick={() => scrollToSection(projectsSectionRef)}>
            <Typography variant="button" color="text.textSecondary.main" fontWeight={400} textAlign="center">Projects</Typography>
          </Button>
      </Stack>
    </Toolbar>
  );
}

export default DynamicIsland;
