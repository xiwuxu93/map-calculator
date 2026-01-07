import type { BpCalculatorContent } from './types';

const bpCalculatorFr: BpCalculatorContent = {
  systolicLabel: 'Pression Systolique (mmHg)',
  diastolicLabel: 'Pression Diastolique (mmHg)',
  quickSelectHeading: 'Sélection Rapide',
  calculateCta: 'Calculer PAM',
  resetCta: 'Réinitialiser',
  copyCta: 'Copier',
  copyFeedbackTemplate: 'PAM {value} mmHg copiée',
  resultLabel: 'Résultat PAM',
  resultPlaceholder: 'Entrez la pression systolique et diastolique pour obtenir la PAM.',
  interpretationHeading: 'Guide d\'interprétation',
  formulaNote: 'Formule standard : (PAS + 2 × PAD) ÷ 3.',
  professionalHeading: 'Pour les Professionnels',
  professionalParagraphs: [
    'Cet outil aide à la décision mais ne remplace pas l\'évaluation clinique.',
    'Vérifiez manuellement en cas de doute.',
  ],
  emergencyNotice: 'En cas d\'urgence, suivez votre protocole local.',
  disclaimerLinkLabel: 'Avis complet',
  statusLegend: {
    criticalLow: 'PAM < 60 mmHg — Critique',
    borderline: 'PAM 60-64 mmHg — Limite',
    normal: 'PAM 65-100 mmHg — Normal',
    elevated: 'PAM 101-110 mmHg — Élevé',
    high: 'PAM > 110 mmHg — Très Élevé',
  },
  statusDescriptions: {
    criticalLow: 'Perfusion inadéquate probable. Évaluation immédiate requise.',
    borderline: 'Surveillance étroite requise. Évaluer les marqueurs de perfusion.',
    normal: 'Plage cible typique. Continuer la surveillance.',
    elevated: 'Légèrement élevé. Corréler avec la clinique.',
    high: 'Plage hypertensive. Évaluer le risque d\'organe cible.',
  },
  pulsePressureLabel: 'Pression Pulsée',
  ppStatusLegend: {
    narrow: 'Pincée (< 25 mmHg)',
    normal: 'Normale (25–60 mmHg)',
    wide: 'Élargie (> 60 mmHg)',
  },
  ppStatusDescriptions: {
    narrow: 'Peut indiquer une insuffisance cardiaque ou hypovolémie.',
    normal: 'Plage saine pour un adulte.',
    wide: 'Peut indiquer une rigidité artérielle ou régurgitation.',
  },
};

export default bpCalculatorFr;
