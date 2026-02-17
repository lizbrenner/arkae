# @arkae/evaluators

LLM-based evaluation framework for Arkae design system usage.

## Installation

```bash
npm install @arkae/evaluators
```

## Features

Evaluate design system usage with LLMs:
- Component implementation quality
- Adherence to design patterns
- Accessibility compliance
- Best practices validation

## Usage

```typescript
import { evaluateComponent, evaluateUsage } from '@arkae/evaluators';

// Evaluate a component implementation
const evaluation = await evaluateComponent({
  code: componentCode,
  expectedPatterns: ['proper prop usage', 'accessibility'],
});

// Get usage score
const score = evaluation.score;
const suggestions = evaluation.suggestions;
```

## Development

```bash
pnpm build    # Build the package
pnpm dev      # Watch mode
```

## License

MIT
