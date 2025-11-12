import Link from 'next/link';
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
  const t = await getTranslations({ locale, namespace: 'contact' });
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
  const url = `${SITE_URL}${localePrefix}/contact`;
  const imageUrl = `${SITE_URL}/og-image.png`;

  return {
    title: `${t('title')} | ${meta('siteName')}`,
    description: t('description'),
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/contact`,
        es: `${SITE_URL}/es/contact`,
        zh: `${SITE_URL}/zh/contact`,
        'x-default': `${SITE_URL}/contact`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url,
      type: 'website',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: t('title') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [imageUrl],
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const t = await getTranslations({ locale, namespace: 'contact' });
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: t('title'),
      description: t('description'),
      url: `${SITE_URL}${localePrefix}/contact`,
      inLanguage: locale,
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
            <p>{t('intro')}</p>
            <h2>{t('emailHeading')}</h2>
            <p>
              <a href="mailto:support@mapcalculator.org" className="text-blue-700 underline">support@mapcalculator.org</a>
            </p>
            <h3>{t('feedbackHeading')}</h3>
            <ul>
              <li>{t('feedback1')}</li>
              <li>{t('feedback2')}</li>
              <li>{t('feedback3')}</li>
            </ul>
          </article>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
