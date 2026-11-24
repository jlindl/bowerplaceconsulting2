import type { Metadata } from "next";
import Lines from "@/components/Lines";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Bower Place. We reply within one working day, and every enquiry is treated in strict confidence.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section aria-labelledby="page-title" className="pb-[var(--section)] pt-[128px] md:pt-[168px]" data-hero>
      <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="label flex items-center gap-3 text-muted" data-anim="fade">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Contact
          </p>
          <Lines
            as="h1"
            id="page-title"
            hero
            className="h1 mt-7"
            lines={["Start a", <em key="e" className="italic">conversation.</em>]}
          />
          <p className="lead mt-7 max-w-[40ch]" data-anim="fade">
            Not sure which service fits? Let&rsquo;s talk. We reply within one working day, and every enquiry is
            treated in strict confidence.
          </p>

          <dl className="mt-12 border-t border-rule" data-anim="fade">
            <div className="border-b border-rule py-6">
              <dt className="label text-muted">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${site.email}`} className="link break-words font-serif text-[clamp(22px,2.2vw,28px)] tracking-[-0.01em]">
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="border-b border-rule py-6">
              <dt className="label text-muted">Telephone</dt>
              <dd className="mt-2">
                <a href={site.phoneHref} className="link font-serif text-[clamp(22px,2.2vw,28px)] tracking-[-0.01em]">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div className="border-b border-rule py-6">
              <dt className="label text-muted">Response</dt>
              <dd className="mt-2 text-[17px]">Within one working day</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-16">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
