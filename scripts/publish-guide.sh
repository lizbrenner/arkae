#!/bin/bash

# Quick Publishing Guide for Arkae

echo "📦 Arkae npm Publishing Guide"
echo "=============================="
echo ""

cat << 'EOF'
⚠️  IMPORTANT: npm Token Changes (December 2025)
-----------------------------------------------
npm classic tokens have been revoked. New authentication:

For local development:
  $ npm login
  → Creates 2-hour session tokens (auto-expires)

For CI/CD (GitHub Actions):
  $ npm token create --read-write --cidr=0.0.0.0/0
  → Creates granular access token
  → MUST enable "Bypass 2FA" for automation
  → Expires in 90 days (need to regenerate)
  → Add as NPM_TOKEN secret in GitHub

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
   (Note: Session expires in 2 hours)

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
✓ Generate granular token:
  - CLI: npm token create --read-write --cidr=0.0.0.0/0
  - Web: https://www.npmjs.com/settings/tokens
  - Enable "Bypass 2FA" for CI/CD
  - Set 90-day expiration (maximum for write tokens)
✓ Add NPM_TOKEN to GitHub Secrets

Token Maintenance:
-----------------
⚠️  Tokens expire after 90 days. You'll need to:
  1. Generate new token: npm token create --read-write
  2. Update GitHub secret NPM_TOKEN
  3. Mark calendar for next renewal

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
npm Guide: https://github.blog/changelog/2025-12-09-npm-classic-tokens-revoked-session-based-auth-and-cli-token-management-now-available/
EOF
