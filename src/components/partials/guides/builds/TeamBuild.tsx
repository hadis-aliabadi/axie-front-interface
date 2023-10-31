import { BoldableWrapper, TitleFontChanger, YellowMenu } from '@/components/core';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export const TeamBuild = () =>{
  const {t}=useTranslation()
  return(
    <div className='flex items-center justify-center mt-16 max-w-[calc(100%+32px)]  '>
      {t('builds:team-build-data', {
        returnObjects: true,
        }).map((item,index)=>(
          <div className='flex flex-wrap gap-20'>
            <div className='flex flex-col gap-6 lg:max-w-[500px]'>
              <div>
                <TitleFontChanger className='text-black text-3xl'>
                  {item.rage_build_title}
                </TitleFontChanger>
                <p className='text-xl font-normal'>{item.rage_build}</p>
              </div>
              <p className='font-bold'>{item.rationale}</p>
              <div className='flex flex-col gap-2 ml-6 text-black'>
                <YellowMenu>
                  {item.rationale_part_1}
                </YellowMenu>
                <YellowMenu>
                  {item.rationale_part_2}
                </YellowMenu>
                <YellowMenu>
                  {item.rationale_part_3}
                </YellowMenu>
              </div>
              <p className='font-bold'>{item.strong_against}</p>
              <div className='flex flex-col gap-2 ml-6 text-black'>
                <YellowMenu className='bg-white'>
                  {item.strong_against_part_1}
                </YellowMenu>
                <YellowMenu className='bg-white'>
                  {item.strong_against_part_2}
                </YellowMenu>
              </div>
              <p className='font-bold'>{item.weak_against}</p>
              <div className='flex flex-col gap-2 ml-6 text-black'>
                <YellowMenu className='bg-white'>
                  {item.weak_against_part_1}
                </YellowMenu>
                <YellowMenu className='bg-white'>
                  {item.weak_against_part_2}
                </YellowMenu>
              </div>
            </div>
            <div className=' '>
              <div className='rounded-2xl overflow-hidden max-w-[100%]'>
                <Image src={`/${item.image}`} alt='rage' width={500} height={100} />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}