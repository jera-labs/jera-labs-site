import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import type { AppPathname } from "@/types";
import { siteConfig } from "./constants";

type MetadataPageKey = "home" | "whatWeSolve" | "howWeWork" | "about";

const pagePathByKey: Record<MetadataPageKey, AppPathname> = {
  home: "/",
  whatWeSolve: "/what-we-solve",
  howWeWork: "/how-we-work",
  about: "/about",
};

export async function createPageMetadata(
  page: MetadataPageKey,
  locale: string,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const pageMeta = t.raw(page) as { title: string; description: string };
  const pathname = pagePathByKey[page];

  const languages = Object.fromEntries(
    routing.locales.map((item) => [
      item,
      `${siteConfig.url}${getPathname({ locale: item, href: pathname })}`,
    ]),
  );

  const canonical = languages[locale] ?? `${siteConfig.url}${pathname}`;

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
      languages: {
        ...languages,
        "x-default": languages[routing.defaultLocale],
      },
    },
    openGraph: {
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.name,
      type: "website",
      locale,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: pageMeta.title,
      description: pageMeta.description,
    },
  };
}
