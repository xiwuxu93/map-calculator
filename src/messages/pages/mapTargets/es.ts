const MapTargetsEs = {
  meta: {
    title: "Objetivos de PAM por condición: cuando 65 no basta (2025)",
    description:
      "Objetivos de PAM basados en evidencia por condición (sepsis, TCE, ictus, posparada cardiaca, anestesia). Cuándo es adecuado ≥65, cuándo individualizar y cómo equilibrar perfusión y daño.",
    keywords: [
      "objetivos de PAM",
      "PAM sepsis 65",
      "objetivo de PAM TCE",
      "objetivo de PAM ictus",
      "PAM posparada cardiaca",
      "cómo individualizar la PAM",
      "presión de perfusión cerebral CPP",
      "objetivo de presión arterial media",
      "calculadora PAM PA",
      "PA a PAM",
    ],
    openGraphTitle: "Objetivos de PAM por condición — Guía práctica con evidencia",
    openGraphDescription:
      "Metas de PAM en sepsis, TCE, ictus y perioperatorio con un algoritmo para individualizar en el punto de atención.",
    heroTitle: "Objetivos de PAM por condición: evidencia, matices y algoritmo al pie de cama",
    heroDescription:
      "PAM ≥65 mmHg es el punto de partida, no la meta final. Aprenda objetivos por condición y cómo adaptar al paciente.",
    quickAnswerLabel: "Resumen rápido",
    readingTime: "Tiempo de lectura",
    skillLevel: "Audiencia",
    lastUpdated: "noviembre de 2025",
  },
  schema: {
    article: {
      headline: "Objetivos de PAM por condición: cuando 65 no basta",
      description:
        "Metas de PAM específicas con contexto de evidencia, riesgos de sobretratamiento y pasos prácticos para individualizar.",
    },
    faq: [
      {
        question: "¿PAM ≥65 siempre es correcto?",
        answer:
          "No. 65 mmHg es un objetivo inicial habitual (p. ej., en sepsis), pero debe individualizarse con marcadores de perfusión, comorbilidades y evidencia por condición.",
      },
      {
        question: "¿Cuál es la meta de PAM en TCE?",
        answer:
          "Apunte a CPP (presión de perfusión cerebral) = PAM − PIC. Muchos protocolos recomiendan CPP 60–70 mmHg, lo que suele requerir PAM 80–110 según la PIC y la autorregulación.",
      },
      {
        question: "¿Qué PAM en ictus isquémico?",
        answer:
          "En fases tempranas, es frecuente la hipertensión permisiva para sostener la penumbra. Puede tolerarse PAM elevada; siga guías de ictus y al equipo de neuro.",
      },
      {
        question: "¿Cuándo usar una línea arterial para PAM?",
        answer:
          "Úsela en shock con vasopresores, cambios hemodinámicos rápidos, hipotensión grave o casos neuro donde la CPP exige alta precisión.",
      },
    ],
  },
  t0001: "Guía aplicada a clínica",
  t0002: "Idea clave:",
  t0003:
    "PAM ≥65 mmHg es un inicio seguro en muchos adultos, pero la condición, comorbilidades y marcadores de perfusión deben guiar la meta real.",
  t0004: "Individualice con marcadores de perfusión (estado mental, diuresis, lactato, piel).",
  t0005: "8–10 minutos",
  t0006: "Clínicos, urgencias/UCI/quirófano, residentes",

  t0010: "Por qué 65 es un punto de partida, no una regla",
  t0011:
    "En adultos sanos, PAM 70–100 mmHg es típica. Los protocolos inician en ≥65, pero puede infratratar o sobretratar según edad, HTA crónica, estado neurológico y microcirculación.",

  t0020: "Metas de PAM por condición (con evidencia)",
  t0021: "Adulto estable: 70–100 mmHg; evite extremos.",
  t0022: "Sepsis: inicie en ≥65; suba si HTA crónica o persisten signos de hipoperfusión. [1]",
  t0023: "TCE: CPP 60–70 mmHg → suele requerir PAM ~80–110 según la PIC. [2]",
  t0024: "Ictus isquémico (temprano): hipertensión permisiva; evite caídas bruscas de PAM. [3]",
  t0025: "Posparada cardiaca: generalmente ≥65–75 mmHg; alinee con neuropronóstico y soporte de órganos. [4]",
  t0026: "Perioperatorio/quirófano: individualice por PA basal, riesgos quirúrgicos y vulnerabilidad de órganos (riñón, cerebro, corazón).",
  t0027: "Riesgo renal (ERC/ancianos): considere PAM algo mayor si hay AKI o diuresis baja pese a reanimación. [6]",

  t0030: "Cómo individualizar de forma segura",
  t0031: "Doble chequeo: (1) Meta macro (PAM) (2) Marcadores micro (perfusión).",
  t0032: "Marcadores micro: estado mental, diuresis ≥0,5 mL/kg/h, lactato/clearance, temperatura/capilar, moteado, eco a pie de cama.",
  t0033: "Si a PAM 65 la perfusión es pobre, suba 5–10 mmHg y reevalúe tendencias, no números aislados.",
  t0034: "Evite hipertensión innecesaria: mayor PAM eleva demanda de O2 y poscarga; reduzca cuando mejore la perfusión.",

  t0040: "Cuándo importa la precisión (manguito vs línea arterial)",
  t0041: "Prefiera línea arterial con vasopresores, cambios rápidos, hipotensión grave o casos neuro (CPP).",
  t0042: "La PAM por manguito suele estar a ±5–10 mmHg de la arterial en ritmos estables; confirme si la decisión depende de pequeñas diferencias.",

  t0050: "Algoritmo al pie de cama",
  t0051: "1) Inicio: ponga PAM ≥65 (salvo indicación neuro).",
  t0052: "2) Chequee marcadores de perfusión y PA basal.",
  t0053: "3) Si perfusión pobre → suba 5–10 y trate la causa (líquidos/vasopresores).",
  t0054: "4) Si neuro/TCE → fije meta vía CPP = PAM − PIC; involucre a neuro.",
  t0055: "5) Vigile tendencias; desescale cuando normalice la perfusión para evitar daño.",

  t0060: "Preguntas frecuentes",
  t0061: "¿Más alto siempre es mejor?",
  t0062: "No. PAM excesiva puede empeorar isquemia miocárdica, poscarga y riesgo de sangrado. Use la PAM más baja que mantenga perfusión adecuada.",
  t0063: "¿Pacientes con HTA crónica necesitan PAM más alta?",
  t0064: "A menudo sí, sobre todo para cerebro y riñón; suba con cautela y reevalúe marcadores.",
  t0065: "¿Y si el lactato sigue alto pese a PAM ≥65?",
  t0066: "Revalúe volumen, control del foco, gasto cardiaco y microcirculación; solo la PAM puede no bastar.",

  refsHeading: "Referencias",
  refs: [
    { label: "Surviving Sepsis Campaign 2021", text: "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: 2021 International Guidelines for Management of Sepsis and Septic Shock. Intensive Care Med. 2021;47:1181–1247. doi:10.1007/s00134-021-06506-y", url: "https://link.springer.com/article/10.1007/s00134-021-06506-y" },
    { label: "Guía TCE grave (CPP)", text: "Carney N, Totten AM, O’Reilly C, et al. Guidelines for the Management of Severe Traumatic Brain Injury, Fourth Edition. Neurosurgery. 2016;80(1):6–15. doi:10.1227/NEU.0000000000001432", url: "https://doi.org/10.1227/NEU.0000000000001432" },
    { label: "Guías de ictus isquémico", text: "Powers WJ, Rabinstein AA, Ackerson T, et al. 2019 AHA/ASA Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke. 2019;50:e344–e418. doi:10.1161/STR.0000000000000211", url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000211" },
    { label: "Cuidados posparada", text: "Panchal AR, Bartos JA, Cabañas JG, et al. 2020 American Heart Association Guidelines for CPR and ECC: Post–Cardiac Arrest Care. Circulation. 2020;142(16_suppl_2):S469–S523. doi:10.1161/CIR.0000000000000916", url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000916" },
    { label: "Hipotensión intraoperatoria y desenlaces", text: "Salmasi V, Maheshwari K, Yang D, et al. Relationship between Intraoperative Hypotension, Defined by Either Reduction from Baseline or Absolute Thresholds, and AKI and Myocardial Injury After Noncardiac Surgery. Anesthesiology. 2017;126(1):47–65. doi:10.1097/ALN.0000000000001432", url: "https://doi.org/10.1097/ALN.0000000000001432" },
    { label: "Guía KDIGO de LRA", text: "KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney Int Suppl. 2012;2(1):1–138.", url: "https://kdigo.org/guidelines/acute-kidney-injury/" },
  ],
} as const;

export default MapTargetsEs;
