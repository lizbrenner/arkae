# 🚀 Updated npm Publishing Guide (December 2025)

## ⚠️ IMPORTANT: npm Classic Tokens Revoked

As of December 9, 2025, npm has permanently revoked all classic tokens. Here's what changed:

### What Changed
- ❌ **Classic tokens** no longer work and can't be recreated
- ✅ **Session tokens** from `npm login` (expire in 2 hours)
- ✅ **Granular access tokens** for CI/CD (expire in 90 days max)
- ✅ 2FA bypass option for automated workflows

**Reference:** [npm Blog Post](https://github.blog/changelog/2025-12-09-npm-classic-tokens-revoked-session-based-auth-and-cli-token-management-now-available/)

---

## 📋 Updated Publishing Steps

### Step 1: Create npm Organization ✅
(This step is unchanged)

1. Go to https://www.npmjs.com
2. Click profile → "Add Organization"
3. Name: `arkae`
4. Choose: "Unlimited public packages" (Free)

### Step 2: Generate Granular Access Token (NEW!)

#### Method A: Using npm CLI (Easiest)

```bash
# Login first
npm login

# Create granular token
npm token create --read-write --cidr=0.0.0.0/0
```

**During token creation:**
- Token type: `Automation`
- Packages: Select `@arkae/*` or all packages
- **Enable "Bypass 2FA"**: ✅ YES (required for CI/CD)
- Expiration: 90 days (maximum for write access)
- **Save the token immediately!**

#### Method B: Using npm Website

1. Go to https://www.npmjs.com/settings/[username]/tokens
2. Click "Generate New Token" → **"Granular Access Token"**
3. Fill in:
   ```
   Token name: Arkae CI/CD Publishing
   Expiration: 90 days
   Allowed IP ranges: (leave blank for GitHub Actions)
   Organizations/scopes: @arkae
   Packages and scopes: All packages
   Permissions: Read and write
   ```
4. **Important:** Check ✅ "Bypass 2FA requirement"
5. Generate and **copy the token**

### Step 3: Add Token to GitHub

1. Go to: https://github.com/lizbrenner/arkae/settings/secrets/actions
2. Click "New repository secret"
3. Name: `NPM_TOKEN`
4. Value: [paste your granular token]
5. Click "Add secret"

### Step 4: Create First Changeset

```bash
cd /Users/liz.brenner@cognitedata.com/Documents/Arkae

# Create changeset
pnpm changeset
```

Select:
- Packages: `@arkae/library`, `@arkae/primitives`, `@arkae/tokens`
- Bump type: `minor`
- Summary: `Initial public release of Arkae design system`

### Step 5: Commit and Push

```bash
git add .
git commit -m "chore: prepare initial release"
git push
```

### Step 6: Merge Release PR

1. GitHub Actions creates a version bump PR
2. Review the PR
3. Merge it
4. Packages automatically publish to npm!

---

## 🔄 Token Maintenance (IMPORTANT!)

### Tokens Expire in 90 Days

Set a reminder to regenerate your token:

```bash
# When token expires (every ~90 days):
npm token create --read-write --cidr=0.0.0.0/0

# Then update GitHub secret:
# Settings → Secrets → Actions → NPM_TOKEN → Update
```

### Check Token Expiration

```bash
# List all tokens and expiration dates
npm token list
```

---

## 🛠️ Local Development vs CI/CD

### For Local Testing (Manual Publish)

```bash
# Login (creates 2-hour session)
npm login

# Publish manually
pnpm build
pnpm release
```

**Note:** Session expires in 2 hours. You'll need to `npm login` again.

### For CI/CD (Automated)

- Use granular access token (90-day expiration)
- Enable "Bypass 2FA" 
- Store as `NPM_TOKEN` secret in GitHub
- GitHub Actions handles publishing automatically

---

## 📦 Quick Commands Reference

```bash
# View publishing guide
./scripts/publish-guide.sh

# Verify setup
./scripts/verify-publish-setup.sh

# Create changeset
pnpm changeset

# Generate new token (when expired)
npm token create --read-write --cidr=0.0.0.0/0

# List existing tokens
npm token list

# Revoke a token
npm token revoke <token-id>

# Manual publish (after npm login)
pnpm build && pnpm release
```

---

## ❓ Troubleshooting

### "401 Unauthorized" Error

**Cause:** Token expired or invalid

**Fix:**
1. Generate new token: `npm token create --read-write`
2. Enable "Bypass 2FA"
3. Update GitHub secret: `NPM_TOKEN`

### "Missing 2FA Bypass" Error

**Cause:** Token doesn't have "Bypass 2FA" enabled

**Fix:**
1. Revoke old token
2. Create new token with "Bypass 2FA" checked
3. Update GitHub secret

### "Token Expired" Error

**Cause:** Granular tokens expire after 90 days

**Fix:**
1. Generate new token
2. Update `NPM_TOKEN` in GitHub secrets
3. Set calendar reminder for 90 days from now

### Local Publish Requires Reauthentication

**Cause:** Session tokens expire in 2 hours

**Fix:**
```bash
npm login  # Creates new 2-hour session
```

---

## 🔐 Security Best Practices

1. ✅ Use granular tokens (not classic tokens - they don't exist anymore)
2. ✅ Enable "Bypass 2FA" only for CI/CD tokens
3. ✅ Set 90-day expiration (maximum for write access)
4. ✅ Store tokens in GitHub Secrets (never commit to code)
5. ✅ Set calendar reminders for token renewal
6. ✅ Use `npm token list` to audit active tokens
7. ✅ Revoke unused tokens immediately

---

## 🎯 Next Steps

1. ✅ Create `@arkae` organization on npm
2. ✅ Generate granular access token with CLI or website
3. ✅ Add `NPM_TOKEN` to GitHub secrets
4. ✅ Run: `pnpm changeset`
5. ✅ Commit and push
6. ✅ Merge release PR
7. ✅ Set 90-day reminder to regenerate token

**Your packages will be live at:**
- https://www.npmjs.com/package/@arkae/library
- https://www.npmjs.com/package/@arkae/primitives
- https://www.npmjs.com/package/@arkae/tokens

Good luck! 🚀
