import { MobaItemId, MobaItemCategory, MobaItemColor, MobaItemStatType, MobaItemEffectName, MobaItemSoleType, type MobaItem } from "@/data/moba/items/values";

export const JUNGLE_ITEMS: MobaItem[] = [
    {
        key: MobaItemId.NOVITIATES_HALBERD,
        name: 'Novitiate’s Halberd',
        category: MobaItemCategory.OTHER,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Заточка.png',
        
        stats: [
            {
                name: MobaItemEffectName.PunishmentRate,
                type: MobaItemStatType.Percent,
                value: 20
            },
        ],

        soles: [
            {
                name: '[P] Explorer: Critter XP +20%',
                type: MobaItemSoleType.Passive,
            }
        ],

        buyPrice: 250,
        sellPrice: 149,
    },

    {
        key: MobaItemId.MERCILESS_BROADSWORD,
        name: 'Merciless Breadsword',
        category: MobaItemCategory.OTHER,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Кривой нож.png',
        
        stats: [
            {
                name: MobaItemEffectName.PunishmentRate,
                type: MobaItemStatType.Percent,
                value: 30
            },
        ],

        soles: [
            {
                name: '[P] Explorer: Critter XP +30%',
                type: MobaItemSoleType.Passive,
            }
        ],

        recipe: [
            MobaItemId.NOVITIATES_HALBERD
        ],

        buyPrice: 750,
        sellPrice: 449,
    },

    {
        key: MobaItemId.RAGING_APE_BATTLEAXE,
        name: 'Raging Ape Battleaxe',
        category: MobaItemCategory.OTHER,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Черепокол.png',
        
        stats: [
            {
                name: MobaItemEffectName.PunishmentRate,
                type: MobaItemStatType.Percent,
                value: 20
            },
        ],

        soles: [
            {
                name: '[P] Explorer: Critter XP +30%',
                type: MobaItemSoleType.Passive,
            }
        ],

        recipe: [
            MobaItemId.NOVITIATES_HALBERD
        ],

        buyPrice: 750,
        sellPrice: 449,
    },

    {
        key: MobaItemId.PROUDLIGHT_AXE,
        name: 'Proudlight Axe',
        category: MobaItemCategory.OTHER,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Складная глефа.png',
        
        stats: [
            {
                name: MobaItemEffectName.PunishmentRate,
                type: MobaItemStatType.Percent,
                value: 30
            },
        ],

        soles: [
            {
                name: '[P] Explorer: Critter XP +30%',
                type: MobaItemSoleType.Passive,
            }
        ],

        recipe: [
            MobaItemId.NOVITIATES_HALBERD
        ],

        buyPrice: 750,
        sellPrice: 449,
    },

    {
        key: MobaItemId.BROADSWORD_OF_CHRYSOS,
        name: 'Broadsword of Cryrsos',
        category: MobaItemCategory.OTHER,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Пасть дракона.png',
        
        stats: [
            {
                name: MobaItemEffectName.MaxMana,
                type: MobaItemStatType.Flat,
                value: 400
            },
            {
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemStatType.Flat,
                value: 100
            },
            {
                name: MobaItemEffectName.PunishmentRate,
                type: MobaItemStatType.Percent,
                value: 30
            },
        ],

        soles: [
            {
                name: '[P] Explorer: Critter XP +30%',
                type: MobaItemSoleType.Passive,
            },
            {
                name: '[P] Bloodthirst: Magic Leech +5%. Stacks with Magic Skill Leech',
                type: MobaItemSoleType.Passive,
            },
            {
                name: '[P] Power Strike: After using the skill, the next normal attack within five seconds deals additional Magic Damage equal to 50% Physical Damage (+30% Magic Bonus). The effect has a two-second cooldown',
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
        name: 'Axe of the Headless Warrior',
        category: MobaItemCategory.OTHER,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Гнев Оро.png',
        
        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 1850
            },
            {
                name: MobaItemEffectName.PunishmentRate,
                type: MobaItemStatType.Percent,
                value: 30
            },
        ],

        soles: [
            {
                name: '[P] Explorer: Critter XP +30%',
                type: MobaItemSoleType.Passive,
            },
            {
                name: '[P] Sunscorch: Deals 280 magic damage every two seconds to enemies nearby',
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
        name: 'World Breaker',
        category: MobaItemCategory.OTHER,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Я-Дао, Зубастое лезвие.png',
        
        stats: [
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 45
            },
            {
                name: MobaItemEffectName.PunishmentRate,
                type: MobaItemStatType.Percent,
                value: 30
            },
            {
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemStatType.Percent,
                value: 40
            },
        ],

        soles: [
            {
                name: '[P] Explorer: Critter XP +30%',
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

]
