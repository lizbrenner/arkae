#!/bin/bash

# Arkae npm Publishing Verification Script

echo "🔍 Verifying npm publishing setup..."
echo ""

# Check if logged into npm
echo "1. Checking npm login status..."
if npm whoami &> /dev/null; then
    NPM_USER=$(npm whoami)
    echo "   ✅ Logged in as: $NPM_USER"
else
    echo "   ❌ Not logged into npm"
    echo "   Run: npm login"
    exit 1
fi

# Check if @arkae scope is available
echo ""
echo "2. Checking @arkae organization access..."
npm org ls arkae $NPM_USER 2>/dev/null
if [ $? -eq 0 ]; then
    echo "   ✅ You have access to @arkae organization"
else
    echo "   ⚠️  Could not verify @arkae organization access"
    echo "   Make sure you created the organization and have access"
fi

# Check if packages build
echo ""
echo "3. Testing package builds..."
if pnpm build &> /dev/null; then
    echo "   ✅ All packages build successfully"
else
    echo "   ❌ Build failed"
    exit 1
fi

# Check package.json files for proper configuration
echo ""
echo "4. Checking package configurations..."
ISSUES=0

for pkg in packages/*/package.json; do
    PKG_NAME=$(jq -r '.name' "$pkg")
    PKG_VERSION=$(jq -r '.version' "$pkg")
    
    if [[ $PKG_NAME == @arkae/* ]]; then
        echo "   ✅ $PKG_NAME@$PKG_VERSION"
    else
        echo "   ❌ $PKG_NAME - should start with @arkae/"
        ISSUES=$((ISSUES + 1))
    fi
done

# Check library package specifically
if [ -f "packages/library/package.json" ]; then
    echo "   ✅ @arkae/library package exists"
else
    echo "   ❌ @arkae/library package not found"
    ISSUES=$((ISSUES + 1))
fi

echo ""
if [ $ISSUES -eq 0 ]; then
    echo "✅ All checks passed! Ready to publish."
    echo ""
    echo "Next steps:"
    echo "1. Create a changeset: pnpm changeset"
    echo "2. Commit and push to trigger publishing"
else
    echo "❌ Found $ISSUES issue(s). Please fix before publishing."
    exit 1
fi
