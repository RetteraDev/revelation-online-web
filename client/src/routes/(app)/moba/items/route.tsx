import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/moba/items')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: 'Предметы',
    };
  },
})

function RouteComponent() {
  return <div>Hello "/(app)/moba/items"!</div>
}
