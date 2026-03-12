import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/404")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-1 flex-col items-center justify-center px-4">
			<div className="text-center flex flex-col items-center">
				<h1 className="text-7xl font-bold mb-2 tracking-tighter">404</h1>

				<p className="text-lg text-gray-400 mb-8">Page not found</p>

				<Link
					to="/"
					className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-100 rounded-md transition-colors duration-200 font-medium"
				>
					Go home
				</Link>
			</div>
		</div>
	);
}
