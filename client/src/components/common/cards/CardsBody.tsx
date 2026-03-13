import type { ReactNode } from "react";

interface CardsBodyProps {
    children: ReactNode
    className?: string;
}

function CardsBody({ children, className }: CardsBodyProps) {
    return (
        <div className={`p-3 bg-chocolate border-x border-beige ${className}`}>
            {children}
        </div>
    )
}

export default CardsBody
