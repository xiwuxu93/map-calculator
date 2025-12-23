import type { MapFormulaContent } from './types';

const rows = [
  {
    bp: '120/80 mmHg',
    map: '93 mmHg',
    notes: 'Healthy adult example — classic teaching value for a normal MAP.',
  },
  {
    bp: '100/60 mmHg',
    map: '73 mmHg',
    notes: 'Low-normal perfusion in many adults; context and trends matter.',
  },
  {
    bp: '90/60 mmHg',
    map: '70 mmHg',
    notes: 'Borderline MAP — monitor closely, especially in shock or sepsis.',
  },
  {
    bp: '80/50 mmHg',
    map: '60 mmHg',
    notes: 'Critical threshold where many guidelines recommend urgent action.',
  },
  {
    bp: '160/100 mmHg',
    map: '120 mmHg',
    notes: 'Markedly elevated MAP with increased risk of hypertensive injury.',
  },
] as const;

const mapFormulaEn: MapFormulaContent = {
  metadata: {
    title:
      'MAP Formula: How to Calculate Mean Arterial Pressure (MAP) Step by Step',
    description:
      'Learn the MAP formula for mean arterial pressure, see worked MAP blood pressure examples, and understand when to use MAP instead of systolic blood pressure alone.',
    keywords: [
      'map formula',
      'map equation',
      'map calculation formula',
      'mean arterial pressure formula',
      'mean arterial pressure calculation',
      'map formula blood pressure',
      'map equation bp',
      'how is map calculated',
      'mean arterial pressure map calculation',
    ],
    openGraphTitle:
      'MAP Formula: How to Calculate Mean Arterial Pressure (MAP)',
    openGraphDescription:
      'Understand the MAP formula, why it weights diastolic pressure, and how to calculate mean arterial pressure from blood pressure with worked examples.',
    heroTitle: 'MAP Formula for Mean Arterial Pressure',
    heroDescription:
      'Review the standard MAP formula, understand why it works, and practice calculating mean arterial pressure from common blood pressure readings.',
  },
  schema: {
    article: {
      headline:
        'MAP Formula: How to Calculate Mean Arterial Pressure from Blood Pressure',
      description:
        'A focused guide to the mean arterial pressure (MAP) formula, including physiology, examples, and practical calculation tips for clinicians.',
    },
    faq: [
      {
        question: 'What is the formula for MAP?',
        answer:
          'The standard formula for mean arterial pressure (MAP) is MAP = (SBP + 2 × DBP) ÷ 3, where SBP is systolic blood pressure and DBP is diastolic blood pressure.',
      },
      {
        question: 'Why does the MAP formula double the diastolic value?',
        answer:
          'The heart spends roughly twice as long in diastole as in systole. Doubling the diastolic value before averaging better reflects the true average driving pressure across the cardiac cycle.',
      },
      {
        question: 'Is MAP just the simple average of systolic and diastolic pressure?',
        answer:
          'No. A simple average like (SBP + DBP) ÷ 2 ignores the longer diastolic phase and typically overestimates perfusion pressure, especially in hypotensive patients.',
      },
      {
        question: 'When should I calculate MAP from blood pressure readings?',
        answer:
          'Calculate MAP when protocols specify MAP targets (for example sepsis, shock, neurocritical care) or when you need a single perfusion pressure value to share across the team.',
      },
    ],
    breadcrumbs: {
      home: 'Home',
      page: 'MAP Formula',
    },
  },
  hero: {
    label: 'MAP Formula Guide',
    readingTimeLabel: 'Reading Time',
    skillLevelLabel: 'Skill Level',
    lastUpdatedLabel: 'Last Updated',
    readingTime: '7 minutes',
    skillLevel: 'All healthcare professionals',
    lastUpdated: 'January 2025',
  },
  sections: {
    overview: {
      heading: 'Standard MAP Formula',
      intro:
        'Mean arterial pressure (MAP) represents the average pressure driving blood through the arterial tree during a single cardiac cycle. Clinically, it is often the primary perfusion target in sepsis, shock, and anesthesia protocols.',
      formulaLabel: 'Standard equation',
      standardFormula: 'MAP = (Systolic BP + 2 × Diastolic BP) ÷ 3',
      keyPoint:
        'Think of MAP as a time-weighted average: diastole counts roughly twice as much as systole because it occupies more of each cardiac cycle.',
    },
    physiology: {
      heading: 'Why the MAP Formula Works',
      intro:
        'The MAP formula is more than a memorized equation. It encodes how long the arterial tree spends at systolic vs diastolic pressure over each heartbeat.',
      systoleVsDiastoleHeading: 'Systole vs diastole in the cardiac cycle',
      systoleVsDiastoleBody:
        'In a normal heart rate range, the heart spends about one-third of each cardiac cycle in systole (ejection) and two-thirds in diastole (relaxation and filling). Because organs experience diastolic pressure for longer, diastolic blood pressure contributes more to the true average arterial pressure.',
      simpleAverageHeading: 'Why simple averages are misleading',
      simpleAverageIntro:
        'If you simply average systolic and diastolic values, you act as if the heart spends equal time at both pressures.',
      simpleAverageFormulaWrong:
        'For a blood pressure of 120/80 mmHg, a simple average gives (120 + 80) ÷ 2 = 100 mmHg — higher than the true mean arterial pressure.',
      weightedFormulaHeading: 'Weighted formula reflects real timing',
      weightedFormulaBody:
        'Using the weighted MAP formula for 120/80 mmHg — (120 + 2 × 80) ÷ 3 — yields 93 mmHg, which better matches invasive measurements and the physiologic time spent in diastole.',
    },
    examples: {
      heading: 'MAP Formula Examples',
      intro:
        'These examples use the standard MAP formula to convert common blood pressure readings into mean arterial pressure values you can use at the bedside.',
      tableHeaders: {
        bloodPressure: 'Blood pressure (SBP/DBP)',
        map: 'MAP (calculated)',
        notes: 'Clinical interpretation',
      },
      rows,
      sbpDbpNote:
        'Always make sure systolic and diastolic readings come from the same measurement and are recorded in mmHg before applying the MAP formula.',
    },
    practice: {
      heading: 'How to Use the MAP Formula in Practice',
      intro:
        'Once you know the formula, the goal is to be quick and consistent so you can apply MAP targets in real clinical workflows.',
      stepsHeading: 'Step-by-step calculation',
      steps: [
        'Record systolic (SBP) and diastolic (DBP) blood pressure from a reliable cuff or arterial line.',
        'Double the diastolic value: 2 × DBP.',
        'Add the systolic value: SBP + (2 × DBP).',
        'Divide the total by 3 to obtain MAP.',
        'Compare the MAP to your protocol target (for example ≥65 mmHg in sepsis) and the patient’s baseline.',
      ],
      tipsHeading: 'Mental math shortcuts',
      tips: [
        'Remember the pulse pressure version: MAP ≈ DBP + (pulse pressure ÷ 3), where pulse pressure = SBP − DBP.',
        'Round intermediate numbers to keep mental math fast while staying within a few mmHg of the exact result.',
        'Practice on stable patients first so the process feels automatic during emergencies.',
      ],
    },
    verification: {
      heading: 'When the Formula May Be Unreliable',
      intro:
        'The standard MAP formula assumes a typical systole-to-diastole timing. In some situations, invasive monitoring or expert review is safer than relying on cuff-derived MAP alone.',
      bullets: [
        'Extreme tachycardia or bradycardia that dramatically changes diastolic filling time.',
        'Significant valvular disease such as aortic regurgitation, where diastolic pressure may fall rapidly.',
        'Very low perfusion states where noninvasive cuffs struggle to produce accurate readings.',
        'Any time calculated MAP does not match the patient’s clinical presentation or other perfusion markers.',
      ],
    },
    faq: {
      heading: 'MAP Formula FAQs',
      items: [
        {
          question: 'Is the MAP formula the same for all adults?',
          answer:
            'The algebraic formula is the same, but the MAP target range varies by condition. For example, sepsis protocols often start at MAP ≥65 mmHg, while some neurocritical care pathways aim higher.',
        },
        {
          question: 'Can I rely on cuff-derived MAP instead of an arterial line?',
          answer:
            'In stable patients, noninvasive MAP is often close enough for decision-making. In unstable, critically ill patients, consider invasive monitoring when precision is critical.',
        },
        {
          question: 'Do I need to recalculate MAP if heart rate changes?',
          answer:
            'Small heart rate changes do not require adjusting the formula. Large shifts (severe tachycardia or bradycardia) can change the systole/diastole ratio and may warrant invasive monitoring.',
        },
      ],
    },
  },
  cta: {
    calculatorLabel: 'Open the MAP Calculator',
    calculatorHref: '/',
    howToLabel: 'Read the step-by-step MAP guide',
    howToHref: '/how-to-calculate-map-blood-pressure',
  },
};

export default mapFormulaEn;

