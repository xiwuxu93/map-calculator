'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useLocale } from 'next-intl';
import { calculateMap } from '@/lib/calculator';
import type { MapStatus } from '@/lib/calculator';
import { validateMapInput } from '@/lib/validator';
import bpCalculatorContent from '@/messages/pages/bpCalculator';
import type { BpCalculatorContent } from '@/messages/pages/bpCalculator/types';
import { defaultLocale, resolveLocale } from '@/lib/i18n';

type InputsState = {
  systolic: string;
  diastolic: string;
};

type FieldErrors = Partial<Record<keyof InputsState, string>>;

type QuickSelectPreset = {
  label: string;
  systolic: string;
  diastolic: string;
};

const quickSelectPresets: QuickSelectPreset[] = [
  { label: '120/80', systolic: '120', diastolic: '80' },
  { label: '110/70', systolic: '110', diastolic: '70' },
  { label: '140/90', systolic: '140', diastolic: '90' },
  { label: '90/60', systolic: '90', diastolic: '60' },
  { label: '160/100', systolic: '160', diastolic: '100' },
];

const statusStyles: Record<MapStatus, string> = {
  criticalLow: 'border-red-200 bg-red-50 text-red-800',
  borderline: 'border-orange-200 bg-orange-50 text-orange-800',
  normal: 'border-green-200 bg-green-50 text-green-700',
  elevated: 'border-amber-200 bg-amber-50 text-amber-800',
  high: 'border-rose-200 bg-rose-50 text-rose-800',
};

export default function BpCalculator() {
  const locale = resolveLocale(useLocale());
  const content: BpCalculatorContent =
    bpCalculatorContent[locale] ?? bpCalculatorContent[defaultLocale];
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;

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

  const shouldShowResult = Boolean(hasCalculated && mapResult);

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

  const handleQuickSelect = (preset: QuickSelectPreset) => {
    setInputs({ systolic: preset.systolic, diastolic: preset.diastolic });
    setTouched({ systolic: true, diastolic: true });
    setHasCalculated(true);
  };

  const handleCopy = async () => {
    if (!mapResult) {
      return;
    }
    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      return;
    }
    try {
      await navigator.clipboard.writeText(`MAP ${mapResult.value} mmHg`);
      setCopyFeedback(content.copyFeedbackTemplate.replace('{value}', mapResult.value.toString()));
    } catch {
      setCopyFeedback('');
    }
  };

  const showFieldError = (field: keyof InputsState) =>
    Boolean(fieldErrors[field]) && (touched[field] || hasCalculated);

  return (
    <form className="space-y-6" onSubmit={handleCalculate} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="bp-systolic" className="text-sm font-medium text-gray-700">
            {content.systolicLabel}
          </label>
          <input
            id="bp-systolic"
            name="systolic"
            type="number"
            min={70}
            max={250}
            inputMode="decimal"
            value={inputs.systolic}
            onChange={handleInputChange('systolic')}
            className={`w-full rounded-lg border bg-white px-4 py-3 text-lg text-gray-900 outline-none transition focus:ring-2 ${
              showFieldError('systolic')
                ? 'border-red-500 focus:border-red-600 focus:ring-red-500/20'
                : 'border-gray-300 focus:border-gray-900 focus:ring-gray-900/10'
            }`}
            placeholder="120"
            aria-invalid={showFieldError('systolic')}
          />
          {showFieldError('systolic') ? (
            <p className="text-sm text-red-600">{fieldErrors.systolic}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="bp-diastolic" className="text-sm font-medium text-gray-700">
            {content.diastolicLabel}
          </label>
          <input
            id="bp-diastolic"
            name="diastolic"
            type="number"
            min={40}
            max={150}
            inputMode="decimal"
            value={inputs.diastolic}
            onChange={handleInputChange('diastolic')}
            className={`w-full rounded-lg border bg-white px-4 py-3 text-lg text-gray-900 outline-none transition focus:ring-2 ${
              showFieldError('diastolic')
                ? 'border-red-500 focus:border-red-600 focus:ring-red-500/20'
                : 'border-gray-300 focus:border-gray-900 focus:ring-gray-900/10'
            }`}
            placeholder="80"
            aria-invalid={showFieldError('diastolic')}
          />
          {showFieldError('diastolic') ? (
            <p className="text-sm text-red-600">{fieldErrors.diastolic}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-600">
          {content.quickSelectHeading}
        </p>
        <div className="flex flex-wrap gap-2">
          {quickSelectPresets.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => handleQuickSelect(preset)}
              className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={!hasBothValues}
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {content.calculateCta}
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-base font-semibold text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
        >
          {content.resetCta}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-lg border border-blue-200 px-5 py-3 text-base font-semibold text-blue-700 transition hover:border-blue-600 hover:text-blue-600"
          disabled={!mapResult}
        >
          {content.copyCta}
        </button>
        {copyFeedback ? (
          <span className="text-sm font-medium text-blue-700" role="status" aria-live="polite">
            {copyFeedback}
          </span>
        ) : null}
      </div>

      {errorMessages.length > 0 && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {errorMessages.map((message) => (
            <p key={message}>{message}</p>
          ))}
        </div>
      )}

      {shouldShowResult && mapResult ? (
        <div className={`rounded-xl border p-6 text-center shadow-sm md:p-8 ${statusStyles[mapResult.status]}`}>
          <div className="text-sm font-semibold uppercase tracking-wide">{content.resultLabel}</div>
          <div className="mt-4 flex flex-col items-center gap-2 text-5xl font-semibold">
            <span>
              {mapResult.value}
              <span className="ml-2 text-2xl font-medium">mmHg</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-current">
              {content.statusLegend[mapResult.status]}
            </span>
          </div>
          <p className="mt-4 text-base font-medium">{content.statusDescriptions[mapResult.status]}</p>
        </div>
      ) : (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center text-gray-500 md:p-8">
          <p>{content.resultPlaceholder}</p>
        </div>
      )}

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-700">
        {content.formulaNote}
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">
        <div className="mb-3 text-base font-semibold text-gray-900">{content.interpretationHeading}</div>
        <div className="grid gap-2 md:grid-cols-2">
          {Object.entries(content.statusLegend).map(([status, label]) => (
            <div
              key={status}
              className="rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700"
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-xs text-amber-700 md:text-sm">
        <p className="font-semibold uppercase tracking-wide">{content.professionalHeading}</p>
        {content.professionalParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="font-medium text-amber-800">{content.emergencyNotice}</p>
        <Link
          href={`${localePrefix}/disclaimer`}
          className="inline-flex w-fit items-center gap-1 rounded-full border border-amber-600 px-3 py-1 text-xs font-medium text-amber-700 transition hover:bg-amber-600 hover:text-white"
        >
          {content.disclaimerLinkLabel}
        </Link>
      </div>
    </form>
  );
}
