import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/storytelling", label: "Storytelling" },
  { href: "/martial-arts", label: "Martial Arts" },
];

export function Navbar() {
  return (
    <nav className="relative bg-navy border-b border-white/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-xl font-bold text-white hover:text-accent transition-colors"
        >
          Dr. Carlos M. Peredo
        </Link>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-heading text-sm text-gray-300 hover:text-white transition-colors"
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
