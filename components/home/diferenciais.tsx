import { DIFERENCIAIS, PROCESS } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

export function Diferenciais() {
  return (
    <section className="site-shell py-16 sm:py-32">
      <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading kicker="O que eu resolvo" title="Problemas que viram sistema" />
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-10 sm:grid-cols-2">
            {DIFERENCIAIS.map((d, i) => (
              <Reveal key={d.title} delay={i * 70} className="bg-card p-5 sm:p-6">
                <h3 className="font-display text-base font-semibold">{d.title}</h3>
                <p className="mt-2 hidden text-sm leading-relaxed text-muted-foreground sm:block">{d.description}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading kicker="Como trabalho" title="Processo simples em 3 passos" />
          <ol className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
            {PROCESS.map((p, i) => (
              <Reveal
                key={p.step}
                delay={i * 90}
                as="li"
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 sm:gap-5 sm:p-6"
              >
                <span className="font-display text-2xl font-bold text-muted-foreground/40 sm:text-3xl">{p.step}</span>
                <div>
                  <h3 className="font-display text-base font-semibold sm:text-lg">{p.title}</h3>
                  <p className="mt-1.5 hidden text-sm leading-relaxed text-muted-foreground sm:block">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
