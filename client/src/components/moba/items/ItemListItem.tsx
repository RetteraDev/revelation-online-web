import { type MobaItem, MobaItemColor } from "@/data/moba/items/values"
import { useState } from "react"
import { ItemPreview } from "./ItemPreview"
import { Link } from "@tanstack/react-router"

interface ItemListItemProps {
  item: MobaItem
  onClick?: (item: MobaItem) => void
}

const itemBgStyles = {
  [MobaItemColor.WHITE]: 'rgb(198, 202, 200)',
  [MobaItemColor.GREEN]: 'rgb(128, 204, 99)',
  [MobaItemColor.EXCLUSIVE]: 'rgb(139, 99, 204)',
}

function ItemListItem({ item }: ItemListItemProps) {
  const [showModal, setShowModal] = useState(false)

  function showPreview() {
    setShowModal(true)
  }

  function hidePreview() {
    setShowModal(false)
  }

  return (
    <Link
      to="/moba/items/$itemId"
      params={{ itemId: item.key }}
    >
    <div 
      className="flex flex-row items-center gap-3 px-3 relative"
      style={{ 
        backgroundImage: `linear-gradient(0.25turn, ${itemBgStyles[item.color]}, rgb(68, 66, 66)), url('/moba/items/item-bg.jpeg')`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
      }}
      onMouseEnter={showPreview} onMouseLeave={hidePreview}
    >
      <div className="flex justify-center items-center w-12 h-12">
        <img src={item.icon} alt={item.name} className="w-10 h-10 object-cover"/>
      </div>

      <span
        className={`grow text-gray-100 text-shadow-lg font-medium`}
        style={{
          WebkitTextStroke: '0.3px #000000',
          
        }}
      >{item.name}</span>
      <div className="flex justify-center items-center gap-1">
        <img src={'/moba/items/gold-small.webp'} alt={item.name} className="w-4 h-4 object-cover"/>
        <span className="text-yellow-600">{item.buyPrice}</span>
      </div>
      {showModal && <ItemPreview item={item}/>}
    </div>
    </Link>
  )
}

export { ItemListItem }
