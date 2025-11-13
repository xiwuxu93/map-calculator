const ArticlesEs = {
  meta: {
    title: 'Artículos populares — Recursos de PAM (presión arterial media)',
    description:
      'Selección de guías de alto valor sobre PAM: cálculo, flujos de trabajo de enfermería y objetivos según la condición, con referencias.',
  },
  headingTitle: 'Artículos populares',
  headingSubtitle: 'Recursos de PAM seleccionados para clínicos con poco tiempo.',
  lastUpdatedLabel: 'Última actualización:',
  ctaCalculator: 'Abrir calculadora de PAM',
  ctaHome: 'Volver al inicio',
  cards: [
    {
      href: '/how-to-calculate-map-blood-pressure',
      title: 'Cómo calcular la PAM a partir de la PA',
      summary: 'Fórmula, trucos de cálculo mental, ejemplos y preguntas frecuentes para el uso a pie de cama.',
      updated: 'nov. 2025',
    },
    {
      href: '/map-targets-by-condition',
      title: 'Objetivos de PAM por condición: cuándo 65 no basta',
      summary: 'Sepsis, TCE/CPP, ictus isquémico, posparada, perioperatorio — individualización segura con referencias.',
      updated: 'nov. 2025',
    },
    {
      href: '/map-calculation-nursing',
      title: 'Cálculo de PAM en flujos de trabajo de enfermería',
      summary: 'Pasos centrados en el pie de cama, registro y umbrales de actuación.',
      updated: 'ene. 2025',
    },
  ],
} as const;

export default ArticlesEs;

