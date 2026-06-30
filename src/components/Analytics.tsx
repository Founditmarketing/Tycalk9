import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Fires a page_view on every route change so single-page-app navigation is
 * tracked, not just the first load.
 *
 * - Pushes a `page_view` event to the GTM dataLayer (set up a GA4 "page_view"
 *   tag in Google Tag Manager triggered on this custom event).
 * - Also calls gtag() directly if a gtag.js tag is present, so it works either way.
 */
export default function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const page_path = pathname + search;
    const page_location = window.location.href;
    const page_title = document.title;

    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: 'page_view', page_path, page_location, page_title });

    if (typeof w.gtag === 'function') {
      w.gtag('event', 'page_view', { page_path, page_location, page_title });
    }
  }, [pathname, search]);

  return null;
}
