"use client";

import Image from "next/image";

type ProjectCardProps = {
  title: string;
  category: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  aspectRatio?: "portrait" | "square" | "landscape";
  onPreview?: () => void;
};

const overlayByCategory: Record<string, string> = {
  "Brand Strategy": "from-amber-500/35 via-orange-600/15 to-transparent",
  "Creative Direction": "from-emerald-500/30 via-yellow-500/10 to-transparent",
  "Creative Production": "from-sky-500/30 via-fuchsia-500/15 to-transparent"
};

const aspectByType = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  landscape: "aspect-[5/4]"
};

export default function ProjectCard({
  title,
  category,
  href,
  imageSrc,
  imageAlt,
  aspectRatio = "portrait",
  onPreview
}: ProjectCardProps) {
  const overlayClass =
    overlayByCategory[category] ?? "from-amber-500/30 via-orange-500/10 to-transparent";

  return (
    <article className="group overflow-hidden rounded-2xl border border-border/80 bg-surface/50 transition-all duration-300 hover:-translate-y-1 hover:border-accent/70 hover:shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
      <div className={`relative ${aspectByType[aspectRatio]} w-full overflow-hidden bg-black/20`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.01]"
        />
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-gradient-to-tr ${overlayClass} transition-opacity duration-300 group-hover:opacity-80`}
        />
      </div>

      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">{category}</p>
        <h3 className="mt-4 text-2xl font-semibold leading-tight text-foreground">{title}</h3>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={href}
            className="inline-flex items-center text-sm uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-foreground"
          >
            View case study
          </a>
          <button
            type="button"
            onClick={onPreview}
            className="inline-flex items-center text-sm uppercase tracking-[0.16em] text-muted transition-colors hover:text-foreground"
          >
            Preview artwork
          </button>
        </div>
      </div>
    </article>
  );
}
