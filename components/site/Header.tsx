"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "lib/site/nav";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#0d0c0a]/10 bg-[#f7f7f4]/75 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full border border-[#0d0c0a]/15 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#0d0c0a]/70"
        >
          <span>Movementopia</span>
          <span className="h-1 w-1 rounded-full bg-[#0d0c0a]/50" />
          <span>Playful Minimal Strength</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium uppercase tracking-[0.14em] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#0d0c0a]/70 transition-colors hover:text-[#0d0c0a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-[#0d0c0a]/15 bg-white/70 p-2 text-[#0d0c0a] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id={menuId}
        className={[
          "md:hidden",
          isOpen ? "block" : "hidden",
          "border-t border-[#0d0c0a]/10 bg-[#f7f7f4]/90 backdrop-blur",
        ].join(" ")}
      >
        <nav className="mx-auto max-w-5xl px-6 py-4 md:px-10">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-2xl border border-[#0d0c0a]/10 bg-white/70 px-4 py-3 text-sm font-medium uppercase tracking-[0.14em] text-[#0d0c0a]/80"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

