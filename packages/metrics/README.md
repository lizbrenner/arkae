# @arkae/metrics

Usage metrics and tracking for Arkae design system.

## Installation

```bash
npm install @arkae/metrics
```

## Features

Track and analyze:
- Component usage patterns
- Prop combinations
- Performance metrics
- Deviations from standard components

## Usage

```typescript
import { trackComponent, getMetrics } from '@arkae/metrics';

// Track component usage
trackComponent('Button', {
  variant: 'primary',
  size: 'md',
});

// Get usage metrics
const metrics = getMetrics();
```

## Development

```bash
pnpm build    # Build the package
pnpm dev      # Watch mode
```

## License

MIT
