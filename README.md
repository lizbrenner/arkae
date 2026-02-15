# Arkae Design System

> **Arkae** (A-R-K-A-E): From the Greek "archae" meaning "origin" or "first principle"

An AI-native design system built on Base UI primitives for web products and platforms.

## Overview

Arkae is a comprehensive design system that combines:
- **Base UI primitives** - Accessible, headless components
- **Design tokens** - Flexible, scalable styling system
- **AI-powered tools** - Theme generation, component creation, accessibility analysis
- **Usage metrics** - Track and evaluate component usage quality
- **Developer tooling** - CLI, Cursor integration, and comprehensive documentation

## Status

🚧 **In Development** - Currently setting up the monorepo structure and core packages.

## Repository Structure

This is a monorepo managed with pnpm workspaces and Turborepo.

Planned packages:
- `@arkae/tokens` - Design tokens and theme system
- `@arkae/primitives` - Base UI wrappers with Arkae styling
- `@arkae/compositions` - Complex component patterns
- `@arkae/ai-tools` - AI-powered utilities
- `@arkae/metrics` - Usage tracking and analytics
- `@arkae/evaluators` - LLM-based quality evaluation

## Getting Started

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development
pnpm dev
```

## License

MIT
