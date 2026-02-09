# Specification

## Summary
**Goal:** Ensure the published/live URL serves the Valentine app (not the Caffeine placeholder), and make the app’s canonical/OG URL match the actual published domain.

**Planned changes:**
- Fix the production/live publish configuration so https://npt-for-sunidhi.caffeine.xyz returns the Valentine app UI and loads all JS/CSS assets successfully (no 404s).
- Update canonical/OG URL configuration to exactly https://npt-for-sunidhi.caffeine.xyz (PUBLIC_SITE_URL, `<link rel="canonical">`, `<meta property="og:url">`, and any production “Expected canonical” logging).
- Add a small, non-intrusive in-app “App loaded” indicator that appears when the React app mounts and includes a build timestamp/version.

**User-visible outcome:** Opening the live site in an incognito/private window reliably shows the Valentine prompt UI (not the publish/restore placeholder), and a small “App loaded” status text confirms the app is actually running.
