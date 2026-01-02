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
  return <div>Hello "/(app)/moba/builds"!</div>
}
