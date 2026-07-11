"use client"

import { useEffect } from "react"
import {
  motion,
  useAnimation,
  useMotionValue,
  useReducedMotion,
} from "framer-motion"

import "./circular-text.css"

type OnHover = "slowDown" | "speedUp" | "pause" | "goBonkers"

type CircularTextProps = {
  text?: string
  spinDuration?: number
  onHover?: OnHover
  className?: string
  /** When set, drives hover behavior from a parent (e.g. FAB wrapper). */
  hovered?: boolean
}

const getRotationTransition = (duration: number, from: number, loop = true) => ({
  from,
  to: from + 360,
  ease: "linear" as const,
  duration,
  type: "tween" as const,
  repeat: loop ? Infinity : 0,
})

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring" as const,
    damping: 20,
    stiffness: 300,
  },
})

function applyHover(
  onHover: OnHover | undefined,
  spinDuration: number,
  start: number,
  controls: ReturnType<typeof useAnimation>,
) {
  if (!onHover) return

  let transitionConfig
  let scaleVal = 1

  switch (onHover) {
    case "slowDown":
      transitionConfig = getTransition(spinDuration * 2, start)
      break
    case "speedUp":
      transitionConfig = getTransition(spinDuration / 4, start)
      break
    case "pause":
      transitionConfig = {
        rotate: { type: "spring" as const, damping: 20, stiffness: 300 },
        scale: { type: "spring" as const, damping: 20, stiffness: 300 },
      }
      scaleVal = 1
      break
    case "goBonkers":
      transitionConfig = getTransition(spinDuration / 20, start)
      scaleVal = 0.8
      break
    default:
      transitionConfig = getTransition(spinDuration, start)
  }

  void controls.start({
    rotate: start + 360,
    scale: scaleVal,
    transition: transitionConfig,
  })
}

export default function CircularText({
  text = "",
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
  hovered,
}: CircularTextProps) {
  const letters = Array.from(text)
  const controls = useAnimation()
  const rotation = useMotionValue(0)
  const reduceMotion = useReducedMotion()
  const controlled = typeof hovered === "boolean"

  useEffect(() => {
    if (reduceMotion) {
      controls.set({ rotate: 0, scale: 1 })
      return
    }

    const start = rotation.get()
    void controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    })
  }, [spinDuration, text, onHover, controls, rotation, reduceMotion])

  // External hover (FAB / parent wrapper)
  useEffect(() => {
    if (!controlled || reduceMotion) return
    const start = rotation.get()
    if (hovered) {
      applyHover(onHover, spinDuration, start, controls)
    } else {
      void controls.start({
        rotate: start + 360,
        scale: 1,
        transition: getTransition(spinDuration, start),
      })
    }
  }, [hovered, controlled, reduceMotion, onHover, spinDuration, controls, rotation])

  const handleHoverStart = () => {
    if (controlled || reduceMotion || !onHover) return
    applyHover(onHover, spinDuration, rotation.get(), controls)
  }

  const handleHoverEnd = () => {
    if (controlled || reduceMotion) return
    const start = rotation.get()
    void controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    })
  }

  return (
    <motion.div
      className={`circular-text ${className}`.trim()}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      aria-hidden
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i
        const factor = Math.PI / letters.length
        const x = factor * i
        const y = factor * i
        const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`

        return (
          <span key={i} style={{ transform, WebkitTransform: transform }}>
            {letter}
          </span>
        )
      })}
    </motion.div>
  )
}
