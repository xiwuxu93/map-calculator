import type { BpCalculatorContent } from './types';

const bpCalculatorId: BpCalculatorContent = {
  systolicLabel: 'Sistolik (mmHg)',
  diastolicLabel: 'Diastolik (mmHg)',
  quickSelectHeading: 'Pilihan Cepat',
  calculateCta: 'Hitung MAP',
  resetCta: 'Reset',
  copyCta: 'Salin',
  copyFeedbackTemplate: 'MAP {value} mmHg disalin',
  resultLabel: 'Hasil MAP',
  resultPlaceholder: 'Masukkan tekanan darah untuk hasil instan.',
  interpretationHeading: 'Panduan Interpretasi',
  formulaNote: 'Rumus standar: (SBP + 2 × DBP) ÷ 3.',
  professionalHeading: 'Untuk Profesional',
  professionalParagraphs: [
    'Alat ini mendukung keputusan klinis tetapi tidak menggantikan penilaian langsung.',
    'Verifikasi manual jika ragu.',
  ],
  emergencyNotice: 'Dalam keadaan darurat, ikuti protokol lokal.',
  disclaimerLinkLabel: 'Penafian lengkap',
  statusLegend: {
    criticalLow: 'MAP < 60 mmHg — Kritis',
    borderline: 'MAP 60-64 mmHg — Perbatasan',
    normal: 'MAP 65-100 mmHg — Normal',
    elevated: 'MAP 101-110 mmHg — Meningkat',
    high: 'MAP > 110 mmHg — Tinggi',
  },
  statusDescriptions: {
    criticalLow: 'Perfusi mungkin tidak adekuat. Evaluasi segera.',
    borderline: 'Pantau ketat. Evaluasi tanda perfusi.',
    normal: 'Rentang target tipikal. Lanjutkan pemantauan.',
    elevated: 'Sedikit meningkat. Sesuaikan dengan klinis.',
    high: 'Rentang hipertensi. Evaluasi risiko organ.',
  },
  pulsePressureLabel: 'Tekanan Nadi',
  ppStatusLegend: {
    narrow: 'Sempit (< 25 mmHg)',
    normal: 'Normal (25–60 mmHg)',
    wide: 'Lebar (> 60 mmHg)',
  },
  ppStatusDescriptions: {
    narrow: 'Dapat menunjukkan fungsi jantung buruk atau hipovolemia.',
    normal: 'Rentang sehat dewasa.',
    wide: 'Dapat menunjukkan kekakuan arteri atau regurgitasi.',
  },
};

export default bpCalculatorId;
