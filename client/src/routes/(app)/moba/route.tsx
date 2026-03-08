import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/moba')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: 'page.name.moba.name',
    };
  },
})

function RouteComponent() {
  return (
    <Outlet/>
  )
}
