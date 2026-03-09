import { CardsList } from '@/components/common/cards/CardsList';
import { CardsSearch } from '@/components/common/cards/CardsSearch';
import { HeroListItem } from '@/components/moba/heroes/HeroListItem';
import { HEROES } from '@/data/moba/heroes';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/(app)/moba/heroes/')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: 'page.name.moba.heroes',
    };
  },
})

function RouteComponent() {
  const [searchString, setSearchString] = useState('')
  const heroes = HEROES
  const filteredHeroes = searchString
    ? heroes.filter((item) => item.name.toLowerCase().includes(searchString.toLowerCase()))
    : heroes

  return (
    <div className="flex flex-col">
      <h2>Герои битвы бессмертных</h2>
      <div className="pt-6">
        <CardsSearch searchString={searchString} setSearchString={setSearchString}/>
        <div className='pt-6'>
          <CardsList columns={5}>
            {filteredHeroes.map(hero => (
              <HeroListItem key={hero.key} hero={hero}></HeroListItem>
            ))}
          </CardsList>
        </div>
      </div>
    </div>
  )
}
