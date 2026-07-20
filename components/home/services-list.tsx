"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const SERVICES_LIST = [
  "Automatizar processos internos.",
  "Substituir planilhas por um sistema.",
  "Criar um SaaS.",
  "Modernizar um sistema antigo.",
  "Integrar APIs.",
  "Desenvolver um portal para clientes.",
  "Criar um aplicativo.",
  "Digitalizar operações.",
]

export function ServicesList() {
  return (
    <section className="relative border-t border-border/10 bg-background py-16 sm:py-24">
      <div className="site-shell relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-h2 font-normal text-foreground tracking-[-0.02em] mb-10 sm:mb-14 text-balance"
          >
            Empresas procuram meus serviços quando precisam...
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
            {SERVICES_LIST.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors"
              >
                <CheckCircle2 className="size-5 text-white/50 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-white/80">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
