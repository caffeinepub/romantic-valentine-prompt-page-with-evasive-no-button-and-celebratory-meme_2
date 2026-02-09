/**
 * Public site URL configuration for canonical links and share metadata.
 * This ensures the correct URL is used in link previews and prevents
 * any URLs containing "mahek" from being shared.
 */

// The canonical public URL for this application
export const PUBLIC_SITE_URL = 'https://romantic-valentine-prompt-for-sunidhi.caffeine.xyz';

/**
 * Checks if the current URL contains "mahek" (case-insensitive)
 */
export function urlContainsMahek(url: string): boolean {
  return url.toLowerCase().includes('mahek');
}

/**
 * Gets the current full URL
 */
export function getCurrentUrl(): string {
  return window.location.href;
}

/**
 * Redirects to the public site URL if the current URL contains "mahek"
 */
export function redirectIfMahekUrl(): void {
  const currentUrl = getCurrentUrl();
  
  if (urlContainsMahek(currentUrl)) {
    // Replace the current URL with the correct one
    window.location.replace(PUBLIC_SITE_URL);
  }
}
