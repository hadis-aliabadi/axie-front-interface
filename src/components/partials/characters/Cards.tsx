import { Card, TitleFontChanger, Tooltip } from "@/components/core";
import { WhiteBadge } from "@/components/core/WhiteBadge";
import { ICard } from "@/components/interface";
import { IBadgeData } from "@/components/interface/characters";
import { useTranslation } from 'next-i18next';

export const Cards = ({jsonFile}:{jsonFile:string}) =>{
  const {t}=useTranslation();
  const colores = [ 'text-sandybrown','text-indianred','text-teal','text-darkcyan'];
  const colores_2=['text-limegreen','text-orangered']
  return(
    <div className="mt-20 ">
      <TitleFontChanger className="flex justify-center mb-4 text-3xl">
        <p>{t(`${jsonFile}:cards`)}</p>
      </TitleFontChanger>
      <div className="mx-auto max-w-[200px] sm:flex justify-center  gap-4 mb-24">
        <div className="flex justify-center">
          <WhiteBadge className=" ">
            <div className="flex mx-1 gap-2 ">
              <p className="text-introTitle text-xs font-extrabold">{t(`${jsonFile}:status`)}</p>
              {t<string,IBadgeData[]>(`${jsonFile}:badge-data`, {
                returnObjects: true,
              }).map((item, index) => (
                <Tooltip
                  render={() => (
                    <span className={`flex items-center gap-1 text-xs ${colores[index]}`} >
                      <i className={`fa-solid ${item.icon}`}></i>
                      <p className={`${colores[index]} text-xs font-extrabold`}>{item.rate}</p>
                    </span>
                  )}
                  tooltipText={item.tooltip}
                  className="!w-20"
                  key={index}
                />
            ))}
          </div>
          </WhiteBadge>
        </div>
        <div className="flex justify-center">
          <WhiteBadge className="flex justify-center mt-4 sm:mt-0">
            <div className="flex mx-1 gap-2 ">
              <p className="text-introTitle text-xs font-extrabold">{t(`${jsonFile}:tag`)}</p>
              {t<string,IBadgeData[]>(`${jsonFile}:badge-data-2`, {
               returnObjects: true,
              }).map((item, index) => (
                <Tooltip
                  render={() => (
                    <span className={`flex items-center gap-1 text-xs ${colores_2[index]}`}>
                      <i className={`fa-solid ${item.icon}`}></i>
                      <p className={`${colores_2[index]} text-xs font-extrabold`}>{item.rate}</p>
                    </span>
                  )}
                  tooltipText={item.tooltip}
                  className="!w-24"
                  key={index}
                />
              ))}
            </div>
          </WhiteBadge>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:justify-between xl:gap-8  justify-items-center   gap-4 m-16 ">
          {t<string, ICard[]>(`${jsonFile}:cards_data`, {
            returnObjects: true,
          }).map((item, index) => (
            <div className="scale-150 " key={index}>
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
              className='scale-110 hover:scale-125 hover:z-50 hover:duration-200'
            />
            </div>
          ))}
        </div>
    </div>
  )
}