import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { PROJECTS } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"

export const metadata: Metadata = {
  title: "Projetos | Thomas Eduardo",
  description: "Conheça alguns dos meus principais trabalhos e projetos.",
}

export default function ProjetosPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-16">
          <SectionHeading
            kicker="Portfólio"
            title="Todos os Projetos"
            description="Uma seleção de produtos digitais, experiências e sistemas desenvolvidos."
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <article
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-foreground/20"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="rounded-full border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {project.tag}
                  </span>
                  {project.year && (
                    <span className="font-mono text-[10px] text-muted-foreground">{project.year}</span>
                  )}
                </div>

                <h3 className="mb-2 font-display text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                
                <p className="mb-6 text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary px-2 py-1 font-mono text-[10px] text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="rounded-md bg-secondary px-2 py-1 font-mono text-[10px] text-secondary-foreground">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>

                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                  >
                    Ver projeto online
                    <ArrowUpRight className="size-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground opacity-50 cursor-not-allowed">
                    Projeto Privado
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
