import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CardsSearch } from "@/components/common/cards/CardsSearch";
import { ItemListItem } from "@/components/moba/items/ItemListItem";
import { ITEM_GROUPS } from "@/data/moba/items/all";
import type { MobaItem, MobaItemCategory } from "@/data/moba/items/values";
import { useMobaItemTranslation } from "@/hooks/i18n/useMobaItemTranslation";

export const Route = createFileRoute("/(app)/moba/items/")({
	component: RouteComponent,
	loader: () => {
		return {
			crumb: "page.name.moba.items",
		};
	},
});

function RouteComponent() {
	const { getItemName, getCategoryName } = useMobaItemTranslation();

	const [searchString, setSearchString] = useState("");
	const filteredGroups = Object.entries(ITEM_GROUPS)
		.map(([category, items]) => {
			const filteredItems = searchString
				? items.filter((item) =>
						getItemName(item.key)
							.toLowerCase()
							.includes(searchString.toLowerCase()),
					)
				: items;
			return [category, filteredItems] as [MobaItemCategory, MobaItem[]];
		})
		.filter(([_, items]) => items.length > 0);

	return (
		<div className="flex flex-col">
			<h2>Ассортимент магазина</h2>
			<div className="pt-6">
				<CardsSearch
					searchString={searchString}
					setSearchString={setSearchString}
				/>
				{filteredGroups.map(([category, items]) => (
					<div key={category} className="flex flex-col gap-2 pt-6">
						<h3>{getCategoryName(category)}</h3>
						<div
							className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
						>
							{items.map((item) => (
								<ItemListItem key={item.key} item={item} />
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
