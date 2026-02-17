# @arkae/primitives

Base UI primitives with Arkae styling for the Arkae design system.

## Philosophy

Arkae primitives leverage **Base UI**'s headless, accessible components and apply Arkae's design tokens and styling system on top using **Class Variance Authority (CVA)**. This approach provides:

- **Accessibility by default** - Base UI handles ARIA attributes, keyboard navigation, and focus management
- **Flexibility** - Unstyled primitives allow complete control over appearance
- **Type safety** - Full TypeScript support with variant types
- **Performance** - Lightweight and optimized

## Installation

```bash
npm install @arkae/primitives @arkae/tokens @base-ui/react
# or
pnpm add @arkae/primitives @arkae/tokens @base-ui/react
```

## Usage

```tsx
import { Button, Input, Checkbox, Dialog, Switch, Menu, Tabs, Tooltip } from '@arkae/primitives';

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button variant="primary" size="md">
        Click me
      </Button>

      <Input 
        placeholder="Enter text" 
        leftIcon={<SearchIcon />}
      />

      <Checkbox label="Accept terms" />

      <Switch label="Enable notifications" />

      <Dialog open={open} onOpenChange={setOpen} size="md">
        <DialogTitle>Welcome to Arkae</DialogTitle>
        <DialogDescription>Built on Base UI primitives.</DialogDescription>
      </Dialog>

      <Tooltip content="Click to open menu">
        <Button>Hover me</Button>
      </Tooltip>
    </>
  );
}
```

## Components

### Button
Versatile button with multiple variants and sizes
- Variants: `primary`, `secondary`, `ghost`, `link`, `danger`
- Sizes: `sm`, `md`, `lg`
- Loading state support
- Icon support (left/right)

### Input
Text input with icon support and error states
- Sizes: `sm`, `md`, `lg`
- Icon support (left/right)
- Error state styling
- Base UI Input primitive

### Checkbox
Checkbox with label support
- Variants: `primary`, `secondary`
- Automatic ARIA attributes
- Base UI Checkbox primitive

### Switch
Toggle switch component
- Variants: `primary`, `secondary`
- Label support
- Base UI Switch primitive

### Dialog (Modal)
Modal dialog with backdrop
- Sizes: `sm`, `md`, `lg`, `xl`, `full`
- Auto focus management
- Escape key handling
- Base UI Dialog primitive

### Menu (Dropdown)
Dropdown menu with keyboard navigation
- MenuItem and MenuSeparator subcomponents
- Keyboard accessible
- Base UI Menu primitive

### Tabs
Tabbed interface
- TabsList, Tab, TabPanel subcomponents
- Keyboard navigation
- Base UI Tabs primitive

### Tooltip
Accessible tooltip
- Configurable delay
- Auto positioning
- Base UI Tooltip primitive

## Features

- Built on Base UI primitives
- Styled with Tailwind CSS + CVA
- Fully typed with TypeScript
- Accessible (WCAG AA compliant)
- Dark mode support via design tokens
- Customizable with className prop

## Styling

All components use Arkae design tokens and can be customized:

```tsx
<Button 
  variant="primary" 
  className="custom-class"
>
  Custom styled
</Button>
```

## Development

```bash
# Install dependencies
pnpm install

# Build package
pnpm build

# Run tests
pnpm test

# Watch mode
pnpm dev
```

## License

MIT
