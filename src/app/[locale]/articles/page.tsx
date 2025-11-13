import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import localizedTexts from '@/messages/pages/articles';
import { Locale, defaultLocale, getLocalePrefix, getLocalizedPath, locales } from '@/lib/i18n';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

type PageProps = { params: { locale: string } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const localePrefix = getLocalePrefix(locale);
  const url = `${SITE_URL}${localePrefix}/articles`;
  const messages = localizedTexts[locale] ?? localizedTexts[defaultLocale];

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/articles`,
        es: `${SITE_URL}/es/articles`,
        zh: `${SITE_URL}/zh/articles`,
        'x-default': `${SITE_URL}/articles`,
      },
    },
  };
}

export default function ArticlesIndexPage({ params }: PageProps) {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const getPath = (path: string) => getLocalizedPath(locale, path);
  const texts = localizedTexts[locale] ?? localizedTexts[defaultLocale];

  const articles = texts.cards.map((c: any) => ({
    href: getPath(c.href),
    title: c.title,
    summary: c.summary,
    updated: c.updated,
  }));

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header uses locale-aware labels */}
      <Header locale={locale as any} />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <section className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">{texts.headingTitle}</h1>
            <p className="text-base text-gray-700 md:text-lg">{texts.headingSubtitle}</p>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            {articles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h2 className="text-xl font-semibold text-gray-900">{a.title}</h2>
                <p className="mt-2 text-sm text-gray-700">{a.summary}</p>
                <p className="mt-3 text-xs text-gray-500">{texts.lastUpdatedLabel} {a.updated}</p>
              </Link>
            ))}
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex flex-wrap gap-3">
              <Link
                href={getPath('/map-calculator-bp')}
                className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                {texts.ctaCalculator}
              </Link>
              <Link
                href={getPath('/')}
                className="inline-flex items-center rounded-full border border-blue-600 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
              >
                {texts.ctaHome}
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
