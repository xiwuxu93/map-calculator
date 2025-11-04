import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BpCalculator from '@/components/BpCalculator';
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
};

const localizedContent: Record<Locale, LocalizedMeta> = {
  en: {
    title: 'MAP Calculator BP: Calculate Mean Arterial Pressure from Blood Pressure | mapcalculator.org',
    description:
      'Quick MAP calculator from blood pressure readings. Convert systolic and diastolic BP to MAP instantly. Free tool for healthcare professionals with clinical interpretation.',
    keywords: ['map calculator bp', 'BP to MAP', 'blood pressure MAP calculator', 'calculate MAP from BP'],
    openGraphTitle: 'MAP Calculator BP - Convert Blood Pressure to MAP',
    openGraphDescription: 'Fast MAP calculation from blood pressure readings for clinical use',
    heroTitle: 'MAP Calculator from Blood Pressure Readings',
    heroDescription:
      'Convert systolic and diastolic blood pressure readings to Mean Arterial Pressure instantly. Designed for busy clinicians who need fast, accurate BP-to-MAP conversions with interpretation.',
  },
  zh: {
    title: 'MAP 计算器（血压版）：由血压快速换算平均动脉压 | mapcalculator.org',
    description:
      '输入收缩压与舒张压，立即换算平均动脉压（MAP）。免费在线工具，附带临床意义解析，专为医疗专业人士设计。',
    keywords: ['MAP 计算器', '血压换算 MAP', '平均动脉压计算', 'BP 转 MAP'],
    openGraphTitle: 'MAP 计算器（BP）——血压快速换算平均动脉压',
    openGraphDescription: '面向临床使用的快速 MAP 计算工具',
    heroTitle: '基于血压读数的 MAP 计算器',
    heroDescription:
      '输入常规血压值即可即时获取平均动脉压，并附带临床意义提示，适合在 ICU、急诊及围术期护理中迅速评估灌注状况。',
  },
};

const schemaContent: Record<
  Locale,
  {
    medicalWebPage: {
      name: string;
      description: string;
      aboutDescription: string;
      audienceLabel: string;
      audienceTypes: string[];
    };
    faq: Array<{ question: string; answer: string }>;
    breadcrumbs: { home: string; page: string };
  }
> = {
  en: {
    medicalWebPage: {
      name: 'MAP Calculator from Blood Pressure Readings',
      description:
        'Convert systolic and diastolic blood pressure readings to Mean Arterial Pressure with clinical interpretation and practical examples.',
      aboutDescription: 'Clinical calculation derived from systolic and diastolic blood pressure values.',
      audienceLabel: 'Physicians, nurses, and paramedics using MAP at the bedside.',
      audienceTypes: ['Physician', 'Nurse', 'Paramedic'],
    },
    faq: [
      {
        question: "What's the fastest way to estimate MAP from BP?",
        answer: 'Use the mental math shortcut: MAP ≈ DBP + (pulse pressure ÷ 3).',
      },
      {
        question: 'Is MAP more important than blood pressure?',
        answer:
          'Both are important. MAP reflects organ perfusion while systolic/diastolic values guide hypertension management.',
      },
      {
        question: 'Should I use MAP or systolic BP for sepsis management?',
        answer: 'Surviving Sepsis Campaign guidelines specify a MAP target ≥65 mmHg to ensure organ perfusion.',
      },
    ],
    breadcrumbs: {
      home: 'Home',
      page: 'MAP Calculator BP',
    },
  },
  zh: {
    medicalWebPage: {
      name: '基于血压读数的 MAP 计算器',
      description: '输入收缩压与舒张压即可计算平均动脉压，并获得临床解读与常见情境示例。',
      aboutDescription: '根据收缩压与舒张压推算平均动脉压的临床计算方法。',
      audienceLabel: '供医生、护士及急救人员在床旁快速使用。',
      audienceTypes: ['医生', '护士', '急救人员'],
    },
    faq: [
      {
        question: '如何最快速地由血压估算 MAP？',
        answer: '使用心算公式：MAP ≈ 舒张压 +（脉压 ÷ 3）。',
      },
      {
        question: 'MAP 比血压更重要吗？',
        answer: '二者都重要。MAP 反映器官灌注，而收缩压与舒张压更适合用来管理高血压。',
      },
      {
        question: '管理脓毒症时应关注 MAP 还是收缩压？',
        answer: '脓毒症指南建议将 MAP 维持在 ≥65 mmHg 以保障器官灌注。',
      },
    ],
    breadcrumbs: {
      home: '首页',
      page: 'MAP 计算器（血压）',
    },
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const localized = localizedContent[locale] ?? localizedContent[defaultLocale];
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
  const url = `${SITE_URL}${localePrefix}/map-calculator-bp`;
  const imageUrl = `${SITE_URL}/og-image.png`;

  return {
    title: localized.title,
    description: localized.description,
    keywords: localized.keywords,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/map-calculator-bp`,
        zh: `${SITE_URL}/zh/map-calculator-bp`,
        'x-default': `${SITE_URL}/map-calculator-bp`,
      },
    },
    openGraph: {
      title: localized.openGraphTitle,
      description: localized.openGraphDescription,
      url,
      type: 'website',
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

export default function MapCalculatorBpPage({ params }: PageProps) {
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
      '@type': 'MedicalWebPage',
      name: schema.medicalWebPage.name,
      description: schema.medicalWebPage.description,
      url: `${SITE_URL}${localePrefix}/map-calculator-bp`,
      inLanguage: locale,
      image: imageUrl,
      audience: {
        '@type': 'Audience',
        audienceType: schema.medicalWebPage.audienceLabel,
      },
      medicalAudience: schema.medicalWebPage.audienceTypes.map((audienceType) => ({
        '@type': 'MedicalAudience',
        audienceType,
      })),
      about: {
        '@type': 'MedicalEntity',
        name: schema.medicalWebPage.name,
        description: schema.medicalWebPage.aboutDescription,
      },
      specialty: 'CriticalCare',
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
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: schema.breadcrumbs.home,
          item: `${SITE_URL}${localePrefix}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: schema.breadcrumbs.page,
          item: `${SITE_URL}${localePrefix}/map-calculator-bp`,
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
          <section id="hero" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                {localized.heroTitle}
              </h1>
              <p className="text-base text-gray-600 md:text-lg">{localized.heroDescription}</p>
            </div>
            <div className="space-y-4 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900 md:p-6">
              <p className="font-semibold uppercase tracking-wide">
                {isZh ? '临床速览' : 'Clinician Snapshot'}
              </p>
              <div className="grid gap-3 md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-700">
                    {isZh ? '主要用途' : 'Primary Use'}
                  </p>
                  <p className="text-sm font-medium">
                    {isZh ? '快速将血压换算为 MAP，并提供可执行的解读' : 'Rapid BP to MAP conversion with actionable interpretation'}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-700">
                    {isZh ? '适用场景' : 'Ideal For'}
                  </p>
                  <p className="text-sm font-medium">
                    {isZh ? 'ICU 查房、脓毒症流程、围术期监测' : 'ICU rounds, sepsis bundles, perioperative monitoring'}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-700">
                    {isZh ? '得出结果所需时间' : 'Time to Result'}
                  </p>
                  <p className="text-sm font-medium">
                    {isZh ? '数秒——快速选择常见血压组合' : 'Seconds — Quick-select most common BP combinations'}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <BpCalculator />
            </div>
          </section>

          <section id="why-calculate" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '为什么要用血压计算 MAP？' : 'Why Calculate MAP from Blood Pressure?'}
            </h2>
            <p className="text-base text-gray-700">
              {isZh
                ? '血压是医疗机构记录最频繁的生命体征。诊室与床旁监护仪会自动呈现收缩压与舒张压，但这些数值只代表每个心动周期的高峰与低谷。平均动脉压（MAP）则把这些读数转化为真正推动器官灌注的平均灌注压力。'
                : 'Blood pressure is the most frequently captured vital sign in healthcare. Every exam room and bedside monitor automatically charts systolic and diastolic values. Yet these numbers only describe arterial pressure at the peak and trough of each cardiac cycle. Mean Arterial Pressure (MAP) translates those readings into the average driving pressure that actually perfuses organs.'}
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '临床现实' : 'The Clinical Reality'}
                </h3>
                <p className="text-sm text-gray-700">
                  {isZh
                    ? '大多数自动监护仪不会默认显示 MAP，但几乎所有重症路径都依赖它。在医院的各类场景中，MAP 用于：'
                    : 'Automated monitors rarely display MAP by default, but critical care pathways depend on it. Across hospital settings, MAP informs:'}
                </p>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>
                    <strong>{isZh ? '脓毒症流程：' : 'Sepsis protocols:'}</strong>{' '}
                    {isZh
                      ? '维持 MAP ≥65 mmHg 以达到《生存脓毒症运动》目标。'
                      : 'Maintain MAP ≥65 mmHg to meet Surviving Sepsis Campaign goals.'}
                  </li>
                  <li>
                    <strong>{isZh ? 'ICU 监护：' : 'ICU monitoring:'}</strong>{' '}
                    {isZh
                      ? '在休克、术后及依赖血管加压药的患者中监测器官灌注趋势。'
                      : 'Trend organ perfusion in shock, post-op, and vasopressor-dependent patients.'}
                  </li>
                  <li>
                    <strong>{isZh ? '血管加压药滴定：' : 'Vasopressor titration:'}</strong>{' '}
                    {isZh
                      ? '根据 MAP 目标调节去甲肾上腺素、加压素或去氧肾上腺素。'
                      : 'Adjust norepinephrine, vasopressin, or phenylephrine based on MAP targets.'}
                  </li>
                  <li>
                    <strong>{isZh ? '术后恢复：' : 'Post-operative recovery:'}</strong>{' '}
                    {isZh
                      ? '在症状出现前捕捉灌注下降的早期信号。'
                      : 'Detect subtle perfusion drops before symptoms appear.'}
                  </li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '何时需要这个工具' : 'When You Need This Tool'}
                </h3>
                <p className="text-sm text-gray-700">
                  {isZh
                    ? 'MAP 计算把记录的生命体征与流程指标连接起来。需要在第一时间搞清楚：'
                    : 'MAP calculation bridges the gap between recorded vitals and protocol-driven targets. Use it when you need to know immediately:'}
                </p>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>
                    {isZh ? '当前灌注压是否满足患者状况？' : "Is perfusion pressure adequate for this patient's condition?"}
                  </li>
                  <li>
                    {isZh ? '是否需要补液、使用升压药或降压药？' : 'Should I intervene with fluids, pressors, or antihypertensives?'}
                  </li>
                  <li>{isZh ? '过去数小时的 MAP 趋势如何？' : 'What is the MAP trend over the last few hours?'}</li>
                  <li>{isZh ? '是否需要调整输注速度或升级治疗层级？' : 'Do I need to adjust drip rates or escalate care?'}</li>
                </ul>
                <p className="text-sm text-gray-700">
                  {isZh
                    ? '由于无创设备无法直接测量 MAP，掌握该计算是所有照护危重患者的临床人员必须具备的能力。'
                    : 'Because non-invasive devices cannot directly measure MAP, this calculation is a core competency for every clinician managing acutely ill patients.'}
                </p>
              </div>
            </div>
          </section>

          <section id="bp-to-map" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '血压如何换算成 MAP' : 'How Blood Pressure Converts to MAP'}
            </h2>
            <div className="space-y-4 text-base text-gray-700">
              <div className="space-y-2 rounded-xl border border-blue-100 bg-blue-50 p-5 text-blue-900">
                <p className="text-sm font-semibold uppercase tracking-wide">
                  {isZh ? '公式解析' : 'The Formula Explained'}
                </p>
                <p>
                  <strong>{isZh ? 'MAP =（收缩压 + 2 × 舒张压）÷ 3' : 'MAP = (Systolic BP + 2 × Diastolic BP) ÷ 3'}</strong>
                </p>
                <p>
                  {isZh
                    ? '心脏在每个心动周期中约有三分之一的时间处于收缩期，三分之二处于舒张期。由于舒张期持续时间更长，舒张压在平均动脉压计算中占比更大，公式正是对这一生理比例的体现。'
                    : 'The heart spends roughly one-third of each cardiac cycle in systole (contraction) and two-thirds in diastole (relaxation). Because diastole lasts longer, diastolic pressure weighs more heavily in the mean arterial calculation. The formula reflects this physiological ratio.'}
                </p>
              </div>
              <p>
                {isZh
                  ? '简单平均会忽略心动周期固有的时间权重。例如血压 120/80 mmHg 时：'
                  : 'Using a simple average ignores the time weighting inherent to the cardiac cycle. For example, blood pressure 120/80 mmHg produces:'}
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  {isZh ? '简单平均： (120 + 80) ÷ 2 = 100 mmHg' : 'Simple average: (120 + 80) ÷ 2 = 100 mmHg'}
                </li>
                <li>
                  {isZh ? '加权 MAP 公式： (120 + 160) ÷ 3 = 93 mmHg' : 'Weighted MAP formula: (120 + 160) ÷ 3 = 93 mmHg'}
                </li>
              </ul>
              <p>
                {isZh
                  ? '相差 7 mmHg 在临床上具有重要意义，尤其在低血压患者中，差异可能决定灌注是否足够或需要升级治疗。'
                  : 'That seven point difference is clinically meaningful. With hypotensive values, the gap can determine whether perfusion is acceptable or if escalation is required.'}
              </p>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '有创监测下的替代公式' : 'Alternative Formula for Invasive Monitoring'}
                </h3>
                <p>
                  {isZh
                    ? '动脉置管会直接显示 MAP，但临床人员常用心算进行验证：'
                    : 'Arterial lines output MAP directly, but clinicians often verify calculations mentally:'}
                </p>
                <p>
                  <strong>
                    {isZh
                      ? 'MAP = 舒张压 +（收缩压 − 舒张压）÷ 3'
                      : 'MAP = Diastolic BP + (Systolic BP − Diastolic BP) ÷ 3'}
                  </strong>
                </p>
                <p>
                  {isZh
                    ? '该变式使用脉压进行换算，做床旁心算时更快捷。两个公式在代数上等价，结果完全一致。'
                    : 'This variant uses pulse pressure and is often faster when doing bedside math. Both equations yield identical results because they are algebraically equivalent.'}
                </p>
              </div>
              <div className="space-y-3 rounded-xl border border-amber-100 bg-amber-50 p-5 text-amber-900">
                <h3 className="text-xl font-semibold">
                  {isZh ? '准确性注意事项' : 'Accuracy Considerations'}
                </h3>
                <p>
                  {isZh
                    ? '无创血压推算的 MAP 对多数成人患者可靠，但在收缩期与舒张期时程被改变的情境下需谨慎：'
                    : 'Non-invasive BP derived MAPs are reliable for most adult patients, but be cautious in scenarios where the systolic–diastolic timing is altered:'}
                </p>
                <ul className="list-disc space-y-2 pl-6 text-sm">
                  <li>
                    {isZh ? '重度主动脉瓣返流导致脉压过宽' : 'Severe aortic regurgitation producing wide pulse pressures'}
                  </li>
                  <li>
                    {isZh ? '极度心动过速缩短舒张期' : 'Extreme tachycardia shortening diastolic time'}
                  </li>
                  <li>
                    {isZh ? '伴快速心室反应的房颤' : 'Atrial fibrillation with rapid ventricular response'}
                  </li>
                  <li>
                    {isZh ? '晚期外周血管疾病或血管不可压' : 'Advanced peripheral vascular disease or non-compressible arteries'}
                  </li>
                </ul>
                <p>
                  {isZh
                    ? '若出现上述情况，应尽可能优先选择动脉有创监测。'
                    : 'In these cases, prioritize direct arterial monitoring when available.'}
                </p>
              </div>
            </div>
          </section>

          <section id="reference-tables" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '血压换算 MAP 参考指南' : 'BP to MAP Reference Guide'}
            </h2>
            <p className="text-base text-gray-700">
              {isZh
                ? '使用下列速查表即可在床旁快速解读结果。数据与常见医院流程保持一致，并提示何时需要升级处理。'
                : 'Use these ready-to-reference tables for rapid interpretation at the bedside. Values align with common hospital protocols and highlight when to escalate.'}
            </p>
            <div className="not-prose overflow-x-auto">
              <table className="w-full min-w-[640px] divide-y divide-gray-200 text-left text-sm text-gray-700">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                      {isZh ? '血压读数' : 'Blood Pressure'}
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                      {isZh ? 'MAP 计算式' : 'MAP Calculation'}
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                      {isZh ? 'MAP 结果' : 'MAP Result'}
                    </th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                      {isZh ? '临床解读' : 'Clinical Interpretation'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">120/80 mmHg</td>
                    <td className="px-4 py-3">(120 + 160) ÷ 3</td>
                    <td className="px-4 py-3">93 mmHg</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">
                      {isZh ? '✅ 正常 — 灌注理想' : '✅ Normal — Optimal perfusion'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">110/70 mmHg</td>
                    <td className="px-4 py-3">(110 + 140) ÷ 3</td>
                    <td className="px-4 py-3">83 mmHg</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">
                      {isZh ? '✅ 充足灌注' : '✅ Adequate perfusion'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">100/60 mmHg</td>
                    <td className="px-4 py-3">(100 + 120) ÷ 3</td>
                    <td className="px-4 py-3">73 mmHg</td>
                    <td className="px-4 py-3 text-amber-700 font-semibold">
                      {isZh ? '⚠️ 偏低正常 — 密切监测' : '⚠️ Low-normal — Monitor closely'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">90/60 mmHg</td>
                    <td className="px-4 py-3">(90 + 120) ÷ 3</td>
                    <td className="px-4 py-3">70 mmHg</td>
                    <td className="px-4 py-3 text-amber-700 font-semibold">
                      {isZh ? '⚠️ 临界值 — 评估灌注' : '⚠️ Borderline — Evaluate perfusion'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">90/50 mmHg</td>
                    <td className="px-4 py-3">(90 + 100) ÷ 3</td>
                    <td className="px-4 py-3">63 mmHg</td>
                    <td className="px-4 py-3 text-red-700 font-semibold">
                      {isZh ? '🔴 低于脓毒症目标 — 立即处理' : '🔴 Below sepsis target — Act now'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">80/50 mmHg</td>
                    <td className="px-4 py-3">(80 + 100) ÷ 3</td>
                    <td className="px-4 py-3">60 mmHg</td>
                    <td className="px-4 py-3 text-red-700 font-semibold">
                      {isZh ? '🔴 危急阈值 — 立即升级治疗' : '🔴 Critical threshold — Immediate escalation'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">130/80 mmHg</td>
                    <td className="px-4 py-3">(130 + 160) ÷ 3</td>
                    <td className="px-4 py-3">97 mmHg</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">
                      {isZh ? '✅ 正常偏高 — 可接受' : '✅ Normal-high — Acceptable'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">140/90 mmHg</td>
                    <td className="px-4 py-3">(140 + 180) ÷ 3</td>
                    <td className="px-4 py-3">107 mmHg</td>
                    <td className="px-4 py-3 text-amber-700 font-semibold">
                      {isZh ? '🟠 升高 — 2 级高血压' : '🟠 Elevated — Stage 2 hypertension'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">150/95 mmHg</td>
                    <td className="px-4 py-3">(150 + 190) ÷ 3</td>
                    <td className="px-4 py-3">113 mmHg</td>
                    <td className="px-4 py-3 text-amber-700 font-semibold">
                      {isZh ? '🟠 偏高 — 心血管风险' : '🟠 High — Cardiovascular risk'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">160/100 mmHg</td>
                    <td className="px-4 py-3">(160 + 200) ÷ 3</td>
                    <td className="px-4 py-3">120 mmHg</td>
                    <td className="px-4 py-3 text-red-700 font-semibold">
                      {isZh ? '🔴 极高 — 需紧急评估' : '🔴 Very high — Urgent evaluation'}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">180/110 mmHg</td>
                    <td className="px-4 py-3">(180 + 220) ÷ 3</td>
                    <td className="px-4 py-3">133 mmHg</td>
                    <td className="px-4 py-3 text-red-700 font-semibold">
                      {isZh ? '🔴 高血压急症风险' : '🔴 Hypertensive emergency risk'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {isZh ? '按临床情境解读 MAP' : 'MAP Interpretation by Clinical Context'}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <h4 className="text-base font-semibold text-gray-900">
                    {isZh ? '重症监护（ICU / CCU）' : 'Critical Care (ICU/CCU)'}
                  </h4>
                  <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                    <li>
                      <strong>{isZh ? 'MAP &lt;65 mmHg：' : 'MAP &lt;65 mmHg:'}</strong>{' '}
                      {isZh ? '通常需要干预（补液 / 升压药）' : 'Typically requires intervention (fluids/pressors)'}
                    </li>
                    <li>
                      <strong>{isZh ? 'MAP 65-80 mmHg：' : 'MAP 65-80 mmHg:'}</strong>{' '}
                      {isZh ? '多数 ICU 患者的目标范围' : 'Target range for most ICU patients'}
                    </li>
                    <li>
                      <strong>{isZh ? 'MAP &gt;100 mmHg：' : 'MAP &gt;100 mmHg:'}</strong>{' '}
                      {isZh ? '评估是否存在高血压或升压药剂量过高' : 'Evaluate for hypertension or excessive vasopressor dosing'}
                    </li>
                  </ul>
                </div>
                <div className="space-y-2 rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <h4 className="text-base font-semibold text-gray-900">
                    {isZh ? '急诊科' : 'Emergency Department'}
                  </h4>
                  <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                    <li>
                      <strong>{isZh ? 'MAP &lt;60 mmHg：' : 'MAP &lt;60 mmHg:'}</strong>{' '}
                      {isZh ? '启动休克评估流程' : 'Initiate shock workup'}
                    </li>
                    <li>
                      <strong>{isZh ? 'MAP 60-70 mmHg：' : 'MAP 60-70 mmHg:'}</strong>{' '}
                      {isZh ? '监测趋势与灌注指标' : 'Monitor trends and perfusion markers'}
                    </li>
                    <li>
                      <strong>{isZh ? 'MAP &gt;130 mmHg：' : 'MAP &gt;130 mmHg:'}</strong>{' '}
                      {isZh ? '考虑高血压急症评估' : 'Consider hypertensive emergency evaluation'}
                    </li>
                  </ul>
                </div>
                <div className="space-y-2 rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <h4 className="text-base font-semibold text-gray-900">
                    {isZh ? '手术间' : 'Operating Room'}
                  </h4>
                  <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                    <li>
                      <strong>{isZh ? 'MAP &lt;65 mmHg：' : 'MAP &lt;65 mmHg:'}</strong>{' '}
                      {isZh ? '评估麻醉深度或血容量不足' : 'Assess depth of anesthesia or hypovolemia'}
                    </li>
                    <li>
                      <strong>{isZh ? 'MAP 65-100 mmHg：' : 'MAP 65-100 mmHg:'}</strong>{' '}
                      {isZh ? '常见术中目标范围' : 'Typical intraoperative target range'}
                    </li>
                    <li>
                      <strong>{isZh ? 'MAP &gt;100 mmHg：' : 'MAP &gt;100 mmHg:'}</strong>{' '}
                      {isZh ? '评估麻醉深度不足或疼痛控制不够' : 'Evaluate for inadequate anesthesia or pain'}
                    </li>
                  </ul>
                </div>
                <div className="space-y-2 rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <h4 className="text-base font-semibold text-gray-900">
                    {isZh ? '术后护理' : 'Post-Operative Care'}
                  </h4>
                  <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                    <li>
                      <strong>{isZh ? 'MAP 呈下降趋势：' : 'MAP trending down:'}</strong>{' '}
                      {isZh ? '警惕出血或第三间隙潴留' : 'Possible bleeding or third-spacing'}
                    </li>
                    <li>
                      <strong>{isZh ? 'MAP 持续升高：' : 'MAP trending up:'}</strong>{' '}
                      {isZh ? '疼痛控制可能不足' : 'Pain control may be inadequate'}
                    </li>
                    <li>
                      <strong>{isZh ? 'MAP 稳定在 70-90 mmHg：' : 'MAP stable 70-90 mmHg:'}</strong>{' '}
                      {isZh ? '常见恢复目标' : 'Typical recovery goal'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {isZh ? '脉压与 MAP 的联动考量' : 'Pulse Pressure Considerations'}
              </h3>
              <p className="text-sm text-gray-700">
                {isZh
                  ? 'MAP 趋势需要结合脉压（收缩压 − 舒张压）一同分析。即使 MAP 相同，脉压宽度不同也可能代表截然不同的血流动力学状况。'
                  : 'Map trends must be interpreted alongside pulse pressure (SBP − DBP). Identical MAP values can signal very different hemodynamics depending on pulse pressure width.'}
              </p>
              <div className="not-prose overflow-x-auto">
                <table className="w-full min-w-[520px] divide-y divide-gray-200 text-left text-sm text-gray-700">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                        {isZh ? '血压读数' : 'BP Reading'}
                      </th>
                      <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                        {isZh ? 'MAP' : 'MAP'}
                      </th>
                      <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                        {isZh ? '脉压' : 'Pulse Pressure'}
                      </th>
                      <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                        {isZh ? '临床提示' : 'Clinical Note'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">120/80</td>
                      <td className="px-4 py-3">93 mmHg</td>
                      <td className="px-4 py-3">40 mmHg</td>
                      <td className="px-4 py-3 text-green-700 font-medium">
                        {isZh ? '正常 — 心功能良好' : 'Normal — Healthy cardiac function'}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">130/90</td>
                      <td className="px-4 py-3">103 mmHg</td>
                      <td className="px-4 py-3">40 mmHg</td>
                      <td className="px-4 py-3 text-amber-700 font-medium">
                        {isZh ? 'MAP 升高，脉压正常' : 'Elevated MAP, normal pulse pressure'}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">150/70</td>
                      <td className="px-4 py-3">97 mmHg</td>
                      <td className="px-4 py-3">80 mmHg</td>
                      <td className="px-4 py-3 text-red-700 font-medium">
                        {isZh ? '脉压增宽 — 考虑主动脉瓣返流' : 'Wide — Consider aortic regurgitation'}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">100/90</td>
                      <td className="px-4 py-3">93 mmHg</td>
                      <td className="px-4 py-3">10 mmHg</td>
                      <td className="px-4 py-3 text-red-700 font-medium">
                        {isZh ? '脉压过窄 — 警惕心包填塞或重度心衰' : 'Narrow — Evaluate for tamponade or severe heart failure'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-700">
                <strong>{isZh ? '脉压增宽（&gt;60 mmHg）：' : 'Wide pulse pressure (&gt;60 mmHg):'}</strong>{' '}
                {isZh ? '考虑主动脉瓣返流、甲状腺功能亢进或动脉硬化。' : 'Consider aortic regurgitation, hyperthyroidism, or arterial stiffness.'}
              </p>
              <p className="text-sm text-gray-700">
                <strong>{isZh ? '脉压变窄（&lt;25 mmHg）：' : 'Narrow pulse pressure (&lt;25 mmHg):'}</strong>{' '}
                {isZh
                  ? '评估是否出现心包填塞、重度心衰或低血容量。'
                  : 'Evaluate for cardiac tamponade, severe heart failure, or hypovolemia.'}
              </p>
            </div>
          </section>

          <section id="bp-measurement" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '准确测量血压，确保 MAP 精准' : 'Measuring Blood Pressure Correctly for Accurate MAP'}
            </h2>
            <p className="text-base text-gray-700">
              {isZh
                ? 'MAP 的准确性取决于血压测量质量。使用这份检查清单，避免可以预防的测量误差。'
                : 'MAP accuracy depends on blood pressure measurement quality. Use this checklist to prevent avoidable errors.'}
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '患者准备（5 分钟）' : 'Patient Preparation (5 minutes)'}
                </h3>
                <ol className="list-decimal space-y-2 pl-6 text-sm text-gray-700">
                  <li>
                    {isZh ? '让患者坐姿端正，背部有支撑，双脚不交叉。' : 'Seat the patient with back supported and feet uncrossed.'}
                  </li>
                  <li>
                    {isZh ? '将上肢置于心脏同一水平，可借助桌面或枕垫。' : 'Support the arm at heart level on a table or pillow.'}
                  </li>
                  <li>{isZh ? '如膀胱胀满，先让患者排空。' : 'Ask the patient to empty their bladder if full.'}</li>
                  <li>
                    {isZh ? '测量前 30 分钟内避免咖啡因、运动或吸烟。' : 'Ensure no caffeine, exercise, or nicotine within 30 minutes.'}
                  </li>
                  <li>
                    {isZh ? '测量前静坐休息 5 分钟。' : 'Have the patient rest quietly for five minutes before measurement.'}
                  </li>
                  <li>{isZh ? '测量过程中保持安静，不交谈、不玩手机。' : 'Discourage talking or phone use during the reading.'}</li>
                </ol>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '袖带选择与放置' : 'Cuff Selection and Placement'}
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>
                    {isZh ? '选择袖带囊宽约为臂围 40% 的型号。' : 'Choose a cuff with bladder width 40% of arm circumference.'}
                  </li>
                  <li>
                    {isZh ? '袖带下缘距肘窝 2-3 厘米。' : 'Position cuff 2-3 cm above the antecubital fossa.'}
                  </li>
                  <li>{isZh ? '使气管与肱动脉走向一致。' : 'Align tubing with the brachial artery.'}</li>
                  <li>
                    {isZh ? '松紧适度，可容纳两指但不感疼痛。' : 'Ensure a snug but not painful fit — two fingers under the cuff.'}
                  </li>
                </ul>
                <h4 className="text-base font-semibold text-gray-900">
                  {isZh ? '测量步骤' : 'Measurement Process'}
                </h4>
                <ol className="list-decimal space-y-2 pl-6 text-sm text-gray-700">
                  <li>
                    {isZh ? '加压同时触诊桡动脉估算收缩压。' : 'Palpate radial pulse while inflating to estimate systolic pressure.'}
                  </li>
                  <li>
                    {isZh ? '在脉搏消失点基础上再加压 20-30 mmHg。' : 'Inflate 20-30 mmHg above pulse disappearance.'}
                  </li>
                  <li>{isZh ? '以每秒 2-3 mmHg 的速度缓慢放气。' : 'Deflate at 2-3 mmHg per second.'}</li>
                  <li>
                    {isZh ? '听到第一相柯氏音时记录收缩压。' : 'Record the first Korotkoff sound (systolic).'}
                  </li>
                  <li>{isZh ? '声音完全消失时记录舒张压。' : 'Record the disappearance of sounds (diastolic).'}</li>
                  <li>{isZh ? '间隔 1-2 分钟重复测量，取平均值。' : 'Repeat after 1-2 minutes and average the results.'}</li>
                </ol>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {isZh ? '常见错误及其对 MAP 的影响' : 'Common Errors and MAP Impact'}
              </h3>
              <div className="not-prose overflow-x-auto">
                <table className="w-full min-w-[520px] divide-y divide-gray-200 text-left text-sm text-gray-700">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                        {isZh ? '常见错误' : 'Error'}
                      </th>
                      <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                        {isZh ? '对血压的影响' : 'Effect on BP'}
                      </th>
                      <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                        {isZh ? '对 MAP 的影响' : 'Effect on MAP'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">
                        {isZh ? '袖带过小' : 'Cuff too small'}
                      </td>
                      <td className="px-4 py-3">{isZh ? '读数偏高' : 'Falsely elevated'}</td>
                      <td className="px-4 py-3">{isZh ? 'MAP 偏高' : 'MAP falsely elevated'}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">
                        {isZh ? '手臂低于心脏水平' : 'Arm below heart level'}
                      </td>
                      <td className="px-4 py-3">{isZh ? '读数偏高' : 'Falsely elevated'}</td>
                      <td className="px-4 py-3">{isZh ? 'MAP 偏高' : 'MAP falsely elevated'}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">
                        {isZh ? '手臂高于心脏水平' : 'Arm above heart level'}
                      </td>
                      <td className="px-4 py-3">{isZh ? '读数偏低' : 'Falsely low'}</td>
                      <td className="px-4 py-3">{isZh ? 'MAP 偏低' : 'MAP falsely low'}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">
                        {isZh ? '背部无支撑' : 'Back unsupported'}
                      </td>
                      <td className="px-4 py-3">{isZh ? '舒张压偏高' : 'Elevated DBP'}</td>
                      <td className="px-4 py-3">{isZh ? 'MAP 升高 2-5 mmHg' : 'MAP increases 2-5 mmHg'}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">
                        {isZh ? '测量时说话' : 'Talking during measurement'}
                      </td>
                      <td className="px-4 py-3">{isZh ? '读数偏高' : 'Falsely elevated'}</td>
                      <td className="px-4 py-3">{isZh ? 'MAP 升高 5-10 mmHg' : 'MAP elevated 5-10 mmHg'}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">
                        {isZh ? '膀胱充盈' : 'Full bladder'}
                      </td>
                      <td className="px-4 py-3">{isZh ? '+10-15 mmHg' : '+10-15 mmHg'}</td>
                      <td className="px-4 py-3">{isZh ? 'MAP 升高 5-7 mmHg' : 'MAP increases 5-7 mmHg'}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-900">
                        {isZh ? '刚摄入咖啡因 / 烟草' : 'Recent caffeine/tobacco'}
                      </td>
                      <td className="px-4 py-3">{isZh ? '读数偏高' : 'Falsely elevated'}</td>
                      <td className="px-4 py-3">{isZh ? 'MAP 升高 5-8 mmHg' : 'MAP elevated 5-8 mmHg'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="space-y-3 rounded-xl border border-amber-100 bg-amber-50 p-5 text-sm text-amber-900">
              <h3 className="text-xl font-semibold">
                {isZh ? '何时需警惕血压换算的 MAP 不准' : 'When BP-Derived MAP May Be Inaccurate'}
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>{isZh ? 'MAP &lt;50 mmHg 或重度依赖升压药的休克' : 'MAP &lt;50 mmHg or vasopressor-dependent shock'}</li>
                <li>
                  {isZh ? '重度肥胖且无法获得合适袖带' : 'Morbid obesity when appropriately sized cuff is unavailable'}
                </li>
                <li>{isZh ? '严重心律失常（如房颤合并快速心室率）' : 'Severe arrhythmias (atrial fibrillation with RVR)'}</li>
                <li>
                  {isZh ? '需逐搏监测的高风险术中病例' : 'High-risk intraoperative cases requiring beat-to-beat monitoring'}
                </li>
                <li>
                  {isZh ? '重度外周血管疾病或血管不可压' : 'Severe peripheral vascular disease or non-compressible arteries'}
                </li>
              </ul>
              <p>
                {isZh
                  ? '在这些情况下，如需确保精确，请升级为动脉有创监测。'
                  : 'Escalate to arterial line monitoring when accuracy is mission critical.'}
              </p>
            </div>
          </section>

          <section id="decision-making" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '将 MAP 换算结果用于临床决策' : 'Clinical Decision Making with BP-Derived MAP'}
            </h2>
            <p className="text-base text-gray-700">
              {isZh
                ? '只有结合临床背景，MAP 数值才具有实际意义。以下场景可帮助你把数字转化为行动。'
                : 'MAP values are only meaningful when paired with clinical context. Use these scenarios to translate numbers into actions.'}
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '脓毒症管理' : 'Sepsis Management'}
                </h3>
                <p className="text-sm text-gray-700">
                  <strong>{isZh ? '情境：' : 'Scenario:'}</strong>{' '}
                  {isZh ? '68 岁肺炎患者，血压 85/55 mmHg → MAP 65 mmHg。' : '68-year-old with pneumonia. BP 85/55 mmHg → MAP 65 mmHg.'}
                </p>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>
                    {isZh ? '达到《生存脓毒症运动》最低目标。' : 'Meets minimum Surviving Sepsis Campaign target.'}
                  </li>
                  <li>{isZh ? '回顾乳酸、尿量、意识状态。' : 'Review lactate, urine output, mental status.'}</li>
                  <li>
                    {isZh ? '若灌注指标受损，将目标 MAP 提至 70-75 mmHg。' : 'If perfusion markers are impaired, target MAP 70-75 mmHg.'}
                  </li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '升压药滴定' : 'Vasopressor Titration'}
                </h3>
                <p className="text-sm text-gray-700">
                  <strong>{isZh ? '情境：' : 'Scenario:'}</strong>{' '}
                  {isZh ? 'ICU 患者使用去甲肾上腺素，血压 92/58 mmHg → MAP 69 mmHg。' : 'ICU patient on norepinephrine. BP 92/58 mmHg → MAP 69 mmHg.'}
                </p>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>{isZh ? 'MAP 高于最低目标 65 mmHg。' : 'MAP above goal ≥65 mmHg.'}</li>
                  <li>{isZh ? '每 15-30 分钟记录趋势。' : 'Trend values every 15-30 minutes.'}</li>
                  <li>
                    {isZh
                      ? '若稳定或上升，可考虑缓慢减量；若出现下降趋势则维持剂量。'
                      : 'Consider slow wean if stable or rising; maintain if downward trend noted.'}
                  </li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '术后监测' : 'Post-Operative Monitoring'}
                </h3>
                <p className="text-sm text-gray-700">
                  <strong>{isZh ? '情境：' : 'Scenario:'}</strong>{' '}
                  {isZh
                    ? '冠脉搭桥术后患者，基线 MAP 85 mmHg；当前血压 95/60 mmHg → MAP 72 mmHg。'
                    : 'Post-CABG patient. Baseline MAP 85 mmHg. Current BP 95/60 mmHg → MAP 72 mmHg.'}
                </p>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>{isZh ? 'MAP 较基线下降约 15%。' : 'MAP dropped 15% from baseline.'}</li>
                  <li>{isZh ? '排查出血、低血容量或镇痛不足。' : 'Investigate bleeding, hypovolemia, or pain control issues.'}</li>
                  <li>{isZh ? '在升级处理前评估胸管引流与实验室指标。' : 'Assess chest tube output and labs before escalation.'}</li>
                </ul>
              </div>
            </div>
            <div className="space-y-3 rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
              <h3 className="text-xl font-semibold">
                {isZh ? '趋势比单次读数更重要' : 'Trending Over Time Matters'}
              </h3>
              <p>
                {isZh
                  ? '记录 MAP 趋势而非单一读数。数小时内的改善或恶化比孤立数据更能反映灌注状况。'
                  : 'Document MAP trends rather than isolated readings. Improvement or deterioration over hours provides the most meaningful insight into perfusion status.'}
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 rounded-lg border border-blue-200 bg-white p-4 text-blue-900">
                  <p className="text-xs uppercase tracking-wide font-semibold">
                    {isZh ? '趋势改善' : 'Improving Trend'}
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>{isZh ? '第 0 小时：80/50 → MAP 60 mmHg' : 'Hour 0: 80/50 → MAP 60 mmHg'}</li>
                    <li>{isZh ? '第 2 小时：90/55 → MAP 67 mmHg' : 'Hour 2: 90/55 → MAP 67 mmHg'}</li>
                    <li>{isZh ? '第 4 小时：100/60 → MAP 73 mmHg' : 'Hour 4: 100/60 → MAP 73 mmHg'}</li>
                  </ul>
                  <p className="text-sm font-medium">
                    {isZh ? '对治疗反应良好。' : 'Response to therapy is positive.'}
                  </p>
                </div>
                <div className="space-y-2 rounded-lg border border-blue-200 bg-white p-4 text-blue-900">
                  <p className="text-xs uppercase tracking-wide font-semibold">
                    {isZh ? '趋势恶化' : 'Deteriorating Trend'}
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>{isZh ? '第 0 小时：110/70 → MAP 83 mmHg' : 'Hour 0: 110/70 → MAP 83 mmHg'}</li>
                    <li>{isZh ? '第 2 小时：100/65 → MAP 77 mmHg' : 'Hour 2: 100/65 → MAP 77 mmHg'}</li>
                    <li>{isZh ? '第 4 小时：90/55 → MAP 67 mmHg' : 'Hour 4: 90/55 → MAP 67 mmHg'}</li>
                  </ul>
                  <p className="text-sm font-medium">
                    {isZh ? '立即查找潜在原因。' : 'Investigate underlying cause immediately.'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '常见问题：血压换算 MAP' : 'Frequently Asked Questions: BP to MAP Conversion'}
            </h2>
            <div className="space-y-4">
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5 text-base text-gray-700">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {isZh ? '最快的 MAP 估算方法是什么？' : "What's the fastest way to estimate MAP from BP?"}
                </summary>
                <p className="mt-3 text-sm text-gray-700">
                  {isZh
                    ? '使用心算技巧：MAP ≈ 舒张压 +（脉压 ÷ 3）。以 120/80 为例，脉压为 40，除以 3（≈13）后加到舒张压（80 + 13 = 93 mmHg）。'
                    : 'Use the mental math shortcut: MAP ≈ DBP + (pulse pressure ÷ 3). For 120/80, pulse pressure is 40. Divide by 3 (≈13) and add to the diastolic value (80 + 13 = 93 mmHg).'}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5 text-base text-gray-700">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {isZh ? 'MAP 比血压更重要吗？' : 'Is MAP more important than blood pressure?'}
                </summary>
                <p className="mt-3 text-sm text-gray-700">
                  {isZh
                    ? '两者回答的临床问题不同。MAP 反映器官灌注压，而收缩压 / 舒张压用于高血压诊断与心脏负荷评估。在重症场景中，MAP 往往是优先指标。'
                    : 'They answer different clinical questions. MAP reflects organ perfusion pressure, whereas systolic/diastolic values guide hypertension diagnosis and cardiac workload assessment. In critical care, MAP is often the priority metric.'}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5 text-base text-gray-700">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {isZh ? '自动血压计的读数能直接用于 MAP 计算吗？' : 'Can I use automated BP monitors for MAP calculation?'}
                </summary>
                <p className="mt-3 text-sm text-gray-700">
                  {isZh
                    ? '可以。大多数示波式血压计精度可靠，有些设备会直接显示 MAP。若设备没有显示，可将收缩压与舒张压输入此计算器获取 MAP 与解读。'
                    : 'Yes. Most oscillometric monitors are accurate and some display MAP automatically. If yours does not, enter the systolic and diastolic values into this calculator to obtain MAP and interpretation.'}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5 text-base text-gray-700">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {isZh ? '脓毒症管理时该看 MAP 还是收缩压？' : 'Should I use MAP or systolic BP for sepsis management?'}
                </summary>
                <p className="mt-3 text-sm text-gray-700">
                  {isZh
                    ? '以 MAP 为准。《生存脓毒症运动》指南建议维持 MAP ≥65 mmHg，因为它比单看收缩压更能反映器官灌注。'
                    : 'Follow MAP. Surviving Sepsis Campaign guidelines target MAP ≥65 mmHg because it correlates better with organ perfusion than systolic pressure alone.'}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5 text-base text-gray-700">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {isZh ? '如果换算出的 MAP 与临床表现不符怎么办？' : "What if my patient's MAP calculation seems inaccurate?"}
                </summary>
                <p className="mt-3 text-sm text-gray-700">
                  {isZh
                    ? '先确认血压测量是否准确，再核对输入数值。如结果与病情不符，可重新手动测量；若仍存在差异，考虑置入动脉导管。'
                    : "Confirm accurate BP measurement, verify the numbers were entered correctly, and repeat manually if the result does not match the patient's presentation. Consider arterial line placement if discrepancies persist."}
                </p>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 p-5 text-base text-gray-700">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                  {isZh ? '不同人群的 MAP 目标是否不同？' : 'Do MAP targets vary by patient population?'}
                </summary>
                <p className="mt-3 text-sm text-gray-700">
                  {isZh
                    ? '是的。长期高血压的老年人通常需要 MAP 70-85 mmHg；年轻成年患者多能耐受 60-65 mmHg；创伤性脑损伤常要求 80-110 mmHg；卒中流程可能采用宽容性高血压。'
                    : 'Yes. Elderly patients with chronic hypertension may need MAP 70-85 mmHg, young adults may tolerate 60-65 mmHg, traumatic brain injury often requires 80-110 mmHg, and stroke protocols may set permissive hypertension goals.'}
                </p>
              </details>
            </div>
          </section>

          <section id="resources" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '相关工具与资源' : 'Related Tools & Resources'}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-blue-100 bg-blue-50 p-5 text-blue-900">
                <h3 className="text-xl font-semibold">
                  {isZh ? '相关计算工具' : 'Related Calculations'}
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href={localizedPath('/')} className="font-semibold text-blue-800 hover:underline">
                      {isZh ? 'MAP 主计算器' : 'Main MAP Calculator'}
                    </Link>{' '}
                    {isZh ? '—— 提供完整的 MAP 教学与核心计算功能。' : '— Comprehensive MAP education and core calculator.'}
                  </li>
                  <li>
                    <span className="font-semibold text-blue-800">
                      {isZh ? '血压与 MAP 教学' : 'Blood Pressure & MAP Education'}
                    </span>{' '}
                    {isZh ? '—— 即将上线。' : '— Coming soon.'}
                  </li>
                  <li>
                    <Link href={localizedPath('/map-calculation-nursing')} className="font-semibold text-blue-800 hover:underline">
                      {isZh ? '护理人员版 MAP 指南' : 'MAP for Nurses'}
                    </Link>{' '}
                    {isZh ? '—— 针对护士的参考内容（第 4 周上线）。' : '— Nursing-focused reference launching in Week 4.'}
                  </li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '临床指南速查' : 'Clinical Guidelines Reference'}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.sccm.org/SurvivingSepsisCampaign/Guidelines"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      {isZh ? '2021 年《生存脓毒症运动》指南' : 'Surviving Sepsis Campaign 2021 Guidelines'}
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
                </ul>
                <div className="rounded-lg border border-dashed border-gray-300 bg-white p-4 text-sm text-gray-600">
                  <p className="font-semibold text-gray-800">
                    {isZh ? '视觉素材制作中' : 'Visual Assets in Development'}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-6">
                    <li>
                      {isZh ? '信息图：血压测量检查表（可下载 PDF）' : 'Infographic: BP Measurement Checklist (downloadable PDF)'}
                    </li>
                    <li>
                      {isZh ? '对比图：MAP 与脉压的解读' : 'Comparison chart: MAP vs Pulse Pressure interpretation'}
                    </li>
                    <li>
                      {isZh ? '临床速查：不同病种的 MAP 目标值' : 'Clinician cheat sheet: Quick MAP targets by condition'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-700">
              <a
                href="#hero"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
              >
                {isZh ? '返回顶部' : 'Back to Top'}
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 font-medium text-gray-700">
                {isZh ? '打印本页（Cmd/Ctrl + P）' : 'Print This Page (Cmd/Ctrl + P)'}
              </span>
              <a
                href={`mailto:?subject=MAP Calculator BP&body=${encodeURIComponent(
                  `Check out this MAP calculator: ${SITE_URL}${localePrefix}/map-calculator-bp`,
                )}`}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
              >
                {isZh ? '邮件分享' : 'Share via Email'}
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
