import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import CurrentYear from '@/components/CurrentYear';
import { defaultLocale } from '@/lib/i18n';

const getLocalePrefix = (locale: string, fallbackLocale: string) =>
  locale === fallbackLocale ? '' : `/${locale}`;

export default async function Footer() {
  const [t, locale] = await Promise.all([getTranslations('common'), getLocale()]);
  const basePath = getLocalePrefix(locale, defaultLocale);
  const withPrefix = (path: string) => `${basePath}${path}`;

  return (
    <footer className="border-t border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-6 text-sm text-gray-500">
        <div className="flex flex-wrap items-center gap-4 text-gray-600">
          <span className="font-medium text-gray-800">{t('siteName')}</span>
          <Link href={withPrefix('/disclaimer')} className="transition hover:text-gray-900">
            {t('disclaimer')}
          </Link>
          <span className="text-gray-300">|</span>
          <Link href={withPrefix('/privacy')} className="transition hover:text-gray-900">
            {t('privacyPolicy')}
          </Link>
          <span className="text-gray-300">|</span>
          <Link href={withPrefix('/terms')} className="transition hover:text-gray-900">
            {t('termsOfService')}
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-gray-600">
          <Link href={withPrefix('/map-calculator-bp')} className="transition hover:text-gray-900">
            {t('bpCalculatorLink')}
          </Link>
          <span className="text-gray-300">|</span>
          <Link href={withPrefix('/how-to-calculate-map-blood-pressure')} className="transition hover:text-gray-900">
            {t('howToCalculateLink')}
          </Link>
          <span className="text-gray-300">|</span>
          <Link href={withPrefix('/map-calculation-nursing')} className="transition hover:text-gray-900">
            {t('nursingGuideLink')}
          </Link>
        </div>
        <span className="text-gray-500">
          © <CurrentYear />. {t('allRightsReserved')}
        </span>
      </div>
    </footer>
  );
}
