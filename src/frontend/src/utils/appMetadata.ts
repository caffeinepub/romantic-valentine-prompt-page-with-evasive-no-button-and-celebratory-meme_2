/**
 * Runtime metadata synchronization utility
 * Ensures document title and key metadata tags reflect current branding
 * even if initial HTML is cached or stale.
 */

import { BRANDING } from '../config/branding';
import { PUBLIC_SITE_URL } from '../config/publicSiteUrl';

/**
 * Updates or creates a meta tag with the specified property/name and content
 */
function setMetaTag(selector: string, content: string): void {
  let element = document.querySelector(selector);
  
  if (!element) {
    element = document.createElement('meta');
    const [attr, value] = selector.includes('property=') 
      ? ['property', selector.match(/property="([^"]+)"/)?.[1] || '']
      : ['name', selector.match(/name="([^"]+)"/)?.[1] || ''];
    
    if (value) {
      element.setAttribute(attr, value);
      document.head.appendChild(element);
    }
  }
  
  if (element) {
    element.setAttribute('content', content);
  }
}

/**
 * Updates or creates a link tag with the specified rel and href
 */
function setLinkTag(rel: string, href: string): void {
  let element = document.querySelector(`link[rel="${rel}"]`);
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  
  element.setAttribute('href', href);
}

/**
 * Synchronizes all metadata tags with current branding configuration
 * Call this after app mount to repair any stale cached values
 */
export function syncMetadata(): void {
  // Update document title
  document.title = BRANDING.title;
  
  // Update description
  setMetaTag('meta[name="description"]', BRANDING.description);
  
  // Update canonical URL
  setLinkTag('canonical', PUBLIC_SITE_URL);
  
  // Update Open Graph tags
  setMetaTag('meta[property="og:url"]', PUBLIC_SITE_URL);
  setMetaTag('meta[property="og:title"]', BRANDING.title);
  setMetaTag('meta[property="og:description"]', BRANDING.description);
  
  // Update Twitter tags
  setMetaTag('meta[name="twitter:title"]', BRANDING.title);
  setMetaTag('meta[name="twitter:description"]', BRANDING.description);
}
