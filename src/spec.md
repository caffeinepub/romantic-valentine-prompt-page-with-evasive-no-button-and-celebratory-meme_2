# Specification

## Summary
**Goal:** Republish the latest build and prevent admin-token URLs from being shared or opening the Caffeine admin/dashboard screen for visitors.

**Planned changes:**
- Add a frontend runtime guard that detects `#caffeineAdminToken=...` in `window.location.hash` and immediately replaces the URL with the canonical public URL (`PUBLIC_SITE_URL`, `https://npt-for-sunidhi.caffeine.xyz`) without requiring backend changes.
- Update the share-link UX so the share action always copies `PUBLIC_SITE_URL` (not the current URL) and displays a clear warning not to share admin-token links.
- Update `frontend/DEPLOYMENT_CHECKLIST.md` with a verification step to confirm the live/shareable URL has no `#caffeineAdminToken` fragment and renders app content.

**User-visible outcome:** Visitors who open an accidentally shared admin-token link are redirected to the clean public site URL, and the share UI guides users to copy/share only the canonical public link.
