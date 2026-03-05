import { ITEM_IDS, MobaItemCategory, MobaItemColor, MobaItemEffectColor, MobaItemEffectName, MobaItemEffectType, type MobaItem } from "@/data/moba/items/values";

export const PHYSICAL_WHITE_ITEMS: MobaItem[] = [
    {
        key: ITEM_IDS.RUSTED_SWORD,
        name: 'Rusted Sword',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemEffectType.Flat,
                value: 20
            }
        ],

        buyPrice: 250,
        sellPrice: 149,
    },

    {
        key: ITEM_IDS.DAGGERS,
        name: 'Daggers',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemEffectType.Percent,
                value: 10
            }
        ],

        buyPrice: 290,
        sellPrice: 173,
    },

    {
        key: ITEM_IDS.GLOVES,
        name: 'Gloves',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CritRate,
                type: MobaItemEffectType.Percent,
                value: 8
            }
        ],

        buyPrice: 320,
        sellPrice: 191,
    },

    {
        key: ITEM_IDS.SICKLE,
        name: 'Sickle',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.LifeSteal,
                type: MobaItemEffectType.Percent,
                value: 8
            }
        ],

        buyPrice: 410,
        sellPrice: 245,
    },

    {
        key: ITEM_IDS.IRON_HALBERD,
        name: 'Iron Halberd',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemEffectType.Flat,
                value: 45
            }
        ],

        buyPrice: 450,
        sellPrice: 269,
    },

    {
        key: ITEM_IDS.CRIT_GAUNTLETS,
        name: 'Crit Gauntlets',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CritRate,
                type: MobaItemEffectType.Percent,
                value: 15
            }
        ],

        buyPrice: 550,
        sellPrice: 329,
    },

    {
        key: ITEM_IDS.SKYRAZER_BROADSWORD,
        name: 'Skyraiser Broadsword',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemEffectType.Flat,
                value: 80
            }
        ],
        
        recipe: [
            ITEM_IDS.RUSTED_SWORD
        ],

        buyPrice: 910,
        sellPrice: 545,
    },

    {
        key: ITEM_IDS.CLEAVER,
        name: 'Cleaver',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
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
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemEffectType.Flat,
                value: 40
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Coldness: Normal attacks reduce target\'s movement speed by 20% for four seconds.',
            },
        ],
        
        recipe: [
            ITEM_IDS.RUSTED_SWORD,
            ITEM_IDS.BLOODSOUL,
        ],

        buyPrice: 790,
        sellPrice: 473,
    },

    {
        key: ITEM_IDS.DAGGERS_OF_FRENZY,
        name: 'Daggers of Frenzy',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CritRate,
                type: MobaItemEffectType.Percent,
                value: 10
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MovementSpeed,
                type: MobaItemEffectType.Percent,
                value: 5
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemEffectType.Percent,
                value: 15
            },
        ],
        
        recipe: [
            ITEM_IDS.DAGGERS,
            ITEM_IDS.GLOVES,
        ],

        buyPrice: 890,
        sellPrice: 533,
    },

    {
        key: ITEM_IDS.SWORD_OF_JUSTICE,
        name: 'Sword of Justice',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemEffectType.Flat,
                value: 45
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemEffectType.Percent,
                value: 10
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalPierce,
                type: MobaItemEffectType.Flat,
                value: 60
            },
        ],
        
        recipe: [
            ITEM_IDS.RUSTED_SWORD,
            ITEM_IDS.RUSTED_SWORD,
        ],

        buyPrice: 1080,
        sellPrice: 647,
    },

    {
        key: ITEM_IDS.QUICK_SHOOTER,
        name: 'Quick Shooter',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemEffectType.Percent,
                value: 25
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Pursuit Strike: Increases Normal Attack\'s Physical Damage by 30'
            },
        ],
        
        recipe: [
            ITEM_IDS.DAGGERS,
            ITEM_IDS.DAGGERS,
        ],

        buyPrice: 890,
        sellPrice: 533,
    },
]
