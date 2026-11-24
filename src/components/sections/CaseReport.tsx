import Image from "next/image";
import type { CaseStudy } from "@/content/site";

/**
 * Signature moment: each case study reads like a page from a published report.
 * The outcome figure is set very large and revealed through a mask (never counted up),
 * beside a sticky column, while the ruled challenge / approach / outcome ledger draws in.
 */
export default function CaseReport({ c, index, headingLevel = "h3" }: { c: CaseStudy; index: number; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  const rows = [
    { k: "Challenge", v: c.challenge },
    { k: "Approach", v: c.approach },
    { k: "Outcome", v: c.outcome },
  ];
  return (
    <article id={c.slug} aria-labelledby={`${c.slug}-title`} className="scroll-mt-24 py-16 md:py-24">
      <div className="h-px w-full bg-ink" data-anim="rule" />
      <div className="mt-6 flex flex-wrap justify-between gap-3">
        <p className="label text-muted">
          Case {String(index + 1).padStart(2, "0")} <span className="mx-2 text-rule">/</span> {c.service}
        </p>
        <p className="label text-muted">Client name withheld</p>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <H id={`${c.slug}-title`} className="h3 text-muted">
              {c.client}
            </H>
            <p className="mt-4" data-anim="lines">
              <span className="line">
                <span className="line-inner block whitespace-nowrap pt-[0.12em] font-serif text-[clamp(92px,11.5vw,168px)] leading-[0.92] tracking-[-0.045em] text-ink">
                  {c.figure}
                </span>
              </span>
            </p>
            <p className="mt-5 max-w-[24ch] text-[19px] leading-snug" data-anim="fade">
              {c.figureLabel}
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="img-frame aspect-[3/2] w-full" data-anim="img">
            <Image src={c.image} alt={c.alt} fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
          </div>
          <dl className="mt-10">
            {rows.map((r) => (
              <div key={r.k} className="grid gap-2 border-t border-rule py-6 sm:grid-cols-[140px_1fr] sm:gap-6" data-anim="fade">
                <dt className="label pt-1 text-muted">{r.k}</dt>
                <dd className={`text-[17px] leading-relaxed ${r.k === "Outcome" ? "text-ink" : "text-ink/85"}`}>{r.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  );
}
