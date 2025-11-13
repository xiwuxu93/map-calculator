const MapTargetsEn = {
  meta: {
    title: "MAP Targets by Condition: When 65 Isn’t Enough (2025)",
    description:
      "Evidence-based MAP targets by condition (sepsis, TBI, stroke, post–cardiac arrest, anesthesia). Learn when MAP ≥65 is appropriate, when to individualize, and how to balance organ perfusion and harm.",
    keywords: [
      "MAP targets",
      "MAP target sepsis 65",
      "TBI MAP target",
      "stroke MAP target",
      "post cardiac arrest MAP",
      "how to individualize MAP",
      "cerebral perfusion pressure CPP",
      "mean arterial pressure target",
      "map blood pressure calculator",
      "bp to map",
    ],
    openGraphTitle: "MAP Targets by Condition — Evidence and Practical Guide",
    openGraphDescription:
      "Sepsis, TBI, stroke, and perioperative MAP goals with a bedside algorithm to individualize safely.",
    heroTitle: "MAP Targets by Condition: Evidence, Nuance, and a Bedside Algorithm",
    heroDescription:
      "MAP ≥65 mmHg is a starting point, not a finish line. Learn condition-specific goals and how to tailor targets to each patient.",
    quickAnswerLabel: "Quick Summary",
    readingTime: "Reading Time",
    skillLevel: "Audience",
    lastUpdated: "November 2025",
  },
  schema: {
    article: {
      headline: "MAP Targets by Condition: When 65 Isn’t Enough",
      description:
        "Condition-specific MAP targets with evidence context, risks of overtreatment, and practical steps to individualize goals.",
    },
    faq: [
      {
        question: "Is MAP ≥65 always correct?",
        answer:
          "No. 65 mmHg is a common initial target (e.g., sepsis bundles) but should be individualized using perfusion markers, comorbidities, and condition-specific evidence.",
      },
      {
        question: "What is the MAP target in traumatic brain injury (TBI)?",
        answer:
          "Target cerebral perfusion pressure (CPP) = MAP − ICP. Many protocols aim CPP 60–70 mmHg, which often requires MAP 80–110 depending on ICP and autoregulation.",
      },
      {
        question: "What MAP for ischemic stroke?",
        answer:
          "Early after ischemic stroke, permissive hypertension is common to support penumbra perfusion. Protocols may tolerate elevated MAP; follow stroke guidelines and neuro team direction.",
      },
      {
        question: "When should I use an arterial line for MAP?",
        answer:
          "Use an arterial line for shock on vasopressors, rapid hemodynamic changes, severe hypotension, or neuro cases where CPP targeting demands high accuracy.",
      },
    ],
  },
  // Hero quick list
  t0001: "Clinically Applied Guide",
  t0002: "Key idea:",
  t0003:
    "MAP ≥65 mmHg is a safe starting point for many adults, but condition, comorbidities, and perfusion markers must guide the actual target.",
  t0004: "Use perfusion markers to individualize (mentation, UOP, lactate, skin).",
  t0005: "8–10 minutes",
  t0006: "Clinicians, ED/ICU/OR, trainees",

  // Sections
  t0010: "Why 65 Is a Starting Point, Not a Rule",
  t0011:
    "In healthy adults, MAP 70–100 mmHg is typical. Protocols often begin with ≥65 mmHg, but this threshold may under‑ or over‑treat depending on age, chronic hypertension, neuro status, and microcirculatory dysfunction.",

  t0020: "Condition-Specific MAP Targets (Evidence‑Informed)",
  t0021: "General adult (stable): 70–100 mmHg; avoid extremes.",
  t0022: "Sepsis: start at ≥65 mmHg; individualize higher if chronic hypertension or signs of hypoperfusion persist. [1]",
  t0023: "Traumatic brain injury (TBI): target CPP 60–70 mmHg → requires MAP ~80–110 depending on ICP. [2]",
  t0024: "Ischemic stroke (early): permissive hypertension per stroke protocols; avoid precipitous MAP drops. [3]",
  t0025: "Post–cardiac arrest: generally ≥65–75 mmHg; align with neuroprognostication and organ support goals. [4]",
  t0026: "Perioperative/OR: individualize by baseline BP, surgical risks, and organ vulnerability (kidney, brain, heart). [5]",
  t0027: "Renal hypoperfusion risk (CKD/elderly): consider slightly higher MAP if signs of AKI or low UOP persist despite resuscitation. [6]",

  t0030: "How to Individualize Safely",
  t0031: "Use a two-part check: (1) Macro targets (MAP) (2) Micro markers (perfusion).",
  t0032: "Micro markers: mentation, UOP ≥0.5 mL/kg/hr, lactate/clearance, skin temp/cap refill, mottling, bedside echo.",
  t0033: "If perfusion is inadequate at MAP 65, step up by 5–10 mmHg and reassess trends, not single numbers.",
  t0034: "Avoid unnecessary hypertension: higher MAP raises myocardial O2 demand and afterload; titrate down once markers improve.",

  t0040: "When Accuracy Matters (Cuff vs. A‑line)",
  t0041: "Prefer A‑line when on vasopressors, in rapid changes, severe hypotension, or neuro cases (CPP targeting).",
  t0042: "Cuff MAP typically within 5–10 mmHg in stable rhythms; confirm if decisions hinge on small differences.",

  t0050: "Bedside Algorithm",
  t0051: "1) Start: set MAP ≥65 (unless neuro indications).",
  t0052: "2) Check perfusion markers and baseline BP history.",
  t0053: "3) If markers poor → raise target by 5–10 and treat cause (fluids/pressors).",
  t0054: "4) If neuro/TBI → set target via CPP = MAP − ICP; involve neuro team.",
  t0055: "5) Monitor trends; de‑escalate as perfusion normalizes to avoid harm.",

  t0060: "FAQs",
  t0061: "Is higher always better?",
  t0062: "No. Excessive MAP can worsen myocardial ischemia, afterload, and bleeding risk. Use the lowest MAP that maintains adequate organ perfusion.",
  t0063: "Do chronic hypertensive patients need higher MAP?",
  t0064: "Often yes, especially for brain and kidney perfusion; raise cautiously and reassess perfusion markers.",
  t0065: "What if lactate stays high despite MAP ≥65?",
  t0066: "Reassess volume status, source control, cardiac output, and microcirculation; MAP alone may be insufficient.",
  
  // References
  refsHeading: "References",
  refs: [
    {
      label: "Surviving Sepsis Campaign 2021",
      text:
        "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: 2021 International Guidelines for Management of Sepsis and Septic Shock. Intensive Care Med. 2021;47:1181–1247. doi:10.1007/s00134-021-06506-y",
      url: "https://link.springer.com/article/10.1007/s00134-021-06506-y",
    },
    {
      label: "Severe TBI Guidelines (CPP)",
      text:
        "Carney N, Totten AM, O’Reilly C, et al. Guidelines for the Management of Severe Traumatic Brain Injury, Fourth Edition. Neurosurgery. 2016;80(1):6–15. doi:10.1227/NEU.0000000000001432",
      url: "https://doi.org/10.1227/NEU.0000000000001432",
    },
    {
      label: "Acute Ischemic Stroke Guidelines",
      text:
        "Powers WJ, Rabinstein AA, Ackerson T, et al. 2019 AHA/ASA Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke. 2019;50:e344–e418. doi:10.1161/STR.0000000000000211",
      url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000211",
    },
    {
      label: "Post–Cardiac Arrest Care",
      text:
        "Panchal AR, Bartos JA, Cabañas JG, et al. 2020 American Heart Association Guidelines for CPR and ECC: Post–Cardiac Arrest Care. Circulation. 2020;142(16_suppl_2):S469–S523. doi:10.1161/CIR.0000000000000916",
      url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000916",
    },
    {
      label: "Intraoperative Hypotension & Outcomes",
      text:
        "Salmasi V, Maheshwari K, Yang D, et al. Relationship between Intraoperative Hypotension, Defined by Either Reduction from Baseline or Absolute Thresholds, and Acute Kidney Injury and Myocardial Injury After Noncardiac Surgery. Anesthesiology. 2017;126(1):47–65. doi:10.1097/ALN.0000000000001432",
      url: "https://doi.org/10.1097/ALN.0000000000001432",
    },
    {
      label: "KDIGO AKI Guidelines",
      text:
        "KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney Int Suppl. 2012;2(1):1–138.",
      url: "https://kdigo.org/guidelines/acute-kidney-injury/",
    },
  ],
} as const;

export default MapTargetsEn;
