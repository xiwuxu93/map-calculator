'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { defaultLocale, locales } from '@/lib/i18n';

const labels: Record<string, string> = {
  en: 'EN',
  zh: '中文',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const strippedPath =
    pathname?.replace(new RegExp(`^/(?:${locales.join('|')})(?=/|$)`), '') ?? '/';
  const normalizedPath = strippedPath === '' ? '/' : strippedPath;

  return (
    <div className="flex items-center gap-2">
      {locales.map((targetLocale) => {
        const isActive = targetLocale === locale;
        const href =
          targetLocale === defaultLocale
            ? normalizedPath
            : `/${targetLocale}${normalizedPath === '/' ? '' : normalizedPath}`;

        return (
          <Link
            key={targetLocale}
            href={href}
            className={`rounded-full border px-3 py-1 text-sm transition ${
              isActive
                ? 'border-gray-900 bg-gray-900 text-white'
                : 'border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900'
            }`}
          >
            {labels[targetLocale] ?? targetLocale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
