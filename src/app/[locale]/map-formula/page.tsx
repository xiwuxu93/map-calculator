import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Locale, defaultLocale, getLocalePrefix, locales } from '@/lib/i18n';
import { getMapFormulaContent } from '@/messages/pages/mapFormula';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

type PageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const content = getMapFormulaContent(locale);
  const localePrefix = getLocalePrefix(locale);
  const url = `${SITE_URL}${localePrefix}/map-formula`;
  const imageUrl = `${SITE_URL}/og-image.png`;

  const languages = locales.reduce((acc, l) => {
    const prefix = l === defaultLocale ? '' : `/${l}`;
    acc[l] = `${SITE_URL}${prefix}/map-formula`;
    return acc;
  }, {} as Record<string, string>);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    keywords: [...content.metadata.keywords],
    alternates: {
      canonical: url,
      languages: {
        ...languages,
        'x-default': `${SITE_URL}/map-formula`,
      },
    },
    openGraph: {
      title: content.metadata.openGraphTitle,
      description: content.metadata.openGraphDescription,
      url,
      type: 'article',
      siteName: 'mapcalculator.org',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: content.metadata.openGraphTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.metadata.openGraphTitle,
      description: content.metadata.openGraphDescription,
      images: [imageUrl],
    },
  };
}

export default async function MapFormulaPage({ params }: PageProps) {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const content = getMapFormulaContent(locale);
  const common = await getTranslations({ locale, namespace: 'common' });
  const localePrefix = getLocalePrefix(locale);
  const localizedPath = (path: string) => {
    if (path === '/' || path === '') {
      return localePrefix || '/';
    }
    return `${localePrefix}${path}`;
  };

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: content.schema.article.headline,
      description: content.schema.article.description,
      inLanguage: locale,
      url: `${SITE_URL}${localePrefix}/map-formula`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: content.schema.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: content.schema.breadcrumbs.home,
          item: `${SITE_URL}${localePrefix}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: content.schema.breadcrumbs.page,
          item: `${SITE_URL}${localePrefix}/map-formula`,
        },
      ],
    },
  ];

  const { hero, sections, cta } = content;

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
          <section className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                {hero.label}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                {content.metadata.heroTitle}
              </h1>
              <p className="text-base text-gray-700 md:text-lg">
                {content.metadata.heroDescription}
              </p>
            </div>
            <div className="grid gap-3 text-sm text-gray-700 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-blue-700">
                  {hero.readingTimeLabel}
                </p>
                <p className="font-medium">{hero.readingTime}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-blue-700">
                  {hero.skillLevelLabel}
                </p>
                <p className="font-medium">{hero.skillLevel}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-blue-700">
                  {hero.lastUpdatedLabel}
                </p>
                <p className="font-medium">{hero.lastUpdated}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={localizedPath(cta.calculatorHref)}
                className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                {cta.calculatorLabel}
              </Link>
              <Link
                href={localizedPath(cta.howToHref)}
                className="inline-flex items-center rounded-full border border-blue-600 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
              >
                {cta.howToLabel}
              </Link>
            </div>
          </section>

          <article className="prose prose-gray max-w-none rounded-2xl bg-white p-6 shadow-lg md:p-10">
            <section>
              <h2>{sections.overview.heading}</h2>
              <p>{sections.overview.intro}</p>
              <p>
                <strong>{sections.overview.formulaLabel}:</strong>{' '}
                <span className="font-mono">
                  {sections.overview.standardFormula}
                </span>
              </p>
              <p>{sections.overview.keyPoint}</p>
            </section>

            <section>
              <h2>{sections.physiology.heading}</h2>
              <p>{sections.physiology.intro}</p>
              <h3>{sections.physiology.systoleVsDiastoleHeading}</h3>
              <p>{sections.physiology.systoleVsDiastoleBody}</p>
              <h3>{sections.physiology.simpleAverageHeading}</h3>
              <p>{sections.physiology.simpleAverageIntro}</p>
              <p>
                <strong>{sections.physiology.simpleAverageFormulaWrong}</strong>
              </p>
              <h3>{sections.physiology.weightedFormulaHeading}</h3>
              <p>{sections.physiology.weightedFormulaBody}</p>
            </section>

            <section>
              <h2>{sections.examples.heading}</h2>
              <p>{sections.examples.intro}</p>
              <div className="not-prose overflow-x-auto">
                <table className="w-full min-w-[480px] text-left text-sm text-gray-700 md:text-base">
                  <thead>
                    <tr className="border-b border-gray-200 text-xs font-semibold uppercase tracking-wide text-gray-500">
                      <th className="py-3 pr-4">
                        {sections.examples.tableHeaders.bloodPressure}
                      </th>
                      <th className="py-3 pr-4">
                        {sections.examples.tableHeaders.map}
                      </th>
                      <th className="py-3">
                        {sections.examples.tableHeaders.notes}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {sections.examples.rows.map((row) => (
                      <tr key={row.bp}>
                        <td className="py-3 pr-4 font-semibold text-gray-900">
                          {row.bp}
                        </td>
                        <td className="py-3 pr-4">{row.map}</td>
                        <td className="py-3 text-gray-600">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>{sections.examples.sbpDbpNote}</p>
            </section>

            <section>
              <h2>{sections.practice.heading}</h2>
              <p>{sections.practice.intro}</p>
              <h3>{sections.practice.stepsHeading}</h3>
              <ol>
                {sections.practice.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <h3>{sections.practice.tipsHeading}</h3>
              <ul>
                {sections.practice.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>{sections.verification.heading}</h2>
              <p>{sections.verification.intro}</p>
              <ul>
                {sections.verification.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>{sections.faq.heading}</h2>
              <dl>
                {sections.faq.items.map((item) => (
                  <div key={item.question} className="mb-4">
                    <dt className="font-semibold text-gray-900">
                      {item.question}
                    </dt>
                    <dd className="text-gray-700">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <p className="mt-8 text-sm text-gray-600">
              {common('professionalUseOnly')}
            </p>
          </article>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

