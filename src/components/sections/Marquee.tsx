"use client";
import { useState } from "react";
import { formerRoles } from "@/content/site";

export default function Marquee() {
  const [paused, setPaused] = useState(false);
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {formerRoles.map((r) => (
        <li key={r} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-serif text-[clamp(28px,3.4vw,46px)] italic tracking-[-0.015em] md:px-12">
            {r}
          </span>
          <span className="h-2 w-2 rotate-45 border border-rule" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-labelledby="marquee-title" className="pt-16 md:pt-24">
      <div className="wrap flex items-end justify-between gap-6">
        <h2 id="marquee-title" className="label max-w-[40ch] text-muted">
          Our founders have held senior delivery roles across
        </h2>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="label flex min-h-11 items-center gap-2 text-muted hover:text-ink"
          aria-label={paused ? "Play the scrolling list" : "Pause the scrolling list"}
        >
          {paused ? "Play" : "Pause"}
        </button>
      </div>
      <div
        className="marquee relative mt-8 overflow-hidden border-y border-rule py-7 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
        data-paused={paused}
      >
        <div className="marquee-track">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
