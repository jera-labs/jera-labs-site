export const siteConfig = {
  name: "Jera Labs",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jeralabs.io",
  email: "contacto.jeralabs@gmail.com",
  domainLabel: "jeralabs.io",
  whatsapp: {
    alejandro: {
      e164: "5491155813786",
      display: "+54 9 11 5581-3786",
    },
    karla: {
      e164: "5491141720529",
      display: "+54 9 11 4172-0529",
    },
  },
} as const;

export type WhatsAppPerson = keyof typeof siteConfig.whatsapp;

export function getWhatsAppUrl(person: WhatsAppPerson, prefill?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp[person].e164}`;
  if (!prefill) return base;
  return `${base}?text=${encodeURIComponent(prefill)}`;
}

export const locales = ["es", "en"] as const;
export const defaultLocale = "es" as const;
