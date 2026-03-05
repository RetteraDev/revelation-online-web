import { Card } from "@/components/ui/card"

export interface Hero {
  key: string
  name: string
  image?: string
}

interface HeroCardProps {
  hero: Hero
  onClick?: (hero: Hero) => void
}

function HeroCard({ hero, onClick }: HeroCardProps) {
  return (
    <Card
      className="overflow-hidden transition hover:scale-105 hover:cursor-pointer p-0"
      onClick={() => onClick?.(hero)}
    >
      <div className="relative aspect-[3/4]">
        {hero.image ? (
          <img
            src={hero.image}
            alt={hero.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-gray-400">Нет фото</span>
          </div>
        )}
        
        <div className="absolute h-full w-full bottom-0 bg-gradient-to-t from-black/50 to-transparent">
          <p className="absolute bottom-2 left-2 text-white">
            {hero.name}
          </p>
        </div>
      </div>
    </Card>
  )
}

export { HeroCard }