'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { calculateMap } from '@/lib/calculator';
import { validateMapInput } from '@/lib/validator';
import { defaultLocale } from '@/lib/i18n';

type InputsState = {
  systolic: string;
  diastolic: string;
};

const statusStyles: Record<'low' | 'normal' | 'high', string> = {
  normal: 'border-green-200 bg-green-50 text-green-600',
  low: 'border-orange-200 bg-orange-50 text-orange-600',
  high: 'border-red-200 bg-red-50 text-red-600',
};

export default function Calculator() {
  const t = useTranslations('calculator');
  const common = useTranslations('common');
  const locale = useLocale();
  const [inputs, setInputs] = useState<InputsState>({ systolic: '', diastolic: '' });

  const hasBothValues = inputs.systolic.trim() !== '' && inputs.diastolic.trim() !== '';

  const validation = useMemo(() => {
    if (!hasBothValues) {
      return null;
    }
    return validateMapInput(inputs);
  }, [inputs, hasBothValues]);

  const mapResult = useMemo(() => {
    if (!validation || !validation.success) {
      return null;
    }
    const { systolic, diastolic } = validation.data;
    return calculateMap(systolic, diastolic);
  }, [validation]);

  const errorMessages = useMemo(() => {
    if (!validation || validation.success) {
      return [];
    }
    return validation.error.issues.map((issue) => issue.message);
  }, [validation]);

  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
  const disclaimerHref = `${localePrefix}/disclaimer`;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="systolic" className="text-sm font-medium text-gray-700">
            {t('systolic')}
          </label>
          <input
            id="systolic"
            name="systolic"
            type="number"
            min={40}
            max={300}
            inputMode="decimal"
            value={inputs.systolic}
            onChange={(event) =>
              setInputs((prev) => ({ ...prev, systolic: event.target.value }))
            }
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-lg text-gray-900 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
            placeholder="120"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="diastolic" className="text-sm font-medium text-gray-700">
            {t('diastolic')}
          </label>
          <input
            id="diastolic"
            name="diastolic"
            type="number"
            min={20}
            max={200}
            inputMode="decimal"
            value={inputs.diastolic}
            onChange={(event) =>
              setInputs((prev) => ({ ...prev, diastolic: event.target.value }))
            }
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-lg text-gray-900 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
            placeholder="80"
          />
        </div>
      </div>

      {errorMessages.length > 0 && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {errorMessages.map((message) => (
            <p key={message}>{message}</p>
          ))}
        </div>
      )}

      {mapResult ? (
        <div className={`rounded-lg border p-6 text-center md:p-8 ${statusStyles[mapResult.status]}`}>
          <div className="text-sm font-semibold uppercase tracking-wide">
            {t('result')}
          </div>
          <div className="mt-4 text-5xl font-semibold">
            {mapResult.value}
            <span className="ml-2 text-2xl font-medium">mmHg</span>
          </div>
          <p className="mt-4 text-base font-medium">
            {t(`${mapResult.status}Map` as 'lowMap' | 'normalMap' | 'highMap')}
          </p>
        </div>
      ) : (
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center text-gray-500 md:p-8">
          <p>{t('result')}</p>
        </div>
      )}

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-700">
        {t('reference')}
      </div>

      <div className="space-y-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-xs text-amber-700 md:text-sm">
        <p className="font-semibold uppercase tracking-wide">{common('professionalUseOnly')}</p>
        <p>{t('disclaimer')}</p>
        <p>{t('professionalNotice')}</p>
        <p className="font-medium text-amber-800">{t('emergencyNotice')}</p>
        <Link
          href={disclaimerHref}
          className="inline-flex w-fit items-center gap-1 rounded-full border border-amber-600 px-3 py-1 text-xs font-medium text-amber-700 transition hover:bg-amber-600 hover:text-white"
        >
          {common('viewFullDisclaimer')}
        </Link>
      </div>
    </div>
  );
}
