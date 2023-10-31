import { TextBox, TitleFontChanger, Tooltip } from "@/components/core";
import { useTranslation } from "react-i18next"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { IPotentialData } from "@/components/interface/characters";
import { StaticImageData } from 'next/image';

interface ICharacteristicsProps {
  jsonFile:string;
  images: [StaticImageData, StaticImageData]
}

export const Characteristics = ({jsonFile,images}:ICharacteristicsProps) => {
  const {t}=useTranslation();

async function fetchData() {
  try {
    const data:IPotentialData[] = await t(`${jsonFile}:potential-data`, {
      returnObjects: true,
    });
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

  const [data, setData] = useState<IPotentialData[]>([]);

  useEffect(() => {
    fetchData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);
console.log(data)

  return (
    <section className="md:max-w-900 sm:max-w-600 sm:px-24 w-full mx-auto box-border block px-16">
      <section className="flex flex-wrap justify-between mx-auto px-4 w-[calc(100%+64px)] gap-8" >
        <div className="flex flex-col gap-2 xl:order-1  order-2 ">
          <div className="flex flex-col gap-2 ">
            <TitleFontChanger>
              <p className="text-2xl">{t(`${jsonFile}:class-title`)}</p>
            </TitleFontChanger>
            <p>{t(`${jsonFile}:class`)}</p>
          </div>
          <div className="flex flex-col gap-2">
            <TitleFontChanger>
              <p className="text-2xl">{t(`${jsonFile}:role-title`)}</p>
            </TitleFontChanger>
            <p>{t(`${jsonFile}:role`)}</p>
          </div>
          <div className="flex flex-col gap-2">
            <TitleFontChanger>
              <p className="text-2xl">{t(`${jsonFile}:specialties`)}</p>
            </TitleFontChanger>
            <div className="px-4 flex-cols ">
              <div className="flex items-baseline gap-2">
                <i className="fa-solid fa-play text-pink"></i>
                <p>{t(`${jsonFile}:specialties-1`)}</p>
              </div>
              <div className="flex items-baseline gap-2 my-2">
                <i className="fa-solid fa-play text-pink"></i>
                <p>{t(`${jsonFile}:specialties-2`)}</p>
              </div>
              <div className="flex items-baseline gap-2">
                <i className="fa-solid fa-play text-pink"></i>
                <p>{t(`${jsonFile}:specialties-3`)}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-2">
            <TitleFontChanger>
              <p className="text-2xl">{t(`${jsonFile}:potential-points`)}</p>
            </TitleFontChanger>
            <div className="flex text-center gap-2 font-bold">
             {data.map((item, index) => (
                <div className="flex-cols  gap-2" key={index}>
                  <Tooltip
                    render={() => (
                      <Image src={`${item.img}`} alt="plant" width={40} height={40} />
                    )}
                    tooltipText={item.tooltip}
                    className="!w-20"
                  />
                  <p>{item.num}</p>
                </div>
              ))}
            </div>
          </div>
        </div> 

        <div className="relative flex flex-col items-end gap-16 xl:order-2 lg:order-1">
          <Image src={images[0]} alt="olek" width={340}/>
          <div className="absolute -top-8 z-2">
            <Image src={images[1]} alt="plant" width={60}/>
          </div>
          <div className="flex flex-col gap-4 font-medium">
            <TextBox className="bg-white flex flex-col items-center border border-introText !p-2 max-w-[340px]">
              <TitleFontChanger>
                <p className='font-medium text-[28px]'>{t(`${jsonFile}:name`)}</p>
              </TitleFontChanger>
            </TextBox>
            <div className="text-center">
              <p className="max-w-[340px]">{t(`${jsonFile}:about`)}</p>
            </div>
          </div>
        </div>

        <div className="xl:max-w-[350px] lg:w-full font-medium  order-3  ">
          <div className="">
            <TitleFontChanger>
              <p className="text-2xl">{t(`${jsonFile}:story`)}</p>
            </TitleFontChanger>
            <div className="flex flex-col gap-3 max-h-[500px] overflow-y-auto scrollbar">
              <p>{t(`${jsonFile}:story-part-1`)}</p>
              <p>{t(`${jsonFile}:story-part-2`)}</p>
              <p>{t(`${jsonFile}:story-part-3`)}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}


