# @arkae/compositions

Complex component compositions built on Arkae primitives.

## Installation

```bash
npm install @arkae/compositions
# or install the complete library
npm install @arkae/library
```

## Usage

```tsx
import { FormField, Card } from '@arkae/compositions';

function MyForm() {
  return (
    <FormField
      label="Email"
      error="Invalid email"
      helperText="Enter your email address"
    >
      <Input type="email" />
    </FormField>
  );
}
```

## Components

Compositions combine primitives into common UI patterns:
- FormField - Label, Input, and error/helper text
- Card - Card with Header, Title, Description, Content, Footer
- DataTable - Feature-rich data tables
- And more...

## Development

```bash
pnpm build    # Build the package
pnpm dev      # Watch mode
pnpm test     # Run tests
```

## License

MIT
