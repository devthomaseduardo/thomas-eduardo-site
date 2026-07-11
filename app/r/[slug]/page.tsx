import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getRedirect, listRedirects } from "@/lib/redirects"
import { RedirectClient } from "./redirect-client"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return listRedirects().map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const entry = getRedirect(slug)
  if (!entry) {
    return { title: "Link não encontrado", robots: { index: false, follow: false } }
  }
  return {
    title: `${entry.label} · devthomas`,
    description: entry.description ?? `Redirecionando para ${entry.label}`,
    robots: { index: false, follow: false },
  }
}

export default async function RedirectPage({ params }: Props) {
  const { slug } = await params
  const entry = getRedirect(slug)
  if (!entry) notFound()

  return <RedirectClient entry={entry} />
}
