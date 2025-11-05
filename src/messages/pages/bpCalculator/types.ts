import type { MapStatus } from '@/lib/calculator';

export type BpCalculatorContent = {
  systolicLabel: string;
  diastolicLabel: string;
  quickSelectHeading: string;
  calculateCta: string;
  resetCta: string;
  copyCta: string;
  copyFeedbackTemplate: string;
  resultLabel: string;
  resultPlaceholder: string;
  interpretationHeading: string;
  formulaNote: string;
  professionalHeading: string;
  professionalParagraphs: string[];
  emergencyNotice: string;
  disclaimerLinkLabel: string;
  quickSelectLabel?: string;
  statusLegend: Record<MapStatus, string>;
  statusDescriptions: Record<MapStatus, string>;
};
