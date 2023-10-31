import Image from "next/image"
import battle from "public/img/jpeg/battle.jpg";
import combat from "public/img/jpeg/combat.jpg";
import pattern from "public/img/png/pattern-decorative.png";
import status_effects from "public/img/png/status-effects.png";
import victory from "public/img/jpeg/victory.jpg";
import how_to_play from "public/img/png/how-to-play.png";
import { TextBox } from "./TextBox";
import { useTranslation } from "react-i18next";

export const HowToPlay =()=>{
  const {t}=useTranslation()
  return (
    <section className=""> 
      <section className=" md:relative mt-28 lg:mt-0 bg_battle">
        <div className=" flex justify-center">
          <Image src={how_to_play} alt="how-to-play" className="-translate-y-36 lg:-translate-y-1/2" width={400}/>
        </div>
        <div className=" flex justify-center -translate-y-36 lg:-translate-y-0 lg:justify-start lg:p-8">
          <TextBox text={t('gameplay:text-box-6') } coloredTxt={['Axies']} href={'/cards'} className={'max-w-[425px] '}/>
        </div>
        <div className="flex justify-center -translate-y-36 lg:-translate-y-0  lg:justify-end lg:p-8 mt-4 ">
          <TextBox text={t('gameplay:text-box-7') } coloredTxt={['Starter','Axies','Personal','Marketplace']} href={'/cards'} className={'max-w-[425px] '}/>
        </div>
      </section>
      <section className="bg_combat p-16">
        <div className="lg:px-24 px-4  ">
          <div className="flex justify-start ">
            <TextBox text={t('gameplay:text-box-8') } coloredTxt={['Axies']} href={'/cards'} className={'max-w-[425px] '}/>
          </div>
          <div className="flex lg:justify-end mt-80 ">
            <TextBox text={t('gameplay:text-box-9') } coloredTxt={['Starter','Axies','Personal','Marketplace']} href={'/cards'} className={'max-w-[425px] '}/>
          </div>
        </div>
        
      </section>
      <section className="bg-brown relative rounded-b-3xl ">
        <div className="flex lg:justify-center -translate-y-2/3 px-16 lg:-translate-y-1/2 ">
          <TextBox text={t('gameplay:text-box-10') } coloredTxt={['Starter','Axies','Personal','Marketplace']} href={'/cards'} className={'max-w-[425px] '}/>
        </div>
        <Image src={pattern} alt="pattern" className="lg:pt-20 " />
        <section className="lg:absolute top-20 left-20 ">
          <Image src={status_effects} alt="status-effects" width={600}/>
        </section>
        <section className="lg:absolute top-44 right-20 ">
          <TextBox text={t('gameplay:text-box-11') } coloredTxt={['Starter','Axies','Personal','Marketplace']} href={'/cards'} className={'max-w-[425px] '}/>
        </section>
        <section className="lg:absolute top-80 left-96 my-4">
          <TextBox text={t('gameplay:text-box-12') } coloredTxt={['Starter','Axies','Personal','Marketplace']} href={'/cards'} className={'max-w-[425px] '}/>
        </section>
        <section className="rounded-2xl overflow-hidden inline-block lg:absolute bottom-32 right-20">
          <Image src={victory} alt="victory" width={750}/>
          <TextBox text={t('gameplay:text-box-13') } coloredTxt={['Starter','Axies','Personal','Marketplace']} href={'/cards'} className={'max-w-[425px] mt-4 '}/>
        </section>
        <TextBox text={t('gameplay:text-box-14') } coloredTxt={['Starter','Axies','Personal','Marketplace']} href={'/cards'} className={'max-w-[425px] lg:absolute bottom-4 translate-y-2/3 mx-16'}/>
        <Image src={pattern} alt="pattern" className="pb-20  " />
      </section>
    </section>
  )
}

