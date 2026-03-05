import { MobaItemId, MobaItemCategory, MobaItemColor, MobaItemEffectColor, MobaItemEffectName, MobaItemEffectType, type MobaItem } from "@/data/moba/items/values";

export const MAGICAL_GREEN_ITEMS: MobaItem[] = [
    {
        key: MobaItemId.FLAMING_LEGION,
        name: 'Flaming Legion',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.GREEN,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 160
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.ManaRecovery,
                type: MobaItemEffectType.Flat,
                value: 3
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Mana Recovery: Mana Recovery +30',
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Mana Shield: When HP falls below 50%, being attacked will provide a shield that absorbs 1,500 (+50% Magic Bonus) damage for eight seconds. The effect has a 90-seconds cooldown',
            },
        ],
        
        recipe: [
            MobaItemId.THOUSAND_MORPHS,
            MobaItemId.JADE_PENDANT,
            MobaItemId.CHAOS_ICE,
        ],

        buyPrice: 1950,
        sellPrice: 1169,
    },

    {
        key: MobaItemId.CORE_OF_RUIN,
        name: 'Core of Ruin',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.GREEN,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 240
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MovementSpeed,
                type: MobaItemEffectType.Percent,
                value: 5
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Serious Injury: Hitting an with this skill inflicts Serious Injury, which reduces their healing by 50%',
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Weak Heal: Hitting a target with a normal attack triggers a Weak Heal effect that reduces healing by 50%',
            },
        ],
        
        recipe: [
            MobaItemId.THOUSAND_MORPHS,
            MobaItemId.DAWNS_SPIRIT,
        ],

        buyPrice: 2050,
        sellPrice: 1229,
    },

    {
        key: MobaItemId.SPELL_PHYLACTERY,
        name: 'Spell Phylactery',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.GREEN,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalArmor,
                type: MobaItemEffectType.Flat,
                value: 140
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 140
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.ManaRecovery,
                type: MobaItemEffectType.Flat,
                value: 4
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemEffectType.Percent,
                value: 20
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Mana Recovery: Mana Recovery +30',
            },
        ],
        
        recipe: [
            MobaItemId.LAMBENT_CODEX,
            MobaItemId.IMPS_BOLUS,
            MobaItemId.TEXTS
        ],

        buyPrice: 2030,
        sellPrice: 1217,
    },

    {
        key: MobaItemId.THOUSAND_MORPH_STAFF,
        name: 'Thousand Morph Staff',
        category: MobaItemCategory.MAGICAL_WEAPONS,
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
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 180
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Ignore: Magic Defense Break Rate +45%',
            },
        ],
        
        recipe: [
            MobaItemId.SAGE_MASK,
            MobaItemId.DAWNS_SPIRIT,
        ],

        buyPrice: 2110,
        sellPrice: 1265,
    },

    {
        key: MobaItemId.MERRYMAKER_RING,
        name: 'Merrymaker Ring',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.GREEN,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 240
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Destruction: Magic Damage Insensifier +35%',
            },
        ],
        
        recipe: [
            MobaItemId.THOUSAND_MORPHS,
            MobaItemId.TEXTS,
            MobaItemId.TEXTS,
        ],

        buyPrice: 2300,
        sellPrice: 1379,
    },

    {
        key: MobaItemId.MANA_CLAW,
        name: 'Mana Claw',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.GREEN,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 240
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MovementSpeed,
                type: MobaItemEffectType.Percent,
                value: 7
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Shockwave: When skill hits the target, deals Magic Damage equal to 50 (+50% magic bonus). Cooldown if four seconds',
            },
        ],
        
        recipe: [
            MobaItemId.THOUSAND_MORPHS,
            MobaItemId.TEXTS,
        ],

        buyPrice: 2100,
        sellPrice: 1259,
    },

    {
        key: MobaItemId.BUTTERFLY_CANE,
        name: 'Butterfly Cane',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.GREEN,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemEffectType.Flat,
                value: 1050
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 150
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Coldness: When skill hits an enemy target, its Attack Speed is reduced by 30% and its Movement Speed is reduced by 30% for two seconds',
            },
        ],
        
        recipe: [
            MobaItemId.ROUGH_CAP,
            MobaItemId.THOUSAND_MORPHS,
        ],

        buyPrice: 2100,
        sellPrice: 1259,
    },

    {
        key: MobaItemId.MASK_OF_SILVER_AND_SHADOW,
        name: 'Mask of Silver and Shadow',
        category: MobaItemCategory.MAGICAL_WEAPONS,
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
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 140
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemEffectType.Percent,
                value: 5
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalPierce,
                type: MobaItemEffectType.Flat,
                value: 75
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Pain: Damage skills now deal bonus Magic Damage equal to 6% of current HP. Cooldown is three seconds',
            },
        ],
        
        recipe: [
            MobaItemId.SAGE_MASK,
            MobaItemId.TEXTS,
        ],

        buyPrice: 2040,
        sellPrice: 1223,
    },

    {
        key: MobaItemId.CONCH_STAFF,
        name: 'Conch Staff',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.GREEN,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemEffectType.Flat,
                value: 300
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxMana,
                type: MobaItemEffectType.Flat,
                value: 300
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 120
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MovementSpeed,
                type: MobaItemEffectType.Percent,
                value: 8
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Bloodthirst: Leech +5% Stacks with Magic Skill Leech',
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Power Strike: After using the skill, the next normal attack within five seconds deals additional Magic Damage equal to 30% Physical Damage (+65% Magic Bonus). The effect has a two-second cooldown',
            },
        ],
        
        recipe: [
            MobaItemId.NETHER_SPELLBLADE,
            MobaItemId.TEXTS,
        ],

        buyPrice: 2120,
        sellPrice: 1271,
    },

    {
        key: MobaItemId.NIMBUS_CODEX,
        name: 'Nimbus Codex',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.GREEN,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxHealth,
                type: MobaItemEffectType.Flat,
                value: 800
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MaxMana,
                type: MobaItemEffectType.Flat,
                value: 600
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 160
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Mana Recovery: Mana Recovery +30',
            },
        ],
        
        recipe: [
            MobaItemId.ENMITY_CRYSTAL,
            MobaItemId.THOUSAND_MORPHS,
        ],

        buyPrice: 2090,
        sellPrice: 1253,
    },

    {
        key: MobaItemId.DEMONHUNTER_SCROLL,
        name: 'Demonhunter Scroll',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.GREEN,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 400
            },
            {
                color: MobaItemEffectColor.PassiveUnique,
                name: '[P] Mark: Increases HP by 1400',
            },
        ],
        
        recipe: [
            MobaItemId.THOUSAND_MORPHS,
            MobaItemId.THOUSAND_MORPHS,
        ],

        buyPrice: 2990,
        sellPrice: 1793,
    },

    {
        key: MobaItemId.QAMARIS_CRESCENT,
        name: 'Qamrai’s Cresent',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.GREEN,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 160
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemEffectType.Percent,
                value: 10
            },
            {
                color: MobaItemEffectColor.ActiveUnique,
                name: '[A] Star Aegis: Become unable to move or use skills, but hain immunity to all attack damage or debuffs for three seconds. Cannot be dispelled',
            },
        ],
        
        recipe: [
            MobaItemId.THOUSAND_MORPHS,
            MobaItemId.LAMBENT_CODEX,
        ],

        buyPrice: 1990,
        sellPrice: 1193,
    },

    {
        key: MobaItemId.TREATISE_ON_POTENTIAL,
        name: 'Treatise on Potential',
        category: MobaItemCategory.MAGICAL_WEAPONS,
        color: MobaItemColor.GREEN,

        effects: [
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.MagicalDamage,
                type: MobaItemEffectType.Flat,
                value: 180
            },
            {
                color: MobaItemEffectColor.Usual,
                name: MobaItemEffectName.CooldownReduction,
                type: MobaItemEffectType.Percent,
                value: 10
            },
            {
                color: MobaItemEffectColor.ActiveUnique,
                name: '[A] Bloodlust: Magic Skill Leech +15%',
            },
        ],
        
        recipe: [
            MobaItemId.BLOODSOUL,
            MobaItemId.BOOK_OF_TIMES,
            MobaItemId.TEXTS,
        ],

        buyPrice: 2090,
        sellPrice: 1253,
    },
]
