import type { MapFormulaContent } from './types';

const rows = [
  {
    bp: 'Fréquence Cardiaque Normale',
    map: 'Diastole × 0.66',
    notes: 'À 60-80 bpm, la diastole représente ~2/3 du cycle. La formule standard fonctionne parfaitement.',
  },
  {
    bp: 'Tachycardie (120 bpm)',
    map: 'Diastole × 0.50',
    notes: 'La diastole raccourcit considérablement. La formule standard sous-estime la vraie PAM.',
  },
  {
    bp: 'Bradycardie (40 bpm)',
    map: 'Diastole × 0.75',
    notes: 'La diastole s\'allonge. La formule standard peut surestimer la vraie PAM.',
  },
] as const;

const mapFormulaFr: MapFormulaContent = {
  metadata: {
    title:
      'La physiologie derrière la formule de la PAM : Pourquoi double-t-on la diastolique ?',
    description:
      'Pourquoi PAM = (PAS + 2PAD)/3 ? Une explication physiologique approfondie du timing du cycle cardiaque, de la compliance artérielle et pourquoi la formule échoue en cas de tachycardie.',
    keywords: [
      'physiologie formule pam',
      'pourquoi doubler diastolique pour pam',
      'physique pression artérielle moyenne',
      'timing cycle cardiaque pam',
      'intégration courbe pression artérielle',
      'limitations formule pam',
    ],
    openGraphTitle:
      'La Physique de la PAM : Pourquoi la Formule Standard Fonctionne (Et Quand Elle Échoue)',
    openGraphDescription:
      'Une plongée profonde dans l\'hémodynamique derrière (PAS + 2PAD)/3. Découvrez l\'aire sous la courbe, la décroissance diastolique et les limitations de la fréquence cardiaque.',
    heroTitle: 'La Physiologie Derrière la Formule PAM',
    heroDescription:
      'L\'équation standard de la PAM n\'est pas juste de l\'arithmétique arbitraire — c\'est une intégration simplifiée de l\'onde de pouls de la pression artérielle. Comprenez la physique derrière les chiffres.',
  },
  schema: {
    article: {
      headline:
        'La Physiologie Derrière la Formule de la Pression Artérielle Moyenne (PAM)',
      description:
        'Explication hémodynamique détaillée de la dérivation de la formule PAM, dérivée de l\'aire sous la courbe de pression artérielle.',
    },
    faq: [
      {
        question: 'Pourquoi la pression diastolique est-elle pondérée x2 dans la formule PAM ?',
        answer:
          'À une fréquence cardiaque normale au repos (60-80 bpm), le cœur passe environ deux tiers du cycle cardiaque en diastole (relaxation) et un tiers en systole (éjection). Par conséquent, la pression moyenne est mathématiquement pondérée plus près de la valeur diastolique.',
      },
      {
        question: 'La formule standard de la PAM est-elle précise pour les fréquences cardiaques rapides ?',
        answer:
          'Non. À mesure que la fréquence cardiaque augmente (tachycardie), la phase diastolique raccourcit de manière disproportionnée. Le rapport systole-diastole de 1:2 disparaît, rendant la formule standard moins précise. Dans ces cas, la méthode de \'l\'Aire Sous la Courbe\' (utilisée par les lignes artérielles) est requise.',
      },
      {
        question: 'Quelle est la définition \'Aire Sous la Courbe\' de la PAM ?',
        answer:
          'La vraie PAM est la moyenne géométrique de la pression artérielle, calculée en intégrant la courbe de pression sur le temps et en divisant par la durée du cycle cardiaque. La formule (PAS + 2PAD)/3 n\'est qu\'une approximation de chevet de cette intégrale.',
      },
    ],
    breadcrumbs: {
      home: 'Accueil',
      page: 'Physiologie de la Formule',
    },
  },
  hero: {
    label: 'Théorie Hémodynamique',
    readingTimeLabel: 'Temps de Lecture',
    skillLevelLabel: 'Niveau',
    lastUpdatedLabel: 'Dernière Mise à Jour',
    readingTime: '6 minutes',
    skillLevel: 'Avancé / Étudiant en Médecine',
    lastUpdated: 'Janvier 2025',
  },
  sections: {
    overview: {
      heading: 'L\'Approximation de l\'Intégration',
      intro:
        'La vraie Pression Artérielle Moyenne n\'est pas une simple moyenne arithmétique. C\'est l\'intégrale de l\'onde de pression artérielle sur un seul cycle cardiaque — littéralement \'l\'Aire Sous la Courbe\' (AUC).',
      formulaLabel: 'Le Raccourci de Chevet',
      standardFormula: 'PAM ≈ PAD + 1/3(Pression Pulsée)',
      keyPoint:
        'Cette formule est une \'estimation d\'une intégrale\'. Elle suppose une forme spécifique de l\'onde de pression qui n\'existe qu\'à des fréquences cardiaques normales.',
    },
    physiology: {
      heading: 'Pourquoi \'Divisé par 3\' ? La Règle des Tiers',
      intro: 'Le nombre magique \'3\' au dénominateur vient du timing des valves cardiaques.',
      systoleVsDiastoleHeading: 'L\'Asymétrie du Battement Cardiaque',
      systoleVsDiastoleBody:
        'Le flux sanguin est pulsatile, mais la perfusion des organes est continue. L\'aorte agit comme un \'Windkessel\' (réservoir élastique), stockant l\'énergie pendant la systole et se rétractant pendant la diastole pour maintenir le flux. Parce que la rétraction prend plus de temps que l\'éjection, les artères passent plus de temps à se vider (diastole) qu\'à se remplir (systole).',
      simpleAverageHeading: 'La Réalité Géométrique',
      simpleAverageIntro:
        'Si l\'onde de pression artérielle était une onde carrée parfaite (passant un temps égal à PAS et PAD), une moyenne simple fonctionnerait. Ce n\'est pas le cas.',
      simpleAverageFormulaWrong: 'L\'onde de pression monte brusquement (montée systolique) et chute lentement (décroissance diastolique). La majeure partie de \'l\'aire temporelle\' se trouve sous la portion diastolique de la courbe.',
      weightedFormulaHeading: 'Visualiser la Pondération',
      weightedFormulaBody:
        'Imaginez le cycle cardiaque comme 3 unités de temps. La systole occupe 1 unité. La diastole occupe 2 unités. Ainsi, la pression moyenne est (1×PAS + 2×PAD) ÷ 3.',
    },
    examples: {
      heading: 'Quand la Formule Échoue : Impact de la Fréquence Cardiaque',
      intro:
        'L\'erreur la plus courante en pratique clinique est de faire confiance aveuglément à cette formule chez les patients avec des fréquences cardiaques extrêmes.',
      tableHeaders: {
        bloodPressure: 'Condition',
        map: 'Poids Diastolique',
        notes: 'Impact Physiologique',
      },
      rows,
      sbpDbpNote:
        'En cas de tachycardie sévère (>110 bpm), la systole et la diastole deviennent presque égales en durée. La formule devrait idéalement passer à (PAS + PAD) ÷ 2, mais les moniteurs ajustent rarement cela, conduisant à des erreurs de calcul.',
    },
    practice: {
      heading: 'Implications Cliniques',
      intro:
        'Comprendre les limites de la formule change la façon dont vous interprétez les données au chevet du patient.',
      stepsHeading: 'Points Clés pour les Cliniciens',
      steps: [
        'La formule standard est une ESTIMATION, pas une mesure.',
        'En Tachycardie : La formule sous-estime la vraie perfusion (car la diastole est plus courte que ce que la formule suppose).',
        'En Bradycardie : La formule fonctionne bien, ou surestime légèrement.',
        'Lignes Artérielles : Elles n\'utilisent pas cette formule. Elles échantillonnent la pression 100+ fois par seconde pour calculer la vraie intégrale. C\'est pourquoi les PAM de ligne artérielle diffèrent souvent des PAM de brassard.',
        'Pression Pulsée Élargie : Chez les patients âgés avec des artères rigides, l\'effet \'Windkessel\' est perdu. La pression chute plus vite, ce qui signifie que la formule standard pourrait surestimer leur vraie perfusion organique.',
      ],
      tipsHeading: '',
      tips: [],
    },
    verification: {
      heading: 'Résumé',
      intro:
        'Utilisez la formule (PAS + 2PAD)/3 pour les patients stables avec des fréquences cardiaques normales. Pour les patients instables, tachycardes ou aux artères rigides, faites plus confiance à la tendance qu\'au nombre absolu, ou placez une ligne artérielle pour une mesure directe.',
      bullets: [],
    },
    faq: {
      heading: 'FAQ Avancées',
      items: [
        {
          question: 'La rigidité artérielle (vieillissement) affecte-t-elle la formule ?',
          answer:
            'Oui. Les artères rigides se rétractent plus vite, causant une chute de pression plus rapide pendant la diastole. Cela signifie que \'l\'aire sous la courbe\' est plus petite que ce que la formule prédit. La formule standard SURESTIME souvent la perfusion chez les patients âgés.',
        },
        {
          question: 'Pourquoi les PAM de ligne artérielle et de brassard ne concordent-elles pas ?',
          answer:
            'Le brassard utilise l\'amplitude oscillante pour estimer la PAM directement (souvent le paramètre de brassard le plus précis), tandis que la formule la calcule à partir de PAS/PAD. La ligne artérielle mesure la vraie intégrale. Le désaccord est attendu, surtout dans une physiologie non standard.',
        },
      ],
    },
  },
  cta: {
    calculatorLabel: 'Retour au Calculateur',
    calculatorHref: '/',
    howToLabel: 'Voir les Étapes de Calcul',
    howToHref: '/how-to-calculate-map-blood-pressure',
  },
};

export default mapFormulaFr;
