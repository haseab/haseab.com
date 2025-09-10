import { useEffect } from 'react';
import { generateSitemap } from '../utils/sitemap';

export const SitemapRoute: React.FC = () => {
  useEffect(() => {
    const sitemap = generateSitemap();
    
    // Create a blob with XML content type
    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // Redirect to the blob URL to serve as XML
    window.location.href = url;
  }, []);

  // Show the sitemap content while redirecting
  return (
    <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
      {generateSitemap()}
    </pre>
  );
};