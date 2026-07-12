"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

/**
 * Smooth page transitions for Next.js App Router.
 * Fade + subtle slide up on enter.
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1], // smooth ease
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
