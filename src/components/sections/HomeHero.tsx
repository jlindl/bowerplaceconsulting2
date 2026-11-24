import Image from "next/image";
import Link from "next/link";
import Lines from "../Lines";
import { Arrow } from "../Icons";

export default function HomeHero() {
  return (
    <section aria-labelledby="hero-title" className="relative pt-[112px] md:pt-[min(128px,17vh)]" data-hero>
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7 lg:pt-6">
          <p className="label flex items-center gap-3 text-muted" data-anim="fade">
            <span className="h-px w-8 shrink-0 bg-accent" aria-hidden="true" />
            GovTech consulting for the UK public sector
          </p>

          <Lines
            as="h1"
            id="hero-title"
            hero
            className="mt-6 font-serif text-[clamp(46px,min(6.5vw,13.5vh),104px)] leading-[0.98] tracking-[-0.032em] [font-variation-settings:'opsz'_72] lg:mt-[min(3.2vh,28px)]"
            lines={[
              "Public services,",
              "delivered from",
              <em key="i" className="italic">
                the inside<span className="not-italic text-accent">.</span>
              </em>,
            ]}
          />

          <p className="lead mt-6 max-w-[56ch] lg:mt-[min(3.2vh,28px)]" data-anim="fade">
            Senior practitioners who have run government programmes, now helping central government, local
            authorities, the NHS and arm&rsquo;s-length bodies deliver change that lasts.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 lg:mt-[min(4.4vh,40px)]" data-anim="rise">
            <Link href="/contact" className="btn btn-primary">
              Start a conversation <Arrow />
            </Link>
            <Link href="/services" className="arrow-link">
              <span className="u">Explore our services</span>
            </Link>
          </div>
        </div>

        <figure className="lg:col-span-5">
          <div
            className="img-frame aspect-[4/5] w-full rounded-t-[999px] lg:aspect-auto lg:h-[min(74vh,660px)]"
            data-anim="img"
          >
            <Image
              src="/images/hero.webp"
              alt="An ornate stone government building behind bare winter trees"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="label mt-3 flex justify-between text-muted">
            <span>Fig. 01</span>
            <span>Change built to last</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
