"use client"

import Image from "next/image"
import { Check, MessageCircleQuestion, ArrowRight, ArrowDown } from "lucide-react"
import { CONTACT } from "@/lib/data"
import { motion } from "framer-motion"
import { PageAnimator } from "@/components/page-animator"
import { Icon } from "@iconify/react"

const STEPS = [
  { step: "01", title: "Conversa inicial", text: "Você explica sua ideia, objetivo e necessidades.", image: "/projects/homma-section.webp" },
  { step: "02", title: "Análise", text: "Avalio o projeto, identifico desafios e proponho a melhor solução.", image: "/projects/homma-projetos.webp" },
  { step: "03", title: "Proposta personalizada", text: "Você recebe uma proposta com escopo, entregas, cronograma e investimento.", image: "/hero.png" },
  { step: "04", title: "Aprovação", text: "Após a aprovação iniciamos o desenvolvimento.", image: "/projects/homma-section.webp" },
  { step: "05", title: "Desenvolvimento", text: "Você acompanha a evolução do projeto passo a passo.", image: "/projects/homma-projetos.webp" },
  { step: "06", title: "Entrega", text: "Publicação, validação e encerramento do ciclo.", image: "/hero.png" },
]

const INCLUDED = [
  { label: "Planejamento", icon: "ph:strategy-bold" },
  { label: "Desenvolvimento", icon: "ph:code-bold" },
  { label: "Responsividade", icon: "ph:devices-bold" },
  { label: "SEO técnico", icon: "ph:magnifying-glass-bold" },
  { label: "Integrações", icon: "ph:plugs-connected-bold" },
  { label: "Deploy", icon: "ph:rocket-launch-bold" },
  { label: "Documentação", icon: "ph:file-text-bold" },
  { label: "Suporte inicial", icon: "ph:headset-bold" },
]

const DELIVERABLES = [
  "Proposta personalizada", "Cronograma", "Escopo completo", "Contrato",
  "Canal de comunicação", "Entrega organizada", "Deploy", "Suporte inicial",
]

const FAQ = [
  { q: "Como funciona o pagamento?", a: "Normalmente dividido em duas partes: um sinal para iniciar o projeto e o saldo restante na entrega final. Tudo definido em contrato." },
  { q: "Quando o projeto começa?", a: "Assim que a proposta e o cronograma forem aprovados e o sinal inicial for confirmado." },
  { q: "Posso solicitar alterações?", a: "Sim. O processo possui etapas de validação para garantir que o resultado atenda às suas expectativas, respeitando o escopo aprovado." },
  { q: "Como acompanho o desenvolvimento?", a: "Através de um canal de comunicação direto, onde envio atualizações frequentes e links de preview para você testar." },
  { q: "E se eu ainda não souber exatamente o que preciso?", a: "Sem problemas. A conversa inicial e a fase de análise servem exatamente para transformar uma ideia inicial em um escopo técnico sólido." },
]

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <PageAnimator />

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image src="/projects/homma-projetos.webp" alt="" fill className="object-cover brightness-[0.25]" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 items-center gap-12 sm:gap-16 py-24 sm:py-32">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <span className="relative flex size-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" /><span className="relative inline-flex size-2 rounded-full bg-blue-400" /></span>
              Processo Transparente
            </div>
            <h1 className="font-display text-[2.5rem] sm:text-7xl font-semibold tracking-tighter leading-[1.05]">
              Como funciona<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">um projeto.</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl">
              Cada projeto é diferente, mas todos seguem um processo claro, organizado e transparente do início ao fim.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
                className="btn-animate inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-black w-full sm:w-auto">
                <Icon icon="mdi:whatsapp" className="size-5" /> Iniciar um projeto
              </a>
              <a href="#processo" className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-medium text-white/80 hover:bg-white/5 transition-colors w-full sm:w-auto">
                Ver processo <ArrowDown className="size-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Stats flutuantes */}
          <motion.div {...fadeUp} transition={{ delay: 0.3, duration: 0.8 }} className="hidden lg:grid grid-cols-2 gap-6">
            {[
              { number: "10+", label: "Projetos entregues" },
              { number: "100%", label: "Escopo definido" },
              { number: "0", label: "Surpresas financeiras" },
              { number: "24h", label: "Resposta média" },
            ].map((s, i) => (
              <div key={s.label} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1">
                <p className="font-display text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">{s.number}</p>
                <p className="mt-2 text-sm text-white/50">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ COMO TRABALHAMOS ══════════════ */}
      <section id="processo" className="relative py-32 sm:py-40">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-blue-600/8 blur-[150px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="mb-20 sm:mb-28 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400 mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400/50" /> Etapa por etapa
            </p>
            <h2 className="font-display text-3xl sm:text-6xl font-semibold tracking-tight">Como trabalhamos</h2>
            <p className="mt-6 text-lg text-white/50 leading-relaxed">
              Um processo refinado e previsível para transformar ideias complexas em entregas sólidas.
            </p>
          </motion.div>

          <div className="space-y-8">
            {STEPS.map((item, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div key={item.step} {...fadeUp} transition={{ delay: i * 0.1 }}
                  className={`group grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:direction-rtl' : ''}`}>
                  
                  {/* Imagem */}
                  <div className={`relative h-[220px] sm:h-[360px] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border border-border/30 ${!isEven ? 'lg:order-2' : ''}`}>
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-8 right-8">
                      <span className="font-mono text-xs text-blue-400 tracking-widest">PASSO {item.step}</span>
                    </div>
                  </div>

                  {/* Texto */}
                  <div className={`${!isEven ? 'lg:order-1 lg:text-right' : ''} p-2 sm:p-8`}>
                    <div className={`inline-flex items-center justify-center size-12 sm:size-16 rounded-xl sm:rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-4 sm:mb-6 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.15)]`}>
                      <span className="font-display text-2xl font-bold">{item.step}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-4xl font-semibold mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-lg text-white/60 leading-relaxed max-w-md">{item.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ O QUE ESTÁ INCLUSO ══════════════ */}
      <section className="relative border-t border-border/30 bg-card/10 py-32 sm:py-40">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="mb-16 sm:mb-24 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400 mb-4">Incluso em todo projeto</p>
            <h2 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight">Tudo que você precisa</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {INCLUDED.map((item, i) => (
              <motion.div key={item.label} {...fadeUp} transition={{ delay: i * 0.06 }}
                className="group flex flex-col items-center text-center gap-3 sm:gap-5 rounded-2xl sm:rounded-3xl border border-border/30 bg-card/20 p-5 sm:p-8 backdrop-blur-sm transition-all duration-500 hover:bg-card/50 hover:border-blue-500/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 transition-all group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <Icon icon={item.icon} className="size-6" />
                </div>
                <span className="text-white/80 font-semibold text-base">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TRANSPARÊNCIA ══════════════ */}
      <section className="relative border-t border-border/30 py-32 sm:py-40 overflow-hidden">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_left,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagem */}
          <motion.div {...fadeUp} className="relative h-[400px] sm:h-[500px] rounded-[2.5rem] overflow-hidden border border-border/30">
            <Image src="/thomas-about.png" alt="Thomas Eduardo" fill className="object-cover object-top" sizes="50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-mono text-xs text-blue-400 tracking-widest mb-2">COMPROMISSO</p>
              <p className="text-white/70 text-sm leading-relaxed">Transparência total do início ao fim.</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400 mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400/50" /> Garantia
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-12">Transparência Total</h2>

            <ul className="space-y-6">
              {[
                "Escopo definido antes do início.",
                "Valor fechado antes do desenvolvimento.",
                "Mudanças de escopo discutidas previamente.",
                "Sem surpresas financeiras no percurso.",
                "Comunicação constante durante o projeto.",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-4 text-lg text-white/70 leading-relaxed">
                  <div className="mt-1.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30">
                    <Check className="size-3.5 text-blue-400" />
                  </div>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ INVESTIMENTO ══════════════ */}
      <section className="relative border-t border-border/30 bg-card/10 py-32 sm:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400 mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400/50" /> Investimento
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-8">
              Como é calculado <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">o investimento</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-8">Cada projeto é único e estimado cuidadosamente conforme:</p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {["Complexidade", "Funcionalidades", "Prazo", "Integrações", "Requisitos Únicos"].map(item => (
                <div key={item} className="flex items-center gap-3 text-white/80 font-medium">
                  <Check className="size-4 text-blue-400" /> {item}
                </div>
              ))}
            </div>
            <p className="text-lg text-white/60 leading-relaxed">Depois dessa análise, eu apresento uma <strong className="text-white">proposta personalizada</strong> e blindada contra surpresas.</p>
          </motion.div>

          {/* Fluxo Visual Elegante */}
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="relative p-12 sm:p-16 rounded-[2.5rem] border border-border/30 bg-card/20 backdrop-blur-md">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/5 to-transparent pointer-events-none" />
            <div className="flex flex-col items-center gap-2 relative z-10">
              {["Ideia Original", "Análise de Escopo", "Estimativa de Esforço", "Proposta Fechada", "Início do Projeto"].map((lbl, idx, arr) => (
                <div key={lbl} className="flex flex-col items-center w-full max-w-[260px]">
                  <div className={`w-full rounded-2xl border py-4 px-6 text-center text-sm font-semibold shadow-lg transition-all
                    ${idx === arr.length - 1
                      ? "border-blue-500/50 bg-blue-500/20 text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                      : "border-border/40 bg-black/50 text-white/80 hover:border-white/20"}`}>
                    {lbl}
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="h-8 w-px bg-gradient-to-b from-border to-blue-500/40 my-1 relative">
                      <ArrowDown className="absolute -bottom-3 left-1/2 -translate-x-1/2 size-4 text-blue-400/60" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ O QUE VOCÊ RECEBE ══════════════ */}
      <section className="relative border-t border-border/30 py-32 sm:py-40">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center relative z-10">
          <motion.div {...fadeUp} className="mb-16 sm:mb-24">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400 mb-4">Entregáveis</p>
            <h2 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight">O que você recebe</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
            {DELIVERABLES.map((item, i) => (
              <motion.div key={item} {...fadeUp} transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-full border border-border/30 bg-card/20 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium text-white/90 backdrop-blur-sm transition-all hover:border-blue-500/40 hover:bg-card/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ FAQ ══════════════ */}
      <section className="relative border-t border-border/30 bg-card/10 py-32 sm:py-40">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">Perguntas frequentes</h2>
          </motion.div>
          <div className="space-y-6">
            {FAQ.map((item, i) => (
              <motion.div key={item.q} {...fadeUp} transition={{ delay: i * 0.1 }}
                className="card-animate rounded-3xl border border-border/30 bg-card/20 p-8 backdrop-blur-sm hover:bg-card/40 hover:border-border/50">
                <div className="flex items-start gap-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <MessageCircleQuestion className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-white mb-3">{item.q}</h3>
                    <p className="text-white/60 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CTA FINAL ══════════════ */}
      <section className="relative overflow-hidden border-t border-border/30">
        <Image src="/projects/homma-section.webp" alt="" fill className="object-cover brightness-[0.15]" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-background/90" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(29,78,216,0.15)_0%,transparent_60%)] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 sm:py-48 text-center">
          <motion.h2 {...fadeUp} className="font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Vamos conversar<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">sobre seu projeto?</span>
          </motion.h2>
          <motion.p {...fadeUp} transition={{ delay: 0.1 }} className="mt-8 text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
            Conte um pouco sobre sua ideia. Vou analisar e preparar uma proposta personalizada com escopo, cronograma e investimento.
          </motion.p>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="mt-12">
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer"
              className="btn-animate inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 text-base font-semibold text-black">
              <Icon icon="mdi:whatsapp" className="size-5" /> Solicitar proposta
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}