import type { ReactNode } from "react"

interface CardsListProps {
    children: ReactNode
}


function CardsList({ children}: CardsListProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {children}
    </div>
  )
}

export {
    CardsList
}
