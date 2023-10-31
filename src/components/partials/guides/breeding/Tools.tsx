import { BoldableWrapper, TitleFontChanger, YellowButton } from "@/components/core"
import Image from "next/image"
import tools from 'public/img/jpeg/tools.jpg'



import { useTranslation } from "next-i18next"
import { IBreeding } from "@/components/interface"

export const Tools = () =>{
  const {t}=useTranslation();
  return(
    <div >
      <div className="flex flex-wrap gap-8">
        <div>
          <Image src={tools} alt="tools" width={400} height={400}/>
        </div>
        <div className="lg:max-w-[60%] flex flex-col gap-8 ">
          <TitleFontChanger className="text-black text-4xl">{t('breeding:helpful-tools')}</TitleFontChanger>
          <p className="text-xl font-normal">{t('breeding:helpful-text-1')}</p>
          <p className="text-xl font-normal">{t('breeding:helpful-text-2')}</p>
        </div>
      </div>
      <div className="flex flex-col gap-12 mt-20">
        {t<string,IBreeding[]>('breeding:tools_data',
          {
            returnObjects: true,
          }).map((item,index)=>(
            <div className="flex-none  lg:flex items-center justify-center gap-8">
              <BoldableWrapper>
                <Image src={`/${item.pic}`} alt="table" width={100} height={100}/>
              </BoldableWrapper>
              <div className="">
                <TitleFontChanger className="text-black text-4xl">{item.title}</TitleFontChanger>
                <p className="font-normal text-xl mt-2">{item.text}</p>
              </div>
              <YellowButton className="text-center gap-2 mt-4">{item.btn}<i className="fa-solid fa-play text-pink"></i></YellowButton>
            </div>
          ))
        }
      </div>
    </div>
  )
}