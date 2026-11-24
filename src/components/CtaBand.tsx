import Link from "next/link";
import Lines from "./Lines";
import { Arrow } from "./Icons";
import { site } from "@/content/site";

export default function CtaBand({
  lines = [
    "Not sure which service fits?",
    <em key="e" className="italic">
      Let&rsquo;s talk.
    </em>,
  ],
}: {
  lines?: React.ReactNode[];
}) {
  return (
    <section aria-labelledby="cta-title" className="border-t border-rule">
      <div className="wrap section grid gap-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="label text-muted">Start a conversation</p>
          <Lines as="h2" id="cta-title" className="h1 mt-6" lines={lines} />
        </div>
        <div className="md:col-span-4" data-anim="rise">
          <p className="text-[16px] text-muted">
            We reply within one working day, and every enquiry is treated in strict confidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/contact" className="btn btn-primary">
              Start a conversation <Arrow />
            </Link>
            <a href={site.phoneHref} className="link font-mono text-[14px]">
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
