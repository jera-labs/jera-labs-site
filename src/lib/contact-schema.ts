import { z } from "zod";

export function createContactSchema(messages: {
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  messageRequired: string;
  messageMin: string;
}) {
  return z.object({
    name: z.string().trim().min(1, messages.nameRequired),
    email: z
      .string()
      .trim()
      .min(1, messages.emailRequired)
      .email(messages.emailInvalid),
    company: z.string().trim().optional(),
    message: z
      .string()
      .trim()
      .min(1, messages.messageRequired)
      .min(20, messages.messageMin),
  });
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactSchema>>;
