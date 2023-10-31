import { useTranslation } from 'next-i18next'
import { TitleFontChanger } from "@/components/core";
import Image from "next/image";
import collecting from "public/img/jpeg/collecting.jpg"
export const RareDescription = () =>{
  const { t } = useTranslation();
  return (
    <div className='pt-44 flex flex-wrap justify-center gap-16 w-[calc(100% + 48px)]'>
      <div className=' lg:w-2/3 lg:max-w-[50%]'>
        <div className='flex flex-col gap-6 font-normal text-xl'>
          <TitleFontChanger className='text-4xl text-black'>{t('collectors:Rare-Axies')}</TitleFontChanger>
          <p>{t('collectors:text-1')}</p>
          <p>{t('collectors:text-2')}</p>
        </div>
      </div>
      <div className='p-'>
        <Image src={collecting} alt="collector" width={300} height={300}/>
      </div>
    </div>
  );
};