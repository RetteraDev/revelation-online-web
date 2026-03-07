import { MobaItemId, MobaItemCategory, MobaItemColor, MobaItemEffectColor, MobaItemEffectName, MobaItemEffectType, type MobaItem } from "@/data/moba/items/values";

export const MAGICAL_WHITE_ITEMS: MobaItem[] = [
    {
        key: MobaItemId.TEXTS,
        name: 'Texts',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Тайны чародея.png',

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 40
            }
        ],

        buyPrice: 300,
        sellPrice: 179,
    },

    {
        key: MobaItemId.CHAOS_ICE,
        name: 'Chaos Ice',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Ледяной нексус.png',

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxMana,
                type: MobaItemEffectType.Flat,
                value: 300
            }
        ],

        buyPrice: 220,
        sellPrice: 131,
    },

    {
        key: MobaItemId.JADE_PENDANT,
        name: 'Jade Pendant',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Фалмарийский амулет.png',

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.ManaRecovery,
                type: MobaItemEffectType.Flat,
                value: 2
            }
        ],

        buyPrice: 120,
        sellPrice: 71,
    },

    {
        key: MobaItemId.LAMBENT_CODEX,
        name: 'Lambent Codex',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Кодекс из Сноу-Шу.png',

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 20
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemEffectType.Percent,
                value: 8
            },
        ],

        buyPrice: 500,
        sellPrice: 299,
    },

    {
        key: MobaItemId.DAWNS_SPIRIT,
        name: 'Dawn’s Spirit',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Ключ Куроми.png',

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 80
            },
        ],

        buyPrice: 540,
        sellPrice: 323,
    },

    {
        key: MobaItemId.THOUSAND_MORPHS,
        name: 'Thousand Morphs',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Посох феи.png',

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
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
        name: 'Book of Times',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Шепчущий фолиант.png',

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 75
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemEffectType.Percent,
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
        name: 'Nether Spellblade',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Меч Снежной королевы.png',

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemEffectType.Flat,
                value: 300
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxMana,
                type: MobaItemEffectType.Flat,
                value: 300
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
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
        name: 'Sage Mask',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Тотем Коко.png',

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemEffectType.Flat,
                value: 300
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 70
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalPierce,
                type: MobaItemEffectType.Flat,
                value: 75
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
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
        name: 'Enimty Crystal',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Призрачный кристалл.png',

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemEffectType.Flat,
                value: 300
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxMana,
                type: MobaItemEffectType.Flat,
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
        name: 'Imp’s Bolus',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Реликварий теней.png',

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalArmor,
                type: MobaItemEffectType.Flat,
                value: 100
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 40
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.ManaRecovery,
                type: MobaItemEffectType.Flat,
                value: 2
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemEffectType.Percent,
                value: 5
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
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
