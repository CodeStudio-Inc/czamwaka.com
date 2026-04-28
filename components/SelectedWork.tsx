"use client";

import { useEffect, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import type { Project } from "@/data/projects";

type SelectedWorkProps = {
  projects: Project[];
};

export default function SelectedWork({ projects }: SelectedWorkProps) {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const activeProject =
    activeProjectIndex === null ? null : projects[activeProjectIndex] ?? null;

  function closePreview() {
    setActiveProjectIndex(null);
  }

  function showPreviousProject() {
    setActiveProjectIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      const previousIndex = currentIndex - 1;
      return previousIndex < 0 ? projects.length - 1 : previousIndex;
    });
  }

  function showNextProject() {
    setActiveProjectIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return (currentIndex + 1) % projects.length;
    });
  }

  function onTouchStart(event: TouchEvent<HTMLDivElement>) {
    setTouchStartX(event.changedTouches[0]?.clientX ?? null);
  }

  function onTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const deltaX = touchEndX - touchStartX;
    const swipeThreshold = 60;

    if (Math.abs(deltaX) < swipeThreshold) {
      setTouchStartX(null);
      return;
    }

    if (deltaX > 0) {
      showPreviousProject();
    } else {
      showNextProject();
    }

    setTouchStartX(null);
  }

  useEffect(() => {
    if (activeProjectIndex === null) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closePreview();
      }

      if (event.key === "ArrowLeft") {
        showPreviousProject();
      }

      if (event.key === "ArrowRight") {
        showNextProject();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProjectIndex, projects.length]);

  return (
    <>
      <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
        {projects.map((project, index) => (
          <div key={project.title} className="mb-5 break-inside-avoid">
            <Reveal delay={index * 0.08}>
              <ProjectCard
                title={project.title}
                category={project.category}
                href={project.href}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                aspectRatio={project.aspectRatio}
                onPreview={() => setActiveProjectIndex(index)}
              />
            </Reveal>
          </div>
        ))}
      </div>

      {activeProject ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Preview for ${activeProject.title}`}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={closePreview}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              type="button"
              aria-label="Previous artwork"
              onClick={showPreviousProject}
              className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white transition-colors hover:border-white hover:bg-black/60"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              aria-label="Close artwork preview"
              onClick={closePreview}
              className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white transition-colors hover:border-white hover:bg-black/60"
            >
              <X size={18} />
            </button>

            <button
              type="button"
              aria-label="Next artwork"
              onClick={showNextProject}
              className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white transition-colors hover:border-white hover:bg-black/60"
            >
              <ChevronRight size={20} />
            </button>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/20 bg-black">
              <Image
                src={activeProject.imageSrc}
                alt={activeProject.imageAlt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-white/85">
              <p className="text-xs uppercase tracking-[0.18em] text-white/65">
                {activeProject.category}
              </p>
              <p className="font-serif text-xl text-white">{activeProject.title}</p>
            </div>

            <p className="mt-2 text-right text-xs uppercase tracking-[0.16em] text-white/55">
              Swipe or use arrow keys
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
