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

export const JUNGLE_ITEMS: MobaItem[] = [
	{
		key: MobaItemId.NOVITIATES_HALBERD,
		category: MobaItemCategory.OTHER,
		color: MobaItemColor.WHITE,
		icon: "/moba/items/Заточка.png",

		stats: [
			{
				name: MobaItemEffectName.PunishmentRate,
				type: MobaItemStatType.Percent,
				value: 20,
			},
		],

		soles: [
			{
				name: MobaItemSoleName.ExplorerV1,
				type: MobaItemSoleType.Passive,
			},
		],

		buyPrice: 250,
		sellPrice: 149,
	},

	{
		key: MobaItemId.MERCILESS_BROADSWORD,
		category: MobaItemCategory.OTHER,
		color: MobaItemColor.WHITE,
		icon: "/moba/items/Кривой нож.png",

		stats: [
			{
				name: MobaItemEffectName.PunishmentRate,
				type: MobaItemStatType.Percent,
				value: 30,
			},
		],

		soles: [
			{
				name: MobaItemSoleName.ExplorerV2,
				type: MobaItemSoleType.Passive,
			},
		],

		recipe: [MobaItemId.NOVITIATES_HALBERD],

		buyPrice: 750,
		sellPrice: 449,
	},

	{
		key: MobaItemId.RAGING_APE_BATTLEAXE,
		category: MobaItemCategory.OTHER,
		color: MobaItemColor.WHITE,
		icon: "/moba/items/Черепокол.png",

		stats: [
			{
				name: MobaItemEffectName.PunishmentRate,
				type: MobaItemStatType.Percent,
				value: 20,
			},
		],

		soles: [
			{
				name: MobaItemSoleName.ExplorerV2,
				type: MobaItemSoleType.Passive,
			},
		],

		recipe: [MobaItemId.NOVITIATES_HALBERD],

		buyPrice: 750,
		sellPrice: 449,
	},

	{
		key: MobaItemId.PROUDLIGHT_AXE,
		category: MobaItemCategory.OTHER,
		color: MobaItemColor.WHITE,
		icon: "/moba/items/Складная глефа.png",

		stats: [
			{
				name: MobaItemEffectName.PunishmentRate,
				type: MobaItemStatType.Percent,
				value: 30,
			},
		],

		soles: [
			{
				name: MobaItemSoleName.ExplorerV2,
				type: MobaItemSoleType.Passive,
			},
		],

		recipe: [MobaItemId.NOVITIATES_HALBERD],

		buyPrice: 750,
		sellPrice: 449,
	},

	{
		key: MobaItemId.BROADSWORD_OF_CHRYSOS,
		category: MobaItemCategory.OTHER,
		color: MobaItemColor.GREEN,
		icon: "/moba/items/Пасть дракона.png",

		stats: [
			{
				name: MobaItemEffectName.MaxMana,
				type: MobaItemStatType.Flat,
				value: 400,
			},
			{
				name: MobaItemEffectName.MagicalDamage,
				type: MobaItemStatType.Flat,
				value: 100,
			},
			{
				name: MobaItemEffectName.PunishmentRate,
				type: MobaItemStatType.Percent,
				value: 30,
			},
		],

		soles: [
			{
				name: MobaItemSoleName.ExplorerV2,
				type: MobaItemSoleType.Passive,
			},
			{
				name: MobaItemSoleName.BloodthirstV1,
				type: MobaItemSoleType.Passive,
			},
			{
				name: MobaItemSoleName.PowerStrikeV2,
				type: MobaItemSoleType.Passive,
			},
		],

		recipe: [
			MobaItemId.MERCILESS_BROADSWORD,
			MobaItemId.TEXTS,
			MobaItemId.CHAOS_ICE,
		],

		buyPrice: 1490,
		sellPrice: 893,
	},

	{
		key: MobaItemId.AXE_OF_THE_HEADLESS_WARRIOR,
		category: MobaItemCategory.OTHER,
		color: MobaItemColor.GREEN,
		icon: "/moba/items/Гнев Оро.png",

		stats: [
			{
				name: MobaItemEffectName.MaxHealth,
				type: MobaItemStatType.Flat,
				value: 1850,
			},
			{
				name: MobaItemEffectName.PunishmentRate,
				type: MobaItemStatType.Percent,
				value: 30,
			},
		],

		soles: [
			{
				name: MobaItemSoleName.ExplorerV2,
				type: MobaItemSoleType.Passive,
			},
			{
				name: MobaItemSoleName.SunscorchV2,
				type: MobaItemSoleType.Passive,
			},
		],

		recipe: [
			MobaItemId.RAGING_APE_BATTLEAXE,
			MobaItemId.BLOODSOUL,
			MobaItemId.BLOODSOUL,
		],

		buyPrice: 1500,
		sellPrice: 899,
	},

	{
		key: MobaItemId.WORLD_BREAKER,
		category: MobaItemCategory.OTHER,
		color: MobaItemColor.GREEN,
		icon: "/moba/items/Я-Дао, Зубастое лезвие.png",

		stats: [
			{
				name: MobaItemEffectName.PhysicalDamage,
				type: MobaItemStatType.Flat,
				value: 45,
			},
			{
				name: MobaItemEffectName.PunishmentRate,
				type: MobaItemStatType.Percent,
				value: 30,
			},
			{
				name: MobaItemEffectName.AttackSpeed,
				type: MobaItemStatType.Percent,
				value: 40,
			},
		],

		soles: [
			{
				name: MobaItemSoleName.ExplorerV2,
				type: MobaItemSoleType.Passive,
			},
		],

		recipe: [
			MobaItemId.PROUDLIGHT_AXE,
			MobaItemId.RUSTED_SWORD,
			MobaItemId.DAGGERS,
		],

		buyPrice: 1460,
		sellPrice: 875,
	},
];
