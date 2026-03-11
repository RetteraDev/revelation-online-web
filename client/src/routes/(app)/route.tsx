import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppSidebar } from "@/components/overlay/AppSidebar";
import { AppSidebarInset } from "@/components/overlay/AppSidebarInset";
import { SidebarProvider } from "@/components/ui/sidebar";

export const Route = createFileRoute("/(app)")({
	component: App,
	loader: () => {
		return {
			crumb: "page.name.main",
		};
	},
});

function App() {
	return (
		<>
			<SidebarProvider>
				<AppSidebar />
				<AppSidebarInset>
					<Outlet />
				</AppSidebarInset>
			</SidebarProvider>
		</>
	);
}
