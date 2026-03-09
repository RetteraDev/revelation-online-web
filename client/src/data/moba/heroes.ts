export interface SkillItem {
    key: string
    name: string
    image?: string
}

export interface HeroItem {
    key: string
    name: string
    image?: string
    skills: Array<SkillItem>
}

export const HERO_KEYS = {
    SPIDER_QUEEN: 'spider-queen',
    INTU: 'intu',
    MADU: 'madu',
    BLACK_MORPHIDA: 'black-morphida',
    WHITE_MORPHIDA: 'white-morphida',
    PERFECT_MORPHIDA: 'perfect-morphida',
    AZAGHAL: 'azaghal',
    LUNNITSA: 'lunnitsa',
    DOCTOR_MECHATRON: 'doctor-mechatron',
    LUCY: 'lucy',
    KAIBULI: 'kaibuli',
    NESS: 'ness',
    MARA: 'mara',
    ROAN: 'roan',
    MERIT: 'merit',
    JINREN: 'jinren',
    GENERAL_SAGE: 'general-sage',
    YASMINA: 'yasmina',
    ALBIOKA: 'albioka',
    COMMANDER_JET: 'commander-jet',
}

export const HEROES: Array<HeroItem> = [
    {
        key: HERO_KEYS.SPIDER_QUEEN,
        name: 'Королева пауков',
        image: '/moba/heroes/spider-queen/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.INTU,
        name: 'Инту',
        image: '/moba/heroes/intu/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.MADU,
        name: 'Маду',
        image: '/moba/heroes/madu/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.BLACK_MORPHIDA,
        name: 'Чёрная морфида',
        image: '/moba/heroes/black-morphida/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.WHITE_MORPHIDA,
        name: 'Белая морфида',
        image: '/moba/heroes/white-morphida/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.PERFECT_MORPHIDA,
        name: 'Совершенная морфида',
        image: '/moba/heroes/perfect-morphida/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.AZAGHAL,
        name: 'Азагхал',
        image: '/moba/heroes/azaghal/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.LUNNITSA,
        name: 'Лунница',
        image: '/moba/heroes/lunnitsa/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.DOCTOR_MECHATRON,
        name: 'Доктор мехатрон',
        image: '/moba/heroes/doctor-mechatron/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.LUCY,
        name: 'Люси',
        image: '/moba/heroes/lucy/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.KAIBULI,
        name: 'Каибули',
        image: '/moba/heroes/kaibuli/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.NESS,
        name: 'Несс',
        image: '/moba/heroes/ness/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.MARA,
        name: 'Мара',
        image: '/moba/heroes/mara/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.ROAN,
        name: 'Роан',
        image: '/moba/heroes/roan/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.MERIT,
        name: 'Мэрит',
        image: '/moba/heroes/merit/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.JINREN,
        name: 'Джинрен',
        image: '/moba/heroes/jinren/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.GENERAL_SAGE,
        name: 'Генерал Сейдж',
        image: '/moba/heroes/general-sage/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.YASMINA,
        name: 'Ясмина',
        image: '/moba/heroes/yasmina/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.ALBIOKA,
        name: 'Альбиока',
        image: '/moba/heroes/albioka/photo.png',
        skills: [],
    },
    {
        key: HERO_KEYS.COMMANDER_JET,
        name: 'Командор Джет',
        image: '/moba/heroes/commander-jet/photo.png',
        skills: [],
    },
]
