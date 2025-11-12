"use client";
import React from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export default function SiteSchema() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'mapcalculator.org',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      sameAs: [] as string[],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'mapcalculator.org',
      url: SITE_URL,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      name: ['Home', 'BP Calculator', 'How to Calculate', 'Nursing Guide', 'About', 'Contact'],
      url: [
        SITE_URL,
        `${SITE_URL}/map-calculator-bp`,
        `${SITE_URL}/how-to-calculate-map-blood-pressure`,
        `${SITE_URL}/map-calculation-nursing`,
        `${SITE_URL}/about`,
        `${SITE_URL}/contact`,
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

