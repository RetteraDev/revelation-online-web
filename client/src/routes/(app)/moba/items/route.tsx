import { CardsSearch } from '@/components/common/cards/CardsSearch';
import { CardsList } from '@/components/common/cards/CardsList';
import { createFileRoute } from '@tanstack/react-router'
import { ITEMS } from '@/data/moba/items';
import { useState } from 'react';

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
  const items = ITEMS
  const filteredItems = searchString
    ? items.filter((item) => item.name.toLowerCase().includes(searchString.toLowerCase()))
    : items

  return (
    <div className="flex flex-col gap-2">
      <h2>Ассортимент магазина</h2>
      <div className="flex flex-col gap-2">
        <CardsSearch searchString={searchString} setSearchString={setSearchString}/>
        {/* <CardsList items={filteredItems}/> */}
      </div>
    </div>
  )
}
