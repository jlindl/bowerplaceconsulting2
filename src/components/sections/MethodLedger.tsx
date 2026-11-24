import Lines from "../Lines";
import { method } from "@/content/site";

export default function MethodLedger() {
  return (
    <section id="method" aria-labelledby="method-title" className="wrap section scroll-mt-24">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="label text-muted">
            <span className="mr-3 inline-block h-px w-8 -translate-y-[4px] bg-accent" aria-hidden="true" />How we work
          </p>
          <Lines id="method-title" className="h2 mt-6" lines={["One senior team,", "end to end."]} />
          <p className="lead mt-6 max-w-[40ch]" data-anim="fade">
            We stay accountable across the whole life of a programme, so nothing is lost between the business case
            and the benefits.
          </p>
        </div>

        <ol className="md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7" data-anim="stagger">
          {method.map((m) => (
            <li key={m.no} className="grid grid-cols-[56px_1fr] gap-4 border-t border-rule py-7 last:border-b md:grid-cols-[72px_200px_1fr] md:gap-6">
              <span className="font-mono text-[13px] text-accent">{m.no}</span>
              <h3 className="font-serif text-[24px] leading-tight tracking-[-0.01em]">{m.title}</h3>
              <p className="col-start-2 text-[16px] text-muted md:col-start-3">{m.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
