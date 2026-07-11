import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

type CtaVariant = "solid" | "ghost" | "soft"
type CtaSize = "sm" | "md"

const sizeClass: Record<CtaSize, string> = {
  sm: "h-8 gap-1.5 px-3 text-[10px]",
  md: "h-9 gap-1.5 px-3.5 text-[11px]",
}

const variantClass: Record<CtaVariant, string> = {
  solid:
    "bg-white text-black hover:bg-white/90 active:bg-white/80",
  ghost:
    "bg-transparent text-white/85 hover:bg-white/[0.08] hover:text-white active:bg-white/[0.12]",
  soft:
    "bg-white/[0.08] text-white/90 hover:bg-white/[0.14] hover:text-white active:bg-white/[0.18]",
}

function ArrowIcon({ external }: { external?: boolean }) {
  const Icon = external ? ArrowUpRight : ArrowRight
  return (
    <Icon
      className="btn-arrow size-3.5 shrink-0 opacity-80 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
      strokeWidth={2}
      aria-hidden
    />
  )
}

type CommonProps = {
  children: React.ReactNode
  className?: string
  variant?: CtaVariant
  size?: CtaSize
  external?: boolean
  showArrow?: boolean
}

export function CtaLink({
  href,
  children,
  className,
  variant = "solid",
  size = "md",
  external,
  showArrow = true,
  ...props
}: CommonProps &
  Omit<React.ComponentPropsWithoutRef<"a">, "href" | "children" | "className"> & {
    href: string
  }) {
  const isExternal = external ?? /^https?:\/\//.test(href)
  const classes = cn(
    "btn-cta group/cta inline-flex items-center justify-center rounded-full font-medium uppercase tracking-[0.08em] transition-[transform,background-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
    "hover:-translate-y-px active:translate-y-0 active:scale-[0.98]",
    sizeClass[size],
    variantClass[variant],
    className,
  )

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowIcon external={isExternal} />}
    </>
  )

  if (isExternal || href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  )
}
