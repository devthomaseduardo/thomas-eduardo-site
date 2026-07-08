"use client"

import Link from "next/link"
import Script from "next/script"
import { ArrowDown, ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden">

      <Script
        src="https://embed.mckp.live/embed.js"
        strategy="afterInteractive"
      />

      {/* Mockup Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">

        {/* @ts-expect-error Custom Web Component */}
        <mockup-player
          mockup-id="48991589-86a0-4a9d-b5df-5f3ce547e4b9"
          aspect-ratio="16 / 9"
          trigger="load"
          cursor-affect-page="false"
          cursor-range="6-55-4-58"
          camera-zoom="39"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />

      </div>

      {/* Overlay para leitura */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32 sm:px-8 lg:px-10">

        <div className="max-w-2xl">

          <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-7xl">
            Construo sistemas e interfaces web de{" "}
            <span className="text-white/50">
              alta performance
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Desenvolvedor Full Stack focado em sistemas web,
            automações, APIs e produtos digitais com foco em
            performance, escalabilidade e experiência do usuário.
          </p>

          <div className="mt-8">
            <Link
              href="#projetos"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              Ver projetos

              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

        </div>

      </div>

      <ArrowDown
        className="absolute bottom-8 left-1/2 size-5 -translate-x-1/2 animate-bounce text-white/50"
      />

    </section>
  )
}