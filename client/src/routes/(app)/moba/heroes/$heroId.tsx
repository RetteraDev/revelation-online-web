import { getHero, type MobaHeroId } from '@/data/moba/heroes'
import { useMobaHeroTranslation } from '@/hooks/i18n/useMobaHeroTranslation'
import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

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
    }
  },
})

function RouteComponent() {
  const { heroId } = Route.useParams()
  const hero = getHero.get(heroId as MobaHeroId)!

  const { getHeroName, getSkillName, getSkillDescription } = useMobaHeroTranslation()
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(0)

  const selectedSkill = hero.skills[selectedSkillIndex]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Button asChild variant="ghost" size="icon">
          <Link to="/moba/heroes">
            <ChevronLeft className="h-5 w-5" />
          </Link>
        </Button>

        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {getHeroName(hero.key)}
        </h2>
      </div>

      { /* Умения */ }
      <div className='flex flex-col gap-3 py-3'>

        { /* Шапка */ }
        <div
          className='w-full text-gray-100 py-3'
          style={{ 
              backgroundImage: `linear-gradient(rgb(82,76,63), rgb(57,52,49))`,
          }}
        >
          <p className='text-center'>Способности</p>
        </div>
        
        { /* Основной контент */ }
        <div className='flex flex-col xl:flex-row gap-3'>
          <div className='basis-3/5 w-full gap-3'>
      
            {/* Превью способности */}
            <div className='w-full aspect-[16/9]'>
              <img src={''} className='w-full aspect-[16/9]'/>
            </div>

            {/* Способности */}
            <div className='flex flex-row gap-3 justify-center items-center py-3'>
              {hero.skills.map((skill, index) => {
                  const isSelected = index === selectedSkillIndex

                  return (
                    <div
                      className={`flex justify-center items-center ${isSelected ? 'w-12 h-12' : 'w-10 h-10'}`}
                      onClick={() => {setSelectedSkillIndex(index)}}
                    >
                      <img
                        src={skill.image}
                        alt={getSkillName(skill.key)}
                        className={`object-cover ${isSelected ? '' : 'opacity-70 grayscale'}`}
                      />
                    </div>
                  )
              })}
            </div>

          </div>
          <div className='basis-2/5 w-full'>
            <div className='flex flex-col bg-gray-200'>

              { /* Шапка выбранного скилла */ }
              <div className='flex flex-row basis-1/3 gap-3 p-3'>
                <img src={selectedSkill.image} alt={getSkillName(selectedSkill.key)} className='w-12 h-12'/>
                <div className='flex flex-col text-justify'>
                  <h3>{getSkillName(selectedSkill.key)}</h3>
                  <p>{getSkillDescription(selectedSkill.key)}</p>
                </div>
              </div>

              { /* Контент выбранного скилла */ }
              <div className='flex flex-row basis-2/3 gap-3 p-3'>
                
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}