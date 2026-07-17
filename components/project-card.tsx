"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import { TechIconRow } from "@/components/tech-icon"
import { PROJECTS } from "@/lib/data"
import { CtaLink } from "@/components/ui/cta"
import { Tilt3D } from "@/components/ui/tilt-3d"

export function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0]
  index: number
}) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div 
      className="w-full h-[400px] sm:h-[480px] lg:h-[550px] relative cursor-pointer [perspective:1200px]"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        className="w-full h-full relative [transform-style:preserve-3d]"
      >
        {/* FRONT */}
        <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-[#121212]">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 hover:scale-[1.05]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-white/15 bg-black/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/85 backdrop-blur-md">
              {String(index + 1).padStart(2, "0")} · {project.tag}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white drop-shadow-md">
                {project.title}
              </h3>
              <p className="mt-1 text-sm font-light text-white/80 drop-shadow-md">
                {project.subtitle}
              </p>
            </div>
            {project.year && (
              <span className="rounded-full border border-white/15 bg-black/70 px-2.5 py-1 font-mono text-[11px] text-white/70 backdrop-blur-md">
                {project.year}
              </span>
            )}
          </div>

          {/* Flip indicator */}
          <div className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>
          </div>
        </div>

        {/* BACK */}
        <div 
          className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-[#121212] p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-white">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-[15px]">
              {project.description}
            </p>

            <div className="mt-5">
              <p className="label-kicker mb-1.5 text-white/45">Resultado</p>
              <p className="text-sm leading-relaxed text-white/80">
                {project.result}
              </p>
            </div>
          </div>

          <div className="mt-5 border-t border-white/10 pt-4 sm:mt-5 sm:pt-5">
            <p className="label-kicker mb-2.5 text-white/45">Tecnologias</p>
            <TechIconRow stack={project.stack} max={7} />

            {project.href && (
              <div className="mt-6">
                <CtaLink href={project.href} variant="soft" size="sm" external>
                  Ver projeto
                </CtaLink>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
