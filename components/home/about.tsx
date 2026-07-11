"use client"

import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { CtaLink } from "@/components/ui/cta"
import { MobileCarousel } from "@/components/ui/mobile-carousel"

const PILLARS = [
  {
    number: "01",
    title: "Produto",
    text: "Cada decisão técnica considera o impacto no usuário e no negócio.",
  },
  {
    number: "02",
    title: "Engenharia",
    text: "Arquiteturas limpas, APIs claras e código que cresce sem reescrita.",
  },
  {
    number: "03",
    title: "Confiabilidade",
    text: "Sistemas previsíveis, com observabilidade e deploys seguros.",
  },
]

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border/20 bg-background py-10 sm:py-16 md:py-20"
    >
      <div className="site-shell">
        <div className="mb-6 flex items-center gap-4 sm:mb-10">
          <span className="label-kicker">Perfil</span>
          <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:gap-12">
          <div className="lg:sticky lg:top-28">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-h2 text-foreground"
            >
              Produto.
              <br />
              <span className="text-white/75">Engenharia.</span>
              <br />
              <span className="text-white/55">Confiança.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mt-5 sm:mt-7"
            >
              <CtaLink href={CONTACT.whatsapp} variant="solid" size="sm" external>
                Falar comigo
              </CtaLink>
            </motion.div>
          </div>

          <div>
            {/* Long bio — desktop only */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="copy-desktop mb-8 space-y-3 text-base font-light leading-relaxed text-muted-foreground sm:text-lg"
            >
              <p>
                Engenheiro de software na interseção entre backend robusto e
                interfaces que funcionam de verdade. Sistemas que escalam com
                elegância e falham de forma previsível.
              </p>
              <p>
                Abordagem pragmática: menos complexidade, lógica de domínio clara
                e frontend como extensão de um sistema bem projetado.
              </p>
            </motion.div>

            {/* Mobile: carousel · Desktop: stacked list */}
            <div className="sm:hidden">
              <MobileCarousel
                itemClassName="w-[min(82vw,18rem)]"
                desktopClassName=""
              >
                {PILLARS.map((p) => (
                  <div
                    key={p.number}
                    className="flex h-full flex-col rounded-xl border border-border/25 bg-card/20 p-4"
                  >
                    <span className="font-mono text-[10px] font-medium text-muted-foreground/40">
                      {p.number}
                    </span>
                    <h3 className="mt-2 font-display text-sm font-semibold uppercase tracking-[0.04em] text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-light leading-relaxed text-muted-foreground">
                      {p.text}
                    </p>
                  </div>
                ))}
              </MobileCarousel>
            </div>

            <div className="hidden gap-px overflow-hidden rounded-2xl border border-border/20 sm:grid">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.number}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group flex items-start gap-3 bg-transparent px-4 py-3.5 transition-colors hover:bg-white/[0.03] sm:gap-4 sm:px-5 sm:py-4"
                >
                  <span className="mt-0.5 font-mono text-[10px] font-medium text-muted-foreground/40 sm:text-[11px]">
                    {p.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-sm font-semibold uppercase tracking-[0.04em] text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-light leading-relaxed text-muted-foreground">
                      {p.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
