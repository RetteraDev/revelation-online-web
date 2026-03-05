import { CardsList } from '@/components/common/cards/CardsList';
import { CardsSearch } from '@/components/common/cards/CardsSearch';
import { HEROES } from '@/data/moba/heroes';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/(app)/moba/heroes')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: 'Герои',
    };
  },
})

function RouteComponent() {
  const [searchString, setSearchString] = useState('')

  return (
    <div>
      <h3>Герои битвы бессмертных</h3>
      <div>
        <CardsSearch searchString={searchString} setSearchString={setSearchString}/>
        <CardsList items={HEROES} searchString={searchString}/>
      </div>
    </div>
  )
}
