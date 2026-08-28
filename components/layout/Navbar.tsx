"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { MenuIcon, CloseIcon } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes, adjusted during
  // render (React's recommended pattern) rather than in a useEffect.
  const [renderedPathname, setRenderedPathname] = useState(pathname);
  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-cream/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pine font-serif text-base text-cream">
            D
          </span>
          <span className="font-serif text-lg leading-tight text-ink">
            Deekshitha
            <span className="block text-xs font-sans font-medium uppercase tracking-[0.2em] text-ink-soft">
              Dental Clinic
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm font-medium text-ink-soft transition-colors hover:text-pine",
                  active && "text-pine"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/appointment" variant="primary">
            Book an Appointment
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-cream lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-xl px-3 py-3 text-base font-medium text-ink-soft hover:bg-cream-soft hover:text-pine",
                    active && "bg-cream-soft text-pine"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button href="/appointment" variant="primary" className="mt-3 w-full">
              Book an Appointment
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
