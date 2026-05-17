import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({ label, title, description, align = "center", className }: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-10 md:mb-12",
      align === "center" ? "text-center" : "text-left",
      className
    )}>
      {label && (
        <p className="text-xs tracking-[0.2em] text-rose-gold uppercase mb-3 font-medium">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground font-serif text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}
