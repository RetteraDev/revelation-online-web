import { MobaItemColor, MobaItemStatType, type MobaItem } from "@/data/moba/items/values"

interface ItemPreviewProps {
  item: MobaItem
  onClick?: (item: MobaItem) => void
}

function prettyStatValue(type: MobaItemStatType, value: number) {
    const formattedValue = type === MobaItemStatType.Percent ? `${value}%` : `${value}`;
    return value > 0 ? `+${formattedValue}` : formattedValue;
}

const itemBgStyles = {
  [MobaItemColor.WHITE]: 'rgb(198, 202, 200)',
  [MobaItemColor.GREEN]: 'rgb(128, 204, 99)',
  [MobaItemColor.EXCLUSIVE]: 'rgb(139, 99, 204)',
}


function ItemPreview ( { item }: ItemPreviewProps ) {
    return (
        <div className='absolute 
          top-full left-0 
          mt-1
          z-50
          pointer-events-none
          bg-black/80 
          backdrop-blur-sm
          rounded shadow-xl'>

            <div 
                className="flex flex-row items-center gap-3 px-3 relative"
                style={{ 
                backgroundImage: `linear-gradient(0.25turn, ${itemBgStyles[item.color]}, rgb(68, 66, 66)), url('/moba/items/item-bg.jpeg')`,
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay',
                }}
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
            </div>
            
            <div className="flex flex-col p-3">
                {item.stats.map((stat) => (
                    <div className={`flex flex-row text-white text-justify`}>
                        <span className="grow">{stat.name}</span>
                        <span>{prettyStatValue(stat.type, stat.value)}</span>
                    </div>
                ))}
            </div>

            <div className="flex flex-col p-3">
                {item.soles?.map((sole) => (
                    <div className={`flex flex-row text-yellow-600 text-justify`}>
                        <span className="grow">{sole.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export {
    ItemPreview
}
