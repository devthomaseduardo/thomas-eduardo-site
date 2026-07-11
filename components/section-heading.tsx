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
      <p className="label-kicker text-[#ffffff]">{kicker}</p>
      <h2 className="text-display mt-2 text-2xl text-foreground sm:mt-3 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-body mt-3 hidden text-base text-muted-foreground text-pretty sm:block">
          {description}
        </p>
      )}
    </Reveal>
  )
}
