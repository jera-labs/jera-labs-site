# Jera Labs — sitio institucional

Sitio web de [Jera Labs](https://jeralabs.io): Software Studio que construye sistemas digitales para negocios.

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- next-intl (ES / EN)
- Motion + Lucide

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Copiá `.env.example` a `.env.local` y completá:

- `NEXT_PUBLIC_SITE_URL` — URL pública del sitio (sin barra final), p. ej. `https://jeralabs.io`

## Scripts

```bash
pnpm lint
pnpm build
pnpm start
```

## Despliegue (Vercel)

1. Importá el repo `jera-labs/jera-labs-site` en Vercel.
2. Configurá `NEXT_PUBLIC_SITE_URL`.
3. Deploy desde `main` con la cuenta GitHub **jera-labs**.

## Rutas

- `/` — Home
- `/what-we-solve` — Qué resolvemos
- `/how-we-work` — Cómo trabajamos
- `/about` — Nosotros
- `/en/...` — variantes en inglés

Los CTAs “Hablemos / Let’s talk” abren WhatsApp (Alejandro). El CTA final ofrece conversar con Karla o Alejandro. El email queda en footer y en el CTA final.
