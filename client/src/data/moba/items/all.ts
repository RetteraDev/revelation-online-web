import { PHYSICAL_WHITE_ITEMS } from "@/data/moba/items/physicalWhite"
import { PHYSICAL_GREEN_ITEMS } from "@/data/moba/items/physicalGreen"
import { MAGICAL_WHITE_ITEMS } from "@/data/moba/items/magicalWhite"
import { MAGICAL_GREEN_ITEMS } from "@/data/moba/items/magicalGreen"
import { DEFENSE_WHITE_ITEMS } from "@/data/moba/items/defenseWhite"
import { DEFENSE_GREEN_ITEMS } from "@/data/moba/items/defenseGreen"
import { BOOTS_ITEMS } from "@/data/moba/items/boots"
import { JUNGLE_ITEMS } from "@/data/moba/items/jungle"
import { EXCLUSIVE_ITEMS } from "@/data/moba/items/exclusive"

import { MobaItemCategory, MobaItemId, type MobaItem } from "@/data/moba/items/values"


const ITEM_GROUPS: {[key in MobaItemCategory]: MobaItem[]} = {
    [MobaItemCategory.PHYSICAL_WEAPONS]: [...PHYSICAL_WHITE_ITEMS, ...PHYSICAL_GREEN_ITEMS],
    [MobaItemCategory.MAGICAL_WEAPONS]: [...MAGICAL_WHITE_ITEMS, ...MAGICAL_GREEN_ITEMS],
    [MobaItemCategory.DEFENSE]: [...DEFENSE_WHITE_ITEMS, ...DEFENSE_GREEN_ITEMS],
    [MobaItemCategory.OTHER]: [...BOOTS_ITEMS, ...JUNGLE_ITEMS],
    [MobaItemCategory.EXCLUSIVE]: [...EXCLUSIVE_ITEMS],
}

const ALL_MOBA_ITEMS: MobaItem[] = Object.values(ITEM_GROUPS).flat()

const getItem = new Map<MobaItemId, MobaItem>(
  ALL_MOBA_ITEMS.map((item) => [item.key, item]),
)

export {
    ITEM_GROUPS,
    getItem
}
