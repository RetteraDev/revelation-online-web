import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/moba')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: 'Битва бессмертных',
    };
  },
})

function RouteComponent() {
  return <div>Hello "/(app)/moba"!</div>
}
