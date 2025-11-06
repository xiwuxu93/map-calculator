import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import localizedTexts from '@/messages/pages/mapCalculationNursing';
import BpCalculator from '@/components/BpCalculator';
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
  const url = `${SITE_URL}${localePrefix}/map-calculation-nursing`;
  const imageUrl = `${SITE_URL}/og-image.png`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: [...meta.keywords],
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/map-calculation-nursing`,
        es: `${SITE_URL}/es/map-calculation-nursing`,
        zh: `${SITE_URL}/zh/map-calculation-nursing`,
        'x-default': `${SITE_URL}/map-calculation-nursing`,
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

export default function MapCalculationNursingPage({ params }: PageProps) {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const texts = localizedTexts[locale] ?? localizedTexts[defaultLocale];
  const localePrefix = getLocalePrefix(locale);
  const meta = texts.meta ?? localizedTexts[defaultLocale].meta;
  const schema = texts.schema ?? localizedTexts[defaultLocale].schema;
  const localizedPath = (path: string) => getLocalizedPath(locale, path);
  const imageUrl = `${SITE_URL}/og-image.png`;
  const nursingLogLines = [texts.t0126, texts.t0127, texts.t0128, texts.t0129];

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: schema.headline,
      description: schema.description,
      url: `${SITE_URL}${localePrefix}/map-calculation-nursing`,
      inLanguage: locale,
      image: imageUrl,
      author: {
        '@type': 'Organization',
        name: 'mapcalculator.org',
      },
      datePublished: '2025-01-12',
      dateModified: '2025-01-12',
      audience: {
        '@type': 'Audience',
        audienceType: schema.audienceTypeLabel,
        description: schema.audienceDescription,
      },
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
          <section id="hero" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <div className="space-y-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-rose-600">
                {texts.t0001}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                {meta.heroTitle}
              </h1>
              <p className="text-base text-gray-700 md:text-lg">{meta.heroDescription}</p>
              <p className="text-sm text-gray-600">{meta.heroAudience}</p>
             
            </div>
            <div className="space-y-4 rounded-xl border border-rose-100 bg-rose-50 p-5 text-sm text-rose-900 md:flex md:items-center md:justify-between">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wide font-semibold text-rose-700">
                  {texts.t0002}
                </p>
                <p className="text-base font-semibold">
                  {texts.t0003}
                </p>
                <p>{texts.t0004}</p>
              </div>
              <div className="space-y-1 text-rose-900 md:text-right">
                <p className="text-xs uppercase tracking-wide font-semibold text-rose-700">
                  {texts.t0005}
                </p>
                <p>
                  {texts.t0006}
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <BpCalculator />
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-700">
              <Link
                href={localizedPath('/')}
                className="inline-flex items-center rounded-full border border-rose-600 px-4 py-2 font-semibold text-rose-700 transition hover:bg-rose-600 hover:text-white"
              >
                {texts.t0007}
              </Link>
              <Link
                href={localizedPath('/how-to-calculate-map-blood-pressure')}
                className="inline-flex items-center rounded-full border border-rose-600 px-4 py-2 font-semibold text-rose-700 transition hover:bg-rose-600 hover:text-white"
              >
                {texts.t0008}
              </Link>
            </div>
          </section>

          <section id="why-nurses" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {texts.t0009}
            </h2>
            <p className="text-base text-gray-700">
              {texts.t0010}
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0011}
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>
                    <strong>{texts.t0012}</strong>{' '}
                    {texts.t0013}
                  </li>
                  <li>
                    <strong>{texts.t0014}</strong>{' '}
                    {texts.t0015}
                  </li>
                  <li>
                    <strong>{texts.t0016}</strong>{' '}
                    {texts.t0017}
                  </li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0018}
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>{texts.t0019}</li>
                  <li>{texts.t0020}</li>
                  <li>{texts.t0021}</li>
                  <li>{texts.t0022}</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-rose-100 bg-rose-50 p-5 text-sm text-rose-900">
              <p className="font-semibold uppercase tracking-wide">
                {texts.t0023}
              </p>
              <p>
                {texts.t0024}
              </p>
            </div>
          </section>

          <section id="formula-guide" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {texts.t0025}
            </h2>
            <div className="space-y-4 text-base text-gray-700">
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 text-blue-900">
                <p className="text-sm font-semibold uppercase tracking-wide">
                  {texts.t0026}
                </p>
                <p className="text-lg font-semibold">
                  {texts.t0027}
                </p>
                <p className="mt-2 text-sm">
                  {texts.t0028}
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0029}
                </h3>
                <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm text-gray-700">
                  <li>{texts.t0030}</li>
                  <li>{texts.t0031}</li>
                  <li>{texts.t0032}</li>
                </ol>
                <p className="mt-3 text-sm text-gray-700">
                  {texts.t0033}
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0034}
                </h3>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full min-w-[480px] divide-y divide-gray-200 text-left text-sm text-gray-700">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                          {texts.t0035}
                        </th>
                        <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                          {texts.t0036}
                        </th>
                        <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                          {texts.t0037}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">120/80</td>
                        <td className="px-4 py-3">93 mmHg</td>
                        <td className="px-4 py-3 text-green-700 font-medium">
                          {texts.t0038}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">110/70</td>
                        <td className="px-4 py-3">83 mmHg</td>
                        <td className="px-4 py-3 text-green-700 font-medium">
                          {texts.t0039}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">100/60</td>
                        <td className="px-4 py-3">73 mmHg</td>
                        <td className="px-4 py-3 text-amber-700 font-medium">
                          {texts.t0040}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">90/55</td>
                        <td className="px-4 py-3">67 mmHg</td>
                        <td className="px-4 py-3 text-amber-700 font-medium">
                          {texts.t0041}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">85/55</td>
                        <td className="px-4 py-3">65 mmHg</td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          {texts.t0042}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">80/50</td>
                        <td className="px-4 py-3">60 mmHg</td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          {texts.t0043}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">140/90</td>
                        <td className="px-4 py-3">107 mmHg</td>
                        <td className="px-4 py-3 text-amber-700 font-medium">
                          {texts.t0044}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">160/100</td>
                        <td className="px-4 py-3">120 mmHg</td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          {texts.t0045}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm text-gray-700">
                  {texts.t0046}
                </p>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50 p-5 text-sm text-red-800">
                <h3 className="text-xl font-semibold">
                  {texts.t0047}
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>{texts.t0048}</li>
                  <li>{texts.t0049}</li>
                  <li>{texts.t0050}</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="nursing-actions" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {texts.t0051}
            </h2>
            <p className="text-base text-gray-700">
              {texts.t0052}
            </p>
            <div className="space-y-4">
              <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-800">
                <h3 className="text-xl font-semibold">
                  {texts.t0053}
                </h3>
                <p className="mt-2">
                  {texts.t0054}
                </p>
                <p className="mt-2 font-semibold">
                  {texts.t0055}
                </p>
                <p>
                  {texts.t0056}
                </p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
                <h3 className="text-xl font-semibold">
                  {texts.t0057}
                </h3>
                <p className="mt-2">
                  {texts.t0058}
                </p>
              </div>
              <div className="rounded-xl border border-green-200 bg-green-50 p-5 text-sm text-green-800">
                <h3 className="text-xl font-semibold">
                  {texts.t0059}
                </h3>
                <p className="mt-2">
                  {texts.t0060}
                </p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
                <h3 className="text-xl font-semibold">
                  {texts.t0061}
                </h3>
                <p className="mt-2">
                  {texts.t0062}
                </p>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-800">
                <h3 className="text-xl font-semibold">
                  {texts.t0063}
                </h3>
                <p className="mt-2">
                  {texts.t0064}
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
              <h3 className="text-xl font-semibold">
                {texts.t0065}
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>
                  <strong>{texts.t0066}</strong>{' '}
                  {texts.t0067}
                </li>
                <li>
                  <strong>{texts.t0068}</strong>{' '}
                  {texts.t0069}
                </li>
                <li>
                  <strong>{texts.t0070}</strong>{' '}
                  {texts.t0071}
                </li>
              </ul>
            </div>
          </section>

          <section id="documentation" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {texts.t0072}
            </h2>
            <div className="rounded-xl border border-rose-100 bg-rose-50 p-5 text-sm text-rose-900">
              <h3 className="text-xl font-semibold text-rose-900">
                {texts.t0073}
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  {texts.t0074}
                </li>
                <li>
                  {texts.t0075}
                </li>
                <li>
                  {texts.t0076}
                </li>
                <li>
                  {texts.t0077}
                </li>
                <li>
                  {texts.t0078}
                </li>
              </ul>
              <p className="mt-4 font-semibold">
                {texts.t0079}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0080}
                </h3>
                <p className="text-sm text-gray-700">
                  {texts.t0081}
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>{texts.t0082}</strong>{' '}
                  {texts.t0083}
                </p>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {texts.t0084}
                </h3>
                <p className="text-sm text-gray-700">
                  {texts.t0085}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>{texts.t0086}</li>
                  <li>
                    {texts.t0087}
                  </li>
                  <li>{texts.t0088}</li>
                  <li>
                    {texts.t0089}
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
              <h3 className="text-xl font-semibold text-gray-900">
                {texts.t0090}
              </h3>
              <p>
                {texts.t0091}
              </p>
              <div className="mt-3 space-y-1 rounded-lg border border-dashed border-gray-300 bg-white p-4 font-mono text-sm">
                {nursingLogLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-rose-100 bg-rose-50 p-5 text-sm text-rose-900">
              <h3 className="text-xl font-semibold">
                {texts.t0092}
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>{texts.t0093}</li>
                <li>{texts.t0094}</li>
                <li>{texts.t0095}</li>
                <li>{texts.t0096}</li>
              </ul>
            </div>
          </section>

          <section id="common-scenarios" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {texts.t0097}
            </h2>
            <p className="text-base text-gray-700">
              {texts.t0098}
            </p>
            <div className="space-y-6">
              <article className="space-y-4 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">{texts.t0130}</h3>
                <p className="text-sm text-gray-700">
                  <strong>{texts.t0131}</strong> {texts.t0132}
                </p>
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">{texts.t0133}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>{texts.t0134}</li>
                    <li>{texts.t0135}</li>
                    <li>{texts.t0136}</li>
                    <li>{texts.t0137}</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>{texts.t0138}</strong> {texts.t0139}
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">{texts.t0140}</p>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>{texts.t0141}</li>
                    <li>{texts.t0142}</li>
                    <li>{texts.t0143}</li>
                    <li>{texts.t0144}</li>
                  </ul>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">{texts.t0145}</p>
                  <ol className="list-decimal space-y-1 pl-5">
                    <li>{texts.t0146}</li>
                    <li>{texts.t0147}</li>
                    <li>{texts.t0148}</li>
                    <li>{texts.t0149}</li>
                    <li>{texts.t0150}</li>
                    <li>{texts.t0151}</li>
                  </ol>
                </div>
                <div className="rounded-lg border border-rose-100 bg-white p-4 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">{texts.t0152}</p>
                  <p>
                    {texts.t0153}
                  </p>
                </div>
              </article>

              <article className="space-y-4 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">{texts.t0154}</h3>
                <p className="text-sm text-gray-700">
                  <strong>{texts.t0131}</strong> {texts.t0155}
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">{texts.t0156}</p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>{texts.t0157}</li>
                      <li>{texts.t0158}</li>
                      <li>{texts.t0159}</li>
                      <li>{texts.t0160}</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">{texts.t0161}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>{texts.t0162}</li>
                      <li>{texts.t0163}</li>
                      <li>{texts.t0164}</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>{texts.t0165}</strong> {texts.t0166}
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">{texts.t0145}</p>
                  <ol className="list-decimal space-y-1 pl-5">
                    <li>{texts.t0167}</li>
                    <li>{texts.t0168}</li>
                    <li>{texts.t0169}</li>
                    <li>{texts.t0170}</li>
                    <li>{texts.t0171}</li>
                    <li>{texts.t0172}</li>
                  </ol>
                </div>
                <div className="rounded-lg border border-amber-100 bg-white p-4 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">{texts.t0173}</p>
                  <p>{texts.t0174}</p>
                </div>
              </article>

              <article className="space-y-4 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">{texts.t0175}</h3>
                <p className="text-sm text-gray-700">
                  <strong>{texts.t0131}</strong> {texts.t0176}
                </p>
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">{texts.t0177}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>{texts.t0178}</li>
                    <li>{texts.t0179}</li>
                    <li>{texts.t0180}</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>{texts.t0181}</strong> {texts.t0182}
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">{texts.t0183}</p>
                  <ul className="space-y-1">
                    <li>{texts.t0184}</li>
                    <li>{texts.t0185}</li>
                    <li>{texts.t0186}</li>
                    <li>{texts.t0187}</li>
                    <li>{texts.t0188}</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-blue-100 bg-white p-4 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">{texts.t0189}</p>
                  <p>{texts.t0190}</p>
                </div>
              </article>

              <article className="space-y-4 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">{texts.t0191}</h3>
                <p className="text-sm text-gray-700">
                  <strong>{texts.t0131}</strong> {texts.t0192}
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">{texts.t0193}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>{texts.t0194}</li>
                      <li>{texts.t0195}</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">{texts.t0196}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>{texts.t0197}</li>
                      <li>{texts.t0198}</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>{texts.t0199}</strong> {texts.t0200}
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">{texts.t0145}</p>
                  <ol className="list-decimal space-y-1 pl-5">
                    <li>{texts.t0201}</li>
                    <li>{texts.t0202}</li>
                    <li>{texts.t0203}</li>
                    <li>{texts.t0204}</li>
                  </ol>
                </div>
                <div className="rounded-lg border border-rose-100 bg-white p-4 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">{texts.t0152}</p>
                  <p>
                    {texts.t0205}
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section id="nclex-prep" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {texts.t0099}
            </h2>
            <p className="text-base text-gray-700">
              {texts.t0100}
            </p>
            <div className="space-y-6">
              <div className="space-y-4 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">{texts.t0206}</h3>
                <div className="space-y-3">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">
                      {texts.t0207}
                    </p>
                    <ul className="mt-2 list-[upper-alpha] space-y-1 pl-6">
                      <li>{texts.t0208}</li>
                      <li>{texts.t0209}</li>
                      <li>{texts.t0210}</li>
                      <li>{texts.t0211}</li>
                    </ul>
                    <details className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                      <summary className="cursor-pointer font-semibold text-emerald-800">{texts.t0212}</summary>
                      <p className="mt-2">
                        <strong>{texts.t0213}</strong> {texts.t0214}
                      </p>
                      <p className="mt-2">
                        <strong>{texts.t0215}</strong> {texts.t0216}
                      </p>
                    </details>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">
                      {texts.t0217}
                    </p>
                    <ul className="mt-2 list-[upper-alpha] space-y-1 pl-6">
                      <li>{texts.t0218}</li>
                      <li>{texts.t0219}</li>
                      <li>{texts.t0220}</li>
                      <li>{texts.t0221}</li>
                    </ul>
                    <details className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                      <summary className="cursor-pointer font-semibold text-emerald-800">{texts.t0212}</summary>
                      <p className="mt-2">
                        <strong>{texts.t0213}</strong> {texts.t0222}
                      </p>
                      <p className="mt-2">
                        <strong>{texts.t0223}</strong> {texts.t0224}
                      </p>
                    </details>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">{texts.t0225}</p>
                    <ul className="mt-2 list-[upper-alpha] space-y-1 pl-6">
                      <li>{texts.t0226}</li>
                      <li>{texts.t0227}</li>
                      <li>{texts.t0228}</li>
                      <li>{texts.t0229}</li>
                    </ul>
                    <details className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                      <summary className="cursor-pointer font-semibold text-emerald-800">{texts.t0212}</summary>
                      <p className="mt-2">
                        <strong>{texts.t0213}</strong> {texts.t0230}
                      </p>
                      <p className="mt-2">
                        <strong>{texts.t0231}</strong> {texts.t0232}
                      </p>
                    </details>
                  </div>
                </div>
              </div>
              <div className="space-y-4 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900">{texts.t0233}</h3>
                <ul className="list-decimal space-y-2 pl-6">
                  <li>
                    <strong>{texts.t0234}</strong> {texts.t0235}
                  </li>
                  <li>
                    <strong>{texts.t0236}</strong> {texts.t0237}
                  </li>
                  <li>
                    <strong>{texts.t0238}</strong> {texts.t0239}
                  </li>
                  <li>
                    <strong>{texts.t0240}</strong> {texts.t0241}
                  </li>
                </ul>
                <p>
                  {texts.t0242}
                </p>
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <p className="font-semibold text-gray-900">{texts.t0243}</p>
                  <p className="mt-1">
                    {texts.t0244}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="quick-reference" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {texts.t0101}
            </h2>
            <div className="space-y-6">
              <div className="space-y-6 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-rose-600">
                      {texts.t0102}
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {texts.t0103}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {texts.t0104}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-full border border-rose-600 px-3 py-1 font-semibold text-rose-700 transition hover:bg-rose-600 hover:text-white"
                      disabled
                    >
                      {texts.t0105}
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-full border border-rose-600 px-3 py-1 font-semibold text-rose-700 transition hover:bg-rose-600 hover:text-white"
                      disabled
                    >
                      {texts.t0106}
                    </button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-xs">
                    <div className="rounded-3xl border-2 border-rose-200 bg-gradient-to-br from-rose-50 via-white to-amber-50 p-6 text-sm text-gray-800 shadow-xl shadow-rose-100 print:shadow-none">
                      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-rose-600">
                        <span>{texts.t0107}</span>
                        <span>{texts.t0108}</span>
                      </div>
                      <hr className="my-3 border-rose-200" />
                      <div className="rounded-2xl border border-rose-100 bg-white/80 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-rose-600">
                          {texts.t0109}
                        </p>
                        <p className="mt-2 font-mono text-lg font-semibold text-gray-900">
                          MAP = (SBP + 2 × DBP) ÷ 3
                        </p>
                        <ul className="mt-3 space-y-1 text-xs text-gray-700">
                          <li>{texts.t0110}</li>
                          <li>{texts.t0111}</li>
                          <li>{texts.t0112}</li>
                        </ul>
                      </div>
                      <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                          {texts.t0113}
                        </p>
                        <ul className="mt-2 space-y-1 text-xs text-gray-700">
                          <li>
                            <span className="font-semibold text-emerald-700">65–100</span> ·{' '}
                            {texts.t0114}
                          </li>
                          <li>
                            <span className="font-semibold text-amber-700">60–64</span> ·{' '}
                            {texts.t0115}
                          </li>
                          <li>
                            <span className="font-semibold text-red-700">&lt;60</span> ·{' '}
                            {texts.t0116}
                          </li>
                          <li>
                            <span className="font-semibold text-red-700">&gt;110</span> ·{' '}
                            {texts.t0117}
                          </li>
                          <li>
                            <span className="font-semibold text-rose-700">
                              {texts.t0118}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50/80 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                          {texts.t0119}
                        </p>
                        <div className="mt-2 space-y-2 text-xs font-semibold text-gray-900">
                          <div className="flex items-center justify-between">
                            <span>120/80</span>
                            <span className="font-mono">MAP 93</span>
                            <span className="text-emerald-700">{texts.t0120}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>95/60</span>
                            <span className="font-mono">MAP 72</span>
                            <span className="text-amber-700">{texts.t0121}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>85/55</span>
                            <span className="font-mono">MAP 65</span>
                            <span className="text-amber-700">{texts.t0122}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span>80/50</span>
                            <span className="font-mono">MAP 60</span>
                            <span className="text-red-700">{texts.t0123}</span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 text-[11px] leading-snug text-gray-600">
                        {texts.t0124}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900">{texts.t0245}</h3>
                <p>
                  {texts.t0246}
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>{texts.t0247}</li>
                  <li>{texts.t0248}</li>
                  <li>{texts.t0249}</li>
                  <li>{texts.t0250}</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="related-resources" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {texts.t0125}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900">{texts.t0251}</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href={localizedPath('/')} className="font-semibold text-rose-700 hover:underline">
                      {texts.t0252}
                    </Link>{' '}
                    — {texts.t0253}
                  </li>
                  <li>
                    <Link href={localizedPath('/map-calculator-bp')} className="font-semibold text-rose-700 hover:underline">
                      {texts.t0254}
                    </Link>{' '}
                    — {texts.t0255}
                  </li>
                  <li>
                    <Link
                      href={localizedPath('/how-to-calculate-map-blood-pressure')}
                      className="font-semibold text-rose-700 hover:underline"
                    >
                      {texts.t0256}
                    </Link>{' '}
                    — {texts.t0257}
                  </li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900">{texts.t0258}</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.sccm.org" className="font-semibold text-rose-700 hover:underline" rel="noreferrer" target="_blank">
                      {texts.t0259}
                    </a>{' '}
                    — {texts.t0260}
                  </li>
                  <li>
                    <a href="https://www.heart.org" className="font-semibold text-rose-700 hover:underline" rel="noreferrer" target="_blank">
                      {texts.t0261}
                    </a>{' '}
                    — {texts.t0262}
                  </li>
                  <li>{texts.t0263}</li>
                </ul>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900">{texts.t0264}</h3>
                <ul className="space-y-2">
                  <li>{texts.t0265}</li>
                  <li>{texts.t0266}</li>
                  <li>{texts.t0267}</li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900">{texts.t0268}</h3>
                <ul className="space-y-2">
                  <li>{texts.t0269}</li>
                  <li>{texts.t0270}</li>
                  <li>{texts.t0271}</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-rose-100 bg-rose-50 p-5 text-sm text-rose-900">
              <h3 className="text-xl font-semibold text-rose-900">{texts.t0272}</h3>
              <ul className="mt-3 space-y-2">
                <li>{texts.t0273}</li>
                <li>{texts.t0274}</li>
                <li>{texts.t0275}</li>
                <li>{texts.t0276}</li>
                <li>{texts.t0277}</li>
                <li>{texts.t0278}</li>
                <li>{texts.t0279}</li>
              </ul>
              <p className="mt-3 font-semibold">
                {texts.t0280}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-700">
              <Link
                href={localizedPath('/')}
                className="inline-flex items-center rounded-full border border-rose-600 px-4 py-2 font-semibold text-rose-700 transition hover:bg-rose-600 hover:text-white"
              >
                {texts.t0281}
              </Link>
              <Link
                href={localizedPath('/map-calculator-bp')}
                className="inline-flex items-center rounded-full border border-rose-600 px-4 py-2 font-semibold text-rose-700 transition hover:bg-rose-600 hover:text-white"
              >
                {texts.t0282}
              </Link>
              <span className="inline-flex items-center rounded-full border border-rose-600 px-4 py-2 font-semibold text-rose-700">
                {texts.t0283}
              </span>
            </div>
            <p className="text-sm text-gray-700">
              {texts.t0284}{' '}
              <a href="mailto:support@mapcalculator.org" className="font-semibold text-rose-700 hover:underline">
                support@mapcalculator.org
              </a>
              {texts.t0285}
            </p>
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
