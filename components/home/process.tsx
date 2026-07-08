import { PROCESS } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

export function Process() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-20 sm:py-32">
      <SectionHeading kicker="Processo" title="Como transformo ideias em código" />
      
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {PROCESS.map((p, index) => (
          <Reveal key={p.step} delay={index * 0.1}>
            <div className="relative h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-foreground/20">
              <span className="mb-6 inline-block rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs tracking-widest text-secondary-foreground">
                ETAPA {p.step}
              </span>
              <h3 className="mb-3 font-display text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
