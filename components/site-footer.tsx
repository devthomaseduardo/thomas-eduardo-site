"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { Mail } from "lucide-react"

export function SiteFooter() {
  const pathname = usePathname()
  
  if (pathname === "/linkbio") return null

  return (
    <footer className="relative bg-black pt-20 pb-8 overflow-hidden rounded-t-[2.5rem] mt-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Minimalist Top Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-24">
          
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs uppercase tracking-widest text-white/50">Disponível para trabalho freelance</p>
            <a href="mailto:devthomaseduardo@gmail.com" className="font-display text-xl sm:text-2xl font-medium text-white transition-colors hover:text-blue-400">
              devthomaseduardo@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Início</Link>
            <Link href="/sobre" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Sobre</Link>
            <Link href="/projetos" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Projetos</Link>
            <a href="https://github.com/devthomaseduardo" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-all hover:scale-110">
              <GithubIcon className="size-5" />
            </a>
            <a href="https://linkedin.com/in/devthomaseduardo" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-all hover:scale-110">
              <LinkedinIcon className="size-5" />
            </a>
          </div>

        </div>

        {/* Giant Typography */}
        <div className="flex justify-center border-t border-white/10 pt-8 pb-4 overflow-hidden">
          <h2 className="font-display font-semibold tracking-tighter text-[15vw] sm:text-[14vw] leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/20 select-none whitespace-nowrap">
            THOMAS
          </h2>
        </div>

        {/* Bottom Legal Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40 pt-4">
          <p>© {new Date().getFullYear()} Thomas Eduardo. Todos os direitos reservados.</p>
          <p>São Paulo, BR • CNPJ 60.882.678/0001-77</p>
        </div>

      </div>
    </footer>
  )
}
