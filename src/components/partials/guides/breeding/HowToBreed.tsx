import { Alert, LinkComponent, TitleFontChanger } from "@/components/core"
import { useTranslation } from "next-i18next"
import Image from "next/image";
import click_breed from "public/img/jpeg/click-breed.jpg";
import select_axie from "public/img/jpeg/select-axie.jpg";
import lets_breed from "public/img/jpeg/lets-breed.jpg";
import egg from "public/img/jpeg/egg.jpg";



export const HowToBreed = () =>{
  const {t} = useTranslation();
  return (
    <div className="flex flex-col max-w-[800px] mx-auto gap-10">
      <TitleFontChanger className="text-black text-4xl text-center">{t('breeding:how-to-breed')}</TitleFontChanger>
      <Image src={click_breed} alt="clickbreed" className="rounded-xl" />
      <div className="flex flex-col gap-8">
        <TitleFontChanger className="text-black text-4xl">{t('breeding:prepare')}</TitleFontChanger>
        <p className="font-normal text-xl">{t('breeding:prepare-breed')}</p>
        <div className="w-fit">
        <Alert>{t('breeding:alert-1')}</Alert>
        </div>
      </div>
      <div className="flex flex-col  gap-4">
        <Image src={select_axie} alt="select-axie" className="rounded-xl"/>
        <TitleFontChanger className="text-black text-4xl">{t('breeding:mate')}</TitleFontChanger>
        <p className="font-normal text-xl">{t('breeding:mate-des')}</p>
      </div>
      <div className="flex flex-col gap-8">
        <Image src={lets_breed} alt="clickbreed" className="rounded-xl" />
        <TitleFontChanger className="text-black text-4xl">{t('breeding:let-breed')}</TitleFontChanger>
        <p className="font-normal text-xl">{t('breeding:let-breed-des')}</p>
        <div className="w-fit">
        <Alert>{t('breeding:alert-text-1')}<LinkComponent href='#'>{t('breeding:text-link')}</LinkComponent>{t('breeding:alert-text-2')}</Alert>
        </div>
      </div>
      <div className="flex flex-col  gap-4">
        <Image src={egg} alt="egg" className="rounded-xl"/>
        <TitleFontChanger className="text-black text-4xl">{t('breeding:countdown')}</TitleFontChanger>
        <p className="font-normal text-xl">{t('breeding:hatch-countdown')}</p>
      </div>
    </div>
  )
}