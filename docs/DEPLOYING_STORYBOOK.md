# Deploying Storybook to GitHub Pages

This guide explains how to deploy your Arkae Storybook to GitHub Pages for easy sharing and portfolio showcase.

## Automatic Deployment (Recommended)

The repository is configured to automatically deploy Storybook to GitHub Pages whenever you push to the `main` branch.

### Prerequisites

1. **Enable GitHub Pages** in your repository settings
2. **Configure the workflow permissions** (one-time setup)

### Setup Steps

#### 1. Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/lizbrenner/arkae
2. Click **Settings** (tab at the top)
3. In the left sidebar, click **Pages**
4. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"**
5. Save (the setting should save automatically)

#### 2. Verify Workflow Permissions

The workflow permissions should already be correct from the npm publishing setup, but verify:

1. Go to **Settings → Actions → General**
2. Scroll to **"Workflow permissions"**
3. Ensure:
   - ✅ **"Read and write permissions"** is selected
   - ✅ **"Allow GitHub Actions to create and approve pull requests"** is checked

#### 3. Trigger First Deployment

You can trigger deployment in two ways:

**Option A: Push a commit**
```bash
git add .
git commit -m "feat: add Storybook deployment"
git push origin main
```

**Option B: Manual trigger**
1. Go to **Actions** tab
2. Click **"Deploy Storybook"** in the left sidebar
3. Click **"Run workflow"** button
4. Click **"Run workflow"** in the dropdown

### Your Storybook URL

Once deployed, your Storybook will be available at:

**https://lizbrenner.github.io/arkae/**

## Monitoring Deployments

### Check Deployment Status

1. Go to the **Actions** tab in your repository
2. Look for **"Deploy Storybook"** workflow runs
3. Green checkmark = successful deployment
4. Red X = failed deployment (click to see logs)

### Deployment Time

- **Build time**: ~2-3 minutes
- **Pages deployment**: ~30 seconds
- **Total**: Usually under 5 minutes

## Manual Deployment

If you prefer to deploy manually:

### Build Locally

```bash
# Build Storybook
pnpm --filter @arkae/storybook build

# Output will be in apps/storybook/storybook-static/
```

### Deploy to GitHub Pages Manually

```bash
# Install gh-pages package (one time)
pnpm add -D gh-pages

# Deploy
npx gh-pages -d apps/storybook/storybook-static
```

## Troubleshooting

### Deployment Failed

**Check the workflow logs:**
1. Go to Actions tab
2. Click on the failed run
3. Expand the failed step
4. Look for error messages

**Common issues:**
- Pages not enabled in Settings
- Incorrect workflow permissions
- Build errors (fix locally first)

### 404 Page Not Found

**If you see a 404 when visiting the URL:**
1. Wait a few minutes (Pages can take time to propagate)
2. Hard refresh the page (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
3. Check that Pages is enabled and source is set to "GitHub Actions"

### Assets Not Loading

**If Storybook loads but looks broken:**
- This usually means the base path is incorrect
- Check that the `viteFinal` configuration in `.storybook/main.ts` matches your repo name
- For repo `arkae`, the base should be `/arkae/`

## Updating Your Storybook

Every time you push changes to `main`, Storybook automatically rebuilds and redeploys!

```bash
# Make changes to stories or components
# Commit and push
git add .
git commit -m "feat: add new component stories"
git push origin main

# Wait ~5 minutes, then visit your Storybook URL to see updates
```

## Custom Domain (Optional)

Want to use a custom domain like `design.yourdomain.com`?

1. Add a `CNAME` file to `apps/storybook/public/`:
   ```
   design.yourdomain.com
   ```

2. Configure DNS with your domain provider:
   ```
   Type: CNAME
   Name: design
   Value: lizbrenner.github.io
   ```

3. Update Settings → Pages → Custom domain

## Portfolio Tips

### Sharing Your Storybook

Add to your:
- **Resume**: Link in projects section
- **LinkedIn**: Add to portfolio/projects
- **GitHub README**: Prominent link at the top
- **Portfolio website**: Embed or link

### Example README Badge

Add to your repo README:

```markdown
[![Storybook](https://img.shields.io/badge/Storybook-View-ff4785?style=for-the-badge&logo=storybook&logoColor=white)](https://lizbrenner.github.io/arkae/)
```

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Storybook Deployment Guide](https://storybook.js.org/docs/sharing/publish-storybook)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
