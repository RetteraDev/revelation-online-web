import type { ReactNode } from "react";

interface CardsHeaderProps {
    children: ReactNode
    className?: string;
}

function CardsHeader({ children, className }: CardsHeaderProps) {
    return (
        <div className={`bg-outlet-header p-3 ${className}`}>
            {children}
        </div>
    )
}

export default CardsHeader
