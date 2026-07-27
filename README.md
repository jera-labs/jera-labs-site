# Jera Labs — sitio institucional

Sitio web de [Jera Labs](https://jeralabs.com): estudio tecnológico que conecta negocio, marketing y tecnología.

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- next-intl (ES / EN)
- Motion + Lucide
- React Hook Form + Zod
- Resend (formulario de contacto)

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Copiá `.env.example` a `.env.local` y completá:

- `RESEND_API_KEY` — clave de API de Resend
- `RESEND_FROM_EMAIL` — remitente verificado (o `onboarding@resend.dev` para pruebas)
- `NEXT_PUBLIC_SITE_URL` — URL pública del sitio

Sin `RESEND_API_KEY`, el formulario acepta envíos en desarrollo (noop) y responde `503` en producción.

El destino de los mensajes es `contacto.jeralabs@gmail.com`.

## Scripts

```bash
pnpm lint
pnpm build
pnpm start
```

## Despliegue (Vercel)

1. Importá el repo `jera-labs/jera-labs-site` en Vercel.
2. Configurá las variables de entorno del proyecto.
3. Deploy desde `main`.

O con CLI:

```bash
npx vercel
```

## Rutas

- `/` — Home
- `/what-we-solve` — Qué resolvemos
- `/how-we-work` — Cómo trabajamos
- `/about` — Nosotros
- `/contact` — Contacto
- `/en/...` — variantes en inglés
