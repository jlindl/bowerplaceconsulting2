import Link from "next/link";
import HomeHero from "@/components/sections/HomeHero";
import ProofLedger from "@/components/sections/ProofLedger";
import Marquee from "@/components/sections/Marquee";
import ServiceRows from "@/components/sections/ServiceRows";
import Principles from "@/components/sections/Principles";
import MethodLedger from "@/components/sections/MethodLedger";
import CaseReport from "@/components/sections/CaseReport";
import Founders from "@/components/sections/Founders";
import CtaBand from "@/components/CtaBand";
import Lines from "@/components/Lines";
import { Arrow } from "@/components/Icons";
import { cases } from "@/content/site";

export const metadata = {
  alternates: { canonical: "/" },
};

const Rule = () => <span className="mr-3 inline-block h-px w-8 -translate-y-[4px] bg-accent" aria-hidden="true" />;

export default function Home() {
  return (
    <>
      <HomeHero />
      <ProofLedger />
      <Marquee />
      <ServiceRows />
      <Principles />
      <MethodLedger />

      <section aria-labelledby="work-title" className="border-t border-rule">
        <div className="wrap pt-[var(--section)]">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="label text-muted">
                <Rule />
                Selected work
              </p>
              <Lines id="work-title" className="h2 mt-6" lines={["Work that", "speaks for itself."]} />
            </div>
            <p className="text-[16px] text-muted md:col-span-4" data-anim="fade">
              Client names are withheld by default. Full details are available under NDA.
            </p>
          </div>
          {cases.slice(0, 2).map((c, i) => (
            <CaseReport key={c.slug} c={c} index={i} />
          ))}
          <div className="flex justify-end border-t border-rule py-8">
            <Link href="/work" className="arrow-link">
              <span className="u">See all four case studies</span> <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="founders-title" className="bg-paper-2/60">
        <div className="wrap section">
          <div className="grid gap-8 md:grid-cols-12">
            <p className="label text-muted md:col-span-4">
              <Rule />
              Who you work with
            </p>
            <div className="md:col-span-8">
              <Lines
                id="founders-title"
                className="h2"
                lines={["Founded by practitioners", "who spent their careers", "inside public programmes."]}
              />
            </div>
          </div>
          <div className="mt-16 md:mt-20">
            <Founders />
          </div>
          <div className="mt-12 flex justify-end">
            <Link href="/about" className="arrow-link">
              <span className="u">More about Bower Place</span> <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
