export enum MobaItemSoleType {
	Active = "active-sole",
	Passive = "passive-sole",
}

export enum MobaItemSoleName {
	AdrenalinePeak = "adrenaline-peak",
	BloodlustV1 = "bloodlust-1",
	Punification = "punification",
	StarAegis = "star-aegis",

	Berserker = "berserker",
	BloodthirstV1 = "bloodthirst-1",
	BloodthirstV2 = "bloodthirst-2",
	BloodyFury = "bloody-fury",
	ButterflyWings = "butterfly-wings",
	ColdnessV1 = "coldness-1",
	ColdnessV2 = "coldness-2",
	ColdnessV3 = "coldness-3",
	CounterChomp = "counter-chomp",
	DamageOverflow = "damage-overflow",
	Destruction = "destruction",
	DivineWayV1 = "divine-way-1",
	DivineWayV2 = "divine-way-2",
	DivineWayV3 = "divine-way-3",
	ExplorerV1 = "explorer-1",
	ExplorerV2 = "explorer-2",
	IceHeart = "ice-heart",
	Ignore = "ignore",
	Legion = "legion",
	ManaRecovery = "mana-recovery",
	ManaShield = "mana-shield",
	Mark = "mark",
	Pain = "pain",
	PowerStrikeV1 = "power-strike-1",
	PowerStrikeV2 = "power-strike-2",
	PowerStrikeV3 = "power-strike-3",
	PursuitStrikeV1 = "pursuit-strike-1",
	PursuitStrikeV2 = "pursuit-strike-2",
	Rampage = "rampage",
	RavenousWolf = "ravenous-wolf",
	Recovery = "recovery",
	ResidualShock = "residual-shock",
	Resurrection = "resurrection",
	SeriousInjury = "serious-injury",
	ShatterArmor = "shatter-armor",
	Shockwave = "shockwave",
	Sunder = "sunder",
	SunscorchV1 = "sunscorch-1",
	SunscorchV2 = "sunscorch-2",
	SwordStorm = "sword-storm",
	Thorns = "thorns",
	TorpidityV1 = "torpidity-1",
	TorpidityV2 = "torpidity-2",
	YinYang = "yin-yang",
	Vanquish = "vanquish",
	WeakHeal = "weak-heal",
	WintersChill = "winters-chill",
}

export enum MobaItemStatType {
	Flat = "flat",
	Percent = "percent",
}

export enum MobaItemEffectName {
	AttackSpeed = "attack-speed",
	CritRate = "crit-rate",
	LifeSteal = "life-steal",
	PhysicalDamage = "physical-damage",
	MaxHealth = "max-hp",
	MovementSpeed = "movement-speed",
	CooldownReduction = "cooldown-reduction",
	PhysicalPierce = "physical-pierce",
	MaxMana = "max-mana",
	MagicalDamage = "magical-damage",
	MagicalPierce = "magical-pierce",
	HealthRecovery = "health-recovery",
	ManaRecovery = "mana-recovery",
	PhysicalArmor = "physical-armor",
	MagicalArmor = "magical-armor",
	PunishmentRate = "punishment-rate",
}

export interface MobaItemStat {
	name: string;
	type: MobaItemStatType;
	value: number;
}

export interface MobaItemSole {
	name: string;
	type: MobaItemSoleType;
}

export enum MobaItemColor {
	WHITE,
	GREEN,
	EXCLUSIVE,
}

export enum MobaItemCategory {
	PHYSICAL_WEAPONS = "physical",
	MAGICAL_WEAPONS = "magical",
	DEFENSE = "defense",
	OTHER = "other",
	EXCLUSIVE = "exclusive",
}

export enum MobaItemId {
	// Physical white
	RUSTED_SWORD = "rusted-sword",
	DAGGERS = "daggers",
	GLOVES = "gloves",
	SICKLE = "sickle",
	IRON_HALBERD = "iron-halberd",
	CRIT_GAUNTLETS = "crit-gauntlets",
	SKYRAZER_BROADSWORD = "skyrazer-broadsword",
	CLEAVER = "cleaver",
	DAGGERS_OF_FRENZY = "daggers-of-frenzy",
	SWORD_OF_JUSTICE = "sword-of-justice",
	QUICK_SHOOTER = "quick-shooter",

	// Physical green
	GLOWING_SEA_GODS_SIGH = "glowing-sea-gods-sigh",
	FROST_PIKE = "frost-pike",
	SKYFEATHER = "skyfeather",
	SEVEN_STAR_SWORD = "seven-star-sword",
	DUAL_BLOODLUST_BLADES = "dual-bloodlust-blades",
	WOLFBANE_TWIN_BLADES = "wolfbane-twin-blades",
	TEN_STEPS_ONE_KILL = "ten-steps-one-kill",
	DRAGONS_ROAR = "dragons-roar",
	SPECTRAL_GEAR_AURORA = "spectral-gear-aurora",
	GREEN_TITAN_AXE = "green-titan-axe",
	RAVENOUS_WOLF = "ravenous-wolf",
	SPECTRAL_GEAR_STAR_STREAM = "spectral-gear-star-stream",
	TUNGSTEN_CHELAE = "tungsten-chelae",

	// Magical white
	TEXTS = "texts",
	CHAOS_ICE = "chaos-ice",
	JADE_PENDANT = "jade-pendant",
	LAMBENT_CODEX = "lambent-codex",
	DAWNS_SPIRIT = "dawns-spirit",
	THOUSAND_MORPHS = "thousand-morphs",
	BOOK_OF_TIMES = "book-of-times",
	NETHER_SPELLBLADE = "nether-spellblade",
	SAGE_MASK = "sage-mask",
	ENMITY_CRYSTAL = "enmity-crystal",
	IMPS_BOLUS = "imps-bolus",

	// Magical green
	FLAMING_LEGION = "flaming-legion",
	CORE_OF_RUIN = "core-of-ruin",
	SPELL_PHYLACTERY = "spell-phylactery",
	THOUSAND_MORPH_STAFF = "thousand-morph-staff",
	MERRYMAKER_RING = "merrymaker-ring",
	MANA_CLAW = "mana-claw",
	BUTTERFLY_CANE = "butterfly-cane",
	MASK_OF_SILVER_AND_SHADOW = "mask-of-silver-and-shadow",
	CONCH_STAFF = "conch-staff",
	NIMBUS_CODEX = "nimbus-codex",
	DEMONHUNTER_SCROLL = "demonhunter-scroll",
	QAMARIS_CRESCENT = "quamaris-crescent",
	TREATISE_ON_POTENTIAL = "treatise-on-potential",

	// Defense white
	BLOODSOUL = "bloodsoul",
	LINEN_CLOTH = "linen-cloth",
	FAIRYTALE_HAT = "fairytale-hat",
	EXCELSIOR = "excelsior",
	ROUGH_CAP = "rough-cap",
	FLAMES_HEART = "flames-heart",
	DREAMLIKE_SHAWL = "dreamlike-shawl",
	STEELBACK_SHIELD = "steelback-shield",
	GLORIOUS_ARMOR = "glorious-armor",

	// Defense green
	VANGUARD_PAVISE = "vanguard-pavise",
	GOD_OF_WAR = "god-of-war",
	FIREWALKERS_GLOVES = "firewalkers-gloves",
	ELEMENTAL_SHADE = "elemental-shade",
	OPEN_WORLD = "open-world",
	DRAGOON = "dragoon",
	SPIRITED_FIGHTER_BUlWARK = "spirited-fighter-bulwark",
	CLOUD_SMOKE = "cloud-smoke",
	RAIMENT_OF_DARKNESS = "raiment-of-darkness",
	COLD_HEART = "cold-heart",
	LINGERING_SONG_SHIRT = "lingering-song-shirt",
	CRIMSON_ARMOR = "crimson-armor",
	REFINED_SLEEVES = "refined-sleeves",

	// Others (boots)
	NOVITIATES_SHOES = "novitiates-shoes",
	GLORIOUS_WAR_BOOTS = "glorious-war-boots",
	TRUE_VOYAGERS_SHOES = "true-voyagers-shoes",
	LETHAL_GRASP_WADERS = "lethal-grasp-waders",
	CELESTIAL_PATIENCE_WADERS = "celestial-patience-waders",
	ADVENTURERS_WAR_BOOTS = "adventurers-war-boots",
	BREEZE_SANDALS = "breeze-sandals",

	// Others (XP)
	NOVITIATES_HALBERD = "novitiates-halberd",
	MERCILESS_BROADSWORD = "merciless-broadsword",
	RAGING_APE_BATTLEAXE = "raging-ape-battleaxe",
	PROUDLIGHT_AXE = "proudlight-axe",
	BROADSWORD_OF_CHRYSOS = "broadsword-of-chrysos",
	AXE_OF_THE_HEADLESS_WARRIOR = "axe-of-the-headless-warrior",
	WORLD_BREAKER = "world-breaker",

	// Others (Consumables)
	RECOVERY_POTION = "recovery-potion",
	BERSERKERS_CONCOCTION = "berserkers-concoction",
	ARCANE_CONCOCTION = "arcane-concoction",

	// Exclusive
	TWIN_BLADES = "twin-blades",
	BUTTERFLY_WINGS = "butterfly-wings",
}

export interface MobaItem {
	key: MobaItemId;
	category: MobaItemCategory;
	color: MobaItemColor;
	icon: string;

	stats?: MobaItemStat[]; // Белые характеристики
	soles?: MobaItemSole[]; // Активные / пассивные уникальные умения
	recipe?: MobaItemId[]; // Из чего создаётся
	buildsInto?: MobaItemId[]; // Во что превращается

	buyPrice: number;
	sellPrice: number;
}
