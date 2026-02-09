/**
 * Runtime guard that detects and removes caffeineAdminToken from URL hash.
 * Prevents visitors from landing on the Caffeine admin/dashboard screen.
 */

import { PUBLIC_SITE_URL } from '@/config/publicSiteUrl';

/**
 * Checks if the current URL hash contains a Caffeine admin token.
 */
function hasAdminTokenInHash(): boolean {
  return window.location.hash.includes('caffeineAdminToken=');
}

/**
 * Removes the admin token hash and redirects to the canonical public URL.
 * Only redirects in production; in development, just clears the hash.
 */
export function guardAgainstAdminTokenHash(): void {
  if (!hasAdminTokenInHash()) {
    return;
  }

  // Remove the hash from the URL
  if (window.history.replaceState) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  } else {
    // Fallback for older browsers
    window.location.hash = '';
  }

  // In production, redirect to the canonical public URL
  const isProduction = window.location.hostname !== 'localhost' && !window.location.hostname.includes('127.0.0.1');
  
  if (isProduction && window.location.href !== PUBLIC_SITE_URL) {
    window.location.href = PUBLIC_SITE_URL;
  }
}
