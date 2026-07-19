"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import anime from "animejs"
import { useReducedMotion } from "framer-motion"

export function AnimeGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [columns, setColumns] = useState(0)
  const [rows, setRows] = useState(0)
  const reduceMotion = useReducedMotion()

  const calculateGrid = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    
    // Decrease size for a denser grid
    const size = 50 
    
    const cols = Math.ceil(container.clientWidth / size)
    const r = Math.ceil(container.clientHeight / size)
    
    setColumns(cols)
    setRows(r)
  }, [])

  useEffect(() => {
    if (reduceMotion) return

    calculateGrid()
    window.addEventListener("resize", calculateGrid)
    return () => window.removeEventListener("resize", calculateGrid)
  }, [reduceMotion, calculateGrid])

  const handleTileClick = (index: number) => {
    if (reduceMotion || columns === 0 || rows === 0) return

    anime.remove(".anime-grid-tile")
    
    anime({
      targets: ".anime-grid-tile",
      scale: [
        { value: 0.1, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 }
      ],
      backgroundColor: [
        { value: "rgba(255, 255, 255, 0.2)", easing: "easeOutSine", duration: 500 },
        { value: "rgba(255, 255, 255, 0.02)", easing: "easeInOutQuad", duration: 1200 }
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 500 },
        { value: 0.2, easing: "easeInOutQuad", duration: 1200 }
      ],
      delay: anime.stagger(50, {
        grid: [columns, rows],
        from: index
      })
    })
  }

  // Trigger initial animation
  useEffect(() => {
    if (columns > 0 && rows > 0) {
      setTimeout(() => {
        handleTileClick(Math.floor((columns * rows) / 2))
      }, 500)
    }
  }, [columns, rows])

  if (reduceMotion) {
    return <div className="absolute inset-0 bg-background/5" />
  }

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden w-full h-full z-0 pointer-events-auto"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`
      }}
    >
      {Array.from({ length: columns * rows }).map((_, i) => (
        <div
          key={i}
          className="anime-grid-tile w-full h-full border border-white/[0.03] bg-white/[0.02] opacity-20 cursor-pointer transition-colors duration-300 hover:bg-white/[0.1]"
          onClick={() => handleTileClick(i)}
        />
      ))}
    </div>
  )
}
