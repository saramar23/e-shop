import type { ComponentPropsWithRef } from "react"

type ButtonVariant = "primary" | "secondary" | "ghost"
type ButtonSize = "sm" | "md" | "lg"

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
    isLoading?: boolean,
    variant?: ButtonVariant
    size?: ButtonSize
}

const baseClass: string =
    "inline-flex items-center justify-center rounded-card font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-50"

const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary: "bg-secondary text-white hover:opacity-90",
    ghost: "bg-gray-200 text-secondary hover:bg-secondary/30",
}

const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-sm h-11 mx-1",
    md: "px-4 py-2 text-sm h-11 mx-1",
    lg: "px-5 py-3 text-base h-11 mx-1",
}

export const Button = 
    ({
        variant = "primary",
        size = "md",
        isLoading = false,
        className,
        children,
        ref,        
        disabled,   // Destructure to combine with isLoading
        ...props    // Capture everything else (onClick, type, etc.)
    }: ButtonProps) => {

    const isDisabled = disabled || isLoading;

    return (
        <button
            ref={ref}
            disabled={isDisabled}
            aria-busy={isLoading ? "true" : undefined}
            className={`${baseClass} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ""}`}
            {...props}
        >
            {isLoading ? <span className="animate-pulse">Loading...</span> : children}
        </button>
    )
}

Button.displayName = "Button"