import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


const items = [
  {
    title: "Home",
    url: "#",
    // icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    // icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    // icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    // icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    // icon: Settings,
  },
]


function AppSidebar() {
    return (
        <>
            <Sidebar collapsible="icon">
                <SidebarHeader>
                    <span>RO</span>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Revelation Online</SidebarGroupLabel>
                        <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                <a href={item.url}>
                                    <span>{item.title}</span>
                                </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter />
            </Sidebar>
        </>
    )
}

export {
    AppSidebar
}
