import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "./constants";

type MetadataPageKey =
  | "home"
  | "whatWeSolve"
  | "howWeWork"
  | "about"
  | "contact";

export async function createPageMetadata(
  page: MetadataPageKey,
): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  const pageMeta = t.raw(page) as { title: string; description: string };

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    openGraph: {
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}
