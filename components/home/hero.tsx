"use client"

import { useEffect, useRef, useCallback } from "react"
import { motion, useReducedMotion } from "framer-motion"
import TextPressure from "@/components/ui/text-pressure"

/**
 * Enhanced Hero with 3D tilt frame, smooth video scrub, and premium transforms
 * - Mouse controls video scrub
 * - 3D perspective tilt on the video frame
 * - Smooth Framer Motion animations
 * - Preserves TextPressure and original design
 */
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  // Video scrub with mouse pointer
  const handlePointerMove = useCallback((e: PointerEvent) => {
    const video = videoRef.current
    if (!video || reduceMotion || video.seeking) return

    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    const targetTime = x * (video.duration || 0)

    // Throttle for performance
    if (Math.abs(targetTime - video.currentTime) < 0.08) return

    video.currentTime = targetTime
  }, [reduceMotion])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('pointermove', handlePointerMove)
    return () => container.removeEventListener('pointermove', handlePointerMove)
  }, [handlePointerMove])

  // Subtle idle video movement when not interacting (optional - commented for performance)
  useEffect(() => {
    const v = videoRef.current
    if (!v || reduceMotion) return

    v.playbackRate = 0.55
    v.muted = true
    v.loop = false

    const startAtNeutral = () => {
      if (v.duration) {
        v.currentTime = v.duration * 0.48
      }
    }

    if (v.readyState >= 1) {
      startAtNeutral()
    } else {
      v.addEventListener('loadedmetadata', startAtNeutral, { once: true })
    }
  }, [reduceMotion])

  return (
    <section 
      ref={containerRef}
      className="relative flex h-[100svh] min-h-[32rem] w-full items-end overflow-hidden bg-black perspective-[1400px]"
      data-hide-cursor
      data-hero-container
    >
      {/* Enhanced Frame with 3D tilt and transforms */}
      <motion.div 
        className="absolute inset-0 hero-frame"
        whileHover={{ 
          scale: 1.015,
          rotateX: 3,
          rotateY: 5 
        }}
        transition={{ 
          type: "spring", 
          stiffness: 80, 
          damping: 22 
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <video
          ref={videoRef}
          src="/hero.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-90 sm:opacity-85"
          aria-hidden
        />
        {/* Refined overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(249,115,22,0.12),transparent_70%)] mix-blend-overlay" />
      </motion.div>

      {/* Content with smooth reveal animations */}
      <div className="site-shell relative z-10 w-full pb-[max(4.5rem,env(safe-area-inset-bottom)+3.25rem)] pt-24 sm:pb-20 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="mb-3 text-[11px] font-light uppercase tracking-[0.24em] text-white/70 sm:mb-4 sm:text-[11px]"
        >
          Product Engineer · SP
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
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
