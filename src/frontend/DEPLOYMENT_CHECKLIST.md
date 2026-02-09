# Production Deployment Verification Checklist

## Version 8 - Valentine Prompt for Sunidhi (URL Fix + Load Indicator)

### Pre-Deployment Checks
- [ ] All code changes committed and built successfully
- [ ] Draft version tested and working correctly
- [ ] No console errors in draft environment

### Post-Deployment Verification Steps

#### 1. Initial Load Test
- [ ] Open live URL in **incognito/private window**: `https://npt-for-sunidhi.caffeine.xyz`
- [ ] Page loads the Valentine prompt UI (not the black Caffeine placeholder)
- [ ] **NEW:** Small "App loaded" indicator appears in bottom-right corner
- [ ] No JavaScript errors in browser console (F12 → Console tab)

#### 2. Hard Refresh Test
- [ ] Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac) to force reload
- [ ] Page still loads the Valentine prompt UI
- [ ] Assets (JS/CSS) load successfully
- [ ] "App loaded" indicator still appears

#### 3. Network Tab Verification
Open DevTools (F12) → Network tab:
- [ ] Main document (HTML) returns **200 OK** status
- [ ] `main.tsx` or bundled JS file loads successfully (look for `main-*.js` or similar)
- [ ] `index.css` or bundled CSS file loads successfully (look for `index-*.css` or similar)
- [ ] No 404 errors for critical assets

#### 4. Metadata Verification
View page source (right-click → View Page Source):
- [ ] `<title>` contains "Will you be my Valentine, Sunidhi?" (NOT "Mahek")
- [ ] `<link rel="canonical">` points to `https://npt-for-sunidhi.caffeine.xyz`
- [ ] `<meta property="og:url">` points to `https://npt-for-sunidhi.caffeine.xyz`
- [ ] `<meta property="og:title">` contains "Sunidhi" (NOT "Mahek")

#### 5. Console Sanity Check
In browser console, verify production logs appear:
