import Image from "next/image"
import { CLIENTS } from "@/lib/data"
import { SectionHeading } from "@/components/section-heading"

export function Clients() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-20 sm:py-32">
      <SectionHeading kicker="Clientes" title="Empresas que confiaram no meu trabalho" align="center" />
      
      <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        {CLIENTS.map((client) => (
          <div key={client.name} className="relative h-12 w-32 md:h-16 md:w-40 transition-transform hover:scale-105">
            <Image
              src={client.logo}
              alt={`Logo do cliente ${client.name}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
