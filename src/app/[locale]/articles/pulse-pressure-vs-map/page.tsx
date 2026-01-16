import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import text from '@/messages/pages/pulsePressureVsMap/en';
import { Locale, defaultLocale, locales } from '@/lib/i18n';

// Force dynamic rendering to avoid static generation issues with simple examples
export const dynamic = 'force-dynamic';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

type PageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  // In a real app with i18n, we would load the correct locale file here.
  // For this prototype/fix, we default to English text structure but use the locale prefix for URLs.
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
  const url = `${SITE_URL}${localePrefix}/articles/pulse-pressure-vs-map`;
  const imageUrl = `${SITE_URL}/og-image.png`;

  const languages = locales.reduce((acc, l) => {
    const prefix = l === defaultLocale ? '' : `/${l}`;
    acc[l] = `${SITE_URL}${prefix}/articles/pulse-pressure-vs-map`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: text.meta.title,
    description: text.meta.description,
    keywords: [...text.meta.keywords],
    authors: [{ name: 'Dr. Sarah Jenkins' }],
    alternates: {
      canonical: url,
      languages: {
        ...languages,
      },
    },
    openGraph: {
      title: text.meta.openGraphTitle,
      description: text.meta.openGraphDescription,
      url,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: text.meta.title,
        },
      ],
    },
  };
}

export default function PulsePressurePage({ params }: PageProps) {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
  
  // Structured Data for Article
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalScholarlyArticle',
    headline: text.schema.article.headline,
    description: text.schema.article.description,
    author: {
      '@type': 'Person',
      name: text.schema.article.author,
    },
    datePublished: text.schema.article.datePublished,
    image: `${SITE_URL}/og-image.png`,
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: text.schema.faq.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer
        }
      }))
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header locale={locale} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-50 px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-800">
              Hemodynamics Deep Dive
            </span>
            <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              {text.meta.heroTitle}
            </h1>
            <p className="mb-8 text-lg text-gray-700 md:text-xl">
              {text.meta.heroDescription}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center font-bold">SJ</div>
                <span>{text.meta.authorLabel}</span>
              </div>
              <span>•</span>
              <time>{text.meta.lastUpdated}</time>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <article className="mx-auto max-w-3xl px-4 py-12">
          {/* Intro */}
          <div className="prose prose-lg prose-blue mx-auto mb-16 text-gray-600">
            <p className="lead text-xl md:text-2xl">{text.sections.intro.content}</p>
          </div>

          {/* Comparison Cards */}
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            {/* MAP Card */}
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-lg transition hover:shadow-xl">
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-blue-600">
                {text.sections.comparison.mapTitle}
              </h3>
              <div className="mb-4 text-3xl font-bold text-gray-900 font-mono">
                {text.sections.comparison.mapFormula}
              </div>
              <p className="mb-4 text-lg font-semibold text-gray-900">
                {text.sections.comparison.mapRole}
              </p>
              <p className="text-gray-600">
                {text.sections.comparison.mapDescription}
              </p>
            </div>

            {/* PP Card */}
            <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-lg transition hover:shadow-xl">
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-emerald-600">
                {text.sections.comparison.ppTitle}
              </h3>
              <div className="mb-4 text-3xl font-bold text-gray-900 font-mono">
                {text.sections.comparison.ppFormula}
              </div>
              <p className="mb-4 text-lg font-semibold text-gray-900">
                {text.sections.comparison.ppRole}
              </p>
              <p className="text-gray-600">
                {text.sections.comparison.ppDescription}
              </p>
            </div>
          </div>

          {/* Clinical Scenarios */}
          <section className="mb-16 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">{text.sections.clinicalScenarios.title}</h2>
            <p className="text-lg text-gray-700">{text.sections.clinicalScenarios.intro}</p>

            <div className="space-y-6">
              {/* Scenario 1 */}
              <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6">
                <h3 className="text-xl font-bold text-amber-900">{text.sections.clinicalScenarios.scenario1Title}</h3>
                <p className="mt-2 font-mono text-sm font-semibold text-amber-800 uppercase">
                  {text.sections.clinicalScenarios.scenario1Vitals}
                </p>
                <p className="mt-3 text-amber-900">
                  {text.sections.clinicalScenarios.scenario1Analysis}
                </p>
              </div>

              {/* Scenario 2 */}
              <div className="rounded-xl border-l-4 border-red-500 bg-red-50 p-6">
                <h3 className="text-xl font-bold text-red-900">{text.sections.clinicalScenarios.scenario2Title}</h3>
                <p className="mt-2 font-mono text-sm font-semibold text-red-800 uppercase">
                  {text.sections.clinicalScenarios.scenario2Vitals}
                </p>
                <p className="mt-3 text-red-900">
                  {text.sections.clinicalScenarios.scenario2Analysis}
                </p>
              </div>

               {/* Scenario 3 */}
               <div className="rounded-xl border-l-4 border-purple-500 bg-purple-50 p-6">
                <h3 className="text-xl font-bold text-purple-900">{text.sections.clinicalScenarios.scenario3Title}</h3>
                <p className="mt-2 font-mono text-sm font-semibold text-purple-800 uppercase">
                  {text.sections.clinicalScenarios.scenario3Vitals}
                </p>
                <p className="mt-3 text-purple-900">
                  {text.sections.clinicalScenarios.scenario3Analysis}
                </p>
              </div>
            </div>
          </section>

          {/* Action Plan */}
          <section className="mb-16 rounded-2xl bg-gray-900 p-8 text-white shadow-2xl">
            <h2 className="mb-8 text-2xl font-bold">{text.sections.actionPlan.title}</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 font-bold">1</div>
                <div>
                  <h4 className="text-lg font-bold">{text.sections.actionPlan.step1}</h4>
                  <p className="text-gray-300">{text.sections.actionPlan.step1Desc}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 font-bold">2</div>
                <div>
                  <h4 className="text-lg font-bold">{text.sections.actionPlan.step2}</h4>
                  <p className="text-gray-300">{text.sections.actionPlan.step2Desc}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 font-bold">3</div>
                <div>
                  <h4 className="text-lg font-bold">{text.sections.actionPlan.step3}</h4>
                  <p className="text-gray-300">{text.sections.actionPlan.step3Desc}</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="flex justify-center gap-4">
             <Link
              href={`${localePrefix}/map-calculator-bp`}
              className="rounded-full bg-blue-600 px-8 py-3 font-bold text-white shadow-lg transition hover:bg-blue-700"
            >
              {text.cta.calculator}
            </Link>
            <Link
              href={`${localePrefix}/articles`}
              className="rounded-full border border-gray-300 bg-white px-8 py-3 font-bold text-gray-700 shadow-sm transition hover:bg-gray-50"
            >
              {text.cta.back}
            </Link>
          </div>

        </article>
      </main>

      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
