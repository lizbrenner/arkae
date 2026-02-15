/**
 * Color Tokens for Arkae Design System
 * Comprehensive color palette with semantic mappings
 */

export const colors = {
  // Base colors
  white: '#ffffff',
  black: '#000000',

  // Gray scale
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },

  // Primary brand color (indigo)
  primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  },

  // Secondary color (purple)
  secondary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
    950: '#3b0764',
  },

  // Success (green)
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },

  // Warning (yellow)
  warning: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
    950: '#422006',
  },

  // Error (red)
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },

  // Info (blue)
  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
} as const;

// Semantic color mappings for light mode
export const semanticColorsLight = {
  background: {
    primary: colors.white,
    secondary: colors.gray[50],
    tertiary: colors.gray[100],
  },
  foreground: {
    primary: colors.gray[900],
    secondary: colors.gray[600],
    tertiary: colors.gray[500],
  },
  border: {
    primary: colors.gray[200],
    secondary: colors.gray[300],
    focus: colors.primary[500],
  },
  text: {
    primary: colors.gray[900],
    secondary: colors.gray[600],
    tertiary: colors.gray[500],
    inverse: colors.white,
  },
} as const;

// Semantic color mappings for dark mode
export const semanticColorsDark = {
  background: {
    primary: colors.gray[950],
    secondary: colors.gray[900],
    tertiary: colors.gray[800],
  },
  foreground: {
    primary: colors.gray[50],
    secondary: colors.gray[400],
    tertiary: colors.gray[500],
  },
  border: {
    primary: colors.gray[800],
    secondary: colors.gray[700],
    focus: colors.primary[400],
  },
  text: {
    primary: colors.gray[50],
    secondary: colors.gray[400],
    tertiary: colors.gray[500],
    inverse: colors.gray[900],
  },
} as const;

export type ColorScale = typeof colors.primary;
export type SemanticColors = typeof semanticColorsLight;
