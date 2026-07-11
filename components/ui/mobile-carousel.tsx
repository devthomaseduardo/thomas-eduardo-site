"use client"

import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"

type MobileCarouselProps = {
  children: ReactNode
  /** Tailwind width for each mobile slide. Default peeks next card. */
  itemClassName?: string
  /** Desktop layout from sm breakpoint up. */
  desktopClassName?: string
  className?: string
  /** Show dot indicators on mobile */
  dots?: boolean
}

/**
 * Mobile: horizontal snap carousel (less vertical scroll).
 * Desktop (sm+): normal grid/flex via desktopClassName.
 */
export function MobileCarousel({
  children,
  itemClassName = "w-[min(86vw,22rem)]",
  desktopClassName = "sm:grid sm:grid-cols-2 sm:gap-3 lg:grid-cols-3",
  className,
  dots = true,
}: MobileCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const items = Children.toArray(children).filter(Boolean)
  const [active, setActive] = useState(0)

  const syncActive = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const slides = Array.from(el.children) as HTMLElement[]
    if (!slides.length) return
    const mid = el.scrollLeft + el.clientWidth / 2
    let best = 0
    let bestDist = Infinity
    slides.forEach((slide, i) => {
      const center = slide.offsetLeft + slide.offsetWidth / 2
      const d = Math.abs(center - mid)
      if (d < bestDist) {
        bestDist = d
        best = i
      }
    })
    setActive(best)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    syncActive()
    el.addEventListener("scroll", syncActive, { passive: true })
    window.addEventListener("resize", syncActive)
    return () => {
      el.removeEventListener("scroll", syncActive)
      window.removeEventListener("resize", syncActive)
    }
  }, [syncActive, items.length])

  const goTo = (index: number) => {
    const el = scrollerRef.current
    if (!el) return
    const slide = el.children[index] as HTMLElement | undefined
    if (!slide) return
    el.scrollTo({ left: slide.offsetLeft - 16, behavior: "smooth" })
  }

  return (
    <div className={cn("relative", className)}>
      <div
        ref={scrollerRef}
        className={cn(
          // mobile carousel
          "-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1",
          "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
          // desktop grid
          "sm:mx-0 sm:grid sm:snap-none sm:overflow-visible sm:px-0 sm:pb-0",
          desktopClassName,
        )}
      >
        {items.map((child, i) => (
          <div
            key={isValidElement(child) && child.key != null ? String(child.key) : i}
            className={cn(
              "shrink-0 snap-center sm:min-w-0 sm:shrink sm:snap-align-none",
              itemClassName,
              "sm:!w-auto sm:!max-w-none",
            )}
          >
            {child}
          </div>
        ))}
      </div>

      {dots && items.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-1.5 sm:hidden">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                i === active ? "w-5 bg-white" : "w-1.5 bg-white/25",
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}
