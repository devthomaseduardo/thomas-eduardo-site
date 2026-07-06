"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { ArrowDown, ArrowUpRight } from "lucide-react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    let frame = 0

    const updateParallax = () => {
      frame = 0
      const rect = section.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      if (rect.bottom < 0 || rect.top > viewportHeight) return

      const progress = Math.min(Math.max(-rect.top / viewportHeight, 0), 1)
      section.style.setProperty("--hero-parallax", `${progress * 72}px`)
    }

    const requestUpdate = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateParallax)
    }

    updateParallax()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)

    return () => {
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[78svh] flex-col justify-end overflow-hidden pb-16 pt-24 sm:min-h-[100svh] sm:justify-center sm:pb-0 sm:pt-16"
      style={{ "--hero-parallax": "0px" } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute -inset-x-4 -inset-y-14 -z-10 bg-cover bg-center bg-no-repeat will-change-transform sm:hidden"
        style={{
          backgroundImage: "url('/mobile-hero.svg')",
          transform: "translate3d(0, var(--hero-parallax), 0)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-x-6 -inset-y-20 -z-10 hidden bg-cover bg-center bg-no-repeat will-change-transform sm:block"
        style={{
          backgroundImage: "url('/fundo.svg')",
          transform: "translate3d(0, var(--hero-parallax), 0)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-5">
        <div className="max-w-[23rem] text-left sm:max-w-4xl">
          <h1
            className="hero-enter font-display text-3xl font-bold leading-[1.04] tracking-tight text-balance sm:text-6xl lg:text-7xl"
            style={{ "--hero-delay": "180ms" } as React.CSSProperties}
          >
            Construo sistemas e interfaces web de{" "}
            <span className="text-muted-foreground">alta performance</span>.
          </h1>

          <p
            className="hero-enter mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty sm:mt-6 sm:max-w-2xl sm:text-lg"
            style={{ "--hero-delay": "300ms" } as React.CSSProperties}
          >
            <span className="sm:hidden">Full Stack em São Paulo. Sistemas, landing pages, APIs e dashboards.</span>
            <span className="hidden sm:inline">
              Desenvolvedor Full Stack focado em sistemas web, automações e interfaces com foco em clareza
              de produto, performance e entrega rápida de valor.
            </span>
          </p>

          <div
            className="hero-enter mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 sm:mt-8"
            style={{ "--hero-delay": "420ms" } as React.CSSProperties}
          >
            <Link
              href="#projetos"
              className="group inline-flex items-center gap-2 text-xs font-medium text-foreground/90 transition-colors hover:text-foreground sm:text-sm"
            >
              Ver projetos
              <ArrowUpRight className="size-3.5 stroke-[1.5] text-foreground/45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </Link>
          </div>

          <dl
            className="hero-enter mt-10 hidden max-w-lg grid-cols-3 gap-4 pt-2 sm:mt-14 sm:grid sm:gap-6"
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

      <div className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-muted-foreground sm:bottom-8 sm:block">
        <ArrowDown className="size-5 animate-bounce" aria-hidden />
      </div>
    </section>
  )
}
