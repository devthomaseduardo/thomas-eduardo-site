"use client"

import { useEffect, useRef, useCallback } from "react"
import { motion, useReducedMotion } from "framer-motion"
import TextPressure from "@/components/ui/text-pressure"

/**
 * Hero estável e otimizado
 * - Mouse scrub no vídeo
 * - Sem dependências extras
 */
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      const video = videoRef.current
      if (!video || reduceMotion || video.seeking) return

      const duration = video.duration
      if (!Number.isFinite(duration) || duration <= 0) return

      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect || rect.width <= 0) return

      const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
      const targetTime = x * duration

      if (!Number.isFinite(targetTime)) return
      if (Math.abs(targetTime - video.currentTime) < 0.1) return

      try {
        video.currentTime = targetTime
      } catch {
        // Ignore seek errors while metadata is still settling
      }
    },
    [reduceMotion],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener("pointermove", handlePointerMove)
    return () => container.removeEventListener("pointermove", handlePointerMove)
  }, [handlePointerMove])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    v.muted = true
    v.playsInline = true
    v.preload = "auto"

    const startAtMiddle = () => {
      if (Number.isFinite(v.duration) && v.duration > 0) {
        try {
          v.currentTime = v.duration * 0.5
        } catch {
          // ignore
        }
      }
    }

    // Force load so the first frame paints even without autoplay
    v.load()

    if (v.readyState >= 1) {
      startAtMiddle()
    } else {
      v.addEventListener("loadedmetadata", startAtMiddle, { once: true })
      v.addEventListener("loadeddata", startAtMiddle, { once: true })
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative flex h-[100svh] min-h-[32rem] w-full items-end overflow-hidden bg-black"
      data-hero-container
    >
      {/* Video layer — plain absolute fill so it always paints */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/hero.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />
      </div>

      <div className="site-shell relative z-10 w-full pb-[max(4.5rem,env(safe-area-inset-bottom)+3.25rem)] pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-3 text-[11px] font-light uppercase tracking-widest text-white/70"
        >
          Product Engineer · SP
        </motion.p>

        <div className="max-w-[min(100%,42rem)]">
          <TextPressure text="Thomas" textColor="#ffffff" />
          <TextPressure text="Eduardo" textColor="rgba(255,255,255,0.75)" />
        </div>
      </div>
    </section>
  )
}
