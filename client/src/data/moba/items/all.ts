import { PHYSICAL_WHITE_ITEMS } from "@/data/moba/items/physicalWhite"
import { PHYSICAL_GREEN_ITEMS } from "@/data/moba/items/physicalGreen"
import { MAGICAL_WHITE_ITEMS } from "@/data/moba/items/magicalWhite"
import { MAGICAL_GREEN_ITEMS } from "@/data/moba/items/magicalGreen"

import type { MobaItem } from "@/data/moba/items/values"


const ITEMS: MobaItem[] = [
    ...PHYSICAL_WHITE_ITEMS,
    ...PHYSICAL_GREEN_ITEMS,
    ...MAGICAL_WHITE_ITEMS,
    ...MAGICAL_GREEN_ITEMS,
]


export {
    ITEMS
}
