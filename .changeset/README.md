# Changesets

This folder contains changeset files for managing versioning and changelogs.

When you make changes to packages, create a changeset by running:

```bash
pnpm changeset
```

This will prompt you to:
1. Select which packages changed
2. Choose version bump type (major/minor/patch)
3. Write a summary of changes

Changesets are consumed during publishing to automatically:
- Bump package versions
- Update CHANGELOGs
- Create git tags
