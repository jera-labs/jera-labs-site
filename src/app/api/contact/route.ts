import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { siteConfig } from "@/lib/constants";

const contactBodySchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().email(),
  company: z.string().trim().optional(),
  message: z.string().trim().min(20),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactBodySchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "validation_error" },
        { status: 400 },
      );
    }

    const { name, email, company, message } = parsed.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      if (process.env.NODE_ENV === "development") {
        console.info("[contact] RESEND_API_KEY missing. Accepted payload:", {
          name,
          email,
          company,
        });
        return NextResponse.json({ ok: true, mode: "dev-noop" });
      }

      return NextResponse.json(
        { ok: false, error: "email_not_configured" },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const from =
      process.env.RESEND_FROM_EMAIL ?? "Jera Labs <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to: siteConfig.email,
      replyTo: email,
      subject: `Nuevo contacto — ${name}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Empresa: ${company || "—"}`,
        "",
        "Mensaje:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "send_failed" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Unexpected error:", error);
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500 },
    );
  }
}
