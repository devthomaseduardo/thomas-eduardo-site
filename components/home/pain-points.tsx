"use client"

import { motion } from "framer-motion"
import { AlertCircle, Clock, TrendingDown, ShieldAlert } from "lucide-react"
import { Shape3 } from "@/components/ui/abstract-shapes"

const PAIN_POINTS = [
  {
    icon: TrendingDown,
    number: "01",
    headline: "Você está perdendo vendas por lentidão",
    copy: "Cada segundo que seu site ou sistema demora para carregar afasta o lead. Uma estrutura genérica ou pesada joga o orçamento da sua campanha direto no lixo e manda clientes para a concorrência.",
  },
  {
    icon: Clock,
    number: "02",
    headline: "Projetos que viram um ralo de dinheiro",
    copy: "A agência ou o dev freelancer promete para 30 dias e demora 6 meses. O código fica uma bagunça, o escopo estoura e você gasta o triplo do orçamento original para ter algo que mal funciona.",
  },
  {
    icon: AlertCircle,
    number: "03",
    headline: "Sistemas que não escalam",
    copy: "Sua operação cresceu, mas o seu sistema travou? Processos manuais e plataformas engessadas matam a sua produtividade diária. O seu gargalo não é a equipe, é a falta de tecnologia de verdade.",
  },
  {
    icon: ShieldAlert,
    number: "04",
    headline: "O tráfego sobe, o site cai",
    copy: "Basta lançar uma campanha forte para o site sair do ar ou os leads sumirem no meio do caminho. Falta de confiabilidade na infraestrutura destrói completamente o ROI da sua publicidade.",
  },
]

export function PainPoints() {
  return (
    <section
      id="problemas"
      className="relative overflow-hidden border-t border-border/10 bg-background py-16 sm:py-24 md:py-32"
    >
      {/* subtle background texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)]"
      />

      <motion.div
        className="pointer-events-none absolute right-10 bottom-20 z-0 w-32 opacity-20 sm:w-40 mix-blend-screen"
        animate={{ rotate: -360, scale: [1, 1.05, 1] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <Shape3 />
      </motion.div>

      <div className="site-shell relative z-10">
        {/* Section header */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-kicker mb-3 text-muted-foreground/60"
          >
            Reconhece isso?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-h2 font-normal text-foreground tracking-[-0.02em]"
          >
            Sua operação está perdendo tempo e dinheiro.
          </motion.h2>
        </div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {PAIN_POINTS.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04] sm:p-8"
              >
                {/* number + icon row */}
                <div className="mb-5 flex items-center justify-between">
                  <Icon className="size-6 text-white/70" strokeWidth={1.5} />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
                    {item.number}
                  </span>
                </div>

                <h3 className="mb-3 font-display text-base font-semibold leading-snug tracking-[-0.01em] text-foreground sm:text-lg">
                  {item.headline}
                </h3>
                <p className="text-[13px] leading-relaxed text-muted-foreground/70 sm:text-sm">
                  {item.copy}
                </p>

                {/* subtle hover glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,255,255,0.04), transparent)",
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
