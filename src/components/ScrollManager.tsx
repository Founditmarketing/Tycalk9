import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scroller = document.getElementById('main-scroller');
    
    if (hash) {
      // Small delay to allow the new page to render its elements before scrolling
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      // If no hash, automatically scroll to the top of the page on route change
      if (scroller) {
        scroller.scrollTo(0, 0);
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash]);

  return null;
}
