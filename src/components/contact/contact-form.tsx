"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  createContactSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/components/shared/primary-button";

const fieldClassName =
  "w-full rounded-sm border border-soft-gray/20 bg-deep-graphite px-3.5 py-2.5 text-sm text-ivory-white placeholder:text-soft-gray/40 transition-colors focus:border-tech-teal focus:outline-none";

const labelClassName = "mb-1.5 block text-sm text-soft-gray/85";

export function ContactForm() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const schema = createContactSchema({
    nameRequired: t("validation.nameRequired"),
    emailRequired: t("validation.emailRequired"),
    emailInvalid: t("validation.emailInvalid"),
    messageRequired: t("validation.messageRequired"),
    messageMin: t("validation.messageMin"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-xl space-y-5"
      noValidate
    >
      <div>
        <label htmlFor="name" className={labelClassName}>
          {t("fields.name")}
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={cn(fieldClassName, errors.name && "border-signal-orange/70")}
          placeholder={t("fields.namePlaceholder")}
          {...register("name")}
        />
        {errors.name ? (
          <p className="mt-1.5 text-xs text-signal-orange">{errors.name.message}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className={labelClassName}>
          {t("fields.email")}
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={cn(fieldClassName, errors.email && "border-signal-orange/70")}
          placeholder={t("fields.emailPlaceholder")}
          {...register("email")}
        />
        {errors.email ? (
          <p className="mt-1.5 text-xs text-signal-orange">{errors.email.message}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="company" className={labelClassName}>
          {t("fields.company")}
        </label>
        <input
          id="company"
          type="text"
          autoComplete="organization"
          className={fieldClassName}
          placeholder={t("fields.companyPlaceholder")}
          {...register("company")}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClassName}>
          {t("fields.message")}
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn(
            fieldClassName,
            "resize-y min-h-[8rem]",
            errors.message && "border-signal-orange/70",
          )}
          placeholder={t("fields.messagePlaceholder")}
          {...register("message")}
        />
        {errors.message ? (
          <p className="mt-1.5 text-xs text-signal-orange">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <PrimaryButton type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? t("submitting") : t("submit")}
      </PrimaryButton>

      {status === "success" ? (
        <p className="text-sm text-tech-teal" role="status">
          {t("success")}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-signal-orange" role="alert">
          {t("error")}
        </p>
      ) : null}
    </form>
  );
}
