"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * ContactForm — name, email, message. UI-only for now: submit shows a
 * confirmation state in place. The email-sending pipeline plugs in here
 * later; a mailto fallback keeps the message reachable until then.
 */
const fieldClasses =
  "w-full rounded-md border border-line bg-ink px-3.5 py-2.5 text-sm text-fg placeholder:text-muted/60 transition-colors duration-200 focus:border-accent focus:outline-none";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-medium tracking-wide text-muted"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        aria-live="polite"
        className="animate-hero-fade flex flex-col items-start gap-3"
      >
        <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
        <p className="text-lg font-bold tracking-tight text-fg">
          Message received — nice.
        </p>
        <p className="max-w-prose text-sm leading-relaxed text-muted">
          This form is front-end only for now — the sending pipeline is next on
          the list. If you need a fast answer today, use the email in the
          header and you&apos;ll hear back either way.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="cf-name">
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className={fieldClasses}
          />
        </Field>
        <Field label="Email" htmlFor="cf-email">
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={fieldClasses}
          />
        </Field>
      </div>

      <Field label="Message" htmlFor="cf-message">
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="Project idea, timeline, budget range — whatever helps."
          className={cn(fieldClasses, "resize-y")}
        />
      </Field>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-ink transition-colors duration-200 hover:bg-accent-bright"
        >
          Send message
          <ArrowRight
            className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        </button>
        <p className="text-xs leading-relaxed text-muted">
          Prefer email? The address in the header works too.
        </p>
      </div>
    </form>
  );
}
