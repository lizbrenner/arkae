# Arkae Design System Storybook

Interactive documentation and showcase for the Arkae design system.

## Getting Started

```bash
# From the repository root
pnpm --filter @arkae/storybook dev

# Or from this directory
pnpm dev
```

The Storybook will be available at http://localhost:6006

## Building

```bash
# Build the static Storybook site
pnpm build

# Preview the built site
pnpm preview
```

## What's Inside

- **Tokens** - Color palettes, typography, spacing, shadows, and more
- **Primitives** - Core UI components (Button, Input, Dialog, etc.)
- **Compositions** - Complex component patterns
- **Examples** - Real-world usage examples

## Structure

```
apps/storybook/
├── .storybook/          # Storybook configuration
│   ├── main.ts          # Main config
│   ├── preview.ts       # Preview config
│   └── preview.css      # Global styles
├── src/                 # Stories
│   ├── Introduction.mdx # Welcome page
│   ├── *.stories.tsx    # Component stories
│   └── ...
└── package.json
```

## Writing Stories

Stories are written using Component Story Format (CSF):

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@arkae/primitives';

const meta = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
  },
};
```

## Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Component Story Format](https://storybook.js.org/docs/api/csf)
