const footerLinks = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=IZRnfS0AAAAJ&hl=en",
  },
  {
    label: "Project Inquiries",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdxbH03CpaKTalBdizuW275xrO2VZ2KYM1sM98b5XTWRyxAhg/viewform?usp=header",
  },
  {
    label: "Request Reference",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeFxmpSRlH2oiHq5F6XDiFLehMtkKtf9iciqByCT1w2DkPVjA/viewform?usp=header",
  },
];

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Dr. Carlos M. Peredo
        </p>
        <ul className="flex flex-wrap gap-6">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-accent transition-colors"
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
