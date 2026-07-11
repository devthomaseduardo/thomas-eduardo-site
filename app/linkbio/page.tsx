import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRight, Mail, MessageCircle, Globe, FileText } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { CONTACT } from "@/lib/data"

export const metadata: Metadata = {
  title: `Links | ${CONTACT.name}`,
  description: "Meus links e redes sociais.",
  alternates: { canonical: "/linkbio" },
}

const LINKS = [
  {
    title: "Portfólio",
    description: "Projetos e casos",
    url: "/r/portfolio",
    icon: Globe,
    primary: true,
  },
  {
    title: "WhatsApp",
    description: "Falar sobre um projeto",
    url: "/r/wa",
    icon: MessageCircle,
  },
  {
    title: "LinkedIn",
    description: "Trajetória profissional",
    url: "/r/linkedin",
    icon: LinkedinIcon,
  },
  {
    title: "GitHub",
    description: "Código e repositórios",
    url: "/r/github",
    icon: GithubIcon,
  },
  {
    title: "Currículo",
    description: "CV completo",
    url: "/r/curriculo",
    icon: FileText,
  },
  {
    title: "E-mail",
    description: CONTACT.email,
    url: "/r/email",
    icon: Mail,
  },
]

export default function LinkBioPage() {
  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-x-hidden bg-black px-5 py-14 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,255,255,0.07),transparent_55%)]"
      />

      <div className="relative z-10 w-full max-w-[22rem] sm:max-w-sm">
        <div className="mb-8 text-center sm:mb-10">
          <div className="relative mx-auto mb-4 size-20 overflow-hidden rounded-full ring-1 ring-white/20 sm:size-24">
            <Image
              src="/avatar.webp"
              alt={CONTACT.name}
              fill
              priority
              className="object-cover object-top"
              sizes="96px"
            />
          </div>
          <p className="font-display text-sm font-semibold lowercase tracking-[0.16em] text-white/80">
            devthomas
          </p>
          <h1 className="mt-1.5 font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
            {CONTACT.name.split(" ").slice(0, 2).join(" ")}
          </h1>
          <p className="mt-1 text-xs font-light text-white/65 sm:text-sm">
            Product Engineer · São Paulo
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          {LINKS.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.title}
                href={link.url}
                className={`group flex min-h-12 items-center gap-3 rounded-2xl border px-3.5 py-3 transition-colors active:scale-[0.99] ${
                  link.primary
                    ? "border-white/25 bg-white text-black hover:bg-white/90"
                    : "border-white/12 bg-white/[0.05] text-white hover:bg-white/[0.09]"
                }`}
              >
                <span
                  className={`flex size-9 shrink-0 items-center justify-center rounded-xl ${
                    link.primary
                      ? "bg-black/5 text-black"
                      : "bg-white/8 text-white/85"
                  }`}
                >
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block text-sm font-medium tracking-tight">
                    {link.title}
                  </span>
                  <span
                    className={`block truncate text-[11px] font-light ${
                      link.primary ? "text-black/55" : "text-white/55"
                    }`}
                  >
                    {link.description}
                  </span>
                </span>
                <ArrowUpRight
                  className={`size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    link.primary ? "text-black/45" : "text-white/45"
                  }`}
                />
              </a>
            )
          })}
        </div>

        <p className="mt-8 text-center font-mono text-[10px] tracking-wide text-white/40">
          © {new Date().getFullYear()} · devthomas
        </p>
      </div>
    </main>
  )
}
