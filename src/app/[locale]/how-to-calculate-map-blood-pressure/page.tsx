import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import localizedTexts from '@/messages/pages/howToCalculate';
import { Locale, defaultLocale, getLocalePrefix, getLocalizedPath, locales } from '@/lib/i18n';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

type PageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const messages = localizedTexts[locale] ?? localizedTexts[defaultLocale];
  const meta = messages.meta ?? localizedTexts[defaultLocale].meta;
  const localePrefix = getLocalePrefix(locale);
  const url = `${SITE_URL}${localePrefix}/how-to-calculate-map-blood-pressure`;
  const imageUrl = `${SITE_URL}/og-image.png`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [...meta.keywords],
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/how-to-calculate-map-blood-pressure`,
        es: `${SITE_URL}/es/how-to-calculate-map-blood-pressure`,
        zh: `${SITE_URL}/zh/how-to-calculate-map-blood-pressure`,
        'x-default': `${SITE_URL}/how-to-calculate-map-blood-pressure`,
      },
    },
    openGraph: {
      title: meta.openGraphTitle,
      description: meta.openGraphDescription,
      url,
      type: 'article',
      siteName: 'mapcalculator.org',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: meta.openGraphTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.openGraphTitle,
      description: meta.openGraphDescription,
      images: [imageUrl],
    },
  };
}

export default function HowToCalculateMapPage({ params }: PageProps) {
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
      url: `${SITE_URL}${localePrefix}/how-to-calculate-map-blood-pressure`,
      inLanguage: locale,
      image: imageUrl,
      author: {
        '@type': 'Organization',
        name: 'mapcalculator.org',
      },
      datePublished: '2025-01-05',
      dateModified: '2025-01-05',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: schema.howTo.name,
      description: schema.howTo.description,
      totalTime: 'PT3M',
      image: imageUrl,
      step: schema.howTo.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: schema.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
          <section id="intro" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                {texts.t0001}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                {meta.heroTitle}
              </h1>
              <p className="text-base text-gray-700 md:text-lg">{meta.heroDescription}</p>
            </div>
            <div className="space-y-4 rounded-xl border border-blue-100 bg-blue-50 p-5 text-blue-900">
              <div>
                <p className="text-xs uppercase tracking-wide font-semibold text-blue-700">
                  {meta.quickAnswerLabel}
                </p>
                <p className="text-lg font-semibold">
                  {texts.t0002}{' '}
                  <span className="font-mono">{texts.t0003}</span>
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-medium">{texts.t0004}</p>
                <ol className="list-decimal space-y-1 pl-6">
                  <li>{texts.t0005}</li>
                  <li>{texts.t0006}</li>
                  <li>
                    {texts.t0007}{' '}
                    <strong>{texts.t0008}</strong>
                  </li>
                </ol>
              </div>
              <div className="grid gap-3 text-sm md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-700">{meta.readingTime}</p>
                  <p className="font-medium">{texts.t0009}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-700">{meta.skillLevel}</p>
                  <p className="font-medium">{texts.t0010}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-700">{meta.lastUpdated}</p>
                  <p className="font-medium">{texts.t0011}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={localizedPath('/map-calculator-bp')}
                  className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  {texts.t0012}
                </Link>
                <Link
                  href={localizedPath('/')}
                  className="inline-flex items-center rounded-full border border-blue-600 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
                >
                  {texts.t0013}
                </Link>
              </div>
            </div>
          </section>

          <section id="why-learn" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {texts.t0014}
            </h2>
            <p className="text-base text-gray-700">
              {texts.t0015}
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0016}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>{texts.t0017}</strong>{' '}
                    {texts.t0018}
                  </li>
                  <li>
                    <strong>{texts.t0019}</strong>{' '}
                    {texts.t0020}
                  </li>
                  <li>
                    <strong>{texts.t0021}</strong>{' '}
                    {texts.t0022}
                  </li>
                  <li>
                    <strong>{texts.t0023}</strong>{' '}
                    {texts.t0024}
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0025}
                </h3>
                <p className="mt-3 text-sm text-gray-700">
                  {texts.t0026}
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
              <p className="font-semibold uppercase tracking-wide">
                {texts.t0027}
              </p>
              <p>
                {texts.t0028}
              </p>
            </div>
          </section>

          <section id="understanding-formula" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {texts.t0029}
            </h2>
            <div className="space-y-4 text-base text-gray-700">
              <p>
                {texts.t0030}
              </p>
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 font-mono text-blue-900">
                {texts.t0031}
              </div>
              <p>
                {texts.t0032}
              </p>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0033}
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  {texts.t0034}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>
                    {texts.t0035}
                  </li>
                  <li>
                    {texts.t0036}
                  </li>
                </ul>
                <p className="mt-2 text-sm text-gray-700">
                  {texts.t0037}
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0038}
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  {texts.t0039}
                </p>
                <div className="mt-2 rounded-lg border border-gray-200 bg-white p-4 font-mono text-gray-900">
                  {texts.t0040}
                </div>
                <p className="mt-2 text-sm text-gray-700">
                  {texts.t0041}
                </p>
              </div>
              <div className="rounded-xl border border-amber-100 bg-amber-50 p-5 text-sm text-amber-900">
                <h3 className="text-xl font-semibold">
                  {texts.t0042}
                </h3>
                <p>
                  {texts.t0043}
                </p>
              </div>
            </div>
          </section>

          <section id="step-by-step" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {texts.t0044}
            </h2>
            <div className="space-y-4 text-base text-gray-700">
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
                <h3 className="text-xl font-semibold text-blue-900">
                  {texts.t0045}
                </h3>
                <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm text-blue-900">
                  <li>{texts.t0046}</li>
                  <li>{texts.t0047}</li>
                  <li>{texts.t0048}</li>
                  <li>{texts.t0049}</li>
                  <li>{texts.t0050}</li>
                </ol>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0051}
                </h3>
                <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm text-gray-700">
                  <li>{texts.t0052}</li>
                  <li>{texts.t0053}</li>
                  <li>{texts.t0054}</li>
                </ol>
                <p className="mt-3 text-sm text-gray-700">
                  {texts.t0055}
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0056}
                </h3>
                <div className="mt-3 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">
                      {texts.t0057}
                    </p>
                    <p>{texts.t0058}</p>
                    <p>{texts.t0059}</p>
                    <p className="text-green-700">
                      {texts.t0060}
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">
                      {texts.t0061}
                    </p>
                    <p>{texts.t0062}</p>
                    <p>{texts.t0063}</p>
                    <p className="text-amber-700">
                      {texts.t0064}
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">
                      {texts.t0065}
                    </p>
                    <p>{texts.t0066}</p>
                    <p>{texts.t0067}</p>
                    <p className="text-red-700">
                      {texts.t0068}
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">
                      {texts.t0069}
                    </p>
                    <p>{texts.t0070}</p>
                    <p>{texts.t0071}</p>
                    <p className="text-amber-700">
                      {texts.t0072}
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">
                      {texts.t0073}
                    </p>
                    <p>{texts.t0074}</p>
                    <p>{texts.t0075}</p>
                    <p className="text-amber-700">
                      {texts.t0076}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50 p-5 text-sm text-red-800">
                <h3 className="text-xl font-semibold">
                  {texts.t0077}
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>{texts.t0078}</li>
                  <li>
                    {texts.t0079}
                  </li>
                  <li>
                    {texts.t0080}
                  </li>
                  <li>
                    {texts.t0081}
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0082}
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  {texts.t0083}
                </p>
              </div>
            </div>
          </section>

          <section id="clinical-interpretation" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {texts.t0084}
            </h2>
            <p className="text-base text-gray-700">
              {texts.t0085}
            </p>
            <div className="not-prose overflow-x-auto">
              <table className="w-full min-w-[520px] divide-y divide-gray-200 text-left text-sm text-gray-700">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                      {texts.t0086}
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                      {texts.t0087}
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                      {texts.t0088}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">&lt;50 mmHg</td>
                    <td className="px-4 py-3 text-red-700 font-semibold">
                      {texts.t0089}
                    </td>
                    <td className="px-4 py-3">
                      {texts.t0090}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">50-59 mmHg</td>
                    <td className="px-4 py-3 text-red-700 font-semibold">
                      {texts.t0091}
                    </td>
                    <td className="px-4 py-3">
                      {texts.t0092}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">60-64 mmHg</td>
                    <td className="px-4 py-3 text-amber-700 font-semibold">
                      {texts.t0093}
                    </td>
                    <td className="px-4 py-3">
                      {texts.t0094}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">65-100 mmHg</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">
                      {texts.t0095}
                    </td>
                    <td className="px-4 py-3">
                      {texts.t0096}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">101-110 mmHg</td>
                    <td className="px-4 py-3 text-amber-700 font-semibold">
                      {texts.t0097}
                    </td>
                    <td className="px-4 py-3">
                      {texts.t0098}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">111-130 mmHg</td>
                    <td className="px-4 py-3 text-amber-700 font-semibold">
                      {texts.t0099}
                    </td>
                    <td className="px-4 py-3">
                      {texts.t0100}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">&gt;130 mmHg</td>
                    <td className="px-4 py-3 text-red-700 font-semibold">
                      {texts.t0101}
                    </td>
                    <td className="px-4 py-3">
                      {texts.t0102}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0103}
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>
                    {texts.t0104}
                  </li>
                  <li>{texts.t0105}</li>
                  <li>
                    {texts.t0106}
                  </li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0107}
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>{texts.t0108}</li>
                  <li>
                    {texts.t0109}
                  </li>
                  <li>
                    {texts.t0110}
                  </li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0111}
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>{texts.t0112}</li>
                  <li>
                    {texts.t0113}
                  </li>
                  <li>
                    {texts.t0114}
                  </li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0115}
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>
                    {texts.t0116}
                  </li>
                  <li>
                    {texts.t0117}
                  </li>
                  <li>
                    {texts.t0118}
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
              <p className="font-semibold uppercase tracking-wide">
                {texts.t0119}
              </p>
              <p>
                {texts.t0120}
              </p>
            </div>
          </section>

          <section id="advanced-concepts" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {texts.t0121}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0122}
                </h3>
                <p className="text-sm text-gray-700">
                  {texts.t0123}
                </p>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0124}
                </h3>
                <p className="text-sm text-gray-700">
                  {texts.t0125}
                </p>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0126}
                </h3>
                <p className="text-sm text-gray-700">
                  {texts.t0127}
                </p>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0128}
                </h3>
                <p className="text-sm text-gray-700">
                  {texts.t0129}
                </p>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0130}
                </h3>
                <p className="text-sm text-gray-700">
                  {texts.t0131}
                </p>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0132}
                </h3>
                <p className="text-sm text-gray-700">
                  {texts.t0133}
                </p>
              </div>
            </div>
          </section>

          <section id="quiz" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {texts.t0134}
            </h2>
            <p className="text-base text-gray-700">
              {texts.t0135}
            </p>
            <div className="space-y-4">
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {texts.t0136}
                </summary>
                <p className="mt-3">
                  {texts.t0137}{' '}
                  <strong>{texts.t0138}</strong>
                  {texts.t0139}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {texts.t0140}
                </summary>
                <p className="mt-3">
                  {texts.t0141}{' '}
                  <strong>{texts.t0142}</strong>
                  {texts.t0143}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {texts.t0144}
                </summary>
                <p className="mt-3">
                  {texts.t0145}{' '}
                  <strong>{texts.t0146}</strong>
                  {texts.t0147}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {texts.t0148}
                </summary>
                <p className="mt-3">
                  {texts.t0149}{' '}
                  <strong>{texts.t0150}</strong>
                  {texts.t0151}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {texts.t0152}
                </summary>
                <p className="mt-3">
                  {texts.t0153}{' '}
                  <strong>{texts.t0154}</strong>
                  {texts.t0155}
                </p>
              </details>
            </div>
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
              <p className="font-semibold uppercase tracking-wide">
                {texts.t0156}
              </p>
              <p>
                {texts.t0157}
              </p>
            </div>
            <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
              <p className="font-semibold text-gray-900">
                {texts.t0158}
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>{texts.t0159}</li>
                <li>
                  {texts.t0160}
                </li>
                <li>
                  {texts.t0161}
                </li>
                <li>
                  {texts.t0162}
                </li>
              </ul>
            </div>
          </section>

          <section id="common-questions" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {texts.t0163}
            </h2>
            <div className="space-y-4 text-sm text-gray-700">
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {texts.t0203}
                </summary>
                <p className="mt-3">
                  {texts.t0164}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {texts.t0165}
                </summary>
                <p className="mt-3">
                  {texts.t0166}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {texts.t0167}
                </summary>
                <p className="mt-3">
                  {texts.t0168}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {texts.t0169}
                </summary>
                <p className="mt-3">
                  {texts.t0170}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {texts.t0171}
                </summary>
                <p className="mt-3">
                  {texts.t0172}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {texts.t0173}
                </summary>
                <div className="mt-3 space-y-2">
                  <p>{texts.t0174}</p>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>{texts.t0175}</li>
                    <li>{texts.t0176}</li>
                    <li>{texts.t0177}</li>
                    <li>{texts.t0178}</li>
                    <li>{texts.t0179}</li>
                  </ul>
                </div>
              </details>
            </div>
          </section>

          <section id="resources" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {texts.t0180}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
                <h3 className="text-xl font-semibold">
                  {texts.t0181}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href={localizedPath('/')} className="font-semibold text-blue-800 hover:underline">
                      {texts.t0182}
                    </Link>{' '}
                    {texts.t0183}
                  </li>
                  <li>
                    <Link href={localizedPath('/map-calculator-bp')} className="font-semibold text-blue-800 hover:underline">
                      {texts.t0184}
                    </Link>{' '}
                    {texts.t0185}
                  </li>
                  <li>{texts.t0186}</li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0187}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.sccm.org/SurvivingSepsisCampaign/Guidelines"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      {texts.t0188}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ahajournals.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      {texts.t0189}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.braintrauma.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      {texts.t0190}
                    </a>
                  </li>
                </ul>
                <div className="rounded-lg border border-dashed border-gray-300 bg-white p-4 text-gray-600">
                  <p className="font-semibold text-gray-900">
                    {texts.t0191}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
                    <li>{texts.t0192}</li>
                    <li>
                      {texts.t0193}
                    </li>
                    <li>
                      {texts.t0194}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
              <h3 className="text-xl font-semibold text-gray-900">
                {texts.t0195}
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  {texts.t0196}
                </li>
                <li>
                  {texts.t0197}
                </li>
                <li>
                  {texts.t0198}
                </li>
                <li>
                  {texts.t0199}
                </li>
                <li>
                  {texts.t0200}
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={localizedPath('/map-calculator-bp')}
                  className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  {texts.t0201}
                </Link>
                <Link
                  href={localizedPath('/map-calculation-nursing')}
                  className="inline-flex items-center rounded-full border border-blue-600 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
                >
                  {texts.t0202}
                </Link>
              </div>
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
