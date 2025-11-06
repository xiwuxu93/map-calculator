import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BpCalculator from '@/components/BpCalculator';
import {
  getMapCalculatorBpContent,
} from '@/messages/pages/mapCalculatorBp';
import type {
  InterpretationTone,
  MapInterpretationRow,
  PulsePressureRow,
} from '@/messages/pages/mapCalculatorBp/types';
import {
  Locale,
  defaultLocale,
  getLocalePrefix,
  getLocalizedPath,
  locales,
} from '@/lib/i18n';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

const toneClassMap: Record<InterpretationTone, string> = {
  positive: 'text-green-700',
  warning: 'text-amber-700',
  critical: 'text-red-700',
  info: 'text-blue-700',
};

const toneTextClass = (tone: InterpretationTone) =>
  `${toneClassMap[tone] ?? toneClassMap.info} font-medium`;

const tableToneClass = (tone: InterpretationTone) =>
  `${toneClassMap[tone] ?? toneClassMap.info} font-semibold`;

type PageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const content = getMapCalculatorBpContent(locale);
  const localePrefix = getLocalePrefix(locale);
  const url = `${SITE_URL}${localePrefix}/map-calculator-bp`;
  const imageUrl = `${SITE_URL}/og-image.png`;

  return {
    title: content.metadata.title,
    description: content.metadata.description,
    keywords: [...content.metadata.keywords],
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/map-calculator-bp`,
        zh: `${SITE_URL}/zh/map-calculator-bp`,
        'x-default': `${SITE_URL}/map-calculator-bp`,
      },
    },
    openGraph: {
      title: content.metadata.openGraphTitle,
      description: content.metadata.openGraphDescription,
      url,
      type: 'website',
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

export default function MapCalculatorBpPage({ params }: PageProps) {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const content = getMapCalculatorBpContent(locale);
  const localePrefix = getLocalePrefix(locale);
  const localizedPath = (path: string) => getLocalizedPath(locale, path);
  const imageUrl = `${SITE_URL}/og-image.png`;

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: content.schema.medicalWebPage.name,
      description: content.schema.medicalWebPage.description,
      url: `${SITE_URL}${localePrefix}/map-calculator-bp`,
      inLanguage: locale,
      image: imageUrl,
      audience: {
        '@type': 'Audience',
        audienceType: content.schema.medicalWebPage.audienceLabel,
      },
      medicalAudience: content.schema.medicalWebPage.audienceTypes.map((audienceType) => ({
        '@type': 'MedicalAudience',
        audienceType,
      })),
      about: {
        '@type': 'MedicalEntity',
        name: content.schema.medicalWebPage.name,
        description: content.schema.medicalWebPage.aboutDescription,
      },
      specialty: 'CriticalCare',
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
          item: `${SITE_URL}${localePrefix}/map-calculator-bp`,
        },
      ],
    },
  ];

  const shareSubject = encodeURIComponent(content.metadata.heroTitle);
  const shareBody = encodeURIComponent(
    `${content.metadata.heroTitle}: ${SITE_URL}${localePrefix}/map-calculator-bp`,
  );
  const shareHref = `mailto:?subject=${shareSubject}&body=${shareBody}`;

  const renderMapRow = (row: MapInterpretationRow) => (
    <tr key={row.bp}>
      <td className="px-4 py-3 font-semibold text-gray-900">{row.bp}</td>
      <td className="px-4 py-3">{row.formula}</td>
      <td className="px-4 py-3">{row.map}</td>
      <td className={`px-4 py-3 ${tableToneClass(row.tone)}`}>{row.interpretation}</td>
    </tr>
  );

  const renderPulseRow = (row: PulsePressureRow) => (
    <tr key={row.bp}>
      <td className="px-4 py-3 font-semibold text-gray-900">{row.bp}</td>
      <td className="px-4 py-3">{row.map}</td>
      <td className="px-4 py-3">{row.pulsePressure}</td>
      <td className={`px-4 py-3 ${toneTextClass(row.tone)}`}>{row.note}</td>
    </tr>
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
          <section id="hero" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                {content.hero.title}
              </h1>
              <p className="text-base text-gray-600 md:text-lg">{content.hero.description}</p>
            </div>
            <div className="space-y-4 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900 md:p-6">
              <p className="font-semibold uppercase tracking-wide">{content.hero.snapshotHeading}</p>
              <div className="grid gap-3 md:grid-cols-3">
                {content.hero.snapshotItems.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs uppercase tracking-wide text-blue-700">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <BpCalculator />
            </div>
          </section>

          <section id="why-calculate" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {content.sections.whyCalculate.heading}
            </h2>
            <p className="text-base text-gray-700">{content.sections.whyCalculate.intro}</p>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {content.sections.whyCalculate.clinicalReality.heading}
                </h3>
                <p className="text-sm text-gray-700">
                  {content.sections.whyCalculate.clinicalReality.intro}
                </p>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  {content.sections.whyCalculate.clinicalReality.items.map((item) => (
                    <li key={item.label ?? item.body}>
                      {item.label ? <strong>{item.label}</strong> : null}
                      {item.label ? ' ' : null}
                      {item.body}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {content.sections.whyCalculate.usage.heading}
                </h3>
                <p className="text-sm text-gray-700">{content.sections.whyCalculate.usage.intro}</p>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  {content.sections.whyCalculate.usage.questions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-700">{content.sections.whyCalculate.usage.outro}</p>
              </div>
            </div>
          </section>

          <section id="bp-to-map" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {content.sections.bpToMap.heading}
            </h2>
            <div className="space-y-4 text-base text-gray-700">
              <div className="space-y-2 rounded-xl border border-blue-100 bg-blue-50 p-5 text-blue-900">
                <p className="text-sm font-semibold uppercase tracking-wide">
                  {content.sections.bpToMap.formulaBadge}
                </p>
                <p>
                  <strong>{content.sections.bpToMap.formula}</strong>
                </p>
                <p>{content.sections.bpToMap.formulaExplanation}</p>
              </div>
              <p>{content.sections.bpToMap.simpleAverageIntro}</p>
              <ul className="list-disc space-y-2 pl-6">
                {content.sections.bpToMap.simpleAveragePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p>{content.sections.bpToMap.simpleAverageConclusion}</p>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {content.sections.bpToMap.alternative.heading}
                </h3>
                <p>{content.sections.bpToMap.alternative.intro}</p>
                <p>
                  <strong>{content.sections.bpToMap.alternative.formula}</strong>
                </p>
                <p>{content.sections.bpToMap.alternative.explanation}</p>
              </div>
              <div className="space-y-3 rounded-xl border border-amber-100 bg-amber-50 p-5 text-amber-900">
                <h3 className="text-xl font-semibold">
                  {content.sections.bpToMap.accuracy.heading}
                </h3>
                <p>{content.sections.bpToMap.accuracy.intro}</p>
                <ul className="list-disc space-y-2 pl-6 text-sm">
                  {content.sections.bpToMap.accuracy.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>{content.sections.bpToMap.accuracy.note}</p>
              </div>
            </div>
          </section>

          <section id="reference-tables" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {content.sections.referenceGuide.heading}
            </h2>
            <p className="text-base text-gray-700">{content.sections.referenceGuide.intro}</p>
            <div className="not-prose overflow-x-auto">
              <table className="w-full min-w-[640px] divide-y divide-gray-200 text-left text-sm text-gray-700">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                      {content.sections.referenceGuide.mapTableHeaders.bp}
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                      {content.sections.referenceGuide.mapTableHeaders.formula}
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                      {content.sections.referenceGuide.mapTableHeaders.map}
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                      {content.sections.referenceGuide.mapTableHeaders.interpretation}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {content.sections.referenceGuide.mapTable.map(renderMapRow)}
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {content.sections.referenceGuide.contextHeading}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {content.sections.referenceGuide.contextCards.map((card) => (
                  <div key={card.heading} className="space-y-2 rounded-xl border border-gray-100 bg-gray-50 p-5">
                    <h4 className="text-base font-semibold text-gray-900">{card.heading}</h4>
                    <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                      {card.items.map((item) => (
                        <li key={item.label ?? item.body}>
                          {item.label ? <strong>{item.label}</strong> : null}
                          {item.label ? ' ' : null}
                          {item.body}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {content.sections.referenceGuide.pulsePressureHeading}
              </h3>
              <p className="text-sm text-gray-700">
                {content.sections.referenceGuide.pulsePressureIntro}
              </p>
              <div className="not-prose overflow-x-auto">
                <table className="w-full min-w-[520px] divide-y divide-gray-200 text-left text-sm text-gray-700">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                        {content.sections.referenceGuide.pulsePressureHeaders.bp}
                      </th>
                      <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                        {content.sections.referenceGuide.pulsePressureHeaders.map}
                      </th>
                      <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                        {content.sections.referenceGuide.pulsePressureHeaders.pulsePressure}
                      </th>
                      <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                        {content.sections.referenceGuide.pulsePressureHeaders.note}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {content.sections.referenceGuide.pulsePressureTable.map(renderPulseRow)}
                  </tbody>
                </table>
              </div>
              {content.sections.referenceGuide.pulsePressureNotes.map((item) => (
                <p key={item.label ?? item.body} className="text-sm text-gray-700">
                  {item.label ? <strong>{item.label}</strong> : null}
                  {item.label ? ' ' : null}
                  {item.body}
                </p>
              ))}
            </div>
          </section>

          <section id="bp-measurement" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {content.sections.measurement.heading}
            </h2>
            <p className="text-base text-gray-700">{content.sections.measurement.intro}</p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {content.sections.measurement.preparation.heading}
                </h3>
                <ol className="list-decimal space-y-2 pl-6 text-sm text-gray-700">
                  {content.sections.measurement.preparation.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {content.sections.measurement.cuff.heading}
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  {content.sections.measurement.cuff.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <h4 className="text-base font-semibold text-gray-900">
                  {content.sections.measurement.cuff.processHeading}
                </h4>
                <ol className="list-decimal space-y-2 pl-6 text-sm text-gray-700">
                  {content.sections.measurement.cuff.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {content.sections.measurement.errorsHeading}
              </h3>
              <div className="not-prose overflow-x-auto">
                <table className="w-full min-w-[520px] divide-y divide-gray-200 text-left text-sm text-gray-700">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                      {content.sections.measurement.errorTableHeaders.error}
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                      {content.sections.measurement.errorTableHeaders.bpEffect}
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                      {content.sections.measurement.errorTableHeaders.mapEffect}
                    </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {content.sections.measurement.errorsTable.map((row) => (
                      <tr key={row.error}>
                        <td className="px-4 py-3 font-semibold text-gray-900">{row.error}</td>
                        <td className="px-4 py-3">{row.bpEffect}</td>
                        <td className="px-4 py-3">{row.mapEffect}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="space-y-3 rounded-xl border border-amber-100 bg-amber-50 p-5 text-sm text-amber-900">
              <h3 className="text-xl font-semibold">
                {content.sections.measurement.whenInaccurate.heading}
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                {content.sections.measurement.whenInaccurate.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p>{content.sections.measurement.whenInaccurate.note}</p>
            </div>
          </section>

          <section id="decision-making" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {content.sections.decisionMaking.heading}
            </h2>
            <p className="text-base text-gray-700">{content.sections.decisionMaking.intro}</p>
            <div className="grid gap-5 md:grid-cols-2">
              {content.sections.decisionMaking.scenarios.map((scenario) => (
                <div key={scenario.heading} className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <h3 className="text-xl font-semibold text-gray-900">{scenario.heading}</h3>
                  <p className="text-sm text-gray-700">
                    <strong>{content.sections.decisionMaking.scenarioLabel}</strong> {scenario.scenario}
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                    {scenario.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="space-y-3 rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
              <h3 className="text-xl font-semibold">
                {content.sections.decisionMaking.trending.heading}
              </h3>
              <p>{content.sections.decisionMaking.trending.intro}</p>
              <div className="grid gap-4 md:grid-cols-2">
                {content.sections.decisionMaking.trending.examples.map((example) => (
                  <div
                    key={example.title}
                    className="space-y-2 rounded-lg border border-blue-200 bg-white p-4 text-blue-900"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide">{example.title}</p>
                    <ul className="space-y-1 text-sm">
                      {example.timeline.map((entry, index) => (
                        <li key={index}>{entry}</li>
                      ))}
                    </ul>
                    <p className="text-sm font-medium">{example.summary}</p>
                  </div>
                ))}
              </div>
              {content.sections.decisionMaking.trending.reminders.length > 0 ? (
                <ul className="list-disc space-y-2 pl-6">
                  {content.sections.decisionMaking.trending.reminders.map((reminder) => (
                    <li key={reminder}>{reminder}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>

          <section id="faq" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {content.sections.faq.heading}
            </h2>
            <div className="space-y-4">
              {content.sections.faq.items.map((item, index) => (
                <details
                  key={`${item.question}-${index}`}
                  className="group rounded-xl border border-gray-200 bg-gray-50 p-5 text-base text-gray-700"
                >
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm text-gray-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="resources" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {content.sections.resources.heading}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-blue-100 bg-blue-50 p-5 text-blue-900">
                <h3 className="text-xl font-semibold">
                  {content.sections.resources.calculatorHeading}
                </h3>
                <ul className="space-y-2 text-sm">
                  {content.sections.resources.calculatorItems.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <Link
                          href={localizedPath(item.href)}
                          className="font-semibold text-blue-800 hover:underline"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="font-semibold text-blue-800">{item.label}</span>
                      )}
                      {' '}
                      {item.description}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900">
                  {content.sections.resources.guidelinesHeading}
                </h3>
                <ul className="space-y-2">
                  {content.sections.resources.guidelineLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg border border-dashed border-gray-300 bg-white p-4 text-sm text-gray-600">
                  <p className="font-semibold text-gray-800">
                    {content.sections.resources.futureAssetsHeading}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-6">
                    {content.sections.resources.futureAssets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-700">
              <a
                href="#hero"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
              >
                {content.sections.resources.actions.backToTop}
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 font-medium text-gray-700">
                {content.sections.resources.actions.print}
              </span>
              <a
                href={shareHref}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
              >
                {content.sections.resources.actions.share}
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
