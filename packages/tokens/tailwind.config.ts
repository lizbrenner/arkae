/**
 * Tailwind CSS Configuration for Arkae Design System
 * Extends Tailwind's default theme with Arkae design tokens
 */

import type { Config } from 'tailwindcss';
import { colors, semanticColorsLight, semanticColorsDark } from './src/colors';
import {
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
} from './src/typography';
import { spacing, sizes } from './src/spacing';
import { shadows } from './src/shadows';
import { borderRadius, borderWidth } from './src/borders';
import { duration, easing } from './src/animations';
import { breakpoints } from './src/breakpoints';
import { zIndex } from './src/zIndex';

const arkaeConfig: Omit<Config, 'content'> = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...colors,
        semantic: {
          background: {
            primary: 'var(--arkae-bg-primary)',
            secondary: 'var(--arkae-bg-secondary)',
            tertiary: 'var(--arkae-bg-tertiary)',
          },
          foreground: {
            primary: 'var(--arkae-fg-primary)',
            secondary: 'var(--arkae-fg-secondary)',
            tertiary: 'var(--arkae-fg-tertiary)',
          },
          border: {
            primary: 'var(--arkae-border-primary)',
            secondary: 'var(--arkae-border-secondary)',
            focus: 'var(--arkae-border-focus)',
          },
          text: {
            primary: 'var(--arkae-text-primary)',
            secondary: 'var(--arkae-text-secondary)',
            tertiary: 'var(--arkae-text-tertiary)',
            inverse: 'var(--arkae-text-inverse)',
          },
        },
      },
      fontFamily: {
        sans: fontFamilies.sans.split(', '),
        serif: fontFamilies.serif.split(', '),
        mono: fontFamilies.mono.split(', '),
      },
      fontSize: fontSizes,
      fontWeight: fontWeights,
      lineHeight: lineHeights,
      letterSpacing,
      spacing,
      width: sizes,
      height: sizes,
      minWidth: sizes,
      minHeight: sizes,
      maxWidth: sizes,
      maxHeight: sizes,
      boxShadow: shadows,
      borderRadius,
      borderWidth,
      transitionDuration: duration,
      transitionTimingFunction: easing,
      screens: breakpoints,
      zIndex,
    },
  },
  plugins: [],
};

export default arkaeConfig;
