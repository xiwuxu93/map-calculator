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
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
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
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
          <section id="hero" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <div className="space-y-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-rose-600">
                {isZh ? '床旁参考' : 'Bedside Reference'}
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
                  {isZh ? '速查信息' : 'Quick Reference'}
                </p>
                <p className="text-base font-semibold">
                  {isZh ? '正常 MAP：65-100 mmHg' : 'Normal MAP: 65-100 mmHg'}
                </p>
                <p>{isZh ? '脓毒症目标：≥65 mmHg · 危急警示：<60 mmHg' : 'Sepsis target: ≥65 mmHg · Critical concern: <60 mmHg'}</p>
              </div>
              <div className="space-y-1 text-rose-900 md:text-right">
                <p className="text-xs uppercase tracking-wide font-semibold text-rose-700">
                  {isZh ? '赶时间？' : 'In a hurry?'}
                </p>
                <p>
                  {isZh ? '可直接选常用血压或手动输入生命体征。' : 'Use quick-select values or enter vitals manually below.'}
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
                {isZh ? '返回 MAP 主计算器' : 'View Full MAP Calculator'}
              </Link>
              <Link
                href={localizedPath('/how-to-calculate-map-blood-pressure')}
                className="inline-flex items-center rounded-full border border-rose-600 px-4 py-2 font-semibold text-rose-700 transition hover:bg-rose-600 hover:text-white"
              >
                {isZh ? '查看分步计算教程' : 'Learn the Calculation Step-by-Step'}
              </Link>
            </div>
          </section>

          <section id="why-nurses" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '护理实践中为何关注 MAP' : 'Why MAP Matters in Nursing Practice'}
            </h2>
            <p className="text-base text-gray-700">
              {isZh
                ? '护士往往最先注意到生命体征的细微变化。每个班次你都多次测量并记录血压，将其换算为 MAP 能帮助你在病情恶化前识别灌注问题。'
                : 'Nurses are often the first clinicians to notice subtle vital sign trends. You already capture and document blood pressure multiple times per shift; translating those readings into MAP helps you identify perfusion issues before they become crises.'}
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '真实护理情境' : 'Real Nursing Scenarios'}
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>
                    <strong>{isZh ? 'ICU 夜班：' : 'ICU night shift:'}</strong>{' '}
                    {isZh ? 'MAP 4 小时内由 78 降至 69 —— 在患者崩溃前通知重症医生。' : 'MAP trends down from 78 to 69 over 4 hours — call the intensivist before a crash.'}
                  </li>
                  <li>
                    <strong>{isZh ? 'PACU 交接：' : 'PACU handoff:'}</strong>{' '}
                    {isZh ? '血压 105/65 → MAP 78 mmHg —— 记录稳定状况，准备转入病房。' : 'BP 105/65 → MAP 78 mmHg — document stability for floor transfer.'}
                  </li>
                  <li>
                    <strong>{isZh ? '脓毒症流程：' : 'Sepsis protocol:'}</strong>{' '}
                    {isZh ? '血压 88/54 → MAP 65 mmHg —— 达到最低目标但需严密监测。' : 'BP 88/54 → MAP 65 mmHg — meets minimum target but needs close monitoring.'}
                  </li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '护士计算 MAP 的原因' : 'Why Nurses Calculate MAP'}
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
                  <li>{isZh ? '脓毒症护理流程要求 MAP ≥65 mmHg。' : 'Sepsis bundles require MAP ≥65 mmHg.'}</li>
                  <li>{isZh ? '升压药滴定遵循 MAP 指引。' : 'Vasopressor titration relies on MAP-based protocols.'}</li>
                  <li>{isZh ? '早期识别与快速反应依赖 MAP 趋势。' : 'Early recognition and rapid response escalation depend on MAP trends.'}</li>
                  <li>{isZh ? '精确记录有助于团队沟通。' : 'Accurate documentation improves interdisciplinary communication.'}</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-rose-100 bg-rose-50 p-5 text-sm text-rose-900">
              <p className="font-semibold uppercase tracking-wide">
                {isZh ? '核心提示' : 'Bottom Line'}
              </p>
              <p>
                {isZh
                  ? 'MAP 计算是基础护理技能。掌握数值与趋势，有助于你在恰当时机为患者争取资源并升级治疗。'
                  : 'MAP calculation is a fundamental nursing skill. When you know the number and the trend, you are better equipped to advocate for patients and escalate care at the right moment.'}
              </p>
            </div>
          </section>

          <section id="formula-guide" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '护理公式速查' : 'Quick Nursing Formula Guide'}
            </h2>
            <div className="space-y-4 text-base text-gray-700">
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 text-blue-900">
                <p className="text-sm font-semibold uppercase tracking-wide">
                  {isZh ? '标准公式' : 'Standard Formula'}
                </p>
                <p className="text-lg font-semibold">
                  {isZh ? 'MAP =（收缩压 + 2 × 舒张压）÷ 3' : 'MAP = (Systolic BP + 2 × Diastolic BP) ÷ 3'}
                </p>
                <p className="mt-2 text-sm">
                  {isZh ? '记忆法：<strong>S</strong>收缩压 + <strong>D</strong>舒张压<strong>D</strong>ouble，再<strong>D</strong>ivide by 3。' : 'Memory trick: <strong>S</strong>ystolic + <strong>D</strong>iastolic <strong>D</strong>oubled, then <strong>D</strong>ivide by 3.'}
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '床旁心算步骤' : 'Bedside Mental Math'}
                </h3>
                <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm text-gray-700">
                  <li>{isZh ? '舒张压 × 2。' : 'Double the diastolic number.'}</li>
                  <li>{isZh ? '加上收缩压。' : 'Add the systolic number.'}</li>
                  <li>{isZh ? '除以 3（或按三等分估算）。' : 'Divide by three (or estimate by thirds).'}</li>
                </ol>
                <p className="mt-3 text-sm text-gray-700">
                  {isZh
                    ? '另一种方式：MAP = 舒张压 +（脉压 ÷ 3），其中脉压 = 收缩压 − 舒张压。'
                    : 'Alternatively: MAP = DBP + (Pulse Pressure ÷ 3). Pulse pressure is systolic minus diastolic.'}
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '常见血压速查表' : 'Common BP Values: Quick Reference'}
                </h3>
                <div className="not-prose overflow-x-auto">
                  <table className="w-full min-w-[480px] divide-y divide-gray-200 text-left text-sm text-gray-700">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                          {isZh ? '血压读数' : 'Patient BP'}
                        </th>
                        <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                          {isZh ? 'MAP' : 'MAP'}
                        </th>
                        <th className="px-4 py-3 font-semibold uppercase tracking-wide text-gray-500">
                          {isZh ? '临床含义' : 'Clinical Meaning'}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">120/80</td>
                        <td className="px-4 py-3">93 mmHg</td>
                        <td className="px-4 py-3 text-green-700 font-medium">
                          {isZh ? '✅ 正常——灌注最佳' : '✅ Normal — optimal perfusion'}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">110/70</td>
                        <td className="px-4 py-3">83 mmHg</td>
                        <td className="px-4 py-3 text-green-700 font-medium">
                          {isZh ? '✅ 正常——健康范围' : '✅ Normal — healthy range'}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">100/60</td>
                        <td className="px-4 py-3">73 mmHg</td>
                        <td className="px-4 py-3 text-amber-700 font-medium">
                          {isZh ? '⚠️ 正常偏低——ICU 患者需观察' : '⚠️ Low-normal — watch in ICU patients'}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">90/55</td>
                        <td className="px-4 py-3">67 mmHg</td>
                        <td className="px-4 py-3 text-amber-700 font-medium">
                          {isZh ? '⚠️ 临界值——通知医生' : '⚠️ Borderline — notify provider'}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">85/55</td>
                        <td className="px-4 py-3">65 mmHg</td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          {isZh ? '🔴 危急阈值——立即升级' : '🔴 Critical threshold — escalate'}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">80/50</td>
                        <td className="px-4 py-3">60 mmHg</td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          {isZh ? '🔴 灌注不足——启动快速反应' : '🔴 Inadequate perfusion — rapid response'}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">140/90</td>
                        <td className="px-4 py-3">107 mmHg</td>
                        <td className="px-4 py-3 text-amber-700 font-medium">
                          {isZh ? '🟠 升高——评估高血压' : '🟠 Elevated — assess for hypertension'}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-900">160/100</td>
                        <td className="px-4 py-3">120 mmHg</td>
                        <td className="px-4 py-3 text-red-700 font-medium">
                          {isZh ? '🔴 极高——需紧急评估' : '🔴 Very high — urgent evaluation'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm text-gray-700">
                  {isZh ? '提示：将此表打印或覆膜，随身佩戴或放在工作站。' : 'Tip: Print or laminate this table for your badge or workstation.'}
                </p>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50 p-5 text-sm text-red-800">
                <h3 className="text-xl font-semibold">
                  {isZh ? '避免的计算错误' : 'Calculation Mistakes to Avoid'}
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>{isZh ? '用简单平均代替加权公式。' : 'Using a simple average instead of the weighted formula.'}</li>
                  <li>{isZh ? '忘记将舒张压翻倍。' : 'Forgetting to double the diastolic number.'}</li>
                  <li>{isZh ? '在监护设备上颠倒输入收缩压与舒张压。' : 'Entering systolic and diastolic values backwards in monitors.'}</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="nursing-actions" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '基于 MAP 的护理处置' : 'Nursing Actions Based on MAP'}
            </h2>
            <p className="text-base text-gray-700">
              {isZh
                ? '参考以下床旁决策路径判断何时监测、升级或干预，同时结合科室流程与医嘱进行临床判断。'
                : 'Use these bedside decision pathways to determine when to monitor, escalate, or intervene. Incorporate facility protocols and provider orders alongside your clinical judgment.'}
            </p>
            <div className="space-y-4">
              <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-800">
                <h3 className="text-xl font-semibold">
                  {isZh ? 'MAP &lt;60 mmHg：危急——立刻行动' : 'MAP <60 mmHg: Critical — Immediate Action'}
                </h3>
                <p className="mt-2">
                  {isZh
                    ? '评估意识是否下降、肢端凉、毛细血管再充盈延迟、尿量减少及脉搏微弱。立即启动快速反应或通知医生，准备补液或升压药并确保静脉通路通畅。'
                    : 'Assess for decreased LOC, cool extremities, delayed capillary refill, oliguria, and weak pulses. Activate rapid response or notify the provider immediately. Prepare for fluid bolus or vasopressor initiation and ensure IV access is secured.'}
                </p>
                <p className="mt-2 font-semibold">
                  {isZh ? '记录示例：' : 'Documentation example:'}
                </p>
                <p>
                  {isZh
                    ? '“MAP 58 mmHg，患者意识淡漠，皮肤冰凉。已通知快速反应团队，按医嘱准备补液。”'
                    : '"MAP 58 mmHg, patient lethargic, skin cool. Rapid response notified, preparing for fluid bolus per order."'}
                </p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
                <h3 className="text-xl font-semibold">
                  {isZh ? 'MAP 60-64 mmHg：紧急——密切观察' : 'MAP 60-64 mmHg: Urgent — Close Monitoring'}
                </h3>
                <p className="mt-2">
                  {isZh
                    ? '将生命体征监测频率提高到每 15-30 分钟，关注尿量与意识状态，并查看乳酸等指标（如有医嘱）。若出现下降趋势或灌注指标异常，及时通知医生。'
                    : 'Increase vital sign frequency (every 15-30 minutes), check urine output, assess mental status, and review lactate if ordered. Notify provider if the trend is downward or perfusion markers are abnormal.'}
                </p>
              </div>
              <div className="rounded-xl border border-green-200 bg-green-50 p-5 text-sm text-green-800">
                <h3 className="text-xl font-semibold">
                  {isZh ? 'MAP 65-80 mmHg：目标范围——维持方案' : 'MAP 65-80 mmHg: Target Range — Continue Protocol'}
                </h3>
                <p className="mt-2">
                  {isZh
                    ? '保持当前治疗，记录趋势，并在交接班时说明稳定情况。若患者使用升压药，按医嘱在该区间内滴定。'
                    : 'Maintain current therapy, document trends, and communicate stability during handoff. If the patient is on vasopressors, titrate per order to maintain within this window.'}
                </p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
                <h3 className="text-xl font-semibold">
                  {isZh ? 'MAP 81-100 mmHg：正常偏高——评估背景' : 'MAP 81-100 mmHg: Normal-High — Evaluate Context'}
                </h3>
                <p className="mt-2">
                  {isZh
                    ? '考虑疼痛、焦虑、膀胱充盈或基础高血压等因素。在申请降压药前，先处理可逆原因（镇痛、如厕、放松指导）。'
                    : 'Consider pain, anxiety, bladder distension, or baseline hypertension. Address reversible causes (pain meds, toileting, relaxation techniques) before requesting antihypertensives.'}
                </p>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-800">
                <h3 className="text-xl font-semibold">
                  {isZh ? 'MAP &gt;110 mmHg：偏高——通知医师' : 'MAP >110 mmHg: High — Notify Provider'}
                </h3>
                <p className="mt-2">
                  {isZh
                    ? '评估是否出现头痛、视物模糊、胸痛或神经功能缺损。使用合适袖带手动复测血压，预期可能会收到降压药或进一步检查医嘱。'
                    : 'Evaluate for headache, visual changes, chest pain, or neurologic deficits. Repeat BP manually with correct cuff size to confirm. Anticipate orders for antihypertensives or further diagnostics.'}
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
              <h3 className="text-xl font-semibold">
                {isZh ? '特别注意事项' : 'Special Considerations'}
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>
                  <strong>{isZh ? '升压药滴定：' : 'Vasopressor titration:'}</strong>{' '}
                  {isZh
                    ? '每次调整剂量后 15-30 分钟重新计算 MAP，并记录当前剂量与反应。'
                    : 'Recalculate MAP 15-30 minutes after any dose change. Document current dose and response.'}
                </li>
                <li>
                  <strong>{isZh ? '脓毒症流程：' : 'Sepsis bundles:'}</strong>{' '}
                  {isZh
                    ? '在 1 小时流程内与乳酸、尿量、补液措施一并记录 MAP。'
                    : 'Document MAP alongside lactate, urine output, and fluid resuscitation steps within the 1-hour bundle.'}
                </li>
                <li>
                  <strong>{isZh ? '术后监测：' : 'Post-op monitoring:'}</strong>{' '}
                  {isZh
                    ? '将 MAP 与术前基线比较，下降超过 20% 需立即检查引流、化验与容量状况。'
                    : 'Compare MAP to preoperative baseline. A drop >20% warrants immediate review of drains, labs, and volume status.'}
                </li>
              </ul>
            </div>
          </section>

          <section id="documentation" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '如何有效记录 MAP' : 'How to Document MAP Effectively'}
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '电子病历（EHR）' : 'Electronic Health Records (EHR)'}
                </h3>
                <p className="text-sm text-gray-700">
                  {isZh
                    ? '多数 EHR 在输入收缩压与舒张压后会自动计算 MAP。若系统允许手动覆盖，请核对结果，并在流程表与叙述性记录中标注 MAP 趋势。'
                    : 'Most EHRs auto-calculate MAP when you enter systolic and diastolic values. Verify the calculation, especially if the system allows manual override. Include MAP trends in flowsheets and narrative notes.'}
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>{isZh ? '记录示例：' : 'Example note:'}</strong>{' '}
                  {isZh
                    ? '“BP 90/58，MAP 69 mmHg，较 0800 时的 75 mmHg 下降。患者清醒，尿量 35 mL/小时。已通知医生，改为每 15 分钟监测。”'
                    : '"BP 90/58, MAP 69 mmHg trending down from 75 mmHg at 0800. Patient alert, urine output 35 mL/hr. Provider notified, monitoring q15 min."'}
                </p>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? 'SBAR 交接' : 'SBAR Handoff'}
                </h3>
                <p className="text-sm text-gray-700">
                  {isZh
                    ? '在 SBAR 报告中纳入当前 MAP、趋势、已执行的干预以及待执行的医嘱，确保信息完整。'
                    : 'Summarize the current MAP, trend, interventions, and pending orders. Clear communication prevents missed deterioration.'}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>{isZh ? '情况： “MAP 保持在 60-65 mmHg。”' : 'Situation: "MAP running 60-65 mmHg."'}</li>
                  <li>
                    {isZh ? '背景： “脓毒症患者，去甲肾上腺素 6 mcg/min。”' : 'Background: "Sepsis patient on norepinephrine 6 mcg/min."'}
                  </li>
                  <li>{isZh ? '评估： “少尿但意识清醒。”' : 'Assessment: "Oliguria but mentation intact."'}</li>
                  <li>
                    {isZh ? '建议： “按流程继续滴定，如 MAP <60 mmHg 立即通知。”' : 'Recommendation: "Continue titration per protocol, notify if MAP <60 mmHg."'}
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
              <h3 className="text-xl font-semibold text-gray-900">
                {isZh ? '纸质记录' : 'Paper Charting'}
              </h3>
              <p>
                {isZh
                  ? '每次记录血压时同步记录 MAP，并注明干预措施与反应。如使用重症流程表，可将 MAP 趋势绘制出来，便于查房沟通。'
                  : 'Record MAP alongside each blood pressure entry. Include actions taken and responses. If your unit uses a critical care flow sheet, map out MAP trends visually to share during rounds.'}
              </p>
              <div className="mt-3 rounded-lg border border-dashed border-gray-300 bg-white p-4 font-mono text-sm">
                {isZh ? (
                  <>
                    时间  0800  1000  1200
                    <br />
                    血压  95/60  90/58  92/60
                    <br />
                    MAP  72   69   71
                    <br />
                    处置 —  已通知医生  给予 500 mL 乳酸林格
                  </>
                ) : (
                  <>
                    Time  0800  1000  1200
                    <br />
                    BP   95/60  90/58  92/60
                    <br />
                    MAP  72   69   71
                    <br />
                    Action —  MD notified 500 mL LR bolus given
                  </>
                )}
              </div>
            </div>
            <div className="rounded-xl border border-rose-100 bg-rose-50 p-5 text-sm text-rose-900">
              <h3 className="text-xl font-semibold">
                {isZh ? 'NCLEX 风格提醒' : 'NCLEX-Style Reminder'}
              </h3>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>{isZh ? '记录客观数据（BP、MAP、趋势）。' : 'Document objective data (BP, MAP, trends).'}</li>
                <li>{isZh ? '记录评估结果（意识、尿量、皮肤表现）。' : 'Record assessments (LOC, urine output, skin signs).'}</li>
                <li>{isZh ? '注明干预措施（补液、升压药、通知）。' : 'Note interventions (fluids, pressors, notifications).'}</li>
                <li>{isZh ? '评估疗效（例：补液后 MAP 提升至 74 mmHg）。' : 'Evaluate outcomes (MAP improved to 74 mmHg after bolus).'}</li>
              </ul>
            </div>
          </section>

          <section id="resources" className="space-y-6 rounded-2xl bg-white p-8 shadow-lg md:p-12">
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {isZh ? '护理资源与后续行动' : 'Nursing Resources & Next Steps'}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
                <h3 className="text-xl font-semibold">
                  {isZh ? '下载与工具' : 'Downloadables & Tools'}
                </h3>
                <ul className="space-y-2">
                  <li>{isZh ? '床旁胸卡：MAP 公式与速查表（PDF 即将上线）。' : 'Bedside badge card: MAP formula + quick reference (PDF coming soon).'}</li>
                  <li>{isZh ? '可打印的脓毒症清单，包含 MAP 目标。' : 'Printable sepsis checklist including MAP targets.'}</li>
                  <li>
                    <Link href={localizedPath('/map-calculator-bp')} className="font-semibold text-blue-800 hover:underline">
                      {isZh ? '血压换算 MAP 计算器' : 'BP to MAP calculator'}
                    </Link>{' '}
                    {isZh ? '，在抢救时快速换算。' : 'for rapid conversions during codes.'}
                  </li>
                </ul>
              </div>
              <div className="space-y-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
                <h3 className="text-xl font-semibold text-gray-900">
                  {isZh ? '专业发展' : 'Professional Development'}
                </h3>
                <ul className="space-y-2">
                  <li>{isZh ? '在床旁查房和交接会议中主动讨论 MAP。' : 'Incorporate MAP discussion into bedside rounds and shift huddles.'}</li>
                  <li>{isZh ? '为新成员开展 MAP 计算迷你培训。' : 'Lead a quick in-service on MAP calculation for new team members.'}</li>
                  <li>{isZh ? '与教学部门合作，将 MAP 场景纳入模拟训练。' : 'Partner with education departments to integrate MAP scenarios into simulations.'}</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm text-gray-700">
              <h3 className="text-xl font-semibold text-gray-900">
                {isZh ? '保持更新' : 'Stay Connected'}
              </h3>
              <p>
                {isZh
                  ? '订阅 mapcalculator.org 新闻邮件，获取新的床旁参考资料、可打印清单及护理实用技巧。'
                  : 'Subscribe to the mapcalculator.org newsletter for new bedside reference downloads, printable checklists, and clinical pearls designed for nursing practice.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-700">
              <Link
                href={localizedPath('/')}
                className="inline-flex items-center rounded-full border border-rose-600 px-4 py-2 font-semibold text-rose-700 transition hover:bg-rose-600 hover:text-white"
              >
                {isZh ? '返回主计算器' : 'Return to Main Calculator'}
              </Link>
              <Link
                href={localizedPath('/how-to-calculate-map-blood-pressure')}
                className="inline-flex items-center rounded-full border border-rose-600 px-4 py-2 font-semibold text-rose-700 transition hover:bg-rose-600 hover:text-white"
              >
                {isZh ? '复习计算教程' : 'Review the Calculation Tutorial'}
              </Link>
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
