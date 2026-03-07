import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/moba/items/$itemId')({
  component: RouteComponent,
  loader: ({ params }) => {
    return {
      crumb: `${params.itemId}`,
    };
  },
})

function RouteComponent() {
  const { itemId } = Route.useParams()

  return (
    <div className="flex flex-col">
      <h2>Ассортимент магазина</h2>
      
    </div>
  )
}
