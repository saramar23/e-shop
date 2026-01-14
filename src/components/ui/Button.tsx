import type { JSX } from "react"

export type ButtonProps = {
    content: string,
    event: () => void
}

export const Button = ({ content, event }: ButtonProps): JSX.Element => {
    

    return (
        <button onClick={event} className="text-bold border border-solid bg-red-200 ">{content}</button>
    )
}