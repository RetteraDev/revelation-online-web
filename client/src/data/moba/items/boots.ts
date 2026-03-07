import { MobaItemId, MobaItemCategory, MobaItemColor, MobaItemStatType, MobaItemEffectName, MobaItemSoleType, type MobaItem } from "@/data/moba/items/values";

export const BOOTS_ITEMS: MobaItem[] = [
    {
        key: MobaItemId.NOVITIATES_SHOES,
        name: 'Novitiate’s Shoes',
        category: MobaItemCategory.OTHER,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Сапоги придворного гонца.png',

        soles: [
            {
                name: '[P] Divine Way: Movement Speed +57',
                type: MobaItemSoleType.Passive,
            }
        ],

        buyPrice: 250,
        sellPrice: 149,
    },

    {
        key: MobaItemId.GLORIOUS_WAR_BOOTS,
        name: 'Glorious War Boots',
        category: MobaItemCategory.OTHER,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Сапоги последнего стража гавани.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalArmor,
                type: MobaItemStatType.Flat,
                value: 110
            },
        ],

        soles: [
            {
                name: '[P] Divine Way: Movement Speed +114',
                type: MobaItemSoleType.Passive,
            }
        ],

        recipe: [
            MobaItemId.NOVITIATES_SHOES,
        ],

        buyPrice: 690,
        sellPrice: 413,
    },

    {
        key: MobaItemId.TRUE_VOYAGERS_SHOES,
        name: 'True Voyager’s Shoes',
        category: MobaItemCategory.OTHER,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Скрипучие сапоги.png',

        stats: [
            {
                name: MobaItemEffectName.MagicalArmor,
                type: MobaItemStatType.Flat,
                value: 110
            },
        ],

        soles: [
            {
                name: '[P] Divine Way: Movement Speed +114',
                type: MobaItemSoleType.Passive,
            }
        ],

        recipe: [
            MobaItemId.NOVITIATES_SHOES,
        ],

        buyPrice: 690,
        sellPrice: 413,
    },

    {
        key: MobaItemId.LETHAL_GRASP_WADERS,
        name: 'Lethal Grasp Waders',
        category: MobaItemCategory.OTHER,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Сапоги из манашелка.png',

        stats: [
            {
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemStatType.Percent,
                value: 10
            },
        ],

        soles: [
            {
                name: '[P] Divine Way: Movement Speed +114',
                type: MobaItemSoleType.Passive,
            }
        ],

        recipe: [
            MobaItemId.NOVITIATES_SHOES,
        ],

        buyPrice: 710,
        sellPrice: 425,
    },

    {
        key: MobaItemId.CELESTIAL_PATIENCE_WADERS,
        name: 'Celestial Patience Waders',
        category: MobaItemCategory.OTHER,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Сапоги чародея.png',

        stats: [
            {
                name: MobaItemEffectName.MagicalPierce,
                type: MobaItemStatType.Flat,
                value: 75
            },
        ],

        soles: [
            {
                name: '[P] Divine Way: Movement Speed +114',
                type: MobaItemSoleType.Passive,
            }
        ],

        recipe: [
            MobaItemId.NOVITIATES_SHOES,
        ],

        buyPrice: 790,
        sellPrice: 473,
    },

    {
        key: MobaItemId.ADVENTURERS_WAR_BOOTS,
        name: 'Adventurer’s War Boots',
        category: MobaItemCategory.OTHER,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Сапоги калахарского стрелка.png',

        stats: [
            {
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemStatType.Percent,
                value: 15
            },
        ],

        soles: [
            {
                name: '[P] Divine Way: Movement Speed +114',
                type: MobaItemSoleType.Passive,
            }
        ],

        recipe: [
            MobaItemId.NOVITIATES_SHOES,
        ],

        buyPrice: 710,
        sellPrice: 425,
    },

    {
        key: MobaItemId.BREEZE_SANDALS,
        name: 'Breeze Sandals',
        category: MobaItemCategory.OTHER,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Туфли для чечетки.png',

        soles: [
            {
                name: '[P] Divine Way: Movement Speed +171',
                type: MobaItemSoleType.Passive,
            }
        ],

        recipe: [
            MobaItemId.NOVITIATES_SHOES,
        ],

        buyPrice: 630,
        sellPrice: 377,
    },
]
