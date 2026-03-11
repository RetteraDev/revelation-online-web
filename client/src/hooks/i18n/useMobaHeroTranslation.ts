import { useTranslation } from "react-i18next";
import {
	type MobaHeroId,
	MobaSkillButton,
	type MobaSkillId,
	type MobaSkillType,
} from "@/data/moba/heroes";

export const useMobaHeroTranslation = () => {
	const { t } = useTranslation();

	const getHeroName = (heroId: MobaHeroId): string => {
		return t(`moba.heroes.name.${heroId}`);
	};

	const getSkillName = (skillId: MobaSkillId): string => {
		return t(`moba.heroes.skill.${skillId}.name`);
	};

	const getSkillDescription = (skillId: MobaSkillId): string => {
		return t(`moba.heroes.skill.${skillId}.description`);
	};

	const getSkillUse = (
		skillTypeId: MobaSkillType,
		skillButtonId: MobaSkillButton,
	): string => {
		const skillTypeText = t(`moba.heroes.skill-type.${skillTypeId}`);
		return skillButtonId === MobaSkillButton.NONE
			? skillTypeText
			: `${skillTypeText} [${skillButtonId}]`;
	};

	return { getHeroName, getSkillName, getSkillDescription, getSkillUse };
};
