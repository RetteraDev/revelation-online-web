enum MobaItemEffectColor {
    Usual,
    Unique
}

enum MobaItemEffectType {
    Flat,
    Percent,
}

enum MobaItemEffectName {
    AttackSpeed = 'Boost Normal Attack Speed',
    CritRate = 'Crit Rate',
    LifeSteal = 'Normal Attack Siphon',
    PhysicalDamage = 'Physical Damage',
    MaxHealth = 'Maximum HP',
}

type MobaItemEffect = {
    color: MobaItemEffectColor,
    name: MobaItemEffectName
    type: MobaItemEffectType,
    value: number
}

enum MobaItemColor {
    WHITE,
    GREEN,
}

enum MobaItemCategory {
    PHYSICAL_WEAPONS,
}

enum MobaItemId {
    RUSTED_SWORD = '1',
    DAGGERS = '2',
    GLOVES = '3',
    SICKLE = '4',
    IRON_HALBERD = '5',
    CRIT_GAUNTLETS = '6',
    SKYRAZER_BROADSWORD = '7',
    CLEAVER = '8',
    DAGGERS_OF_FRENZY = '9',
    SWORD_OF_JUSTICE = '10',
}

type MobaItem = {
    key: MobaItemId,
    name: string,
    category: MobaItemCategory,
    color: MobaItemColor,
    icon?: string,

    effects: MobaItemEffect[]
    recipe?: MobaItemId[]

    buyPrice: number,
    sellPrice: number,
}

const ITEMS: MobaItem[] = [
    {
        key: MobaItemId.RUSTED_SWORD,
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
        key: MobaItemId.DAGGERS,
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
        key: MobaItemId.GLOVES,
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
        key: MobaItemId.SICKLE,
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
        key: MobaItemId.IRON_HALBERD,
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

        buyPrice: 410,
        sellPrice: 245,
    },

    {
        key: MobaItemId.CRIT_GAUNTLETS,
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
        key: MobaItemId.SKYRAZER_BROADSWORD,
        name: 'Skyraiser Broadsword',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        
        recipe: [
            MobaItemId.RUSTED_SWORD
        ],

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemEffectType.Flat,
                value: 80
            }
        ],

        buyPrice: 910,
        sellPrice: 545,
    },

    {
        key: MobaItemId.CLEAVER,
        name: 'Cleaver',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.WHITE,
        
        recipe: [],

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
        ],

        buyPrice: 790,
        sellPrice: 473,
    },
]

export {
    ITEMS
}
