import Image from "next/image";
import Link from "next/link";
import Lines from "../Lines";
import { ArrowUpRight } from "../Icons";
import { services } from "@/content/site";

export default function ServiceRows() {
  return (
    <section aria-labelledby="services-title" className="wrap section">
      <div className="grid gap-8 md:grid-cols-12">
        <p className="label text-muted md:col-span-4">
          <span className="mr-3 inline-block h-px w-8 -translate-y-[4px] bg-accent" aria-hidden="true" />Our services
        </p>
        <div className="md:col-span-8">
          <Lines
            id="services-title"
            className="h2"
            lines={["Lasting digital change,", "from strategy to live service."]}
          />
          <p className="lead mt-6 max-w-[52ch]" data-anim="fade">
            Three specialist services, each led by people who have delivered them inside government.
          </p>
        </div>
      </div>

      <ul className="mt-16 border-t border-ink md:mt-24">
        {services.map((s) => (
          <li key={s.slug} className="border-b border-rule">
            <Link
              href={`/services#${s.slug}`}
              className="group grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-4 py-8 md:grid-cols-12 md:gap-x-10 md:py-10"
            >
              <span className="label self-start pt-2 text-muted md:col-span-1">{s.no}</span>
              <h3 className="font-serif text-[clamp(30px,3.4vw,48px)] leading-[1.05] tracking-[-0.022em] transition-colors duration-500 group-hover:text-accent md:col-span-5">
                {s.title}
              </h3>
              <p className="col-span-2 max-w-[40ch] text-[16px] text-muted md:col-span-3">{s.short}</p>
              <div className="col-span-2 flex items-center justify-between gap-6 md:col-span-3">
                <div className="img-frame aspect-[4/3] w-[45%] max-w-[180px] md:w-[70%]">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="180px"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(.2,.7,.1,1)] group-hover:scale-[1.06]"
                  />
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-rule transition-colors duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                  <ArrowUpRight />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
