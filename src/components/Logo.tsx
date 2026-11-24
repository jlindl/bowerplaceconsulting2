export function Mark({ size = 30, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" aria-hidden="true" className={className}>
      <rect x="0.75" y="0.75" width="28.5" height="28.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 25V14.5a7 7 0 0 1 14 0V25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13.4 5.6h3.2l-.6 2.6h-2z" fill="#B83D0B" />
      <path d="M4 25h22" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Logo({ inverted = false, descriptor = false }: { inverted?: boolean; descriptor?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 ${inverted ? "text-paper" : "text-ink"}`}>
      <Mark />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[25px] tracking-[-0.02em]">Bower Place</span>
        {descriptor && (
          <span className={`label mt-1.5 !text-[11px] ${inverted ? "text-on-dark-muted" : "text-muted"}`}>
            Public sector consulting
          </span>
        )}
      </span>
    </span>
  );
}
