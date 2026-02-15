/**
 * Animation Tokens for Arkae Design System
 */

export const duration = {
  instant: '0ms',
  fast: '150ms',
  base: '250ms',
  slow: '350ms',
  slower: '500ms',
} as const;

export const easing = {
  linear: 'linear',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

export type Duration = keyof typeof duration;
export type Easing = keyof typeof easing;
