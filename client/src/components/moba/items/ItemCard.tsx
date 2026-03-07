// src/components/ItemPreview.tsx

import { getItem } from "@/data/moba/items/all";
import { MobaItemColor, type MobaItem } from "@/data/moba/items/values"
import { Link } from "@tanstack/react-router";
import { ItemCardHeader } from "./ItemCardHeader";
import { useItemTranslation } from "@/hooks/i18n/useItemTranslation";

interface ItemPreviewProps {
  item: MobaItem;
}

const itemBgStyles = {
  [MobaItemColor.WHITE]: 'rgb(198, 202, 200)',
  [MobaItemColor.GREEN]: 'rgb(128, 204, 99)',
  [MobaItemColor.EXCLUSIVE]: 'rgb(139, 99, 204)',
}

function ItemCard({ item }: ItemPreviewProps) {
    const { getItemName, getStatName, formatStatValue } = useItemTranslation();

    return (
        <div className='flex flex-col w-full max-w-sm bg-[rgb(32,30,28)]'>
            <div className="mb-3">
                <ItemCardHeader item={item}/>
            </div>
            
            {(item.stats || item.soles) && 
                <div className="flex flex-col">
                    {item.stats && 
                        <div className="flex flex-col px-3 gap-3 mb-3">
                            <div className="flex flex-col gap-1">
                                {item.stats.map((stat, index) => (
                                    <div className={`flex flex-row text-justify text-sm text-gray-100`} key={index}>
                                        <span className="grow">{getStatName(stat.name)}</span>
                                        <span>{formatStatValue(stat.type, stat.value)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                
                    {item.stats && item.soles && <div className="h-px bg-gray-600 mx-3 mb-3"></div>}

                    {item.soles && (
                        <div className="flex flex-col px-3 gap-3 mb-3">
                            <div className="flex flex-col gap-1">
                                {item.soles.map((sole, index) => (
                                    <div className={`flex flex-col text-yellow-600 text-sm`} key={index}>
                                        <span className="font-bold">{sole.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            }
                

            {item.buildsInto &&
            <>
                <div
                    className="text-gray-100 px-3"
                    style={{ 
                        backgroundImage: `linear-gradient(rgb(82,76,63), rgb(57,52,49))`,
                    }}
                >
                    <span>Используется для крафта</span>
                </div>
                    
                <div className="flex flex-col p-3">
                    <div className='flex flex-row flex-wrap gap-3'>
                        {item.buildsInto.map((targetItemId) => {
                            const targetItem = getItem.get(targetItemId)!
                            console.log(targetItemId, targetItem)
                            return (
                                <Link to={`/moba/items/$itemId`} params={{itemId: targetItemId}}>
                                    <div className="flex flex-col justify-center">
                                        <div className={`flex justify-center items-center w-12 h-12`} style={{border: `1px solid ${itemBgStyles[targetItem.color]}`}}>
                                            <img src={targetItem.icon} alt={getItemName(targetItemId)} className="w-10 h-10 object-cover"/>
                                        </div>
                                        <div className="flex justify-center items-center gap-1">
                                            <img src={'/moba/items/gold-small.webp'} alt="gold" className="w-3 h-3 object-cover"/>
                                            <span className="text-yellow-600 text-xs">{targetItem.buyPrice}</span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </>
            }

            {item.recipe &&
            <>
                <div
                    className="text-gray-100 px-3 py-1"
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
                                            <img src={recipeItem.icon} alt={getItemName(recipeItemId)} className="w-10 h-10 object-cover"/>
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
