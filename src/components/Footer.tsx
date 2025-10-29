'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { defaultLocale } from '@/lib/i18n';

const getLocalePrefix = (locale: string, fallbackLocale: string) =>
  locale === fallbackLocale ? '' : `/${locale}`;

export default function Footer() {
  const t = useTranslations('common');
  const year = new Date().getFullYear();
  const locale = useLocale();
  const basePath = getLocalePrefix(locale, defaultLocale);
  const withPrefix = (path: string) => `${basePath}${path}`;

  return (
    <footer className="border-t border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-4 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
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
        <span className="text-gray-500">
          © {year}. {t('allRightsReserved')}
        </span>
      </div>
    </footer>
  );
}
