import { MobaItemId, MobaItemCategory, MobaItemColor, MobaItemStatType, MobaItemEffectName, MobaItemSoleType, type MobaItem, MobaItemSoleName } from "@/data/moba/items/values";

export const PHYSICAL_GREEN_ITEMS: MobaItem[] = [
    {
        key: MobaItemId.GLOWING_SEA_GODS_SIGH,
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Страж глубин.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 60
            },
            {
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemStatType.Percent,
                value: 5
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Active,
                name: MobaItemSoleName.AdrenalinePeak
            },
        ],
        
        recipe: [
            MobaItemId.IRON_HALBERD,
            MobaItemId.RUSTED_SWORD,
        ],

        buyPrice: 1760,
        sellPrice: 1050,
    },

    {
        key: MobaItemId.FROST_PIKE,
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Снежинка.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 500
            },
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 60
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: MobaItemSoleName.ColdnessV2
            },
        ],
        
        recipe: [
            MobaItemId.IRON_HALBERD,
            MobaItemId.RUSTED_SWORD,
        ],

        buyPrice: 1980,
        sellPrice: 1187,
    },

    {
        key: MobaItemId.SKYFEATHER,
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Лук Крылатых.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 80
            },
            {
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemStatType.Percent,
                value: 10
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: MobaItemSoleName.Sunder,
            },
        ],
        
        recipe: [
            MobaItemId.SWORD_OF_JUSTICE,
            MobaItemId.RUSTED_SWORD,
        ],

        buyPrice: 2100,
        sellPrice: 1259,
    },

    {
        key: MobaItemId.SEVEN_STAR_SWORD,
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Чешуйчатый клеймор.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 100
            },
            {
                name: MobaItemEffectName.LifeSteal,
                type: MobaItemStatType.Percent,
                value: 10
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: MobaItemSoleName.SeriousInjury,
            },
            {
                type: MobaItemSoleType.Passive,
                name: MobaItemSoleName.WeakHeal
            },
        ],
        
        recipe: [
            MobaItemId.SKYRAZER_BROADSWORD,
            MobaItemId.SICKLE,
        ],

        buyPrice: 1800,
        sellPrice: 1079,
    },

    {
        key: MobaItemId.DUAL_BLOODLUST_BLADES,
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Клинки алой мести.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 60
            },
            {
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemStatType.Percent,
                value: 30
            },
            {
                name: MobaItemEffectName.LifeSteal,
                type: MobaItemStatType.Percent,
                value: 10
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: MobaItemSoleName.Vanquish,
            },
        ],
        
        recipe: [
            MobaItemId.IRON_HALBERD,
            MobaItemId.QUICK_SHOOTER,
            MobaItemId.GLOVES,
        ],

        buyPrice: 2160,
        sellPrice: 1295,
    },

    {
        key: MobaItemId.WOLFBANE_TWIN_BLADES,
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Кровь и Слава.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 100
            },
            {
                name: MobaItemEffectName.LifeSteal,
                type: MobaItemStatType.Percent,
                value: 25
            },
        ],
        
        recipe: [
            MobaItemId.SKYRAZER_BROADSWORD,
            MobaItemId.SICKLE,
        ],

        buyPrice: 1740,
        sellPrice: 1043,
    },

    {
        key: MobaItemId.TEN_STEPS_ONE_KILL,
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Лунные блики.png',

        stats: [
            {
                name: MobaItemEffectName.CritRate,
                type: MobaItemStatType.Percent,
                value: 20
            },
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 100
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: MobaItemSoleName.DamageOverflow,
            },
        ],
        
        recipe: [
            MobaItemId.SKYRAZER_BROADSWORD,
            MobaItemId.RUSTED_SWORD,
            MobaItemId.CRIT_GAUNTLETS,
        ],

        buyPrice: 2140,
        sellPrice: 1283,
    },

    {
        key: MobaItemId.DRAGONS_ROAR,
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Тромблоны драконьего крика.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 400
            },
            {
                name: MobaItemEffectName.MaxMana,
                type: MobaItemStatType.Flat,
                value: 400
            },
            {
                name: MobaItemEffectName.CritRate,
                type: MobaItemStatType.Percent,
                value: 20
            },
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 60
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: MobaItemSoleName.PowerStrikeV1,
            },
            {
                type: MobaItemSoleType.Passive,
                name: MobaItemSoleName.ColdnessV1,
            },
        ],
        
        recipe: [
            MobaItemId.CLEAVER,
            MobaItemId.SKYRAZER_BROADSWORD,
            MobaItemId.NETHER_SPELLBLADE,
        ],

        buyPrice: 2460,
        sellPrice: 1475,
    },

    {
        key: MobaItemId.SPECTRAL_GEAR_AURORA,
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Поглощающие свет клинки.png',

        stats: [
            {
                name: MobaItemEffectName.CritRate,
                type: MobaItemStatType.Percent,
                value: 20
            },
            {
                name: MobaItemEffectName.MovementSpeed,
                type: MobaItemStatType.Percent,
                value: 5
            },
            {
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemStatType.Percent,
                value: 40
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: MobaItemSoleName.Berserker,
            },
        ],
        
        recipe: [
            MobaItemId.DAGGERS,
            MobaItemId.DAGGERS_OF_FRENZY,
            MobaItemId.DAGGERS,
        ],

        buyPrice: 2070,
        sellPrice: 1241,
    },

    {
        key: MobaItemId.GREEN_TITAN_AXE,
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Генератор страха.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 500
            },
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 85
            },
            {
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemStatType.Percent,
                value: 15
            },
            {
                name: MobaItemEffectName.PhysicalPierce,
                type: MobaItemStatType.Flat,
                value: 170
            },
        ],
        
        recipe: [
            MobaItemId.CLEAVER,
            MobaItemId.IRON_HALBERD,
        ],

        buyPrice: 2090,
        sellPrice: 1253,
    },

    {
        key: MobaItemId.RAVENOUS_WOLF,
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Месть росомахи.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 200
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: MobaItemSoleName.RavenousWolf,
            },
        ],
        
        recipe: [
            MobaItemId.SKYRAZER_BROADSWORD,
            MobaItemId.SKYRAZER_BROADSWORD,
        ],

        buyPrice: 2950,
        sellPrice: 1769,
    },

    {
        key: MobaItemId.SPECTRAL_GEAR_STAR_STREAM,
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Пульсар.png',

        stats: [
            {
                name: MobaItemEffectName.CritRate,
                type: MobaItemStatType.Percent,
                value: 20
            },
            {
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemStatType.Percent,
                value: 40
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Active,
                name: MobaItemSoleName.Punification,
            },
            {
                type: MobaItemSoleType.Passive,
                name: MobaItemSoleName.PursuitStrikeV2
            },
        ],
        
        recipe: [
            MobaItemId.CRIT_GAUNTLETS,
            MobaItemId.QUICK_SHOOTER,
            MobaItemId.DAGGERS,
        ],

        buyPrice: 2230,
        sellPrice: 1337,
    },

    {
        key: MobaItemId.TUNGSTEN_CHELAE,
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Легкие фалмарийские ножи.png',

        stats: [
            {
                name: MobaItemEffectName.CritRate,
                type: MobaItemStatType.Percent,
                value: 20
            },
            {
                name: MobaItemEffectName.MovementSpeed,
                type: MobaItemStatType.Percent,
                value: 8
            },
            {
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemStatType.Percent,
                value: 30
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: MobaItemSoleName.ResidualShock,
            },
        ],
        
        recipe: [
            MobaItemId.DAGGERS_OF_FRENZY,
            MobaItemId.DAGGERS,
        ],

        buyPrice: 1840,
        sellPrice: 1103,
    },
]
