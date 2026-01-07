const PulsePressureVsMapEn = {
  meta: {
    title: "Pulse Pressure vs. MAP: Which Vital Sign Tells You More? (2025 Guide)",
    description:
      "MAP measures perfusion; Pulse Pressure measures stiffness and stroke volume. Learn when to track each, why wide pulse pressure matters, and how to interpret discordant values.",
    keywords: [
      "pulse pressure vs map",
      "difference between map and pulse pressure",
      "wide pulse pressure causes",
      "narrow pulse pressure meaning",
      "mean arterial pressure vs pulse pressure",
      "clinical hemodynamics guide",
    ],
    openGraphTitle: "Pulse Pressure vs. MAP: A Clinical Comparison",
    openGraphDescription:
      "Stop confusing these two vital signs. MAP is for flow; Pulse Pressure is for stroke volume. Here is how to use both.",
    heroTitle: "Pulse Pressure vs. MAP: Which Vital Sign Tells You More?",
    heroDescription:
      "They are both calculated from systolic and diastolic pressure, but they tell completely different physiological stories. Learn when to trust MAP, when to watch Pulse Pressure, and what to do when they disagree.",
    authorLabel: "Based on Clinical Guidelines",
    lastUpdated: "January 2025",
  },
  schema: {
    article: {
      headline: "Pulse Pressure vs. MAP: Which Vital Sign Tells You More?",
      description:
        "Comprehensive comparison of Mean Arterial Pressure (MAP) and Pulse Pressure (PP) for clinicians, covering physiology, calculation, and clinical interpretation.",
      author: "mapcalculator.org Editorial Team",
      datePublished: "2025-01-08",
    },
    faq: [
      {
        question: "What is the main difference between MAP and Pulse Pressure?",
        answer:
          "MAP (Mean Arterial Pressure) represents the steady flow pressure delivering blood to organs. Pulse Pressure (SBP - DBP) reflects the 'force' of each beat, indicating stroke volume and arterial stiffness.",
      },
      {
        question: "Why is a wide pulse pressure dangerous?",
        answer:
          "Wide pulse pressure (>60 mmHg) often indicates arterial stiffness (aging) or aortic regurgitation. It is an independent predictor of cardiovascular mortality even if MAP is normal.",
      },
      {
        question: "Can you have a normal MAP but low Pulse Pressure?",
        answer:
          "Yes. For example, BP 100/85 gives a MAP of 90 mmHg (normal), but a Pulse Pressure of only 15 mmHg (very narrow). This suggests severe vasoconstriction, tamponade, or cardiogenic shock despite the 'normal' MAP.",
      },
    ],
  },
  sections: {
    intro: {
      title: "The Tale of Two Pressures",
      content:
        "In high-pressure clinical environments, we often obsess over Mean Arterial Pressure (MAP) because it is the primary target for organ perfusion. If MAP drops <65 mmHg, kidneys fail. But Pulse Pressure (PP)—the simple difference between systolic and diastolic values—is often ignored, despite being a superior marker for arterial stiffness and stroke volume efficiency.",
    },
    comparison: {
      title: "Head-to-Head: MAP vs. PP",
      mapTitle: "Mean Arterial Pressure (MAP)",
      mapFormula: "(SBP + 2×DBP) ÷ 3",
      mapRole: "The 'Perfusion' Metric",
      mapDescription:
        "Think of MAP as the continuous driving pressure that pushes blood through capillaries. Organs like the brain and kidneys don't 'feel' the pulses as much as they feel this steady average pressure.",
      ppTitle: "Pulse Pressure (PP)",
      ppFormula: "SBP - DBP",
      ppRole: "The 'Pulsatility' Metric",
      ppDescription:
        "Think of PP as the shock wave of each heartbeat. It tells you about the condition of the pipes (stiffness) and the volume of the pump (stroke volume).",
    },
    clinicalScenarios: {
      title: "When They Disagree: Clinical Scenarios",
      intro: "The most dangerous patients are often those with 'Normal' MAP but abnormal Pulse Pressure.",
      scenario1Title: "1. The Narrow Pulse Pressure (The Squeeze)",
      scenario1Vitals: "BP 110/95 (MAP 100 mmHg, PP 15 mmHg)",
      scenario1Analysis:
        "The MAP of 100 looks great. But the Pulse Pressure is tiny (15 mmHg). This patient is intensely vasoconstricted (clamped down). They might be hypovolemic or in early cardiogenic shock, compensating with high systemic vascular resistance. If you only look at MAP, you miss the crash coming next.",
      scenario2Title: "2. The Wide Pulse Pressure (The Stiff Pipe)",
      scenario2Vitals: "BP 160/60 (MAP 93 mmHg, PP 100 mmHg)",
      scenario2Analysis:
        "The MAP is normal. But the Pulse Pressure is massive (100 mmHg). This is classic 'Isolated Systolic Hypertension' seen in elderly patients with stiff arteries. It puts immense strain on the left ventricle and increases stroke risk, even if perfusion (MAP) is adequate.",
      scenario3Title: "3. The Sepsis Drift",
      scenario3Vitals: "BP 90/40 (MAP 57 mmHg, PP 50 mmHg)",
      scenario3Analysis:
        "Here, both are concerning. The wide-ish pulse pressure relative to the low diastolic suggests vasodilation (warm shock). The tank is full (decent stroke volume), but the pipes are too loose (low SVR).",
    },
    actionPlan: {
      title: "Bedside Action Plan",
      step1: "1. Check MAP First",
      step1Desc: "Is the patient perfusing? If MAP <65, fix hypotension immediately (Fluids? Pressors?).",
      step2: "2. Check Pulse Pressure Next",
      step2Desc: "If MAP is safe, look at PP. Is it <25% of systolic BP? (Narrow). Is it >60 mmHg? (Wide).",
      step3: "3. Triangulate",
      step3Desc: "Narrow PP? Think Volume or Pump failure. Wide PP? Think Stiffness or Runoff (Regurgitation).",
    },
  },
  cta: {
    calculator: "Calculate MAP & PP Now",
    back: "Back to Articles",
  },
} as const;

export default PulsePressureVsMapEn;
