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

const ogLocaleByAppLocale: Record<string, string> = {
  es: "es_ES",
  en: "en_US",
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
  const ogLocale = ogLocaleByAppLocale[locale] ?? "es_ES";
  const alternateLocales = routing.locales
    .filter((item) => item !== locale)
    .map((item) => ogLocaleByAppLocale[item] ?? item);

  const ogImageAlt = t("ogImageAlt");
  const ogImagePath =
    locale === routing.defaultLocale
      ? "/opengraph-image"
      : `/${locale}/opengraph-image`;
  const ogImages = [
    {
      url: ogImagePath,
      secureUrl: `${siteConfig.url}${ogImagePath}`,
      width: 1200,
      height: 630,
      alt: ogImageAlt,
      type: "image/png",
    },
  ];

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    keywords: t.raw("keywords") as string[],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
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
      locale: ogLocale,
      alternateLocale: alternateLocales,
      url: canonical,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: pageMeta.title,
      description: pageMeta.description,
      images: ogImages.map((image) => ({
        url: image.url,
        alt: image.alt,
        width: image.width,
        height: image.height,
      })),
    },
  };
}
