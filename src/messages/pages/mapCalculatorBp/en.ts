import type { MapCalculatorBpContent } from "./types";

const faq = [
  {
    question: "What's the fastest way to estimate MAP from BP?",
    answer:
      "Use the mental math shortcut: MAP ≈ DBP + (pulse pressure ÷ 3). For 120/80, pulse pressure is 40. Divide by 3 (≈13) and add to the diastolic value (80 + 13 = 93 mmHg).",
  },
  {
    question: "Is MAP more important than blood pressure?",
    answer:
      "They answer different clinical questions. MAP reflects organ perfusion pressure, whereas systolic/diastolic values guide hypertension diagnosis and cardiac workload assessment. In critical care, MAP is often the priority metric.",
  },
  {
    question: "Can I use automated BP monitors for MAP calculation?",
    answer:
      "Yes. Most oscillometric monitors are accurate and some display MAP automatically. If yours does not, enter the systolic and diastolic values into this calculator to obtain MAP and interpretation.",
  },
  {
    question: "Should I use MAP or systolic BP for sepsis management?",
    answer:
      "Follow MAP. Surviving Sepsis Campaign guidelines target MAP ≥65 mmHg because it correlates better with organ perfusion than systolic pressure alone.",
  },
  {
    question: "What if my patient's MAP calculation seems inaccurate?",
    answer:
      "Confirm accurate BP measurement, verify the numbers were entered correctly, and repeat manually if the result does not match the patient's presentation. Consider arterial line placement if discrepancies persist.",
  },
  {
    question: "Do MAP targets vary by patient population?",
    answer:
      "Yes. Elderly patients with chronic hypertension may need MAP 70-85 mmHg, young adults may tolerate 60-65 mmHg, traumatic brain injury often requires 80-110 mmHg, and stroke protocols may set permissive hypertension goals.",
  },
] as const;

const mapInterpretationTable = [
  {
    bp: "120/80 mmHg",
    formula: "(120 + 160) ÷ 3",
    map: "93 mmHg",
    interpretation: "✅ Normal — Optimal perfusion",
    tone: "positive",
  },
  {
    bp: "110/70 mmHg",
    formula: "(110 + 140) ÷ 3",
    map: "83 mmHg",
    interpretation: "✅ Adequate perfusion",
    tone: "positive",
  },
  {
    bp: "100/60 mmHg",
    formula: "(100 + 120) ÷ 3",
    map: "73 mmHg",
    interpretation: "⚠️ Low-normal — Monitor closely",
    tone: "warning",
  },
  {
    bp: "90/60 mmHg",
    formula: "(90 + 120) ÷ 3",
    map: "70 mmHg",
    interpretation: "⚠️ Borderline — Evaluate perfusion",
    tone: "warning",
  },
  {
    bp: "90/50 mmHg",
    formula: "(90 + 100) ÷ 3",
    map: "63 mmHg",
    interpretation: "🔴 Below sepsis target — Act now",
    tone: "critical",
  },
  {
    bp: "80/50 mmHg",
    formula: "(80 + 100) ÷ 3",
    map: "60 mmHg",
    interpretation: "🔴 Critical threshold — Immediate escalation",
    tone: "critical",
  },
  {
    bp: "130/80 mmHg",
    formula: "(130 + 160) ÷ 3",
    map: "97 mmHg",
    interpretation: "✅ Normal-high — Acceptable",
    tone: "positive",
  },
  {
    bp: "140/90 mmHg",
    formula: "(140 + 180) ÷ 3",
    map: "107 mmHg",
    interpretation: "🟠 Elevated — Stage 2 hypertension",
    tone: "warning",
  },
  {
    bp: "150/95 mmHg",
    formula: "(150 + 190) ÷ 3",
    map: "113 mmHg",
    interpretation: "🟠 High — Cardiovascular risk",
    tone: "warning",
  },
  {
    bp: "160/100 mmHg",
    formula: "(160 + 200) ÷ 3",
    map: "120 mmHg",
    interpretation: "🔴 Very high — Urgent evaluation",
    tone: "critical",
  },
  {
    bp: "180/110 mmHg",
    formula: "(180 + 220) ÷ 3",
    map: "133 mmHg",
    interpretation: "🔴 Hypertensive emergency risk",
    tone: "critical",
  },
] as const;

const contextCards = [
  {
    heading: "Critical Care (ICU/CCU)",
    items: [
      {
        label: "MAP <65 mmHg:",
        body: "Typically requires intervention (fluids/pressors)",
      },
      { label: "MAP 65-80 mmHg:", body: "Target range for most ICU patients" },
      {
        label: "MAP >100 mmHg:",
        body: "Evaluate for hypertension or excessive vasopressor dosing",
      },
    ],
  },
  {
    heading: "Emergency Department",
    items: [
      { label: "MAP <60 mmHg:", body: "Initiate shock workup" },
      {
        label: "MAP 60-70 mmHg:",
        body: "Monitor trends and perfusion markers",
      },
      {
        label: "MAP >130 mmHg:",
        body: "Consider hypertensive emergency evaluation",
      },
    ],
  },
  {
    heading: "Operating Room",
    items: [
      {
        label: "MAP <65 mmHg:",
        body: "Assess depth of anesthesia or hypovolemia",
      },
      {
        label: "MAP 65-100 mmHg:",
        body: "Typical intraoperative target range",
      },
      {
        label: "MAP >100 mmHg:",
        body: "Evaluate for inadequate anesthesia or pain",
      },
    ],
  },
  {
    heading: "Post-Operative Care",
    items: [
      {
        label: "MAP trending down:",
        body: "Possible bleeding or third-spacing",
      },
      { label: "MAP trending up:", body: "Pain control may be inadequate" },
      { label: "MAP stable 70-90 mmHg:", body: "Typical recovery goal" },
    ],
  },
] as const;

const pulsePressureTable = [
  {
    bp: "120/80",
    map: "93 mmHg",
    pulsePressure: "40 mmHg",
    note: "✅ Normal — Healthy cardiac function",
    tone: "positive",
  },
  {
    bp: "130/90",
    map: "103 mmHg",
    pulsePressure: "40 mmHg",
    note: "🟠 Elevated MAP, normal pulse pressure",
    tone: "warning",
  },
  {
    bp: "150/70",
    map: "97 mmHg",
    pulsePressure: "80 mmHg",
    note: "🔴 Wide — Consider aortic regurgitation",
    tone: "critical",
  },
  {
    bp: "100/90",
    map: "93 mmHg",
    pulsePressure: "10 mmHg",
    note: "🔴 Narrow — Evaluate for tamponade or severe heart failure",
    tone: "critical",
  },
] as const;

const pulsePressureNotes = [
  {
    label: "Wide pulse pressure (>60 mmHg):",
    body: "Consider aortic regurgitation, hyperthyroidism, or arterial stiffness.",
  },
  {
    label: "Narrow pulse pressure (<25 mmHg):",
    body: "Evaluate for cardiac tamponade, severe heart failure, or hypovolemia.",
  },
] as const;

const measurementErrors = [
  {
    error: "Cuff too small",
    bpEffect: "Falsely elevated",
    mapEffect: "MAP falsely elevated",
  },
  {
    error: "Arm below heart level",
    bpEffect: "Falsely elevated",
    mapEffect: "MAP falsely elevated",
  },
  {
    error: "Arm above heart level",
    bpEffect: "Falsely low",
    mapEffect: "MAP falsely low",
  },
  {
    error: "Back unsupported",
    bpEffect: "Elevated DBP",
    mapEffect: "MAP increases 2-5 mmHg",
  },
  {
    error: "Talking during measurement",
    bpEffect: "Falsely elevated",
    mapEffect: "MAP elevated 5-10 mmHg",
  },
  {
    error: "Full bladder",
    bpEffect: "+10-15 mmHg",
    mapEffect: "MAP increases 5-7 mmHg",
  },
  {
    error: "Recent caffeine/tobacco",
    bpEffect: "Falsely elevated",
    mapEffect: "MAP elevated 5-8 mmHg",
  },
] as const;

const scenarios = [
  {
    heading: "Sepsis Management",
    scenario: "68-year-old with pneumonia. BP 85/55 mmHg → MAP 65 mmHg.",
    points: [
      "Meets minimum Surviving Sepsis Campaign target.",
      "Review lactate, urine output, mental status.",
      "If perfusion markers are impaired, target MAP 70-75 mmHg.",
    ],
  },
  {
    heading: "Vasopressor Titration",
    scenario: "ICU patient on norepinephrine. BP 92/58 mmHg → MAP 69 mmHg.",
    points: [
      "MAP above goal ≥65 mmHg.",
      "Trend values every 15-30 minutes.",
      "Consider slow wean if stable or rising; maintain if downward trend noted.",
    ],
  },
  {
    heading: "Post-Operative Monitoring",
    scenario:
      "Post-CABG patient. Baseline MAP 85 mmHg. Current BP 95/60 mmHg → MAP 72 mmHg.",
    points: [
      "MAP dropped 15% from baseline.",
      "Investigate bleeding, hypovolemia, or pain control issues.",
      "Assess chest tube output and labs before escalation.",
    ],
  },
] as const;

const trendingExamples = [
  {
    title: "Improving Trend",
    timeline: [
      "Hour 0: 80/50 → MAP 60 mmHg",
      "Hour 2: 90/55 → MAP 67 mmHg",
      "Hour 4: 100/60 → MAP 73 mmHg",
    ],
    summary: "Response to therapy is positive.",
  },
  {
    title: "Deteriorating Trend",
    timeline: [
      "Hour 0: 110/70 → MAP 83 mmHg",
      "Hour 2: 100/65 → MAP 77 mmHg",
      "Hour 4: 90/55 → MAP 67 mmHg",
    ],
    summary: "Investigate underlying cause immediately.",
  },
] as const;

const calculatorResources = [
  {
    label: "Main MAP Calculator",
    description: "— Comprehensive MAP education and core calculator.",
    href: "/",
  },
  {
    label: "Blood Pressure & MAP Education",
    description: "— Comprehensive MAP education.",
    href: "/how-to-calculate-map-blood-pressure",
  },
  {
    label: "MAP for Nurses",
    description: "— Nursing-focused reference.",
    href: "/map-calculation-nursing",
  },
] as const;

const guidelineLinks = [
  {
    label: "Surviving Sepsis Campaign 2021 Guidelines",
    href: "https://www.sccm.org/SurvivingSepsisCampaign/Guidelines",
  },
  {
    label: "ACC/AHA Hypertension Guidelines 2017",
    href: "https://www.ahajournals.org",
  },
] as const;

const futureAssets = [
  "Infographic: BP Measurement Checklist (downloadable PDF)",
  "Comparison chart: MAP vs Pulse Pressure interpretation",
  "Clinician cheat sheet: Quick MAP targets by condition",
] as const;

const mapCalculatorBpEn: MapCalculatorBpContent = {
  metadata: {
    title:
      "MAP Calculator BP: Calculate Mean Arterial Pressure from Blood Pressure | mapcalculator.org",
    description:
      "Quick MAP calculator from blood pressure readings. Convert systolic and diastolic BP to MAP instantly, review the mean arterial pressure formula, and see how to calculate MAP from blood pressure step-by-step.",
    keywords: [
      "map calculator bp",
      "BP to MAP",
      "blood pressure MAP calculator",
      "map blood pressure",
      "calculate MAP from BP",
      "how to calculate MAP",
      "mean arterial pressure formula",
    ],
    openGraphTitle: "MAP Calculator BP - Convert Blood Pressure to MAP",
    openGraphDescription:
      "Fast MAP calculation from blood pressure readings for clinical use",
    heroTitle: "MAP Calculator from Blood Pressure Readings",
    heroDescription:
      "Convert systolic and diastolic blood pressure readings to Mean Arterial Pressure instantly. Designed for busy clinicians who need fast, accurate BP-to-MAP conversions with interpretation.",
  },
  schema: {
    medicalWebPage: {
      name: "MAP Calculator from Blood Pressure Readings",
      description:
        "Convert systolic and diastolic blood pressure readings to Mean Arterial Pressure with clinical interpretation and practical examples.",
      aboutDescription:
        "Clinical calculation derived from systolic and diastolic blood pressure values.",
      audienceLabel:
        "Physicians, nurses, and paramedics using MAP at the bedside.",
      audienceTypes: ["Physician", "Nurse", "Paramedic"],
    },
    faq,
    breadcrumbs: {
      home: "Home",
      page: "MAP Calculator BP",
    },
  },
  hero: {
    title: "MAP Calculator from Blood Pressure Readings",
    description:
      "Convert systolic and diastolic blood pressure readings to Mean Arterial Pressure instantly. Designed for busy clinicians who need fast, accurate BP-to-MAP conversions with interpretation.",
    snapshotHeading: "Clinician Snapshot",
    snapshotItems: [
      {
        label: "Primary Use",
        value: "Rapid BP to MAP conversion with actionable interpretation",
      },
      {
        label: "Ideal For",
        value: "ICU rounds, sepsis bundles, perioperative monitoring",
      },
      {
        label: "Time to Result",
        value: "Seconds — Quick-select most common BP combinations",
      },
    ],
  },
  sections: {
    whyCalculate: {
      heading: "Why Calculate MAP from Blood Pressure?",
      intro:
        "Blood pressure is the most frequently captured vital sign in healthcare. Every exam room and bedside monitor automatically charts systolic and diastolic values. Yet these numbers only describe arterial pressure at the peak and trough of each cardiac cycle. Mean Arterial Pressure (MAP) translates those readings into the average driving pressure that actually perfuses organs.",
      clinicalReality: {
        heading: "The Clinical Reality",
        intro:
          "Automated monitors rarely display MAP by default, but critical care pathways depend on it. Across hospital settings, MAP informs:",
        items: [
          {
            label: "Sepsis protocols:",
            body: "Maintain MAP ≥65 mmHg to meet Surviving Sepsis Campaign goals.",
          },
          {
            label: "ICU monitoring:",
            body: "Trend organ perfusion in shock, post-op, and vasopressor-dependent patients.",
          },
          {
            label: "Vasopressor titration:",
            body: "Adjust norepinephrine, vasopressin, or phenylephrine based on MAP targets.",
          },
          {
            label: "Post-operative recovery:",
            body: "Detect subtle perfusion drops before symptoms appear.",
          },
        ],
      },
      usage: {
        heading: "When You Need This Tool",
        intro:
          "MAP calculation bridges the gap between recorded vitals and protocol-driven targets. Use it when you need to know immediately:",
        questions: [
          "Is perfusion pressure adequate for this patient's condition?",
          "Should I intervene with fluids, pressors, or antihypertensives?",
          "What is the MAP trend over the last few hours?",
          "Do I need to adjust drip rates or escalate care?",
        ],
        outro:
          "Because non-invasive devices cannot directly measure MAP, this calculation is a core competency for every clinician managing acutely ill patients.",
      },
    },
    bpToMap: {
      heading: "How Blood Pressure Converts to MAP",
      formulaBadge: "The Formula Explained",
      formula: "MAP = (Systolic BP + 2 × Diastolic BP) ÷ 3",
      formulaExplanation:
        "The heart spends roughly one-third of each cardiac cycle in systole (contraction) and two-thirds in diastole (relaxation). Because diastole lasts longer, diastolic pressure weighs more heavily in the mean arterial calculation. The formula reflects this physiological ratio.",
      simpleAverageIntro:
        "Using a simple average ignores the time weighting inherent to the cardiac cycle. For example, blood pressure 120/80 mmHg produces:",
      simpleAveragePoints: [
        "Simple average: (120 + 80) ÷ 2 = 100 mmHg",
        "Weighted MAP formula: (120 + 160) ÷ 3 = 93 mmHg",
      ],
      simpleAverageConclusion:
        "That seven point difference is clinically meaningful. With hypotensive values, the gap can determine whether perfusion is acceptable or if escalation is required.",
      alternative: {
        heading: "Alternative Formula for Invasive Monitoring",
        intro:
          "Arterial lines output MAP directly, but clinicians often verify calculations mentally:",
        formula: "MAP = Diastolic BP + (Systolic BP − Diastolic BP) ÷ 3",
        explanation:
          "This variant uses pulse pressure and is often faster when doing bedside math. Both equations yield identical results because they are algebraically equivalent.",
      },
      accuracy: {
        heading: "Accuracy Considerations",
        intro:
          "Non-invasive BP derived MAPs are reliable for most adult patients, but be cautious in scenarios where the systolic–diastolic timing is altered:",
        items: [
          "Severe aortic regurgitation producing wide pulse pressures",
          "Extreme tachycardia shortening diastolic time",
          "Atrial fibrillation with rapid ventricular response",
          "Advanced peripheral vascular disease or non-compressible arteries",
        ],
        note: "In these cases, prioritize direct arterial monitoring when available.",
      },
    },
    referenceGuide: {
      heading: "BP to MAP Reference Guide",
      intro:
        "Use these ready-to-reference tables for rapid interpretation at the bedside. Values align with common hospital protocols and highlight when to escalate.",
      mapTableHeaders: {
        bp: "Blood Pressure",
        formula: "MAP Calculation",
        map: "MAP Result",
        interpretation: "Clinical Interpretation",
      },
      mapTable: mapInterpretationTable,
      contextHeading: "MAP Interpretation by Clinical Context",
      contextCards,
      pulsePressureHeading: "Pulse Pressure Considerations",
      pulsePressureIntro:
        "MAP trends must be interpreted alongside pulse pressure (SBP − DBP). Identical MAP values can signal very different hemodynamics depending on pulse pressure width.",
      pulsePressureHeaders: {
        bp: "BP Reading",
        map: "MAP",
        pulsePressure: "Pulse Pressure",
        note: "Clinical Note",
      },
      pulsePressureTable,
      pulsePressureNotes,
    },
    measurement: {
      heading: "Measuring Blood Pressure Correctly for Accurate MAP",
      intro:
        "MAP accuracy depends on blood pressure measurement quality. Use this checklist to prevent avoidable errors.",
      preparation: {
        heading: "Patient Preparation (5 minutes)",
        steps: [
          "Seat the patient with back supported and feet uncrossed.",
          "Support the arm at heart level on a table or pillow.",
          "Ask the patient to empty their bladder if full.",
          "Ensure no caffeine, exercise, or nicotine within 30 minutes.",
          "Have the patient rest quietly for five minutes before measurement.",
          "Discourage talking or phone use during the reading.",
        ],
      },
      cuff: {
        heading: "Cuff Selection and Placement",
        bullets: [
          "Choose a cuff with bladder width 40% of arm circumference.",
          "Position cuff 2-3 cm above the antecubital fossa.",
          "Align tubing with the brachial artery.",
          "Ensure a snug but not painful fit — two fingers under the cuff.",
        ],
        processHeading: "Measurement Process",
        steps: [
          "Palpate radial pulse while inflating to estimate systolic pressure.",
          "Inflate 20-30 mmHg above pulse disappearance.",
          "Deflate at 2-3 mmHg per second.",
          "Record the first Korotkoff sound (systolic).",
          "Record the disappearance of sounds (diastolic).",
          "Repeat after 1-2 minutes and average the results.",
        ],
      },
      errorsHeading: "Common Errors and MAP Impact",
      errorTableHeaders: {
        error: "Error",
        bpEffect: "Effect on BP",
        mapEffect: "Effect on MAP",
      },
      errorsTable: measurementErrors,
      whenInaccurate: {
        heading: "When BP-Derived MAP May Be Inaccurate",
        bullets: [
          "MAP <50 mmHg or vasopressor-dependent shock",
          "Morbid obesity when appropriately sized cuff is unavailable",
          "Severe arrhythmias (atrial fibrillation with RVR)",
          "High-risk intraoperative cases requiring beat-to-beat monitoring",
          "Severe peripheral vascular disease or non-compressible arteries",
        ],
        note: "Escalate to arterial line monitoring when accuracy is mission critical.",
      },
    },
    decisionMaking: {
      heading: "Clinical Decision Making with BP-Derived MAP",
      intro:
        "MAP values are only meaningful when paired with clinical context. Use these scenarios to translate numbers into actions.",
      scenarioLabel: "Scenario:",
      scenarios,
      trending: {
        heading: "Trending Over Time Matters",
        intro:
          "Document MAP trends rather than isolated readings. Improvement or deterioration over hours provides the most meaningful insight into perfusion status.",
        examples: trendingExamples,
        reminders: [],
      },
    },
    faq: {
      heading: "Frequently Asked Questions: BP to MAP Conversion",
      items: faq,
    },
    resources: {
      heading: "Related Tools & Resources",
      calculatorHeading: "Related Calculations",
      calculatorItems: calculatorResources,
      guidelinesHeading: "Clinical Guidelines Reference",
      guidelineLinks,
      futureAssetsHeading: "Visual Assets in Development",
      futureAssets,
      actions: {
        backToTop: "Back to Top",
        print: "Print This Page (Cmd/Ctrl + P)",
        share: "Share via Email",
      },
    },
  },
};

export default mapCalculatorBpEn;
