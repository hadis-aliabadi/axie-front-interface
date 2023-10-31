import { BoldableWrapper, Card } from "@/components/core";
import { ICard } from "@/components/interface";
import { useTranslation } from 'next-i18next';

import Image from "next/image";
import welcome from "public/img/jpeg/welcome.jpg";
import axie from "public/img/png/axies.png";
import charm_slot from "public/img/jpeg/charm-slot.jpg";
import charm from "public/img/jpeg/charm.jpg";
import rune from "public/img/png/rune.png";
import rune_slot from "public/img/png/rune-slot.png";
import pattern from "public/img/png/pattern-decorative.png";
import about_axies from "public/img/jpeg/about-axies.jpg";
import team_builds from "public/img/jpeg/team-builds.jpg";
import { TextBox } from "./TextBox";
import Link from "next/link";



export const Axies =()=>{
  const { t } = useTranslation()

  const images = [
    { src: charm_slot, alt: 'Image 1' },
    { src: charm_slot, alt: 'Image 2' },
    { src: charm_slot, alt: 'Image 3' },
    { src: charm_slot, alt: 'Image 4' },
    { src: charm, alt: 'Image 5',different: true },
    { src: charm_slot, alt: 'Image 6' },
  ];

  return(
    <section >
      <section className=" md:relative mt-28 lg:mt-0">
        
        <div className=" flex justify-center">
        <Image src={axie} alt="axie" className=" lg:translate-y-1/2" width={400}/>
        </div>
        <div className=" flex justify-center  mb-0 md:mb-2">
          <TextBox text={t('gameplay:text-box-1') } coloredTxt={['Axies']} href={'/cards'} className={'max-w-[425px] lg:absolute top-1/3 left-1/3 lg:-translate-x-1/2 lg:-tarlate-y-1/2 md:translate-y-1/4'}/>
        </div>
        <div className=" flex justify-center">
          <TextBox text={t('gameplay:text-box-2') } coloredTxt={['Starter','Axies','Personal','Marketplace']} href={'/cards'} className={'max-w-[425px] translate-y-1/4 md:absolute md:-translate-x-1/2 md:-tarlate-y-1/2 lg:top-3/4 md:left-1/2'}/>
        </div>
        <Image src={welcome} alt="welcome" className="lg:rounded-t-3xl"/>
      </section>
    
      <section className="bg-brown relative ">
        <div className="flex flex-col items-center  justify-center gap-2 -translate-y-1/2 lg:justify-end lg:mr-4 ">
          <BoldableWrapper className="rounded-md overflow-hidden ">
            <Link href={'/what-are-axies'}>
              <Image src={about_axies} alt="about-axies" className=" " width={250}/>
            </Link>
          </BoldableWrapper>
          <BoldableWrapper className="rounded-md overflow-hidden  ">
            <Link href={'/guides/builds'}>
              <Image src={team_builds} alt="team-builds" className="" width={250}/>
            </Link>
          </BoldableWrapper>
        </div>

        <Image src={pattern} alt="pattern" className="mt-4 " />
        <TextBox text={t('gameplay:text-box-3') } coloredTxt={['Cards']} href={'/cards'} className={'max-w-[400px]  -translate-y-2/3 lg:ml-24'} />
        
          <section className=" flex flex-wrap justify-center lg:justify-center gap-8 ">
            {t<string, ICard[]>('gameplay:cards_data', {
              returnObjects: true,
            }).map((item, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <section className="">
                  <Card
                    key={index}
                    card_bg={item.card_bg}
                    card_bg_2={item.card_bg_2}
                    card_image={item.card_image}
                    bottom_icon={item.bottom_icon}
                    card_energy={item.card_energy}
                    card_name={item.card_name}
                    card_text={item.card_text}
                    icon={item.icon}
                    skill={item.skill}
                    heal_icon={item.card_heal ? item.heal_icon : ''}
                    card_heal={item.card_heal}
                    damage_icon={item.card_damage ? item.damage_icon : ''}
                    card_damage={item.card_damage}
                  />
                </section>
                <section className="">
                  <Image
                    width={160}
                    src={images[index].src}
                    alt={images[index].alt}
                    className={` ${images[index].different ? 'hover:scale-105 cursor-pointer hover:transform hover:origin-center hover:ease-linear hover:duration-200' : ''}`}
                  />
                </section>
              </div>
            ))}
          </section>
       
        
        <TextBox text={t('gameplay:text-box-4') } coloredTxt={['Cards']} href={'/cards'} className={'max-w-[400px] m-8 xl:-translate-y-2/3 xl:ml-96'} />
        
        <section className="relative ">
          <Image src={rune_slot} alt="rune-slot" className="xl:absolute xl:-bottom-36 xl:left-24" width={600}/>
          <BoldableWrapper className="  lg:absolute lg:-bottom-36 lg:left-[550px]">
            <Image src={rune} alt="rune" className="" width={130}/>
          </BoldableWrapper>
        </section>
       
        <section className="flex justify-end translate-y-1/2 mr-8">
        <TextBox text={t('gameplay:text-box-5') } coloredTxt={['Cards']} href={'/cards'} className={'max-w-[400px]  '} />
        </section>

        <Image src={pattern} alt="pattern" className="pb-20 " />
      </section>
    </section>
  )
}