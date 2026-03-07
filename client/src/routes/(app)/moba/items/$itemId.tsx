import { ItemCard } from '@/components/moba/items/ItemCard';
import { getItem } from '@/data/moba/items/all';
import type { MobaItemId } from '@/data/moba/items/values';
import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { LucideChevronLeft } from 'lucide-react';

export const Route = createFileRoute('/(app)/moba/items/$itemId')({
  component: RouteComponent,
  loader: ({ params }) => {
    const item = getItem.get(params.itemId as MobaItemId)
    if (!item) {
      throw redirect({
        to: '/404',
      })
    }

    return {
      crumb: `${item.name}`,
    };
  },
})

function RouteComponent() {
  const { itemId } = Route.useParams()
  const item = getItem.get(itemId as MobaItemId)!

  return (
    <div className="flex flex-col">
      <div className='flex flex-row items-baseline gap-3'>
        <Link to='/moba/items'>
          <LucideChevronLeft/>
        </Link>
        <h2>{item.name}</h2>
      </div>

      <ItemCard item={item}/>
    </div>
  )
}
