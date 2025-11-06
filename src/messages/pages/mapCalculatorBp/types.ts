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
  points: ReadonlyArray<string>;
};

export type TrendingExample = {
  title: string;
  timeline: ReadonlyArray<string>;
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
    keywords: readonly string[];
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
      audienceTypes: readonly string[];
    };
    faq: ReadonlyArray<{ question: string; answer: string }>;
    breadcrumbs: { home: string; page: string };
  };
  hero: {
    title: string;
    description: string;
    snapshotHeading: string;
    snapshotItems: ReadonlyArray<SnapshotItem>;
  };
  sections: {
    whyCalculate: {
      heading: string;
      intro: string;
      clinicalReality: {
        heading: string;
        intro: string;
        items: ReadonlyArray<ListItem>;
      };
      usage: {
        heading: string;
        intro: string;
        questions: ReadonlyArray<string>;
        outro: string;
      };
    };
    bpToMap: {
      heading: string;
      formulaBadge: string;
      formula: string;
      formulaExplanation: string;
      simpleAverageIntro: string;
      simpleAveragePoints: ReadonlyArray<string>;
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
        items: ReadonlyArray<string>;
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
      mapTable: ReadonlyArray<MapInterpretationRow>;
      contextHeading: string;
      contextCards: ReadonlyArray<{ heading: string; items: ReadonlyArray<ListItem> }>;
      pulsePressureHeading: string;
      pulsePressureIntro: string;
      pulsePressureHeaders: {
        bp: string;
        map: string;
        pulsePressure: string;
        note: string;
      };
      pulsePressureTable: ReadonlyArray<PulsePressureRow>;
      pulsePressureNotes: ReadonlyArray<ListItem>;
    };
    measurement: {
      heading: string;
      intro: string;
      preparation: {
        heading: string;
        steps: ReadonlyArray<string>;
      };
      cuff: {
        heading: string;
        bullets: ReadonlyArray<string>;
        processHeading: string;
        steps: ReadonlyArray<string>;
      };
      errorsHeading: string;
      errorTableHeaders: {
        error: string;
        bpEffect: string;
        mapEffect: string;
      };
      errorsTable: ReadonlyArray<ErrorRow>;
      whenInaccurate: {
        heading: string;
        bullets: ReadonlyArray<string>;
        note: string;
      };
    };
    decisionMaking: {
      heading: string;
      intro: string;
      scenarioLabel: string;
      scenarios: ReadonlyArray<ScenarioCard>;
      trending: {
        heading: string;
        intro: string;
        examples: ReadonlyArray<TrendingExample>;
        reminders: ReadonlyArray<string>;
      };
    };
    faq: {
      heading: string;
      items: ReadonlyArray<{ question: string; answer: string }>;
    };
    resources: {
      heading: string;
      calculatorHeading: string;
      calculatorItems: ReadonlyArray<ResourceItem>;
      guidelinesHeading: string;
      guidelineLinks: ReadonlyArray<GuidelineLink>;
      futureAssetsHeading: string;
      futureAssets: ReadonlyArray<string>;
      actions: {
        backToTop: string;
        print: string;
        share: string;
      };
    };
  };
};

export type MapCalculatorBpContentMap = Record<Locale, MapCalculatorBpContent>;
