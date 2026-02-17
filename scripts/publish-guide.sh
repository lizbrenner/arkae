#!/bin/bash

# Quick Publishing Guide for Arkae

echo "📦 Arkae npm Publishing Guide"
echo "=============================="
echo ""

cat << 'EOF'
OPTION 1: Automatic Publishing (Recommended)
--------------------------------------------
This uses GitHub Actions to publish automatically.

1. Make your changes to any package
2. Create a changeset:
   $ pnpm changeset
   
   This will prompt you to:
   - Select which packages changed
   - Choose version bump (major/minor/patch)
   - Write a summary of changes

3. Commit and push:
   $ git add .
   $ git commit -m "your changes"
   $ git push

4. GitHub Actions will:
   - Create a PR with version bumps
   - When you merge the PR, packages are published to npm

OPTION 2: Manual Publishing
---------------------------
For testing or manual control:

1. Login to npm:
   $ npm login

2. Update versions:
   $ pnpm changeset
   $ pnpm version-packages

3. Build all packages:
   $ pnpm build

4. Publish:
   $ pnpm release

First-Time Setup Required:
-------------------------
Before publishing for the first time:

✓ Create npm account at https://www.npmjs.com
✓ Create @arkae organization (free, unlimited public packages)
✓ Generate npm token (Settings → Access Tokens → Generate)
✓ Add NPM_TOKEN to GitHub Secrets (for automatic publishing)

Package Structure:
-----------------
@arkae/library      - Main package (install this for everything)
@arkae/tokens       - Design tokens
@arkae/primitives   - UI components
@arkae/compositions - Complex components
@arkae/ai-tools     - AI utilities
@arkae/metrics      - Usage tracking
@arkae/evaluators   - LLM evaluation
@arkae/cli          - Command-line tool

Installation After Publishing:
-----------------------------
$ npm install @arkae/library

Need Help?
---------
Run: ./scripts/verify-publish-setup.sh
Docs: See PUBLISHING_SETUP.md
EOF
