export const siteConfig = {
  name: "Jera Labs",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jeralabs.com",
  email: "contacto.jeralabs@gmail.com",
} as const;

export const locales = ["es", "en"] as const;
export const defaultLocale = "es" as const;
