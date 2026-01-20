import type { ComponentPropsWithRef } from "react"

type BadgeVariant = "primary" | "secondary" | "accent"

export interface BadgeProps extends ComponentPropsWithRef<"span"> {
    variant?: BadgeVariant
}

const badgeVariantStyle: Record<BadgeVariant, string> = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    accent: "bg-accent text-secondary"
}

const baseClass: string =
    "inline-flex items-center justify-center rounded-full font-medium px-2 m-0.5 text-sm"


export const Badge = 
    ({ 
        variant = "primary", 
        children, 
        className, 
        ref, 
        ...props } : BadgeProps 
    ) => {

    return (
        <>
            <span 
                ref={ref}
                className={`${baseClass} ${badgeVariantStyle[variant]} ${className || ""}`}
                {...props}
            >
               {children}
            </span>
        </>
    )
}