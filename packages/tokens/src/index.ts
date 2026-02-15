/**
 * Arkae Design Tokens
 * Export all design tokens for use across the design system
 */

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './shadows';
export * from './borders';
export * from './animations';
export * from './breakpoints';
export * from './zIndex';

// Re-export as a single tokens object for convenience
import { colors, semanticColorsLight, semanticColorsDark } from './colors';
import {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
  typography,
} from './typography';
import { spacing, sizes } from './spacing';
import { shadows } from './shadows';
import { borderRadius, borderWidth } from './borders';
import { duration, easing } from './animations';
import { breakpoints } from './breakpoints';
import { zIndex } from './zIndex';

export const tokens = {
  colors,
  semanticColors: {
    light: semanticColorsLight,
    dark: semanticColorsDark,
  },
  typography: {
    fontFamilies,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacing,
    variants: typography,
  },
  spacing,
  sizes,
  shadows,
  borders: {
    radius: borderRadius,
    width: borderWidth,
  },
  animations: {
    duration,
    easing,
  },
  breakpoints,
  zIndex,
} as const;
