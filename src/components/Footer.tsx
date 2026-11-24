import Link from "next/link";
import Logo from "./Logo";
import { services, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="on-dark bg-ink text-paper">
      <div className="wrap pb-10 pt-20 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo inverted descriptor />
            <p className="mt-6 max-w-[38ch] text-[15px] leading-relaxed text-on-dark-muted">
              Leading public sector organisations through digital transformation, major programme delivery and
              AI-enabled services.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-[1fr_0.8fr_1.3fr] md:col-span-8">
            <div>
              <h2 className="label text-on-dark-muted">Services</h2>
              <ul className="mt-5 space-y-3 text-[15px]">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link className="link" href={`/services#${s.slug}`}>
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="label text-on-dark-muted">Company</h2>
              <ul className="mt-5 space-y-3 text-[15px]">
                <li>
                  <Link className="link" href="/about">About</Link>
                </li>
                <li>
                  <Link className="link" href="/work">Work</Link>
                </li>
                <li>
                  <Link className="link" href="/services#method">How we work</Link>
                </li>
                <li>
                  <Link className="link" href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="label text-on-dark-muted">Contact</h2>
              <ul className="mt-5 space-y-3 text-[15px]">
                <li>
                  <a className="link break-words" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </li>
                <li>
                  <a className="link font-mono text-[14px]" href={site.phoneHref}>
                    {site.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 select-none overflow-hidden border-t border-rule-dark pt-8" aria-hidden="true">
          <span className="block whitespace-nowrap font-serif text-[clamp(56px,16.2vw,234px)] leading-[0.82] tracking-[-0.04em] text-paper">
            Bower Place
          </span>
        </div>

        <div className="mt-10 flex flex-col gap-3 text-[13px] text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>
            Website by{" "}
            <a href="https://integrate-tech.co.uk" target="_blank" rel="noopener noreferrer" className="link text-paper">
              Integrate
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
