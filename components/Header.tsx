import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "#", label: "KwonKalture Creatives" },
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#"
          className="font-serif text-lg tracking-wide text-foreground transition-colors hover:text-accent"
          aria-label="Go to top"
        >
          Czamwaka
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-5 text-sm uppercase tracking-[0.18em] sm:gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
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
