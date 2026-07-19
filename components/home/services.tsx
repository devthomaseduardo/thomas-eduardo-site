import { Check } from "lucide-react"
import { SERVICES } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Shape8 } from "@/components/ui/abstract-shapes"
import { motion } from "framer-motion"

export function Services() {
  return (
    <section id="servicos" className="bg-card/20 relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute right-10 top-1/2 z-0 w-32 opacity-20 sm:w-40 mix-blend-screen"
        animate={{ rotate: -180, scale: [1, 1.05, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <Shape8 />
      </motion.div>

      <div className="site-shell py-16 sm:py-32 relative z-10">
        <SectionHeading
          kicker="Soluções"
          title="Soluções que eu construo"
          description="Aplicações, páginas e APIs para reduzir retrabalho e dar mais estrutura para a operação."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary sm:p-7">
                <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <ul className="mt-5 hidden space-y-2.5 pt-2 sm:block">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <Check className="size-4 shrink-0 text-foreground" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
