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

type LocalizedMeta = {
  title: string;
  description: string;
  keywords: string[];
  openGraphTitle: string;
  openGraphDescription: string;
  heroTitle: string;
  heroDescription: string;
  quickAnswerLabel: string;
  readingTime: string;
  skillLevel: string;
  lastUpdated: string;
};

const localizedContent: Record<Locale, LocalizedMeta> = {
  en: {
    title: 'How to Calculate MAP from Blood Pressure: Complete Step-by-Step Guide (2025)',
    description:
      'Learn how to calculate Mean Arterial Pressure from blood pressure readings. Step-by-step tutorial with examples, formulas, and clinical applications for healthcare professionals.',
    keywords: [
      'how to calculate MAP',
      'calculate MAP from blood pressure',
      'MAP formula',
      'mean arterial pressure calculation',
    ],
    openGraphTitle: 'How to Calculate MAP from Blood Pressure - Complete Guide',
    openGraphDescription: 'Master MAP calculation with our comprehensive tutorial',
    heroTitle: 'How to Calculate MAP from Blood Pressure: Complete Guide',
    heroDescription:
      'Master the essential skill of calculating Mean Arterial Pressure (MAP) so you can make confident, protocol-driven clinical decisions in any care setting.',
    quickAnswerLabel: 'Quick Answer',
    readingTime: 'Reading Time',
    skillLevel: 'Skill Level',
    lastUpdated: 'Last Updated',
  },
  zh: {
    title: '如何通过血压计算平均动脉压（MAP）：完整图文步骤（2025 年版）',
    description:
      '系统学习如何由血压读数计算平均动脉压，包含计算公式、示例解析与临床应用要点，适用于各类医疗专业人员。',
    keywords: ['如何计算 MAP', 'MAP 公式', '平均动脉压算法', '血压换算 MAP'],
    openGraphTitle: '如何计算 MAP —— 完整图文指南',
    openGraphDescription: '学习并掌握平均动脉压计算的全流程与临床应用',
    heroTitle: '如何根据血压计算平均动脉压（MAP）',
    heroDescription:
      '掌握 MAP 计算技巧，帮助你在急危重症、围术期与日常护理评估中快速做出循证决策。',
    quickAnswerLabel: '快速答案',
    readingTime: '阅读时间',
    skillLevel: '适用人群',
    lastUpdated: '最后更新',
  },
};

const schemaContent: Record<
  Locale,
  {
    article: {
      headline: string;
      description: string;
    };
    howTo: {
      name: string;
      description: string;
      steps: Array<{ name: string; text: string }>;
    };
    faq: Array<{ question: string; answer: string }>;
  }
> = {
  en: {
    article: {
      headline: 'How to Calculate MAP from Blood Pressure: Complete Step-by-Step Guide',
      description:
        'Detailed tutorial for calculating mean arterial pressure (MAP) including formulas, worked examples, clinical interpretation, and advanced considerations.',
    },
    howTo: {
      name: 'Calculate Mean Arterial Pressure (MAP)',
      description: 'Step-by-step process to calculate MAP using the standard formula based on systolic and diastolic blood pressure.',
      steps: [
        { name: 'Record blood pressure', text: 'Obtain an accurate systolic and diastolic blood pressure reading.' },
        { name: 'Double diastolic', text: 'Multiply the diastolic value by two to account for diastolic time.' },
        { name: 'Add systolic', text: 'Add the systolic value to the doubled diastolic total.' },
        { name: 'Divide by three', text: 'Divide the sum by three to find the mean arterial pressure.' },
        { name: 'Document result', text: 'Round to the nearest whole number and chart the MAP with the original BP.' },
      ],
    },
    faq: [
      {
        question: 'Why is MAP weighted toward diastolic pressure?',
        answer: 'The heart spends about two-thirds of each cardiac cycle in diastole, so diastolic pressure contributes more to average arterial pressure.',
      },
      {
        question: 'When should calculated MAP be verified with an arterial line?',
        answer:
          'Use invasive monitoring when patients are profoundly hypotensive, on high-dose vasopressors, or experiencing rapid hemodynamic changes.',
      },
    ],
  },
  zh: {
    article: {
      headline: '如何通过血压计算平均动脉压：完整分步指南',
      description: '详解平均动脉压（MAP）的计算步骤，包含公式、示例、临床解读与进阶注意事项。',
    },
    howTo: {
      name: '计算平均动脉压（MAP）',
      description: '按照标准公式，基于收缩压与舒张压逐步计算 MAP 的方法。',
      steps: [
        { name: '记录血压', text: '准确获取一组收缩压与舒张压读数。' },
        { name: '舒张压乘二', text: '将舒张压乘以 2，反映心动周期中舒张期的时长。' },
        { name: '加上收缩压', text: '把收缩压加入刚才的结果。' },
        { name: '除以三', text: '将总和除以 3，得到平均动脉压。' },
        { name: '记录结果', text: '四舍五入到整数，并连同原始血压一起记录。' },
      ],
    },
    faq: [
      {
        question: '为什么 MAP 的权重偏向舒张压？',
        answer: '心脏在一个心动周期中约有三分之二时间处于舒张期，因此舒张压对平均动脉压的贡献更大。',
      },
      {
        question: '何时需要用动脉导管验证计算出的 MAP？',
        answer: '当患者出现严重低血压、使用大剂量血管活性药或血流动力学剧烈波动时，应使用有创监测核对 MAP。',
      },
    ],
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const localized = localizedContent[locale] ?? localizedContent[defaultLocale];
  const localePrefix = getLocalePrefix(locale);
  const url = `${SITE_URL}${localePrefix}/how-to-calculate-map-blood-pressure`;
  const imageUrl = `${SITE_URL}/og-image.png`;

  return {
    title: localized.title,
    description: localized.description,
    keywords: localized.keywords,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/how-to-calculate-map-blood-pressure`,
        zh: `${SITE_URL}/zh/how-to-calculate-map-blood-pressure`,
        'x-default': `${SITE_URL}/how-to-calculate-map-blood-pressure`,
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

export default function HowToCalculateMapPage({ params }: PageProps) {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const texts = localizedTexts[locale] ?? localizedTexts[defaultLocale];
  const localePrefix = getLocalePrefix(locale);
  const localized = localizedContent[locale] ?? localizedContent[defaultLocale];
  const schema = schemaContent[locale] ?? schemaContent[defaultLocale];
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
                {localized.heroTitle}
              </h1>
              <p className="text-base text-gray-700 md:text-lg">{localized.heroDescription}</p>
            </div>
            <div className="space-y-4 rounded-xl border border-blue-100 bg-blue-50 p-5 text-blue-900">
              <div>
                <p className="text-xs uppercase tracking-wide font-semibold text-blue-700">
                  {localized.quickAnswerLabel}
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
                  <p className="text-xs uppercase tracking-wide text-blue-700">{localized.readingTime}</p>
                  <p className="font-medium">{texts.t0009}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-700">{localized.skillLevel}</p>
                  <p className="font-medium">{texts.t0010}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-700">{localized.lastUpdated}</p>
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
