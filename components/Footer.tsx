import { Instagram, Linkedin, Twitter } from "lucide-react";

const socials = [
  { href: "#", label: "Instagram", Icon: Instagram },
  { href: "#", label: "Twitter", Icon: Twitter },
  { href: "#", label: "LinkedIn", Icon: Linkedin }
];

export default function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-5 text-sm text-muted sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} Mwaka Caesar. All rights reserved.</p>

        <div className="flex items-center gap-4">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="rounded-full border border-border p-2 transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
