import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import localizedTexts from '@/messages/pages/mapTargets';
import { Locale, defaultLocale, getLocalePrefix, getLocalizedPath, locales } from '@/lib/i18n';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

type PageProps = { params: { locale: string } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const messages = localizedTexts[locale] ?? localizedTexts[defaultLocale];
  const meta = messages.meta ?? localizedTexts[defaultLocale].meta;
  const localePrefix = getLocalePrefix(locale);
  const url = `${SITE_URL}${localePrefix}/map-targets-by-condition`;
  const imageUrl = `${SITE_URL}/og-image.png`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [...meta.keywords],
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/map-targets-by-condition`,
        es: `${SITE_URL}/es/map-targets-by-condition`,
        zh: `${SITE_URL}/zh/map-targets-by-condition`,
        'x-default': `${SITE_URL}/map-targets-by-condition`,
      },
    },
    openGraph: {
      title: meta.openGraphTitle,
      description: meta.openGraphDescription,
      url,
      type: 'article',
      siteName: 'mapcalculator.org',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: meta.openGraphTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.openGraphTitle,
      description: meta.openGraphDescription,
      images: [imageUrl],
    },
  };
}

export default function MapTargetsByConditionPage({ params }: PageProps) {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const texts = localizedTexts[locale] ?? localizedTexts[defaultLocale];
  const localePrefix = getLocalePrefix(locale);
  const meta = texts.meta ?? localizedTexts[defaultLocale].meta;
  const schema = texts.schema ?? localizedTexts[defaultLocale].schema;
  const localizedPath = (path: string) => getLocalizedPath(locale, path);
  const imageUrl = `${SITE_URL}/og-image.png`;

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: schema.article.headline,
      description: schema.article.description,
      url: `${SITE_URL}${localePrefix}/map-targets-by-condition`,
      inLanguage: locale,
      image: imageUrl,
      author: { '@type': 'Organization', name: 'mapcalculator.org' },
      datePublished: '2025-11-13',
      dateModified: '2025-11-13',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: schema.faq.map((item: any) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
          <section id="hero" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">{texts.t0001}</p>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">{meta.heroTitle}</h1>
              <p className="text-base text-gray-700 md:text-lg">{meta.heroDescription}</p>
            </div>
            <div className="space-y-4 rounded-xl border border-emerald-100 bg-emerald-50 p-5 text-emerald-900">
              <p className="text-xs uppercase tracking-wide font-semibold text-emerald-700">{meta.quickAnswerLabel}</p>
              <p className="text-lg font-semibold">{texts.t0003}</p>
              <ul className="list-disc pl-6 text-sm">
                <li>{texts.t0004}</li>
              </ul>
              <div className="grid gap-3 text-sm md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-emerald-700">{meta.readingTime}</p>
                  <p className="font-medium">{texts.t0005}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-emerald-700">{meta.skillLevel}</p>
                  <p className="font-medium">{texts.t0006}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-emerald-700">Last Updated</p>
                  <p className="font-medium">{meta.lastUpdated}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={localizedPath('/map-calculator-bp')} className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500">
                  Go to MAP Calculator
                </Link>
                <Link href={localizedPath('/how-to-calculate-map-blood-pressure')} className="inline-flex items-center rounded-full border border-emerald-600 px-5 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-600 hover:text-white">
                  How to Calculate MAP
                </Link>
              </div>
            </div>
          </section>

          <section id="why-65" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">{texts.t0010}</h2>
            <p className="text-base text-gray-700">{texts.t0011}</p>
          </section>

          <section id="by-condition" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">{texts.t0020}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold">General</h3>
                <p className="text-sm text-gray-700">{texts.t0021}</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold">Sepsis</h3>
                <p className="text-sm text-gray-700">{texts.t0022}</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold">TBI / Neuro (CPP)</h3>
                <p className="text-sm text-gray-700">{texts.t0023}</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold">Ischemic Stroke</h3>
                <p className="text-sm text-gray-700">{texts.t0024}</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold">Post–Cardiac Arrest</h3>
                <p className="text-sm text-gray-700">{texts.t0025}</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold">Perioperative / Renal Risk</h3>
                <p className="text-sm text-gray-700">{texts.t0026}</p>
                <p className="text-sm text-gray-700 mt-1">{texts.t0027}</p>
              </div>
            </div>
          </section>

          <section id="individualize" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">{texts.t0030}</h2>
            <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
              <li>{texts.t0031}</li>
              <li>{texts.t0032}</li>
              <li>{texts.t0033}</li>
              <li>{texts.t0034}</li>
            </ul>
          </section>

          <section id="accuracy" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">{texts.t0040}</h2>
            <p className="text-base text-gray-700">{texts.t0041}</p>
            <p className="text-base text-gray-700">{texts.t0042}</p>
          </section>

          <section id="algorithm" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">{texts.t0050}</h2>
            <ol className="list-decimal space-y-2 pl-6 text-sm text-gray-700">
              <li>{texts.t0051}</li>
              <li>{texts.t0052}</li>
              <li>{texts.t0053}</li>
              <li>{texts.t0054}</li>
              <li>{texts.t0055}</li>
            </ol>
          </section>

          <section id="faq" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">{texts.t0060}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold">{texts.t0061}</h3>
                <p className="text-sm text-gray-700">{texts.t0062}</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold">{texts.t0063}</h3>
                <p className="text-sm text-gray-700">{texts.t0064}</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold">{texts.t0065}</h3>
                <p className="text-sm text-gray-700">{texts.t0066}</p>
              </div>
            </div>
          </section>

          <section id="references" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">{texts.refsHeading}</h2>
            <ol className="list-decimal space-y-2 pl-6 text-sm text-gray-700">
              {Array.isArray((texts as any).refs) && (texts as any).refs.map((ref: any, idx: number) => (
                <li key={idx}>
                  <span className="block">{ref.text}</span>
                  {ref.url && (
                    <a href={ref.url} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">
                      {ref.label || 'Link'}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </section>

          <script type="application/ld+json" suppressHydrationWarning>
            {JSON.stringify(structuredData)}
          </script>
        </div>
      </main>
      <Footer />
    </div>
  );
}
