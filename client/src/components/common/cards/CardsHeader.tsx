import type { ReactNode } from "react";

interface CardsHeaderProps {
    children: ReactNode
    className?: string;
}

function CardsHeader({ children, className }: CardsHeaderProps) {
    return (
        <div className={`flex flex-col ${className}`}>
            <div className="relative h-2 bg-chocolate">
                <div className="absolute inset-0 border-t border-b border-beige"/>
                <img src={'/decor/card.png'} className="absolute -left-1 "/>
                <img src={'/decor/card.png'} className="absolute -right-1 -scale-x-100"/>
            </div>
            
            <div className="p-3 bg-chocolate-80 border-x border-b border-beige">
                {children}
            </div>
        </div>
    )
}

export default CardsHeader
