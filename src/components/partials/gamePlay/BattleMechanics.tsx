import Image from "next/image";
import battle_mechanics from "public/img/jpeg/arena.jpg";
import gameplay from "public/img/jpeg/gameplay.jpg"

import {
  BlackBadge,
  IntroBanner,
  LinkComponent,
  TitleFontChanger,
} from '@/components/core'


import { useTranslation } from 'next-i18next'

import { IBattleBasics } from '@/components/interface'

import battle_Mechanics from 'public/img/png/battle-mechanics.png'
import battle from 'public/img/jpeg/battle2.jpg'


export const BattleMechanics = () => {
  const { t } = useTranslation()
  
  return (
    <section id="howtoplay" className="flex flex-col gap-5 mt-24">
      <div className="flex flex-col items-center h-[300px] mx-4">
        <IntroBanner src={ battle_mechanics} height={300} alt="battle" className="w-full" />
        <Image
          src={battle_Mechanics}
          width={430}
          height={430}
          alt="axies"
          className="-translate-y-1/2 w-full max-w-[380px] "
        />
      </div>

      <div className="max-w-[800px] flex flex-col gap-8 mx-auto px-4 mt-16">
        <div className="flex flex-col gap-8 text-xl font-normal">
          <p>{t('gameplay:how_to_play_1')}</p>
          <p>
            {t('gameplay:how_to_play_2')}
            <LinkComponent href="/adventure">
              {t('gameplay:adventure_mode')}
            </LinkComponent>
            <span>{t('common:and')}</span>
            <LinkComponent href="/arena">
              {t('gameplay:arena_mode')}
            </LinkComponent>
            <span>{t('gameplay:how_to_play_3')}</span>
          </p>
          <p>{t('gameplay:how_to_play_4')}</p>

          <div>
            <Image
              src={gameplay}
              width={400}
              height={200}
              alt="gameplay"
              className="w-full max-w-[770px]"
            />
          </div>
          
          <div className="flex flex-col gap-4">
            <TitleFontChanger className="flex flex-col items-center">
              <h3>{t('gameplay:battle_title')}</h3>
            </TitleFontChanger>
            <div className="flex flex-col gap-6 lg:gap-4">
              {t<string, IBattleBasics[]>('gameplay:battle_basics_data', {
                returnObjects: true,
              }).map((item, index) => (
                <div className="flex items-center gap-3 mb-2" key={index}>
                  <div className="w-20">
                    <Image
                      src={item.src}
                      width={80}
                      height={80}
                      alt="cards"
                      className="h-20 w-20"
                    />
                  </div>
                  <div className="flex flex-col items-start w-[calc(100%-80px)] gap-2">
                    <BlackBadge>{item.title}</BlackBadge>
                    <p className="text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <Image
                src={battle}
                width={700}
                height={300}
                alt="battle"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="lg:flex gap-16 ">
            <section className="flex-col">
              {t('gameplay:battle-basic-details1', {
                  returnObjects: true,
                }).map((item, index) => (
                  <section className="" key={index}>
                    <TitleFontChanger className="">
                      <h3>{item.title}</h3>
                    </TitleFontChanger>
                    <section dangerouslySetInnerHTML={{ __html: item.descrption }} className="flex flex-col gap-2 my-2 font-medium text-base"></section>
                  </section>
                ))}
            </section>
              <section className="flex-col">
                {t('gameplay:battle-basic-details2', {
                  returnObjects: true,
                }).map((item, index) => (
                  <section className="" key={index}>
                    <TitleFontChanger className=" ">
                      <h3>{item.title}</h3>
                    </TitleFontChanger>
                    <section dangerouslySetInnerHTML={{ __html: item.descrption }} className="flex flex-col gap-2 my-2 font-medium text-base" ></section>
              
                  </section>
                ))}
              </section>
        </div>
      </div>
    </section>
  )
}
