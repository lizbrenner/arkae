# @arkae/library

Complete Arkae Design System - AI-native components built on Base UI primitives.

## Installation

Install the complete library:

```bash
npm install @arkae/library
# or
pnpm add @arkae/library
# or
yarn add @arkae/library
```

This installs everything you need: primitives, tokens, and compositions.

## Usage

### Import Everything

```tsx
import { Button, Input, tokens } from '@arkae/library';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text" />
    </div>
  );
}
```

### Import Specific Modules

You can also import from specific entry points:

```tsx
// Just tokens
import { tokens, colors, typography } from '@arkae/library/tokens';

// Just primitives
import { Button, Input, Checkbox } from '@arkae/library/primitives';

// Just compositions
import { FormField, Card } from '@arkae/library/compositions';
```

### Install Individual Packages

If you only need specific parts, you can install packages individually:

```bash
# Just design tokens
npm install @arkae/tokens

# Just primitive components
npm install @arkae/primitives

# Just composition components
npm install @arkae/compositions
```

## What's Included

### Primitives (`@arkae/primitives`)
Built on Base UI with full accessibility:
- **Button** - Multiple variants, sizes, loading states, icons
- **Input** - Text input with validation, icons, sizes
- **Checkbox** - Accessible checkbox with variants
- **Switch** - Toggle switch component
- **Dialog** - Modal dialogs with backdrop
- **Menu** - Dropdown menus with keyboard navigation
- **Tabs** - Tabbed interfaces
- **Tooltip** - Accessible tooltips

### Tokens (`@arkae/tokens`)
Design tokens for consistent styling:
- Colors (semantic + palette)
- Typography (fonts, sizes, weights)
- Spacing (4px/8px grid)
- Shadows & elevations
- Border radius & widths
- Animations & transitions
- Breakpoints
- Z-index layers
- Tailwind CSS preset

### Compositions (`@arkae/compositions`)
Complex component compositions:
- FormField
- Card
- DataTable
- And more...

## Features

- 🎨 **Design Tokens** - Consistent styling with semantic tokens
- ♿ **Accessible** - Built on Base UI with WCAG compliance
- 🎯 **TypeScript** - Full type safety
- 🌗 **Dark Mode** - Built-in dark mode support
- 🎭 **Variants** - Multiple style variants with CVA
- 🤖 **AI-Native** - AI-powered theming and component generation (coming soon)
- 📦 **Tree-shakeable** - Only bundle what you use
- ⚡ **Performance** - Optimized and lightweight

## Documentation

For detailed documentation, visit:
- [GitHub Repository](https://github.com/lizbrenner/arkae)
- [Component Documentation](https://github.com/lizbrenner/arkae/tree/main/packages/primitives)
- [Design Tokens Guide](https://github.com/lizbrenner/arkae/tree/main/packages/tokens)

## Requirements

- React >= 18.0.0
- TypeScript >= 5.0.0 (recommended)

## License

MIT © [Liz Brenner](https://github.com/lizbrenner)
