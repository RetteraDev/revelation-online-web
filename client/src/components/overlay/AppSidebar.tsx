import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "@tanstack/react-router"
import { Swords } from "lucide-react"
import { NavSidebarContent, type NavSidebarContentItems } from "@/components/overlay/NavSidebarContent"


const items: NavSidebarContentItems[] = [
  {
    title: "Битва бессмертных",
    url: "/moba",
    isActive: true,
    icon: Swords,
    items: [
      {
        title: "Герои",
        url: "/moba/heroes",
      }, 
      {
        title: "Предметы",
        url: "/moba/items",
      },
      {
        title: "Гайды",
        url: "/moba/guides",
      },
      {
        title: "Билды",
        url: "/moba/builds",
      },
    ]
  },
]


function AppSidebar() {
    return (
        <>
            <Sidebar collapsible="icon">

                <SidebarHeader>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton size="lg" asChild>
                        <Link to='/'>
                          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                            <img src="/logo128.jpg" className="rounded-lg" />
                          </div>
                          <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-medium">Revelation Online</span>
                            <span className="truncate text-xs">Всё, что вам интересно</span>
                          </div>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarHeader>

                <SidebarContent>
                  <NavSidebarContent items={items}/>
                </SidebarContent>

                <SidebarFooter />
            </Sidebar>
        </>
    )
}

export {
    AppSidebar
}
