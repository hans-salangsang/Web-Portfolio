import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useScreenSize } from '../ScreenContext';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import BaseTooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

const Tooltip = styled(BaseTooltip)(({ theme }) => ({
    '.MuiTooltip-arrow': {
        color: theme.palette.text.textDynamicIsland.main,
        backgroundColor: theme.palette.text.textDynamicIsland.main,
    },
}));

const CustomTooltip = styled(({ title, placement, className, ...props }) => (
    <Tooltip 
        {...props} 
        classes={{ popper: className }} 
        TransitionComponent={Zoom} 
        title={title} 
        placement={placement} 
        arrow 
        followCursor
        slotProps={{
            popper: {
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, 10],
                  },
                },
              ],
            },
          }}
     />
  ))(({ theme }) => ({
    [`& .MuiTooltip-arrow`]: {
        color: theme.palette.background.contrast,
    },
    [`& .MuiTooltip-tooltip`]: {
        color: theme.palette.text.textFooter.light,
        backgroundColor: theme.palette.background.contrast,
    },
  }));

export default CustomTooltip;