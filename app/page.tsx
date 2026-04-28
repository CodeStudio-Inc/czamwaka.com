import Image from "next/image";
import ContactForm from "@/components/ContactForm";
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
              "url('https://res.cloudinary.com/dy8hw3vod/image/upload/v1777382296/IMAGINE_pw0lmd.png')"
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70"
        />

        <div className="relative mx-auto flex min-h-[72vh] w-full max-w-6xl items-end px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:min-h-[80vh] lg:pb-28">
          <Reveal className="relative z-10">
            <p className="mb-6 text-xs uppercase tracking-[0.26em] text-accent">
              Czamwaka Portfolio
            </p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Mwaka Caesar
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
              Where Culture Meets Creative Direction
            </p>
          </Reveal>
        </div>
      </section>

      <section id="work" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-serif text-4xl text-foreground sm:text-5xl">Selected Work</h2>
            <p className="max-w-sm text-right text-sm uppercase tracking-[0.18em] text-muted">
              Experiences that move culture and business
            </p>
          </div>
        </Reveal>

        <SelectedWork projects={projects} />
      </section>

      <section
        id="approach"
        className="mx-auto w-full max-w-6xl border-y border-border/70 px-5 py-16 sm:px-8 sm:py-20"
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
                Her practice connects brand strategy, creative production, and community-driven
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

      <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Contact</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Let&apos;s shape culture-led work together.
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            For partnerships, speaking opportunities, or project collaborations, send a note
            and the KwonKalture team will respond soon.
          </p>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
