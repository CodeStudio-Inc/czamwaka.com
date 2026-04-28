"use client";

import { FormEvent, useState } from "react";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));

      setStatus("success");
      setMessage("Thanks for reaching out. Your message is ready to send.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
      <label className="flex flex-col gap-2 text-sm text-muted">
        Name
        <input
          name="name"
          required
          autoComplete="name"
          placeholder="Your full name"
          className="rounded-xl border border-border bg-transparent px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted/80 focus:border-accent"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm text-muted">
        Email
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className="rounded-xl border border-border bg-transparent px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted/80 focus:border-accent"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm text-muted sm:col-span-2">
        Message
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell me about your project goals"
          className="resize-none rounded-xl border border-border bg-transparent px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted/80 focus:border-accent"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 inline-flex w-fit rounded-full border border-border px-6 py-3 text-sm uppercase tracking-[0.18em] text-foreground transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      {status !== "idle" && message ? (
        <p
          role="status"
          className={`sm:col-span-2 text-sm ${status === "success" ? "text-accent" : "text-red-400"}`}
        >
          {message}
        </p>
      ) : null}

      <p className="sm:col-span-2 text-xs uppercase tracking-[0.14em] text-muted/80">
        Frontend demo form only. Connect an API or form service for production delivery.
      </p>
    </form>
  );
}
