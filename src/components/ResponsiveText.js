import { Typography } from '@mui/material';
import { useScreenSize } from '../ScreenContext';

function ResponsiveText({ variant, ...props }) {
  const screenSize = useScreenSize();
  let adjustedVariant = variant;

  // Adjust variant based on isMobile
  switch (screenSize) {
    case 'xs':
    case 'sm':
      switch (variant) {
        case 'h1':
          adjustedVariant = 'h2';
          break;
        case 'h2':
          adjustedVariant = 'h3';
          break;
        case 'h3':
          adjustedVariant = 'h4';
          break;
        case 'h4':
          adjustedVariant = 'h5';
          break;
        case 'h5':
          adjustedVariant = 'h6';
          break;
        case 'h6':
          adjustedVariant = 'body1';
          break;
        case 'body1':
          adjustedVariant = 'body2';
          break;
        case 'body2':
          adjustedVariant = 'caption';
          break;
        default:
          break;
      }
      break;
    case 'xl':
      switch (variant) {
        case 'h2':
          adjustedVariant = 'h1';
          break;
        case 'h3':
          adjustedVariant = 'h2';
          break;
        case 'h4':
          adjustedVariant = 'h3';
          break;
        case 'h5':
          adjustedVariant = 'h4';
          break;
        case 'h6':
          adjustedVariant = 'h5';
          break;
        case 'body1':
          adjustedVariant = 'h6';
          break;
        case 'body2':
          adjustedVariant = 'body1';
          break;
        case 'caption':
          adjustedVariant = 'body2';
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }

  return (
    <Typography
      variant={adjustedVariant}
      {...props}
    />
  );
}

export default ResponsiveText;
