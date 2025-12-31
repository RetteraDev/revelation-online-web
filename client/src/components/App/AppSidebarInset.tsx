import { Separator } from "@radix-ui/react-separator";
import { SidebarInset, SidebarTrigger } from "../ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import type { ReactNode } from "react";
import { BreadcrumbNav } from "./BreadcrumbNav";

type AppSidebarInsetProps = {
    children: ReactNode
}


function AppSidebarInset({children}: AppSidebarInsetProps) {
    return (
        <>
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"
                    />
                    <BreadcrumbNav/>
                </header>
                { children }
            </SidebarInset>
        </>
    )
}

export {
    AppSidebarInset
}
