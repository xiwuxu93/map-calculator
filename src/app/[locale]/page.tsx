import Link from 'next/link';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Calculator from '@/components/Calculator';
import { Locale, defaultLocale, locales } from '@/lib/i18n';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

type PageProps = {
  params: { locale: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = (locales.includes(params.locale as Locale) ? params.locale : defaultLocale) as Locale;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
  const localizedUrl = `${SITE_URL}${localePrefix}`;
  const imageUrl = `${SITE_URL}/og-image.png`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      ],
    },
    alternates: {
      canonical: localizedUrl,
      languages: {
        en: SITE_URL,
        es: `${SITE_URL}/es`,
        zh: `${SITE_URL}/zh`,
        'x-default': SITE_URL,
      },
    },
    openGraph: {
      type: 'website',
      locale,
      url: localizedUrl,
      title: t('title'),
      description: t('description'),
      siteName: t('siteName'),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const locale = params.locale as Locale;
  const home = await getTranslations({ locale, namespace: 'home' });
  const metadata = await getTranslations({ locale, namespace: 'metadata' });
  const common = await getTranslations({ locale, namespace: 'common' });
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
  const localizedPath = (path: string) => {
    if (path === '/' || path === '') {
      return localePrefix || '/';
    }
    return `${localePrefix}${path}`;
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: metadata('siteName'),
    description: metadata('description'),
    url: `${SITE_URL}${localePrefix}`,
    inLanguage: locale,
    applicationCategory: 'MedicalApplication',
    operatingSystem: 'Web',
    potentialAction: {
      '@type': 'PerformAction',
      name: 'Calculate Mean Arterial Pressure',
      target: `${SITE_URL}${localePrefix}`,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: home('faqMedicalDefinitionQuestion'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: home('faqMedicalDefinitionAnswer'),
        },
      },
      {
        '@type': 'Question',
        name: home('faqCalculationQuestion'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: home('faqCalculationAnswer'),
        },
      },
      {
        '@type': 'Question',
        name: home('faqNormalRangeQuestion'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: home('faqNormalRangeAnswer'),
        },
      },
      {
        '@type': 'Question',
        name: home('faqCriticalCareQuestion'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: home('faqCriticalCareAnswer'),
        },
      },
    ],
  };

  const medicalSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: home('title'),
    description: metadata('description'),
    url: `${SITE_URL}${localePrefix}`,
    inLanguage: locale,
    medicalAudience: [
      { '@type': 'MedicalAudience', audienceType: 'Physician' },
      { '@type': 'MedicalAudience', audienceType: 'Nurse' },
      { '@type': 'MedicalAudience', audienceType: 'Paramedic' },
    ],
    about: {
      '@type': 'MedicalEntity',
      name: home('title'),
      description: metadata('description'),
      code: {
        '@type': 'MedicalCode',
        code: '8478-0',
        codingSystem: 'LOINC',
      },
    },
    lastReviewed: '2025-11-04',
    reviewedBy: {
      '@type': 'Organization',
      name: 'Medical Content Review Team',
    },
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: metadata('siteName'),
    description: metadata('description'),
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  const structuredData = [webAppSchema, softwareSchema, faqSchema, medicalSchema];

  const exampleRows = [
    { bp: '120/80 mmHg', map: '93 mmHg', label: home('exampleRows.row12080') },
    { bp: '110/70 mmHg', map: '83 mmHg', label: home('exampleRows.row11070') },
    { bp: '140/90 mmHg', map: '107 mmHg', label: home('exampleRows.row14090') },
    { bp: '90/60 mmHg', map: '70 mmHg', label: home('exampleRows.row9060') },
    { bp: '80/50 mmHg', map: '60 mmHg', label: home('exampleRows.row8050') },
    { bp: '160/100 mmHg', map: '120 mmHg', label: home('exampleRows.row160100') },
  ];

  const clinicalApplications = [
    {
      heading: home('clinicalCriticalCareHeading'),
      points: [
        home('clinicalCriticalCarePoint1'),
        home('clinicalCriticalCarePoint2'),
        home('clinicalCriticalCarePoint3'),
        home('clinicalCriticalCarePoint4'),
      ],
    },
    {
      heading: home('clinicalAnesthesiaHeading'),
      points: [
        home('clinicalAnesthesiaPoint1'),
        home('clinicalAnesthesiaPoint2'),
        home('clinicalAnesthesiaPoint3'),
      ],
    },
    {
      heading: home('clinicalEmergencyHeading'),
      points: [
        home('clinicalEmergencyPoint1'),
        home('clinicalEmergencyPoint2'),
        home('clinicalEmergencyPoint3'),
      ],
    },
    {
      heading: home('clinicalCardiologyHeading'),
      points: [
        home('clinicalCardiologyPoint1'),
        home('clinicalCardiologyPoint2'),
        home('clinicalCardiologyPoint3'),
      ],
    },
  ];

  const clinicalTargets = [
    {
      condition: home('clinicalTargetGeneralCondition'),
      target: home('clinicalTargetGeneralTarget'),
      rationale: home('clinicalTargetGeneralRationale'),
    },
    {
      condition: home('clinicalTargetSepsisCondition'),
      target: home('clinicalTargetSepsisTarget'),
      rationale: home('clinicalTargetSepsisRationale'),
    },
    {
      condition: home('clinicalTargetTbiCondition'),
      target: home('clinicalTargetTbiTarget'),
      rationale: home('clinicalTargetTbiRationale'),
    },
    {
      condition: home('clinicalTargetIschemicStrokeCondition'),
      target: home('clinicalTargetIschemicStrokeTarget'),
      rationale: home('clinicalTargetIschemicStrokeRationale'),
    },
    {
      condition: home('clinicalTargetHemorrhagicStrokeCondition'),
      target: home('clinicalTargetHemorrhagicStrokeTarget'),
      rationale: home('clinicalTargetHemorrhagicStrokeRationale'),
    },
    {
      condition: home('clinicalTargetPostArrestCondition'),
      target: home('clinicalTargetPostArrestTarget'),
      rationale: home('clinicalTargetPostArrestRationale'),
    },
    {
      condition: home('clinicalTargetSurgeryCondition'),
      target: home('clinicalTargetSurgeryTarget'),
      rationale: home('clinicalTargetSurgeryRationale'),
    },
  ];

  const clinicalMapNotEnough = [
    home('clinicalMapNotEnoughPoint1'),
    home('clinicalMapNotEnoughPoint2'),
    home('clinicalMapNotEnoughPoint3'),
    home('clinicalMapNotEnoughPoint4'),
    home('clinicalMapNotEnoughPoint5'),
  ];

  const resourceCards = [
    {
      title: home('resourceCards.bpCalculatorTitle'),
      description: home('resourceCards.bpCalculatorDescription'),
      href: localizedPath('/map-calculator-bp'),
      cta: home('resourceCards.bpCalculatorLink'),
    },
    {
      title: home('resourceCards.howToTitle'),
      description: home('resourceCards.howToDescription'),
      href: localizedPath('/how-to-calculate-map-blood-pressure'),
      cta: home('resourceCards.howToLink'),
    },
    {
      title: home('resourceCards.nursingTitle'),
      description: home('resourceCards.nursingDescription'),
      href: localizedPath('/map-calculation-nursing'),
      cta: home('resourceCards.nursingLink'),
    },
  ];

  const scenarios = [
    {
      title: home('scenario1Title'),
      presentation: home('scenario1Presentation'),
      map: home('scenario1Map'),
      interpretation: home('scenario1Interpretation'),
      action: home('scenario1Action'),
    },
    {
      title: home('scenario2Title'),
      presentation: home('scenario2Presentation'),
      map: home('scenario2Map'),
      interpretation: home('scenario2Interpretation'),
      action: home('scenario2Action'),
    },
    {
      title: home('scenario3Title'),
      presentation: home('scenario3Presentation'),
      map: home('scenario3Map'),
      interpretation: home('scenario3Interpretation'),
      action: home('scenario3Action'),
    },
    {
      title: home('scenario4Title'),
      presentation: home('scenario4Presentation'),
      map: home('scenario4Map'),
      interpretation: home('scenario4Interpretation'),
      action: home('scenario4Action'),
    },
    {
      title: home('scenario5Title'),
      presentation: home('scenario5Presentation'),
      map: home('scenario5Map'),
      interpretation: home('scenario5Interpretation'),
      action: home('scenario5Action'),
    },
  ];

  const mapRanges = [
    { title: home('rangeCriticalLowTitle'), content: home('rangeCriticalLowContent') },
    { title: home('rangeLowNormalTitle'), content: home('rangeLowNormalContent') },
    { title: home('rangeNormalTitle'), content: home('rangeNormalContent') },
    { title: home('rangeElevatedTitle'), content: home('rangeElevatedContent') },
    { title: home('rangeHighTitle'), content: home('rangeHighContent') },
  ];

  const specialPopulationItems = [
    { title: home('specialElderlyTitle'), content: home('specialElderlyContent') },
    { title: home('specialPregnancyTitle'), content: home('specialPregnancyContent') },
    { title: home('specialPediatricTitle'), content: home('specialPediatricContent') },
    { title: home('specialChronicTitle'), content: home('specialChronicContent') },
  ];

  const medicalBannerTags = [
    home('medicalBannerTagPhysicians'),
    home('medicalBannerTagNurses'),
    home('medicalBannerTagParamedics'),
    home('medicalBannerTagStudents'),
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto flex max-w-4xl flex-col gap-12">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
              {home('title')}
            </h1>
            <p className="text-base text-gray-600 md:text-lg">{home('description')}</p>
          </div>

          <div className="space-y-4 rounded-xl border border-blue-100 bg-blue-50 p-6 text-left shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-800">
              {home('medicalBannerHeading')}
            </p>
            <p className="text-base text-blue-900">{home('medicalBannerDescription')}</p>
            <div className="flex flex-wrap items-center gap-2 text-sm text-blue-900">
              <span className="font-semibold">{home('medicalBannerAudienceLabel')}</span>
              {medicalBannerTags.map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-blue-900"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div id="map-calculator" className="rounded-lg bg-white p-6 shadow-lg md:p-8">
            <Calculator />
          </div>

          <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-lg md:p-8">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
                {home('resourceHeading')}
              </h2>
              <p className="text-sm text-gray-600 md:text-base">{home('resourceIntro')}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {resourceCards.map((card) => (
                <div key={card.title} className="flex h-full flex-col justify-between rounded-xl border border-gray-100 bg-gray-50 p-4 text-left">
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
                    <p className="text-sm text-gray-700">{card.description}</p>
                  </div>
                  <div className="pt-4">
                    <Link
                      href={card.href}
                      className="inline-flex items-center rounded-full border border-gray-900 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-900 transition hover:bg-gray-900 hover:text-white"
                    >
                      {card.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

     

          <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-lg md:p-8">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">{home('exampleHeading')}</h2>
              <p className="text-sm text-gray-600 md:text-base">{home('exampleIntro')}</p>
            </div>
            <div className="not-prose overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm text-gray-700 md:text-base">
                <thead>
                  <tr className="border-b border-gray-200 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    <th className="py-3 pr-4">{home('exampleTableColumnBloodPressure')}</th>
                    <th className="py-3 pr-4">{home('exampleTableColumnMap')}</th>
                    <th className="py-3">{home('exampleTableColumnInterpretation')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {exampleRows.map((row) => (
                    <tr key={row.bp}>
                      <td className="py-3 pr-4 font-semibold text-gray-900">{row.bp}</td>
                      <td className="py-3 pr-4">{row.map}</td>
                      <td className="py-3 text-gray-600">{row.label}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <a
                href="#map-calculator"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                {home('exampleCta')}
              </a>
            </div>
          </div>

          <article className="prose prose-gray max-w-none">
            <h2 id="what-is-map">{home('whatIsMap')}</h2>
            <p>{home('whatIsMapContent')}</p>

            <h2 id="how-to-calculate">{home('howToCalculate')}</h2>
            <p>{home('howToCalculateContent')}</p>
            <p>
              <strong>{home('formula')}:</strong> {home('standardFormula')}
            </p>
            <p>{home('formulaExplanation')}</p>

            <h2 id="clinical-significance">{home('clinicalSignificance')}</h2>
            <p>{home('clinicalSignificanceContent')}</p>
            <h3>{home('clinicalWhyHeading')}</h3>
            <p>{home('clinicalWhyContent')}</p>
            <h3>{home('clinicalApplicationsHeading')}</h3>
            <p>{home('clinicalApplicationsIntro')}</p>
            <div className="not-prose grid gap-4 md:grid-cols-2">
              {clinicalApplications.map((application) => (
                <div key={application.heading} className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                  <h4 className="text-base font-semibold text-gray-900">{application.heading}</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                    {application.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <h3>{home('clinicalTargetsHeading')}</h3>
            <div className="not-prose overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-sm text-gray-700">
                <thead>
                  <tr className="border-b border-gray-200 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    <th className="py-3 pr-4">{home('clinicalTargetsColumnCondition')}</th>
                    <th className="py-3 pr-4">{home('clinicalTargetsColumnTarget')}</th>
                    <th className="py-3">{home('clinicalTargetsColumnRationale')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {clinicalTargets.map((row) => (
                    <tr key={row.condition}>
                      <td className="py-3 pr-4 font-semibold text-gray-900">{row.condition}</td>
                      <td className="py-3 pr-4">{row.target}</td>
                      <td className="py-3 text-gray-600">{row.rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3>{home('clinicalMapNotEnoughHeading')}</h3>
            <p>{home('clinicalMapNotEnoughIntro')}</p>
            <ul>
              {clinicalMapNotEnough.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 id="common-scenarios">{home('commonScenariosHeading')}</h2>
            <div className="not-prose grid gap-4">
              {scenarios.map((scenario) => (
                <div key={scenario.title} className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                  <h4 className="text-base font-semibold text-gray-900">{scenario.title}</h4>
                  <p className="mt-2 text-sm text-gray-700">{scenario.presentation}</p>
                  <p className="text-sm font-semibold text-gray-900">{scenario.map}</p>
                  <p className="text-sm text-gray-700">{scenario.interpretation}</p>
                  <p className="text-sm text-gray-700">{scenario.action}</p>
                </div>
              ))}
            </div>

            <h2 id="normal-ranges">{home('normalRangesHeading')}</h2>
            <div className="not-prose grid gap-4 md:grid-cols-2">
              {mapRanges.map((range) => (
                <div key={range.title} className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                  <h4 className="text-base font-semibold text-gray-900">{range.title}</h4>
                  <p className="mt-1 text-sm text-gray-700">{range.content}</p>
                </div>
              ))}
            </div>
            <h3>{home('specialPopulationsHeading')}</h3>
            <p>{home('specialPopulationsIntro')}</p>
            <ul>
              {specialPopulationItems.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.content}
                </li>
              ))}
            </ul>

            <h2 id="when-to-use">{home('whenToUse')}</h2>
            <p>{home('whenToUseContent')}</p>
            <ul>
              <li>{home('useCase1')}</li>
              <li>{home('useCase2')}</li>
              <li>{home('useCase3')}</li>
              <li>{home('useCase4')}</li>
            </ul>

            <h2 id="safety">{common('disclaimer')}</h2>
            <p>{home('resultsDisclaimer')}</p>
            <p>{home('updatedNotice')}</p>

            <h3 id="emergency">{home('emergencyHeading')}</h3>
            <p>{home('emergencyContent')}</p>

            <h3 id="audience">{home('targetAudienceHeading')}</h3>
            <ul>
              <li>{home('targetAudienceProfessional1')}</li>
              <li>{home('targetAudienceProfessional2')}</li>
              <li>{home('targetAudienceProfessional3')}</li>
            </ul>

            <h3 id="restricted">{home('targetAudienceRestrictedHeading')}</h3>
            <ul>
              <li>{home('targetAudienceRestricted1')}</li>
              <li>{home('targetAudienceRestricted2')}</li>
              <li>{home('targetAudienceRestricted3')}</li>
            </ul>

            <h3 id="clinical-judgment">{home('clinicalJudgmentHeading')}</h3>
            <ul>
              <li>{home('clinicalJudgment1')}</li>
              <li>{home('clinicalJudgment2')}</li>
              <li>{home('clinicalJudgment3')}</li>
            </ul>

            <p>
              <Link href={localizedPath('/disclaimer')}>{home('disclaimerCta')}</Link>
            </p>

            <h2 id="policies">{home('policiesHeading')}</h2>
            <h3 id="privacy-policy">{home('privacyTitle')}</h3>
            <p>{home('privacyContent')}</p>

            <h3 id="terms-of-service">{home('termsTitle')}</h3>
            <p>{home('termsContent')}</p>

            <h3 id="contact">{home('contactTitle')}</h3>
            <p>{home('contactContent')}</p>

            <h2 id="references">{home('referencesHeading')}</h2>
            <ol>
              <li>{home('reference1')}</li>
              <li>{home('reference2')}</li>
              <li>{home('reference3')}</li>
              <li>{home('reference4')}</li>
            </ol>
          </article>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
