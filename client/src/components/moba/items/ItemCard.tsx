// src/components/ItemPreview.tsx

import { getItem } from "@/data/moba/items/all";
import { MobaItemColor, MobaItemStatType, type MobaItem } from "@/data/moba/items/values"
import { Link } from "@tanstack/react-router";

interface ItemPreviewProps {
  item: MobaItem;
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

function ItemCard({ item }: ItemPreviewProps) {
    return (
        <div className='w-full max-w-sm bg-[rgb(32,30,28)]'>
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
                  style={{ WebkitTextStroke: '0.3px #000000' }}
                >{item.name}</span>

                <div className="flex justify-center items-center gap-1">
                    <img src={'/moba/items/gold-small.webp'} alt="gold" className="w-4 h-4 object-cover"/>
                    <span className="text-yellow-600">{item.buyPrice}</span>
                </div>
            </div>
            
            <div className="flex flex-col p-3 gap-3">
                <div className="flex flex-col gap-1">
                    {item.stats.map((stat, index) => (
                        <div className={`flex flex-row text-justify text-sm text-gray-100`} key={index}>
                            <span className="grow">{stat.name}</span>
                            <span>{prettyStatValue(stat.type, stat.value)}</span>
                        </div>
                    ))}
                </div>

                {item.soles && item.soles.length > 0 && (
                    <>
                    <div className="h-px bg-gray-600 mx-3"></div>

                    <div className="flex flex-col gap-1">
                        {item.soles.map((sole, index) => (
                            <div className={`flex flex-col text-yellow-600 text-sm`} key={index}>
                                <span className="font-bold">{sole.name}</span>
                            </div>
                        ))}
                    </div>
                    </>
                )}
            </div>

            {item.buildsInto &&
            <>
                <div
                    className="text-gray-100"
                    style={{ 
                        backgroundImage: `linear-gradient(rgb(82,76,63), rgb(57,52,49))`,
                    }}
                >
                    <span>Создаётся из</span>
                </div>
                    
                <div className="flex flex-col p-3 gap-3">
                    <div className='flex flex-row'>
                        {item.buildsInto.map((targetItemId) => (
                        <Link to={`/moba/items/$itemId`} params={{itemId: targetItemId}}>
                            <div className="flex justify-center items-center w-12 h-12">
                                <img src={getItem.get(targetItemId)!.icon} alt={item.name} className="w-10 h-10 object-cover"/>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
            </>
            }

            {item.recipe &&
            <>
                <div
                    className="text-gray-100"
                    style={{ 
                        backgroundImage: `linear-gradient(rgb(82,76,63), rgb(57,52,49))`,
                    }}
                >
                    <span>Создаётся из</span>
                </div>
                    
                <div className="flex flex-col p-3">
                    <div className='flex flex-row gap-3'>
                        {item.recipe.map((recipeItemId) => {
                            const recipeItem = getItem.get(recipeItemId)!
                            return (
                                <Link to={`/moba/items/$itemId`} params={{itemId: recipeItemId}}>
                                    <div className="flex flex-col justify-center">
                                        <div className={`flex justify-center items-center w-12 h-12`} style={{border: `1px solid ${itemBgStyles[recipeItem.color]}`}}>
                                            <img src={recipeItem.icon} alt={recipeItem.name} className="w-10 h-10 object-cover"/>
                                        </div>
                                        <div className="flex justify-center items-center gap-1">
                                            <img src={'/moba/items/gold-small.webp'} alt="gold" className="w-3 h-3 object-cover"/>
                                            <span className="text-yellow-600 text-xs">{recipeItem.buyPrice}</span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </>
            }
        </div>
    )
}

export { ItemCard }
