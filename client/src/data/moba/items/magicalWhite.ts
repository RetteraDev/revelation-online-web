import { ITEM_IDS, MobaItemCategory, MobaItemColor, MobaItemEffectColor, MobaItemEffectName, MobaItemEffectType, type MobaItem } from "@/data/moba/items/values";

export const MAGICAL_WHITE_ITEMS: MobaItem[] = [
    {
        key: ITEM_IDS.TEXTS,
        name: 'Texts',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,

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
        key: ITEM_IDS.CHAOS_ICE,
        name: 'Chaos Ice',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,

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
        key: ITEM_IDS.JADE_PENDANT,
        name: 'Jade Pendant',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,

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
        key: ITEM_IDS.LAMBENT_CODEX,
        name: 'Lambent Codex',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,

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
        key: ITEM_IDS.DAWNS_SPIRIT,
        name: 'Dawn’s Spirit',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,

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
        key: ITEM_IDS.THOUSAND_MORPHS,
        name: 'Thousand Morphs',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 120
            },
        ],
        
        recipe: [
            ITEM_IDS.TEXTS,
        ],

        buyPrice: 820,
        sellPrice: 491,
    },

    {
        key: ITEM_IDS.BOOK_OF_TIMES,
        name: 'Book of Times',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,

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
            ITEM_IDS.TEXTS,
            ITEM_IDS.LAMBENT_CODEX,
        ],

        buyPrice: 1240,
        sellPrice: 743,
    },

    {
        key: ITEM_IDS.NETHER_SPELLBLADE,
        name: 'Nether Spellblade',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,

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
            ITEM_IDS.CHAOS_ICE,
            ITEM_IDS.BLOODSOUL,
        ],

        buyPrice: 730,
        sellPrice: 437,
    },

    {
        key: ITEM_IDS.SAGE_MASK,
        name: 'Sage Mask',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,

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
            ITEM_IDS.TEXTS,
            ITEM_IDS.BLOODSOUL,
        ],

        buyPrice: 1020,
        sellPrice: 611,
    },

    {
        key: ITEM_IDS.ENMITY_CRYSTAL,
        name: 'Enimty Crystal',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,

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
            ITEM_IDS.CHAOS_ICE,
            ITEM_IDS.BLOODSOUL,
        ],

        buyPrice: 720,
        sellPrice: 431,
    },

    {
        key: ITEM_IDS.IMPS_BOLUS,
        name: 'Imp’s Bolus',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.WHITE,

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
            ITEM_IDS.JADE_PENDANT,
            ITEM_IDS.BLOODSOUL,
        ],

        buyPrice: 900,
        sellPrice: 539,
    },
]
