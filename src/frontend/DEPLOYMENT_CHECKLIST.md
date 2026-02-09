# Production Deployment Checklist

## Pre-Deployment Verification

### 1. Branding & Configuration
- [ ] Verify `BRANDING.title` in `frontend/src/config/branding.ts` matches intended text
- [ ] Verify `BRANDING.successMessage` in `frontend/src/config/branding.ts` matches intended text
- [ ] Verify `PUBLIC_SITE_URL` in `frontend/src/config/publicSiteUrl.ts` matches production URL
- [ ] Verify `PUBLIC_SITE_URL` matches the URL in `frontend/index.html` (canonical and og:url tags)

### 2. Legacy Slug Guard (CRITICAL)
Run the following command from the project root to ensure no legacy slug exists:

