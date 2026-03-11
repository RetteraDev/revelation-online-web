export interface MobaSkill {
	key: MobaSkillId;
	type: MobaSkillType;
	button: MobaSkillButton;
	image?: string;
	preview?: string;
}

export enum MobaSkillId {
	// Spider Queen
	SPIDER_QUEEN_SPIDER_POISON = "spider-queen-spider-poison",
	SPIDER_QUEEN_LIVING_PROJECTILE = "spider-queen-living-projectile",
	SPIDER_QUEEN_SPIDER_LEAP = "spider-queen-spider-leap",
	SPIDER_QUEEN_ROYAL_WEB = "spider-queen-royal-web",
	SPIDER_QUEEN_PHANTOM_SPIDERS = "spider-queen-phantom-spiders",

	// Intu
	INTU_PRIESTS_CURSE = "intu-priests-curse",
	INTU_DARK_VORTEX = "intu-dark-vortex",
	INTU_ICY_PALM = "intu-icy-palm",
	INTU_ENERGY_SHIELD = "intu-energy-shield",
	INTU_SEAL_OF_DEPTHS = "intu-seal-of-depths",

	// Madu
	MADU_ELEMENT_OF_SURPRISE = "madu-element-of-surprise",
	MADU_STRONG_ALCOHOL = "madu-strong-alcohol",
	MADU_PHILOSOPHICAL_MUSINGS = "madu-philosophical-musings",
	MADU_DRUNKEN_MASTER = "madu-drunken-master",
	MADU_EXPLOSIVE_COCKTAIL = "madu-explosive-cocktail",

	// Black Morphida
	BLACK_MORPHIDA_POWER_FLOW = "black-morphida-power-flow",
	BLACK_MORPHIDA_DECISIVE_MEASURES = "black-morphida-decisive-measures",
	BLACK_MORPHIDA_DARK_WINGS = "black-morphida-dark-wings",
	BLACK_MORPHIDA_BUTTERFLY_WINGS = "black-morphida-butterfly-wings",
	BLACK_MORPHIDA_BLADE_DANCE = "black-morphida-blade-dance",

	// White Morphida
	WHITE_MORPHIDA_COCOON = "white-morphida-cocoon",
	WHITE_MORPHIDA_STARS_FROM_EYES = "white-morphida-stars-from-eyes",
	WHITE_MORPHIDA_SILENCE_IS_GOLDEN = "white-morphida-silence-is-golden",
	WHITE_MORPHIDA_POWER_OF_TREE = "white-morphida-power-of-tree",
	WHITE_MORPHIDA_HEALING = "white-morphida-healing",

	// Perfect Morphida
	PERFECT_MORPHIDA_WEAK_LINK = "perfect-morphida-weak-link",
	PERFECT_MORPHIDA_CRUSHING_DASH = "perfect-morphida-crushing-dash",
	PERFECT_MORPHIDA_COCOON = "perfect-morphida-cocoon",
	PERFECT_MORPHIDA_BUTTERFLY_LIGHTNESS = "perfect-morphida-butterfly-lightness",
	PERFECT_MORPHIDA_DEADLY_FLOURISH = "perfect-morphida-deadly-flourish",

	// Azaghal
	AZAGHAL_SECOND_WIND = "azaghal-second-wind",
	AZAGHAL_CRUSHING_BLOW = "azaghal-crushing-blow",
	AZAGHAL_HEAD_ON = "azaghal-head-on",
	AZAGHAL_TRIUMPHANT_ROAR = "azaghal-triumphant-roar",
	AZAGHAL_BARRICADE = "azaghal-barricade",

	// Lunnitsa
	LUNNITSA_LUNAR_RIPPLE = "lunnitsa-lunar-ripple",
	LUNNITSA_SPRING_BLOSSOM = "lunnitsa-spring-blossom",
	LUNNITSA_LUNAR_SICKLE = "lunnitsa-lunar-sickle",
	LUNNITSA_TIDES = "lunnitsa-tides",
	LUNNITSA_DARK_SIDE_OF_MOON = "lunnitsa-dark-side-of-moon",

	// Doctor Mechatron
	DOCTOR_MECHATRON_ACCUMULATOR = "doctor-mechatron-accumulator",
	DOCTOR_MECHATRON_PULSE_SWORD = "doctor-mechatron-pulse-sword",
	DOCTOR_MECHATRON_RECOIL_SHOT = "doctor-mechatron-recoil-shot",
	DOCTOR_MECHATRON_MECHANICAL_TRAP = "doctor-mechatron-mechanical-trap",
	DOCTOR_MECHATRON_BALLISTIC_MISSILES = "doctor-mechatron-ballistic-missiles",

	// Lucy
	LUCY_PERPETUAL_ENGINE = "lucy-perpetual-engine",
	LUCY_CRYSTAL_LATTICE = "lucy-crystal-lattice",
	LUCY_LASER_BEAM = "lucy-laser-beam",
	LUCY_MATRIX = "lucy-matrix",
	LUCY_MAGNETIC_STORM = "lucy-magnetic-storm",

	// Kaibuli
	KAIBULI_ACID = "kaibuli-acid",
	KAIBULI_SWEEPING_STRIKE = "kaibuli-sweeping-strike",
	KAIBULI_JAGGED_HOOK = "kaibuli-jagged-hook",
	KAIBULI_TOSS_UP = "kaibuli-toss-up",
	KAIBULI_CIRCULAR_STRIKE = "kaibuli-circular-strike",

	// Ness
	NESS_KEEN_EYE = "ness-keen-eye",
	NESS_AIMED_SHOT = "ness-aimed-shot",
	NESS_LIBERATION = "ness-liberation",
	NESS_PHANTOM_ARROWS = "ness-phantom-arrows",
	NESS_WILD_GALLOP = "ness-wild-gallop",

	// Mara
	MARA_SWIFTNESS = "mara-swiftness",
	MARA_ICE_ARROW = "mara-ice-arrow",
	MARA_ICE_FAN = "mara-ice-fan",
	MARA_ICY_SHACKLES = "mara-icy-shackles",
	MARA_HAIL_OF_ARROWS = "mara-hail-of-arrows",

	// Roan
	ROAN_HUNT = "roan-hunt",
	ROAN_ARCHERS_FURY = "roan-archers-fury",
	ROAN_COMBAT_READINESS = "roan-combat-readiness",
	ROAN_RETRIBUTION = "roan-retribution",
	ROAN_RAPID_FIRE = "roan-rapid-fire",

	// Merit
	MERIT_KUROMI_SHIELD = "merit-kuromi-shield",
	MERIT_FREEZING = "merit-freezing",
	MERIT_ICE_BLOCK = "merit-ice-block",
	MERIT_GODDESS_GIFT = "merit-goddess-gift",
	MERIT_ICE_RAIN = "merit-ice-rain",

	// Jinren
	JINREN_FIRE_SPIRIT = "jinren-fire-spirit",
	JINREN_FIREBALL = "jinren-fireball",
	JINREN_FLAME_ONSLAUGHT = "jinren-flame-onslaught",
	JINREN_ENLIGHTENMENT = "jinren-enlightenment",
	JINREN_FAN_OF_BLADES = "jinren-fan-of-blades",

	// General Sage
	GENERAL_SAGE_FEAT = "general-sage-feat",
	GENERAL_SAGE_CIRCULAR_STRIKE = "general-sage-circular-strike",
	GENERAL_SAGE_THUNDER_PEAL = "general-sage-thunder-peal",
	GENERAL_SAGE_HEROIC_LEAP = "general-sage-heroic-leap",
	GENERAL_SAGE_INSPIRING_SHOUT = "general-sage-inspiring-shout",

	// Yasmina
	YASMINA_BACKSTAB = "yasmina-backstab",
	YASMINA_PIERCING_WOUND = "yasmina-piercing-wound",
	YASMINA_PHANTOM_STEP = "yasmina-phantom-step",
	YASMINA_SHADOW_MARK = "yasmina-shadow-mark",
	YASMINA_INVISIBILITY = "yasmina-invisibility",

	// Albioka
	ALBIOKA_DRAGONFLY = "albioka-dragonfly",
	ALBIOKA_JAY_SPIRIT = "albioka-jay-spirit",
	ALBIOKA_WREN_SHIELD = "albioka-wren-shield",
	ALBIOKA_EAGLE_SPIRIT = "albioka-eagle-spirit",
	ALBIOKA_SPRING_SHOWER = "albioka-spring-shower",

	// Commander Jet
	COMMANDER_JET_ORDER_FURY = "commander-jet-order-fury",
	COMMANDER_JET_LIGHT_BLADE = "commander-jet-light-blade",
	COMMANDER_JET_SIGNATURE_STRIKE = "commander-jet-signature-strike",
	COMMANDER_JET_BATTLE_CRY = "commander-jet-battle-cry",
	COMMANDER_JET_BARE_HEART = "commander-jet-bare-heart",
}

export enum MobaSkillButton {
	NONE = "",
	Q = "Q",
	E = "E",
	R = "R",
	T = "T",
}

export enum MobaSkillType {
	ACTIVE = "active",
	PASSIVE = "passive",
}

export interface MobaHero {
	key: MobaHeroId;
	name: string;
	image?: string;
	skills: Array<MobaSkill>;
}

export enum MobaHeroId {
	SPIDER_QUEEN = "spider-queen",
	INTU = "intu",
	MADU = "madu",
	BLACK_MORPHIDA = "black-morphida",
	WHITE_MORPHIDA = "white-morphida",
	PERFECT_MORPHIDA = "perfect-morphida",
	AZAGHAL = "azaghal",
	LUNNITSA = "lunnitsa",
	DOCTOR_MECHATRON = "doctor-mechatron",
	LUCY = "lucy",
	KAIBULI = "kaibuli",
	NESS = "ness",
	MARA = "mara",
	ROAN = "roan",
	MERIT = "merit",
	JINREN = "jinren",
	GENERAL_SAGE = "general-sage",
	YASMINA = "yasmina",
	ALBIOKA = "albioka",
	COMMANDER_JET = "commander-jet",
}

export const HEROES: Array<MobaHero> = [
	{
		key: MobaHeroId.SPIDER_QUEEN,
		name: "Королева пауков",
		image: "/moba/heroes/spider-queen/photo.png",
		skills: [
			{
				key: MobaSkillId.SPIDER_QUEEN_SPIDER_POISON,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/spider-queen/skill-passive.png",
			},
			{
				key: MobaSkillId.SPIDER_QUEEN_LIVING_PROJECTILE,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/spider-queen/skill-q.png",
				preview: "/moba/heroes/spider-queen/skill-q.mp4",
			},
			{
				key: MobaSkillId.SPIDER_QUEEN_SPIDER_LEAP,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/spider-queen/skill-e.png",
				preview: "/moba/heroes/spider-queen/skill-e.mp4",
			},
			{
				key: MobaSkillId.SPIDER_QUEEN_ROYAL_WEB,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/spider-queen/skill-r.png",
				preview: "/moba/heroes/spider-queen/skill-r.mp4",
			},
			{
				key: MobaSkillId.SPIDER_QUEEN_PHANTOM_SPIDERS,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/spider-queen/skill-t.png",
				preview: "/moba/heroes/spider-queen/skill-t.mp4",
			},
		],
	},
	{
		key: MobaHeroId.INTU,
		name: "Инту",
		image: "/moba/heroes/intu/photo.png",
		skills: [
			{
				key: MobaSkillId.INTU_PRIESTS_CURSE,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/intu/skill-passive.png",
			},
			{
				key: MobaSkillId.INTU_DARK_VORTEX,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/intu/skill-q.png",
			},
			{
				key: MobaSkillId.INTU_ICY_PALM,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/intu/skill-e.png",
			},
			{
				key: MobaSkillId.INTU_ENERGY_SHIELD,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/intu/skill-r.png",
			},
			{
				key: MobaSkillId.INTU_SEAL_OF_DEPTHS,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/intu/skill-t.png",
			},
		],
	},
	{
		key: MobaHeroId.MADU,
		name: "Маду",
		image: "/moba/heroes/madu/photo.png",
		skills: [
			{
				key: MobaSkillId.MADU_ELEMENT_OF_SURPRISE,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/madu/skill-passive.png",
			},
			{
				key: MobaSkillId.MADU_STRONG_ALCOHOL,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/madu/skill-q.png",
			},
			{
				key: MobaSkillId.MADU_PHILOSOPHICAL_MUSINGS,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/madu/skill-e.png",
			},
			{
				key: MobaSkillId.MADU_DRUNKEN_MASTER,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/madu/skill-r.png",
			},
			{
				key: MobaSkillId.MADU_EXPLOSIVE_COCKTAIL,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/madu/skill-t.png",
			},
		],
	},
	{
		key: MobaHeroId.BLACK_MORPHIDA,
		name: "Чёрная морфида",
		image: "/moba/heroes/black-morphida/photo.png",
		skills: [
			{
				key: MobaSkillId.BLACK_MORPHIDA_POWER_FLOW,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/black-morphida/skill-passive.png",
			},
			{
				key: MobaSkillId.BLACK_MORPHIDA_DECISIVE_MEASURES,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/black-morphida/skill-q.png",
			},
			{
				key: MobaSkillId.BLACK_MORPHIDA_DARK_WINGS,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/black-morphida/skill-e.png",
			},
			{
				key: MobaSkillId.BLACK_MORPHIDA_BUTTERFLY_WINGS,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/black-morphida/skill-r.png",
			},
			{
				key: MobaSkillId.BLACK_MORPHIDA_BLADE_DANCE,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/black-morphida/skill-t.png",
			},
		],
	},
	{
		key: MobaHeroId.WHITE_MORPHIDA,
		name: "Белая морфида",
		image: "/moba/heroes/white-morphida/photo.png",
		skills: [
			{
				key: MobaSkillId.WHITE_MORPHIDA_COCOON,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/white-morphida/skill-passive.png",
			},
			{
				key: MobaSkillId.WHITE_MORPHIDA_STARS_FROM_EYES,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/white-morphida/skill-q.png",
			},
			{
				key: MobaSkillId.WHITE_MORPHIDA_SILENCE_IS_GOLDEN,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/white-morphida/skill-e.png",
			},
			{
				key: MobaSkillId.WHITE_MORPHIDA_POWER_OF_TREE,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/white-morphida/skill-r.png",
			},
			{
				key: MobaSkillId.WHITE_MORPHIDA_HEALING,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/white-morphida/skill-t.png",
			},
		],
	},
	{
		key: MobaHeroId.PERFECT_MORPHIDA,
		name: "Совершенная морфида",
		image: "/moba/heroes/perfect-morphida/photo.png",
		skills: [
			{
				key: MobaSkillId.PERFECT_MORPHIDA_WEAK_LINK,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/perfect-morphida/skill-passive.png",
			},
			{
				key: MobaSkillId.PERFECT_MORPHIDA_CRUSHING_DASH,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/perfect-morphida/skill-q.png",
			},
			{
				key: MobaSkillId.PERFECT_MORPHIDA_COCOON,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/perfect-morphida/skill-e.png",
			},
			{
				key: MobaSkillId.PERFECT_MORPHIDA_BUTTERFLY_LIGHTNESS,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/perfect-morphida/skill-r.png",
			},
			{
				key: MobaSkillId.PERFECT_MORPHIDA_DEADLY_FLOURISH,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/perfect-morphida/skill-t.png",
			},
		],
	},
	{
		key: MobaHeroId.AZAGHAL,
		name: "Азагхал",
		image: "/moba/heroes/azaghal/photo.png",
		skills: [
			{
				key: MobaSkillId.AZAGHAL_SECOND_WIND,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/azaghal/skill-passive.png",
			},
			{
				key: MobaSkillId.AZAGHAL_CRUSHING_BLOW,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/azaghal/skill-q.png",
			},
			{
				key: MobaSkillId.AZAGHAL_HEAD_ON,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/azaghal/skill-e.png",
			},
			{
				key: MobaSkillId.AZAGHAL_TRIUMPHANT_ROAR,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/azaghal/skill-r.png",
			},
			{
				key: MobaSkillId.AZAGHAL_BARRICADE,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/azaghal/skill-t.png",
			},
		],
	},
	{
		key: MobaHeroId.LUNNITSA,
		name: "Лунница",
		image: "/moba/heroes/lunnitsa/photo.png",
		skills: [
			{
				key: MobaSkillId.LUNNITSA_LUNAR_RIPPLE,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/lunnitsa/skill-passive.png",
			},
			{
				key: MobaSkillId.LUNNITSA_SPRING_BLOSSOM,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/lunnitsa/skill-q.png",
			},
			{
				key: MobaSkillId.LUNNITSA_LUNAR_SICKLE,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/lunnitsa/skill-e.png",
			},
			{
				key: MobaSkillId.LUNNITSA_TIDES,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/lunnitsa/skill-r.png",
			},
			{
				key: MobaSkillId.LUNNITSA_DARK_SIDE_OF_MOON,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/lunnitsa/skill-t.png",
			},
		],
	},
	{
		key: MobaHeroId.DOCTOR_MECHATRON,
		name: "Доктор мехатрон",
		image: "/moba/heroes/doctor-mechatron/photo.png",
		skills: [
			{
				key: MobaSkillId.DOCTOR_MECHATRON_ACCUMULATOR,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/doctor-mechatron/skill-passive.png",
			},
			{
				key: MobaSkillId.DOCTOR_MECHATRON_PULSE_SWORD,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/doctor-mechatron/skill-q.png",
			},
			{
				key: MobaSkillId.DOCTOR_MECHATRON_RECOIL_SHOT,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/doctor-mechatron/skill-e.png",
			},
			{
				key: MobaSkillId.DOCTOR_MECHATRON_MECHANICAL_TRAP,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/doctor-mechatron/skill-r.png",
			},
			{
				key: MobaSkillId.DOCTOR_MECHATRON_BALLISTIC_MISSILES,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/doctor-mechatron/skill-t.png",
			},
		],
	},
	{
		key: MobaHeroId.LUCY,
		name: "Люси",
		image: "/moba/heroes/lucy/photo.png",
		skills: [
			{
				key: MobaSkillId.LUCY_PERPETUAL_ENGINE,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/lucy/skill-passive.png",
			},
			{
				key: MobaSkillId.LUCY_CRYSTAL_LATTICE,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/lucy/skill-q.png",
			},
			{
				key: MobaSkillId.LUCY_LASER_BEAM,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/lucy/skill-e.png",
			},
			{
				key: MobaSkillId.LUCY_MATRIX,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/lucy/skill-r.png",
			},
			{
				key: MobaSkillId.LUCY_MAGNETIC_STORM,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/lucy/skill-t.png",
			},
		],
	},
	{
		key: MobaHeroId.KAIBULI,
		name: "Каибули",
		image: "/moba/heroes/kaibuli/photo.png",
		skills: [
			{
				key: MobaSkillId.KAIBULI_ACID,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/kaibuli/skill-passive.png",
			},
			{
				key: MobaSkillId.KAIBULI_SWEEPING_STRIKE,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/kaibuli/skill-q.png",
			},
			{
				key: MobaSkillId.KAIBULI_JAGGED_HOOK,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/kaibuli/skill-e.png",
			},
			{
				key: MobaSkillId.KAIBULI_TOSS_UP,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/kaibuli/skill-r.png",
			},
			{
				key: MobaSkillId.KAIBULI_CIRCULAR_STRIKE,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/kaibuli/skill-t.png",
			},
		],
	},
	{
		key: MobaHeroId.NESS,
		name: "Несс",
		image: "/moba/heroes/ness/photo.png",
		skills: [
			{
				key: MobaSkillId.NESS_KEEN_EYE,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/ness/skill-passive.png",
			},
			{
				key: MobaSkillId.NESS_AIMED_SHOT,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/ness/skill-q.png",
			},
			{
				key: MobaSkillId.NESS_LIBERATION,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/ness/skill-e.png",
			},
			{
				key: MobaSkillId.NESS_PHANTOM_ARROWS,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/ness/skill-r.png",
			},
			{
				key: MobaSkillId.NESS_WILD_GALLOP,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/ness/skill-t.png",
			},
		],
	},
	{
		key: MobaHeroId.MARA,
		name: "Мара",
		image: "/moba/heroes/mara/photo.png",
		skills: [
			{
				key: MobaSkillId.MARA_SWIFTNESS,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/mara/skill-passive.png",
			},
			{
				key: MobaSkillId.MARA_ICE_ARROW,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/mara/skill-q.png",
			},
			{
				key: MobaSkillId.MARA_ICE_FAN,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/mara/skill-e.png",
			},
			{
				key: MobaSkillId.MARA_ICY_SHACKLES,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/mara/skill-r.png",
			},
			{
				key: MobaSkillId.MARA_HAIL_OF_ARROWS,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/mara/skill-t.png",
			},
		],
	},
	{
		key: MobaHeroId.ROAN,
		name: "Роан",
		image: "/moba/heroes/roan/photo.png",
		skills: [
			{
				key: MobaSkillId.ROAN_HUNT,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/roan/skill-passive.png",
			},
			{
				key: MobaSkillId.ROAN_ARCHERS_FURY,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/roan/skill-q.png",
			},
			{
				key: MobaSkillId.ROAN_COMBAT_READINESS,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/roan/skill-e.png",
			},
			{
				key: MobaSkillId.ROAN_RETRIBUTION,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/roan/skill-r.png",
			},
			{
				key: MobaSkillId.ROAN_RAPID_FIRE,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/roan/skill-t.png",
			},
		],
	},
	{
		key: MobaHeroId.MERIT,
		name: "Мэрит",
		image: "/moba/heroes/merit/photo.png",
		skills: [
			{
				key: MobaSkillId.MERIT_KUROMI_SHIELD,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/merit/skill-passive.png",
			},
			{
				key: MobaSkillId.MERIT_FREEZING,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/merit/skill-q.png",
				preview: "/moba/heroes/merit/skill-q.mp4",
			},
			{
				key: MobaSkillId.MERIT_ICE_BLOCK,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/merit/skill-e.png",
				preview: "/moba/heroes/merit/skill-e.mp4",
			},
			{
				key: MobaSkillId.MERIT_GODDESS_GIFT,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/merit/skill-r.png",
				preview: "/moba/heroes/merit/skill-r.mp4",
			},
			{
				key: MobaSkillId.MERIT_ICE_RAIN,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/merit/skill-t.png",
				preview: "/moba/heroes/merit/skill-t.mp4",
			},
		],
	},
	{
		key: MobaHeroId.JINREN,
		name: "Джинрен",
		image: "/moba/heroes/jinren/photo.png",
		skills: [
			{
				key: MobaSkillId.JINREN_FIRE_SPIRIT,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/jinren/skill-passive.png",
			},
			{
				key: MobaSkillId.JINREN_FIREBALL,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/jinren/skill-q.png",
			},
			{
				key: MobaSkillId.JINREN_FLAME_ONSLAUGHT,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/jinren/skill-e.png",
			},
			{
				key: MobaSkillId.JINREN_ENLIGHTENMENT,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/jinren/skill-r.png",
			},
			{
				key: MobaSkillId.JINREN_FAN_OF_BLADES,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/jinren/skill-t.png",
			},
		],
	},
	{
		key: MobaHeroId.GENERAL_SAGE,
		name: "Генерал Сейдж",
		image: "/moba/heroes/general-sage/photo.png",
		skills: [
			{
				key: MobaSkillId.GENERAL_SAGE_FEAT,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/general-sage/skill-passive.png",
			},
			{
				key: MobaSkillId.GENERAL_SAGE_CIRCULAR_STRIKE,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/general-sage/skill-q.png",
			},
			{
				key: MobaSkillId.GENERAL_SAGE_THUNDER_PEAL,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/general-sage/skill-e.png",
			},
			{
				key: MobaSkillId.GENERAL_SAGE_HEROIC_LEAP,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/general-sage/skill-r.png",
			},
			{
				key: MobaSkillId.GENERAL_SAGE_INSPIRING_SHOUT,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/general-sage/skill-t.png",
			},
		],
	},
	{
		key: MobaHeroId.YASMINA,
		name: "Ясмина",
		image: "/moba/heroes/yasmina/photo.png",
		skills: [
			{
				key: MobaSkillId.YASMINA_BACKSTAB,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/yasmina/skill-passive.png",
			},
			{
				key: MobaSkillId.YASMINA_PIERCING_WOUND,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/yasmina/skill-q.png",
			},
			{
				key: MobaSkillId.YASMINA_PHANTOM_STEP,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/yasmina/skill-e.png",
			},
			{
				key: MobaSkillId.YASMINA_SHADOW_MARK,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/yasmina/skill-r.png",
			},
			{
				key: MobaSkillId.YASMINA_INVISIBILITY,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/yasmina/skill-t.png",
			},
		],
	},
	{
		key: MobaHeroId.ALBIOKA,
		name: "Альбиока",
		image: "/moba/heroes/albioka/photo.png",
		skills: [
			{
				key: MobaSkillId.ALBIOKA_DRAGONFLY,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/albioka/skill-passive.png",
			},
			{
				key: MobaSkillId.ALBIOKA_JAY_SPIRIT,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/albioka/skill-q.png",
				preview: "/moba/heroes/albioka/skill-q.mp4",
			},
			{
				key: MobaSkillId.ALBIOKA_WREN_SHIELD,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/albioka/skill-e.png",
				preview: "/moba/heroes/albioka/skill-e.mp4",
			},
			{
				key: MobaSkillId.ALBIOKA_EAGLE_SPIRIT,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/albioka/skill-r.png",
				preview: "/moba/heroes/albioka/skill-r.mp4",
			},
			{
				key: MobaSkillId.ALBIOKA_SPRING_SHOWER,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/albioka/skill-t.png",
				preview: "/moba/heroes/albioka/skill-t.mp4",
			},
		],
	},
	{
		key: MobaHeroId.COMMANDER_JET,
		name: "Командор Джет",
		image: "/moba/heroes/commander-jet/photo.png",
		skills: [
			{
				key: MobaSkillId.COMMANDER_JET_ORDER_FURY,
				button: MobaSkillButton.NONE,
				type: MobaSkillType.PASSIVE,
				image: "/moba/heroes/commander-jet/skill-passive.png",
			},
			{
				key: MobaSkillId.COMMANDER_JET_LIGHT_BLADE,
				button: MobaSkillButton.Q,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/commander-jet/skill-q.png",
			},
			{
				key: MobaSkillId.COMMANDER_JET_SIGNATURE_STRIKE,
				button: MobaSkillButton.E,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/commander-jet/skill-e.png",
			},
			{
				key: MobaSkillId.COMMANDER_JET_BATTLE_CRY,
				button: MobaSkillButton.R,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/commander-jet/skill-r.png",
			},
			{
				key: MobaSkillId.COMMANDER_JET_BARE_HEART,
				button: MobaSkillButton.T,
				type: MobaSkillType.ACTIVE,
				image: "/moba/heroes/commander-jet/skill-t.png",
			},
		],
	},
];

export const getHero = new Map<MobaHeroId, MobaHero>(
	HEROES.map((item) => [item.key, item]),
);
