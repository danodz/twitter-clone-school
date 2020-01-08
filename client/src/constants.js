export const COLORS = {
  primary: 'hsl(258deg, 100%, 50%)',
  gray: {
    '100': 'hsl(0deg, 0%, 96%)',
    '200': 'hsl(0deg, 0%, 92%)',
    '300': 'hsl(0deg, 0%, 85%)',
    '400': 'hsl(0deg, 0%, 78%)',
    '500': 'hsl(0deg, 0%, 50%)',
    '600': 'hsl(0deg, 0%, 33%)',
    '700': 'hsl(0deg, 0%, 18%)',
    '800': 'hsl(0deg, 0%, 10%)',
    '900': 'hsl(0deg, 0%, 5%)',
  },
};

export const UNIT = 8;

export const BREAKPOINT_SIZES = {
  sm: 540,
  md: 900,
  lg: 1125,
};

export const BREAKPOINTS = {
  sm: `(max-width: ${BREAKPOINT_SIZES.sm}px)`,
  md: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
  lg: `(max-width: ${BREAKPOINT_SIZES.lg}px)`,
  mdMin: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
  lgMin: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
};

export const THEME = {
  colors: COLORS,
  unit: UNIT,
  breakpoints: BREAKPOINTS,
};
