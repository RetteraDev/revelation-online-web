import { Card } from "@/components/ui/card"
import type { HeroItem } from "@/data/moba/heroes"

interface HeroListItemProps {
  hero: HeroItem
  onClick?: (hero: HeroItem) => void
}

function HeroListItem({ hero, onClick }: HeroListItemProps) {
  return (
    <Card
      className="overflow-hidden transition hover:scale-105 hover:cursor-pointer p-0"
      onClick={() => onClick?.(hero)}
    >
      <div className="relative aspect-[3/4]">
        <img
            src={hero.image}
            alt={hero.name}
            className="h-full w-full object-cover"
          />
        
        <div className="absolute h-full w-full bottom-0 bg-gradient-to-t from-black/50 to-transparent">
          <p className="absolute bottom-2 left-2 text-white">
            {hero.name}
          </p>
        </div>
      </div>
    </Card>
  )
}

export { HeroListItem }