import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/moba/builds')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: 'Билды',
    };
  },
})

function RouteComponent() {
  return (
    <div className="flex flex-col">
      <h2>Билды от игроков</h2>
      <div className="pt-6">
        
      </div>
    </div>
  )
}
