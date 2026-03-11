import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/moba")({
	component: RouteComponent,
	loader: () => {
		return {
			crumb: "page.name.moba.main",
		};
	},
});

function RouteComponent() {
	return <Outlet />;
}
