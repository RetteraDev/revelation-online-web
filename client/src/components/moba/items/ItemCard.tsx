import { type MobaItem, MobaItemColor } from "@/data/moba/items/values"

interface MobaItemCardProps {
  item: MobaItem
  onClick?: (item: MobaItem) => void
}

const itemBgStyles = {
  [MobaItemColor.WHITE]: 'rgb(198, 202, 200)',
  [MobaItemColor.GREEN]: 'rgb(128, 204, 99)',
  [MobaItemColor.EXCLUSIVE]: 'rgb(139, 99, 204)',
}

function ItemCard({ item }: MobaItemCardProps) {  
  return (
    <div 
      className="flex flex-row items-center gap-3 px-3"
      style={{ 
        backgroundImage: `linear-gradient(0.25turn, ${itemBgStyles[item.color]}, rgb(68, 66, 66)), url('/moba/items/item-bg.jpeg')`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="w-12 h-12 flex justify-center items-center">
        <img src={item.icon} alt={item.name} className="w-10 h-10 object-cover"/>
      </div>

      <span className={`grow text-gray-100 text-shadow-lg font-medium`} style={{ WebkitTextStroke: '0.3px #000000' }}>{item.name}</span>
      <span className="text-yellow-600">{item.buyPrice}</span>
    </div>
  )
}

export { ItemCard }
