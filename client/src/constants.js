export const COLORS = {
  primary: "hsl(258deg, 100%, 50%)",
  gray: {
    "100": "hsl(225deg, 25%, 96%)",
    "200": "hsl(225deg, 20%, 92%)",
    "300": "hsl(225deg, 12%, 85%)",
    "400": "hsl(225deg, 10%, 78%)",
    "500": "hsl(225deg, 8%, 50%)",
    "600": "hsl(225deg, 7%, 33%)",
    "700": "hsl(225deg, 10%, 18%)",
    "800": "hsl(225deg, 13%, 10%)",
    "900": "hsl(225deg, 15%, 5%)"
  },
  warning: "hsl(45deg, 100%, 50%)",
  error: "hsl(350deg, 100%, 45%)"
};

export const UNIT = 8;

export const BREAKPOINT_SIZES = {
  sm: 540,
  md: 900,
  lg: 1125
};

export const BREAKPOINTS = {
  sm: `(max-width: ${BREAKPOINT_SIZES.sm}px)`,
  md: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
  lg: `(max-width: ${BREAKPOINT_SIZES.lg}px)`,
  mdMin: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
  lgMin: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`
};

export const THEME = {
  colors: COLORS,
  unit: UNIT,
  breakpoints: BREAKPOINTS
};
