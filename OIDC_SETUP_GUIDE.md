# OIDC Trusted Publishing Setup for Arkae

**OIDC (OpenID Connect)** allows GitHub Actions to publish to npm without managing tokens.

## Benefits

✅ **No tokens to manage** - No secrets, no rotation, no expiration  
✅ **More secure** - Nothing to leak or steal  
✅ **No 2FA bypass needed** - Direct authentication  
✅ **Automatic provenance** - Cryptographic proof of package origin  
✅ **Better audit trail** - Clear publishing history  

---

## Important: OIDC is Per-Package, Not Organization-Wide

Unlike what the old docs suggested, OIDC settings are configured **for each individual package**, not at the organization level. You'll need to configure it after your first publish.

---

## Setup Steps

### Prerequisites
- ✅ npm account created
- ✅ `@arkae` organization created on npm
- ✅ Maintainer access to the organization

### Step 1: Create npm Organization

1. Go to https://www.npmjs.com
2. Click profile → "Add Organization"
3. Name: `arkae`
4. Type: "Unlimited public packages" (Free)

### Step 2: First Publish (Claims Package Names)

**You must publish packages at least once before configuring OIDC.**

Choose one approach:

#### Option A: Manual First Publish (Recommended for simplicity)

```bash
# Login to npm (2-hour session)
npm login

# Build and publish
pnpm build
pnpm release
```

This publishes all packages under `@arkae/*` and claims the names.

#### Option B: Token-Based First Publish via GitHub Actions

1. Create temporary granular token:
   ```bash
   npm token create --read-write --cidr=0.0.0.0/0
   ```
2. Enable "Bypass 2FA"
3. Add as `NPM_TOKEN` in GitHub Secrets
4. Push changeset to trigger workflow
5. Let GitHub Actions publish

### Step 3: Configure OIDC for Each Package

**After packages are published**, configure OIDC:

1. **Navigate to package settings:**
   ```
   https://www.npmjs.com/package/@arkae/library/settings
   https://www.npmjs.com/package/@arkae/primitives/settings
   https://www.npmjs.com/package/@arkae/tokens/settings
   https://www.npmjs.com/package/@arkae/compositions/settings
   ```

2. **In the "Publishing access" section:**
   - Look for "Trusted Publisher" or "Publishing Provider"
   - Click "Set up trusted publisher"

3. **Select "GitHub Actions"**

4. **Fill in the form:**
   ```
   Workflow filename: release.yml
   Repository owner: lizbrenner
   Repository name: arkae
   Environment: (leave blank or use "production")
   ```

5. **Save** for each package

### Step 4: Remove NPM_TOKEN (After OIDC is Working)

Once OIDC is configured and tested:
1. Go to: https://github.com/lizbrenner/arkae/settings/secrets/actions
2. Delete `NPM_TOKEN` secret (no longer needed!)

---

## How to Find Package Settings Page

Since direct links might not work, here's how to navigate:

### Method 1: Via Package Page
1. Go to https://www.npmjs.com
2. Search for your package (e.g., `@arkae/library`)
3. Click on the package
4. Click the **"Settings"** tab at the top
5. Scroll to "Publishing access" or "Trusted Publisher" section

### Method 2: Via Your Profile
1. Go to https://www.npmjs.com/~[your-username]
2. Click "Packages"
3. Find and click on `@arkae/library`
4. Click "Settings" tab
5. Look for "Trusted Publisher" section

### Method 3: Direct URL Pattern
```
https://www.npmjs.com/package/@arkae/PACKAGE-NAME/settings
```

Replace `PACKAGE-NAME` with:
- `library`
- `primitives`
- `tokens`
- `compositions`

---

## Complete Workflow

### First Time Publishing

```bash
# Step 1: Create organization on npm.com
# (via website)

# Step 2: Create changeset
pnpm changeset
# Select: @arkae/library, @arkae/primitives, @arkae/tokens
# Bump: minor
# Summary: Initial release with OIDC

# Step 3: Manual first publish
npm login
pnpm build
pnpm release

# Step 4: Configure OIDC for each published package
# Go to each package settings page on npm.com
# Set up GitHub Actions as trusted publisher

# Step 5: Future publishes use OIDC automatically!
pnpm changeset
git add . && git commit -m "chore: version bump"
git push
# GitHub Actions publishes via OIDC ✅
```

---

## How OIDC Works

```
GitHub Actions Workflow Run
         ↓
Requests OIDC token from GitHub
         ↓
GitHub issues short-lived token with claims:
  - Repository: lizbrenner/arkae
  - Workflow: release.yml
  - Commit SHA
         ↓
GitHub Actions uses token to publish to npm
         ↓
npm verifies token signature
         ↓
npm checks "Trusted Publisher" config
         ↓
Match found → Publish succeeds with provenance! ✅
```

**Token lifetime:** Only exists during the workflow run (minutes)

---

## Verification

After your first OIDC publish:

### Check Provenance

Visit: `https://www.npmjs.com/package/@arkae/library`

Look for:
- ✅ **Provenance badge** - Shows OIDC publishing
- 🔍 **Build details** - Links to GitHub Actions run
- 🔐 **Attestation** - Cryptographic proof of origin

### Verify Settings

```bash
npm view @arkae/library
```

Should show OIDC provenance in the output.

---

## Troubleshooting

### Can't Find "Trusted Publisher" Section

**Cause:** Package doesn't exist yet (needs first publish)

**Fix:** Publish the package once (manually or with token), then configure OIDC

### "403 Forbidden" Error

**Cause:** OIDC not configured for the package

**Fix:**
1. Go to package settings page
2. Set up trusted publisher with GitHub Actions
3. Ensure workflow filename matches: `release.yml`

### "id-token permission denied"

**Cause:** GitHub Actions needs permission

**Fix:** Already configured in `.github/workflows/release.yml`:
```yaml
permissions:
  id-token: write  # ✅ Required
```

### Package Page Shows 404

**Cause:** Package name not yet claimed/published

**Fix:** Do first publish to claim the name

---

## Comparison: Token vs OIDC

| Aspect | Granular Token | OIDC |
|--------|----------------|------|
| **Setup** | Create token, add to GitHub | Configure per package after first publish |
| **Secrets** | Store NPM_TOKEN in GitHub | None needed |
| **Expiration** | 90 days | Per-run (minutes) |
| **Rotation** | Manual every 90 days | Automatic |
| **2FA bypass** | Required | Not needed |
| **Security** | Medium | High |
| **Maintenance** | Ongoing | None |
| **First publish** | Can use for first publish | Need token/manual for first publish |

---

## Recommended Workflow

**For you (starting fresh):**

1. ✅ Create `@arkae` organization
2. ✅ Do first publish manually: `npm login` → `pnpm release`
3. ✅ Configure OIDC for each package on npm.com
4. ✅ All future publishes use OIDC (no tokens!)

**Simple, secure, and maintenance-free!**

---

## Additional Resources

- [npm Trusted Publishing Docs](https://docs.npmjs.com/trusted-publishers)
- [GitHub OIDC Guide](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)
- [npm Provenance Blog](https://github.blog/2023-04-19-introducing-npm-package-provenance/)

---

## Next Steps

1. ✅ Create `@arkae` organization on npm
2. ✅ Run `npm login` on your machine
3. ✅ Create changeset: `pnpm changeset`
4. ✅ Manual first publish: `pnpm build && pnpm release`
5. ✅ Configure OIDC in each package's settings page
6. ✅ Future publishes happen automatically via OIDC! 🚀

**No tokens, no expiration, no maintenance!**
