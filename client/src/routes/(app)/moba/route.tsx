import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/moba')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(app)/moba"!</div>
}
