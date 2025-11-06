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

type LocalizedMeta = {
  title: string;
  description: string;
  keywords: string[];
  openGraphTitle: string;
  openGraphDescription: string;
  heroTitle: string;
  heroDescription: string;
  heroAudience: string;
};

const localizedContent: Record<Locale, LocalizedMeta> = {
  en: {
    title: 'MAP Calculation for Nurses: Quick Bedside Reference Guide (2025)',
    description:
      'Nursing-focused MAP calculator and guide. Learn MAP calculation, interpretation, and nursing interventions. Practical reference for ICU, ER, and floor nurses.',
    keywords: [
      'MAP calculation nursing',
      'MAP for nurses',
      'bedside MAP calculator',
      'nursing MAP guide',
      'ICU nursing MAP',
    ],
    openGraphTitle: 'MAP Calculation for Nurses - Bedside Reference',
    openGraphDescription: 'Essential MAP guide designed specifically for nurses',
    heroTitle: 'MAP Calculation for Nurses: Bedside Reference',
    heroDescription:
      'Quick, practical MAP calculator and guide for nursing professionals working in ICU, ER, perioperative, or acute care environments.',
    heroAudience: '👩‍⚕️ For: ICU Nurses • ER Nurses • Floor Nurses • Student Nurses',
  },
  zh: {
    title: '护理人员版 MAP 计算：床旁速查指南（2025）',
    description:
      '专为护士设计的 MAP 计算器与操作指南，涵盖计算方法、结果解读与护理干预提示，适用于 ICU、急诊与病房护理场景。',
    keywords: ['护理 MAP 计算', '护理 MAP 指南', '床旁 MAP 工具', 'ICU 护理 MAP'],
    openGraphTitle: '护理专用 MAP 计算指南',
    openGraphDescription: '面向护士的平均动脉压床旁参考手册',
    heroTitle: '护理人员专用的 MAP 计算与速查指南',
    heroDescription:
      '面向 ICU、急诊、围术期及普通病房护士的 MAP 计算工具，帮助你快速评估灌注并制定护理干预。',
    heroAudience: '👩‍⚕️ 适用对象：ICU 护士・急诊护士・病房护士・护理学生',
  },
};

const schemaContent: Record<
  Locale,
  {
    headline: string;
    description: string;
    audienceTypeLabel: string;
    audienceDescription: string;
  }
> = {
  en: {
    headline: 'MAP Calculation for Nurses: Quick Bedside Reference Guide',
    description:
      'Nursing-focused guide covering MAP calculation, interpretation, and interventions for ICU, emergency, and floor nurses.',
    audienceTypeLabel: 'Nurse',
    audienceDescription: 'Registered nurses, ICU nurses, ER nurses, floor nurses, and nursing students.',
  },
  zh: {
    headline: '护理人员版 MAP 计算：床旁速查指南',
    description: '面向 ICU、急诊与普通病房护士的 MAP 计算、解读与护理干预指南。',
    audienceTypeLabel: '护士',
    audienceDescription: '注册护士、ICU 护士、急诊护士、病房护士以及护理学生。',
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const localized = localizedContent[locale] ?? localizedContent[defaultLocale];
  const localePrefix = getLocalePrefix(locale);
  const url = `${SITE_URL}${localePrefix}/map-calculation-nursing`;
  const imageUrl = `${SITE_URL}/og-image.png`;

  return {
    title: localized.title,
    description: localized.description,
    keywords: localized.keywords,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/map-calculation-nursing`,
        zh: `${SITE_URL}/zh/map-calculation-nursing`,
        'x-default': `${SITE_URL}/map-calculation-nursing`,
      },
    },
    openGraph: {
      title: localized.openGraphTitle,
      description: localized.openGraphDescription,
      url,
      type: 'article',
      siteName: 'mapcalculator.org',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: localized.openGraphTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: localized.openGraphTitle,
      description: localized.openGraphDescription,
      images: [imageUrl],
    },
  };
}

export default function MapCalculationNursingPage({ params }: PageProps) {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const texts = localizedTexts[locale] ?? localizedTexts[defaultLocale];
  const localePrefix = getLocalePrefix(locale);
  const localized = localizedContent[locale] ?? localizedContent[defaultLocale];
  const schema = schemaContent[locale] ?? schemaContent[defaultLocale];
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
                {localized.heroTitle}
              </h1>
              <p className="text-base text-gray-700 md:text-lg">{localized.heroDescription}</p>
              <p className="text-sm text-gray-600">{localized.heroAudience}</p>
             
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
                <h3 className="text-xl font-semibold text-gray-900">Scenario 1: New Sepsis Admission</h3>
                <p className="text-sm text-gray-700">
                  <strong>Patient:</strong> 72-year-old admitted from the ED with pneumonia and suspected sepsis.
                </p>
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">Vitals on arrival:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>BP: 88/54 mmHg</li>
                    <li>HR: 112 bpm</li>
                    <li>Temperature: 39.2 C</li>
                    <li>Respiratory rate: 24/min</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Your MAP calculation:</strong> (88 + 108) ÷ 3 = 65 mmHg
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">Nursing assessment:</p>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>MAP exactly at the sepsis threshold (65 mmHg)</li>
                    <li>Patient alert but appearing ill</li>
                    <li>Skin warm with fever present</li>
                    <li>Received 2 L fluid bolus in the ED</li>
                  </ul>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">Your actions:</p>
                  <ol className="list-decimal space-y-1 pl-5">
                    <li>✅ Set up continuous monitoring if not already running</li>
                    <li>✅ Notify the physician that MAP is at threshold</li>
                    <li>✅ Increase vital signs to every 15–30 minutes</li>
                    <li>✅ Prepare for a possible vasopressor order</li>
                    <li>✅ Document interventions in the sepsis bundle flowsheet</li>
                    <li>✅ Verify large-bore IV access is patent</li>
                  </ol>
                </div>
                <div className="rounded-lg border border-rose-100 bg-white p-4 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">Documentation:</p>
                  <p>
                    “Patient admitted with sepsis. MAP 65 mmHg on arrival. Dr. [Name] aware. Sepsis bundle initiated in ED, antibiotics infusing. Monitoring MAP q30 min. Patient alert, following commands.”
                  </p>
                </div>
              </article>

              <article className="space-y-4 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">Scenario 2: Post-op Patient – Concerning Trend</h3>
                <p className="text-sm text-gray-700">
                  <strong>Patient:</strong> Post-abdominal surgery, postoperative day 1 with escalating incision pain (8/10).
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">MAP trend:</p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>0600: BP 115/70 → MAP 85 mmHg</li>
                      <li>0800: BP 108/65 → MAP 79 mmHg</li>
                      <li>1000: BP 95/60 → MAP 72 mmHg</li>
                      <li>1200: BP 90/55 → MAP 67 mmHg</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">Additional findings:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>Drain output 150 mL serosanguinous this shift</li>
                      <li>Patient pale, skin slightly cool</li>
                      <li>Heart rate climbing 78 → 88 → 96 bpm</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Interpretation:</strong> Trend suggests bleeding, hypovolemia, or early shock even though the latest MAP seems "okay."
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">Your actions:</p>
                  <ol className="list-decimal space-y-1 pl-5">
                    <li>✅ Call the surgeon immediately—do not wait for next routine vital check</li>
                    <li>✅ Review the most recent hemoglobin against pre-op values</li>
                    <li>✅ Assess the surgical site and drain for active bleeding</li>
                    <li>✅ Prepare for CBC, type and screen, and fluid bolus orders</li>
                    <li>✅ Increase monitoring to every 15 minutes</li>
                    <li>✅ Document the trend and physician notification</li>
                  </ol>
                </div>
                <div className="rounded-lg border border-amber-100 bg-white p-4 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">Key nursing pearl:</p>
                  <p>A 20% drop over several hours is a red flag. Trends drive escalation even if a single MAP value looks acceptable.</p>
                </div>
              </article>

              <article className="space-y-4 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">Scenario 3: Vasopressor Weaning Challenge</h3>
                <p className="text-sm text-gray-700">
                  <strong>Patient:</strong> ICU day 3, septic shock resolving, on norepinephrine.
                </p>
                <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">Current status:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Norepinephrine 4 mcg/min (was 12 mcg/min yesterday)</li>
                    <li>BP 102/64 → MAP 77 mmHg</li>
                    <li>Patient alert, urine output 70 mL/hr, lactate normalized</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Physician order:</strong> Wean norepinephrine by 2 mcg/min every hour as tolerated; maintain MAP &gt;65 mmHg.
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">Weaning timeline:</p>
                  <ul className="space-y-1">
                    <li>1000: Start at 4 mcg/min → decrease to 2 mcg/min</li>
                    <li>1015: MAP 73 mmHg → continue current dose</li>
                    <li>1100: MAP 75 mmHg → discontinue vasopressor</li>
                    <li>1130: MAP 69 mmHg → still above target, observe</li>
                    <li>1200: MAP 72 mmHg → stable off pressors, notify provider</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-blue-100 bg-white p-4 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">Nursing pearl:</p>
                  <p>Re-check MAP 15–30 minutes after every change. Catch drops early instead of waiting for the full hour.</p>
                </div>
              </article>

              <article className="space-y-4 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">Scenario 4: Hypertensive Patient – When to Hold Medications</h3>
                <p className="text-sm text-gray-700">
                  <strong>Patient:</strong> 68-year-old with CHF during routine morning med pass.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">Morning vitals:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>BP 98/62 → MAP 74 mmHg</li>
                      <li>Patient reports dizziness on standing</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">Scheduled medications:</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>Metoprolol 50 mg PO</li>
                      <li>Lisinopril 10 mg PO</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Assessment:</strong> Low-normal MAP with orthostatic symptoms. Antihypertensives likely to lower perfusion further.
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">Your actions:</p>
                  <ol className="list-decimal space-y-1 pl-5">
                    <li>✅ Hold both medications per protocol (SBP &lt;100 mmHg and symptomatic)</li>
                    <li>✅ Obtain full orthostatic vitals—lying, sitting, standing</li>
                    <li>✅ Notify the physician with MAP values and symptoms</li>
                    <li>✅ Document the hold reason and increase fall precautions</li>
                  </ol>
                </div>
                <div className="rounded-lg border border-rose-100 bg-white p-4 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">Documentation:</p>
                  <p>
                    “BP 98/62 at 0800 (MAP 74). Patient reports dizziness standing. Orthostatic vitals positive (lying 98/62; sitting 92/58 MAP 69; standing 88/54 MAP 65). Metoprolol and lisinopril held per protocol. Dr. [Name] notified 0815. Fall precautions reinforced.”
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
                <h3 className="text-xl font-semibold text-gray-900">NCLEX-Style Practice Questions</h3>
                <div className="space-y-3">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">
                      Question 1: A patient with sepsis has BP 84/52 mmHg. What is the MAP and priority nursing action?
                    </p>
                    <ul className="mt-2 list-[upper-alpha] space-y-1 pl-6">
                      <li>MAP = 63 mmHg; continue monitoring</li>
                      <li>MAP = 68 mmHg; notify physician</li>
                      <li>MAP = 63 mmHg; notify physician immediately</li>
                      <li>MAP = 68 mmHg; give fluid bolus</li>
                    </ul>
                    <details className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                      <summary className="cursor-pointer font-semibold text-emerald-800">Show answer</summary>
                      <p className="mt-2">
                        <strong>Correct:</strong> C — MAP (84 + 104) ÷ 3 = 63 mmHg, below the sepsis goal of 65. Notify the physician immediately rather than “monitor only” or giving a bolus without orders.
                      </p>
                      <p className="mt-2">
                        <strong>NCLEX tip:</strong> MAP below 65 in sepsis always triggers provider notification.
                      </p>
                    </details>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">
                      Question 2: A nurse titrating norepinephrine notes MAP 58 mmHg. What is the appropriate response?
                    </p>
                    <ul className="mt-2 list-[upper-alpha] space-y-1 pl-6">
                      <li>Decrease norepinephrine dose</li>
                      <li>Continue current dose</li>
                      <li>Increase norepinephrine dose</li>
                      <li>Discontinue norepinephrine</li>
                    </ul>
                    <details className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                      <summary className="cursor-pointer font-semibold text-emerald-800">Show answer</summary>
                      <p className="mt-2">
                        <strong>Correct:</strong> C — Target MAP in shock is ≥65 mmHg. Increase the vasopressor per protocol; never reduce or discontinue while MAP is below target.
                      </p>
                      <p className="mt-2">
                        <strong>Reminder:</strong> Document the new dose, MAP response, and next reassessment time.
                      </p>
                    </details>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">Question 3: Which MAP requires immediate intervention?</p>
                    <ul className="mt-2 list-[upper-alpha] space-y-1 pl-6">
                      <li>MAP 72 mmHg in an ICU patient</li>
                      <li>MAP 58 mmHg in a post-op patient</li>
                      <li>MAP 95 mmHg in a hypertensive patient</li>
                      <li>MAP 105 mmHg in an elderly patient</li>
                    </ul>
                    <details className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                      <summary className="cursor-pointer font-semibold text-emerald-800">Show answer</summary>
                      <p className="mt-2">
                        <strong>Correct:</strong> B — MAP 58 mmHg indicates inadequate perfusion. Assess immediately and escalate.
                      </p>
                      <p className="mt-2">
                        <strong>Tip:</strong> Memorize MAP 60 mmHg as your “critical” threshold on exam day.
                      </p>
                    </details>
                  </div>
                </div>
              </div>
              <div className="space-y-4 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900">Key Formulas for Nursing School Exams</h3>
                <ul className="list-decimal space-y-2 pl-6">
                  <li>
                    <strong>MAP formula:</strong> (SBP + 2 × DBP) ÷ 3
                  </li>
                  <li>
                    <strong>Sepsis target:</strong> MAP ≥65 mmHg
                  </li>
                  <li>
                    <strong>Critical low:</strong> MAP &lt;60 mmHg
                  </li>
                  <li>
                    <strong>Normal range:</strong> MAP 60–100 mmHg
                  </li>
                </ul>
                <p>
                  Exam tips: When calculators are not allowed, double the diastolic, add the systolic, and divide by three. Round to the nearest whole number and always include “mmHg.” Show your work for partial credit.
                </p>
                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <p className="font-semibold text-gray-900">Clinical skills checkoff example:</p>
                  <p className="mt-1">
                    “BP 88/56 → MAP 67 mmHg using (88 + 112) ÷ 3. Slightly above the sepsis threshold. I will assess perfusion, increase monitoring frequency, and notify the physician if the MAP trends downward or perfusion worsens.”
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
                <h3 className="text-xl font-semibold text-gray-900">Shift Report Template</h3>
                <p>
                  “MAP stable 70–75 mmHg overnight; currently 72 mmHg. On norepinephrine 3 mcg/min, weaning per protocol. Monitoring hourly. Next wean attempt at 1400 if MAP remains &gt;70.”
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Current MAP and trend for the shift</li>
                  <li>Interventions completed (fluids, vasopressors)</li>
                  <li>Monitoring frequency and pending orders</li>
                  <li>Plan for the next nurse to continue</li>
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
                <h3 className="text-xl font-semibold text-gray-900">Calculation Tools</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href={localizedPath('/')} className="font-semibold text-rose-700 hover:underline">
                      Main MAP Calculator
                    </Link>{' '}
                    — full calculator for all clinicians
                  </li>
                  <li>
                    <Link href={localizedPath('/map-calculator-bp')} className="font-semibold text-rose-700 hover:underline">
                      BP to MAP Converter
                    </Link>{' '}
                    — quick bedside conversions
                  </li>
                  <li>
                    <Link
                      href={localizedPath('/how-to-calculate-map-blood-pressure')}
                      className="font-semibold text-rose-700 hover:underline"
                    >
                      Complete Calculation Guide
                    </Link>{' '}
                    — step-by-step walkthrough
                  </li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900">Clinical Guidelines</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.sccm.org" className="font-semibold text-rose-700 hover:underline" rel="noreferrer" target="_blank">
                      Surviving Sepsis Campaign
                    </a>{' '}
                    — evidence-based protocols
                  </li>
                  <li>
                    <a href="https://www.heart.org" className="font-semibold text-rose-700 hover:underline" rel="noreferrer" target="_blank">
                      American Heart Association
                    </a>{' '}
                    — blood pressure management
                  </li>
                  <li>Your facility’s critical care policies and rapid response procedures</li>
                </ul>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900">For Nursing Students</h3>
                <ul className="space-y-2">
                  <li>NCLEX review modules featuring MAP questions</li>
                  <li>Clinical skills videos covering perfusion assessment (coming soon)</li>
                  <li>Practice worksheets to build mental math speed</li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900">Professional Development</h3>
                <ul className="space-y-2">
                  <li>ICU nursing continuing education credits</li>
                  <li>Critical care certification prep courses</li>
                  <li>Hemodynamic monitoring workshops</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-rose-100 bg-rose-50 p-5 text-sm text-rose-900">
              <h3 className="text-xl font-semibold text-rose-900">Summary: MAP Essentials for Nurses</h3>
              <ul className="mt-3 space-y-2">
                <li>✅ Calculate MAP with (SBP + 2 × DBP) ÷ 3</li>
                <li>✅ Normal range: 60–100 mmHg</li>
                <li>✅ Sepsis target: MAP ≥65 mmHg</li>
                <li>✅ Critical concern: MAP &lt;60 mmHg demands urgent action</li>
                <li>✅ Watch the trend, not just a single reading</li>
                <li>✅ Chart MAP, trend, interventions, and patient response</li>
                <li>✅ Communicate clearly during handoff to prevent safety issues</li>
              </ul>
              <p className="mt-3 font-semibold">
                You are at the bedside—you are the first line of defense when perfusion changes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-700">
              <Link
                href={localizedPath('/')}
                className="inline-flex items-center rounded-full border border-rose-600 px-4 py-2 font-semibold text-rose-700 transition hover:bg-rose-600 hover:text-white"
              >
                Calculate MAP Now
              </Link>
              <Link
                href={localizedPath('/map-calculator-bp')}
                className="inline-flex items-center rounded-full border border-rose-600 px-4 py-2 font-semibold text-rose-700 transition hover:bg-rose-600 hover:text-white"
              >
                Print Reference Card
              </Link>
              <span className="inline-flex items-center rounded-full border border-rose-600 px-4 py-2 font-semibold text-rose-700">
                Share with Colleagues
              </span>
            </div>
            <p className="text-sm text-gray-700">
              Questions? Reach out to{' '}
              <a href="/cdn-cgi/l/email-protection" className="font-semibold text-rose-700 hover:underline">
                [email&nbsp;protected]
              </a>
              . This guide is educational; always follow provider orders and facility policy.
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
