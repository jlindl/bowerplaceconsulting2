import Link from "next/link";
import { Arrow } from "@/components/Icons";
import { Mark } from "@/components/Logo";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[86vh] flex-col justify-center pb-24 pt-[140px]">
      <Mark size={44} />
      <p className="label mt-10 text-muted">Error 404</p>
      <h1 className="h1 mt-5 max-w-[14ch]">
        This page is not <em className="italic">on the record.</em>
      </h1>
      <p className="lead mt-6 max-w-[48ch]">
        The page may have moved, or the link may be out of date. Everything we do is one step away.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <Link href="/" className="btn btn-primary">
          Back to the homepage <Arrow />
        </Link>
        <Link href="/contact" className="arrow-link">
          <span className="u">Start a conversation</span>
        </Link>
      </div>
    </section>
  );
}
