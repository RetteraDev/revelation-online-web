import type { ReactNode } from "react";

interface CardsFooterProps {
    children: ReactNode
    className?: string;
}

function CardsFooter({ children, className }: CardsFooterProps) {
    return (
        <div className={`bg-outlet-footer p-3 ${className}`}>
            {children}
        </div>
    )
}

export default CardsFooter
