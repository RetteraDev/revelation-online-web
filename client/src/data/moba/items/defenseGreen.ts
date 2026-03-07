import { MobaItemId, MobaItemCategory, MobaItemColor, MobaItemStatType, MobaItemEffectName, MobaItemSoleType, type MobaItem } from "@/data/moba/items/values";

export const DEFENSE_GREEN_ITEMS: MobaItem[] = [
    {
        key: MobaItemId.VANGUARD_PAVISE,
        name: 'Vanguard Pavise',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Щит полководца.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 500
            },
            {
                name: MobaItemEffectName.MovementSpeed,
                type: MobaItemStatType.Percent,
                value: 5
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P]: Legion: Increases Physical Damage by 60 and Magic Damage by 120 for teammates in a wide area',
            },
        ],

        recipe: [
            MobaItemId.BLOODSOUL,
            MobaItemId.RUSTED_SWORD,
            MobaItemId.TEXTS,
        ],

        buyPrice: 1510,
        sellPrice: 905,
    },

    {
        key: MobaItemId.GOD_OF_WAR,
        name: 'God of War',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Терновый доспех.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalArmor,
                type: MobaItemStatType.Flat,
                value: 420
            },
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 80
            },
        ],

        soles: [            
            {
                type: MobaItemSoleType.Passive,
                name: '[P]: Thorns: Reflects 10% of incoming Physical Damage back at enemy',
            },
        ],

        recipe: [
            MobaItemId.LINEN_CLOTH,
            MobaItemId.LINEN_CLOTH,
            MobaItemId.IRON_HALBERD,
        ],

        buyPrice: 1840,
        sellPrice: 1103,
    },

    {
        key: MobaItemId.FIREWALKERS_GLOVES,
        name: 'Firewalker’s Gloves',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Перчатки инквизитора.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 1000
            },
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 20
            },
        ],
        
        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P]: Bloody Fury: When HP falls below 40%, you get Blood Fury upon taking damage. Your Attack attribute is increased by 60 and you get a shield that can absorb a large amount of damage for eight seconds. Cooldown: 90 seconds',
            },
        ],

        recipe: [
            MobaItemId.BLOODSOUL,
            MobaItemId.BLOODSOUL,
            MobaItemId.RUSTED_SWORD,
        ],

        buyPrice: 2120,
        sellPrice: 1271,
    },

    {
        key: MobaItemId.ELEMENTAL_SHADE,
        name: 'Elemental Shade',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Эмблема гладиатора.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 400
            },
            {
                name: MobaItemEffectName.MaxMana,
                type: MobaItemStatType.Flat,
                value: 400
            },
            {
                name: MobaItemEffectName.PhysicalArmor,
                type: MobaItemStatType.Flat,
                value: 100
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Active,
                name: '[A]: Bloodlust: Nearby allies gain 10% more damage output and 30% movement speed for four seconds. Cooldown: 60 seconds',
            },
        ],

        recipe: [
            MobaItemId.BLOODSOUL,
            MobaItemId.CHAOS_ICE,
            MobaItemId.LINEN_CLOTH,
        ],

        buyPrice: 1530,
        sellPrice: 917,
    },

    {
        key: MobaItemId.OPEN_WORLD,
        name: 'Open World',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Жилет пироманта.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 1200
            },
            {
                name: MobaItemEffectName.PhysicalArmor,
                type: MobaItemStatType.Flat,
                value: 240
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P]: Sunscorch: Deals 280 magic damage every two seconds to enemies nearby',
            }
        ],

        recipe: [
            MobaItemId.FLAMES_HEART,
            MobaItemId.LINEN_CLOTH,
        ],

        buyPrice: 1830,
        sellPrice: 1097,
    },

    {
        key: MobaItemId.DRAGOON,
        name: 'Dragoon',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Объятье Акари.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 2000
            },
            {
                name: MobaItemEffectName.HealthRecovery,
                type: MobaItemStatType.Flat,
                value: 20
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Recovery: Heals 3% of maximum HP per second when not in combat',
            },
        ],

        recipe: [
            MobaItemId.BLOODSOUL,
            MobaItemId.ROUGH_CAP,
            MobaItemId.EXCELSIOR,
        ],

        buyPrice: 2370,
        sellPrice: 1421,
    },

    {
        key: MobaItemId.SPIRITED_FIGHTER_BUlWARK,
        name: 'Spirited Fighter Bulwark',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Эгида Атума.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 1200
            },
            {
                name: MobaItemEffectName.PhysicalArmor,
                type: MobaItemStatType.Flat,
                value: 270
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Torpidity: When attacked, nearby enemies lose 30% Attack Speed and 15% Movement Speed for four seconds',
            },
        ],

        recipe: [
            MobaItemId.ROUGH_CAP,
            MobaItemId.GLORIOUS_ARMOR,
        ],

        buyPrice: 2180,
        sellPrice: 1307,
    },

    {
        key: MobaItemId.CLOUD_SMOKE,
        name: 'Cloud Smoke',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Камзол иллюзиониста.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 1100
            },
            {
                name: MobaItemEffectName.MagicalArmor,
                type: MobaItemStatType.Flat,
                value: 180
            },
            {
                name: MobaItemEffectName.HealthRecovery,
                type: MobaItemStatType.Flat,
                value: 9
            },
            {
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemStatType.Percent,
                value: 10
            },
        ],

        recipe: [
            MobaItemId.BLOODSOUL,
            MobaItemId.DREAMLIKE_SHAWL,
            MobaItemId.EXCELSIOR,
        ],

        buyPrice: 2100,
        sellPrice: 1259,
    },

    {
        key: MobaItemId.RAIMENT_OF_DARKNESS,
        name: 'Rainment of Darkness',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Одеяние тьмы.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 1000
            },
            {
                name: MobaItemEffectName.MagicalArmor,
                type: MobaItemStatType.Flat,
                value: 360
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Counter-chomp: Reflects 10% of incoming Magic Damage at the enemy',
            },
        ],

        recipe: [
            MobaItemId.DREAMLIKE_SHAWL,
            MobaItemId.ROUGH_CAP,
        ],

        buyPrice: 2120,
        sellPrice: 1271,
    },

    {
        key: MobaItemId.COLD_HEART,
        name: 'Cold Heart',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Небула.png',

        stats: [
            {
                name: MobaItemEffectName.MaxMana,
                type: MobaItemStatType.Flat,
                value: 500
            },
            {
                name: MobaItemEffectName.PhysicalArmor,
                type: MobaItemStatType.Flat,
                value: 360
            },
            {
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemStatType.Percent,
                value: 20
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Ice Heart: If you suffer a single blow dealing more than 8% HP in damage, It triggers Coldheart Shock, which deals 60-200 magic damage to nearby foes and reduces their Attack Speed and Movement Speed by 30% for four seconds. Cooldown: Two seconds',
            },
        ],


        recipe: [
            MobaItemId.STEELBACK_SHIELD,
            MobaItemId.GLORIOUS_ARMOR,
        ],

        buyPrice: 2100,
        sellPrice: 1259,
    },

    {
        key: MobaItemId.LINGERING_SONG_SHIRT,
        name: 'Lingering Song Shirt',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Одеяние бессмертного.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalArmor,
                type: MobaItemStatType.Flat,
                value: 140
            },
            {
                name: MobaItemEffectName.MagicalArmor,
                type: MobaItemStatType.Flat,
                value: 140
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Resurrection: One second after dying, you revive with 30% HP. Cooldown: 180 seconds',
            },
        ],

        recipe: [
            MobaItemId.STEELBACK_SHIELD,
            MobaItemId.GLORIOUS_ARMOR,
        ],

        buyPrice: 2080,
        sellPrice: 1247,
    },

    {
        key: MobaItemId.CRIMSON_ARMOR,
        name: 'Crimson Armor',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Самурайский доспех.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 1000
            },
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 60
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Rampage: Every time tou take damage, you get one stack of a buff that increases your Movement Speed by 2% and your Damage Intensifier by 2%. Stacks up to five times. Lasts eight seconds. Has an interval 1.5-second cooldown',
            },
        ],

        recipe: [
            MobaItemId.DREAMLIKE_SHAWL,
            MobaItemId.LINEN_CLOTH,
        ],

        buyPrice: 1820,
        sellPrice: 1091,
    },

    {
        key: MobaItemId.REFINED_SLEEVES,
        name: 'Refined Sleeves',
        category: MobaItemCategory.DEFENCE,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Рукавицы имперского стража.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 800
            },
            {
                name: MobaItemEffectName.MaxMana,
                type: MobaItemStatType.Flat,
                value: 500
            },
            {
                name: MobaItemEffectName.PhysicalArmor,
                type: MobaItemStatType.Flat,
                value: 200
            },
            {
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemStatType.Percent,
                value: 10
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Winter`s Chill: After using the skill, the next normal attack within five seconds deals 170-400 bonus Physical Damage and reduces Movement Speed by 30% for three seconds. Cooldown is three seconds',
            },
        ],

        recipe: [
            MobaItemId.LINEN_CLOTH,
            MobaItemId.NETHER_SPELLBLADE,
            MobaItemId.LINEN_CLOTH,
        ],

        buyPrice: 2020,
        sellPrice: 1211,
    },
]
