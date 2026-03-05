import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { type MobaItem, MobaItemColor, MobaItemEffectColor } from "@/data/moba/items/values"

interface MobaItemCardProps {
  item: MobaItem
  onClick?: (item: MobaItem) => void
}

const itemColorStyles = {
  [MobaItemColor.WHITE]: '',
  [MobaItemColor.GREEN]: 'bg-green-200',
  [MobaItemColor.EXCLUSIVE]: 'bg-violet-300',
}

const effectColorStyles = {
  [MobaItemEffectColor.Usual]: 'text-black-300',
  [MobaItemEffectColor.ActiveUnique]: 'text-yellow-600 font-bold',
  [MobaItemEffectColor.PassiveUnique]: 'text-yellow-600 font-bold',
}

function ItemCard({ item }: MobaItemCardProps) {  
  return (
    <div className="flex flex-row items-center gap-3 ">
      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-gray-700">
        {item.icon ? (
          <img
            src={item.icon}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <span className="text-gray-500 text-xs">?</span>
          </div>
        )}
      </div>

      <span className={`grow p-1 font-medium ${itemColorStyles[item.color]}`}>{item.name}</span>
      <span className="text-yellow-700">{item.buyPrice}</span>
    </div>
  )
}

export { ItemCard }
