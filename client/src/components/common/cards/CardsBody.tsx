import type { ReactNode } from "react";

interface CardsBodyProps {
    children: ReactNode
    className?: string;
}

function CardsBody({ children, className }: CardsBodyProps) {
    return (
        <div className={`bg-outlet-body p-3 ${className}`}>
            {children}
        </div>
    )
}

export default CardsBody
