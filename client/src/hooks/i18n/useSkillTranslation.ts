import type { MobaHeroId, MobaSkillId } from "@/data/moba/heroes";
import { useTranslation } from "react-i18next"

export const useSkillTranslation = () => {
  const { t } = useTranslation()
  
  const getHeroName = (heroId: MobaHeroId): string => {
    return t(`moba.heroes.name.${heroId}`)
  };

  const getSkillName = (skillId: MobaSkillId): string => {
    return t(`moba.heroes.skill.${skillId}.name`)
  };

  const getSkillDescription = (skillId: MobaSkillId): string => {
    return t(`moba.heroes.skill.${skillId}.description`)
  };
  
  return { getHeroName, getSkillName, getSkillDescription }
};
