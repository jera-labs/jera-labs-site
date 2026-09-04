import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Jera Labs — Software Studio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type OgImageProps = {
  params: Promise<{ locale: string }>;
};

export default async function OpenGraphImage({ params }: OgImageProps) {
  const { locale } = await params;
  const isEs = locale !== "en";

  const logoData = await readFile(
    join(process.cwd(), "public/brand/jera-mark.png"),
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  const title = isEs
    ? "Construimos sistemas digitales que hacen trabajar mejor a tu negocio."
    : "We build digital systems that make businesses work better.";

  const pillars = isEs
    ? "Desarrollo · Automatización · Integración · IA aplicada"
    : "Development · Automation · Integration · Applied AI";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#13181B",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(12,43,71,0.9) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(46,199,201,0.12) 0%, transparent 50%)",
          padding: "64px 72px",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={72}
            height={72}
            alt=""
            style={{ objectFit: "contain" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: "#F9F8EF",
                letterSpacing: "-0.03em",
              }}
            >
              Jera Labs
            </div>
            <div
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "#2EC7C9",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Software Studio
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            maxWidth: 920,
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              lineHeight: 1.15,
              color: "#F9F8EF",
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#E6E9EC",
              opacity: 0.85,
            }}
          >
            {pillars}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 500,
              color: "#2EC7C9",
            }}
          >
            jeralabs.io
          </div>
          <div
            style={{
              width: 56,
              height: 4,
              backgroundColor: "#F15A24",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
