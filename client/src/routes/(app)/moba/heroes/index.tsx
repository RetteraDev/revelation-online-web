import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CardsSearch } from "@/components/common/cards/CardsSearch";
import { HeroListItem } from "@/components/moba/heroes/HeroListItem";
import { HEROES } from "@/data/moba/heroes";
import CardsHeader from "@/components/common/cards/CardsHeader";
import CardsBody from "@/components/common/cards/CardsBody";
import CardsFooter from "@/components/common/cards/CardsFooter";
import CardsSeparator from "@/components/common/cards/CardsSeparator";

export const Route = createFileRoute("/(app)/moba/heroes/")({
	component: RouteComponent,
	loader: () => {
		return {
			crumb: "page.name.moba.heroes",
		};
	},
});

function RouteComponent() {
	const [searchString, setSearchString] = useState("");
	const heroes = HEROES;
	const filteredHeroes = searchString
		? heroes.filter((hero) =>
				hero.name.toLowerCase().includes(searchString.toLowerCase()),
			)
		: heroes;

	return (
		<div className="flex flex-1 flex-col w-full">
			<CardsHeader>
				<h2>Герои битвы бессмертных</h2>
			</CardsHeader>
			<CardsBody>
				<CardsSearch
					searchString={searchString}
					setSearchString={setSearchString}
				/>
			</CardsBody>
			<CardsSeparator/>
			<CardsBody className="flex flex-1 flex-col">
				{filteredHeroes.length > 0 ? (
  					<div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
						{filteredHeroes.map((hero) => (
							<HeroListItem key={hero.key} hero={hero} />
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
