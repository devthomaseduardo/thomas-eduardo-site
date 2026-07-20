"use client"

import { motion } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { CtaLink } from "@/components/ui/cta"
import DepthParallaxWords from "@/components/ui/smoothui/depth-parallax-words"
import { Shape9 } from "@/components/ui/abstract-shapes"

export function HomeCta() {
  return (
    <section className="relative overflow-hidden border-t border-border/20 bg-background py-16 sm:py-20 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(255,255,255,0.06),transparent_60%)]"
      />

      <motion.div
        className="pointer-events-none absolute left-10 top-1/4 z-0 w-32 opacity-20 sm:w-40 mix-blend-screen"
        animate={{ rotate: 180, scale: [1, 1.1, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <Shape9 />
      </motion.div>

      <div className="site-shell relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label-kicker mb-4 text-white/40"
        >
          Próximo passo
        </motion.p>

        <div className="mx-auto max-w-4xl font-sans text-center font-semibold leading-[1.05] tracking-[-0.03em] text-white" style={{ fontSize: "clamp(1.5rem, 5vw, 3.5rem)" }}>
          <DepthParallaxWords triggerOnView delay={100} stagger={80}>
            O próximo sistema da
          </DepthParallaxWords>
          <br />
          <span className="text-white/40">
            <DepthParallaxWords triggerOnView delay={300} stagger={70}>
              sua empresa pode começar hoje.
            </DepthParallaxWords>
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-5 max-w-lg text-sm font-light text-white/60 sm:mt-6 sm:text-base leading-relaxed"
        >
          Solicite uma análise gratuita do seu projeto. Em até 24 horas você recebe um plano inicial com escopo, prazo e estimativa de investimento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-7 flex flex-col items-center justify-center gap-2.5 min-[420px]:flex-row sm:mt-8"
        >
          <CtaLink href={CONTACT.whatsapp} variant="solid" external>
            Solicitar análise gratuita
          </CtaLink>
          <CtaLink href="/projetos" variant="soft">
            Ver todos os projetos
          </CtaLink>
        </motion.div>
      </div>
    </section>
  )
}
