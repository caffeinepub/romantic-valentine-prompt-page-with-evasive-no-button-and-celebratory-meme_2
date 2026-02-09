import { BRANDING } from '@/config/branding';
import { PUBLIC_SITE_URL } from '@/config/publicSiteUrl';

/**
 * Synchronizes runtime document metadata with configured branding and URL.
 * Updates document title, canonical link, and Open Graph URL tags.
 */
export function syncRuntimeMetadata(): void {
  // Update document title
  document.title = BRANDING.title;

  // Update or create canonical link
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.href = PUBLIC_SITE_URL;

  // Update or create og:url meta tag
  let ogUrlMeta = document.querySelector('meta[property="og:url"]') as HTMLMetaElement;
  if (!ogUrlMeta) {
    ogUrlMeta = document.createElement('meta');
    ogUrlMeta.setAttribute('property', 'og:url');
    document.head.appendChild(ogUrlMeta);
  }
  ogUrlMeta.content = PUBLIC_SITE_URL;

  // Update og:title
  let ogTitleMeta = document.querySelector('meta[property="og:title"]') as HTMLMetaElement;
  if (!ogTitleMeta) {
    ogTitleMeta = document.createElement('meta');
    ogTitleMeta.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitleMeta);
  }
  ogTitleMeta.content = BRANDING.title;
}
