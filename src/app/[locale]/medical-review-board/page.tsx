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
  const t = await getTranslations({ locale, namespace: 'reviewBoard' });
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
  const url = `${SITE_URL}${localePrefix}/medical-review-board`;

  return {
    title: `${t('title')} | ${meta('siteName')}`,
    description: t('description'),
    alternates: {
      canonical: url,
      languages: locales.reduce((acc, l) => {
        const prefix = l === defaultLocale ? '' : `/${l}`;
        acc[l] = `${SITE_URL}${prefix}/medical-review-board`;
        return acc;
      }, {} as Record<string, string>),
    },
  };
}

export default async function MedicalReviewBoardPage({ params }: PageProps) {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const t = await getTranslations({ locale, namespace: 'reviewBoard' });
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t('title'),
    description: t('description'),
    url: `${SITE_URL}${localePrefix}/medical-review-board`,
    inLanguage: locale,
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
          <div className="space-y-3 text-center">
            <h1 className="text-3xl font-black tracking-tight text-gray-900 md:text-5xl">{t('title')}</h1>
            <p className="text-lg text-gray-600 md:text-xl">{t('description')}</p>
          </div>

          <article className="prose prose-gray mx-auto w-full rounded-2xl bg-white p-8 shadow-xl md:p-12">
            <div className="rounded-xl bg-blue-50 p-6 text-blue-900">
              <p className="text-base font-medium leading-relaxed italic">"{t('intro')}"</p>
            </div>

            <h2 className="mt-12 text-2xl font-bold border-b pb-4">{t('expertsHeading')}</h2>
            
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="group relative flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700">
                    SJ
                  </div>
                  <div>
                    <h3 className="m-0 text-xl font-black text-gray-900">{t('expert1Name')}</h3>
                    <p className="m-0 text-sm font-bold uppercase tracking-wider text-blue-600">{t('expert1Title')}</p>
                  </div>
                </div>
                <p className="m-0 text-sm leading-relaxed text-gray-600">
                  {t('expert1Bio')}
                </p>
              </div>

              <div className="group relative flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-700">
                    MT
                  </div>
                  <div>
                    <h3 className="m-0 text-xl font-black text-gray-900">{t('expert2Name')}</h3>
                    <p className="m-0 text-sm font-bold uppercase tracking-wider text-emerald-600">{t('expert2Title')}</p>
                  </div>
                </div>
                <p className="m-0 text-sm leading-relaxed text-gray-600">
                  {t('expert2Bio')}
                </p>
              </div>
            </div>

            <h2 className="mt-12 text-2xl font-bold border-b pb-4">{t('processHeading')}</h2>
            <p className="text-base leading-relaxed text-gray-700">
              {t('processBody')}
            </p>

            <div className="mt-12 rounded-xl border border-dashed border-gray-200 p-6 text-center">
              <p className="text-sm font-medium text-gray-500 italic">
                Professional medical tools for bedside use.
              </p>
            </div>
          </article>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
