'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { defaultLocale, locales, resolveLocale, type Locale } from '@/lib/i18n';

const FlagIcon = ({ locale, className }: { locale: string; className?: string }) => {
  switch (locale) {
    case 'en': // US Flag
      return (
        <svg viewBox="0 0 640 480" className={className} xmlns="http://www.w3.org/2000/svg">
          <g fillRule="evenodd">
            <path fill="#bd3d44" d="M0 0h640v480H0" />
            <path
              stroke="#fff"
              strokeWidth="37"
              d="M0 55.3h640M0 129h640M0 202.8h640M0 276.5h640M0 350.2h640M0 423.9h640"
            />
            <path fill="#192f5d" d="M0 0h247v221H0" />
            <path
              fill="#fff"
              d="M24 16l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM61 16l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM98 16l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM135 16l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM172 16l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM209 16l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM24 65l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM61 65l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM98 65l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM135 65l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM172 65l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM209 65l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM24 114l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM61 114l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM98 114l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM135 114l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM172 114l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM209 114l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM24 163l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM61 163l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM98 163l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM135 163l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM172 163l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20zM209 163l6 19h20l-16 12 6 19-16-12-16 12 6-19-16-12h20z"
            />
          </g>
        </svg>
      );
    case 'zh': // China Flag
      return (
        <svg viewBox="0 0 900 600" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect fill="#de2910" width="900" height="600" />
          <path
            fill="#ffde00"
            d="M141.1 127.3l37 113.2h119l-96.2 69.9 36.8 113.1-96.3-69.9-96.2 69.9 36.8-113.1-96.3-69.9h119z"
          />
          <path
            fill="#ffde00"
            d="M276.4 62.2l12.3 37.7h39.7l-32.1 23.3 12.3 37.7-32.1-23.3-32.1 23.3 12.3-37.7-32.1-23.3h39.7zM337 117.8l12.3 37.7h39.7l-32.1 23.3 12.3 37.7-32.1-23.3-32.1 23.3 12.3-37.7-32.1-23.3h39.7zM337 206.8l12.3 37.7h39.7l-32.1 23.3 12.3 37.7-32.1-23.3-32.1 23.3 12.3-37.7-32.1-23.3h39.7zM276.4 262.5l12.3 37.7h39.7l-32.1 23.3 12.3 37.7-32.1-23.3-32.1 23.3 12.3-37.7-32.1-23.3h39.7z"
          />
        </svg>
      );
    case 'es': // Spain Flag
      return (
        <svg viewBox="0 0 750 500" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect fill="#c60b1e" width="750" height="500" />
          <rect fill="#ffc400" y="125" width="750" height="250" />
        </svg>
      );
    case 'fr': // France Flag
      return (
        <svg viewBox="0 0 900 600" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="900" height="600" fill="#ED2939" />
          <rect width="600" height="600" fill="#fff" />
          <rect width="300" height="600" fill="#002395" />
        </svg>
      );
    case 'id': // Indonesia Flag
      return (
        <svg viewBox="0 0 900 600" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="900" height="600" fill="#fff" />
          <rect width="900" height="300" fill="#ce1126" />
        </svg>
      );
    default:
      return null;
  }
};

export default function LanguageSwitcher() {
  const currentLocale = resolveLocale(useLocale());
  const t = useTranslations('locales');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const strippedPath =
    pathname?.replace(new RegExp(`^/(?:${locales.join('|')})(?=/|$)`), '') ?? '/';
  const normalizedPath = strippedPath === '' ? '/' : strippedPath;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        aria-label="Select Language"
        aria-expanded={isOpen}
      >
        <FlagIcon locale={currentLocale} className="h-4 w-6 overflow-hidden rounded-[2px] border border-black/10 object-cover shadow-sm" />
        <span>{t(`${currentLocale}.name`)}</span>
        <svg
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right overflow-hidden rounded-xl border border-gray-100 bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5">
          <ul className="flex flex-col">
            {locales.map((targetLocale) => {
              const href =
                targetLocale === defaultLocale
                  ? normalizedPath
                  : `/${targetLocale}${normalizedPath === '/' ? '' : normalizedPath}`;
              const isActive = targetLocale === currentLocale;

              return (
                <li key={targetLocale}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                      isActive
                        ? 'bg-blue-50 font-semibold text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <FlagIcon locale={targetLocale} className="h-4 w-6 overflow-hidden rounded-[2px] border border-black/10 object-cover shadow-sm" />
                    {t(`${targetLocale}.name`)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
