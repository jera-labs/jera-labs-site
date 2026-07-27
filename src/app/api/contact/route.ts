import { NextResponse } from "next/server";
import { z } from "zod";

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

    // Resend integration lands in a later stage.
    // For now we accept valid payloads so the UX flow is complete.
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500 },
    );
  }
}
