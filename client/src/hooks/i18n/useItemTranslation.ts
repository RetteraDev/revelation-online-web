import { MobaItemCategory, MobaItemId, MobaItemStatType } from "@/data/moba/items/values"
import { useTranslation } from "react-i18next"

export const useItemTranslation = () => {
  const { t } = useTranslation()
  
  const getItemName = (itemId: MobaItemId): string => {
    return t(`moba.items.name.${itemId}`)
  };

  const getCategoryName = (categoryId: MobaItemCategory): string => {
    return t(`moba.items.category.${categoryId}`)
  };
  
  const getStatName = (statName: string): string => {
    return t(`moba.items.stat.${statName}`)
  };
  
  const getSoleName = (soleName: string): string => {
    return t(`moba.items.sole.${soleName}`)
  };
  
  const formatStatValue = (type: MobaItemStatType, value: number): string => {
    const formattedValue = type === MobaItemStatType.Percent ? `${value}%` : `${value}`
    return value > 0 ? `+${formattedValue}` : formattedValue;
  };
  
  return { getItemName, getCategoryName, getStatName, getSoleName, formatStatValue }
};
