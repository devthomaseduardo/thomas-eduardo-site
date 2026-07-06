import Image from "next/image"
import { PROJECTS } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"

export function ProjectsStack() {
  return (
    <section id="projetos" className="relative mx-auto max-w-6xl px-5 py-16 sm:py-32">
      <SectionHeading kicker="Projetos" title="Prova de competência, não portfólio genérico" />

      <div className="mt-10 sm:mt-16">
        {PROJECTS.map((p, i) => (
          <article
            key={p.title}
            className="scroll-card sticky overflow-hidden rounded-2xl border border-border bg-card"
            style={{ top: `calc(6rem + ${i * 1.5}rem)` }}
          >
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="flex flex-col justify-between p-5 sm:p-10">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-border px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {p.tag}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight sm:mt-5 sm:text-3xl">{p.title}</h3>
                  <p className="mt-3 overflow-hidden text-sm leading-relaxed text-muted-foreground [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] sm:mt-4 sm:text-base sm:[display:block]">
                    {p.description}
                  </p>

                  <ul className="mt-5 space-y-2 sm:mt-6">
                    {p.bullets.map((b, bulletIndex) => (
                      <li
                        key={b}
                        className={`${bulletIndex > 0 ? "hidden sm:flex" : "flex"} items-center gap-2.5 text-sm text-foreground/85`}
                      >
                        <span className="size-1.5 rounded-full bg-foreground/60" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[240px] overflow-hidden">
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={`Interface do projeto ${p.title}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" aria-hidden />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
