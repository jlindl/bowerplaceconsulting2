import Image from "next/image";
import Lines from "./Lines";

export default function PageHero({
  label,
  lines,
  lead,
  image,
  alt,
  caption,
}: {
  label: string;
  lines: React.ReactNode[];
  lead: React.ReactNode;
  image?: string;
  alt?: string;
  caption?: string;
}) {
  return (
    <section aria-labelledby="page-title" className="pt-[128px] md:pt-[168px]" data-hero>
      <div className="wrap">
        <p className="label flex items-center gap-3 text-muted" data-anim="fade">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {label}
        </p>
        <div className="mt-7 grid gap-10 lg:grid-cols-12 lg:items-end">
          <Lines as="h1" id="page-title" hero className="h1 lg:col-span-8" lines={lines} />
          <p className="lead max-w-[46ch] lg:col-span-4" data-anim="fade">
            {lead}
          </p>
        </div>
        {image && (
          <figure className="mt-16 md:mt-24">
            <div className="img-frame aspect-[4/3] w-full md:aspect-[21/9]" data-anim="img">
              <Image src={image} alt={alt ?? ""} fill priority sizes="(min-width: 1320px) 1220px, 100vw" className="object-cover" />
            </div>
            {caption && <figcaption className="label mt-3 text-right text-muted">{caption}</figcaption>}
          </figure>
        )}
      </div>
    </section>
  );
}
