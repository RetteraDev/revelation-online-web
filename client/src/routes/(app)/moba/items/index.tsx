import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CardsSearch } from "@/components/common/cards/CardsSearch";
import { ItemListItem } from "@/components/moba/items/ItemListItem";
import { ITEM_GROUPS } from "@/data/moba/items/all";
import type { MobaItem, MobaItemCategory } from "@/data/moba/items/values";
import { useMobaItemTranslation } from "@/hooks/i18n/useMobaItemTranslation";
import CardsHeader from "@/components/common/cards/CardsHeader";
import CardsBody from "@/components/common/cards/CardsBody";
import CardsFooter from "@/components/common/cards/CardsFooter";
import CardsSeparator from "@/components/common/cards/CardsSeparator";

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
		<div className="flex flex-1 flex-col w-full">
			<CardsHeader>
				<h2>Ассортимент магазина</h2>
			</CardsHeader>
			<CardsBody>
				<CardsSearch
					searchString={searchString}
					setSearchString={setSearchString}
				/>
			</CardsBody>
			<CardsSeparator/>
			<CardsBody className="flex flex-1 flex-col">
				{filteredGroups.length > 0 ? (
					<div className="flex flex-1 flex-col gap-6">
						{filteredGroups.map(([category, items]) => (
							<div key={category} className="flex flex-col gap-2">
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
				) : (
					<div className="flex flex-1 flex-col items-center justify-center text-center gap-3 w-full">
						<p className="text-lg font-medium">
							Ничего не найдено
						</p>
						<p className="text-sm">
							Попробуйте изменить поисковый запрос
						</p>
					</div>
				)}
			</CardsBody>
			<CardsFooter>
				<></>
			</CardsFooter>
		</div>
	);
}
