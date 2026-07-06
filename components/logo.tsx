import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({ className, size = 32 }: { className?: string; size?: number }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)} aria-label="Thomas — página inicial">
      <Image
        src="/logo-mark.png"
        alt="Logo Thomas"
        width={size}
        height={size}
        className="rounded-md transition-transform duration-300 group-hover:scale-105"
        priority
      />
      <span className="font-display text-sm font-semibold tracking-[0.35em] uppercase">Thomas</span>
    </Link>
  )
}
