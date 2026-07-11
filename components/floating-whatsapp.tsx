"use client"

import { Icon } from "@iconify/react"
import { CONTACT } from "@/lib/data"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import CircularText from "@/components/ui/circular-text"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Home: after a short scroll so hero stays clean
    // Other pages: almost immediate so the ring is part of the page UI
    const threshold = pathname === "/" ? 220 : 40
    const handleScroll = () => setIsVisible(window.scrollY > threshold)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
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
          className="fixed bottom-5 right-5 z-50 print:hidden sm:bottom-6 sm:right-6"
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
            className="group relative flex size-[7.25rem] items-center justify-center sm:size-[8rem]"
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

            <span className="relative z-10 flex size-14 items-center justify-center rounded-full border border-white/15 bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-110 group-active:scale-95 sm:size-[3.75rem]">
              <Icon icon="mdi:whatsapp" className="size-7" />
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
