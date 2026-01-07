const PulsePressureVsMapEs = {
  meta: {
    title: "Presión de Pulso vs. PAM: ¿Qué signo vital dice más? (Guía 2025)",
    description:
      "La PAM mide la perfusión; la Presión de Pulso mide la rigidez y el volumen sistólico. Aprenda cuándo rastrear cada una, por qué importa la presión de pulso amplia y cómo interpretar valores discordantes.",
    keywords: [
      "presión de pulso vs pam",
      "diferencia entre pam y presión de pulso",
      "causas presión de pulso amplia",
      "significado presión de pulso estrecha",
      "presión arterial media vs presión de pulso",
      "guía hemodinámica clínica",
    ],
    openGraphTitle: "Presión de Pulso vs. PAM: Una Comparación Clínica",
    openGraphDescription:
      "Deje de confundir estos dos signos vitales. La PAM es para flujo; la Presión de Pulso es para volumen sistólico. Aquí le explicamos cómo usar ambas.",
    heroTitle: "Presión de Pulso vs. PAM: ¿Qué signo vital dice más?",
    heroDescription:
      "Ambas se calculan a partir de la presión sistólica y diastólica, pero cuentan historias fisiológicas completamente diferentes. Aprenda cuándo confiar en la PAM, cuándo observar la Presión de Pulso y qué hacer cuando no concuerdan.",
    authorLabel: "Basado en Guías Clínicas",
    lastUpdated: "Enero 2025",
  },
  schema: {
    article: {
      headline: "Presión de Pulso vs. PAM: ¿Qué signo vital dice más?",
      description:
        "Comparación exhaustiva de la Presión Arterial Media (PAM) y la Presión de Pulso (PP) para clínicos, cubriendo fisiología, cálculo e interpretación clínica.",
      author: "Equipo Editorial de mapcalculator.org",
      datePublished: "2025-01-08",
    },
    faq: [
      {
        question: "¿Cuál es la principal diferencia entre PAM y Presión de Pulso?",
        answer:
          "La PAM (Presión Arterial Media) representa la presión de flujo constante que suministra sangre a los órganos. La Presión de Pulso (PAS - PAD) refleja la 'fuerza' de cada latido, indicando el volumen sistólico y la rigidez arterial.",
      },
      {
        question: "¿Por qué es peligrosa una presión de pulso amplia?",
        answer:
          "Una presión de pulso amplia (>60 mmHg) a menudo indica rigidez arterial (envejecimiento) o regurgitación aórtica. Es un predictor independiente de mortalidad cardiovascular incluso si la PAM es normal.",
      },
      {
        question: "¿Se puede tener una PAM normal pero una Presión de Pulso baja?",
        answer:
          "Sí. Por ejemplo, una PA de 100/85 da una PAM de 90 mmHg (normal), pero una Presión de Pulso de solo 15 mmHg (muy estrecha). Esto sugiere vasoconstricción severa, taponamiento o shock cardiogénico a pesar de la PAM 'normal'.",
      },
    ],
  },
  sections: {
    intro: {
      title: "La historia de dos presiones",
      content:
        "En entornos clínicos de alta presión, a menudo nos obsesionamos con la Presión Arterial Media (PAM) porque es el objetivo principal para la perfusión de órganos. Si la PAM cae <65 mmHg, los riñones fallan. Pero la Presión de Pulso (PP) —la simple diferencia entre los valores sistólicos y diastólicos— a menudo se ignora, a pesar de ser un marcador superior de rigidez arterial y eficiencia del volumen sistólico.",
    },
    comparison: {
      title: "Cara a cara: PAM vs. PP",
      mapTitle: "Presión Arterial Media (PAM)",
      mapFormula: "(PAS + 2×PAD) ÷ 3",
      mapRole: "La métrica de 'Perfusión'",
      mapDescription:
        "Piense en la PAM como la presión de conducción continua que empuja la sangre a través de los capilares. Órganos como el cerebro y los riñones no 'sienten' los pulsos tanto como sienten esta presión promedio constante.",
      ppTitle: "Presión de Pulso (PP)",
      ppFormula: "PAS - PAD",
      ppRole: "La métrica de 'Pulsatilidad'",
      ppDescription:
        "Piense en la PP como la onda de choque de cada latido. Le informa sobre la condición de las tuberías (rigidez) y el volumen de la bomba (volumen sistólico).",
    },
    clinicalScenarios: {
      title: "Cuando no están de acuerdo: Escenarios Clínicos",
      intro: "Los pacientes más peligrosos son a menudo aquellos con PAM 'Normal' pero Presión de Pulso anormal.",
      scenario1Title: "1. La Presión de Pulso Estrecha (El Apretón)",
      scenario1Vitals: "PA 110/95 (PAM 100, PP 15)",
      scenario1Analysis:
        "La PAM de 100 se ve genial. Pero la Presión de Pulso es diminuta (15 mmHg). Este paciente está intensamente vasoconstreñido. Podría estar hipovolémico o en shock cardiogénico temprano, compensando con alta resistencia vascular sistémica (RVS). Si solo mira la PAM, se perderá el colapso que viene después.",
      scenario2Title: "2. La Presión de Pulso Amplia (La Tubería Rígida)",
      scenario2Vitals: "PA 160/60 (PAM 93, PP 100)",
      scenario2Analysis:
        "La PAM es normal. Pero la Presión de Pulso es masiva (100 mmHg). Esta es la clásica 'Hipertensión Sistólica Aislada' vista en pacientes ancianos con arterias rígidas. Pone una inmensa tensión en el ventrículo izquierdo y aumenta el riesgo de accidente cerebrovascular, incluso si la perfusión (PAM) es adecuada.",
      scenario3Title: "3. La Deriva de la Sepsis",
      scenario3Vitals: "PA 90/40 (PAM 57, PP 50)",
      scenario3Analysis:
        "Aquí, ambos son preocupantes. La presión de pulso algo amplia en relación con la diastólica baja sugiere vasodilatación (shock caliente). El tanque está lleno (volumen sistólico decente), pero las tuberías están demasiado flojas (RVS baja).",
    },
    actionPlan: {
      title: "Plan de Acción a Pie de Cama",
      step1: "1. Verifique la PAM Primero",
      step1Desc: "¿El paciente está perfundiendo? Si PAM <65, corrija la hipotensión inmediatamente (¿Fluidos? ¿Vasopresores?).",
      step2: "2. Verifique la Presión de Pulso Después",
      step2Desc: "Si la PAM es segura, mire la PP. ¿Es <25% de la PA sistólica? (Estrecha). ¿Es >60 mmHg? (Amplia).",
      step3: "3. Triangule",
      step3Desc: "¿PP Estrecha? Piense en Volumen o Falla de Bomba. ¿PP Amplia? Piense en Rigidez o Fuga (Regurgitación).",
    },
  },
  cta: {
    calculator: "Calcular PAM y PP",
    back: "Volver a Artículos",
  },
} as const;

export default PulsePressureVsMapEs;
