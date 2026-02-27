import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/moba')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: 'Битва бессмертных',
    };
  },
})

function RouteComponent() {
  return (
    <Outlet/>
  )
}
