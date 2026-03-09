import type { ReactNode } from "react"

interface CardsListProps {
    children: ReactNode
    columns: number
}


function CardsList({ children, columns = 4 }: CardsListProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${columns} gap-4`}>
      {children}
    </div>
  )
}

export {
    CardsList
}
