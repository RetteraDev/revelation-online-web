import { MobaItemId, MobaItemCategory, MobaItemColor, MobaItemEffectColor, MobaItemEffectName, MobaItemEffectType, type MobaItem } from "@/data/moba/items/values";

export const PHYSICAL_GREEN_ITEMS: MobaItem[] = [
    {
        key: MobaItemId.GLOWING_SEA_GODS_SIGH,
        name: 'Glowing Sea God’s Sigh',
        category: MobaItemCategory.PHYSICAL_WEAPONS,
        color: MobaItemColor.GREEN,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemEffectType.Flat,
                value: 60
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemEffectType.Percent,
                value: 5
            },
            {
                color: MobaItemEffectColor.ActiveUnique,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemEffectType.Flat,
                value: 500
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemEffectType.Flat,
                value: 60
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemEffectType.Flat,
                value: 80
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemEffectType.Percent,
                value: 10
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemEffectType.Flat,
                value: 100
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.LifeSteal,
                type: MobaItemEffectType.Percent,
                value: 10
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Serious Injury: Hitting an with this skill inflicts Serious Injury, which reduces their healing by 50%'
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemEffectType.Flat,
                value: 60
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemEffectType.Percent,
                value: 30
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.LifeSteal,
                type: MobaItemEffectType.Percent,
                value: 10
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemEffectType.Flat,
                value: 100
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.LifeSteal,
                type: MobaItemEffectType.Percent,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CritRate,
                type: MobaItemEffectType.Percent,
                value: 20
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemEffectType.Flat,
                value: 100
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemEffectType.Flat,
                value: 400
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxMana,
                type: MobaItemEffectType.Flat,
                value: 400
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CritRate,
                type: MobaItemEffectType.Percent,
                value: 20
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemEffectType.Flat,
                value: 60
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Power Strike: After using the skill, the next normal attack within five seconds deals additional Physical Damage equal to 100% Physical Bonus. The effect has a two-second cooldown'
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CritRate,
                type: MobaItemEffectType.Percent,
                value: 20
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
                value: 40
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemEffectType.Flat,
                value: 500
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemEffectType.Flat,
                value: 85
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemEffectType.Percent,
                value: 15
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalPierce,
                type: MobaItemEffectType.Flat,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.PhysicalDamage,
                type: MobaItemEffectType.Flat,
                value: 200
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CritRate,
                type: MobaItemEffectType.Percent,
                value: 20
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemEffectType.Percent,
                value: 40
            },
            {
                color: MobaItemEffectColor.ActiveUnique,
                name: '[A] Punification: Dispel control debuffs from oneself and gain two seconds of Mercurial and 50% Damage Reduction'
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
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

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CritRate,
                type: MobaItemEffectType.Percent,
                value: 20
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MovementSpeed,
                type: MobaItemEffectType.Percent,
                value: 8
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.AttackSpeed,
                type: MobaItemEffectType.Percent,
                value: 30
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
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
