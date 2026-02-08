# Specification

## Summary
**Goal:** Build a single-page romantic Valentine prompt asking “Will you be my Valentine, Sunidhi?” with two choices, where “No” evades interaction and “Yes” shows a celebratory meme.

**Planned changes:**
- Create a responsive, pink/white themed single-page UI with the prompt text and exactly two buttons: “Yes” and “No”.
- Implement evasive positioning for the “No” button on hover (desktop) and on touch/pointer interaction (iPad Chrome), keeping it fully on-screen and not overlapping “Yes”.
- On “Yes” click/tap, replace the choice UI with a result view that displays a static meme image containing the text “Good choice❤❤❤”.
- Add the generated meme image asset under `frontend/public/assets/generated` and render it via a static frontend path.

**User-visible outcome:** The user sees the Valentine prompt with “Yes” and an unclickable “No” that moves away; choosing “Yes” transitions to a celebratory meme image reading “Good choice❤❤❤”.
