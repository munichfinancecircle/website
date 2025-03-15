import type React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <Image
        src="/images/Logo.jpg"
        alt="Munich FinanceCircle Logo"
        width={200}
        height={80}
        className="h-8 w-auto"
        priority
      />
    </div>
  )
}

