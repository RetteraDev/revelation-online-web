import { MobaItemId, MobaItemCategory, MobaItemColor, MobaItemStatType, MobaItemEffectName, MobaItemSoleType, type MobaItem } from "@/data/moba/items/values";

export const PHYSICAL_GREEN_ITEMS: MobaItem[] = [
    {
        key: MobaItemId.GLOWING_SEA_GODS_SIGH,
        name: 'Glowing Sea God’s Sigh',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Страж глубин.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 60
            },
            {
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemStatType.Percent,
                value: 5
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Active,
                name: '[A] Adrenaline Peak: Reduce HP to 1 and gain immunity to all damage and control debuffs. This cannot be dispelled, and it lasts two seconds'
            },
        ],
        
        recipe: [
            MobaItemId.IRON_HALBERD,
            MobaItemId.RUSTED_SWORD,
        ],

        buyPrice: 1760,
        sellPrice: 1050,
    },

    {
        key: MobaItemId.FROST_PIKE,
        name: 'Frost Pike',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Снежинка.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 500
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
                name: '[P] Coldness: Normal attack reduces target`s Attack Speed by 30% and Movement Speed by 30% for two seconds'
            },
        ],
        
        recipe: [
            MobaItemId.IRON_HALBERD,
            MobaItemId.RUSTED_SWORD,
        ],

        buyPrice: 1980,
        sellPrice: 1187,
    },

    {
        key: MobaItemId.SKYFEATHER,
        name: 'Skyfeather',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Лук Крылатых.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 80
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
                name: '[P] Sunder: Physical Defense Break Rate +45%'
            },
        ],
        
        recipe: [
            MobaItemId.SWORD_OF_JUSTICE,
            MobaItemId.RUSTED_SWORD,
        ],

        buyPrice: 2100,
        sellPrice: 1259,
    },

    {
        key: MobaItemId.SEVEN_STAR_SWORD,
        name: 'Seven-Star Sword',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Чешуйчатый клеймор.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 100
            },
            {
                name: MobaItemEffectName.LifeSteal,
                type: MobaItemStatType.Percent,
                value: 10
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Serious Injury: Hitting an with this skill inflicts Serious Injury, which reduces their healing by 50%'
            },
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Weak Heal: Hitting a target with a normal attack triggers a Weak Heal effect that reduces healing by 50%'
            },
        ],
        
        recipe: [
            MobaItemId.SKYRAZER_BROADSWORD,
            MobaItemId.SICKLE,
        ],

        buyPrice: 1800,
        sellPrice: 1079,
    },

    {
        key: MobaItemId.DUAL_BLOODLUST_BLADES,
        name: 'Dual Bloodlust Blades',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Клинки алой мести.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 60
            },
            {
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemStatType.Percent,
                value: 30
            },
            {
                name: MobaItemEffectName.LifeSteal,
                type: MobaItemStatType.Percent,
                value: 10
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Vanquish: Normal attack deals bonus physical damage equal to 6% of the target`s current HP'
            },
        ],
        
        recipe: [
            MobaItemId.IRON_HALBERD,
            MobaItemId.QUICK_SHOOTER,
            MobaItemId.GLOVES,
        ],

        buyPrice: 2160,
        sellPrice: 1295,
    },

    {
        key: MobaItemId.WOLFBANE_TWIN_BLADES,
        name: 'Wolfbane Twin Blades',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Кровь и Слава.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 100
            },
            {
                name: MobaItemEffectName.LifeSteal,
                type: MobaItemStatType.Percent,
                value: 25
            },
        ],
        
        recipe: [
            MobaItemId.SKYRAZER_BROADSWORD,
            MobaItemId.SICKLE,
        ],

        buyPrice: 1740,
        sellPrice: 1043,
    },

    {
        key: MobaItemId.TEN_STEPS_ONE_KILL,
        name: 'Ten steps. One kill',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Лунные блики.png',

        stats: [
            {
                name: MobaItemEffectName.CritRate,
                type: MobaItemStatType.Percent,
                value: 20
            },
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 100
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Damage Overflow: Increases Crit Damage by 50%'
            },
        ],
        
        recipe: [
            MobaItemId.SKYRAZER_BROADSWORD,
            MobaItemId.RUSTED_SWORD,
            MobaItemId.CRIT_GAUNTLETS,
        ],

        buyPrice: 2140,
        sellPrice: 1283,
    },

    {
        key: MobaItemId.DRAGONS_ROAR,
        name: 'Dragon’s Roar',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Тромблоны драконьего крика.png',

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
                name: MobaItemEffectName.CritRate,
                type: MobaItemStatType.Percent,
                value: 20
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
                name: '[P] Power Strike: After using the skill, the next normal attack within five seconds deals additional Physical Damage equal to 100% Physical Bonus. The effect has a two-second cooldown'
            },
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Coldness: Normal attacks reduce target`s movement speed by 20% for four seconds.'
            },
        ],
        
        recipe: [
            MobaItemId.CLEAVER,
            MobaItemId.SKYRAZER_BROADSWORD,
            MobaItemId.NETHER_SPELLBLADE,
        ],

        buyPrice: 2460,
        sellPrice: 1475,
    },

    {
        key: MobaItemId.SPECTRAL_GEAR_AURORA,
        name: 'Spectral Gear: Aurora',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Поглощающие свет клинки.png',

        stats: [
            {
                name: MobaItemEffectName.CritRate,
                type: MobaItemStatType.Percent,
                value: 20
            },
            {
                name: MobaItemEffectName.MovementSpeed,
                type: MobaItemStatType.Percent,
                value: 5
            },
            {
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemStatType.Percent,
                value: 40
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Berserker: After a critical hit, Attack Speed is increased by 50% for five seconds'
            },
        ],
        
        recipe: [
            MobaItemId.DAGGERS,
            MobaItemId.DAGGERS_OF_FRENZY,
            MobaItemId.DAGGERS,
        ],

        buyPrice: 2070,
        sellPrice: 1241,
    },

    {
        key: MobaItemId.GREEN_TITAN_AXE,
        name: 'Green Titan Axe',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Генератор страха.png',

        stats: [
            {
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemStatType.Flat,
                value: 500
            },
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 85
            },
            {
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemStatType.Percent,
                value: 15
            },
            {
                name: MobaItemEffectName.PhysicalPierce,
                type: MobaItemStatType.Flat,
                value: 170
            },
        ],
        
        recipe: [
            MobaItemId.CLEAVER,
            MobaItemId.IRON_HALBERD,
        ],

        buyPrice: 2090,
        sellPrice: 1253,
    },

    {
        key: MobaItemId.RAVENOUS_WOLF,
        name: 'Ravenous Wolf',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Месть росомахи.png',

        stats: [
            {
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemStatType.Flat,
                value: 200
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Ravenous Wolf: When HP falls below 30%, you deal 20% more damage'
            },
        ],
        
        recipe: [
            MobaItemId.SKYRAZER_BROADSWORD,
            MobaItemId.SKYRAZER_BROADSWORD,
        ],

        buyPrice: 2950,
        sellPrice: 1769,
    },

    {
        key: MobaItemId.SPECTRAL_GEAR_STAR_STREAM,
        name: 'Spectral Gear: Star Stream',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Пульсар.png',

        stats: [
            {
                name: MobaItemEffectName.CritRate,
                type: MobaItemStatType.Percent,
                value: 20
            },
            {
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemStatType.Percent,
                value: 40
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Active,
                name: '[A] Punification: Dispel control debuffs from oneself and gain two seconds of Mercurial and 50% Damage Reduction'
            },
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Pursuit strike: Increases Normal Attack`s Physical Damage by 60'
            },
        ],
        
        recipe: [
            MobaItemId.CRIT_GAUNTLETS,
            MobaItemId.QUICK_SHOOTER,
            MobaItemId.DAGGERS,
        ],

        buyPrice: 2230,
        sellPrice: 1337,
    },

    {
        key: MobaItemId.TUNGSTEN_CHELAE,
        name: 'Tungsten Chelae',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,
        icon: '/moba/items/Легкие фалмарийские ножи.png',

        stats: [
            {
                name: MobaItemEffectName.CritRate,
                type: MobaItemStatType.Percent,
                value: 20
            },
            {
                name: MobaItemEffectName.MovementSpeed,
                type: MobaItemStatType.Percent,
                value: 8
            },
            {
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemStatType.Percent,
                value: 30
            },
        ],

        soles: [
            {
                type: MobaItemSoleType.Passive,
                name: '[P] Residual Shock: Normal attack has a 30% chance to trigger Residual Shock, dealing 100 magic to the target'
            },
        ],
        
        recipe: [
            MobaItemId.DAGGERS_OF_FRENZY,
            MobaItemId.DAGGERS,
        ],

        buyPrice: 1840,
        sellPrice: 1103,
    },
]
