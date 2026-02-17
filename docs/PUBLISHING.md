# Publishing Workflow Guide

This document outlines the automated publishing workflow for Arkae packages.

## Overview

Arkae uses [Changesets](https://github.com/changesets/changesets) and GitHub Actions to automate the versioning and publishing process. This ensures consistent releases and maintains proper semantic versioning.

## Publishing Flow

### 1. Make Your Changes

Work on your features, fixes, or documentation updates as normal:

```bash
# Make changes to any package
# Example: Update Button component
vim packages/primitives/src/Button/Button.tsx

# Build and test locally
pnpm build
pnpm test
```

### 2. Create a Changeset

Once your changes are ready, document them with a changeset:

```bash
pnpm changeset
```

You'll be prompted to:
1. **Select packages**: Choose which packages are affected by your changes
2. **Select version bump type**:
   - `patch` - Bug fixes and minor updates (1.0.0 → 1.0.1)
   - `minor` - New features, backwards compatible (1.0.0 → 1.1.0)
   - `major` - Breaking changes (1.0.0 → 2.0.0)
3. **Write a summary**: Describe your changes for the changelog

This creates a markdown file in `.changeset/` directory.

### 3. Commit and Push

Commit your changes along with the changeset file:

```bash
git add .
git commit -m "feat: add new button variant"
git push origin main
```

### 4. GitHub Actions Creates Version PR

When you push to `main`:

1. **CI workflow** runs to verify build and tests
2. **Release workflow** detects the changeset
3. GitHub Actions automatically creates a PR titled **"chore: version packages"**

This PR will contain:
- Updated `package.json` versions for affected packages
- Generated/updated `CHANGELOG.md` files
- Consumed changeset files (moved to history)

### 5. Review and Merge the Version PR

1. Go to https://github.com/lizbrenner/arkae/pulls
2. Review the "chore: version packages" PR
3. Check that:
   - Versions are bumped correctly
   - CHANGELOGs look good
   - All checks pass
4. **Merge the PR**

### 6. Automatic Publishing

When you merge the version PR:

1. **Release workflow** runs automatically
2. Packages are built
3. Packages are published to npm with provenance
4. Git tags are created for each published version

Your packages are now live on npm! 🎉

## Checking Published Packages

Verify your packages are published:

```bash
# Check specific package
npm view @arkae/library
npm view @arkae/primitives
npm view @arkae/tokens

# Or visit npm directly
open https://www.npmjs.com/package/@arkae/library
```

## Installing Published Packages

Once published, anyone can install:

```bash
# Install complete design system
npm install @arkae/library

# Or install individual packages
npm install @arkae/primitives @arkae/tokens
```

## Quick Reference Commands

```bash
# Create a changeset
pnpm changeset

# Preview what versions would be bumped (local testing)
pnpm changeset version

# Build all packages
pnpm build

# Run all tests
pnpm test

# Check types
pnpm type-check

# Format code
pnpm format
```

## Version Bump Guidelines

### Patch (1.0.0 → 1.0.1)
- Bug fixes
- Documentation updates
- Internal refactoring (no API changes)
- Dependency updates (non-breaking)

### Minor (1.0.0 → 1.1.0)
- New features (backwards compatible)
- New components or utilities
- Deprecations (not removals)
- Significant documentation additions

### Major (1.0.0 → 2.0.0)
- Breaking API changes
- Removed deprecated features
- Major architectural changes
- Minimum version requirement changes (React, Node, etc.)

## Troubleshooting

### Workflow Failed

If the GitHub Actions workflow fails:

1. **Check the logs**: Click on the failed workflow run in Actions tab
2. **Common issues**:
   - Missing `NPM_TOKEN` secret
   - Build errors (fix locally, commit, push)
   - Test failures
   - npm authentication issues

### No Version PR Created

If no PR is created after pushing a changeset:

1. Check that you committed the `.changeset/*.md` file
2. Verify the Release workflow ran (check Actions tab)
3. Look for errors in the workflow logs

### Need to Skip CI

If you need to push without triggering workflows:

```bash
git commit -m "docs: update readme [skip ci]"
```

### Manual Publish (Emergency)

If you need to publish manually:

```bash
# Build everything
pnpm build

# Publish with changesets
pnpm release

# Push tags
git push --follow-tags
```

## Workflow Files

The automation is powered by these workflows:

- `.github/workflows/ci.yml` - Runs tests and builds on every PR
- `.github/workflows/release.yml` - Handles versioning and publishing

## Package Configuration

Each package must have:

- Correct `name` in `package.json` (e.g., `@arkae/primitives`)
- Proper `exports` configuration
- Build script that outputs to `dist/`
- `.npmignore` or `files` field to control published files

## npm Provenance

Arkae packages are published with npm provenance enabled, which:
- Links packages to the source code and build
- Provides transparency about package origins
- Enhances security for consumers

You can verify provenance at:
https://www.npmjs.com/package/@arkae/library?activeTab=provenance

## Resources

- [Changesets Documentation](https://github.com/changesets/changesets)
- [Semantic Versioning](https://semver.org/)
- [npm Provenance](https://docs.npmjs.com/generating-provenance-statements)
- [GitHub Actions](https://docs.github.com/en/actions)
