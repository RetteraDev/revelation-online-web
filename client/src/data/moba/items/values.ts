export enum MobaItemEffectColor {
    Usual,
    ActiveUnique,
    PassiveUnique,
}

export enum MobaItemEffectType {
    Flat,
    Percent,
}

export enum MobaItemEffectName {
    AttackSpeed = 'Boost Normal Attack Speed',
    CritRate = 'Crit Rate',
    LifeSteal = 'Normal Attack Siphon',
    PhysicalDamage = 'Physical Damage',
    MaxHealth = 'Maximum HP',
    MovementSpeed = 'Movement Speed',
    CooldownReduction = 'Cooldown Reduction',
    PhysicalPierce = 'Physical Pierce',
    MaxMana = 'Maximum Mana',
    MagicalDamage = 'Magical Damage',
    MagicalPierce = 'Magical Pierce',
    ManaRecovery = 'Mana Recovery',
    MagicalArmor = 'Magical Armor',
}

export interface MobaItemEffect {
    color: MobaItemEffectColor,
    name: string
    type?: MobaItemEffectType,
    value?: number
}

export enum MobaItemColor {
    WHITE,
    GREEN,
    EXCLUSIVE
}

export enum MobaItemCategory {
    PHYSICAL_WEAPONS,
    MAGICAL_WEAPONS,
    DEFENCE,
    OTHERS,
    EXCLUSIVE,
}

export const ITEM_IDS = {
    // Physical white
    RUSTED_SWORD: 'rusted-sword',
    DAGGERS: 'daggers',
    GLOVES: 'gloves',
    SICKLE: 'sickle',
    IRON_HALBERD: 'iron-halberd',
    CRIT_GAUNTLETS: 'crit-gauntlets',
    SKYRAZER_BROADSWORD: 'skyrazer-broadsword',
    CLEAVER: 'cleaver',
    DAGGERS_OF_FRENZY: 'daggers-of-frenzy',
    SWORD_OF_JUSTICE: 'sword-of-justice',
    QUICK_SHOOTER: 'quick-shooter',

    // Physical green
    GLOWING_SEA_GODS_SIGH: 'glowing-sea-gods-sigh',
    FROST_PIKE: 'frost-pike',
    SKYFEATHER: 'skyfeather',
    SEVEN_STAR_SWORD: 'seven-star-sword',
    DUAL_BLOODLUST_BLADES: 'dual-bloodlust_blades',
    WOLFBANE_TWIN_BLADES: 'wolfbane-twin-blades',
    TEN_STEPS_ONE_KILL: 'ten-steps-one-kill',
    DRAGONS_ROAR: 'dragons-roar',
    SPECTRAL_GEAR_AURORA: 'spectral-gear-aurora',
    GREEN_TITAN_AXE: 'green-titan-axe',
    RAVENOUS_WOLF: 'ravenous-wolf',
    SPECTRAL_GEAR_STAR_STREAM: 'spectral-gear-star-stream',
    TUNGSTEN_CHELAE: 'tungsten-chelae',

    // Magical white
    TEXTS: 'texts',
    CHAOS_ICE: 'chaos-ice',
    JADE_PENDANT: 'jade-pendant',
    LAMBENT_CODEX: 'lambent-codex',
    DAWNS_SPIRIT: 'dawns-spirit',
    THOUSAND_MORPHS: 'thousand-morphs',
    BOOK_OF_TIMES: 'book-of-times',
    NETHER_SPELLBLADE: 'nether-spellblade',
    SAGE_MASK: 'sage-mask',
    ENMITY_CRYSTAL: 'enmity-crystal',
    IMPS_BOLUS: 'imps-bolus',    

    // Magical green
    FLAMING_LEGION: 'flaming-legion',
    CORE_OF_RUIN: 'core-of-ruin',
    SPELL_PHYLACTERY: 'spell-phylactery',
    THOUSAND_MORPH_STAFF: 'thousand-morph-staff',
    MERRYMAKER_RING: 'merrymaker-ring',
    MANA_CLAW: 'mana-claw',
    BUTTERFLY_CANE: 'butterfly-cane',
    MASK_OF_SILVER_AND_SHADOW: 'mask-of-silver-and-shadow',
    CONCH_STAFF: 'conch-staff',
    NIMBUS_CODEX: 'nimbus-codex',
    DEMONHUNTER_SCROLL: 'demonhunter-scroll',
    QAMARIS_CRESCENT: 'quamaris-crescent',
    TREATISE_ON_POTENTIAL: 'treatise-on-potential',

    // Defence white
    BLOODSOUL: 'bloodsoul',
    LINEN_CLOTH: 'linen-cloth',
    FAIRYTALE_HAT: 'fairytale-hat',
    EXCELSIOR: 'excelsior',
    ROUGH_CAP: 'rough-cap',
    FLAMES_HEART: 'flames-heart',
    DREAMLIKE_SHAWL: 'dreamlike-shadow',
    STEELBACK_SHIELD: 'steelback-shield',
    GLORIOUS_ARMOR: 'glorious-armor',

    // Defence green
    VANGUARD_PAVISE: 'vanguard-pavise',
    GOD_OF_WAR: 'god-of-war',
    FIREWALKERS_GLOVES: 'firewalkers-gloves',
    ELEMENTAL_SHADE: 'elemental-shade',
    OPEN_WORLD: 'open-world',
    DRAGOON: 'dragoon',
    SPIRITED_FIGHTER_BUlWARK: 'spirited-fighter-bulwark',
    CLOUD_SMOKE: 'cloud-smoke',
    RAIMENT_OF_DARKNESS: 'raiment-of-darkness',
    COLD_HEART: 'cold-heart',
    LINGERING_SONG_SHIRT: 'lingering-song-shirt',
    CRIMSON_ARMOR: 'crimson-armor',
    REFINED_SLEEVES: 'refined-sleeves',

    // Others (boots)
    NOVITIATES_SHOES: 'novitiates-shoes',
    GLORIOUS_WAR_BOOTS: 'glorious-war-boots',
    TRUE_VOYAGERS_SHOES: 'true-voyagers-shoes',
    LETHAL_GRASP_WADERS: 'lethal-grasp-waders',
    CELESTIAL_PATIENCE_WADERS: 'celestial-patience-waders',
    ADVENTURERS_WAR_BOOTS: 'adventurers-war-boots',
    BREEZE_SANDALS: 'breeze-sandals',

    // Others (XP)
    NOVITIATES_HALBERD: 'novitiates-halberd',
    MERCILESS_BROADSWORD: 'merciless-broadsword',
    RAGING_APE_BATTLEAXE: 'raging-ape-battleaxe',
    PROUDLIGHT_AXE: 'proudlight-axe',
    BROADSWORD_OF_CHRYSOS: 'broadsword-of-chrysos',
    AXE_OF_THE_HEADLESS_WARRIOR: 'axe-of-the-headless-warrior',
    WORLD_BREAKER: 'world-breaker',

    // Others (Consumables)
    RECOVERY_POTION: 'recovery-potion',
    BERSERKERS_CONCOCTION: 'berserkers-concoction',
    ARCANE_CONCOCTION: 'arcane-concoction',
}

export interface MobaItem {
    key: string,
    name: string,
    category: MobaItemCategory,
    color: MobaItemColor,
    icon?: string,

    effects: MobaItemEffect[]
    recipe?: string[]

    buyPrice: number,
    sellPrice: number,
}
