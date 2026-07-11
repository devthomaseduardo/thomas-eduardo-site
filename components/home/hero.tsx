"use client"

import { useEffect, useRef } from "react"
import { motion, useReducedMotion } from "framer-motion"
import TextPressure from "@/components/ui/text-pressure"

/**
 * Video + name only. No slogan, no buttons.
 * Left / bottom — personal brand over atmosphere.
 * Name uses React Bits TextPressure (hero only).
 */
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const v = videoRef.current
    if (!v || reduceMotion) return
    v.playbackRate = 0.65
    void v.play().catch(() => {})
  }, [reduceMotion])

  return (
    <section className="relative flex h-[100svh] min-h-[32rem] w-full items-end overflow-hidden bg-black">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/hero.mp4"
          poster="/hero-poster.jpg"
          autoPlay={!reduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-60 sm:opacity-55"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/35 sm:bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
      </div>

      <div className="site-shell relative z-10 w-full pb-[max(4.5rem,env(safe-area-inset-bottom)+3.25rem)] pt-24 sm:pb-20 md:pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3 text-[10px] font-light uppercase tracking-[0.22em] text-white/65 sm:mb-4 sm:text-[11px]"
        >
          Product Engineer · SP
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="w-full max-w-[min(100%,42rem)]"
        >
          <h1 className="sr-only">Thomas Eduardo</h1>
          <div className="relative h-[clamp(2.75rem,11vw,6.5rem)] w-full" aria-hidden>
            <TextPressure
              text="Thomas"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="#ffffff"
              minFontSize={36}
            />
          </div>
          <div className="relative h-[clamp(2.75rem,11vw,6.5rem)] w-full" aria-hidden>
            <TextPressure
              text="Eduardo"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="rgba(255,255,255,0.72)"
              minFontSize={36}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
