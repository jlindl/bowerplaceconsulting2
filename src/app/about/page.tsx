import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Founders from "@/components/sections/Founders";
import Accreditations from "@/components/sections/Accreditations";
import CtaBand from "@/components/CtaBand";
import Lines from "@/components/Lines";
import { values, stats } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bower Place was founded by practitioners who spent their careers inside public sector programmes: the breadth of a large consultancy with the accountability of a small one.",
  alternates: { canonical: "/about" },
};

const Rule = () => <span className="mr-3 inline-block h-px w-8 -translate-y-[4px] bg-accent" aria-hidden="true" />;

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Bower Place"
        lines={["Built by people", "who have done", <em key="e" className="italic">the job.</em>]}
        lead="Founded by practitioners who spent their careers inside public sector programmes. The breadth of a large consultancy, the accountability of a small one, and senior people who stay on the work."
        image="/images/about.webp"
        alt="A Victorian clock tower beside a classical civic building with columns"
        caption="Fig. 02 / Civic institutions, built to last"
      />

      <section aria-labelledby="values-title" className="wrap section">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="label text-muted">
              <Rule />
              What we hold to
            </p>
            <Lines id="values-title" className="h2 mt-6" lines={["Four commitments", "we keep."]} />
          </div>
          <ol className="md:col-span-7" data-anim="stagger">
            {values.map((v, i) => (
              <li key={v.title} className="grid grid-cols-[56px_1fr] gap-4 border-t border-rule py-8 last:border-b">
                <span className="font-mono text-[13px] text-accent">0{i + 1}</span>
                <div>
                  <h3 className="h3">{v.title}</h3>
                  <p className="mt-2 max-w-[52ch] text-[16px] text-muted">{v.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-label="Track record" className="on-dark bg-ink text-paper">
        <dl className="wrap grid grid-cols-2 py-16 md:py-20 lg:grid-cols-4" data-anim="stagger">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col gap-3 py-6 pr-4 ${i > 0 ? "lg:border-l lg:border-rule-dark lg:pl-8" : ""} ${i % 2 === 1 ? "border-l border-rule-dark pl-5" : ""}`}
            >
              <dt className="order-2 max-w-[22ch] text-[15px] text-on-dark-muted">{s.label}</dt>
              <dd className="order-1 font-serif text-[clamp(44px,5vw,72px)] leading-none tracking-[-0.03em]">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="founders-title" className="wrap section">
        <div className="grid gap-8 md:grid-cols-12">
          <p className="label text-muted md:col-span-4">
            <Rule />
            Who you work with
          </p>
          <Lines id="founders-title" className="h2 md:col-span-8" lines={["The people on", "your programme."]} />
        </div>
        <div className="mt-16 md:mt-20">
          <Founders />
        </div>
      </section>

      <div className="border-t border-rule">
        <Accreditations />
      </div>
      <CtaBand />
    </>
  );
}
