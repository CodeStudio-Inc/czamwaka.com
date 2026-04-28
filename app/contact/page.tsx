import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-accent">Contact</p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          Start a conversation with Czamwaka.
        </h1>
        <p className="mt-5 max-w-2xl text-muted">
          Share your project vision, timeline, and goals. This page is a frontend contact
          experience and can be connected to your preferred backend or form provider.
        </p>
        <ContactForm />
      </Reveal>
    </section>
  );
}
