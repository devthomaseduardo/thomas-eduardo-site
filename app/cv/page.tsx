"use client"

import { PageAnimator } from "@/components/page-animator"
import { PageHero } from "@/components/page-hero"
import { CtaLink } from "@/components/ui/cta"
import { Download, ExternalLink } from "lucide-react"
import { Shape3 } from "@/components/ui/abstract-shapes"
import { motion } from "framer-motion"

export default function CVPage() {
  const cvPath = "/thomas_eduardo_curriculo_fullstack.pdf"

  return (
    <main className="min-h-screen bg-background pb-20">
      <PageAnimator />
      <motion.div
        className="pointer-events-none absolute right-10 top-1/4 z-0 w-32 opacity-20 sm:w-40 mix-blend-screen"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <Shape3 />
      </motion.div>
      <PageHero
        kicker="Currículo"
        lines={["Minha trajetória", "profissional."]}
        description="Acesse o documento completo com meu histórico, tecnologias e detalhes de projetos."
      />

      <div className="site-shell mt-4">
        <div className="flex flex-wrap items-center gap-4 mb-10">
           {/* Botão de Download */}
           <CtaLink href={cvPath} variant="solid" size="md" external download="Thomas_Eduardo_CV.pdf" showArrow={false} className="gap-2 px-5">
             <Download className="size-4" />
             Baixar PDF
           </CtaLink>
           {/* Botão de Nova Guia */}
           <CtaLink href={cvPath} variant="soft" size="md" external showArrow={false} className="gap-2 px-5">
             <ExternalLink className="size-4" />
             Abrir em nova guia
           </CtaLink>
        </div>

        {/* PDF Viewer */}
        <div className="w-full max-w-5xl aspect-[1/1.4] sm:aspect-auto sm:h-[800px] rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
          <iframe 
            src={`${cvPath}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-full relative z-10"
            title="Currículo Thomas Eduardo"
          />
        </div>
      </div>
    </main>
  )
}
