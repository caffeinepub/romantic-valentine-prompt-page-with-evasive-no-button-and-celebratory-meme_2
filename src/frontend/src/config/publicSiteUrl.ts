/**
 * Single source of truth for the public share URL.
 * This constant must match the URL used in frontend/index.html.
 */
export const PUBLIC_SITE_URL = 'https://npt-for-sunidhi.caffeine.xyz';

/**
 * Validates that a URL does not contain legacy slugs.
 */
export function validateUrl(url: string): boolean {
  const legacySlug = 'mahek';
  return !url.toLowerCase().includes(legacySlug);
}

/**
 * Gets the canonical public URL for sharing.
 */
export function getPublicUrl(): string {
  if (!validateUrl(PUBLIC_SITE_URL)) {
    console.error('PUBLIC_SITE_URL contains legacy slug!');
  }
  return PUBLIC_SITE_URL;
}
