import type { ReactNode } from "react";

interface CardsFooterProps {
    children: ReactNode
    className?: string;
}

function CardsFooter({ children, className }: CardsFooterProps) {
    return (
        <div className={`flex flex-col ${className}`}>
            <div className="bg-outlet-footer p-3">
                {children}
            </div>
            
            <div className="relative h-2 bg-outlet-body">
                <img src={'/decor/card.png'} className="absolute -left-1 -scale-y-100"/>
                <img src={'/decor/card.png'} className="absolute -right-1 -scale-100"/>
            </div>
        </div>
    )
}

export default CardsFooter
