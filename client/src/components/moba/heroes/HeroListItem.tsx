import { Link } from "@tanstack/react-router";
import type { MobaHero } from "@/data/moba/heroes";
import { useMobaHeroTranslation } from "@/hooks/i18n/useMobaHeroTranslation";

interface HeroListItemProps {
	hero: MobaHero;
}

function HeroListItem({ hero }: HeroListItemProps) {
	const { getHeroName } = useMobaHeroTranslation();

	return (
		<Link to="/moba/heroes/$heroId" params={{ heroId: hero.key }}>
			<div
				className="flex flex-col items-center gap-3 p-3"
				style={{
					border: "1px solid black",
				}}
			>
				<div className="w-28 h-28 sm:w-32 sm:h-32">
					<div
						className="rounded-full p-1"
						style={{
							background: "linear-gradient(135deg, #3c3c41, #1e2328)",
							transition: "0.4s ease, transform 0.4s ease",
						}}
					>
						<div className="w-full h-full rounded-full border-2">
							<img
								src={hero.image}
								alt={getHeroName(hero.key)}
								className="hero-image w-full h-full object-cover"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
				<p>{getHeroName(hero.key)}</p>
			</div>
		</Link>
	);
}

export { HeroListItem };
