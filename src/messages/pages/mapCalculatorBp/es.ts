import type { MapCalculatorBpContent } from "./types";

const mapCalculatorBpEs: MapCalculatorBpContent = {
  "metadata": {
    "title": "Calculadora de PAM: Calcula la presión arterial media a partir de la presión arterial | mapcalculator.org",
    "description": "Calculadora rápida de PAM a partir de lecturas de presión arterial. Convierte la presión arterial sistólica y diastólica a PAM al instante. Herramienta gratuita para profesionales sanitarios con interpretación clínica.",
    "keywords": [
      "calculadora de mapas bp",
      "BP a MAP",
      "Calculadora de presión arterial media (PAM)",
      "Calcular la PAM a partir de la PA"
    ],
    "openGraphTitle": "Calculadora de PAM - Convierte la presión arterial a PAM",
    "openGraphDescription": "Cálculo rápido de la PAM a partir de lecturas de presión arterial para uso clínico",
    "heroTitle": "Calculadora de PAM a partir de lecturas de presión arterial",
    "heroDescription": "Convierte instantáneamente las lecturas de presión arterial sistólica y diastólica a presión arterial media (PAM). Diseñado para profesionales sanitarios con poco tiempo que necesitan conversiones rápidas y precisas de PA a PAM con interpretación incluida."
  },
  "schema": {
    "medicalWebPage": {
      "name": "Calculadora de PAM a partir de lecturas de presión arterial",
      "description": "Convierta las lecturas de presión arterial sistólica y diastólica a presión arterial media con interpretación clínica y ejemplos prácticos.",
      "aboutDescription": "Cálculo clínico derivado de los valores de presión arterial sistólica y diastólica.",
      "audienceLabel": "Médicos, enfermeras y paramédicos que utilizan MAP junto a la cama del paciente.",
      "audienceTypes": [
        "Médico",
        "Enfermero",
        "Paramédico"
      ]
    },
    "faq": [
      {
        "question": "¿Cuál es la forma más rápida de estimar la PAM a partir de la PA?",
        "answer": "Utilice el atajo de cálculo mental: PAM ≈ PAD + (presión del pulso ÷ 3). Para 120/80, la presión del pulso es 40. Divida entre 3 (≈13) y súmela al valor diastólico (80 + 13 = 93 mmHg)."
      },
      {
        "question": "¿Es la PAM más importante que la presión arterial?",
        "answer": "Responden a distintas preguntas clínicas. La PAM refleja la presión de perfusión de los órganos, mientras que los valores sistólicos/diastólicos orientan el diagnóstico de hipertensión y la evaluación de la carga de trabajo cardíaca. En cuidados intensivos, la PAM suele ser el parámetro prioritario."
      },
      {
        "question": "¿Puedo utilizar monitores de presión arterial automáticos para el cálculo de la PAM?",
        "answer": "Sí. La mayoría de los monitores oscilométricos son precisos y algunos muestran la PAM automáticamente. Si el suyo no lo hace, introduzca los valores sistólico y diastólico en esta calculadora para obtener la PAM y su interpretación."
      },
      {
        "question": "¿Debo utilizar la presión arterial media (PAM) o la presión arterial sistólica (PAS) para el manejo de la sepsis?",
        "answer": "Siga la PAM. Las directrices de la Campaña Sobreviviendo a la Sepsis tienen como objetivo una PAM ≥65 mmHg porque se correlaciona mejor con la perfusión de órganos que la presión sistólica sola."
      },
      {
        "question": "¿Qué ocurre si el cálculo de la PAM de mi paciente parece inexacto?",
        "answer": "Confirme la exactitud de la medición de la presión arterial, verifique que los datos se hayan ingresado correctamente y repita la medición manualmente si el resultado no coincide con la presentación del paciente. Considere la posibilidad de colocar una línea arterial si persisten las discrepancias."
      },
      {
        "question": "¿Varían los objetivos de PAM según la población de pacientes?",
        "answer": "Sí. Los pacientes ancianos con hipertensión crónica pueden necesitar una PAM de 70-85 mmHg, los adultos jóvenes pueden tolerar 60-65 mmHg, las lesiones cerebrales traumáticas a menudo requieren 80-110 mmHg y los protocolos de accidente cerebrovascular pueden establecer objetivos de hipertensión permisivos."
      }
    ],
    "breadcrumbs": {
      "home": "Hogar",
      "page": "Calculadora de presión arterial media"
    }
  },
  "hero": {
    "title": "Calculadora de PAM a partir de lecturas de presión arterial",
    "description": "Convierte instantáneamente las lecturas de presión arterial sistólica y diastólica a presión arterial media (PAM). Diseñado para profesionales sanitarios con poco tiempo que necesitan conversiones rápidas y precisas de PA a PAM con interpretación incluida.",
    "snapshotHeading": "Perfil clínico",
    "snapshotItems": [
      {
        "label": "Uso principal",
        "value": "Conversión rápida de PA a PAM con interpretación práctica."
      },
      {
        "label": "Ideal para",
        "value": "rondas en la UCI, protocolos de sepsis, monitorización perioperatoria"
      },
      {
        "label": "Tiempo para obtener resultados",
        "value": "Segundos — Selección rápida de las combinaciones de presión arterial más comunes"
      }
    ]
  },
  "sections": {
    "whyCalculate": {
      "heading": "¿Por qué calcular la PAM a partir de la presión arterial?",
      "intro": "La presión arterial es el signo vital que se registra con mayor frecuencia en la atención médica. Todos los monitores de consultorio y de cabecera registran automáticamente los valores sistólicos y diastólicos. Sin embargo, estas cifras solo describen la presión arterial en los picos y valles de cada ciclo cardíaco. La presión arterial media (PAM) traduce esas lecturas en la presión promedio que irriga los órganos.",
      "clinicalReality": {
        "heading": "La realidad clínica",
        "intro": "Los monitores automatizados rara vez muestran la MAP por defecto, pero las vías clínicas de cuidados críticos dependen de ella. En todos los entornos hospitalarios, la MAP informa:",
        "items": [
          {
            "label": "Protocolos de sepsis:",
            "body": "Mantener una PAM ≥65 mmHg para cumplir con los objetivos de la Campaña Sobreviviendo a la Sepsis."
          },
          {
            "label": "Monitorización en la UCI:",
            "body": "Evolución de la perfusión orgánica en pacientes en estado de shock, postoperatorios y dependientes de vasopresores."
          },
          {
            "label": "Titulación de vasopresores:",
            "body": "Ajuste la norepinefrina, la vasopresina o la fenilefrina según los objetivos de PAM."
          },
          {
            "label": "Recuperación postoperatoria:",
            "body": "Detectar descensos sutiles de la perfusión antes de que aparezcan los síntomas."
          }
        ]
      },
      "usage": {
        "heading": "Cuando necesites esta herramienta",
        "intro": "El cálculo de la PAM permite relacionar las constantes vitales registradas con los objetivos establecidos en el protocolo. Úselo cuando necesite saberlo de inmediato:",
        "questions": [
          "¿Es adecuada la presión de perfusión para la condición de este paciente?",
          "¿Debo intervenir con líquidos, vasopresores o antihipertensivos?",
          "¿Cuál es la tendencia del MAP en las últimas horas?",
          "¿Necesito ajustar el ritmo de infusión o intensificar los cuidados?"
        ],
        "outro": "Dado que los dispositivos no invasivos no pueden medir directamente la PAM, este cálculo es una competencia fundamental para todo clínico que atienda a pacientes gravemente enfermos."
      }
    },
    "bpToMap": {
      "heading": "Cómo se convierte la presión arterial en PAM",
      "formulaBadge": "La fórmula explicada",
      "formula": "PAM = (Presión arterial sistólica + 2 × Presión arterial diastólica) ÷ 3",
      "formulaExplanation": "El corazón pasa aproximadamente un tercio de cada ciclo cardíaco en sístole (contracción) y dos tercios en diástole (relajación). Debido a que la diástole dura más tiempo, la presión diastólica tiene mayor peso en el cálculo de la presión arterial media. La fórmula refleja esta relación fisiológica.",
      "simpleAverageIntro": "El uso de un promedio simple ignora la ponderación temporal inherente al ciclo cardíaco. Por ejemplo, una presión arterial de 120/80 mmHg produce:",
      "simpleAveragePoints": [
        "Promedio simple: (120 + 80) ÷ 2 = 100 mmHg",
        "Fórmula de PAM ponderada: (120 + 160) ÷ 3 = 93 mmHg"
      ],
      "simpleAverageConclusion": "Esa diferencia de siete puntos es clínicamente significativa. En casos de hipotensión, esta diferencia puede determinar si la perfusión es aceptable o si se requiere un aumento de la presión arterial.",
      "alternative": {
        "heading": "Fórmula alternativa para la monitorización invasiva",
        "intro": "Las líneas arteriales proporcionan la PAM directamente, pero los médicos a menudo verifican los cálculos mentalmente:",
        "formula": "PAM = PAD + (PAS − PAD) ÷ 3",
        "explanation": "Esta variante utiliza la presión del pulso y suele ser más rápida para realizar cálculos a pie de cama. Ambas ecuaciones dan resultados idénticos porque son algebraicamente equivalentes."
      },
      "accuracy": {
        "heading": "Consideraciones sobre la precisión",
        "intro": "Las PAM derivadas de la PA no invasiva son fiables para la mayoría de los pacientes adultos, pero hay que tener precaución en situaciones en las que se altera la sincronización sistólica-diastólica:",
        "items": [
          "Insuficiencia aórtica grave que produce presiones de pulso amplias",
          "Taquicardia extrema que acorta el tiempo diastólico",
          "Fibrilación auricular con respuesta ventricular rápida",
          "Enfermedad vascular periférica avanzada o arterias no compresibles"
        ],
        "note": "En estos casos, priorice la monitorización arterial directa cuando esté disponible."
      }
    },
    "referenceGuide": {
      "heading": "Guía de referencia de BP a MAP",
      "intro": "Utilice estas tablas de consulta rápida para una interpretación ágil junto a la cama del paciente. Los valores se ajustan a los protocolos hospitalarios habituales e indican cuándo es necesario derivar al paciente.",
      "mapTableHeaders": {
        "bp": "Presión arterial",
        "formula": "Cálculo MAP",
        "map": "Resultado del mapa",
        "interpretation": "Interpretación clínica"
      },
      "mapTable": [
        {
          "bp": "120/80 mmHg",
          "formula": "(120 + 160) ÷ 3",
          "map": "93 mmHg",
          "interpretation": "✅ Normal — Perfusión óptima",
          "tone": "positive"
        },
        {
          "bp": "110/70 mmHg",
          "formula": "(110 + 140) ÷ 3",
          "map": "83 mmHg",
          "interpretation": "✅ Perfusión adecuada",
          "tone": "positive"
        },
        {
          "bp": "100/60 mmHg",
          "formula": "(100 + 120) ÷ 3",
          "map": "73 mmHg",
          "interpretation": "⚠️ Normal bajo — Vigilar atentamente",
          "tone": "warning"
        },
        {
          "bp": "90/60 mmHg",
          "formula": "(90 + 120) ÷ 3",
          "map": "70 mmHg",
          "interpretation": "⚠️ Límite — Evaluar la perfusión",
          "tone": "warning"
        },
        {
          "bp": "90/50 mmHg",
          "formula": "(90 + 100) ÷ 3",
          "map": "63 mmHg",
          "interpretation": "🔴 Por debajo del objetivo de sepsis: ¡Actúe ahora!",
          "tone": "critical"
        },
        {
          "bp": "80/50 mmHg",
          "formula": "(80 + 100) ÷ 3",
          "map": "60 mmHg",
          "interpretation": "🔴 Umbral crítico — Escalada inmediata",
          "tone": "critical"
        },
        {
          "bp": "130/80 mmHg",
          "formula": "(130 + 160) ÷ 3",
          "map": "97 mmHg",
          "interpretation": "✅ Normal-alto — Aceptable",
          "tone": "positive"
        },
        {
          "bp": "140/90 mmHg",
          "formula": "(140 + 180) ÷ 3",
          "map": "107 mmHg",
          "interpretation": "🟠 Elevado — Hipertensión de etapa 2",
          "tone": "warning"
        },
        {
          "bp": "150/95 mmHg",
          "formula": "(150 + 190) ÷ 3",
          "map": "113 mmHg",
          "interpretation": "🟠 Alto — Riesgo cardiovascular",
          "tone": "warning"
        },
        {
          "bp": "160/100 mmHg",
          "formula": "(160 + 200) ÷ 3",
          "map": "120 mmHg",
          "interpretation": "🔴 Muy alto — Evaluación urgente",
          "tone": "critical"
        },
        {
          "bp": "180/110 mmHg",
          "formula": "(180 + 220) ÷ 3",
          "map": "133 mmHg",
          "interpretation": "🔴 Riesgo de emergencia hipertensiva",
          "tone": "critical"
        }
      ],
      "contextHeading": "Interpretación de la MAP según el contexto clínico",
      "contextCards": [
        {
          "heading": "Cuidados intensivos (UCI/UCC)",
          "items": [
            {
              "label": "PAM <65 mmHg:",
              "body": "Generalmente requiere intervención (líquidos/presores)."
            },
            {
              "label": "PAM 65-80 mmHg:",
              "body": "Rango objetivo para la mayoría de los pacientes de la UCI"
            },
            {
              "label": "PAM >100 mmHg:",
              "body": "Evaluar la presencia de hipertensión o dosis excesivas de vasopresores."
            }
          ]
        },
        {
          "heading": "Departamento de Urgencias",
          "items": [
            {
              "label": "PAM <60 mmHg:",
              "body": "Iniciar el protocolo de shock"
            },
            {
              "label": "PAM 60-70 mmHg:",
              "body": "Monitorizar las tendencias y los marcadores de perfusión"
            },
            {
              "label": "PAM >130 mmHg:",
              "body": "Considerar la evaluación de emergencia hipertensiva"
            }
          ]
        },
        {
          "heading": "Sala de operaciones",
          "items": [
            {
              "label": "PAM <65 mmHg:",
              "body": "Evaluar la profundidad de la anestesia o la hipovolemia"
            },
            {
              "label": "PAM 65-100 mmHg:",
              "body": "Rango objetivo intraoperatorio típico"
            },
            {
              "label": "PAM >100 mmHg:",
              "body": "Evaluar si la anestesia o el dolor son inadecuados."
            }
          ]
        },
        {
          "heading": "Cuidados postoperatorios",
          "items": [
            {
              "label": "MAP muestra una tendencia a la baja:",
              "body": "Posible sangrado o tercer espacio"
            },
            {
              "label": "MAP en tendencia alcista:",
              "body": "El control del dolor puede ser inadecuado."
            },
            {
              "label": "PAM estable 70-90 mmHg:",
              "body": "Objetivo de recuperación típico"
            }
          ]
        }
      ],
      "pulsePressureHeading": "Consideraciones sobre la presión del pulso",
      "pulsePressureIntro": "Las tendencias de la PAM deben interpretarse junto con la presión del pulso (PAS − PAD). Valores idénticos de PAM pueden indicar una hemodinámica muy diferente según la amplitud de la presión del pulso.",
      "pulsePressureHeaders": {
        "bp": "Lectura de presión arterial",
        "map": "MAPA",
        "pulsePressure": "Presión del pulso",
        "note": "Nota clínica"
      },
      "pulsePressureTable": [
        {
          "bp": "120/80",
          "map": "93 mmHg",
          "pulsePressure": "40 mmHg",
          "note": "✅ Normal — Función cardíaca saludable",
          "tone": "positive"
        },
        {
          "bp": "130/90",
          "map": "103 mmHg",
          "pulsePressure": "40 mmHg",
          "note": "🟠 Presión arterial media elevada, presión de pulso normal",
          "tone": "warning"
        },
        {
          "bp": "150/70",
          "map": "97 mmHg",
          "pulsePressure": "80 mmHg",
          "note": "🔴 Ancho — Considere la regurgitación aórtica",
          "tone": "critical"
        },
        {
          "bp": "100/90",
          "map": "93 mmHg",
          "pulsePressure": "10 mmHg",
          "note": "🔴 Estrecho — Evaluar por posible taponamiento cardíaco o insuficiencia cardíaca grave",
          "tone": "critical"
        }
      ],
      "pulsePressureNotes": [
        {
          "label": "Presión de pulso amplia (>60 mmHg):",
          "body": "Considere la insuficiencia aórtica, el hipertiroidismo o la rigidez arterial."
        },
        {
          "label": "Presión de pulso estrecha (<25 mmHg):",
          "body": "Evaluar la presencia de taponamiento cardíaco, insuficiencia cardíaca grave o hipovolemia."
        }
      ]
    },
    "measurement": {
      "heading": "Medición correcta de la presión arterial para una PAM precisa",
      "intro": "La precisión de la PAM depende de la calidad de la medición de la presión arterial. Utilice esta lista de verificación para evitar errores prevenibles.",
      "preparation": {
        "heading": "Preparación del paciente (5 minutos)",
        "steps": [
          "Sienta al paciente con la espalda apoyada y los pies sin cruzar.",
          "Apoya el brazo a la altura del corazón sobre una mesa o una almohada.",
          "Pídale al paciente que vacíe la vejiga si está llena.",
          "Asegúrese de no consumir cafeína, hacer ejercicio ni usar nicotina durante los 30 minutos previos.",
          "Haga que el paciente repose tranquilamente durante cinco minutos antes de la medición.",
          "Se recomienda no hablar ni usar el teléfono durante la lectura."
        ]
      },
      "cuff": {
        "heading": "Selección y colocación del puño",
        "bullets": [
          "Elija un manguito con una anchura de vejiga del 40% de la circunferencia del brazo.",
          "Coloque el manguito 2-3 cm por encima de la fosa antecubital.",
          "Alinee el tubo con la arteria braquial.",
          "Asegúrese de que quede ajustado pero no doloroso: dos dedos debajo del puño."
        ],
        "processHeading": "Proceso de medición",
        "steps": [
          "Palpe el pulso radial mientras infla para estimar la presión sistólica.",
          "Inflar 20-30 mmHg por encima de la desaparición del pulso.",
          "Desinflar a 2-3 mmHg por segundo.",
          "Registre el primer sonido de Korotkoff (sistólico).",
          "Registre la desaparición de los sonidos (diastólicos).",
          "Repita la operación después de 1-2 minutos y calcule el promedio de los resultados."
        ]
      },
      "errorsHeading": "Errores comunes e impacto de MAP",
      "errorTableHeaders": {
        "error": "Error",
        "bpEffect": "Efecto sobre la presión arterial",
        "mapEffect": "Efecto en el MAP"
      },
      "errorsTable": [
        {
          "error": "Puño demasiado pequeño",
          "bpEffect": "Falsamente elevado",
          "mapEffect": "PAM falsamente elevada"
        },
        {
          "error": "Brazo por debajo del nivel del corazón",
          "bpEffect": "Falsamente elevado",
          "mapEffect": "PAM falsamente elevada"
        },
        {
          "error": "Brazo por encima del nivel del corazón",
          "bpEffect": "Falsamente bajo",
          "mapEffect": "MAP falsamente bajo"
        },
        {
          "error": "Espalda no soportada",
          "bpEffect": "Presión arterial diastólica elevada",
          "mapEffect": "La PAM aumenta de 2 a 5 mmHg"
        },
        {
          "error": "Hablar durante la medición",
          "bpEffect": "Falsamente elevado",
          "mapEffect": "PAM elevada 5-10 mmHg"
        },
        {
          "error": "vejiga llena",
          "bpEffect": "+10-15 mmHg",
          "mapEffect": "La PAM aumenta 5-7 mmHg"
        },
        {
          "error": "Cafeína/tabaco reciente",
          "bpEffect": "Falsamente elevado",
          "mapEffect": "PAM elevada 5-8 mmHg"
        }
      ],
      "whenInaccurate": {
        "heading": "Cuándo la PAM derivada de la PA puede ser inexacta",
        "bullets": [
          "PAM <50 mmHg o shock dependiente de vasopresores",
          "Obesidad mórbida cuando no se dispone de un manguito del tamaño adecuado.",
          "Arritmias graves (fibrilación auricular con respuesta ventricular rápida)",
          "Casos intraoperatorios de alto riesgo que requieren monitorización latido a latido",
          "Enfermedad vascular periférica grave o arterias no compresibles"
        ],
        "note": "Recurrir a la monitorización de la línea arterial cuando la precisión sea fundamental para la misión."
      }
    },
    "decisionMaking": {
      "heading": "Toma de decisiones clínicas con PAM derivada de la PA",
      "intro": "Los valores de MAP solo tienen sentido en el contexto clínico. Utilice estos escenarios para traducir los números en acciones.",
      "scenarioLabel": "Guión:",
      "scenarios": [
        {
          "heading": "Manejo de la sepsis",
          "scenario": "Paciente de 68 años con neumonía. PA 85/55 mmHg → PAM 65 mmHg.",
          "points": [
            "Cumple con el objetivo mínimo de la campaña Sobreviviendo a la Sepsis.",
            "Revisar el lactato, la diuresis y el estado mental.",
            "Si los marcadores de perfusión están alterados, ajuste la PAM a 70-75 mmHg."
          ]
        },
        {
          "heading": "Titulación de vasopresores",
          "scenario": "Paciente en UCI con norepinefrina. PA 92/58 mmHg → PAM 69 mmHg.",
          "points": [
            "PAM por encima del objetivo ≥65 mmHg.",
            "Valores de tendencia cada 15-30 minutos.",
            "Considere un destete lento si la tendencia es estable o está en aumento; manténgalo si se observa una tendencia a la baja."
          ]
        },
        {
          "heading": "Monitorización postoperatoria",
          "scenario": "Paciente post-CABG. PAM basal 85 mmHg. PA actual 95/60 mmHg → PAM 72 mmHg.",
          "points": [
            "La PAM disminuyó un 15% con respecto al valor basal.",
            "Investigar problemas de sangrado, hipovolemia o control del dolor.",
            "Evaluar el débito del tubo torácico y los resultados de laboratorio antes de escalar el problema."
          ]
        }
      ],
      "trending": {
        "heading": "Las tendencias a lo largo del tiempo importan",
        "intro": "Documentar las tendencias de la PAM en lugar de lecturas aisladas. La mejoría o el deterioro a lo largo de las horas proporciona la información más significativa sobre el estado de perfusión.",
        "examples": [
          {
            "title": "Tendencia de mejora",
            "timeline": [
              "Hora 0: 80/50 → PAM 60 mmHg",
              "Hora 2: 90/55 → PAM 67 mmHg",
              "Hora 4: 100/60 → PAM 73 mmHg"
            ],
            "summary": "La respuesta a la terapia es positiva."
          },
          {
            "title": "Tendencia al deterioro",
            "timeline": [
              "Hora 0: 110/70 → PAM 83 mmHg",
              "Hora 2: 100/65 → PAM 77 mmHg",
              "Hora 4: 90/55 → PAM 67 mmHg"
            ],
            "summary": "Investigue la causa subyacente de inmediato."
          }
        ],
        "reminders": []
      }
    },
    "faq": {
      "heading": "Preguntas frecuentes: Conversión de PA a PAM",
      "items": [
        {
          "question": "¿Cuál es la forma más rápida de estimar la PAM a partir de la PA?",
          "answer": "Utilice el atajo de cálculo mental: PAM ≈ PAD + (presión del pulso ÷ 3). Para 120/80, la presión del pulso es 40. Divida entre 3 (≈13) y súmela al valor diastólico (80 + 13 = 93 mmHg)."
        },
        {
          "question": "¿Es la PAM más importante que la presión arterial?",
          "answer": "Responden a distintas preguntas clínicas. La PAM refleja la presión de perfusión de los órganos, mientras que los valores sistólicos/diastólicos orientan el diagnóstico de hipertensión y la evaluación de la carga de trabajo cardíaca. En cuidados intensivos, la PAM suele ser el parámetro prioritario."
        },
        {
          "question": "¿Puedo utilizar monitores de presión arterial automáticos para el cálculo de la PAM?",
          "answer": "Sí. La mayoría de los monitores oscilométricos son precisos y algunos muestran la PAM automáticamente. Si el suyo no lo hace, introduzca los valores sistólico y diastólico en esta calculadora para obtener la PAM y su interpretación."
        },
        {
          "question": "¿Debo utilizar la presión arterial media (PAM) o la presión arterial sistólica (PAS) para el manejo de la sepsis?",
          "answer": "Siga la PAM. Las directrices de la Campaña Sobreviviendo a la Sepsis tienen como objetivo una PAM ≥65 mmHg porque se correlaciona mejor con la perfusión de órganos que la presión sistólica sola."
        },
        {
          "question": "¿Qué ocurre si el cálculo de la PAM de mi paciente parece inexacto?",
          "answer": "Confirme la exactitud de la medición de la presión arterial, verifique que los datos se hayan ingresado correctamente y repita la medición manualmente si el resultado no coincide con la presentación del paciente. Considere la posibilidad de colocar una línea arterial si persisten las discrepancias."
        },
        {
          "question": "¿Varían los objetivos de PAM según la población de pacientes?",
          "answer": "Sí. Los pacientes ancianos con hipertensión crónica pueden necesitar una PAM de 70-85 mmHg, los adultos jóvenes pueden tolerar 60-65 mmHg, las lesiones cerebrales traumáticas a menudo requieren 80-110 mmHg y los protocolos de accidente cerebrovascular pueden establecer objetivos de hipertensión permisivos."
        }
      ]
    },
    "resources": {
      "heading": "Herramientas y recursos relacionados",
      "calculatorHeading": "Cálculos relacionados",
      "calculatorItems": [
        {
          "label": "Calculadora MAP principal",
          "description": "— Formación integral en MAP y calculadora básica.",
          "href": "/"
        },
        {
          "label": "Educación sobre la presión arterial y la PAM",
          "description": "— Formación integral en MAP.",
          "href": "Cómo calcular la presión arterial"
        },
        {
          "label": "MAP para enfermeras",
          "description": "— Referencia centrada en enfermería.",
          "href": "/map-calculation-enfermería"
        }
      ],
      "guidelinesHeading": "Guías clínicas de referencia",
      "guidelineLinks": [
        {
          "label": "Directrices de la campaña para sobrevivir a la sepsis 2021",
          "href": "https://www.sccm.org/SurvivingSepsisCampaign/Guidelines"
        },
        {
          "label": "Guías de Hipertensión ACC/AHA 2017",
          "href": "https://www.ahajournals.org"
        }
      ],
      "futureAssetsHeading": "Recursos visuales en desarrollo",
      "futureAssets": [
        "Infografía: Lista de verificación para la medición de la presión arterial (PDF descargable)",
        "Tabla comparativa: Interpretación de la PAM frente a la presión del pulso",
        "Guía rápida para el clínico: Objetivos MAP rápidos por afección"
      ],
      "actions": {
        "backToTop": "Volver al inicio",
        "print": "Imprimir esta página (Cmd/Ctrl + P)",
        "share": "Compartir por correo electrónico"
      }
    }
  }
} as const;

export default mapCalculatorBpEs;
