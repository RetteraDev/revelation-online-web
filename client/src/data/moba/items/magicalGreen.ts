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

export const MAGICAL_GREEN_ITEMS: MobaItem[] = [
	{
		key: MobaItemId.FLAMING_LEGION,
		category: MobaItemCategory.MAGICAL_WEAPONS,
		color: MobaItemColor.GREEN,
		icon: "/moba/items/Пламенеющий оберег.png",

		stats: [
			{
				name: MobaItemEffectName.MagicalDamage,
				type: MobaItemStatType.Flat,
				value: 160,
			},
			{
				name: MobaItemEffectName.ManaRecovery,
				type: MobaItemStatType.Flat,
				value: 3,
			},
		],

		soles: [
			{
				type: MobaItemSoleType.Passive,
				name: MobaItemSoleName.ManaRecovery,
			},
			{
				type: MobaItemSoleType.Passive,
				name: MobaItemSoleName.ManaShield,
			},
		],

		recipe: [
			MobaItemId.THOUSAND_MORPHS,
			MobaItemId.JADE_PENDANT,
			MobaItemId.CHAOS_ICE,
		],

		buyPrice: 1950,
		sellPrice: 1169,
	},

	{
		key: MobaItemId.CORE_OF_RUIN,
		category: MobaItemCategory.MAGICAL_WEAPONS,
		color: MobaItemColor.GREEN,
		icon: "/moba/items/Укрощенное пламя.png",

		stats: [
			{
				name: MobaItemEffectName.MagicalDamage,
				type: MobaItemStatType.Flat,
				value: 240,
			},
			{
				name: MobaItemEffectName.MovementSpeed,
				type: MobaItemStatType.Percent,
				value: 5,
			},
		],

		soles: [
			{
				type: MobaItemSoleType.Passive,
				name: MobaItemSoleName.SeriousInjury,
			},
			{
				type: MobaItemSoleType.Passive,
				name: MobaItemSoleName.WeakHeal,
			},
		],

		recipe: [MobaItemId.THOUSAND_MORPHS, MobaItemId.DAWNS_SPIRIT],

		buyPrice: 2050,
		sellPrice: 1229,
	},

	{
		key: MobaItemId.SPELL_PHYLACTERY,
		category: MobaItemCategory.MAGICAL_WEAPONS,
		color: MobaItemColor.GREEN,
		icon: "/moba/items/Ловец маны.png",

		stats: [
			{
				name: MobaItemEffectName.MagicalArmor,
				type: MobaItemStatType.Flat,
				value: 140,
			},
			{
				name: MobaItemEffectName.MagicalDamage,
				type: MobaItemStatType.Flat,
				value: 140,
			},
			{
				name: MobaItemEffectName.ManaRecovery,
				type: MobaItemStatType.Flat,
				value: 4,
			},
			{
				name: MobaItemEffectName.CooldownReduction,
				type: MobaItemStatType.Percent,
				value: 20,
			},
		],

		soles: [
			{
				type: MobaItemSoleType.Passive,
				name: MobaItemSoleName.ManaRecovery,
			},
		],

		recipe: [MobaItemId.LAMBENT_CODEX, MobaItemId.IMPS_BOLUS, MobaItemId.TEXTS],

		buyPrice: 2030,
		sellPrice: 1217,
	},

	{
		key: MobaItemId.THOUSAND_MORPH_STAFF,
		category: MobaItemCategory.MAGICAL_WEAPONS,
		color: MobaItemColor.GREEN,
		icon: "/moba/items/Жезл провидца.png",

		stats: [
			{
				name: MobaItemEffectName.MaxHealth,
				type: MobaItemStatType.Flat,
				value: 500,
			},
			{
				name: MobaItemEffectName.MagicalDamage,
				type: MobaItemStatType.Flat,
				value: 180,
			},
		],

		soles: [
			{
				type: MobaItemSoleType.Passive,
				name: MobaItemSoleName.Ignore,
			},
		],

		recipe: [MobaItemId.SAGE_MASK, MobaItemId.DAWNS_SPIRIT],

		buyPrice: 2110,
		sellPrice: 1265,
	},

	{
		key: MobaItemId.MERRYMAKER_RING,
		category: MobaItemCategory.MAGICAL_WEAPONS,
		color: MobaItemColor.GREEN,
		icon: "/moba/items/Перстень могущества.png",

		stats: [
			{
				name: MobaItemEffectName.MagicalDamage,
				type: MobaItemStatType.Flat,
				value: 240,
			},
		],

		soles: [
			{
				type: MobaItemSoleType.Passive,
				name: MobaItemSoleName.Destruction,
			},
		],

		recipe: [MobaItemId.THOUSAND_MORPHS, MobaItemId.TEXTS, MobaItemId.TEXTS],

		buyPrice: 2300,
		sellPrice: 1379,
	},

	{
		key: MobaItemId.MANA_CLAW,
		category: MobaItemCategory.MAGICAL_WEAPONS,
		color: MobaItemColor.GREEN,
		icon: "/moba/items/Счастливая драконья лапка.png",

		stats: [
			{
				name: MobaItemEffectName.MagicalDamage,
				type: MobaItemStatType.Flat,
				value: 240,
			},
			{
				name: MobaItemEffectName.MovementSpeed,
				type: MobaItemStatType.Percent,
				value: 7,
			},
		],

		soles: [
			{
				type: MobaItemSoleType.Passive,
				name: MobaItemSoleName.Shockwave,
			},
		],

		recipe: [MobaItemId.THOUSAND_MORPHS, MobaItemId.TEXTS],

		buyPrice: 2100,
		sellPrice: 1259,
	},

	{
		key: MobaItemId.BUTTERFLY_CANE,
		category: MobaItemCategory.MAGICAL_WEAPONS,
		color: MobaItemColor.GREEN,
		icon: "/moba/items/Трость Вуми-Луми.png",

		stats: [
			{
				name: MobaItemEffectName.MaxHealth,
				type: MobaItemStatType.Flat,
				value: 1050,
			},
			{
				name: MobaItemEffectName.MagicalDamage,
				type: MobaItemStatType.Flat,
				value: 150,
			},
		],

		soles: [
			{
				type: MobaItemSoleType.Passive,
				name: MobaItemSoleName.ColdnessV3,
			},
		],

		recipe: [MobaItemId.ROUGH_CAP, MobaItemId.THOUSAND_MORPHS],

		buyPrice: 2100,
		sellPrice: 1259,
	},

	{
		key: MobaItemId.MASK_OF_SILVER_AND_SHADOW,
		category: MobaItemCategory.MAGICAL_WEAPONS,
		color: MobaItemColor.GREEN,
		icon: "/moba/items/Двуликая маска.png",

		stats: [
			{
				name: MobaItemEffectName.MaxHealth,
				type: MobaItemStatType.Flat,
				value: 500,
			},
			{
				name: MobaItemEffectName.MagicalDamage,
				type: MobaItemStatType.Flat,
				value: 140,
			},
			{
				name: MobaItemEffectName.CooldownReduction,
				type: MobaItemStatType.Percent,
				value: 5,
			},
			{
				name: MobaItemEffectName.MagicalPierce,
				type: MobaItemStatType.Flat,
				value: 75,
			},
		],

		soles: [
			{
				type: MobaItemSoleType.Passive,
				name: MobaItemSoleName.Pain,
			},
		],

		recipe: [MobaItemId.SAGE_MASK, MobaItemId.TEXTS],

		buyPrice: 2040,
		sellPrice: 1223,
	},

	{
		key: MobaItemId.CONCH_STAFF,
		category: MobaItemCategory.MAGICAL_WEAPONS,
		color: MobaItemColor.GREEN,
		icon: "/moba/items/Проклятая фалмарийская флейта.png",

		stats: [
			{
				name: MobaItemEffectName.MaxHealth,
				type: MobaItemStatType.Flat,
				value: 300,
			},
			{
				name: MobaItemEffectName.MaxMana,
				type: MobaItemStatType.Flat,
				value: 300,
			},
			{
				name: MobaItemEffectName.MagicalDamage,
				type: MobaItemStatType.Flat,
				value: 120,
			},
			{
				name: MobaItemEffectName.MovementSpeed,
				type: MobaItemStatType.Percent,
				value: 8,
			},
		],

		soles: [
			{
				type: MobaItemSoleType.Passive,
				name: MobaItemSoleName.BloodthirstV1,
			},
			{
				type: MobaItemSoleType.Passive,
				name: MobaItemSoleName.PowerStrikeV3,
			},
		],

		recipe: [MobaItemId.NETHER_SPELLBLADE, MobaItemId.TEXTS],

		buyPrice: 2120,
		sellPrice: 1271,
	},

	{
		key: MobaItemId.NIMBUS_CODEX,
		category: MobaItemCategory.MAGICAL_WEAPONS,
		color: MobaItemColor.GREEN,
		icon: "/moba/items/Облачный атлас.png",

		stats: [
			{
				name: MobaItemEffectName.MaxHealth,
				type: MobaItemStatType.Flat,
				value: 800,
			},
			{
				name: MobaItemEffectName.MaxMana,
				type: MobaItemStatType.Flat,
				value: 600,
			},
			{
				name: MobaItemEffectName.MagicalDamage,
				type: MobaItemStatType.Flat,
				value: 160,
			},
		],

		soles: [
			{
				type: MobaItemSoleType.Passive,
				name: MobaItemSoleName.ManaRecovery,
			},
		],

		recipe: [MobaItemId.ENMITY_CRYSTAL, MobaItemId.THOUSAND_MORPHS],

		buyPrice: 2090,
		sellPrice: 1253,
	},

	{
		key: MobaItemId.DEMONHUNTER_SCROLL,
		category: MobaItemCategory.MAGICAL_WEAPONS,
		color: MobaItemColor.GREEN,
		icon: "/moba/items/Рецепт бессмертия.png",

		stats: [
			{
				name: MobaItemEffectName.MagicalDamage,
				type: MobaItemStatType.Flat,
				value: 400,
			},
		],

		soles: [
			{
				type: MobaItemSoleType.Passive,
				name: MobaItemSoleName.Mark,
			},
		],

		recipe: [MobaItemId.THOUSAND_MORPHS, MobaItemId.THOUSAND_MORPHS],

		buyPrice: 2990,
		sellPrice: 1793,
	},

	{
		key: MobaItemId.QAMARIS_CRESCENT,
		category: MobaItemCategory.MAGICAL_WEAPONS,
		color: MobaItemColor.GREEN,
		icon: "/moba/items/Лунный серп.png",

		stats: [
			{
				name: MobaItemEffectName.MagicalDamage,
				type: MobaItemStatType.Flat,
				value: 160,
			},
			{
				name: MobaItemEffectName.CooldownReduction,
				type: MobaItemStatType.Percent,
				value: 10,
			},
		],

		soles: [
			{
				type: MobaItemSoleType.Active,
				name: MobaItemSoleName.StarAegis,
			},
		],

		recipe: [MobaItemId.THOUSAND_MORPHS, MobaItemId.LAMBENT_CODEX],

		buyPrice: 1990,
		sellPrice: 1193,
	},

	{
		key: MobaItemId.TREATISE_ON_POTENTIAL,
		category: MobaItemCategory.MAGICAL_WEAPONS,
		color: MobaItemColor.GREEN,
		icon: "/moba/items/Вампирикон.png",

		stats: [
			{
				name: MobaItemEffectName.MagicalDamage,
				type: MobaItemStatType.Flat,
				value: 180,
			},
			{
				name: MobaItemEffectName.CooldownReduction,
				type: MobaItemStatType.Percent,
				value: 10,
			},
		],

		soles: [
			{
				type: MobaItemSoleType.Passive,
				name: MobaItemSoleName.BloodthirstV2,
			},
		],

		recipe: [MobaItemId.BLOODSOUL, MobaItemId.BOOK_OF_TIMES, MobaItemId.TEXTS],

		buyPrice: 2090,
		sellPrice: 1253,
	},
];
