import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Link } from "@tanstack/react-router"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronRight, Command } from "lucide-react"


type SidebarMenuProps = {
  title: string,
  url: string,
  isActive?: boolean
  subItems?: SidebarMenuProps[]
}

const items: SidebarMenuProps[] = [
  {
    title: "Битва бессмертных",
    url: "/moba",
    isActive: true,
    subItems: [
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
                            <Command className="size-4" />
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
                    <SidebarGroup>
                      <SidebarGroupLabel>Разделы</SidebarGroupLabel>
                      <SidebarGroupContent>
                        
                      <SidebarMenu>
                        {items.map((item) => (
                            <Collapsible key={item.url} defaultOpen={item.isActive}>
                              <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                  <Link to={item.url}>
                                    {item.title}
                                  </Link >
                                </SidebarMenuButton>

                                {item.subItems && (
                                  <>
                                    <CollapsibleTrigger asChild>
                                      <SidebarMenuAction className="data-[state=open]:rotate-90">
                                        <ChevronRight />
                                      </SidebarMenuAction>
                                    </CollapsibleTrigger>

                                    <CollapsibleContent>
                                      <SidebarMenuSub>
                                        {item.subItems.map((subItem) => (
                                          <SidebarMenuSubItem key={subItem.url}>
                                            <SidebarMenuSubButton asChild>
                                              <Link to={subItem.url}>
                                                {subItem.title}
                                              </Link>
                                            </SidebarMenuSubButton>
                                          </SidebarMenuSubItem>
                                        ))}
                                      </SidebarMenuSub>
                                    </CollapsibleContent>
                                  </>
                                  )
                                }

                              </SidebarMenuItem>
                            </Collapsible>
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
