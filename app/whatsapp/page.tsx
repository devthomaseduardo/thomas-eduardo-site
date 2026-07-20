"use client"

import { useEffect } from "react"
import { CONTACT } from "@/lib/data"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import { Shape9 } from "@/components/ui/abstract-shapes"

export default function WhatsAppRedirectPage() {
  useEffect(() => {
    // Redirecionamento automático após 2.5s para permitir a visualização da animação
    const timer = setTimeout(() => {
      window.location.replace(CONTACT.whatsapp_real)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#000000] text-foreground overflow-hidden relative">
      {/* Background Shapes */}
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 w-[40rem] -translate-x-1/2 -translate-y-1/2 opacity-10 mix-blend-screen"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <Shape9 />
      </motion.div>
      <div className="absolute inset-0 bg-grid-fade opacity-20 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center w-full max-w-sm">
        {/* Animated Icon/Spinner */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative flex size-24 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.02] mb-10 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-[2rem] border-2 border-transparent border-t-white/30 border-r-white/10"
          />
          <Icon icon="ph:whatsapp-logo-duotone" className="size-12 text-white/80" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
            Estamos te direcionando...
          </h1>
          <p className="text-[15px] leading-relaxed text-white/60 font-light text-balance mx-auto">
            Preparando o ambiente para conversarmos sobre o seu próximo projeto de software.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
          className="mt-10 h-1 w-full max-w-[200px] rounded-full bg-white/5 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-white/20 via-white/80 to-white/20 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </main>
  )
}
