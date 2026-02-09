# Specification

## Summary
**Goal:** Ensure the app consistently shares the correct public URL (without the legacy `mahek` slug) by centralizing the share URL configuration, adding a reliable “Copy link” control, and syncing runtime metadata.

**Planned changes:**
- Add a single public URL constant (e.g., `PUBLIC_SITE_URL`) in `frontend/src/config/publicSiteUrl.ts`, matching the URL in `frontend/index.html` (`https://npt-for-sunidhi.caffeine.xyz`), and update all share/link/metadata logic to use it.
- Add a user-visible “Copy link” control on the main page that copies the configured public URL (not `window.location`), with an English error + selectable text fallback if clipboard access fails.
- On app load, set `document.title`, `<link rel="canonical">`, and `<meta property="og:url">` to match the configured public URL (and branding title).
- Remove any remaining frontend references that include `mahek`, and add a guardrail check by ensuring repository-wide search across `frontend/src` and `frontend/index.html` returns zero matches for `mahek`.

**User-visible outcome:** Users can copy/share a link from inside the app that always uses `https://npt-for-sunidhi.caffeine.xyz` and no longer shows the old `mahek` slug in shared URLs or link previews.
