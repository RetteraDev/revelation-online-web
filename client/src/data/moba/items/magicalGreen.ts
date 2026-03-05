import { ITEM_IDS, MobaItemCategory, MobaItemColor, MobaItemEffectColor, MobaItemEffectName, MobaItemEffectType, type MobaItem } from "@/data/moba/items/values";

export const MAGICAL_GREEN_ITEMS: MobaItem[] = [
    {
        key: ITEM_IDS.FLAMING_LEGION,
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
            ITEM_IDS.THOUSAND_MORPHS,
            ITEM_IDS.JADE_PENDANT,
            ITEM_IDS.CHAOS_ICE,
        ],

        buyPrice: 1950,
        sellPrice: 1169,
    },

    {
        key: ITEM_IDS.CORE_OF_RUIN,
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
            ITEM_IDS.THOUSAND_MORPHS,
            ITEM_IDS.DAWNS_SPIRIT,
        ],

        buyPrice: 2050,
        sellPrice: 1229,
    },

    {
        key: ITEM_IDS.SPELL_PHYLACTERY,
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
            ITEM_IDS.LAMBENT_CODEX,
            ITEM_IDS.IMPS_BOLUS,
            ITEM_IDS.TEXTS
        ],

        buyPrice: 2030,
        sellPrice: 1217,
    },

    {
        key: ITEM_IDS.THOUSAND_MORPH_STAFF,
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
            ITEM_IDS.SAGE_MASK,
            ITEM_IDS.DAWNS_SPIRIT,
        ],

        buyPrice: 2110,
        sellPrice: 1265,
    },

    {
        key: ITEM_IDS.MERRYMAKER_RING,
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
            ITEM_IDS.THOUSAND_MORPHS,
            ITEM_IDS.TEXTS,
            ITEM_IDS.TEXTS,
        ],

        buyPrice: 2300,
        sellPrice: 1379,
    },

    {
        key: ITEM_IDS.MANA_CLAW,
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
            ITEM_IDS.THOUSAND_MORPHS,
            ITEM_IDS.TEXTS,
        ],

        buyPrice: 2100,
        sellPrice: 1259,
    },

    {
        key: ITEM_IDS.BUTTERFLY_CANE,
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
            ITEM_IDS.ROUGH_CAP,
            ITEM_IDS.THOUSAND_MORPHS,
        ],

        buyPrice: 2100,
        sellPrice: 1259,
    },

    {
        key: ITEM_IDS.MASK_OF_SILVER_AND_SHADOW,
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
            ITEM_IDS.SAGE_MASK,
            ITEM_IDS.TEXTS,
        ],

        buyPrice: 2040,
        sellPrice: 1223,
    },

    {
        key: ITEM_IDS.CONCH_STAFF,
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
            ITEM_IDS.NETHER_SPELLBLADE,
            ITEM_IDS.TEXTS,
        ],

        buyPrice: 2120,
        sellPrice: 1271,
    },

    {
        key: ITEM_IDS.NIMBUS_CODEX,
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
            ITEM_IDS.ENMITY_CRYSTAL,
            ITEM_IDS.THOUSAND_MORPHS,
        ],

        buyPrice: 2090,
        sellPrice: 1253,
    },

    {
        key: ITEM_IDS.DEMONHUNTER_SCROLL,
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
            ITEM_IDS.THOUSAND_MORPHS,
            ITEM_IDS.THOUSAND_MORPHS,
        ],

        buyPrice: 2990,
        sellPrice: 1793,
    },

    {
        key: ITEM_IDS.QAMARIS_CRESCENT,
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
            ITEM_IDS.THOUSAND_MORPHS,
            ITEM_IDS.LAMBENT_CODEX,
        ],

        buyPrice: 1990,
        sellPrice: 1193,
    },

    {
        key: ITEM_IDS.TREATISE_ON_POTENTIAL,
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
            ITEM_IDS.BLOODSOUL,
            ITEM_IDS.BOOK_OF_TIMES,
            ITEM_IDS.TEXTS,
        ],

        buyPrice: 2090,
        sellPrice: 1253,
    },
]
