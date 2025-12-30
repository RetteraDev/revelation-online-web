import { createFileRoute, Outlet } from '@tanstack/react-router'

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/App/AppSidebar"
import { AppSidebarInset } from '@/components/App/AppSidebarInset'

export const Route = createFileRoute('/(app)')({
  component: App,
})

function App() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <AppSidebarInset>
          <Outlet/>
        </AppSidebarInset>
      </SidebarProvider>
    </>
  )
}
