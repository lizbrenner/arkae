# Complete Arkae Development & Publishing Roadmap

## Current Status

✅ **Completed:**
- Git repository initialized and synced
- Monorepo structure with Turborepo + pnpm workspaces
- `@arkae/tokens` - Complete design token system
- `@arkae/primitives` - 8 Base UI wrapped components (Button, Input, Checkbox, Switch, Dialog, Menu, Tabs, Tooltip)
- `@arkae/library` - Umbrella package for easy installation
- Publishing infrastructure with OIDC
- GitHub Actions workflows (CI + Release)
- Comprehensive documentation

---

# Phase 1: Publishing to npm (OIDC Method)

## Step 1: Create npm Organization (5 min)

1. Go to https://www.npmjs.com
2. Log in with your account
3. Click your profile picture → **"Add Organization"**
4. Fill in:
   - Organization name: `arkae`
   - Organization type: **"Unlimited public packages"** (Free)
5. Click **"Create"**

**Result:** You now own the `@arkae` scope on npm

---

## Step 2: Prepare First Release (5 min)

In your terminal:

```bash
cd /Users/liz.brenner@cognitedata.com/Documents/Arkae

# Create a changeset for the initial release
pnpm changeset
```

**When prompted:**
- Which packages changed? Select:
  - `@arkae/library`
  - `@arkae/primitives`
  - `@arkae/tokens`
  - `@arkae/compositions`
- What bump type? **`minor`** (0.1.0 → 0.2.0)
- Summary: `Initial public release of Arkae design system`

**This creates a changeset file** describing what will be published.

---

## Step 3: Manual First Publish (10 min)

```bash
# Login to npm (creates 2-hour session)
npm login
# Follow prompts to authenticate

# Update versions from changesets
pnpm version-packages

# Build all packages
pnpm build

# Publish to npm
pnpm release
```

**What happens:**
- Publishes all 4 main packages to npm
- Claims the `@arkae/*` namespace
- Packages are now live on npm!

**Verify:** Check https://www.npmjs.com/package/@arkae/library

---

## Step 4: Configure OIDC for Each Package (5 min per package)

Now that packages exist, configure OIDC so future publishes are automatic:

### For @arkae/library:

1. Go to: https://www.npmjs.com
2. Search for `@arkae/library` and click it
3. Click the **"Settings"** tab
4. Scroll to **"Publishing access"** section
5. Click **"Set up trusted publisher"**
6. Select **"GitHub Actions"**
7. Fill in:
   ```
   Workflow filename: release.yml
   Repository owner: lizbrenner
   Repository name: arkae
   Environment: (leave blank)
   ```
8. Click **"Save"**

### Repeat for:
- `@arkae/primitives` - https://www.npmjs.com/package/@arkae/primitives/settings
- `@arkae/tokens` - https://www.npmjs.com/package/@arkae/tokens/settings
- `@arkae/compositions` - https://www.npmjs.com/package/@arkae/compositions/settings

---

## Step 5: Test OIDC Publishing (5 min)

```bash
# Make a small change or just create a test changeset
pnpm changeset
# Select one package, bump "patch", summary: "test OIDC"

# Commit and push
git add .
git commit -m "chore: test OIDC publishing"
git push
```

**Watch GitHub Actions:**
1. Go to: https://github.com/lizbrenner/arkae/actions
2. Watch the "Release" workflow run
3. It creates a version bump PR
4. Merge the PR
5. Workflow publishes via OIDC automatically! ✅

**Verify provenance:**
- Check package page on npm
- Should show provenance badge
- Links to GitHub Actions run

---

## Step 6: Verify Installation Works

Test that users can install your design system:

```bash
# In a temporary test directory
mkdir test-arkae-install
cd test-arkae-install
npm init -y
npm install @arkae/library

# Verify it installed
ls node_modules/@arkae/
# Should see: library, primitives, tokens, compositions
```

---

# Phase 2: Continue Development - Next Components

Now that publishing is set up, continue building the design system!

## Next: Compositions Package (3-4 hours)

Build complex component compositions using primitives:

### Components to Create:

1. **FormField** - Label + Input + Error/Helper text
2. **Card** - Container with Header, Content, Footer
3. **Alert** - Notification messages with variants
4. **Badge** - Small status indicators
5. **Avatar** - User profile images with fallback
6. **Breadcrumb** - Navigation path display
7. **Pagination** - Page navigation controls
8. **Modal** (enhanced Dialog) - Dialog with header/footer patterns

### Tasks:
- [ ] Create `FormField` component
- [ ] Create `Card` component family
- [ ] Create `Alert` component
- [ ] Create `Badge` component
- [ ] Create `Avatar` component
- [ ] Create `Breadcrumb` component
- [ ] Create `Pagination` component
- [ ] Create enhanced `Modal` component
- [ ] Build and test compositions package
- [ ] Update `@arkae/library` to export compositions
- [ ] Create changeset and publish update

---

## Next: Storybook Setup (2-3 hours)

Set up Storybook for component development and documentation:

### Tasks:
- [ ] Initialize Storybook in `apps/storybook`
- [ ] Configure for React + TypeScript
- [ ] Add accessibility addon (@storybook/addon-a11y)
- [ ] Create stories for all primitives
- [ ] Create stories for all compositions
- [ ] Add controls and documentation
- [ ] Configure dark mode toggle
- [ ] Deploy Storybook to GitHub Pages or Vercel

---

## Next: AI Tools Package (4-6 hours)

Implement AI-powered features:

### AI Tools to Build:

1. **Theme Generator**
   - Input: Description or image
   - Output: Complete design token set
   - Uses: OpenAI/Anthropic API

2. **Component Generator**
   - Input: Natural language description
   - Output: React component code
   - Uses: LLM with Arkae component templates

3. **Accessibility Analyzer**
   - Input: Component code
   - Output: A11y suggestions and fixes
   - Uses: LLM + axe-core

4. **Color Palette Generator**
   - Input: Brand colors
   - Output: Complete color system with accessibility checks

### Tasks:
- [ ] Set up AI API clients (OpenAI/Anthropic)
- [ ] Create theme generator with prompt templates
- [ ] Build component generator
- [ ] Implement accessibility analyzer
- [ ] Create color palette generator
- [ ] Add comprehensive error handling
- [ ] Write tests for AI tools
- [ ] Create CLI commands for AI tools
- [ ] Document API usage and examples

---

## Next: Documentation Site (3-4 hours)

Build Next.js documentation site:

### Site Structure:
```
/                    - Landing page
/docs/getting-started - Installation guide
/docs/tokens         - Design tokens documentation
/docs/components     - Component docs with live examples
/docs/ai-features    - AI tools guide
/docs/theming        - Customization guide
/docs/accessibility  - A11y guidelines
```

### Tasks:
- [ ] Initialize Next.js app in `apps/docs`
- [ ] Set up MDX for documentation
- [ ] Create landing page
- [ ] Generate component documentation pages
- [ ] Add interactive examples
- [ ] Set up search functionality
- [ ] Configure Vercel deployment
- [ ] Add analytics (optional)

---

## Next: Testing Infrastructure (2-3 hours)

Comprehensive testing setup:

### Testing Layers:

1. **Unit Tests** (Vitest + Testing Library)
   - Component behavior
   - Token utilities
   - AI tools functions

2. **Accessibility Tests** (jest-axe)
   - WCAG compliance
   - ARIA attributes
   - Keyboard navigation

3. **Visual Regression** (Chromatic)
   - Component appearance
   - Dark mode variants
   - Responsive layouts

4. **E2E Tests** (Playwright)
   - User workflows
   - Integration scenarios

### Tasks:
- [ ] Set up Vitest for all packages
- [ ] Write unit tests for primitives
- [ ] Write unit tests for compositions
- [ ] Add jest-axe accessibility tests
- [ ] Set up Chromatic for visual testing
- [ ] Configure Playwright for E2E
- [ ] Add test coverage reporting
- [ ] Update CI workflow to run tests

---

## Next: CLI Tool (2-3 hours)

Build command-line interface:

### CLI Commands:

```bash
arkae init              # Initialize Arkae in a project
arkae theme generate    # Generate themes with AI
arkae component create  # Create components with AI
arkae a11y check        # Analyze accessibility
arkae metrics report    # View usage metrics
arkae eval run          # Run LLM evaluations
```

### Tasks:
- [ ] Set up Commander.js framework
- [ ] Implement `init` command with project setup
- [ ] Create `theme generate` with AI integration
- [ ] Build `component create` command
- [ ] Add `a11y check` analyzer
- [ ] Implement metrics commands
- [ ] Add evaluation runner
- [ ] Create interactive prompts with inquirer
- [ ] Add progress indicators with ora
- [ ] Write CLI documentation

---

## Next: Metrics & Evaluators (3-4 hours)

Track usage and evaluate implementation quality:

### Metrics System:
- Component usage tracking
- Prop combination analytics
- Performance metrics
- Deviation detection

### LLM Evaluators:
- Component implementation quality
- Design pattern adherence
- Accessibility compliance scoring
- Best practices validation

### Tasks:
- [ ] Build metrics collection system
- [ ] Create analytics dashboard data
- [ ] Implement LLM evaluation framework
- [ ] Create evaluation prompts and criteria
- [ ] Add scoring algorithms
- [ ] Build reporting utilities
- [ ] Integrate with CLI tool
- [ ] Create evaluation documentation

---

## Next: Cursor Integration (1-2 hours)

AI-assisted development with Cursor rules and skills:

### Cursor Rules (`.cursor/rules/`):
- Arkae component patterns
- Design token usage
- Accessibility requirements
- Testing standards

### Cursor Skills (`.cursor/skills/`):
- Generate Arkae components
- Apply design tokens
- Create accessible patterns
- Run evaluations

### Tasks:
- [ ] Create Arkae component rules
- [ ] Write design token rules
- [ ] Add accessibility rules
- [ ] Create component generation skill
- [ ] Build evaluation skill
- [ ] Document Cursor integration

---

# Publishing Workflow (After Initial Setup)

Once OIDC is configured, publishing new versions is simple:

```bash
# 1. Make your changes to any package
# 2. Create changeset
pnpm changeset

# 3. Commit and push
git add .
git commit -m "feat: add new component"
git push

# 4. GitHub Actions automatically:
#    - Creates version bump PR
#    - You merge it
#    - Publishes to npm via OIDC
#    - Adds provenance attestation
```

**No tokens, no manual steps, fully automated!**

---

# Timeline Estimate

| Phase | Time | Status |
|-------|------|--------|
| Publishing Setup (OIDC) | 30-45 min | 🎯 Do this now |
| Compositions Package | 3-4 hours | Next |
| Storybook Setup | 2-3 hours | After compositions |
| AI Tools | 4-6 hours | After Storybook |
| Documentation Site | 3-4 hours | Parallel with AI |
| Testing Infrastructure | 2-3 hours | After components |
| CLI Tool | 2-3 hours | After AI tools |
| Metrics & Evaluators | 3-4 hours | After CLI |
| Cursor Integration | 1-2 hours | Final polish |

**Total remaining:** ~20-30 hours of development

---

# Priority Order Recommendation

1. **🔥 NOW: Publishing** (30 min) - Get packages on npm
2. **Compositions** - Complete core component library
3. **Storybook** - Visual documentation and testing
4. **AI Tools** - The differentiating AI-native features
5. **Testing** - Ensure quality
6. **Documentation Site** - Public-facing docs
7. **CLI Tool** - Developer experience
8. **Metrics/Evaluators** - Usage insights
9. **Cursor Integration** - Development workflow

---

# Your Immediate Action Plan

## Today: Get Published on npm ⭐

```bash
# 1. Create @arkae organization (5 min)
#    → https://www.npmjs.com

# 2. Login and prepare
npm login
pnpm changeset

# 3. First publish
pnpm version-packages
pnpm build
pnpm release

# 4. Configure OIDC for each package (15 min)
#    → Visit each package's settings page on npm.com

# 5. Test OIDC
pnpm changeset
git add . && git commit -m "test: OIDC"
git push
#    → Watch GitHub Actions publish automatically
```

## This Week: Core Components

- Build `@arkae/compositions` package
- Set up Storybook
- Create stories for all components

## Next Week: AI Features

- Implement AI tools
- Build CLI
- Add metrics/evaluators

---

# Success Metrics

**After Phase 1 (Publishing):**
- ✅ Can run: `npm install @arkae/library`
- ✅ Packages appear on npmjs.com with provenance
- ✅ GitHub Actions publishes automatically
- ✅ No token maintenance needed

**After Phase 2 (Compositions):**
- ✅ 15+ total components (8 primitives + 7+ compositions)
- ✅ Storybook live with interactive docs
- ✅ Full component coverage

**After Phase 3 (AI Features):**
- ✅ AI theme generation working
- ✅ AI component generation
- ✅ A11y analysis tool
- ✅ CLI installed and functional

**Final State:**
- ✅ Complete, published design system
- ✅ AI-native features operational
- ✅ Comprehensive documentation
- ✅ Testing infrastructure
- ✅ Ready for portfolio/production use

---

# Quick Reference

**View publishing guide:**
```bash
cat OIDC_SETUP_GUIDE.md
```

**Create changeset:**
```bash
pnpm changeset
```

**Build everything:**
```bash
pnpm build
```

**Publish manually:**
```bash
npm login
pnpm build && pnpm release
```

**Check package on npm:**
```
https://www.npmjs.com/package/@arkae/library
```

---

Ready to start with Step 1 (creating the npm organization)?
