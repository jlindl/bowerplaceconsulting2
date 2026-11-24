import Lines from "../Lines";
import { accreditations } from "@/content/site";

export default function Accreditations() {
  return (
    <section aria-labelledby="accred-title" className="wrap section">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="label text-muted">
            <span className="mr-3 inline-block h-px w-8 -translate-y-[4px] bg-accent" aria-hidden="true" />Accreditations
          </p>
          <Lines id="accred-title" className="h2 mt-6" lines={["Procured simply.", "Held to standard."]} />
        </div>
        <ul className="grid gap-px self-start border border-rule bg-rule sm:grid-cols-2 md:col-span-7" data-anim="stagger">
          {accreditations.map((a) => (
            <li key={a.name} className="bg-paper p-7 md:p-8">
              <span className="inline-block h-2 w-2 rotate-45 bg-accent" aria-hidden="true" />
              <h3 className="mt-5 font-serif text-[24px] leading-tight tracking-[-0.01em]">{a.name}</h3>
              <p className="mt-2 text-[15px] text-muted">{a.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
