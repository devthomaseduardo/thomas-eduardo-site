"use client"

import Link from "next/link"
import { ArrowRight, ArrowDown } from "lucide-react"
import { CONTACT } from "@/lib/data"

export function Hero() {
  return (
    <section className="relative min-h-[92svh] pt-16 sm:min-h-[100svh] flex flex-col justify-center">
      <div
        className="pointer-events-none -z-10 bg-cover bg-center bg-no-repeat absolute inset-0 border-4 border-red-500"
        style={{ backgroundImage: "url('/fundo.svg')" }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-5">
        <div className="max-w-4xl">
          <div
            className="hero-enter inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
            style={{ "--hero-delay": "80ms" } as React.CSSProperties}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground/50" />
              <span className="relative inline-flex size-2 rounded-full bg-foreground" />
            </span>
            Disponível para novos projetos
          </div>

          <h1
            className="hero-enter mt-5 font-display text-3xl font-bold leading-[1.05] tracking-tight text-balance sm:mt-6 sm:text-6xl lg:text-7xl"
            style={{ "--hero-delay": "180ms" } as React.CSSProperties}
          >
            Construo sistemas e interfaces web de{" "}
            <span className="text-muted-foreground">alta performance</span>.
          </h1>

          <p
            className="hero-enter mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:mt-6 sm:max-w-2xl sm:text-lg"
            style={{ "--hero-delay": "300ms" } as React.CSSProperties}
          >
            <span className="sm:hidden">Full Stack em São Paulo. Sistemas, landing pages, APIs e dashboards.</span>
            <span className="hidden sm:inline">
              Desenvolvedor Full Stack focado em sistemas web, automações e interfaces com foco em clareza
              de produto, performance e entrega rápida de valor.
            </span>
          </p>

          <div
            className="hero-enter mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row"
            style={{ "--hero-delay": "420ms" } as React.CSSProperties}
          >
            <Link
              href="#projetos"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Ver projetos
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              Falar comigo
            </a>
          </div>

          <dl
            className="hero-enter mt-10 grid max-w-lg grid-cols-3 gap-4 pt-2 sm:mt-14 sm:gap-6"
            style={{ "--hero-delay": "540ms" } as React.CSSProperties}
          >
            <div>
              <dt className="text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">Experiência</dt>
              <dd className="mt-1 font-display text-xl font-semibold sm:text-2xl">3+ anos</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">Foco</dt>
              <dd className="mt-1 font-display text-xl font-semibold sm:text-2xl">Full Stack</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">Base</dt>
              <dd className="mt-1 font-display text-xl font-semibold sm:text-2xl">SP, BR</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 text-muted-foreground sm:bottom-8">
        <ArrowDown className="size-5 animate-bounce" aria-hidden />
      </div>
    </section>
  )
}
