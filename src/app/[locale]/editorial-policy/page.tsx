import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Locale, defaultLocale, locales } from '@/lib/i18n';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

type PageProps = { params: { locale: string } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const meta = await getTranslations({ locale, namespace: 'metadata' });
  const t = await getTranslations({ locale, namespace: 'editorial' });
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
  const url = `${SITE_URL}${localePrefix}/editorial-policy`;
  const imageUrl = `${SITE_URL}/og-image.png`;
  return {
    title: `${t('title')} | ${meta('siteName')}`,
    description: t('description'),
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/editorial-policy`,
        es: `${SITE_URL}/es/editorial-policy`,
        zh: `${SITE_URL}/zh/editorial-policy`,
        'x-default': `${SITE_URL}/editorial-policy`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url,
      type: 'website',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: t('title') }],
    },
  };
}

export default async function EditorialPolicyPage({ params }: PageProps) {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const t = await getTranslations({ locale, namespace: 'editorial' });
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('title'),
    description: t('description'),
    url: `${SITE_URL}${localePrefix}/editorial-policy`,
    inLanguage: locale,
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">{t('title')}</h1>
            <p className="text-base text-gray-600 md:text-lg">{t('description')}</p>
            <p className="text-xs uppercase tracking-wide text-gray-500">{t('updatedLabel')} {t('updatedValue')}</p>
          </div>

          <article className="prose prose-gray mx-auto w-full rounded-lg bg-white p-6 shadow-lg md:p-8">
            <p>{t('intro')}</p>
            <h2>{t('principlesHeading')}</h2>
            <ul>
              <li>{t('p1')}</li>
              <li>{t('p2')}</li>
              <li>{t('p3')}</li>
              <li>{t('p4')}</li>
            </ul>

            <h2>{t('processHeading')}</h2>
            <ol>
              <li>{t('process1')}</li>
              <li>{t('process2')}</li>
              <li>{t('process3')}</li>
            </ol>

            <h2>{t('citationsHeading')}</h2>
            <p>{t('citationsBody')}</p>

            <h2>{t('feedbackHeading')}</h2>
            <p>{t('feedbackBody')}</p>
          </article>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

