import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { type MobaItem, MobaItemColor, MobaItemEffectColor } from "@/data/moba/items/values"

interface MobaItemCardProps {
  item: MobaItem
  onClick?: (item: MobaItem) => void
}

const itemColorStyles = {
  [MobaItemColor.WHITE]: 'bg-gray-200',
  [MobaItemColor.GREEN]: 'bg-green-200',
  [MobaItemColor.EXCLUSIVE]: 'bg-violet-300',
}

const effectColorStyles = {
  [MobaItemEffectColor.Usual]: 'text-black-300',
  [MobaItemEffectColor.ActiveUnique]: 'text-yellow-600 font-bold',
  [MobaItemEffectColor.PassiveUnique]: 'text-yellow-600 font-bold',
}

function ItemCard({ item, onClick }: MobaItemCardProps) {  
  return (
    <Card
      className='overflow-hidden transition hover:scale-105 hover:cursor-pointer p-0'
      onClick={() => onClick?.(item)}
    >
      <CardHeader className={`p-3 ${itemColorStyles[item.color]} border-1`}>
        <div className="flex flex-row items-center gap-3 ">
          <div className="w-18 h-18 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0 border border-gray-700">
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

          <div className="flex flex-col">
            <span className="font-medium text-xl leading-tight">{item.name}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col">
            {item.effects.map((effect) => (
                <div className="flex flex-row items-center">
                    <p className={`grow text-justify ${effectColorStyles[effect.color]}`}>{effect.name}</p>
                    <p>{effect.value}</p>
                </div>
            ))}
        </div>
      </CardContent>

      <CardFooter>

      </CardFooter>
    </Card>
  )
}

export { ItemCard }
