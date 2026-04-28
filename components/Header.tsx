import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "#", label: "KwonKalture Creatives", shortLabel: "KwonKalture" },
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-8">
        <a
          href="#"
          className="shrink-0 font-serif text-base tracking-wide text-foreground transition-colors hover:text-accent sm:text-lg"
          aria-label="Go to top"
        >
          Czamwaka
        </a>

        <div className="flex min-w-0 items-center gap-3 sm:gap-6">
          <nav aria-label="Primary navigation" className="min-w-0 overflow-x-auto">
            <ul className="flex items-center gap-4 whitespace-nowrap pr-1 text-[11px] uppercase tracking-[0.16em] sm:gap-8 sm:text-sm sm:tracking-[0.18em]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    <span className="sm:hidden">{item.shortLabel ?? item.label}</span>
                    <span className="hidden sm:inline">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
