import { PHYSICAL_WHITE_ITEMS } from "@/data/moba/items/physicalWhite"
import { PHYSICAL_GREEN_ITEMS } from "@/data/moba/items/physicalGreen"
import { MAGICAL_WHITE_ITEMS } from "@/data/moba/items/magicalWhite"
import { MAGICAL_GREEN_ITEMS } from "@/data/moba/items/magicalGreen"

import { MobaItemCategory, type MobaItem } from "@/data/moba/items/values"


const ITEM_GROUPS: {[key in MobaItemCategory]: MobaItem[]} = {
    [MobaItemCategory.PHYSICAL_WEAPONS]: [...PHYSICAL_WHITE_ITEMS, ...PHYSICAL_GREEN_ITEMS],
    [MobaItemCategory.MAGICAL_WEAPONS]: [...MAGICAL_WHITE_ITEMS, ...MAGICAL_GREEN_ITEMS],
    [MobaItemCategory.DEFENCE]: [],
    [MobaItemCategory.OTHER]: [],
    [MobaItemCategory.EXCLUSIVE]: [],
}


export {
    ITEM_GROUPS
}
