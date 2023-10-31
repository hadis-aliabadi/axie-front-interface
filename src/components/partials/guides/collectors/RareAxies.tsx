import { BoldableWrapper, LinkComponent, TitleFontChanger } from "@/components/core";
import { ICollectors } from "@/components/interface";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from 'react';

export const RareAxies = () =>{
  const { t } = useTranslation();

  async function fetchData() {
    try {
      const data:ICollectors[] = await t(`collectors:cards_data`, {
        returnObjects: true,
      });
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  
  const [data, setData] = useState<ICollectors[]>([]);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(-1);

  useEffect(() => {
    fetchData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

 

  return (
    <div className="flex flex-wrap justify-between gap-8 mt-44">
      {data.map((item, index) => (
        <LinkComponent href={item.link} key={index}>
          <div 
            onMouseEnter={() => setHoveredCardIndex(index)}
            onMouseLeave={() => setHoveredCardIndex(-1)}
          >
            <BoldableWrapper 
              className="border border-1 rounded-lg border-whitesmoke hover:border-black lg:w-[360px] p-2 flex flex-col items-center gap-8"
            >
              <div className="flex flex-col  items-center gap-4">
                <div className=" ">
                  <Image src={item.image} alt="image" width={200} height={200}/>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <TitleFontChanger className="text-black text-3xl">{item.title}</TitleFontChanger>
                  <p className="font-normal text-center">{item.text}</p>
                </div>
              </div>
              <div className="flex rounded-lg overflow-hidden">
                <div className="flex gap-2 px-2 py-1 bg-darkslategray">
                  <p className="text-white">{item.total}</p>
                  <p className="text-white font-bold">{item.range}</p>
                </div>
                {hoveredCardIndex === index && (
                  <div className="transition-all duration-700 ease-out">
                    <div className="flex items-center gap-2 px-2 py-1 bg-tomato/20 h-[100%]">
                      <p className="font-bold text-xs">{item.browse}</p>
                      <i className="fa-solid fa-play text-pink"></i>
                    </div>
                  </div>
                )}
              </div>
            </BoldableWrapper>
          </div>
        </LinkComponent>
      ))}
    </div>
  );
}
