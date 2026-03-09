import { getHero, type MobaHeroId } from '@/data/moba/heroes';
import { useSkillTranslation } from '@/hooks/i18n/useSkillTranslation';
import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { LucideChevronLeft } from 'lucide-react';

export const Route = createFileRoute('/(app)/moba/heroes/$heroId')({
  component: RouteComponent,
  loader: ({ params }) => {
    const hero = getHero.get(params.heroId as MobaHeroId)
    if (!hero) {
      throw redirect({
        to: '/404',
      })
    }

    return {
      crumb: `moba.heroes.name.${hero.key}`,
    };
  },
})

function RouteComponent() {
  const { heroId } = Route.useParams()
  const hero = getHero.get(heroId as MobaHeroId)!

  const { getSkillName } = useSkillTranslation()

  return (
    <div className="flex flex-col">
      <div className='flex flex-row items-baseline gap-3'>
        <Link to='/moba/heroes'>
          <LucideChevronLeft/>
        </Link>
        <h2>{hero.name}</h2>
      </div>
      <>
        <div
            className="text-gray-100 px-3 py-1"
            style={{ 
                backgroundImage: `linear-gradient(rgb(82,76,63), rgb(57,52,49))`,
            }}
        >
            <span>Умения</span>
        </div>
            
        <div className="flex flex-col p-3">
            <div className='flex flex-row gap-3'>
                {hero.skills.map((skill) => {
                    return (
                        <div className={`flex justify-center items-center w-12 h-12`} style={{border: `1px solid black`}}>
                          <img src={skill.image} alt={getSkillName(skill.key)} className="w-10 h-10 object-cover"/>
                        </div>
                    )
                })}
            </div>
        </div>
      </>
    </div>
  )
}
