import type { MetadataRoute } from 'next';
import { defaultLocale, locales } from '@/lib/i18n';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/map-calculator-bp',
    '/how-to-calculate-map-blood-pressure',
    '/map-calculation-nursing',
  ] as const;

  return locales.flatMap((locale) => {
    const localePrefix = locale === defaultLocale ? '' : `/${locale}`;

    return routes.map((path) => ({
      url: `${SITE_URL}${localePrefix}${path === '/' ? '' : path}`,
      changeFrequency: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? (locale === defaultLocale ? 1 : 0.8) : 0.6,
    }));
  });
}
