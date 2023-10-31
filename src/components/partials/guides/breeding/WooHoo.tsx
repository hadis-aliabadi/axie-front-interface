import { TitleFontChanger, YellowMenu } from "@/components/core";
import Image from "next/image";
import breeding from 'public/img/jpeg/breeding-2.jpg'
import { useTranslation } from "next-i18next";
export const WooHoo = () =>{
  const {t} = useTranslation();
  return (
    <div className="flex flex-wrap gap-8 w-[calc(100% + 48px)] ">
      <div className="xl:order-1 order-2 lg:max-w-[60%] flex flex-col gap-8">
        <div>
          <TitleFontChanger className="text-black text-4xl ">{t('breeding:woohoo')}</TitleFontChanger>
          <p className="mt-8 font-normal text-xl">{t('breeding:woohoo-des')}</p>
        </div>
        <div>
          <TitleFontChanger className="text-black text-lg">{t('breeding:limitation')}</TitleFontChanger>
          <div className="pl-8 pt-4 text-black">
            <YellowMenu >{t('breeding:limitation-1')}</YellowMenu>
            <YellowMenu className="my-2">{t('breeding:limitation-2')}</YellowMenu>
            <YellowMenu>{t('breeding:limitation-3')}</YellowMenu>
          </div> 
        </div>
        <p className="text-xs font-normal text-gray">{t('breeding:warning')}</p>
      </div>
      <div className="xl:order-2 order-1 ">
        <Image src={breeding} alt="breeding" width={430} height={430} />
      </div>
    </div>
  );
};