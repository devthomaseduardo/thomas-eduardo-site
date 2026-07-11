import type { Metadata } from "next"
import Link from "next/link"
import { listRedirects } from "@/lib/redirects"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Redirects · devthomas",
  description: "Links curtos e rastreáveis.",
  robots: { index: false, follow: false },
}

export default function RedirectsIndexPage() {
  const links = listRedirects()

  return (
    <main className="min-h-screen bg-background px-5 py-28 sm:py-32">
      <div className="mx-auto max-w-lg">
        <p className="label-kicker mb-3">Utilitários</p>
        <h1 className="font-display text-3xl font-extrabold uppercase tracking-[-0.03em] text-foreground sm:text-4xl">
          Redirects.
        </h1>
        <p className="mt-3 text-sm font-light leading-relaxed text-white/70">
          Links curtos para bio, propostas e QR. Cada clique gera evento em
          Analytics.
        </p>

        <ul className="mt-8 divide-y divide-border/30 overflow-hidden rounded-2xl border border-border/30">
          {links.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/r/${r.slug}`}
                className="group flex items-center justify-between gap-3 px-4 py-3.5 transition-colors hover:bg-white/[0.03]"
              >
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/45">
                    /r/{r.slug}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">
                    {r.label}
                  </p>
                  {r.description && (
                    <p className="truncate text-xs font-light text-white/55">
                      {r.description}
                    </p>
                  )}
                </div>
                <ArrowUpRight className="size-4 shrink-0 text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
