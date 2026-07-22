import { useEffect } from 'react';

// This is a single-page app, so the <title> and description in index.html
// would otherwise stick to every route. <Seo /> swaps them per page (Google
// renders JS, so it picks these up) and keeps the canonical URL honest.
const SITE = 'https://www.ekadashitours.in';

const setMeta = (selector, attr, value) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    const [, key, val] = selector.match(/\[(.+?)="(.+?)"\]/) || [];
    if (key && val) el.setAttribute(key, val);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const Seo = ({ title, description, path = '/' }) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
    }
    if (title) {
      setMeta('meta[property="og:title"]', 'content', title);
      setMeta('meta[property="twitter:title"]', 'content', title);
    }

    const url = `${SITE}${path}`;
    setMeta('meta[property="og:url"]', 'content', url);

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }, [title, description, path]);

  return null;
};

export default Seo;
