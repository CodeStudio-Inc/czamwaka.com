import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import SelectedWork from "@/components/SelectedWork";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate w-full overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dy8hw3vod/image/upload/v1777385651/Artboard_3_wchddn.png')"
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70"
        />

        <div className="relative mx-auto min-h-[70vh] w-full max-w-6xl px-4 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-32 lg:min-h-[80vh] lg:pb-28" />
      </section>

      <section id="work" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl">Selected Work</h2>
            <p className="max-w-sm text-left text-xs uppercase tracking-[0.16em] text-muted sm:text-right sm:text-sm sm:tracking-[0.18em]">
              Experiences that move culture and business
            </p>
          </div>
        </Reveal>

        <SelectedWork projects={projects} />
      </section>

      <section
        id="approach"
        className="mx-auto w-full max-w-6xl border-y border-border/70 px-4 py-16 sm:px-8 sm:py-20"
      >
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-surface/40">
              <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:min-h-[620px]">
                <Image
                  src="https://res.cloudinary.com/dy8hw3vod/image/upload/v1777382855/a9704d5f-0e24-4acb-9085-9f10c130cc3e_2_1_zuke2d.png"
                  alt="Portrait of Mwaka Caesar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-3xl text-foreground">Mwaka Caesar</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-muted">
                  Founder &amp; Creative Director, KwonKalture Creatives.
                </p>
                <p className="mt-4 font-serif text-2xl leading-snug text-foreground">
                  Creative entrepreneur and cultural strategist.
                </p>
              </div>
            </div>

            <div className="flex h-full items-center">
              <p className="text-lg leading-relaxed text-muted sm:text-xl">
                Mwaka leads KwonKalture Creatives, a multidisciplinary creative studio focused
                on brand storytelling, cultural insight, and creative direction across Africa.
                His practice connects brand strategy, creative production, and community-driven
                campaigns to build work that is grounded in local identity while pushing a
                forward-looking global perspective.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <blockquote className="mx-auto mt-16 max-w-3xl text-center font-serif text-3xl italic leading-tight text-foreground sm:text-4xl">
            "Creativity is the bridge between culture and impact."
          </blockquote>
        </Reveal>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Contact</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-foreground sm:text-5xl">
            Let&apos;s shape culture-led work together.
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            For partnerships, speaking opportunities, or project collaborations, send a note
            and the KwonKalture team will respond soon.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
            <a
              href="https://wa.me/256771675053"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-border px-5 py-3 text-sm uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>

            <a
              href="mailto:mwakacaesar!gmail.com"
              className="inline-flex items-center gap-3 rounded-full border border-border px-5 py-3 text-sm uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent"
              aria-label="Send an email"
            >
              <Mail size={17} />
              mwakacaesar!gmail.com
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
