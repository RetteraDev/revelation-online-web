import { Separator } from "@radix-ui/react-separator";
import type { ReactNode } from "react";
import { BreadcrumbNav } from "@/components/overlay/BreadcrumbNav";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import LanguageChanger from "@/components/common/buttons/LanguageChanger";

interface AppSidebarInsetProps {
	children: ReactNode;
}

function AppSidebarInset({ children }: AppSidebarInsetProps) {
	return (
		<SidebarInset>
			<header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
				<SidebarTrigger className="-ml-1" />
				<Separator
					orientation="vertical"
					className="mr-2 data-[orientation=vertical]:h-4"
				/>

				<div className="grow">
					<BreadcrumbNav />
				</div>

				<div className="flex flex-row gap-6">
					<LanguageChanger />
				</div>
			</header>
			<main className="bg-main flex flex-1 flex-col p-4 md:p-6 lg:p-8">
				<div className="shadow-smooth bg-white mx-auto flex flex-1 max-w-6xl w-full">
					{children}
				</div>
			</main>
		</SidebarInset>
	);
}

export { AppSidebarInset };
