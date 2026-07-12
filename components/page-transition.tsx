"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

/**
 * Premium smooth page transitions.
 * Subtle fade + gentle upward slide + micro scale.
 * Feels expensive and modern.
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ 
          opacity: 0, 
          y: 16, 
          scale: 0.985 
        }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: 1 
        }}
        exit={{ 
          opacity: 0, 
          y: -10, 
          scale: 0.99 
        }}
        transition={{
          duration: 0.4,
          ease: [0.23, 1.0, 0.32, 1], // Premium ease
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
