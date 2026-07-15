"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

/**
 * Light cursor — soft luminous glow that follows the pointer.
 * Expands on interactive hover. Disabled on touch / reduced motion.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hover, setHover] = useState(false)
  const [click, setClick] = useState(false)
  const [hidden, setHidden] = useState(false)

  const x = useMotionValue(-200)
  const y = useMotionValue(-200)

  // Smooth lag for the light body
  const spring = { damping: 32, stiffness: 220, mass: 0.4 }
  const lightX = useSpring(x, spring)
  const lightY = useSpring(y, spring)

  // Core follows a bit snappier
  const coreX = useSpring(x, { damping: 40, stiffness: 500, mass: 0.2 })
  const coreY = useSpring(y, { damping: 40, stiffness: 500, mass: 0.2 })

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (!fine || touch || reduce) return

    setEnabled(true)
    document.documentElement.classList.add("custom-cursor-active")

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const onDown = () => setClick(true)
    const onUp = () => setClick(false)
    const onLeave = () => setHidden(true)
    const onEnter = () => setHidden(false)

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null
      if (!el) return
      
      if (el.closest("[data-hide-cursor]")) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      const interactive = el.closest(
        "a, button, [role='button'], input, textarea, select, label, .btn-cta, .btn-solid-pill, .btn-outline-pill, .clickable, [data-cursor]",
      )
      setHover(!!interactive)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    window.addEventListener("mouseover", onOver)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)

    return () => {
      document.documentElement.classList.remove("custom-cursor-active")
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      window.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
    }
  }, [x, y])

  if (!enabled) return null

  const glow = hover ? (click ? 120 : 160) : click ? 70 : 110
  const core = hover ? (click ? 6 : 8) : click ? 4 : 5

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      aria-hidden
      style={{
        opacity: hidden ? 0 : 1,
        transition: "opacity 0.25s ease",
      }}
    >
      {/* Soft ambient light */}
      <motion.div
        className="absolute top-0 left-0 rounded-full"
        style={{
          x: lightX,
          y: lightY,
          translateX: "-50%",
          translateY: "-50%",
          width: glow,
          height: glow,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0) 70%)",
          filter: "blur(2px)",
        }}
        animate={{
          width: glow,
          height: glow,
          opacity: hover ? 1 : 0.85,
          scale: click ? 0.9 : 1,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 28 }}
      />

      {/* Mid halo */}
      <motion.div
        className="absolute top-0 left-0 rounded-full"
        style={{
          x: lightX,
          y: lightY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.12) 40%, transparent 70%)",
        }}
        animate={{
          width: hover ? 48 : 32,
          height: hover ? 48 : 32,
          opacity: hover ? 0.95 : 0.7,
          scale: click ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 360, damping: 24 }}
      />

      {/* Bright core */}
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-white shadow-[0_0_20px_8px_rgba(255,255,255,0.35)]"
        style={{
          x: coreX,
          y: coreY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: core,
          height: core,
          boxShadow: hover
            ? "0 0 28px 12px rgba(255,255,255,0.45)"
            : "0 0 18px 8px rgba(255,255,255,0.3)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </div>
  )
}
