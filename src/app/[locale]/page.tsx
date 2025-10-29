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
        name: home('whatIsMap'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: home('whatIsMapContent'),
        },
      },
      {
        '@type': 'Question',
        name: home('howToCalculate'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${home('howToCalculateContent')} ${home('standardFormula')} ${home('formulaExplanation')}`,
        },
      },
      {
        '@type': 'Question',
        name: home('clinicalSignificance'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: home('clinicalSignificanceContent'),
        },
      },
      {
        '@type': 'Question',
        name: home('whenToUse'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${home('whenToUseContent')} ${home('useCase1')} ${home('useCase2')} ${home('useCase3')} ${home('useCase4')}`,
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
    about: {
      '@type': 'MedicalEntity',
      name: home('title'),
      description: metadata('description'),
    },
  };

  const structuredData = [webAppSchema, faqSchema, medicalSchema];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto flex max-w-4xl flex-col gap-12">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
              {home('title')}
            </h1>
            <p className="text-base text-gray-600 md:text-lg">{home('description')}</p>
          </div>

         

         

          <div className="rounded-lg bg-white p-6 shadow-lg md:p-8">
            <Calculator />
          </div>
        <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-lg md:p-8">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">{home('howToCalculateStepsHeading')}</h2>
              <p className="text-sm text-gray-600 md:text-base">{home('howToCalculateStepsIntro')}</p>
            </div>
            <ol className="list-decimal space-y-2 pl-6 text-sm text-gray-700 md:text-base">
              <li>{home('howToCalculateStep1')}</li>
              <li>{home('howToCalculateStep2')}</li>
              <li>{home('howToCalculateStep3')}</li>
              <li>{home('howToCalculateStep4')}</li>
              <li>{home('howToCalculateStep5')}</li>
            </ol>
            <div className="space-y-2 rounded-lg border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600">{home('howToCalculateExampleHeading')}</h3>
              <p className="text-sm text-slate-700 md:text-base">{home('howToCalculateExampleContent')}</p>
              <p className="text-xs text-slate-500 md:text-sm">{home('howToCalculateTip')}</p>
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

            <h2 id="normal-ranges">{home('normalRanges')}</h2>
            <p>{home('lowMapDescription')}</p>
            <p>{home('normalMapDescription')}</p>
            <p>{home('highMapDescription')}</p>

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
