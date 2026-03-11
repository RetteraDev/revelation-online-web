import {
	type MobaItem,
	MobaItemCategory,
	MobaItemColor,
	MobaItemEffectName,
	MobaItemId,
	MobaItemSoleName,
	MobaItemSoleType,
	MobaItemStatType,
} from "@/data/moba/items/values";

export const EXCLUSIVE_ITEMS: MobaItem[] = [
	{
		key: MobaItemId.TWIN_BLADES,
		category: MobaItemCategory.EXCLUSIVE,
		color: MobaItemColor.EXCLUSIVE,
		icon: "/moba/items/Клинки-близнецы.png",

		stats: [
			{
				name: MobaItemEffectName.CritRate,
				type: MobaItemStatType.Percent,
				value: 20,
			},
			{
				name: MobaItemEffectName.PhysicalDamage,
				type: MobaItemStatType.Flat,
				value: 65,
			},
			{
				name: MobaItemEffectName.ManaRecovery,
				type: MobaItemStatType.Flat,
				value: 8,
			},
			{
				name: MobaItemEffectName.MovementSpeed,
				type: MobaItemStatType.Percent,
				value: 5,
			},
			{
				name: MobaItemEffectName.AttackSpeed,
				type: MobaItemStatType.Percent,
				value: 40,
			},
			{
				name: MobaItemEffectName.LifeSteal,
				type: MobaItemStatType.Percent,
				value: 8,
			},
			{
				name: MobaItemEffectName.CooldownReduction,
				type: MobaItemStatType.Percent,
				value: 5,
			},
		],

		soles: [
			{
				name: MobaItemSoleName.SwordStorm,
				type: MobaItemSoleType.Passive,
			},
		],

		buyPrice: 4180,
		sellPrice: 2507,
	},

	{
		key: MobaItemId.BUTTERFLY_WINGS,
		category: MobaItemCategory.EXCLUSIVE,
		color: MobaItemColor.EXCLUSIVE,
		icon: "/moba/items/Крылья бабочки Инь-Ян.png",

		stats: [
			{
				name: MobaItemEffectName.MaxHealth,
				type: MobaItemStatType.Flat,
				value: 800,
			},
			{
				name: MobaItemEffectName.PhysicalArmor,
				type: MobaItemStatType.Flat,
				value: 250,
			},
			{
				name: MobaItemEffectName.MagicalArmor,
				type: MobaItemStatType.Flat,
				value: 200,
			},
			{
				name: MobaItemEffectName.HealthRecovery,
				type: MobaItemStatType.Flat,
				value: 8,
			},
			{
				name: MobaItemEffectName.ManaRecovery,
				type: MobaItemStatType.Flat,
				value: 8,
			},
			{
				name: MobaItemEffectName.MovementSpeed,
				type: MobaItemStatType.Percent,
				value: 2,
			},
			{
				name: MobaItemEffectName.CooldownReduction,
				type: MobaItemStatType.Percent,
				value: 5,
			},
		],

		soles: [
			{
				name: MobaItemSoleName.YinYang,
				type: MobaItemSoleType.Passive,
			},
			{
				name: MobaItemSoleName.ButterflyWings,
				type: MobaItemSoleType.Passive,
			},
		],

		buyPrice: 3490,
		sellPrice: 2093,
	},
];
