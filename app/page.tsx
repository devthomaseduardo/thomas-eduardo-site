import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { StackMarquee } from "@/components/home/stack-marquee"
import { ProjectsStack } from "@/components/home/projects-stack"
import { Services } from "@/components/home/services"
import { Clients } from "@/components/home/clients"
import { Process } from "@/components/home/process"
import { Diferenciais } from "@/components/home/diferenciais"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StackMarquee />
      <ProjectsStack />
      <Services />
      <Clients />
      <Process />
      <Diferenciais />
      <CTA />
    </>
  )
}
