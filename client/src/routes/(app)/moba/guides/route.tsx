import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/moba/guides')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: 'Гайды',
    };
  },
})

function RouteComponent() {
  return (
    <div className="flex flex-col">
      <h2>Гайды от игроков</h2>
      <div className="pt-6">
        
      </div>
    </div>
  )
}
