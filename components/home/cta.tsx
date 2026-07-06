import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CONTACT } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-card/20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" aria-hidden />
      <Reveal className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:py-36">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Contato</p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:mt-5 sm:text-5xl">
          Fale comigo
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty sm:mt-5 sm:text-base">
          <span className="sm:hidden">Projetos web, sistemas internos, landing pages e dashboards.</span>
          <span className="hidden sm:inline">
            Disponível para projetos web, sistemas internos, landing pages, dashboards e oportunidades como
            desenvolvedor Full Stack / Front-End.
          </span>
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Falar comigo
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <Link
            href="/valores"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:bg-secondary"
          >
            Ver valores
          </Link>
        </div>
        <a
          href={`mailto:${CONTACT.email}`}
          className="mt-8 inline-block font-mono text-sm text-muted-foreground hover:text-foreground"
        >
          {CONTACT.email}
        </a>
      </Reveal>
    </section>
  )
}
