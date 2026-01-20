import { type ComponentPropsWithRef, useId } from "react"

/* Old (v18): InputHTMLAttributes + forwardRef.
* New (v19): ComponentPropsWithRef + ref as a normal prop.
** Omit<..., 'id'>: Used to override an optional library prop and make it Required for better Accessibility.
*/

type InputVariant = "searchItem" | "submitForm" | "registerEmail"

// Make id optional in the interface.
// Use useId as a fallback.
export interface InputProps extends Omit<ComponentPropsWithRef<"input">, "id"> {    
    id?: string,
    variant?: InputVariant,
    helperText?: string,
    error?: string,
    labelText?: string
}

const basicClass: string =
    "text-left rounded-card font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 h-11 px-3"

const inputVariantStyles: Record<InputVariant, string> = {
    searchItem: "bg-background w-full border border-slate-200",
    submitForm: "bg-background border-2 border-primary",
    registerEmail: "bg-background border-b-2 border-slate-400 rounded-none"
}

/**
  *  ~!!error converts error to a boolean
  *  ~true when error exists → aria-invalid="true"
  *  ~false when no error → aria-invalid="false"
  *  ~Ensures the attribute is always set with the correct value
 */

export const Input = 
    ({ variant = "submitForm", 
        error, 
        helperText, 
        className, 
        labelText, 
        id: providedId, 
        ref, 
        ...props }: InputProps
    ) => {
        
    const generatedId = useId();
    const id = providedId || generatedId;

    return (
        <div className="w-full flex flex-col gap-1.5">
            {labelText && (
                <label 
                    htmlFor={id}
                > 
                    {labelText} 
                </label>
            )}
            <input
                ref={ref}
                id={id}
                {...props} 
                className={`${basicClass} ${inputVariantStyles[variant]} ${className || ''}`}
                aria-describedby={`${id}-helper ${id}-error`}
                aria-invalid={!!error}
            />
            {error && (
                <span 
                    className="text-xs text-error font-medium" 
                    id={`${id}-error`}
                >
                    {error}
                </span>
            )}
            
            {!error && helperText && (
                <span 
                    className="text-xs text-slate-500" 
                    id={`${id}-helper`}
                >
                    {helperText}
                </span>
            )}
        </div>
    )
}

Input.displayName = "Input"