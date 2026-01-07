const PulsePressureVsMapFr = {
  meta: {
    title: "Pression Pulsée vs. PAM : Quel signe vital en dit plus ? (Guide 2025)",
    description:
      "La PAM mesure la perfusion ; la Pression Pulsée mesure la rigidité et le volume d'éjection. Apprenez quand suivre chacune, pourquoi une pression pulsée élargie est importante, et comment interpréter des valeurs discordantes.",
    keywords: [
      "pression pulsée vs pam",
      "différence entre pam et pression pulsée",
      "causes pression pulsée élargie",
      "signification pression pulsée pincée",
      "pression artérielle moyenne vs pression pulsée",
      "guide hémodynamique clinique",
    ],
    openGraphTitle: "Pression Pulsée vs. PAM : Une Comparaison Clinique",
    openGraphDescription:
      "Arrêtez de confondre ces deux signes vitaux. La PAM est pour le flux ; la Pression Pulsée est pour le volume d'éjection. Voici comment utiliser les deux.",
    heroTitle: "Pression Pulsée vs. PAM : Quel signe vital en dit plus ?",
    heroDescription:
      "Elles sont toutes deux calculées à partir de la pression systolique et diastolique, mais elles racontent des histoires physiologiques complètement différentes. Apprenez quand faire confiance à la PAM, quand surveiller la Pression Pulsée, et quoi faire quand elles sont en désaccord.",
    authorLabel: "Basé sur les Directives Cliniques",
    lastUpdated: "Janvier 2025",
  },
  schema: {
    article: {
      headline: "Pression Pulsée vs. PAM : Quel signe vital en dit plus ?",
      description:
        "Comparaison exhaustive de la Pression Artérielle Moyenne (PAM) et de la Pression Pulsée (PP) pour les cliniciens, couvrant la physiologie, le calcul et l'interprétation clinique.",
      author: "Équipe Éditoriale de mapcalculator.org",
      datePublished: "2025-01-08",
    },
    faq: [
      {
        question: "Quelle est la principale différence entre PAM et Pression Pulsée ?",
        answer:
          "La PAM (Pression Artérielle Moyenne) représente la pression d'écoulement constante délivrant le sang aux organes. La Pression Pulsée (PAS - PAD) reflète la 'force' de chaque battement, indiquant le volume d'éjection et la rigidité artérielle.",
      },
      {
        question: "Pourquoi une pression pulsée élargie est-elle dangereuse ?",
        answer:
          "Une pression pulsée élargie (>60 mmHg) indique souvent une rigidité artérielle (vieillissement) ou une régurgitation aortique. C'est un prédicteur indépendant de mortalité cardiovasculaire même si la PAM est normale.",
      },
      {
        question: "Peut-on avoir une PAM normale mais une Pression Pulsée basse ?",
        answer:
          "Oui. Par exemple, une TA de 100/85 donne une PAM de 90 mmHg (normale), mais une Pression Pulsée de seulement 15 mmHg (très pincée). Cela suggère une vasoconstriction sévère, une tamponnade ou un choc cardiogénique malgré la PAM 'normale'.",
      },
    ],
  },
  sections: {
    intro: {
      title: "L'histoire de deux pressions",
      content:
        "Dans les environnements cliniques à haute pression, nous sommes souvent obsédés par la Pression Artérielle Moyenne (PAM) car c'est la cible principale pour la perfusion des organes. Si la PAM chute < 65 mmHg, les reins défaillent. Mais la Pression Pulsée (PP) — la simple différence entre les valeurs systoliques et diastoliques — est souvent ignorée, bien qu'elle soit un marqueur supérieur de la rigidité artérielle et de l'efficacité du volume d'éjection.",
    },
    comparison: {
      title: "Face-à-Face : PAM vs. PP",
      mapTitle: "Pression Artérielle Moyenne (PAM)",
      mapFormula: "(PAS + 2×PAD) ÷ 3",
      mapRole: "La métrique de 'Perfusion'",
      mapDescription:
        "Pensez à la PAM comme à la pression motrice continue qui pousse le sang à travers les capillaires. Les organes comme le cerveau et les reins ne 'sentent' pas autant les pulsations qu'ils ne sentent cette pression moyenne stable.",
      ppTitle: "Pression Pulsée (PP)",
      ppFormula: "PAS - PAD",
      ppRole: "La métrique de 'Pulsatilité'",
      ppDescription:
        "Pensez à la PP comme à l'onde de choc de chaque battement. Elle vous renseigne sur l'état des tuyaux (rigidité) et le volume de la pompe (volume d'éjection).",
    },
    clinicalScenarios: {
      title: "Quand elles ne sont pas d'accord : Scénarios Cliniques",
      intro: "Les patients les plus dangereux sont souvent ceux avec une PAM 'Normale' mais une Pression Pulsée anormale.",
      scenario1Title: "1. La Pression Pulsée Pincée (L'Étau)",
      scenario1Vitals: "TA 110/95 (PAM 100, PP 15)",
      scenario1Analysis:
        "La PAM de 100 semble excellente. Mais la Pression Pulsée est minuscule (15 mmHg). Ce patient est intensément vasoconstricté. Il pourrait être hypovolémique ou en choc cardiogénique précoce, compensant par une résistance vasculaire systémique (RVS) élevée. Si vous ne regardez que la PAM, vous manquez le crash qui arrive ensuite.",
      scenario2Title: "2. La Pression Pulsée Élargie (Le Tuyau Rigide)",
      scenario2Vitals: "TA 160/60 (PAM 93, PP 100)",
      scenario2Analysis:
        "La PAM est normale. Mais la Pression Pulsée est massive (100 mmHg). C'est l'hypertension systolique isolée classique vue chez les patients âgés avec des artères rigides. Cela met une tension immense sur le ventricule gauche et augmente le risque d'AVC, même si la perfusion (PAM) est adéquate.",
      scenario3Title: "3. La Dérive du Sepsis",
      scenario3Vitals: "TA 90/40 (PAM 57, PP 50)",
      scenario3Analysis:
        "Ici, les deux sont préoccupants. La pression pulsée assez large par rapport à la diastolique basse suggère une vasodilatation (choc chaud). Le réservoir est plein (volume d'éjection décent), mais les tuyaux sont trop lâches (RVS basse).",
    },
    actionPlan: {
      title: "Plan d'Action au Chevet",
      step1: "1. Vérifiez d'abord la PAM",
      step1Desc: "Le patient perfuse-t-il ? Si PAM < 65, corrigez l'hypotension immédiatement (Fluides ? Vasopresseurs ?).",
      step2: "2. Vérifiez ensuite la Pression Pulsée",
      step2Desc: "Si la PAM est sûre, regardez la PP. Est-elle < 25% de la TA systolique ? (Pincée). Est-elle > 60 mmHg ? (Élargie).",
      step3: "3. Triangulez",
      step3Desc: "PP Pincée ? Pensez Volume ou Échec de Pompe. PP Élargie ? Pensez Rigidité ou Fuite (Régurgitation).",
    },
  },
  cta: {
    calculator: "Calculer PAM & PP",
    back: "Retour aux Articles",
  },
} as const;

export default PulsePressureVsMapFr;
