import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: {
  kicker: string
  title: string
  description?: string
  align?: "left" | "center"
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">{kicker}</p>
      <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-balance sm:mt-4 sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 hidden leading-relaxed text-muted-foreground text-pretty sm:block">{description}</p>
      )}
    </Reveal>
  )
}
