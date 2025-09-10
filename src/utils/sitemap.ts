// Dynamic sitemap generation utility
export const generateSitemap = (): string => {
  const baseUrl = 'https://www.haseab.com';
  const currentDate = new Date().toISOString();
  
  const routes = [
    { path: '/', priority: '0.6', lastmod: currentDate },
    { path: '/goal', priority: '1.0', lastmod: currentDate },
    { path: '/mastery', priority: '1.0', lastmod: currentDate },
    { path: '/thisdesk', priority: '1.0', lastmod: currentDate },
    { path: '/problems', priority: '1.0', lastmod: currentDate },
    { path: '/traits', priority: '1.0', lastmod: currentDate },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `<url>
  <loc>${baseUrl}${route.path}</loc>
  <lastmod>${route.lastmod}</lastmod>
  <priority>${route.priority}</priority>
</url>`).join('\n')}
</urlset>`;

  return sitemap;
};