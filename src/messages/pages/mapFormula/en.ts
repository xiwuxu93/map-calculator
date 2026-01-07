import type { MapFormulaContent } from './types';

const rows = [
  {
    bp: 'Normal Heart Rate',
    map: 'Diastole × 0.66',
    notes: 'At 60-80 bpm, diastole is ~2/3 of the cycle. Standard formula works perfectly.',
  },
  {
    bp: 'Tachycardia (120 bpm)',
    map: 'Diastole × 0.50',
    notes: 'Diastole shortens dramatically. Standard formula underestimates true MAP.',
  },
  {
    bp: 'Bradycardia (40 bpm)',
    map: 'Diastole × 0.75',
    notes: 'Diastole lengthens. Standard formula may overestimate true MAP.',
  },
] as const;

const mapFormulaEn: MapFormulaContent = {
  metadata: {
    title:
      'The Physiology Behind the MAP Formula: Why We Double the Diastolic',
    description:
      'Why is MAP = (SBP + 2DBP)/3? An in-depth physiological explanation of cardiac cycle timing, arterial compliance, and why the formula fails in tachycardia.',
    keywords: [
      'map formula physiology',
      'why double diastolic for map',
      'mean arterial pressure physics',
      'cardiac cycle timing map',
      'integration of arterial pressure curve',
      'limitations of map formula',
    ],
    openGraphTitle:
      'The Physics of MAP: Why the Standard Formula Works (And When It Fails)',
    openGraphDescription:
      'A deep dive into the hemodynamics behind (SBP + 2DBP)/3. Learn about the area under the curve, diastolic decay, and heart rate limitations.',
    heroTitle: 'The Physiology Behind the MAP Formula',
    heroDescription:
      'The standard MAP equation is not just arbitrary arithmetic—it is a simplified integration of the arterial pressure pulse wave. Understand the physics behind the numbers.',
  },
  schema: {
    article: {
      headline:
        'The Physiology Behind the Mean Arterial Pressure (MAP) Formula',
      description:
        'Detailed hemodynamic explanation of the MAP formula derivation, derived from the area under the arterial pressure curve.',
    },
    faq: [
      {
        question: 'Why is diastolic pressure weighted x2 in the MAP formula?',
        answer:
          'At a normal resting heart rate (60-80 bpm), the heart spends approximately two-thirds of the cardiac cycle in diastole (relaxation) and one-third in systole (ejection). Therefore, the average pressure is mathematically weighted closer to the diastolic value.',
      },
      {
        question: 'Is the standard MAP formula accurate for fast heart rates?',
        answer:
          'No. As heart rate increases (tachycardia), the diastolic phase shortens disproportionately. The 1:2 systolic-to-diastolic ratio disappears, making the standard formula less accurate. In these cases, the "Area Under the Curve" method (used by arterial lines) is required.',
      },
      {
        question: 'What is the "Area Under the Curve" definition of MAP?',
        answer:
          'True MAP is the geometric mean of arterial pressure, calculated by integrating the pressure curve over time and dividing by the duration of the cardiac cycle. The formula (SBP + 2DBP)/3 is merely a bedside approximation of this integral.',
      },
    ],
    breadcrumbs: {
      home: 'Home',
      page: 'Formula Physiology',
    },
  },
  hero: {
    label: 'Hemodynamic Theory',
    readingTimeLabel: 'Reading Time',
    skillLevelLabel: 'Level',
    lastUpdatedLabel: 'Last Updated',
    readingTime: '6 minutes',
    skillLevel: 'Advanced / Medical Student',
    lastUpdated: 'January 2025',
  },
  sections: {
    overview: {
      heading: 'The Approximation of Integration',
      intro:
        'True Mean Arterial Pressure is not a simple arithmetic average. It is the integral of the arterial pressure wave over a single cardiac cycle—literally the "Area Under the Curve" (AUC).',
      formulaLabel: 'The Bedside Short-Cut',
      standardFormula: 'MAP ≈ DBP + 1/3(Pulse Pressure)',
      keyPoint:
        'This formula is an "estimate of an integral." It assumes a specific shape of the pressure wave that only exists at normal heart rates.',
    },
    physiology: {
      heading: 'Why "Divided by 3"? The Rule of Thirds',
      intro:
        'The magic number "3" in the denominator comes from the timing of the heart valves.',
      systoleVsDiastoleHeading: 'The Asymmetry of the Heartbeat',
      systoleVsDiastoleBody:
        'Blood flow is pulsatile, but organ perfusion is continuous. The aorta acts as a "Windkessel" (elastic reservoir), storing energy during systole and recoiling during diastole to maintain flow. Because recoil takes longer than ejection, the arteries spend more time draining (diastole) than filling (systole).',
      simpleAverageHeading: 'The Geometric Reality',
      simpleAverageIntro:
        'If the arterial pressure wave were a perfect square wave (spending equal time at SBP and DBP), a simple average would work. It is not.',
      simpleAverageFormulaWrong:
        'The pressure wave rises sharply (systolic upstroke) and falls slowly (diastolic decay). Most of the "time area" is under the diastolic portion of the curve.',
      weightedFormulaHeading: 'Visualizing the Weighting',
      weightedFormulaBody:
        'Imagine the cardiac cycle as 3 units of time. Systole occupies 1 unit. Diastole occupies 2 units. Thus, the average pressure is (1×SBP + 2×DBP) ÷ 3.',
    },
    examples: {
      heading: 'When the Formula Fails: Heart Rate Impact',
      intro:
        'The most common error in clinical practice is blindly trusting this formula in patients with extreme heart rates.',
      tableHeaders: {
        bloodPressure: 'Condition',
        map: 'Diastolic Weight',
        notes: 'Physiological Impact',
      },
      rows,
      sbpDbpNote:
        'In severe tachycardia (>110 bpm), systole and diastole become nearly equal in duration. The formula should ideally shift to (SBP + DBP) ÷ 2, but monitors rarely adjust for this, leading to calculation errors.',
    },
    practice: {
      heading: 'Clinical Implications',
      intro:
        'Understanding the limitations of the formula changes how you interpret data at the bedside.',
      stepsHeading: 'Key Takeaways for Clinicians',
      steps: [
        'The standard formula is an ESTIMATE, not a measurement.',
        'In Tachycardia: The formula underestimates true perfusion (because diastole is shorter than the formula assumes).',
        'In Bradycardia: The formula works well, or slightly overestimates.',
        'Arterial Lines: They do not use this formula. They sample pressure 100+ times per second to calculate the true integral. This is why A-line MAPs often differ from cuff MAPs.',
        'Wide Pulse Pressure: In elderly patients with stiff arteries, the "Windkessel" effect is lost. The pressure drops faster, meaning the standard formula might overestimate their true organ perfusion.',
      ],
      tipsHeading: '',
      tips: [],
    },
    verification: {
      heading: 'Summary',
      intro:
        'Use the formula (SBP + 2DBP)/3 for stable patients with normal heart rates. For unstable, tachycardic, or stiff-artery patients, trust the trend more than the absolute number, or place an arterial line for direct measurement.',
      bullets: [],
    },
    faq: {
      heading: 'Advanced FAQs',
      items: [
        {
          question: 'Does arterial stiffness (aging) affect the formula?',
          answer:
            'Yes. Stiff arteries recoil faster, causing pressure to drop more quickly during diastole. This means the "area under the curve" is smaller than the formula predicts. The standard formula often OVER-estimates perfusion in elderly patients.',
        },
        {
          question: 'Why do A-line and Cuff MAPs disagree?',
          answer:
            'The cuff uses the oscillating amplitude to estimate MAP directly (often the most accurate cuff parameter), while the formula calculates it from SBP/DBP. The A-line measures the true integral. Disagreement is expected, especially in non-standard physiology.',
        },
      ],
    },
  },
  cta: {
    calculatorLabel: 'Back to Calculator',
    calculatorHref: '/',
    howToLabel: 'See Calculation Steps',
    howToHref: '/how-to-calculate-map-blood-pressure',
  },
};

export default mapFormulaEn;