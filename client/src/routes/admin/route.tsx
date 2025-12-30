import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div>Hello "/admin"!</div>
      <Outlet/>
    </>
  )
}
