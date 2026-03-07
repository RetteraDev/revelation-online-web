import { MobaItemId, MobaItemCategory, MobaItemColor, MobaItemStatType, MobaItemEffectName, MobaItemSoleType, type MobaItem } from "@/data/moba/items/values";

export const PHYSICAL_WHITE_ITEMS: MobaItem[] = [
    {
        key: MobaItemId.RUSTED_SWORD,
        name: 'Rusted Sword',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Ржавый меч.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 20
            }
        ],

        buyPrice: 250,
        sellPrice: 149,
    },

    {
        key: MobaItemId.DAGGERS,
        name: 'Daggers',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Ножики для разделки крабов.png',

        stats: [
            {
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemStatType.Percent,
                value: 10
            }
        ],

        buyPrice: 290,
        sellPrice: 173,
    },

    {
        key: MobaItemId.GLOVES,
        name: 'Gloves',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Перчатки палача.png',

        stats: [
            {
                name: MobaItemEffectName.CritRate,
                type: MobaItemStatType.Percent,
                value: 8
            }
        ],

        buyPrice: 320,
        sellPrice: 191,
    },

    {
        key: MobaItemId.SICKLE,
        name: 'Sickle',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Ритуальная коса.png',

        stats: [
            {
                name: MobaItemEffectName.LifeSteal,
                type: MobaItemStatType.Percent,
                value: 8
            }
        ],

        buyPrice: 410,
        sellPrice: 245,
    },

    {
        key: MobaItemId.IRON_HALBERD,
        name: 'Iron Halberd',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Хрупкое острие.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 45
            }
        ],

        buyPrice: 450,
        sellPrice: 269,
    },

    {
        key: MobaItemId.CRIT_GAUNTLETS,
        name: 'Crit Gauntlets',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Перчатки с бубенцами.png',

        stats: [
            {
                name: MobaItemEffectName.CritRate,
                type: MobaItemStatType.Percent,
                value: 15
            }
        ],

        buyPrice: 550,
        sellPrice: 329,
    },

    {
        key: MobaItemId.SKYRAZER_BROADSWORD,
        name: 'Skyraiser Broadsword',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Меч Хранителя.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 80
            }
        ],
        
        recipe: [
            MobaItemId.RUSTED_SWORD
        ],

        buyPrice: 910,
        sellPrice: 545,
    },

    {
        key: MobaItemId.CLEAVER,
        name: 'Cleaver',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Фальшион Третьей династии.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 300
            },
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 40
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Coldness: Normal attacks reduce target\'s movement speed by 20% for four seconds.',
            },
        ],
        
        recipe: [
            MobaItemId.RUSTED_SWORD,
            MobaItemId.BLOODSOUL,
        ],

        buyPrice: 790,
        sellPrice: 473,
    },

    {
        key: MobaItemId.DAGGERS_OF_FRENZY,
        name: 'Daggers of Frenzy',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Золотые рыбки.png',

        stats: [
            {
                name: MobaItemEffectName.CritRate,
                type: MobaItemStatType.Percent,
                value: 10
            },
            {
                name: MobaItemEffectName.MovementSpeed,
                type: MobaItemStatType.Percent,
                value: 5
            },
            {
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemStatType.Percent,
                value: 15
            },
        ],
        
        recipe: [
            MobaItemId.DAGGERS,
            MobaItemId.GLOVES,
        ],

        buyPrice: 890,
        sellPrice: 533,
    },

    {
        key: MobaItemId.SWORD_OF_JUSTICE,
        name: 'Sword of Justice',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Самый Большой Меч.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 45
            },
            {
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemStatType.Percent,
                value: 10
            },
            {
                name: MobaItemEffectName.PhysicalPierce,
                type: MobaItemStatType.Flat,
                value: 60
            },
        ],
        
        recipe: [
            MobaItemId.RUSTED_SWORD,
            MobaItemId.RUSTED_SWORD,
        ],

        buyPrice: 1080,
        sellPrice: 647,
    },

    {
        key: MobaItemId.QUICK_SHOOTER,
        name: 'Quick Shooter',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Скорострельный мушкетон.png',

        stats: [
            {
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemStatType.Percent,
                value: 25
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Pursuit Strike: Increases Normal Attack\'s Physical Damage by 30'
            },
        ],
        
        recipe: [
            MobaItemId.DAGGERS,
            MobaItemId.DAGGERS,
        ],

        buyPrice: 890,
        sellPrice: 533,
    },
]
