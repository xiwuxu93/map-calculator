import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Locale, defaultLocale, locales } from '@/lib/i18n';

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
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
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
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
  const localized = localizedContent[locale] ?? localizedContent[defaultLocale];
  const schema = schemaContent[locale] ?? schemaContent[defaultLocale];
  const isZh = locale === 'zh';
  const localizedPath = (path: string) => {
    if (path === '/' || path === '') {
      return localePrefix || '/';
    }
    return `${localePrefix}${path}`;
  };
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
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
          <section id="intro" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                {isZh ? '分步教程' : 'Step-by-Step Tutorial'}
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
                  {isZh ? '公式：' : 'Formula:'}{' '}
                  <span className="font-mono">{isZh ? 'MAP =（收缩压 + 2 × 舒张压）÷ 3' : 'MAP = (Systolic BP + 2 × Diastolic BP) ÷ 3'}</span>
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-medium">{isZh ? '示例：血压 120/80 mmHg' : 'Example for 120/80 mmHg:'}</p>
                <ol className="list-decimal space-y-1 pl-6">
                  <li>{isZh ? '舒张压 ×2：2 × 80 = 160' : 'Double the diastolic value: 2 × 80 = 160'}</li>
                  <li>{isZh ? '加上收缩压：160 + 120 = 280' : 'Add the systolic value: 160 + 120 = 280'}</li>
                  <li>
                    {isZh
                      ? '除以 3：280 ÷ 3 = 93.3 → '
                      : 'Divide by 3: 280 ÷ 3 = 93.3 → '}{' '}
                    <strong>{isZh ? 'MAP = 93 mmHg' : 'MAP = 93 mmHg'}</strong>
                  </li>
                </ol>
              </div>
              <div className="grid gap-3 text-sm md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-700">{localized.readingTime}</p>
                  <p className="font-medium">{isZh ? '约 8 分钟' : '8 minutes'}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-700">{localized.skillLevel}</p>
                  <p className="font-medium">{isZh ? '适合所有医疗专业人员' : 'All healthcare professionals'}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-700">{localized.lastUpdated}</p>
                  <p className="font-medium">{isZh ? '2025 年 1 月' : 'January 2025'}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={localizedPath('/map-calculator-bp')}
                  className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  {isZh ? '立即使用互动计算器' : 'Try the Interactive Calculator'}
                </Link>
                <Link
                  href={localizedPath('/')}
                  className="inline-flex items-center rounded-full border border-blue-600 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
                >
                  {isZh ? '查看 MAP 主工具' : 'Explore the Main MAP Tool'}
                </Link>
              </div>
            </div>
          </section>

          <section id="why-learn" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '为何每位医疗人员都要会算 MAP' : 'Why Every Healthcare Professional Needs to Calculate MAP'}
            </h2>
            <p className="text-base text-gray-700">
              {isZh
                ? '平均动脉压计算几乎是所有临床专科的核心技能。无论你是在备考的学生、刚进 ICU 的新人，还是负责复杂病例的资深临床医生，职业生涯中都会反复计算 MAP。'
                : 'Mean Arterial Pressure calculation is a core competency across nearly every clinical discipline. Whether you are a student preparing for board exams, a new graduate learning ICU workflows, or a seasoned clinician guiding complex cases, you will calculate MAP repeatedly throughout your career.'}
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '真实临床场景' : 'Real-World Scenarios'}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>{isZh ? 'ICU 早交班：' : 'Morning ICU rounds:'}</strong>{' '}
                    {isZh ? '“昨夜 MAP 趋势怎样？”' : '"What is the MAP trend overnight?"'}
                  </li>
                  <li>
                    <strong>{isZh ? '脓毒症启动：' : 'Sepsis activation:'}</strong>{' '}
                    {isZh ? '“MAP 是否一直保持在 65 mmHg 以上？”' : '"Has MAP stayed above 65 mmHg?"'}
                  </li>
                  <li>
                    <strong>{isZh ? '手术室交接：' : 'OR handoff:'}</strong>{' '}
                    {isZh ? '“术中 MAP 平均 72 mmHg。”' : '"The intraoperative MAP averaged 72 mmHg."'}
                  </li>
                  <li>
                    <strong>{isZh ? '急诊接诊：' : 'Emergency department:'}</strong>{' '}
                    {isZh ? '“这名创伤患者的 MAP 只有 58。”' : '"This trauma patient\'s MAP is only 58."'}
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '为什么不能只看血压？' : 'Why Not Just Use Blood Pressure?'}
                </h3>
                <p className="mt-3 text-sm text-gray-700">
                  {isZh
                    ? '血压提供两个离散数值（收缩压和舒张压），描述的是心动周期的峰值与谷值。而器官灌注是持续发生的过程，MAP 体现整个周期的平均灌注压力，因此在重症流程中更常被用作阈值。'
                    : 'Blood pressure provides two discrete numbers (systolic and diastolic) that describe arterial pressure at the peaks and troughs of the cardiac cycle. Organs, however, experience continuous perfusion. MAP represents the average perfusion pressure across the entire cycle, making it the preferred threshold in critical care protocols.'}
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
              <p className="font-semibold uppercase tracking-wide">
                {isZh ? '重点提醒' : 'Critical Point'}
              </p>
              <p>
                {isZh
                  ? '很多急诊、重症和手术流程使用 MAP 目标而非收缩压目标。如果无法快速准确地计算 MAP，就难以有效执行这些流程。'
                  : 'Many emergency, critical care, and operative pathways specify MAP targets rather than systolic blood pressure goals. If you cannot calculate MAP quickly and accurately, you cannot implement these protocols effectively.'}
              </p>
            </div>
          </section>

          <section id="understanding-formula" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '理解 MAP 公式' : 'Understanding the MAP Formula'}
            </h2>
            <div className="space-y-4 text-base text-gray-700">
              <p>
                {isZh
                  ? '标准公式容易记忆，却深植于心脏生理学的基础：'
                  : 'The standard formula is simple to remember but rooted in cardiac physiology:'}
              </p>
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 font-mono text-blue-900">
                {isZh ? 'MAP =（收缩压 + 2 × 舒张压）÷ 3' : 'MAP = (Systolic BP + 2 × Diastolic BP) ÷ 3'}
              </div>
              <p>
                {isZh
                  ? '由于心脏在一个心动周期中大约三分之一时间处于收缩期、三分之二处于舒张期，公式在求平均前会将舒张压加倍。该权重反映动脉系统实际承受各压力的时长。'
                  : 'Because the heart spends approximately one-third of the cardiac cycle in systole and two-thirds in diastole, the equation doubles the diastolic value before averaging. This weighting mirrors how long the arterial tree experiences each pressure.'}
              </p>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '简单平均 vs. 加权公式' : 'Simple Average vs. Weighted Formula'}
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  {isZh ? '以血压 120/80 为例：' : 'Consider blood pressure 120/80:'}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>
                    {isZh ? '简单平均（错误）：(120 + 80) ÷ 2 = 100 mmHg' : 'Simple average (incorrect): (120 + 80) ÷ 2 = 100 mmHg'}
                  </li>
                  <li>
                    {isZh ? '加权公式（正确）：(120 + 160) ÷ 3 = 93 mmHg' : 'Weighted formula (correct): (120 + 160) ÷ 3 = 93 mmHg'}
                  </li>
                </ul>
                <p className="mt-2 text-sm text-gray-700">
                  {isZh
                    ? '在低血压患者中，这样的差异可能决定是否需要升级治疗。'
                    : 'In hypotensive patients, this difference can determine whether you escalate treatment.'}
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '脉压变式公式' : 'Alternative Pulse Pressure Formula'}
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  {isZh ? '许多临床人员更喜欢以下心算版本：' : 'Many clinicians prefer this mental math version:'}
                </p>
                <div className="mt-2 rounded-lg border border-gray-200 bg-white p-4 font-mono text-gray-900">
                  {isZh ? 'MAP = 舒张压 +（脉压 ÷ 3）' : 'MAP = Diastolic BP + (Pulse Pressure ÷ 3)'}
                </div>
                <p className="mt-2 text-sm text-gray-700">
                  {isZh
                    ? '脉压就是收缩压减去舒张压。将结果除以 3 再加回舒张压，所得数值与标准公式完全一致。'
                    : 'Pulse pressure is simply systolic minus diastolic. Divide by three and add to the diastolic value to reach the same result as the standard equation.'}
                </p>
              </div>
              <div className="rounded-xl border border-amber-100 bg-amber-50 p-5 text-sm text-amber-900">
                <h3 className="text-xl font-semibold">
                  {isZh ? '何时需要额外核实' : 'When the Formula Needs Confirmation'}
                </h3>
                <p>
                  {isZh
                    ? '标准公式假设心率正常、节律规则、收缩期与舒张期时程常规。在极度心动过速、重度心动过缓或主动脉瓣返流等情况下，舒张期可能明显改变，建议改用有创监测。'
                    : 'The standard calculation assumes normal heart rate, regular rhythm, and typical systolic/diastolic timing. In extreme tachycardia, severe bradycardia, or conditions like aortic regurgitation, diastolic time may be dramatically altered. Invasive monitoring is preferred for these patients.'}
                </p>
              </div>
            </div>
          </section>

          <section id="step-by-step" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '逐步计算 MAP' : 'Step-by-Step: How to Calculate MAP'}
            </h2>
            <div className="space-y-4 text-base text-gray-700">
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
                <h3 className="text-xl font-semibold text-blue-900">
                  {isZh ? '方法一：标准公式' : 'Method 1: Standard Formula'}
                </h3>
                <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm text-blue-900">
                  <li>{isZh ? '获取收缩压与舒张压读数。' : 'Obtain systolic and diastolic blood pressure readings.'}</li>
                  <li>{isZh ? '将舒张压乘以 2。' : 'Multiply the diastolic value by two.'}</li>
                  <li>{isZh ? '再加上收缩压。' : 'Add the systolic value.'}</li>
                  <li>{isZh ? '总和除以 3。' : 'Divide the total by three.'}</li>
                  <li>{isZh ? '记录时取最接近的整数。' : 'Round to the nearest whole number for documentation.'}</li>
                </ol>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '方法二：脉压心算法' : 'Method 2: Pulse Pressure (Mental Math)'}
                </h3>
                <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm text-gray-700">
                  <li>{isZh ? '收缩压减去舒张压，得到脉压。' : 'Subtract diastolic from systolic to obtain pulse pressure.'}</li>
                  <li>{isZh ? '脉压除以 3。' : 'Divide pulse pressure by three.'}</li>
                  <li>{isZh ? '将结果加回舒张压。' : 'Add the result to the diastolic value.'}</li>
                </ol>
                <p className="mt-3 text-sm text-gray-700">
                  {isZh
                    ? '两种方法得到的数值完全相同，选择在压力下你能最快完成的步骤。'
                    : 'Both methods produce identical values. Choose the approach you can execute fastest under pressure.'}
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '练习示例' : 'Practice Examples'}
                </h3>
                <div className="mt-3 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">
                      {isZh ? '示例 1：正常血压' : 'Example 1: Normal BP'}
                    </p>
                    <p>{isZh ? '血压 110/70 mmHg' : 'BP 110/70 mmHg'}</p>
                    <p>{isZh ? 'MAP = (110 + 140) ÷ 3 = 83 mmHg' : 'MAP = (110 + 140) ÷ 3 = 83 mmHg'}</p>
                    <p className="text-green-700">
                      {isZh ? '解读：灌注充足' : 'Interpretation: Adequate perfusion'}
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">
                      {isZh ? '示例 2：低血压' : 'Example 2: Hypotension'}
                    </p>
                    <p>{isZh ? '血压 85/55 mmHg' : 'BP 85/55 mmHg'}</p>
                    <p>{isZh ? 'MAP = (85 + 110) ÷ 3 = 65 mmHg' : 'MAP = (85 + 110) ÷ 3 = 65 mmHg'}</p>
                    <p className="text-amber-700">
                      {isZh ? '解读：临界值——需密切观察' : 'Interpretation: Borderline — monitor closely'}
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">
                      {isZh ? '示例 3：高血压' : 'Example 3: Hypertension'}
                    </p>
                    <p>{isZh ? '血压 160/100 mmHg' : 'BP 160/100 mmHg'}</p>
                    <p>{isZh ? 'MAP = (160 + 200) ÷ 3 = 120 mmHg' : 'MAP = (160 + 200) ÷ 3 = 120 mmHg'}</p>
                    <p className="text-red-700">
                      {isZh ? '解读：升高——评估是否紧急处理' : 'Interpretation: Elevated — assess for urgency'}
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">
                      {isZh ? '示例 4：脉压增宽' : 'Example 4: Wide Pulse Pressure'}
                    </p>
                    <p>{isZh ? '血压 150/70 mmHg' : 'BP 150/70 mmHg'}</p>
                    <p>{isZh ? 'MAP = 70 + (80 ÷ 3) ≈ 97 mmHg' : 'MAP = 70 + (80 ÷ 3) ≈ 97 mmHg'}</p>
                    <p className="text-amber-700">
                      {isZh ? '解读：MAP 正常，脉压增宽——评估是否存在主动脉疾病' : 'Interpretation: Normal MAP, wide pulse pressure — evaluate for aortic pathology'}
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">
                      {isZh ? '示例 5：脉压变窄' : 'Example 5: Narrow Pulse Pressure'}
                    </p>
                    <p>{isZh ? '血压 100/90 mmHg' : 'BP 100/90 mmHg'}</p>
                    <p>{isZh ? 'MAP = (100 + 180) ÷ 3 = 93 mmHg' : 'MAP = (100 + 180) ÷ 3 = 93 mmHg'}</p>
                    <p className="text-amber-700">
                      {isZh ? '解读：MAP 正常，脉压变窄——警惕心包填塞或重度心衰' : 'Interpretation: Normal MAP, narrow pulse pressure — investigate tamponade or severe heart failure'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50 p-5 text-sm text-red-800">
                <h3 className="text-xl font-semibold">
                  {isZh ? '常见计算错误' : 'Common Calculation Mistakes'}
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>{isZh ? '忘记将舒张压翻倍。' : 'Forgetting to double the diastolic value.'}</li>
                  <li>
                    {isZh ? '在相加前就分别除法，违反运算顺序。' : 'Dividing each number before adding (violates order of operations).'}
                  </li>
                  <li>
                    {isZh ? '直接取收缩压与舒张压的简单平均。' : 'Using a simple average of systolic and diastolic values.'}
                  </li>
                  <li>
                    {isZh ? '心算过快未核实步骤。' : 'Attempting mental math too quickly without verifying steps.'}
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '心算技巧' : 'Mental Math Shortcuts'}
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  {isZh
                    ? '记住常见的 3 倍关系（90 → 30，120 → 40，150 → 50），并牢记 MAP 应更接近舒张压而非收缩压，这能帮助你迅速识别计算错误。'
                    : 'Memorize common multiples of three (90 → 30, 120 → 40, 150 → 50) and remember that MAP should be closer to the diastolic value than the systolic value. This helps you identify mistakes instantly.'}
                </p>
              </div>
            </div>
          </section>

          <section id="clinical-interpretation" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '如何解读计算出的 MAP' : 'Interpreting Your Calculated MAP'}
            </h2>
            <p className="text-base text-gray-700">
              {isZh
                ? '得到数值后，要将其转化为具体行动。以下范围可作为起点，并结合患者个体化目标来判断。'
                : 'Once you have the number, you need to translate it into action. Use these ranges as a starting point and always factor in patient-specific targets.'}
            </p>
            <div className="not-prose overflow-x-auto">
              <table className="w-full min-w-[520px] divide-y divide-gray-200 text-left text-sm text-gray-700">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                      {isZh ? 'MAP 数值' : 'MAP Value'}
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                      {isZh ? '分类' : 'Classification'}
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                      {isZh ? '临床意义' : 'Clinical Significance'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">&lt;50 mmHg</td>
                    <td className="px-4 py-3 text-red-700 font-semibold">
                      {isZh ? '极低' : 'Severely low'}
                    </td>
                    <td className="px-4 py-3">
                      {isZh ? '危及生命的低灌注' : 'Life-threatening hypoperfusion'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">50-59 mmHg</td>
                    <td className="px-4 py-3 text-red-700 font-semibold">
                      {isZh ? '非常低' : 'Very low'}
                    </td>
                    <td className="px-4 py-3">
                      {isZh ? '器官损伤风险极高' : 'High risk of organ damage'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">60-64 mmHg</td>
                    <td className="px-4 py-3 text-amber-700 font-semibold">
                      {isZh ? '偏低' : 'Low'}
                    </td>
                    <td className="px-4 py-3">
                      {isZh ? '低于多数临床目标' : 'Below most clinical targets'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">65-100 mmHg</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">
                      {isZh ? '正常' : 'Normal'}
                    </td>
                    <td className="px-4 py-3">
                      {isZh ? '大多数成年人灌注充足' : 'Adequate perfusion for most adults'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">101-110 mmHg</td>
                    <td className="px-4 py-3 text-amber-700 font-semibold">
                      {isZh ? '轻度升高' : 'Mildly elevated'}
                    </td>
                    <td className="px-4 py-3">
                      {isZh ? '持续监测，视情况可以接受' : 'Monitor, may be acceptable'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">111-130 mmHg</td>
                    <td className="px-4 py-3 text-amber-700 font-semibold">
                      {isZh ? '升高' : 'Elevated'}
                    </td>
                    <td className="px-4 py-3">
                      {isZh ? '提示高血压风险' : 'Hypertension concern'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">&gt;130 mmHg</td>
                    <td className="px-4 py-3 text-red-700 font-semibold">
                      {isZh ? '重度升高' : 'Severely elevated'}
                    </td>
                    <td className="px-4 py-3">
                      {isZh ? '高血压急症风险' : 'Hypertensive emergency risk'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '重症监护 / ICU' : 'Critical Care & ICU'}
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>
                    {isZh ? '对不稳定患者每 15-60 分钟记录一次 MAP。' : 'Document MAP every 15-60 minutes in unstable patients.'}
                  </li>
                  <li>{isZh ? 'MAP &lt;65 mmHg 通常需要干预。' : 'MAP &lt;65 mmHg generally requires intervention.'}</li>
                  <li>
                    {isZh ? 'MAP &gt;100 mmHg？评估是否复苏过度或存在高血压。' : 'MAP &gt;100 mmHg? Evaluate for over-resuscitation or hypertension.'}
                  </li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '急诊科' : 'Emergency Department'}
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>{isZh ? 'MAP &lt;60 mmHg 提示休克——启动相关流程。' : 'MAP &lt;60 mmHg signals shock — activate protocols.'}</li>
                  <li>
                    {isZh ? 'MAP 60-70 mmHg 需要结合趋势与床旁评估。' : 'MAP 60-70 mmHg requires trending and bedside assessment.'}
                  </li>
                  <li>
                    {isZh ? 'MAP &gt;130 mmHg？考虑高血压急症评估。' : 'MAP &gt;130 mmHg? Evaluate for hypertensive emergencies.'}
                  </li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '麻醉 / 手术间' : 'Anesthesia & OR'}
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>{isZh ? '通过监护或动脉管持续监测 MAP。' : 'Monitor MAP continuously via monitor or arterial line.'}</li>
                  <li>
                    {isZh ? 'MAP &lt;65 mmHg 需考虑麻醉过深或血容量不足。' : 'MAP &lt;65 mmHg may indicate depth of anesthesia or hypovolemia.'}
                  </li>
                  <li>
                    {isZh ? 'MAP &gt;100 mmHg 需评估疼痛是否控制不足或麻醉不够。' : 'MAP &gt;100 mmHg warrants evaluation for pain or inadequate anesthesia.'}
                  </li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '术后 / 过渡病房' : 'Post-Operative & Step-Down'}
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>
                    {isZh ? '初期每 15-30 分钟计算一次 MAP，随后按流程执行。' : 'Calculate MAP every 15-30 minutes initially, then per protocol.'}
                  </li>
                  <li>
                    {isZh ? '较基线下降超过 20% 需立即排查原因。' : 'A drop &gt;20% from baseline requires immediate investigation.'}
                  </li>
                  <li>
                    {isZh ? 'MAP 稳定在 70-90 mmHg 有助于安全康复。' : 'Stable MAP 70-90 mmHg supports safe recovery trajectories.'}
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
              <p className="font-semibold uppercase tracking-wide">
                {isZh ? '先看趋势再干预' : 'Trend Before You Treat'}
              </p>
              <p>
                {isZh
                  ? '记录一段时间内的 MAP 变化。趋势改善说明治疗有效；即使绝对值仍在目标内，若出现下降趋势也要迅速重新评估。'
                  : 'Document MAP trends over time. An improving trajectory confirms therapy effectiveness, while a downward trend demands rapid reassessment even if absolute values remain within range.'}
              </p>
            </div>
          </section>

          <section id="advanced-concepts" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? 'MAP 进阶要点' : 'Advanced MAP Concepts'}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '老年患者' : 'Elderly Patients'}
                </h3>
                <p className="text-sm text-gray-700">
                  {isZh
                    ? '动脉硬化会使脉压增宽并抬高收缩压。慢性高血压患者通常需要 MAP 70-85 mmHg 才能维持原有灌注，非必要不要过度降压。'
                    : 'Arterial stiffness widens pulse pressure and elevates systolic readings. Chronic hypertensive patients may require MAP 70-85 mmHg to maintain baseline organ perfusion. Avoid aggressive reduction unless clinically indicated.'}
                </p>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '儿科' : 'Pediatrics'}
                </h3>
                <p className="text-sm text-gray-700">
                  {isZh
                    ? '正常 MAP 会随年龄变化。速记口诀：最低可接受 MAP ≈ 年龄（岁）+ 40。新生儿可耐受 45-60 mmHg，学龄儿童应维持在 55-60 mmHg 以上。'
                    : 'Normal MAP values vary by age. A quick rule: minimum acceptable MAP ≈ age (years) + 40. Neonates tolerate MAP 45-60 mmHg; school-age children should maintain >55-60 mmHg.'}
                </p>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '妊娠期' : 'Pregnancy'}
                </h3>
                <p className="text-sm text-gray-700">
                  {isZh
                    ? '孕中期出现生理性低血压属正常，MAP 70-90 mmHg 一般可接受；若持续高于 105 mmHg，需警惕子痫前期。'
                    : 'Physiologic hypotension is normal in the second trimester. MAP 70-90 mmHg is typically acceptable. Persistent MAP >105 mmHg warrants evaluation for preeclampsia.'}
                </p>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '心律失常与心动过速' : 'Arrhythmias & Tachycardia'}
                </h3>
                <p className="text-sm text-gray-700">
                  {isZh
                    ? '房颤等不规则节律需要测量 3-5 次取平均。严重心动过速会缩短舒张期，使标准公式准确性下降，此时建议使用有创监测。'
                    : 'Irregular rhythms like atrial fibrillation require multiple readings (three to five) with an average MAP. Severe tachycardia shortens diastolic time, reducing the accuracy of the standard formula. Invasive monitoring is recommended when precision is critical.'}
                </p>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '升压药治疗' : 'Vasopressor Therapy'}
                </h3>
                <p className="text-sm text-gray-700">
                  {isZh
                    ? '滴定去甲肾上腺素、加压素或去氧肾上腺素时，每 15-30 分钟重新计算 MAP。根据医嘱目标调整输注速度，并记录当前值及变化趋势。'
                    : 'Recalculate MAP every 15-30 minutes while titrating norepinephrine, vasopressin, or phenylephrine. Adjust infusion rates to maintain ordered targets, and document both current MAP and trend.'}
                </p>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '直接测得 vs. 换算 MAP' : 'Direct vs. Calculated MAP'}
                </h3>
                <p className="text-sm text-gray-700">
                  {isZh
                    ? '袖带推算的 MAP 与动脉导管读数通常仅差 5-10 mmHg。对于升压药依赖性休克、血流波动快、重度低血压或高风险手术，应采用动脉有创监测。'
                    : 'Cuff-derived MAP values are usually within 5-10 mmHg of arterial line readings. Use arterial lines for high-risk situations: vasopressor-dependent shock, rapid fluctuations, severe hypotension, or high-risk surgeries.'}
                </p>
              </div>
            </div>
          </section>

          <section id="quiz" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '自测：MAP 计算能力' : 'Test Your MAP Calculation Skills'}
            </h2>
            <p className="text-base text-gray-700">
              {isZh
                ? '在展开答案前先自行完成这些临床情境，检验自己在高压环境下是否能算出 MAP。'
                : 'Work through these clinical scenarios before expanding the answers. Self-check to see if you can perform the math under pressure.'}
            </p>
            <div className="space-y-4">
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {isZh ? '问题 1：常规 ICU 患者 — 血压 118/76 mmHg' : 'Question 1: Routine ICU Patient — BP 118/76 mmHg'}
                </summary>
                <p className="mt-3">
                  {isZh
                    ? 'MAP = (118 + 2 × 76) ÷ 3 = (118 + 152) ÷ 3 = 270 ÷ 3 = '
                    : 'MAP = (118 + 2 × 76) ÷ 3 = (118 + 152) ÷ 3 = 270 ÷ 3 = '}{' '}
                  <strong>{isZh ? '90 mmHg' : '90 mmHg'}</strong>
                  {isZh ? '。灌注充足。' : '. Adequate perfusion.'}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {isZh ? '问题 2：脓毒性休克 — 血压 88/52 mmHg' : 'Question 2: Septic Shock — BP 88/52 mmHg'}
                </summary>
                <p className="mt-3">
                  {isZh
                    ? 'MAP = (88 + 2 × 52) ÷ 3 = (88 + 104) ÷ 3 = 192 ÷ 3 = '
                    : 'MAP = (88 + 2 × 52) ÷ 3 = (88 + 104) ÷ 3 = 192 ÷ 3 = '}{' '}
                  <strong>{isZh ? '64 mmHg' : '64 mmHg'}</strong>
                  {isZh ? '。低于脓毒症目标，应升级治疗。' : '. Below sepsis target; escalate care.'}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {isZh ? '问题 3：高血压急症 — 血压 185/115 mmHg' : 'Question 3: Hypertensive Emergency — BP 185/115 mmHg'}
                </summary>
                <p className="mt-3">
                  {isZh
                    ? 'MAP = (185 + 2 × 115) ÷ 3 = (185 + 230) ÷ 3 = 415 ÷ 3 = '
                    : 'MAP = (185 + 2 × 115) ÷ 3 = (185 + 230) ÷ 3 = 415 ÷ 3 = '}{' '}
                  <strong>{isZh ? '138 mmHg' : '138 mmHg'}</strong>
                  {isZh ? '。紧急程度高，需评估靶器官损害。' : '. High urgency; assess end-organ damage.'}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {isZh ? '问题 4：术后下降 — 血压 92/58 mmHg（基线 MAP 85）' : 'Question 4: Post-Operative Drop — BP 92/58 mmHg (Baseline MAP 85)'}
                </summary>
                <p className="mt-3">
                  {isZh ? 'MAP = (92 + 116) ÷ 3 = ' : 'MAP = (92 + 116) ÷ 3 = '}{' '}
                  <strong>{isZh ? '69 mmHg' : '69 mmHg'}</strong>
                  {isZh ? '。较基线下降 16 mmHg（19%），需排查出血或体液转移。' : '. Down 16 mmHg (19%). Investigate bleeding or fluid shifts.'}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {isZh ? '问题 5：心算挑战 — 血压 140/90 mmHg' : 'Question 5: Mental Math Challenge — BP 140/90 mmHg'}
                </summary>
                <p className="mt-3">
                  {isZh
                    ? '脉压 = 50。50 ÷ 3 ≈ 17，加到 90 → '
                    : 'Pulse pressure = 50. 50 ÷ 3 ≈ 17. Add to 90 → '}{' '}
                  <strong>{isZh ? 'MAP ≈ 107 mmHg' : 'MAP ≈ 107 mmHg'}</strong>
                  {isZh ? '。属于 2 级高血压范围。' : '. Stage 2 hypertension range.'}
                </p>
              </details>
            </div>
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
              <p className="font-semibold uppercase tracking-wide">
                {isZh ? '评分指南' : 'Scoring Your Knowledge'}
              </p>
              <p>
                {isZh
                  ? '5/5：资深水平，可直接用于临床；4/5：能力强，仅需小幅复习；3/5：基础扎实，需多练习；低于 3：请回顾以上章节后再测。'
                  : '5/5: Expert ready for clinical practice. 4/5: Strong with minor review needed. 3/5: Solid foundation; practice more. Below 3: Revisit sections above then retest.'}
              </p>
            </div>
            <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
              <p className="font-semibold text-gray-900">
                {isZh ? '下一步' : 'Next Steps'}
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>{isZh ? '收藏本指南以便随时查阅。' : 'Bookmark this guide for quick reference.'}</li>
                <li>
                  {isZh ? '用匿名化患者数据练习，提升速度。' : 'Practice with anonymized patient data to build speed.'}
                </li>
                <li>
                  {isZh ? '把计算方法教给同事或学员，教学能加深掌握。' : 'Teach a colleague or trainee — teaching reinforces mastery.'}
                </li>
                <li>
                  {isZh ? '在建立信心期间，可用我们的计算器核对结果。' : 'Use our calculator to verify results while you build confidence.'}
                </li>
              </ul>
            </div>
          </section>

          <section id="common-questions" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '常见问题' : 'Common Questions'}
            </h2>
            <div className="space-y-4 text-sm text-gray-700">
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {isZh ? '为什么不能直接取收缩压和舒张压的平均值？' : "Why can't I use a simple average of systolic and diastolic?"}
                </summary>
                <p className="mt-3">
                  {isZh
                    ? '心脏在舒张期停留时间更长，因此动脉平均压力更接近舒张压。简单平均忽视了这一生理时间差，会高估灌注。'
                    : 'The heart spends more time in diastole than systole, so the average arterial pressure is closer to the diastolic value. A simple average ignores this physiologic timing and overestimates perfusion.'}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {isZh ? '动脉导管与袖带测得的 MAP 计算方法是否一样？' : 'Is MAP calculation the same for arterial lines and cuffs?'}
                </summary>
                <p className="mt-3">
                  {isZh
                    ? '是的。动脉导管会自动计算，而袖带读数需要手动换算，但在病情稳定时通常可保持 5-10 mmHg 的误差范围。'
                    : 'Yes, although arterial line monitors perform the calculation automatically. Cuff-derived values require manual calculation but are typically accurate within 5-10 mmHg under stable conditions.'}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {isZh ? '多久应计算一次 MAP？' : 'How often should I calculate MAP?'}
                </summary>
                <p className="mt-3">
                  {isZh
                    ? '频率取决于病情：复苏期每 15-30 分钟，ICU 每 1-4 小时，普通病房随日常生命体征；门诊则在影响灌注决策时计算。'
                    : 'Frequency depends on acuity: every 15-30 minutes during active resuscitation, every 1-4 hours in the ICU, and with routine vitals on the floor. In clinic settings, calculate when perfusion decisions matter.'}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {isZh ? '是否所有患者都需要计算 MAP？' : 'Do all patients need MAP calculations?'}
                </summary>
                <p className="mt-3">
                  {isZh
                    ? '不需要。重点关注休克、脓毒症、神经重症、高风险术后及使用血管活性药的患者。常规高血压管理看收缩压 / 舒张压即可。'
                    : 'No. Prioritize MAP for shock, sepsis, neuro critical care, high-risk post-operative patients, and anyone on vasoactive support. For routine hypertension management, systolic/diastolic values suffice.'}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {isZh ? 'MAP 能否取代血压用于诊断高血压？' : 'Can MAP replace blood pressure for hypertension diagnosis?'}
                </summary>
                <p className="mt-3">
                  {isZh
                    ? '当前高血压指南仍以收缩压 / 舒张压阈值（≥130/80 mmHg）为准。MAP 是补充指标，尤其适用于急性护理。'
                    : 'Hypertension guidelines still rely on systolic/diastolic thresholds (≥130/80 mmHg). MAP supplements rather than replaces those measures, especially in acute care.'}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {isZh ? 'MAP 目标应该设定多少？' : 'What MAP target should I aim for?'}
                </summary>
                <div className="mt-3 space-y-2">
                  <p>{isZh ? '目标需根据病情调整：' : 'Targets vary by condition:'}</p>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>{isZh ? '普通成人：60-100 mmHg' : 'General adult: 60-100 mmHg'}</li>
                    <li>{isZh ? '脓毒症：≥65 mmHg' : 'Sepsis: ≥65 mmHg'}</li>
                    <li>{isZh ? '创伤性脑损伤：80-110 mmHg' : 'Traumatic brain injury: 80-110 mmHg'}</li>
                    <li>{isZh ? '缺血性卒中：60-180 mmHg（宽松性高血压）' : 'Ischemic stroke: 60-180 mmHg (permissive hypertension)'}</li>
                    <li>{isZh ? '心脏骤停后：≥65 mmHg' : 'Post-cardiac arrest: ≥65 mmHg'}</li>
                  </ul>
                </div>
              </details>
            </div>
          </section>

          <section id="resources" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '临床资源与工具' : 'Clinical Resources & Tools'}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
                <h3 className="text-xl font-semibold">
                  {isZh ? '计算工具' : 'Calculation Tools'}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href={localizedPath('/')} className="font-semibold text-blue-800 hover:underline">
                      {isZh ? '免费 MAP 计算器' : 'Free MAP Calculator'}
                    </Link>{' '}
                    {isZh ? '—— 即时给出结果与解读。' : '— Instant results with interpretation.'}
                  </li>
                  <li>
                    <Link href={localizedPath('/map-calculator-bp')} className="font-semibold text-blue-800 hover:underline">
                      {isZh ? '血压换算 MAP 工具' : 'BP to MAP Converter'}
                    </Link>{' '}
                    {isZh ? '—— 床旁快速换算。' : '— Fast bedside conversion.'}
                  </li>
                  <li>{isZh ? '移动应用：即将上线。' : 'Mobile app: coming soon.'}</li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '指南与流程' : 'Guidelines & Protocols'}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.sccm.org/SurvivingSepsisCampaign/Guidelines"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      {isZh ? '2021 年《生存脓毒症运动》' : 'Surviving Sepsis Campaign 2021'}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ahajournals.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      {isZh ? '2017 年 ACC/AHA 高血压指南' : 'ACC/AHA Hypertension Guidelines 2017'}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.braintrauma.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      {isZh ? '美国脑创伤基金会建议' : 'Brain Trauma Foundation Recommendations'}
                    </a>
                  </li>
                </ul>
                <div className="rounded-lg border border-dashed border-gray-300 bg-white p-4 text-gray-600">
                  <p className="font-semibold text-gray-900">
                    {isZh ? '教学素材制作中' : 'Educational Materials in Progress'}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-6 text-sm">
                    <li>{isZh ? '视频教程：《3 分钟算出 MAP》' : 'Video tutorial: "Calculate MAP in 3 Minutes"'}</li>
                    <li>
                      {isZh ? '可下载公式与正常范围对照卡' : 'Downloadable reference card with formula and normal ranges'}
                    </li>
                    <li>
                      {isZh ? '住院医 / 学员案例练习手册' : 'Case-based practice workbook for residents and students'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
              <h3 className="text-xl font-semibold text-gray-900">
                {isZh ? '总结：关键要点' : 'Summary: Key Takeaways'}
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  {isZh ? 'MAP =（收缩压 + 2 × 舒张压）÷ 3 —— 熟记并练习到形成肌记。' : 'MAP = (SBP + 2 × DBP) ÷ 3 — memorize and practice until automatic.'}
                </li>
                <li>
                  {isZh ? 'MAP 目标随病情而异，务必个体化。' : 'MAP targets vary by condition; always individualize.'}
                </li>
                <li>
                  {isZh ? '结合脉压能提示潜在病理问题。' : 'Pulse pressure context helps flag hidden pathology.'}
                </li>
                <li>
                  {isZh ? '趋势比单次读数更能指导决策。' : 'Trends drive decisions more than single readings.'}
                </li>
                <li>
                  {isZh ? '当准确性至关重要时，采用有创监测。' : 'Use invasive monitoring when accuracy is critical.'}
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={localizedPath('/map-calculator-bp')}
                  className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  {isZh ? '立即换算 MAP' : 'Convert BP to MAP Now'}
                </Link>
                <Link
                  href={localizedPath('/map-calculation-nursing')}
                  className="inline-flex items-center rounded-full border border-blue-600 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-600 hover:text-white"
                >
                  {isZh ? '护理参考' : 'Nursing Reference'}
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
