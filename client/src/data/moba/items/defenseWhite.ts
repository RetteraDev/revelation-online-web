import { MobaItemId, MobaItemCategory, MobaItemColor, MobaItemStatType, MobaItemEffectName, MobaItemSoleType, type MobaItem } from "@/data/moba/items/values";

export const DEFENSE_WHITE_ITEMS: MobaItem[] = [
    {
        key: MobaItemId.BLOODSOUL,
        name: 'Bloodsoul',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Кровавый кристалл.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 300
            },
        ],

        buyPrice: 300,
        sellPrice: 179,
    },

    {
        key: MobaItemId.LINEN_CLOTH,
        name: 'Linen Cloth',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Полотняный доспех.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalArmor,
                type: MobaItemStatType.Flat,
                value: 90
            },
        ],

        buyPrice: 220,
        sellPrice: 131,
    },

    {
        key: MobaItemId.FAIRYTALE_HAT,
        name: 'Fairytale Hat',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Сказочный капюшон.png',

        stats: [
            {
                name: MobaItemEffectName.MagicalArmor,
                type: MobaItemStatType.Flat,
                value: 90
            },
        ],

        buyPrice: 220,
        sellPrice: 131,
    },

    {
        key: MobaItemId.EXCELSIOR,
        name: 'Excelsior',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Сказочный капюшон.png',

        stats: [
            {
                name: MobaItemEffectName.HealthRecovery,
                type: MobaItemStatType.Flat,
                value: 6
            },
        ],

        buyPrice: 140,
        sellPrice: 83,
    },

    {
        key: MobaItemId.ROUGH_CAP,
        name: 'Rough Cap',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Хатимаки-оберег.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 1000
            },
        ],

        recipe: [
            MobaItemId.BLOODSOUL,
            MobaItemId.BLOODSOUL,
        ],

        buyPrice: 900,
        sellPrice: 539,
    },

    {
        key: MobaItemId.FLAMES_HEART,
        name: 'Flame’s Heart',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Шалость Марисы.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 700
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Sunscorch: Deals 150 magic damage every two seconds to enemies nearby',
            },
        ],

        recipe: [
            MobaItemId.BLOODSOUL,
        ],

        buyPrice: 900,
        sellPrice: 539,
    },

    {
        key: MobaItemId.DREAMLIKE_SHAWL,
        name: 'Dreamlike Shawl',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Колдовское кружево.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 700
            },
            {
                name: MobaItemEffectName.MagicalArmor,
                type: MobaItemStatType.Flat,
                value: 120
            },
        ],

        recipe: [
            MobaItemId.BLOODSOUL,
            MobaItemId.FAIRYTALE_HAT,
        ],

        buyPrice: 1020,
        sellPrice: 611,
    },

    {
        key: MobaItemId.STEELBACK_SHIELD,
        name: 'Steelback Shield',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Мрачная преграда.png',

        stats: [
            {
                name: MobaItemEffectName.MaxMana,
                type: MobaItemStatType.Flat,
                value: 400
            },
            {
                name: MobaItemEffectName.PhysicalArmor,
                type: MobaItemStatType.Flat,
                value: 110
            },
            {
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemStatType.Percent,
                value: 10
            },
        ],

        recipe: [
            MobaItemId.LINEN_CLOTH,
            MobaItemId.CHAOS_ICE,
        ],

        buyPrice: 900,
        sellPrice: 539,
    },

    {
        key: MobaItemId.GLORIOUS_ARMOR,
        name: 'Glorious Armor',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Костяной доспех.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalArmor,
                type: MobaItemStatType.Flat,
                value: 210
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P]: Torpidity: When attacked, all nearby enemies lose 30% Attack Speed for four seconds',
            },
        ],

        recipe: [
            MobaItemId.LINEN_CLOTH,
            MobaItemId.LINEN_CLOTH,
        ],

        buyPrice: 730,
        sellPrice: 437,
    },
]
