# @arkae/ai-tools

AI-powered tools for the Arkae design system.

## Installation

```bash
npm install @arkae/ai-tools
```

## Features

### Theme Generator
Generate complete design themes from descriptions or images.

### Component Generator
Create custom components from natural language descriptions.

### Accessibility Analyzer
AI-powered accessibility analysis and suggestions.

## Usage

```typescript
import { generateTheme, analyzeAccessibility } from '@arkae/ai-tools';

// Generate a theme
const theme = await generateTheme({
  description: 'Modern, vibrant theme with purple accents',
});

// Analyze component accessibility
const analysis = await analyzeAccessibility({
  component: MyComponent,
});
```

## Development

```bash
pnpm build    # Build the package
pnpm dev      # Watch mode
```

## License

MIT
