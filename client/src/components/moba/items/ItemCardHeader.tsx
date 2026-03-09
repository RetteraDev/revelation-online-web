import { MobaItemColor, type MobaItem } from "@/data/moba/items/values";
import { useMobaItemTranslation } from "@/hooks/i18n/useMobaItemTranslation";


const itemBgStyles = {
  [MobaItemColor.WHITE]: 'rgb(198, 202, 200)',
  [MobaItemColor.GREEN]: 'rgb(128, 204, 99)',
  [MobaItemColor.EXCLUSIVE]: 'rgb(139, 99, 204)',
}

interface ItemCardHeaderProps {
    item: MobaItem
}


export function ItemCardHeader({ item } : ItemCardHeaderProps) {
    const { getItemName } = useMobaItemTranslation();

    return (
        <div 
            className="flex flex-row items-center gap-3 px-3"
            style={{ 
                backgroundImage: `linear-gradient(0.25turn, ${itemBgStyles[item.color]}, rgb(66, 66, 66)), url('/moba/items/item-bg.png')`,
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay',
            }}
        >
            <img src={item.icon} alt={getItemName(item.key)} className="w-10 h-10 object-cover"/>
    
            <span
                className={`grow text-gray-100 text-shadow-lg font-medium text-sm/4 `}
                style={{ WebkitTextStroke: '0.3px #000000' }}
            >{getItemName(item.key)}</span>

            <div className="flex justify-center items-center w-12 h-12 gap-1">
                <img src={'/moba/items/gold-small.webp'} alt="gold" className="w-4 h-4 object-cover"/>
                <span className="text-yellow-600">{item.buyPrice}</span>
            </div>
        </div>
    )
}
