import { MobaItemId, MobaItemStatType } from "@/data/moba/items/values";
import { useTranslation } from "react-i18next";

export const useItemTranslation = () => {
  const { t } = useTranslation();
  
  const getItemName = (itemId: MobaItemId): string => {
    return t(`moba.items.name.${itemId}`);
  };
  
  const getStatName = (statName: string): string => {
    return t(`moba.items.stat.${statName}`);
  };
  
  const formatStatValue = (type: MobaItemStatType, value: number): string => {
    const formattedValue = type === MobaItemStatType.Percent ? `${value}%` : `${value}`;
    return value > 0 ? `+${formattedValue}` : formattedValue;
  };
  
  return { getItemName, getStatName, formatStatValue };
};
