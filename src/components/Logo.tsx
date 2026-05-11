export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-blue)] text-white font-bold text-lg shadow-[var(--shadow-cta)]">
        D
      </span>
      <span className={`text-2xl font-bold tracking-tight ${light ? "text-white" : "text-foreground"}`}>
        <span className="text-[var(--brand-blue)]">j</span>rent
      </span>
    </div>
  );
}
