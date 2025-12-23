import type { Locale } from '@/lib/i18n';

export type MapFormulaContent = {
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
    article: {
      headline: string;
      description: string;
    };
    faq: ReadonlyArray<{
      question: string;
      answer: string;
    }>;
    breadcrumbs: {
      home: string;
      page: string;
    };
  };
  hero: {
    label: string;
    readingTimeLabel: string;
    skillLevelLabel: string;
    lastUpdatedLabel: string;
    readingTime: string;
    skillLevel: string;
    lastUpdated: string;
  };
  sections: {
    overview: {
      heading: string;
      intro: string;
      formulaLabel: string;
      standardFormula: string;
      keyPoint: string;
    };
    physiology: {
      heading: string;
      intro: string;
      systoleVsDiastoleHeading: string;
      systoleVsDiastoleBody: string;
      simpleAverageHeading: string;
      simpleAverageIntro: string;
      simpleAverageFormulaWrong: string;
      weightedFormulaHeading: string;
      weightedFormulaBody: string;
    };
    examples: {
      heading: string;
      intro: string;
      tableHeaders: {
        bloodPressure: string;
        map: string;
        notes: string;
      };
      rows: ReadonlyArray<{
        bp: string;
        map: string;
        notes: string;
      }>;
      sbpDbpNote: string;
    };
    practice: {
      heading: string;
      intro: string;
      stepsHeading: string;
      steps: ReadonlyArray<string>;
      tipsHeading: string;
      tips: ReadonlyArray<string>;
    };
    verification: {
      heading: string;
      intro: string;
      bullets: ReadonlyArray<string>;
    };
    faq: {
      heading: string;
      items: ReadonlyArray<{
        question: string;
        answer: string;
      }>;
    };
  };
  cta: {
    calculatorLabel: string;
    calculatorHref: string;
    howToLabel: string;
    howToHref: string;
  };
};

export type MapFormulaContentMap = Record<Locale, MapFormulaContent>;

