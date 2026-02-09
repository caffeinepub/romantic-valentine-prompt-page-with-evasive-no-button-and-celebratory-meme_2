import { PUBLIC_SITE_URL } from '@/config/publicSiteUrl';

/**
 * Development-time guard to detect legacy slug in configuration.
 * Throws an error if the legacy slug 'mahek' is found in the public URL.
 */
export function assertNoLegacySlug(): void {
  const legacySlug = 'mahek';
  
  if (PUBLIC_SITE_URL.toLowerCase().includes(legacySlug)) {
    const error = `LEGACY SLUG DETECTED: PUBLIC_SITE_URL contains "${legacySlug}". Please update frontend/src/config/publicSiteUrl.ts`;
    console.error(error);
    
    if (import.meta.env.DEV) {
      throw new Error(error);
    }
  }

  // Also check runtime canonical and og:url
  const canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (canonicalLink?.href.toLowerCase().includes(legacySlug)) {
    console.error(`LEGACY SLUG DETECTED in canonical link: ${canonicalLink.href}`);
  }

  const ogUrlMeta = document.querySelector('meta[property="og:url"]') as HTMLMetaElement;
  if (ogUrlMeta?.content.toLowerCase().includes(legacySlug)) {
    console.error(`LEGACY SLUG DETECTED in og:url meta: ${ogUrlMeta.content}`);
  }
}
