export function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string
  title: string
  description?: string
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">{kicker}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">{description}</p>
        )}
      </div>
    </section>
  )
}
