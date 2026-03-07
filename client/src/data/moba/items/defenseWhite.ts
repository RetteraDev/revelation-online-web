import { MobaItemId, MobaItemCategory, MobaItemColor, MobaItemEffectColor, MobaItemEffectName, MobaItemEffectType, type MobaItem } from "@/data/moba/items/values";

export const DEFENSE_WHITE_ITEMS: MobaItem[] = [
    {
        key: MobaItemId.BLOODSOUL,
        name: 'Bloodsoul',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Кровавый кристалл.png',

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemEffectType.Flat,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalArmor,
                type: MobaItemEffectType.Flat,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalArmor,
                type: MobaItemEffectType.Flat,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.HealthRecovery,
                type: MobaItemEffectType.Flat,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemEffectType.Flat,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemEffectType.Flat,
                value: 700
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemEffectType.Flat,
                value: 700
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalArmor,
                type: MobaItemEffectType.Flat,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxMana,
                type: MobaItemEffectType.Flat,
                value: 400
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalArmor,
                type: MobaItemEffectType.Flat,
                value: 110
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemEffectType.Percent,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalArmor,
                type: MobaItemEffectType.Flat,
                value: 210
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
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
