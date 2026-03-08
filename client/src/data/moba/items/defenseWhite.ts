import { MobaItemId, MobaItemCategory, MobaItemColor, MobaItemStatType, MobaItemEffectName, MobaItemSoleType, type MobaItem, MobaItemSoleName } from "@/data/moba/items/values";

export const DEFENSE_WHITE_ITEMS: MobaItem[] = [
    {
        key: MobaItemId.BLOODSOUL,
        category: MobaItemCategory.DEFENSE,
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
        category: MobaItemCategory.DEFENSE,
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
        category: MobaItemCategory.DEFENSE,
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
        category: MobaItemCategory.DEFENSE,
        color: MobaItemColor.WHITE,
        icon: '/moba/items/Аметистовая слеза.png',

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
        category: MobaItemCategory.DEFENSE,
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
        category: MobaItemCategory.DEFENSE,
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
                name: MobaItemSoleName.SunscorchV1,
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
        category: MobaItemCategory.DEFENSE,
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
        category: MobaItemCategory.DEFENSE,
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
        category: MobaItemCategory.DEFENSE,
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
                name: MobaItemSoleName.TorpidityV1,
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
