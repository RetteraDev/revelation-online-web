interface CardItem {
    key: string
    name: string
    image?: string
}

const HERO_KEYS = {
    INTU: 'intu',
    MARA: 'mara',
    SEIGE: 'seije',
    PAUK: 'koroleva-paukov',
    MADU: 'madu',
    AZAGKHAL: 'azgakhal',
    LUNA: 'lunnitsa',
    MEHATRONE: 'mehatrone',
    NESS: 'ness',
    BLACK_MORHIDA: 'black-morhphida',
    WHITE_MORHIDA: 'white-morhphida',
    PERFECT_MORHIDA: 'perfect-morhphida',
    LUCY: 'lucy',
    MERIT: 'merit',
    DJINREN: 'djinren',
    YASMINA: 'yasmina',
    ALBIOKA: 'albioka',
    COMODO_JET: 'comodo-jet',
    KAIBULI: 'kaibuli',
    ROAN: 'roan'
}

const HEROES: Array<CardItem> = [
    {
        key: HERO_KEYS.INTU,
        name: 'Инту',
    },
    {
        key: HERO_KEYS.MARA,
        name: 'Мара'
    },
    {
        key: HERO_KEYS.SEIGE,
        name: 'Генерал Сейдж'
    },
    {
        key: HERO_KEYS.PAUK,
        name: 'Королева пауков'
    },
    {
        key: HERO_KEYS.MADU,
        name: 'Маду'
    },
    {
        key: HERO_KEYS.AZAGKHAL,
        name: 'Азагхал'
    },
    {
        key: HERO_KEYS.LUNA,
        name: 'Лунница'
    },
    {
        key: HERO_KEYS.MEHATRONE,
        name: 'Мехатрон'
    },
    {
        key: HERO_KEYS.NESS,
        name: 'Несс'
    },
    {
        key: HERO_KEYS.BLACK_MORHIDA,
        name: 'Чёрная морфида'
    },
    {
        key: HERO_KEYS.WHITE_MORHIDA,
        name: 'Белая морфида'
    },
    {
        key: HERO_KEYS.PERFECT_MORHIDA,
        name: 'Совершенная морфида'
    },
    {
        key: HERO_KEYS.LUCY,
        name: 'Люси'
    },
    {
        key: HERO_KEYS.MERIT,
        name: 'Мэрит'
    },
    {
        key: HERO_KEYS.DJINREN,
        name: 'Джинрен'
    },
    {
        key: HERO_KEYS.YASMINA,
        name: 'Ясмина'
    },
    {
        key: HERO_KEYS.ALBIOKA,
        name: 'Альбиока'
    },
    {
        key: HERO_KEYS.COMODO_JET,
        name: 'Командор Джет'
    },
    {
        key: HERO_KEYS.KAIBULI,
        name: 'Каибули'
    },
    {
        key: HERO_KEYS.ROAN,
        name: 'Роан'
    }
]

export {
    HEROES
}
