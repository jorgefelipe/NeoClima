import { extendTheme } from '@chakra-ui/react';

const colors = {
  transparent: 'transparent',
  primary: '#021b3a',
  primaryLight: '#022b3a',
  secondary: '#FFFFFF',
  success: '#7DC749',
  info: '#4098F1',
  warning: '#F2D06A',
  danger: '#E21F3D',
  ice: '#FAFAFA',
};

const space = {
  padding: '12px',
  padding2x: '24px',
  margin: '12px',
  margin2x: '24px',
  margin3x: '36px',
};

const fontSizes = {
  p: '12px',
  h6: '14px',
  h5: '16px',
  h4: '18px',
  h3: '20px',
  h2: '24px',
  h1: '32px',
};

export const theme = extendTheme({ colors, space, fontSizes });