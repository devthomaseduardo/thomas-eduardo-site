"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CONTACT } from "@/lib/data"
import { TechGrid } from "@/components/tech-icon"
import { PageAnimator } from "@/components/page-animator"
import { Icon } from "@iconify/react"
import { useRef } from "react"

const STATS = [
  { value: "3+", label: "Anos de experiência" },
  { value: "10+", label: "Projetos entregues" },
  { value: "100%", label: "Full Stack" },
  { value: "4", label: "Certificações" },
]

const STACK_ICONS = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS", "Vercel", "Prisma", "Tailwind CSS"]

export default function SobrePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <PageAnimator />

      {/* ══════════════════════════════════════════════════
          HERO — Full-bleed cinematic com foto
      ══════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-[100dvh] overflow-hidden bg-black">
        <motion.div style={{ y: yHero }} className="absolute inset-0 h-[130%]">
          <Image
            src="/fundo-about.png"
            alt={CONTACT.name}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top brightness-[0.4]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/30 to-black/60" />

        <motion.div
          style={{ opacity: opacityHero }}
          className="relative z-10 flex h-full flex-col items-start justify-end px-6 pb-20 sm:px-12 lg:px-20 max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-white/70">Disponível para projetos</span>
              <span className="text-white/20 mx-1">·</span>
              <MapPin className="size-3 text-white/50" />
              <span className="font-mono text-xs uppercase tracking-widest text-white/70">São Paulo</span>
            </div>

            <h1 className="font-display text-[2.75rem] sm:text-8xl lg:text-9xl font-semibold tracking-tighter text-white leading-[0.9]">
              Thomas<br />Eduardo.
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-2xl text-white/50 font-light max-w-lg">
              Software Engineer · Full Stack
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          BLOCO EDITORIAL — Texto + Foto lado a lado
      ══════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 sm:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-20 items-start">

            {/* Texto — 3 colunas */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400 mb-8"
              >
                Sobre
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-10"
              >
                Construo produtos digitais<br />
                <span className="text-muted-foreground">do zero à produção.</span>
              </motion.h2>

              <div className="columns-1 sm:columns-2 gap-8 sm:gap-10 text-base sm:text-lg leading-[1.8] text-muted-foreground space-y-6">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                  Sou <span className="text-foreground font-medium">{CONTACT.name}</span>, desenvolvedor Full Stack
                  em formação em Engenharia de Software. Há mais de 3 anos atuo como freelancer
                  construindo sistemas reais para empresas e clientes independentes.
                </motion.p>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                  Transformo processos manuais, planilhas e atendimentos dispersos em plataformas
                  simples, seguras e documentadas — com autenticação, APIs REST, controle de acesso,
                  dashboards administrativos e integrações.
                </motion.p>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                  Três pilares guiam cada decisão:{" "}
                  <span className="text-foreground font-medium">clareza de produto</span>,{" "}
                  <span className="text-foreground font-medium">performance técnica</span> e{" "}
                  <span className="text-foreground font-medium">estrutura escalável</span>.
                  Código pensado para crescer, não apenas funcionar.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-10"
              >
                <Link href="/valores"
                  className="btn-animate group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background">
                  Como funciona um projeto <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Foto — 2 colunas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 order-1 lg:order-2 lg:sticky lg:top-28"
            >
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl group">
                <Image
                  src="/thomas-about.png"
                  alt="Thomas Eduardo"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width:1024px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display text-white text-sm font-medium">Engenharia de Software</p>
                  <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-1">São Paulo, Brasil</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STATS — Faixa limpa com números grandes
      ══════════════════════════════════════════════════ */}
      <section className="border-y border-border/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border/20">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="py-14 sm:py-20 text-center group"
              >
                <p className="font-display text-4xl sm:text-6xl font-semibold text-foreground group-hover:text-blue-400 transition-colors">
                  {s.value}
                </p>
                <p className="mt-2 sm:mt-3 font-mono text-[9px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TRAJETÓRIA — Full-width cards com imagem de fundo
      ══════════════════════════════════════════════════ */}
      <section className="py-32 sm:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400 mb-4">Trajetória</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">Experiência e Formação</h2>
          </motion.div>

          <div className="space-y-6">
            {/* Card 1 - Freelancer */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-border/20 bg-card/20 p-10 sm:p-14 transition-all hover:bg-card/40 hover:border-border/40">
              <div className="absolute -right-20 -top-20 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-500/10 transition-colors" />
              <div className="relative z-10 grid lg:grid-cols-[200px_1fr] gap-8 items-start">
                <p className="font-mono text-sm text-blue-400 tracking-wider">08/2023 — Atual</p>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Software Engineer — Freelancer</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    Aplicações web completas, APIs REST, dashboards e sistemas de autenticação para clientes reais.
                    Deploy em Vercel, AWS e Linux.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Certificações */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-border/20 bg-card/20 p-10 sm:p-14 transition-all hover:bg-card/40 hover:border-border/40">
              <div className="relative z-10 grid lg:grid-cols-[200px_1fr] gap-8 items-start">
                <p className="font-mono text-sm text-blue-400 tracking-wider">2024</p>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-4">AWS re/Start + Certificações</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                    AWS re/Start, API REST & JWT (Ada Tech), UX Essentials (FIAP) e IT Essentials — Hardware (Cisco).
                  </p>
                  <div className="flex flex-wrap gap-5">
                    {["/certificados/aws-logo.png", "/certificados/ada-logo.png", "/certificados/fiap-logo.png", "/certificados/cisco-logo.png"].map(cert => (
                      <div key={cert} className="relative size-16 overflow-hidden rounded-2xl border border-border/20 bg-black/40 grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:border-white/20 hover:scale-110">
                        <Image src={cert} alt="Certificado" fill className="object-cover" sizes="64px" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Formação */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl border border-border/20 bg-card/20 p-10 sm:p-14 transition-all hover:bg-card/40 hover:border-border/40">
              <div className="relative z-10 grid lg:grid-cols-[200px_1fr] gap-8 items-start">
                <div>
                  <p className="font-mono text-sm text-blue-400 tracking-wider">Em andamento</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                    <span className="relative flex size-1.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" /></span>
                    Cursando
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Engenharia de Software — Anhanguera</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    Graduação com foco em arquitetura de software, cloud computing e sistemas distribuídos.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STACK TÉCNICA
      ══════════════════════════════════════════════════ */}
      <section className="border-t border-border/20 bg-card/5 py-32 sm:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400 mb-6">Stack técnica</motion.p>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
                Ferramentas<br /><span className="text-muted-foreground">do dia a dia.</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-md mb-10">
                Tecnologias que uso diariamente para construir produtos reais, performáticos e escaláveis.
              </motion.p>
              <TechGrid stack={STACK_ICONS} />
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="relative hidden lg:block">
              <div className="relative h-[480px] rounded-[2rem] overflow-hidden border border-border/10 shadow-2xl">
                <Image src="/certificados/Modern Workspace Setup.png" alt="Workspace" fill className="object-cover" sizes="50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-border/10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-15"><Image src="/projects/homma-section.webp" alt="" fill className="object-cover" sizes="100vw" /></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 py-32 sm:py-48 text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Tem um projeto<br />em mente?
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-white/50 font-light">
            Vamos conversar sobre como posso ajudar a transformar sua ideia em produto real.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
              className="btn-animate group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black">
              <Icon icon="mdi:whatsapp" className="size-5" /> Iniciar Conversa
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link href="/projetos" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white hover:bg-white/10 transition-colors">
              Ver meus projetos
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}