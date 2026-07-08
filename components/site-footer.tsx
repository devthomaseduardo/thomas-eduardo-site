"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { Logo } from "@/components/logo"

export function SiteFooter() {
  const pathname = usePathname()
  
  if (pathname === "/linkbio") return null

  return (

    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Desenvolvedor Full Stack. Construo sistemas e interfaces web focados em performance, clareza e entrega
              rápida de valor.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Navegação</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li><Link href="/" className="text-foreground/80 hover:text-foreground">Início</Link></li>
                <li><Link href="/sobre" className="text-foreground/80 hover:text-foreground">Sobre</Link></li>
                <li><Link href="/curriculo" className="text-foreground/80 hover:text-foreground">Currículo</Link></li>
                <li><Link href="/valores" className="text-foreground/80 hover:text-foreground">Valores</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Contato</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href="mailto:devthomaseduardo@gmail.com" className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground">
                    <Mail className="size-4" /> E-mail
                  </a>
                </li>
                <li>
                  <a href="https://github.com/devthomaseduardo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground">
                    <GithubIcon className="size-4" /> GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/devthomaseduardo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground">
                    <LinkedinIcon className="size-4" /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 pt-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Thomas Eduardo R. Nascimento — São Paulo, SP</p>
          <p className="font-mono">CNPJ 60.882.678/0001-77</p>
        </div>
      </div>
    </footer>
  )
}
