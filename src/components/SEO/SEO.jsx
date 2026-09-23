import { useEffect } from 'react';

const DEFAULT_KEYWORDS =
  'Zebrold, Zebrold Scolome, Zebrold IHL, Zebrold International Holdings Limited, rolling stock, high-speed rail, EMU, bogie, traction, ETCS, signalling, digital rail, Frankfurt, Kassel, rail manufacturer';

const DEFAULT_IMAGE = 'https://www.zebrold.de/favicon.png';
const BASE_URL = 'https://www.zebrold.de';

/**
 * Helper to update or create a <meta> tag in <head>
 */
function setMetaTag(attributeName, attributeValue, content) {
  if (!content && content !== '') return;
  let element = document.head.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

/**
 * Helper to update or create a <link rel="canonical"> in <head>
 */
function setCanonical(href) {
  if (!href) return;
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

/**
 * Helper to inject or update JSON-LD structured data in <head>
 */
function setStructuredData(schemaData) {
  const SCRIPT_ID = 'seo-dynamic-structured-data';
  let element = document.getElementById(SCRIPT_ID);

  if (!schemaData) {
    if (element) element.remove();
    return;
  }

  if (!element) {
    element = document.createElement('script');
    element.id = SCRIPT_ID;
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }

  try {
    element.textContent = JSON.stringify(schemaData);
  } catch (err) {
    console.error('SEO structured data serialization error:', err);
  }
}

export default function SEO({
  title = 'Zebrold Scolome | Ultra Speed Intelligent Rolling Stocks',
  description = 'Zebrold Scolome designs and builds ultra high-speed intelligent rolling stock, signalling and digital rail systems. Made in Deutschland, designed in India.',
  keywords = DEFAULT_KEYWORDS,
  name = 'Zebrold Scolome',
  type = 'website',
  image = DEFAULT_IMAGE,
  url = '',
  schemaData = null,
}) {
  useEffect(() => {
    // 1. Page Title
    if (title) {
      document.title = title;
    }

    // 2. Standard Meta
    setMetaTag('name', 'title', title);
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', 'Zebrold International Holdings Limited');

    // 3. Canonical URL
    const canonicalUrl = url ? (url.startsWith('http') ? url : `${BASE_URL}${url}`) : window.location.href.split('?')[0];
    setCanonical(canonicalUrl);

    // 4. OpenGraph Tags
    setMetaTag('property', 'og:site_name', name);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', image.startsWith('http') ? image : `${BASE_URL}${image}`);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:site', '@zebrold');
    setMetaTag('name', 'twitter:creator', name);
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image.startsWith('http') ? image : `${BASE_URL}${image}`);
    setMetaTag('name', 'twitter:url', canonicalUrl);

    // 6. JSON-LD Structured Data
    setStructuredData(schemaData);

    return () => {
      // Cleanup dynamically injected schema when component unmounts
      setStructuredData(null);
    };
  }, [title, description, keywords, name, type, image, url, schemaData]);

  return null;
}
