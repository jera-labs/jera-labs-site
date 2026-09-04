import { siteConfig } from "@/lib/constants";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    logo: `${siteConfig.url}/brand/jera-mark.png`,
    image: `${siteConfig.url}/opengraph-image`,
    sameAs: [],
    description:
      "Software Studio that builds digital systems connecting technology, processes, and data.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
