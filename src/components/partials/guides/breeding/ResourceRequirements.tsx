import { Alert, LinkComponent, TitleFontChanger, YellowMenu } from "@/components/core";
import { useTranslation } from "next-i18next";

export const ResourceRequirements = () =>{
  const {t}=useTranslation();
  return(
    <div className="flex flex-wrap gap-4">
      <div className="lg:max-w-[50%] flex flex-col gap-8">
        <TitleFontChanger className="text-black text-4xl">{t('breeding:resource-requirements')}</TitleFontChanger>
        <p className="text-xl font-normal">{t('breeding:text-1')}</p>
        <p className="text-xl font-normal">{t('breeding:text-2')}<LinkComponent href='/#'>{t('breeding:text-link-2')}</LinkComponent>{t('breeding:text-3')}</p>
      </div>
      <div className="flex flex-col gap-2 ">
        <p className="font-bold">{t('breeding:SLP-and-AXS')}</p>
        <YellowMenu className="text-black">{t('breeding:slp')}<LinkComponent href='/#'>{t('breeding:text-link-3')}</LinkComponent>{t('breeding:slp-2')}<LinkComponent href='/#'>{t('breeding:text-link-4')}</LinkComponent></YellowMenu>
        <YellowMenu className="text-black">{t('breeding:axs')}<LinkComponent href='/#'>{t('breeding:text-link-4')}</LinkComponent></YellowMenu>
      </div>
    </div>
  );
};