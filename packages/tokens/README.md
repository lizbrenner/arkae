# @arkae/tokens

Design tokens for the Arkae design system.

## Installation

```bash
npm install @arkae/tokens
# or
pnpm add @arkae/tokens
```

## Usage

### Import tokens in TypeScript/JavaScript

```typescript
import { colors, spacing, typography, tokens } from '@arkae/tokens';

// Use individual token values
const primaryColor = colors.primary[500];
const baseSpacing = spacing[4];

// Or use the complete tokens object
const { colors, spacing } = tokens;
```

### Use with Tailwind CSS

```javascript
// tailwind.config.js
import arkaeConfig from '@arkae/tokens/tailwind';

export default {
  presets: [arkaeConfig],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
};
```

### Import CSS variables

```css
@import '@arkae/tokens/styles.css';
```

Or in your main TypeScript/JavaScript file:

```typescript
import '@arkae/tokens/styles.css';
```

## Token Categories

### Colors
Complete color palette with semantic mappings for light and dark modes:
- Base colors (white, black)
- Gray scale (50-950)
- Primary (indigo)
- Secondary (purple)
- Success (green)
- Warning (yellow)
- Error (red)
- Info (blue)
- Semantic colors (background, foreground, border, text)

### Typography
- Font families (sans, serif, mono)
- Font sizes (xs through 9xl)
- Font weights (thin through black)
- Line heights
- Letter spacing
- Predefined variants (h1-h6, body, caption, button, code)

### Spacing
4px/8px grid-based spacing scale from 0 to 96

### Shadows
Elevation levels for depth (xs, sm, base, md, lg, xl, 2xl, inner)

### Borders
- Border radius (none through full)
- Border width (0, 1, 2, 4, 8)

### Animations
- Duration (instant through slower)
- Easing functions (linear, in, out, inOut, bounce)

### Breakpoints
Mobile-first responsive breakpoints (xs, sm, md, lg, xl, 2xl)

### Z-Index
Layering system for stacking contexts (base through notification)

## Type Safety

All tokens are fully typed for TypeScript autocomplete and type checking.

```typescript
import type { ColorScale, Spacing, FontSize, TypographyVariant } from '@arkae/tokens';
```

## CSS Variables

The package includes CSS variables for semantic colors that automatically adapt to light/dark mode:

```css
/* Light mode (default) */
--arkae-bg-primary
--arkae-text-primary
--arkae-border-focus
/* ... and more */

/* Dark mode (when .dark class is applied) */
.dark {
  --arkae-bg-primary: /* dark color */
}
```

## License

MIT
