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
			<div className="flex flex-col items-center gap-3 p-3 border-1 border-beige bg-chocolate hover-scale">
				<div className="w-32 h-32">
					<div className="rounded-full">
						<div className="w-full h-full rounded-full border-2 border-beige">
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
