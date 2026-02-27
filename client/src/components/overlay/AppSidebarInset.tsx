import { Separator } from "@radix-ui/react-separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import type { ReactNode } from "react";
import { BreadcrumbNav } from "@/components/overlay/BreadcrumbNav";

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
                <main className="w-full max-w-8xl mx-auto px-4 py-6 md:px-6 md:py-8">
                    {children}
                </main>
            </SidebarInset>
        </>
    )
}

export {
    AppSidebarInset
}
