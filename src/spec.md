# Specification

## Summary
**Goal:** Build a single-page, romantic Valentine surprise for Sunidhi🌸 with “Yes/No” choices where “No” evasively moves away, and “Yes” reveals a success message plus a meme image.

**Planned changes:**
- Create a responsive single-page prompt that asks: “Will you be my Valentine Sunidhi🌸” with exactly two buttons: “Yes” and “No”.
- Implement evasive “No” behavior: on desktop hover and on iPad Chrome touch/pointer interactions, move the button smoothly within the prompt container so it remains visible but effectively unclickable.
- Implement “Yes” flow: clicking “Yes” replaces the prompt with a success view showing the exact text “Good choice❤❤❤” and a meme image.
- Apply a simple romantic pink/white theme with touch-friendly spacing and no horizontal overflow on iPad-sized viewports.
- Keep the experience frontend-only with no backend usage; add and serve the meme image as a static frontend asset from `frontend/public/assets/generated/`.

**User-visible outcome:** Users see a romantic Valentine prompt for Sunidhi🌸 with “Yes” and an evasive “No”; choosing “Yes” shows “Good choice❤❤❤” along with the included meme image.
