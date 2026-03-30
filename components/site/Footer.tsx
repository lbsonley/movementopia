import Link from "next/link";
import { footerLinks } from "lib/site/footer";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#0d0c0a]/10 bg-[#f7f7f4]/70">
      <div className="mx-auto max-w-5xl px-6 py-10 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-[#0d0c0a]/70">
            <span className="font-medium text-[#0d0c0a]">Movementopia</span>{" "}
            <span>© {new Date().getFullYear()}</span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium uppercase tracking-[0.14em]">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#0d0c0a]/70 transition-colors hover:text-[#0d0c0a]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

