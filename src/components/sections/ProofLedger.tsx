import { accreditations, stats } from "@/content/site";

export default function ProofLedger() {
  return (
    <section aria-label="Track record" className="wrap pt-20 md:pt-28">
      <div className="h-px w-full bg-ink" data-anim="rule" />
      <dl className="grid grid-cols-2 lg:grid-cols-4" data-anim="stagger">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col gap-3 border-rule py-8 pr-4 md:py-10 ${
              i % 2 === 1 ? "border-l pl-5 md:pl-8" : ""
            } ${i >= 2 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:pl-8" : ""}`}
          >
            <dt className="order-2 max-w-[22ch] text-[15px] leading-snug text-muted">{s.label}</dt>
            <dd className="order-1 font-serif text-[clamp(44px,5vw,72px)] leading-none tracking-[-0.03em]">{s.value}</dd>
          </div>
        ))}
      </dl>
      <div className="h-px w-full bg-rule" />
      <ul className="flex flex-wrap gap-x-10 gap-y-3 py-6" aria-label="Accreditations">
        {accreditations.map((a) => (
          <li key={a.name} className="label flex items-center gap-2.5 text-ink/80">
            <span className="inline-block h-1.5 w-1.5 rotate-45 bg-accent" aria-hidden="true" />
            {a.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
