import type { BpCalculatorContent } from './types';

const bpCalculatorEs: BpCalculatorContent = {
  "systolicLabel": "Presión arterial sistólica (mmHg)",
  "diastolicLabel": "Presión arterial diastólica (mmHg)",
  "quickSelectHeading": "Selección rápida de valores comunes",
  "calculateCta": "Calcular MAP",
  "resetCta": "Reiniciar",
  "copyCta": "Resultado de copia",
  "copyFeedbackTemplate": "Se copió el valor de MAP {value} mmHg al portapapeles",
  "resultLabel": "Resultado de su MAP",
  "resultPlaceholder": "Ingrese la presión arterial sistólica y diastólica para generar un resultado de PAM instantáneo.",
  "interpretationHeading": "Guía de interpretación",
  "formulaNote": "Calculada con la fórmula estándar de presión arterial media: (PAS + 2 × PAD) ÷ 3.",
  "professionalHeading": "Para profesionales con licencia",
  "professionalParagraphs": [
    "Esta herramienta apoya la toma de decisiones clínicas pero no reemplaza la evaluación a pie de cama, los protocolos institucionales ni la supervisión del médico tratante.",
    "Verifique manualmente las mediciones de presión arterial cuando los resultados o la presentación del paciente sean incongruentes."
  ],
  "emergencyNotice": "En caso de emergencia, llame a los servicios de emergencia locales o siga el protocolo de actuación de su centro.",
  "disclaimerLinkLabel": "Ver el descargo de responsabilidad completo",
  "statusLegend": {
    "criticalLow": "PAM < 60 mmHg — Intensificación inmediata para soporte de perfusión",
    "borderline": "PAM 60-64 mmHg — Perfusión limítrofe, monitorizar estrechamente",
    "normal": "PAM 65-100 mmHg — Perfusión óptima para la mayoría de los adultos",
    "elevated": "PAM 101-110 mmHg — Ligeramente elevada, evaluar el contexto clínico",
    "high": "PAM > 110 mmHg — Rango hipertensivo, evaluar urgencia/emergencia"
  },
  "statusDescriptions": {
    "criticalLow": "Una PAM críticamente baja sugiere una perfusión orgánica inadecuada. Inicie una evaluación rápida, reanimación con líquidos y soporte vasopresor según el protocolo.",
    "borderline": "La presión arterial media limítrofe requiere una vigilancia estrecha. Controle la evolución de los signos vitales, evalúe el lactato y la diuresis, y prepárese para intensificar el tratamiento si los marcadores de perfusión disminuyen.",
    "normal": "La PAM se encuentra dentro del rango objetivo típico para la mayoría de los pacientes adultos. Continúe con el tratamiento actual y monitorice las tendencias en lugar de las lecturas aisladas.",
    "elevated": "La PAM está ligeramente elevada. Correlacionar con la historia clínica del paciente, la intensidad del dolor y el estado perioperatorio antes de iniciar el tratamiento antihipertensivo.",
    "high": "La presión arterial media se encuentra en rango hipertensivo. Evalúe la presencia de síntomas en órganos diana y siga los protocolos de emergencia/urgencia hipertensiva según corresponda."
  }
} as const;

export default bpCalculatorEs;
