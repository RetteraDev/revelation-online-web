import { type MobaItem } from "@/data/moba/items/values"
import { Link } from "@tanstack/react-router"
import { ItemCardHeader } from "./ItemCardHeader"
import { ItemCard } from "./ItemCard"

interface ItemListItemProps {
  item: MobaItem
}

function ItemListItem({ item }: ItemListItemProps) {

  return (
      <Link
        to="/moba/items/$itemId"
        params={{ itemId: item.key }}
        className="block"
      >
        <ItemCardHeader item={item}/>
      </Link>
  )
}

export { ItemListItem }
