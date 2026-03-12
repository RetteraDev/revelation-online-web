import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { ItemCard } from "@/components/moba/items/ItemCard";
import { Button } from "@/components/ui/button";
import { getItem } from "@/data/moba/items/all";
import type { MobaItemId } from "@/data/moba/items/values";
import { useMobaItemTranslation } from "@/hooks/i18n/useMobaItemTranslation";
import CardsHeader from "@/components/common/cards/CardsHeader";
import CardsBody from "@/components/common/cards/CardsBody";
import CardsFooter from "@/components/common/cards/CardsFooter";

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
		<div className="flex flex-1 flex-col w-full">
			<CardsHeader>
				<div className="flex flex-1 flex-row gap-6">
					<Button asChild size="icon">
						<Link to="/moba/items">
							<ChevronLeft/>
						</Link>
					</Button>

					<h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
						{getItemName(item.key)}
					</h2>
				</div>
			</CardsHeader>
			<CardsBody className="grow">
				<ItemCard item={item} />
			</CardsBody>
			<CardsFooter>
				<></>
			</CardsFooter>
		</div>
	);
}
