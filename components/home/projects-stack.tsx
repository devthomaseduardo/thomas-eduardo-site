"use client"

import { PROJECTS } from "@/lib/data"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"

export function ProjectsStack({ projects = PROJECTS.slice(0, 3), hideHeader = false }: { projects?: (typeof PROJECTS)[0][], hideHeader?: boolean }) {
  return (
    <section id="projects" className="relative w-full px-4 sm:px-6 py-12 sm:py-24">
      
      {/* Cabeçalho */}
      {!hideHeader && (
      <div className="mb-24 lg:mb-40 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
        >
          / Trabalhos
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
        >
          Projetos Selecionados.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-2xl text-xl text-muted-foreground"
        >
          Produtos e sistemas que arquitetei e entreguei —
          com foco em escalabilidade, performance e resultado real.
        </motion.p>
        </div>
      )}

      <div className="flex flex-col items-center">
        {projects.map((project, i) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            index={i} 
          />
        ))}
      </div>

    </section>
  )
}
