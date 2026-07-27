import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/constants";

const paths = [
  "/",
  "/what-we-solve",
  "/how-we-work",
  "/about",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return paths.flatMap((href) =>
    routing.locales.map((locale) => ({
      url: `${siteConfig.url}${getPathname({ locale, href })}`,
      lastModified,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((item) => [
            item,
            `${siteConfig.url}${getPathname({ locale: item, href })}`,
          ]),
        ),
      },
    })),
  );
}
