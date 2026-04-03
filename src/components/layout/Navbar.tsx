import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/publications", label: "Publications" },
  { href: "/martial-arts", label: "Martial Arts" },
  { href: "/storytelling", label: "Storytelling" },
];

export function Navbar() {
  return (
    <nav className="relative bg-surface-primary border-b border-surface-border px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold text-text-primary hover:text-brand-500 transition-colors"
        >
          Dr. Carlos M. Peredo
        </Link>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-brand-500 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <MobileMenu links={navLinks} />
      </div>
    </nav>
  );
}
