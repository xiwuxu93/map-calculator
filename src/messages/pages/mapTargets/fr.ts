const MapTargetsFr = {
  meta: {
    title: "Cibles de PAM par Condition : Quand 65 ne suffit pas (2025)",
    description:
      "Cibles de PAM fondées sur des preuves par condition (sepsis, TBI, AVC, post-arrêt cardiaque, anesthésie). Apprenez quand une PAM ≥ 65 est appropriée, quand individualiser, et comment équilibrer la perfusion des organes et les dommages.",
    keywords: [
      "cibles PAM",
      "cible PAM sepsis 65",
      "cible PAM TBI",
      "cible PAM AVC",
      "PAM post arrêt cardiaque",
      "comment individualiser PAM",
      "pression de perfusion cérébrale PPC",
      "cible pression artérielle moyenne",
      "calculateur tension pam",
      "ta vers pam",
    ],
    openGraphTitle: "Cibles de PAM par Condition — Preuves et Guide Pratique",
    openGraphDescription:
      "Objectifs de PAM pour le sepsis, TBI, AVC et périopératoire avec un algorithme de chevet pour individualiser en toute sécurité.",
    heroTitle: "Cibles de PAM par Condition : Preuves, Nuances et Algorithme de Chevet",
    heroDescription:
      "PAM ≥ 65 mmHg est un point de départ, pas une ligne d'arrivée. Apprenez les objectifs spécifiques à chaque condition et comment adapter les cibles à chaque patient.",
    quickAnswerLabel: "Résumé Rapide",
    readingTime: "Temps de Lecture",
    skillLevel: "Public",
    lastUpdated: "Novembre 2025",
  },
  schema: {
    article: {
      headline: "Cibles de PAM par Condition : Quand 65 ne suffit pas",
      description:
        "Cibles de PAM spécifiques à chaque condition avec contexte probant, risques de sur-traitement et étapes pratiques pour individualiser les objectifs.",
    },
    faq: [
      {
        question: "PAM ≥ 65 est-elle toujours correcte ?",
        answer:
          "Non. 65 mmHg est une cible initiale courante (par exemple, dans les bundles sepsis) mais doit être individualisée en utilisant les marqueurs de perfusion, les comorbidités et les preuves spécifiques à la condition.",
      },
      {
        question: "Quelle est la cible de PAM dans le traumatisme crânien (TBI) ?",
        answer:
          "Ciblez une pression de perfusion cérébrale (PPC) = PAM − PIC. De nombreux protocoles visent une PPC de 60–70 mmHg, ce qui nécessite souvent une PAM de 80–110 selon la PIC et l'autorégulation.",
      },
      {
        question: "Quelle PAM cibler après un arrêt cardiaque ?",
        answer:
          "La plupart des protocoles post-arrêt cardiaque visent une PAM ≥ 65–75 mmHg, ajustée à l'état neurologique, aux comorbidités et aux objectifs de support d'organes. Évitez l'hypotension pendant la récupération précoce.",
      },
      {
        question: "Quelle PAM pour l'AVC ischémique ?",
        answer:
          "Tôt après un AVC ischémique, l'hypertension permissive est souvent utilisée pour soutenir la perfusion de la pénombre. Les protocoles peuvent tolérer une PAM élevée ; suivez les directives sur l'AVC et les recommandations de l'équipe de neurologie.",
      },
      {
        question: "Quand utiliser une ligne artérielle pour la PAM ?",
        answer:
          "Utilisez une ligne artérielle pour un choc sous vasopresseurs, des changements hémodynamiques rapides, une hypotension sévère ou des cas neurologiques où le ciblage de la PPC exige une haute précision.",
      },
    ],
  },
  // Hero quick list
  t0001: "Guide Appliqué Cliniquement",
  t0002: "Idée clé :",
  t0003:
    "PAM ≥ 65 mmHg est un point de départ sûr pour de nombreux adultes, mais la condition, les comorbidités et les marqueurs de perfusion doivent guider la cible réelle.",
  t0004: "Utilisez les marqueurs de perfusion pour individualiser (conscience, diurèse, lactate, peau).",
  t0005: "8–10 minutes",
  t0006: "Cliniciens, Urgences/Réa/Bloc, Stagiaires",

  // Sections
  t0010: "Pourquoi 65 est un Point de Départ, Pas une Règle",
  t0011:
    "Chez les adultes sains, une PAM de 70–100 mmHg est typique. Les protocoles commencent souvent à ≥ 65 mmHg, mais ce seuil peut sous-traiter ou sur-traiter selon l'âge, l'hypertension chronique, l'état neurologique et la dysfonction microcirculatoire.",

  t0020: "Cibles de PAM Spécifiques par Condition (Informées par les Preuves)",
  t0021: "Adulte général (stable) : 70–100 mmHg ; éviter les extrêmes.",
  t0022: "Sepsis : commencer à ≥ 65 mmHg ; individualiser plus haut si hypertension chronique ou signes d'hypoperfusion persistants. [1]",
  t0023: "Traumatisme crânien (TBI) : cibler PPC 60–70 mmHg → nécessite PAM ~80–110 selon la PIC. [2]",
  t0024: "AVC ischémique (précoce) : hypertension permissive selon protocoles AVC ; éviter les chutes brutales de PAM. [3]",
  t0025: "Post-arrêt cardiaque : généralement ≥ 65–75 mmHg ; aligner avec neuroprognostic et objectifs de support d'organes. [4]",
  t0026: "Périopératoire/Bloc : individualiser selon TA de base, risques chirurgicaux et vulnérabilité des organes (rein, cerveau, cœur). [5]",
  t0027: "Risque d'hypoperfusion rénale (IRC/âgé) : envisager une PAM légèrement plus élevée si signes d'IRA ou faible diurèse persistent malgré la réanimation. [6]",

  t0030: "Comment Individualiser en Toute Sécurité",
  t0031: "Utilisez une vérification en deux parties : (1) Cibles macro (PAM) (2) Micro marqueurs (perfusion).",
  t0032: "Micro marqueurs : conscience, diurèse ≥ 0.5 mL/kg/h, lactate/clairance, temp cutanée/remplissage capillaire, marbrures, écho au chevet.",
  t0033: "Si la perfusion est inadéquate à PAM 65, augmenter par paliers de 5–10 mmHg et réévaluer les tendances, pas les chiffres uniques.",
  t0034: "Éviter l'hypertension inutile : une PAM plus élevée augmente la demande en O2 myocardique et la postcharge ; titrer à la baisse une fois les marqueurs améliorés.",

  t0040: "Quand la Précision Compte (Brassard vs A-line)",
  t0041: "Préférer A-line sous vasopresseurs, changements rapides, hypotension sévère ou cas neurologiques (ciblage PPC).",
  t0042: "PAM brassard typiquement à 5–10 mmHg près en rythmes stables ; confirmer si les décisions dépendent de petites différences.",

  t0050: "Algorithme de Chevet",
  t0051: "1) Démarrer : fixer PAM ≥ 65 (sauf indications neuro).",
  t0052: "2) Vérifier marqueurs de perfusion et historique TA de base.",
  t0053: "3) Si marqueurs mauvais → augmenter cible de 5–10 et traiter cause (fluides/presseurs).",
  t0054: "4) Si neuro/TBI → fixer cible via PPC = PAM − PIC ; impliquer équipe neuro.",
  t0055: "5) Surveiller tendances ; désescalader quand perfusion se normalise pour éviter dommages.",

  t0060: "FAQ",
  t0061: "Plus haut est-il toujours mieux ?",
  t0062: "Non. Une PAM excessive peut aggraver l'ischémie myocardique, la postcharge et le risque de saignement. Utilisez la PAM la plus basse maintenant une perfusion organique adéquate.",
  t0063: "Les patients hypertendus chroniques ont-ils besoin d'une PAM plus élevée ?",
  t0064: "Souvent oui, surtout pour la perfusion rénale et cérébrale ; augmenter prudemment et réévaluer les marqueurs de perfusion.",
  t0065: "Et si le lactate reste élevé malgré une PAM ≥ 65 ?",
  t0066: "Réévaluer le statut volumique, le contrôle de la source, le débit cardiaque et la microcirculation ; la PAM seule peut être insuffisante.",
  
  // References
  refsHeading: "Références",
  refs: [
    {
      label: "Campagne Surviving Sepsis 2021",
      text:
        "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: 2021 International Guidelines for Management of Sepsis and Septic Shock. Intensive Care Med. 2021;47:1181–1247. doi:10.1007/s00134-021-06506-y",
      url: "https://link.springer.com/article/10.1007/s00134-021-06506-y",
    },
    {
      label: "Directives TBI Sévère (PPC)",
      text:
        "Carney N, Totten AM, O’Reilly C, et al. Guidelines for the Management of Severe Traumatic Brain Injury, Fourth Edition. Neurosurgery. 2016;80(1):6–15. doi:10.1227/NEU.0000000000001432",
      url: "https://doi.org/10.1227/NEU.0000000000001432",
    },
    {
      label: "Directives AVC Ischémique Aigu",
      text:
        "Powers WJ, Rabinstein AA, Ackerson T, et al. 2019 AHA/ASA Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke. 2019;50:e344–e418. doi:10.1161/STR.0000000000000211",
      url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000211",
    },
    {
      label: "Soins Post-Arrêt Cardiaque",
      text:
        "Panchal AR, Bartos JA, Cabañas JG, et al. 2020 American Heart Association Guidelines for CPR and ECC: Post–Cardiac Arrest Care. Circulation. 2020;142(16_suppl_2):S469–S523. doi:10.1161/CIR.0000000000000916",
      url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000916",
    },
    {
      label: "Hypotension Peropératoire & Résultats",
      text:
        "Salmasi V, Maheshwari K, Yang D, et al. Relationship between Intraoperative Hypotension, Defined by Either Reduction from Baseline or Absolute Thresholds, and Acute Kidney Injury and Myocardial Injury After Noncardiac Surgery. Anesthesiology. 2017;126(1):47–65. doi:10.1097/ALN.0000000000001432",
      url: "https://doi.org/10.1097/ALN.0000000000001432",
    },
    {
      label: "Directives KDIGO IRA",
      text:
        "KDIGO Clinical Practice Guideline for Acute Kidney Injury. Kidney Int Suppl. 2012;2(1):1–138.",
      url: "https://kdigo.org/guidelines/acute-kidney-injury/",
    },
  ],
} as const;

export default MapTargetsFr;
