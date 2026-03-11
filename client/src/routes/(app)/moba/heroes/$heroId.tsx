import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getHero, type MobaHeroId } from "@/data/moba/heroes";
import { useMobaHeroTranslation } from "@/hooks/i18n/useMobaHeroTranslation";
import { cn } from "@/lib/utils";

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
		<div className="flex flex-col gap-4">
			{/* Заголовок */}
			<div className="flex items-center gap-3 px-4 md:px-6">
				<Button asChild variant="ghost" size="icon">
					<Link to="/moba/heroes">
						<ChevronLeft className="h-5 w-5" />
					</Link>
				</Button>

				<h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
					{getHeroName(hero.key)}
				</h2>
			</div>

			{/* Баннер героя */}
			<section className="relative overflow-hidden rounded-2xl bg-black text-white">
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

			{/* Умения */}
			<div className="flex flex-col gap-3 py-3">
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
						<div className="w-full aspect-[16/9]">
							<video
								key={selectedSkill.preview}
								className="w-full h-full"
								autoPlay
								loop
								muted
							>
								<source src={selectedSkill.preview} type="video/mp4" />
							</video>
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

											<span className="absolute -bottom-2 -right-2 bg-black px-2 text-xs font-bold text-white border border-white shadow-lg">
												{skill.button}
											</span>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<div className="basis-2/5 w-full">
						<div className="flex flex-col bg-gray-200">
							{/* Шапка выбранного скилла */}
							<div className="flex flex-row basis-1/3 gap-3 p-3">
								<img
									src={selectedSkill.image}
									alt={getSkillName(selectedSkill.key)}
									className="w-12 h-12"
								/>
								<div className="flex flex-col text-justify">
									<h3>{getSkillName(selectedSkill.key)}</h3>
									<p>{getSkillDescription(selectedSkill.key)}</p>
								</div>
							</div>

							{/* Контент выбранного скилла */}
							<div className="flex flex-row basis-2/3 gap-3 p-3"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
