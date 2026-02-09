# Production Deployment Verification Checklist

## Version 6 - Valentine Prompt for Sunidhi

### Pre-Deployment Checks
- [ ] All code changes committed and built successfully
- [ ] Draft version tested and working correctly
- [ ] No console errors in draft environment

### Post-Deployment Verification Steps

#### 1. Initial Load Test
- [ ] Open live URL in **incognito/private window**: `https://romantic-valentine-prompt-for-sunidhi.caffeine.xyz`
- [ ] Page loads the Valentine prompt UI (not the black Caffeine placeholder)
- [ ] No JavaScript errors in browser console (F12 → Console tab)

#### 2. Hard Refresh Test
- [ ] Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac) to force reload
- [ ] Page still loads the Valentine prompt UI
- [ ] Assets (JS/CSS) load successfully

#### 3. Network Tab Verification
Open DevTools (F12) → Network tab:
- [ ] Main document (HTML) returns **200 OK** status
- [ ] `main.tsx` or bundled JS file loads successfully
- [ ] `index.css` or bundled CSS file loads successfully
- [ ] No 404 errors for critical assets

#### 4. Metadata Verification
View page source (right-click → View Page Source):
- [ ] `<title>` contains "Will you be my Valentine, Sunidhi?" (NOT "Mahek")
- [ ] `<link rel="canonical">` points to correct URL (sunidhi, not mahek)
- [ ] `<meta property="og:url">` points to correct URL
- [ ] `<meta property="og:title">` contains "Sunidhi" (NOT "Mahek")

#### 5. Console Sanity Check
In browser console, verify production logs appear:
