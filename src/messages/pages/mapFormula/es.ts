import type { MapFormulaContent } from './types';

const mapFormulaEs: MapFormulaContent = {
  "metadata": {
    "title": "Fórmula de la PAM: cómo calcular la presión arterial media paso a paso",
    "description": "Aprende la fórmula de la presión arterial media (PAM), revisa ejemplos prácticos de cálculo de MAP y entiende cuándo usar MAP en lugar de solo la presión arterial sistólica.",
    "keywords": [
      "fórmula MAP",
      "ecuación MAP",
      "fórmula de cálculo MAP",
      "fórmula de la presión arterial media",
      "cálculo de la presión arterial media",
      "fórmula MAP presión arterial",
      "ecuación MAP BP",
      "cómo se calcula el MAP",
      "cálculo MAP presión arterial media"
    ],
    "openGraphTitle": "Fórmula MAP: cómo calcular la presión arterial media",
    "openGraphDescription": "Comprende la fórmula de MAP, por qué pondera la presión diastólica y cómo calcular la presión arterial media a partir de la presión arterial con ejemplos resueltos.",
    "heroTitle": "Fórmula MAP para la presión arterial media",
    "heroDescription": "Revisa la fórmula MAP estándar, entiende por qué funciona y practica el cálculo de la presión arterial media a partir de lecturas de presión arterial habituales."
  },
  "schema": {
    "article": {
      "headline": "Fórmula MAP: cómo calcular la presión arterial media a partir de la presión arterial",
      "description": "Guía enfocada en la fórmula de la presión arterial media (PAM), con fisiología, ejemplos y consejos prácticos de cálculo para profesionales sanitarios."
    },
    "faq": [
      {
        "question": "¿Cuál es la fórmula para MAP?",
        "answer": "La fórmula estándar para la presión arterial media (PAM) es PAM = (PAS + 2 × PAD) ÷ 3, donde PAS es la presión arterial sistólica y PAD es la presión arterial diastólica."
      },
      {
        "question": "¿Por qué la fórmula MAP duplica el valor diastólico?",
        "answer": "El corazón pasa aproximadamente el doble de tiempo en diástole que en sístole. Duplicar el valor diastólico antes de promediar refleja mejor la verdadera presión impulsora promedio a lo largo del ciclo cardíaco."
      },
      {
        "question": "¿La PAM es simplemente el promedio simple de la presión sistólica y diastólica?",
        "answer": "No. Un promedio simple como (PAS + PAD) ÷ 2 ignora la fase diastólica más larga y generalmente sobreestima la presión de perfusión, especialmente en pacientes hipotensos."
      },
      {
        "question": "¿Cuándo debo calcular la PAM a partir de las lecturas de presión arterial?",
        "answer": "Calcule la PAM cuando los protocolos especifican objetivos de PAM (por ejemplo, sepsis, shock, cuidados neurocríticos) o cuando necesita un único valor de presión de perfusión para compartir con todo el equipo."
      }
    ],
    "breadcrumbs": {
      "home": "Inicio",
      "page": "Fórmula MAP"
    }
  },
  "hero": {
    "label": "Guía de la fórmula MAP",
    "readingTimeLabel": "Tiempo de lectura",
    "skillLevelLabel": "Nivel",
    "lastUpdatedLabel": "Última actualización",
    "readingTime": "7 minutos",
    "skillLevel": "Todos los profesionales de la salud",
    "lastUpdated": "Enero de 2025"
  },
  "sections": {
    "overview": {
      "heading": "Fórmula MAP estándar",
      "intro": "La presión arterial media (PAM) representa la presión promedio que impulsa la sangre a través del árbol arterial durante un solo ciclo cardíaco. En la práctica clínica suele ser el objetivo de perfusión principal en protocolos de sepsis, shock y anestesia.",
      "formulaLabel": "Ecuación estándar",
      "standardFormula": "PAM = (Presión arterial sistólica + 2 × Presión arterial diastólica) ÷ 3",
      "keyPoint": "Piense en la PAM como un promedio ponderado en el tiempo: la diástole cuenta aproximadamente el doble que la sístole porque ocupa más de cada ciclo cardíaco."
    },
    "physiology": {
      "heading": "Por qué funciona la fórmula MAP",
      "intro": "La fórmula MAP es algo más que una ecuación memorizada: recoge cuánto tiempo permanece el árbol arterial a presión sistólica y diastólica en cada latido.",
      "systoleVsDiastoleHeading": "Sístole vs diástole en el ciclo cardíaco",
      "systoleVsDiastoleBody": "En un rango de frecuencia cardíaca normal, el corazón pasa aproximadamente un tercio de cada ciclo cardíaco en sístole (eyección) y dos tercios en diástole (relajación y llenado). Dado que los órganos experimentan presión diastólica durante más tiempo, la presión arterial diastólica contribuye en mayor medida a la presión arterial promedio real.",
      "simpleAverageHeading": "Por qué los promedios simples son engañosos",
      "simpleAverageIntro": "Si simplemente se promedian los valores sistólicos y diastólicos, se actúa como si el corazón pasara el mismo tiempo en ambas presiones.",
      "simpleAverageFormulaWrong": "Para una presión arterial de 120/80 mmHg, un promedio simple da (120 + 80) ÷ 2 = 100 mmHg, más alta que la presión arterial media real.",
      "weightedFormulaHeading": "La fórmula ponderada refleja el tiempo real",
      "weightedFormulaBody": "Usando la fórmula MAP ponderada para 120/80 mmHg — (120 + 2 × 80) ÷ 3 — se obtiene 93 mmHg, que coincide mejor con las mediciones invasivas y el tiempo fisiológico transcurrido en diástole."
    },
    "examples": {
      "heading": "Ejemplos de fórmulas MAP",
      "intro": "Estos ejemplos utilizan la fórmula MAP estándar para convertir lecturas de presión arterial comunes en valores de presión arterial media que puede utilizar junto a la cama del paciente.",
      "tableHeaders": {
        "bloodPressure": "Presión arterial (PAS/PAD)",
        "map": "MAP (calculado)",
        "notes": "Interpretación clínica"
      },
      "rows": [
        {
          "bp": "120/80 mmHg",
          "map": "93 mmHg",
          "notes": "Ejemplo de adulto sano: valor didáctico clásico para un MAP normal."
        },
        {
          "bp": "100/60 mmHg",
          "map": "73 mmHg",
          "notes": "Perfusión baja-normal en muchos adultos: el contexto y las tendencias importan."
        },
        {
          "bp": "90/60 mmHg",
          "map": "70 mmHg",
          "notes": "MAP limítrofe: vigilar de cerca, especialmente en caso de shock o sepsis."
        },
        {
          "bp": "80/50 mmHg",
          "map": "60 mmHg",
          "notes": "Umbral crítico donde muchas directrices recomiendan acciones urgentes."
        },
        {
          "bp": "160/100 mmHg",
          "map": "120 mmHg",
          "notes": "PAM marcadamente elevada con mayor riesgo de lesión hipertensiva."
        }
      ],
      "sbpDbpNote": "Asegúrese siempre de que las lecturas sistólicas y diastólicas provengan de la misma medición y se registren en mmHg antes de aplicar la fórmula MAP."
    },
    "practice": {
      "heading": "Cómo utilizar la fórmula MAP en la práctica",
      "intro": "Una vez que conoce la fórmula, el objetivo es ser rápido y consistente para poder aplicar los objetivos MAP en flujos de trabajo clínicos reales.",
      "stepsHeading": "Cálculo paso a paso",
      "steps": [
        "Registre la presión arterial sistólica (PAS) y diastólica (PAD) desde un manguito confiable o una línea arterial.",
        "Duplicar el valor diastólico: 2 × PAD.",
        "Sume el valor sistólico: PAS + (2 × PAD).",
        "Divida el total por 3 para obtener MAP.",
        "Compare la PAM con el objetivo de su protocolo (por ejemplo ≥65 mmHg en sepsis) y el valor inicial del paciente."
      ],
      "tipsHeading": "Atajos de cálculo mental",
      "tips": [
        "Recuerde la versión de presión de pulso: PAM ≈ PAD + (presión de pulso ÷ 3), donde presión de pulso = PAS − PAD.",
        "Redondee los números intermedios para mantener el cálculo mental rápido y permanecer dentro de unos pocos mmHg del resultado exacto.",
        "Practique primero con pacientes estables para que el proceso se sienta automático durante las emergencias."
      ]
    },
    "verification": {
      "heading": "Cuando la fórmula puede no ser confiable",
      "intro": "La fórmula estándar de PAM asume una sincronización sístole-diástole típica. En algunas situaciones, la monitorización invasiva o la revisión por un experto son más seguras que confiar únicamente en la PAM obtenida con el manguito.",
      "bullets": [
        "Taquicardia o bradicardia extrema que cambia drásticamente el tiempo de llenado diastólico.",
        "Enfermedad valvular significativa, como insuficiencia aórtica, en la que la presión diastólica puede caer rápidamente.",
        "Estados de perfusión muy baja en los que los manguitos no invasivos tienen dificultades para producir lecturas precisas.",
        "Cualquier momento en que la PAM calculada no coincida con la presentación clínica del paciente u otros marcadores de perfusión."
      ]
    },
    "faq": {
      "heading": "Preguntas frecuentes sobre la fórmula MAP",
      "items": [
        {
          "question": "¿La fórmula MAP es la misma para todos los adultos?",
          "answer": "La fórmula algebraica es la misma, pero el rango objetivo de PAM varía según la afección. Por ejemplo, los protocolos para la sepsis suelen comenzar con una PAM ≥65 mmHg, mientras que algunas vías de atención neurocrítica buscan una PAM mayor."
        },
        {
          "question": "¿Puedo confiar en la PAM derivada del manguito en lugar de una línea arterial?",
          "answer": "En pacientes estables, la monitorización no invasiva suele ser lo suficientemente precisa para la toma de decisiones. En pacientes inestables y críticos, considere la monitorización invasiva cuando la precisión sea crucial."
        },
        {
          "question": "¿Necesito recalcular la PAM si cambia la frecuencia cardíaca?",
          "answer": "Los cambios leves en la frecuencia cardíaca no requieren ajustar la fórmula. Los cambios importantes (taquicardia o bradicardia graves) pueden alterar la relación sístole/diástole y justificar una monitorización invasiva."
        }
      ]
    }
  },
  "cta": {
    "calculatorLabel": "Abrir la calculadora MAP",
    "calculatorHref": "/",
    "howToLabel": "Leer la guía paso a paso sobre MAP",
    "howToHref": "/how-to-calculate-map-blood-pressure"
  }
} as const;

export default mapFormulaEs;
