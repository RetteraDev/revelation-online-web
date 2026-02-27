import { ListTable } from '@/components/moba/ListTable';
import { createFileRoute } from '@tanstack/react-router'
import { ITEMS } from '@/data/moba/items';

export const Route = createFileRoute('/(app)/moba/items')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: 'Предметы',
    };
  },
})

function RouteComponent() {
  return (
    <ListTable items={ITEMS} />
  )
}
