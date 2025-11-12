import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/lib/i18n";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", changeFreq: "weekly" as const, priority: 1.0 },
    { path: "/map-calculator-bp", changeFreq: "weekly" as const, priority: 0.8 },
    { path: "/how-to-calculate-map-blood-pressure", changeFreq: "weekly" as const, priority: 0.8 },
    { path: "/map-calculation-nursing", changeFreq: "weekly" as const, priority: 0.8 },
    { path: "/about", changeFreq: "yearly" as const, priority: 0.5 },
    { path: "/contact", changeFreq: "yearly" as const, priority: 0.5 },
    { path: "/editorial-policy", changeFreq: "yearly" as const, priority: 0.5 },
    { path: "/privacy", changeFreq: "yearly" as const, priority: 0.3 },
    { path: "/terms", changeFreq: "yearly" as const, priority: 0.3 },
    { path: "/disclaimer", changeFreq: "yearly" as const, priority: 0.3 },
  ] as const;

  return locales.flatMap((locale) => {
    const localePrefix = locale === defaultLocale ? "" : `/${locale}`;

    return routes.map((route) => ({
      url: `${SITE_URL}${localePrefix}${route.path === "/" ? "" : route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFreq,
      priority: route.path === "/" ? (locale === defaultLocale ? route.priority : 0.8) : route.priority,
    }));
  });
}
