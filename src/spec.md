# Specification

## Summary
**Goal:** Restore the production/live deployment so the live URL serves the Valentine React app (Version 6) instead of the Caffeine placeholder page.

**Planned changes:**
- Re-publish/restore the current working draft build (Version 6) to the production/live canister.
- Verify the live URL loads the app UI and its JS/CSS assets without errors (including after a hard refresh).
- Verify production HTML metadata matches the current frontend build (title/description/canonical/og:url) and is not showing older/cached content.

**User-visible outcome:** Visiting the live/production URL loads the Valentine prompt React app (not the Caffeine placeholder), and the page metadata reflects the current production content.
