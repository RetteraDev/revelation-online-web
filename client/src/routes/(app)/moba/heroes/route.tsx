import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/moba/heroes')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: 'Герои',
    };
  },
})

function RouteComponent() {
  return <div>Hello "/(app)/moba/heroes"!</div>
}
