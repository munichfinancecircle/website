"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export function Logo({ className, ...props }: LogoProps) {
  const { resolvedTheme } = useTheme()
  const [logoSrc, setLogoSrc] = useState("/images/MFCLightModeLogo.png") // Default light mode logo

  useEffect(() => {
    setLogoSrc(resolvedTheme === "dark" ? "/images/MFCDarkModeLogo.png" : "/images/MFCLightModeLogo.png")
  }, [resolvedTheme])

  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <Image
        src={logoSrc}
        alt="Munich FinanceCircle Logo"
        width={200}
        height={80}
        className="h-40 w-auto"
        priority
      />
    </div>
  )
}
