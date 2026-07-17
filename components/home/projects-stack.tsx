"use client"

import { useRef } from "react"
import Link from "next/link"
import { PROJECTS } from "@/lib/data"
import { motion, useScroll, useTransform } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { ArrowRight } from "lucide-react"
import { MobileCarousel } from "@/components/ui/mobile-carousel"

export function ProjectsStack({
  projects = PROJECTS.slice(0, 6),
  hideHeader = false,
}: {
  projects?: (typeof PROJECTS)[0][]
  hideHeader?: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  // Move horizontally based on scroll progress. 
  // Adjust the end percentage based on the number of items.
  // 6 items * ~800px width + gaps = need to move a fair amount.
  // A safe value for 6 items is moving by about -75%.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"])

  return (
    <section ref={containerRef} id="projects" className="relative w-full h-[450vh] sm:h-[300vh]">
      <div className="sticky top-0 flex h-[100dvh] flex-col justify-center overflow-hidden bg-background">
        {!hideHeader && (
          <div className="site-shell absolute top-24 sm:top-32 left-0 right-0 z-10 pointer-events-none">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between w-full">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="label-kicker mb-2 sm:mb-3"
                >
                  Trabalhos
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className="text-h2 font-normal text-foreground tracking-[-0.02em]"
                >
                  Projetos selecionados.
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="hidden sm:block pointer-events-auto"
              >
                <Link
                  href="/projetos"
                  className="group inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-white/50 transition-colors hover:text-white"
                >
                  Ver todos
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            </div>
          </div>
        )}

        {/* Unified View (Mobile + Desktop) */}
        <div className="flex w-full items-center pl-[max(env(safe-area-inset-left),6vw)] sm:pl-[max(env(safe-area-inset-left),4vw)] mt-16 sm:mt-0">
          <motion.div style={{ x }} className="flex gap-6 sm:gap-8 pr-[10vw]">
            {projects.map((project, i) => (
              <div key={project.title} className="w-[85vw] sm:w-[600px] lg:w-[800px] flex-shrink-0">
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </motion.div>
        </div>

        {!hideHeader && (
          <div className="site-shell mt-8 flex justify-center sm:hidden">
            <Link
              href="/projetos"
              className="group inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.12em] text-white/55 transition-colors hover:text-white"
            >
              Ver todos os projetos
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
