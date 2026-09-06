const footerLinks = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=IZRnfS0AAAAJ&hl=en",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/carlos-mauricio-peredo",
  },
];

export function Footer() {
  return (
    <footer className="bg-surface-secondary border-t border-surface-border px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-tertiary text-sm">
          &copy; {new Date().getFullYear()} Dr. Carlos Mauricio Peredo
        </p>
        <ul className="flex flex-wrap gap-6">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-text-secondary hover:text-brand-500 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
