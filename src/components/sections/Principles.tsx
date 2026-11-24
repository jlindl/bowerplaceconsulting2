import Lines from "../Lines";
import { principles } from "@/content/site";

export default function Principles() {
  return (
    <section aria-labelledby="why-title" className="on-dark bg-ink text-paper">
      <div className="wrap section">
        <p className="label text-on-dark-muted">
          <span className="mr-3 inline-block h-px w-8 -translate-y-[4px] bg-accent-light" aria-hidden="true" />Why Bower Place
        </p>
        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <Lines
            id="why-title"
            className="h1 lg:col-span-12"
            lines={[
              "The public sector",
              "deserves better",
              <span key="g">
                than{" "}
                <em className="italic text-on-dark-muted">generic consulting.</em>
              </span>,
            ]}
          />
          <p className="lead max-w-[46ch] lg:col-span-5 lg:col-start-8" data-anim="fade">
            Large consultancies bring scale but little accountability at programme level. Smaller firms bring
            agility but not breadth. We built Bower Place to offer both.
          </p>
        </div>

        <ol className="mt-20 grid border-t border-rule-dark md:mt-28 md:grid-cols-2" data-anim="stagger">
          {principles.map((p, i) => (
            <li
              key={p.title}
              className={`border-b border-rule-dark py-10 md:py-12 ${i % 2 === 0 ? "md:pr-12" : "md:border-l md:pl-12"}`}
            >
              <span className="label text-on-dark-muted">0{i + 1}</span>
              <h3 className="h3 mt-5">{p.title}</h3>
              <p className="mt-3 max-w-[44ch] text-[16px] text-on-dark-muted">{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
