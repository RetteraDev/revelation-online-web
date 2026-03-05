import { CardsSearch } from '@/components/common/cards/CardsSearch';
import { CardsList } from '@/components/common/cards/CardsList';
import { createFileRoute } from '@tanstack/react-router'
import { ITEM_GROUPS } from '@/data/moba/items/all';
import { useState } from 'react';
import { ItemCard } from '@/components/moba/items/ItemCard';
import type { MobaItem, MobaItemCategory } from '@/data/moba/items/values';

export const Route = createFileRoute('/(app)/moba/items')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: 'Предметы',
    };
  },
})

function RouteComponent() {
  const [searchString, setSearchString] = useState('')
  const filteredGroups = Object.entries(ITEM_GROUPS)
    .map(([category, items]) => {
      const filteredItems = searchString
        ? items.filter((item) =>
            item.name.toLowerCase().includes(searchString.toLowerCase())
          )
        : items
      return [category, filteredItems] as [MobaItemCategory, MobaItem[]]
    })
    .filter(([_, items]) => items.length > 0)

  return (
    <div className="flex flex-col">
      <h2>Ассортимент магазина</h2>
      <div className="pt-6">
        <CardsSearch searchString={searchString} setSearchString={setSearchString} />
        {filteredGroups.map(([category, items]) => (
          <div key={category} className="flex flex-col gap-2 pt-6">
            <h3>{category}</h3>
            <CardsList>
              {items.map((item) => (
                <ItemCard key={item.key} item={item} />
              ))}
            </CardsList>
          </div>
        ))}
      </div>
    </div>
  )
}
