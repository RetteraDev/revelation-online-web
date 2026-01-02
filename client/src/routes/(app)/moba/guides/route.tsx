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
  return <div>Hello "/(app)/moba/guides"!</div>
}
