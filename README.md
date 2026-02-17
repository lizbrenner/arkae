# Arkae Design System

> **Arkae** (A-R-K-A-E): From the Greek "archae" meaning "origin" or "first principle"

An AI-native design system built on Base UI primitives for web products and platforms.

[![Storybook](https://img.shields.io/badge/Storybook-View%20Components-ff4785?style=for-the-badge&logo=storybook&logoColor=white)](https://lizbrenner.github.io/arkae/)
[![npm](https://img.shields.io/npm/v/@arkae/library?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@arkae/library)

## Installation

### Quick Start - Install Everything

```bash
npm install @arkae/library
# or
pnpm add @arkae/library
# or
yarn add @arkae/library
```

This gives you access to all Arkae packages: primitives, tokens, and compositions.

### Install Individual Packages

```bash
# Design tokens only
npm install @arkae/tokens

# Primitive components only
npm install @arkae/primitives

# Composition components only
npm install @arkae/compositions
```

## Usage

```tsx
import { Button, Input, tokens } from '@arkae/library';

function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        Get Started
      </Button>
      <Input placeholder="Enter your email" />
    </div>
  );
}
```

## Overview

Arkae is a comprehensive design system that combines:
- **Base UI primitives** - Accessible, headless components
- **Design tokens** - Flexible, scalable styling system
- **AI-powered tools** - Theme generation, component creation, accessibility analysis
- **Usage metrics** - Track and evaluate component usage quality
- **Developer tooling** - CLI, Cursor integration, and comprehensive documentation

## Packages

### Core Packages

- **[@arkae/library](./packages/library)** - Complete design system (recommended)
- **[@arkae/tokens](./packages/tokens)** - Design tokens and theme system
- **[@arkae/primitives](./packages/primitives)** - Base UI wrappers with Arkae styling
- **[@arkae/compositions](./packages/compositions)** - Complex component patterns

### AI & Tooling Packages

- **[@arkae/ai-tools](./packages/ai-tools)** - AI-powered utilities (theme generation, component creation)
- **[@arkae/metrics](./packages/metrics)** - Usage tracking and analytics
- **[@arkae/evaluators](./packages/evaluators)** - LLM-based quality evaluation
- **[@arkae/cli](./tools/cli)** - Command-line interface

## Features

- 🎨 **Design Tokens** - Consistent styling with semantic tokens
- ♿ **Accessible** - Built on Base UI with WCAG compliance
- 🎯 **TypeScript** - Full type safety
- 🌗 **Dark Mode** - Built-in dark mode support
- 🎭 **Variants** - Multiple style variants using CVA
- 🤖 **AI-Native** - AI-powered theming and component generation
- 📦 **Tree-shakeable** - Only bundle what you use
- ⚡ **Performance** - Optimized and lightweight

## Status

✅ **Packages Completed:**
- `@arkae/tokens` - Design tokens and Tailwind preset
- `@arkae/primitives` - 8 Base UI wrapped components
- `@arkae/library` - Umbrella package for easy installation
- `@arkae/storybook` - Interactive component documentation

🚧 **In Progress:**
- Compositions package
- AI tools integration

## Documentation

**[📚 View Storybook](https://lizbrenner.github.io/arkae/)** - Interactive component documentation and design tokens showcase

## Development

This is a monorepo managed with pnpm workspaces and Turborepo.

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development mode
pnpm dev

# Run tests
pnpm test

# Type check
pnpm type-check

# Format code
pnpm format
```

## Publishing

This project uses [Changesets](https://github.com/changesets/changesets) for version management and publishing.

### Creating a Changeset

When you make changes that should be published:

```bash
pnpm changeset
```

This will:
1. Prompt you to select which packages changed
2. Choose the version bump type (major/minor/patch)
3. Write a summary of the changes

### Publishing Packages

Releases are automated via GitHub Actions. When changesets are merged to `main`:
1. A PR is automatically created with version bumps and changelogs
2. Merging that PR triggers publishing to npm

Manual publishing (maintainers only):
```bash
pnpm version-packages  # Bump versions
pnpm build            # Build all packages
pnpm release          # Publish to npm
```

## Requirements

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- React >= 18.0.0 (peer dependency)

## License

MIT
