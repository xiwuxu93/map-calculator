import type { BpCalculatorContent } from './types';

const bpCalculatorEn: BpCalculatorContent = {
  systolicLabel: 'Systolic BP (mmHg)',
  diastolicLabel: 'Diastolic BP (mmHg)',
  quickSelectHeading: 'Quick Select Common Values',
  calculateCta: 'Calculate MAP',
  resetCta: 'Reset',
  copyCta: 'Copy Result',
  copyFeedbackTemplate: 'Copied MAP {value} mmHg to clipboard',
  resultLabel: 'Your MAP Result',
  resultPlaceholder: 'Enter systolic and diastolic blood pressure to generate an instant MAP result.',
  interpretationHeading: 'Interpretation Guide',
  formulaNote: 'Calculated with the standard mean arterial pressure formula: (SBP + 2 × DBP) ÷ 3.',
  professionalHeading: 'For Licensed Professionals',
  professionalParagraphs: [
    'This tool supports clinical decision making but does not replace bedside assessment, institutional protocols, or attending supervision.',
    'Verify blood pressure measurements manually when results or patient presentation are incongruent.',
  ],
  emergencyNotice: 'In an emergency, call local emergency services or follow your facility escalation pathway.',
  disclaimerLinkLabel: 'View full disclaimer',
  statusLegend: {
    criticalLow: 'MAP < 60 mmHg — Immediate escalation for perfusion support',
    borderline: 'MAP 60-64 mmHg — Borderline perfusion, monitor closely',
    normal: 'MAP 65-100 mmHg — Optimal perfusion for most adults',
    elevated: 'MAP 101-110 mmHg — Mildly elevated, assess clinical context',
    high: 'MAP > 110 mmHg — Hypertensive range, evaluate for urgency/emergency',
  },
  statusDescriptions: {
    criticalLow:
      'Critical low MAP suggests inadequate organ perfusion. Initiate rapid assessment, fluid resuscitation, and vasopressor support per protocol.',
    borderline:
      'Borderline MAP requires close surveillance. Trend vitals, assess lactate and urine output, and prepare to escalate therapy if perfusion markers decline.',
    normal:
      'MAP is within the typical target range for most adult patients. Continue current management and monitor for trends rather than isolated readings.',
    elevated:
      'MAP is mildly elevated. Correlate with patient history, pain scores, and perioperative status before initiating antihypertensive therapy.',
    high:
      'MAP is in a hypertensive range. Evaluate for end-organ symptoms and follow hypertensive emergency/urgency protocols as appropriate.',
  },
};

export default bpCalculatorEn;
