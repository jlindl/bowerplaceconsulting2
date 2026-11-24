"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type Lenis from "lenis";
import Logo from "./Logo";
import { Arrow } from "./Icons";
import { nav, site } from "@/content/site";

const getLenis = () => (window as unknown as { __lenis?: Lenis }).__lenis;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y > 240 && y > last + 2) setHidden(true);
      else if (y < last - 2 || y <= 240) setHidden(false);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const lenis = getLenis();
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
      >
        Skip to content
      </a>
      <header
        onFocusCapture={() => setHidden(false)}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(.2,.7,.1,1)] ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${scrolled || open ? "border-rule bg-paper/95 backdrop-blur-md" : "border-transparent bg-paper/0"}`}
      >
        <div className="wrap flex h-[76px] items-center justify-between gap-6">
          <Link href="/" aria-label="Bower Place, home" className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {nav.slice(0, 3).map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`link py-2 text-[15px] ${active ? "text-ink [background-size:100%_1px]" : "text-ink/80 hover:text-ink"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-6">
            <a
              href={site.phoneHref}
              className="link hidden font-mono text-[13px] tracking-[0.02em] text-ink/80 hover:text-ink xl:inline"
            >
              {site.phone}
            </a>
            <Link href="/contact" className="btn btn-primary hidden !min-h-[44px] !px-5 sm:inline-flex">
              Start a conversation <Arrow size={14} />
            </Link>
            <button
              type="button"
              className="relative -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={`absolute h-px w-6 bg-ink transition-transform duration-500 ${open ? "rotate-45" : "-translate-y-[4px]"}`}
              />
              <span
                className={`absolute h-px w-6 bg-ink transition-transform duration-500 ${open ? "-rotate-45" : "translate-y-[4px]"}`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        data-lenis-prevent
        className={`fixed inset-0 z-40 overflow-y-auto bg-paper pt-[76px] transition-[clip-path] duration-700 ease-[cubic-bezier(.2,.7,.1,1)] lg:hidden ${
          open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav aria-label="Mobile" className="wrap flex min-h-full flex-col pb-10 pt-8">
          <ul className="border-t border-rule">
            {nav.map((item, i) => (
              <li key={item.href} className="border-b border-rule">
                <Link href={item.href} className="flex items-baseline justify-between py-5">
                  <span className="font-serif text-[40px] leading-none tracking-[-0.02em]">{item.label}</span>
                  <span className="label text-muted">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-primary mt-8 justify-between">
            Start a conversation <Arrow />
          </Link>
          <div className="mt-auto space-y-3 pt-10">
            <a href={`mailto:${site.email}`} className="block text-[17px]">
              {site.email}
            </a>
            <a href={site.phoneHref} className="block font-mono text-[15px]">
              {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
