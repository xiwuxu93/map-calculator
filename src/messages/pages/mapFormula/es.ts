import type { MapFormulaContent } from './types';

const rows = [
  {
    bp: 'Frecuencia Cardíaca Normal',
    map: 'Diástole × 0.66',
    notes: 'A 60-80 lpm, la diástole es ~2/3 del ciclo. La fórmula estándar funciona perfectamente.',
  },
  {
    bp: 'Taquicardia (120 lpm)',
    map: 'Diástole × 0.50',
    notes: 'La diástole se acorta dramáticamente. La fórmula estándar subestima la PAM verdadera.',
  },
  {
    bp: 'Bradicardia (40 lpm)',
    map: 'Diástole × 0.75',
    notes: 'La diástole se alarga. La fórmula estándar puede sobreestimar la PAM verdadera.',
  },
] as const;

const mapFormulaEs: MapFormulaContent = {
  metadata: {
    title:
      'La fisiología detrás de la fórmula de la PAM: ¿Por qué duplicamos la diastólica?',
    description:
      '¿Por qué PAM = (PAS + 2PAD)/3? Una explicación fisiológica profunda de los tiempos del ciclo cardíaco, la distensibilidad arterial y por qué la fórmula falla en la taquicardia.',
    keywords: [
      'fisiología fórmula map',
      'por qué duplicar diastólica para map',
      'física presión arterial media',
      'tiempos ciclo cardíaco map',
      'integración curva presión arterial',
      'limitaciones fórmula map',
    ],
    openGraphTitle:
      'La física de la PAM: Por qué funciona la fórmula estándar (y cuándo falla)',
    openGraphDescription:
      'Una inmersión profunda en la hemodinámica detrás de (PAS + 2PAD)/3. Aprenda sobre el área bajo la curva, la caída diastólica y las limitaciones de la frecuencia cardíaca.',
    heroTitle: 'La fisiología detrás de la fórmula de la PAM',
    heroDescription:
      'La ecuación estándar de la PAM no es solo aritmética arbitraria: es una integración simplificada de la onda de pulso de la presión arterial. Comprenda la física detrás de los números.',
  },
  schema: {
    article: {
      headline:
        'La fisiología detrás de la fórmula de la Presión Arterial Media (PAM)',
      description:
        'Explicación hemodinámica detallada de la derivación de la fórmula de la PAM, basada en el área bajo la curva de presión arterial.',
    },
    faq: [
      {
        question: '¿Por qué la presión diastólica se pondera x2 en la fórmula de la PAM?',
        answer:
          'En una frecuencia cardíaca en reposo normal (60-80 lpm), el corazón pasa aproximadamente dos tercios del ciclo cardíaco en diástole (relajación) y un tercio en sístole (eyección). Por lo tanto, la presión media se pondera matemáticamente más cerca del valor diastólico.',
      },
      {
        question: '¿Es precisa la fórmula estándar de la PAM para frecuencias cardíacas rápidas?',
        answer:
          'No. A medida que aumenta la frecuencia cardíaca (taquicardia), la fase diastólica se acorta desproporcionadamente. La proporción sístole-diástole de 1:2 desaparece, lo que hace que la fórmula estándar sea menos precisa. En estos casos, se requiere el método del "Área bajo la curva" (utilizado por líneas arteriales).',
      },
      {
        question: '¿Cuál es la definición de "Área bajo la curva" de la PAM?',
        answer:
          'La PAM verdadera es la media geométrica de la presión arterial, calculada integrando la curva de presión a lo largo del tiempo y dividiendo por la duración del ciclo cardíaco. La fórmula (PAS + 2PAD)/3 es simplemente una aproximación de cabecera de esta integral.',
      },
    ],
    breadcrumbs: {
      home: 'Inicio',
      page: 'Fisiología de la Fórmula',
    },
  },
  hero: {
    label: 'Teoría Hemodinámica',
    readingTimeLabel: 'Tiempo de lectura',
    skillLevelLabel: 'Nivel',
    lastUpdatedLabel: 'Última actualización',
    readingTime: '6 minutos',
    skillLevel: 'Avanzado / Estudiante de Medicina',
    lastUpdated: 'Enero 2025',
  },
  sections: {
    overview: {
      heading: 'La aproximación de la integración',
      intro:
        'La verdadera presión arterial media no es un promedio aritmético simple. Es la integral de la onda de presión arterial durante un solo ciclo cardíaco: literalmente, el "Área bajo la curva" (AUC).',
      formulaLabel: 'El atajo de cabecera',
      standardFormula: 'PAM ≈ PAD + 1/3(Presión de Pulso)',
      keyPoint:
        'Esta fórmula es una "estimación de una integral". Asume una forma específica de la onda de presión que solo existe con frecuencias cardíacas normales.',
    },
    physiology: {
      heading: '¿Por qué "Dividido por 3"? La regla de los tercios',
      intro:
        'El número mágico "3" en el denominador proviene de la sincronización de las válvulas cardíacas.',
      systoleVsDiastoleHeading: 'La asimetría del latido del corazón',
      systoleVsDiastoleBody:
        'El flujo sanguíneo es pulsátil, pero la perfusión de los órganos es continua. La aorta actúa como un "Windkessel" (depósito elástico), almacenando energía durante la sístole y retrocediendo durante la diástole para mantener el flujo. Debido a que el retroceso lleva más tiempo que la eyección, las arterias pasan más tiempo drenando (diástole) que llenándose (sístole).',
      simpleAverageHeading: 'La realidad geométrica',
      simpleAverageIntro:
        'Si la onda de presión arterial fuera una onda cuadrada perfecta (pasando el mismo tiempo en PAS y PAD), un promedio simple funcionaría. No lo es.',
      simpleAverageFormulaWrong:
        'La onda de presión aumenta bruscamente (carrera ascendente sistólica) y cae lentamente (decadencia diastólica). La mayor parte del "área de tiempo" está debajo de la porción diastólica de la curva.',
      weightedFormulaHeading: 'Visualizando la ponderación',
      weightedFormulaBody:
        'Imagine el ciclo cardíaco como 3 unidades de tiempo. La sístole ocupa 1 unidad. La diástole ocupa 2 unidades. Por lo tanto, la presión media es (1×PAS + 2×PAD) ÷ 3.',
    },
    examples: {
      heading: 'Cuando la fórmula falla: Impacto de la frecuencia cardíaca',
      intro:
        'El error más común en la práctica clínica es confiar ciegamente en esta fórmula en pacientes con frecuencias cardíacas extremas.',
      tableHeaders: {
        bloodPressure: 'Condición',
        map: 'Ponderación Diastólica',
        notes: 'Impacto Fisiológico',
      },
      rows,
      sbpDbpNote:
        'En taquicardia severa (>110 lpm), la sístole y la diástole se vuelven casi iguales en duración. La fórmula idealmente debería cambiar a (PAS + PAD) ÷ 2, pero los monitores rara vez ajustan esto, lo que lleva a errores de cálculo.',
    },
    practice: {
      heading: 'Implicaciones clínicas',
      intro:
        'Comprender las limitaciones de la fórmula cambia la forma en que interpreta los datos a pie de cama.',
      stepsHeading: 'Puntos clave para clínicos',
      steps: [
        'La fórmula estándar es una ESTIMACIÓN, no una medición.',
        'En Taquicardia: La fórmula subestima la perfusión verdadera (porque la diástole es más corta de lo que asume la fórmula).',
        'En Bradicardia: La fórmula funciona bien o sobreestima ligeramente.',
        'Líneas Arteriales: No utilizan esta fórmula. Muestrean la presión más de 100 veces por segundo para calcular la integral verdadera. Es por eso que las PAM de línea arterial a menudo difieren de las PAM de manguito.',
        'Presión de Pulso Amplia: En pacientes ancianos con arterias rígidas, se pierde el efecto "Windkessel". La presión cae más rápido, lo que significa que la fórmula estándar podría sobreestimar su verdadera perfusión orgánica.',
      ],
      tipsHeading: '',
      tips: [],
    },
    verification: {
      heading: 'Resumen',
      intro:
        'Utilice la fórmula (PAS + 2PAD)/3 para pacientes estables con frecuencias cardíacas normales. Para pacientes inestables, taquicárdicos o con arterias rígidas, confíe en la tendencia más que en el número absoluto, o coloque una línea arterial para medición directa.',
      bullets: [],
    },
    faq: {
      heading: 'Preguntas frecuentes avanzadas',
      items: [
        {
          question: '¿Afecta la rigidez arterial (envejecimiento) a la fórmula?',
          answer:
            'Sí. Las arterias rígidas retroceden más rápido, lo que hace que la presión caiga más rápidamente durante la diástole. Esto significa que el "área bajo la curva" es más pequeña de lo que predice la fórmula. La fórmula estándar a menudo SOBRE-estima la perfusión en pacientes ancianos.',
        },
        {
          question: '¿Por qué no coinciden las PAM de línea arterial y de manguito?',
          answer:
            'El manguito utiliza la amplitud oscilante para estimar la PAM directamente (a menudo el parámetro de manguito más preciso), mientras que la fórmula la calcula a partir de PAS/PAD. La línea arterial mide la integral verdadera. El desacuerdo es esperado, especialmente en fisiología no estándar.',
        },
      ],
    },
  },
  cta: {
    calculatorLabel: 'Volver a la calculadora',
    calculatorHref: '/',
    howToLabel: 'Ver pasos de cálculo',
    howToHref: '/how-to-calculate-map-blood-pressure',
  },
};

export default mapFormulaEs;