import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import CurrentYear from '@/components/CurrentYear';
import { defaultLocale } from '@/lib/i18n';

const getLocalePrefix = (locale: string, fallbackLocale: string) =>
  locale === fallbackLocale ? '' : `/${locale}`;

type PartnerLink = {
  name: string;
  href: string;
  badgeSrc?: string;
  badgeAlt?: string;
  badgeHeight?: number;
};

const partnerLinks: PartnerLink[] = [
  
];

export default async function Footer() {
  const [t, locale] = await Promise.all([getTranslations('common'), getLocale()]);
  const basePath = getLocalePrefix(locale, defaultLocale);
  const withPrefix = (path: string) => `${basePath}${path}`;

  return (
    <footer className="border-t border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-6 text-sm text-gray-500">
        <div className="flex flex-wrap items-center gap-4 text-gray-600">
          <span className="font-medium text-gray-800">{t('siteName')}</span>
          <Link href={withPrefix('/about')} className="transition hover:text-gray-900">
            {t('aboutLink')}
          </Link>
          <span className="text-gray-300">|</span>
          <Link href={withPrefix('/contact')} className="transition hover:text-gray-900">
            {t('contactLink')}
          </Link>
          <span className="text-gray-300">|</span>
          <Link href={withPrefix('/disclaimer')} className="transition hover:text-gray-900">
            {t('disclaimer')}
          </Link>
          <span className="text-gray-300">|</span>
          <Link href={withPrefix('/privacy')} className="transition hover:text-gray-900">
            {t('privacyPolicy')}
          </Link>
          <span className="text-gray-300">|</span>
          <Link href={withPrefix('/editorial-policy')} className="transition hover:text-gray-900">
            {t('editorialPolicy')}
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
        <div className="mt-2 flex flex-col items-center gap-3 border-t border-gray-100 pt-4 text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-center sm:text-left">
            © <CurrentYear /> {t('siteName')}. {t('allRightsReserved')}
          </span>
          <div className="flex flex-wrap justify-center gap-3 sm:justify-end">
            {partnerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer nofollow" 
                aria-label={link.name}
                className="inline-flex items-center justify-center text-gray-600 transition hover:text-gray-900"
              >
                {link.badgeSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={link.badgeSrc}
                    alt={link.badgeAlt || link.name}
                    style={{ height: `${link.badgeHeight ?? 54}px` }}
                  />
                ) : (
                  <span className="text-sm underline-offset-2 hover:underline">{link.name}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
