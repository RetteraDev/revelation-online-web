import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { ItemCard } from "@/components/moba/items/ItemCard";
import { Button } from "@/components/ui/button";
import { getItem } from "@/data/moba/items/all";
import type { MobaItemId } from "@/data/moba/items/values";
import { useMobaItemTranslation } from "@/hooks/i18n/useMobaItemTranslation";

export const Route = createFileRoute("/(app)/moba/items/$itemId")({
	component: RouteComponent,
	loader: ({ params }) => {
		const item = getItem.get(params.itemId as MobaItemId);
		if (!item) {
			throw redirect({
				to: "/404",
			});
		}

		return {
			crumb: `moba.items.name.${params.itemId}`,
		};
	},
});

function RouteComponent() {
	const { itemId } = Route.useParams();
	const item = getItem.get(itemId as MobaItemId)!;
	const { getItemName } = useMobaItemTranslation();

	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-3">
				<Button asChild variant="ghost" size="icon">
					<Link to="/moba/heroes">
						<ChevronLeft className="h-5 w-5" />
					</Link>
				</Button>

				<h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
					{getItemName(item.key)}
				</h2>
			</div>

			<ItemCard item={item} />
		</div>
	);
}
