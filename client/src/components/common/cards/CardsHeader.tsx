import type { ReactNode } from "react";

interface CardsHeaderProps {
    children: ReactNode
    className?: string;
}

function CardsHeader({ children, className }: CardsHeaderProps) {
    return (
        <div className={`flex flex-col ${className}`}>
            <div className="relative h-2 bg-outlet-body border-t border-beige">
                <img src={'/decor/card.png'} className="absolute -left-1"/>
                <img src={'/decor/card.png'} className="absolute -right-1 -scale-x-100"/>
            </div>
            
            <div className="bg-outlet-header p-3">
                {children}
            </div>
        </div>
    )
}

export default CardsHeader
