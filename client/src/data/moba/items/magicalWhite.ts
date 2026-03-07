import { MobaItemId, MobaItemCategory, MobaItemColor, MobaItemStatType, MobaItemEffectName, MobaItemSoleType, type MobaItem } from "@/data/moba/items/values";

export const MAGICAL_WHITE_ITEMS: MobaItem[] = [
    {
        key: MobaItemId.TEXTS,
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Тайны чародея.png',

        stats: [
            {
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemStatType.Flat,
                value: 40
            }
        ],

        buyPrice: 300,
        sellPrice: 179,
    },

    {
        key: MobaItemId.CHAOS_ICE,
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Ледяной нексус.png',

        stats: [
            {
                name: MobaItemEffectName.MaxMana,
                type: MobaItemStatType.Flat,
                value: 300
            }
        ],

        buyPrice: 220,
        sellPrice: 131,
    },

    {
        key: MobaItemId.JADE_PENDANT,
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Фалмарийский амулет.png',

        stats: [
            {
                name: MobaItemEffectName.ManaRecovery,
                type: MobaItemStatType.Flat,
                value: 2
            }
        ],

        buyPrice: 120,
        sellPrice: 71,
    },

    {
        key: MobaItemId.LAMBENT_CODEX,
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Кодекс из Сноу-Шу.png',

        stats: [
            {
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemStatType.Flat,
                value: 20
            },
            {
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemStatType.Percent,
                value: 8
            },
        ],

        buyPrice: 500,
        sellPrice: 299,
    },

    {
        key: MobaItemId.DAWNS_SPIRIT,
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Ключ Куроми.png',

        stats: [
            {
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemStatType.Flat,
                value: 80
            },
        ],

        buyPrice: 540,
        sellPrice: 323,
    },

    {
        key: MobaItemId.THOUSAND_MORPHS,
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Посох феи.png',

        stats: [
            {
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemStatType.Flat,
                value: 120
            },
        ],
        
        recipe: [
            MobaItemId.TEXTS,
        ],

        buyPrice: 820,
        sellPrice: 491,
    },

    {
        key: MobaItemId.BOOK_OF_TIMES,
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Шепчущий фолиант.png',

        stats: [
            {
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemStatType.Flat,
                value: 75
            },
            {
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemStatType.Percent,
                value: 10
            },
        ],
        
        recipe: [
            MobaItemId.TEXTS,
            MobaItemId.LAMBENT_CODEX,
        ],

        buyPrice: 1240,
        sellPrice: 743,
    },

    {
        key: MobaItemId.NETHER_SPELLBLADE,
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Меч Снежной королевы.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 300
            },
            {
                name: MobaItemEffectName.MaxMana,
                type: MobaItemStatType.Flat,
                value: 300
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Power Strike: After using the skill, the next normal attack within five seconds deald additional Magic Damage equal to 50% Physical Damage (+30% Magic Bonus). This effect has a two-second cooldown',
            },
        ],
        
        recipe: [
            MobaItemId.CHAOS_ICE,
            MobaItemId.BLOODSOUL,
        ],

        buyPrice: 730,
        sellPrice: 437,
    },

    {
        key: MobaItemId.SAGE_MASK,
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Тотем Коко.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 300
            },
            {
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemStatType.Flat,
                value: 70
            },
            {
                name: MobaItemEffectName.MagicalPierce,
                type: MobaItemStatType.Flat,
                value: 75
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Shatter Armor: Magic Pierce +75',
            },
        ],
        
        recipe: [
            MobaItemId.TEXTS,
            MobaItemId.BLOODSOUL,
        ],

        buyPrice: 1020,
        sellPrice: 611,
    },

    {
        key: MobaItemId.ENMITY_CRYSTAL,
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Призрачный кристалл.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 300
            },
            {
                name: MobaItemEffectName.MaxMana,
                type: MobaItemStatType.Flat,
                value: 300
            },
        ],
        
        recipe: [
            MobaItemId.CHAOS_ICE,
            MobaItemId.BLOODSOUL,
        ],

        buyPrice: 720,
        sellPrice: 431,
    },

    {
        key: MobaItemId.IMPS_BOLUS,
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Реликварий теней.png',

        stats: [
            {
                name: MobaItemEffectName.MagicalArmor,
                type: MobaItemStatType.Flat,
                value: 100
            },
            {
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemStatType.Flat,
                value: 40
            },
            {
                name: MobaItemEffectName.ManaRecovery,
                type: MobaItemStatType.Flat,
                value: 2
            },
            {
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemStatType.Percent,
                value: 5
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Mana Recovery: Mana Recovery +30',
            },
        ],
        
        recipe: [
            MobaItemId.JADE_PENDANT,
            MobaItemId.BLOODSOUL,
        ],

        buyPrice: 900,
        sellPrice: 539,
    },
]
