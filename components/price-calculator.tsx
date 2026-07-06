"use client"

import { useState } from "react"
import { Minus, Plus, Hourglass, Calendar } from "lucide-react"

const RATE = 20
const HOURS_PER_DAY = 8

const BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })

export function PriceCalculator() {
  const [mode, setMode] = useState<"hours" | "days">("hours")
  const [value, setValue] = useState(6)

  const hours = mode === "hours" ? value : value * HOURS_PER_DAY
  const total = hours * RATE

  const wa = `https://wa.me/5511977070209?text=${encodeURIComponent(
    `Olá Thomas, tenho interesse em um projeto de aproximadamente ${hours}h (${mode === "days" ? `${value} dias` : `${value} horas`}, estimativa ${BRL.format(total)}). Podemos conversar?`,
  )}`

  return (
    <div className="rounded-2xl border border-border bg-card p-7 sm:p-9">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Simulador</p>
      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">Estime o seu projeto</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Valor base de <span className="font-mono text-foreground">{BRL.format(RATE)}/hora</span>.
      </p>

      <div className="mt-6 flex gap-2">
        <button
          onClick={() => {
            if (mode === "days") {
              setMode("hours")
              setValue(value * HOURS_PER_DAY)
            }
          }}
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2 text-sm ${mode === "hours" ? "bg-foreground text-background" : "bg-secondary text-muted-foreground"}`}
        >
          <Hourglass className="size-4" /> Horas
        </button>
        <button
          onClick={() => {
            if (mode === "hours") {
              setMode("days")
              setValue(Math.max(1, Math.round(value / HOURS_PER_DAY)))
            }
          }}
          className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2 text-sm ${mode === "days" ? "bg-foreground text-background" : "bg-secondary text-muted-foreground"}`}
        >
          <Calendar className="size-4" /> Dias
        </button>
      </div>

      <div className="mt-8 flex items-center justify-between rounded-xl border border-border bg-background/40 p-5">
        <div>
          <p className="text-sm text-muted-foreground">{mode === "hours" ? "Horas estimadas" : "Dias estimados"}</p>
          <p className="mt-1 font-display text-3xl font-bold">
            {value}{mode === "hours" ? "h" : "d"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setValue((v) => Math.max(1, v - 1))}
            aria-label="Diminuir"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
          >
            <Minus className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => setValue((v) => Math.min(mode === "hours" ? 80 : 10, v + 1))}
            aria-label="Aumentar"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
          >
            <Plus className="size-4" />
          </button>
        </div>
      </div>

      <input
        type="range"
        min={1}
        max={mode === "hours" ? 80 : 10}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        aria-label="Ajustar"
        className="mt-5 w-full accent-[var(--foreground)]"
      />
      <div className="mt-2 flex justify-between font-mono text-xs text-muted-foreground">
        <span>1{mode === "hours" ? "h" : "d"}</span>
        <span>{mode === "hours" ? "80h" : "10d"}</span>
      </div>

      <div className="mt-8 flex items-end justify-between border-t border-border pt-6">
        <span className="text-sm text-muted-foreground">Estimativa ({hours}h)</span>
        <span className="font-display text-4xl font-bold">{BRL.format(total)}</span>
      </div>

      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
      >
        Solicitar orçamento com essa base
      </a>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Estimativa inicial — o valor final é fechado após alinharmos o escopo.
      </p>
    </div>
  )
}
