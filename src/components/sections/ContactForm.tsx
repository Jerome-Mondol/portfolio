"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdnlkez";
const SUBMISSION_LOCK_KEY = "portfolio-contact-submitted-v1";

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
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setSubmitted(window.localStorage.getItem(SUBMISSION_LOCK_KEY) === "1");
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Something went wrong while sending the message.");
      }

      form.reset();
      setSubmitted(true);
      window.localStorage.setItem(SUBMISSION_LOCK_KEY, "1");
    } catch {
      setError(
        "The message could not be sent right now. Please try again or email me directly."
      );
    } finally {
      setSubmitting(false);
    }
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
          Thanks for reaching out. I&apos;ve got your message and this browser
          is now locked from sending another one. If you need to follow up,
          email me directly from the header.
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
          disabled={submitting || submitted}
          className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-ink transition-colors duration-200 hover:bg-accent-bright"
        >
          {submitting ? "Sending..." : "Send message"}
          <ArrowRight
            className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        </button>
        <p className="text-xs leading-relaxed text-muted">
          Prefer email? The address in the header works too.
        </p>
      </div>

      {error && (
        <p className="text-sm leading-relaxed text-accent" aria-live="polite">
          {error}
        </p>
      )}
    </form>
  );
}
