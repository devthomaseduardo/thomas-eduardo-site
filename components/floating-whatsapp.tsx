"use client"

import { Icon } from "@iconify/react"
import { CONTACT } from "@/lib/data"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import CircularText from "@/components/ui/circular-text"

/**
 * Floating WhatsApp CTA.
 * Hides near the page bottom so footer social links stay clickable
 * (the ring used to cover GitHub / LinkedIn icons).
 */
export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const threshold = pathname === "/" ? 220 : 40

    const update = () => {
      const scrollY = window.scrollY
      const doc = document.documentElement
      const distanceFromBottom =
        doc.scrollHeight - (scrollY + window.innerHeight)

      // Hide when footer is in view / near bottom
      const nearFooter = distanceFromBottom < 220
      setIsVisible(scrollY > threshold && !nearFooter)
    }

    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update, { passive: true })
    update()
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [pathname])

  if (
    pathname === "/linkbio" ||
    pathname === "/curriculo" ||
    pathname === "/r" ||
    pathname?.startsWith("/r/")
  )
    return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-5 z-40 print:hidden sm:bottom-6 sm:right-6"
        >
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            className="group relative flex size-[5.75rem] items-center justify-center sm:size-[6.5rem]"
          >
            <div className="pointer-events-none absolute inset-0 opacity-85 transition-opacity group-hover:opacity-100">
              <CircularText
                text="DEVTHOMAS*WHATSAPP*FALE*COMIGO*"
                onHover="speedUp"
                spinDuration={18}
                hovered={hovered}
                className="circular-text--fab"
              />
            </div>

            <span className="relative z-10 flex size-12 items-center justify-center rounded-full border border-white/15 bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-110 group-active:scale-95 sm:size-14">
              <Icon icon="mdi:whatsapp" className="size-6 sm:size-7" />
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
