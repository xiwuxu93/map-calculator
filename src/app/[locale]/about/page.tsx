import Link from 'next/link';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Locale, defaultLocale, locales } from '@/lib/i18n';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

type PageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const meta = await getTranslations({ locale, namespace: 'metadata' });
  const about = await getTranslations({ locale, namespace: 'about' });
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
  const url = `${SITE_URL}${localePrefix}/about`;
  const imageUrl = `${SITE_URL}/og-image.png`;

  return {
    title: `${about('title')} | ${meta('siteName')}`,
    description: about('description'),
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/about`,
        es: `${SITE_URL}/es/about`,
        zh: `${SITE_URL}/zh/about`,
        'x-default': `${SITE_URL}/about`,
      },
    },
    openGraph: {
      title: about('title'),
      description: about('description'),
      url,
      type: 'website',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: about('title') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: about('title'),
      description: about('description'),
      images: [imageUrl],
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const t = await getTranslations({ locale, namespace: 'about' });
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: t('title'),
      description: t('description'),
      url: `${SITE_URL}${localePrefix}/about`,
      inLanguage: locale,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}${localePrefix || ''}` },
          { '@type': 'ListItem', position: 2, name: t('title'), item: `${SITE_URL}${localePrefix}/about` },
        ],
      },
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">{t('title')}</h1>
            <p className="text-base text-gray-600 md:text-lg">{t('description')}</p>
          </div>

          <article className="prose prose-gray mx-auto w-full rounded-lg bg-white p-6 shadow-lg md:p-8">
            <h2>{t('missionHeading')}</h2>
            <p>{t('missionBody')}</p>

            <h3>{t('contentPolicyHeading')}</h3>
            <ul>
              <li>{t('contentPolicy1')}</li>
              <li>{t('contentPolicy2')}</li>
              <li>{t('contentPolicy3')}</li>
            </ul>

            <h3>{t('reviewHeading')}</h3>
            <p>{t('reviewBody')}</p>

            <h3>{t('sourcesHeading')}</h3>
            <p>{t('sourcesBody')}</p>
            <ol>
              <li>{t('source1')}</li>
              <li>{t('source2')}</li>
              <li>{t('source3')}</li>
            </ol>
          </article>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
