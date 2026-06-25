'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { calculateMap } from '@/lib/calculator';
import type { MapStatus, PulsePressureStatus } from '@/lib/calculator';
import { validateMapInput } from '@/lib/validator';
import { defaultLocale, resolveLocale } from '@/lib/i18n';

import MapGauge from './MapGauge';

type InputsState = {
  systolic: string;
  diastolic: string;
};

type FieldErrors = Partial<Record<keyof InputsState, string>>;

const statusStyles: Record<MapStatus, string> = {
  criticalLow: 'border-red-200 bg-white text-red-800',
  borderline: 'border-orange-200 bg-white text-orange-800',
  normal: 'border-green-200 bg-white text-green-700',
  elevated: 'border-amber-200 bg-white text-amber-800',
  high: 'border-rose-200 bg-white text-rose-800',
};

const ppStatusStyles: Record<PulsePressureStatus, string> = {
  narrow: 'border-red-100 bg-red-50/50 text-red-800',
  normal: 'border-green-100 bg-green-50/50 text-green-700',
  wide: 'border-orange-100 bg-orange-50/50 text-orange-800',
};

const statusOrder: MapStatus[] = ['criticalLow', 'borderline', 'normal', 'elevated', 'high'];

const badgeStyles: Record<MapStatus, string> = {
  criticalLow: 'bg-red-100 text-red-800 ring-red-200',
  borderline: 'bg-orange-100 text-orange-800 ring-orange-200',
  normal: 'bg-green-100 text-green-800 ring-green-200',
  elevated: 'bg-amber-100 text-amber-800 ring-amber-200',
  high: 'bg-rose-100 text-rose-800 ring-rose-200',
};

export default function Calculator() {
  const t = useTranslations('calculator');
  const common = useTranslations('common');
  const home = useTranslations('home');
  const locale = resolveLocale(useLocale());
  const [inputs, setInputs] = useState<InputsState>({ systolic: '', diastolic: '' });
  const [touched, setTouched] = useState<Record<keyof InputsState, boolean>>({
    systolic: false,
    diastolic: false,
  });
  const [hasCalculated, setHasCalculated] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState('');

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

  const fieldErrors = useMemo<FieldErrors>(() => {
    if (!validation || validation.success) {
      return {};
    }
    return validation.error.issues.reduce<FieldErrors>((acc, issue) => {
      const path = issue.path?.[0];
      if (typeof path === 'string') {
        acc[path as keyof InputsState] = issue.message;
      }
      return acc;
    }, {});
  }, [validation]);

  const errorMessages = useMemo(() => {
    if (!validation || validation.success) {
      return [];
    }
    return validation.error.issues.map((issue) => issue.message);
  }, [validation]);

  useEffect(() => {
    setCopyFeedback('');
  }, [mapResult?.value]);

  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
  const disclaimerHref = `${localePrefix}/disclaimer`;
  const shouldShowResult = Boolean(hasCalculated && mapResult);

  const showFieldError = (field: keyof InputsState) =>
    Boolean(fieldErrors[field]) && (touched[field] || hasCalculated);

  const handleInputChange =
    (field: keyof InputsState) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setInputs((prev) => ({ ...prev, [field]: value }));
      setTouched((prev) => ({ ...prev, [field]: true }));
    };

  const handleCalculate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!hasBothValues) {
      setHasCalculated(false);
      return;
    }
    setHasCalculated(true);
  };

  const handleReset = () => {
    setInputs({ systolic: '', diastolic: '' });
    setTouched({ systolic: false, diastolic: false });
    setHasCalculated(false);
    setCopyFeedback('');
  };

  const handleCopy = async () => {
    if (!mapResult) {
      return;
    }
    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      return;
    }
    try {
      const text = `MAP: ${mapResult.value} mmHg (SBP/DBP: ${inputs.systolic}/${inputs.diastolic}). Interpretation: ${t(`statusLabels.${mapResult.status}`)}. Pulse Pressure: ${mapResult.pulsePressure} mmHg.`;
      await navigator.clipboard.writeText(text);
      setCopyFeedback(t('copySuccess', { value: mapResult.value.toString() }));
    } catch {
      setCopyFeedback('');
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleCalculate} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="systolic" className="text-sm font-bold text-gray-700">
            {t('systolic')}
          </label>
          <div className="relative">
            <input
              id="systolic"
              name="systolic"
              type="number"
              min={70}
              max={250}
              inputMode="decimal"
              value={inputs.systolic}
              onChange={handleInputChange('systolic')}
              className={`w-full rounded-xl border bg-white px-4 py-4 text-2xl font-semibold text-gray-900 outline-none transition focus:ring-4 ${
                showFieldError('systolic')
                  ? 'border-red-500 focus:border-red-600 focus:ring-red-500/10'
                  : 'border-gray-200 focus:border-blue-600 focus:ring-blue-600/10'
              }`}
              placeholder="120"
              aria-invalid={showFieldError('systolic')}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-400">mmHg</span>
          </div>
          {showFieldError('systolic') ? (
            <p className="text-sm text-red-600">{fieldErrors.systolic}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="diastolic" className="text-sm font-bold text-gray-700">
            {t('diastolic')}
          </label>
          <div className="relative">
            <input
              id="diastolic"
              name="diastolic"
              type="number"
              min={40}
              max={150}
              inputMode="decimal"
              value={inputs.diastolic}
              onChange={handleInputChange('diastolic')}
              className={`w-full rounded-xl border bg-white px-4 py-4 text-2xl font-semibold text-gray-900 outline-none transition focus:ring-4 ${
                showFieldError('diastolic')
                  ? 'border-red-500 focus:border-red-600 focus:ring-red-500/10'
                  : 'border-gray-200 focus:border-blue-600 focus:ring-blue-600/10'
              }`}
              placeholder="80"
              aria-invalid={showFieldError('diastolic')}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-400">mmHg</span>
          </div>
          {showFieldError('diastolic') ? (
            <p className="text-sm text-red-600">{fieldErrors.diastolic}</p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={!hasBothValues}
          className="inline-flex h-14 items-center justify-center rounded-xl bg-blue-600 px-8 text-lg font-bold text-white transition hover:bg-blue-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {t('calculateCta')}
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-gray-200 px-6 text-lg font-bold text-gray-600 transition hover:border-gray-900 hover:text-gray-900 active:scale-95"
        >
          {t('resetCta')}
        </button>
      </div>

      {errorMessages.length > 0 && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {errorMessages.map((message) => (
            <p key={message} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              {message}
            </p>
          ))}
        </div>
      )}

      {shouldShowResult && mapResult ? (
        <div
          className={`overflow-hidden rounded-2xl border-2 shadow-xl transition-all ${statusStyles[mapResult.status]}`}
        >
          <div className="grid gap-0 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center border-b border-gray-100 bg-gray-50/50 p-8 md:border-b-0 md:border-r">
              <MapGauge value={mapResult.value} status={mapResult.status} />
              <div className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold shadow-sm ring-1 ring-inset ring-current">
                {t(`statusLabels.${mapResult.status}` as const)}
              </div>
            </div>
            
            <div className="flex flex-col p-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">{t('interpretationHeading')}</h3>
              <p className="mt-4 text-lg font-bold leading-snug">
                {t(`statusDescriptions.${mapResult.status}` as const)}
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t('pulsePressure')}</div>
                  <div className="mt-1 text-2xl font-black text-gray-900">{mapResult.pulsePressure}<span className="ml-1 text-xs font-medium">mmHg</span></div>
                  <div className={`mt-1 text-[10px] font-bold uppercase ${ppStatusStyles[mapResult.pulsePressureStatus]}`}>
                    {t(`ppStatusLabels.${mapResult.pulsePressureStatus}` as const)}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{home('formula')}</div>
                  <div className="mt-1 text-xs font-medium text-gray-500 leading-tight">MAP = (SBP + 2&times;DBP) / 3</div>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 text-sm font-bold text-white transition hover:bg-gray-800"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  {t('copyResult')}
                </button>
                {copyFeedback ? (
                  <p className="mt-2 text-center text-[10px] font-bold text-blue-600 uppercase tracking-widest" role="status" aria-live="polite">
                    {copyFeedback}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          
          <div className="bg-blue-600 p-6 text-white">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Clinical Pearl (Evidence-Based)
            </div>
            <p className="mt-3 text-sm font-medium leading-relaxed opacity-90">
              {mapResult.status === 'criticalLow' || mapResult.status === 'borderline' 
                ? "The Surviving Sepsis Campaign suggests a target MAP of at least 65 mmHg for adult patients with septic shock on vasopressors to ensure adequate end-organ perfusion."
                : mapResult.status === 'high' 
                ? "In hypertensive emergencies, the goal is often controlled reduction of MAP by no more than 25% within the first hour to prevent cerebral ischemia."
                : "A MAP between 65-100 mmHg is generally sufficient to provide adequate blood flow to the kidneys, brain, and heart in the average adult."
              }
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/50 p-12 text-center text-gray-400">
          <svg className="mb-4 h-12 w-12 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <p className="text-lg font-medium">{t('result')}</p>
          <p className="mt-1 text-sm">{t('interpretationIntro')}</p>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 text-sm text-blue-800">
          <div className="mb-1 flex items-center gap-2 font-bold uppercase tracking-wider text-[10px]">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            {home('clinicalSignificance')}
          </div>
          {t('reference')}
        </div>
        <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 text-sm text-gray-800">
          <div className="mb-1 flex items-center gap-2 font-bold uppercase tracking-wider text-[10px]">
            <span className="h-2 w-2 rounded-full bg-gray-600" />
            Notice
          </div>
          {t('professionalNotice')}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between border-b pb-4">
          <div className="text-base font-black text-gray-900">{t('interpretationHeading')}</div>
          <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Guide</span>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {statusOrder.map((status) => (
            <div
              key={status}
              className={`rounded-xl px-4 py-3 text-xs font-bold transition-all hover:scale-[1.02] ${badgeStyles[status]}`}
            >
              {t(`interpretationLegend.${status}` as const)}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border-2 border-amber-100 bg-amber-50/50 p-6 text-xs text-amber-700 md:text-sm">
        <div className="flex items-center gap-2 font-black uppercase tracking-[0.2em] text-amber-800">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          {common('professionalUseOnly')}
        </div>
        <p className="font-medium leading-relaxed">{t('disclaimer')}</p>
        <p className="font-bold text-amber-900 decoration-amber-500/30 underline-offset-4">{t('emergencyNotice')}</p>
        <Link
          href={disclaimerHref}
          className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-amber-600/20 transition hover:bg-amber-700 active:scale-95"
        >
          {common('viewFullDisclaimer')}
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </form>
  );
}
