import { founders } from "@/content/site";

/** Arch-framed monograms in place of portraits until real photography is supplied. */
export default function Founders({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <ul className="grid gap-12 md:grid-cols-2 md:gap-10" data-anim="stagger">
      {founders.map((f) => (
        <li key={f.name} className="grid grid-cols-[112px_1fr] gap-6 border-t border-rule pt-8 sm:grid-cols-[148px_1fr] sm:gap-8">
          <div
            className="flex aspect-[3/4] items-end justify-center rounded-t-full bg-ink-2 pb-5 text-paper"
            aria-hidden="true"
          >
            <span className="font-serif text-[40px] italic leading-none tracking-[-0.02em] sm:text-[48px]">{f.initials}</span>
          </div>
          <div>
            <H className="h3">{f.name}</H>
            <p className="label mt-2 text-muted">{f.role}</p>
            <p className="mt-5 text-[16px] leading-relaxed text-ink/85">{f.bio}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
