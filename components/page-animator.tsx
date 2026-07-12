"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

/**
 * Optimized PageAnimator using GSAP context for better performance and cleanup.
 */
export function PageAnimator() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Generic data-gsap targets
      const targets = gsap.utils.toArray<HTMLElement>("[data-gsap]")
      targets.forEach((el) => {
        const type = el.dataset.gsap ?? "fade-up"
        const delay = parseFloat(el.dataset.delay ?? "0")

        const fromVars: gsap.TweenVars = { opacity: 0, duration: 0.65, delay, ease: "power2.out" }

        if (type === "fade-up") fromVars.y = 32
        if (type === "fade-left") fromVars.x = -32
        if (type === "fade-right") fromVars.x = 32
        if (type === "scale-in") {
          fromVars.scale = 0.94
          fromVars.filter = "blur(5px)"
        }

        gsap.from(el, {
          ...fromVars,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      })

      // Staggered cards
      const cardGroups = gsap.utils.toArray<HTMLElement>(".gsap-stagger")
      cardGroups.forEach((group) => {
        const cards = group.querySelectorAll<HTMLElement>(".card-animate")
        if (!cards.length) return

        gsap.from(cards, {
          opacity: 0,
          y: 26,
          scale: 0.96,
          stagger: 0.07,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: group,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return null
}
