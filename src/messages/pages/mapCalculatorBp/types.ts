import type { Locale } from '@/lib/i18n';

export type SnapshotItem = {
  label: string;
  value: string;
};

export type ListItem = {
  label?: string;
  body: string;
};

export type InterpretationTone = 'positive' | 'warning' | 'critical' | 'info';

export type MapInterpretationRow = {
  bp: string;
  formula: string;
  map: string;
  interpretation: string;
  tone: InterpretationTone;
};

export type PulsePressureRow = {
  bp: string;
  map: string;
  pulsePressure: string;
  note: string;
  tone: InterpretationTone;
};

export type ErrorRow = {
  error: string;
  bpEffect: string;
  mapEffect: string;
};

export type ScenarioCard = {
  heading: string;
  scenario: string;
  points: string[];
};

export type TrendingExample = {
  title: string;
  timeline: string[];
  summary: string;
};

export type ResourceItem = {
  label: string;
  description: string;
  href?: string;
  comingSoon?: boolean;
};

export type GuidelineLink = {
  label: string;
  href: string;
};

export type MapCalculatorBpContent = {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    openGraphTitle: string;
    openGraphDescription: string;
    heroTitle: string;
    heroDescription: string;
  };
  schema: {
    medicalWebPage: {
      name: string;
      description: string;
      aboutDescription: string;
      audienceLabel: string;
      audienceTypes: string[];
    };
    faq: Array<{ question: string; answer: string }>;
    breadcrumbs: { home: string; page: string };
  };
  hero: {
    title: string;
    description: string;
    snapshotHeading: string;
    snapshotItems: SnapshotItem[];
  };
  sections: {
    whyCalculate: {
      heading: string;
      intro: string;
      clinicalReality: {
        heading: string;
        intro: string;
        items: ListItem[];
      };
      usage: {
        heading: string;
        intro: string;
        questions: string[];
        outro: string;
      };
    };
    bpToMap: {
      heading: string;
      formulaBadge: string;
      formula: string;
      formulaExplanation: string;
      simpleAverageIntro: string;
      simpleAveragePoints: string[];
      simpleAverageConclusion: string;
      alternative: {
        heading: string;
        intro: string;
        formula: string;
        explanation: string;
      };
      accuracy: {
        heading: string;
        intro: string;
        items: string[];
        note: string;
      };
    };
    referenceGuide: {
      heading: string;
      intro: string;
      mapTableHeaders: {
        bp: string;
        formula: string;
        map: string;
        interpretation: string;
      };
      mapTable: MapInterpretationRow[];
      contextHeading: string;
      contextCards: Array<{ heading: string; items: ListItem[] }>;
      pulsePressureHeading: string;
      pulsePressureIntro: string;
      pulsePressureHeaders: {
        bp: string;
        map: string;
        pulsePressure: string;
        note: string;
      };
      pulsePressureTable: PulsePressureRow[];
      pulsePressureNotes: ListItem[];
    };
    measurement: {
      heading: string;
      intro: string;
      preparation: {
        heading: string;
        steps: string[];
      };
      cuff: {
        heading: string;
        bullets: string[];
        processHeading: string;
        steps: string[];
      };
      errorsHeading: string;
      errorTableHeaders: {
        error: string;
        bpEffect: string;
        mapEffect: string;
      };
      errorsTable: ErrorRow[];
      whenInaccurate: {
        heading: string;
        bullets: string[];
        note: string;
      };
    };
    decisionMaking: {
      heading: string;
      intro: string;
      scenarioLabel: string;
      scenarios: ScenarioCard[];
      trending: {
        heading: string;
        intro: string;
        examples: TrendingExample[];
        reminders: string[];
      };
    };
    faq: {
      heading: string;
      items: Array<{ question: string; answer: string }>;
    };
    resources: {
      heading: string;
      calculatorHeading: string;
      calculatorItems: ResourceItem[];
      guidelinesHeading: string;
      guidelineLinks: GuidelineLink[];
      futureAssetsHeading: string;
      futureAssets: string[];
      actions: {
        backToTop: string;
        print: string;
        share: string;
      };
    };
  };
};

export type MapCalculatorBpContentMap = Record<Locale, MapCalculatorBpContent>;
