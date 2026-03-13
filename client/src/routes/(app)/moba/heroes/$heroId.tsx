import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getHero, type MobaHeroId } from "@/data/moba/heroes";
import { useMobaHeroTranslation } from "@/hooks/i18n/useMobaHeroTranslation";
import CardsHeader from "@/components/common/cards/CardsHeader";
import CardsFooter from "@/components/common/cards/CardsFooter";
import CardsBody from "@/components/common/cards/CardsBody";

export const Route = createFileRoute("/(app)/moba/heroes/$heroId")({
	component: RouteComponent,
	loader: ({ params }) => {
		const hero = getHero.get(params.heroId as MobaHeroId);

		if (!hero) {
			throw redirect({
				to: "/404",
			});
		}

		return {
			crumb: `moba.heroes.name.${hero.key}`,
		};
	},
});

function RouteComponent() {
	const { heroId } = Route.useParams();
	const hero = getHero.get(heroId as MobaHeroId)!;

	const { getHeroName, getSkillName, getSkillDescription } =
		useMobaHeroTranslation();
	const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);

	const selectedSkill = hero.skills[selectedSkillIndex];

	return (
		<div className="flex flex-1 flex-col">
			{/* Заголовок */}
			<CardsHeader>
				<div className="flex flex-1 flex-row gap-6">
					<Button asChild size="icon">
						<Link to="/moba/heroes">
							<ChevronLeft/>
						</Link>
					</Button>

					<h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
						{getHeroName(hero.key)}
					</h2>
				</div>
			</CardsHeader>
			{/* Баннер героя */}
			<CardsBody className="!p-0">
				<section className="relative overflow-hidden bg-chocolate">
					<div
						className="absolute inset-0 bg-no-repeat"
						style={{
							backgroundImage: `url(${hero.image})`,
							backgroundPosition: "85% center",
							backgroundSize: "contain",
						}}
					/>

					<div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
					<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

					<div className="relative flex min-h-[400px] flex-col justify-between p-6 md:p-10 lg:p-12">
						<div className="max-w-2xl">
							<p className="text-xs uppercase tracking-[0.3em] text-white/60">
								Герой
							</p>

							<h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
								{getHeroName(hero.key)}
							</h1>

							<p className="mt-6 max-w-lg text-sm leading-6 text-white/70 md:text-base">
								#TODO: Описание персонажей
							</p>
						</div>
					</div>
				</section>
			</CardsBody>

			{/* Умения */}
			<CardsBody className="grow">
				<div className="flex flex-col gap-3 p-3">
					{/* Шапка */}
					<div className="w-full py-3">
						<h1 className="text-center text-4xl font-bold md:text-5xl lg:text-6xl">
							Способности
						</h1>
					</div>

					{/* Основной контент */}
					<div className="flex flex-col xl:flex-row gap-3">
						<div className="basis-3/5 w-full gap-3">
							{/* Превью способности */}
							<div className="w-full aspect-[16/9] border-beige border-1">
								{selectedSkill.preview ? (
									<video
										key={selectedSkill.preview}
										className="w-full h-full"
										autoPlay
										loop
										muted
										playsInline
									>
										<source src={selectedSkill.preview} type="video/mp4" />
									</video>
								) : (
									<div className="flex flex-1 flex-col items-center justify-center text-center gap-3 w-full h-full">
										<p className="text-lg font-medium">
											Ролик еще не был записан
										</p>
									</div>
								)}
							</div>

							{/* Способности */}
							<div className="flex flex-row gap-3 justify-center items-center py-3">
								{hero.skills.map((skill, index) => {
									const isSelected = index === selectedSkillIndex;

									return (
										<div
											className={`flex justify-center items-center ${isSelected ? "w-12 h-12" : "w-10 h-10"}`}
											onClick={() => {
												setSelectedSkillIndex(index);
											}}
										>
											<div className="relative">
												<img
													src={skill.image}
													alt={getSkillName(skill.key)}
													className={`object-cover ${isSelected ? "" : "opacity-70 grayscale"}`}
												/>

												{skill.button &&
													<span className="absolute -bottom-2 -right-2 bg-black px-2 text-xs font-bold text-white border border-white shadow-lg">
														{skill.button}
													</span>
												}
											</div>
										</div>
									);
								})}
							</div>
						</div>
						<div className="basis-2/5 w-full">
							<div className="flex flex-col">
								{/* Шапка выбранного скилла */}
								<div className="flex flex-col shadow-smooth">
									<CardsHeader>
										<div className="flex flex-1 flex-row gap-3 items-center">
											<img
												src={selectedSkill.image}
												alt={getSkillName(selectedSkill.key)}
												className="w-12 h-12"
											/>
											<h3>{getSkillName(selectedSkill.key)}</h3>
										</div>
									</CardsHeader>
									
									<CardsBody>
										<p>{getSkillDescription(selectedSkill.key)}</p>
									</CardsBody>
									<CardsFooter>
										<></>
									</CardsFooter>
								</div>
							</div>
						</div>
					</div>
				</div>
			</CardsBody>
			<CardsFooter>
				<></>
			</CardsFooter>
		</div>
	);
}
