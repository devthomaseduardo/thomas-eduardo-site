"use client"

import { useState } from "react"
import Image from "next/image"
import { PROJECTS } from "@/lib/data"
import { motion } from "framer-motion"
import { ClientsCarousel } from "@/components/home/clients-carousel"
import { PageAnimator } from "@/components/page-animator"
import { ArrowUpRight, ExternalLink, X } from "lucide-react"
import { TechIconRow } from "@/components/tech-icon"

function FlipCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.1 }}
      className="group perspective-[1200px] cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative w-full h-[380px] sm:h-[480px] transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ══ FRENTE — Imagem dominante ══ */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden border border-border/30 shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 33vw"
          />
          {/* Gradiente sutil no rodapé */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Tag */}
          <div className="absolute top-5 left-5">
            <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white/80 border border-white/10">
              {project.tag}
            </span>
          </div>

          {/* Ano */}
          {project.year && (
            <div className="absolute top-5 right-5">
              <span className="font-mono text-xs text-white/50">{project.year}</span>
            </div>
          )}

          {/* Título e hint sobrepostos na imagem */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <h3 className="font-display text-xl sm:text-3xl font-semibold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-white/60">{project.subtitle}</p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-blue-400/80">
              Clique para ver detalhes →
            </p>
          </div>
        </div>

        {/* ══ VERSO — Informações ══ */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden overflow-y-auto border border-border/40 bg-card p-5 sm:p-8 flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Botão fechar */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-blue-400">{project.tag}</span>
              <h3 className="font-display text-2xl font-semibold mt-1">{project.title}</h3>
            </div>
            <button className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 transition-colors shrink-0" onClick={(e) => { e.stopPropagation(); setFlipped(false) }}>
              <X className="size-4" />
            </button>
          </div>

          {/* Descrição */}
          <p className="text-sm leading-relaxed text-muted-foreground flex-1">
            {project.description}
          </p>

          {/* Resultado */}
          <div className="mt-4 pt-4 border-t border-border/30">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-2">Resultado</p>
            <p className="text-sm leading-relaxed text-foreground/80">{project.result}</p>
          </div>

          {/* Stack */}
          <div className="mt-4 pt-4 border-t border-border/30">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-3">Tecnologias</p>
            <TechIconRow stack={project.stack} max={6} />
          </div>

          {/* CTA */}
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-border/50 bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105 w-fit"
            >
              <ExternalLink className="size-4" />
              Ver projeto
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjetosPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageAnimator />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6">
        <div className="pointer-events-none absolute right-0 top-0 h-[60vh] w-[45%] overflow-hidden opacity-15 hidden lg:block">
          <Image src="/projects/homma-projetos.webp" alt="" fill className="object-cover object-left" sizes="45vw" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4"
          >
            / Trabalhos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-[2.25rem] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Projetos Selecionados.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Produtos e sistemas que arquitetei e entreguei —
            com foco em escalabilidade, performance e resultado real.
          </motion.p>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <div className="mb-20">
        <ClientsCarousel
          title="Clientes e projetos reais."
          titleClassName="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground/50"
        />
      </div>

      {/* ── GRID DE PROJETOS COM FLIP ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project, i) => (
            <FlipCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </section>
    </main>
  )
}
