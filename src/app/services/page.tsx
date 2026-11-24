import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import MethodLedger from "@/components/sections/MethodLedger";
import Accreditations from "@/components/sections/Accreditations";
import CtaBand from "@/components/CtaBand";
import { Arrow } from "@/components/Icons";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital transformation, major programme management and AI and cloud services for UK central government, local authorities, the NHS and arm's-length bodies.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        lines={["Three services.", <em key="e" className="italic">One senior team.</em>]}
        lead="Each service is led by people who have delivered it inside government, from the first strategy conversation to the benefits it was meant to bring."
      />

      <div className="wrap pt-16 md:pt-24">
        {services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            aria-labelledby={`${s.slug}-title`}
            className="scroll-mt-24 border-t border-ink py-16 md:py-24"
          >
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2 lg:col-start-7" : ""}`}>
                <p className="label text-accent">{s.no}</p>
                <h2 id={`${s.slug}-title`} className="h2 mt-5">
                  {s.title}
                </h2>
                <p className="mt-6 max-w-[52ch] text-[18px] leading-relaxed text-ink/85" data-anim="fade">
                  {s.body}
                </p>
                <ul className="mt-10 border-t border-rule" data-anim="stagger">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-baseline gap-4 border-b border-rule py-4 text-[16px]">
                      <span className="inline-block h-1.5 w-1.5 shrink-0 -translate-y-[2px] rotate-45 bg-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={`/contact?service=${s.slug}`} className="arrow-link mt-8">
                  <span className="u">{s.cta}</span> <Arrow />
                </Link>
              </div>
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : "lg:col-start-8"}`}>
                <div className="img-frame aspect-[4/5] w-full" data-anim="img">
                  <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="border-t border-rule">
        <MethodLedger />
      </div>
      <div className="border-t border-rule">
        <Accreditations />
      </div>
      <CtaBand />
    </>
  );
}
